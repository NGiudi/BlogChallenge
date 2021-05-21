import Alert from '@material-ui/lab/Alert'; 

const AlertError = (props) => {
  const {error, message} = props;
  
  if (error === true) {
    return (
      <div className="pb-1">
        <Alert severity="error">{message}</Alert>
      </div>
    );
  }
  
  return null;
}

export default AlertError;