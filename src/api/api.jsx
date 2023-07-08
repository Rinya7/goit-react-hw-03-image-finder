import axios from 'axios';

export const getFromApi = async (searchWord, page) => {
  axios.defaults.baseURL = `https://pixabay.com/api/?q=${searchWord}&page=${page}&key=36710597-094c261ab2f4768979a06f3db&image_type=photo&orientation=horizontal&per_page=36`;

  const { data } = await axios();
  console.log('data', data);

  return data;
};
