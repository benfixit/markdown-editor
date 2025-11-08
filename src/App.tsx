import Settings from "./components/Settings";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { MarkdownProvider } from "./store/MarkdownProvider";
import './App.css'

function App() {
  return (
    <main>
      <section className="settings">
        <Settings />
      </section>
      <section className="ui">
        <MarkdownProvider>
          <section className="editor">
            <Editor />
          </section>
          <section className="preview">
            <Preview />
          </section>
        </MarkdownProvider>
      </section>
    </main>
  )
}

export default App
