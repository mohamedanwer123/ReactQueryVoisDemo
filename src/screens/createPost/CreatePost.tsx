import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './CreatePost.styles';
import useCreatePost from '../../hooks/useCreatePost';

const Posts = (): React.JSX.Element => {
  const {mutation} = useCreatePost({
    onSuccess(data) {
      console.log('onSuccess ', data);
    },
    onError(error) {
      console.log('onError ', error);
    },
  });

  console.log('mutation ', mutation);

  return (
    <View style={styles.container}>
      {mutation.isPending ? (
        <Text>Loading</Text>
      ) : mutation.isError ? (
        <Text>Error</Text>
      ) : (
        mutation.isSuccess && <Text>Success</Text>
      )}

      <TouchableOpacity
        style={styles.refetchButton}
        onPress={async () => {
          try {
            const result = await mutation.mutateAsync({
              body: {title: 'title', body: 'body', userId: 10},
            });
            console.log('ONSUCESS ', result);
          } catch (error) {
            console.log('ONERROR ', error);
          }
        }}>
        <Text style={styles.refetchButtonText}>Create post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Posts;
