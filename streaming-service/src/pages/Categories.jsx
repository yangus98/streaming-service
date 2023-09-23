import { useState } from "react"
import FilmDetails from "../components/FilmDetails"
import OurRaccomandation from "../components/Category/OurRaccomandation"
import OthersLittleList from "../components/Category/Others/OthersLittleList"
import AnimazioneLittleList from "../components/Category/Animazione/AnimazioneLittleList"
import AvventuraLittleList from "../components/Category/Avventura/AvventuraLittleList"
import ComicoLittleList from "../components/Category/Comico/ComicoLittleList"
import DrammaticoLittleList from "../components/Category/Drammatico/DrammaticoLittleList"
import AzioneLittleList from "../components/Category/Azione/AzioneLittleList"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"


const Categories = () => {
    const [detailsEditing, setDetailsEditing] = useState(false);
    const setDetailsEditingHandler = () => {
        if (detailsEditing === false){
            setDetailsEditing(true)
        } else {
            setDetailsEditing(false)
        }
      }
    return(
        <>
        <Sidebar/>
        <Navbar/>
         { detailsEditing && <FilmDetails closeDetails={setDetailsEditingHandler} title="Avatar - La via dell'acqua" img="bg-[url('https://static.sky.it/images_static/tg24/spettacolo/2019/08/14/James_Cameron/James_Cameron_Avatar.jpg.transform/hero-tablet/ffd5e21ae3ab3803fee4805ee5532d1bc3304f7a/img.jpeg')]" /> }
        <div className="flex item-center justify-center mt-10 py-[30px]">
            <div className="flex flex-col border border-black w-[870px] gap-8">
                <OurRaccomandation click={setDetailsEditingHandler}/>
                <OthersLittleList />
                <AzioneLittleList/>
                <AnimazioneLittleList />
                <AvventuraLittleList />
                <ComicoLittleList />
                <DrammaticoLittleList />

            </div>
        </div>
        </>
    )
}

export default Categories
