import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksReducer';

export const store = configureStore({
  reducer: {
    // сюди приходять усі редюсери
    books: booksReducer,
  },
});
// =============================================

// дивись зверху
// для початку стор буде таким 

// export const store = configureStore({
//   reducer: {
//     books: {
//        entitis: [],
//        isLoading: false,
//        error: null,
//     },
//   },
// });

// ================================================


// // ТЕОРІЯ АСИНХРОННОГО ЗАПИТУ В РЕДАКС

// // це синхронний екшин креітер
// const addTodo = text => {
//   return {
//     type: 'addTodo',
//     payload: text
//   }
// }
// // в action синхронно попадає параметр з ретурна 
// // const reduser = (state, action) => state


// const addAsyncTodo = text => {
//   return {
//     type: 'addTodo',
//     // значення тут не дані а проміс
//     payload: fetch('/todos')
//   }
// }


// // тут ми пробуємо розпилити результат феча тобіш проміс який
// // неможна розпилити в тебе све зломається
// const reduser = (state, action) => [...state, ...action.payload]

// // тепер як зробити асинхронно

// // це функція яка повертає іншу функцію
// // яка отримує (dispatch)- це відправка action
// // також сама функці може приймати text
// const addTodoOperation = (text) => {

//   return (dispatch) => {
//     // тут робимо асинхронний запрос
//     const todo = fetch('/todos');
//     // тут повертаємо те що відправили і нам прийшла відповідь
//     dispatch(addTodo(todo));
//   }
// }
// // робимо виклик функції і на місце виклику в дужках
// // повернеться те що в середині return
// dispatch(addTodoOperation('qweqwe'));

// //  action тут під капотом це redux-thunk
// // як працює?
// //   action
// // -- Тип  action це обєкт? тобіш він приймаэ тільки функції 
// // -- да, ігнорує його , пропускає
// // -- ні , це функція , то  action  викликає  action (dispatch)


