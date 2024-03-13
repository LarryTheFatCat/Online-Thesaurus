import "./App.css";
import {
  Button,
  Card,
  Grid,
  Spacer,
  Text,
  Input,
  Row,
  Container,
} from "@nextui-org/react";
import { Illustration } from "../components/CommunicationSVG";
import { Testimonial, Testimonial_Two } from "../components/Testimonial";
import { useRef, useState } from "react";
const App = () => {
  const paragraphRef = useRef(null);
  const [word, setWord] = useState(""); // Allows us to update word

  return (
    <div className="container">
      <Text color="white" size={50} b>
        Welcome To Our Thesaurus App!
      </Text>

      <Spacer y={1} />

      <Grid.Container gap={2} justify="center">
        <Grid>
          <Text color="#C1C2C5" css={{ maxWidth: "600px", fontSize: "15px" }}>
            Get ready to expand your vocabulary and elevate your writing with
            our comprehensive database of synonyms, antonyms, and related words.
            Whether you're a student, writer, or just looking to improve your
            communication skills, our app is here to help. Let's dive in and
            discover a world of words together!
          </Text>
        </Grid>
        <Grid.Container gap={4} justify="center">
          <Grid>
            <Button
              onClick={() =>
                paragraphRef.current.scrollIntoView({
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
      <Spacer y={2} />
      <Container css={{ d: "flex" }}>
        <Card isHoverable css={{ mw: "500px", h: "250px" }} variant="bordered">
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
        <Illustration />
      </Container>
    </div>
  );
};
export default App;
