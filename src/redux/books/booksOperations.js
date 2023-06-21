import { createAsyncThunk } from '@reduxjs/toolkit';
// методи запроса
import * as bookShelfAPI from 'services/bookshelf-api';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfAPI.fetchBooks();
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// =================================================

// import * booksAction from './booksAction'
// це функція при виклику якої повертається ще одна функція
// яка отримає dispatch і під капотом виконає умови асинхронно

// export const fetchBooks = () => async dispatch => {
  // перед http запитом ми хочемо задіспачити цей реквест
  // тобіш запрос почався і тут fetchBooksRequest() або
  // тру або фолс
//   dispatch(booksActions.fetchBooksRequest());
      // асинхронний try намагається отримати
//   try {
        // асинхронна функція async await
       //  викликаю усі книги
//     const books = await bookShelfAPI.fetchBooks();

       // якщо все добре то по отриманному результату
      //  .викликаємо booksActions.fetchBooksSuccess(books)
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
     // і якщо помилка
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };




// ========================================================= 
// перероблюємо  на createAsyncThunk
// це дозволить обєднати три асинхронні операції

// import { createAsyncThunk } from '@reduxjs/toolkit'

//  спочатку створюємо канал де ми викликаємо функцію createAsyncThunk

// const fetchUserById = createAsyncThunk(
//    передамо строку після чого автоматом згенерується три екшина
// pending - це зразу (для books/fetchBooks), fulfilled rejected

//   'books/fetchBooks',

//  далі функці яка повертає payload
//   першим аргументом минічого не передаємо 
//   async (_,) => {

//      тут при запросі отримуемо книжки
//     const books = await bookShelfAPI.fetchBooks();
//     повертаємо книги fulfilled
//     return books;
//     за замовчуванням про помилку воно саме видасть
//   }
// )

// ====================================================



// далі ставимо трай кеч і обробляємо помилку rejectWithValue

// import { createAsyncThunk } from '@reduxjs/toolkit';
// // методи запроса
// import * as bookShelfAPI from 'services/bookshelf-api';

// export const fetchBooks = createAsyncThunk(
//   'books/fetchBooks',
//    ставимо другим обробник помилок для rejected
//   async (_, { rejectWithValue }) => {
//     try {
//       const books = await bookShelfAPI.fetchBooks();
//       return books;
//     } catch (error) {
//        тобіш тут ми можемо в дужки замість за замовченням 
//        кинути якийсь текст
//       return rejectWithValue(error);
//     }
//   },
// );

