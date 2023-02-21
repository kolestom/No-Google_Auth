import { Link } from "react-router-dom";
const HomePage = () => {
    return ( 
        <> 
            <h1>Home Page</h1>
            <Link to={'signup'}>Sign up</Link>
            <Link to={'login'}>Login</Link>
        </>
     );
}
 
export default HomePage;