import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchBookByBookId} from "../../store/book";
import React from "react";
import {fetchBooksByUserBookBookId, fetchUserBookByUserId} from "../../store/userBook";

export const LibraryContentHolder = ({book,user,userBook}, props) => {
console.log(userBook)
    const dispatch= useDispatch()

    //const initialEffect = async () => {
    //await dispatch(fetchBooksByUserBookBookId(userBook.userBookBookId))
    //
    // }
    // React.useEffect(initialEffect, [dispatch])


    return (
        <>
            <Col>

            </Col>

        </>
    )
}