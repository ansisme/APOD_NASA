import useStyles from './styles';
import react from 'react';
import App from './App';
const Card =()=>{
    const classes = useStyles();
    return (
     <div>
        <img src={nasadata.url} alt="nasa" />
        <p>{nasadata.explanation}</p>
        <h6>{nasadata.date}</h6>
        <p>{nasadata.thumnail_url}</p>
        </div>
    )
}
export default Card;