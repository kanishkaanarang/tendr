// src/App.jsx
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import router from "./router";
import store from "./store";
import ErrorBoundary from "./components/ErrorBoundary";
import FloatingChatButton from "./components/FloatingChatButton";
<<<<<<< HEAD
import BasicSpeedDial from "./components/BasicSpeedDial";
import Navbar from "./components/Navbar";
=======
>>>>>>> 69de05720caf49da6f52e1560a11abfc355519e4


function App() {
  return (
    <ErrorBoundary>
<<<<<<< HEAD
      <Provider store={store}>
        
        <RouterProvider router={router} />
        <FloatingChatButton />
        

      </Provider>
=======
        <RouterProvider router={router} />
        <FloatingChatButton />
>>>>>>> 69de05720caf49da6f52e1560a11abfc355519e4
    </ErrorBoundary>
  );
}
export default App;
