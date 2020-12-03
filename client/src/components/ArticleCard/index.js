import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../pages/Articles/style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 345,
    // maxWidth: 345,
  },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
  media: {
    height: 150,
  },
}));

export default function ArticleCard (props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid 
        container spacing={3}
        justify="center"
        align="center"
        >
        <Grid item xs={4}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
    <Card className={classes.root}>
      <CardActionArea href={props.url} target="_blank">
        <CardMedia
          className={classes.media}
          image={props.image}
        //   title={props.title}
        /> 
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {props.title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    {/* </Grid> */}
     {/* </Grid> */}
    </div>
  );
}