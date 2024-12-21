import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "@fontsource/inter"
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Nav />
          <div class="container max-w-[720px]">
            <Suspense>{props.children}</Suspense>
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
