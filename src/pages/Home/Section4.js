import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Gather around the table and share laughter and stories over our delicious burgers, because nothing brings people together like a good burger.
              </p>
              <ul>
                <li>
                  <p>
                    "Gather, Laugh, Eat: Our burgers are more than just food. They're the centerpiece of shared moments, where laughter flows freely and stories are exchanged
                  </p>
                </li>
                <li>
                  <p>Burgers, Stories, Joy: Bring your loved ones together and relish in the simple pleasure of good food and great company. Our burgers are the catalyst for unforgettable memories.</p>
                </li>
                <li>
                  <p>
                    Savor, Smile, Enjoy: Our mouthwatering burgers are made for sharing, inviting you to come together with friends and family to create memories that will last a lifetime
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
