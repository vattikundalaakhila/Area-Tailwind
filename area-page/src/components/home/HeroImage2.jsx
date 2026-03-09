import Hero2 from "../../assets/Hero2.png";


const HeroImage2 = () =>{
    return (
        <div className="py-5 my-10 justify-center items-center text-center flex">
            <img src={Hero2}
             className="w-100 h-50 rounded-[20px] flex  object-fill md:w-200  h-100 lg:w-270 h-130"
            
            alt="Hero Image 2" />
        </div>
    )
}
export default HeroImage2;