export default function getIndexFromURL(url: string) {
  return url.replace(/[^0-9]/g, "");
}
