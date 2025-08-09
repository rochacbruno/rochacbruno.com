import Fuse from "https://cdnjs.cloudflare.com/ajax/libs/fuse.js/7.0.0/fuse.basic.min.mjs";
(async () => {
    const fuseOptions = {
        threshold: 0.25,
        findAllMatches: true,
        shouldSort: true,
        minMatchCharLength: 3,
        ignoreLocation: true,
        keys: ["title", "description", "tags", "html"]
    };

    try {
        const response = await fetch('./static/search_index.json');
        const data = await response.json();
        const fuse = new Fuse(data, fuseOptions);
        document.getElementById("marmite-search-input").addEventListener("input", (event) => {
            event.preventDefault();

            // Clear previous results
            const rootElement = document.querySelector(".marmite-search-bar-result");
            if (rootElement) {
                rootElement.setAttribute("style", "display: none;");
            }

            const resultsElement = document.querySelector("#marmite-search-bar-result");
            resultsElement.innerHTML = "";

            // Search for results
            const searchPattern = event.target.value;
            if (searchPattern?.length > 2) {
                const results = fuse.search(searchPattern);
                if(results?.length > 0) {
                    // Build the results list, limiting here to 10 items
                    results.slice(0, 10).forEach((result) => {
                        const elementList = document.createElement("li");
                        const resultElement = document.createElement("a");
                        resultElement.href = `${result.item.slug}.html`;
                        resultElement.innerText = result.item.title;
                        elementList.appendChild(resultElement);
                        resultsElement.appendChild(elementList);
                    });
                } else {
                    const elementList = document.createElement("li");
                    const resultElement = document.createElement("span");
                    resultElement.textContent = "No results found";
                    elementList.appendChild(resultElement);
                    resultsElement.appendChild(elementList);
                }
                if (rootElement) {
                    rootElement.setAttribute("style", "display: block;");
                }
            }
        });
    } catch (error) {
        console.error('Error loading search data:', error);
    }
})();

// Fixed search toggle handling
const searchToggle = document.getElementById("search-toggle");
const searchOverlay = document.getElementById("search-overlay");
const searchCloseBtn = document.getElementById("search-close-btn");
const searchCloseX = document.getElementById("search-close-x");
const searchInput = document.getElementById("marmite-search-input");

if (searchToggle && searchOverlay) {
    searchToggle.addEventListener("click", (e) => {
        e.preventDefault();
        searchOverlay.style.display = "flex";
        if (searchInput) searchInput.focus();
    });
}

function closeSearch() {
    if (searchOverlay) searchOverlay.style.display = "none";
    if (searchInput) searchInput.value = "";
    const resultsElement = document.getElementById("marmite-search-bar-result");
    if (resultsElement) resultsElement.innerHTML = "";
    const rootElement = document.querySelector(".marmite-search-bar-result");
    if (rootElement) rootElement.style.display = "none";
}

if (searchCloseBtn) {
    searchCloseBtn.addEventListener("click", closeSearch);
}

if (searchCloseX) {
    searchCloseX.addEventListener("click", closeSearch);
}

// Event listener for keyboard shortcuts
document.addEventListener("keydown", (event) => {
    const searchOverlay = document.getElementById("search-overlay");
    const searchInput = document.getElementById("marmite-search-input");
    const isVisible = searchOverlay && searchOverlay.style.display === "flex";

    // Show on 'Ctrl + K' key
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        if (searchOverlay) {
            searchOverlay.style.display = "flex";
            if (searchInput) searchInput.focus();
        }
    }

    // Hide on 'Escape' key
    if (event.key === 'Escape' && isVisible) {
        searchOverlay.style.display = "none";
        if (searchInput) searchInput.value = "";
        const resultsElement = document.getElementById("marmite-search-bar-result");
        if (resultsElement) resultsElement.innerHTML = "";
        const rootElement = document.querySelector(".marmite-search-bar-result");
        if (rootElement) rootElement.style.display = "none";
    }
});
