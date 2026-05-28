const app = getApp()
const BANK_KEY = 'flashBankV1'

function loadBank() {
  try { return wx.getStorageSync(BANK_KEY) || [] }
  catch (e) { return [] }
}
function saveBank(bank) {
  wx.setStorageSync(BANK_KEY, bank)
}
function bankKey(word) { return word.type + '|' + word.dansk }

let _audio = null
function playMp3(url) {
  if (!url) return
  if (_audio) { _audio.stop(); _audio.destroy() }
  _audio = wx.createInnerAudioContext()
  _audio.src = url
  _audio.play()
}

Page({
  data: {
    // card state
    phase: 'idle',      // 'idle' | 'question' | 'answer'
    card: null,
    showField: '',      // 'dansk' | 'ipa' | 'engelsk'
    userAnswer: '',
    isInBank: false,

    // filters
    types: { adj: true, sub: true, verb: true },
    useBankOnly: false,

    // bank panel
    bankWords: [],
    showBank: false,

    // load state
    status: 'loading',  // 'loading' | 'ready' | 'error'
  },

  onLoad() {
    this.setData({ bankWords: loadBank() })
    this._waitReady()
  },

  onUnload() {
    if (_audio) { _audio.destroy(); _audio = null }
  },

  _waitReady() {
    if (app.globalData.loaded) {
      this.setData({ status: 'ready' })
    } else if (app.globalData.loadError) {
      this.setData({ status: 'error' })
    } else {
      setTimeout(() => this._waitReady(), 300)
    }
  },

  /* ── filters ── */
  toggleType(e) {
    const t = e.currentTarget.dataset.type
    const types = Object.assign({}, this.data.types)
    types[t] = !types[t]
    this.setData({ types })
  },

  onBankModeChange(e) {
    this.setData({
      useBankOnly: e.detail.value,
      phase: 'idle', card: null, userAnswer: ''
    })
  },

  /* ── pool ── */
  _pool() {
    const active = Object.keys(this.data.types).filter(t => this.data.types[t])
    const src = this.data.useBankOnly ? loadBank() : app.globalData.allWords
    return src.filter(w => active.includes(w.type))
  },

  /* ── toggle Flash / Bingo ── */
  onToggle() {
    if (this.data.status !== 'ready') return
    if (this.data.phase === 'question') {
      this._showAnswer()
    } else {
      this._newCard()
    }
  },

  _newCard() {
    const pool = this._pool()
    if (!pool.length) {
      wx.showToast({
        title: this.data.useBankOnly
          ? '银行中没有词 — 先用 ☆ 保存几个'
          : '没有可用的词，请检查分类',
        icon: 'none', duration: 2500
      })
      return
    }
    const card = pool[Math.floor(Math.random() * pool.length)]
    const fields = ['dansk', 'ipa', 'engelsk']
    const showField = fields[Math.floor(Math.random() * fields.length)]
    const bank = loadBank()
    this.setData({
      phase: 'question', card, showField,
      userAnswer: '',
      isInBank: bank.some(w => bankKey(w) === bankKey(card))
    })
  },

  _showAnswer() {
    this.setData({ phase: 'answer' })
  },

  onAnswerInput(e) {
    this.setData({ userAnswer: e.detail.value })
  },

  /* ── mark ── */
  toggleMark() {
    const { card } = this.data
    if (!card) return
    let bank = loadBank()
    const key = bankKey(card)
    const idx = bank.findIndex(w => bankKey(w) === key)
    if (idx >= 0) {
      bank.splice(idx, 1)
    } else {
      bank.push(card)
    }
    saveBank(bank)
    this.setData({
      isInBank: idx < 0,
      bankWords: bank
    })
  },

  /* ── bank panel ── */
  toggleBankPanel() {
    this.setData({ showBank: !this.data.showBank })
  },

  removeWord(e) {
    const key = e.currentTarget.dataset.key
    const bank = loadBank().filter(w => bankKey(w) !== key)
    saveBank(bank)
    const { card } = this.data
    this.setData({
      bankWords: bank,
      isInBank: card ? bank.some(w => bankKey(w) === bankKey(card)) : false
    })
  },

  clearBank() {
    if (!this.data.bankWords.length) return
    wx.showModal({
      title: '确认清空',
      content: '清空所有保存的单词？',
      confirmColor: '#C60C30',
      success: (res) => {
        if (!res.confirm) return
        saveBank([])
        const { card } = this.data
        this.setData({ bankWords: [], isInBank: false })
      }
    })
  },

  /* ── audio ── */
  playCardAudio() {
    playMp3(this.data.card && this.data.card.mp3)
  },

  playBankAudio(e) {
    playMp3(e.currentTarget.dataset.mp3)
  },
})
