// import axios from "axios";

var client_id = process.env.REACT_APP_SPOTIFY_ID_CLIENT;
var redirect_uri = 'http://localhost:3000';
var scope = 'playlist-modify-private';
var url = 'https://accounts.spotify.com/authorize';
url += '?client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&response_type=token';
url += '&show_dialog=' + encodeURIComponent(true);

export const endpoint = url;