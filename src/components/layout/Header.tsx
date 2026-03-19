import CategoryFilter from "../ui/CategoryFilter";
import SearchInput from "../ui/SearchInput";

function Header() {
  return (
    <div>
      <div className="bg-pink-300 py-2.5 px-1">
        <SearchInput />
      </div>
      <div>
        <CategoryFilter />
      </div>
    </div>
  );
}
export default Header;
