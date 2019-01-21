import axios from 'axios'

const URL = 'http://localhost:3000/station-users'

export const loadUser = data => {
    return {
        type: 'LOAD_USER',
        payload: data
    }
}

export const signUp = data => {
    return dispatch => {
        axios
        .post(URL, data)
        .then(res => {
            dispatch(loadUser(res.data.model))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const login = credentials => {
    return dispatch => {
        axios
            .post(URL + '/login', credentials)
            .then(res => {
                dispatch(loadUser(res.data.model))
            })
            .catch(err => {
                console.log(err)
            })
    }
}