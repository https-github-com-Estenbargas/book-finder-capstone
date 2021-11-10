import React from "react"
import {Col, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
export function MainSideBar() {
    return (
        <>
               <Nav varient={"pill"}  className={"d-flex flex-column align-items-center text-dark m-3 sidebar min-vh-100"}>
                    <Nav.Item>
                        <Link exact to={"/404"}>
                          <p className={"fs-2 text-white text-center"}>Home</p>
                        </Link>
                    </Nav.Item>
                   <Nav.Item>
                       <Link exact to={"/404"}>
                           <p  className={" fs-2 text-white text-center"}>Home</p>
                       </Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Link exact to={"/404"}>
                           <p className={" fs-2 text-white text-center"}>Home</p>
                       </Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Link exact to={"/404"}>
                           <p className={" fs-2  text-white text-center"}>Home</p>
                       </Link>
                   </Nav.Item>
               </Nav>
        </>
    )
}