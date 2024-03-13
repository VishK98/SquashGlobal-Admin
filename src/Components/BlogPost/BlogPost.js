import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


function BlogPost() {
    const [formData, setFormData] = useState({
        blogTitle: '',
        blogDescription: '',
        blogImage: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            blogImage: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log('Form submitted:', formData);
        // Reset form fields if needed
        setFormData({
            blogTitle: '',
            blogDescription: '',
            blogImage: null,
        });
    };
    return (
        <>
            <Sidebar />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className="col-lg-8" style={{ marginLeft: "50px" }}>
                        <div className="container mt-3">
                            <h2 className="mb-4 text-center" style={{ color: "transparent", background: "linear-gradient(45deg, #03045e 40%, #0099ff 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Blog Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 mt-5">
                                    <label htmlFor="blogTitle" className="form-label">Blog Title</label>
                                    <input type="text" className="form-control" id="blogTitle" name="blogTitle" placeholder="Enter blog title" value={formData.blogTitle} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="blogDescription" className="form-label">Blog Description</label>
                                    <textarea className="form-control" id="blogDescription" name="blogDescription" placeholder="Enter blog description" value={formData.blogDescription} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="blogImage" className="form-label">Blog Image</label>
                                    <input type="file" className="form-control" id="blogImage" name="blogImage" accept="image/*" onChange={handleImageChange} required />
                                </div>
                                <button style={{ marginTop: "150px" }} type="submit">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>)
}

export default BlogPost