import React, { useState, useEffect, useRef } from "react";
import jobPost from "../../Image/hiring.png";
import Sidebar from '../Sidebar/Sidebar';


function AllJobs() {
  const jobData = [
    {
      url: jobPost,
      title: "Jr. Project Manager",
      location: "Mumbai",
      experience: "4-6 years",
      responsibilities: [
        "Project Coordination: Assist in planning, executing, and closing projects while ensuring they are delivered on time and within scope.",
        "Task Management: Oversee tasks, schedules, and resources to meet project goals. Track progress and identify potential issues.",
        "Team Support: Collaborate with project teams, providing administrative support, facilitating communication, and fostering a collaborative environment.",
      ],
      requirements: [
        "Bachelor's degree in a relevant field",
        "Strong organizational and communication skills",
        "Proficiency in project management tools and software",
        "Ability to work effectively in a team and support project goals",
        "Highly organized with strong attention to detail",
      ],
    },
    {
      url: jobPost,
      title: "Sr. Project Manager",
      location: "Kolkata",
      experience: "4-6 years",
      responsibilities: [
        "Project Coordination: Assist in planning, executing, and closing projects while ensuring they are delivered on time and within scope.",
        "Task Management: Oversee tasks, schedules, and resources to meet project goals. Track progress and identify potential issues.",
        "Team Support: Collaborate with project teams, providing administrative support, facilitating communication, and fostering a collaborative environment.",
      ],
      requirements: [
        "Bachelor's degree in a relevant field",
        "Strong organizational and communication skills",
        "Proficiency in project management tools and software",
        "Ability to work effectively in a team and support project goals",
        "Highly organized with strong attention to detail",
      ],
    },
    {
      url: jobPost,
      title: "Jr. Project Manager",
      location: "Mumbai",
      experience: "4-6 years",
      responsibilities: [
        "Project Coordination: Assist in planning, executing, and closing projects while ensuring they are delivered on time and within scope.",
        "Task Management: Oversee tasks, schedules, and resources to meet project goals. Track progress and identify potential issues.",
        "Team Support: Collaborate with project teams, providing administrative support, facilitating communication, and fostering a collaborative environment.",
      ],
      requirements: [
        "Bachelor's degree in a relevant field",
        "Strong organizational and communication skills",
        "Proficiency in project management tools and software",
        "Ability to work effectively in a team and support project goals",
        "Highly organized with strong attention to detail",
      ],
    },
    {
      url: jobPost,
      title: "Jr. Project Manager",
      location: "Mumbai",
      experience: "4-6 years",
      responsibilities: [
        "Project Coordination: Assist in planning, executing, and closing projects while ensuring they are delivered on time and within scope.",
        "Task Management: Oversee tasks, schedules, and resources to meet project goals. Track progress and identify potential issues.",
        "Team Support: Collaborate with project teams, providing administrative support, facilitating communication, and fostering a collaborative environment.",
      ],
      requirements: [
        "Bachelor's degree in a relevant field",
        "Strong organizational and communication skills",
        "Proficiency in project management tools and software",
        "Ability to work effectively in a team and support project goals",
        "Highly organized with strong attention to detail",
      ],
    },

  ];
  const [selectedJobIndex, setSelectedJobIndex] = useState(false);
  const applyNowRef = useRef(null);
  const formRef = useRef(null);
  const closeRef = useRef(null);

  const handleApplyNowClick = () => {
    // Scroll to the form section
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleCloseClick = () => {
    // Scroll to the form section
    closeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDetailsClick = (index) => {
    setSelectedJobIndex((prevIndex) => (prevIndex === index ? null : index));

    if (selectedJobIndex !== index) {
      setTimeout(() => {
        const applyNowButton = document.getElementById(
          `applyNowButton-${index}`
        );
        if (applyNowButton && applyNowButton.offsetParent !== null) {
          applyNowButton.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (selectedJobIndex && applyNowRef.current) {
      applyNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedJobIndex]);
  return (
    <>
      <Sidebar />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'></div>
          <div className='col-lg-9' >
            <div className="row mt-3" ref={closeRef}>
              {jobData.map((job, index) => (
                <div className="col-lg-6 mb-3" key={index}>
                  <div
                    className={`card ${selectedJobIndex === index ? "flipped" : ""
                      }`}
                  >
                    <div className="front">
                      <div className="card-body text-center">
                        <img
                          className="img-fluid animated-image"
                          src={job.url}
                          alt="card image"
                        />
                        <h4 className="card-title mt-3">{job.title}</h4>
                        <div className="row mt-3">
                          <div className="row mt-3">
                            <div className="col">
                              <p style={{ fontWeight: "500" }}>
                                Location: {job.location}
                              </p>
                            </div>
                            <div className="col">
                              <p style={{ fontWeight: "500" }}>
                                Experience: {job.experience}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <p
                                style={{
                                  fontWeight: "500",
                                  marginRight: "30px",
                                }}
                              >
                                Salary: 4-6 LPA{" "}
                              </p>
                            </div>
                            <div className="col">
                              <p style={{ fontWeight: "500" }}>
                                Posted on: 10-01-2024
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button style={{ width: "60%" }}
                            ref={applyNowRef}
                            className="apply-now-btn mt-3"
                            onClick={() => handleDetailsClick(index)}
                          >
                            {selectedJobIndex === index ? "Close" : "Details"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="back"
                      style={{
                        display: selectedJobIndex === index ? "block" : "none",
                      }}
                    >
                      <div id={`applyNowButton-${index}`} className="card-body">
                        <h4 className="card-title text-center">{job.title}</h4>
                        <p style={{ fontWeight: "bold" }}>Responsibilities</p>
                        <ul className="card-text" style={{ marginLeft: "15px" }}>
                          {job.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                        <p style={{ fontWeight: "bold" }}>Requirements</p>
                        <ul className="card-text" style={{ marginLeft: "15px" }}>
                          {job.requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                          ))}
                        </ul>
                        <div
                          style={{ width: "90%", marginLeft: "10px" }}
                          className="row "
                        >
                          <button
                            className="apply-now-btn mt-3"
                            onClick={() => {
                              // handleDetailsClick(index);
                              // handleApplyNowClick();
                            }}
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => {
                              // handleCloseClick(index);
                              // handleDetailsClick(index);
                            }}
                            className="apply-now-btn mt-3"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>     </div>
        </div>
      </div>
    </>
  )
}

export default AllJobs