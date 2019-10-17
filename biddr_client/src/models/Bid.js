import query from "./query"

const Bid = {
    create(auctionId, body) {
        return query(`auctions/${auctionId}/bids`, "post", body)
    },
    delete(auctionId, id) {
        return query(`auctions/${auctionId}/bids/${id}`, "delete")
    }
}

export default Bid