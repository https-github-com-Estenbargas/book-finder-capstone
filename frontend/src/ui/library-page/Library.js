import React from "react";
import {MainNav} from "../shared/components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import {LibraryOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserByUserId} from "../../store/user";
import {fetchUserBookByUserId} from "../../store/userBook";
import {HomeContentHolder} from "../Home/HomeContentHolder";
import {LibraryContentHolder} from "./LibraryContentHolder";
import {DetailsContentHolder} from "../Details/DetailsContentHolder";
import {fetchBooksByUserBookBookId, getAllBooks} from "../../store/book";


export const Library = () => {
    const book = useSelector(state => state.books ? state.books : [])
    const dispatch = useDispatch()
    const user = useSelector(state => {return state.auth ? state.auth : null})
    const userBook = useSelector(state => state.userBooks ? state.userBooks : [])

    const initialEffect = async () => {
        await dispatch( fetchUserBookByUserId())
        await dispatch(getAllBooks())
        dispatch(fetchBooksByUserBookBookId())
    }


    React.useEffect(initialEffect, [dispatch])

    console.log(userBook)
    return (
        <>
            <MainNav />
            <LibraryOffCanvasSideBar />
            <Container fluid>
                <Row>

                </Row>
            </Container>
        </>
    )
}