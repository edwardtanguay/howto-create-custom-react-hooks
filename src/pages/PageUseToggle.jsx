import { useToggle } from '../hooks/useToggle';

export const PageUseToggle = () => {
	const [userIsOnline, toggleUserIsOnline] = useToggle(false);

	return (
		<div className="page_useToggle">
			<h2>useToggle</h2>

			{userIsOnline ? (
				<p>User is currently online.</p>
			) : (
				<p>User is logged out.</p>
			)}

			<button onClick={() => toggleUserIsOnline()}>Toggle online status</button>
			<button onClick={() => toggleUserIsOnline(true)}>logon</button>
			<button onClick={() => toggleUserIsOnline(false)}>logoff</button>
		</div>
	);
};
