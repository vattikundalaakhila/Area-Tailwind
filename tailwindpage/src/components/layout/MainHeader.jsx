import menu from "../../data/menu";
import Button from "../common/Button";

const MainHeader = () =>{
    return (
        <header className="py-4 font-dm_sans flex justify-between items-center px-4 ">
            <div className="text-2xl font-bold">
                Area
            </div>

            <nav className="hidden sm:block">
                <ul className=" flex gap-4 font-bold text-sm">
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

            <div className="hidden sm:block">
               <Button text = "Learn More" 
               link ="#contact"
               bgColor="bg-accent1"
               textColor="text-primary"/>
<div className="flex flex-col gap-1 sm:hidden">
               <span className="text-black w-[2px] h-[2px]"></span>
               <span className="text-black w-[2px] h-[2px]"></span>
               <span className="text-black w-[2px] h-[2px]"></span>
               </div>
            </div>
            <div className="flex flex-col gap-1 sm:hidden cursor-pointer">
               <span className="bg-black w-[16px] h-[3px]"></span>
               <span className="bg-black w-[16px] h-[3px]"></span>
               <span className="bg-black w-[16px] h-[3px]"></span>
               </div>


        </header>
    )
}

export default MainHeader;



