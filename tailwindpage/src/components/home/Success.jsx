import Button from "../common/Button";

const data = [
    {id: "01",
        p1 : "Get Started",
        p2: "With our intuitive setup, you’re up and running in minutes."

    },
    { id:"02",
        p1: "Customise and Configure", 
    p2: "Adapt Area to your specific requirements and preferences."},
    {
        id: "03",
        p1: "Grow Your Business",
        p2: "Make informed decisions to exceed your goals."
    }
];

const Success = ()=>{
    return(
        <section className="py-10">
            <div> 
                
                <hr className="text-text"/>
                
                <div className="flex justify-between py-12">
                <p className="font-medium text-4xl font-crimson_text">Map Your Success</p>
                <Button 
              

                text="Discover More"/>
                  </div>
            </div>
            <div className="flex gap-10">
                {
                    data.map((item, index) =>{
                        return(
                            <div key={item.index}
                            >
                            <hr/>
                            <div className="flex flex-col gap-12 justify-center py-12">
                            <p className="text-5xl text-text font-normal">{item.id}</p>

                            <div className="flex flex-col gap-8">
                            <p className="font-crimson_text text-accent4 text-2xl">{item.p1}</p>
                            <p className="font-dm_sans text-text text-lg font-normal">{item.p2}</p>
                            </div>

                            </div>
                            </div>
                        

                        )
                    })
                }

            </div>
        </section>
    )
}

export default Success;