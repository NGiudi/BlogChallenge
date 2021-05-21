import React, { Fragment, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Button, Card, CardContent, IconButton, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';

import { formValidation } from '../../js/formValidation';
import AlertError from '../AlertError';

function FormEditPost () {
  const id = useParams().id;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState ({error: false, message: ""});
  const [post, setPost] = useState();

  const goToHome = () => window.location.href = '/';

  useEffect(() => {
    const getOnePost = (id) => {
      axios.get ('https://jsonplaceholder.typicode.com/posts/' + id)
        .then (res => {
          setPost (res.data);
          setLoading (false);
        })
        .catch (() => {
          setPost ({
            title: "Erorr",
            body: "Falla al consultar la base de datos."
          });
          setLoading (false);
        });
    }

    getOnePost (id);
  }, []);

  const modifyPost = (id, data) => {
    axios.put ('https://jsonplaceholder.typicode.com/posts/' + id, data)
      .then (() => {
        goToHome ();
      })
      .catch (err => {
        console.log (err);
      });
  }

  const confirmEdit = () => {
    const objError = formValidation (post);

    if ( objError.error === false) {
      modifyPost (id, post);
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

  if (loading){
    return null;
  }

  return (
    <Fragment>
      <IconButton onClick={goToHome}>
        <ArrowBackIcon />
      </IconButton>

      <Card className="card">
        <CardContent>
          <h2 className="formTitle">Formulario Edición de Post</h2>

          <AlertError error={error.error} message={error.message}/>
          
          <form noValidate autoComplete="off">
            <div className="textfield w-90">
              <TextField name="title" label="Titulo" id="standard-basic" defaultValue={post.title} 
                         className="w-100" onChange={handleTextFieldChange}/>
            </div>
            
            <div className="textfield w-90">
              <TextField name="body" label="Body" id="standard-basic"  defaultValue={post.body}
                         className="w-100" multiline rowsMax={5} onChange={handleTextFieldChange}/>
            </div>
            
            <div className="boxButton">
              <Button variant="contained" onClick={confirmEdit} >Editar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Fragment>
  );  
  
}

export default FormEditPost;