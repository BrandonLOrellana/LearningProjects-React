import './App.css';
import Chore from './Chore'
class chore{
  constructor() {
    this.name     = "";
    this.chore    = "";
    this.finished = false;
  }
}
function App() {
  let createdChores  = [];
  let finishedChores = [];
  return (
    <div className="App">
      <h1>Chore Board<br/><br/></h1>
      <Chore name="Louis" chore="Chore I need to do"/>
    </div>
  );
}

export default App;
