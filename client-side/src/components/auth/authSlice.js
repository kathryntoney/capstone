import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    token: "",
    profilePic: "",
    name: "",
    error: "",
    isLoading: false
}

const SIGN_UP = "SIGN_UP" //action types
const SIGN_IN = "SIGN_IN" //action types
const CHECK_TOKEN = "CHECK_TOKEN" //action types
// const ADD_WINE = "ADD_WINE"

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
    console.log(response.data)
    // localStorage.setItem('token', JSON.stringify(response.data))
    return token
})

export const checkToken = createAsyncThunk(CHECK_TOKEN, async (params, thunkAPI) => {
    if (localStorage.token) {
        //api to check if token is valid
        let response = await axios.get('/protected', {
            headers: {
                'authorization': localStorage.token
            }
        })

        return response.data
        // return { isValid: response.data.isValid, token: localStorage.token }
    }
    return { isValid: false }
})

// export const addWine = createAsyncThunk(ADD_WINE, async (params, thunkAPI) => {
//     try {
//         const response = await axios.post('/addwine', params.formData)
//         return response.data
//     } catch (error) {
//         console.log('error adding new wine: ', error)
//         throw error
//     }
// })

let authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        signOut: (state, action) => {

            state.token = ""
            state.profilePic = ""
            state.name = ""
            localStorage.removeItem('token')
        }
    },
    extraReducers: {

        [signUp.pending]: (state, action) => {

            state.isLoading = true;

        },
        [signUp.fulfilled]: (state, { payload }) => {  //action.payload

            state.isLoading = false
            state.token = payload
            state.profilePic = payload.profilePic
            state.name = payload.name
            localStorage.setItem('token', payload)
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
            state.token = payload
            state.profilePic = payload.profilePic || 'https://cdn-icons-png.flaticon.com/512/1942/1942436.png'
            state.name = payload.name || 'Welcome!'
            localStorage.setItem('token', payload)
        },
        [signIn.rejected]: (state, action) => {

            state.isLoading = false;
            state.error = "Couldn't fetch data"
        },
        [checkToken.pending]: (state, action) => {

            state.isLoading = true;

        },
        [checkToken.fulfilled]: (state, { payload }) => {  //action.payload

            state.isLoading = false
            if (payload.isValid) {
                // state.token = localStorage.token
                // state.profilePic = payload.profilePic || 'https://cdn-icons-png.flaticon.com/512/1942/1942436.png'
                // state.name = payload.name || 'Welcome!'
                state.token = localStorage.getItem('token') || ''
            }

        },
        [checkToken.rejected]: (state, action) => {

            state.isLoading = false;
            state.error = "Couldn't fetch data"
            state.token = ""
        },
        // [addWine.pending]: (state, action) => {
        //     state.isLoading = true;
        // },
        // [addWine.fulfilled]: (state, { payload }) => {
        //     state.isLoading = false
        //     if (payload.isValid) {
        //         state.token = localStorage.getItem('token', payload)
        //     }
        // },
        // [addWine.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.error = "couldn't add wine"
        // }
    }
})


export const { signOut } = authSlice.actions

export default authSlice.reducer