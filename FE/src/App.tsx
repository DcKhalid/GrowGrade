import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  let persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={Router} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
