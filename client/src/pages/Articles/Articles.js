import React from "react";
import ArticleGrid from "../../components/ArticleGrid/index"
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

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
        <ArticleGrid />
    </div>
  );
}

export default Articles;