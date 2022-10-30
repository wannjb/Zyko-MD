import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    let info = fs.readFileSync('./mp3/Bot.opus')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/wannzx_133',
    mediaType: 2, 
    description: sgc,
    title: '≪ Jᴏɪɴ Sɪɴɪ Cᴜʏ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/0c061391a4f44428f8f0e.jpg")).buffer(),
    sourceUrl: sgc
  }
  } }) 
          }
handler.customPrefix = /^(bot|robot|p|tes|tes123|tes1|tes12|woy|bull|zyko|bul|oii|.)$/i
handler.command = new RegExp

export default handler
