import bgImage from "../../assets/BackgroundBubble.png";
import arrowLeft from '../../assets/icons/arrowLeftReview.png';
import arrowRight from '../../assets/icons/arrowRightReview.png';

export default function Home() {
    return (
        <>
            <div className="relative h-screen">
                <div className="absolute left-0 top-0 bottom-0 w-1/2 flex">
                    <div className="flex flex-col items-start justify-center pl-10 md:pl-[20vw]">
                        <h1 className="text-black font-brockmann font-bold text-6xl leading-normal">JobJazz</h1>
                        <h2 className="text-black font-brockmann text-2xl leading-loose">Connecting Talent with Tasks, Seamlessly.</h2>
                        <h3 className="text-black font-brockmann text-md leading-loose">
                            Learn more or <button className="text-xl bg-purple-500 px-7 py-2 rounded-full">Get Started</button>
                        </h3>
                    </div>
                </div>
                <div className="absolute right-[-10vw] top-[35vh] bottom-0 w-1/2">
                    <img src={bgImage} alt="" className="object-cover animate-bounce delay-1000" />
                </div>
            </div>
        </>
    );
}
