import React from 'react';

function Home() {
  return (
    <>
      <div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="yoga.css" />

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {Array.from({ length: 3 }, (_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            
            <div className="carousel-item active">
              <video
                className="d-block w-100"
                style={{ height: '100vh', objectFit: 'cover' }}
                autoPlay
                muted
                loop
              >
                <source src="./images/video2.mp4" type="video/mp4" />
              </video>
              <div className="carousel-caption d-none d-md-block">
                <div className="char">
                  <p style={{ marginLeft: 0, marginBottom: 100, color: 'white', height: '500px', fontWeight: 'bold', fontSize: '3rem', textShadow: '7px 5px 10px #1B1B1B, 5px 5px 10px #382F2F' }}>STARLINK MISSION</p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src="./images/img1.jpg"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <div className="char">
                  <p style={{ marginLeft: 0, marginBottom: 100, color: 'white', height: '500px', fontWeight: 'bold', fontSize: '3rem', textShadow: '7px 5px 10px #1B1B1B, 5px 5px 10px #382F2F' }}>IMAGE 1 CAPTION</p>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </>
  );
}

export default Home;
