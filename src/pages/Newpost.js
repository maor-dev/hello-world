import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  title: {
      margin: theme.spacing(10),
      display: 'block',
      //width: '25ch',
  },
  content: {
    margin: theme.spacing(10),
    //width: '2500ch',
    display: 'block'
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form  noValidate autoComplete="off">
      <TextField className={classes.title} id="standard-basic" label="Title" />
      <TextField className={classes.content} id="filled-basic" label="Content" variant="filled" />
      <div >
      <Button className={classes.content} variant="contained" color="primary">
        post
      </Button>
    </div>
    </form>
  );
}
