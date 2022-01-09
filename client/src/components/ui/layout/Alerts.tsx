import {FC} from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './../../../css/Alert.css';

type Props = {
  successAlert: boolean;
  showAlert: boolean;
  handleShowAlert: ()=>void;
}

export  const Alerts: FC<Props> = ({successAlert, showAlert, handleShowAlert}) => {
  return (
  
    <div className="alert-container">
      {successAlert?(      
          <Alert 
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  handleShowAlert()
                }}>
            <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
            <AlertTitle>Success</AlertTitle>
            <strong>Your action is successfull!</strong>
          </Alert>
      ):
      (
        <Alert severity="error" className="nazwa"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleShowAlert();
              }}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }>
          <AlertTitle>Something went wrong </AlertTitle>
          <strong> Please try again!</strong>
        </Alert>
      )
      }
        </div>
  );
}
