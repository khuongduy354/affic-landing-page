import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes, AppShell } from "./App";

export function render(url: string) {
  return renderToString(
    <AppShell
      router={
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      }
    />
  );
}
