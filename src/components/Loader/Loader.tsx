'use client';

import { useMemo, useState } from 'react';

import Lottie from 'react-lottie';
import { useRecoilValue } from 'recoil';

import { LoaderAtom } from '../../state/LoaderState';

import { ILoader } from './types';

const Loader = ({ styleClass, height = 100 }: ILoader) => {
  const [animationData, setAnimationData] = useState(null);
  const loader = useRecoilValue(LoaderAtom);

  useMemo(() => {
    if (loader) {
      setAnimationData(JSON.parse(loader));
    }
  }, [loader]);

  return (
    <div className={styleClass}>
      <Lottie
        options={{
          animationData: animationData,
          autoplay: true,
        }}
        // width={'100%'}
        height={height}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default Loader;
