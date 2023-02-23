// import { useContext } from "react";
import { Link } from "react-router-dom";
// import userContext from "../contexts/UserContext";
const HomePage = () => {
    // const {token} = useContext(userContext)
    // console.log('Home',token);
    return ( 
        <> 
            <h1>Home Page</h1>
            <Link to={'signup'}>Sign up</Link>
            <Link to={'login'}>Login</Link>
            
        </>
     );
}
 
export default HomePage;