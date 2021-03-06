import {Col, Container, Image, Row} from "react-bootstrap";
import {BackToHomeSideBar, HomeSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar, HomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";
import {MainNav} from "../shared/components/NavBar";
import Placeholder from "../shared/imgs/placeholder-profileimg.png";
import "./UserList.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers} from "../../store/user";
import {UserContentHolder} from "./userContentHolder";
import {fetchAuth} from "../../store/auth";
export const UserList = () => {

    const users = useSelector(state => state.users ? state.users: [])
    console.log(users)
    const dispatchUsers = useDispatch()

    const initialEffect = async () => {
        await dispatchUsers(fetchAuth())
        dispatchUsers(fetchAllUsers())
    }
    React.useEffect(initialEffect, [dispatchUsers])

    return (
        <>
            <MainNav/>
            <Container fluid>
                <Row>
                    <BackToHomeOffCanvasSideBar/>
                    <Col className={'bg-secondary border-top border-dark'} id={'content-wrapper'}>
                        {users.map(user => <UserContentHolder key = {user.userId} user = {user}/>)}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
