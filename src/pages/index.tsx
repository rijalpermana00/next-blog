import { Main } from '@/layouts/Main';
import Header from '@/components/partials/Header';
import GoToTop from '@/components/partials/GoToTop';
import { MainContent } from '@/components/MainContent';
import { SecondaryContent } from '@/components/SecondaryContent';
import { GetPosts } from '@/services/GetPosts';
import { Meta } from '@/layouts/components/Meta';
import AppConfig from '@/utils/AppConfig';
import { useEffect } from 'react';


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
            <Meta 
                title={AppConfig.title} 
                description={'check this out'} 
                canonical={'/'}
            />
            <MainContent posts={featuredPosts.postData}/>
            <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
                <hr/>
            </div>
            <SecondaryContent posts={latestPosts.postData} ownerTitle='About Me'/>
            <GoToTop/>
        </Main>
        
    );
};

export default Index;
