import { ThemeProvider } from "./components/Theme";
import Layout from "./components/Layout";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <main className="grid min-h-screen">
      <div className="grid w-2xl gap-5 place-self-center">
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Layout />
          <Form />
          <Filters />
          <TodoList />
          <Toaster />
        </ThemeProvider>
      </div>
    </main>
  );
};
export default App;
