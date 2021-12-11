import React from "react"
import {Col, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SearchBar} from "./SearchBar";
import {httpConfig} from "../../../utils/httpConfig";
import {fetchAllBooksByGenre, fetchBookByBookId} from "../../../store/book";
import {useDispatch} from "react-redux";

export function HomeSideBar() {
    const dispatch = useDispatch()
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
            <Col xs id={"sidebar-wrapper"}>
                <SearchBar/>
                <Nav varient={"pill"} id={"mainNav"}
                     className={"d-flex flex-column align-items-center text-dark m-2 sidebar min-vh-100"}>
                    <Nav.Item className={"pt-2"}>
                        <Link exact to={"/library"}>
                            <p className={"text-white text-center"}>Library</p>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className={"pt-2"}>
                        <a onClick={clickGenre}>
                            <p className={"text-white text-center"}>Genre</p>
                        </a>
                    </Nav.Item>
                    <Nav.Item className={"pt-2"}>
                        <Link to={"/user-list"}>
                            <p className={"text-white text-center"}>Find My Friend</p>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Col>

        </>
    )
}

export function LibrarySideBar() {
    return (
        <>
            <Col xs id={"sidebar-wrapper"}>
                <Nav varient={"pill"} id={"mainNav"}
                     className={"d-flex flex-column align-items-center text-dark sidebar min-vh-100"}>
                    <Nav.Item className={"pt-3"}>
                        <Link exact to={"/"}>
                            <p className={"text-white text-center"}>Back To Home</p>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className={"pt-2"}>
                        <a href={"#collection-section"}>
                            <p className={"text-white text-center"}>Collection</p>
                        </a>
                    </Nav.Item>
                    <Nav.Item>
                        <a className={"align-content-center"} href={"#favorites-section"}>
                            <p className={"text-white text-center"}>Favorites</p>
                        </a>
                    </Nav.Item>
                    <Nav.Item>
                        <a href={"#recently-viewed-section"}>
                            <p className={"text-white text-center"}>Recent</p>
                        </a>
                    </Nav.Item>
                </Nav>
            </Col>
        </>
    )
}
export function BackToHomeSideBar() {
    return (
        <>
            <Col xs id={"sidebar-wrapper"}>
                <Nav varient={"pill"} id={"mainNav"} className={"d-flex flex-column align-items-center text-dark sidebar min-vh-100"}>
                    <Nav.Item className={"pt-3"}>
                        <Link exact to={"/"}>
                            <p className={"text-white text-center"}>Back To Home</p>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </>
    )
}
export function DetailsSideBar() {

    return (
        <>
            <Col xs id={"sidebar-wrapper"}>
                <Nav varient={"pill"} id={"mainNav"} className={"d-flex flex-column align-items-center text-dark sidebar min-vh-100"}>
                    <Nav.Item className={"pt-3"}>
                        <Link exact to={"/"}>
                            <p className={"text-white text-center"}>Back To Home</p>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </>
    )
}