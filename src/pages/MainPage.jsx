// Import the required modules
import "./App.css";
import { Button, Card, Grid, Spacer, Text } from "@nextui-org/react";
import { Illustration } from "../components/CommunicationSVG";
// use arrow function
// they look cool so I just started using them
// why do they look cool? idk
const App = () => {
  // I might reuse this testimonial somewhere else
  // but for now it just keeps the actual HTMX code
  // simplistic and I can just import it as a component
  // instead of pasting a giant blob of text
  // somewhere into the code making it look ugly
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
  // Render the UI
  return (
    <div className="container">
      {/* Display a welcome message */}
      <Text color="white" size={50} b>
        Welcome To Our Thesaurus App!
      </Text>

      <Spacer y={1} />

      <Grid.Container gap={2} justify="center">
        <Grid>
          {/* Display a description of the app */}
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

// Export the App component as the default export of this module
export default App;
