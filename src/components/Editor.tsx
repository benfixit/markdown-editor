import { useEffect, useState } from "react";
import { useMarkdown } from "../store/MarkdownProvider";
import { getWordCount, getCharCount } from "../utils/string";
import "./Editor.css";

const Editor = () => {
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const { content, setContent } = useMarkdown();
    // @ts-ignore
    const handleChange = (event) => {
        // debounce this
        setContent(event.target.value);
    }

    useEffect(() => {
        setWordCount(getWordCount(content));
        setCharCount(getCharCount(content));
    }, [content]);

    /**Download|Reload|Clear|Fork*/

    return (
        <section className="editor">
            <div className="editor_title">
                <h3>Editor</h3>
                <ul>
                    <li>{wordCount} words</li>
                    <li>{charCount} characters</li>
                </ul>
            </div>
            <textarea onChange={handleChange} />
            
        </section>
    );
}

export default Editor;