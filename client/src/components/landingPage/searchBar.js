import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { startGetTweets } from "../../actions/tweets";
function SearchBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const handleSubmit = () => {
    if (value) {
      props.dispatch(startGetTweets(value.searches));
      props.history.push("/page");
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid container justify="center">
              <h1>TWEET</h1>
              <img
                src="https://pluspng.com/img-png/png-twitter-logo-twitter-in-png-2500.png"
                alt="twitter icon"
                style={{ width: 50, height: 50, marginTop: 20 }}
              ></img>
              <h1>SEARCH</h1>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <React.Fragment>
            <Autocomplete
              id="combo-box-demo"
              options={
                props.searchData ? props.searchData : [{ searches: "A" }]
              }
              getOptionLabel={(option) => option.searches}
              style={{ width: "100%", marginTop: 10 }}
              onChange={(e, value) => {
                setValue(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Search"
                  value={value}
                  onChange={(e) => {
                    setValue({ searches: e.target.value });
                  }}
                />
              )}
            />
          </React.Fragment>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button
              variant="contained"
              color="primary"
              style={{ color: "white", marginTop: "50px" }}
              onClick={handleSubmit}
            >
              SEARCH
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchData: state.searchData,
  };
};
export default connect(mapStateToProps)(SearchBar);
