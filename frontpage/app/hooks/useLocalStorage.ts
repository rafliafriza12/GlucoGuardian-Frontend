import { useState, useEffect } from 'react';

function useLocalStorageState<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(defaultValue);
  
  // Hanya berfungsi di client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = window.localStorage.getItem(key);
      if (storedValue !== null) {
        setState(JSON.parse(storedValue) as T);
      }
    }
  }, [key]);

  // Simpan state ke localStorage ketika ada perubahan state
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
