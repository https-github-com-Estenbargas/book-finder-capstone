import {Col, Container, Row} from "react-bootstrap";
import {BackToHomeSideBar, HomeSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar, HomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";
import {MainNav} from "../shared/components/NavBar";

export const UserList = () => {
    return (
        <>
            <MainNav/>
            <Container fluid>
                <Row>
                    <BackToHomeSideBar/>
                    <BackToHomeOffCanvasSideBar/>
                    <Col xs={'10'} className={'bg-secondary'} id={'content-wrapper'}>
                        {Array.from({ length: 8}).map((_, idx) => (
                        <Row>
                            1
                        </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
