
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        searchInput.value = query; 
        displaySearchResults(query); 
    }


    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });

    
    function displaySearchResults(query) {
        searchResults.innerHTML = `<p>You searched for: <strong>${query}</strong></p>`;
        

        searchResults.innerHTML += `
            <div>
                <h3>Result 1</h3>
                <p>This is a result based on the query: ${query}</p>
            </div>
            <div>
                <h3>Result 2</h3>
                <p>This is another result for the query: ${query}</p>
            </div>
        `;
    }
});