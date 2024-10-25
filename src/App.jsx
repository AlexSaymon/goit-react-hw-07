import { Provider } from "react-redux";
import { store } from "./redux/store";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1>Contact Book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  </Provider>
);

export default App;
