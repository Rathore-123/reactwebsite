import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addContact } from "../Store/ActionCreators/ContactActionCreators"
export default function Contact() {
    var dispatch = useDispatch()
    var [show, setshow] = useState(false)
    var [data, setdata] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var item = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
            status: "Active",
            time: new Date()
        }
        dispatch(addContact(item))
        setshow(true)
    }
    return (
        <>
            {/* <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Contact</span></p>
                            <h1 className="mb-0 bread">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div> */}

            <section className="ftco-section contact-section bg-light">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="w-100"></div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Phone:</span> <Link to="tel://+91 9520647927">+ 91 9520647927</Link></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Email:</span> <Link to="mailto:ranjeetkumar95686824@gmail.com">ranjeetkumar95686824@gmail.com</Link></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Website</span> <Link to="#">yoursite.com</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 order-md-last">
                            {
                                show ? <div class="alert alert-success text-center alert-dismissible fade show" role="alert">
                                    Thanks to Share Your Query With US!!! Our Team Will Contact You Soon!!!
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> : ""
                            }
                            <form onSubmit={postData} className="bg-white p-5 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" name='name' onChange={getData} placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name='email' onChange={getData} placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name='phone' onChange={getData} placeholder="Phone" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name='subject' onChange={getData} placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea rows="7" className="form-control" name='message' onChange={getData} placeholder="Enter Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-secondary w-100 rounded-0" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=Sector%2066%20Noida&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
