export const saveItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getItem = key => {
  return JSON.parse(localStorage.getItem(key));
};
export const deleteItem = key => {
  localStorage.removeItem(key);
};
export const itemExists = key => {
  return !!getItem(key);
};
