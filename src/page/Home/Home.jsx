import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;