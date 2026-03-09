import Banner from "../components/home/Banner";
import Client from "../components/home/Client";
import Benefits from "../components/home/Benefits";
import HeroImage from "../components/home/HeroImage";
import HeroImage2 from "../components/home/HeroImage2";
import CTA from "../components/home/CTA";
import { Features } from "tailwindcss";
import Features1 from "../components/home/Features1";
import Testimonials from "../components/home/Testimonials";
import Success from "../components/home/Success";
import Specifications from "../components/home/Specifications";
import Icons from "../components/home/Icons";

const Home = ()=>{
    return(
        <div>
            <Banner/>
            <Client/>
            <Benefits/>
            <Icons/>
            <HeroImage/>
            <Features1/>
            <Specifications/>
            <Testimonials/>
            
            <Success/>
            <HeroImage2/>
            
            <CTA/>
            
        </div>
    )
}

export default Home;