import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

export default function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>deposit</button>
      <button onClick={() => withdrawMoney(100)}>withdraw</button>
      <button onClick={() => bankrupt()}>bankrupt</button>
    </div>
  );
}
