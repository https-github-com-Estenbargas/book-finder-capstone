import React from "react"
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <Link exact to={"/login"}>
                <h1>Home</h1>
            </Link>


        </>
    )
}
