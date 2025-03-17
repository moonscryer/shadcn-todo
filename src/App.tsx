import { ThemeProvider } from "./components/Theme";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout />
      </ThemeProvider>
    </div>
  );
};
export default App;
