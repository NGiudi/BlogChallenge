import React, { useContext, useState, useEffect, Fragment } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Card } from '@material-ui/core';
import axios from 'axios';

import AddIcon from '@material-ui/icons/Add';

import GridPostsHome from '../components/home/GridPostsHome';
import DataContext from '../providers/dataContext';

function Home () {
  const dataContext = useContext (DataContext);
  
  const [loading, setLoading] = useState (true);
  const [page, setPage] = useState (1);
  const [postsPerPage, setPostsPerPage] = useState (9);
  const [countPage, setCountPage] = useState (10);

  const goToNewFormPost = () => window.location.href = '/newform';

  useEffect(() => {
    const getAllPosts = () => {
      axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then (res => {
          dataContext.setData (res.data);
          setCountPage (Math.ceil(res.data.length/postsPerPage));
          setLoading (false);
        })
        .catch (err => {
          console.log (err);
        });
    }

    getAllPosts ();
  }, [])
  
  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <Fragment>
      <div className="bar-btns">
        <Card className="box-btn" onClick={goToNewFormPost}>
          <AddIcon color="primary" fontSize="large"/>
          <p>Nuevo Post</p>
        </Card>
      </div>
      <GridPostsHome page={page} loading={loading} postsPerPage={postsPerPage}/>
      
      <div className="boxPagination">
        <Pagination count={countPage} onChange={handleChange} shape="rounded" size="large"/>
      </div>
    </Fragment>
  );
}
  
export default Home;