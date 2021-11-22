import React from "react"
import {Container, Button} from "react-bootstrap"
import "./Signup.css"
import {Link} from "react-router-dom";

export const SignupForm = () => {
    return (
        <>

            <Container fluid className={"min-vh-100 min-vw-100 d-flex align-items-center justify-content-center"} >
                <form className={"d-flex flex-column p-5 text-white bg-dark"} id={"form-wrapper"}>
                    <h1 className={"text-center"}>Create an account</h1>

                    <label className={"input-labels my-1"}>
                        <h2>Email</h2>
                        <input type="email" id="email" className={"p-1 my-1"}/>
                    </label>
                    <label className={"input-labels my-1"}>
                        <h2>Password</h2>
                        <input type="text" className={"p-1 my-1"}/>
                    </label>
                    <div className={"d-flex align-items-stretch"}>
                        <Button id={"form-button"} className={"my-1"}>Submit</Button>
                        <p>Already have an account? Login <Link to="/login">here</Link>.</p>
                    </div>
                </form>
            </Container>

        </>
    )
}