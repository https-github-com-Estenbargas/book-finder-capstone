import {Col, Container, Image, Row} from "react-bootstrap";

import React from "react";

import {useHistory} from "react-router-dom";

export const FavoriteContentHolder  =  ({book,user,userBook}, props) => {
    const history = useHistory()

    function handleClick() {
        history.push(`/details-page/${book.bookId}`)
    }
    const collectedBook = userBook.find(collected => collected.userBookBookId === book.bookId )
    console.log(collectedBook)
    return (
        <>



            {
                (collectedBook.userBookFavorite === 1 )
                    ? (
                        <>
                            <Col lg={2}>
                                <a onClick={handleClick} className={"d-flex justify-content-center"}>
                                    <Image className={"library-img"} src={book.bookImage} />
                                </a>

                                <p className={"text-center my-3 text-light h5"}>{book.bookTitle}</p>
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