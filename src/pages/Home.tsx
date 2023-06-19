import Header from "../components/Header";

import Main from "../components/Main";
import Premium from "../components/Home/Premium";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <section>
        <Main
          title="Your Premium Sound, Unplugged"
          caption="
            https://www.pexels.com/photo/white-wireless-headphones-3394665/"
          moreButton>
          <img
            src="src/assets/headphones.jpg"
            alt="headphones"
            loading="lazy"
            style={{ width: "40vw", minWidth: "450px" }}
          />
        </Main>
      </section>
      <section>
        <Premium />
      </section>
      <Footer />
    </>
  );
}

export default Home;
