import React from "react"
import {Button, Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserBooks} from "../../store/book";
import {useHistory} from "react-router-dom";

export function ProfileContentHolder (props) {
    const {book} = props
    let history = useHistory()

    const userBooks = useSelector(state => state.userBooks ? state.userBooks: [])
    const dispatchUserBooks = useDispatch()

    function handleClick() {
        dispatchUserBooks(fetchUserBooks(book.userBookBookId))
        console.log("is clicked", book.userBookBookId)
        history.push(`/details-page/${book.userBookBookId}`)
    }

    const userBook = book.userBookBookId
    return(
        <>
            <Row xs={12} md className={"p-3 my-2 border-bottom border-dark text-light"}>
                <Col xs={2} className={"d-flex justify-content-center flex-column"}>
                    <a onClick={handleClick}  className={"d-flex justify-content-center my-2 p-1"}>
                        <Image src={book.bookImage}/>
                    </a>

                    <div className={"d-flex justify-content-center flex-column"}>
                        <Button variant={"outline-light"}>Add To Favorites</Button>
                        <Button variant={"outline-light"}>Add To Collection</Button>
                    </div>

                </Col>
                <Col className={"d-flex flex-column"}>
                    <p>Title: {book.bookTitle}</p>
                    <p>Author: {book.bookAuthor}</p>
                    <p>Genre: {book.bookGenre}</p>
                    <div>
                        {book.bookDescription}
                    </div>
                </Col>
            </Row>

        </>
    )
}