import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from "react";

function setCookie(cname: string, cvalue: string) {
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  let expires = "expires="+ d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.dataLayer && window.dataLayer.push({
      event: 'pageview'
    });

    setCookie("resolution", `${window.screen.width}x${window.screen.height}`)
  }, [])

  return <Component {...pageProps} />
}
