import React, {useState} from "react";
import {Button, Col, Container, Nav, Offcanvas} from "react-bootstrap";
import {SearchBar} from "./SearchBar";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {httpConfig} from "../../../utils/httpConfig";
import {fetchAllBooksByGenre} from "../../../store/book";








export function HomeOffCanvasSideBar({name, ...props}) {
    const [show, setShow] = useState(false)
    const history = useHistory()
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const dispatch = useDispatch()

    function handleUserListClick() {
        history.push("/user-list")
    }

    const clickGenre = () => {
        httpConfig.get("/apis/books/genre/")
            .then(reply => {
                if(reply.status === 200) {
                    dispatch(fetchAllBooksByGenre())
                }
                console.log(reply)
            });
    }

    return (

        <>
            <Container className={"w-auto"} id={"toggler-container"}>
                <Button id={"sidebar-toggler"} variant={"light"} onClick={handleShow} className={"text-black d-flex flex-column"}>Menu</Button>
            </Container>

            <Offcanvas show={show} onHide={handleClose} className={"bg-secondary"} id={"offcanvas-sidebar"}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className={"d-flex flex-column justify-content-center py-3"} id={"offcanvas-nav"}>
                        <Nav.Item className={"pt-2"}>
                        <Link exact to={"/library"}>
                            <p className={"text-white text-center h1"}>Library</p>
                        </Link>
                        </Nav.Item>
                        <Nav.Item className={"pt-2"}>
                            <a onClick={clickGenre}>
                                <p onClick={handleClose} className={"text-center h1"}>Genre</p>
                            </a>
                        </Nav.Item>
                        <Nav.Item className={"pt-2"}>
                            <a onClick={handleUserListClick}>
                                <p className={"text-white text-center h1"}>Find My Friend</p>
                            </a>
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
    const history = useHistory()
    function handleHomeClick() {
        history.push("/")
    }
    return (

        <>
            <Container className={"w-auto"} id={"toggler-container"}>
                <Button id={"sidebar-toggler"} variant={"light"} onClick={handleShow} className={"text-black d-flex flex-column"}>SideBar</Button>
            </Container>

            <Offcanvas show={show} onHide={handleClose} className={"bg-secondary"} id={"offcanvas-sidebar"}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className={"d-flex flex-column py-3"} id={"offcanvas-nav"}>
                        <Nav.Item>
                            <a onClick={handleHomeClick}>
                                <p className={"text-white text-center"}>Back To Home</p>
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
            <Container className={"w-auto"} id={"toggler-container"}>
                <Button id={"sidebar-toggler"} variant={"light"} onClick={handleShow} className={"text-black d-flex flex-column"}>SideBar</Button>
            </Container>

            <Offcanvas show={show} onHide={handleClose} className={" bg-secondary"} id={"offcanvas-sidebar"}>
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className={"d-flex flex-column py-3"} id={"offcanvas-nav"}>
                        <Nav.Item className={""}>
                            <Link exact to={"/"}>
                                <p className={"text-white text-center h2"}>Back To Home</p>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}