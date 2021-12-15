import {Col, Container, Image, Row} from "react-bootstrap";
import {BackToHomeSideBar, HomeSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";
import {MainNav} from "../shared/components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooksByUserBookBookId} from "../../store/book";
import {ProfileContentHolder} from "./ProfileContentHolder";
import {fetchAuth} from "../../store/auth";
import {fetchUserByUserId, fetchUserByUserIdParams} from "../../store/user";

export const ProfilePage = ({match}) => {
    const book = useSelector(state => state.books ? state.books: [])
    const userBooks = useSelector(state => state.userBooks ? state.userBooks: [])
    const user = useSelector(state => state.users ? state.users: []);
    const auth = useSelector(state => state.auth)
    const dispatchUserBooks = useDispatch()
    const initialEffect = async () => {
        await dispatchUserBooks(fetchUserByUserIdParams(match.params.userId))
        dispatchUserBooks(fetchBooksByUserBookBookId(match.params.userId))
        dispatchUserBooks(fetchAuth())
    }
    React.useEffect(initialEffect, [dispatchUserBooks])
    console.log(userBooks)
    return (
        <>
           <MainNav />
            <BackToHomeOffCanvasSideBar />
            {auth !== null ? (
                <>
                    <Container>
                        <Row className={"d-flex align-items-center"}>
                            <Col><Image src = {user.userImage}/></Col>
                            <Col className={"text-start"}><h2>Username: {user.userName}</h2></Col>
                        </Row>
                        <Row>
                            <Col className={'bg-secondary'} id={'content-wrapper'}>
                                <h3 className={"text-center"}>{user.userName}'s Books</h3>
                                <Row>
                                    {book.map(book => <ProfileContentHolder key={userBooks.userBookBookId} book = {book}/>)}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </>
            ): (
                <>
                <h1 className={"text-center"}>Please log in.</h1>
                </>
            )}
        </>
    )

}