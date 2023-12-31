import { useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import { useSelector, useDispatch } from 'react-redux';
// тут беремо booksOperations де запускаємо запит на книги fetchBooks()
// booksSelectors запускаємо метод отримання книжок
import { booksOperations, booksSelectors } from 'redux/books';
import PageHeading from 'components/PageHeading/PageHeading';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  // отримуємо книжки
  // const books = useSelector(state => state.books.entities);
  const books = useSelector(booksSelectors.getBooks);
//  коли сторінка відвідується запускається useEffect с запитом на книги
  // fetchBooks() ми його викликаємо іменно функцію інакше не спрацює -пропустить
  useEffect(() => dispatch(booksOperations.fetchBooks()), [dispatch]);

  return (
    <>
      <PageHeading text="Книги" />
       {/* перевіряємо масив  */}
      {books.length > 0 && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${url}/${makeSlug(`${book.title} ${book.id}`)}`,
                  state: {
                    from: {
                      location,
                      label: 'Назад к всем книгами',
                    },
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
