import React from "react"
import {LoginForm} from "./LoginForm";
import {Container} from "react-bootstrap";

export const LoginPage = () => {
    return (
        <>
            <Container fluid className={"d-flex justify-content-center align-items-center min-vh-100 w-auto"}>
                <Container className={"p-5 bg-dark"}>
                    <h1 className={"text-light"}>Sign In</h1>
            <LoginForm />
                </Container>
            </Container>
        </>
    )
}
