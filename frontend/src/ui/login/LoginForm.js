import React from "react"
import {Button, Container} from "react-bootstrap";
import "./Login.css"

export const LoginForm = () => {
    return (
        <>

                <Container fluid className={"min-vh-100 min-vw-100 d-flex align-items-center justify-content-center"} >
                    <form className={"d-flex flex-column p-5"} id={"form-wrapper"}>
                        <h1 className={"text-center"}>Sign In</h1>

                        <label className={"input-labels my-1"}>
                            <h2>Email</h2>
                            <input type="email" id="email" className={"p-1 my-1"}/>
                        </label>
                        <label className={"input-labels my-1"}>
                            <h2>Password</h2>
                            <input type="text" className={"p-1 my-1"}/>
                        </label>
                        <Button className={"w-25 my-1"}>a</Button>
                    </form>
                </Container>

        </>
    )
}
