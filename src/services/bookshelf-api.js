import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';
// тут фечкаэм усіх авторів
export async function fetchAuthors() {
  const { data } = await axios.get(`/authors?_embed=books`);
  return data;
}
// фечаєм усі книги 
export async function fetchBooks() {
  const { data } = await axios.get(`/books`);
  return data;
}
//  фечаєм по айді книгу
export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}?_expand=author`);
  return data;
}
