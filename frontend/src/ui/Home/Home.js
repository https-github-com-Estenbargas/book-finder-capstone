import React from "react"
import {BackToHomeSideBar, HomeSideBar, LibrarySideBar} from "../shared/components/SideBars";
import {Col, Container, Image, Row} from "react-bootstrap";
import {HomeOffCanvasSideBar , LibraryOffCanvasSideBar, BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar"
import {MainNav} from "../shared/components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRandomBooks} from "../../store/book";
import Placeholder from "../shared/imgs/placeholder-profileimg.png";


export const Home = () => {

    const books = useSelector(state => state.books ? state.books : [])
    console.log(books)
    const dispatch = useDispatch()

    const initialEffect = () => {
        dispatch(fetchAllRandomBooks())
    }
    React.useEffect(initialEffect, [dispatch])

    return (
        <>
            <MainNav />
            <Container fluid>
                <Row>
                    <HomeSideBar />

                    <Col xs={"10"}>
                        <Row className={"border-top border-dark"}>
                            <Image className={"user-images rounded-circle p-3"} src={Placeholder} alt={"placeholder"} width={"30"} height={"30"} />
                            <p>PlaceHolder Text</p>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
