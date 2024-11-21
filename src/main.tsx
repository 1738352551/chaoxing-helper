import ReactDOM from "react-dom/client";
import BaseLayout from "./layouts/BaseLayout";
import { NextUIProvider } from "@nextui-org/system";
import { Provider } from "react-redux";
import stores from "./stores";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={stores}>
    <NextUIProvider>
      <BaseLayout></BaseLayout>
    </NextUIProvider>
  </Provider>
);
