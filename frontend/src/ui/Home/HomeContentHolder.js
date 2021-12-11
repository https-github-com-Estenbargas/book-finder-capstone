import React from "react"
import {Button, Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBookByBookId} from "../../store/book";
import {useHistory} from "react-router-dom";
import {httpConfig} from "../../utils/httpConfig";


export function HomeContentHolder(props) {

    const {book} = props
   let history = useHistory()
function handleClick() {
    history.push(`/details-page/${book.bookId}`)
}

    const clickCollection = () => {
        httpConfig.post("/apis/user-book/" , {userBookBookId: book.bookId})
            .then(reply => {
                if(reply.status === 200) {
                    dispatchEvent(fetchBookByBookId(book.bookId))
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