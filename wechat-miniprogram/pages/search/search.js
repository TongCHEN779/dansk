const app = getApp()

const TYPE_LABELS = {
  adj:   'Adjektiver',
  sub:   'Substantiver',
  verb:  'Verber',
  adv:   'Adverbier',
  fast:  'Faste Udtryk',
  konj:  'Konjunktioner',
  praep: 'Præpositioner',
}

let _audio = null
function playMp3(url) {
  if (!url) return
  if (_audio) { _audio.stop(); _audio.destroy() }
  _audio = wx.createInnerAudioContext()
  _audio.obeyMuteSwitch = false   // play even if phone is on silent
  _audio.src = url
  _audio.onError((res) => {
    console.error('Audio error:', res.errMsg, 'url:', url)
    wx.showToast({ title: '音频加载失败: ' + res.errMsg, icon: 'none', duration: 3000 })
  })
  _audio.play()
}

Page({
  data: {
    query: '',
    types: {
      adj: true, sub: true, verb: true,
      adv: true, fast: true, konj: true, praep: true
    },
    typeList: [],   // [{key, label, on}] for rendering chips
    results: [],
    status: 'loading',
  },

  onLoad() {
    // Build chip list once
    this.setData({
      typeList: Object.keys(TYPE_LABELS).map(k => ({
        key: k, label: TYPE_LABELS[k], on: true
      }))
    })
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

  onInput(e) {
    const query = e.detail.value
    this.setData({ query })
    this._search(query)
  },

  onClear() {
    this.setData({ query: '', results: [] })
  },

  toggleType(e) {
    const key = e.currentTarget.dataset.key
    const types = Object.assign({}, this.data.types)
    types[key] = !types[key]
    const typeList = this.data.typeList.map(t =>
      t.key === key ? Object.assign({}, t, { on: types[key] }) : t
    )
    this.setData({ types, typeList })
    this._search(this.data.query)
  },

  _search(query) {
    if (!query.trim()) { this.setData({ results: [] }); return }
    const active = Object.keys(this.data.types).filter(k => this.data.types[k])
    const q = query.toLowerCase()
    const results = app.globalData.allWords
      .filter(w => active.includes(w.type))
      .filter(w =>
        (w.dansk   && w.dansk.toLowerCase().includes(q)) ||
        (w.engelsk && w.engelsk.toLowerCase().includes(q))
      )
      .slice(0, 60)
    this.setData({ results })
  },

  playAudio(e) {
    playMp3(e.currentTarget.dataset.mp3)
  },
})
