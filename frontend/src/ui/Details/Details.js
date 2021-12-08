import {MainNav} from "../shared/components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import {BackToHomeSideBar, DetailsSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";

export const Details = () => {
    return (
        <>
            <MainNav />
            <Container fluid>
                <Row>
                    <DetailsSideBar />
                    <BackToHomeOffCanvasSideBar />
                    <Col xs={'10'} className={'bg-secondary'} id={'content-wrapper'}>

                        <Container fluid>
                            <Row>
                                <Col className={'d-flex justify-content-center'}>
                                    1
                                </Col>

                                <Col className={'d-flex justify-content-center'}>
                                    <h1 className={'text-center'}>Details</h1>
                                </Col>
                            </Row>
                        </Container>

                        <Container fluid className={'d-flex justify-content-center'}>
                            <h1 className={'text-center'}>Description</h1>
                        </Container>

                    </Col>
                </Row>
            </Container>
        </>
    )
}