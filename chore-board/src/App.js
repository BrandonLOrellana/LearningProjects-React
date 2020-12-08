import './App.css';
import React, {Component} from 'react';
import {chore} from './Chore'

import Board from './Board';

class App extends Component {
  constructor(props){
    super(props);
    let aux = new chore();

    aux.id    = 1;
    aux.name  = "Louis";
    aux.chore = "Chore I need to do";

    this.state = {
      active:         [aux],
      finished:       [],
    }
  }
  render (){
    return(
      <div className="App">
        <h1>Chore Board App</h1>
        <br/><br/>
        <Board list={this.state.active}/>
        <form>

        </form>

      </div>
    );
  }
}

export default App;
