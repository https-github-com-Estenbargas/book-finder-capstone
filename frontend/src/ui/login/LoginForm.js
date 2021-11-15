import React from "react"
import {Button, Container} from "react-bootstrap";
import "./Login.css"
import {Link} from "react-router-dom";

export const LoginForm = () => {
    return (
        <>

                <Container fluid className={"min-vh-100 min-vw-100 d-flex align-items-center justify-content-center"} >
                    <form className={"d-flex flex-column p-5 text-white bg-dark"} id={"form-wrapper"}>
                        <h1 className={"text-center"}>Sign In</h1>

                        <label className={"input-labels my-1"}>
                            <h2>Email</h2>
                            <input type="email" id="email" className={"p-1 my-1"}/>
                        </label>
                        <label className={"input-labels my-1"}>
                            <h2>Password</h2>
                            <input type="text" className={"p-1 my-1"}/>
                        </label>
                        <div className={"d-flex align-items-center"}>
                            <Button id={"form-button"} className={"my-1"}>Submit</Button>
                            <p className={"text-center ms-5 my-0"}> Don't have an account? <Link to="/sign-up">sign up</Link></p>
                        </div>

                    </form>
                </Container>

        </>
    )
}
