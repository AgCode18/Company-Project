import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-6">
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-3.5 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="cursor-pointer" />

        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="font-semibold">Super Admin</p>
            <p className="text-sm text-gray-500">
              admin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}