import { Main } from '@/layouts/Main';
import { FourthDesign, SecondDesign, ThirdDesign } from '@/components/partials/BlogPost';
import post from '@/config/post.json'
import favorites from '@/config/favorites.json'
import { MainContent } from '@/components/partials/MainContent';
import { MainSecondaryContent, SecondaryContent } from '@/components/partials/SecondaryContent';
import Header from '@/components/partials/Header';
import GoToTop from '@/components/partials/GoToTop';

const Index = () => {
    
    return (
        <Main>
            {/* <AlternativeHeader2 bgColor='bg-gray-800'/> */}
            <Header/>
            <MainContent maxWidth='max-w-7xl' bgColor='bg-white'/>
            {/* <DefaultTabs/> */}
            <SecondaryContent title='Latest' maxWidth='max-w-7xl'>
                {post.posts.slice(1).map((post, index) => (
                    <FourthDesign
                        author={post.author}
                        title={post.title}
                        tags={post.categories}
                        url={post.url}
                        date={post.date}
                        excerpt={post.excerpt}
                        imageAlt={post.featuredImage}
                        imageUrl={post.featuredImage}
                        content={post?.content}
                        key={index}
                    />
                ))}
            </SecondaryContent>
            <MainSecondaryContent title='Favorites' maxWidth='max-w-7xl'>
                {favorites.posts.slice(1).map((post, index) => (
                    <SecondDesign
                        author={post.author}
                        title={post.title}
                        tags={post.categories}
                        url={post.url}
                        date={post.date}
                        excerpt={post.excerpt}
                        imageAlt={post.title}
                        imageUrl={post.featuredImage}
                        content={post?.content}
                        key={index}
                    />
                ))}
            </MainSecondaryContent>
            <GoToTop/>
        </Main>
    );
};

export default Index;
