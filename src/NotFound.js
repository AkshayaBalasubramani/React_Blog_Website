import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This Page Cannot Be Found</p>
            <Link to="/">Back to the home page</Link>
        </div>
    );
}
 
export default NotFound;