"use client";

import { UIStateProvider } from "../hooks/clientHooks/useUisState";

export default function Providers({ children }) {
    return (
        <UIStateProvider>
            {children}
        </UIStateProvider>
    );
}