import './App.css';

function Chore(props) {
  return (
    <div className="Chore">
        <h2>{props.name}</h2>
        <p>{props.chore}</p>
        <button>Finished</button>
    </div>
  );
}

export default Chore;
