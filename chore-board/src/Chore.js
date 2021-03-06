import './App.css';

export class chore{
    constructor(id) {
        this.id       = id;
        this.name     = "";
        this.chore    = "";
        this.finished = false;
    }
  }

function Chore(props) {
    function setFinished(){
        props.data.finished = true;
        props.onChange(props.data.id);
    }
    return (
        <div className="Chore">
            <h2>{props.data.name}</h2>
            <p>{props.data.chore}</p>
            <button onClick={setFinished} className="Finished">Finished</button>
        </div>
    );
}
export default Chore;