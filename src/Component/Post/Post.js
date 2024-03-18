import React from "react";
import "./Post.css";
import MsgIcon from "../../Asset/msgIcon.svg";
import CommentIcon from '../../Asset/commentIcon.svg';
import Register from '../../Component/AuthWall/Register';


const AuthWall = (props) => {
    return <div className="AuthWallContainer">
        <Register {...props}/>
    </div>
}

const postData = [{
    userName:'Theresa Webb',
    postText:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    postTime: 5,
    count:22,
    mood:'👋',
    userImage:'https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E-i9khNY0bUEjJVZx4fStiseHAC46x-AO3pBMUV-cUravaq6hx-z5c28ijjbe64jMnWfD6C2jw-PQPzXZ-NAntsBKecSaSnYY7cqwipnfHxaRBG7TZbc9XxZIQdEh2EiqnVcwE8KBC8phdwBEM4RoP4UCbIKWcPjrLEdotTdMojrqRLKGiVXBY51GRL89Xk0eD9~7L5uFCoJauFDCGdDDhZSCS5YLrMXxTvaGKpWrPXkBOP0zIYoKolIR~e55R~eixLcsfrj3gBfrrVar9FzTB0pwcOGQjnnMstw0gVb9WotjxXaUlpATBPAzkSoQXY8N4ju-al1tvWbDONLpaIvYg__'
},
{
    userName:'Marvin McKinney',
    postText:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    postTime: 8,
    count:24,
    mood:'😞',
    userImage:'https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mMOJHnCMz3p8u8ydBHhnPOM14SFJjQQM7bPwHSoy0aiqwNaeaCnOuR75DTGPCMq6gnHh5xwx7pIOKL7eee~yETjIjDfsm8A8pBaIO4bPSlkLe1pAyuirli9LDzp9seQzmTbtE8II~J5vLpa-9U2X8A~f6BS6ynhqev17s1MmClarV2ZHAdJiAW3JcLYN~tq9KhXbe2Rolt6t6E5I2w9SXRpHYYKbhioFYfLVUGZXfIv60NlquwoUN4fKD1e~SjQzv56ITuAqgcMugkyjckpoYZGW3WXYOjKgtyqV-VgKHyig-S-8fTtotH2LOD0QGxbuqrL4t0YxOdnw~65ZHkV4bw__'
}]
const renderPostCard = (postDetails) => {
    const {userName, postText, postTime, count, userImage, mood} = postDetails;
    return <div className="postCardContainer">
        <div className="userDetails">
           <div className="userName">
           <img src={userImage} alt="userImg" className="userImage"/>
          <div className="userNameWrapper"> <div className="name">{userName}</div>
           <div className="time">{postTime}mins ago</div></div>
           </div>
            <div className="threeDots">...</div>
        </div>
        <div className="postText">
            <div className="postMoodContainer"><div className="postMood"><span>👋</span></div></div>
            <div className="post">{postText}</div>
            </div>
        <div className="commentsPreviewContainer">
            <img src={CommentIcon} alt="commentIcon" />
            <div className="comentCount">{count} comments</div>
        </div>
    </div>
}



export default function Post() {
    const [showAuthWall, setShowAuthWall] = React.useState(true);
  return (
    <div className="PostContainer">
      {showAuthWall && <AuthWall setShowAuthWall={setShowAuthWall} showAuthWall={showAuthWall}/>}
      <div className="UserName">Hello Jane</div>
      <div className="welcomeText">
        How are you doing today? Would you like to share something with the
        community 🤗
      </div>
      <div className="newPost">
        <div className="newPostHeader">Create post</div>
        <div className="newPostInputContainer">
          <div className="msgIcon"><div><span>💬</span></div></div>
          <input type={"text"} placeholder="How are you feeling today?" />
        </div>
        <div className="postBtn" onClick={()=>setShowAuthWall(!showAuthWall)}> Post</div>
      </div>
      {postData.map(post=>renderPostCard(post))}
    </div>
  );
}
