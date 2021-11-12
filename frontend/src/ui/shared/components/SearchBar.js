import React, {useState} from "react"
export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <form className={"justify-content-center px-1 py-2 d-flex "} role={"search"} id={"form"}>
                <input className={"w-75"} type={"text"} id={"input"} placeholder={"Search"} onChange={(event) => {setSearchTerm(event.target.value)}} />
            </form>

        </>
    )
}



