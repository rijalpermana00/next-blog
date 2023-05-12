import { Main } from '@/layouts/Main';
import { SecondDesign } from '@/components/partials/BlogPost';
import post from '@/config/post.json'
import favorites from '@/config/favorites.json'
import { MainContent } from '@/components/partials/MainContent';
import { SecondaryContent } from '@/components/partials/SecondaryContent';
import Header, { AlternativeHeader, AlternativeHeader2 } from '@/components/partials/Header';
import { DefaultTabs } from '@/components/partials/Tabs';

const Index = () => {
    
    return (
        <Main>
            {/* <AlternativeHeader2 bgColor='bg-gray-800'/> */}
            <Header/>
            <MainContent maxWidth='max-w-5xl' bgColor='bg-white'/>
            <DefaultTabs/>
            <SecondaryContent title='Latest' maxWidth='max-w-5xl'>
                {post.posts.slice(1).map((post, index) => (
                    <SecondDesign
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
            <SecondaryContent title='Favorites' maxWidth='max-w-5xl'>
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
            </SecondaryContent>
        </Main>
    );
};

export default Index;
