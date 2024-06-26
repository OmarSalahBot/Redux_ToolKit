import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getAllPosts} from '../../Api/PostsApi';

// We are using formatDistanceToNow(Date)
// but you should use parseISO() First 

const Posts = () => {
    const posts = useSelector(state=>state.post.posts);
    const status = useSelector(state => state.post.status);
    const error = useSelector(state => state.post.error);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllPosts());
    },[dispatch]);
    if (error == true) {
        return (
            <div>
                Something Went Wrong 
            </div>
        );
    }
    return(
        <>
         {status == "good" ?  <div>{posts.map((e,i)=> {return <div key={i}>{e.title}</div> })}</div>:null}
        </>
    );
}

export default Posts;
