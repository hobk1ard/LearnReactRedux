import store from "../js/store/store";
import { addArticle } from "../js/actions/actions";

window.store = store;
window.addArticle = addArticle;

store.subscribe(() => console.log('Look ma, Redux!!'))
store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) )