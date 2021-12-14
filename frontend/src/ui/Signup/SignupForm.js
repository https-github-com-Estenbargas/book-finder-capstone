import React from "react"
import {Container, Button, Form, InputGroup, FormControl} from "react-bootstrap"
import "./Signup.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {httpConfig} from "../../utils/httpConfig";
// import Yup from "yup"
import {Formik} from 'formik'
import * as Yup from "yup"





export function PostForm() {


    const initialValues = {userEmail: "", userPassword: "", userName: ""}

    const handleSubmit= (values, {resetForm, setStatus}) => {

        httpConfig.post("/apis/sign-up/", values).then(reply => {

            const {message, type, status} = reply
            if(status ===200) {
                resetForm()
                setStatus({message:message, type:type})
            }
            setStatus({message, type})
        })

    }

    const validation = Yup.object().shape({
        userEmail: Yup.string()
            .required("userEmail is a required field")
            .email("User Email must be a vaild Email")
            .max(128, "User Email must be less than 128 characters"),
        userPassword: Yup.string()
            .required("userPassword is a required field")
            .min(8, "userPassword must be a least 8 characters"),
        userName: Yup.string()
            .required("username is required")
            .min(5, "Username must be a least 5 characters long")
            .max(32, "Username is too long")

    })
    return(
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validation}>
                {PostFormContent}
            </Formik>

        </>
    )
}

function PostFormContent(props) {
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

    console.log(props)

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
                <label htmlFor="userEmail">Email Address</label>
                <div className="input-group my-2">
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
                <div className="input-group my-2">
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

            <div className="form-group">
                <label htmlFor="userName">Username</label>
                <div className="input-group my-2">
                    <input type="text" className="form-control" name="userName" value={values.userName} placeholder="Enter Username" onChange={handleChange} onBlur={handleBlur}/>
                </div>
                {
                    errors.userName && touched.userName && (
                        <div className="alert alert-danger">
                            {errors.userName}
                        </div>
                    )
                }
            </div>
            <div>
                <button className="btn btn-primary" type="submit">Submit</button>
                <button className="btn btn-danger" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</button>
            </div>
        </form>
            {
                status && (<div className={status.type}>{status.message}</div> )
            }

        </>






        // <>
        //     <Form onSubmit={handleSubmit}>
        //         <Form.Group>
        //             <InputGroup>
        //                 <Form.Label htmlFor={"userEmail"}>Email Address</Form.Label>
        //                 <FormControl
        //                     onChange={handleChange}
        //                     onBlur={handleBlur}
        //                     name={"userEmail"}
        //                     placeholder="userEmail"
        //                     value={values.userEmail}
        //                     type={"email"}
        //
        //                 />
        //             </InputGroup>
        //             {
        //                 errors.userEmail && touched.userEmail &&
        //                 <>
        //                     <div className="alert alert-danger">
        //                         {errors.userEmail}
        //                     </div>
        //                 </>
        //             }
        //
        //         </Form.Group>
        //
        //         <Form.Group>
        //             <InputGroup>
        //                 <Form.Label htmlFor={"userPassword"}>Password</Form.Label>
        //                 <FormControl
        //                     placeholder="User Password"
        //                     onChange={handleChange}
        //                     onBlur={handleBlur}
        //                     value={values.userPassword}
        //                     name={"userPassword"}
        //                     type={"password"}
        //                 />
        //
        //
        //             </InputGroup>
        //             {
        //                 errors.userPassword && touched.userPassword &&
        //                 <>
        //                     <div className="alert alert-danger">
        //                         {errors.userPassword}
        //                     </div>
        //                 </>
        //             }
        //         </Form.Group>
        //
        //         <Form.Group>
        //             <InputGroup>
        //                 <Form.Label htmlFor={"userName"}>Username</Form.Label>
        //                 <FormControl
        //                     placeholder="username"
        //                     onChange={handleChange}
        //                     onBlur={handleBlur}
        //                     value={values.userName}
        //                     name={"userName"}
        //                     type={"text"}
        //                 />
        //
        //                 <InputGroup.Append>
        //                     <Button variant="primary" type="submit"> Submit</Button>
        //                 </InputGroup.Append>
        //
        //             </InputGroup>
        //             {
        //                 errors.userName && touched.userName &&
        //                 <>
        //                     <div className="alert alert-danger">
        //                         {errors.userName}
        //                     </div>
        //                 </>
        //             }
        //         </Form.Group>
        //     </Form>
        //     {status && (
        //         <>
        //             <div className={status.type}>{status.message}</div>
        //         </>
        //     )}
        // </>
    )
}





