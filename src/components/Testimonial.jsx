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

export const Testimonial_Two = () => {
  return (
    <div>
      <p>
        "I have been using Tarkan's Thesaurus for years now and I must say, it
        has been a game changer for me. As a writer, I am constantly in need of
        finding the perfect words to express my thoughts and the thesaurus has
        never failed me. The best part about it is that it is fast and free,
        making it accessible to everyone. I can always count on Thesaurus to
        provide me with a wide range of synonyms and antonyms, making my writing
        more diverse and impactful. Thank you Thesaurus for being my go-to tool
        for all my writing needs. I highly recommend it to anyone looking to
        enhance their vocabulary and improve their writing skills."
      </p>
      <User name="Janice Lee" description="Writer" />
    </div>
  );
};

export default Testimonial;
