import axios from 'axios';
import youtubedl from 'youtube-dl-exec'
import fs from 'fs';
const song = JSON.parse(fs.readFileSync('./search-result.json'));

const downloadResult = [];
let number = 0;

do {
const download = youtubedl(`https://www.youtube.com/watch?v=${song[number].id.videoId}`, {
    noCheckCertificates: true,
    x: true,
    audioFormat: 'mp3',
    path: "./downloads",
    audioQuality: 320,
    noWarnings: true,
    addHeader: ['referer:youtube.com', 'user-agent:googlebot']
  })

  number++;

} while (number < song.length);