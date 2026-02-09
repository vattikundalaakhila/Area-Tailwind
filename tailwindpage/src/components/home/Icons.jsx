import cableicon from "../../assets/logos/CableIcon.png";
import accounticon from "../../assets/logos/AccountIcon.png";
import earthicon from "../../assets/logos/EarthIcon.png";
import charticon from "../../assets/logos/ChartIcon.png";

const data = [

    { id: 1,
        img: cableicon,
        p1: "Amplify Insights",
        p2: "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."

    },

    { 
        id: 2, 
        img: earthicon,
        p1: "Control Your Global Presence",
        p2: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."

    },

    {
        id: 3,
        img: accounticon,
        p1: "Remove Language Barriers ",
        p2: "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."

    },

    {
        id: 4,
        img: charticon,
        p1: "Visualise Growth",
        p2: "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."
    }
]

const Icons = ()=>{
    return(
        <section className="my-6">
            <div className="flex gap-6"> 
                {
                    data.map((item)=>{
                        return(
                            <div key={item.id}> 
                            <hr className="text-text" />
                            <div className="flex flex-col gap-8 py-10">
                                <img src={item.img} alt="cable icon"
                                className="w-[22px] h-[22px]" />
                                <p className="text-crimson_text text-accent4 text-xl">{item.p1}</p>
                                <p className="text-dm_sans text-text">{item.p2}</p>
                                </div>
                                </div>

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Icons;