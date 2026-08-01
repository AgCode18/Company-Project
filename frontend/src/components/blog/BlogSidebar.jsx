import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import RecentPosts from "./RecentPosts";

export default function BlogSidebar({
  search,
  setSearch,

  categories,
  selectedCategory,
  setSelectedCategory,

  recentPosts,
}) {
  return (
    <aside className="space-y-6">

      {/* Search */}

      <div className="rounded-2xl bg-white p-6 shadow">

        <h3 className="mb-4 text-xl font-bold">
          Search
        </h3>

        <SearchBar
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
          placeholder="Search Blog..."
        />

      </div>

      {/* Categories */}

      <div className="rounded-2xl bg-white p-6 shadow">

        <h3 className="mb-4 text-xl font-bold">
          Categories
        </h3>

        <CategoryFilter
          categories={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />

      </div>

      {/* Recent */}

      <RecentPosts
        posts={recentPosts}
      />

    </aside>
  );
}