const SearchBar = ( placeholder, data) => (
    <div>
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden mx-2">Search blog posts</span>
        </label>
        <input type="text" />
        <button type="submit">Search</button>
    </form>
    </div>
);

export default SearchBar;
