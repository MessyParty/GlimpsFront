// import '@/styles/globals.css'
import { useState } from "react";
import type { AppProps } from "next/app";
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  // ssr 적용시를 위한 useState
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <CookiesProvider>
            <Component {...pageProps} />
          </CookiesProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
