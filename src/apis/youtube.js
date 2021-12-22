import axios from 'axios';

const KEY = 'AIzaSyCBPLNULGeHCuq5LEfm1x_J5UUEUftHK8k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 15,
    key: KEY,
  },
});
