import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";

export function DetailsContentHolder(props) {
  const  {book} = props
    return(
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Image src={book.bookImage} />
                        <div className={"d-flex flex-column"}>
                            <Button className={"w-25"}>Add To Collection</Button>
                            <Button className={"w-25"}>Add To Favorites</Button>
                            <p>Link To Share</p>
                            <p>placeholder/details-page/{book.bookId}</p>
                        </div>
                    </Col>

                    <Col className={'d-flex justify-content-center flex-column'}>
                        <div className={"align-content-start"}>
                            <h1>{book.bookTitle}</h1>
                            <h2>{book.bookAuthor}</h2>
                        </div>
                        <div className={"my-3"}>
                        <h3 className={'text-center'}>Details</h3>
                        <ul>
                            <li>Genre: {book.bookGenre}</li>
                            <li>Publisher: {book.bookPublisher}</li>
                            <li>ISBN: {book.bookIsbn}</li>
                        </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className={'d-flex justify-content-center flex-column my-5'}>
                <h1 className={'text-center'}>Description</h1>
                <p>{book.bookDescription}</p>
            </Container>


        </>
    )
}