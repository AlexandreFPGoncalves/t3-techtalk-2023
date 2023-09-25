import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Navbar } from "@/components";
import { api } from "@/utils/api";
import { Provider } from "react-wrap-balancer";

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center bg-bg text-white shadow-bgShadow">
          <Component {...pageProps} />
        </main>
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
