const BASE_URL = "http://localhost:2992"

export default function(endpoint, method="get", body={}) {

    let headers = (method === "post" || method === "patch") ? { "Content-Type": "application/json" } : {}

    let options = {
        credentials: "include",
        method: method.toUpperCase()
    }

    if (method === "post" || method === "patch") {
        options = Object.assign(options, {
            headers: headers,
            body: JSON.stringify(body)
        })
    }
    
    return fetch(`${BASE_URL}/${endpoint}`, options).then((res) => {
        return res.json()
    })
}