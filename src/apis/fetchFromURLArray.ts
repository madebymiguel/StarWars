export default async function fetchFromURLArray(urls: string[]) {
  const urlsToFetch = [];
  for (let i = 0; i < urls.length; i++) {
    urlsToFetch.push(fetch(urls[i]));
  }

  const responses = await Promise.all(urlsToFetch);
  return await Promise.all(responses.map((response) => response.json()));
}
