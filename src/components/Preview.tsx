import Markdown from "react-markdown";
import { useMarkdown } from "../store/MarkdownProvider";
import "./Preview.css";

const Preview = () => {
    const { content } = useMarkdown();
    return (
        <div>
            <Markdown>{content}</Markdown>
        </div>
    );
}

export default Preview;