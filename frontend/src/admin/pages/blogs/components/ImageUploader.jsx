import { useState } from "react";

export default function ImageUploader({
    onChange,
}) {
    const [preview, setPreview] =
        useState(null);

    const handleFile = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setPreview(
            URL.createObjectURL(file)
        );

        onChange(file);
    };

    return (
        <div>

            <label className="mb-2 block font-medium">
                Featured Image
            </label>

            <input
                type="file"
                accept="image/*"
                onChange={handleFile}
            />

            {preview && (
                <img
                    src={preview}
                    className="mt-4 h-48 rounded-lg object-cover"
                />
            )}

        </div>
    );
}