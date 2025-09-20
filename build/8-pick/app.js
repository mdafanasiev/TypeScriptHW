"use strict";
const user = {
    name: "Vasiliy",
    age: 8,
    skills: ["typescript", "javascript"],
};
function pickObjectKeys(obj, props) {
    const newProps = [];
    for (const p of props) {
        newProps.push([p, obj[p]]);
    }
    return Object.fromEntries(newProps);
}
const res1 = pickObjectKeys(user, ["age", "skills"]);
console.log(res1);
