import Comparision from "../../data/Comparision";
// import check from "../../assets/logos/CheckIcon";
// import close from "../../assets/logos/CloseIcon";

const Specifications = ()=>{

    return (
        <section className="my-12">
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                <tr className="py-4 border border-gray-200 " >
                    <th className="py-4">Area</th>
                    <th>Websurge</th>
                    <th>Hyperview</th>
                </tr>
                </thead>

                <tbody className="">
                {
                    Comparision.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td className="py-4 px-20">
                                    {item.area.text}

                                </td>
                                <td>
                                    {item.websurge.text}

                                </td>
                                <td>
                                    {item.hyperview.text}

                                </td>

                            </tr>
                        )
                    })

                }
                </tbody>
            </table>

        </section>
    )
}

export default Specifications;