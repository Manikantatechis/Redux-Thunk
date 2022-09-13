import defaultProfile from '../../assets/images/add-profile.png'
import { Link } from 'react-router-dom';


export default function ProfileHeader(props) {


	return (
		<>
			<div id="custom-modal" className='custom-modal'>
				<div id="custom-modal-close"  className="custom-modal--bg"></div>
				<div className="custom-modal-header--container">
					<div className="menu-container">
						<div className="custom-modal-header--cancel">
							<span className="pic arrow-down"></span>
						</div>
						<ul className="user-menu">
							<div className="profile-highlight">
								<img src={defaultProfile} alt="profile-img" width={36} height={36} />
								<div className="details">
									<div id="profile-name">TestUser</div>
									<div id="profile-footer">test@mail.com</div>
								</div>
							</div>
							<li className="user-menu__item">
								<Link className="user-menu-link" to="/profile">
									<div>Edit Profile</div>
								</Link>
							</li>
							<li className="user-menu__item">
								<Link className="user-menu-link" to="/profile">
									<div>View Profile</div>
								</Link>
							</li>
							<div className="footer">
								<li className="user-menu__item">
									<Link  className="user-menu-link" to="#">
										Logout
									</Link>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
			<div id="custom-modal" className={`custom-modal `}>
				<div
					id="custom-modal-close"

					className="custom-modal--bg"
				></div>
				<div className="custom-modal-sign-out--container">
					<div className="custom-modal-sign-out--content">
						<div className="modal-sign-out-content">
							<strong>Are you sure you want to sign out?</strong>
							<div>
								<button className="custom-btn mr-1" >
									Yes
								</button>
								<button className="custom-btn ml-1" >
									No
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
