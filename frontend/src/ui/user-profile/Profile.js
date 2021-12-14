import {Col, Container, Row} from "react-bootstrap";
import {BackToHomeSideBar, HomeSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar, HomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";
import {MainNav} from "../shared/components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserBooks} from "../../store/book";
import {ProfileContentHolder} from "./ProfileContentHolder";

export const ProfilePage = () => {
    const user = useSelector(state => state.users ? state.users: [])
    const dispatchUserBooks = useDispatch()
    const initialEffect = () => {
        dispatchUserBooks(fetchUserBooks())
    }
    React.useEffect(initialEffect, [dispatchUserBooks])
    console.log(userBooks)
    return (
        <>
           <MainNav />
            <Container fluid>
            <Row>
                <BackToHomeSideBar />
                <BackToHomeOffCanvasSideBar />
                <Col xs={'8'} className={'bg-secondary'} id={'content-wrapper'}>
                    <h3>Your Books</h3>
                        <Row>
                            {userBook.map(userBook => <ProfileContentHolder key={userBook.userBookBookId}/>)}
                        </Row>
                </Col>
            </Row>
            </Container>
        </>
    )

}