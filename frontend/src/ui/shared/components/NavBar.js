import React from "react"
import {Image, Navbar} from "react-bootstrap";
import placeholder from "../imgs/placeholder-profileimg.png"
import {Link} from "react-router-dom";

export function MainNav() {
    return (
        <>
            <header>
                <Navbar className="bg-secondary d-flex justify-content-end">
                    <Navbar.Brand className={"pe-2"}>
                        <Link exact to="/user-profile">
                            <Image className={"rounded-circle"} src={placeholder} width={"50"} height={"50"} alt={"Profile Image"}/>
                        </Link>
                    </Navbar.Brand>
                </Navbar>
            </header>
        </>

    )
}