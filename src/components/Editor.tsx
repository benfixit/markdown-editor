import { useMarkdown } from "../store/MarkdownProvider";
import "./Editor.css";

const Editor = () => {
    const { setContent } = useMarkdown();
    // @ts-ignore
    const handleChange = (event) => {

        // debounce this
        setContent(event.target.value);
    }

    /**Download|Reload|Clear|Fork*/

    return (
        <section className="editor">
            <div className="editor_title">
                <h3>Editor</h3>
                <ul>
                    <li>100 Words</li>
                    <li>500 Characters</li>
                </ul>
            </div>
            <textarea onChange={handleChange} />
            
        </section>
    );
}

export default Editor;