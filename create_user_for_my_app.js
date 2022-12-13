const { json } = require("body-parser")
var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-v6dn22odsnvfctjt.us.auth0.com/api/v2/users',
  headers: { 'content-type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkV0S2wwTVQ3VHVOaE9XUzNyRnFHYSJ9.eyJpc3MiOiJodHRwczovL2Rldi12NmRuMjJvZHNudmZjdGp0LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJncFY3cmFXOGg1ekJrVHNUcGtldnN0c25UQzNBRVY1ZEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtdjZkbjIyb2RzbnZmY3RqdC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY3MDE5MTQ5NywiZXhwIjoxNjcwMjc3ODk3LCJhenAiOiJncFY3cmFXOGg1ekJrVHNUcGtldnN0c25UQzNBRVY1ZCIsInNjb3BlIjoidXBkYXRlOnVzZXJzIGNyZWF0ZTp1c2VycyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.nrNnRgMU47d7zkOp7jjFPFOYjDIL8W0MXbfMHokZiDPmZuDDIdAjmr_PL6rtBvc2AtZy05W9x-Nmtxn0qFHd5cTpggdJjXaagpfB4n4t2ZgXttVPllA0nWh5-n19gggoNdQEw_W7zeLRcrpxiWzWX_OsdLcz8UBskUZvr44TZH1f6QgweeSRMcPz0HUwhVdkGsnrhwsNjObj2EfSNbX8SnOL88v0m31QVyQjYVCGxQ3CecQf6ChaOtMNCKy3g8bp-3x9VtP8jYreUTIeyBeM7XWTjSm2wWtcuHpY273ORn_PzHs49anNZOMiFxY3Tanumh4_jm7WzIPWdgXnAbG5mA" },
  body: JSON.stringify({   
  "email": "dubson2001@gmail.com",
  "user_metadata": {},
  "blocked": false,
  "email_verified": false,
  "app_metadata": {},
  "given_name": "Roberutsu",
  "family_name": "Dubson",
  "name": "Roberutsu Dubson",
  "nickname": "rodubso",
  "picture": "https://static.wikia.nocookie.net/p__/images/d/d4/Onizuka_Eikichi.jpg",
  "user_id": "rodu192838",
  "connection": "Username-Password-Authentication",
  "password": "UU2qsDc4",
  "verify_email": false
     }) };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});