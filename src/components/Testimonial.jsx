import React from "react";
import { User } from "@nextui-org/react";

export const Testimonial = () => {
  return (
    <div>
      <p>
        "I have been using Tarkan's Thesaurus app for the past few months, and
        it has been a game-changer for my communication. As a writer, I often
        struggle to find the right words to convey my thoughts effectively, but
        with this app, I can quickly and easily find synonyms and antonyms to
        enhance my writing."
      </p>
      <User name="ChatGPT" description="AI Programming Robot" />
    </div>
  );
};

export default Testimonial;
