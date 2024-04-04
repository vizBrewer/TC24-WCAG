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

