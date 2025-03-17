import { ModeToggle } from "./ModeToggle";

const Layout = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <ModeToggle />
    </div>
  );
};
export default Layout;
