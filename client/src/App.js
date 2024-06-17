import Car from "./Car";
import GoalResult from "./Goale";
import LogicalOperator from "./LogicalOperator";
import List from "./List";
function App() {
  const cars=["bmw","ferari","tesla"]
  return (
    <div>
      <Car color="black" wheels="4" />
      <hr/>

      <GoalResult isGoal={true} />
      <hr/>
      <List cars={cars}/>
    </div>
  );
}

export default App;
