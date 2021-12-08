import React from "react"
import {BackToHomeSideBar, HomeSideBar, LibrarySideBar} from "../shared/components/SideBars";
import {Col, Container, Image, Row} from "react-bootstrap";
import {HomeOffCanvasSideBar , LibraryOffCanvasSideBar, BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar"
import {MainNav} from "../shared/components/NavBar";

export const Home = () => {
    return (
        <>
            <MainNav />
            <Container fluid>
                <Row>
                    <HomeSideBar />

                    <Col xs={"10"}>
                        <HomeOffCanvasSideBar />
                        <p>a;sldkj</p>

                    </Col>
                </Row>
            </Container>

        </>
    )
}
