import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'

const Wines = () => {
    return (
        <Box flex={4} p={2}>
            <Post />
            <Post />
            <Post />
        </Box>
    )
}

export default Wines
