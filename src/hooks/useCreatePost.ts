import {useMutation} from '@tanstack/react-query';
import services from '../services';
import {
  CreatePostError,
  CreatePostResponse,
  PostItem,
} from '../models/Posts.types';

interface MutationFnParams {
  body: PostItem;
}
interface HookParams {
  onSuccess?: (data: CreatePostResponse) => void;
  onError?: (error: CreatePostError) => void;
}
const useCreatePost = (params?: HookParams) => {
  const mutation = useMutation<
    CreatePostResponse,
    CreatePostError,
    MutationFnParams
  >({
    mutationFn: async mutationFnParam => {
      const response = await services.post.createPost.cratePosts(
        mutationFnParam.body,
      );
      return response.data;
    },
    onSuccess: data => {
      params?.onSuccess?.(data);
    },
    onError: error => {
      params?.onError?.(error);
    },
  });

  return {
    mutation,
  };
};

export default useCreatePost;
