import { createContext } from "react";
import { RootStore } from "../../Store/RootStore";

export const rootStoreContext = createContext({
    rootStore : new RootStore(),
})