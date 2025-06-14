import "./post.css";

let post = ({title,content,children})=> {
    return (
        <div className="post">

            {children && (
        <div style={{ marginBottom: "20px" }}>
          {children}
        </div> )}
           
            <h2 className="post-title">{title}</h2>
            <hr/>
            <p className="post-content">{content}</p>
        </div>
    );
}


export default post;