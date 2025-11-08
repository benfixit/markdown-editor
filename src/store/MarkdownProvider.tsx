import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type MarkdownContextType = {
    content: string
    setContent: Dispatch<SetStateAction<string>>
}

const MarkdownContext = createContext<MarkdownContextType>({ content: "", setContent: () => null });

export const MarkdownProvider = ({ children }: { children: ReactNode }) => {
    const [content, setContent] = useState("");
    return (
        <MarkdownContext.Provider value={{ content, setContent }}>
            {children}
        </MarkdownContext.Provider>
    );
}

export const useMarkdown = () => {
    return useContext(MarkdownContext);
}