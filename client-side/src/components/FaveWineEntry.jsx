import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, IconButton, CardActions, Checkbox } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import MoreVert from '@mui/icons-material/MoreVert'
import Share from '@mui/icons-material/Share'
import { useSelector, useDispatch } from 'react-redux'
import { displayFavorite } from './auth/authSlice'

const FaveWineEntry = ({ picture, notes, userID }) => {
    const dispatch = useDispatch()
    console.log('Picture:', picture)
    console.log('Notes:', notes)
    console.log('userID: ', userID)

    // const displayFavorite = async () => {
    //     const formData = new FormData()
    //     const data = {
    //         userID,
    //         picture,
    //         notes
    //     }
    //     console.log('dataset', data)
    //     dispatch(displayFavorite({ formData: data }))
    // }

    let content = null;
    if (userID && userID === localStorage.getItem('userID')) {
        content = (
            <>
                <Card sx={{ margin: 5, backgroundColor:"#fdd5c1"}}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={picture}
                        alt="wine picture"
                    />
                    <CardContent >
                        <Typography variant="body2" color="primary">
                            {notes}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'primary' }} />} />
                        </IconButton>
                        {/* <IconButton aria-label="share">
                            <Share />
                        </IconButton> */}
                    </CardActions>
                </Card>
            </>
        )
    }

    return content
}

export default FaveWineEntry
