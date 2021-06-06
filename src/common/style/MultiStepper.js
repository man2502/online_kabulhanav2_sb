
import { makeStyles, withStyles } from "@material-ui/core/styles";

import StepConnector from "@material-ui/core/StepConnector";
import { sbColors } from "../config";



export const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 38,
    //   left: 'calc(-50% + 16px)',
    // right: 'calc(50% + 16px)',
    },
    active: {
      "& $line": {
        // backgroundImage:
        //   "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
        backgroundColor:sbColors.stepper.active,
      }
    },
    completed: {
      "& $line": {
        // backgroundImage:
        //   "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
        backgroundColor:sbColors.stepper.active,
      }
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#ddd',
      borderRadius: 1
    }
  })(StepConnector);
  
  export const useColorlibStepIconStyles = makeStyles((theme)=>({
    root: {
      backgroundColor: sbColors.stepper.nonActive,
      zIndex: 1,
      color: sbColors.stepper.content,
      width: 80,
      height: 80,
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down('xs')]:{
        display:'none'
    },
    },
    active: {
      [theme.breakpoints.down('xs')]:{
          display:'flex'
      },
    //   backgroundImage:
    //     "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    backgroundColor:sbColors.stepper.active,
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
    },
    completed: {
    //   backgroundImage:
    //     "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
    backgroundColor:sbColors.stepper.active,
    }
  }));
  
  