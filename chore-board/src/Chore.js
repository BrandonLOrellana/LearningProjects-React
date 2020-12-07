import './App.css';

function Chore(props) {
    console.log(props);
    function setFinished(){
        props.data.finished = true;
        console.log(props.data);
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
