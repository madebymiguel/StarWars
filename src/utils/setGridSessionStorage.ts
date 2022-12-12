export default function setGridFromSessionStorage(
  name: string,
  gridData: any[]
) {
  sessionStorage.setItem(name, JSON.stringify(gridData));
}
