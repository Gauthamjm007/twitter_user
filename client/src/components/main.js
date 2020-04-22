import React, { Suspense } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import moment from "moment";
import Topbar from "./navbar/navBar";
import CircularProgress from "@material-ui/core/CircularProgress";
const TweetCard = React.lazy(() => import("./card/TweetCard"));

function Main(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(12);
  const handleClick = () => {
    setValue(value + 12);
  };
  return (
    <React.Fragment>
      <Topbar />
      <div className={classes.root}>
        <Grid container>
          <Suspense fallback={<CircularProgress />}>
            {props.tweets.slice(0, value).map((twt) => {
              return (
                <Grid item lg={4} sm={6} xl={3} xs={12} key={twt.id}>
                  <TweetCard
                    name={twt.name}
                    username={twt.screen_name}
                    img={twt.img}
                    content={twt.text}
                    retweet={twt.retweet}
                    favorite={twt.favorite}
                    time={moment(twt.created_at).format("lll")}
                  />
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <Grid container justify="center">
                {props.tweets.length > 2 && (
                  <div style={{ paddingTop: "200" }}>
                    <Button
                      onClick={handleClick}
                      color="primary"
                      variant="contained"
                      style={{ color: "white" }}
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </Grid>
            </Grid>
          </Suspense>
        </Grid>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets,
  };
};
export default connect(mapStateToProps)(Main);
