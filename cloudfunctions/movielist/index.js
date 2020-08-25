// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {

  try {
    return await rp(`https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=${event.start}&count=${event.count}&apiKey=054022eaeae0b00e0fc068c0c0a2102a`)
  } catch (error) {
    console.log(error)
  }

}