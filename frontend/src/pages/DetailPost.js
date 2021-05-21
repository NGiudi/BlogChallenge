import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';

function DetailPost () {
  const id = useParams().id;
  
  const [loading, setLoading] = useState(true);
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
  }, [])

  
  if (loading){
    return null;
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
          <h2 className="titleCard">{post.title}</h2>
          <p>{post.body}</p>
        </CardContent>
      </Card>
    </Fragment>
  );
}
  
export default DetailPost;