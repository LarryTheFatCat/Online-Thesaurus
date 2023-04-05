import { Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const Navigation = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/thesaurus" element={<Thesaurus />} />
        </Routes>
      </Router>
    );
  };
  return (
    <div>
      <div className="container">
        <Text>hi</Text>
        <button onClick={() => navigate("/")}>Go back to home page</button>
        <Navigation />
      </div>
    </div>
  );
};

export default App;
