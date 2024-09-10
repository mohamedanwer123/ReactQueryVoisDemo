import axios, {AxiosResponse} from 'axios';
import {PostItem} from '../../models/Posts.types';

const cratePosts = (body: PostItem): Promise<AxiosResponse> => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', body);
};

export default {
  cratePosts,
};
