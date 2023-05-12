type props = {
    bgColor?: 'bg-gray-800' | 'bg-gray-200' | undefined
}

const Header = () => {
    return (
        <div className="sm:pb-12 pb-8 pt-8 sm:pt-12">
            <div className="mx-auto max-w-2xl">
                <h1 className="text-6xl leading-none tracking-tighter font-black text-center text-gray-900 whitespace-pre-line leading-hero">Truegreys,</h1>
                <h1 className="text-6xl leading-none tracking-tighter font-black text-center text-gray-500 whitespace-pre-line leading-hero mb-7">by Sani Asmi</h1>
                <h6 className="text-2xl leading-none tracking-tighter font-black text-center text-gray-500 whitespace-pre-line leading-hero">Fiksi, Fiksi, Fiksi, atau Mungkin Bukan</h6>
            </div>
        </div>
    )
}

export const AlternativeHeader = () => {
    return (
        <div className="relative pt-16 pb-64 flex content-center items-center justify-center">
            <div className="w-full w-max-full bg-red-200">
                <div className="sm:pb-12 pb-8 ">
                    <h1 className="text-6xl leading-none tracking-tighter font-black text-center text-gray-900 whitespace-pre-line leading-hero">Truegreys,</h1>
                    <h1 className="text-6xl leading-none tracking-tighter font-black text-center text-gray-500 whitespace-pre-line leading-hero">Sani Asmi</h1>
                </div>
                
                <div className="absolute w-full h-12 bg-black"></div>
                {/* <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16 ">
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-gray-200 fill-current" points="2560 0 2560 100 0 100">
                        </polygon>
                    </svg>
                </div> */}
            </div>
        </div>
    )
}

export const AlternativeHeader2 = ({
    bgColor
}:props) => {
    return (
        <div className={`relative pt-16 pb-72 flex content-center items-center justify-center ${bgColor}`}>
            <div className={`w-full w-max-full ${bgColor}`}>
                <div className="sm:pb-12 pb-8 ">
                    <h1 className="text-6xl leading-none tracking-tighter font-black text-center text-gray-900 whitespace-pre-line leading-hero">Truegreys,</h1>
                    <h1 className="text-6xl leading-none tracking-tighter font-black text-center text-gray-500 whitespace-pre-line leading-hero">Sani Asmi's Blog</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
