export const ScrollableCard = () => {
    return(
        <div className="flex flex-col bg-white m-auto p-auto max-w-6xl mx-auto justify-center">
            <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
                Example
            </h1>
            <div
                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
                <div
                className="flex flex-nowrap"
                >
                    <div className="inline-block px-3">
                        <img src="https://picsum.photos/800/900?random" alt="Image 1"/>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}