import uploadImage from "../assets/images/add-profile.png";
import { Page, Section } from "react-page-layout";

export default function MyProfile() {

	return (

				<div className="profile">
					<form className="form-container">
						<input type="file" style={{ display: "none" }} />
						<img
							
							name="image"
							type="file"
							src={uploadImage}
							className={`upload-area`}
							alt="Upload"
						/>
						<div className="upload-text">{'Edit Profile'}</div>
						<label className="profile-input-label" htmlFor="name">
							Name
						</label>
						<input
							type="text"
							name="name"
							className="profile-input"
							placeholder="Type your name"
						/>
						<label className="profile-input-label" htmlFor="name">
							Mail Address
						</label>
						<input
							type="email"
							name="email"
							className="profile-input"
							placeholder="Type your mail address"
						/>
						<button 
						 type="button" className="custom-btn">
							Done
						</button>
					</form>
				</div>

	);
}
