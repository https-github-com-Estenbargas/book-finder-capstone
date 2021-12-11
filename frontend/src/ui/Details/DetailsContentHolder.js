import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";


export function DetailsContentHolder(props) {

    const {book} = props

return(
    <>
        <Container fluid>
            <Row>
                <Col className={'d-flex justify-content-center'}>
                    <Image src={book.bookImage}/>
                    <div className={"d-flex justify-content-center flex-column"}>
                        <Button>Add To Favorites</Button>
                        <Button>Add To Collection</Button>
                    </div>
                </Col>

                <Col className={'d-flex justify-content-center'}>
                    <h1 className={'text-center'}>Details</h1>
                </Col>
            </Row>
        </Container>

        <Container fluid className={'d-flex justify-content-center'}>
            <h1 className={'text-center'}>Description</h1>
        </Container>
    </>
    )
}

