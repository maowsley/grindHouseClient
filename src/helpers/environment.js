
let APIURL = " ";

switch(window.location.localhost) {
    case 'localhost' || '127.0.0.1':

    APIURL = "http://localhost:3000";
    break;

    case 'mao-grindhouse-client.herokuapp.com':
        APIURL = " https://mao-grindhouse-client.herokuapp.com"
}

export default APIURL;