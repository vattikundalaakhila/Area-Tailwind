import Button from "../common/Button";
import image from "../../assets/image.png";
const data = [
    {
        id: "01",
        content: "Spot Trends in Seconds: No more digging through numbers."
    },
    {
        id: "02",
        content: "Get Everyone on the Same Page: Share easy-to-understand reports with your team. "
    },
    {
        id: "03",
        content: "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged."
    },
    {
        id: "04",
        content: "Your Global Snapshot: Get a quick, clear overview of your entire operation."
    }


];
const Features1 = () => {
    return (
        <section className="flex  flex-col px-10 lg:flex-row gap-6 mt-20">
            <div className="flex flex-col gap-8 basis-1/2">

                <h2 className="text-bold font-medium font-crimson_text text-accent4 text-5xl">See the Big Picture</h2>
                <p className="text-sm font-dm_sans text-text">Area turns your data into clear, vibrant visuals that
                    show you exactly what's happening in each region.
                </p>

                <div>
                    <hr className="text-text mb-6"/>
                    <div className="flex  flex-col gap-10 ">
                        {data.map((item,index) => {
                            return (

                                <div 
                                    key={item.index} >
                                        <div className="flex   gap-8">
                                            
                                    
                                    <p className="text-sm text-text font-dm_sans">{item.id}</p>
                                    <p className="text-sm text-accent4 font-dm_sans font-normal">{item.content}</p>
                                    
                                    </div>
                                    <hr className="text-text6 mt-6" />
                                    
                                </div>



                            )

                        })}
                    </div>
                </div>
            <Button text="Discover More"
            textColor="accent4"
            bgColor="accent2"
            link="#contact"/>

            </div>

            <div className="basis-1/2  flex justify-center items-center">
                <img src={image} alt="image"
                className= "flex  w-[340px] h-[440px] md:w-[720px] md:h-[750px] lg:w-[440px] lg:h-[640px]" />
            </div>

        </section>
    )
}

export default Features1; 