const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  config: {
    name: "lyrics",
    aliases: ['ly'],
    version: "1.0.5",
    author: "August Quinn | Ace",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Get lyrics from Google or Musixmatch."
    },
    longDescription: {
      vi: "",
      en: "Get song lyrics from Google or Musixmatch."
    },
    category: "music",
    guide: {
      en: "{pn}"
    }
  },
  
  onStart: async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const query = args.join(' ');

  if (!query) {
    api.sendMessage('Please provide a song name to get lyrics.', threadID, messageID);
    return;
  }

  try {
    const headers = { 'User-Agent': 'Mozilla/5.0' };
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}+lyrics`;
    const googleResponse = await axios.get(googleUrl, { headers });
    const $ = cheerio.load(googleResponse.data);
    const data = $('div[data-lyricid]');
    let lyrics, authors;

    if (data.length > 0) {
      const content = data.html().replace('</span></div><div.*?>', '\n</span>');
      const parse = cheerio.load(content);
      lyrics = parse('span[jsname]').text();
      authors = $('div.auw0zb').text().replace(/(\S+)\s*/g, '$1 ').trim();
    } else {
      const musixmatchUrl = `https://www.musixmatch.com/search/${encodeURIComponent(query)}`;
      const musixmatchResponse = await axios.get(musixmatchUrl, { headers });
      const mxmMatch = musixmatchResponse.data.match(/<a class="title" href="(.*?)"/);

      if (mxmMatch) {
        const mxmUrl = `https://www.musixmatch.com${mxmMatch[1]}`;
        const mxmResponse = await axios.get(mxmUrl, { headers });
        lyrics = cheerio.load(mxmResponse.data)('.lyrics__content__ok').text();
        authors = cheerio.load(mxmResponse.data)('.mxm-track-title__artist-link').text().replace(/(\S+)\s*/g, '$1 ').trim();
      }
    }

    if (lyrics && lyrics.trim() !== '') {
      api.sendMessage(lyrics, threadID, messageID);
    } else {
      api.sendMessage('Sorry, no result found.', threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage('An error occurred while fetching lyrics.', threadID, messageID);
  }
 }
};