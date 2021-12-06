import { useEffect, useState } from 'react';

function useKeyDown(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  const downHandler = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHanlder = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHanlder);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHanlder);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return keyPressed;
}

export default useKeyDown;
