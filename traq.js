async function fetchWebsiteTraffic() {
    const websiteUrl = document.querySelector('.website').value;
    const apiUrl = `https://website-intelligence.p.rapidapi.com/lookup?domain=${encodeURIComponent(websiteUrl)}`;

    const options = {
        method: 'GET',
        headers: {
            //'X-RapidAPI-Key': '23731827d5mshdcd8f2130ec4bcbp16342fjsndacfa352740f',
            'X-RapidAPI-Key': '4076d457dbmsh334e063d4c60412p185edejsn2e43cfcbd1ac',
            'X-RapidAPI-Host': 'website-intelligence.p.rapidapi.com'
        }
    };


        // Display the results on the webpage
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            Total visits: ${totalVisits}<br>
            Bounce rate: ${bounceRate}%<br>
            Pages per visit: ${pagesPerVisit}
        `;
    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        console.log(result); // Log the result object to inspect its structure
        // Access the website traffic using the correct property path
        const websiteTraffic = result.data.info.semrush_summary.semrush_visits_latest_month;
        console.log(result); // Log the result object to inspect its structure
        // Access the website traffic using the correct property path
        const websiteTraffic = result.data.info.semrush_summary;
        const totalVisits = websiteTraffic.semrush_visits_latest_month;
        const bounceRate = websiteTraffic.bounce_rate;
        const pagesPerVisit = websiteTraffic.pages_per_visit;
        // Calculate carbon emissions in tons
        const carbonEmissions = websiteTraffic * 1.76 / 1000000; // Convert grams to tons
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Carbon emissions: ${carbonEmissions.toFixed(2)} tons (per year) from website traffic data`;
         const contextDiv = document.getElementById('context');
        contextDiv.textContent = ` The websites Carbon Footprint is amde up of many factors. This takes in to account a specific pages specifications. Below are the results for the website you inputed:  ${websiteTraffic}, ${totalVisits}, ${bounceRate}, ${pagesPerVisit}, together this makes up a websites carbon footprint`;
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
