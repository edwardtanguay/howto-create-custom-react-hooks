import { useToggle } from '../hooks/useToggle';

export const PageUseToggle = () => {
	const [userIsOnline, toggleUserIsOnline] = useToggle(false);
	const [layoutIsDark, toggleLayoutIsDark] = useToggle(true);
	const [projectIsFinished, toggleProjectIsFinished] = useToggle(false);

	return (
		<div className="page_useToggle">
			<h2>useToggle</h2>

			{userIsOnline ? (
				<p>User is currently online.</p>
			) : (
				<p>User is logged out.</p>
			)}

			{layoutIsDark ? <p>Layout is dark.</p> : <p>Layout is light.</p>}

			{projectIsFinished ? <p>Project has been completed.</p> : <p>Project is not finished.</p>}

			<button onClick={() => toggleUserIsOnline()}>
				Toggle online status
			</button>
			<button onClick={() => toggleUserIsOnline(true)}>logon</button>
			<button onClick={() => toggleUserIsOnline(false)}>logoff</button>
			<hr/>
			<button onClick={() => toggleLayoutIsDark()}>Toggle layout</button>
			<button onClick={() => toggleLayoutIsDark(true)}>Set layout to dark</button>
			<button onClick={() => toggleLayoutIsDark(false)}>Set layout to light</button>
			<hr/>
			<button onClick={() => toggleProjectIsFinished()}>Toggle project status</button>
			<button onClick={() => toggleProjectIsFinished(true)}>Set project to finished</button>
			<button onClick={() => toggleProjectIsFinished(false)}>Set project to unfinished</button>
		</div>
	);
};
