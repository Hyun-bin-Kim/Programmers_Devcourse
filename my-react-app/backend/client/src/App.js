import TodoFetchingNode from "./components/TodoFetchingNode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoFetchingAddNode from "./components/TodoFetchingAddNode";

function App() {
  return (
    <div className="App">
      <TodoFetchingAddNode />
    </div>
  );
}

export default App;
