import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query"
import FetchApi from "./Component/FetchApi";

const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="top_heading">React Query</h1>
      <h1 className="section__title ">Imran Baitham Blogs</h1>
      <FetchApi />
    </QueryClientProvider>
  )
};

export default App;
