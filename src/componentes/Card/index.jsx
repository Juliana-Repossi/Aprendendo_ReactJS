import './styles.css';

function Card(props){
    return(
        <div className='card'>
            <strong> {props.name}</strong>
            <small>{props.idade}</small>
        </div>
    )
}

export default Card