import AllBooks from "../../components/AllBooks/AllBooks"
import Banner from "../../components/Banner/Banner"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-11 lg:mt-[100px]">
                <h2 className="text-[40px] font-bold text-center mb-10 text-[#131313]">Books</h2>
                <AllBooks></AllBooks>
            </div>
        </div>
    )
}

export default Home
