import React from "react"
import {Button, Container} from "react-bootstrap";
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import jwtDecode from 'jwt-decode'
import * as Yup from "yup";
import {getAuth} from "../../store/auth";
import {Formik} from "formik";
import {httpConfig} from "../../utils/httpConfig";




export const LoginForm = () => {

    const dispatch = useDispatch()
    const initialValues = {userEmail: "", userPassword: ""}

    const validator = Yup.object().shape({
        userEmail: Yup.string()
            .email("email must be a valid email")
            .required("email is required"),
        userPassword: Yup.string()
            .required("password is required")
            .min(8, "Password must be at least eight characters")
    })

    const submitLoginIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in", values)
            .then(reply => {
                let {message, type} = reply
                setStatus({message,type})
                if(reply.status === 200 && reply.headers["authorization"])
                resetForm()
                let jwtToken = jwtDecode(reply.headers["authorization"])
                localStorage.setItem("authorization", reply.headers["authorization"])
                dispatch(getAuth(jwtToken))
            })
    }


    return (
        <>
            <Formik initialValues={initialValues} onSubmit={submitLoginIn} validationSchema={validator}>
                {PostLoginFormContent}
            </Formik>

        </>

    )
}
function PostLoginFormContent(props) {
    const history = useHistory()


    // function handleClick() {
    //     history.push("/")
    // }

    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userEmail">Email Address</label>
                    <div className="input-group">
                        <input type="email" className="form-control" name="userEmail" value={values.userEmail} placeholder="Enter Email" onChange={handleChange} onBlur={handleBlur}/>
                    </div>
                    {
                        errors.userEmail && touched.userEmail && (
                            <div className="alert alert-danger">
                                {errors.userEmail}
                            </div>
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="userPassword">Password</label>
                    <div className="input-group">
                        <input type="password" className="form-control" name="userPassword" value={values.userPassword} placeholder="Enter Password" onChange={handleChange} onBlur={handleBlur}/>
                    </div>
                    {
                        errors.userPassword && touched.userPassword && (
                            <div className="alert alert-danger">
                                {errors.userPassword}
                            </div>
                        )
                    }
                </div>
                <div>
                    <button className="btn btn-primary mb-2"type="submit">Submit</button>
                    <Link exact to={"/"}>Back To Home</Link>
                </div>
            </form>
            {
                status && (<div className={status.type}>{status.message}</div> )
            }
        </>
    )}

//
//         <Container fluid className={"min-vh-100 min-vw-100 d-flex align-items-center justify-content-center"} >
//             <form className={"d-flex flex-column p-5 text-white bg-dark"} id={"form-wrapper"}>
//                 <h1 className={"text-center"}>Sign In</h1>
//
//                 <label className={"input-labels my-1"}>
//                     <h2>Email</h2>
//                     <input type="email" id="email" className={"p-1 my-1"}/>
//                 </label>
//                 <label className={"input-labels my-1"}>
//                     <h2>Password</h2>
//                     <input type="text" className={"p-1 my-1"}/>
//                 </label>
//                 <div className={"d-flex align-items-center"}>
//                     <Button id={"form-button"} className={"my-1"}>Submit</Button>
//                     <p className={"text-center ms-5 my-0"}> Don't have an account? <Link to="/sign-up">sign up</Link></p>
//                 </div>
//
//             </form>
//         </Container>
//
