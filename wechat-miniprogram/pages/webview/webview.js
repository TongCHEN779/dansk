Page({
  data: {
    url: ''
  },
  onLoad(options) {
    const url   = decodeURIComponent(options.url   || '')
    const title = decodeURIComponent(options.title || 'Lær Dansk')
    wx.setNavigationBarTitle({ title })
    this.setData({ url })
  }
})
