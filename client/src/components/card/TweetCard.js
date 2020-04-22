import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import useStyles from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

export default function TweetCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <Avatar className={classes.avatarlarge} src={props.img} />
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <p
                style={{
                  marginBottom: "-10px",
                  marginTop: "-5px",
                  marginLeft: "-70px",
                  fontFamily: "Muli",
                }}
              >
                {props.name}
              </p>
              <p
                style={{
                  marginLeft: "-70px",
                  fontFamily: "Muli",
                }}
              >
                {props.username}
              </p>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container direction="row" justify="flex-end">
              {props.time}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography>{props.content}</Typography>
        </Grid>
      </CardContent>
      <CardActions style={{ marginTop: "-30px", marginLeft: "8px" }}>
        <Icon className="fa fa-comment-o"></Icon>
        <p>{props.retweet}</p>
        <Icon className="fa fa-retweet"></Icon>
        <p>{props.favorite}</p>
      </CardActions>
    </Card>
  );
}
