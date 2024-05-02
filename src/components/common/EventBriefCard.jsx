export default function EventBriefCard() {
    return (
        <div className="relative w-[90%] md:w-[350px] h-[300px] overflow-hidden group">
            <img className="absolute w-full h-full object-cover" src="./image.png" />
            <p className="absolute -bottom-10 right-2 text-4xl text-white font-bold transition-bottom duration-300 group-hover:bottom-1">
                Lorem Ipsum
            </p>
        </div>
    );
}
