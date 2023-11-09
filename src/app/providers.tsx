"use client";

import * as React from "react";
import { WagmiConfig } from "wagmi";
import { Provider as ReduxProvider } from "react-redux";

import { config } from "@/lib/wagmi";
import { reduxStore } from "@/lib/redux";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <ReduxProvider store={reduxStore}>
      <WagmiConfig config={config}>{mounted && children}</WagmiConfig>
    </ReduxProvider>
  );
}
