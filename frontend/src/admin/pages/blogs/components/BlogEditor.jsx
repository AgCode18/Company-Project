import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function BlogEditor({
    value,
    onChange,
}) {
    return (
        <div>
            <label className="mb-2 block font-medium">
                Content
            </label>

            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                style={{ height: 300 }}
            />
        </div>
    );
}