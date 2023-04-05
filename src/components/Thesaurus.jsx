import { Text } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
const Thesaurus = () => {
  const Navigation = () => {
    return (
      <Routes>
        <Route exact path="/thesaurus/" element={<Thesaurus />} />
      </Routes>
    );
  };
  return (
    <div>
      <div className="container">
        <Text color="white">hi</Text>
        <Navigation />
      </div>
    </div>
  );
};

export default Thesaurus;
