import React, { useState, useEffect } from "react";
import Page from "./Page";
import Auction from "../models/Auction";
import { checkStatusCode } from "../helpers";
import Card from "../components/Card";

function AuctionIndexPage({ history }) {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Auction.all().then(response => {
            if (checkStatusCode(response.status)) {
                setAuctions(response.auctions);
            }
            setLoading(false);
        });
        return () => {};
    }, []);

    return (
        <Page title="Biddr | Auctions">
            <h1>All Auctions</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="All-Auctions">
                    {auctions.map(auction => {
                        return (
                            <Card
                                id={auction.id}
                                key={Math.random}
                                title={auction.title}
                                description={auction.description}
                                footer={`Ends at ${new Date(
                                    auction.end_date
                                ).toLocaleString()}`}
                                clickHandler={e => {
                                    history.push(
                                        `/auctions/${e.currentTarget.id}`
                                    );
                                }}
                            >
                                <small>Reserve Price: ${auction.reserve_price}</small>
                            </Card>
                        );
                    })}
                </div>
            )}
        </Page>
    );
}

export default AuctionIndexPage;
