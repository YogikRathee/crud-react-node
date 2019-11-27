const ApiURL = process.env.REACT_APP_API_URL
const token = localStorage.getItem("token");

const headers = {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
}

const GetAllUsers = () => {
    return fetch(ApiURL + "/user/read", {
        method: "GET",
        headers: headers
    })
    .then(response => response.json())
    .then(json => json)
    .catch(err => {throw err})
}

const DeleteUser = payload => {
    return fetch(ApiURL + "/user/delete", {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(json => json)
    .catch(err => {throw err})
}

const UpdateUser = payload => {
    return fetch(ApiURL + "/user/update", {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(json => json)
    .catch(err => {throw err})
}

export default {
    GetAllUsers,
    DeleteUser,
    UpdateUser
}