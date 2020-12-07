import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../../pages/Articles/style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 345,
  },
  media: {
    height: 150,
  },
}));

export default function ArticleCard (props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Card className={classes.root}>
      <CardActionArea href={props.url} target="_blank" className="resourceCard">
        <CardMedia
          className={classes.media}
          image={props.image}
        /> 
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}