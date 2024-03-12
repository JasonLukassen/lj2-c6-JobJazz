import Rating from "./rating"

function Card() {

    return (
        <div className="w-56 h-40 bg-white shadow-xl rounded-3xl" >
            <div className=" inline-flex justify-evenly w-full mt-4">
                <p className=" font-bold mt-1">Diego Loomans</p>
                <img src="#" alt="Profile Picture" className=" w-10 h-10 bg-black rounded-full"/>
            </div>
            <p className="ml-5 -mt-1">Software Developer</p>
            <Rating/>
        </div>
    )
}

export default Card