import Image from "next/image";
const Loader:React.FC = () => {
    return (
        <div className="w-screen h-screen fixed z-20 top-0 left-0 bg-white flex justify-center items-center">
            <div className="w-[60px] h-[60px] bg-transparent relative animate-spin">
                <Image
                src={'/img/logo.png'}
                alt="logo"
                layout="fill"
                objectFit="cover"
                />
            </div>
        </div>
    );
}

export default Loader;