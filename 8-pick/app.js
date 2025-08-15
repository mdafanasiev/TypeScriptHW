var user = {
    name: "Vasiliy",
    age: 8,
    skills: ["typescript", "javascript"],
};
function pickObjectKeys(obj, props) {
    var newProps = [];
    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
        var p = props_1[_i];
        newProps.push([p, obj[p]]);
    }
    return Object.fromEntries(newProps);
}
var res1 = pickObjectKeys(user, ["age", "skills"]);
console.log(res1);
