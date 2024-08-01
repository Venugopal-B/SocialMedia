import "./Posts.scss";
import Post from '../Post/Post';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: userId ? ['posts', userId] : ['posts'], // Differentiate cache keys based on userId
        queryFn: () => {
            const endpoint = userId ? `/posts?userId=${userId}` : '/posts';
            return makeRequest.get(endpoint).then((res) => res.data);
        },
        enabled: true // Always run the query, regardless of userId presence
    });
    console.log(data);

    return (
        <div className="posts">
            {error ? (
                <div>Something went wrong</div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : (
                data.map((post) => (
                    <Post post={post} key={post.id} />
                ))
            )}
        </div>
    );
};

export default Posts;
