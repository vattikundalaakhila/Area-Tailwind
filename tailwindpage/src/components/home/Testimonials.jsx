import image2 from "../../assets/image2.png";

const Testimonials = ()=>{
    return(
        <section className="flex flex-col  md:flex-col lg:flex-row gap-10 my-20">
            <div className="basis-1/2 ">
                <img src={image2} alt="iimage 2" 
                className="w-[600px] h-[500px] md:w-[740px] md:h-[700px] lg:w-[500px] lg:h-[580px]"/>
            </div>
            <div className="flex flex-col gap-16 basis-1/2 justify-center px-4  py-6 lg:px-10">
                <p className="text-accent4 text-4xl font-medium font-crimson_text  py-2 tracking-[-0.04em]">
                    “I was skeptical, but Area has completely transformed the way
                     I manage my business. The data visualizations are so clear and
                      intuitive, and the platform is so easy to use.
                     I can't imagine running my company without it.”</p>

                <div className="flex  lg:flex-col gap-4">
                    <p className="font-dm_sans text-accent4 text-base ">John Smith</p>
                    <p className="font-roboto_mono font-accent1 text-sm "> Head of Data</p>
                </div>

            </div>
        </section>
    )
}

export default Testimonials;