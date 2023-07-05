import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, IconButton, CardActions, Checkbox } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import MoreVert from '@mui/icons-material/MoreVert'
import Share from '@mui/icons-material/Share'

const Post = () => {
    return (
        <>
            <Card sx={{ margin: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: '#FAA275' }} aria-label="recipe">

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="300"
                    image="https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: '#CE6A85' }} />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default Post
