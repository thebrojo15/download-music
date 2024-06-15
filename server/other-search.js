import ytsr from '@distube/ytsr';
import fs from 'fs';
const songname = JSON.parse(fs.readFileSync('./songs.json'));

const searchResult = [];
let number = 0;

do {
    const search = await ytsr(`${songname[number]}`, {safeSearch: true, limit: 1})
    let song = search.items[0];
    console.log('ID: ' + song.id); 
    const searchTracks = search.data;
    searchResult.push(...searchTracks.items[0]);
    number++;

} while (number < songname.length);

// ytsr(`${songname[number]}`, {safeSearch: true, limit: 1}).then(result =>{
//     let song = result.items[0];
//     console.log('ID: ' + song.id);

// });

// fs.writeFileSync("./search-result.json", JSON.stringify(searchResult, null, 2));

// const searchTracks = search.data;
// searchResult.push(...searchTracks.items[0]);
// number++;
// console.log(number);
// console.log(songname.length)