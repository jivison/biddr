import query from "./query";

const Auction = {
    all() {
        return query("auctions");
    },

    one(id) {
        return query(`auctions/${id}`);
    },

    update(id, body) {
        return query(`auctions/${id}`, "patch", body);
    },

    destroy(id) {
        return query(`auctions/${id}`, "delete")
    },
    
    create(body) {
        return query("auctions", "post", body)
    }
};

export default Auction;
