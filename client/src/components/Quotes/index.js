import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InspirationApi from "../../utils/InspirationApi";


function Quotes() {

 const [data, setResult] = useState([]);

 useEffect(() => {
    InspirationApi.getZen()
    .then(res => setResult( res.data))
    // .then(res => setResult( res.data.results ))
    .catch(err => console.log(err));
    }, []); 
    console.log(data);

  return (
      <div>

      </div>
  );
}

export default Quotes;

