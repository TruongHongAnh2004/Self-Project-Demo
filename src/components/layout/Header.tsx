import SearchInput from "../ui/SearchInput";
type Props = {
  onSearch: (text: string) => void;
};
function Header({ onSearch }: Props) {
  
  return (
    <div>
      <div className="bg-pink-300 py-2.5 px-1">
        <SearchInput onSearch={onSearch}/>
      </div>
      
    </div>
  );
}
export default Header;
