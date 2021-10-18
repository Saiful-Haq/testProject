import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import LazyLoad from "react-lazy-load";
import Navbar from "component/navbar";
import { useSelector, useDispatch } from 'react-redux'
import { imageActions } from './app/imageSlice'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0px 30px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  listWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 192,
  },
  list: {
    width: "30%",
    marginBottom: '90px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'inherit',
  },
  movieName: {
    color: "#fff",

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'block',
    textOverflow: 'ellipsis',
  },
  imgWrapper: {
    objectFit: "cover",
    width: "100%",
    marginBottom: '24px'
  },
}));

export default function App() {

 // let [searchkey ,setsearchkey]=useState('')
  const classes = useStyles();
  const dispatch = useDispatch()
  const object = useSelector((state) => state.image.list)
  const filteredArray=object.page["content-items"].content;

  let searchkey='';
  //let [input,setInput] =useState('')

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = e => {

   
   // setInput(searchkey)
    searchkey=e.target.value;
    dispatch(imageActions.search(e.target.value))
    //setsearchkey(e.target.value
  
  }

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      dispatch(imageActions.addcontent(searchkey))
  }

 
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar handleChange={handleChange} name={ useSelector((state) => state.image.list).page.title} />
        </Grid>
      </Grid>

      <Box className={classes.listWrapper}>
        {
          filteredArray && filteredArray.length &&
          filteredArray.map((data, i) => (
            <Box key={i} className={classes.list}>
              <LazyLoad>
                <img
                  src={`images/${data["poster-image"]}`}
                  alt="img"
                  className={classes.imgWrapper}
                />
              </LazyLoad>
              <Typography className={classes.movieName}>{data.name}</Typography>
            </Box>
          ))}
      </Box>
    </div>
  );
}
