import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import ProfileHeader from "./ProfileHeader";

const Header = () => {

	return (
		<header className="header">
			<Link to="/">
				<img src={Logo} alt="Logo" height="40" width="96" />
			</Link>
			<div>
				<Link to="/sign-in">Sign in</Link>
                {/* <ProfileHeader/> */}
			</div>
		</header>
	);
};

export default Header;
