import { CounterStore } from "../CounterStore"

export interface IRootStore {
    counterStore : CounterStore
}

export class RootStore  implements IRootStore{
   counterStore : CounterStore

   constructor () {
    this.counterStore = new CounterStore(this);
   }
}