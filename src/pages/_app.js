import "../styles/global.css";
import "../assets/fontawesome";

import { Provider } from "react-redux";
import store from "../app/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
