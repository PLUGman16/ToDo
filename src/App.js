import ToDo from "./Components/Todo";
import state from './Components/State/state'

function App(props) {
  return (
    <div>
      <ToDo state = {state} />
    </div>
  );
}

export default App;
