import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: '2rem',
        margin: '2 rem'
    },
    media: {
        height: 140,
    },
    });

export default function TrailCard( {trail} ) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={trail.thumbnail}
            title="Trail Cards"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {trail.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {trail.directions}
                <h3>Rating: {trail.reviews.map(review => review.rating + ' ' + review.review)}</h3>
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Like
            </Button>
            {/* <Button size="small" color="primary">
            Learn More
            </Button> */}
        </CardActions>
        </Card>
    );
    }