export default function SeoFields({
    register,
}) {
    return (
        <div className="space-y-4 rounded-lg border p-5">

            <h3 className="text-lg font-semibold">
                SEO
            </h3>

            <input
                {...register("seoTitle")}
                placeholder="SEO Title"
                className="w-full rounded border p-3"
            />

            <textarea
                {...register(
                    "seoDescription"
                )}
                rows={3}
                placeholder="SEO Description"
                className="w-full rounded border p-3"
            />

            <input
                {...register(
                    "seoKeywords"
                )}
                placeholder="loan,lms,finance"
                className="w-full rounded border p-3"
            />

        </div>
    );
}