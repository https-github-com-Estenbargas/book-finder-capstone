import {Col, Container, Image, Row} from "react-bootstrap";
import {BackToHomeSideBar, HomeSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar, HomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";
import {MainNav} from "../shared/components/NavBar";
import Placeholder from "../shared/imgs/placeholder-profileimg.png";
import "./UserList.css"
export const UserList = () => {
    return (
        <>
            <MainNav/>
            <Container fluid>
                <Row>
                    <BackToHomeSideBar/>
                    <BackToHomeOffCanvasSideBar/>
                    <Col xs={'10'} className={'bg-secondary'} id={'content-wrapper'}>
                        {Array.from({ length: 9}).map((_, idx) => (
                        <Row className={"border-top border-dark"}>
                            <Image className={"user-images rounded-circle p-3"} src={Placeholder} alt={"placeholder"} width={"30"} height={"30"} />
                            <p>PlaceHolder Text</p>
                        </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
