import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LeaveReview from './LeaveReview'

const useStyles = makeStyles({
    root: {
        alignItems: 'center',
        maxWidth: 700,
        maxHeight: 900,
        padding: '2rem',
        margin: '2 rem'
    },
    media: {
        height: 260,
    },
    });

export default function TrailCard({trail, user, leaveReview, fetchModels}) {
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
                {trail.description}<br></br>
                <h3>
                    {trail.reviews.length > 0
                        ? trail.reviews.map(review =>{
                            return <div>{review.rating.concat(' Stars: ')}<spanc>&nbsp;</spanc>{review.review}</div>
                        })    
                        : 'No reviews for this trail have been submitted'
                    }
                </h3>
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* <Button size="small" color="primary">
            Like
            </Button> */}
        </CardActions>
        <LeaveReview
            leaveReview={leaveReview}
            trail={trail}
            user={user}
            fetchModels={fetchModels}
        >
        </LeaveReview>
        </Card>
    );
}