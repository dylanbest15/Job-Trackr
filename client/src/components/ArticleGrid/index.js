import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArticleCard from '../../components/ArticleCard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ArticleGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {/* content and toolbar to position content on the page */}
    <main className={classes.content}>
    <div className={classes.toolbar} />
      <Grid
        container spacing={3}
        justify="center"
        align="center"
        >
            <Grid item lg={4}>
                <ArticleCard 
                 url="https://www.themuse.com/advice/beat-the-robots-how-to-get-your-resume-past-the-system-into-human-hands"
                 image="https://pilbox.themuse.com/image.jpg?filter=antialias&h=367&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F25280.jpg%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=750"
                 title="Beat the Robots: How to Get Your Resume Past the System & Into Human Hands"
                />
            </Grid>
            <Grid item lg={4}>
                <ArticleCard 
                 url="https://www.themuse.com/advice/transferable-skills-definition-examples"
                 image="https://pilbox.themuse.com/image.jpg?filter=antialias&h=384&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F10092020-1152603283.jpg%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=767"
                 title="Transferable Skills: The Key to Landing Your Dream Job"
                />
            </Grid>
            <Grid item lg={4}>
                 <ArticleCard 
                 url="https://www.themuse.com/advice/fill-in-the-blank-resume-worksheet"
                 image="https://pilbox.themuse.com/image.png?filter=antialias&h=383&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F08062020-1153900069.png%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=767"
                 title="This Free Worksheet Makes It Easy to Create (or Update) Your Resume"
                />
            </Grid>
            <Grid item lg={4}>
                 <ArticleCard 
                 url="https://www.themuse.com/advice/beat-the-robots-how-to-get-your-resume-past-the-system-into-human-hands"
                 image="https://pilbox.themuse.com/image.jpg?filter=antialias&h=367&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F8a39feeb-6535-4d72-9c50-9f9f12b313b7.jpg%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=750"
                 title="Your Step-by-Step Guide to Making the Perfect Resume (With Examples!)"
                />           
            </Grid>
            <Grid item lg={4}>
                <ArticleCard 
                 url="https://www.themuse.com/advice/star-interview-method"
                 image="https://pilbox.themuse.com/image.png?filter=antialias&h=367&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Ffee1fbcc-1a7a-4301-9f48-00ba91d1ead2.png%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=750"
                 title="The STAR Method: The Secret to Acing Your Next Job Interview"
                />
            </Grid>
            <Grid item lg={4}>
                <ArticleCard 
                url="https://www.themuse.com/advice/how-to-write-an-interview-thankyou-note-an-email-template"
                image="https://pilbox.themuse.com/image.jpg?filter=antialias&h=367&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F25743.jpg%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=748"
                title="The Perfect Template to Write a Thank You Email After an Interview (Plus Samples!)"
                />
            </Grid>
            <Grid item lg={4}>
                <ArticleCard 
                 url="https://www.themuse.com/advice/interview-questions-and-answers"
                 image="https://pilbox.themuse.com/image.png?filter=antialias&h=367&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F6eaf632e-d2d8-403c-9a4f-bf3291427152.png%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=750"
                 title="Your Ultimate Guide to Answering the Most Common Interview Questions"
                />
            </Grid>
            <Grid item lg={4}>
                <ArticleCard 
                 url="https://www.themuse.com/advice/how-to-write-entry-level-resume-example"
                 image="https://pilbox.themuse.com/image.jpg?filter=antialias&h=384&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F07242020-1159809871.jpg%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=767"
                 title="12 Tips for Writing an Entry-Level Resume That’ll Get Your Career Started Right (Plus an Example)"
                />
            </Grid>
            <Grid item lg={4}>
                <ArticleCard 
                 url="https://www.themuse.com/advice/how-far-back-should-resume-go"
                 image="https://pilbox.themuse.com/image.jpg?filter=antialias&h=384&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F09022020-592012499.jpg%3Fv%3Dbc1717374c025451fa03ebf47a828683ef0502c1&w=767"
                 title="How Far Back Should Your Resume Go? Here’s How to Decide"
                />
            </Grid>
      </Grid>
      </main>
    </div>
  );
}