import { useState } from "react";
import ParsedInfo from "./components/ParsedInfo";
import Home from "./pages/Home";
import Navbar from "./shared/Navbar/Navbar";

const App = () => {
  const [showSearchData, setShowSearchData] = useState(false);
  return (
    <div>
      <Navbar />
      <Home
        showSearchData={showSearchData}
        setShowSearchData={setShowSearchData}
      />
      <ParsedInfo showSearchData={showSearchData} />
    </div>
  );
};

export default App;
