import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import DataContext from '../../providers/dataContext'
import CardPost from './CardPost';

function GridPosts (props) {
  const {loading, page, postsPerPage} = props;
  const postsList = useContext (DataContext);

  if (loading){
    return null;
  }

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsList.data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="w-80">
      <Grid container spacing={4}>
        {currentPosts.map (post => (
          <CardPost key={post.id} data={post}/>
        ))}
      </Grid>
    </div>
  );
}
  
export default GridPosts;