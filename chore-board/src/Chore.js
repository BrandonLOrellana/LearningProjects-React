import './App.css';

function Chore(props) {
    console.log(props);
    return (
        <div className="Chore">
            <h2>{props.data.name}</h2>
            <p>{props.data.chore}</p>
            <button>Finished</button>
        </div>
    );
}

export default Chore;
