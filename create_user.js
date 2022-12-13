const { json } = require("body-parser")
var request = require("request");

var options = { method: 'POST',
  url: 'https://kpi.eu.auth0.com/api/v2/users',
  headers: { 'content-type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVCZTlBZFhrMERaUjhmR1dZYjdkViJ9.eyJpc3MiOiJodHRwczovL2twaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiSkl2Q081YzJJQkhsQWUycGF0bjZsNnE1SDM1cXh0aTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8va3BpLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjcwMTg3MTY0LCJleHAiOjE2NzAyNzM1NjQsImF6cCI6IkpJdkNPNWMySUJIbEFlMnBhdG42bDZxNUgzNXF4dGkwIiwic2NvcGUiOiJyZWFkOnVzZXJzIGNyZWF0ZTp1c2VycyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.PpMxSrDMZ0wtMN5L_zHyqmQ08rvwivR4GobJ31DE7bwLQZW4U1aMce2csFSby0u_5XkLRpBV-_NueYW8ojwjmrAvVPvBaJovSQEq_SyksE5RZYvSDysfL6U2FMRWY0sN_MCZqePtTP1WPxZ-rAEUiwqq2n3BceTttvGtPLYIwEI4ZI-1pl-KRrCqzsG8ULXfMv0_94QLz4LBM9pW-bBiuPFsucaL4lD4Q2eW7N4slLaCjvP7BSeWtyOA4VE1bD_rB55fmvGKA2ONmn8MmRuJwB2dPSnZsc8uxH6b2iBI7RMnd2yAmowLxuEZFg4GphcUwqCUexh-QyfjK0ztUc7pqQ" },
  body: JSON.stringify({   
  "email": "robert.dubson@gmail.com",
  "user_metadata": {},
  "blocked": false,
  "email_verified": false,
  "app_metadata": {},
  "given_name": "Robert",
  "family_name": "Dubson",
  "name": "Robert Dubson",
  "nickname": "rodubs",
  "picture": "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%86%D1%83%D1%80%D0%B0%D2%91%D1%96_%D0%9C%D1%96%D1%81%D0%B0%D1%82%D0%BE#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Katsuragi-misato.jpg",
  "user_id": "robo257484994",
  "connection": "Username-Password-Authentication",
  "password": "KAgT3Hhj",
  "verify_email": false
     }) };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});