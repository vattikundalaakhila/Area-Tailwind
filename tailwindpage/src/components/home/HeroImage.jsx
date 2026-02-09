import Hero from "../../assets/heroImage.png";

const HeroImage = ()=>{
    return(
        <div className="my-10 flex justify-center ">
            <img src={Hero}  
            className="w-100 h-50 rounded-20  object-fill md:w-120  h-100 lg:w-270 h-130"
            
            alt="Hero image" />
        </div>
    )
}

export default HeroImage;