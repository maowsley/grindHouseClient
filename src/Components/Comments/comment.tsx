import React, {useState, useEffect} from "react";

import CommentsDisplay from "./commentsDisplay";

type Co = {
    comment_id: number,
    content: string,
    commenter_username: string,
    created_at: Date

}


function Comments(props:any) {
    return(
       <div className="mainDiv" >
           <div className="comments">
                <CommentsDisplay />
           </div>
       </div>
    )
}

export default Comments;