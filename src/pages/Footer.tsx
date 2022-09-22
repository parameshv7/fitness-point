import './Footer.css';

const Footer=()=>{
    return(
        <div>
             {/* This is footer */}
      <footer className="text-center text-lg-start fo text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <svg
              color="white"
              width="35"
              height="43"
              viewBox="0 0 287 404"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M197.781.905L6.327 86.464l-.019.009C2.19 88.522 0 92.129 0 96.392v85.64a10.96 10.96 0 0 0 6.48 9.999l.002.001 77.886 34.762L6.327 261.67l-.019.009C2.19 263.728 0 267.335 0 271.598v85.64a10.96 10.96 0 0 0 6.48 9.999l.002.001 81.34 36.303v-99.272l198.632-88.571-88.673-39.587-109.96 49.139v-96.187l198.633-88.57L197.781.904zM86.821 227.888l1 .447v-.894l109.96-49.14 83.765 37.396-195.724 87.274v97.488L7.298 365.412A8.961 8.961 0 0 1 2 357.238v-85.64c0-3.478 1.737-6.399 5.18-8.119l79.64-35.591zM7.18 88.273l190.6-85.178 83.765 37.396-195.724 87.274v97.488L7.298 190.206A8.961 8.961 0 0 1 2 182.032v-85.64c0-3.478 1.737-6.399 5.18-8.12z"
                fill="white"
              ></path>
            </svg>
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2  mb-4">
                <p>
                  <a href="#!" className="atext">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2  mb-4">
                <p>
                  <a href="#!" className="atext">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
                <p>
                  <a href="#!" className="atext">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="atext">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-6">
                <div className="row ars">
                  <div className="col-md-4"></div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-6">
                        <h6 className="text-uppercase fw-bold mb-4">
                          <i className="fas fa-gem me-3"></i>Find your coach
                        </h6>
                      </div>
                      <div className="col-md-2">
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
                      </div>
                      <div className="col-md-2 fixsv">
                        <svg
                          color="white"
                          width="248"
                          height="404"
                          viewBox="0 0 287 404"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M197.781.905L6.327 86.464l-.019.009C2.19 88.522 0 92.129 0 96.392v85.64a10.96 10.96 0 0 0 6.48 9.999l.002.001 77.886 34.762L6.327 261.67l-.019.009C2.19 263.728 0 267.335 0 271.598v85.64a10.96 10.96 0 0 0 6.48 9.999l.002.001 81.34 36.303v-99.272l198.632-88.571-88.673-39.587-109.96 49.139v-96.187l198.633-88.57L197.781.904zM86.821 227.888l1 .447v-.894l109.96-49.14 83.765 37.396-195.724 87.274v97.488L7.298 365.412A8.961 8.961 0 0 1 2 357.238v-85.64c0-3.478 1.737-6.399 5.18-8.119l79.64-35.591zM7.18 88.273l190.6-85.178 83.765 37.396-195.724 87.274v97.488L7.298 190.206A8.961 8.961 0 0 1 2 182.032v-85.64c0-3.478 1.737-6.399 5.18-8.12z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ctext">
              © 2022 All Rights Reserved | Privacy Policy | Terms of Service
            </div>
          </div>
        </section>
      </footer>
        </div>
    )
}
export default Footer;