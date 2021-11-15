import React from "react";
import {MainNav} from "../shared/components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import {LibrarySideBar} from "../shared/components/SideBars";
import {LibraryOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";


export const Library = () => {
    return (
        <>
            <MainNav />
            <Container fluid>
                <Row>
                    <LibrarySideBar />
                    <LibraryOffCanvasSideBar />
                    <Col xs={"11"}>

                    </Col>
                </Row>
            </Container>
        </>
    )
}