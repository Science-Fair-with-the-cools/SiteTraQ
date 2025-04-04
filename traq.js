async function fetchLookupData(websiteUrl) {
    const apiUrl = `https://website-intelligence.p.rapidapi.com/lookup?domain=${encodeURIComponent(websiteUrl)}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '447c7eba54mshecf0f2282d975eep178deajsn1134922385a6',
            //'x-rapidapi-key': 'a77d2c800emsh715213cda2a27b4p155967jsn6071b034b404',
            'x-rapidapi-host': 'website-intelligence.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching all website data:", error);
        return null;
    }
}

async function processLink() {
    const websiteUrl = document.getElementById("linkInput").value;
    const spinner = document.getElementById("loadingSpinner");
    const resultDiv = document.getElementById("result");

    if (!websiteUrl) {
        alert("Please enter a website URL.");
        return;
    }

    spinner.style.display = "block";
    resultDiv.textContent = "";

    try {
    const allWebsiteData = await fetchLookupData(websiteUrl); // Change function call
    // ...
    if (allWebsiteData && allWebsiteData.data && allWebsiteData.data.info && allWebsiteData.data.info.semrush_summary && allWebsiteData.data.info.semrush_summary.semrush_visits_latest_month) {
        const websiteTraffic = allWebsiteData.data.info.semrush_summary.semrush_visits_latest_month; // Change data path
                const carbonEmissions = websiteTraffic * 1.76 / 1000000;
                resultDiv.textContent = `Carbon emissions: ${carbonEmissions.toFixed(2)} tons (per year) from website traffic data`;
            } else {
                resultDiv.textContent = "Website data not available. Please try another website.";
            }
        } catch (error) {
            // Error handling
            console.error("An error occurred:", error);
        } finally {
            // Cleanup code
            console.log("Finally block executed.");
            spinner.style.display = "none";
        }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
