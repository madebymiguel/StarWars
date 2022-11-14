export default function getPathFromURL(url: string) {
  const remove = "https://swapi.dev/api";
  const remainingPath = url.replace(remove, "");
  return remainingPath;
}
