/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p> HTML, CSS, SCSS, Bootstrap,
                  JavaScript ES6, React, SQL, Git, GitHub, Heroku and Ruby on Rails. Designed, implemented and deployed
                  to production a clone of AirBnB and a Rails app My Park: https://my-park-zda.herokuapp.com/</p>
              <Carousel responsive={responsive} infinite={true} className="skills-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Product Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>UX/UI</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Mobile Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" alt="colorsharp" src={colorSharp} /> */}
    </section>
  )

}
