import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import LatestBook from "../../components/LatestBook/LatestBook";
import Navbar from "../../components/Navbar/Navbar";
import TopWriter from "../../components/TopWriter/TopWriter";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <TopWriter></TopWriter>
            <LatestBook></LatestBook>
        </div>
    );
};

export default Home;