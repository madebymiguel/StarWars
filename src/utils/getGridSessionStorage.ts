export default function getGridFromSessionStorage(name: string) {
  const serializedGridItems = sessionStorage.getItem(name);

  const gridSet: null | any[] =
    serializedGridItems === null ? null : JSON.parse(serializedGridItems);

  return gridSet;
}
