import { useFetch } from '../hooks/useFetch';

export const PageBooks = () => {
	const [techBooks, totalTechBooks, techBooksAreLoading] = useFetch(
		'https://edwardtanguay.netlify.app/share/techBooks.json',
		true
	);
	const [generalBooks, whatever, generalBooksAreLoading] = useFetch(
		'https://edwardtanguay.netlify.app/share/books.json', true
	);

	return (
		<div className="page_books">
			<h2>Books</h2>
			{techBooksAreLoading ? (
				<h3>Tech books are loading...</h3>
			) : (
				<>
					<h3>There are {totalTechBooks} tech books.</h3>
					<ul>
						{techBooks.map((techBook, index) => {
							return <li key={index}>{techBook.title}</li>;
						})}
					</ul>
				</>
			)}

			{generalBooksAreLoading ? (
				<h3>General books are loading...</h3>
			) : (
				<>
					<h3>There are {generalBooks.length} general books.</h3>
					<ul>
						{generalBooks.map((generalBook, index) => {
							return <li key={index}>{generalBook.title}</li>;
						})}
					</ul>
				</>
			)}
		</div>
	);
};
