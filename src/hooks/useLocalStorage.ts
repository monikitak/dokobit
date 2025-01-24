import { CommentProps } from "../types/types";

const useLocalStorage = () => {
  const saveToLocalStorage = (key: string, value: string | CommentProps[]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getFromLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  return { saveToLocalStorage, getFromLocalStorage };
};

export default useLocalStorage;
