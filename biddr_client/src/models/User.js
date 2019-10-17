import query from "./query"

const User = {
    current() {
        return query("users/current")
    },

    create(data) {
        return query("users", "post", data)
    }
}

export default User