import { Main } from '@/layouts/Main';
import { Post, QueryResult } from '@/props/PostProps';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { SecondaryContent } from '@/components/SecondaryContent';
import { getPosts } from '@/services/queries/posts/GetPosts';

const Index = () => {
    const { 
        loading:loadingFeaturedPost, 
        error:errorFeaturedPost, 
        data:posts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:QueryResult
    } = useQuery(getPosts);
    
    return (
        <Main>
            {posts
                ? 
                <SecondaryContent posts={posts}/>
                :
                <></>
            }
        </Main>
    );
};

export default Index;
