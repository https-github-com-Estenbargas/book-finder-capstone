import React, {useState} from "react";
import {Button, Container, Nav, Offcanvas} from "react-bootstrap";
import {SearchBar} from "./SearchBar";
import {Link} from "react-router-dom";

export function HomeOffCanvasSideBar({name, ...props}) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (

        <>
            <Container>
                <Button id={"sidebar-toggler"} variant={"light"} onClick={handleShow} className={"text-black"}>Open Sidebar</Button>
            </Container>

            <Offcanvas show={show} onHide={handleClose} className={"min-vw-100 bg-secondary"} id={"offcanvas-sidebar"}>
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SearchBar />
                    <Nav className={"d-flex flex-column py-3"} id={"offcanvas-nav"}>
                        <Nav.Item className={"pt-2"}>
                        <Link exact to={"/library"}>
                            <p className={"text-white text-center"}>Library</p>
                        </Link>
                        </Nav.Item>
                        <Nav.Item className={"pt-2"}>
                            <a href={"#top-rated-filter"}>
                                <p className={"text-center"}>Top-Rated</p>
                            </a>
                        </Nav.Item>
                        <Nav.Item className={"pt-2"}>
                            <a href={"#genre-filter"}>
                                <p className={"text-center"}>Genre</p>
                            </a>
                        </Nav.Item>
                        <Nav.Item className={"pt-2"}>
                            <Link exact to={"/user-list"}>
                                <p className={"text-white text-center"}>Find My Friend</p>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export function LibraryOffCanvasSideBar({name, ...props}) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (

        <>
            <Button id={"sidebar-toggler"} variant={"light"} onClick={handleShow} className={"text-black"}>Open Sidebar</Button>
            <Offcanvas show={show} onHide={handleClose} className={"min-vw-100 bg-secondary"} id={"offcanvas-sidebar"}>
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SearchBar />
                    <Nav className={"d-flex flex-column py-3"} id={"offcanvas-nav"}>
                        <Nav.Item className={""}>
                            <Link exact to={"/"}>
                                <p className={"text-white text-center"}>Back To Home</p>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className={"pt-2"}>
                            <a href={"#collection-section"}>
                                <p className={"text-center"}>Collection</p>
                            </a>
                        </Nav.Item>
                        <Nav.Item className={"pt-2"}>
                            <a href={"#favorites-section"}>
                                <p className={"text-center"}>Favorites</p>
                            </a>
                        </Nav.Item>
                        <Nav.Item className={"pt-2"}>
                            <a href={"#recently-viewed-section"}>
                                <p className={"text-center"}>Recent</p>
                            </a>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export function BackToHomeOffCanvasSideBar({name, ...props}) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (

        <>
            <Button id={"sidebar-toggler"} variant={"light"} onClick={handleShow} className={"text-black"}>Open Sidebar</Button>
            <Offcanvas show={show} onHide={handleClose} className={"min-vw-100 bg-secondary"} id={"offcanvas-sidebar"}>
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SearchBar />
                    <Nav className={"d-flex flex-column py-3"} id={"offcanvas-nav"}>
                        <Nav.Item className={""}>
                            <Link exact to={"/"}>
                                <p className={"text-white text-center"}>Back To Home</p>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}