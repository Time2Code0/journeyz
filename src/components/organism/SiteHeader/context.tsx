import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useReducer,
} from 'react';

type State = {
    isMobileMenuOpen: boolean;
    activeItemId: string | null;
};

type Action =
    | { type: 'SET_MOBILE_MENU_STATE'; status: boolean }
    | { type: 'SET_ACTIVE_ITEM_ID'; id: string | null };

type HeaderDispatchContextData = {
    dispatch: Dispatch<Action>;
};

const HeaderStateContext = createContext<State>({
    isMobileMenuOpen: false,
    activeItemId: null,
});

const HeaderDispatchContext = createContext<HeaderDispatchContextData>(
    {} as HeaderDispatchContextData,
);

function siteHeaderReducer(state: State, action: Action): State {
    switch (action.type) {
        case `SET_MOBILE_MENU_STATE`:
            return { ...state, isMobileMenuOpen: action.status };
        case `SET_ACTIVE_ITEM_ID`:
            return { ...state, activeItemId: action.id };
        default:
            throw new Error(`Invalid action:`);
    }
}

type HeaderProviderProps = {
    children: ReactNode;
};

function HeaderProvider({ children }: HeaderProviderProps) {
    const [state, dispatch] = useReducer(siteHeaderReducer, {
        isMobileMenuOpen: false,
        activeItemId: null,
    });

    return (
        <HeaderStateContext.Provider value={state}>
            <HeaderDispatchContext.Provider value={{ dispatch }}>
                {children}
            </HeaderDispatchContext.Provider>
        </HeaderStateContext.Provider>
    );
}

function useHeaderState() {
    const context = useContext(HeaderStateContext);

    if (!context)
        throw new Error(`useHeaderState must be used within a HeaderProvider`);

    return context;
}

function useHeaderDispatch() {
    const context = useContext(HeaderDispatchContext);

    if (!context)
        throw new Error(`useHeaderDispatch must be used within a HeaderProvider`);

    return context;
}

export { HeaderProvider, useHeaderState, useHeaderDispatch };
