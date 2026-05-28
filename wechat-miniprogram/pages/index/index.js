Page({
  openFlash() {
    wx.navigateTo({ url: '/pages/flash/flash' })
  },
  openSearch() {
    wx.navigateTo({ url: '/pages/search/search' })
  },
  copyLink() {
    wx.setClipboardData({
      data: 'https://tongchen779.github.io/dansk/',
      success() {
        wx.showToast({ title: '链接已复制，请在浏览器中打开', icon: 'none', duration: 2500 })
      }
    })
  }
})
