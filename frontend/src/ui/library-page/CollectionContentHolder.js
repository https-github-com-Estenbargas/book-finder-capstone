import {Col, Container, Image, Row} from "react-bootstrap";

import React from "react";

import {useHistory} from "react-router-dom";

export const CollectionContentHolder =  ({book,user,userBook}, props) => {

    const history = useHistory()

    function handleClick() {
        history.push(`/details-page/${book.bookId}`)
    }


    const collectedBook =  userBook.find(collected => collected.userBookBookId === book.bookId )
    console.log(collectedBook)

    if(collectedBook === undefined) {
      window.location.reload()
    }

    return (
        <>

            {
                (collectedBook.userBookCollection === 1 )
                ? (
                    <>
                        <Col lg={2}>
                            <a onClick={handleClick} className={"d-flex justify-content-center"}>
                                <Image className={"library-img"} src={book.bookImage} />
                            </a>

                            <p className={"text-center text-light my-3"}>{book.bookTitle}</p>
                        </Col>
                    </>
                )
            : (
                <></>
                )

            }


        </>
    )
}