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
                    <Col xs={"12"} md={"10"} className={"mx-0"}>
                        <Row className={"bg-secondary py-3 border-top border-dark d-flex flex-row"}>
                            <Col xs={"4"} md={"2"} className={"m-0 p-3 d-flex flex-column justify-content-center align-items-center"}>
                               <Image className={"card-image justify-content-center"} fluid src={"https://dummyimage.com/150x150/fff/aaa"}/>
                               <div className={"text-center mt-2 py-2"} id={"card-text-container"}>
                                   <p>Rating:</p>
                                   <p>Add To Favorites</p>
                                   <p>Add To Collection</p>
                               </div>
                            </Col>
                            <Col xs>
                                a
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>

        </>
    )
}
