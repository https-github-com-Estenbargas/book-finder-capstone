import {MainNav} from "../shared/components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import {BackToHomeSideBar, DetailsSideBar} from "../shared/components/SideBars";
import {BackToHomeOffCanvasSideBar} from "../shared/components/OffCanvasSideBar";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {DetailsContentHolder} from "./DetailsContentHolder";
import {HomeContentHolder} from "../Home/HomeContentHolder";
import book, {fetchAllRandomBooks, fetchBookByBookId} from "../../store/book";


export const Details = () => {

    const books = useSelector(state => state.books ? state.books : [])
    console.log(books)

    const dispatchBooks = useDispatch()


    const initialEffect = () => {
        dispatchBooks(fetchBookByBookId())
    }
    React.useEffect(initialEffect, [dispatchBooks])
    return(
        <>
            <MainNav />
            <Container fluid>
                <Row>
                    <DetailsSideBar />
                    <BackToHomeOffCanvasSideBar />
                    <Col xs={'10'} className={'bg-secondary'} id={'content-wrapper'}>
                    </Col>
                </Row>
            </Container>
        </>
    )
}