import React from "react";
import ArticleGrid from "../../components/ArticleGrid/index"
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";
import SimpleTabs from './../../components/Header/Header';
// import SimpleTabs from '../Header/Header';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

function Articles() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveDrawer />
        <main className={classes.content}>
         <div className={classes.toolbar} />
           <div className="container">
            <SimpleTabs />
            <ArticleGrid />
          </div>
        </main>
    </div>
  );
}

export default Articles;