import query from "./query"

const Session = {
    create(credentials) {
        return query("sessions", "post", credentials)
    },
    destroy() {
        return query("sessions", "delete")
    }
}

export default Session