import React from "react"
import {Image, Navbar} from "react-bootstrap";
import placeholder from "../imgs/placeholder-profileimg.png"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../store/auth";

export function MainNav(props) {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const initialEffect = () => {
        dispatch(fetchAuth())
    }
    React.useEffect(initialEffect, [dispatch])
    return (
        <>
            <header>
                <Navbar className="bg-secondary d-flex justify-content-end border-bottom border-dark">
                    <Navbar.Brand className={"pe-2"}>
                        {auth !== null ? (
                            <>
                            <Link to = {`/user-profile/${auth?.userId}`}>
                                <Image className={"rounded-circle"} src={auth.userImage} width={"50"} height={"50"} alt={"Profile Image"}/>
                            </Link>
                            </>
                        ): (
                            <>
                                <Link to = {`/login`}>
                                    <Image className={"rounded-circle"} src={placeholder} width={"50"} height={"50"} alt={"Profile Image"}/>
                                </Link>
                            </>
                            )}
                    </Navbar.Brand>
                </Navbar>
            </header>
        </>

    )
}