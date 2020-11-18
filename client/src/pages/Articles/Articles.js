import React from "react";
import ArticleGrid from "../../components/ArticleGrid/index"
import ResponsiveDrawer from "../../components/SideBar/SideBar";
// import Quotes from "../../components/Quotes/index";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
// }));

function Articles() {
  return (
    <div className= "flex">
      <ResponsiveDrawer />
      {/* <Quotes />  */}
        <ArticleGrid />
    </div>
  );
}

export default Articles;