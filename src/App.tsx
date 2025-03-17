import { ThemeProvider } from "./components/Theme";
import Layout from "./components/Layout";
import Form from "./components/Form";

const App = () => {
  return (
    <main className="grid max-w-xl gap-5 place-self-center">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout />
        <Form />
      </ThemeProvider>
    </main>
  );
};
export default App;
