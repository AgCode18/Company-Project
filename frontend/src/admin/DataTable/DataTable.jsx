// src/admin/components/DataTable/DataTable.jsx

export default function DataTable({
    columns,
    data,
    loading,
    renderActions,
}) {

    if (loading) {
        return (
            <div className="rounded-lg bg-white p-8 text-center shadow">
                Loading...
            </div>
        );
    }

    if (!data.length) {
        return (
            <div className="rounded-lg bg-white p-8 text-center shadow">
                No Data Found
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow">

            <table className="w-full">

                <thead className="bg-gray-100">

                    <tr>

                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="px-6 py-4 text-left font-semibold"
                            >
                                {column.label}
                            </th>
                        ))}

                        <th className="px-6 py-4">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {data.map((row) => (

                        <tr
                            key={row.id}
                            className="border-t hover:bg-gray-50"
                        >

                            {columns.map((column) => (

                                <td
                                    key={column.key}
                                    className="px-6 py-4"
                                >
                                    {column.render
                                        ? column.render(row)
                                        : row[column.key]}
                                </td>

                            ))}

                            <td className="px-6 py-4">

                                {renderActions(row)}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}