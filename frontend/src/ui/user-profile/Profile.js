import {Col, Container, Row} from "react-bootstrap";
import {BackToHomeSideBar, HomeSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar, HomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";
import {MainNav} from "../shared/components/NavBar";

export const ProfilePage = () => {
    return (
        <>
           <MainNav />
            <Container fluid>
            <Row>
                <BackToHomeSideBar />
                <BackToHomeOffCanvasSideBar />
                <Col xs={'8'} className={'bg-secondary'} id={'content-wrapper'}>
                        <Row>
                            1
                        </Row>

                        <Row>
                            2
                        </Row>

                        <Row>
                            3
                        </Row>

                        <Row>
                            4
                        </Row>
                        <Row>
                            5
                        </Row>
                        <Row>
                            6
                        </Row>
                </Col>
            </Row>
            </Container>
        </>
    )
}