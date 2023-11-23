import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "../RootStore";

export class CounterStore {
    counter: number = 0;
    rootStore : IRootStore;

    constructor(rootStore : IRootStore) {
        makeObservable(this, {
            counter: observable,
            increment: action,
            decrement: action,
            getCounterValue: computed
        })
        this.rootStore = rootStore;
    }

    increment = () => {
        this.counter++;
    }
    decrement = () => {
        this.counter--;
    }
    get getCounterValue() {
        return this.counter;
    }
}