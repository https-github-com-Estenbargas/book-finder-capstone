import React from "react"
import {BackToHomeSideBar, HomeSideBar, LibrarySideBar} from "./shared/components/SideBars";
import {Col, Container, Image, Row} from "react-bootstrap";
import {HomeOffCanvasSideBar , LibraryOffCanvasSideBar, BackToHomeOffCanvasSideBar} from "./shared/components/OffCanvasSideBar"

export const Home = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <HomeSideBar />
                    <Col xs={"4"} className={"ps-1"}>
                        <LibrarySideBar />
                        <LibraryOffCanvasSideBar />
                    </Col>
                    <Col xs={"4"} className={"ps-1"}>
                        <BackToHomeSideBar />
                        <BackToHomeOffCanvasSideBar />
                    </Col>
                    <Col xs={"4"} className={"ps-1"}>
                        <HomeOffCanvasSideBar />
                    </Col>

                </Row>
            </Container>

        </>
    )
}
