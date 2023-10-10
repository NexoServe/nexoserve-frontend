import Link from 'next/link';
import Lottie from 'react-lottie';

import { base } from '../../css/base';
import * as notFound from '../lottie/404.json';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Lottie
        options={{
          animationData: notFound,
          autoplay: true,
        }}
        width={'100%'}
        height={200}
      />

      <Link href="/">
        <a>Go back home</a>
      </Link>

      <div
        style={{
          marginTop: base(4),
        }}
      >
        If the error persists, call
        <a href="tel:(518) 888-0022"> (518) 888-0022</a>.
      </div>
    </div>
  );
};

export default NotFoundPage;
