import { observer } from "mobx-react-lite";
import { useStore } from "../../Hooks/useStore";

const Counter = observer(() => {
  const { rootStore : {counterStore}}  = useStore();
  console.log(counterStore, "rootStore");
  return (
    <div>
      <p>counter: {counterStore?.counter}</p>
      <button onClick = {counterStore?.decrement}>-</button>
      <button onClick = {counterStore?.increment}>+</button>
    </div>
  );
});

export default Counter;
