// Import necessary modules
import { SheetType, TableauEventType } from 'https://prod-useast-b.online.tableau.com/javascripts/api/tableau.embedding.3.latest.js';

// Function to create token
function createToken(userName, kid, secret, iss, scp) {
    var header = {
        "alg": "HS256",
        "typ": "JWT",
        "iss": iss, //CONNECTED APP ID
        "kid": kid, //CONNECTED APP SECRET ID
    };
    var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    var encodedHeader = base64url(stringifiedHeader);
    var claimSet = {
        "sub": userName, // THE USER NAME, like aalteirac@tableau.com 
        "aud": "tableau",
        "nbf": Math.round(new Date().getTime() / 1000) - 100,
        "jti": new Date().getTime().toString(),
        "iss": iss,
        "scp": scp.split(","),
        "exp": Math.round(new Date().getTime() / 1000) + 100
    };
    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(claimSet));
    var encodedData = base64url(stringifiedData);
    var token = encodedHeader + "." + encodedData;
    var signature = CryptoJS.HmacSHA256(token, secret); //CONNECTED APP SECRET
    signature = base64url(signature);
    var signedToken = token + "." + signature;
    return signedToken;
}

// Function to convert to Base64URL
function base64url(source) {
    encodedSource = CryptoJS.enc.Base64.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
}

// Call the createToken function
var userid = "tc24.hot.wcag@gmail.com"
// Client ID
var iss = "f3720490-9472-454d-aef2-303a24c22909"
// Secret ID
var kid = "effdeef5-7c27-44a2-bb62-ddfc75760c9d"
// Secret Key
var secret = "8nNt+gxIP7ZGX/TNbX1QnxCx9vz8MumglOoicsWwVZE="
var scope = "['tableau:views:embed']"
var scopes = Array.from(scope).map(({ value }) => value);
// console.log(scopes)
var token = createToken(userid, kid, secret, iss, scope);

// Initialize Tableau visualization
const viz = document.querySelector('tableau-viz');
viz.token = token;

// Wait for the viz to become interactive
viz.addEventListener(TableauEventType.FirstInteractive, () => {
    console.log('Viz is interactive!');
});

viz.addEventListener(TableauEventType.VizLoadError, (error) => {
    const message = JSON.parse(error.detail.message);
    const errorMessage = JSON.parse(message.errorMessage);

    const displayMessage = `ca-error-${errorMessage.result.errors[0].code}`;
    console.error(displayMessage);
});
