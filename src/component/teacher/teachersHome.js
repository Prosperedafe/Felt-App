import "./teachersHome.css";
import options from "../../images/options.svg";
import ProfileNav from "../navigation/profileNav";
import HomeNotification from "../notifications";
import HomeSearch from "../homesearchbar";

const TeachersHomepage = () => {
  return (
    <>
      <section className="teachers__home">
        <div>
          <HomeSearch />
          <section className="posts">
            <div className="container">
              <header>
                <div className="post__subject">
                  <img className="Userdp" />
                  <h1>MATHEMATICS TEACHER NEEDED</h1>
                </div>
                <time>2hours ago</time>
                <span>
                  <img src={options} />
                  <img src={options} />
                  <img src={options} />
                </span>
              </header>
              <p className="job-description">
                At Alpha Rehonot group of schools, we Lorem Ipsum Donor emet
                Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor
                emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum
                Donor emet
              </p>
            </div>
            <div className="container">
              <header>
                <div className="post__subject">
                  <img className="Userdp" />
                  <h1>MATHEMATICS TEACHER NEEDED</h1>
                </div>
                <time>2hours ago</time>
                <span>
                  <img src={options} />
                  <img src={options} />
                  <img src={options} />
                </span>
              </header>
              <p className="job-description">
                At Alpha Rehonot group of schools, we Lorem Ipsum Donor emet
                Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor
                emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum
                Donor emet
              </p>
            </div>
            <div className="container">
              <header>
                <div className="post__subject">
                  <img className="Userdp" />
                  <h1>MATHEMATICS TEACHER NEEDED</h1>
                </div>
                <time>2hours ago</time>
                <span>
                  <img src={options} />
                  <img src={options} />
                  <img src={options} />
                </span>
              </header>
              <p className="job-description">
                At Alpha Rehonot group of schools, we Lorem Ipsum Donor emet
                Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor
                emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum
                Donor emet
              </p>
            </div>
          </section>
        </div>
        <HomeNotification />
      </section>
    </>
  );
};

export default TeachersHomepage;
