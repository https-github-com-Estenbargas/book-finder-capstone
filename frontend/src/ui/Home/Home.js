import React from "react"
import {BackToHomeSideBar, HomeSideBar, LibrarySideBar} from "../shared/components/SideBars";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {HomeOffCanvasSideBar , LibraryOffCanvasSideBar, BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar"
import {MainNav} from "../shared/components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBooks} from "../../store/book";
import Placeholder from "../shared/imgs/placeholder-profileimg.png";
import {HomeContentHolder} from "./HomeContentHolder";
import {fetchUserByUserId} from "../../store/user";
import {fetchAuth} from "../../store/auth";
import {fetchUserBookByUserId} from "../../store/userBook";


export const Home = () => {
    const books = useSelector(state => state.books ? state.books : [])
    console.log(books)
    const dispatch = useDispatch()
    const user = useSelector(state => {return state.auth ? state.auth : null})


    const initialEffect = () => {
        dispatch(fetchAllBooks())
        dispatch(fetchUserByUserId())
    }
    React.useEffect(initialEffect, [dispatch])

    return (
        <>

            <MainNav />
            <Container fluid>
                <Row>
                    <HomeOffCanvasSideBar />
                    <Col>
                            {books.map(book => <HomeContentHolder key={book.bookId} book={book} user={user}/>)}
                    </Col>
                </Row>
            </Container>

        </>
    )
}
