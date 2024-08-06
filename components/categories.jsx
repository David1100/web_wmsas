import Image from "next/image"

export default function Categories({ category }) {
    return (
        <div className="rounded-lg w-full h-72 relative group cursor-pointer">
            <Image className="cursor-pointer rounded-lg" src={category.imageUrlCategory} alt="Logo principal" layout="fill" objectFit="cover"/>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-4xl text-3xl z-10 text-shadow-lg">{category.nameCategory}</h1>
            <div className="absolute inset-0 bg-black bg-opacity-70 justify-center items-center flex group-hover:bg-black group-hover:bg-opacity-40 transition-colors duration-300 ease-in-out">
            </div>
        </div>
    )
}