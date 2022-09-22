import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nave = () => {
  return (
    <div>
      {/* This is header */}
      <div className="na-color">
        <div className="row">
          <div className="col-md-8 na-text">
            Welcome! Your first month on Future is 50% off. Promo applies at
            checkout, cancel anytime.
          </div>
          <div className="col-md-4 na-link">
            <span>
              <a className="na-link1" href="https://www.future.co/">
                JOIN TODAY
              </a>
            </span>
            <span>
              <svg
                color="white"
                width="18"
                height="20"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7287 17.2727L19.0014 9.00002L10.7287 0.727295L9.6392 1.80755L16.0653 8.22445H0V9.77559H16.0653L9.6392 16.1925L10.7287 17.2727Z"
                  fill="url(#footerCTA)"
                ></path>
                <defs>
                  <linearGradient
                    id="footerCTA"
                    x1="1.54178"
                    y1="2.6043"
                    x2="16.0333"
                    y2="1.37663"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#15E5B5"></stop>
                    <stop offset="1" stop-color="#01DAE6"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* This is NaveBar */}
      <Navbar className="bcg">
        <div className="container-fluid na-head">
          <div className="row">
            <div className="col-md-3">
              <Nav>
                <Nav.Link>
                  <svg
                    width="34%"
                    height="51%"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 864.72 96.18"
                  >
                    <g>
                      <g fill="black">
                        <path d="M297.65 13.56h42.88v81.26h16.25V13.56h42.89V.02H297.65v13.54zM0 94.82h16.25V61.64h61.39V48.1H16.25V13.56h69.52V.02H0v94.8zM228.4 47.29c0 15.44 3.57 35.34-36.11 35.34s-36.11-19.77-36.11-35.34V0h-16.25v47.29c0 33 10.65 48.89 52.36 48.89s52.36-16 52.36-48.89V0H228.4zM541.14 47.29c0 15.44 3.57 35.34-36.11 35.34s-36.11-19.77-36.11-35.34V0h-16.26v47.29c0 33 10.66 48.89 52.37 48.89s52.36-16 52.36-48.89V0h-16.25zM864.72 13.56V.02h-85.76v94.8h85.76V81.28h-69.51V54.19h59.86V40.65h-59.86V13.56h69.51zM715.66 30.85A30.68 30.68 0 0 0 685.22 0H620.84v94.8h16.25V61.69h40.76l22 33.13H719l-23.32-35a30.85 30.85 0 0 0 19.98-28.97zm-13.68 0A17 17 0 0 1 685.22 48h-48.13V13.68h48.13A17 17 0 0 1 702 30.85z"></path>
                      </g>
                    </g>
                  </svg>
                </Nav.Link>
              </Nav>
            </div>
            <div className="col-md-6 n-txt">
              <Nav>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/coaches">
                  Coaches
                </Nav.Link>
                <Nav.Link as={Link} to="/reviews">
                  Reviews
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/forwork">
                  ForWork
                </Nav.Link>
              </Nav>
            </div>
            <div className="col-md-3 f-tt">
              <Nav>
                <Nav.Link as={Link} to="/">
                <button type="submit" className="for-btm">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 for-btm1">
                      <p>CONTACT US</p>
                    </div>
                    <div className="col-md-4 for-btm2">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.7287 17.2727L19.0014 9.00002L10.7287 0.727295L9.6392 1.80755L16.0653 8.22445H0V9.77559H16.0653L9.6392 16.1925L10.7287 17.2727Z"
                          fill="#212121"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};
export default Nave;
