"use strict";
const axios = require("axios").default;
const url = "https://dummyjson.com/users";
async function getUsers(url) {
    try {
        const response = await axios.get(url);
        for (const user of response.data.users) {
            console.log(user);
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "female";
    Gender["MALE"] = "male";
})(Gender || (Gender = {}));
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["USER"] = "user";
    Roles["MODERATOR"] = "moderator";
})(Roles || (Roles = {}));
getUsers(url);
