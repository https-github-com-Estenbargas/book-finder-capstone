import React from "react"
import {MainSideBar} from "./shared/components/SideBar";
import {Col, Container, Row} from "react-bootstrap";

export const Home = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={"2"} id={"sidebar-wrapper"} className={"bg-secondary text-white"}>
                    <MainSideBar />
                    </Col>
                    <Col xs={"10"} id={"page-content-wrapper"}>
                        <p>All other Content </p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
