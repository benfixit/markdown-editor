import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { MarkdownProvider } from "./store/MarkdownProvider";
import './App.css'

function App() {
  return (
    <main>
      <section className="ui">
        <MarkdownProvider>
          <Editor />
          <Preview />
        </MarkdownProvider>
      </section>
    </main>
  )
}

export default App
