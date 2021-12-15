import React from "react"
import {BackToHomeSideBar, HomeSideBar, LibrarySideBar} from "../shared/components/SideBars";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {HomeOffCanvasSideBar , LibraryOffCanvasSideBar, BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar"
import {MainNav} from "../shared/components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBooks} from "../../store/book";
import Placeholder from "../shared/imgs/placeholder-profileimg.png";
import {HomeContentHolder} from "./HomeContentHolder";
import {fetchUserByUserId} from "../../store/user";
import {fetchAuth} from "../../store/auth";
import {fetchUserBookByUserId} from "../../store/userBook";
import {Link} from "react-router-dom";


export const Home = () => {
    const books = useSelector(state => state.books ? state.books : [])
    console.log(books)
    const dispatch = useDispatch()
    const user = useSelector(state => {return state.auth ? state.auth : null})


    const initialEffect = async () => {
       await dispatch(fetchAllBooks())
       await dispatch(fetchUserByUserId())
    }
    React.useEffect(initialEffect, [dispatch])
    return (
        <>

            <MainNav />
            <Container>
                <h1 className={"text-light d-flex justify-content-center"}>Welcome To Book Shelph!</h1>
                <h4 className={"d-flex justify-content-center text-light"}>Please Browse Our Selection!</h4>
                {
                    (user === null )
                        ? (
                            <>
                                <div className={"d-flex justify-content-center"}>
                                    <Link className={"text-light m-3"} to={"/sign-up"}><h2>Sign Up</h2></Link>
                                    <Link className={"text-light m-3"} to={"/login"}><h2>Sign In</h2></Link>
                                </div>
                            </>
                        )
                        : null

                }
                <Row className={"border-top border-dark"}>
                    <HomeOffCanvasSideBar />

                    <Col>
                            {books.map(book => <HomeContentHolder key={book.bookId} book={book} user={user}/>)}
                    </Col>
                </Row>
            </Container>

        </>
    )
}
