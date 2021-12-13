import logo from '../img/logo-white.png';

export default function App() {
	return (
		<>
			<header className="header">
				<div className="header__img-box">
					<img className="header__img" src={logo} alt="logo" />
				</div>
				<div className="header__text-box">
					<h1 className="heading-primary">
						<span className="heading-primary--main">outdoors</span>
						<span className="heading-primary--sub">is where life happens</span>
					</h1>
					<a href="/" className="btn btn--white btn--animated">
						discover our tours
					</a>
				</div>
			</header>
		</>
	);
}
