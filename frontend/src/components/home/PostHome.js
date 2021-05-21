import React, { Fragment, useState } from 'react';
import { Card, CardContent, CardActions, Grid, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';

import DeletePost from './DeletePost';

function PostHome (props) {
  const {title} = props.data;

  const [modalDelete, setModalDelete] = useState(false);

  const goToDetail = (data) => window.location.href = '/detail/' + data.id;
  const goToEditPost = (data) => window.location.href = '/editform/' + data.id;

  const openCloseModalDelete = () => { 
    setModalDelete (!modalDelete);
  }

  return (
    <Fragment>
      <Grid item xs={4}>
        <Card>    
          <CardContent className="cardContent">
            {title} 
          </CardContent>
        
          <CardActions>
            <IconButton aria-label="add to favorites" onClick={() => goToDetail(props.data)}>
              < MoreHorizIcon/>
            </IconButton>
            <IconButton aria-label="share" onClick={() => goToEditPost(props.data)}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="share">
              <DeleteForeverIcon onClick={openCloseModalDelete}/>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      <DeletePost data={props.data} openCloseModalDelete={openCloseModalDelete} modalDelete={modalDelete} />
    </Fragment>
  );
}
  
export default PostHome;