// Import necessary modules
import { SheetType, TableauEventType } from 'https://prod-useast-b.online.tableau.com/javascripts/api/tableau.embedding.3.latest.js';
// import "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"


(async () => {
    // Call the createToken function
    var userid = "tc24.hot.wcag@gmail.com"
    // Client ID
    var iss = "f3720490-9472-454d-aef2-303a24c22909"
    // Secret ID
    var kid = "effdeef5-7c27-44a2-bb62-ddfc75760c9d"
    // Secret Key
    var secret = "8nNt+gxIP7ZGX/TNbX1QnxCx9vz8MumglOoicsWwVZE="
    var scope = "tableau:views:embed"
    var scopes = Array.from(scope).map(({ value }) => value);
    // console.log(scopes)
    var token = createToken(userid, kid, secret, iss, scope);
    // console.log(token)
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
})();
