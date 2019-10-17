import React from "react";
import Page from "./Page";
import Form from "../components/Form";
import FormField from "../components/FormField";
import Session from "../models/Session";

function SignInPage({ setUser, history }) {
    const submitHandler = credentials => {
        Session.create(credentials).then(response => {
            setUser(response);
            history.push("/")
        });
    };

    return (
        <Page title="Biddr | Sign In">
            <Form
                title="Sign In"
                fields={["email", "password"]}
                submitHandler={submitHandler}
            >
                <FormField title="Email" name="email" />
                <FormField title="Password" name="password" type="password" />

                <FormField submit title="Sign In!" />
            </Form>
        </Page>
    );
}

export default SignInPage;
