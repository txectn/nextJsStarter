// "use client";

// import {
//     createContext,
//     useContext,
//     useState,
//     useCallback,
//     useMemo,
// } from "react";

// const UIStateContext = createContext(null);

// export function UIStateProvider({ children }) {
//     const [activeUIState, setActiveUIState] = useState(null);

//     const open = useCallback((name) => {
//         setActiveUIState(name);
//     }, []);

//     const close = useCallback((name) => {
//         setActiveUIState((prev) => {
//             if (name && prev !== name) {
//                 return prev;
//             }

//             return null;
//         });
//     }, []);

//     const toggle = useCallback((name) => {
//         setActiveUIState((prev) => (
//             prev === name ? null : name
//         ));
//     }, []);

//     const isOpen = useCallback((name) => {
//         return activeUIState === name;
//     }, [activeUIState]);

//     const value = useMemo(() => ({
//         activeUIState,
//         open,
//         close,
//         toggle,
//         isOpen,
//     }), [
//         activeUIState,
//         open,
//         close,
//         toggle,
//         isOpen,
//     ]);

//     return (
//         <UIStateContext.Provider value={value}>
//             {children}
//         </UIStateContext.Provider>
//     );
// }

// export function useUIState() {
//     const context = useContext(UIStateContext);

//     if (context === null) {
//         throw new Error(
//             "useUIState must be used inside UIStateProvider"
//         );
//     }

//     return context;
// }









































// "use client";

// import {
//     createContext,
//     useContext,
//     useState,
//     useCallback,
//     useMemo,
// } from "react";

// const UIStateContext = createContext(null);

// export function UIStateProvider({ children }) {
//     const [activeUIState, setActiveUIState] = useState(null);

//     const open = useCallback((name, data = null) => {
//         setActiveUIState({
//             name,
//             data,
//         });
//     }, []);

//     const close = useCallback((name) => {
//         setActiveUIState((prev) => {
//             if (name && prev?.name !== name) {
//                 return prev;
//             }

//             return null;
//         });
//     }, []);

//     const toggle = useCallback((name, data = null) => {
//         setActiveUIState((prev) => (
//             prev?.name === name
//                 ? null
//                 : { name, data }
//         ));
//     }, []);

//     const isOpen = useCallback((name) => {
//         return activeUIState?.name === name;
//     }, [activeUIState]);

//     const getData = useCallback((name) => {
//         return activeUIState?.name === name
//             ? activeUIState.data
//             : null;
//     }, [activeUIState]);

//     const value = useMemo(() => ({
//         activeUIState,
//         open,
//         close,
//         toggle,
//         isOpen,
//         getData,
//     }), [
//         activeUIState,
//         open,
//         close,
//         toggle,
//         isOpen,
//         getData,
//     ]);

//     return (
//         <UIStateContext.Provider value={value}>
//             {children}
//         </UIStateContext.Provider>
//     );
// }

// export function useUIState() {
//     const context = useContext(UIStateContext);

//     if (context === null) {
//         throw new Error(
//             "useUIState must be used inside UIStateProvider"
//         );
//     }

//     return context;
// }
































"use client";

import {
    createContext,
    useContext,
    useState,
    useCallback,
    useMemo,
} from "react";

const UIStateContext = createContext(null);

export function UIStateProvider({ children }) {
    const [uiStates, setUIStates] = useState({});

    const open = useCallback((name, data = null) => {
        setUIStates((prev) => ({
            ...prev,
            [name]: {
                isOpen: true,
                data,
            },
        }));
    }, []);

    const close = useCallback((name) => {
        if (!name) {
            setUIStates({});
            return;
        }

        setUIStates((prev) => {
            const updated = { ...prev };
            delete updated[name];
            return updated;
        });
    }, []);

    const toggle = useCallback((name, data = null) => {
        setUIStates((prev) => {
            if (prev[name]?.isOpen) {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            }

            return {
                ...prev,
                [name]: {
                    isOpen: true,
                    data,
                },
            };
        });
    }, []);

    const isOpen = useCallback((name) => {
        return !!uiStates[name]?.isOpen;
    }, [uiStates]);

    const getData = useCallback((name) => {
        return uiStates[name]?.data ?? null;
    }, [uiStates]);

    const value = useMemo(() => ({
        uiStates,
        open,
        close,
        toggle,
        isOpen,
        getData,
    }), [
        uiStates,
        open,
        close,
        toggle,
        isOpen,
        getData,
    ]);

    return (
        <UIStateContext.Provider value={value}>
            {children}
        </UIStateContext.Provider>
    );
}

export function useUIState() {
    const context = useContext(UIStateContext);

    if (context === null) {
        throw new Error(
            "useUIState must be used inside UIStateProvider"
        );
    }

    return context;
}
