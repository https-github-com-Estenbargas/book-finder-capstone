import React from "react"
import {Button, Col, Image, Row} from "react-bootstrap";



export function HomeContentHolder(props) {

    const {book} = props

    return(
        <>
        <Row xs={12} md className={"p-3 my-2 border-bottom border-dark"}>
            <Col xs={2} className={"d-flex justify-content-center flex-column"}>
                <Image src={book.bookImage} />
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