import './App.css';

function Chore(props) {
    function setFinished(){
        props.data.finished = true;
    }
    return (
        <div className="Chore">
            <h2>{props.data.name}</h2>
            <p>{props.data.chore}</p>
            <button onClick={setFinished}>Finished</button>
        </div>
    );
}

export default Chore;
