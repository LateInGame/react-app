import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/my-logo.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { React } from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/davidcortez-webdev"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/davidafonsodeus"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/davidvcortez/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>CopyRight 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
