import React, { useEffect, useState } from "react";
import Page from "./Page";
import Auction from "../models/Auction";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import Modal from "react-modal";
import Form from "../components/Form";
import FormField from "../components/FormField";
import AuctionFields from "../components/AuctionFields";
import Bid from "../models/Bid";
import Card from "../components/Card";

Modal.setAppElement("#root")

function AuctionShowPage({ match, history }) {
    const [auction, setAuction] = useState({ bids: [] });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);

    let highestBid = Math.max(
        ...bids.map(bid => {
            return bid.amount;
        })
    );

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const createBid = data => {
        Bid.create(auction.id, data).then(response => {
            setBids(
                [response, ...bids].sort((a, b) => {
                    return b.amount - a.amount;
                })
            );
        });
    };

    const deleteBid = event => {
        event.persist();
        let bidId = event.target.closest(".Card").id;
        Bid.delete(auction.id, bidId).then(response => {
            setBids(
                bids
                    .filter(bid => {
                        return bid.id.toString() !== bidId;
                    })
                    .sort((a, b) => {
                        return b.amount - a.amount;
                    })
            );
        });
    };

    const updateAuction = data => {
        Auction.update(auction.id, data).then(response => {
            setAuction(response);
            closeModal();
        });
    };

    const destroyAuction = () => {
        Auction.destroy(auction.id).then(response => {
            history.push("/auctions");
        });
    };

    useEffect(() => {
        Auction.one(match.params.id).then(response => {
            setAuction(response);
            setLoading(false);
        });
        return () => {};
    }, []);

    useEffect(() => {
        setBids(
            auction.bids.sort((a, b) => {
                return b.amount - a.amount;
            })
        );
        return () => {};
    }, [auction]);

    return loading ? (
        <p>Loading...</p>
    ) : (
        <Page title={`Biddr | Auction #${auction.id}`}>
            <h1>
                Auction: <span className="highlight">{auction.title}</span>
            </h1>
            <p>{auction.description}</p>
            <p>
                Current Price:{" "}
                <span className="highlight">
                    ${highestBid == -Infinity ? 1 : highestBid}
                </span>
            </p>
            <p>
                Reserve Price:{" "}
                <span className="highlight">
                    {auction.reserve_price >= highestBid ? "Not Met" : "Met"}
                </span>
            </p>
            <small>
                {`Ends at ${new Date(auction.end_date).toLocaleString()}`}{" "}
                <br />
                Created by{" "}
                <span className="highlight">
                    {auction.user.first_name + " " + auction.user.last_name}
                </span>
            </small>

            <div className="action-buttons">
                <DeleteButton deleteHandler={destroyAuction} />
                <EditButton editHandler={openModal} />
            </div>

            <Form
                title="Make a bid"
                fields={["amount"]}
                submitHandler={createBid}
            >
                <FormField
                    title="Amount"
                    name="amount"
                    type="number"
                    min={highestBid + 1}
                />
                <FormField submit name="Bid!" />
            </Form>

            <div className="bids">
                <h2>Previous Bids</h2>
                {bids.map(bid => {
                    return (
                        <Card
                            noclick
                            key={bid.id}
                            description={`$${bid.amount}`}
                            id={bid.id}
                            footer={`Bid at ${new Date(
                                bid.created_at
                            ).toLocaleString()}`}
                        >
                            <DeleteButton deleteHandler={deleteBid} />
                        </Card>
                    );
                })}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // ariaHideApp={false}
                className="Modal"
                overlayClassName="Overlay"
            >
                <button className="close-button" type="button" onClick={closeModal}>Close</button>
                <Form
                    title="Edit Auction"
                    fields={[
                        "title",
                        "description",
                        "end_date",
                        "reserve_price"
                    ]}
                    submitHandler={updateAuction}
                >
                    <AuctionFields auction={auction} />

                    <FormField submit name="Update Auction" />
                </Form>
            </Modal>
        </Page>
    );
}

export default AuctionShowPage;
