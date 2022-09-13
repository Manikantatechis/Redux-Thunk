

export default function SignupForm() {

	return (
		<form action="#">
			<label htmlFor="name">Name</label>
			<input
				id="name"
				name="name"
				type="text"

				placeholder="Type your name"
			/>
			<label htmlFor="email">Email address</label>
			<input
				id="email"
				name="email"
				type="email"

				placeholder="Type your email"
			/>

			<label htmlFor="password">Password</label>
			<div className="input-group">
				<input
					name="password"
					type="password"

					placeholder="Type password"
				/>
				<input
					name="password_confirmation"
					type="password"

					placeholder="Re-type password"
				/>
			</div>

			<button className="mt-2 custom-btn" type="button" >
			Register
			</button>
		</form>
	);
}
