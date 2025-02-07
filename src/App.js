import { Provider } from "react-redux"
import { store } from "./store/store"
import './assets/fonts/styles.css';
import './App.css';
import FormScreen from "./screens/FormScreen"

function App() {
  return (
    <Provider store={store}>
      <FormScreen />
    </Provider>
  )
}


export default App;