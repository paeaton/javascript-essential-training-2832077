/* 
Basic Functionality for website
Present on each main HTML page
*/

document.addEventListener("DOMContentLoaded", function () {
  // Define the navigation bar HTML
  const navbarHTML = `
        <div class="navbar">
            <a href="index.html">Multi-Layer Query</a>
            <a href="single_layer_query.html">Single-Layer Query</a>
            <a href="data_viewer.html">Data Viewer</a>
            <a href="import_data.html">Import Data</a>
            <a href="pysrim.html">PySRIM</a>
        </div>
    `;

  // Insert the navigation bar HTML into the document body
  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  // Add event listeners to the navigation links
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      loadPage(href);
    });
  });

  // Function to load page content
  function loadPage(url) {
    // Reload the entire page with the new URL
    window.location.href = url;
  }
});
