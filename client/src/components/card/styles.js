import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  card: {
    borderRadius: "10px",
    maxWidth: 430,
    color: theme.palette.contrastText,
    marginTop: 200,
    marginBottom: -150,
    marginLeft: 5,
    background: theme.palette.background.default,
  },
  avatarlarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  bottomActions: {
    flex: 4,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
}));
