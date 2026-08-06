function ListeMovies({ movies, onDelete, onSearch}) {
    function handleSearch(e) {
        const term = e.target.value;
        const results = onSearch(term);
        console.log("Search results:", results);
    }

    return (
        <div>
            <h2>Liste Movies</h2>
            <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            />

            <ul>
                {movies.map(m => (
                    <li key={m.id}>
                        {m.title} ({m.releaseYear}) - {m.genre}
                        <button onClick={() => onDelete(m.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListeMovies;