import { IntlProvider } from "react-intl";
import { RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import messages from "./i18n/messages";
import LOCALES from "./i18n/locale";
import appRouter from "./routes/appRouter";
import appStore from "./store/appStore";

function App() {
  return (
    <IntlProvider
      messages={messages[LOCALES.ENGLISH]}
      locale={LOCALES.ENGLISH}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Provider store={appStore}>
        <RouterProvider router={appRouter}>
          <Outlet />
        </RouterProvider>
      </Provider>
    </IntlProvider>
  );
}

export default App;
