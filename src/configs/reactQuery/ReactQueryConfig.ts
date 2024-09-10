import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 5,
            retryDelay: 2000,
        }
    }
});

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       gcTime: 1000 * 60 * 60 * 24,
//       retry: 5,
//       // retryDelay: 1000,
//       // retryDelay: (attemptIndex: number) =>
//       //   Math.min(1000 * 2 ** attemptIndex, 30000),
//     },
//   },
// });

export default queryClient;
