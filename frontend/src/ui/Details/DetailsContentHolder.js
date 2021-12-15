import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {httpConfig} from "../../utils/httpConfig";
import {fetchAllBooks, fetchBookByBookId} from "../../store/book";
import {useDispatch} from "react-redux";

export function DetailsContentHolder(props) {
  const  {book, user} = props
    const dispatch = useDispatch()

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

                    <Col lg={"5"}  className={"d-flex justify-content-center align-items-center flex-column"}>
                        <h1 className={"text-center"}>{book.bookTitle}</h1>
                        <h2 className={"text-center mb-3"}>{book.bookAuthor}</h2>
                        <Image src={book.bookImage} id={"details-img"} />
                        <div className={"d-flex flex-column my-3 justify-content-center align-items-center"}>
                            <Button onClick={clickCollection} className={"mb-2"}>Add To Collection</Button>
                            <Button onClick={clickFavorite} className={"w-auto mb-2"}>Add To Favorite</Button>
                            <p className={"text-center"}>Link To Share</p>
                            <p>placeholder/details-page/{book.bookId}</p>
                        </div>
                    </Col>

                    <Col lg={"7"}  className={'d-flex flex-column justify-content-center p-3'}>

                        <h2 className={'text-center'}>Description</h2>
                        <p>{book.bookDescription}</p>
                        <h3 className={"text-center"}>Details</h3>
                        <ul className={"mt-4"}>
                            <li className={"h5"}>Genre: {book.bookGenre}</li>
                            <li className={"h5"}>Publisher: {book.bookPublisher}</li>
                            <li className={"h5"}>ISBN: {book.bookIsbn}</li>
                        </ul>

                    </Col>

            <Container className={'d-flex justify-content-center flex-column my-5'}>

            </Container>


        </>
    )
}
