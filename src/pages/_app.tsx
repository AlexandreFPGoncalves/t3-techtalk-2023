import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Navbar, TableOfContents } from "@/components";
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
        <main className="flex h-[200vh] flex-col items-center justify-center text-white shadow-bgShadow">
          <TableOfContents
            sections={[
              {
                title: "Teste 1",
                path: "#teste1",
                subsections: [
                  {
                    title: "Teste 2",
                    path: "#teste2",
                  },
                  {
                    title: "Teste 3",
                    path: "#teste3",
                  },
                ],
              },
              {
                title: "Teste 4",
                path: "#teste4",
                subsections: [
                  {
                    title: "Teste 5",
                    path: "#teste5",
                  },
                  {
                    title: "Teste 6",
                    path: "#teste6",
                  },
                ],
              },
            ]}
          />
          <Component {...pageProps} />
        </main>
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
