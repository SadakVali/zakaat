import { standardizedApiError } from "../api-error-success-handlers/error";

type withServerActionAsyncCatcherType<T, R> = (args: T) => Promise<R>;

// export function withServerActionAsyncCatcher<T, R>(
//   serverAction: withServerActionAsyncCatcherType<T, R>
// ): withServerActionAsyncCatcherType<T, R> {
//   return async (args: T): Promise<R> => {
//     try {
//       return await serverAction(args);
//     } catch (error) {
//       return standardizedApiError(error) as R;
//     }
//   };
// }

export function withServerActionAsyncCatcher<T, R>(
  serverAction: withServerActionAsyncCatcherType<T, R>
) {
  return async (args: T): Promise<R> => {
    try {
      return await serverAction(args);
    } catch (error) {
      return standardizedApiError(error) as R;
    }
  };
}
