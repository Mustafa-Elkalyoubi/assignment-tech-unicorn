import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Items from "../components/Shop/Items";

function Shop() {
  return (
    <>
      <Header />
      <Main
        title="Home Shopping, Your Choice!"
        caption="https://www.pexels.com/photo/person-using-black-and-white-smartphone-and-holding-blue-card-230544/">
        <img
          src="src/assets/cart.jpg"
          alt="phone app cart shopping"
          loading="lazy"
          style={{ width: "40vw", minWidth: "450px" }}
        />
      </Main>
      <Items />
      <Footer />
    </>
  );
}

export default Shop;
