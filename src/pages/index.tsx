import MainBlog from '@/components/partials/Blog';
import { Main } from '../layouts/Main';

const Index = () => {
    return (
        <Main>
            <MainBlog/>
            <div className="grid grid-cols-3 gap-4 pt-10">
                <div className="bg-gray-100 p-4">Column 1</div>
                <div className="bg-gray-200 p-4">Column 2</div>
                <div className="bg-gray-300 p-4">Column 3</div>
            </div>
        </Main>
    );
};

export default Index;
