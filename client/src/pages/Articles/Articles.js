import React from "react";
import ArticleGrid from "../../components/ArticleGrid/index"
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";
import SimpleTabs from '../../components/Header/Header';
// import SimpleTabs from '../Header/Header';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function Articles() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveDrawer />
      <SimpleTabs />
        <ArticleGrid />
    </div>
  );
}

export default Articles;