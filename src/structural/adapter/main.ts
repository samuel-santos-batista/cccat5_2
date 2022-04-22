import ExpressHttp from "./ExpressHttp";
import HapiHttp from "./HapiHttp";
import Http from "./Http";

const init = (http: Http) => {
  http.route('get', '/books', () => {
    const books = [
      { title: 'Clean Code' },
      { title: 'Refactoring' },
      { title: 'Implementing Domain-Driven Design' }
    ]
    return books
  })
  http.listen(3002)
}

init(new ExpressHttp())
