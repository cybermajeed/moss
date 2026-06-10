import Container from "@/shared/components/Container";
import Toolbar from "@/shared/components/Toolbar";

const App = () => {
  return (
    <div className="wrapper flex justify-around flex-col w-full h-dvh bg-moss-900 p-3 gap-3">
      <Toolbar />
      <Container />
    </div>
  );
};

export default App;
