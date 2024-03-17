import React from "react";
import { Text, Container, Row, Col, Card } from "@nextui-org/react";

export const WhatWeOfferComponent = () => {
  return (
    <div>
      {/* Feature Section */}
      <Text h1 color="white" css={{ pr: "100px" }}>
        What We Offer For You!
      </Text>
      <br />
      <Container>
        <Row gap={1} css={{ pr: "170px" }}>
          <Col>
            <Card
              isHoverable
              justify="space-evenly"
              css={{ mw: "500px", p: "10px", pr: "30px" }}
            >
              <Card.Header>
                <Text h4>Echo Finder: Discover Similar Sounding Words!</Text>
              </Card.Header>
              <Card.Body>
                <Text align="center" size="$md">
                  Unlock the power of words with Echo Finder, the ultimate
                  Thesaurus App! Effortlessly find words that sound like your
                  desired term, helping you find the perfect synonym or
                  homophone effortlessly.
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card isHoverable css={{ mw: "500px", p: "10px", pr: "30px" }}>
              <Card.Header>
                <Text h4>Descriptor Dynamo: Uncover Common Adjectives!</Text>
              </Card.Header>
              <Card.Body size="$md">
                <Text align="center">
                  With Descriptor Dynamo, uncover a plethora of adjectives
                  commonly used to describe various nouns, empowering you to
                  articulate with precision and flair in your communication.
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              variant="bordered"
              isHoverable
              css={{ mw: "500px", p: "10px", pr: "30px" }}
            >
              <Card.Header>
                <Text h4>Noun Navigator: Find Matching Descriptors!</Text>
              </Card.Header>
              <Card.Body>
                <Text align="center">
                  Explore Noun Navigator to identify nouns frequently described
                  by specific adjectives, facilitating seamless expression and
                  enhancing your vocabulary depth.
                </Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatWeOfferComponent;
