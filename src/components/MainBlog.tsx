
const MainBlog = () => {
    return (
        <div className="col-12 flex justify-center items-center flex-wrap flex-col">
            <div className='w-full'>
                <img alt="How to make toys from old Olarpaper" src="https://bookworm-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fposts%2F01.jpg&w=1920&q=75" decoding="async" data-nimg="1" className="rounded-lg" />
            </div>
            <div>
                <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
                    <li>
                        <a className="flex items-center hover:text-primary" href="/authors/mark-dinn">
                            <img alt="Mark Dinn" src="https://bookworm-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fposts%2F01.jpg&w=1920&q=75" width="50" height="50" decoding="async" data-nimg="1" className="mr-2 h-6 w-6 rounded-full" loading="lazy"/>
                            <span>Mark Dinn</span>
                        </a>
                    </li>
                    <li>
                        04 Apr 2022
                    </li>
                    <li>
                        <ul>
                            <li className="inline-block">
                                <a className="mr-3 hover:text-primary" href="/categories/art">▣
                                    Art
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3 className="mb-2">
                    <a className="block hover:text-primary" href="/post-1">How to make toys from old Olarpaper</a>
                </h3>
                <p className="text-text"> Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan
                    ...
                </p>
            </div>
        </div>
    );
};

export default MainBlog;
