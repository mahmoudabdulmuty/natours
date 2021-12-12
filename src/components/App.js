import logo from '../img/logo-white.png';

export default function App() {
	return (
		<>
			<header className="header">
				<div className="header__img-box">
					<img className="header__img" src={logo} alt="logo" />
				</div>
				<div className="header__text-box">
					<h1 className="header__heading">
						<span className="heading__main">outdoors</span>
						<span className="heading__sub">is where life happens</span>
					</h1>
					<a href="/" className="btn btn-white btn-animated">
						discover our tours
					</a>
				</div>
			</header>
		</>
	);
}
