import React from "react";
import FormField from "./FormField";

function AuctionFields({auction = {}}) {
    return (
        <>
            <FormField
                title="Title"
                name="title"
                defaultValue={auction.title}
            />
            <FormField
                title="Description"
                name="description"
                type="textarea"
                defaultValue={auction.description}
            />
            <FormField
                title="End Date"
                name="end_date"
                defaultValue={auction.end_date}
            />
            <FormField
                title="Reserve Price"
                name="reserve_price"
                defaultValue={auction.reserve_price}
            />
        </>
    );
}

export default AuctionFields;
