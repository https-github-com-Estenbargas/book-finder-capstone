import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {httpConfig} from "../../utils/httpConfig";
import {fetchBookByBookId} from "../../store/book";

export function DetailsContentHolder(props) {
  const  {book} = props

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

                    <Col md={"4"} lg className={"d-flex justify-content-center align-items-center flex-column"}>
                        <h1 className={"text-center"}>{book.bookTitle}</h1>
                        <h2 className={"text-center"}>{book.bookAuthor}</h2>
                        <Image src={book.bookImage} id={"details-img"} />
                        <div className={"d-flex flex-column my-3 justify-content-center align-items-center"}>
                            <Button onClick={clickCollection} className={"my-3" } id={"details-button"}>Add To Collection</Button>
                            <p className={"text-center"}>Link To Share</p>
                            <p>placeholder/details-page/{book.bookId}</p>
                        </div>
                    </Col>

                    <Col md={"8"} lg className={'d-flex flex-column justify-content-center'}>

                        <h2 className={'text-center'}>Description</h2>
                        <p>{book.bookDescription}</p>
                        <h3>Details</h3>
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
