import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DashBoard from './Components/DashBoard/DashBoard';
import AllJobs from './Components/AllJobs/AllJobs';
import JobPost from './Components/JobPost/JobPost';
import RecivedProfile from './Components/RecivedProfile/RecivedProfile';
import AllBlogs from './Components/AllBlogs/AllBlogs';
import Login from './Components/Login/Login';
import BlogPost from './Components/BlogPost/BlogPost';
import AllEnquiry from './Components/AllEnquiry/AllEnquiry';


const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <>
        <div className="Squash">
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/alljobs" element={<AllJobs />} />
                <Route path="/jobpost" element={<JobPost />} />
                <Route path="/recivedprofile" element={<RecivedProfile />} />
                <Route path="/allblogs" element={<AllBlogs />} />
                <Route path="/blogpost" element={<BlogPost />} />
                <Route path="/enquiry" element={<AllEnquiry />} />
              </>
            ) : (
              <Route path="/" element={<Login />} />
            )}
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
