

export const DefaultTabs = () => {
    
    const tabs = [
        { title: 'View All', href: '/components', className: 'text-gray-700 font-extrabold capitalize' },
        { title: 'Grid', href: '/components/grid', className: 'text-gray-800 hover:font-extrabold', titleAttr: 'Tailwind Grid' },
        { title: 'Menu', href: '/components/menu', className: 'text-gray-700 hover:font-extrabold capitalize', titleAttr: 'Tailwind Menu' },
        { title: 'Menu', href: '/components/menu', className: 'text-gray-700 hover:font-extrabold capitalize', titleAttr: 'Tailwind Menu' },       
    ];
    
    return (
        <div className="mt-10 px-4 py-3 sm:px-10 sm:py-4 mx-auto bg-white max-w-5xl">
            <div className="flex items-center space-x-4 overflow-y-auto md:max-w-lg xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl whitespace-nowrap border-b-4 justify-center">
                {tabs.map((tab, index) => (
                    <a
                        key={index}
                        href={tab.href}
                        className={tab.className}
                        title={tab.titleAttr || tab.title}
                    >
                        {tab.title}
                    </a>
                ))}
            </div>

        </div>
    )
}