const ll = '56.488,84.98';
const clientId = 'TUJ2XFDBJ1A514DNTUSTFPFCWKFMJGGBJVEELJLWEC3M2NXN';
const clientSecret = 'FGZQ5WAJZ1FNMQHROFE10Z5EIHSUDGZPDVLP1OCOGQIITE03';

// "https://api.foursquare.com/v2/venues/search?ll=40.762026,-73.984096&query=museum&radius=2500&categoryId=4bf58dd8d48988d181941735&client_id=CFSMRM4YK0LMFIZIOO1ETN50A1TXPJENSO3EUOIEBXK3E5ER&client_secret=YJQZ5FTKIA5UHUDU2BNACLRW14WZBDQLOO0KIWNSBUC2QN4V&v=20201215&limit=50"

const request = () =>
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${ll}&query=&radius=2500&categoryID=4d4b7104d754a06370d81259&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180413`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => data)
    .catch((err) => console.log('Error while getting places', err))

export default request;