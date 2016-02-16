var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var form_field_ts_1 = require('./form-field.ts');
var UserRegister = (function () {
    function UserRegister() {
    }
    UserRegister.prototype.onSignIn = function () {
        this.Auth.step = 'login';
    };
    UserRegister = __decorate([
        core_1.Component({
            selector: 'user-register',
            templateUrl: 'views/user/register.html',
            styleUrls: ['./styles/user-auth.scss'],
            inputs: ['Auth', 'User'],
            directives: [form_field_ts_1.uiFormField]
        })
    ], UserRegister);
    return UserRegister;
})();
exports.UserRegister = UserRegister;
//# sourceMappingURL=user-register.js.map