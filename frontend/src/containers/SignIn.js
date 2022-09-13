import Header from "../components/default/Header";


export default function SignIn() {
	return (
		<>
			<Header />
			<div className="sign-in">
				<div className="title">Login and manage your balances</div>
				<div className="description">
					Note down your expenditure and income, then check your balances everyday
				</div>
				<form className="form-container">
					<label htmlFor="email">Email Address</label>
					<input
						placeholder="Type your email"
						name="email"
						type="email"
					/>
					<label htmlFor="password">Password</label>
					<input
						placeholder="Type your password"
						name="password"
						type="password"
					/>
					<button type="button" className="custom-btn" >Login</button>
				</form>
			</div>
		</>
	);
}
