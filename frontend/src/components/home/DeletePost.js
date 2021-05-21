import React from 'react';
import { Button, Modal } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const redTheme = createMuiTheme({ 
  palette: { 
    primary: {main: '#4caf50'},
    secondary: {main: '#d32f2f'}
  } 
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
}));

function ModalDelete (props) {
  const { data, openCloseModalDelete, modalDelete } = props; 
  const classes = useStyles();
  
  const deletePost = (id) => {
    axios.delete ('https://jsonplaceholder.typicode.com/posts/' + id)
      .then (res => {
        console.log (res);
      })
      .catch (err => {
        console.log (err);
      });
  }

  const confirmDelete = () => {
    deletePost (data.id);  
    openCloseModalDelete ();
  }
  
  return (
    <Modal open={modalDelete} onClose={openCloseModalDelete}> 
      <div align="center" className="modal">
        <p>Está seguro de eleminar <b>"{data.title}"</b>? Una vez eliminado no podrá ser recuperado.</p>
        
        <div align="center">
          <MuiThemeProvider theme={redTheme}>
            <Button variant="contained" color="primary"   onClick={confirmDelete} className={classes.margin}>Eliminar</Button>
            <Button variant="contained" color="secondary" onClick={openCloseModalDelete}>Cancelar</Button>
          </MuiThemeProvider>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDelete;