import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InspirationApi from "../../utils/InspirationApi";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import "../../pages/Articles/style.css"


function Quotes() {

 const [data, setResult] = useState([]);

 useEffect(() => {
    InspirationApi.getZen()
    .then(res => setResult( res.data))
    .catch(err => console.log(err));
    }, []); 
    console.log(data);
  return (
      <div className="quoteCard">
        {data.map((quote) => (
          <Card>
            <CardActionArea>
              <CardMedia
                // className={classes.media}
                // image={props.image}
              /> 
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {quote.q}
                {quote.a}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
  );
}

export default Quotes;

