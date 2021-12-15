import React from "react"
import {LoginForm} from "./LoginForm";
import {Container} from "react-bootstrap";
import {MainNav} from "../shared/components/NavBar";

export const LoginPage = () => {
    return (
        <>
            <MainNav />
            <Container fluid className={"d-flex justify-content-center align-items-center w-75"}>
                <Container className={"p-sm-4 py-2 bg-dark"}>
                    <h1 className={"text-light"}>Sign In</h1>
            <LoginForm />
                </Container>
            </Container>
        </>
    )
}