// export const PostSignupForm = () => {
//     const dispatch = useDispatch()
//
//     const initialValues = {userEmail: "", userPassword: "", userName: ""}
//
//     // const handleSubmit= (values, {resetForm, setStatus}) => {
//     //     httpConfig.post("/apis/sign-up", values).then(reply => {
//     //
//     //         const {message, type, status} = reply
//     //         if(status === 200) {
//     //             resetForm()
//     //             setStatus({message: message, type: type})
//     //         }
//     //     })
//     // }
//
//     const validation = Yup.object().shape({
//         userEmail: Yup.string()
//             .required("UserEmail is a required field")
//             .email("A valid email is required"),
//         userPassword: Yup.string()
//             .required("Password is a required field")
//             .min(8, "Password must be at least eight characters long"),
//         userName: Yup.string()
//             .required("Username is a required field")
//             .min(5, "Username must be a least 5 characters long")
//             .max(32, "Username is too long")
//     })
//     const handleSubmit= (values, {resetForm, setStatus}) => {
//         httpConfig.post("/apis/sign-up", values).then(reply => {
//
//             let {message, type, status} = reply
//             if(status === 200) {
//                 resetForm()
//
//             }
//             setStatus({message: message, type: type})
//         })
//     }
//     return(
//             <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validation}>
//                 {PostSignupContent}
//             </Formik>
//     )
// }
// export function PostSignupContent(props) {
//     const {
//         status,
//         values,
//         errors,
//         touched,
//         dirty,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         handleReset,
//     } = props
//
//
//     return(
//         <>
//         <Form onSubmit={handleSubmit}>
//             <Form.Group>
//                 <InputGroup>
//                     <FormControl onChange={handleChange} onBlur={handleBlur} name="userName" placeholder="username" value={values.userName}/>
//                 </InputGroup>
//                 {
//                   errors.userName && touched.userName &&
//                   <>
//                   <div className="alert alert-danger">
//                       {errors.userName}
//                   </div>
//                   </>
//                 }
//             </Form.Group>
//             <Form.Group>
//                 <InputGroup>
//                     <FormControl placeholder="Enter Email" onChange={handleChange} onBlur={handleBlur} value={values.userEmail} type="email" name="userEmail"/>
//                 </InputGroup>
//                 {
//                     errors.userEmail && touched.userEmail &&
//                     <>
//                         <div className="alert alert-danger">
//                             {errors.userEmail}
//                         </div>
//                     </>
//                 }
//             </Form.Group>
//
//             <Form.Group>
//                 <InputGroup>
//                     <FormControl placeholder="Enter Password" onChange={handleChange} onBlur={handleBlur} value={values.userPassword} name="userPassword" type="password"/>
//
//                     <InputGroup.Append>
//                         <Button variant="primary" type="submit">Submit</Button>
//                         <Button variant="primary" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</Button>
//                     </InputGroup.Append>
//
//                 </InputGroup>
//                 {
//                     errors.userPassword && touched.userPassword &&
//                         <>
//                         <div className="alert alert-danger">
//                             {errors.userPassword}
//                         </div>
//                         </>
//                 }
//
//             </Form.Group>
//         </Form>
//             {status && (
//                 <>
//                 <div className={status.type}>{status.message}</div>
//                 </>
//             )}
//         </>
//     )
// }






    /*return (
        <>

            <Container fluid className={"min-vh-100 min-vw-100 d-flex align-items-center justify-content-center"} >
                <form className={"d-flex flex-column p-5 text-white bg-dark"} id={"form-wrapper"}>
                    <h1 className={"text-center"}>Create an account</h1>

                    <label className={"input-labels my-1"}>
                        <h2>Email</h2>
                        <input type="email" id="email" className={"p-1 my-1"}/>
                    </label>
                    <label className={"input-labels my-1"}>
                        <h2>Password</h2>
                        <input type="text" className={"p-1 my-1"}/>
                    </label>
                    <div className={"d-flex align-items-stretch"}>
                        <Button id={"form-button"} className={"my-1"}>Submit</Button>
                        <p>Already have an account? Login <Link to="/login">here</Link>.</p>
                    </div>
                </form>
            </Container>
        </>
    )*/
// }
