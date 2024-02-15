
import Contents from "../Contents/Contents";
import "./Home.css"
import ResponsiveCarousel from "../ResponsiveCarousel/ResponsiveCarousel";

function Home() {


  return (
    <>
      <main>
        <div id="main" >
          <ResponsiveCarousel/>
          <Contents/>
        </div>
      </main>
    </>
  );
}

export default Home;
