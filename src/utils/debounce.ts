/**
 * 
 * @param fn callback function
 * @param t time in milliseconds
 * @param args additional arguments which are passed through to the callback function
 * @returns delayed function
 */
export default function debounce(
  fn: CallableFunction,
  t: number,
  ...args: unknown[]
): () => void {
  let timeoutId: undefined | number;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), t);
  };
}
