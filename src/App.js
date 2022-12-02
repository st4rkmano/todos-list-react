import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
  <HashRouter basename="/todos-list-react">
    <nav>
      <ul>
        <li>
          <NavLink to="/zadania">Zadania</NavLink>
        </li>
        <li>
          <NavLink to="/autor">O autorze</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={"/zadania/:id"}>
          <TaskPage />
        </Route>
        <Route path={"/zadania"}>
          <TasksPage />
        </Route>
        <Route path={"/autor"}>
          <AuthorPage />
        </Route>
        <Route path={"/"}>
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
