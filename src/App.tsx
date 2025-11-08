import Settings from "./components/Settings";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import './App.css'

function App() {
  return (
    <div>
      <div>
        <Settings />
      </div>
      <div>
        <Editor />
        <Preview />
      </div>
    </div>
  )
}

export default App
