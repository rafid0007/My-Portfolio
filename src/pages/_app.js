import { useEffect } from 'react';
import Router from 'next/router';
// Load DM Sans typeface
import 'typeface-dm-sans';

// Load other package css file
import 'rc-drawer/assets/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
