export async function loadId(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1");
    }, 10);
  });
}
