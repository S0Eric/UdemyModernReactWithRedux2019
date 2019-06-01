import axios from 'axios';

const KEY = 'AIzaSyC2k4GN_UImSsRv2_kFkiOcXpphMLw3FkY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
