var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var user_register_ts_1 = require('./user-register.ts');
var UserLogin = (function () {
    function UserLogin() {
        this.User = {};
        this.Auth = { step: 'login' };
    }
    UserLogin.prototype.onSignUp = function () {
        this.Auth.step = 'auth';
    };
    UserLogin = __decorate([
        core_1.Component({
            selector: 'user-login',
            templateUrl: 'views/user/login.html',
            styleUrls: ['./styles/user-auth.scss'],
            directives: [user_register_ts_1.UserRegister]
        })
    ], UserLogin);
    return UserLogin;
})();
exports.UserLogin = UserLogin;
//# sourceMappingURL=user-login.js.map