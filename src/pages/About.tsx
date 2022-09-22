import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

import { Link, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import "./About.css";
import Nave from "./Nave";

function About() {
  return (
    <div>
      <div><Nave /></div>

      {/*body  */}
      <div className="container ab">
        <div className="row">
          <div className="col-md-6 ab-bc">
            <div className="im-tet">
              <h3 className="ab-tst">
                Bringing human
                <br /> connection to digital
                <br /> personal training.
              </h3>
              <p className="im-tat">
                We inspire and engage people in lifelong health,
                <br /> one session at a time.
              </p>
            </div>
          </div>
          <div className="col-md-5 ab-bb">
            <img src="./Images/bc11.jpg" alt="bfdndf" className="im-gg1"></img>
          </div>
        </div>
      </div>

      <div className="container">
        <img src="./Images/bc12.jpg" alt="bfdndf" className="im-bc"></img>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 asd">
            <h5 className="ab-ime">OUR APPROACH</h5>

            <h3 className="asb-tte">Creating change through partnership.</h3>
          </div>
          <div className="col-md-6 aed">
            <h4 className="ab-fe"></h4>
            <p className="ab-hw">
              We believe that partnership is the key to progress. We believe the
              best way to forge the world we envision is to pair each person
              with another person – a coach – who helps manage their day-to-day
              health.
              <br />
              <br /> An expert coach lightens the load by offloading the
              research and planning required to design safe, effective, and
              realistic workout routines. We believe that honest, authentic
              relationships help people feel safe, seen, and heard. As a
              relationship takes root, a coach can drive accountability and
              build motivation. Coaches help set goals, raise the bar, ride out
              the tough times, and build momentum.
              <br />
              <br /> As progress in technology, trade, and diversity make the
              world a smaller place, we see an exciting opportunity to connect
              people and forge new partnerships. And it’s through these
              partnerships that we believe people will be unburdened to make
              meaningful change and expand their horizons, while leading
              healthier and happier lives.
            </p>
          </div>
        </div>
      </div>

      <div className="container ab-cb">
        <div className="">
          <p className="ab-h">LEADERSHIP</p>
          <h3 className="ab-z">
            Our team comes from companies such as Apple, Nike, Google, Fitbit,
            Square, and the NBA
          </h3>
          <div className="row">
            <div className="col-md-3">
              <img src="./Images/bc13.jpg" alt="bfdndf" className="im-bb"></img>
              <h5 className="ab-vr">Rishi Mandal</h5>
              <p className="ab-kh">CEO / CO-FOUNDER</p>
            </div>
            <div className="col-md-3">
              <img src="./Images/bc14.jpg" alt="bfdndf" className="im-bb"></img>
              <h5 className="ab-vr">Justin Santamaria</h5>
              <p className="ab-kh">CTO / CO-FOUNDER</p>
            </div>
            <div className="col-md-3">
              <img src="./Images/bc15.jpg" alt="bfdndf" className="im-bb"></img>
              <h5 className="ab-vr">Cathy Vigrass</h5>
              <p className="ab-kh">COO</p>
            </div>
            <div className="col-md-3">
              <img src="./Images/bc16.jpg" alt="bfdndf" className="im-bb"></img>
              <h5 className="ab-vr">Josh Bonhotal</h5>
              <p className="ab-kh">VP OF PERFORMANCE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 ab-iB">
            <div className="im-tut">
              <h6>Unlike Any Other Fitness Solution</h6>
              <p>
                We use a combination of technology, content, and elite personal
                trainers to empower our members through fitness. Our custom-made
                training plans with personalized audio coaching are designed to
                keep you coming back. You can reach your goals at home, in the
                gym, or at your group fitness classes, when and where it’s most
                convenient for you.
              </p>
            </div>
          </div>
          <div className="col-md-6 ab-ibc">
            <img src="./Images/bc17.jpg" alt="bfdndf" className="im-iB"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ab-ibc">
            <img src="./Images/bc18.jpg" alt="bfdndf" className="im-iB"></img>
          </div>
          <div className="col-md-6 ab-iB">
            <div className="im-tut">
              <h6>Technology Powers Future</h6>
              <p>
                Members use our platform to achieve their personal fitness
                goals. Leveraging the Apple Watch and iPhone to deliver insights
                into detailed biometrics, with a direct line to chat, coupled
                with a hand-crafted personal training regimen, our coaches are
                able to deliver the results our members have been striving for.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h5>BACKED BY GREATS</h5>
      </div>

      <div className="container">
        <div className="ab-cb">
          <p>CAREERS</p>
          <h3>Join our team.</h3>
          <p>
            As an early-stage startup with a small but talented team, Future
            provides the perfect environment to learn how to be a leader in a
            growing company and make a significant impact.
          </p>
          <p>
            We're looking for the best people to join a team where everyone
            wants to push the boundaries and is motivated to act like an owner
            of the business.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
