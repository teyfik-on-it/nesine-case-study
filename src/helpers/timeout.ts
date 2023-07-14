export class TimeoutError extends Error {}

export default function timeout<T>(
  promise: Promise<T>,
  duration: number,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new TimeoutError("İşlem zaman aşımına uğradı")),
      duration,
    );

    promise
      .then(resolve)
      .catch(reject)
      .then(() => clearTimeout(timer));
  });
}
