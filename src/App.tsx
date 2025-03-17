import { ThemeProvider } from "./components/Theme";
import Layout from "./components/Layout";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <main className="grid min-h-screen">
      <div className="grid w-2xl gap-5 place-self-center">
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Layout />
          <Form />
          <TodoList />
        </ThemeProvider>
      </div>
    </main>
  );
};
export default App;
