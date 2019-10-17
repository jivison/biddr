import React from "react";

function Page({ title = "Biddr", children, currentUser = null }) {
    document.title = title;


    return (
        <div className="Page">
            <article className="App-content">{children}</article>
        </div>
    );
}

export default Page;
