import React from "react";
import Form from "../components/Form";
import Page from "./Page";
import Auction from "../models/Auction";
import FormField from "../components/FormField";
import AuctionFields from "../components/AuctionFields";

function AuctionNewPage({history}) {
    const createAuction = data => {
        Auction.create(data).then(response => {
            history.push(`/auctions/${response.id}`);
        });
    };

    return (
        <Page title="Biddr | New Auction">
            <Form
                title="New Auction"
                fields={["title", "description", "end_date", "reserve_price"]}
                submitHandler={createAuction}
            >
                <AuctionFields />
                <FormField submit name="Create Auction" />
            </Form>
        </Page>
    );
}

export default AuctionNewPage;
