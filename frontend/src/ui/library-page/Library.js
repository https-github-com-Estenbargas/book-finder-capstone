import React from "react";
import {MainNav} from "../shared/components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import {LibraryOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserByUserId} from "../../store/user";
import {fetchUserBookByUserId} from "../../store/userBook";
import {HomeContentHolder} from "../Home/HomeContentHolder";
import {CollectionContentHolder} from "./CollectionContentHolder";
import {DetailsContentHolder} from "../Details/DetailsContentHolder";
import {fetchAllBooks, fetchBooksByUserBookBookId, getAllBooks} from "../../store/book";
import {FavoriteContentHolder} from "./FavoriteContentHolder";


export const Library = () => {

    const book = useSelector(state => state.books ? state.books : [])
    const dispatch = useDispatch()
    const user = useSelector(state => {return state.auth ? state.auth : null})
    const userBook = useSelector(state => state.userBooks ? state.userBooks : [])

    const initialEffect = async () => {
       await dispatch(fetchBooksByUserBookBookId())
    }

    React.useEffect(initialEffect, [dispatch])


    return (
        <>
            <MainNav />
            <LibraryOffCanvasSideBar />
            <Container fluid>


                <Row className={"bg-dark p-2"} id={"collection-section"}>
                    <h1 className={"text-light p-2 my-3"}>Collection</h1>
                            {book.map(Book => <CollectionContentHolder key={userBook.userBookUserId} book={Book} user={user} userBook={userBook}/>)}
                </Row>
                <Row id={"favorites-section"} className={"bg-light p-2"} >
                    <h1 className={"p-2 my-3"}>Favorite</h1>
                    {book.map(Book => <FavoriteContentHolder key={userBook.userBookUserId} book={Book} user={user} userBook={userBook}/>)}
                </Row>
            </Container>
        </>
    )
}