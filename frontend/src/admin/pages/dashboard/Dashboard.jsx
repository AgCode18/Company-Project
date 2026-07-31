import {
    FileText,
    BriefcaseBusiness,
    Users,
    Eye,
} from "lucide-react";

import StatsCard from "../../components/layout/StatsCard";

export default function Dashboard() {
    return (
        <div>

            <h1 className="mb-8 text-3xl font-bold">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

                <StatsCard
                    title="Blogs"
                    value="0"
                    icon={<FileText />}
                />

                <StatsCard
                    title="Jobs"
                    value="0"
                    icon={<BriefcaseBusiness />}
                />

                <StatsCard
                    title="Applications"
                    value="0"
                    icon={<Users />}
                />

                <StatsCard
                    title="Visitors"
                    value="0"
                    icon={<Eye />}
                />

            </div>

        </div>
    );
}