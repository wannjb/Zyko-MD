import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    
    let result = `⟐⟞⟚⟝⟮ *Title:* ⟯⟞⟚⟝⟐
┇⟣⟪ ${res.title} ⟫⟢
▥ ━┉┄┄┈┈ ▢

┇⟐⟞⟚⟝⟮ *Author* ⟯⟞⟚⟝⟐
▥ ━┉┄┄┈┈ ▢
${res.author}
◈ ━┉┈┄┈┈ ►`
    conn.sendButtonVid(m.chat, res.video, result, '_© Created by 𝗭𝘆𝗸𝗼𝗕𝗼𝘁𝘇-𝗠𝗗_', `Audio`, `.gettt ${args[0]}`, m)
}

handler.tags = ['downloader']
handler.command = /^(bismilahwrok)$/i

export default handler