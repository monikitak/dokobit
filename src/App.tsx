import Card from "./components/Card";
import { CommentsProvider } from "./hooks/useComments";

function App() {
  return (
    <CommentsProvider>
      <Card />
    </CommentsProvider>
  );
}

export default App;
