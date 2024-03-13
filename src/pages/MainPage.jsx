import "./App.css";
import { Button, Card, Grid, Spacer, Text, User } from "@nextui-org/react";
import { Illustration } from "../components/CommunicationSVG";
import { Testimonial } from "../components/Testimonial";
import { useRef } from "react";
const App = () => {
  const paragraphRef = useRef(null);

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
      <Grid.Container>
        <Card isHoverable css={{ mw: "500px" }} variant="bordered">
          <Card.Body>
            <Testimonial />
          </Card.Body>
        </Card>
      </Grid.Container>
      <Grid.Container justify="right">
        <Grid l>
          <Illustration />
        </Grid>
      </Grid.Container>
      <Grid.Container>
        <Grid>
          <div ref={paragraphRef}>hello</div>
        </Grid>
      </Grid.Container>
    </div>
  );
};
export default App;
