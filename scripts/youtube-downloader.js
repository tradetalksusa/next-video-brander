const fs = require('fs');
const ytdl = require('ytdl-core');

const videos = [
  { "name": "Call of Duty: End of Service", "youtubeUrl": "https://www.youtube.com/watch?v=xLlc0QrLgJ4", "ID": "xLlc0QrLgJ4" },
  { "name": "Transitioning out of the Military into the Skilled Trades", "youtubeUrl": "https://www.youtube.com/watch?v=_2MDazO7jt4", "ID": "_2MDazO7jt4" },
  { "name": "Carpentry", "youtubeUrl": "https://www.youtube.com/watch?v=mvpHFSPCh7I", "ID": "mvpHFSPCh7I" },
  { "name": "Welder - The 'Torch' bearer of the skilled trades", "youtubeUrl": "https://www.youtube.com/watch?v=evafrp_QEkY", "ID": "evafrp_QEkY" },
  { "name": "Electricians and Project Managers (Veteran)", "youtubeUrl": "https://www.youtube.com/watch?v=iTrvRBmP1GY", "ID": "iTrvRBmP1GY" },
  { "name": "Roofing Ninja - View from the top", "youtubeUrl": "https://www.youtube.com/watch?v=qszF7cYJbCA", "ID": "qszF7cYJbCA" },
  { "name": "Construction Technologist", "youtubeUrl": "https://www.youtube.com/watch?v=xwuW0IB20JU", "ID": "xwuW0IB20JU" },
  { "name": "Plumbing - Make money and have lots of job security", "youtubeUrl": "https://www.youtube.com/watch?v=zAeF2GNEpSI", "ID": "zAeF2GNEpSI" },
  { "name": "Demolition (Tear things down to make them beautiful again)", "youtubeUrl": "https://www.youtube.com/watch?v=TsFu_FEGVi0", "ID": "TsFu_FEGVi0" },
  { "name": "Carpentry (Veteran)", "youtubeUrl": "https://www.youtube.com/watch?v=pfGAOJdO3UA", "ID": "pfGAOJdO3UA" },
  { "name": "HVAC and the Mechanical Trades", "youtubeUrl": "https://www.youtube.com/watch?v=78CtMRsFhQY", "ID": "78CtMRsFhQY" },
  { "name": "The 'Real' Game of Life by TradeTalksUSA.org", "youtubeUrl": "https://www.youtube.com/watch?v=_sFi9xcyslA", "ID": "_sFi9xcyslA" },
  { "name": "Jenn the Builder - Entrepreneur", "youtubeUrl": "https://www.youtube.com/watch?v=vxC2K2sTSLg", "ID": "vxC2K2sTSLg" },
  { "name": "Existential Crisis - 4-Year & Technical College", "youtubeUrl": "https://www.youtube.com/watch?v=ojx0Ilr-5pY", "ID": "ojx0Ilr-5pY" },
  { "name": "Electric Clyde (Being an Electrician is a power move)", "youtubeUrl": "https://www.youtube.com/watch?v=s9JKWnCuWv4", "ID": "s9JKWnCuWv4" },
  { "name": "All We Do Is Build (P-Trap & Tech College feat. Lou da Plumber, General Contracta, & Drone Dougg)", "youtubeUrl": "https://www.youtube.com/watch?v=L_zEhqZJPwA", "ID": "L_zEhqZJPwA" },
]

videos.forEach(async (video) => {
  await getInfo(video);
  saveVideo(video);
})

function saveVideo(video) {
  console.log(`Saving video ${video.youtubeUrl}`);
  let stream = ytdl(video.youtubeUrl, { filter: format => format.container === 'mp4' && format.hasAudio && format.hasVideo })
  stream.on('progress', console.log)
  stream.pipe(fs.createWriteStream(`./videos/${video.ID}.mp4`));
}

async function getInfo(video) {
  console.log(`Getting info for ${video.youtubeUrl}`);
  let info = await ytdl.getInfo(video.youtubeUrl);
  let data = JSON.stringify(info, function replacer(key, value) { return value })
  // ensure /youtube-video-data exists in top level directory
  fs.writeFileSync(`./videos/${video.ID}.json`, data, { flag: "w" });
}

