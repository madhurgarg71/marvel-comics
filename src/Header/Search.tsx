export default function Search(props: {
  value: string;
  onSearch: (val: string) => void;
}) {
  const { value, onSearch } = props;
  return (
    <div className="search">
      <input
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        placeholder="Search for comics..."
      />
    </div>
  );
}
