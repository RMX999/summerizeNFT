import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

export default function MyApp({ Component, pageProps }: AppProps) {

  // const desiredChainId = 80001;

  return (
    // <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
      // {/* </ThirdwebProvider> */}
  );
}