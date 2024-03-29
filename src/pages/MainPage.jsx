import "./App.css";
import {
  Button,
  Card,
  Grid,
  Spacer,
  Text,
  Row,
  Col,
  Container,
} from "@nextui-org/react";
import { Illustration } from "../components/CommunicationSVG";
import { ThesaurusSVG } from "../components/ThesaurusSVG";
import { Testimonial, Testimonial_Two } from "../components/Testimonial";
import { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import { WhatWeOfferComponent } from "../components/WhatWeOfferComponent";

const App = () => {
  const expandVocab = useRef(null);
  return (
    <div className="container">
      <ScrollToTop smooth viewBox="0 0 24 24" svgPath="M6 15L12 9L18 15" />
      <>
        <Text color="white" size={50} b>
          Welcome To Our Thesaurus App!
        </Text>
        <Spacer y={1} />
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Text color="#C1C2C5" css={{ maxWidth: "600px", fontSize: "15px" }}>
              Get ready to expand your vocabulary and elevate your writing with
              our comprehensive database of synonyms, antonyms, and related
              words. Whether you're a student, writer, or just looking to
              improve your communication skills, our app is here to help. Let's
              dive in and discover a world of words together!
            </Text>
          </Grid>
          <Grid.Container gap={4} justify="center">
            <Grid>
              <Button
                onClick={() =>
                  expandVocab.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                color="gradient"
              >
                Get Started Now
              </Button>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </>
      <Spacer y={2} />
      <>
        <Container css={{ d: "flex" }}>
          <Card
            isHoverable
            css={{ mw: "500px", h: "200px" }}
            variant="bordered"
          >
            <Card.Body>
              <Testimonial />
            </Card.Body>
          </Card>
          <Spacer x={10} />
          <Card isHoverable css={{ mw: "500px" }} variant="bordered">
            <Card.Body>
              <Row justify="right" align="right">
                <Testimonial_Two />
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col>
              <Illustration />
            </Col>
            <Col>
              <ThesaurusSVG />
            </Col>
          </Row>
        </Container>
      </>
      <>
        <Container color="white" align="left">
          <div ref={expandVocab}>
            <Row>
              <Col>
                <Text h2 color="white">
                  Expand Your Knowledge and Vocabulary!
                </Text>
                <br />
                <Text
                  align="center"
                  justify="left"
                  color="gray"
                  css={{ mw: "500px" }}
                >
                  Utilize this platform to streamline and enhance your lexicon!
                  Here, you can actively cultivate and broaden your vocabulary
                  repertoire. Through the array of tools and resources
                  available, you can engage in systematic vocabulary building
                  and refinement. Whether you're a student aiming to ace exams,
                  a professional seeking to excel in communication, or an avid
                  learner passionate about language, our platform empowers you
                  to achieve linguistic mastery. Explore our products and embark
                  on a journey of linguistic enrichment today!
                </Text>
              </Col>
              <br />
              <Col>
                <Text h2 color="white">
                  Elevate Your Linguistic Proficiency!
                </Text>
                <br />
                <Text align="center" color="gray" css={{ mw: "500px" }}>
                  Embark on a journey of linguistic empowerment with our
                  comprehensive platform! Unleash the full potential of your
                  vocabulary and elevate your communication skills to new
                  heights. Whether you're a language enthusiast, a student
                  striving for academic excellence, or a professional aiming to
                  enhance your verbal prowess, our resources and tools are
                  tailored to meet your needs. From curated word lists to
                  interactive exercises, immerse yourself in a rich linguistic
                  landscape designed to expand your knowledge and refine your
                  language proficiency. Don't just speak – articulate with
                  precision and confidence. Start your linguistic adventure
                  today!
                </Text>
              </Col>
            </Row>
          </div>
        </Container>
      </>
      <br />
      <Container>
        <WhatWeOfferComponent />
        <Spacer y={10} />
        <Container>
          <Text align="center" color="white" h1>
            Try Our Products!
          </Text>
          <Row>
            <Col>
              <Card isHoverable variant="flat" css={{ mw: "500px" }}>
                <Card.Header>
                  <Text h4 color="#18181B">
                    Descriptor Dynamo: Uncover Common Adjectives!
                  </Text>
                </Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default App;
