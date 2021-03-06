import {MainNav} from "../shared/components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import {BackToHomeSideBar, DetailsSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchBookByBookId} from "../../store/book";
import {DetailsContentHolder} from "./DetailsContentHolder";
import {fetchUserByUserId} from "../../store/user";

export const  Details = (props) => {
    const dispatchBooks = useDispatch()
    const {match} = props
    const book = useSelector(state => state.books
        ? state.books.filter(books => books.bookId === match.params.bookId)
        : []
    );
    const user = useSelector(state => {return state.auth ? state.auth : null})
    const initialEffect = async () => {
        dispatchBooks(fetchBookByBookId(match.params.bookId))
        dispatchBooks(fetchUserByUserId())
    }
    React.useEffect(initialEffect, [dispatchBooks])

    return (
        <>
            <MainNav/>
            <BackToHomeOffCanvasSideBar/>
            <Container fluid className={"p-5"}>

                <Row>

                        {book.map(book => <DetailsContentHolder key={book.bookId} book={book} user={user}/>)}
                </Row>
            </Container>
        </>
    )
}


