import {
  QueryClient,
  type QueryClientConfig,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";

const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

export default function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient(queryClientOption));

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
}
