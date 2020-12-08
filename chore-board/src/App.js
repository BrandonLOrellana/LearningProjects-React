import './App.css';
import React, {Component} from 'react';
import Chore from './Chore'
class chore{
  constructor() {
    this.name     = "";
    this.chore    = "";
    this.finished = false;
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      createdChores:  [],
      active:         [],
      finished:       []
    }
    this.changeName  = (e)=>{this.name  = e.target.value;};
    this.changeChore = (e)=>{this.chore = e.target.value;};
    this.name        = "";
    this.chore       = "";
  }
  render (){
    const listCreated = this.state.active.map((chore, index) =>
      <Chore data={chore} key={index}/>
    );
    return(
      <div className="App">
        <h1>Chore Board<br/><br/></h1>
        <div>
          {listCreated}
        </div>
        <div className="Inputs">
          <input
            onChange={this.changeName}
            defaultValue={"Enter Name"}
          />
          <br/>
          <input
            onChange={this.changeChore}
            defaultValue={"Enter Chore"}
          />
          <br/>
          <button 
            onClick={()=>{
                let aux = new chore();
                aux.name = this.name;
                aux.chore = this.chore;
                let arr = this.state.createdChores;
                let act = [];
                let fin = [];
                arr.push(aux);
                for(let i in arr){
                  if(arr[i].finished === false){
                    act.push(arr[i])
                  }
                  else{
                    fin.push(arr[i])
                  }
                }
                this.setState({createdChores: arr, active: act, finished: fin});
              }
            }>Create Chore</button>
        </div>
      </div>
    );
  }
}

export default App;
