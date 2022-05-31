import { useFetch } from '../hooks/useFetch';

export const PageBooks = () => {
	const [techBooks] = useFetch('https://edwardtanguay.netlify.app/share/techBooks.json');

	return (
		<div className="page_books">
			<h2>Books</h2>
			<h3>There are {techBooks.length} tech books.</h3>
			<ul>
				{techBooks.map((techBook, index) => {
					return (
						<li key={index}>{techBook.title}</li>
					)
				})}
			</ul>
		</div>
	)
}