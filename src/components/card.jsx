import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
    
      display:"inline-block",
      padding:"2vh",
      width: "18vw",
      height: "41vh",
      margin: "1vw",
    },
    media: {
        height: "35vh",
        margin: "-17px",
    },
    container:{
        display:"contents",
    },
    cardContent:{
        // height: "35vh",
        margin: "-17px",
        paddingTop:"22px",
    },
    typoFont:{
        fontSize: "1.1rem",
        wordBreak: "break-all",
    }
  });
export default function Cards(props) {
    const classes = useStyles();

    return (
        <div 
        // component="main"
        // maxWidth="xs"
        className={classes.container}
        >
            <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={props.avatar}
                title="avatar"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.typoFont}>
                        {props.firstName} {props.lastName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typoFont}>
                        {props.email}
                    </Typography>
                </CardContent>
            
             </Card>
        </div>
    )
}
