import React from "react"
import {BackToHomeSideBar, HomeSideBar, LibrarySideBar} from "../shared/components/SideBars";
import {Col, Container, Image, Row} from "react-bootstrap";
import {HomeOffCanvasSideBar , LibraryOffCanvasSideBar, BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar"
import {MainNav} from "../shared/components/NavBar";
import Placeholder from "../shared/imgs/book shelph draft2.png"
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

                    <Col xs={"10"}>
                        <HomeOffCanvasSideBar />
                        <p>a;sldkj</p>

                    </Col>
                </Row>
            </Container>

        </>
    )
}
