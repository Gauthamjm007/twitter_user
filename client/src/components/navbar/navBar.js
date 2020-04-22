import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Toolbar, AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import ThemeToggler from "./ThemeToggler";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { startGetTweets } from "../../actions/tweets";
// import Autocomplete from "react-autocomplete";
/**
 * This component is a top bar it accpets 4 props a style ,onToggleSidebar , openSideBar, childreb
 */

function Topbar(props) {
  const { className } = props;
  const classes = useStyles(props);

  const [value, setValue] = React.useState({ searches: "" });

  const handleSubmit = () => {
    if (value) {
      props.dispatch(startGetTweets(value.searches));
    }
  };

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <h2>TWEET</h2>
              <img
                src="https://pluspng.com/img-png/png-twitter-logo-twitter-in-png-2500.png"
                alt="twitter icon"
                style={{ width: 50, height: 50, marginTop: 10 }}
              ></img>
              <h2>SEARCH</h2>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container direction="row" justify="flex-start">
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
                      value={value.searches}
                      onChange={(e) => {
                        setValue({ searches: e.target.value });
                      }}
                    />
                  )}
                />
              </React.Fragment>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container justify="flex-end">
              <Button
                variant="contained"
                color="primary"
                style={{ color: "white", marginTop: 20 }}
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
            >
              <ThemeToggler className={classes.themeToggler} />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  /** a style class name */
  className: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    searchData: state.searchData,
  };
};
export default connect(mapStateToProps)(Topbar);
