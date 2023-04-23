import { useEffect, useState } from 'react';
import { Image } from 'react-native';

const useRatio = (image: string) => {
  const [ratio, setRatio] = useState(1);
  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => {
        setRatio(width / height);
      });
    }
  }, [image]);

  return ratio;
};

export default useRatio;
