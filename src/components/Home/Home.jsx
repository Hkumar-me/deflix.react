import MainSlider from "../MainSlider/MainSlider";
import Contents from "../Contents/Contents";
import "./Home.css"

function Home() {


  return (
    <>
      <main>
        <div id="main" >
          <MainSlider />
          <Contents/>
        </div>
      </main>
    </>
  );
}

export default Home;
