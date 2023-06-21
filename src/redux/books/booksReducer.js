import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';
//  entities отримує  стан на початку пустий масив
const entities = createReducer([], {
  // якщо прийшов Succes то кладемо payload в масив який порожній
  // [booksActions.fetchBooksSuccess]: (_, action) => action.payload,
  // іде запрос fulfilled
  [fetchBooks.fulfilled]: (_, action) => action.payload,
});

// якщо ми зробимо запрос
// fetchBooks.fulfilled(5)
// то отримаємо 
// {
//    type; 'books/fetchBooks/fulfilled',
//    payload: 5,
// }

const isLoading = createReducer(false, {
  // якщо іде загрузка то ставимо true
  [fetchBooks.pending]: () => true,
  // далі загрузка закінчилася
  [fetchBooks.fulfilled]: () => false,
  // при error теж
  [fetchBooks.rejected]: () => false,
});

const error = createReducer(null, {
  // тут помилка по запросу
  [fetchBooks.rejected]: (_, action) => action.payload,
  // тут скидаємо помилку в null
  [fetchBooks.pending]: () => null,
});

//за допомогою combineReducers тут передаємо усі редюсери
export default combineReducers({
  entities,
  isLoading,
  error,
});

// 🔥 ИСПОЛЬЗУЕТ IMMER ДЛЯ МУТАЦИИ КОПИИ СОСТОЯНИЯ
// const booksSlice = createSlice({
//   name: 'books',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchBooks.fulfilled]: (state, { payload }) => (state.entities = payload),
//     [fetchBooks.pending]: state => (state.isLoading = true),
//   },
// });
//  що там під капотом
// console.log(booksSlice);

// export default booksSlice.reducer;


//  createSlice 
// =================================================
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0
// } 

// const counterSlice = createSlice({
//   // імя редюсера 
//   name: 'counter',
//   // початковий стан
//   initialState,
//   // тут підредюсери
//   reducers: {
//     increment(state) {
//       state.value++
//     },
//     decrement(state) {
//       state.value--
//     },
//     incrementByAmount(state, action) {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer


// редюсер це на зараз лічильник з трьома властивостями

// {
//   counter: {
//     increment,
//     decrement,
//     incrementByAmount
//   }
// }





//  createSlice 
// =========================================================






// const booksSlice = createSlice({
//   // імя головного стейту
//   name: 'books',
//   // початковий стан
//   initialState: { entities: [], isLoading: false, error: null },
//   // так як в нас асинхронний запрос то ми 
//   // предамо extraReducers: це кастомні редюсери які за нас не 
//   // будуть генерить
//   extraReducers: {
//     [fetchBooks.fulfilled]: (state, action) => {
//       // повертаємо новий обєкт стану де розпилюємо
//       // стейт
//       return {
//         ...state,
//         // якщо додаєм то так
//         // [...state.entities, ...action.payload]
//         //  а так перезапишемо
//         entities: action.payload,
//       };
//     },
//     [fetchBooks.pending]: state => {
//       return {
//         ...state,
//         isLoading: true,
//       }
//     } 
//   },
// })

// для користування ыннером дивить з верху.



