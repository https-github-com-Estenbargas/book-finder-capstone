import React from "react"
import {BackToHomeSideBar, HomeSideBar, LibrarySideBar} from "../shared/components/SideBars";
import {Col, Container, Image, Row} from "react-bootstrap";
import {HomeOffCanvasSideBar , LibraryOffCanvasSideBar, BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar"
import {MainNav} from "../shared/components/NavBar";
import Placeholder from "../shared/imgs/book shelph draft2.png"
import "./Home.css"
export const Home = () => {
    return (
        <>
            <MainNav />
           <Container fluid id={"banner"} className={"d-flex justify-content-center py-5"} >
               <Image className={"rounded-circle"} id={"banner-image"} src={Placeholder}/>
           </Container>
            <Container fluid>
                <Row>

                    <HomeSideBar />
                    <HomeOffCanvasSideBar />
                    <Col xs={"10"}>
                        <Row>
                            <Col xs={"6"}>
                                a
                            </Col>
                            <Col xs={"6"}>
                                a
                            </Col>
                            <Col xs={"12"}>
                               a
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>

        </>
    )
}
