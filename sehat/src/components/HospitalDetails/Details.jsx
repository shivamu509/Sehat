import React from 'react'
import './css/details.css'

const Details = () => {
  return (
    <div>
        <div class="row mt-4 ">
            <div class="col-lg-6" style={{width: "380px"}}>
            <div class="card ms-2 border-white" >
                <img src="https://imgs.search.brave.com/29bVYCbAC9t-yaIdJsLSQeGPl5gJjBtImZ0iMdmRF_s/rs:fit:700:337:1/g:ce/aHR0cHM6Ly93d3cu/bWVkaWZlZS5jb20v/b2ZmZXJzL3RoeXJv/Y2FyZS9pbWcvYXBv/bGxvLWhvc3BpdGFs/LWJodWJhbmVzd2Fy/LmpwZw" class="card-img-top detail-img" alt="Apollo Hospital"/>
                <div class="card-body main-detail rounded-bottom mb-2">
                    <h5 class="card-title">Apollo Hospital</h5>
                </div>
                    <p class="card-text mx-3 text-black-50">Plot Number 251, Gajapati Nagar, Bhubaneswar -750015</p>
                    <a href="/" class="btn btn-primary mb-3">Reserve a Bed</a>
            </div>
                </div>
                <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                    <h3 class="card-title">Apollo Hospital</h3>
                    <div class="alert alert-light text-primary m-0 p-0">
                        Bhubaneswar, India
                    </div>
                    <hr />
                    <p class="card-text">Apollo Hospital, Bhubneshwar, Odisha is one of the best & well-known multispeciality hospitals available in the state. This hospital has all types of rooms and suites, advanced operation theaters, an in-house pharmacy, and many more facilities. This hospital provides international standards of health care and the world’s best medical services to the patients with their well-advanced infrastructure and well equipped medical devices. Apollo Hospital being multispeciality hospitals provides all the benefits of a large hospital in a friendlier and more accessible way by giving the patient with expert and quality healthcare.</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details