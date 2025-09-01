//import {SongModel, SongSchema} from './models/Song';

//const apiUrl: string = ''
/*
const testSong = new SongModel(
  {
    title: 'Greatest hits',
    description: 'My greatest songs of all time',
    artist: 'me',

  })
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(testSong)

};
*/
async function post()
{
  try {
    const response = await fetch('http://localhost:3000/api', requestOptions);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    /*
    const data = await response.json();
    console.log('User data:', data);
    return data;
    */
    console.log('created song');
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}


async function getAllSongs() {
  try {
    const response = await fetch('http://localhost:3000/api');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const test = JSON.parse(data);

    console.log('User data:', data);
    //return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

async function getSongById() {

}
