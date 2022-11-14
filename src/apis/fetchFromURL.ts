export default async function fetchFromURl(url: string) {
  const res = await fetch(url);
  const result = await res.json();
  return result;
}
