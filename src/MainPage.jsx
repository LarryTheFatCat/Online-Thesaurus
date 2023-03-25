// Import the required modules
import "./App.css";
import { useState } from "react";
import { Button, Grid, Spacer, Text, Loading } from "@nextui-org/react";

function App() {
  // Create a state variable to track the loading status of the button
  const [loadingButton, setLoadingButton] = useState(false);

  // Define a function to execute when the button is pressed
  const newSite = () => {
    // Update the loading status of the button
    setLoadingButton(true);

    // Simulate a delay of 5 seconds before navigating to a new page
    setTimeout(() => {
      // TODO: Uncomment the following lines once the Thesaurus component is ready
      // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
      // import Thesaurus from "./pages/Thesaurus";
      // <Router>
      //   <Routes>
      //     <Route exact path="/pages/Thesaurus" element={<Thesaurus />} />
      //   </Routes>
      // </Router>;
    }, 5000);
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
            {/* Display a button to start using the app */}
            {loadingButton ? (
              // If the button is currently loading, display a loading indicator
              <Button color="gradient">
                <Loading color="currentColor" type="points" />
              </Button>
            ) : (
              // If the button is not loading, display the regular button
              <Button onPress={newSite} color="gradient">
                Get Started Now
              </Button>
            )}
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </div>
  );
}

// Export the App component as the default export of this module
export default App;
