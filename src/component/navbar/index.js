import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch } from 'react-redux'
import { imageActions } from '../../app/imageSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    backgroundColor: 'black',
    left: '0',
    right: '0',
    margin: 'auto',
    boxShadow: '0px 2px 42px 1px #6a6767'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    "&:focus": {
      width: "100% !important",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "0ch",
    "&:focus": {
      width: "20ch",
    },
  },
  toolBar: {
    paddingLeft: 30,
    paddingRight: 30,
    minHeight: 136,
    display: 'flex',
    alignItems: 'end',
    paddingBottom: 20,

  },
  back: {
    marginRight: 10,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const dispatch = useDispatch()

  // const handleChange = e => {
  //   dispatch(imageActions.search(e.target.value))
    
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "transparent" }}>
        <Toolbar className={classes.toolBar}>
          <ArrowBackIcon className={classes.back} />
          <Typography className={classes.title} variant="h6" noWrap>
            {props.name}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={props.handleChange}
              placeholder="Search???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
