import './App.css';
import InfoElement from "./components/Info.js"
import AboutElement from "./components/About.js"
import InterestsElement from "./components/Interests.js"
import FooterElement from "./components/Footer.js"

function App() {
  return (
    <div>
      <InfoElement />
      <AboutElement />
      <InterestsElement />
      <FooterElement />
    </div>
  );
}

export default App;
