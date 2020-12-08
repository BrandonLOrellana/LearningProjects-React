import './App.css';
import React, {Component} from 'react';
import Chore from './Chore'

class Board extends Component {
    constructor(props){
      super(props);
      this.state = {
        chores:  props.list
      }
    }
    render (){
      const listCreated = this.state.chores.map((chore) =>
        <Chore data={chore} key={chore.id}/>
      );
      return(
          <div>
              {listCreated}
          </div>
      );
    }
  }
  
  export default Board;

