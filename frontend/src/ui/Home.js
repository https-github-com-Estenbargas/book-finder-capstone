import React from "react"
import {MainSideBar} from "./shared/components/SideBar";
import {Col, Container, Image, Row} from "react-bootstrap";


export const Home = () => {
    return (
        <>

            <Container fluid>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <MainSideBar />
                    <Col id={"page-content-wrapper"}>
                        <p>Other Content</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
