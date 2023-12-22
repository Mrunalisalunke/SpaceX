import React from 'react';

const About = () => {
  return (
    // <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontWeight: 500, fontStyle: 'inherit', display: 'inline-block' }}>About SpaceX</h2>
            </div>

            <p style={{ fontSize: 'large' }}>
              SpaceX believes a fully and rapidly reusable rocket is the pivotal breakthrough needed to substantially reduce the cost of space access. The majority of the launch cost comes from building the rocket, which historically has flown only once.
              Compare that to a commercial airliner – each new plane costs about the same as Falcon 9 but can fly multiple times per day and conduct tens of thousands of flights over its lifetime. Following the commercial model, a rapidly reusable space launch vehicle could reduce the cost of traveling to space by a hundredfold.
              While most rockets are designed to burn up on reentry, SpaceX rockets can not only withstand reentry but can also successfully land back on Earth.
            </p>
          </div>

          <div className="col-md-6">
            <img src="./images/img1.jpg" className="d-block w-100" alt="SpaceX" />
          </div>
          <div className="col-md-6">
            <img src="./images/img4.jpg" className="d-block w-100" alt="SpaceX" />
          </div>
          <div className="col-md-6">
            <img src="./images/img4.jpg" className="d-block w-100" alt="SpaceX" />
          </div>
        </div>
      </div>
   // </section>
  );
};

export default About;
