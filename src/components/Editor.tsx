import { useMarkdown } from "../store/MarkdownProvider";
import "./Editor.css";

const Editor = () => {
    const { setContent } = useMarkdown();
    // @ts-ignore
    const handleChange = (event) => {

        // debounce this
        setContent(event.target.value);
    }

    /**
     * 
Download|Reload|Clear|Fork
     */

    return (
        <>
            <textarea onChange={handleChange} />
        </>
    );
}

export default Editor;