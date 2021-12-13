import React from "react"
import {Button, Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBooks, fetchBookByBookId} from "../../store/book";
import {useHistory} from "react-router-dom";
import {httpConfig} from "../../utils/httpConfig";


export function HomeContentHolder({book, user}, props) {
    // console.log(book)
    const dispatch = useDispatch()
   let history = useHistory()

function handleClick() {
    history.push(`/details-page/${book.bookId}`)
}

    const clickCollection = () => {
        httpConfig.post("/apis/user-book/" , {userBookBookId: book.bookId, userBookUserId: user.userId})
            .then(reply => {
                if(reply.status === 200) {
                    dispatch(fetchAllBooks())
                }
                console.log(reply)
            });
    }
    const clickFavorite = () => {
        httpConfig.post("/apis/user-book/favorite/" , {userBookBookId: book.bookId, userBookUserId: user.userId})
            .then(reply => {
                if(reply.status === 200) {
                    dispatch(fetchAllBooks())
                }
                console.log(reply)
            });
    }

    return(
        <>
        <Row xs={12} md className={"p-3 my-2 border-bottom border-dark"}>
            <Col md={2} className={"d-flex justify-content-center flex-column"}>
                <Link to={`/details-page/${book.bookId}`} onClick={handleClick}  className={"d-flex justify-content-center my-2 p-1"}>
                    <Image src={book.bookImage}/>
                </Link>

                <div className={"d-flex justify-content-center flex-column"}>
                    <Button onClick={clickCollection}>Add To Collection</Button>
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