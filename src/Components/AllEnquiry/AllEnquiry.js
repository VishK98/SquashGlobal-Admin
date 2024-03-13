import React, { useState, useEffect, useRef } from "react";
import enquiryImage from "../../Image/enquiry.png";
import { getAllEnquiry } from "../../utils/api";
import Sidebar from '../Sidebar/Sidebar';

function AllBlogs() {
  const [enquiryData, setEnquiryData] = useState([]);
  const [selectedenquiryIndex, setSelectedenquiryIndex] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const applyNowRef = useRef(null);
  const closeRef = useRef(null);

  const handleDetailsClick = (index) => {
    setSelectedenquiryIndex((prevIndex) =>
      prevIndex === index ? null : index
    );

    if (selectedenquiryIndex !== index) {
      setTimeout(() => {
        closeRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  const fetchDataFromApi = async () => {
    try {
      const result = await getAllEnquiry();
      console.log(`allData==>${result.contactus.name}`);
      setEnquiryData(result.contactus);
      setLoading(false); // Set loading to false after receiving response
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false on error
    }
  };

  useEffect(() => {
    fetchDataFromApi();

    if (selectedenquiryIndex && applyNowRef.current) {
      applyNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedenquiryIndex]);

  return (
    <>
      <Sidebar />

      {loading && <div className="loader">Loading...</div>}{" "}
      {/* Show loader if loading is true */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
            <h3 style={{ marginTop: "20px", textAlign: "center" }}>
              All Recived Enquiry
            </h3>
            <div className="row mt-3" ref={closeRef}>
              {enquiryData.map((enquiry, index) => (
                <div className="col-lg-6 mb-3" key={index}>
                  <div
                    className={`card ${selectedenquiryIndex === index ? "flipped" : ""
                      }`}
                  >
                    <div className="front">
                      <div className="card-body text-center">
                        <img
                          className="img-fluid animated-image"
                          src={enquiryImage}
                          alt="card image"
                        />
                        <h4 className="card-title mt-3">{enquiry.name}</h4>
                        <div>
                          <button
                            style={{ width: "60%" }}
                            ref={closeRef}
                            className="apply-now-btn mt-3"
                            onClick={() => handleDetailsClick(index)}
                          >
                            {selectedenquiryIndex === index
                              ? "Close"
                              : "Details"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="back"
                      style={{
                        display:
                          selectedenquiryIndex === index ? "block" : "none",
                      }}
                    >
                      <div id={`applyNowButton-${index}`} className="card-body">
                        <p style={{ fontWeight: "bold" }}>All details</p>

                        <div className="row">
                          <div className="col-lg-4">
                            <p>Name</p>
                            <p>Email</p>
                            <p>Contact</p>
                            <p>Service</p>
                            <p>Message</p>
                          </div>
                          <div className="col-lg-8">
                            <p>{enquiry.name}</p>
                            <p>{enquiry.email}</p>
                            <p>{enquiry.contact}</p>
                            <p>{enquiry.service}</p>
                            <p>{enquiry.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBlogs;
