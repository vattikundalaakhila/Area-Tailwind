import logo from "../../assets/logos/logo.png"
import logo1 from "../../assets/logos/logo1.png"
import logo2 from "../../assets/logos/logo2.png"
import logo3 from "../../assets/logos/logo4.png"
import logo4 from "../../assets/logos/logo5.png"
import logo5 from "../../assets/logos/logo7.png";



const client_array = [
    logo, logo1, logo2, logo3, logo4, logo5,
];

const Client = ()=> {
    return(
        <section className="py-12"> 
            <header>
                <h2 className="text-text text-sm font-dm_sans font-normal">Trusted by : </h2>
            </header>
            <div className="flex justify-center gap-x-10 gap-y-18 spacing my-12 px-10 flex-wrap item-center">
                {client_array.map((item,index)=>{
                    return(
                    <div key= {index}>
                        <img src={item} 
                        alt={`client${index+1}`} 
                        width={110}
                        height= {40}
                        loading= "lazy"/>
                         </div>
                    )

                })}
            </div>
        </section>
    )

}

export default Client;