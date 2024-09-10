import {AxiosError} from 'axios';

export interface PostItem {
  title: string;
  body: string;
  userId: number;
  id?: number;
}

export type CreatePostResponse = PostItem;

export type CreatePostError = AxiosError;
