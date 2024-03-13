import React, { useState } from "react";
import "./JobPost.css";
import Sidebar from '../Sidebar/Sidebar';


function JobPost() {
  const [formData, setFormData] = useState({
    jobProfile: '',
    salary: '',
    location: '',
    experience: '',
    requirements: '',
    responsibilities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic with formData here
    console.log(formData);
  };

  return (
    <>
      <Sidebar />
      <div className='container'>
        <div className="row">
          <div className="col-lg-3"></div>
          <div
            className="col-lg-8 "
            style={{ marginLeft: "50px" }}
          >
            <div className="container mt-3">
              <h2 className="mb-4 text-center" style={{ color: "transparent", background: "linear-gradient(45deg, #03045e 60%, #0099ff 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Job Application Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="jobProfile" className="form-label">Job Profile</label>
                  <input type="text" className="form-control" id="jobProfile" name="jobProfile" placeholder="Enter job profile" value={formData.jobProfile} onChange={handleChange} required />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="text" className="form-control" id="salary" name="salary" placeholder="Enter salary" value={formData.salary} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="experience" className="form-label" style={{ marginLeft: "3px" }}>Experience</label>
                    <input type="text" className="form-control" id="experience" name="experience" placeholder="Enter experience" value={formData.experience} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">Location</label>
                  <input type="text" className="form-control" id="location" name="location" placeholder="Enter location" value={formData.location} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="requirements" className="form-label">Requirements</label>
                  <textarea className="form-control" id="requirements" name="requirements" placeholder="Enter job requirements" value={formData.requirements} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="responsibilities" className="form-label">Responsibilities</label>
                  <textarea className="form-control" id="responsibilities" name="responsibilities" placeholder="Enter job responsibilities" value={formData.responsibilities} onChange={handleChange} required />
                </div>
                <button type="submit" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobPost