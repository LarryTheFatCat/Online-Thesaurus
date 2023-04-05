import "./App.css";
import { Button, Card, Grid, Spacer, Text, Link } from "@nextui-org/react";
import { Illustration } from "../components/CommunicationSVG";

const App = () => {
  const Testimonial = () => {
    return (
      <div>
        <p>
          "I have been using LarryTheFatCat's Thesaurus app for the past few
          months, and it has been a game-changer for my communication. As a
          writer, I often struggle to find the right words to convey my thoughts
          effectively, but with this app, I can quickly and easily find synonyms
          and antonyms to enhance my writing." - ChatGPT
        </p>
      </div>
    );
  };

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
            <Button color="gradient">Get Started Now</Button>
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
        <Grid>
          <Illustration />
        </Grid>
      </Grid.Container>
    </div>
  );
};
export default App;
