export function useLocalStorage(key: string) {
  function setLocalStorageItem(value: unknown) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  function getLocalStorageItem() {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log(error);
    }
  }

  return { setLocalStorageItem, getLocalStorageItem };
}
