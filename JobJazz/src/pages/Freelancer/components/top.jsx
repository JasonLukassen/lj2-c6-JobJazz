import Images from "./Images"
import PayArea from "./PayArea"

export default function Top(){
    return(
        <div className="w-full mt-10 inline-flex justify-evenly">
            <Images/>
            <PayArea/>
        </div>
    )
}