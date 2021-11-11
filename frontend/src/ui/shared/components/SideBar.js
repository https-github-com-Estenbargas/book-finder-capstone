import React from "react"
import {Col, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SearchBar} from "./SearchBar";
export function MainSideBar() {
    return (
        <>
            <Col xs={"1"} id={"sidebar-wrapper"} className={""}>
                <SearchBar />
               <Nav varient={"pill"} id={"mainNav"}  className={"d-flex flex-column align-items-center text-dark m-3 sidebar min-vh-100"}>
                    <Nav.Item>
                        <Link exact to={"/404"}>
                          <p className={"text-white text-center"}>Home</p>
                        </Link>
                    </Nav.Item>
                   <Nav.Item>
                       <Link exact to={"/404"}>
                           <p  className={"text-white text-center"}>Home</p>
                       </Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Link exact to={"/404"}>
                           <p className={"text-white text-center"}>Home</p>
                       </Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Link exact to={"/404"}>
                           <p className={"text-white text-center"}>Home</p>
                       </Link>
                   </Nav.Item>
               </Nav>
            </Col>

        </>
    )
}