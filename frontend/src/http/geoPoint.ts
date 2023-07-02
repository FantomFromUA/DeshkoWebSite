export const getLatAndLong =async (place:string) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiZmFudG9tNzc3IiwiYSI6ImNsajFkajFtNDB4Nmcza3Q4eHpoeXU5emcifQ.HvNVe90-zeRKfrUwj56Cpg`;

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Something went wrong!")
    }
    const responseJSON = await response.json();
    return responseJSON.features[0].center;
    
}

export const  getDistance = async (lat_1 : string, long_1 : string, lat_2 : string, long_2 : string) => {
    const url = `https://distance-calculator.p.rapidapi.com/distance/simple?lat_1=${lat_1}&long_1=${long_1}&lat_2=${lat_2}&long_2=${long_2}&decimal_places=2&unit=kilometers`;
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '17076dbde2msh5be6326959ae0adp1a2e1ejsn0c7accdb304e',
            'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
        }
    }

    const response = await fetch(url, requestOptions);
    if(!response.ok){
        throw new Error("Something went wrong!")
    }
    const responseJSON = await response.json();
    return responseJSON.distance;
    
    
}