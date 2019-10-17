import React from "react";
import Form from "../components/Form";
import FormField from "../components/FormField";
import Page from "./Page";
import User from "../models/User";

function SignUpPage({ history, setUser }) {
    const signUp = data => {
        User.create(data).then(response => {
            setUser(response)
            history.push("/");
        });
    };

    return (
        <Page title="Biddr | Sign Up">
            <Form
                submitHandler={signUp}
                title="Sign Up"
                fields={[
                    "email",
                    "first_name",
                    "last_name",
                    "password",
                    "password_confirmation"
                ]}
            >
                <FormField title="Email" name="email" type="email" />
                <FormField title="First Name" name="first_name" />
                <FormField title="Last Name" name="last_name" />
                <FormField title="Password" name="password" type="password" />
                <FormField
                    title="Password Confirmation"
                    name="password_confirmation"
                    type="password"
                />
                <FormField submit title="Sign Up!" />
            </Form>
        </Page>
    );
}

export default SignUpPage;
