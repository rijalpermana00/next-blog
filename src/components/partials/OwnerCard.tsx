import AppConfig from "@/utils/AppConfig"

interface props{
    title?:string
}

export const OwnerCard = (props:props) => {

    return(
        <div>
            <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2">{props?.title}</h5>
            <div className="max-w-lg mx-auto mb-10 bg-white dark:bg-gray-700 rounded-xl shadow-md p-5">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"/>
                <h2 className="text-center text-2xl text-black dark:text-white font-semibold mt-3">{AppConfig.owner.name}</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-1">{AppConfig.owner.job}</p>
                <div className="mt-5">
                <hr/>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                    {AppConfig.owner.desc}
                </p>
                <div className="flex justify-center mt-5">
                <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
                <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
                <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
                </div>
                
                </div>
            </div>
        </div>
        
    )
}

export const OwnerCardAlt = (props:props) => {

    return(
        <div className="max-w-lg mx-auto mb-10 bg-white dark:bg-gray-700 rounded-xl shadow-md p-5">
            <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-3">About Me</h5>
            <hr className="mb-7"/>
            <img className="w-32 h-32 rounded-xl" src="https://picsum.photos/200" alt="Profile picture"/>
            <h2 className="text-2xl text-black dark:text-white font-semibold mt-3">{AppConfig.owner.name}</h2>
            {/* <p className="text-gray-600 dark:text-gray-400 mt-1">{AppConfig.owner.job}</p> */}
            <div className="mt-5">
                {/* <hr/> */}
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {AppConfig.owner.desc}
                </p>
            </div>
        </div>
    )
}

export default OwnerCard