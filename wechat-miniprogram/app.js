const VOCAB_URL = 'https://tongchen779.github.io/dansk/vocabulary-index.json'

App({
  globalData: {
    allWords: [],
    loaded: false,
    loadError: false,
  },

  onLaunch() {
    this.loadVocabulary()
  },

  loadVocabulary() {
    wx.request({
      url: VOCAB_URL,
      success: (res) => {
        if (Array.isArray(res.data)) {
          this.globalData.allWords = res.data
          this.globalData.loaded = true
        } else {
          this.globalData.loadError = true
        }
      },
      fail: () => {
        this.globalData.loadError = true
      }
    })
  }
})
