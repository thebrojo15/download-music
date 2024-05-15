import axios from 'axios';
import fs from 'fs';
const { google } = JSON.parse(fs.readFileSync('./config.json'));
const songname = JSON.parse(fs.readFileSync('./songs.json'));

const searchResult = [];
let number = 0;

do {
const search = await axios( {
    url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${songname[number]}&key=${google.api_key}`,
    method: "get",
    headers: {
        'Accept': 'application/json',
      }
  });

const searchTracks = search.data;
searchResult.push(...searchTracks.items);
number++;
console.log(number);
console.log(songname.length)

} while (number < songname.length);

fs.writeFileSync("./search-result.json", JSON.stringify(searchResult, null, 2));