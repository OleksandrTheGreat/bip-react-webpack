(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("jQuery"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "jQuery", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["bip-react-webpack"] = factory(require("React"), require("jQuery"), require("ReactDOM"));
	else
		root["bip-react-webpack"] = factory(root["React"], root["jQuery"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_88__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bus_1 = __webpack_require__(81);
exports.bus = bus_1.bus;
var i18n_1 = __webpack_require__(15);
exports.i18n = i18n_1.i18n;
var state_1 = __webpack_require__(84);
exports.state = state_1.state;
var ioc_1 = __webpack_require__(83);
exports.ioc = ioc_1.ioc;
var pages_1 = __webpack_require__(17);
exports.pages = pages_1.pages;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChangePage = (function () {
    function ChangePage(page, data) {
        if (data === void 0) { data = null; }
        this.page = page;
        this.data = data;
    }
    return ChangePage;
}());
exports.ChangePage = ChangePage;
var GoBack = (function () {
    function GoBack() {
    }
    return GoBack;
}());
exports.GoBack = GoBack;
var ChangeLanguage = (function () {
    function ChangeLanguage(i18n) {
        this.i18n = i18n;
    }
    return ChangeLanguage;
}());
exports.ChangeLanguage = ChangeLanguage;
var Ask = (function () {
    function Ask(question, callback) {
        this.question = question;
        this.callback = callback;
    }
    return Ask;
}());
exports.Ask = Ask;
var ShowError = (function () {
    function ShowError(error) {
        this.error = error;
    }
    return ShowError;
}());
exports.ShowError = ShowError;
var SaveState = (function () {
    function SaveState() {
    }
    return SaveState;
}());
exports.SaveState = SaveState;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FormField = (function (_super) {
    __extends(FormField, _super);
    function FormField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormField.prototype.render = function () {
        var className = this.props.className
            ? 'col ' + this.props.className
            : 'col';
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col" },
                React.createElement("label", null, this.props.title)),
            React.createElement("div", { className: className }, this.props.children)));
    };
    return FormField;
}(React.Component));
exports.FormField = FormField;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryDashboardAccounts = (function () {
    function QueryDashboardAccounts(onSuccess, onError) {
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return QueryDashboardAccounts;
}());
exports.QueryDashboardAccounts = QueryDashboardAccounts;
var QueryAccountList = (function () {
    function QueryAccountList(onSuccess, onError) {
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return QueryAccountList;
}());
exports.QueryAccountList = QueryAccountList;
var SaveAccount = (function () {
    function SaveAccount(account, onSuccess, onError) {
        this.account = account;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return SaveAccount;
}());
exports.SaveAccount = SaveAccount;
var DeleteAccount = (function () {
    function DeleteAccount(id, onSuccess, onError) {
        this.id = id;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return DeleteAccount;
}());
exports.DeleteAccount = DeleteAccount;
var ResoreAccount = (function () {
    function ResoreAccount(id, onSuccess, onError) {
        this.id = id;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return ResoreAccount;
}());
exports.ResoreAccount = ResoreAccount;
var RefreshAccountsListPage = (function () {
    function RefreshAccountsListPage() {
    }
    return RefreshAccountsListPage;
}());
exports.RefreshAccountsListPage = RefreshAccountsListPage;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeleteCurrency = (function () {
    function DeleteCurrency(id, onSuccess, onError) {
        this.id = id;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return DeleteCurrency;
}());
exports.DeleteCurrency = DeleteCurrency;
var SaveCurrency = (function () {
    function SaveCurrency(currency, onSuccess, onError) {
        this.currency = currency;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return SaveCurrency;
}());
exports.SaveCurrency = SaveCurrency;
var QueryCurrencyList = (function () {
    function QueryCurrencyList(onSuccess, onError) {
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return QueryCurrencyList;
}());
exports.QueryCurrencyList = QueryCurrencyList;
var RefreshCurrencyListPage = (function () {
    function RefreshCurrencyListPage() {
    }
    return RefreshCurrencyListPage;
}());
exports.RefreshCurrencyListPage = RefreshCurrencyListPage;
var RestoreCurrency = (function () {
    function RestoreCurrency(id, onSuccess, onError) {
        this.id = id;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
    return RestoreCurrency;
}());
exports.RestoreCurrency = RestoreCurrency;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xtypescript"] = factory();
	else
		root["xtypescript"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GUID = (function () {
    function GUID() {
    }
    GUID.New = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    GUID.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return GUID;
}());
exports.GUID = GUID;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xMath = (function () {
    function xMath() {
    }
    xMath.roundTo = function (value, precision) {
        return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
    };
    return xMath;
}());
exports.xMath = xMath;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Guid_1 = __webpack_require__(0);
exports.GUID = Guid_1.GUID;
var xMath_1 = __webpack_require__(1);
exports.xMath = xMath_1.xMath;


/***/ })
/******/ ]);
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PageChanged = (function () {
    function PageChanged(page, data) {
        if (data === void 0) { data = null; }
        this.page = page;
        this.data = data;
    }
    return PageChanged;
}());
exports.PageChanged = PageChanged;
var LanguageChanged = (function () {
    function LanguageChanged() {
    }
    return LanguageChanged;
}());
exports.LanguageChanged = LanguageChanged;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var shared_2 = __webpack_require__(13);
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { className: 'container-fluid page-header' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col' },
                    React.createElement("h5", null, this.props.children)),
                React.createElement("div", { className: "col-2 col-md-auto" },
                    React.createElement("button", { type: "button", className: "btn btn-primary", title: shared_1.state.i18n.common.back, onClick: shared_2.SharedCommands.goBack },
                        React.createElement("i", { className: "fa fa-reply" }))))));
    };
    return Header;
}(React.Component));
exports.Header = Header;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Entity = (function () {
    function Entity(id, isDeleted, createdDateTime, modifiedDateTime) {
        if (isDeleted === void 0) { isDeleted = false; }
        if (createdDateTime === void 0) { createdDateTime = new Date(); }
        if (modifiedDateTime === void 0) { modifiedDateTime = new Date(); }
        this.id = id;
        this.isDeleted = isDeleted;
        this.createdDateTime = createdDateTime;
        this.modifiedDateTime = modifiedDateTime;
    }
    return Entity;
}());
exports.Entity = Entity;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FormNumberField_1 = __webpack_require__(58);
exports.FormNumberField = FormNumberField_1.FormNumberField;
var FormTextAreaField_1 = __webpack_require__(14);
exports.FormTextAreaField = FormTextAreaField_1.FormTextAreaField;
var FormTextField_1 = __webpack_require__(62);
exports.FormTextField = FormTextField_1.FormTextField;
var FormOptionsField_1 = __webpack_require__(59);
exports.FormOptionsField = FormOptionsField_1.FormOptionsField;
exports.FormOptionValue = FormOptionsField_1.FormOptionValue;
var FormReadOnlyField_1 = __webpack_require__(61);
exports.FormReadOnlyField = FormReadOnlyField_1.FormReadOnlyField;
var Form_1 = __webpack_require__(56);
exports.Form = Form_1.Form;
var FormPage_1 = __webpack_require__(60);
exports.FormPage = FormPage_1.FormPage;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = __webpack_require__(63);
exports.Account = Account_1.Account;
var Currency_1 = __webpack_require__(64);
exports.Currency = Currency_1.Currency;
var Marker_1 = __webpack_require__(65);
exports.Marker = Marker_1.Marker;
var Transaction_1 = __webpack_require__(66);
exports.Transaction = Transaction_1.Transaction;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__(1);
var AccountModel = (function () {
    function AccountModel(id, name, balance, currencyId, currencyName, displayOrder, description, precision, showOnHomePage, isDeleted) {
        if (balance === void 0) { balance = 0; }
        if (currencyId === void 0) { currencyId = null; }
        if (currencyName === void 0) { currencyName = null; }
        if (displayOrder === void 0) { displayOrder = 0; }
        if (description === void 0) { description = null; }
        if (precision === void 0) { precision = 2; }
        if (showOnHomePage === void 0) { showOnHomePage = false; }
        if (isDeleted === void 0) { isDeleted = false; }
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.currencyId = currencyId;
        this.currencyName = currencyName;
        this.displayOrder = displayOrder;
        this.description = description;
        this.precision = precision;
        this.showOnHomePage = showOnHomePage;
        this.isDeleted = isDeleted;
    }
    Object.defineProperty(AccountModel.prototype, "balanceView", {
        get: function () {
            if (this.balance === null || this.balance === undefined)
                return '';
            return this.balance.toLocaleString(shared_1.state.i18n.locale, {
                style: 'decimal',
                minimumFractionDigits: this.precision
            });
        },
        enumerable: true,
        configurable: true
    });
    return AccountModel;
}());
exports.AccountModel = AccountModel;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__(1);
var _1 = __webpack_require__(2);
var SharedCommands = (function () {
    function SharedCommands() {
    }
    SharedCommands.goBack = function () {
        if (shared_1.state.page.isDirty) {
            shared_1.bus.SendAsync(new _1.Ask(shared_1.state.i18n.common.goBackQuestion, function (answer) {
                if (answer)
                    shared_1.bus.SendAsync(new _1.GoBack());
            }));
            return;
        }
        shared_1.bus.SendAsync(new _1.GoBack());
    };
    return SharedCommands;
}());
exports.SharedCommands = SharedCommands;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var FormField_1 = __webpack_require__(3);
var FormTextAreaField = (function (_super) {
    __extends(FormTextAreaField, _super);
    function FormTextAreaField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormTextAreaField.prototype.render = function () {
        var TextArea = this.props.isRequired
            ? React.createElement("div", null,
                React.createElement("textarea", { className: "form-control", value: this.props.value, onChange: this.props.onChange, required: true }),
                React.createElement("div", { className: "invalid-feedback" }, this.props.validationMessage
                    ? this.props.validationMessage
                    : shared_1.state.i18n.common.defaultValidationMessage))
            : React.createElement("textarea", { className: "form-control", value: this.props.value, onChange: this.props.onChange });
        return (React.createElement(FormField_1.FormField, { title: this.props.title, className: this.props.className }, TextArea));
    };
    return FormTextAreaField;
}(React.Component));
exports.FormTextAreaField = FormTextAreaField;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18n_menu_1 = __webpack_require__(73);
var i18n_settings_1 = __webpack_require__(74);
var i18n_currency_list_1 = __webpack_require__(71);
var i18n_accounts_list_1 = __webpack_require__(69);
var i18n_common_1 = __webpack_require__(70);
var i18n_currency_1 = __webpack_require__(72);
var i18n_account_1 = __webpack_require__(68);
var i18n_about_1 = __webpack_require__(67);
var i18nEN = (function () {
    function i18nEN() {
        this.locale = 'en-US';
        this.menu = new i18n_menu_1.i18nMenuEN();
        this.settings = new i18n_settings_1.i18nSettingsEN();
        this.currencyList = new i18n_currency_list_1.i18nCurrencyListEN();
        this.accountsList = new i18n_accounts_list_1.i18nAccountsListEN();
        this.common = new i18n_common_1.i18nCommonEN();
        this.currency = new i18n_currency_1.i18nCurrencyEN();
        this.account = new i18n_account_1.i18nAccountEN();
        this.about = new i18n_about_1.i18nAboutEN();
    }
    return i18nEN;
}());
exports.i18nEN = i18nEN;
var i18nUA = (function () {
    function i18nUA() {
        this.locale = 'uk-UA';
        this.menu = new i18n_menu_1.i18nMenuUA();
        this.settings = new i18n_settings_1.i18nSettingsUA();
        this.currencyList = new i18n_currency_list_1.i18nCurrencyListUA();
        this.accountsList = new i18n_accounts_list_1.i18nAccountsListUA();
        this.common = new i18n_common_1.i18nCommonUA();
        this.currency = new i18n_currency_1.i18nCurrencyUA();
        this.account = new i18n_account_1.i18nAccountUA();
        this.about = new i18n_about_1.i18nAboutUA();
    }
    return i18nUA;
}());
exports.i18nUA = i18nUA;
exports.i18n = {
    EN: new i18nEN(),
    UA: new i18nUA()
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccountModel_1 = __webpack_require__(12);
exports.AccountModel = AccountModel_1.AccountModel;
var CurrencyModel_1 = __webpack_require__(76);
exports.CurrencyModel = CurrencyModel_1.CurrencyModel;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomePage_1 = __webpack_require__(51);
var SettingsPage_1 = __webpack_require__(54);
var CurrencyListPage_1 = __webpack_require__(46);
var CurrencyPage_1 = __webpack_require__(48);
var AccountsListPage_1 = __webpack_require__(43);
var AccountPage_1 = __webpack_require__(40);
var AboutPage_1 = __webpack_require__(38);
exports.pages = {
    HomePage: HomePage_1.HomePage,
    SettingsPage: SettingsPage_1.SettingsPage,
    CurrencyListPage: CurrencyListPage_1.CurrencyListPage,
    CurrencyPage: CurrencyPage_1.CurrencyPage,
    AccountsListPage: AccountsListPage_1.AccountsListPage,
    AccountPage: AccountPage_1.AccountPage,
    AboutPage: AboutPage_1.AboutPage
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(88);
var shared_1 = __webpack_require__(1);
var events_1 = __webpack_require__(7);
var App_1 = __webpack_require__(26);
__webpack_require__(25);
__webpack_require__(24);
__webpack_require__(23);
var render = function () {
    ReactDOM.render(React.createElement(App_1.App, null), document.getElementById('root'));
};
shared_1.bus.Handle(events_1.LanguageChanged, function () {
    render();
});
render();


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IDBAdapter = (function () {
    function IDBAdapter(name, version, upgradeHandler, errorHandler) {
        if (version === void 0) { version = 1; }
        if (upgradeHandler === void 0) { upgradeHandler = null; }
        if (errorHandler === void 0) { errorHandler = null; }
        this._db = null;
        this._name = null;
        this._version = null;
        this._upgradeHandler = null;
        this._errorHandler = null;
        this._getDBPromise = null;
        this._name = name;
        this._version = version;
        this._upgradeHandler = upgradeHandler;
        this._errorHandler = errorHandler;
    }
    IDBAdapter.prototype.get = function () {
        if (this._getDBPromise)
            return this._getDBPromise;
        this._initGetDBPromise();
        return this._getDBPromise;
    };
    IDBAdapter.prototype._initGetDBPromise = function () {
        var _this = this;
        this._getDBPromise = new Promise(function (resolve, reject) {
            if (_this._db !== null) {
                resolve(_this._db);
                return;
            }
            var request = indexedDB.open(_this._name, _this._version);
            request.onsuccess = function (e) {
                _this._db = event.target['result'];
                _this._db.onerror = _this._errorHandler
                    ? _this._errorHandler
                    : function (e) {
                        reject('Database error: ' + e.target['error']['message']);
                    };
                _this._db.onversionchange = function (event) {
                    if (this._db)
                        this._db.close();
                    reject('A new version is ready. Please reload!');
                };
                resolve(_this._db);
            };
            request.onerror = function (e) {
                reject(e);
            };
            request.onupgradeneeded = function (e) {
                if (_this._upgradeHandler)
                    _this._upgradeHandler(e.target['result']);
            };
        });
    };
    return IDBAdapter;
}());
exports.IDBAdapter = IDBAdapter;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IDBRepository = (function () {
    function IDBRepository(idbAdapter) {
        this.idbAdapter = idbAdapter;
        this._idbAdapter = idbAdapter;
    }
    IDBRepository.prototype.query = function (storeName, query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                ._idbAdapter
                .get()
                .then(function (db) {
                var result = [];
                var request = db
                    .transaction(storeName, 'readonly')
                    .objectStore(storeName)
                    .openCursor();
                request.onsuccess = function (e) {
                    var cursor = e.target.result;
                    if (!cursor) {
                        resolve(result);
                        return;
                    }
                    var value = cursor.value;
                    if (query) {
                        if (query(value))
                            result.push(value);
                        cursor.continue();
                        return;
                    }
                    result.push(value);
                    cursor.continue();
                };
                request.onerror = function (e) {
                    reject(e.currentTarget.error.message);
                };
            });
        });
    };
    IDBRepository.prototype.getById = function (storeName, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                ._idbAdapter
                .get()
                .then(function (db) {
                var request = db
                    .transaction(storeName, 'readonly')
                    .objectStore(storeName)
                    .get(id);
                request.onsuccess = function (e) {
                    resolve(request.result);
                };
                request.onerror = function (e) {
                    reject(e.currentTarget.error.message);
                };
            });
        });
    };
    IDBRepository.prototype.update = function (storeName, entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                ._idbAdapter
                .get()
                .then(function (db) {
                var request = db
                    .transaction(storeName, 'readwrite')
                    .objectStore(storeName)
                    .put(entity);
                request.onsuccess = function () {
                    resolve();
                };
                request.onerror = function (e) {
                    reject(e.currentTarget.error);
                };
            });
        });
    };
    return IDBRepository;
}());
exports.IDBRepository = IDBRepository;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__(1);
var account_commands_1 = __webpack_require__(4);
(function () {
    var _accountService = shared_1.ioc.IAccountService.resolve();
    var _homePagService = shared_1.ioc.IHomePageService.resolve();
    shared_1.bus.Handle(account_commands_1.QueryDashboardAccounts, function (command) {
        _homePagService
            .getAccounts()
            .then(function (accounts) { return command.onSuccess(accounts); })
            .catch(function (e) { return command.onError(e); });
    });
    shared_1.bus.Handle(account_commands_1.QueryAccountList, function (command) {
        _accountService
            .getAll()
            .then(function (accounts) { return command.onSuccess(accounts); })
            .catch(function (e) { return command.onError(e); });
    });
    shared_1.bus.Handle(account_commands_1.SaveAccount, function (command) {
        _accountService
            .save(command.account)
            .then(function () { return command.onSuccess(); })
            .catch(function (e) { return command.onError(e); });
    });
    shared_1.bus.Handle(account_commands_1.DeleteAccount, function (command) {
        _accountService
            .delete(command.id)
            .then(function () { return command.onSuccess(); })
            .catch(function (e) { return command.onError(e); });
    });
    shared_1.bus.Handle(account_commands_1.ResoreAccount, function (command) {
        _accountService
            .restore(command.id)
            .then(function () { return command.onSuccess(); })
            .catch(function (e) { return command.onError(e); });
    });
})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__(1);
var currency_commands_1 = __webpack_require__(5);
(function () {
    var service = shared_1.ioc.ICurrencyService.resolve();
    shared_1.bus.Handle(currency_commands_1.QueryCurrencyList, function (command) {
        service
            .getAll()
            .then(function (list) { return command.onSuccess(list); })
            .catch(function (e) { return command.onError(e); });
    });
    shared_1.bus.Handle(currency_commands_1.SaveCurrency, function (command) {
        service
            .save(command.currency)
            .then(function () { return command.onSuccess(); })
            .catch(function (e) { return command.onError(e); });
    });
    shared_1.bus.Handle(currency_commands_1.DeleteCurrency, function (command) {
        service
            .delete(command.id)
            .then(function () { return command.onSuccess(); })
            .catch(function (e) { return command.onError(e); });
    });
    shared_1.bus.Handle(currency_commands_1.RestoreCurrency, function (command) {
        service
            .restore(command.id)
            .then(function () { return command.onSuccess(); })
            .catch(function (e) { return command.onError(e); });
    });
})();


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__(1);
var commands_1 = __webpack_require__(2);
var events_1 = __webpack_require__(7);
(function () {
    shared_1.bus.Handle(commands_1.ChangePage, function (message) {
        var len = shared_1.state.page.history.length;
        var current = shared_1.state.page.history[len - 1];
        if (current.page == message.page)
            return;
        if (len >= 10) {
            shared_1.state.page.history = shared_1.state
                .page
                .history
                .slice(1, len);
        }
        shared_1.state
            .page
            .history
            .push(message);
        shared_1.bus.SendAsync(new events_1.PageChanged(message.page, message.data));
    });
    shared_1.bus.Handle(commands_1.ChangeLanguage, function (message) {
        shared_1.state.i18n = message.i18n;
        shared_1.bus.SendAsync(new events_1.LanguageChanged());
    });
    shared_1.bus.Handle(commands_1.GoBack, function () {
        var i = shared_1.state.page.history
            ? shared_1.state.page.history.length
            : 0;
        if (i === 0 || i === 1)
            return;
        var prev = shared_1.state.page.history[i - 2];
        shared_1.state.page.history = shared_1.state
            .page
            .history
            .slice(0, i - 1);
        shared_1.state.page.data = null;
        shared_1.state.page.isDirty = false;
        shared_1.bus.SendAsync(new events_1.PageChanged(prev.page, prev.data));
    });
    shared_1.bus.Handle(events_1.PageChanged, function (event) {
        _saveApplicationState();
    });
    shared_1.bus.Handle(events_1.LanguageChanged, function (event) {
        _saveApplicationState();
    });
    shared_1.bus.Handle(commands_1.SaveState, function (event) {
        _saveApplicationState();
    });
    function _saveApplicationState() {
        localStorage.state = JSON.stringify(shared_1.state);
    }
})();


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var Error_1 = __webpack_require__(27);
var Menu_1 = __webpack_require__(30);
var View_1 = __webpack_require__(55);
var Modals_1 = __webpack_require__(37);
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.state = {
            error: null,
            info: null
        };
        return _this;
    }
    App.prototype.componentDidCatch = function (error, info) {
        this.setState({ error: error, info: info });
    };
    App.prototype.render = function () {
        if (shared_1.state === null)
            return null;
        return (React.createElement("div", { className: "app" },
            React.createElement(Error_1.Error, { error: this.state.error, info: this.state.info }),
            React.createElement(Modals_1.AskModal, null),
            React.createElement(Modals_1.ErrorModal, null),
            React.createElement(Menu_1.Menu, null),
            React.createElement(View_1.View, null)));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Error = (function (_super) {
    __extends(Error, _super);
    function Error() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Error.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null, this.props.error),
            React.createElement("div", null, this.props.info)));
    };
    return Error;
}(React.Component));
exports.Error = Error;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var LanguageItem_1 = __webpack_require__(29);
var commands_1 = __webpack_require__(2);
var LanguageBar = (function (_super) {
    __extends(LanguageBar, _super);
    function LanguageBar(props) {
        var _this = _super.call(this, props) || this;
        _this._switchToEN = _this._switchToEN.bind(_this);
        _this._switchToUA = _this._switchToUA.bind(_this);
        return _this;
    }
    LanguageBar.prototype.render = function () {
        var en = React.createElement("img", { src: __webpack_require__(85) });
        var ua = React.createElement("img", { src: __webpack_require__(86) });
        return (React.createElement("div", { className: "pull-right" },
            React.createElement(LanguageItem_1.LanguageItem, { onClick: this._switchToEN, title: en }),
            React.createElement(LanguageItem_1.LanguageItem, { onClick: this._switchToUA, title: ua })));
    };
    LanguageBar.prototype._switchToEN = function () {
        shared_1.bus.Send(new commands_1.ChangeLanguage(shared_1.i18n.EN));
    };
    LanguageBar.prototype._switchToUA = function () {
        shared_1.bus.Send(new commands_1.ChangeLanguage(shared_1.i18n.UA));
    };
    return LanguageBar;
}(React.Component));
exports.LanguageBar = LanguageBar;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var LanguageItem = (function (_super) {
    __extends(LanguageItem, _super);
    function LanguageItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageItem.prototype.render = function () {
        return (React.createElement("a", { href: "#", onClick: this.props.onClick, className: "language-item" }, this.props.title));
    };
    return LanguageItem;
}(React.Component));
exports.LanguageItem = LanguageItem;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var MenuBrandIcon_1 = __webpack_require__(31);
var MenuToggleButton_1 = __webpack_require__(33);
var Nav_1 = __webpack_require__(34);
var LanguageBar_1 = __webpack_require__(28);
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        return (React.createElement("nav", { className: "navbar navbar-expand-sm navbar-dark bg-dark sticky-top" },
            React.createElement(MenuBrandIcon_1.MenuBrandIcon, null),
            React.createElement(MenuToggleButton_1.MenuToggleButton, null),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbar" },
                React.createElement(Nav_1.Nav, null),
                React.createElement(LanguageBar_1.LanguageBar, null))));
    };
    return Menu;
}(React.Component));
exports.Menu = Menu;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
var MenuBrandIcon = (function (_super) {
    __extends(MenuBrandIcon, _super);
    function MenuBrandIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuBrandIcon.prototype.render = function () {
        return (React.createElement("a", { href: "#", className: "navbar-brand", onClick: function () {
                shared_1.bus.Send(new index_1.ChangePage(shared_1.pages.HomePage.name));
            }, title: shared_1.state.i18n.menu.title }, "BiP"));
    };
    return MenuBrandIcon;
}(React.Component));
exports.MenuBrandIcon = MenuBrandIcon;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItem.prototype.render = function () {
        var className = 'nav-link' + (this.props.isActive
            ? ' active'
            : '');
        var classNameSm = className + ' visible-sm';
        var classNameLg = className + ' hidden-sm';
        return (React.createElement("li", null,
            React.createElement("a", { href: "#", className: classNameLg, onClick: this.props.onClick }, this.props.title),
            React.createElement("a", { href: "#", className: classNameSm, onClick: this.props.onClick, "data-toggle": "collapse", "data-target": ".navbar-collapse" }, this.props.title)));
    };
    return MenuItem;
}(React.Component));
exports.MenuItem = MenuItem;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var MenuToggleButton = (function (_super) {
    __extends(MenuToggleButton, _super);
    function MenuToggleButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuToggleButton.prototype.render = function () {
        return (React.createElement("button", { type: "button", className: "navbar-toggler", "data-toggle": "collapse", "data-target": "#navbar", "aria-controls": "navbar", "aria-expanded": "false", "aria-label": shared_1.state.i18n.menu.toggleButtonTitle, title: shared_1.state.i18n.menu.toggleButtonTitle },
            React.createElement("span", { className: "navbar-toggler-icon" })));
    };
    return MenuToggleButton;
}(React.Component));
exports.MenuToggleButton = MenuToggleButton;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var MenuItem_1 = __webpack_require__(32);
var commands_1 = __webpack_require__(2);
var events_1 = __webpack_require__(7);
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav(props) {
        var _this = _super.call(this, props) || this;
        var i = shared_1.state.page.history.length - 1;
        var current = i < 0
            ? null
            : shared_1.state.page.history[i];
        _this.state = {
            currentPage: current === null ? null : current.page
        };
        shared_1.bus.Handle(events_1.PageChanged, function (message) {
            _this.setState({ currentPage: message.page });
        });
        return _this;
    }
    Nav.prototype.render = function () {
        var homeTitle = React.createElement("span", null,
            React.createElement("i", { className: "fa fa-home" }),
            shared_1.state.i18n.menu.home);
        var settingsTitle = React.createElement("span", null,
            React.createElement("i", { className: "fa fa-cogs" }),
            shared_1.state.i18n.menu.settings);
        var aboutTitle = React.createElement("span", null,
            React.createElement("i", { className: "fa fa-info-circle" }),
            shared_1.state.i18n.menu.about);
        return (React.createElement("ul", { className: "navbar-nav mr-auto" },
            React.createElement(MenuItem_1.MenuItem, { title: homeTitle, onClick: function () {
                    shared_1.bus.Send(new commands_1.ChangePage(shared_1.pages.HomePage.name));
                }, isActive: this.state.currentPage === shared_1.pages.HomePage.name }),
            React.createElement(MenuItem_1.MenuItem, { title: settingsTitle, onClick: function () {
                    shared_1.bus.Send(new commands_1.ChangePage(shared_1.pages.SettingsPage.name));
                }, isActive: this.state.currentPage === shared_1.pages.SettingsPage.name }),
            React.createElement(MenuItem_1.MenuItem, { title: aboutTitle, onClick: function () {
                    shared_1.bus.Send(new commands_1.ChangePage(shared_1.pages.AboutPage.name));
                }, isActive: this.state.currentPage === shared_1.pages.AboutPage.name })));
    };
    return Nav;
}(React.Component));
exports.Nav = Nav;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var commands_1 = __webpack_require__(2);
var $ = __webpack_require__(18);
var AskModal = (function (_super) {
    __extends(AskModal, _super);
    function AskModal(props) {
        var _this = _super.call(this, props) || this;
        _this._id = "AskModal";
        _this.state = {
            command: {
                callback: null,
                question: null
            }
        };
        _this._onYes = _this._onYes.bind(_this);
        _this._onNo = _this._onNo.bind(_this);
        shared_1.bus.Handle(commands_1.Ask, function (message) {
            _this.setState({ command: message });
            $('#' + _this._id).modal('show');
        });
        return _this;
    }
    AskModal.prototype.render = function () {
        return (React.createElement("div", { id: this._id, className: "modal", tabIndex: -1, role: 'dialog', "data-keyboard": "false" },
            React.createElement("div", { className: "modal-dialog", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("h5", { className: "ask modal-title" },
                            React.createElement("i", { className: "fa fa-question-circle" }),
                            "\u00A0 ",
                            shared_1.state.i18n.common.confirmation)),
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("p", null, this.state.command.question)),
                    React.createElement("div", { className: "modal-footer" },
                        React.createElement("button", { type: "button", className: "btn btn-primary", onClick: this._onYes }, shared_1.state.i18n.common.yes),
                        React.createElement("button", { type: "button", className: "btn btn-secondary", onClick: this._onNo, "data-dismiss": "modal" }, shared_1.state.i18n.common.no))))));
    };
    AskModal.prototype._onYes = function () {
        this._answer(true);
    };
    AskModal.prototype._onNo = function () {
        this._answer(false);
    };
    AskModal.prototype._answer = function (answer) {
        $('#' + this._id).modal('hide');
        if (this.state.command.callback !== undefined || this.state.command.callback !== null)
            this.state.command.callback(answer);
    };
    return AskModal;
}(React.Component));
exports.AskModal = AskModal;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var commands_1 = __webpack_require__(2);
var $ = __webpack_require__(18);
var ErrorModal = (function (_super) {
    __extends(ErrorModal, _super);
    function ErrorModal(props) {
        var _this = _super.call(this, props) || this;
        _this._id = "ErrorModal";
        _this.state = {
            error: null
        };
        shared_1.bus.Handle(commands_1.ShowError, function (message) {
            _this.setState({ error: message.error });
            $('#' + _this._id).modal('show');
        });
        return _this;
    }
    ErrorModal.prototype.render = function () {
        return (React.createElement("div", { id: this._id, className: "modal", tabIndex: -1, role: 'dialog', "data-keyboard": "false" },
            React.createElement("div", { className: "modal-dialog", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("h5", { className: "error modal-title" },
                            React.createElement("i", { className: "fa fa-exclamation-triangle" }),
                            "\u00A0 ",
                            shared_1.state.i18n.common.error)),
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("p", null, this.state.error)),
                    React.createElement("div", { className: "modal-footer" },
                        React.createElement("button", { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" }, shared_1.state.i18n.common.ok))))));
    };
    return ErrorModal;
}(React.Component));
exports.ErrorModal = ErrorModal;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AskModal_1 = __webpack_require__(35);
exports.AskModal = AskModal_1.AskModal;
var ErrorModal_1 = __webpack_require__(36);
exports.ErrorModal = ErrorModal_1.ErrorModal;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var AboutPage = (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutPage.prototype.render = function () {
        return (React.createElement("div", { className: "container-fluid page-content" },
            React.createElement("div", null,
                React.createElement("b", { className: "text-danger" }, "B"),
                "alance"),
            React.createElement("div", null,
                React.createElement("b", { className: "text-danger" }, "i"),
                "n"),
            React.createElement("div", null,
                React.createElement("b", { className: "text-danger" }, "P"),
                "ocket"),
            React.createElement("div", { className: "mt-4" }, shared_1.state.i18n.about.description)));
    };
    return AboutPage;
}(React.Component));
exports.AboutPage = AboutPage;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var Form_1 = __webpack_require__(10);
var commands_1 = __webpack_require__(2);
var Form_2 = __webpack_require__(10);
var currency_commands_1 = __webpack_require__(5);
var FormTextAreaField_1 = __webpack_require__(14);
var xtypescript_1 = __webpack_require__(6);
var FormCheckBoxField_1 = __webpack_require__(57);
var account_commands_1 = __webpack_require__(4);
var AccountFormModel = (function () {
    function AccountFormModel(account, currencyList) {
        this.account = account;
        this.currencyList = currencyList;
    }
    return AccountFormModel;
}());
exports.AccountFormModel = AccountFormModel;
var AccountForm = (function (_super) {
    __extends(AccountForm, _super);
    function AccountForm(props) {
        var _this = _super.call(this, props) || this;
        _this._onSave = _this._onSave.bind(_this);
        _this._refreshCurrencyList();
        return _this;
    }
    AccountForm.prototype.render = function () {
        var _this = this;
        var currencyOptionField = this.state.data.account.id == null
            ? React.createElement(Form_2.FormOptionsField, { title: shared_1.state.i18n.account.currency, values: this.state.data.currencyList, selectedValue: this.state.data.account.currencyId, onChange: function (e) { return _this.onChange(function (model) {
                    model.account.currencyId = e.target.value;
                    model.account.currencyName = _this.state.data.currencyList.filter(function (x) { return x.value == e.target.value; })[0].display;
                }); } })
            : React.createElement(Form_1.FormReadOnlyField, { title: shared_1.state.i18n.account.currency, value: this.props.data.account.currencyName });
        return (React.createElement(Form_1.Form, { onSave: this._onSave },
            React.createElement(Form_1.FormTextField, { title: shared_1.state.i18n.common.name, value: this.state.data.account.name, isRequired: true, validationMessage: shared_1.state.i18n.account.nameValidationMessage, onChange: function (e) { return _this.onChange(function (model) { return model.account.name = e.target.value; }); } }),
            currencyOptionField,
            React.createElement(FormTextAreaField_1.FormTextAreaField, { title: shared_1.state.i18n.common.description, value: this.state.data.account.description, onChange: function (e) { return _this.onChange(function (model) { return model.account.description = e.target.value; }); } }),
            React.createElement(Form_1.FormNumberField, { title: shared_1.state.i18n.account.balance, value: this.state.data.account.balance, onChange: function (e) { return _this.onChange(function (model) { return model.account.balance = xtypescript_1.xMath.roundTo(e.target.value, model.account.precision); }); } }),
            React.createElement(Form_1.FormNumberField, { title: shared_1.state.i18n.account.displayOrder, value: this.state.data.account.displayOrder, min: 0, onChange: function (e) { return _this.onChange(function (model) { return model.account.displayOrder = Math.round(e.target.value); }); } }),
            React.createElement(FormCheckBoxField_1.FormCheckBoxField, { title: shared_1.state.i18n.account.showOnHomePage, value: this.state.data.account.showOnHomePage, onChange: function (e) { return _this.onChange(function (model) { return model.account.showOnHomePage = e.target.checked; }); } })));
    };
    AccountForm.prototype._onSave = function () {
        var _this = this;
        shared_1.bus.SendAsync(new account_commands_1.SaveAccount(this.state.data.account, function () {
            shared_1.bus.SendAsync(new commands_1.GoBack());
        }, function (error) {
            var message;
            switch (error.name) {
                case 'ConstraintError':
                    message = shared_1.state.i18n.account.constraintErrorMessage
                        .replace('{0}', _this.state.data.account.name)
                        .replace('{1}', _this.state.data.account.currencyName);
                    break;
                case 'CurrencyIsMissing':
                    message = shared_1.state.i18n.account.currencyIsMissingError;
                    break;
                default:
                    message = shared_1.state.i18n.common.defaulErrorMessage;
            }
            shared_1.bus.SendAsync(new commands_1.ShowError(message));
        }));
    };
    AccountForm.prototype._refreshCurrencyList = function () {
        var _this = this;
        shared_1.bus.SendAsync(new currency_commands_1.QueryCurrencyList(function (list) {
            _this.setState(function (state) {
                var account = state.data.account;
                if (!account.currencyId) {
                    var currency = list[0];
                    _this.state.data.account.currencyId = currency.id;
                    _this.state.data.account.currencyName = currency.name;
                }
                return {
                    data: __assign({}, state.data, { account: account, currencyList: list
                            .filter(function (x) { return x.isDeleted === false || x.isDeleted === undefined; })
                            .map(function (x) { return new Form_1.FormOptionValue(x.id, x.name); }) })
                };
            });
        }, function (error) {
            shared_1.bus.SendAsync(new commands_1.ShowError(shared_1.state.i18n.common.defaulErrorMessage));
        }));
    };
    return AccountForm;
}(Form_2.FormPage));
exports.AccountForm = AccountForm;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var Header_1 = __webpack_require__(8);
var AccountForm_1 = __webpack_require__(39);
var AccountPage = (function (_super) {
    __extends(AccountPage, _super);
    function AccountPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountPage.prototype.render = function () {
        var title = this.props.data.account.id
            ? shared_1.state.i18n.account.editTitle
            : shared_1.state.i18n.account.createTitle;
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, null,
                React.createElement("i", { className: "fa header-icon fa-money" }),
                title),
            React.createElement(AccountForm_1.AccountForm, { data: new AccountForm_1.AccountFormModel(this.props.data.account, []) })));
    };
    return AccountPage;
}(React.Component));
exports.AccountPage = AccountPage;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var commands_1 = __webpack_require__(2);
var account_commands_1 = __webpack_require__(4);
var AccountItem = (function (_super) {
    __extends(AccountItem, _super);
    function AccountItem(props) {
        var _this = _super.call(this, props) || this;
        _this._onEditClick = _this._onEditClick.bind(_this);
        _this._onDeleteClick = _this._onDeleteClick.bind(_this);
        _this._onUnDeleteClick = _this._onUnDeleteClick.bind(_this);
        return _this;
    }
    AccountItem.prototype.render = function () {
        var editButton = this.props.account.id == null
            ? React.createElement("button", { type: "button", className: "btn btn-primary", title: shared_1.state.i18n.common.edit, onClick: this._onEditClick },
                React.createElement("i", { className: "fa fa-plus" }))
            : React.createElement("button", { type: "button", className: "btn btn-primary", title: shared_1.state.i18n.common.edit, onClick: this._onEditClick },
                React.createElement("i", { className: "fa fa-pencil" }));
        var deleteButton = this.props.account.id == null || this.props.account.isDeleted
            ? null
            : React.createElement("div", { className: "d-inline-block" },
                "\u00A0",
                React.createElement("button", { type: "button", className: "btn btn-danger", onClick: this._onDeleteClick, title: shared_1.state.i18n.common.delete },
                    React.createElement("i", { className: "fa fa-trash" })));
        var info = this.props.account.isDeleted
            ? React.createElement("div", { className: "col" },
                React.createElement("del", null,
                    React.createElement("em", null,
                        this.props.account.name || shared_1.state.i18n.account.createTitle,
                        React.createElement("div", null,
                            React.createElement("small", null, this.props.account.description)))))
            : React.createElement("div", { className: "col" },
                this.props.account.name || shared_1.state.i18n.account.createTitle,
                React.createElement("div", null,
                    React.createElement("small", null, this.props.account.description)));
        var balance = this.props.account.isDeleted || !this.props.account.id
            ? null
            : this.props.account.balanceView + ' ' + this.props.account.currencyName;
        var restoreButton = this.props.account.isDeleted
            ? React.createElement("div", { className: "d-inline-block" },
                "\u00A0",
                React.createElement("button", { type: "button", className: "btn btn-success", onClick: this._onUnDeleteClick, title: shared_1.state.i18n.common.undelete },
                    React.createElement("i", { className: "fa fa-undo" })))
            : null;
        return (React.createElement("div", { className: "row" },
            info,
            React.createElement("div", { className: "col text-right" }, balance),
            React.createElement("div", { className: "col-2 col-md-auto" },
                editButton,
                deleteButton,
                restoreButton)));
    };
    AccountItem.prototype._onEditClick = function () {
        shared_1.bus.SendAsync(new commands_1.ChangePage(shared_1.pages.AccountPage.name, { account: this.props.account }));
    };
    AccountItem.prototype._onDeleteClick = function () {
        var _this = this;
        shared_1.bus.SendAsync(new commands_1.Ask(shared_1.state.i18n.account.deleteQuestion.replace('{0}', this.props.account.name).replace('{1}', this.props.account.currencyName), function (answer) {
            shared_1.bus.SendAsync(new account_commands_1.DeleteAccount(_this.props.account.id, function () {
                shared_1.bus.SendAsync(new account_commands_1.RefreshAccountsListPage());
            }, function (error) {
                shared_1.bus.SendAsync(new commands_1.ShowError(shared_1.state.i18n.common.defaulErrorMessage));
            }));
        }));
    };
    AccountItem.prototype._onUnDeleteClick = function () {
        var _this = this;
        shared_1.bus.SendAsync(new commands_1.Ask(shared_1.state.i18n.account.restoreQuestion.replace('{0}', this.props.account.name).replace('{1}', this.props.account.currencyName), function (answer) {
            shared_1.bus.SendAsync(new account_commands_1.ResoreAccount(_this.props.account.id, function () {
                shared_1.bus.SendAsync(new account_commands_1.RefreshAccountsListPage());
            }, function (error) {
                shared_1.bus.SendAsync(new commands_1.ShowError(shared_1.state.i18n.common.defaulErrorMessage));
            }));
        }));
    };
    return AccountItem;
}(React.Component));
exports.AccountItem = AccountItem;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var AccountItem_1 = __webpack_require__(41);
var AccountModel_1 = __webpack_require__(12);
var AccountsList = (function (_super) {
    __extends(AccountsList, _super);
    function AccountsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountsList.prototype.render = function () {
        var list = [
            new AccountModel_1.AccountModel(null, null, null)
        ].concat(this.props.accounts);
        var items = list.map(function (x) { return React.createElement(AccountItem_1.AccountItem, { account: x, key: x.id }); });
        return (React.createElement("div", { className: "container-fluid row-list" }, items));
    };
    return AccountsList;
}(React.Component));
exports.AccountsList = AccountsList;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var Header_1 = __webpack_require__(8);
var AccountsList_1 = __webpack_require__(42);
var account_commands_1 = __webpack_require__(4);
var commands_1 = __webpack_require__(2);
var AccountsListPage = (function (_super) {
    __extends(AccountsListPage, _super);
    function AccountsListPage() {
        var _this = _super.call(this) || this;
        _this.state = {
            accounts: []
        };
        shared_1.bus.Handle(account_commands_1.RefreshAccountsListPage, function () { return _this._refreshAccount(); });
        _this._refreshAccount();
        return _this;
    }
    AccountsListPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, null,
                React.createElement("i", { className: "fa header-icon fa-money" }),
                shared_1.state.i18n.accountsList.title),
            React.createElement(AccountsList_1.AccountsList, { accounts: this.state.accounts })));
    };
    AccountsListPage.prototype._refreshAccount = function () {
        var _this = this;
        shared_1.bus.SendAsync(new account_commands_1.QueryAccountList(function (accounts) {
            _this.setState(function (state) {
                return __assign({}, state, { accounts: accounts });
            });
        }, function (error) {
            shared_1.bus.SendAsync(new commands_1.ShowError(shared_1.state.i18n.common.defaulErrorMessage));
        }));
    };
    return AccountsListPage;
}(React.Component));
exports.AccountsListPage = AccountsListPage;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var commands_1 = __webpack_require__(2);
var currency_commands_1 = __webpack_require__(5);
var CurrencyItem = (function (_super) {
    __extends(CurrencyItem, _super);
    function CurrencyItem() {
        var _this = _super.call(this) || this;
        _this._onEditClick = _this._onEditClick.bind(_this);
        _this._onDeleteClick = _this._onDeleteClick.bind(_this);
        _this._onUnDeleteClick = _this._onUnDeleteClick.bind(_this);
        return _this;
    }
    CurrencyItem.prototype.render = function () {
        var editButtonContent = this.props.currency.id == null
            ? React.createElement("i", { className: "fa fa-plus" })
            : React.createElement("i", { className: "fa fa-pencil" });
        var editButton = (React.createElement("button", { type: "button", className: "btn btn-primary", onClick: this._onEditClick, title: shared_1.state.i18n.common.edit }, editButtonContent));
        var deleteButton = this.props.currency.id == null || this.props.currency.isDeleted
            ? null
            : React.createElement("div", { className: "d-inline-block" },
                "\u00A0",
                React.createElement("button", { type: "button", className: "btn btn-danger", onClick: this._onDeleteClick, title: shared_1.state.i18n.common.delete },
                    React.createElement("i", { className: "fa fa-trash" })));
        var info = this.props.currency.isDeleted
            ? React.createElement("div", { className: "col" },
                React.createElement("del", null,
                    React.createElement("em", null, this.props.currency.name || shared_1.state.i18n.currency.createTitle)),
                React.createElement("div", null,
                    React.createElement("small", null,
                        React.createElement("del", null,
                            React.createElement("em", null, this.props.currency.description)))))
            : React.createElement("div", { className: "col" },
                this.props.currency.name || shared_1.state.i18n.currency.createTitle,
                React.createElement("div", null,
                    React.createElement("small", null, this.props.currency.description)));
        var restoreButton = this.props.currency.isDeleted
            ? React.createElement("div", { className: "d-inline-block" },
                "\u00A0",
                React.createElement("button", { type: "button", className: "btn btn-success", onClick: this._onUnDeleteClick, title: shared_1.state.i18n.common.undelete },
                    React.createElement("i", { className: "fa fa-undo" })))
            : null;
        return (React.createElement("div", { className: "row" },
            info,
            React.createElement("div", { className: "col-2 col-md-auto" },
                editButton,
                deleteButton,
                restoreButton)));
    };
    CurrencyItem.prototype._onEditClick = function () {
        shared_1.bus.SendAsync(new commands_1.ChangePage(shared_1.pages.CurrencyPage.name, { currency: this.props.currency }));
    };
    CurrencyItem.prototype._onDeleteClick = function () {
        var _this = this;
        shared_1.bus.SendAsync(new commands_1.Ask(shared_1.state.i18n.currency.deleteQuestion.replace('{0}', this.props.currency.name), function (answer) {
            shared_1.bus.SendAsync(new currency_commands_1.DeleteCurrency(_this.props.currency.id, function () {
                shared_1.bus.SendAsync(new currency_commands_1.RefreshCurrencyListPage());
            }, function (error) {
                shared_1.bus.SendAsync(new commands_1.ShowError(shared_1.state.i18n.common.defaulErrorMessage));
            }));
        }));
    };
    CurrencyItem.prototype._onUnDeleteClick = function () {
        var _this = this;
        shared_1.bus.SendAsync(new commands_1.Ask(shared_1.state.i18n.currency.restoreQuestion.replace('{0}', this.props.currency.name), function (answer) {
            shared_1.bus.SendAsync(new currency_commands_1.RestoreCurrency(_this.props.currency.id, function () {
                shared_1.bus.SendAsync(new currency_commands_1.RefreshCurrencyListPage());
            }, function (error) {
                shared_1.bus.SendAsync(new commands_1.ShowError(shared_1.state.i18n.common.defaulErrorMessage));
            }));
        }));
    };
    return CurrencyItem;
}(React.Component));
exports.CurrencyItem = CurrencyItem;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var CurrencyItem_1 = __webpack_require__(44);
var models_1 = __webpack_require__(16);
var CurrencyList = (function (_super) {
    __extends(CurrencyList, _super);
    function CurrencyList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrencyList.prototype.render = function () {
        var list = [
            new models_1.CurrencyModel(null, null)
        ].concat(this.props.list);
        var items = list.map(function (x) { return React.createElement(CurrencyItem_1.CurrencyItem, { currency: x, key: x.id }); });
        return (React.createElement("div", { className: "container-fluid row-list" }, items));
    };
    return CurrencyList;
}(React.Component));
exports.CurrencyList = CurrencyList;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var Header_1 = __webpack_require__(8);
var CurrencyList_1 = __webpack_require__(45);
var currency_commands_1 = __webpack_require__(5);
var index_1 = __webpack_require__(2);
var CurrencyListPage = (function (_super) {
    __extends(CurrencyListPage, _super);
    function CurrencyListPage() {
        var _this = _super.call(this) || this;
        _this.state = {
            currencyList: []
        };
        shared_1.bus.Handle(currency_commands_1.RefreshCurrencyListPage, function () { return _this._refreshCurrency(); });
        _this._refreshCurrency();
        return _this;
    }
    CurrencyListPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, null,
                React.createElement("i", { className: "fa header-icon fa-usd" }),
                shared_1.state.i18n.currencyList.title),
            React.createElement(CurrencyList_1.CurrencyList, { list: this.state.currencyList })));
    };
    CurrencyListPage.prototype._refreshCurrency = function () {
        var _this = this;
        shared_1.bus.SendAsync(new currency_commands_1.QueryCurrencyList(function (list) {
            _this.setState(function (state) {
                return __assign({}, state, { currencyList: list });
            });
        }, function (error) {
            shared_1.bus.SendAsync(new index_1.ShowError(shared_1.state.i18n.common.defaulErrorMessage));
        }));
    };
    return CurrencyListPage;
}(React.Component));
exports.CurrencyListPage = CurrencyListPage;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var Form_1 = __webpack_require__(10);
var commands_1 = __webpack_require__(2);
var currency_commands_1 = __webpack_require__(5);
var CurrencyForm = (function (_super) {
    __extends(CurrencyForm, _super);
    function CurrencyForm(props) {
        var _this = _super.call(this, props) || this;
        _this._onSave = _this._onSave.bind(_this);
        return _this;
    }
    CurrencyForm.prototype.render = function () {
        var _this = this;
        return (React.createElement(Form_1.Form, { onSave: this._onSave },
            React.createElement(Form_1.FormTextField, { title: shared_1.state.i18n.common.name, value: this.state.data.name, isRequired: true, validationMessage: shared_1.state.i18n.currency.nameValidationMessage, onChange: function (e) { return _this.onChange(function (currency) { return currency.name = e.target.value; }); } }),
            React.createElement(Form_1.FormTextAreaField, { title: shared_1.state.i18n.common.description, value: this.state.data.description, onChange: function (e) { return _this.onChange(function (currency) { return currency.description = e.target.value; }); } }),
            React.createElement(Form_1.FormNumberField, { title: shared_1.state.i18n.currency.precision, value: this.state.data.precision, isRequired: true, validationMessage: shared_1.state.i18n.currency.minimumFractionDigitsValidationMessage, onChange: function (e) { return _this.onChange(function (currency) { return currency.precision = e.target.value; }); }, min: 0, max: 3 })));
    };
    CurrencyForm.prototype._onSave = function () {
        var _this = this;
        shared_1.bus.SendAsync(new currency_commands_1.SaveCurrency(this.state.data, function () {
            shared_1.bus.SendAsync(new commands_1.GoBack());
        }, function (error) {
            var message;
            switch (error.name) {
                case 'ConstraintError':
                    message = shared_1.state.i18n.currency.constraintErrorMessage.replace('{0}', _this.state.data.name.toUpperCase());
                    break;
                default:
                    message = shared_1.state.i18n.common.defaulErrorMessage;
            }
            shared_1.bus.SendAsync(new commands_1.ShowError(message));
        }));
    };
    return CurrencyForm;
}(Form_1.FormPage));
exports.CurrencyForm = CurrencyForm;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var Header_1 = __webpack_require__(8);
var CurrencyForm_1 = __webpack_require__(47);
var CurrencyPage = (function (_super) {
    __extends(CurrencyPage, _super);
    function CurrencyPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrencyPage.prototype.render = function () {
        var title = this.props.data.currency.id
            ? shared_1.state.i18n.currency.editTitle
            : shared_1.state.i18n.currency.createTitle;
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, null,
                React.createElement("i", { className: "fa header-icon fa-usd" }),
                title),
            React.createElement(CurrencyForm_1.CurrencyForm, { data: this.props.data.currency })));
    };
    return CurrencyPage;
}(React.Component));
exports.CurrencyPage = CurrencyPage;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var AccountItem = (function (_super) {
    __extends(AccountItem, _super);
    function AccountItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountItem.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col" }, this.props.account.name),
            React.createElement("div", { className: "col text-right text-nowrap" },
                this.props.account.balanceView,
                " ",
                this.props.account.currencyName)));
    };
    return AccountItem;
}(React.Component));
exports.AccountItem = AccountItem;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var AccountItem_1 = __webpack_require__(49);
var AccountList = (function (_super) {
    __extends(AccountList, _super);
    function AccountList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountList.prototype.render = function () {
        var items = this.props.list.map(function (x) { return React.createElement(AccountItem_1.AccountItem, { account: x, key: x.id }); });
        return (React.createElement("div", { className: "container-fluid row-list" }, items));
    };
    return AccountList;
}(React.Component));
exports.AccountList = AccountList;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var AccountList_1 = __webpack_require__(50);
var account_commands_1 = __webpack_require__(4);
var commands_1 = __webpack_require__(2);
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super.call(this) || this;
        _this.state = {
            accounts: []
        };
        _this._refreshAccounts();
        return _this;
    }
    HomePage.prototype.render = function () {
        return (React.createElement(AccountList_1.AccountList, { list: this.state.accounts }));
    };
    HomePage.prototype._refreshAccounts = function () {
        var _this = this;
        shared_1.bus.SendAsync(new account_commands_1.QueryDashboardAccounts(function (accounts) {
            _this.setState(function (state) {
                return __assign({}, state, { accounts: accounts });
            });
        }, function (error) {
            shared_1.bus.SendAsync(new commands_1.ShowError(shared_1.state.i18n.common.defaulErrorMessage));
        }));
    };
    return HomePage;
}(React.Component));
exports.HomePage = HomePage;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var index_1 = __webpack_require__(1);
var SettingsItem = (function (_super) {
    __extends(SettingsItem, _super);
    function SettingsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsItem.prototype.render = function () {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col" },
                React.createElement("i", { className: "fa title-icon " + this.props.icon }),
                " ",
                this.props.title),
            React.createElement("div", { className: "col-2 col-md-auto" },
                React.createElement("button", { type: "button", className: "btn btn-primary", onClick: this.props.onClick, title: index_1.state.i18n.common.open },
                    React.createElement("i", { className: "fa fa-folder" })))));
    };
    return SettingsItem;
}(React.Component));
exports.SettingsItem = SettingsItem;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var commands_1 = __webpack_require__(2);
var SettingsItem_1 = __webpack_require__(52);
var SettingsList = (function (_super) {
    __extends(SettingsList, _super);
    function SettingsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsList.prototype.render = function () {
        return (React.createElement("div", { className: "container-fluid row-list settings-list" },
            React.createElement(SettingsItem_1.SettingsItem, { icon: "fa-money", title: shared_1.state.i18n.settings.accounts, onClick: function () { shared_1.bus.Send(new commands_1.ChangePage(shared_1.pages.AccountsListPage.name)); } }),
            React.createElement(SettingsItem_1.SettingsItem, { icon: "fa-usd", title: shared_1.state.i18n.settings.currency, onClick: function () { shared_1.bus.Send(new commands_1.ChangePage(shared_1.pages.CurrencyListPage.name)); } })));
    };
    return SettingsList;
}(React.Component));
exports.SettingsList = SettingsList;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SettingsList_1 = __webpack_require__(53);
var SettingsPage = (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsPage.prototype.render = function () {
        return (React.createElement(SettingsList_1.SettingsList, null));
    };
    return SettingsPage;
}(React.Component));
exports.SettingsPage = SettingsPage;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var events_1 = __webpack_require__(7);
var View = (function (_super) {
    __extends(View, _super);
    function View(props) {
        var _this = _super.call(this, props) || this;
        var i = shared_1.state.page.history.length - 1;
        var current = i < 0
            ? null
            : shared_1.state.page.history[i];
        _this.state =
            {
                page: current === null ? null : current.page,
                data: current === null ? null : current.data
            };
        shared_1.bus.Handle(events_1.PageChanged, function (event) {
            _this.setState({ page: event.page, data: event.data });
        });
        return _this;
    }
    View.prototype.render = function () {
        if (this.state.page === null)
            return null;
        var Page = shared_1.pages[this.state.page];
        return (React.createElement("div", { className: "page container" },
            React.createElement(Page, { data: this.state.data })));
    };
    return View;
}(React.Component));
exports.View = View;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var xtypescript_1 = __webpack_require__(6);
var shared_1 = __webpack_require__(13);
var shared_2 = __webpack_require__(1);
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this._id = xtypescript_1.GUID.New();
        _this._onSave = _this._onSave.bind(_this);
        return _this;
    }
    Form.prototype.render = function () {
        var cancelButton = (React.createElement("button", { type: "button", className: "btn", onClick: shared_1.SharedCommands.goBack, title: shared_2.state.i18n.common.cancel },
            React.createElement("i", { className: "fa fa-ban" })));
        var saveButton = shared_2.state.page.isDirty
            ? React.createElement("button", { type: "submit", className: "btn btn-primary", onClick: this._onSave, title: shared_2.state.i18n.common.save },
                React.createElement("i", { className: "fa fa-save" }))
            : React.createElement("button", { type: "submit", className: "btn btn-primary", onClick: this._onSave, title: shared_2.state.i18n.common.save, disabled: true },
                React.createElement("i", { className: "fa fa-save" }));
        return (React.createElement("form", { id: this._id, noValidate: true },
            React.createElement("div", { className: "container-fluid row-list" }, this.props.children),
            React.createElement("div", { className: "container-fluid row-list text-right" },
                cancelButton,
                "\u00A0",
                saveButton)));
    };
    Form.prototype._onSave = function () {
        var form = document.getElementById(this._id);
        if (form == null)
            throw "Form \"" + this._id + "\" was not found on a page!";
        if (form.className.indexOf('was-validated') < 0)
            form.className += ' was-validated';
        if (form['checkValidity']())
            this.props.onSave();
    };
    return Form;
}(React.Component));
exports.Form = Form;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FormField_1 = __webpack_require__(3);
var FormCheckBoxField = (function (_super) {
    __extends(FormCheckBoxField, _super);
    function FormCheckBoxField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormCheckBoxField.prototype.render = function () {
        var Checkbox = this.props.value
            ? React.createElement("input", { type: "checkbox", onChange: this.props.onChange, checked: true })
            : React.createElement("input", { type: "checkbox", onChange: this.props.onChange });
        return (React.createElement(FormField_1.FormField, { title: this.props.title, className: this.props.className }, Checkbox));
    };
    return FormCheckBoxField;
}(React.Component));
exports.FormCheckBoxField = FormCheckBoxField;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var FormField_1 = __webpack_require__(3);
var FormNumberField = (function (_super) {
    __extends(FormNumberField, _super);
    function FormNumberField(props) {
        var _this = _super.call(this, props) || this;
        _this._onChange = _this._onChange.bind(_this);
        return _this;
    }
    FormNumberField.prototype.render = function () {
        var Input = this.props.isRequired
            ? React.createElement("div", null,
                React.createElement("input", { type: "number", className: "form-control text-right", value: this.props.value, onChange: this._onChange, min: this.props.min, max: this.props.max, required: true }),
                React.createElement("div", { className: "invalid-feedback" }, this.props.validationMessage
                    ? this.props.validationMessage
                    : shared_1.state.i18n.common.defaultValidationMessage))
            : React.createElement("input", { type: "number", className: "form-control text-right", value: this.props.value, onChange: this._onChange, min: this.props.min, max: this.props.max });
        return (React.createElement(FormField_1.FormField, { title: this.props.title, className: this.props.className }, Input));
    };
    FormNumberField.prototype._onChange = function (e) {
        var value = e.target.value * 1;
        if (this.props.min !== undefined || this.props.min !== null) {
            if (value < this.props.min) {
                e.target.value = this.props.min;
            }
        }
        if (this.props.max !== undefined || this.props.min !== null) {
            if (value > this.props.max) {
                e.target.value = this.props.max;
            }
        }
        if (this.props.onChange !== (undefined || null)) {
            this.props.onChange(e);
        }
    };
    return FormNumberField;
}(React.Component));
exports.FormNumberField = FormNumberField;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FormField_1 = __webpack_require__(3);
var FormOptionValue = (function () {
    function FormOptionValue(value, display) {
        this.value = value;
        this.display = display;
    }
    return FormOptionValue;
}());
exports.FormOptionValue = FormOptionValue;
var FormOptionsField = (function (_super) {
    __extends(FormOptionsField, _super);
    function FormOptionsField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormOptionsField.prototype.render = function () {
        var _this = this;
        var Options = this.props.values.map(function (x) {
            return React.createElement("option", { value: x.value, selected: x.value == _this.props.selectedValue }, x.display);
        });
        var Input = React.createElement("div", null,
            React.createElement("select", { className: "form-control", onChange: this.props.onChange }, Options));
        return (React.createElement(FormField_1.FormField, { title: this.props.title, className: this.props.className }, Input));
    };
    return FormOptionsField;
}(React.Component));
exports.FormOptionsField = FormOptionsField;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
var FormPage = (function (_super) {
    __extends(FormPage, _super);
    function FormPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: shared_1.state.page.isDirty ? shared_1.state.page.data : _this.props.data
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    FormPage.prototype.onChange = function (delegate) {
        shared_1.state.page.isDirty = true;
        var data = this.state.data;
        delegate(data);
        shared_1.state.page.data = data;
        shared_1.bus.SendAsync(new index_1.SaveState());
        this.setState({ data: data });
    };
    return FormPage;
}(React.Component));
exports.FormPage = FormPage;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FormField_1 = __webpack_require__(3);
var FormReadOnlyField = (function (_super) {
    __extends(FormReadOnlyField, _super);
    function FormReadOnlyField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormReadOnlyField.prototype.render = function () {
        return (React.createElement(FormField_1.FormField, { title: this.props.title, className: this.props.className }, this.props.value));
    };
    return FormReadOnlyField;
}(React.Component));
exports.FormReadOnlyField = FormReadOnlyField;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var shared_1 = __webpack_require__(1);
var FormField_1 = __webpack_require__(3);
var FormTextField = (function (_super) {
    __extends(FormTextField, _super);
    function FormTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormTextField.prototype.render = function () {
        var Input = this.props.isRequired
            ? React.createElement("div", null,
                React.createElement("input", { type: "text", className: "form-control", value: this.props.value, onChange: this.props.onChange, required: true }),
                React.createElement("div", { className: "invalid-feedback" }, this.props.validationMessage
                    ? this.props.validationMessage
                    : shared_1.state.i18n.common.defaultValidationMessage))
            : React.createElement("input", { type: "text", className: "form-control", value: this.props.value, onChange: this.props.onChange });
        return (React.createElement(FormField_1.FormField, { title: this.props.title, className: this.props.className }, Input));
    };
    return FormTextField;
}(React.Component));
exports.FormTextField = FormTextField;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __webpack_require__(9);
var Account = (function (_super) {
    __extends(Account, _super);
    function Account(id, name, currencyId, balance, description, showOnHomePage, displayOrder, useInBalance, isDeleted, createdDateTime, modifiedDateTime) {
        if (balance === void 0) { balance = 0; }
        if (description === void 0) { description = null; }
        if (showOnHomePage === void 0) { showOnHomePage = false; }
        if (displayOrder === void 0) { displayOrder = 0; }
        if (useInBalance === void 0) { useInBalance = true; }
        var _this = _super.call(this, id, isDeleted, createdDateTime, modifiedDateTime) || this;
        _this.name = name;
        _this.currencyId = currencyId;
        _this.balance = balance;
        _this.description = description;
        _this.showOnHomePage = showOnHomePage;
        _this.displayOrder = displayOrder;
        _this.useInBalance = useInBalance;
        return _this;
    }
    return Account;
}(Entity_1.Entity));
exports.Account = Account;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __webpack_require__(9);
var Currency = (function (_super) {
    __extends(Currency, _super);
    function Currency(id, name, precision, description, isDeleted, createdDateTime, modifiedDateTime) {
        if (precision === void 0) { precision = 2; }
        if (description === void 0) { description = null; }
        var _this = _super.call(this, id, isDeleted, createdDateTime, modifiedDateTime) || this;
        _this.name = name;
        _this.precision = precision;
        _this.description = description;
        return _this;
    }
    return Currency;
}(Entity_1.Entity));
exports.Currency = Currency;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __webpack_require__(9);
var MarkerCategory;
(function (MarkerCategory) {
    MarkerCategory[MarkerCategory["account"] = 0] = "account";
    MarkerCategory[MarkerCategory["transaction"] = 1] = "transaction";
    MarkerCategory[MarkerCategory["currency"] = 2] = "currency";
})(MarkerCategory = exports.MarkerCategory || (exports.MarkerCategory = {}));
var Marker = (function (_super) {
    __extends(Marker, _super);
    function Marker(id, category, name, isDeleted, createdDateTime, modifiedDateTime) {
        var _this = _super.call(this, id, isDeleted, createdDateTime, modifiedDateTime) || this;
        _this.category = category;
        _this.name = name;
        return _this;
    }
    return Marker;
}(Entity_1.Entity));
exports.Marker = Marker;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __webpack_require__(9);
var Transaction = (function (_super) {
    __extends(Transaction, _super);
    function Transaction(id, fromAccountId, toAccountId, sumFrom, sumTo, rate, description, isDeleted, createdDateTime, modifiedDateTime) {
        if (rate === void 0) { rate = null; }
        if (description === void 0) { description = null; }
        var _this = _super.call(this, id, isDeleted, createdDateTime, modifiedDateTime) || this;
        _this.fromAccountId = fromAccountId;
        _this.toAccountId = toAccountId;
        _this.sumFrom = sumFrom;
        _this.sumTo = sumTo;
        _this.rate = rate;
        _this.description = description;
        return _this;
    }
    return Transaction;
}(Entity_1.Entity));
exports.Transaction = Transaction;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18nAboutEN = (function () {
    function i18nAboutEN() {
        this.description = 'A simple accountant tool to store and manage home/personal accounts. App is using IndexedDb as a content storage. What means that your data stays in your browser. No network data transfer has place to take.';
    }
    return i18nAboutEN;
}());
exports.i18nAboutEN = i18nAboutEN;
var i18nAboutUA = (function () {
    function i18nAboutUA() {
        this.description = 'BiP - баланс в кішені. Це простий бухгалтерський інструмент для ведення домашніх/персональниих рахунків. У якості сховища даних додаток використовує IndexedDB. Що означає, що всі дані залишаються у Вашому браузері. Будь які передачі мережею відсутні.';
    }
    return i18nAboutUA;
}());
exports.i18nAboutUA = i18nAboutUA;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18nAccountEN = (function () {
    function i18nAccountEN() {
        this.editTitle = 'Edit accout';
        this.createTitle = 'Create account';
        this.constraintErrorMessage = 'Account "{0} {1}" already exists';
        this.nameValidationMessage = 'Provide account name';
        this.currency = 'Currency';
        this.balance = 'Balance';
        this.displayOrder = 'Display order';
        this.showOnHomePage = 'Show on Home Page';
        this.currencyIsMissingError = 'Cannot save Account. Currency was not set.';
        this.deleteQuestion = 'Are you realy want to delete "{0} {1}" account?';
        this.restoreQuestion = 'Are you realy want to restore "{0} {1}" account?';
    }
    return i18nAccountEN;
}());
exports.i18nAccountEN = i18nAccountEN;
var i18nAccountUA = (function () {
    function i18nAccountUA() {
        this.editTitle = 'Редагувати рахунок';
        this.createTitle = 'Створити рахунок';
        this.constraintErrorMessage = 'Рахунок "{0} {1}" вже існує';
        this.nameValidationMessage = 'Вкажіть назву рахунку';
        this.currency = 'Валюта';
        this.balance = 'Залишок';
        this.displayOrder = 'Порядок показу';
        this.showOnHomePage = 'Показувати на головній сторінці';
        this.currencyIsMissingError = 'Збереження неможливе. Валюту не було встановлено.';
        this.deleteQuestion = 'Ви впевнені, що хочете видалити рахунок "{0} {1}"?';
        this.restoreQuestion = 'Ви впевнені, що хочете відновити рахунок "{0} {1}"?';
    }
    return i18nAccountUA;
}());
exports.i18nAccountUA = i18nAccountUA;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18nAccountsListEN = (function () {
    function i18nAccountsListEN() {
        this.title = 'Accounts';
    }
    return i18nAccountsListEN;
}());
exports.i18nAccountsListEN = i18nAccountsListEN;
var i18nAccountsListUA = (function () {
    function i18nAccountsListUA() {
        this.title = 'Рахунки';
    }
    return i18nAccountsListUA;
}());
exports.i18nAccountsListUA = i18nAccountsListUA;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18nCommonEN = (function () {
    function i18nCommonEN() {
        this.back = 'Back';
        this.name = 'Name';
        this.description = 'Description';
        this.edit = 'Edit';
        this.delete = 'Delete';
        this.undelete = 'Undelete';
        this.open = 'Open';
        this.confirmation = 'Confirmation';
        this.goBackQuestion = 'Some changes were made on a page. Do You realy want to go back without saving?';
        this.yes = 'Yes';
        this.no = 'No';
        this.save = 'Save';
        this.cancel = 'Cancel';
        this.error = 'Error';
        this.ok = 'OKAY';
        this.defaultValidationMessage = 'Provide a valid field value.';
        this.defaulErrorMessage = 'An error occurred.';
    }
    return i18nCommonEN;
}());
exports.i18nCommonEN = i18nCommonEN;
var i18nCommonUA = (function () {
    function i18nCommonUA() {
        this.back = 'Назад';
        this.name = 'Назва';
        this.description = 'Опис';
        this.edit = 'Редагувати';
        this.delete = 'Видалити';
        this.undelete = 'Відновити';
        this.open = 'Відкрити';
        this.confirmation = 'Підтвердження';
        this.goBackQuestion = 'На сторінці відбулися деякі зміни. Ви впевнені, що хочете перейти на попередню сторінку без збереження?';
        this.yes = 'Так';
        this.no = 'Ні';
        this.save = 'Зберегти';
        this.cancel = 'Відмінити';
        this.error = 'Помилка';
        this.ok = 'Зрозуміло';
        this.defaultValidationMessage = 'Надайте валідне значення полю.';
        this.defaulErrorMessage = 'Виникла помилка.';
    }
    return i18nCommonUA;
}());
exports.i18nCommonUA = i18nCommonUA;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18nCurrencyListEN = (function () {
    function i18nCurrencyListEN() {
        this.title = 'Currency';
    }
    return i18nCurrencyListEN;
}());
exports.i18nCurrencyListEN = i18nCurrencyListEN;
var i18nCurrencyListUA = (function () {
    function i18nCurrencyListUA() {
        this.title = 'Валюта';
    }
    return i18nCurrencyListUA;
}());
exports.i18nCurrencyListUA = i18nCurrencyListUA;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18nCurrencyEN = (function () {
    function i18nCurrencyEN() {
        this.precision = 'Minimum fraction digits';
        this.editTitle = 'Edit currency';
        this.createTitle = 'Create currency';
        this.nameValidationMessage = 'Provide currency name';
        this.minimumFractionDigitsValidationMessage = 'Provide minimum fraction digits';
        this.deleteQuestion = 'Are you sure you want to delete "{0}" currency?';
        this.constraintErrorMessage = 'Currency "{0}" already exists';
        this.restoreQuestion = 'Are you realy want to restore "{0}" currency?';
    }
    return i18nCurrencyEN;
}());
exports.i18nCurrencyEN = i18nCurrencyEN;
var i18nCurrencyUA = (function () {
    function i18nCurrencyUA() {
        this.precision = 'К-сть знаків після крапки';
        this.editTitle = 'Редагувати валюту';
        this.createTitle = 'Створити валюту';
        this.nameValidationMessage = 'Вкажіть назву валюти';
        this.minimumFractionDigitsValidationMessage = 'Вкажіть кількістьсть знаків після крапки';
        this.deleteQuestion = 'Ви впевнені, що хочете видалити валюту "{0}"?';
        this.constraintErrorMessage = 'Валюта "{0}" вже існує.';
        this.restoreQuestion = 'Ви впевнені, що хочете відновити валюту "{0}"?';
    }
    return i18nCurrencyUA;
}());
exports.i18nCurrencyUA = i18nCurrencyUA;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18nMenuEN = (function () {
    function i18nMenuEN() {
        this.home = 'Home';
        this.settings = 'Settings';
        this.about = 'About';
        this.title = 'Balance in pocket';
        this.toggleButtonTitle = 'Toggle navigation menu';
    }
    return i18nMenuEN;
}());
exports.i18nMenuEN = i18nMenuEN;
var i18nMenuUA = (function () {
    function i18nMenuUA() {
        this.home = 'Головна';
        this.settings = 'Налаштування';
        this.about = 'Про';
        this.title = 'Баланс в кішені';
        this.toggleButtonTitle = 'Перемкнути меню навігації';
    }
    return i18nMenuUA;
}());
exports.i18nMenuUA = i18nMenuUA;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18nSettingsEN = (function () {
    function i18nSettingsEN() {
        this.accounts = 'Accounts';
        this.currency = 'Currency';
    }
    return i18nSettingsEN;
}());
exports.i18nSettingsEN = i18nSettingsEN;
var i18nSettingsUA = (function () {
    function i18nSettingsUA() {
        this.accounts = 'Рахунки';
        this.currency = 'Валюта';
    }
    return i18nSettingsUA;
}());
exports.i18nSettingsUA = i18nSettingsUA;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(19);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CurrencyModel = (function () {
    function CurrencyModel(id, name, precision, description, isDeleted) {
        if (precision === void 0) { precision = 2; }
        if (description === void 0) { description = null; }
        if (isDeleted === void 0) { isDeleted = false; }
        this.id = id;
        this.name = name;
        this.precision = precision;
        this.description = description;
        this.isDeleted = isDeleted;
    }
    return CurrencyModel;
}());
exports.CurrencyModel = CurrencyModel;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccountModel_1 = __webpack_require__(12);
var AccountMapper = (function () {
    function AccountMapper(repository) {
        this._repository = repository;
    }
    AccountMapper.prototype.toModelList = function (accounts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                ._getCurrencyList()
                .then(function (currencyList) {
                var result = accounts.map(function (account) {
                    var currency = currencyList.filter(function (x) { return x.id === account.currencyId; })[0];
                    return new AccountModel_1.AccountModel(account.id, account.name, account.balance, currency.id, currency.name, account.displayOrder, account.description, currency.precision, account.showOnHomePage, account.isDeleted);
                });
                resolve(result);
            })
                .catch(function (e) {
                reject(e);
            });
        });
    };
    AccountMapper.prototype._getCurrencyList = function () {
        return this._repository.query('Currency', null);
    };
    return AccountMapper;
}());
exports.AccountMapper = AccountMapper;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domain_1 = __webpack_require__(11);
var xtypescript_1 = __webpack_require__(6);
var AccountService = (function () {
    function AccountService(repository, mapper) {
        this.repository = repository;
        this.mapper = mapper;
        this.storageName = 'Account';
    }
    AccountService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                .repository
                .query(_this.storageName)
                .then(function (accounts) {
                var result = accounts.sort(function (a, b) {
                    if (a.name > b.name)
                        return 1;
                    if (a.name < b.name)
                        return -1;
                    return 0;
                });
                _this
                    .mapper
                    .toModelList(result)
                    .then(function (models) { return resolve(models); })
                    .catch(function (e) { return reject(e); });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    AccountService.prototype.save = function (account) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (account.id) {
                _this
                    .repository
                    .getById(_this.storageName, account.id)
                    .then(function (updateAccount) {
                    updateAccount.name = account.name;
                    updateAccount.currencyId = account.currencyId;
                    updateAccount.balance = account.balance;
                    updateAccount.description = account.description;
                    updateAccount.showOnHomePage = account.showOnHomePage;
                    updateAccount.displayOrder = account.displayOrder;
                    updateAccount.modifiedDateTime = new Date();
                    _this._adjust(updateAccount);
                    _this
                        .repository
                        .update(_this.storageName, updateAccount)
                        .then(function () { return resolve(); })
                        .catch(function (e) { return reject(e); });
                })
                    .catch(function (e) { return reject(e); });
            }
            else {
                var newAccount = new domain_1.Account(xtypescript_1.GUID.New(), account.name, account.currencyId, account.balance, account.description, account.showOnHomePage, account.displayOrder);
                if (!newAccount.currencyId) {
                    reject({ name: 'CurrencyIsMissing' });
                    return;
                }
                _this._adjust(newAccount);
                _this
                    .repository
                    .update(_this.storageName, newAccount)
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    AccountService.prototype.delete = function (id) {
        return this._updateIsDeleted(id, true);
    };
    AccountService.prototype.restore = function (id) {
        return this._updateIsDeleted(id, false);
    };
    AccountService.prototype._adjust = function (account) {
        account.balance = account.balance || 0;
        account.displayOrder = account.displayOrder || 0;
    };
    AccountService.prototype._updateIsDeleted = function (id, isDeleted) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                .repository
                .getById(_this.storageName, id)
                .then(function (account) {
                account.isDeleted = isDeleted;
                account.modifiedDateTime = new Date();
                _this
                    .repository
                    .update(_this.storageName, account)
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domain_1 = __webpack_require__(11);
var models_1 = __webpack_require__(16);
var xtypescript_1 = __webpack_require__(6);
var CurrencyService = (function () {
    function CurrencyService(repository) {
        this.repository = repository;
        this.storageName = 'Currency';
    }
    CurrencyService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                .repository
                .query(_this.storageName, null)
                .then(function (list) {
                var result = list
                    .sort(function (a, b) {
                    if (a.name > b.name)
                        return 1;
                    if (a.name < b.name)
                        return -1;
                    return 0;
                })
                    .map(function (x) { return new models_1.CurrencyModel(x.id, x.name, x.precision, x.description, x.isDeleted); });
                resolve(result);
            })
                .catch(function (e) { return reject(e); });
        });
    };
    CurrencyService.prototype.save = function (currency) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (currency.id) {
                _this
                    .repository
                    .getById(_this.storageName, currency.id)
                    .then(function (updateCurrency) {
                    updateCurrency.name = currency.name.toUpperCase();
                    updateCurrency.precision = currency.precision;
                    updateCurrency.description = currency.description;
                    updateCurrency.modifiedDateTime = new Date();
                    _this
                        .repository
                        .update(_this.storageName, updateCurrency)
                        .then(function () { return resolve(); })
                        .catch(function (e) { return reject(e); });
                })
                    .catch(function (e) { return reject(e); });
            }
            else {
                var newCurrency = new domain_1.Currency(xtypescript_1.GUID.New(), currency.name.toUpperCase(), currency.precision, currency.description);
                _this
                    .repository
                    .update(_this.storageName, newCurrency)
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    CurrencyService.prototype.delete = function (id) {
        return this._updateIsDeleted(id, true);
    };
    CurrencyService.prototype.restore = function (id) {
        return this._updateIsDeleted(id, false);
    };
    CurrencyService.prototype._updateIsDeleted = function (id, isDeleted) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                .repository
                .getById(_this.storageName, id)
                .then(function (currency) {
                currency.isDeleted = isDeleted;
                currency.modifiedDateTime = new Date();
                _this
                    .repository
                    .update(_this.storageName, currency)
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    return CurrencyService;
}());
exports.CurrencyService = CurrencyService;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomePageService = (function () {
    function HomePageService(repository, mapper) {
        this.repository = repository;
        this.mapper = mapper;
        this.storageName = 'Account';
    }
    HomePageService.prototype.getAccounts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this
                .repository
                .query(_this.storageName, function (account) { return !account.isDeleted && account.showOnHomePage; })
                .then(function (accounts) {
                var result = accounts.sort(function (a, b) {
                    if (a.displayOrder > b.displayOrder)
                        return 1;
                    if (a.displayOrder < b.displayOrder)
                        return -1;
                    return 0;
                });
                _this
                    .mapper
                    .toModelList(result)
                    .then(function (models) { return resolve(models); })
                    .catch(function (e) { return reject(e); });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    return HomePageService;
}());
exports.HomePageService = HomePageService;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var abus_1 = __webpack_require__(87);
var bus = new abus_1.ABus();
exports.bus = bus;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xtypescript_1 = __webpack_require__(6);
var IDBAdapter_1 = __webpack_require__(21);
var domain_1 = __webpack_require__(11);
var uahId = xtypescript_1.GUID.New();
var upgradeCurrency = function (db) {
    var store = db.createObjectStore('Currency', { keyPath: "id" });
    store.createIndex('name', 'name', { unique: true });
    store.add(new domain_1.Currency(uahId, 'UAH', 2, 'Ukrainian Hryvnia'));
    store.add(new domain_1.Currency(xtypescript_1.GUID.New(), 'USD', 2, 'US Dollar'));
    store.add(new domain_1.Currency(xtypescript_1.GUID.New(), 'EUR', 2, 'Euro'));
};
var upgradeAccount = function (db) {
    var store = db.createObjectStore('Account', { keyPath: "id" });
    store.createIndex('name-currency', ['name', 'currencyId'], { unique: true });
    store.add(new domain_1.Account(xtypescript_1.GUID.New(), 'Wallet', uahId, 0, null, true, 1));
    store.add(new domain_1.Account(xtypescript_1.GUID.New(), 'Card', uahId, 0, null, true, 2));
    store.add(new domain_1.Account(xtypescript_1.GUID.New(), 'Reserved', uahId, 0, null, true, 3));
    store.add(new domain_1.Account(xtypescript_1.GUID.New(), 'Expense', uahId));
    store.add(new domain_1.Account(xtypescript_1.GUID.New(), 'Income', uahId));
};
exports.idbAdapter = new IDBAdapter_1.IDBAdapter('BiP2', 1, function (db) {
    upgradeCurrency(db);
    upgradeAccount(db);
});
exports.idbAdapter.get();


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IDBRepository_1 = __webpack_require__(22);
var db_1 = __webpack_require__(82);
var AccountMapper_1 = __webpack_require__(77);
var CurrencyService_1 = __webpack_require__(79);
var AccountService_1 = __webpack_require__(78);
var HomePageService_1 = __webpack_require__(80);
var iocRegistry = (function () {
    function iocRegistry(resolve) {
        this.resolve = resolve;
    }
    return iocRegistry;
}());
exports.iocRegistry = iocRegistry;
var ioc = {
    IIDBAdapter: new iocRegistry(function () { return db_1.idbAdapter; }),
    IIDBRepository: new iocRegistry(function () { return new IDBRepository_1.IDBRepository(ioc.IIDBAdapter.resolve()); }),
    IAccountMapper: new iocRegistry(function () { return new AccountMapper_1.AccountMapper(ioc.IIDBRepository.resolve()); }),
    ICurrencyService: new iocRegistry(function () { return new CurrencyService_1.CurrencyService(ioc.IIDBRepository.resolve()); }),
    IAccountService: new iocRegistry(function () { return new AccountService_1.AccountService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve()); }),
    IHomePageService: new iocRegistry(function () { return new HomePageService_1.HomePageService(ioc.IIDBRepository.resolve(), ioc.IAccountMapper.resolve()); }),
};
exports.ioc = ioc;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i18n_1 = __webpack_require__(15);
var commands_1 = __webpack_require__(2);
var pages_1 = __webpack_require__(17);
var savedState = null;
var defaultState = {
    page: {
        history: [],
        data: null,
        isDirty: false
    },
    i18n: i18n_1.i18n.EN
};
defaultState.page.history.push(new commands_1.ChangePage(pages_1.pages.HomePage.name));
if (localStorage.state) {
    savedState = JSON.parse(localStorage.state);
}
exports.state = savedState === null ? defaultState : savedState;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/images/32c036d7cc31042f52f9947e878d644e.gif";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/images/143a027b825f9615a3434046020ba80c.gif";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["abus"] = factory();
	else
		root["abus"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ABus = (function () {
    function ABus() {
        this._subscriptions = [];
    }
    ABus.prototype.Handle = function (type, handler) {
        this._subscriptions.push({
            type: type.name,
            handler: handler
        });
        return this;
    };
    ABus.prototype.Send = function (message) {
        this._subscriptions
            .filter(function (x) { return x.type == message.constructor.name; })
            .forEach(function (x) { return x.handler(message); });
        return this;
    };
    ABus.prototype.SendAsync = function (message, timeout) {
        if (timeout === void 0) { timeout = 10; }
        this._subscriptions
            .filter(function (x) { return x.type == message.constructor.name; })
            .forEach(function (x) {
            var handler = x.handler;
            setTimeout(function () { return handler(message); }, timeout);
        });
        return this;
    };
    ABus.prototype.Unsubscribe = function (handler) {
        this._subscriptions = this._subscriptions.filter(function (x) { return x.handler !== handler; });
        return this;
    };
    return ABus;
}());
exports.ABus = ABus;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var abus_1 = __webpack_require__(0);
exports.ABus = abus_1.ABus;


/***/ })
/******/ ]);
});


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.js.map