export function loadData(key: string): Object {
  const stringifiedData = localStorage.getItem(key);
  return JSON.parse(stringifiedData);
}

export function updateData(key: string, data: Object | string | boolean): Boolean {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
  return true;
}

export function clearStorage(): Boolean {
  localStorage.clear();
  return true;
}

export function removeState(key: string): Boolean {
  localStorage.removeItem(key);

  return true;
}
