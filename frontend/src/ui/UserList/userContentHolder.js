import React from "react";
import {Button, Col, Image, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserByUserId} from "../../store/user";
import {useHistory} from "react-router-dom";

export function UserContentHolder(props) {

    const {user} = props
    let history = useHistory()

    const users = useSelector(state => state.users ? state.users : [])
    console.log(users)
    const dispatchUsers = useDispatch()

    function handleClick() {
        dispatchUsers(fetchUserByUserId(user.userId))
        console.log("is clicked", user.userId)
        history.push(`/user-profile/${user.userId}`)
    }

    return(
        <>
            <Row xs={12} md className={"p-1 my-2 border-bottom border-dark"}>
                <Col xs={2} className={"d-flex justify-content-center flex-column mx-3"}>
                    <a onClick={handleClick}  className={"d-flex justify-content-center my-2"}>
                        <Image width={"100px"} height={"100px"} className={"rounded-circle p-2"} src={user.userImage}/>
                    </a>
                </Col>
                <Col className={"d-flex flex-column justify-content-center"}>
                    <h2>Username: {user.userName}</h2>
                </Col>
            </Row>

        </>
    )
}