import './App.css';
import React, {Component} from 'react';
import {chore} from './Chore'

import Board from './Board';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      active:   [],
      finished: [],
      name:     "",
      chore:    "",
      nextId:   1
    }
    this.nameChange = (e) =>{
      this.setState({name: e.target.value});
    }
    this.choreChange = (e) =>{
      this.setState({chore: e.target.value});
    }
    this.submit = (e) =>{
      let aux = new chore();
      aux.id    = this.state.nextId;
      aux.name  = this.state.name;
      aux.chore = this.state.chore;
      let temp = this.state.active;
      temp.push(aux);
      this.setState({
        active: temp,
        nextId: this.state.nextId+1
      });
    }
  }
  render (){
    return(
      <div className="App">
        <h1>Chore Board App</h1>
        <br/><br/>
        <Board list={this.state.active}/>
        <form>
          <div>
            <label>Name </label>
            <input onChange={this.nameChange}/>
          </div>
          <div>
            <label>Chore </label>
            <input onChange={this.choreChange}/>
          </div>
          <button onClick={this.submit} type="button">Create</button>
        </form>

      </div>
    );
  }
}

export default App;
