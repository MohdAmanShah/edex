import NavBar from "./component/NavBar.jsx";
import Search from "./component/Search.jsx";
import ShowOff from "./component/ShowOff.jsx";
import Footer from "./component/Footer.jsx";
import Article from "./component/Article.jsx";
import Image from '/src/assets/searchPhoto.png';
function App() {
  return (
    <>
      <main>
        <NavBar />
        <div id="centerSearchArea">
          <Search />
          <img id="searchImage" src={Image} alt="Person searching for something" />
        </div>
      </main>
      <ShowOff />
      <Article />
      <Footer />
    </>
  );
}

export default App;