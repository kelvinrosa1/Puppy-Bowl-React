// Searchbar.js


// eslint-disable-next-line react/prop-types
function Searchbar({ onChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for a player..."
        onChange={onChange}
      />
    </div>
  );
}

export default Searchbar;
