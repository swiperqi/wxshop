// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)

  const {a, b} = event
  const {OPENID, APPID} = cloud.getWXContext()
  const sum = a + b

  return {
    OPENID,
    APPID,
    sum
  }
}
