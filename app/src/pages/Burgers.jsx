import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import BurgersPage from "../components/burgers/burgers";

function Burgers() {
  return (
    <div className="bg-black">
      <Navbar />
      <BurgersPage/>
      <Footer />
    </div>
  );
}

export default Burgers;
