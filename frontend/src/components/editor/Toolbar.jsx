import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Undo2,
  Redo2,
} from "lucide-react";

export default function Toolbar({ editor }) {
  if (!editor) return null;

  const buttonClass = (active) =>
    `p-2 rounded-lg border transition ${
      active
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-100"
    }`;

  return (
    <div className="flex flex-wrap gap-2 border-b p-3 bg-gray-50">

      <button
        type="button"
        className={buttonClass(
          editor.isActive("bold")
        )}
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
      >
        <Bold size={18} />
      </button>

      <button
        type="button"
        className={buttonClass(
          editor.isActive("italic")
        )}
        onClick={() =>
          editor.chain().focus().toggleItalic().run()
        }
      >
        <Italic size={18} />
      </button>

      <button
        type="button"
        className={buttonClass(
          editor.isActive("heading", { level: 1 })
        )}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 1 })
            .run()
        }
      >
        <Heading1 size={18} />
      </button>

      <button
        type="button"
        className={buttonClass(
          editor.isActive("bulletList")
        )}
        onClick={() =>
          editor.chain().focus().toggleBulletList().run()
        }
      >
        <List size={18} />
      </button>

      <button
        type="button"
        className={buttonClass(
          editor.isActive("orderedList")
        )}
        onClick={() =>
          editor.chain().focus().toggleOrderedList().run()
        }
      >
        <ListOrdered size={18} />
      </button>

      <button
        type="button"
        className="p-2 rounded-lg border hover:bg-gray-100"
        onClick={() =>
          editor.chain().focus().undo().run()
        }
      >
        <Undo2 size={18} />
      </button>

      <button
        type="button"
        className="p-2 rounded-lg border hover:bg-gray-100"
        onClick={() =>
          editor.chain().focus().redo().run()
        }
      >
        <Redo2 size={18} />
      </button>

    </div>
  );
}