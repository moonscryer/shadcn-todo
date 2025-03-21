import { ThemeProvider } from "./components/Theme";
import Layout from "./components/Layout";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { Toaster } from "./components/ui/sonner";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import { Pagination } from "./components/ui/pagination";
import { Dialog } from "@radix-ui/react-dialog";

const App = () => {
  const todos = useSelector((state: RootState) => state.todos); // Get todos from Redux

  return (
    <main className="grid min-h-screen">
      <div className="grid w-2xl gap-5 place-self-center">
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Layout />
          <Form />
          {todos.length > 0 && <Filters />}
          <TodoList />
          <Dialog />
          <Toaster />
          <Pagination />
        </ThemeProvider>
      </div>
    </main>
  );
};
export default App;
