import { useEdgeStore } from "@/lib/edgestore";
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { Dispatch, SetStateAction } from "react";

export default function Editor({
  block,
  setBlock,
  setHtml,
}: {
  setBlock: Dispatch<SetStateAction<string | undefined>>;
  setHtml: Dispatch<SetStateAction<string | undefined>>;
  block: string;
}) {
  // const [blocks, setBlocks] = useState<Block[]>([]);
  // console.log("from editor", block);
  // Creates a new editor instance.
  const { edgestore } = useEdgeStore();
  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };
  const editor = useCreateBlockNote({
    initialContent: block
      ? JSON.parse(block)
      : [
          {
            type: "paragraph",
            content: "Welcome to this demo!",
          },
          {
            type: "heading",
            content: "Hi My Name Is Omar!",
          },
          {
            type: "paragraph",
            content: "This is a paragraph block",
          },
          {
            type: "paragraph",
          },
        ],
    uploadFile: handleUpload,
  });

  async function onChangleHalder() {
    // const block = editor.document;
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHtml(html);
    setBlock(JSON.stringify(editor.document));
  }

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} onChange={() => onChangleHalder()} />;
}
