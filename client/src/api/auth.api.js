const ApiURL = process.env.REACT_APP_API_URL

const headers = {
    "Content-Type": "application/json"
}

const RegisterUser = payload => {
    return fetch(ApiURL + "/register", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(json => json)
    .catch(err => {throw err})
}

const LoginUser = payload => {
    return fetch(ApiURL + "/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(json => json)
    .catch(err => {throw err})
}

export default {
    RegisterUser,
    LoginUser
}