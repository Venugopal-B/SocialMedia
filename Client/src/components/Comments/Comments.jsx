import React, { useContext, useState } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/Authcontext";
import { useQuery,useMutation, useQueryClient} from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";


const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc,setDesc]=useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => {
        return res.data;
      }),
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost) => makeRequest.post("/comments", newPost),
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    
    
    mutation.mutate({ descp:desc,postId });
    setDesc("");
    
  };
   
  return (
    <div className="comments">
      <div className="write">
        <img src={"/upload/"+currentUser.profilepic} alt="" />
        <input type="text" placeholder="Write a Comment" value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? "loading"
        : data.map((comment) => (
         
            <div key={comment.id} className="comment">
              <img src={"/upload/"+comment.profilepic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.descp}</p>
              </div>
              <span className="date">{moment(comment.createdat).fromNow()}</span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
