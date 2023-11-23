import { useContext } from "react";
import { rootStoreContext } from "../ContextCountStore";

export const useStore = () => useContext(rootStoreContext)