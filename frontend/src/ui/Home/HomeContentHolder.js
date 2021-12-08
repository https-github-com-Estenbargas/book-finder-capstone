import React from "react"
import {Button, Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBookByBookId} from "../../store/book";
import {useHistory} from "react-router-dom";


export function HomeContentHolder(props) {

    const {book} = props
    let history = useHistory()

    const books = useSelector(state => state.books ? state.books : [])
    console.log(books)
    const dispatchBooks = useDispatch()

    // const initialEffect = () => {
    //     dispatchBooks(fetchBookByBookId())
    // }
    // React.useEffect(initialEffect, [dispatchBooks])

function handleClick() {
    dispatchBooks(fetchBookByBookId(book.bookId))
    console.log("is clicked", book.bookId)
    history.push(`/details-page/${book.bookId}`)
}


    console.log(book.bookId)
    const bookId = book.bookId
    return(
        <>
        <Row xs={12} md className={"p-3 my-2 border-bottom border-dark"}>
            <Col xs={2} className={"d-flex justify-content-center flex-column"}>
                <Button onClick={handleClick}  className={"d-flex justify-content-center my-2 p-1"}>
                    <Image src={book.bookImage}/>
                </Button>

                <div className={"d-flex justify-content-center flex-column"}>
                    <Button>Add To Favorites</Button>
                    <Button>Add To Collection</Button>
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