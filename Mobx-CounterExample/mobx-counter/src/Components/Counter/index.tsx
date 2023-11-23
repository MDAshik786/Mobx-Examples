import { observer } from "mobx-react-lite";
import { useStore } from "../../Hooks/useStore";

const Counter = observer(() => {
  const { rootStore } = useStore();
  console.log(rootStore, "rootStore");
  return (
    <div>
      <p>counter: {rootStore?.counterStore?.counter}</p>
      <button onClick={rootStore?.counterStore?.decrement}>-</button>
      <button onClick={rootStore?.counterStore?.increment}>+</button>
    </div>
  );
});

export default Counter;
