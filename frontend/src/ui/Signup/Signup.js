import React from "react"
import {MainNav} from "../shared/components/NavBar.js"
import {PostForm} from "./SignupForm"
import {Container} from "react-bootstrap";

export const Signup = () => {
    return (
        <>
            <MainNav />
            <Container fluid className={"d-flex justify-content-center align-items-center w-75"}>
            <Container className={"p-sm-4 py-2 bg-dark"}>
                        <h1 className={"text-light"}>Sign Up</h1>
                <PostForm />

            </Container>
            </Container>


        </>
    )
}