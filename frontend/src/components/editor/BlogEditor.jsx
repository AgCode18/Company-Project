import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";
import Toolbar from "./Toolbar";

export default function BlogEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit, Image],

    content: value,

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value]);

  if (!editor) return null;

  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <Toolbar editor={editor} />

      <EditorContent
        editor={editor}
        className="min-h-[400px] p-5 prose max-w-none"
      />
    </div>
  );
}
