import Ipad from "../../assets/Ipad.png";
import Iphone from "../../assets/Iphone.png";

const Banner = ()=> {
    return (
       <section className="py-10">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl sm:text-8xl text-bold font-crimson_text  text-center">Browse Everything.</h1>
        </div>
        <div className="flex justify-center items-center my-10">
            { <img src={Ipad} alt="i-pad"
            className="hidden sm:block border-10 rounded-4xl" /> }

            <img src={Iphone} alt="i-phone"
            className=" block sm:hidden border-10 rounded-4xl" />

            <div></div>

        </div>

       </section>
    )
}
export default Banner;