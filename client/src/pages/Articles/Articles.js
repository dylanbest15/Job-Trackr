import React from "react";
import ArticleGrid from "../../components/ArticleGrid/index"
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import Quotes from "../../components/Quotes/index";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function Articles() {
  const classes = useStyles();

  return (
    // <div className= "flex">
    <div className={classes.root}>
      <ResponsiveDrawer />
      <div className="quoteCard">
        <Quotes /> 
        </div>
        <div className="resourceGrid">
        <ArticleGrid />
        </div>
    </div>
  );
}

export default Articles;