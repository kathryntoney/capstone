import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    token: "",
    userID: "",
    profilePic: "",
    name: "",
    favorites: [],
    error: "",
    isLoading: false,
    dataUri: ""
}

const SIGN_UP = "SIGN_UP" //action types
const SIGN_IN = "SIGN_IN" //action types
const CHECK_TOKEN = "CHECK_TOKEN" //action types
const ADD_WINE = "ADD_WINE"
const DISPLAY_FAVORITE = "DISPLAY_FAVORITE"


// pending, fullfilled, rejected

// {formData: }




export const signUp = createAsyncThunk(SIGN_UP, async (params, thunkAPI) => {

    let response = await axios.post('/registration', params.formData)

    let jwt = response.data.token



    return jwt

})

export const signIn = createAsyncThunk(SIGN_IN, async (params, thunkAPI) => {
    let response = await axios.post('/login', params.formData)
    let token = response.data.token
    console.log('signIn thunk', token)
    let userID = response.data.userID
    console.log('signIn thunk', userID)
    console.log(response.data.userID)
    thunkAPI.dispatch(setUserID(userID))
    // localStorage.setItem('token', JSON.stringify(response.data))
    return { token, userID }
})

export const checkToken = createAsyncThunk(CHECK_TOKEN, async (params, thunkAPI) => {
    if (localStorage.token) {
        let token = localStorage.token
        console.log('inside checkToken 1', token)
        //api to check if token is valid
        let response = await axios.get('/protected', {
            headers: {
                'authorization': token
            }
        })
        console.log('inside checkToken 2', response.data)
        // localStorage.setItem('userID', response.data.id)
        // localStorage.setItem('token', response.data.token)
        // return response.data
        return response.data
    }
    return { isValid: false }
})

export const displayFavorite = createAsyncThunk(DISPLAY_FAVORITE, async (params, thunkAPI) => {
    // console.log('displayFave thunk', userID)
    // const userID = localStorage.getItem('userID')
    const userID = localStorage.userID
    console.log('display fave thunk', userID)
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get(`/wines/${userID}`, {
            headers: {
                Authorization: token,
            },
        })
        console.log('display favorite', response)
        return response.data
    } catch (error) {
        console.log('error displaying wine list: ', error)
        throw error
    }
})

export const addWine = createAsyncThunk(ADD_WINE, async (params, thunkAPI) => {
    try {
        const response = await axios.post('/addwine', params.formData)
        return response.data
    } catch (error) {
        console.log('error adding new wine: ', error)
        throw error
    }
})


let authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        setUserID: (state, action) => {
            state.userID = action.payload
        },

        signOut: (state, action) => {
            state.token = ""
            state.profilePic = ""
            state.name = ""
            localStorage.removeItem('token')
        },

        addDataUri: (state, action) => {
            state.dataUri = action.payload
        },

        removeDataUri: (state) => {
            state.dataUri = ""
        }


    },
    extraReducers: {

        [signUp.pending]: (state, action) => {

            state.isLoading = true;

        },
        [signUp.fulfilled]: (state, { payload }) => {  //action.payload

            state.isLoading = false
            state.token = payload.token
            state.userID = payload.userID
            state.profilePic = payload.profilePic
            state.name = payload.name
            localStorage.setItem('token', payload)
            localStorage.setItem('userID', payload.userID)
        },
        [signUp.rejected]: (state, action) => {

            state.isLoading = false;
            state.error = "Couldn't fetch data"
        },
        [signIn.pending]: (state, action) => {

            state.isLoading = true;

        },
        [signIn.fulfilled]: (state, { payload }) => {  //action.payload

            state.isLoading = false
            state.token = payload.token
            state.userID = payload.userID
            state.profilePic = payload.profilePic || 'https://cdn-icons-png.flaticon.com/512/1942/1942436.png'
            state.name = payload.name || 'Welcome!'
            localStorage.setItem('token', payload.token)
            localStorage.setItem('userID', payload.userID)
        },
        [signIn.rejected]: (state, action) => {

            state.isLoading = false;
            state.error = "Couldn't fetch data"
        },
        [checkToken.pending]: (state, action) => {

            state.isLoading = true;

        },
        [checkToken.fulfilled]: (state, { payload }) => {  //action.payload
            console.log('checkToken.fulfilled payload: ', payload)
            state.isLoading = false
            if (payload.isValid) {
                // state.token = localStorage.token
                // state.profilePic = payload.profilePic || 'https://cdn-icons-png.flaticon.com/512/1942/1942436.png'
                // state.name = payload.name || 'Welcome!'
                state.token = localStorage.token
                state.userID = localStorage.userID
            }
        },
        [checkToken.rejected]: (state, action) => {

            state.isLoading = false;
            state.error = "Couldn't fetch data"
            state.token = ""
        },
        [addWine.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addWine.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            if (payload.isValid) {
                state.token = localStorage.getItem('token', payload)
                state.userID = localStorage.userID
            }
        },
        [addWine.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = "couldn't add wine"
        },
        [displayFavorite.pending]: (state, action) => {
            state.isLoading = true;
        },
        [displayFavorite.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.favorites = payload.favoriteList
            // if (payload.isValid) {
            //     state.token = localStorage.getItem('token', payload)
            //     state.picture = payload.picture
            //     console.log(state.picture)
            //     state.notes = payload.notes
            //     console.log(state.notes)
            // }
        },
        [displayFavorite.rejected]: (state, action) => {
            state.isLoading = false
            state.error = "couldn't display wines"
        }
    }
})


export const { signOut } = authSlice.actions
export const { addDataUri } = authSlice.actions
export const { removeDataUri } = authSlice.actions
export const { setUserID } = authSlice.actions

export default authSlice.reducer

