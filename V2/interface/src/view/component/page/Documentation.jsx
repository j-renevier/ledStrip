import { useEffect, useState } from "preact/hooks";
import Header from "../organisme/Header";
import { marked } from "marked";

import readmeRaw from "../../../../../../README.md?raw";

import './documentation-md.css'

const Documentation = () => {
  const [content, setContent] = useState("Chargement...");

  useEffect(() => {
    setContent(marked.parse(readmeRaw));
  }, []);

  return (
    <main>
      <Header page="documentation" />
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }}/>
    </main> 
  )

}
export default Documentation