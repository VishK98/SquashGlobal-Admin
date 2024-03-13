import React, { useState, useEffect, useRef } from "react";
import jobPost from "../../Image/blog.jpg";
import Sidebar from '../Sidebar/Sidebar';


function AllBlogs() {
  const jobData = [
    {
      url: jobPost,
      title: "The Serious Business of Heaven",
      responsibilities: [
        "I recently had the privilege of surprising both of my nephews at one of their weekday events. I was so excited to see them, and I got there early because I didn’t want to miss anything. As I waited in my car, my mind was going through all of the memories that I have with them and some of the funny things that they say. For instance, my nephew Joshua recently said, “The world would be a whole lot better if everyone thought like me.” Kids truly do say some of the funniest things.",
        "The time finally came, the wait was over, and both boys hopped out of the car and were so excited to see that I was there. The hugs, the laughs, and the walk to the event filled us all with enough joy to start an engine. Then the most beautiful moment happened. My nephew Johnny (12) is currently in Tae Kwon Do, and while he was practicing his moves, he would look over to see if I was still looking at him. Of course, I was, those boys are precious to me.",
        "Mary magnifies God, she zooms in on all that God is and all that He has done, and then she shares why. Mary says, “Because He has looked with favor…” God sees you. God sees me. The same way that my eyes were locked in on my nephews as I saw them enjoying life, playing in the sand, and practicing Tae Kwon Do. God’s eyes are on you. He is not looking with anger or with frustration, God is looking with favor!",
      ],
    },
    {
      url: jobPost,
      title: "The Serious Business of Heaven",
      responsibilities: [
        "I recently had the privilege of surprising both of my nephews at one of their weekday events. I was so excited to see them, and I got there early because I didn’t want to miss anything. As I waited in my car, my mind was going through all of the memories that I have with them and some of the funny things that they say. For instance, my nephew Joshua recently said, “The world would be a whole lot better if everyone thought like me.” Kids truly do say some of the funniest things.",
        "The time finally came, the wait was over, and both boys hopped out of the car and were so excited to see that I was there. The hugs, the laughs, and the walk to the event filled us all with enough joy to start an engine. Then the most beautiful moment happened. My nephew Johnny (12) is currently in Tae Kwon Do, and while he was practicing his moves, he would look over to see if I was still looking at him. Of course, I was, those boys are precious to me.",
        "Mary magnifies God, she zooms in on all that God is and all that He has done, and then she shares why. Mary says, “Because He has looked with favor…” God sees you. God sees me. The same way that my eyes were locked in on my nephews as I saw them enjoying life, playing in the sand, and practicing Tae Kwon Do. God’s eyes are on you. He is not looking with anger or with frustration, God is looking with favor!",
      ],
    },
    {
      url: jobPost,
      title: "The Serious Business of Heaven",
      responsibilities: [
        "I recently had the privilege of surprising both of my nephews at one of their weekday events. I was so excited to see them, and I got there early because I didn’t want to miss anything. As I waited in my car, my mind was going through all of the memories that I have with them and some of the funny things that they say. For instance, my nephew Joshua recently said, “The world would be a whole lot better if everyone thought like me.” Kids truly do say some of the funniest things.",
        "The time finally came, the wait was over, and both boys hopped out of the car and were so excited to see that I was there. The hugs, the laughs, and the walk to the event filled us all with enough joy to start an engine. Then the most beautiful moment happened. My nephew Johnny (12) is currently in Tae Kwon Do, and while he was practicing his moves, he would look over to see if I was still looking at him. Of course, I was, those boys are precious to me.",
        "Mary magnifies God, she zooms in on all that God is and all that He has done, and then she shares why. Mary says, “Because He has looked with favor…” God sees you. God sees me. The same way that my eyes were locked in on my nephews as I saw them enjoying life, playing in the sand, and practicing Tae Kwon Do. God’s eyes are on you. He is not looking with anger or with frustration, God is looking with favor!",
      ],
    },
    {
      url: jobPost,
      title: "The Serious Business of Heaven",
      responsibilities: [
        "I recently had the privilege of surprising both of my nephews at one of their weekday events. I was so excited to see them, and I got there early because I didn’t want to miss anything. As I waited in my car, my mind was going through all of the memories that I have with them and some of the funny things that they say. For instance, my nephew Joshua recently said, “The world would be a whole lot better if everyone thought like me.” Kids truly do say some of the funniest things.",
        "The time finally came, the wait was over, and both boys hopped out of the car and were so excited to see that I was there. The hugs, the laughs, and the walk to the event filled us all with enough joy to start an engine. Then the most beautiful moment happened. My nephew Johnny (12) is currently in Tae Kwon Do, and while he was practicing his moves, he would look over to see if I was still looking at him. Of course, I was, those boys are precious to me.",
        "Mary magnifies God, she zooms in on all that God is and all that He has done, and then she shares why. Mary says, “Because He has looked with favor…” God sees you. God sees me. The same way that my eyes were locked in on my nephews as I saw them enjoying life, playing in the sand, and practicing Tae Kwon Do. God’s eyes are on you. He is not looking with anger or with frustration, God is looking with favor!",
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
                        <p style={{ fontWeight: "bold" }}>Description</p>
                        <ul>
                          {job.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
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

export default AllBlogs