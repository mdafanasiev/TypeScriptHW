"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
let User = (() => {
    let _age_decorators;
    let _age_initializers = [];
    let _age_extraInitializers = [];
    return class User {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _age_decorators = [allowFunc((a) => a > 0)];
            __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        age = __runInitializers(this, _age_initializers, 30);
        constructor() {
            __runInitializers(this, _age_extraInitializers);
        }
    };
})();
const person = new User();
//console.log(person.age); // 30
person.age = 0;
//console.log(person.age); // 30
person.age = 20;
//console.log(person.age); // 20
function allowFunc(func) {
    return (target, context) => {
        let value = 30;
        const getter = () => {
            return value;
        };
        const setter = (object, newValue) => {
            if (func(newValue)) {
                value = newValue;
            }
        };
        context.access.get = getter;
        context.access.set = setter;
    };
}
