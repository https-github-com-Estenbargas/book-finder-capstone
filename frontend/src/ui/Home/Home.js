import React from "react"
import {BackToHomeSideBar, HomeSideBar, LibrarySideBar} from "../shared/components/SideBars";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {HomeOffCanvasSideBar , LibraryOffCanvasSideBar, BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar"
import {MainNav} from "../shared/components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRandomBooks} from "../../store/book";
import Placeholder from "../shared/imgs/placeholder-profileimg.png";
import {HomeContentHolder} from "./HomeContentHolder";



export const Home = () => {
    const books = useSelector(state => state.books ? state.books : [])
    console.log(books)
    const dispatchBooks = useDispatch()

    const initialEffect = () => {
        dispatchBooks(fetchAllRandomBooks())
    }
    React.useEffect(initialEffect, [dispatchBooks])

    return (
        <>
            <MainNav />
            <Container fluid>
                <Row>
                    <HomeSideBar />

                    <Col xs={"12"} md={"10"}>
                            {books.map(book => <HomeContentHolder key={book.bookId} book={book}/>)}
                    </Col>
                </Row>
            </Container>

        </>
    )
}
