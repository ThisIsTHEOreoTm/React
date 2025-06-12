import "./bottons.css";

let bottons = ({title, children}) => {
    return (
        
        <div className="bottons">
            <button className="btn">
                 {title}
                {children}
            </button>
        
        </div>
    );
}
export default bottons;





