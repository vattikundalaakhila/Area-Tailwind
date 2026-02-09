import menu from "../../data/menu";
import Button from "../common/Button";

const MainHeader = () =>{
    return (
        <header className="py-4 font-dm_sans flex justify-between items-center ">
            <div className="text-2xl font-bold">
                Area
            </div>

            <nav className="hidden sm:block">
                <ul className="flex gap-4 font-bold text-sm">
                    { menu.map(
                        (item)=> {
                            return(
                            <li key= {item.id}>
                                <a href={item.link}>{item.title}</a>

                            </li>
                            )
                        }
                    )}
                   
                </ul>
            </nav>

            <div>
               <Button text = "Learn More" 
               link ="#contact"
               bgColor="bg-accent1"
               textColor="text-primary"/>
            </div>

        </header>
    )
}

export default MainHeader;



