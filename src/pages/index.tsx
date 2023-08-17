import { Main } from '@/layouts/Main';
import Header from '@/components/partials/Header';
import GoToTop from '@/components/partials/GoToTop';
import { MainContent } from '@/components/MainContent';
import { SecondaryContent } from '@/components/SecondaryContent';
import { GetPosts } from '@/services/GetPosts';
import { DefaultSeo } from 'next-seo';
import SEO from '../components/DefaultSeo';


const Index = () => {
  
    // const featuredPosts = FeaturedPosts();
    const featuredPosts = GetPosts({
        tag:'featured',
        total:5
    })
    
    const featuredPostIds = featuredPosts.postData?.postsConnection.edges?.map(edge => edge.node.id) || [];
    
    const latestPosts = GetPosts({
        id:featuredPostIds,
        total:6
    })
    
    return (
        <Main>
            <Header/>
            <MainContent posts={featuredPosts.postData}/>
            {/* <hr/>
            {categories.length > 0 &&
                <Splides data={categories}/>
            } */}
            <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
                <hr/>
            </div>
            <SecondaryContent posts={latestPosts.postData} ownerTitle='About Me'/>
            <GoToTop/>
        </Main>
        
    );
};

export default Index;
