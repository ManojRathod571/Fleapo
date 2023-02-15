import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Footer />
    </Box>
  );
}

export default App;
