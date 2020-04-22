import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  root: {
    position: "absolute",
    left: "25%",
    right: "25%",
    top: "25%",
    fontFamily: "Muli",
  },
  textfield: {
    minWidth: "800px",
    [`& fieldset`]: {
      borderRadius: "20",
    },
  },
}));
