import React, { Fragment, useState } from 'react';
import { Button, Card, CardContent, IconButton, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';

import { formValidation } from '../js/formValidation';
import AlertError from '../components/AlertError';


function FormNewPost () {
  const [error, setError] = useState ({error: false, message: ""});
  const [post, setPost] = useState({});
  
  const goToHome = () => window.location.href = '/';

  const addNewPost = (data) => {
    axios.post ('https://jsonplaceholder.typicode.com/posts', data)
      .then (res => {
        console.log (res.data);
        goToHome ();
      })
      .catch (err => {
        console.log (err);
      });
  }

  const confirmAdd = () => {
    const objError = formValidation (post);

    if ( objError.error === false) {
      addNewPost (post);
    } else{
      setError (objError);
    }
  }

  const handleTextFieldChange = e => {
    const {name, value} = e.target;
    
    setPost (prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Fragment>
      <div className="padding-back-icon">
        <IconButton onClick={goToHome}>
          <ArrowBackIcon />
        </IconButton>
      </div>

      <Card className="card">
        <CardContent>
          <h2 className="formTitle">Formulario Creación de Post</h2>
          
          <AlertError error={error.error} message={error.message}/>
          
          <form noValidate autoComplete="off">
            <div className="textfield w-90">
              <TextField name="title"  label="Titulo" onChange={handleTextFieldChange}
                         className="w-100" id="standard-basic"/>
            </div>
            
            <div className="textfield w-90">
              <TextField name="body"  label="Body" multiline rowsMax={5} onChange={handleTextFieldChange}
                         id="standard-basic" className="w-100"/>
            </div>
            
            <div className="boxButton">
              <Button variant="contained" onClick={confirmAdd}>Agregar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Fragment>
  );
}

export default FormNewPost;