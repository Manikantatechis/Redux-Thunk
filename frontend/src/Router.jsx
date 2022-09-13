
import {Routes, Route} from 'react-router-dom'
import Home from "./containers/Landing";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/Signup";
import{BrowserRouter} from 'react-router-dom'
import ProfileHeader from './components/default/ProfileHeader';
import MyProfile from './containers/MyProfile'


const Routers = () => {

    return (
        <>
			<BrowserRouter>
            <Routes>
                <Route  path={"/"} element={<Home />} />
                <Route  path={"/update"} element={ <MyProfile />} />
                <Route  path={"/update"} element={ <MyProfile />} />
                <Route  path={"/sign-in"} element={<SignIn />} />
                <Route  path={"/sign-up"} element={ <SignUp />} />
            </Routes>
			</BrowserRouter>

        </>
    );
};
export default Routers;