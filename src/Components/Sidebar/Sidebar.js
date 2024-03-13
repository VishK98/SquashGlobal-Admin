import React from 'react';
import "./Sidebar.css";
import logo from "../../Image/logo.png";
import { Link } from 'react-router-dom';


function Sidebar() {
    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        window.location.reload(); // Reload the page to update the UI
        window.location.href = '/';
    };

    return (
        <div className="col-lg-3 sidebar">
            <div className="brand">
                <Link to="/dashboard">
                    <img src={logo} width="200" height="60" alt="Logo" />
                </Link>
            </div>
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <div className="buttons" data-bs-toggle="collapse"
                        data-bs-target="#jobs-collapse" aria-expanded="false">
                        Jobs
                    </div>
                    <div className="collapse" id="jobs-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link className="link-dark rounded" to="/alljobs">All Jobs</Link></li>
                            <li><Link className="link-dark rounded" to="/jobpost">Job Post</Link></li>
                            <li><Link className="link-dark rounded" to="/recivedprofile">Received Profiles</Link></li>
                        </ul>
                    </div>
                </li>
                <li className="border-top"></li>
                <li className="mb-1">
                    <div className="buttons" data-bs-toggle="collapse"
                        data-bs-target="#blogs-collapse" aria-expanded="false">
                        Blogs
                    </div>
                    <div className="collapse" id="blogs-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link className="link-dark rounded" to="/allblogs">All Blogs</Link></li>
                            <li><Link className="link-dark rounded" to="/blogpost">Blog Post</Link></li>
                        </ul>
                    </div>
                </li>
                <li className="border-top"></li>
                <li className="mb-1">
                    <div className="buttons" data-bs-toggle="collapse"
                        data-bs-target="#enquiry-collapse" aria-expanded="false">
                        Enquiry
                    </div>
                    <div className="collapse" id="enquiry-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link className="link-dark rounded" to="/enquiry">Recived Enquiry</Link></li>
                        </ul>
                    </div>
                </li>
                <li className="border-top"></li>
                <button
                    style={{ width: "90%", marginTop: "350px" }}
                    className="apply-now-btn"
                    onClick={handleLogout}
                >Logout
                </button>


            </ul>
        </div>
    );
}

export default Sidebar;
