import Markdown from "react-markdown";
import { useMarkdown } from "../store/MarkdownProvider";
import "./Preview.css";

const Preview = () => {
    const { content } = useMarkdown();

    return (
        <section className="preview">
            <div className="preview_title">
                <h3>Preview</h3>
                <ul>
                    <li>Theme</li>
                </ul>
            </div>
            <div>
            <Markdown>{content}</Markdown>
        </div>
            
        </section>
    );
}

export default Preview;