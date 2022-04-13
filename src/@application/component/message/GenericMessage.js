// //Created by Vivek - 06.07.2020
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Snackbar } from "@material-ui/core";
// import MuiAlert from "@material-ui/lab/Alert";
// import { makeStyles } from "@material-ui/core/styles";
// import * as MessageActions from "app/store/actions/message";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(2)
//     }
//   }
// }));

// export default function GenericMessage(props) {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const state = useSelector(data => data.message.genericMessage.state);
//   const options = useSelector(data => data.message.genericMessage.options);

//   const hideMessage = () => {
//     dispatch(MessageActions.hideMessage());
//   };
//   return (
//     <div className={classes.root}>
//       <Snackbar
//         {...options}
//         open={state}
//         onClose={hideMessage}
//         key={options.message}
//       >
//         <Alert onClose={hideMessage} severity={options.variant}>
//           {options.message}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }
