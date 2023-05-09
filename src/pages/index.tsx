import { Main } from '@/layouts/Main';
import { SecondDesign } from '@/components/partials/BlogPost';
import post from '@/config/post.json'
import favorites from '@/config/favorites.json'
import { MainContent } from '@/components/partials/MainContent';
import { SecondaryContent } from '@/components/partials/SecondaryContent';

const Index = () => {
    
    return (
        <Main>
            <MainContent bgColor='bg-gray-200'/>
            <SecondaryContent title='Latest'>
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
            <SecondaryContent title='Favorites'>
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
