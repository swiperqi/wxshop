wx.cloud.callFunction({
  name: 'sum',
  data: {
    a: 1,
    b: 2,
  },
  success: function(res) {
    console.log(res.result.sum)
  },
  fail: function(err) {
    console.log(err)
  }
})