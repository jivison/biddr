import React, { useState, useEffect } from "react";
import "./App.scss";
import WelcomePage from "./pages/WelcomePage";
import SignInPage from "./pages/SignInPage";
import AuctionIndexPage from "./pages/AuctionIndexPage";
import AuctionShowPage from "./pages/AuctionShowPage";
import AuctionNewPage from "./pages/AuctionNewPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Session from "./models/Session";
import User from "./models/User";
import AuthRoute from "./AuthRoute";
import SignUpPage from "./pages/SignUpPage";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signOut = () => {
        Session.destroy().then(response => {
            setUser(null);
        });
    };

    useEffect(() => {
        User.current().then(response => {
            setUser(response);
            setLoading(false);
        });
        return () => {};
    }, []);

    return loading ? (
        <p>Loading...</p>
    ) : (
        <div className="App">
            <Router>
                <Navbar currentUser={user} signOutHandler={signOut} />
                <AuthRoute
                    exact
                    path="/auction/new"
                    component={AuctionNewPage}
                    currentUser={user}
                />
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    <Route
                        exact
                        path="/auctions"
                        component={AuctionIndexPage}
                    />
                    <Route
                        exact
                        path="/sign_in"
                        render={props => {
                            return <SignInPage setUser={setUser} {...props} />;
                        }}
                    />
                    <Route
                        exact
                        path="/sign_up"
                        render={props => {
                            return <SignUpPage setUser={setUser} {...props} />;
                        }}
                    />
                    <AuthRoute
                        exact
                        path="/auctions/:id"
                        component={AuctionShowPage}
                        currentUser={user}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
