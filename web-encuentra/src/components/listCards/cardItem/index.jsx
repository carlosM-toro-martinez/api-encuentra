import { useStyles } from './cardItem.styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CardItem({ data }) {
  const { name, image } = data.attributes;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/datails', { state: data.attributes })
  }
  const classes =
    useStyles({ image: image ? image.data.attributes.url : 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Escudo_de_la_Polic%C3%ADa_Boliviana.jpg' });
  return (
    <>
      {image ? <div className={classes.book} onClick={handleNavigate} >
        <div className={classes.cover} style={{ backgroundImage: `url(${image.data.attributes.url})` }} >
        </div>
      </div> :
        <>
          <div className={classes.book} onClick={handleNavigate} >
            <div className={classes.cover}>
            </div>
          </div>
          <div className={classes.book} onClick={handleNavigate} >
            <div className={classes.cover}>
            </div>
          </div>
          <div className={classes.book} onClick={handleNavigate} >
            <div className={classes.cover}>
            </div>
          </div>
        </>
      }
      <div className={classes.container}>
        <Typography variant="h4">
          {name}
        </Typography>
      </div>
    </>
  )
}

export default CardItem