async function fetchWebsiteTraffic() {
    const websiteUrl = document.querySelector('.website').value;
    const apiUrl = `https://website-intelligence.p.rapidapi.com/lookup?domain=${encodeURIComponent(websiteUrl)}`;

    const options = {
        method: 'GET',
        headers: {
            //'X-RapidAPI-Key': '23731827d5mshdcd8f2130ec4bcbp16342fjsndacfa352740f',
            'X-RapidAPI-Key': '8e6df0708fmshee6a3982cd62b62p147c5djsnf0727b98b2a7',
            //'X-RapidAPI-Key': 'd7df1fc848mshec11718a9da6e84p15cab2jsn657e213bc47d'
            'X-RapidAPI-Host': 'website-intelligence.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        console.log(result); 
        // Log the result object to inspect its structure
        // Access the website traffic using the correct property path
        const websiteTraffic = result.data.info.semrush_summary.semrush_visits_latest_month;
        // Calculate carbon emissions in tons
        const carbonEmissions = websiteTraffic * 1.76 / 1000000; // Convert grams to tons
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Carbon emissions: ${carbonEmissions.toFixed(2)} tons (per year) from website traffic data`;
    } catch (error) {
        console.error(error);
    }
}

// Add event listener to the submit button
document.getElementById("submit").addEventListener("click", fetchWebsiteTraffic);

// Function to scroll back to the top of the page
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function processLink() {
    const input = document.getElementById("linkInput").value;
    const spinner = document.getElementById("loadingSpinner");
    const result = document.getElementById("result");

    if (!input) {
        alert("Please enter a link.");
        return;
    }

    // Show the spinner
    spinner.style.display = "block";
    result.textContent = "";

    // Simulate processing delay
    setTimeout(() => {
        spinner.style.display = "none";
        result.textContent = "Processed result for: " + input;
    }, 10000); 
    // Simulate a 10-second delay
}
