function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
        if(uiBathrooms[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
        if(uiBHK[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");

    // Validate inputs
    if (!sqft.value || isNaN(sqft.value) || sqft.value < 300) {
        alert("Please enter a valid area (minimum 300 sqft)");
        return;
    }

    if (location.value === "") {
        alert("Please select a location");
        return;
    }

    var url = "https://bangalore-real-estate-price-predictor-12.onrender.com/predict_home_price";

    // Show loading state
    estPrice.innerHTML = `
        <div class="result-placeholder">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Calculating estimate...</p>
        </div>
    `;

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    }, function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = `
            <h2>Estimated Price: ${data.estimated_price.toString()} Lakh</h2>
            <p>Based on your inputs</p>
        `;
        console.log(status);
    }).fail(function() {
        estPrice.innerHTML = `
            <div class="result-placeholder">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error calculating estimate. Please try again.</p>
            </div>
        `;
    });
}

function onPageLoad() {
    console.log("document loaded");
    var url = "https://bangalore-real-estate-price-predictor-12.onrender.com/get_location_names";
    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            $('#uiLocations').append('<option value="" disabled selected>Select a location</option>');
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    }).fail(function() {
        console.log("Error loading locations");
    });
}

window.onload = onPageLoad;