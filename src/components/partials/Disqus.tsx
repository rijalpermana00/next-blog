import {DiscussionEmbed} from "disqus-react"

interface PostProps {
    post: Posts
}

interface Posts {
    id: string;
    url: string;
    title: string;
}

const DisqusComments = ({ post }:PostProps) => {
    const disqusShortname = "sani-blog"
    const disqusConfig = {
        url: post.url,
        identifier: post.id, // Single post id
        title: post.title // Single post title
    }
    return (
        <div className="mt-10">
            <DiscussionEmbed
                shortname={disqusShortname}
                config={
                    {
                        url: 'https://sani-blog.vercel.app/',
                        identifier: '1',
                        title: 'Disqus SSO quick start',
                    }
                }
            />
        </div>
    )
}
export default DisqusComments;