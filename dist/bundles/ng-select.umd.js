(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/operators'), require('rxjs'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@ng-select/ng-select', ['exports', '@angular/core', '@angular/common', 'rxjs/operators', 'rxjs', '@angular/forms'], factory) :
    (factory((global['ng-select'] = global['ng-select'] || {}, global['ng-select']['ng-select'] = {}),global.ng.core,global.ng.common,global.rxjs.operators,global.rxjs,global.ng.forms));
}(this, (function (exports,i0,common,operators,rxjs,forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionTemplateDirective = /** @class */ (function () {
        function NgOptionTemplateDirective(template) {
            this.template = template;
        }
        NgOptionTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-option-tmp]' },] }
        ];
        /** @nocollapse */
        NgOptionTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgOptionTemplateDirective;
    }());
    var NgOptgroupTemplateDirective = /** @class */ (function () {
        function NgOptgroupTemplateDirective(template) {
            this.template = template;
        }
        NgOptgroupTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-optgroup-tmp]' },] }
        ];
        /** @nocollapse */
        NgOptgroupTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgOptgroupTemplateDirective;
    }());
    var NgLabelTemplateDirective = /** @class */ (function () {
        function NgLabelTemplateDirective(template) {
            this.template = template;
        }
        NgLabelTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-label-tmp]' },] }
        ];
        /** @nocollapse */
        NgLabelTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgLabelTemplateDirective;
    }());
    var NgMultiLabelTemplateDirective = /** @class */ (function () {
        function NgMultiLabelTemplateDirective(template) {
            this.template = template;
        }
        NgMultiLabelTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-multi-label-tmp]' },] }
        ];
        /** @nocollapse */
        NgMultiLabelTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgMultiLabelTemplateDirective;
    }());
    var NgHeaderTemplateDirective = /** @class */ (function () {
        function NgHeaderTemplateDirective(template) {
            this.template = template;
        }
        NgHeaderTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-header-tmp]' },] }
        ];
        /** @nocollapse */
        NgHeaderTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgHeaderTemplateDirective;
    }());
    var NgFooterTemplateDirective = /** @class */ (function () {
        function NgFooterTemplateDirective(template) {
            this.template = template;
        }
        NgFooterTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-footer-tmp]' },] }
        ];
        /** @nocollapse */
        NgFooterTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgFooterTemplateDirective;
    }());
    var NgNotFoundTemplateDirective = /** @class */ (function () {
        function NgNotFoundTemplateDirective(template) {
            this.template = template;
        }
        NgNotFoundTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-notfound-tmp]' },] }
        ];
        /** @nocollapse */
        NgNotFoundTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgNotFoundTemplateDirective;
    }());
    var NgTypeToSearchTemplateDirective = /** @class */ (function () {
        function NgTypeToSearchTemplateDirective(template) {
            this.template = template;
        }
        NgTypeToSearchTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] }
        ];
        /** @nocollapse */
        NgTypeToSearchTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgTypeToSearchTemplateDirective;
    }());
    var NgLoadingTextTemplateDirective = /** @class */ (function () {
        function NgLoadingTextTemplateDirective(template) {
            this.template = template;
        }
        NgLoadingTextTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] }
        ];
        /** @nocollapse */
        NgLoadingTextTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgLoadingTextTemplateDirective;
    }());
    var NgTagTemplateDirective = /** @class */ (function () {
        function NgTagTemplateDirective(template) {
            this.template = template;
        }
        NgTagTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-tag-tmp]' },] }
        ];
        /** @nocollapse */
        NgTagTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgTagTemplateDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ConsoleService = /** @class */ (function () {
        function ConsoleService() {
        }
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleService.prototype.warn = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                console.warn(message);
            };
        ConsoleService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ ConsoleService.ngInjectableDef = i0.defineInjectable({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
        return ConsoleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function isDefined(value) {
        return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isObject(value) {
        return typeof value === 'object' && isDefined(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isPromise(value) {
        return value instanceof Promise;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isFunction(value) {
        return value instanceof Function;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var diacritics = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    /**
     * @param {?} text
     * @return {?}
     */
    function stripSpecialChars(text) {
        /** @type {?} */
        var match = function (a) {
            return diacritics[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function newId() {
        // First character is an 'a', it's good practice to tag id to begin with a letter
        return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
            /** @type {?} */
            var val = Math.random() * 16 | 0;
            return val.toString(16);
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ItemsList = /** @class */ (function () {
        function ItemsList(_ngSelect, _selectionModel) {
            this._ngSelect = _ngSelect;
            this._selectionModel = _selectionModel;
            this._items = [];
            this._filteredItems = [];
            this._markedIndex = -1;
        }
        Object.defineProperty(ItemsList.prototype, "items", {
            get: /**
             * @return {?}
             */ function () {
                return this._items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "filteredItems", {
            get: /**
             * @return {?}
             */ function () {
                return this._filteredItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "markedIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this._markedIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectionModel.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "markedItem", {
            get: /**
             * @return {?}
             */ function () {
                return this._filteredItems[this._markedIndex];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var i = this.selectedItems.length - 1;
                for (; i >= 0; i--) {
                    /** @type {?} */
                    var item = this.selectedItems[i];
                    if (!item.disabled) {
                        return item;
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} items
         * @return {?}
         */
        ItemsList.prototype.setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                var _this = this;
                this._items = items.map(function (item, index) { return _this.mapItem(item, index); });
                if (this._ngSelect.groupBy) {
                    this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
                    this._items = this._flatten(this._groups);
                }
                else {
                    this._groups = new Map();
                    this._groups.set(undefined, this._items);
                }
                this._filteredItems = __spread(this._items);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (item.selected || this.maxItemsSelected) {
                    return;
                }
                /** @type {?} */
                var multiple = this._ngSelect.multiple;
                if (!multiple) {
                    this.clearSelected();
                }
                this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
                if (this._ngSelect.hideSelected && multiple) {
                    this._hideSelected(item);
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.unselect = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item.selected) {
                    return;
                }
                this._selectionModel.unselect(item, this._ngSelect.multiple);
                if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
                    this._showSelected(item);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ItemsList.prototype.findItem = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                /** @type {?} */
                var findBy;
                if (this._ngSelect.compareWith) {
                    findBy = function (item) { return _this._ngSelect.compareWith(item.value, value); };
                }
                else if (this._ngSelect.bindValue) {
                    findBy = function (item) { return !item.children && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; };
                }
                else {
                    findBy = function (item) {
                        return item.value === value ||
                            !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel);
                    };
                }
                return this._items.find(function (item) { return findBy(item); });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.addItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var option = this.mapItem(item, this._items.length);
                this._items.push(option);
                this._filteredItems.push(option);
                return option;
            };
        /**
         * @param {?=} keepDisabled
         * @return {?}
         */
        ItemsList.prototype.clearSelected = /**
         * @param {?=} keepDisabled
         * @return {?}
         */
            function (keepDisabled) {
                if (keepDisabled === void 0) {
                    keepDisabled = false;
                }
                this._selectionModel.clear(keepDisabled);
                this._items.forEach(function (item) {
                    item.selected = keepDisabled && item.selected && item.disabled;
                    item.marked = false;
                });
                if (this._ngSelect.hideSelected) {
                    this.resetFilteredItems();
                }
            };
        /**
         * @param {?} term
         * @return {?}
         */
        ItemsList.prototype.findByLabel = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
                term = stripSpecialChars(term).toLocaleLowerCase();
                return this.filteredItems.find(function (item) {
                    /** @type {?} */
                    var label = stripSpecialChars(item.label).toLocaleLowerCase();
                    return label.substr(0, term.length) === term;
                });
            };
        /**
         * @param {?} term
         * @return {?}
         */
        ItemsList.prototype.filter = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
                var e_1, _a;
                if (!term) {
                    this.resetFilteredItems();
                    return;
                }
                this._filteredItems = [];
                term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
                /** @type {?} */
                var match = this._ngSelect.searchFn || this._defaultSearchFn;
                /** @type {?} */
                var hideSelected = this._ngSelect.hideSelected;
                var _loop_1 = function (key) {
                    var e_2, _a, _b;
                    /** @type {?} */
                    var matchedItems = [];
                    try {
                        for (var _c = __values(this_1._groups.get(key)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var item = _d.value;
                            if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                                continue;
                            }
                            /** @type {?} */
                            var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                            if (match(term, searchItem)) {
                                matchedItems.push(item);
                            }
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return))
                                _a.call(_c);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                    if (matchedItems.length > 0) {
                        var _e = __read(matchedItems.slice(-1), 1), last_1 = _e[0];
                        if (last_1.parent) {
                            /** @type {?} */
                            var head = this_1._items.find(function (x) { return x === last_1.parent; });
                            this_1._filteredItems.push(head);
                        }
                        (_b = this_1._filteredItems).push.apply(_b, __spread(matchedItems));
                    }
                };
                var this_1 = this;
                try {
                    for (var _b = __values(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _loop_1(key);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.resetFilteredItems = /**
         * @return {?}
         */
            function () {
                if (this._filteredItems.length === this._items.length) {
                    return;
                }
                if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
                    this._filteredItems = this._items.filter(function (x) { return !x.selected; });
                }
                else {
                    this._filteredItems = this._items;
                }
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.unmarkItem = /**
         * @return {?}
         */
            function () {
                this._markedIndex = -1;
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.markNextItem = /**
         * @return {?}
         */
            function () {
                this._stepToItem(+1);
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.markPreviousItem = /**
         * @return {?}
         */
            function () {
                this._stepToItem(-1);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.markItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._markedIndex = this._filteredItems.indexOf(item);
            };
        /**
         * @param {?=} markDefault
         * @return {?}
         */
        ItemsList.prototype.markSelectedOrDefault = /**
         * @param {?=} markDefault
         * @return {?}
         */
            function (markDefault) {
                if (this._filteredItems.length === 0) {
                    return;
                }
                /** @type {?} */
                var indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this.lastSelectedItem);
                if (this.lastSelectedItem && indexOfLastSelected > -1) {
                    this._markedIndex = indexOfLastSelected;
                }
                else {
                    if (this._ngSelect.excludeGroupsFromDefaultSelection) {
                        this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled && !x.children; }) : -1;
                    }
                    else {
                        this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled; }) : -1;
                    }
                }
            };
        /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */
        ItemsList.prototype.resolveNested = /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */
            function (option, key) {
                if (!isObject(option)) {
                    return option;
                }
                if (key.indexOf('.') === -1) {
                    return option[key];
                }
                else {
                    /** @type {?} */
                    var keys = key.split('.');
                    /** @type {?} */
                    var value = option;
                    for (var i = 0, len = keys.length; i < len; ++i) {
                        if (value == null) {
                            return null;
                        }
                        value = value[keys[i]];
                    }
                    return value;
                }
            };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        ItemsList.prototype.mapItem = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                /** @type {?} */
                var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
                /** @type {?} */
                var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
                return {
                    index: index,
                    label: isDefined(label) ? label.toString() : '',
                    value: value,
                    disabled: item.disabled,
                    htmlId: newId(),
                };
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.mapSelectedItems = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var e_3, _a;
                /** @type {?} */
                var multiple = this._ngSelect.multiple;
                try {
                    for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var selected = _c.value;
                        /** @type {?} */
                        var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                        /** @type {?} */
                        var item = isDefined(value) ? this.findItem(value) : null;
                        this._selectionModel.unselect(selected, multiple);
                        this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
                if (this._ngSelect.hideSelected) {
                    this._filteredItems = this.filteredItems.filter(function (x) { return _this.selectedItems.indexOf(x) === -1; });
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype._showSelected = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var e_4, _a;
                this._filteredItems.push(item);
                if (item.parent) {
                    /** @type {?} */
                    var parent_1 = item.parent;
                    /** @type {?} */
                    var parentExists = this._filteredItems.find(function (x) { return x === parent_1; });
                    if (!parentExists) {
                        this._filteredItems.push(parent_1);
                    }
                }
                else if (item.children) {
                    try {
                        for (var _b = __values(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var child = _c.value;
                            child.selected = false;
                            this._filteredItems.push(child);
                        }
                    }
                    catch (e_4_1) {
                        e_4 = { error: e_4_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_4)
                                throw e_4.error;
                        }
                    }
                }
                this._filteredItems = __spread(this._filteredItems.sort(function (a, b) { return (a.index - b.index); }));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype._hideSelected = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._filteredItems = this._filteredItems.filter(function (x) { return x !== item; });
                if (item.parent) {
                    /** @type {?} */
                    var children = item.parent.children;
                    if (children.every(function (x) { return x.selected; })) {
                        this._filteredItems = this._filteredItems.filter(function (x) { return x !== item.parent; });
                    }
                }
                else if (item.children) {
                    this._filteredItems = this.filteredItems.filter(function (x) { return x.parent !== item; });
                }
            };
        /**
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */
        ItemsList.prototype._defaultSearchFn = /**
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */
            function (search, opt) {
                /** @type {?} */
                var label = stripSpecialChars(opt.label).toLocaleLowerCase();
                return label.indexOf(search) > -1;
            };
        /**
         * @param {?} steps
         * @return {?}
         */
        ItemsList.prototype._getNextItemIndex = /**
         * @param {?} steps
         * @return {?}
         */
            function (steps) {
                if (steps > 0) {
                    return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
                }
                return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
            };
        /**
         * @param {?} steps
         * @return {?}
         */
        ItemsList.prototype._stepToItem = /**
         * @param {?} steps
         * @return {?}
         */
            function (steps) {
                if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) { return x.disabled; })) {
                    return;
                }
                this._markedIndex = this._getNextItemIndex(steps);
                if (this.markedItem.disabled) {
                    this._stepToItem(steps);
                }
            };
        /**
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */
        ItemsList.prototype._groupBy = /**
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */
            function (items, prop) {
                var _this = this;
                var e_5, _a, e_6, _b;
                /** @type {?} */
                var groups = new Map();
                if (items.length === 0) {
                    return groups;
                }
                // Check if items are already grouped by given key.
                if (Array.isArray(items[0].value[ /** @type {?} */(prop)])) {
                    try {
                        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                            var item = items_1_1.value;
                            /** @type {?} */
                            var children = (item.value[ /** @type {?} */(prop)] || []).map(function (x, index) { return _this.mapItem(x, index); });
                            groups.set(item, children);
                        }
                    }
                    catch (e_5_1) {
                        e_5 = { error: e_5_1 };
                    }
                    finally {
                        try {
                            if (items_1_1 && !items_1_1.done && (_a = items_1.return))
                                _a.call(items_1);
                        }
                        finally {
                            if (e_5)
                                throw e_5.error;
                        }
                    }
                    return groups;
                }
                /** @type {?} */
                var isFnKey = isFunction(this._ngSelect.groupBy);
                /** @type {?} */
                var keyFn = function (item) {
                    /** @type {?} */
                    var key = isFnKey ? ( /** @type {?} */(prop))(item.value) : item.value[ /** @type {?} */(prop)];
                    return isDefined(key) ? key : undefined;
                };
                try {
                    // Group items by key.
                    for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                        var item = items_2_1.value;
                        /** @type {?} */
                        var key = keyFn(item);
                        /** @type {?} */
                        var group = groups.get(key);
                        if (group) {
                            group.push(item);
                        }
                        else {
                            groups.set(key, [item]);
                        }
                    }
                }
                catch (e_6_1) {
                    e_6 = { error: e_6_1 };
                }
                finally {
                    try {
                        if (items_2_1 && !items_2_1.done && (_b = items_2.return))
                            _b.call(items_2);
                    }
                    finally {
                        if (e_6)
                            throw e_6.error;
                    }
                }
                return groups;
            };
        /**
         * @param {?} groups
         * @return {?}
         */
        ItemsList.prototype._flatten = /**
         * @param {?} groups
         * @return {?}
         */
            function (groups) {
                var e_7, _a;
                /** @type {?} */
                var isGroupByFn = isFunction(this._ngSelect.groupBy);
                /** @type {?} */
                var items = [];
                /** @type {?} */
                var withoutGroup = groups.get(undefined) || [];
                items.push.apply(items, __spread(withoutGroup));
                /** @type {?} */
                var i = withoutGroup.length;
                var _loop_2 = function (key) {
                    if (!isDefined(key)) {
                        return "continue";
                    }
                    /** @type {?} */
                    var isObjectKey = isObject(key);
                    /** @type {?} */
                    var parent_2 = {
                        label: isObjectKey ? '' : /** @type {?} */ (key),
                        children: undefined,
                        parent: null,
                        index: i++,
                        disabled: !this_2._ngSelect.selectableGroup,
                        htmlId: newId(),
                    };
                    /** @type {?} */
                    var groupKey = isGroupByFn ? this_2._ngSelect.bindLabel : /** @type {?} */ (this_2._ngSelect.groupBy);
                    /** @type {?} */
                    var groupValue = this_2._ngSelect.groupValue || (function () {
                        var _a;
                        if (isObjectKey) {
                            return ( /** @type {?} */(key)).value;
                        }
                        return _a = {}, _a[groupKey] = key, _a;
                    });
                    /** @type {?} */
                    var children = groups.get(key).map(function (x) {
                        x.parent = parent_2;
                        x.children = undefined;
                        x.index = i++;
                        return x;
                    });
                    parent_2.children = children;
                    parent_2.value = groupValue(key, children.map(function (x) { return x.value; }));
                    items.push(parent_2);
                    items.push.apply(items, __spread(children));
                };
                var this_2 = this;
                try {
                    for (var _b = __values(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _loop_2(key);
                    }
                }
                catch (e_7_1) {
                    e_7 = { error: e_7_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_7)
                            throw e_7.error;
                    }
                }
                return items;
            };
        return ItemsList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var KeyCode = {
        Tab: 9,
        Enter: 13,
        Esc: 27,
        Space: 32,
        ArrowUp: 38,
        ArrowDown: 40,
        Backspace: 8,
    };
    KeyCode[KeyCode.Tab] = 'Tab';
    KeyCode[KeyCode.Enter] = 'Enter';
    KeyCode[KeyCode.Esc] = 'Esc';
    KeyCode[KeyCode.Space] = 'Space';
    KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
    KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
    KeyCode[KeyCode.Backspace] = 'Backspace';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WindowService = /** @class */ (function () {
        function WindowService() {
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        WindowService.prototype.requestAnimationFrame = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                return window.requestAnimationFrame(fn);
            };
        /**
         * @param {?} handler
         * @param {?} timeout
         * @return {?}
         */
        WindowService.prototype.setTimeout = /**
         * @param {?} handler
         * @param {?} timeout
         * @return {?}
         */
            function (handler, timeout) {
                return window.setTimeout(handler, timeout);
            };
        WindowService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ WindowService.ngInjectableDef = i0.defineInjectable({ factory: function WindowService_Factory() { return new WindowService(); }, token: WindowService, providedIn: "root" });
        return WindowService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var VirtualScrollService = /** @class */ (function () {
        function VirtualScrollService() {
        }
        /**
         * @param {?} d
         * @param {?} dropdownEl
         * @param {?} bufferAmount
         * @return {?}
         */
        VirtualScrollService.prototype.calculateItems = /**
         * @param {?} d
         * @param {?} dropdownEl
         * @param {?} bufferAmount
         * @return {?}
         */
            function (d, dropdownEl, bufferAmount) {
                /** @type {?} */
                var scrollHeight = d.childHeight * d.itemsLength;
                if (dropdownEl.scrollTop > scrollHeight) {
                    dropdownEl.scrollTop = scrollHeight;
                }
                /** @type {?} */
                var scrollTop = Math.max(0, dropdownEl.scrollTop);
                /** @type {?} */
                var indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
                /** @type {?} */
                var end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
                /** @type {?} */
                var maxStartEnd = end;
                /** @type {?} */
                var maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
                /** @type {?} */
                var start = Math.min(maxStart, Math.floor(indexByScrollTop));
                /** @type {?} */
                var topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
                topPadding = !isNaN(topPadding) ? topPadding : 0;
                start = !isNaN(start) ? start : -1;
                end = !isNaN(end) ? end : -1;
                start -= bufferAmount;
                start = Math.max(0, start);
                end += bufferAmount;
                end = Math.min(d.itemsLength, end);
                return {
                    topPadding: topPadding,
                    scrollHeight: scrollHeight,
                    start: start,
                    end: end
                };
            };
        /**
         * @param {?} itemsLength
         * @param {?} index
         * @param {?} panelEl
         * @param {?} contentEl
         * @return {?}
         */
        VirtualScrollService.prototype.calculateDimensions = /**
         * @param {?} itemsLength
         * @param {?} index
         * @param {?} panelEl
         * @param {?} contentEl
         * @return {?}
         */
            function (itemsLength, index, panelEl, contentEl) {
                /** @type {?} */
                var panelRect = panelEl.getBoundingClientRect();
                /** @type {?} */
                var itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
                    width: panelRect.width,
                    height: panelRect.height,
                    top: 0,
                };
                /** @type {?} */
                var itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
                return {
                    itemsLength: itemsLength,
                    viewWidth: panelRect.width,
                    viewHeight: panelRect.height,
                    childWidth: itemRect.width,
                    childHeight: itemRect.height,
                    itemsPerCol: itemsPerCol,
                };
            };
        VirtualScrollService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ VirtualScrollService.ngInjectableDef = i0.defineInjectable({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });
        return VirtualScrollService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOP_CSS_CLASS = 'ng-select-top';
    /** @type {?} */
    var BOTTOM_CSS_CLASS = 'ng-select-bottom';
    var NgDropdownPanelComponent = /** @class */ (function () {
        function NgDropdownPanelComponent(_renderer, _zone, _virtualScrollService, _window, _elementRef, _document) {
            this._renderer = _renderer;
            this._zone = _zone;
            this._virtualScrollService = _virtualScrollService;
            this._window = _window;
            this._document = _document;
            this.items = [];
            this.position = 'auto';
            this.bufferAmount = 4;
            this.virtualScroll = false;
            this.filterValue = null;
            this.update = new i0.EventEmitter();
            this.scroll = new i0.EventEmitter();
            this.scrollToEnd = new i0.EventEmitter();
            this.outsideClick = new i0.EventEmitter();
            this._destroy$ = new rxjs.Subject();
            this._startupLoop = true;
            this._isScrolledToMarked = false;
            this._scrollToEndFired = false;
            this._disposeScrollListener = function () { };
            this._disposeDocumentResizeListener = function () { };
            this._dropdown = _elementRef.nativeElement;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.handleMousedown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                /** @type {?} */
                var target = /** @type {?} */ ($event.target);
                if (target.tagName === 'INPUT') {
                    return;
                }
                $event.preventDefault();
                $event.stopPropagation();
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._select = this._dropdown.parentElement;
                this._handleScroll();
                if (this._document) {
                    rxjs.merge(rxjs.fromEvent(this._document, 'touchstart', { capture: true }), rxjs.fromEvent(this._document, 'mousedown', { capture: true }))
                        .pipe(operators.takeUntil(this._destroy$))
                        .subscribe(function ($event) { return _this._handleOutsideClick($event); });
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["items"]) {
                    this._isScrolledToMarked = false;
                    this._handleItemsChange(changes["items"]);
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._disposeDocumentResizeListener();
                this._disposeScrollListener();
                this._destroy$.next();
                this._destroy$.complete();
                if (this.appendTo) {
                    this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._whenContentReady().then(function () {
                    if (_this.appendTo) {
                        _this._appendDropdown();
                        _this._handleDocumentResize();
                    }
                    _this.updateDropdownPosition();
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(function (resolve) {
                    _this._zone.runOutsideAngular(function () {
                        _this._window.requestAnimationFrame(function () {
                            _this._updateItems().then(resolve);
                        });
                    });
                });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.scrollInto = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item) {
                    return;
                }
                /** @type {?} */
                var index = this.items.indexOf(item);
                if (index < 0 || index >= this.items.length) {
                    return;
                }
                /** @type {?} */
                var d = this._calculateDimensions(this.virtualScroll ? 0 : index);
                /** @type {?} */
                var scrollEl = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
                if (this.virtualScroll) {
                    scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
                }
                else {
                    /** @type {?} */
                    var contentEl = this.contentElementRef.nativeElement;
                    /** @type {?} */
                    var childrenHeight = Array.from(contentEl.children).slice(0, index).reduce(function (c, n) { return c + n.clientHeight; }, 0);
                    scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.scrollIntoTag = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var d = this._calculateDimensions();
                el.scrollTop = d.childHeight * (d.itemsLength + 1);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.updateDropdownPosition = /**
         * @return {?}
         */
            function () {
                this._currentPosition = this._calculateCurrentPosition(this._dropdown);
                if (this._currentPosition === 'top') {
                    this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
                    this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
                    this._renderer.addClass(this._select, TOP_CSS_CLASS);
                    this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
                }
                else {
                    this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
                    this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
                    this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
                    this._renderer.removeClass(this._select, TOP_CSS_CLASS);
                }
                if (this.appendTo) {
                    this._updateAppendedDropdownPosition();
                }
                this._dropdown.style.opacity = '1';
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleOutsideClick = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this._select.contains($event.target)) {
                    return;
                }
                if (this._dropdown.contains($event.target)) {
                    return;
                }
                /** @type {?} */
                var path = $event.path || ($event.composedPath && $event.composedPath());
                if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
                    return;
                }
                this.outsideClick.emit();
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleScroll = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', function () {
                    _this.refresh();
                    _this._fireScrollToEnd();
                });
            };
        /**
         * @param {?} items
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleItemsChange = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                var _this = this;
                this._scrollToEndFired = false;
                this._previousStart = undefined;
                this._previousEnd = undefined;
                if (items !== undefined && items.previousValue === undefined ||
                    (items.previousValue !== undefined && items.previousValue.length === 0)) {
                    this._startupLoop = true;
                }
                this.items = items.currentValue || [];
                this.refresh().then(function () {
                    if (_this.appendTo && _this._currentPosition === 'top') {
                        _this._updateAppendedDropdownPosition();
                    }
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateItems = /**
         * @return {?}
         */
            function () {
                var _this = this;
                i0.NgZone.assertNotInAngularZone();
                if (!this.virtualScroll) {
                    this._zone.run(function () {
                        _this.update.emit(_this.items.slice());
                        _this._scrollToMarked();
                    });
                    return Promise.resolve();
                }
                /** @type {?} */
                var loop = function (resolve) {
                    /** @type {?} */
                    var d = _this._calculateDimensions();
                    /** @type {?} */
                    var res = _this._virtualScrollService.calculateItems(d, _this.scrollElementRef.nativeElement, _this.bufferAmount || 0);
                    ( /** @type {?} */(_this.paddingElementRef.nativeElement)).style.height = res.scrollHeight + "px";
                    ( /** @type {?} */(_this.contentElementRef.nativeElement)).style.transform = 'translateY(' + res.topPadding + 'px)';
                    if (res.start !== _this._previousStart || res.end !== _this._previousEnd) {
                        _this._zone.run(function () {
                            _this.update.emit(_this.items.slice(res.start, res.end));
                            _this.scroll.emit({ start: res.start, end: res.end });
                        });
                        _this._previousStart = res.start;
                        _this._previousEnd = res.end;
                        if (_this._startupLoop === true) {
                            loop(resolve);
                        }
                    }
                    else if (_this._startupLoop === true) {
                        _this._startupLoop = false;
                        _this._scrollToMarked();
                        resolve();
                    }
                };
                return new Promise(function (resolve) { return loop(resolve); });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
         * @return {?}
         */
            function () {
                if (this._scrollToEndFired) {
                    return;
                }
                /** @type {?} */
                var scroll = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var padding = this.virtualScroll ?
                    this.paddingElementRef.nativeElement :
                    this.contentElementRef.nativeElement;
                if (scroll.scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
                    this.scrollToEnd.emit();
                    this._scrollToEndFired = true;
                }
            };
        /**
         * @param {?=} index
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._calculateDimensions = /**
         * @param {?=} index
         * @return {?}
         */
            function (index) {
                if (index === void 0) {
                    index = 0;
                }
                return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleDocumentResize = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.appendTo) {
                    return;
                }
                this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', function () {
                    _this._updateAppendedDropdownPosition();
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._scrollToMarked = /**
         * @return {?}
         */
            function () {
                if (this._isScrolledToMarked || !this.markedItem) {
                    return;
                }
                this._isScrolledToMarked = true;
                this.scrollInto(this.markedItem);
            };
        /**
         * @param {?} dropdownEl
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
         * @param {?} dropdownEl
         * @return {?}
         */
            function (dropdownEl) {
                if (this.position !== 'auto') {
                    return this.position;
                }
                /** @type {?} */
                var selectRect = this._select.getBoundingClientRect();
                /** @type {?} */
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                /** @type {?} */
                var offsetTop = selectRect.top + window.pageYOffset;
                /** @type {?} */
                var height = selectRect.height;
                /** @type {?} */
                var dropdownHeight = dropdownEl.getBoundingClientRect().height;
                if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
                    return 'top';
                }
                else {
                    return 'bottom';
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._appendDropdown = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = document.querySelector(this.appendTo);
                if (!parent) {
                    throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
                }
                parent.appendChild(this._dropdown);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateAppendedDropdownPosition = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = document.querySelector(this.appendTo) || document.body;
                this._dropdown.style.display = 'none';
                /** @type {?} */
                var selectRect = this._select.getBoundingClientRect();
                /** @type {?} */
                var boundingRect = parent.getBoundingClientRect();
                this._dropdown.style.display = '';
                /** @type {?} */
                var offsetTop = selectRect.top - boundingRect.top;
                /** @type {?} */
                var offsetLeft = selectRect.left - boundingRect.left;
                /** @type {?} */
                var topDelta = this._currentPosition === 'bottom' ? selectRect.height : -this._dropdown.clientHeight;
                this._dropdown.style.top = offsetTop + topDelta + 'px';
                this._dropdown.style.bottom = 'auto';
                this._dropdown.style.left = offsetLeft + 'px';
                this._dropdown.style.width = selectRect.width + 'px';
                this._dropdown.style.minWidth = selectRect.width + 'px';
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._whenContentReady = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.items.length === 0) {
                    return Promise.resolve();
                }
                /** @type {?} */
                var ready = function (resolve) {
                    /** @type {?} */
                    var ngOption = _this._dropdown.querySelector('.ng-option');
                    if (ngOption) {
                        resolve();
                        return;
                    }
                    _this._zone.runOutsideAngular(function () {
                        setTimeout(function () { return ready(resolve); }, 5);
                    });
                };
                return new Promise(function (resolve) { return ready(resolve); });
            };
        NgDropdownPanelComponent.decorators = [
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        selector: 'ng-dropdown-panel',
                        template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length > 0\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
                    }] }
        ];
        /** @nocollapse */
        NgDropdownPanelComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.NgZone },
                { type: VirtualScrollService },
                { type: WindowService },
                { type: i0.ElementRef },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        NgDropdownPanelComponent.propDecorators = {
            items: [{ type: i0.Input }],
            markedItem: [{ type: i0.Input }],
            position: [{ type: i0.Input }],
            appendTo: [{ type: i0.Input }],
            bufferAmount: [{ type: i0.Input }],
            virtualScroll: [{ type: i0.Input }],
            headerTemplate: [{ type: i0.Input }],
            footerTemplate: [{ type: i0.Input }],
            filterValue: [{ type: i0.Input }],
            update: [{ type: i0.Output }],
            scroll: [{ type: i0.Output }],
            scrollToEnd: [{ type: i0.Output }],
            outsideClick: [{ type: i0.Output }],
            contentElementRef: [{ type: i0.ViewChild, args: ['content', { read: i0.ElementRef },] }],
            scrollElementRef: [{ type: i0.ViewChild, args: ['scroll', { read: i0.ElementRef },] }],
            paddingElementRef: [{ type: i0.ViewChild, args: ['padding', { read: i0.ElementRef },] }],
            handleMousedown: [{ type: i0.HostListener, args: ['mousedown', ['$event'],] }]
        };
        return NgDropdownPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionComponent = /** @class */ (function () {
        function NgOptionComponent(elementRef) {
            this.elementRef = elementRef;
            this.stateChange$ = new rxjs.Subject();
            this._disabled = false;
        }
        Object.defineProperty(NgOptionComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) { this._disabled = this._isDisabled(value); },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgOptionComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["disabled"]) {
                    this.stateChange$.next({
                        value: this.value,
                        disabled: this._disabled
                    });
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgOptionComponent.prototype._isDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value != null && "" + value !== 'false';
            };
        NgOptionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ng-option',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        NgOptionComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        NgOptionComponent.propDecorators = {
            value: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }]
        };
        return NgOptionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgSelectConfig = /** @class */ (function () {
        function NgSelectConfig() {
            this.notFoundText = 'No items found';
            this.typeToSearchText = 'Type to search';
            this.addTagText = 'Add item';
            this.loadingText = 'Loading...';
            this.clearAllText = 'Clear all';
            this.disableVirtualScroll = true;
            this.openOnEnter = true;
        }
        NgSelectConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgSelectConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
        return NgSelectConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SELECTION_MODEL_FACTORY = new i0.InjectionToken('ng-select-selection-model');
    var NgSelectComponent = /** @class */ (function () {
        function NgSelectComponent(classes, tabIndex, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
            var _this = this;
            this.classes = classes;
            this.tabIndex = tabIndex;
            this.autoFocus = autoFocus;
            this._cd = _cd;
            this._console = _console;
            this.clearable = true;
            this.markFirst = true;
            this.dropdownPosition = 'auto';
            this.loading = false;
            this.closeOnSelect = true;
            this.hideSelected = false;
            this.selectOnTab = false;
            this.bufferAmount = 4;
            this.selectableGroup = false;
            this.selectableGroupAsModel = true;
            this.searchFn = null;
            this.excludeGroupsFromDefaultSelection = false;
            this.clearOnBackspace = true;
            this.labelForId = null;
            this.autoCorrect = 'off';
            this.autoCapitalize = 'off';
            this.multiple = false;
            this.addTag = false;
            this.searchable = true;
            this.isOpen = false;
            // output events
            this.blurEvent = new i0.EventEmitter();
            this.focusEvent = new i0.EventEmitter();
            this.changeEvent = new i0.EventEmitter();
            this.openEvent = new i0.EventEmitter();
            this.closeEvent = new i0.EventEmitter();
            this.searchEvent = new i0.EventEmitter();
            this.clearEvent = new i0.EventEmitter();
            this.addEvent = new i0.EventEmitter();
            this.removeEvent = new i0.EventEmitter();
            this.scroll = new i0.EventEmitter();
            this.scrollToEnd = new i0.EventEmitter();
            this.disabled = false;
            this.viewPortItems = [];
            this.filterValue = null;
            this.dropdownId = newId();
            this._items = [];
            this._defaultLabel = 'label';
            this._primitive = true;
            this._pressedKeys = [];
            this._destroy$ = new rxjs.Subject();
            this._keyPress$ = new rxjs.Subject();
            this._onChange = function (_) { };
            this._onTouched = function () { };
            this.clearItem = function (item) {
                /** @type {?} */
                var option = _this.selectedItems.find(function (x) { return x.value === item; });
                _this.unselect(option);
            };
            this._mergeGlobalConfig(config);
            this.itemsList = new ItemsList(this, newSelectionModel());
            this.element = _elementRef.nativeElement;
        }
        Object.defineProperty(NgSelectComponent.prototype, "items", {
            get: /**
             * @return {?}
             */ function () { return this._items; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._itemsAreUsed = true;
                this._items = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
            get: /**
             * @return {?}
             */ function () { return this._compareWith; },
            set: /**
             * @param {?} fn
             * @return {?}
             */ function (fn) {
                if (!isFunction(fn)) {
                    throw Error('`compareWith` must be a function.');
                }
                this._compareWith = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "clearSearchOnAdd", {
            get: /**
             * @return {?}
             */ function () { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._clearSearchOnAdd = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "filtered", {
            get: /**
             * @return {?}
             */ function () { return !!this.filterValue && this.searchable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */ function () {
                return this.itemsList.selectedItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedItems.map(function (x) { return x.value; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedItems.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._handleKeyPresses();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["multiple"]) {
                    this.itemsList.clearSelected();
                }
                if (changes["items"]) {
                    this._setItems(changes["items"].currentValue || []);
                }
                if (changes["isOpen"]) {
                    this._manualOpen = isDefined(changes["isOpen"].currentValue);
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (!this._itemsAreUsed) {
                    this._setItemsFromNgOptions();
                }
                if (isDefined(this.autoFocus)) {
                    this.focus();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._destroy$.next();
                this._destroy$.complete();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleKeyDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (KeyCode[$event.which]) {
                    switch ($event.which) {
                        case KeyCode.ArrowDown:
                            this._handleArrowDown($event);
                            break;
                        case KeyCode.ArrowUp:
                            this._handleArrowUp($event);
                            break;
                        case KeyCode.Space:
                            this._handleSpace($event);
                            break;
                        case KeyCode.Enter:
                            this._handleEnter($event);
                            break;
                        case KeyCode.Tab:
                            this._handleTab($event);
                            break;
                        case KeyCode.Esc:
                            this.close();
                            $event.preventDefault();
                            $event.stopPropagation();
                            break;
                        case KeyCode.Backspace:
                            this._handleBackspace();
                            break;
                    }
                }
                else if ($event.key && $event.key.length === 1) {
                    this._keyPress$.next($event.key.toLocaleLowerCase());
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleMousedown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                /** @type {?} */
                var target = /** @type {?} */ ($event.target);
                if (target.tagName !== 'INPUT') {
                    $event.preventDefault();
                }
                $event.stopPropagation();
                if (target.classList.contains('ng-clear-wrapper')) {
                    this.handleClearClick();
                    return;
                }
                if (target.classList.contains('ng-arrow-wrapper')) {
                    this.handleArrowClick();
                    return;
                }
                if (target.classList.contains('ng-value-icon')) {
                    return;
                }
                if (!this.focused) {
                    this.focus();
                }
                if (this.searchable) {
                    this.open();
                }
                else {
                    this.toggle();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.handleArrowClick = /**
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this.close();
                }
                else {
                    this.open();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.handleClearClick = /**
         * @return {?}
         */
            function () {
                if (this.hasValue) {
                    this.itemsList.clearSelected(true);
                    this._updateNgModel();
                }
                this._clearSearch();
                this.focus();
                if (this._isTypeahead) {
                    this.typeahead.next(null);
                }
                this.clearEvent.emit();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.clearModel = /**
         * @return {?}
         */
            function () {
                if (!this.clearable) {
                    return;
                }
                this.itemsList.clearSelected();
                this._updateNgModel();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgSelectComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.itemsList.clearSelected();
                this._handleWriteValue(value);
                this._cd.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgSelectComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
                this._cd.markForCheck();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen) {
                    this.open();
                }
                else {
                    this.close();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
                    return;
                }
                if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
                    return;
                }
                this.isOpen = true;
                this.itemsList.markSelectedOrDefault(this.markFirst);
                this.openEvent.emit();
                if (!this.filterValue) {
                    this.focus();
                }
                this.detectChanges();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || this._manualOpen) {
                    return;
                }
                this.isOpen = false;
                this._clearSearch();
                this._onTouched();
                this.closeEvent.emit();
                this._cd.markForCheck();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.toggleItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item || item.disabled || this.disabled) {
                    return;
                }
                if (this.multiple && item.selected) {
                    this.unselect(item);
                }
                else {
                    this.select(item);
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item.selected) {
                    this.itemsList.select(item);
                    if (this.clearSearchOnAdd) {
                        this._clearSearch();
                    }
                    if (this.multiple) {
                        this.addEvent.emit(item.value);
                    }
                    this._updateNgModel();
                }
                if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
                    this.close();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.filterInput.nativeElement.focus();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.unselect = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item) {
                    return;
                }
                this.itemsList.unselect(item);
                this.focus();
                this._updateNgModel();
                this.removeEvent.emit(item);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.selectTag = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var _a;
                /** @type {?} */
                var tag;
                if (isFunction(this.addTag)) {
                    tag = ( /** @type {?} */(this.addTag))(this.filterValue);
                }
                else {
                    tag = this._primitive ? this.filterValue : (_a = {}, _a[this.bindLabel] = this.filterValue, _a);
                }
                /** @type {?} */
                var handleTag = function (item) { return _this._isTypeahead || !_this.isOpen ? _this.itemsList.mapItem(item, null) : _this.itemsList.addItem(item); };
                if (isPromise(tag)) {
                    tag.then(function (item) { return _this.select(handleTag(item)); }).catch(function () { });
                }
                else if (tag) {
                    this.select(handleTag(tag));
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showClear = /**
         * @return {?}
         */
            function () {
                return this.clearable && (this.hasValue || this.filterValue) && !this.disabled;
            };
        Object.defineProperty(NgSelectComponent.prototype, "showAddTag", {
            get: /**
             * @return {?}
             */ function () {
                if (!this.filterValue) {
                    return false;
                }
                /** @type {?} */
                var term = this.filterValue.toLowerCase();
                return this.addTag &&
                    (!this.itemsList.filteredItems.some(function (x) { return x.label.toLowerCase() === term; }) &&
                        (!this.hideSelected && this.isOpen || !this.selectedItems.some(function (x) { return x.label.toLowerCase() === term; }))) &&
                    !this.loading;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showNoItemsFound = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var empty = this.itemsList.filteredItems.length === 0;
                return ((empty && !this._isTypeahead && !this.loading) ||
                    (empty && this._isTypeahead && this.filterValue && !this.loading)) &&
                    !this.showAddTag;
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showTypeToSearch = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var empty = this.itemsList.filteredItems.length === 0;
                return empty && this._isTypeahead && !this.filterValue && !this.loading;
            };
        /**
         * @param {?} term
         * @return {?}
         */
        NgSelectComponent.prototype.filter = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
                this.filterValue = term;
                this.open();
                if (this._isTypeahead) {
                    this.typeahead.next(this.filterValue);
                }
                else {
                    this.itemsList.filter(this.filterValue);
                    if (this.isOpen) {
                        this.itemsList.markSelectedOrDefault(this.markFirst);
                    }
                }
                this.searchEvent.emit(term);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.onInputFocus = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.focused) {
                    return;
                }
                this.element.classList.add('ng-select-focused');
                this.focusEvent.emit($event);
                this.focused = true;
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.onInputBlur = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.element.classList.remove('ng-select-focused');
                this.blurEvent.emit($event);
                if (!this.isOpen && !this.disabled) {
                    this._onTouched();
                }
                this.focused = false;
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.onItemHover = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (item.disabled) {
                    return;
                }
                this.itemsList.markItem(item);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.detectChanges = /**
         * @return {?}
         */
            function () {
                if (!( /** @type {?} */(this._cd)).destroyed) {
                    this._cd.detectChanges();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.updateDropdownPosition = /**
         * @return {?}
         */
            function () {
                if (this.dropdownPanel) {
                    this.dropdownPanel.updateDropdownPosition();
                }
            };
        /**
         * @param {?} items
         * @return {?}
         */
        NgSelectComponent.prototype._setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                /** @type {?} */
                var firstItem = items[0];
                this.bindLabel = this.bindLabel || this._defaultLabel;
                this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive;
                this.itemsList.setItems(items);
                if (items.length > 0 && this.hasValue) {
                    this.itemsList.mapSelectedItems();
                }
                if (this.isOpen && isDefined(this.filterValue) && !this._isTypeahead) {
                    this.itemsList.filter(this.filterValue);
                }
                if (this._isTypeahead || this.isOpen) {
                    this.itemsList.markSelectedOrDefault(this.markFirst);
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._setItemsFromNgOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var handleNgOptions = function (options) {
                    _this.items = options.map(function (option) {
                        return ({
                            $ngOptionValue: option.value,
                            $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                            disabled: option.disabled
                        });
                    });
                    _this.itemsList.setItems(_this.items);
                    if (_this.hasValue) {
                        _this.itemsList.mapSelectedItems();
                    }
                    _this.detectChanges();
                };
                /** @type {?} */
                var handleOptionChange = function () {
                    /** @type {?} */
                    var changedOrDestroyed = rxjs.merge(_this.ngOptions.changes, _this._destroy$);
                    rxjs.merge.apply(void 0, __spread(_this.ngOptions.map(function (option) { return option.stateChange$; }))).pipe(operators.takeUntil(changedOrDestroyed))
                        .subscribe(function (option) {
                        /** @type {?} */
                        var item = _this.itemsList.findItem(option.value);
                        item.disabled = option.disabled;
                        _this._cd.markForCheck();
                    });
                };
                this.ngOptions.changes
                    .pipe(operators.startWith(this.ngOptions), operators.takeUntil(this._destroy$))
                    .subscribe(function (options) {
                    _this.bindLabel = _this._defaultLabel;
                    handleNgOptions(options);
                    handleOptionChange();
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgSelectComponent.prototype._isValidWriteValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
                    return false;
                }
                /** @type {?} */
                var validateBinding = function (item) {
                    if (!isDefined(_this.compareWith) && isObject(item) && _this.bindValue) {
                        _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                        return false;
                    }
                    return true;
                };
                if (this.multiple) {
                    if (!Array.isArray(value)) {
                        this._console.warn('Multiple select ngModel should be array.');
                        return false;
                    }
                    return value.every(function (item) { return validateBinding(item); });
                }
                else {
                    return validateBinding(value);
                }
            };
        /**
         * @param {?} ngModel
         * @return {?}
         */
        NgSelectComponent.prototype._handleWriteValue = /**
         * @param {?} ngModel
         * @return {?}
         */
            function (ngModel) {
                var _this = this;
                if (!this._isValidWriteValue(ngModel)) {
                    return;
                }
                /** @type {?} */
                var select = function (val) {
                    var _a;
                    /** @type {?} */
                    var item = _this.itemsList.findItem(val);
                    if (item) {
                        _this.itemsList.select(item);
                    }
                    else {
                        /** @type {?} */
                        var isValObject = isObject(val);
                        /** @type {?} */
                        var isPrimitive = !isValObject && !_this.bindValue;
                        if ((isValObject || isPrimitive)) {
                            _this.itemsList.select(_this.itemsList.mapItem(val, null));
                        }
                        else if (_this.bindValue) {
                            item = (_a = {},
                                _a[_this.bindLabel] = null,
                                _a[_this.bindValue] = val,
                                _a);
                            _this.itemsList.select(_this.itemsList.mapItem(item, null));
                        }
                    }
                };
                if (this.multiple) {
                    ( /** @type {?} */(ngModel)).forEach(function (item) { return select(item); });
                }
                else {
                    select(ngModel);
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._handleKeyPresses = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.searchable) {
                    return;
                }
                this._keyPress$
                    .pipe(operators.takeUntil(this._destroy$), operators.tap(function (letter) { return _this._pressedKeys.push(letter); }), operators.debounceTime(200), operators.filter(function () { return _this._pressedKeys.length > 0; }), operators.map(function () { return _this._pressedKeys.join(''); }))
                    .subscribe(function (term) {
                    /** @type {?} */
                    var item = _this.itemsList.findByLabel(term);
                    if (item) {
                        if (_this.isOpen) {
                            _this.itemsList.markItem(item);
                            _this._cd.markForCheck();
                        }
                        else {
                            _this.select(item);
                        }
                    }
                    _this._pressedKeys = [];
                });
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._updateNgModel = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                /** @type {?} */
                var model = [];
                try {
                    for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        if (this.bindValue) {
                            /** @type {?} */
                            var value = null;
                            if (item.children) {
                                value = item.value[ /** @type {?} */(this.groupBy)];
                            }
                            else {
                                value = this.itemsList.resolveNested(item.value, this.bindValue);
                            }
                            model.push(value);
                        }
                        else {
                            model.push(item.value);
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                /** @type {?} */
                var selected = this.selectedItems.map(function (x) { return x.value; });
                if (this.multiple) {
                    this._onChange(model);
                    this.changeEvent.emit(selected);
                }
                else {
                    this._onChange(isDefined(model[0]) ? model[0] : null);
                    this.changeEvent.emit(selected[0]);
                }
                this._cd.markForCheck();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._clearSearch = /**
         * @return {?}
         */
            function () {
                if (!this.filterValue) {
                    return;
                }
                this.filterValue = null;
                this.itemsList.resetFilteredItems();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._scrollToMarked = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || !this.dropdownPanel) {
                    return;
                }
                this.dropdownPanel.scrollInto(this.itemsList.markedItem);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._scrollToTag = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || !this.dropdownPanel) {
                    return;
                }
                this.dropdownPanel.scrollIntoTag();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleTab = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (!this.isOpen) {
                    return;
                }
                if (this.selectOnTab) {
                    if (this.itemsList.markedItem) {
                        this.toggleItem(this.itemsList.markedItem);
                        $event.preventDefault();
                    }
                    else if (this.showAddTag) {
                        this.selectTag();
                        $event.preventDefault();
                    }
                    else {
                        this.close();
                    }
                }
                else {
                    this.close();
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleEnter = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.isOpen || this._manualOpen) {
                    if (this.itemsList.markedItem) {
                        this.toggleItem(this.itemsList.markedItem);
                    }
                    else if (this.showAddTag) {
                        this.selectTag();
                    }
                }
                else if (this.openOnEnter) {
                    this.open();
                }
                else {
                    return;
                }
                $event.preventDefault();
                $event.stopPropagation();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleSpace = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.isOpen || this._manualOpen) {
                    return;
                }
                this.open();
                $event.preventDefault();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleArrowDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this._nextItemIsTag(+1)) {
                    this.itemsList.unmarkItem();
                    this._scrollToTag();
                }
                else {
                    this.itemsList.markNextItem();
                    this._scrollToMarked();
                }
                this.open();
                $event.preventDefault();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleArrowUp = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (!this.isOpen) {
                    return;
                }
                if (this._nextItemIsTag(-1)) {
                    this.itemsList.unmarkItem();
                    this._scrollToTag();
                }
                else {
                    this.itemsList.markPreviousItem();
                    this._scrollToMarked();
                }
                $event.preventDefault();
            };
        /**
         * @param {?} nextStep
         * @return {?}
         */
        NgSelectComponent.prototype._nextItemIsTag = /**
         * @param {?} nextStep
         * @return {?}
         */
            function (nextStep) {
                /** @type {?} */
                var nextIndex = this.itemsList.markedIndex + nextStep;
                return this.addTag && this.filterValue
                    && this.itemsList.markedItem
                    && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._handleBackspace = /**
         * @return {?}
         */
            function () {
                if (this.filterValue || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
                    return;
                }
                if (this.multiple) {
                    this.unselect(this.itemsList.lastSelectedItem);
                }
                else {
                    this.clearModel();
                }
            };
        Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
            get: /**
             * @return {?}
             */ function () {
                return this.typeahead && this.typeahead.observers.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} config
         * @return {?}
         */
        NgSelectComponent.prototype._mergeGlobalConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                this.placeholder = this.placeholder || config.placeholder;
                this.notFoundText = this.notFoundText || config.notFoundText;
                this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
                this.addTagText = this.addTagText || config.addTagText;
                this.loadingText = this.loadingText || config.loadingText;
                this.clearAllText = this.clearAllText || config.clearAllText;
                this.virtualScroll = isDefined(this.virtualScroll)
                    ? this.virtualScroll
                    : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
                this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
            };
        NgSelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ng-select',
                        template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\r\n    <div class=\"ng-value-container\">\r\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\r\n\r\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\r\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems\">\r\n                <ng-template #defaultLabelTemplate>\r\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\r\n                    <span class=\"ng-value-label\">{{item.label}}</span>\r\n                </ng-template>\r\n\r\n                <ng-template\r\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\r\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\r\n                </ng-template>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\r\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\r\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\r\n        </ng-template>\r\n\r\n        <div class=\"ng-input\">\r\n            <input #filterInput\r\n                   type=\"text\"\r\n                   [attr.autocomplete]=\"labelForId ? 'off' : dropdownId\"\r\n                   [attr.id]=\"labelForId\"\r\n                   [attr.tabindex]=\"tabIndex\"\r\n                   [attr.autocorrect]=\"autoCorrect\"\r\n                   [attr.autocapitalize]=\"autoCapitalize\"\r\n                   [readOnly]=\"!searchable\"\r\n                   [disabled]=\"disabled\"\r\n                   [value]=\"filterValue ? filterValue : ''\"\r\n                   (input)=\"filter(filterInput.value)\"\r\n                   (focus)=\"onInputFocus($event)\"\r\n                   (blur)=\"onInputBlur($event)\"\r\n                   (change)=\"$event.stopPropagation()\"\r\n                   role=\"combobox\"\r\n                   [attr.aria-expanded]=\"isOpen\"\r\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\r\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ng-spinner-loader\" *ngIf=\"loading\"></div>\r\n\r\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\r\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\r\n    </span>\r\n\r\n    <span class=\"ng-arrow-wrapper\">\r\n        <span class=\"ng-arrow\"></span>\r\n    </span>\r\n</div>\r\n\r\n<ng-dropdown-panel *ngIf=\"isOpen\"\r\n    class=\"ng-dropdown-panel\"\r\n    [virtualScroll]=\"virtualScroll\"\r\n    [bufferAmount]=\"bufferAmount\"\r\n    [appendTo]=\"appendTo\"\r\n    [position]=\"dropdownPosition\"\r\n    [headerTemplate]=\"headerTemplate\"\r\n    [footerTemplate]=\"footerTemplate\"\r\n    [filterValue]=\"filterValue\"\r\n    [items]=\"itemsList.filteredItems\"\r\n    [markedItem]=\"itemsList.markedItem\"\r\n    (update)=\"viewPortItems = $event\"\r\n    (scroll)=\"scroll.emit($event)\"\r\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\r\n    (outsideClick)=\"close()\"\r\n    [class.ng-select-multiple]=\"multiple\"\r\n    [ngClass]=\"appendTo ? classes : null\"\r\n    [id]=\"dropdownId\">\r\n\r\n    <ng-container>\r\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\r\n                *ngFor=\"let item of viewPortItems\"\r\n                [class.ng-option-disabled]=\"item.disabled\"\r\n                [class.ng-option-selected]=\"item.selected\"\r\n                [class.ng-optgroup]=\"item.children\"\r\n                [class.ng-option]=\"!item.children\"\r\n                [class.ng-option-child]=\"!!item.parent\"\r\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\r\n                [attr.aria-selected]=\"item.selected\"\r\n                [attr.id]=\"item?.htmlId\">\r\n\r\n            <ng-template #defaultOptionTemplate>\r\n                <span class=\"ng-option-label\">{{item.label}}</span>\r\n            </ng-template>\r\n\r\n            <ng-template\r\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\r\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: filterValue }\">\r\n            </ng-template>\r\n        </div>\r\n\r\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\r\n            <ng-template #defaultTagTemplate>\r\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\r\n            </ng-template>\r\n\r\n            <ng-template\r\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\r\n                [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\r\n            </ng-template>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showNoItemsFound()\">\r\n        <ng-template #defaultNotFoundTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\r\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showTypeToSearch()\">\r\n        <ng-template #defaultTypeToSearchTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\r\n        <ng-template #defaultLoadingTextTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\r\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n</ng-dropdown-panel>\r\n",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return NgSelectComponent; }),
                                multi: true
                            }],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            'role': 'listbox',
                            'class': 'ng-select',
                            '[class.ng-select-single]': '!multiple',
                        },
                        styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
                    }] }
        ];
        /** @nocollapse */
        NgSelectComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Attribute, args: ['class',] }] },
                { type: String, decorators: [{ type: i0.Attribute, args: ['tabindex',] }] },
                { type: undefined, decorators: [{ type: i0.Attribute, args: ['autofocus',] }] },
                { type: NgSelectConfig },
                { type: undefined, decorators: [{ type: i0.Inject, args: [SELECTION_MODEL_FACTORY,] }] },
                { type: i0.ElementRef },
                { type: i0.ChangeDetectorRef },
                { type: ConsoleService }
            ];
        };
        NgSelectComponent.propDecorators = {
            bindLabel: [{ type: i0.Input }],
            bindValue: [{ type: i0.Input }],
            clearable: [{ type: i0.Input }],
            markFirst: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            notFoundText: [{ type: i0.Input }],
            typeToSearchText: [{ type: i0.Input }],
            addTagText: [{ type: i0.Input }],
            loadingText: [{ type: i0.Input }],
            clearAllText: [{ type: i0.Input }],
            dropdownPosition: [{ type: i0.Input }],
            appendTo: [{ type: i0.Input }],
            loading: [{ type: i0.Input }],
            closeOnSelect: [{ type: i0.Input }],
            hideSelected: [{ type: i0.Input }],
            selectOnTab: [{ type: i0.Input }],
            openOnEnter: [{ type: i0.Input }],
            maxSelectedItems: [{ type: i0.Input }],
            groupBy: [{ type: i0.Input }],
            groupValue: [{ type: i0.Input }],
            bufferAmount: [{ type: i0.Input }],
            virtualScroll: [{ type: i0.Input }],
            selectableGroup: [{ type: i0.Input }],
            selectableGroupAsModel: [{ type: i0.Input }],
            searchFn: [{ type: i0.Input }],
            excludeGroupsFromDefaultSelection: [{ type: i0.Input }],
            clearOnBackspace: [{ type: i0.Input }],
            labelForId: [{ type: i0.Input }],
            autoCorrect: [{ type: i0.Input }],
            autoCapitalize: [{ type: i0.Input }],
            typeahead: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-typeahead',] }],
            multiple: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-multiple',] }],
            addTag: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-taggable',] }],
            searchable: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-searchable',] }],
            isOpen: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-opened',] }],
            items: [{ type: i0.Input }],
            compareWith: [{ type: i0.Input }],
            clearSearchOnAdd: [{ type: i0.Input }],
            blurEvent: [{ type: i0.Output, args: ['blur',] }],
            focusEvent: [{ type: i0.Output, args: ['focus',] }],
            changeEvent: [{ type: i0.Output, args: ['change',] }],
            openEvent: [{ type: i0.Output, args: ['open',] }],
            closeEvent: [{ type: i0.Output, args: ['close',] }],
            searchEvent: [{ type: i0.Output, args: ['search',] }],
            clearEvent: [{ type: i0.Output, args: ['clear',] }],
            addEvent: [{ type: i0.Output, args: ['add',] }],
            removeEvent: [{ type: i0.Output, args: ['remove',] }],
            scroll: [{ type: i0.Output, args: ['scroll',] }],
            scrollToEnd: [{ type: i0.Output, args: ['scrollToEnd',] }],
            optionTemplate: [{ type: i0.ContentChild, args: [NgOptionTemplateDirective, { read: i0.TemplateRef },] }],
            optgroupTemplate: [{ type: i0.ContentChild, args: [NgOptgroupTemplateDirective, { read: i0.TemplateRef },] }],
            labelTemplate: [{ type: i0.ContentChild, args: [NgLabelTemplateDirective, { read: i0.TemplateRef },] }],
            multiLabelTemplate: [{ type: i0.ContentChild, args: [NgMultiLabelTemplateDirective, { read: i0.TemplateRef },] }],
            headerTemplate: [{ type: i0.ContentChild, args: [NgHeaderTemplateDirective, { read: i0.TemplateRef },] }],
            footerTemplate: [{ type: i0.ContentChild, args: [NgFooterTemplateDirective, { read: i0.TemplateRef },] }],
            notFoundTemplate: [{ type: i0.ContentChild, args: [NgNotFoundTemplateDirective, { read: i0.TemplateRef },] }],
            typeToSearchTemplate: [{ type: i0.ContentChild, args: [NgTypeToSearchTemplateDirective, { read: i0.TemplateRef },] }],
            loadingTextTemplate: [{ type: i0.ContentChild, args: [NgLoadingTextTemplateDirective, { read: i0.TemplateRef },] }],
            tagTemplate: [{ type: i0.ContentChild, args: [NgTagTemplateDirective, { read: i0.TemplateRef },] }],
            dropdownPanel: [{ type: i0.ViewChild, args: [i0.forwardRef(function () { return NgDropdownPanelComponent; }),] }],
            ngOptions: [{ type: i0.ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
            filterInput: [{ type: i0.ViewChild, args: ['filterInput',] }],
            disabled: [{ type: i0.HostBinding, args: ['class.ng-select-disabled',] }],
            filtered: [{ type: i0.HostBinding, args: ['class.ng-select-filtered',] }],
            handleKeyDown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }]
        };
        return NgSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionHighlightDirective = /** @class */ (function () {
        function NgOptionHighlightDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.element = this.elementRef.nativeElement;
        }
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this._canHighlight) {
                    this._highlightLabel();
                }
            };
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.label = this.element.innerHTML;
                if (this._canHighlight) {
                    this._highlightLabel();
                }
            };
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype._highlightLabel = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var label = this.label;
                if (!this.term) {
                    this._setInnerHtml(label);
                    return;
                }
                /** @type {?} */
                var indexOfTerm = stripSpecialChars(label)
                    .toLowerCase()
                    .indexOf(stripSpecialChars(this.term).toLowerCase());
                if (indexOfTerm > -1) {
                    this._setInnerHtml(label.substring(0, indexOfTerm)
                        + ("<span class=\"highlighted\">" + label.substr(indexOfTerm, this.term.length) + "</span>")
                        + label.substring(indexOfTerm + this.term.length, label.length));
                }
                else {
                    this._setInnerHtml(label);
                }
            };
        Object.defineProperty(NgOptionHighlightDirective.prototype, "_canHighlight", {
            get: /**
             * @return {?}
             */ function () {
                return isDefined(this.term) && isDefined(this.label);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} html
         * @return {?}
         */
        NgOptionHighlightDirective.prototype._setInnerHtml = /**
         * @param {?} html
         * @return {?}
         */
            function (html) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
            };
        NgOptionHighlightDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngOptionHighlight]'
                    },] }
        ];
        /** @nocollapse */
        NgOptionHighlightDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        NgOptionHighlightDirective.propDecorators = {
            term: [{ type: i0.Input, args: ['ngOptionHighlight',] }]
        };
        return NgOptionHighlightDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function DefaultSelectionModelFactory() {
        return new DefaultSelectionModel();
    }
    var DefaultSelectionModel = /** @class */ (function () {
        function DefaultSelectionModel() {
            this._selected = [];
        }
        Object.defineProperty(DefaultSelectionModel.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._selected;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
        DefaultSelectionModel.prototype.select = /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
            function (item, multiple, groupAsModel) {
                item.selected = true;
                if (groupAsModel || !item.children) {
                    this._selected.push(item);
                }
                if (multiple) {
                    if (item.parent) {
                        /** @type {?} */
                        var childrenCount = item.parent.children.length;
                        /** @type {?} */
                        var selectedCount = item.parent.children.filter(function (x) { return x.selected; }).length;
                        item.parent.selected = childrenCount === selectedCount;
                    }
                    else if (item.children) {
                        this._setChildrenSelectedState(item.children, true);
                        this._removeChildren(item);
                        if (!groupAsModel) {
                            this._selected = __spread(this._selected, item.children);
                        }
                    }
                }
            };
        /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
        DefaultSelectionModel.prototype.unselect = /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
            function (item, multiple) {
                var _a;
                this._selected = this._selected.filter(function (x) { return x !== item; });
                item.selected = false;
                if (multiple) {
                    if (item.parent && item.parent.selected) {
                        /** @type {?} */
                        var children = item.parent.children;
                        this._removeParent(item.parent);
                        this._removeChildren(item.parent);
                        (_a = this._selected).push.apply(_a, __spread(children.filter(function (x) { return x !== item; })));
                        item.parent.selected = false;
                    }
                    else if (item.children) {
                        this._setChildrenSelectedState(item.children, false);
                        this._removeChildren(item);
                    }
                }
            };
        /**
         * @param {?} keepDisabled
         * @return {?}
         */
        DefaultSelectionModel.prototype.clear = /**
         * @param {?} keepDisabled
         * @return {?}
         */
            function (keepDisabled) {
                this._selected = keepDisabled ? this._selected.filter(function (x) { return x.disabled; }) : [];
            };
        /**
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */
        DefaultSelectionModel.prototype._setChildrenSelectedState = /**
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */
            function (children, selected) {
                children.forEach(function (x) { return x.selected = selected; });
            };
        /**
         * @param {?} parent
         * @return {?}
         */
        DefaultSelectionModel.prototype._removeChildren = /**
         * @param {?} parent
         * @return {?}
         */
            function (parent) {
                this._selected = this._selected.filter(function (x) { return x.parent !== parent; });
            };
        /**
         * @param {?} parent
         * @return {?}
         */
        DefaultSelectionModel.prototype._removeParent = /**
         * @param {?} parent
         * @return {?}
         */
            function (parent) {
                this._selected = this._selected.filter(function (x) { return x !== parent; });
            };
        return DefaultSelectionModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ɵ0 = DefaultSelectionModelFactory;
    var NgSelectModule = /** @class */ (function () {
        function NgSelectModule() {
        }
        NgSelectModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            NgDropdownPanelComponent,
                            NgOptionComponent,
                            NgSelectComponent,
                            NgOptionHighlightDirective,
                            NgOptgroupTemplateDirective,
                            NgOptionTemplateDirective,
                            NgLabelTemplateDirective,
                            NgMultiLabelTemplateDirective,
                            NgHeaderTemplateDirective,
                            NgFooterTemplateDirective,
                            NgNotFoundTemplateDirective,
                            NgTypeToSearchTemplateDirective,
                            NgLoadingTextTemplateDirective,
                            NgTagTemplateDirective
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            NgSelectComponent,
                            NgOptionComponent,
                            NgOptionHighlightDirective,
                            NgOptgroupTemplateDirective,
                            NgOptionTemplateDirective,
                            NgLabelTemplateDirective,
                            NgMultiLabelTemplateDirective,
                            NgHeaderTemplateDirective,
                            NgFooterTemplateDirective,
                            NgNotFoundTemplateDirective,
                            NgTypeToSearchTemplateDirective,
                            NgLoadingTextTemplateDirective,
                            NgTagTemplateDirective
                        ],
                        providers: [
                            { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                        ]
                    },] }
        ];
        return NgSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgSelectComponent = NgSelectComponent;
    exports.SELECTION_MODEL_FACTORY = SELECTION_MODEL_FACTORY;
    exports.NgSelectModule = NgSelectModule;
    exports.NgSelectConfig = NgSelectConfig;
    exports.ɵr = ConsoleService;
    exports.ɵn = NgDropdownPanelComponent;
    exports.ɵs = NgOptionHighlightDirective;
    exports.ɵq = NgOptionComponent;
    exports.ɵi = NgFooterTemplateDirective;
    exports.ɵh = NgHeaderTemplateDirective;
    exports.ɵf = NgLabelTemplateDirective;
    exports.ɵl = NgLoadingTextTemplateDirective;
    exports.ɵg = NgMultiLabelTemplateDirective;
    exports.ɵj = NgNotFoundTemplateDirective;
    exports.ɵe = NgOptgroupTemplateDirective;
    exports.ɵd = NgOptionTemplateDirective;
    exports.ɵm = NgTagTemplateDirective;
    exports.ɵk = NgTypeToSearchTemplateDirective;
    exports.ɵc = DefaultSelectionModel;
    exports.ɵb = DefaultSelectionModelFactory;
    exports.ɵo = VirtualScrollService;
    exports.ɵp = WindowService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvY29uc29sZS5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvdmFsdWUtdXRpbHMudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9zZWFyY2gtaGVscGVyLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvaWQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9pdGVtcy1saXN0LnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0LnR5cGVzLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvd2luZG93LnNlcnZpY2UudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC92aXJ0dWFsLXNjcm9sbC5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctb3B0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2NvbmZpZy5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLW9wdGlvbi1oaWdobGlnaHQuZGlyZWN0aXZlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvc2VsZWN0aW9uLW1vZGVsLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1vcHRpb24tdG1wXScgfSlcclxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW9wdGdyb3VwLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWxhYmVsLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW11bHRpLWxhYmVsLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctaGVhZGVyLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1mb290ZXItdG1wXScgfSlcclxuZXhwb3J0IGNsYXNzIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW5vdGZvdW5kLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXR5cGV0b3NlYXJjaC10bXBdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbG9hZGluZ3RleHQtdG1wXScgfSlcclxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctdGFnLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlU2VydmljZSB7XHJcbiAgICB3YXJuKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBpc0RlZmluZWQodmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xyXG59XHJcbiIsImNvbnN0IGRpYWNyaXRpY3MgPSB7XHJcbiAgICAnXFx1MjRCNic6ICdBJyxcclxuICAgICdcXHVGRjIxJzogJ0EnLFxyXG4gICAgJ1xcdTAwQzAnOiAnQScsXHJcbiAgICAnXFx1MDBDMSc6ICdBJyxcclxuICAgICdcXHUwMEMyJzogJ0EnLFxyXG4gICAgJ1xcdTFFQTYnOiAnQScsXHJcbiAgICAnXFx1MUVBNCc6ICdBJyxcclxuICAgICdcXHUxRUFBJzogJ0EnLFxyXG4gICAgJ1xcdTFFQTgnOiAnQScsXHJcbiAgICAnXFx1MDBDMyc6ICdBJyxcclxuICAgICdcXHUwMTAwJzogJ0EnLFxyXG4gICAgJ1xcdTAxMDInOiAnQScsXHJcbiAgICAnXFx1MUVCMCc6ICdBJyxcclxuICAgICdcXHUxRUFFJzogJ0EnLFxyXG4gICAgJ1xcdTFFQjQnOiAnQScsXHJcbiAgICAnXFx1MUVCMic6ICdBJyxcclxuICAgICdcXHUwMjI2JzogJ0EnLFxyXG4gICAgJ1xcdTAxRTAnOiAnQScsXHJcbiAgICAnXFx1MDBDNCc6ICdBJyxcclxuICAgICdcXHUwMURFJzogJ0EnLFxyXG4gICAgJ1xcdTFFQTInOiAnQScsXHJcbiAgICAnXFx1MDBDNSc6ICdBJyxcclxuICAgICdcXHUwMUZBJzogJ0EnLFxyXG4gICAgJ1xcdTAxQ0QnOiAnQScsXHJcbiAgICAnXFx1MDIwMCc6ICdBJyxcclxuICAgICdcXHUwMjAyJzogJ0EnLFxyXG4gICAgJ1xcdTFFQTAnOiAnQScsXHJcbiAgICAnXFx1MUVBQyc6ICdBJyxcclxuICAgICdcXHUxRUI2JzogJ0EnLFxyXG4gICAgJ1xcdTFFMDAnOiAnQScsXHJcbiAgICAnXFx1MDEwNCc6ICdBJyxcclxuICAgICdcXHUwMjNBJzogJ0EnLFxyXG4gICAgJ1xcdTJDNkYnOiAnQScsXHJcbiAgICAnXFx1QTczMic6ICdBQScsXHJcbiAgICAnXFx1MDBDNic6ICdBRScsXHJcbiAgICAnXFx1MDFGQyc6ICdBRScsXHJcbiAgICAnXFx1MDFFMic6ICdBRScsXHJcbiAgICAnXFx1QTczNCc6ICdBTycsXHJcbiAgICAnXFx1QTczNic6ICdBVScsXHJcbiAgICAnXFx1QTczOCc6ICdBVicsXHJcbiAgICAnXFx1QTczQSc6ICdBVicsXHJcbiAgICAnXFx1QTczQyc6ICdBWScsXHJcbiAgICAnXFx1MjRCNyc6ICdCJyxcclxuICAgICdcXHVGRjIyJzogJ0InLFxyXG4gICAgJ1xcdTFFMDInOiAnQicsXHJcbiAgICAnXFx1MUUwNCc6ICdCJyxcclxuICAgICdcXHUxRTA2JzogJ0InLFxyXG4gICAgJ1xcdTAyNDMnOiAnQicsXHJcbiAgICAnXFx1MDE4Mic6ICdCJyxcclxuICAgICdcXHUwMTgxJzogJ0InLFxyXG4gICAgJ1xcdTI0QjgnOiAnQycsXHJcbiAgICAnXFx1RkYyMyc6ICdDJyxcclxuICAgICdcXHUwMTA2JzogJ0MnLFxyXG4gICAgJ1xcdTAxMDgnOiAnQycsXHJcbiAgICAnXFx1MDEwQSc6ICdDJyxcclxuICAgICdcXHUwMTBDJzogJ0MnLFxyXG4gICAgJ1xcdTAwQzcnOiAnQycsXHJcbiAgICAnXFx1MUUwOCc6ICdDJyxcclxuICAgICdcXHUwMTg3JzogJ0MnLFxyXG4gICAgJ1xcdTAyM0InOiAnQycsXHJcbiAgICAnXFx1QTczRSc6ICdDJyxcclxuICAgICdcXHUyNEI5JzogJ0QnLFxyXG4gICAgJ1xcdUZGMjQnOiAnRCcsXHJcbiAgICAnXFx1MUUwQSc6ICdEJyxcclxuICAgICdcXHUwMTBFJzogJ0QnLFxyXG4gICAgJ1xcdTFFMEMnOiAnRCcsXHJcbiAgICAnXFx1MUUxMCc6ICdEJyxcclxuICAgICdcXHUxRTEyJzogJ0QnLFxyXG4gICAgJ1xcdTFFMEUnOiAnRCcsXHJcbiAgICAnXFx1MDExMCc6ICdEJyxcclxuICAgICdcXHUwMThCJzogJ0QnLFxyXG4gICAgJ1xcdTAxOEEnOiAnRCcsXHJcbiAgICAnXFx1MDE4OSc6ICdEJyxcclxuICAgICdcXHVBNzc5JzogJ0QnLFxyXG4gICAgJ1xcdTAxRjEnOiAnRFonLFxyXG4gICAgJ1xcdTAxQzQnOiAnRFonLFxyXG4gICAgJ1xcdTAxRjInOiAnRHonLFxyXG4gICAgJ1xcdTAxQzUnOiAnRHonLFxyXG4gICAgJ1xcdTI0QkEnOiAnRScsXHJcbiAgICAnXFx1RkYyNSc6ICdFJyxcclxuICAgICdcXHUwMEM4JzogJ0UnLFxyXG4gICAgJ1xcdTAwQzknOiAnRScsXHJcbiAgICAnXFx1MDBDQSc6ICdFJyxcclxuICAgICdcXHUxRUMwJzogJ0UnLFxyXG4gICAgJ1xcdTFFQkUnOiAnRScsXHJcbiAgICAnXFx1MUVDNCc6ICdFJyxcclxuICAgICdcXHUxRUMyJzogJ0UnLFxyXG4gICAgJ1xcdTFFQkMnOiAnRScsXHJcbiAgICAnXFx1MDExMic6ICdFJyxcclxuICAgICdcXHUxRTE0JzogJ0UnLFxyXG4gICAgJ1xcdTFFMTYnOiAnRScsXHJcbiAgICAnXFx1MDExNCc6ICdFJyxcclxuICAgICdcXHUwMTE2JzogJ0UnLFxyXG4gICAgJ1xcdTAwQ0InOiAnRScsXHJcbiAgICAnXFx1MUVCQSc6ICdFJyxcclxuICAgICdcXHUwMTFBJzogJ0UnLFxyXG4gICAgJ1xcdTAyMDQnOiAnRScsXHJcbiAgICAnXFx1MDIwNic6ICdFJyxcclxuICAgICdcXHUxRUI4JzogJ0UnLFxyXG4gICAgJ1xcdTFFQzYnOiAnRScsXHJcbiAgICAnXFx1MDIyOCc6ICdFJyxcclxuICAgICdcXHUxRTFDJzogJ0UnLFxyXG4gICAgJ1xcdTAxMTgnOiAnRScsXHJcbiAgICAnXFx1MUUxOCc6ICdFJyxcclxuICAgICdcXHUxRTFBJzogJ0UnLFxyXG4gICAgJ1xcdTAxOTAnOiAnRScsXHJcbiAgICAnXFx1MDE4RSc6ICdFJyxcclxuICAgICdcXHUyNEJCJzogJ0YnLFxyXG4gICAgJ1xcdUZGMjYnOiAnRicsXHJcbiAgICAnXFx1MUUxRSc6ICdGJyxcclxuICAgICdcXHUwMTkxJzogJ0YnLFxyXG4gICAgJ1xcdUE3N0InOiAnRicsXHJcbiAgICAnXFx1MjRCQyc6ICdHJyxcclxuICAgICdcXHVGRjI3JzogJ0cnLFxyXG4gICAgJ1xcdTAxRjQnOiAnRycsXHJcbiAgICAnXFx1MDExQyc6ICdHJyxcclxuICAgICdcXHUxRTIwJzogJ0cnLFxyXG4gICAgJ1xcdTAxMUUnOiAnRycsXHJcbiAgICAnXFx1MDEyMCc6ICdHJyxcclxuICAgICdcXHUwMUU2JzogJ0cnLFxyXG4gICAgJ1xcdTAxMjInOiAnRycsXHJcbiAgICAnXFx1MDFFNCc6ICdHJyxcclxuICAgICdcXHUwMTkzJzogJ0cnLFxyXG4gICAgJ1xcdUE3QTAnOiAnRycsXHJcbiAgICAnXFx1QTc3RCc6ICdHJyxcclxuICAgICdcXHVBNzdFJzogJ0cnLFxyXG4gICAgJ1xcdTI0QkQnOiAnSCcsXHJcbiAgICAnXFx1RkYyOCc6ICdIJyxcclxuICAgICdcXHUwMTI0JzogJ0gnLFxyXG4gICAgJ1xcdTFFMjInOiAnSCcsXHJcbiAgICAnXFx1MUUyNic6ICdIJyxcclxuICAgICdcXHUwMjFFJzogJ0gnLFxyXG4gICAgJ1xcdTFFMjQnOiAnSCcsXHJcbiAgICAnXFx1MUUyOCc6ICdIJyxcclxuICAgICdcXHUxRTJBJzogJ0gnLFxyXG4gICAgJ1xcdTAxMjYnOiAnSCcsXHJcbiAgICAnXFx1MkM2Nyc6ICdIJyxcclxuICAgICdcXHUyQzc1JzogJ0gnLFxyXG4gICAgJ1xcdUE3OEQnOiAnSCcsXHJcbiAgICAnXFx1MjRCRSc6ICdJJyxcclxuICAgICdcXHVGRjI5JzogJ0knLFxyXG4gICAgJ1xcdTAwQ0MnOiAnSScsXHJcbiAgICAnXFx1MDBDRCc6ICdJJyxcclxuICAgICdcXHUwMENFJzogJ0knLFxyXG4gICAgJ1xcdTAxMjgnOiAnSScsXHJcbiAgICAnXFx1MDEyQSc6ICdJJyxcclxuICAgICdcXHUwMTJDJzogJ0knLFxyXG4gICAgJ1xcdTAxMzAnOiAnSScsXHJcbiAgICAnXFx1MDBDRic6ICdJJyxcclxuICAgICdcXHUxRTJFJzogJ0knLFxyXG4gICAgJ1xcdTFFQzgnOiAnSScsXHJcbiAgICAnXFx1MDFDRic6ICdJJyxcclxuICAgICdcXHUwMjA4JzogJ0knLFxyXG4gICAgJ1xcdTAyMEEnOiAnSScsXHJcbiAgICAnXFx1MUVDQSc6ICdJJyxcclxuICAgICdcXHUwMTJFJzogJ0knLFxyXG4gICAgJ1xcdTFFMkMnOiAnSScsXHJcbiAgICAnXFx1MDE5Nyc6ICdJJyxcclxuICAgICdcXHUyNEJGJzogJ0onLFxyXG4gICAgJ1xcdUZGMkEnOiAnSicsXHJcbiAgICAnXFx1MDEzNCc6ICdKJyxcclxuICAgICdcXHUwMjQ4JzogJ0onLFxyXG4gICAgJ1xcdTI0QzAnOiAnSycsXHJcbiAgICAnXFx1RkYyQic6ICdLJyxcclxuICAgICdcXHUxRTMwJzogJ0snLFxyXG4gICAgJ1xcdTAxRTgnOiAnSycsXHJcbiAgICAnXFx1MUUzMic6ICdLJyxcclxuICAgICdcXHUwMTM2JzogJ0snLFxyXG4gICAgJ1xcdTFFMzQnOiAnSycsXHJcbiAgICAnXFx1MDE5OCc6ICdLJyxcclxuICAgICdcXHUyQzY5JzogJ0snLFxyXG4gICAgJ1xcdUE3NDAnOiAnSycsXHJcbiAgICAnXFx1QTc0Mic6ICdLJyxcclxuICAgICdcXHVBNzQ0JzogJ0snLFxyXG4gICAgJ1xcdUE3QTInOiAnSycsXHJcbiAgICAnXFx1MjRDMSc6ICdMJyxcclxuICAgICdcXHVGRjJDJzogJ0wnLFxyXG4gICAgJ1xcdTAxM0YnOiAnTCcsXHJcbiAgICAnXFx1MDEzOSc6ICdMJyxcclxuICAgICdcXHUwMTNEJzogJ0wnLFxyXG4gICAgJ1xcdTFFMzYnOiAnTCcsXHJcbiAgICAnXFx1MUUzOCc6ICdMJyxcclxuICAgICdcXHUwMTNCJzogJ0wnLFxyXG4gICAgJ1xcdTFFM0MnOiAnTCcsXHJcbiAgICAnXFx1MUUzQSc6ICdMJyxcclxuICAgICdcXHUwMTQxJzogJ0wnLFxyXG4gICAgJ1xcdTAyM0QnOiAnTCcsXHJcbiAgICAnXFx1MkM2Mic6ICdMJyxcclxuICAgICdcXHUyQzYwJzogJ0wnLFxyXG4gICAgJ1xcdUE3NDgnOiAnTCcsXHJcbiAgICAnXFx1QTc0Nic6ICdMJyxcclxuICAgICdcXHVBNzgwJzogJ0wnLFxyXG4gICAgJ1xcdTAxQzcnOiAnTEonLFxyXG4gICAgJ1xcdTAxQzgnOiAnTGonLFxyXG4gICAgJ1xcdTI0QzInOiAnTScsXHJcbiAgICAnXFx1RkYyRCc6ICdNJyxcclxuICAgICdcXHUxRTNFJzogJ00nLFxyXG4gICAgJ1xcdTFFNDAnOiAnTScsXHJcbiAgICAnXFx1MUU0Mic6ICdNJyxcclxuICAgICdcXHUyQzZFJzogJ00nLFxyXG4gICAgJ1xcdTAxOUMnOiAnTScsXHJcbiAgICAnXFx1MjRDMyc6ICdOJyxcclxuICAgICdcXHVGRjJFJzogJ04nLFxyXG4gICAgJ1xcdTAxRjgnOiAnTicsXHJcbiAgICAnXFx1MDE0Myc6ICdOJyxcclxuICAgICdcXHUwMEQxJzogJ04nLFxyXG4gICAgJ1xcdTFFNDQnOiAnTicsXHJcbiAgICAnXFx1MDE0Nyc6ICdOJyxcclxuICAgICdcXHUxRTQ2JzogJ04nLFxyXG4gICAgJ1xcdTAxNDUnOiAnTicsXHJcbiAgICAnXFx1MUU0QSc6ICdOJyxcclxuICAgICdcXHUxRTQ4JzogJ04nLFxyXG4gICAgJ1xcdTAyMjAnOiAnTicsXHJcbiAgICAnXFx1MDE5RCc6ICdOJyxcclxuICAgICdcXHVBNzkwJzogJ04nLFxyXG4gICAgJ1xcdUE3QTQnOiAnTicsXHJcbiAgICAnXFx1MDFDQSc6ICdOSicsXHJcbiAgICAnXFx1MDFDQic6ICdOaicsXHJcbiAgICAnXFx1MjRDNCc6ICdPJyxcclxuICAgICdcXHVGRjJGJzogJ08nLFxyXG4gICAgJ1xcdTAwRDInOiAnTycsXHJcbiAgICAnXFx1MDBEMyc6ICdPJyxcclxuICAgICdcXHUwMEQ0JzogJ08nLFxyXG4gICAgJ1xcdTFFRDInOiAnTycsXHJcbiAgICAnXFx1MUVEMCc6ICdPJyxcclxuICAgICdcXHUxRUQ2JzogJ08nLFxyXG4gICAgJ1xcdTFFRDQnOiAnTycsXHJcbiAgICAnXFx1MDBENSc6ICdPJyxcclxuICAgICdcXHUxRTRDJzogJ08nLFxyXG4gICAgJ1xcdTAyMkMnOiAnTycsXHJcbiAgICAnXFx1MUU0RSc6ICdPJyxcclxuICAgICdcXHUwMTRDJzogJ08nLFxyXG4gICAgJ1xcdTFFNTAnOiAnTycsXHJcbiAgICAnXFx1MUU1Mic6ICdPJyxcclxuICAgICdcXHUwMTRFJzogJ08nLFxyXG4gICAgJ1xcdTAyMkUnOiAnTycsXHJcbiAgICAnXFx1MDIzMCc6ICdPJyxcclxuICAgICdcXHUwMEQ2JzogJ08nLFxyXG4gICAgJ1xcdTAyMkEnOiAnTycsXHJcbiAgICAnXFx1MUVDRSc6ICdPJyxcclxuICAgICdcXHUwMTUwJzogJ08nLFxyXG4gICAgJ1xcdTAxRDEnOiAnTycsXHJcbiAgICAnXFx1MDIwQyc6ICdPJyxcclxuICAgICdcXHUwMjBFJzogJ08nLFxyXG4gICAgJ1xcdTAxQTAnOiAnTycsXHJcbiAgICAnXFx1MUVEQyc6ICdPJyxcclxuICAgICdcXHUxRURBJzogJ08nLFxyXG4gICAgJ1xcdTFFRTAnOiAnTycsXHJcbiAgICAnXFx1MUVERSc6ICdPJyxcclxuICAgICdcXHUxRUUyJzogJ08nLFxyXG4gICAgJ1xcdTFFQ0MnOiAnTycsXHJcbiAgICAnXFx1MUVEOCc6ICdPJyxcclxuICAgICdcXHUwMUVBJzogJ08nLFxyXG4gICAgJ1xcdTAxRUMnOiAnTycsXHJcbiAgICAnXFx1MDBEOCc6ICdPJyxcclxuICAgICdcXHUwMUZFJzogJ08nLFxyXG4gICAgJ1xcdTAxODYnOiAnTycsXHJcbiAgICAnXFx1MDE5Ric6ICdPJyxcclxuICAgICdcXHVBNzRBJzogJ08nLFxyXG4gICAgJ1xcdUE3NEMnOiAnTycsXHJcbiAgICAnXFx1MDFBMic6ICdPSScsXHJcbiAgICAnXFx1QTc0RSc6ICdPTycsXHJcbiAgICAnXFx1MDIyMic6ICdPVScsXHJcbiAgICAnXFx1MjRDNSc6ICdQJyxcclxuICAgICdcXHVGRjMwJzogJ1AnLFxyXG4gICAgJ1xcdTFFNTQnOiAnUCcsXHJcbiAgICAnXFx1MUU1Nic6ICdQJyxcclxuICAgICdcXHUwMUE0JzogJ1AnLFxyXG4gICAgJ1xcdTJDNjMnOiAnUCcsXHJcbiAgICAnXFx1QTc1MCc6ICdQJyxcclxuICAgICdcXHVBNzUyJzogJ1AnLFxyXG4gICAgJ1xcdUE3NTQnOiAnUCcsXHJcbiAgICAnXFx1MjRDNic6ICdRJyxcclxuICAgICdcXHVGRjMxJzogJ1EnLFxyXG4gICAgJ1xcdUE3NTYnOiAnUScsXHJcbiAgICAnXFx1QTc1OCc6ICdRJyxcclxuICAgICdcXHUwMjRBJzogJ1EnLFxyXG4gICAgJ1xcdTI0QzcnOiAnUicsXHJcbiAgICAnXFx1RkYzMic6ICdSJyxcclxuICAgICdcXHUwMTU0JzogJ1InLFxyXG4gICAgJ1xcdTFFNTgnOiAnUicsXHJcbiAgICAnXFx1MDE1OCc6ICdSJyxcclxuICAgICdcXHUwMjEwJzogJ1InLFxyXG4gICAgJ1xcdTAyMTInOiAnUicsXHJcbiAgICAnXFx1MUU1QSc6ICdSJyxcclxuICAgICdcXHUxRTVDJzogJ1InLFxyXG4gICAgJ1xcdTAxNTYnOiAnUicsXHJcbiAgICAnXFx1MUU1RSc6ICdSJyxcclxuICAgICdcXHUwMjRDJzogJ1InLFxyXG4gICAgJ1xcdTJDNjQnOiAnUicsXHJcbiAgICAnXFx1QTc1QSc6ICdSJyxcclxuICAgICdcXHVBN0E2JzogJ1InLFxyXG4gICAgJ1xcdUE3ODInOiAnUicsXHJcbiAgICAnXFx1MjRDOCc6ICdTJyxcclxuICAgICdcXHVGRjMzJzogJ1MnLFxyXG4gICAgJ1xcdTFFOUUnOiAnUycsXHJcbiAgICAnXFx1MDE1QSc6ICdTJyxcclxuICAgICdcXHUxRTY0JzogJ1MnLFxyXG4gICAgJ1xcdTAxNUMnOiAnUycsXHJcbiAgICAnXFx1MUU2MCc6ICdTJyxcclxuICAgICdcXHUwMTYwJzogJ1MnLFxyXG4gICAgJ1xcdTFFNjYnOiAnUycsXHJcbiAgICAnXFx1MUU2Mic6ICdTJyxcclxuICAgICdcXHUxRTY4JzogJ1MnLFxyXG4gICAgJ1xcdTAyMTgnOiAnUycsXHJcbiAgICAnXFx1MDE1RSc6ICdTJyxcclxuICAgICdcXHUyQzdFJzogJ1MnLFxyXG4gICAgJ1xcdUE3QTgnOiAnUycsXHJcbiAgICAnXFx1QTc4NCc6ICdTJyxcclxuICAgICdcXHUyNEM5JzogJ1QnLFxyXG4gICAgJ1xcdUZGMzQnOiAnVCcsXHJcbiAgICAnXFx1MUU2QSc6ICdUJyxcclxuICAgICdcXHUwMTY0JzogJ1QnLFxyXG4gICAgJ1xcdTFFNkMnOiAnVCcsXHJcbiAgICAnXFx1MDIxQSc6ICdUJyxcclxuICAgICdcXHUwMTYyJzogJ1QnLFxyXG4gICAgJ1xcdTFFNzAnOiAnVCcsXHJcbiAgICAnXFx1MUU2RSc6ICdUJyxcclxuICAgICdcXHUwMTY2JzogJ1QnLFxyXG4gICAgJ1xcdTAxQUMnOiAnVCcsXHJcbiAgICAnXFx1MDFBRSc6ICdUJyxcclxuICAgICdcXHUwMjNFJzogJ1QnLFxyXG4gICAgJ1xcdUE3ODYnOiAnVCcsXHJcbiAgICAnXFx1QTcyOCc6ICdUWicsXHJcbiAgICAnXFx1MjRDQSc6ICdVJyxcclxuICAgICdcXHVGRjM1JzogJ1UnLFxyXG4gICAgJ1xcdTAwRDknOiAnVScsXHJcbiAgICAnXFx1MDBEQSc6ICdVJyxcclxuICAgICdcXHUwMERCJzogJ1UnLFxyXG4gICAgJ1xcdTAxNjgnOiAnVScsXHJcbiAgICAnXFx1MUU3OCc6ICdVJyxcclxuICAgICdcXHUwMTZBJzogJ1UnLFxyXG4gICAgJ1xcdTFFN0EnOiAnVScsXHJcbiAgICAnXFx1MDE2Qyc6ICdVJyxcclxuICAgICdcXHUwMERDJzogJ1UnLFxyXG4gICAgJ1xcdTAxREInOiAnVScsXHJcbiAgICAnXFx1MDFENyc6ICdVJyxcclxuICAgICdcXHUwMUQ1JzogJ1UnLFxyXG4gICAgJ1xcdTAxRDknOiAnVScsXHJcbiAgICAnXFx1MUVFNic6ICdVJyxcclxuICAgICdcXHUwMTZFJzogJ1UnLFxyXG4gICAgJ1xcdTAxNzAnOiAnVScsXHJcbiAgICAnXFx1MDFEMyc6ICdVJyxcclxuICAgICdcXHUwMjE0JzogJ1UnLFxyXG4gICAgJ1xcdTAyMTYnOiAnVScsXHJcbiAgICAnXFx1MDFBRic6ICdVJyxcclxuICAgICdcXHUxRUVBJzogJ1UnLFxyXG4gICAgJ1xcdTFFRTgnOiAnVScsXHJcbiAgICAnXFx1MUVFRSc6ICdVJyxcclxuICAgICdcXHUxRUVDJzogJ1UnLFxyXG4gICAgJ1xcdTFFRjAnOiAnVScsXHJcbiAgICAnXFx1MUVFNCc6ICdVJyxcclxuICAgICdcXHUxRTcyJzogJ1UnLFxyXG4gICAgJ1xcdTAxNzInOiAnVScsXHJcbiAgICAnXFx1MUU3Nic6ICdVJyxcclxuICAgICdcXHUxRTc0JzogJ1UnLFxyXG4gICAgJ1xcdTAyNDQnOiAnVScsXHJcbiAgICAnXFx1MjRDQic6ICdWJyxcclxuICAgICdcXHVGRjM2JzogJ1YnLFxyXG4gICAgJ1xcdTFFN0MnOiAnVicsXHJcbiAgICAnXFx1MUU3RSc6ICdWJyxcclxuICAgICdcXHUwMUIyJzogJ1YnLFxyXG4gICAgJ1xcdUE3NUUnOiAnVicsXHJcbiAgICAnXFx1MDI0NSc6ICdWJyxcclxuICAgICdcXHVBNzYwJzogJ1ZZJyxcclxuICAgICdcXHUyNENDJzogJ1cnLFxyXG4gICAgJ1xcdUZGMzcnOiAnVycsXHJcbiAgICAnXFx1MUU4MCc6ICdXJyxcclxuICAgICdcXHUxRTgyJzogJ1cnLFxyXG4gICAgJ1xcdTAxNzQnOiAnVycsXHJcbiAgICAnXFx1MUU4Nic6ICdXJyxcclxuICAgICdcXHUxRTg0JzogJ1cnLFxyXG4gICAgJ1xcdTFFODgnOiAnVycsXHJcbiAgICAnXFx1MkM3Mic6ICdXJyxcclxuICAgICdcXHUyNENEJzogJ1gnLFxyXG4gICAgJ1xcdUZGMzgnOiAnWCcsXHJcbiAgICAnXFx1MUU4QSc6ICdYJyxcclxuICAgICdcXHUxRThDJzogJ1gnLFxyXG4gICAgJ1xcdTI0Q0UnOiAnWScsXHJcbiAgICAnXFx1RkYzOSc6ICdZJyxcclxuICAgICdcXHUxRUYyJzogJ1knLFxyXG4gICAgJ1xcdTAwREQnOiAnWScsXHJcbiAgICAnXFx1MDE3Nic6ICdZJyxcclxuICAgICdcXHUxRUY4JzogJ1knLFxyXG4gICAgJ1xcdTAyMzInOiAnWScsXHJcbiAgICAnXFx1MUU4RSc6ICdZJyxcclxuICAgICdcXHUwMTc4JzogJ1knLFxyXG4gICAgJ1xcdTFFRjYnOiAnWScsXHJcbiAgICAnXFx1MUVGNCc6ICdZJyxcclxuICAgICdcXHUwMUIzJzogJ1knLFxyXG4gICAgJ1xcdTAyNEUnOiAnWScsXHJcbiAgICAnXFx1MUVGRSc6ICdZJyxcclxuICAgICdcXHUyNENGJzogJ1onLFxyXG4gICAgJ1xcdUZGM0EnOiAnWicsXHJcbiAgICAnXFx1MDE3OSc6ICdaJyxcclxuICAgICdcXHUxRTkwJzogJ1onLFxyXG4gICAgJ1xcdTAxN0InOiAnWicsXHJcbiAgICAnXFx1MDE3RCc6ICdaJyxcclxuICAgICdcXHUxRTkyJzogJ1onLFxyXG4gICAgJ1xcdTFFOTQnOiAnWicsXHJcbiAgICAnXFx1MDFCNSc6ICdaJyxcclxuICAgICdcXHUwMjI0JzogJ1onLFxyXG4gICAgJ1xcdTJDN0YnOiAnWicsXHJcbiAgICAnXFx1MkM2Qic6ICdaJyxcclxuICAgICdcXHVBNzYyJzogJ1onLFxyXG4gICAgJ1xcdTI0RDAnOiAnYScsXHJcbiAgICAnXFx1RkY0MSc6ICdhJyxcclxuICAgICdcXHUxRTlBJzogJ2EnLFxyXG4gICAgJ1xcdTAwRTAnOiAnYScsXHJcbiAgICAnXFx1MDBFMSc6ICdhJyxcclxuICAgICdcXHUwMEUyJzogJ2EnLFxyXG4gICAgJ1xcdTFFQTcnOiAnYScsXHJcbiAgICAnXFx1MUVBNSc6ICdhJyxcclxuICAgICdcXHUxRUFCJzogJ2EnLFxyXG4gICAgJ1xcdTFFQTknOiAnYScsXHJcbiAgICAnXFx1MDBFMyc6ICdhJyxcclxuICAgICdcXHUwMTAxJzogJ2EnLFxyXG4gICAgJ1xcdTAxMDMnOiAnYScsXHJcbiAgICAnXFx1MUVCMSc6ICdhJyxcclxuICAgICdcXHUxRUFGJzogJ2EnLFxyXG4gICAgJ1xcdTFFQjUnOiAnYScsXHJcbiAgICAnXFx1MUVCMyc6ICdhJyxcclxuICAgICdcXHUwMjI3JzogJ2EnLFxyXG4gICAgJ1xcdTAxRTEnOiAnYScsXHJcbiAgICAnXFx1MDBFNCc6ICdhJyxcclxuICAgICdcXHUwMURGJzogJ2EnLFxyXG4gICAgJ1xcdTFFQTMnOiAnYScsXHJcbiAgICAnXFx1MDBFNSc6ICdhJyxcclxuICAgICdcXHUwMUZCJzogJ2EnLFxyXG4gICAgJ1xcdTAxQ0UnOiAnYScsXHJcbiAgICAnXFx1MDIwMSc6ICdhJyxcclxuICAgICdcXHUwMjAzJzogJ2EnLFxyXG4gICAgJ1xcdTFFQTEnOiAnYScsXHJcbiAgICAnXFx1MUVBRCc6ICdhJyxcclxuICAgICdcXHUxRUI3JzogJ2EnLFxyXG4gICAgJ1xcdTFFMDEnOiAnYScsXHJcbiAgICAnXFx1MDEwNSc6ICdhJyxcclxuICAgICdcXHUyQzY1JzogJ2EnLFxyXG4gICAgJ1xcdTAyNTAnOiAnYScsXHJcbiAgICAnXFx1QTczMyc6ICdhYScsXHJcbiAgICAnXFx1MDBFNic6ICdhZScsXHJcbiAgICAnXFx1MDFGRCc6ICdhZScsXHJcbiAgICAnXFx1MDFFMyc6ICdhZScsXHJcbiAgICAnXFx1QTczNSc6ICdhbycsXHJcbiAgICAnXFx1QTczNyc6ICdhdScsXHJcbiAgICAnXFx1QTczOSc6ICdhdicsXHJcbiAgICAnXFx1QTczQic6ICdhdicsXHJcbiAgICAnXFx1QTczRCc6ICdheScsXHJcbiAgICAnXFx1MjREMSc6ICdiJyxcclxuICAgICdcXHVGRjQyJzogJ2InLFxyXG4gICAgJ1xcdTFFMDMnOiAnYicsXHJcbiAgICAnXFx1MUUwNSc6ICdiJyxcclxuICAgICdcXHUxRTA3JzogJ2InLFxyXG4gICAgJ1xcdTAxODAnOiAnYicsXHJcbiAgICAnXFx1MDE4Myc6ICdiJyxcclxuICAgICdcXHUwMjUzJzogJ2InLFxyXG4gICAgJ1xcdTI0RDInOiAnYycsXHJcbiAgICAnXFx1RkY0Myc6ICdjJyxcclxuICAgICdcXHUwMTA3JzogJ2MnLFxyXG4gICAgJ1xcdTAxMDknOiAnYycsXHJcbiAgICAnXFx1MDEwQic6ICdjJyxcclxuICAgICdcXHUwMTBEJzogJ2MnLFxyXG4gICAgJ1xcdTAwRTcnOiAnYycsXHJcbiAgICAnXFx1MUUwOSc6ICdjJyxcclxuICAgICdcXHUwMTg4JzogJ2MnLFxyXG4gICAgJ1xcdTAyM0MnOiAnYycsXHJcbiAgICAnXFx1QTczRic6ICdjJyxcclxuICAgICdcXHUyMTg0JzogJ2MnLFxyXG4gICAgJ1xcdTI0RDMnOiAnZCcsXHJcbiAgICAnXFx1RkY0NCc6ICdkJyxcclxuICAgICdcXHUxRTBCJzogJ2QnLFxyXG4gICAgJ1xcdTAxMEYnOiAnZCcsXHJcbiAgICAnXFx1MUUwRCc6ICdkJyxcclxuICAgICdcXHUxRTExJzogJ2QnLFxyXG4gICAgJ1xcdTFFMTMnOiAnZCcsXHJcbiAgICAnXFx1MUUwRic6ICdkJyxcclxuICAgICdcXHUwMTExJzogJ2QnLFxyXG4gICAgJ1xcdTAxOEMnOiAnZCcsXHJcbiAgICAnXFx1MDI1Nic6ICdkJyxcclxuICAgICdcXHUwMjU3JzogJ2QnLFxyXG4gICAgJ1xcdUE3N0EnOiAnZCcsXHJcbiAgICAnXFx1MDFGMyc6ICdkeicsXHJcbiAgICAnXFx1MDFDNic6ICdkeicsXHJcbiAgICAnXFx1MjRENCc6ICdlJyxcclxuICAgICdcXHVGRjQ1JzogJ2UnLFxyXG4gICAgJ1xcdTAwRTgnOiAnZScsXHJcbiAgICAnXFx1MDBFOSc6ICdlJyxcclxuICAgICdcXHUwMEVBJzogJ2UnLFxyXG4gICAgJ1xcdTFFQzEnOiAnZScsXHJcbiAgICAnXFx1MUVCRic6ICdlJyxcclxuICAgICdcXHUxRUM1JzogJ2UnLFxyXG4gICAgJ1xcdTFFQzMnOiAnZScsXHJcbiAgICAnXFx1MUVCRCc6ICdlJyxcclxuICAgICdcXHUwMTEzJzogJ2UnLFxyXG4gICAgJ1xcdTFFMTUnOiAnZScsXHJcbiAgICAnXFx1MUUxNyc6ICdlJyxcclxuICAgICdcXHUwMTE1JzogJ2UnLFxyXG4gICAgJ1xcdTAxMTcnOiAnZScsXHJcbiAgICAnXFx1MDBFQic6ICdlJyxcclxuICAgICdcXHUxRUJCJzogJ2UnLFxyXG4gICAgJ1xcdTAxMUInOiAnZScsXHJcbiAgICAnXFx1MDIwNSc6ICdlJyxcclxuICAgICdcXHUwMjA3JzogJ2UnLFxyXG4gICAgJ1xcdTFFQjknOiAnZScsXHJcbiAgICAnXFx1MUVDNyc6ICdlJyxcclxuICAgICdcXHUwMjI5JzogJ2UnLFxyXG4gICAgJ1xcdTFFMUQnOiAnZScsXHJcbiAgICAnXFx1MDExOSc6ICdlJyxcclxuICAgICdcXHUxRTE5JzogJ2UnLFxyXG4gICAgJ1xcdTFFMUInOiAnZScsXHJcbiAgICAnXFx1MDI0Nyc6ICdlJyxcclxuICAgICdcXHUwMjVCJzogJ2UnLFxyXG4gICAgJ1xcdTAxREQnOiAnZScsXHJcbiAgICAnXFx1MjRENSc6ICdmJyxcclxuICAgICdcXHVGRjQ2JzogJ2YnLFxyXG4gICAgJ1xcdTFFMUYnOiAnZicsXHJcbiAgICAnXFx1MDE5Mic6ICdmJyxcclxuICAgICdcXHVBNzdDJzogJ2YnLFxyXG4gICAgJ1xcdTI0RDYnOiAnZycsXHJcbiAgICAnXFx1RkY0Nyc6ICdnJyxcclxuICAgICdcXHUwMUY1JzogJ2cnLFxyXG4gICAgJ1xcdTAxMUQnOiAnZycsXHJcbiAgICAnXFx1MUUyMSc6ICdnJyxcclxuICAgICdcXHUwMTFGJzogJ2cnLFxyXG4gICAgJ1xcdTAxMjEnOiAnZycsXHJcbiAgICAnXFx1MDFFNyc6ICdnJyxcclxuICAgICdcXHUwMTIzJzogJ2cnLFxyXG4gICAgJ1xcdTAxRTUnOiAnZycsXHJcbiAgICAnXFx1MDI2MCc6ICdnJyxcclxuICAgICdcXHVBN0ExJzogJ2cnLFxyXG4gICAgJ1xcdTFENzknOiAnZycsXHJcbiAgICAnXFx1QTc3Ric6ICdnJyxcclxuICAgICdcXHUyNEQ3JzogJ2gnLFxyXG4gICAgJ1xcdUZGNDgnOiAnaCcsXHJcbiAgICAnXFx1MDEyNSc6ICdoJyxcclxuICAgICdcXHUxRTIzJzogJ2gnLFxyXG4gICAgJ1xcdTFFMjcnOiAnaCcsXHJcbiAgICAnXFx1MDIxRic6ICdoJyxcclxuICAgICdcXHUxRTI1JzogJ2gnLFxyXG4gICAgJ1xcdTFFMjknOiAnaCcsXHJcbiAgICAnXFx1MUUyQic6ICdoJyxcclxuICAgICdcXHUxRTk2JzogJ2gnLFxyXG4gICAgJ1xcdTAxMjcnOiAnaCcsXHJcbiAgICAnXFx1MkM2OCc6ICdoJyxcclxuICAgICdcXHUyQzc2JzogJ2gnLFxyXG4gICAgJ1xcdTAyNjUnOiAnaCcsXHJcbiAgICAnXFx1MDE5NSc6ICdodicsXHJcbiAgICAnXFx1MjREOCc6ICdpJyxcclxuICAgICdcXHVGRjQ5JzogJ2knLFxyXG4gICAgJ1xcdTAwRUMnOiAnaScsXHJcbiAgICAnXFx1MDBFRCc6ICdpJyxcclxuICAgICdcXHUwMEVFJzogJ2knLFxyXG4gICAgJ1xcdTAxMjknOiAnaScsXHJcbiAgICAnXFx1MDEyQic6ICdpJyxcclxuICAgICdcXHUwMTJEJzogJ2knLFxyXG4gICAgJ1xcdTAwRUYnOiAnaScsXHJcbiAgICAnXFx1MUUyRic6ICdpJyxcclxuICAgICdcXHUxRUM5JzogJ2knLFxyXG4gICAgJ1xcdTAxRDAnOiAnaScsXHJcbiAgICAnXFx1MDIwOSc6ICdpJyxcclxuICAgICdcXHUwMjBCJzogJ2knLFxyXG4gICAgJ1xcdTFFQ0InOiAnaScsXHJcbiAgICAnXFx1MDEyRic6ICdpJyxcclxuICAgICdcXHUxRTJEJzogJ2knLFxyXG4gICAgJ1xcdTAyNjgnOiAnaScsXHJcbiAgICAnXFx1MDEzMSc6ICdpJyxcclxuICAgICdcXHUyNEQ5JzogJ2onLFxyXG4gICAgJ1xcdUZGNEEnOiAnaicsXHJcbiAgICAnXFx1MDEzNSc6ICdqJyxcclxuICAgICdcXHUwMUYwJzogJ2onLFxyXG4gICAgJ1xcdTAyNDknOiAnaicsXHJcbiAgICAnXFx1MjREQSc6ICdrJyxcclxuICAgICdcXHVGRjRCJzogJ2snLFxyXG4gICAgJ1xcdTFFMzEnOiAnaycsXHJcbiAgICAnXFx1MDFFOSc6ICdrJyxcclxuICAgICdcXHUxRTMzJzogJ2snLFxyXG4gICAgJ1xcdTAxMzcnOiAnaycsXHJcbiAgICAnXFx1MUUzNSc6ICdrJyxcclxuICAgICdcXHUwMTk5JzogJ2snLFxyXG4gICAgJ1xcdTJDNkEnOiAnaycsXHJcbiAgICAnXFx1QTc0MSc6ICdrJyxcclxuICAgICdcXHVBNzQzJzogJ2snLFxyXG4gICAgJ1xcdUE3NDUnOiAnaycsXHJcbiAgICAnXFx1QTdBMyc6ICdrJyxcclxuICAgICdcXHUyNERCJzogJ2wnLFxyXG4gICAgJ1xcdUZGNEMnOiAnbCcsXHJcbiAgICAnXFx1MDE0MCc6ICdsJyxcclxuICAgICdcXHUwMTNBJzogJ2wnLFxyXG4gICAgJ1xcdTAxM0UnOiAnbCcsXHJcbiAgICAnXFx1MUUzNyc6ICdsJyxcclxuICAgICdcXHUxRTM5JzogJ2wnLFxyXG4gICAgJ1xcdTAxM0MnOiAnbCcsXHJcbiAgICAnXFx1MUUzRCc6ICdsJyxcclxuICAgICdcXHUxRTNCJzogJ2wnLFxyXG4gICAgJ1xcdTAxN0YnOiAnbCcsXHJcbiAgICAnXFx1MDE0Mic6ICdsJyxcclxuICAgICdcXHUwMTlBJzogJ2wnLFxyXG4gICAgJ1xcdTAyNkInOiAnbCcsXHJcbiAgICAnXFx1MkM2MSc6ICdsJyxcclxuICAgICdcXHVBNzQ5JzogJ2wnLFxyXG4gICAgJ1xcdUE3ODEnOiAnbCcsXHJcbiAgICAnXFx1QTc0Nyc6ICdsJyxcclxuICAgICdcXHUwMUM5JzogJ2xqJyxcclxuICAgICdcXHUyNERDJzogJ20nLFxyXG4gICAgJ1xcdUZGNEQnOiAnbScsXHJcbiAgICAnXFx1MUUzRic6ICdtJyxcclxuICAgICdcXHUxRTQxJzogJ20nLFxyXG4gICAgJ1xcdTFFNDMnOiAnbScsXHJcbiAgICAnXFx1MDI3MSc6ICdtJyxcclxuICAgICdcXHUwMjZGJzogJ20nLFxyXG4gICAgJ1xcdTI0REQnOiAnbicsXHJcbiAgICAnXFx1RkY0RSc6ICduJyxcclxuICAgICdcXHUwMUY5JzogJ24nLFxyXG4gICAgJ1xcdTAxNDQnOiAnbicsXHJcbiAgICAnXFx1MDBGMSc6ICduJyxcclxuICAgICdcXHUxRTQ1JzogJ24nLFxyXG4gICAgJ1xcdTAxNDgnOiAnbicsXHJcbiAgICAnXFx1MUU0Nyc6ICduJyxcclxuICAgICdcXHUwMTQ2JzogJ24nLFxyXG4gICAgJ1xcdTFFNEInOiAnbicsXHJcbiAgICAnXFx1MUU0OSc6ICduJyxcclxuICAgICdcXHUwMTlFJzogJ24nLFxyXG4gICAgJ1xcdTAyNzInOiAnbicsXHJcbiAgICAnXFx1MDE0OSc6ICduJyxcclxuICAgICdcXHVBNzkxJzogJ24nLFxyXG4gICAgJ1xcdUE3QTUnOiAnbicsXHJcbiAgICAnXFx1MDFDQyc6ICduaicsXHJcbiAgICAnXFx1MjRERSc6ICdvJyxcclxuICAgICdcXHVGRjRGJzogJ28nLFxyXG4gICAgJ1xcdTAwRjInOiAnbycsXHJcbiAgICAnXFx1MDBGMyc6ICdvJyxcclxuICAgICdcXHUwMEY0JzogJ28nLFxyXG4gICAgJ1xcdTFFRDMnOiAnbycsXHJcbiAgICAnXFx1MUVEMSc6ICdvJyxcclxuICAgICdcXHUxRUQ3JzogJ28nLFxyXG4gICAgJ1xcdTFFRDUnOiAnbycsXHJcbiAgICAnXFx1MDBGNSc6ICdvJyxcclxuICAgICdcXHUxRTREJzogJ28nLFxyXG4gICAgJ1xcdTAyMkQnOiAnbycsXHJcbiAgICAnXFx1MUU0Ric6ICdvJyxcclxuICAgICdcXHUwMTREJzogJ28nLFxyXG4gICAgJ1xcdTFFNTEnOiAnbycsXHJcbiAgICAnXFx1MUU1Myc6ICdvJyxcclxuICAgICdcXHUwMTRGJzogJ28nLFxyXG4gICAgJ1xcdTAyMkYnOiAnbycsXHJcbiAgICAnXFx1MDIzMSc6ICdvJyxcclxuICAgICdcXHUwMEY2JzogJ28nLFxyXG4gICAgJ1xcdTAyMkInOiAnbycsXHJcbiAgICAnXFx1MUVDRic6ICdvJyxcclxuICAgICdcXHUwMTUxJzogJ28nLFxyXG4gICAgJ1xcdTAxRDInOiAnbycsXHJcbiAgICAnXFx1MDIwRCc6ICdvJyxcclxuICAgICdcXHUwMjBGJzogJ28nLFxyXG4gICAgJ1xcdTAxQTEnOiAnbycsXHJcbiAgICAnXFx1MUVERCc6ICdvJyxcclxuICAgICdcXHUxRURCJzogJ28nLFxyXG4gICAgJ1xcdTFFRTEnOiAnbycsXHJcbiAgICAnXFx1MUVERic6ICdvJyxcclxuICAgICdcXHUxRUUzJzogJ28nLFxyXG4gICAgJ1xcdTFFQ0QnOiAnbycsXHJcbiAgICAnXFx1MUVEOSc6ICdvJyxcclxuICAgICdcXHUwMUVCJzogJ28nLFxyXG4gICAgJ1xcdTAxRUQnOiAnbycsXHJcbiAgICAnXFx1MDBGOCc6ICdvJyxcclxuICAgICdcXHUwMUZGJzogJ28nLFxyXG4gICAgJ1xcdTAyNTQnOiAnbycsXHJcbiAgICAnXFx1QTc0Qic6ICdvJyxcclxuICAgICdcXHVBNzREJzogJ28nLFxyXG4gICAgJ1xcdTAyNzUnOiAnbycsXHJcbiAgICAnXFx1MDFBMyc6ICdvaScsXHJcbiAgICAnXFx1MDIyMyc6ICdvdScsXHJcbiAgICAnXFx1QTc0Ric6ICdvbycsXHJcbiAgICAnXFx1MjRERic6ICdwJyxcclxuICAgICdcXHVGRjUwJzogJ3AnLFxyXG4gICAgJ1xcdTFFNTUnOiAncCcsXHJcbiAgICAnXFx1MUU1Nyc6ICdwJyxcclxuICAgICdcXHUwMUE1JzogJ3AnLFxyXG4gICAgJ1xcdTFEN0QnOiAncCcsXHJcbiAgICAnXFx1QTc1MSc6ICdwJyxcclxuICAgICdcXHVBNzUzJzogJ3AnLFxyXG4gICAgJ1xcdUE3NTUnOiAncCcsXHJcbiAgICAnXFx1MjRFMCc6ICdxJyxcclxuICAgICdcXHVGRjUxJzogJ3EnLFxyXG4gICAgJ1xcdTAyNEInOiAncScsXHJcbiAgICAnXFx1QTc1Nyc6ICdxJyxcclxuICAgICdcXHVBNzU5JzogJ3EnLFxyXG4gICAgJ1xcdTI0RTEnOiAncicsXHJcbiAgICAnXFx1RkY1Mic6ICdyJyxcclxuICAgICdcXHUwMTU1JzogJ3InLFxyXG4gICAgJ1xcdTFFNTknOiAncicsXHJcbiAgICAnXFx1MDE1OSc6ICdyJyxcclxuICAgICdcXHUwMjExJzogJ3InLFxyXG4gICAgJ1xcdTAyMTMnOiAncicsXHJcbiAgICAnXFx1MUU1Qic6ICdyJyxcclxuICAgICdcXHUxRTVEJzogJ3InLFxyXG4gICAgJ1xcdTAxNTcnOiAncicsXHJcbiAgICAnXFx1MUU1Ric6ICdyJyxcclxuICAgICdcXHUwMjREJzogJ3InLFxyXG4gICAgJ1xcdTAyN0QnOiAncicsXHJcbiAgICAnXFx1QTc1Qic6ICdyJyxcclxuICAgICdcXHVBN0E3JzogJ3InLFxyXG4gICAgJ1xcdUE3ODMnOiAncicsXHJcbiAgICAnXFx1MjRFMic6ICdzJyxcclxuICAgICdcXHVGRjUzJzogJ3MnLFxyXG4gICAgJ1xcdTAwREYnOiAncycsXHJcbiAgICAnXFx1MDE1Qic6ICdzJyxcclxuICAgICdcXHUxRTY1JzogJ3MnLFxyXG4gICAgJ1xcdTAxNUQnOiAncycsXHJcbiAgICAnXFx1MUU2MSc6ICdzJyxcclxuICAgICdcXHUwMTYxJzogJ3MnLFxyXG4gICAgJ1xcdTFFNjcnOiAncycsXHJcbiAgICAnXFx1MUU2Myc6ICdzJyxcclxuICAgICdcXHUxRTY5JzogJ3MnLFxyXG4gICAgJ1xcdTAyMTknOiAncycsXHJcbiAgICAnXFx1MDE1Ric6ICdzJyxcclxuICAgICdcXHUwMjNGJzogJ3MnLFxyXG4gICAgJ1xcdUE3QTknOiAncycsXHJcbiAgICAnXFx1QTc4NSc6ICdzJyxcclxuICAgICdcXHUxRTlCJzogJ3MnLFxyXG4gICAgJ1xcdTI0RTMnOiAndCcsXHJcbiAgICAnXFx1RkY1NCc6ICd0JyxcclxuICAgICdcXHUxRTZCJzogJ3QnLFxyXG4gICAgJ1xcdTFFOTcnOiAndCcsXHJcbiAgICAnXFx1MDE2NSc6ICd0JyxcclxuICAgICdcXHUxRTZEJzogJ3QnLFxyXG4gICAgJ1xcdTAyMUInOiAndCcsXHJcbiAgICAnXFx1MDE2Myc6ICd0JyxcclxuICAgICdcXHUxRTcxJzogJ3QnLFxyXG4gICAgJ1xcdTFFNkYnOiAndCcsXHJcbiAgICAnXFx1MDE2Nyc6ICd0JyxcclxuICAgICdcXHUwMUFEJzogJ3QnLFxyXG4gICAgJ1xcdTAyODgnOiAndCcsXHJcbiAgICAnXFx1MkM2Nic6ICd0JyxcclxuICAgICdcXHVBNzg3JzogJ3QnLFxyXG4gICAgJ1xcdUE3MjknOiAndHonLFxyXG4gICAgJ1xcdTI0RTQnOiAndScsXHJcbiAgICAnXFx1RkY1NSc6ICd1JyxcclxuICAgICdcXHUwMEY5JzogJ3UnLFxyXG4gICAgJ1xcdTAwRkEnOiAndScsXHJcbiAgICAnXFx1MDBGQic6ICd1JyxcclxuICAgICdcXHUwMTY5JzogJ3UnLFxyXG4gICAgJ1xcdTFFNzknOiAndScsXHJcbiAgICAnXFx1MDE2Qic6ICd1JyxcclxuICAgICdcXHUxRTdCJzogJ3UnLFxyXG4gICAgJ1xcdTAxNkQnOiAndScsXHJcbiAgICAnXFx1MDBGQyc6ICd1JyxcclxuICAgICdcXHUwMURDJzogJ3UnLFxyXG4gICAgJ1xcdTAxRDgnOiAndScsXHJcbiAgICAnXFx1MDFENic6ICd1JyxcclxuICAgICdcXHUwMURBJzogJ3UnLFxyXG4gICAgJ1xcdTFFRTcnOiAndScsXHJcbiAgICAnXFx1MDE2Ric6ICd1JyxcclxuICAgICdcXHUwMTcxJzogJ3UnLFxyXG4gICAgJ1xcdTAxRDQnOiAndScsXHJcbiAgICAnXFx1MDIxNSc6ICd1JyxcclxuICAgICdcXHUwMjE3JzogJ3UnLFxyXG4gICAgJ1xcdTAxQjAnOiAndScsXHJcbiAgICAnXFx1MUVFQic6ICd1JyxcclxuICAgICdcXHUxRUU5JzogJ3UnLFxyXG4gICAgJ1xcdTFFRUYnOiAndScsXHJcbiAgICAnXFx1MUVFRCc6ICd1JyxcclxuICAgICdcXHUxRUYxJzogJ3UnLFxyXG4gICAgJ1xcdTFFRTUnOiAndScsXHJcbiAgICAnXFx1MUU3Myc6ICd1JyxcclxuICAgICdcXHUwMTczJzogJ3UnLFxyXG4gICAgJ1xcdTFFNzcnOiAndScsXHJcbiAgICAnXFx1MUU3NSc6ICd1JyxcclxuICAgICdcXHUwMjg5JzogJ3UnLFxyXG4gICAgJ1xcdTI0RTUnOiAndicsXHJcbiAgICAnXFx1RkY1Nic6ICd2JyxcclxuICAgICdcXHUxRTdEJzogJ3YnLFxyXG4gICAgJ1xcdTFFN0YnOiAndicsXHJcbiAgICAnXFx1MDI4Qic6ICd2JyxcclxuICAgICdcXHVBNzVGJzogJ3YnLFxyXG4gICAgJ1xcdTAyOEMnOiAndicsXHJcbiAgICAnXFx1QTc2MSc6ICd2eScsXHJcbiAgICAnXFx1MjRFNic6ICd3JyxcclxuICAgICdcXHVGRjU3JzogJ3cnLFxyXG4gICAgJ1xcdTFFODEnOiAndycsXHJcbiAgICAnXFx1MUU4Myc6ICd3JyxcclxuICAgICdcXHUwMTc1JzogJ3cnLFxyXG4gICAgJ1xcdTFFODcnOiAndycsXHJcbiAgICAnXFx1MUU4NSc6ICd3JyxcclxuICAgICdcXHUxRTk4JzogJ3cnLFxyXG4gICAgJ1xcdTFFODknOiAndycsXHJcbiAgICAnXFx1MkM3Myc6ICd3JyxcclxuICAgICdcXHUyNEU3JzogJ3gnLFxyXG4gICAgJ1xcdUZGNTgnOiAneCcsXHJcbiAgICAnXFx1MUU4Qic6ICd4JyxcclxuICAgICdcXHUxRThEJzogJ3gnLFxyXG4gICAgJ1xcdTI0RTgnOiAneScsXHJcbiAgICAnXFx1RkY1OSc6ICd5JyxcclxuICAgICdcXHUxRUYzJzogJ3knLFxyXG4gICAgJ1xcdTAwRkQnOiAneScsXHJcbiAgICAnXFx1MDE3Nyc6ICd5JyxcclxuICAgICdcXHUxRUY5JzogJ3knLFxyXG4gICAgJ1xcdTAyMzMnOiAneScsXHJcbiAgICAnXFx1MUU4Ric6ICd5JyxcclxuICAgICdcXHUwMEZGJzogJ3knLFxyXG4gICAgJ1xcdTFFRjcnOiAneScsXHJcbiAgICAnXFx1MUU5OSc6ICd5JyxcclxuICAgICdcXHUxRUY1JzogJ3knLFxyXG4gICAgJ1xcdTAxQjQnOiAneScsXHJcbiAgICAnXFx1MDI0Ric6ICd5JyxcclxuICAgICdcXHUxRUZGJzogJ3knLFxyXG4gICAgJ1xcdTI0RTknOiAneicsXHJcbiAgICAnXFx1RkY1QSc6ICd6JyxcclxuICAgICdcXHUwMTdBJzogJ3onLFxyXG4gICAgJ1xcdTFFOTEnOiAneicsXHJcbiAgICAnXFx1MDE3Qyc6ICd6JyxcclxuICAgICdcXHUwMTdFJzogJ3onLFxyXG4gICAgJ1xcdTFFOTMnOiAneicsXHJcbiAgICAnXFx1MUU5NSc6ICd6JyxcclxuICAgICdcXHUwMUI2JzogJ3onLFxyXG4gICAgJ1xcdTAyMjUnOiAneicsXHJcbiAgICAnXFx1MDI0MCc6ICd6JyxcclxuICAgICdcXHUyQzZDJzogJ3onLFxyXG4gICAgJ1xcdUE3NjMnOiAneicsXHJcbiAgICAnXFx1MDM4Nic6ICdcXHUwMzkxJyxcclxuICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxyXG4gICAgJ1xcdTAzODknOiAnXFx1MDM5NycsXHJcbiAgICAnXFx1MDM4QSc6ICdcXHUwMzk5JyxcclxuICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxyXG4gICAgJ1xcdTAzOEMnOiAnXFx1MDM5RicsXHJcbiAgICAnXFx1MDM4RSc6ICdcXHUwM0E1JyxcclxuICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxyXG4gICAgJ1xcdTAzOEYnOiAnXFx1MDNBOScsXHJcbiAgICAnXFx1MDNBQyc6ICdcXHUwM0IxJyxcclxuICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxyXG4gICAgJ1xcdTAzQUUnOiAnXFx1MDNCNycsXHJcbiAgICAnXFx1MDNBRic6ICdcXHUwM0I5JyxcclxuICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxyXG4gICAgJ1xcdTAzOTAnOiAnXFx1MDNCOScsXHJcbiAgICAnXFx1MDNDQyc6ICdcXHUwM0JGJyxcclxuICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxyXG4gICAgJ1xcdTAzQ0InOiAnXFx1MDNDNScsXHJcbiAgICAnXFx1MDNCMCc6ICdcXHUwM0M1JyxcclxuICAgICdcXHUwM0M5JzogJ1xcdTAzQzknLFxyXG4gICAgJ1xcdTAzQzInOiAnXFx1MDNDMydcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcFNwZWNpYWxDaGFycyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWF0Y2ggPSAoYTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gZGlhY3JpdGljc1thXSB8fCBhO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdFXS9nLCBtYXRjaCk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKCkge1xyXG4gICAgLy8gRmlyc3QgY2hhcmFjdGVyIGlzIGFuICdhJywgaXQncyBnb29kIHByYWN0aWNlIHRvIHRhZyBpZCB0byBiZWdpbiB3aXRoIGEgbGV0dGVyXHJcbiAgICByZXR1cm4gJ2F4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3hdL2csIGZ1bmN0aW9uIChfKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgICAgICBjb25zdCB2YWwgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XHJcbmltcG9ydCAqIGFzIHNlYXJjaEhlbHBlciBmcm9tICcuL3NlYXJjaC1oZWxwZXInO1xyXG5pbXBvcnQgeyBOZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzRGVmaW5lZCwgaXNGdW5jdGlvbiwgaXNPYmplY3QgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcclxuaW1wb3J0IHsgbmV3SWQgfSBmcm9tICcuL2lkJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XHJcblxyXG50eXBlIE9wdGlvbkdyb3VwcyA9IE1hcDxzdHJpbmcgfCBOZ09wdGlvbiwgTmdPcHRpb25bXT47XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbXNMaXN0IHtcclxuICAgIHByaXZhdGUgX2dyb3VwczogT3B0aW9uR3JvdXBzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX25nU2VsZWN0OiBOZ1NlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBwcml2YXRlIF9zZWxlY3Rpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWwpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtczogTmdPcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIGdldCBpdGVtcygpOiBOZ09wdGlvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmlsdGVyZWRJdGVtczogTmdPcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIGdldCBmaWx0ZXJlZEl0ZW1zKCk6IE5nT3B0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21hcmtlZEluZGV4ID0gLTE7XHJcblxyXG4gICAgZ2V0IG1hcmtlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZEl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFya2VkSXRlbSgpOiBOZ09wdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkSXRlbXNbdGhpcy5fbWFya2VkSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBub0l0ZW1zVG9TZWxlY3QoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1heEl0ZW1zU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlICYmIHRoaXMuX25nU2VsZWN0Lm1heFNlbGVjdGVkSXRlbXMgPD0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFzdFNlbGVjdGVkSXRlbSgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJdGVtcyhpdGVtczogYW55W10pIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMubWFwSXRlbShpdGVtLCBpbmRleCkpO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5ncm91cEJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwcyA9IHRoaXMuX2dyb3VwQnkodGhpcy5faXRlbXMsIHRoaXMuX25nU2VsZWN0Lmdyb3VwQnkpO1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuX2ZsYXR0ZW4odGhpcy5fZ3JvdXBzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ncm91cHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyb3Vwcy5zZXQodW5kZWZpbmVkLCB0aGlzLl9pdGVtcylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IFsuLi50aGlzLl9pdGVtc107XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgfHwgdGhpcy5tYXhJdGVtc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcclxuICAgICAgICBpZiAoIW11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGl0ZW0sIG11bHRpcGxlLCB0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXBBc01vZGVsKTtcclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIG11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVTZWxlY3RlZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC51bnNlbGVjdChpdGVtLCB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiBpc0RlZmluZWQoaXRlbS5pbmRleCkgJiYgdGhpcy5fbmdTZWxlY3QubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hvd1NlbGVjdGVkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kSXRlbSh2YWx1ZTogYW55KTogTmdPcHRpb24ge1xyXG4gICAgICAgIGxldCBmaW5kQnk6IChpdGVtOiBOZ09wdGlvbikgPT4gYm9vbGVhbjtcclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuY29tcGFyZVdpdGgpIHtcclxuICAgICAgICAgICAgZmluZEJ5ID0gaXRlbSA9PiB0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aChpdGVtLnZhbHVlLCB2YWx1ZSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZSkge1xyXG4gICAgICAgICAgICBmaW5kQnkgPSBpdGVtID0+ICFpdGVtLmNoaWxkcmVuICYmIHRoaXMucmVzb2x2ZU5lc3RlZChpdGVtLnZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpID09PSB2YWx1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbmRCeSA9IGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICFpdGVtLmNoaWxkcmVuICYmIGl0ZW0ubGFiZWwgJiYgaXRlbS5sYWJlbCA9PT0gdGhpcy5yZXNvbHZlTmVzdGVkKHZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5maW5kKGl0ZW0gPT4gZmluZEJ5KGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMubWFwSXRlbShpdGVtLCB0aGlzLl9pdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2gob3B0aW9uKTtcclxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2gob3B0aW9uKTtcclxuICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VsZWN0ZWQoa2VlcERpc2FibGVkID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcihrZWVwRGlzYWJsZWQpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBrZWVwRGlzYWJsZWQgJiYgaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRpc2FibGVkO1xyXG4gICAgICAgICAgICBpdGVtLm1hcmtlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcmVkSXRlbXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5TGFiZWwodGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGVybSA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyh0ZXJtKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnMoaXRlbS5sYWJlbCkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsLnN1YnN0cigwLCB0ZXJtLmxlbmd0aCkgPT09IHRlcm07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKHRlcm06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVyZWRJdGVtcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gW107XHJcbiAgICAgICAgdGVybSA9IHRoaXMuX25nU2VsZWN0LnNlYXJjaEZuID8gdGVybSA6IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyh0ZXJtKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5fbmdTZWxlY3Quc2VhcmNoRm4gfHwgdGhpcy5fZGVmYXVsdFNlYXJjaEZuO1xyXG4gICAgICAgIGNvbnN0IGhpZGVTZWxlY3RlZCA9IHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLl9ncm91cHMua2V5cygpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2dyb3Vwcy5nZXQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVTZWxlY3RlZCAmJiAoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuc2VsZWN0ZWQgfHwgaXRlbS5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaEl0ZW0gPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiA/IGl0ZW0udmFsdWUgOiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKHRlcm0sIHNlYXJjaEl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbGFzdF0gPSBtYXRjaGVkSXRlbXMuc2xpY2UoLTEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3QucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZCA9IHRoaXMuX2l0ZW1zLmZpbmQoeCA9PiB4ID09PSBsYXN0LnBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKGhlYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKC4uLm1hdGNoZWRJdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRGaWx0ZXJlZEl0ZW1zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gdGhpcy5faXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2l0ZW1zLmZpbHRlcih4ID0+ICF4LnNlbGVjdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5faXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVubWFya0l0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrTmV4dEl0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5fc3RlcFRvSXRlbSgrMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya1ByZXZpb3VzSXRlbSgpIHtcclxuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrSXRlbShpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtTZWxlY3RlZE9yRGVmYXVsdChtYXJrRGVmYXVsdD86IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmRleE9mTGFzdFNlbGVjdGVkID0gdGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkID8gLTEgOiB0aGlzLl9maWx0ZXJlZEl0ZW1zLmluZGV4T2YodGhpcy5sYXN0U2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICBpZiAodGhpcy5sYXN0U2VsZWN0ZWRJdGVtICYmIGluZGV4T2ZMYXN0U2VsZWN0ZWQgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IGluZGV4T2ZMYXN0U2VsZWN0ZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmV4Y2x1ZGVHcm91cHNGcm9tRGVmYXVsdFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSBtYXJrRGVmYXVsdCA/IHRoaXMuZmlsdGVyZWRJdGVtcy5maW5kSW5kZXgoeCA9PiAheC5kaXNhYmxlZCAmJiAheC5jaGlsZHJlbikgOiAtMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gbWFya0RlZmF1bHQgPyB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZEluZGV4KHggPT4gIXguZGlzYWJsZWQpIDogLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZU5lc3RlZChvcHRpb246IGFueSwga2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICghaXNPYmplY3Qob3B0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbltrZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb247XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtrZXlzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcEl0ZW0oaXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogTmdPcHRpb24ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gaXNEZWZpbmVkKGl0ZW0uJG5nT3B0aW9uTGFiZWwpID8gaXRlbS4kbmdPcHRpb25MYWJlbCA6IHRoaXMucmVzb2x2ZU5lc3RlZChpdGVtLCB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNEZWZpbmVkKGl0ZW0uJG5nT3B0aW9uVmFsdWUpID8gaXRlbS4kbmdPcHRpb25WYWx1ZSA6IGl0ZW07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICBsYWJlbDogaXNEZWZpbmVkKGxhYmVsKSA/IGxhYmVsLnRvU3RyaW5nKCkgOiAnJyxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcclxuICAgICAgICAgICAgaHRtbElkOiBuZXdJZCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbWFwU2VsZWN0ZWRJdGVtcygpIHtcclxuICAgICAgICBjb25zdCBtdWx0aXBsZSA9IHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlID8gdGhpcy5yZXNvbHZlTmVzdGVkKHNlbGVjdGVkLnZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpIDogc2VsZWN0ZWQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpc0RlZmluZWQodmFsdWUpID8gdGhpcy5maW5kSXRlbSh2YWx1ZSkgOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC51bnNlbGVjdChzZWxlY3RlZCwgbXVsdGlwbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSB8fCBzZWxlY3RlZCwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbHRlcih4ID0+IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKHgpID09PSAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3dTZWxlY3RlZChpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoaXRlbS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEV4aXN0cyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmluZCh4ID0+IHggPT09IHBhcmVudCk7XHJcbiAgICAgICAgICAgIGlmICghcGFyZW50RXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2gocGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSBbLi4udGhpcy5fZmlsdGVyZWRJdGVtcy5zb3J0KChhLCBiKSA9PiAoYS5pbmRleCAtIGIuaW5kZXgpKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGlkZVNlbGVjdGVkKGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4geCAhPT0gaXRlbSk7XHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaXRlbS5wYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5ldmVyeSh4ID0+IHguc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtLnBhcmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCAhPT0gaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RlZmF1bHRTZWFyY2hGbihzZWFyY2g6IHN0cmluZywgb3B0OiBOZ09wdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKG9wdC5sYWJlbCkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gbGFiZWwuaW5kZXhPZihzZWFyY2gpID4gLTFcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXROZXh0SXRlbUluZGV4KHN0ZXBzOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc3RlcHMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fbWFya2VkSW5kZXggPT09IHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoIC0gMSkgPyAwIDogKHRoaXMuX21hcmtlZEluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhpcy5fbWFya2VkSW5kZXggPD0gMCkgPyAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKSA6ICh0aGlzLl9tYXJrZWRJbmRleCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0ZXBUb0l0ZW0oc3RlcHM6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9maWx0ZXJlZEl0ZW1zLmV2ZXJ5KHggPT4geC5kaXNhYmxlZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSB0aGlzLl9nZXROZXh0SXRlbUluZGV4KHN0ZXBzKTtcclxuICAgICAgICBpZiAodGhpcy5tYXJrZWRJdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBUb0l0ZW0oc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9ncm91cEJ5KGl0ZW1zOiBOZ09wdGlvbltdLCBwcm9wOiBzdHJpbmcgfCBGdW5jdGlvbik6IE9wdGlvbkdyb3VwcyB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcDxzdHJpbmcgfCBOZ09wdGlvbiwgTmdPcHRpb25bXT4oKTtcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBncm91cHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBpdGVtcyBhcmUgYWxyZWFkeSBncm91cGVkIGJ5IGdpdmVuIGtleS5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtc1swXS52YWx1ZVs8c3RyaW5nPnByb3BdKSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gKGl0ZW0udmFsdWVbPHN0cmluZz5wcm9wXSB8fCBbXSkubWFwKCh4LCBpbmRleCkgPT4gdGhpcy5tYXBJdGVtKHgsIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICBncm91cHMuc2V0KGl0ZW0sIGNoaWxkcmVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNGbktleSA9IGlzRnVuY3Rpb24odGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XHJcbiAgICAgICAgY29uc3Qga2V5Rm4gPSAoaXRlbTogTmdPcHRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGlzRm5LZXkgPyAoPEZ1bmN0aW9uPnByb3ApKGl0ZW0udmFsdWUpIDogaXRlbS52YWx1ZVs8c3RyaW5nPnByb3BdO1xyXG4gICAgICAgICAgICByZXR1cm4gaXNEZWZpbmVkKGtleSkgPyBrZXkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gR3JvdXAgaXRlbXMgYnkga2V5LlxyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5Rm4oaXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmdldChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncm91cHMuc2V0KGtleSwgW2l0ZW1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZsYXR0ZW4oZ3JvdXBzOiBPcHRpb25Hcm91cHMpIHtcclxuICAgICAgICBjb25zdCBpc0dyb3VwQnlGbiA9IGlzRnVuY3Rpb24odGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgICAgICBjb25zdCB3aXRob3V0R3JvdXAgPSBncm91cHMuZ2V0KHVuZGVmaW5lZCkgfHwgW107XHJcbiAgICAgICAgaXRlbXMucHVzaCguLi53aXRob3V0R3JvdXApO1xyXG4gICAgICAgIGxldCBpID0gd2l0aG91dEdyb3VwLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKGdyb3Vwcy5rZXlzKCkpKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT2JqZWN0S2V5ID0gaXNPYmplY3Qoa2V5KTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50OiBOZ09wdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBpc09iamVjdEtleSA/ICcnIDogPHN0cmluZz5rZXksXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGkrKyxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5fbmdTZWxlY3Quc2VsZWN0YWJsZUdyb3VwLFxyXG4gICAgICAgICAgICAgICAgaHRtbElkOiBuZXdJZCgpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBncm91cEtleSA9IGlzR3JvdXBCeUZuID8gdGhpcy5fbmdTZWxlY3QuYmluZExhYmVsIDogPHN0cmluZz50aGlzLl9uZ1NlbGVjdC5ncm91cEJ5O1xyXG4gICAgICAgICAgICBjb25zdCBncm91cFZhbHVlID0gdGhpcy5fbmdTZWxlY3QuZ3JvdXBWYWx1ZSB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8TmdPcHRpb24+a2V5KS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IFtncm91cEtleV06IGtleSB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBncm91cHMuZ2V0KGtleSkubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgeC5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB4LmNoaWxkcmVuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgeC5pbmRleCA9IGkrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICAgICAgICAgIHBhcmVudC52YWx1ZSA9IGdyb3VwVmFsdWUoa2V5LCBjaGlsZHJlbi5tYXAoeCA9PiB4LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gocGFyZW50KTtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCguLi5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIE5nT3B0aW9uIHtcclxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIGh0bWxJZD86IHN0cmluZztcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIG1hcmtlZD86IGJvb2xlYW47XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIHZhbHVlPzogc3RyaW5nIHwgT2JqZWN0O1xyXG4gICAgcGFyZW50PzogTmdPcHRpb247XHJcbiAgICBjaGlsZHJlbj86IE5nT3B0aW9uW107XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtleUNvZGUge1xyXG4gICAgVGFiID0gOSxcclxuICAgIEVudGVyID0gMTMsXHJcbiAgICBFc2MgPSAyNyxcclxuICAgIFNwYWNlID0gMzIsXHJcbiAgICBBcnJvd1VwID0gMzgsXHJcbiAgICBBcnJvd0Rvd24gPSA0MCxcclxuICAgIEJhY2tzcGFjZSA9IDhcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dChoYW5kbGVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsIHRpbWVvdXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbXNEaW1lbnNpb25zIHtcclxuICAgIGl0ZW1zTGVuZ3RoOiBudW1iZXI7XHJcbiAgICB2aWV3V2lkdGg6IG51bWJlcjtcclxuICAgIHZpZXdIZWlnaHQ6IG51bWJlcjtcclxuICAgIGNoaWxkV2lkdGg6IG51bWJlcjtcclxuICAgIGNoaWxkSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBpdGVtc1BlckNvbDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1zUmFuZ2VSZXN1bHQge1xyXG4gICAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XHJcbiAgICB0b3BQYWRkaW5nOiBudW1iZXI7XHJcbiAgICBzdGFydDogbnVtYmVyO1xyXG4gICAgZW5kOiBudW1iZXI7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBWaXJ0dWFsU2Nyb2xsU2VydmljZSB7XHJcblxyXG4gICAgY2FsY3VsYXRlSXRlbXMoZDogSXRlbXNEaW1lbnNpb25zLCBkcm9wZG93bkVsOiBIVE1MRWxlbWVudCwgYnVmZmVyQW1vdW50OiBudW1iZXIpOiBJdGVtc1JhbmdlUmVzdWx0IHtcclxuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBkLmNoaWxkSGVpZ2h0ICogZC5pdGVtc0xlbmd0aDtcclxuICAgICAgICBpZiAoZHJvcGRvd25FbC5zY3JvbGxUb3AgPiBzY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgZHJvcGRvd25FbC5zY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBkcm9wZG93bkVsLnNjcm9sbFRvcCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhCeVNjcm9sbFRvcCA9IHNjcm9sbFRvcCAvIHNjcm9sbEhlaWdodCAqIGQuaXRlbXNMZW5ndGg7XHJcbiAgICAgICAgbGV0IGVuZCA9IE1hdGgubWluKGQuaXRlbXNMZW5ndGgsIE1hdGguY2VpbChpbmRleEJ5U2Nyb2xsVG9wKSArIChkLml0ZW1zUGVyQ29sICsgMSkpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXhTdGFydEVuZCA9IGVuZDtcclxuICAgICAgICBjb25zdCBtYXhTdGFydCA9IE1hdGgubWF4KDAsIG1heFN0YXJ0RW5kIC0gZC5pdGVtc1BlckNvbCAtIDEpO1xyXG4gICAgICAgIGxldCBzdGFydCA9IE1hdGgubWluKG1heFN0YXJ0LCBNYXRoLmZsb29yKGluZGV4QnlTY3JvbGxUb3ApKTtcclxuXHJcbiAgICAgICAgbGV0IHRvcFBhZGRpbmcgPSBkLmNoaWxkSGVpZ2h0ICogTWF0aC5jZWlsKHN0YXJ0KSAtIChkLmNoaWxkSGVpZ2h0ICogTWF0aC5taW4oc3RhcnQsIGJ1ZmZlckFtb3VudCkpO1xyXG4gICAgICAgIHRvcFBhZGRpbmcgPSAhaXNOYU4odG9wUGFkZGluZykgPyB0b3BQYWRkaW5nIDogMDtcclxuICAgICAgICBzdGFydCA9ICFpc05hTihzdGFydCkgPyBzdGFydCA6IC0xO1xyXG4gICAgICAgIGVuZCA9ICFpc05hTihlbmQpID8gZW5kIDogLTE7XHJcbiAgICAgICAgc3RhcnQgLT0gYnVmZmVyQW1vdW50O1xyXG4gICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMCwgc3RhcnQpO1xyXG4gICAgICAgIGVuZCArPSBidWZmZXJBbW91bnQ7XHJcbiAgICAgICAgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgZW5kKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wUGFkZGluZzogdG9wUGFkZGluZyxcclxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiBzY3JvbGxIZWlnaHQsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgZW5kOiBlbmRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlRGltZW5zaW9ucyhpdGVtc0xlbmd0aDogbnVtYmVyLCBpbmRleDogbnVtYmVyLCBwYW5lbEVsOiBIVE1MRWxlbWVudCwgY29udGVudEVsOiBIVE1MRWxlbWVudCk6IEl0ZW1zRGltZW5zaW9ucyB7XHJcbiAgICAgICAgY29uc3QgcGFuZWxSZWN0ID0gcGFuZWxFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBpdGVtUmVjdCA9IGNvbnRlbnRFbC5jaGlsZHJlbltpbmRleF0gPyBjb250ZW50RWwuY2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDoge1xyXG4gICAgICAgICAgICB3aWR0aDogcGFuZWxSZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHBhbmVsUmVjdC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zUGVyQ29sID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihwYW5lbFJlY3QuaGVpZ2h0IC8gaXRlbVJlY3QuaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGl0ZW1zTGVuZ3RoOiBpdGVtc0xlbmd0aCxcclxuICAgICAgICAgICAgdmlld1dpZHRoOiBwYW5lbFJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIHZpZXdIZWlnaHQ6IHBhbmVsUmVjdC5oZWlnaHQsXHJcbiAgICAgICAgICAgIGNoaWxkV2lkdGg6IGl0ZW1SZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBjaGlsZEhlaWdodDogaXRlbVJlY3QuaGVpZ2h0LFxyXG4gICAgICAgICAgICBpdGVtc1BlckNvbDogaXRlbXNQZXJDb2wsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIE5nWm9uZSxcclxuICAgIFRlbXBsYXRlUmVmLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIEFmdGVyQ29udGVudEluaXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBPcHRpb25hbCxcclxuICAgIEluamVjdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBOZ09wdGlvbiB9IGZyb20gJy4vbmctc2VsZWN0LnR5cGVzJztcclxuaW1wb3J0IHsgRHJvcGRvd25Qb3NpdGlvbiB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmlydHVhbFNjcm9sbFNlcnZpY2UgfSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcclxuXHJcbmNvbnN0IFRPUF9DU1NfQ0xBU1MgPSAnbmctc2VsZWN0LXRvcCc7XHJcbmNvbnN0IEJPVFRPTV9DU1NfQ0xBU1MgPSAnbmctc2VsZWN0LWJvdHRvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIHNlbGVjdG9yOiAnbmctZHJvcGRvd24tcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaGVhZGVyVGVtcGxhdGVcIiBjbGFzcz1cIm5nLWRyb3Bkb3duLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgc2VhcmNoVGVybTogZmlsdGVyVmFsdWUgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgI3Njcm9sbCBjbGFzcz1cIm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHNjcm9sbC1ob3N0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgI3BhZGRpbmcgW2NsYXNzLnRvdGFsLXBhZGRpbmddPVwidmlydHVhbFNjcm9sbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICNjb250ZW50IFtjbGFzcy5zY3JvbGxhYmxlLWNvbnRlbnRdPVwidmlydHVhbFNjcm9sbCAmJiBpdGVtcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJmb290ZXJUZW1wbGF0ZVwiIGNsYXNzPVwibmctZHJvcGRvd24tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzZWFyY2hUZXJtOiBmaWx0ZXJWYWx1ZSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBpdGVtczogTmdPcHRpb25bXSA9IFtdO1xyXG4gICAgQElucHV0KCkgbWFya2VkSXRlbTogTmdPcHRpb247XHJcbiAgICBASW5wdXQoKSBwb3NpdGlvbjogRHJvcGRvd25Qb3NpdGlvbiA9ICdhdXRvJztcclxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBidWZmZXJBbW91bnQgPSA0O1xyXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBASW5wdXQoKSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBJbnB1dCgpIGZpbHRlclZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9PigpO1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbFRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gICAgQE91dHB1dCgpIG91dHNpZGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdjb250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNvbnRlbnRFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNjcm9sbEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdwYWRkaW5nJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHBhZGRpbmdFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Ryb3Bkb3duOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3NlbGVjdDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9wcmV2aW91c1N0YXJ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wcmV2aW91c0VuZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnR1cExvb3AgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfaXNTY3JvbGxlZFRvTWFya2VkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb0VuZEZpcmVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UG9zaXRpb246IERyb3Bkb3duUG9zaXRpb247XHJcbiAgICBwcml2YXRlIF9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7IH07XHJcbiAgICBwcml2YXRlIF9kaXNwb3NlRG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9ICgpID0+IHsgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIF92aXJ0dWFsU2Nyb2xsU2VydmljZTogVmlydHVhbFNjcm9sbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfd2luZG93OiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gICAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdCA9IHRoaXMuX2Ryb3Bkb3duLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlU2Nyb2xsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAndG91Y2hzdGFydCcsIHsgY2FwdHVyZTogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ21vdXNlZG93bicsIHsgY2FwdHVyZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoJGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2soJGV2ZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5pdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1Njcm9sbGVkVG9NYXJrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlSXRlbXNDaGFuZ2UoY2hhbmdlcy5pdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VEb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5fZGlzcG9zZVNjcm9sbExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZHJvcGRvd24ucGFyZW50Tm9kZSwgdGhpcy5fZHJvcGRvd24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fd2hlbkNvbnRlbnRSZWFkeSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZURvY3VtZW50UmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93blBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbXMoKS50aGVuKHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSW50byhpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnModGhpcy52aXJ0dWFsU2Nyb2xsID8gMCA6IGluZGV4KTtcclxuICAgICAgICBjb25zdCBzY3JvbGxFbDogRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IE1hdGguZmxvb3IoZC52aWV3SGVpZ2h0IC8gZC5jaGlsZEhlaWdodCkgLSAxO1xyXG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wID0gKGluZGV4ICogZC5jaGlsZEhlaWdodCkgLSAoZC5jaGlsZEhlaWdodCAqIE1hdGgubWluKGluZGV4LCBidWZmZXIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWw6IEhUTUxFbGVtZW50ID0gdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbkhlaWdodCA9IEFycmF5LmZyb20oY29udGVudEVsLmNoaWxkcmVuKS5zbGljZSgwLCBpbmRleCkucmVkdWNlKChjLCBuKSA9PiBjICsgbi5jbGllbnRIZWlnaHQsIDApO1xyXG4gICAgICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgPSBjaGlsZHJlbkhlaWdodCAtIChkLmNoaWxkSGVpZ2h0ICogTWF0aC5taW4oaW5kZXgsIGJ1ZmZlcikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxJbnRvVGFnKCkge1xyXG4gICAgICAgIGNvbnN0IGVsOiBFbGVtZW50ID0gdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBkLmNoaWxkSGVpZ2h0ICogKGQuaXRlbXNMZW5ndGggKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEcm9wZG93blBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9IHRoaXMuX2NhbGN1bGF0ZUN1cnJlbnRQb3NpdGlvbih0aGlzLl9kcm9wZG93bik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJvcGRvd24sIFRPUF9DU1NfQ0xBU1MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcm9wZG93biwgQk9UVE9NX0NTU19DTEFTUyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgVE9QX0NTU19DTEFTUyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wZG93biwgQk9UVE9NX0NTU19DTEFTUyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2Ryb3Bkb3duLCBUT1BfQ1NTX0NMQVNTKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fc2VsZWN0LCBCT1RUT01fQ1NTX0NMQVNTKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fc2VsZWN0LCBUT1BfQ1NTX0NMQVNTKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVPdXRzaWRlQ2xpY2soJGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0LmNvbnRhaW5zKCRldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcm9wZG93bi5jb250YWlucygkZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXRoID0gJGV2ZW50LnBhdGggfHwgKCRldmVudC5jb21wb3NlZFBhdGggJiYgJGV2ZW50LmNvbXBvc2VkUGF0aCgpKTtcclxuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldCAmJiAkZXZlbnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgcGF0aCAmJiBwYXRoWzBdICYmIHRoaXMuX3NlbGVjdC5jb250YWlucyhwYXRoWzBdKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm91dHNpZGVDbGljay5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VTY3JvbGxMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVTY3JvbGxUb0VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZUl0ZW1zQ2hhbmdlKGl0ZW1zOiB7IHByZXZpb3VzVmFsdWU6IE5nT3B0aW9uW10sIGN1cnJlbnRWYWx1ZTogTmdPcHRpb25bXSB9KSB7XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9FbmRGaXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNFbmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGl0ZW1zICE9PSB1bmRlZmluZWQgJiYgaXRlbXMucHJldmlvdXNWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIChpdGVtcy5wcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQgJiYgaXRlbXMucHJldmlvdXNWYWx1ZS5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0dXBMb29wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLmN1cnJlbnRWYWx1ZSB8fCBbXTtcclxuICAgICAgICB0aGlzLnJlZnJlc2goKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAndG9wJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVJdGVtcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBOZ1pvbmUuYXNzZXJ0Tm90SW5Bbmd1bGFyWm9uZSgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuaXRlbXMuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxUb01hcmtlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbG9vcCA9IChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLl9jYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlLmNhbGN1bGF0ZUl0ZW1zKGQsIHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1ZmZlckFtb3VudCB8fCAwKTtcclxuXHJcbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5wYWRkaW5nRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zdHlsZS5oZWlnaHQgPSBgJHtyZXMuc2Nyb2xsSGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyByZXMudG9wUGFkZGluZyArICdweCknO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGFydCAhPT0gdGhpcy5fcHJldmlvdXNTdGFydCB8fCByZXMuZW5kICE9PSB0aGlzLl9wcmV2aW91c0VuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5pdGVtcy5zbGljZShyZXMuc3RhcnQsIHJlcy5lbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5lbWl0KHsgc3RhcnQ6IHJlcy5zdGFydCwgZW5kOiByZXMuZW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0YXJ0ID0gcmVzLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNFbmQgPSByZXMuZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGFydHVwTG9vcCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvb3AocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnR1cExvb3AgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0dXBMb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxUb01hcmtlZCgpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGxvb3AocmVzb2x2ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmlyZVNjcm9sbFRvRW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb0VuZEZpcmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsOiBIVE1MRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmc6IEhUTUxFbGVtZW50ID0gdGhpcy52aXJ0dWFsU2Nyb2xsID9cclxuICAgICAgICAgICAgdGhpcy5wYWRkaW5nRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDpcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsLnNjcm9sbFRvcCArIHRoaXMuX2Ryb3Bkb3duLmNsaWVudEhlaWdodCA+PSBwYWRkaW5nLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvRW5kLmVtaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9FbmRGaXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZURpbWVuc2lvbnMoaW5kZXggPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlLmNhbGN1bGF0ZURpbWVuc2lvbnMoXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVEb2N1bWVudFJlc2l6ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYXBwZW5kVG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kaXNwb3NlRG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9NYXJrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU2Nyb2xsZWRUb01hcmtlZCB8fCAhdGhpcy5tYXJrZWRJdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNTY3JvbGxlZFRvTWFya2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjcm9sbEludG8odGhpcy5tYXJrZWRJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWxjdWxhdGVDdXJyZW50UG9zaXRpb24oZHJvcGRvd25FbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWxlY3RSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5fc2VsZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VsZWN0UmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2VsZWN0UmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25IZWlnaHQgPSBkcm9wZG93bkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgICBpZiAob2Zmc2V0VG9wICsgaGVpZ2h0ICsgZHJvcGRvd25IZWlnaHQgPiBzY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndG9wJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2JvdHRvbSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5hcHBlbmRUbyk7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcHBlbmRUbyBzZWxlY3RvciAke3RoaXMuYXBwZW5kVG99IGRpZCBub3QgZm91bmQgYW55IHBhcmVudCBlbGVtZW50YClcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuX2Ryb3Bkb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5hcHBlbmRUbykgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgYm91bmRpbmdSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCAtIGJvdW5kaW5nUmVjdC50b3A7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHNlbGVjdFJlY3QubGVmdCAtIGJvdW5kaW5nUmVjdC5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHRvcERlbHRhID0gdGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAnYm90dG9tJyA/IHNlbGVjdFJlY3QuaGVpZ2h0IDogLXRoaXMuX2Ryb3Bkb3duLmNsaWVudEhlaWdodDtcclxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS50b3AgPSBvZmZzZXRUb3AgKyB0b3BEZWx0YSArICdweCc7XHJcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xyXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmxlZnQgPSBvZmZzZXRMZWZ0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS53aWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLm1pbldpZHRoID0gc2VsZWN0UmVjdC53aWR0aCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfd2hlbkNvbnRlbnRSZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWFkeSA9IChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5nT3B0aW9uID0gdGhpcy5fZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLm5nLW9wdGlvbicpO1xyXG4gICAgICAgICAgICBpZiAobmdPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVhZHkocmVzb2x2ZSksIDUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVhZHkocmVzb2x2ZSkpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctb3B0aW9uJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnk7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gdGhpcy5faXNEaXNhYmxlZCh2YWx1ZSkgfVxyXG5cclxuICAgIHJlYWRvbmx5IHN0YXRlQ2hhbmdlJCA9IG5ldyBTdWJqZWN0PHsgdmFsdWU6IGFueSwgZGlzYWJsZWQ6IGJvb2xlYW4gfT4oKTtcclxuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlJC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuX2Rpc2FibGVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RDb25maWcge1xyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIG5vdEZvdW5kVGV4dCA9ICdObyBpdGVtcyBmb3VuZCc7XHJcbiAgICB0eXBlVG9TZWFyY2hUZXh0ID0gJ1R5cGUgdG8gc2VhcmNoJztcclxuICAgIGFkZFRhZ1RleHQgPSAnQWRkIGl0ZW0nO1xyXG4gICAgbG9hZGluZ1RleHQgPSAnTG9hZGluZy4uLic7XHJcbiAgICBjbGVhckFsbFRleHQgPSAnQ2xlYXIgYWxsJztcclxuICAgIGRpc2FibGVWaXJ0dWFsU2Nyb2xsID0gdHJ1ZTtcclxuICAgIG9wZW5PbkVudGVyID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkLFxyXG4gICAgVGVtcGxhdGVSZWYsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIEhvc3RCaW5kaW5nLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgSW5qZWN0LFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIEluamVjdGlvblRva2VuLFxyXG4gICAgQXR0cmlidXRlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBzdGFydFdpdGgsIHRhcCwgZGVib3VuY2VUaW1lLCBtYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc0RlZmluZWQsIGlzRnVuY3Rpb24sIGlzUHJvbWlzZSwgaXNPYmplY3QgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcclxuaW1wb3J0IHsgSXRlbXNMaXN0IH0gZnJvbSAnLi9pdGVtcy1saXN0JztcclxuaW1wb3J0IHsgTmdPcHRpb24sIEtleUNvZGUgfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XHJcbmltcG9ydCB7IG5ld0lkIH0gZnJvbSAnLi9pZCc7XHJcbmltcG9ydCB7IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL25nLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XHJcbmltcG9ydCB7IE5nU2VsZWN0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlkgPSBuZXcgSW5qZWN0aW9uVG9rZW48U2VsZWN0aW9uTW9kZWxGYWN0b3J5Pignbmctc2VsZWN0LXNlbGVjdGlvbi1tb2RlbCcpO1xyXG5leHBvcnQgdHlwZSBEcm9wZG93blBvc2l0aW9uID0gJ2JvdHRvbScgfCAndG9wJyB8ICdhdXRvJztcclxuZXhwb3J0IHR5cGUgQXV0b0NvcnJlY3QgPSAnb2ZmJyB8ICdvbic7XHJcbmV4cG9ydCB0eXBlIEF1dG9DYXBpdGFsaXplID0gJ29mZicgfCAnb24nO1xyXG5leHBvcnQgdHlwZSBBZGRUYWdGbiA9ICgodGVybTogc3RyaW5nKSA9PiBhbnkgfCBQcm9taXNlPGFueT4pO1xyXG5leHBvcnQgdHlwZSBDb21wYXJlV2l0aEZuID0gKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuO1xyXG5leHBvcnQgdHlwZSBHcm91cFZhbHVlRm4gPSAoa2V5OiBzdHJpbmcgfCBvYmplY3QsIGNoaWxkcmVuOiBhbnlbXSkgPT4gc3RyaW5nIHwgb2JqZWN0O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLXNlbGVjdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmctc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL25nLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbe1xyXG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfV0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ3JvbGUnOiAnbGlzdGJveCcsXHJcbiAgICAgICAgJ2NsYXNzJzogJ25nLXNlbGVjdCcsXHJcbiAgICAgICAgJ1tjbGFzcy5uZy1zZWxlY3Qtc2luZ2xlXSc6ICchbXVsdGlwbGUnLFxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICAgIEBJbnB1dCgpIGJpbmRMYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYmluZFZhbHVlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjbGVhcmFibGUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbWFya0ZpcnN0ID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBub3RGb3VuZFRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHR5cGVUb1NlYXJjaFRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGFkZFRhZ1RleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjbGVhckFsbFRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGRyb3Bkb3duUG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XHJcbiAgICBASW5wdXQoKSBhcHBlbmRUbzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgY2xvc2VPblNlbGVjdCA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBoaWRlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNlbGVjdE9uVGFiID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBvcGVuT25FbnRlcjogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIG1heFNlbGVjdGVkSXRlbXM6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGdyb3VwQnk6IHN0cmluZyB8IEZ1bmN0aW9uO1xyXG4gICAgQElucHV0KCkgZ3JvdXBWYWx1ZTogR3JvdXBWYWx1ZUZuO1xyXG4gICAgQElucHV0KCkgYnVmZmVyQW1vdW50ID0gNDtcclxuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXAgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNlbGVjdGFibGVHcm91cEFzTW9kZWwgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgc2VhcmNoRm4gPSBudWxsO1xyXG4gICAgQElucHV0KCkgZXhjbHVkZUdyb3Vwc0Zyb21EZWZhdWx0U2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBjbGVhck9uQmFja3NwYWNlID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBsYWJlbEZvcklkID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGF1dG9Db3JyZWN0OiBBdXRvQ29ycmVjdCA9ICdvZmYnO1xyXG4gICAgQElucHV0KCkgYXV0b0NhcGl0YWxpemU6IEF1dG9DYXBpdGFsaXplID0gJ29mZic7XHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC10eXBlYWhlYWQnKSB0eXBlYWhlYWQ6IFN1YmplY3Q8c3RyaW5nPjtcclxuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LW11bHRpcGxlJykgbXVsdGlwbGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LXRhZ2dhYmxlJykgYWRkVGFnOiBib29sZWFuIHwgQWRkVGFnRm4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LXNlYXJjaGFibGUnKSBzZWFyY2hhYmxlID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LW9wZW5lZCcpIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaXRlbXMoKSB7IHJldHVybiB0aGlzLl9pdGVtcyB9O1xyXG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zQXJlVXNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb21wYXJlV2l0aCgpIHsgcmV0dXJuIHRoaXMuX2NvbXBhcmVXaXRoOyB9XHJcbiAgICBzZXQgY29tcGFyZVdpdGgoZm46IENvbXBhcmVXaXRoRm4pIHtcclxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdgY29tcGFyZVdpdGhgIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNsZWFyU2VhcmNoT25BZGQoKSB7IHJldHVybiBpc0RlZmluZWQodGhpcy5fY2xlYXJTZWFyY2hPbkFkZCkgPyB0aGlzLl9jbGVhclNlYXJjaE9uQWRkIDogdGhpcy5jbG9zZU9uU2VsZWN0OyB9O1xyXG4gICAgc2V0IGNsZWFyU2VhcmNoT25BZGQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9jbGVhclNlYXJjaE9uQWRkID0gdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG91dHB1dCBldmVudHNcclxuICAgIEBPdXRwdXQoJ2JsdXInKSBibHVyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdmb2N1cycpIGZvY3VzRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ29wZW4nKSBvcGVuRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdjbG9zZScpIGNsb3NlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdzZWFyY2gnKSBzZWFyY2hFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ2NsZWFyJykgY2xlYXJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ2FkZCcpIGFkZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgncmVtb3ZlJykgcmVtb3ZlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdzY3JvbGwnKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcclxuICAgIEBPdXRwdXQoJ3Njcm9sbFRvRW5kJykgc2Nyb2xsVG9FbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgLy8gY3VzdG9tIHRlbXBsYXRlc1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG9wdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgb3B0Z3JvdXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG11bHRpTGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG5vdEZvdW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdHlwZVRvU2VhcmNoVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsb2FkaW5nVGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHRhZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQpKSBkcm9wZG93blBhbmVsOiBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAQ29udGVudENoaWxkcmVuKE5nT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIG5nT3B0aW9uczogUXVlcnlMaXN0PE5nT3B0aW9uQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JykgZmlsdGVySW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtZmlsdGVyZWQnKSBnZXQgZmlsdGVyZWQoKSB7IHJldHVybiAhIXRoaXMuZmlsdGVyVmFsdWUgJiYgdGhpcy5zZWFyY2hhYmxlIH07XHJcblxyXG4gICAgaXRlbXNMaXN0OiBJdGVtc0xpc3Q7XHJcbiAgICB2aWV3UG9ydEl0ZW1zOiBOZ09wdGlvbltdID0gW107XHJcbiAgICBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gbnVsbDtcclxuICAgIGRyb3Bkb3duSWQgPSBuZXdJZCgpO1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb2N1c2VkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1zID0gW107XHJcbiAgICBwcml2YXRlIF9pdGVtc0FyZVVzZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0TGFiZWwgPSAnbGFiZWwnO1xyXG4gICAgcHJpdmF0ZSBfcHJpbWl0aXZlID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX21hbnVhbE9wZW46IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9wcmVzc2VkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2NvbXBhcmVXaXRoOiBDb21wYXJlV2l0aEZuO1xyXG4gICAgcHJpdmF0ZSBfY2xlYXJTZWFyY2hPbkFkZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXlQcmVzcyQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuICAgIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICBjbGVhckl0ZW0gPSAoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSBpdGVtKTtcclxuICAgICAgICB0aGlzLnVuc2VsZWN0KG9wdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBBdHRyaWJ1dGUoJ2NsYXNzJykgcHVibGljIGNsYXNzZXM6IHN0cmluZyxcclxuICAgICAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHB1YmxpYyB0YWJJbmRleDogc3RyaW5nLFxyXG4gICAgICAgIEBBdHRyaWJ1dGUoJ2F1dG9mb2N1cycpIHByaXZhdGUgYXV0b0ZvY3VzOiBhbnksXHJcbiAgICAgICAgY29uZmlnOiBOZ1NlbGVjdENvbmZpZyxcclxuICAgICAgICBASW5qZWN0KFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZKSBuZXdTZWxlY3Rpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWxGYWN0b3J5LFxyXG4gICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIF9jb25zb2xlOiBDb25zb2xlU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fbWVyZ2VHbG9iYWxDb25maWcoY29uZmlnKTtcclxuICAgICAgICB0aGlzLml0ZW1zTGlzdCA9IG5ldyBJdGVtc0xpc3QodGhpcywgbmV3U2VsZWN0aW9uTW9kZWwoKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0ZWRJdGVtcygpOiBOZ09wdGlvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc0xpc3Quc2VsZWN0ZWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0ZWRWYWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoeCA9PiB4LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzVmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUtleVByZXNzZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5pdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVtcyhjaGFuZ2VzLml0ZW1zLmN1cnJlbnRWYWx1ZSB8fCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLl9tYW51YWxPcGVuID0gaXNEZWZpbmVkKGNoYW5nZXMuaXNPcGVuLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2l0ZW1zQXJlVXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVtc0Zyb21OZ09wdGlvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0RlZmluZWQodGhpcy5hdXRvRm9jdXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBoYW5kbGVLZXlEb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChLZXlDb2RlWyRldmVudC53aGljaF0pIHtcclxuICAgICAgICAgICAgc3dpdGNoICgkZXZlbnQud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5BcnJvd0Rvd246XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dEb3duKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQXJyb3dVcDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVBcnJvd1VwKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuU3BhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU3BhY2UoJGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFbnRlcigkZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlRhYjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVUYWIoJGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Fc2M6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5CYWNrc3BhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQmFja3NwYWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKCRldmVudC5rZXkgJiYgJGV2ZW50LmtleS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3MkLm5leHQoJGV2ZW50LmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1jbGVhci13cmFwcGVyJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGVhckNsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1hcnJvdy13cmFwcGVyJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy12YWx1ZS1pY29uJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBcnJvd0NsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsZWFyQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jbGVhclNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQpIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQubmV4dChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhckV2ZW50LmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhck1vZGVsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jbGVhcmFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZVdyaXRlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzT3BlbiB8fCB0aGlzLml0ZW1zTGlzdC5tYXhJdGVtc1NlbGVjdGVkIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5hZGRUYWcgJiYgdGhpcy5pdGVtc0xpc3Qubm9JdGVtc1RvU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtTZWxlY3RlZE9yRGVmYXVsdCh0aGlzLm1hcmtGaXJzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuRXZlbnQuZW1pdCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgdGhpcy5fbWFudWFsT3Blbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcclxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdCgpO1xyXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUl0ZW0oaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICBpZiAoIWl0ZW0gfHwgaXRlbS5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIGl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy51bnNlbGVjdChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdChpdGVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPbkFkZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQuZW1pdChpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0IHx8IHRoaXMuaXRlbXNMaXN0Lm5vSXRlbXNUb1NlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnVuc2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudC5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFRhZygpIHtcclxuICAgICAgICBsZXQgdGFnO1xyXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMuYWRkVGFnKSkge1xyXG4gICAgICAgICAgICB0YWcgPSAoPEFkZFRhZ0ZuPnRoaXMuYWRkVGFnKSh0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWcgPSB0aGlzLl9wcmltaXRpdmUgPyB0aGlzLmZpbHRlclZhbHVlIDogeyBbdGhpcy5iaW5kTGFiZWxdOiB0aGlzLmZpbHRlclZhbHVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVUYWcgPSAoaXRlbSkgPT4gdGhpcy5faXNUeXBlYWhlYWQgfHwgIXRoaXMuaXNPcGVuID8gdGhpcy5pdGVtc0xpc3QubWFwSXRlbShpdGVtLCBudWxsKSA6IHRoaXMuaXRlbXNMaXN0LmFkZEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgaWYgKGlzUHJvbWlzZSh0YWcpKSB7XHJcbiAgICAgICAgICAgIHRhZy50aGVuKGl0ZW0gPT4gdGhpcy5zZWxlY3QoaGFuZGxlVGFnKGl0ZW0pKSkuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhZykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdChoYW5kbGVUYWcodGFnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDbGVhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcmFibGUgJiYgKHRoaXMuaGFzVmFsdWUgfHwgdGhpcy5maWx0ZXJWYWx1ZSkgJiYgIXRoaXMuZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNob3dBZGRUYWcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlclZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLmZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVGFnICYmXHJcbiAgICAgICAgICAgICghdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5zb21lKHggPT4geC5sYWJlbC50b0xvd2VyQ2FzZSgpID09PSB0ZXJtKSAmJlxyXG4gICAgICAgICAgICAgICAgKCF0aGlzLmhpZGVTZWxlY3RlZCAmJiB0aGlzLmlzT3BlbiB8fCAhdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoeCA9PiB4LmxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IHRlcm0pKSkgJiZcclxuICAgICAgICAgICAgIXRoaXMubG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBzaG93Tm9JdGVtc0ZvdW5kKCkge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgcmV0dXJuICgoZW1wdHkgJiYgIXRoaXMuX2lzVHlwZWFoZWFkICYmICF0aGlzLmxvYWRpbmcpIHx8XHJcbiAgICAgICAgICAgIChlbXB0eSAmJiB0aGlzLl9pc1R5cGVhaGVhZCAmJiB0aGlzLmZpbHRlclZhbHVlICYmICF0aGlzLmxvYWRpbmcpKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5zaG93QWRkVGFnO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUeXBlVG9TZWFyY2goKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHkgPSB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICByZXR1cm4gZW1wdHkgJiYgdGhpcy5faXNUeXBlYWhlYWQgJiYgIXRoaXMuZmlsdGVyVmFsdWUgJiYgIXRoaXMubG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIodGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHRlcm07XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc1R5cGVhaGVhZCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZC5uZXh0KHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmZpbHRlcih0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrU2VsZWN0ZWRPckRlZmF1bHQodGhpcy5tYXJrRmlyc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEV2ZW50LmVtaXQodGVybSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dEZvY3VzKCRldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nLXNlbGVjdC1mb2N1c2VkJyk7XHJcbiAgICAgICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoJGV2ZW50KTtcclxuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXRCbHVyKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduZy1zZWxlY3QtZm9jdXNlZCcpO1xyXG4gICAgICAgIHRoaXMuYmx1ckV2ZW50LmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1Ib3ZlcihpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya0l0ZW0oaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZWN0Q2hhbmdlcygpIHtcclxuICAgICAgICBpZiAoISg8YW55PnRoaXMuX2NkKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEcm9wZG93blBvc2l0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duUGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blBhbmVsLnVwZGF0ZURyb3Bkb3duUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0SXRlbXMoaXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gaXRlbXNbMF07XHJcbiAgICAgICAgdGhpcy5iaW5kTGFiZWwgPSB0aGlzLmJpbmRMYWJlbCB8fCB0aGlzLl9kZWZhdWx0TGFiZWw7XHJcbiAgICAgICAgdGhpcy5fcHJpbWl0aXZlID0gaXNEZWZpbmVkKGZpcnN0SXRlbSkgPyAhaXNPYmplY3QoZmlyc3RJdGVtKSA6IHRoaXMuX3ByaW1pdGl2ZTtcclxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5oYXNWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXBTZWxlY3RlZEl0ZW1zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiBpc0RlZmluZWQodGhpcy5maWx0ZXJWYWx1ZSkgJiYgIXRoaXMuX2lzVHlwZWFoZWFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmZpbHRlcih0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVHlwZWFoZWFkIHx8IHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtTZWxlY3RlZE9yRGVmYXVsdCh0aGlzLm1hcmtGaXJzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldEl0ZW1zRnJvbU5nT3B0aW9ucygpIHtcclxuICAgICAgICBjb25zdCBoYW5kbGVOZ09wdGlvbnMgPSAob3B0aW9uczogUXVlcnlMaXN0PE5nT3B0aW9uQ29tcG9uZW50PikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gb3B0aW9ucy5tYXAob3B0aW9uID0+ICh7XHJcbiAgICAgICAgICAgICAgICAkbmdPcHRpb25WYWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJG5nT3B0aW9uTGFiZWw6IG9wdGlvbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNldEl0ZW1zKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFwU2VsZWN0ZWRJdGVtcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU9wdGlvbkNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlZE9yRGVzdHJveWVkID0gbWVyZ2UodGhpcy5uZ09wdGlvbnMuY2hhbmdlcywgdGhpcy5fZGVzdHJveSQpO1xyXG4gICAgICAgICAgICBtZXJnZSguLi50aGlzLm5nT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5zdGF0ZUNoYW5nZSQpKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKGNoYW5nZWRPckRlc3Ryb3llZCkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNMaXN0LmZpbmRJdGVtKG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubmdPcHRpb25zLmNoYW5nZXNcclxuICAgICAgICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMubmdPcHRpb25zKSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShvcHRpb25zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZExhYmVsID0gdGhpcy5fZGVmYXVsdExhYmVsO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlTmdPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlT3B0aW9uQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzVmFsaWRXcml0ZVZhbHVlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkgfHwgKHRoaXMubXVsdGlwbGUgJiYgdmFsdWUgPT09ICcnKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVCaW5kaW5nID0gKGl0ZW06IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh0aGlzLmNvbXBhcmVXaXRoKSAmJiBpc09iamVjdChpdGVtKSAmJiB0aGlzLmJpbmRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKGBCaW5kaW5nIG9iamVjdCgke0pTT04uc3RyaW5naWZ5KGl0ZW0pfSkgd2l0aCBiaW5kVmFsdWUgaXMgbm90IGFsbG93ZWQuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKCdNdWx0aXBsZSBzZWxlY3QgbmdNb2RlbCBzaG91bGQgYmUgYXJyYXkuJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gdmFsaWRhdGVCaW5kaW5nKGl0ZW0pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVCaW5kaW5nKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlV3JpdGVWYWx1ZShuZ01vZGVsOiBhbnkgfCBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNWYWxpZFdyaXRlVmFsdWUobmdNb2RlbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3QgPSAodmFsOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kSXRlbSh2YWwpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNWYWxPYmplY3QgPSBpc09iamVjdCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNQcmltaXRpdmUgPSAhaXNWYWxPYmplY3QgJiYgIXRoaXMuYmluZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKChpc1ZhbE9iamVjdCB8fCBpc1ByaW1pdGl2ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZWxlY3QodGhpcy5pdGVtc0xpc3QubWFwSXRlbSh2YWwsIG51bGwpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iaW5kVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5iaW5kTGFiZWxdOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5iaW5kVmFsdWVdOiB2YWxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKGl0ZW0sIG51bGwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICg8YW55W10+bmdNb2RlbCkuZm9yRWFjaChpdGVtID0+IHNlbGVjdChpdGVtKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0KG5nTW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVLZXlQcmVzc2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaGFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fa2V5UHJlc3MkXHJcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCksXHJcbiAgICAgICAgICAgICAgICB0YXAobGV0dGVyID0+IHRoaXMuX3ByZXNzZWRLZXlzLnB1c2gobGV0dGVyKSksXHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcclxuICAgICAgICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5sZW5ndGggPiAwKSxcclxuICAgICAgICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5qb2luKCcnKSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGVybSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEJ5TGFiZWwodGVybSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc3NlZEtleXMgPSBbXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlTmdNb2RlbCgpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmluZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGl0ZW0udmFsdWVbPHN0cmluZz50aGlzLmdyb3VwQnldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuaXRlbXNMaXN0LnJlc29sdmVOZXN0ZWQoaXRlbS52YWx1ZSwgdGhpcy5iaW5kVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbW9kZWwucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5wdXNoKGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoeCA9PiB4LnZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZShtb2RlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnQuZW1pdChzZWxlY3RlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoaXNEZWZpbmVkKG1vZGVsWzBdKSA/IG1vZGVsWzBdIDogbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnQuZW1pdChzZWxlY3RlZFswXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGVhclNlYXJjaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9NYXJrZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCAhdGhpcy5kcm9wZG93blBhbmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcm9wZG93blBhbmVsLnNjcm9sbEludG8odGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9UYWcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCAhdGhpcy5kcm9wZG93blBhbmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcm9wZG93blBhbmVsLnNjcm9sbEludG9UYWcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVUYWIoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE9uVGFiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUl0ZW0odGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dBZGRUYWcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFnKCk7XHJcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlRW50ZXIoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbSh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dBZGRUYWcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFnKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3Blbk9uRW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZVNwYWNlKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlQXJyb3dEb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9uZXh0SXRlbUlzVGFnKCsxKSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC51bm1hcmtJdGVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvVGFnKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya05leHRJdGVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZUFycm93VXAoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbmV4dEl0ZW1Jc1RhZygtMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QudW5tYXJrSXRlbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb1RhZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtQcmV2aW91c0l0ZW0oKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbmV4dEl0ZW1Jc1RhZyhuZXh0U3RlcDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5pdGVtc0xpc3QubWFya2VkSW5kZXggKyBuZXh0U3RlcDtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRUYWcgJiYgdGhpcy5maWx0ZXJWYWx1ZVxyXG4gICAgICAgICAgICAmJiB0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtXHJcbiAgICAgICAgICAgICYmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA9PT0gdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5sZW5ndGgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlQmFja3NwYWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlIHx8ICF0aGlzLmNsZWFyYWJsZSB8fCAhdGhpcy5jbGVhck9uQmFja3NwYWNlIHx8ICF0aGlzLmhhc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3QodGhpcy5pdGVtc0xpc3QubGFzdFNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhck1vZGVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IF9pc1R5cGVhaGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlYWhlYWQgJiYgdGhpcy50eXBlYWhlYWQub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbWVyZ2VHbG9iYWxDb25maWcoY29uZmlnOiBOZ1NlbGVjdENvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8IGNvbmZpZy5wbGFjZWhvbGRlcjtcclxuICAgICAgICB0aGlzLm5vdEZvdW5kVGV4dCA9IHRoaXMubm90Rm91bmRUZXh0IHx8IGNvbmZpZy5ub3RGb3VuZFRleHQ7XHJcbiAgICAgICAgdGhpcy50eXBlVG9TZWFyY2hUZXh0ID0gdGhpcy50eXBlVG9TZWFyY2hUZXh0IHx8IGNvbmZpZy50eXBlVG9TZWFyY2hUZXh0O1xyXG4gICAgICAgIHRoaXMuYWRkVGFnVGV4dCA9IHRoaXMuYWRkVGFnVGV4dCB8fCBjb25maWcuYWRkVGFnVGV4dDtcclxuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0ID0gdGhpcy5sb2FkaW5nVGV4dCB8fCBjb25maWcubG9hZGluZ1RleHQ7XHJcbiAgICAgICAgdGhpcy5jbGVhckFsbFRleHQgPSB0aGlzLmNsZWFyQWxsVGV4dCB8fCBjb25maWcuY2xlYXJBbGxUZXh0O1xyXG4gICAgICAgIHRoaXMudmlydHVhbFNjcm9sbCA9IGlzRGVmaW5lZCh0aGlzLnZpcnR1YWxTY3JvbGwpXHJcbiAgICAgICAgICAgID8gdGhpcy52aXJ0dWFsU2Nyb2xsXHJcbiAgICAgICAgICAgIDogaXNEZWZpbmVkKGNvbmZpZy5kaXNhYmxlVmlydHVhbFNjcm9sbCkgPyAhY29uZmlnLmRpc2FibGVWaXJ0dWFsU2Nyb2xsIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcGVuT25FbnRlciA9IGlzRGVmaW5lZCh0aGlzLm9wZW5PbkVudGVyKSA/IHRoaXMub3Blbk9uRW50ZXIgOiBjb25maWcub3Blbk9uRW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgc2VhcmNoSGVscGVyIGZyb20gJy4vc2VhcmNoLWhlbHBlcic7XHJcbmltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gJy4vdmFsdWUtdXRpbHMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tuZ09wdGlvbkhpZ2hsaWdodF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgQElucHV0KCduZ09wdGlvbkhpZ2hsaWdodCcpIHRlcm06IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FuSGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcclxuICAgICAgICBpZiAodGhpcy5fY2FuSGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hpZ2hsaWdodExhYmVsKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbDtcclxuICAgICAgICBpZiAoIXRoaXMudGVybSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwobGFiZWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleE9mVGVybSA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyhsYWJlbClcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLmluZGV4T2Yoc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRoaXMudGVybSkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKGluZGV4T2ZUZXJtID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKFxyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZUZXJtKVxyXG4gICAgICAgICAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRlZFwiPiR7bGFiZWwuc3Vic3RyKGluZGV4T2ZUZXJtLCB0aGlzLnRlcm0ubGVuZ3RoKX08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKyBsYWJlbC5zdWJzdHJpbmcoaW5kZXhPZlRlcm0gKyB0aGlzLnRlcm0ubGVuZ3RoLCBsYWJlbC5sZW5ndGgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwobGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBfY2FuSGlnaGxpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiBpc0RlZmluZWQodGhpcy50ZXJtKSAmJiBpc0RlZmluZWQodGhpcy5sYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0SW5uZXJIdG1sKGh0bWwpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgaHRtbCk7XHJcbiAgICB9XHJcbn0gICBcclxuIiwiaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgPSAoKSA9PiBTZWxlY3Rpb25Nb2RlbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5KCkge1xyXG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0U2VsZWN0aW9uTW9kZWwoKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25Nb2RlbCB7XHJcbiAgICB2YWx1ZTogTmdPcHRpb25bXTtcclxuICAgIHNlbGVjdChpdGVtOiBOZ09wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4sIHNlbGVjdGFibGVHcm91cEFzTW9kZWw6IGJvb2xlYW4pO1xyXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKTtcclxuICAgIGNsZWFyKGtlZXBEaXNhYmxlZDogYm9vbGVhbik7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0U2VsZWN0aW9uTW9kZWwgaW1wbGVtZW50cyBTZWxlY3Rpb25Nb2RlbCB7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogTmdPcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIGdldCB2YWx1ZSgpOiBOZ09wdGlvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbiwgZ3JvdXBBc01vZGVsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKGdyb3VwQXNNb2RlbCB8fCAhaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbkNvdW50ID0gaXRlbS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuLmZpbHRlcih4ID0+IHguc2VsZWN0ZWQpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gY2hpbGRyZW5Db3VudCA9PT0gc2VsZWN0ZWRDb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDaGlsZHJlblNlbGVjdGVkU3RhdGUoaXRlbS5jaGlsZHJlbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBBc01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBbLi4udGhpcy5fc2VsZWN0ZWQsIC4uLml0ZW0uY2hpbGRyZW5dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geCAhPT0gaXRlbSk7XHJcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaXRlbS5wYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVQYXJlbnQoaXRlbS5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oaXRlbS5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQucHVzaCguLi5jaGlsZHJlbi5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldENoaWxkcmVuU2VsZWN0ZWRTdGF0ZShpdGVtLmNoaWxkcmVuLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcihrZWVwRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGtlZXBEaXNhYmxlZCA/IHRoaXMuX3NlbGVjdGVkLmZpbHRlcih4ID0+IHguZGlzYWJsZWQpIDogW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0Q2hpbGRyZW5TZWxlY3RlZFN0YXRlKGNoaWxkcmVuOiBOZ09wdGlvbltdLCBzZWxlY3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goeCA9PiB4LnNlbGVjdGVkID0gc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZUNoaWxkcmVuKHBhcmVudDogTmdPcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkLmZpbHRlcih4ID0+IHgucGFyZW50ICE9PSBwYXJlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZVBhcmVudChwYXJlbnQ6IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4ICE9PSBwYXJlbnQpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdTZWxlY3RDb21wb25lbnQsIFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZIH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmVcclxufSBmcm9tICcuL25nLXRlbXBsYXRlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmctb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgTmdPcHRpb25Db21wb25lbnQsXHJcbiAgICAgICAgTmdTZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXHJcbiAgICAgICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTmdTZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgTmdPcHRpb25Db21wb25lbnQsXHJcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXHJcbiAgICAgICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlksIHVzZVZhbHVlOiBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5IH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJJbmplY3RhYmxlIiwic2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkV2ZW50RW1pdHRlciIsIlN1YmplY3QiLCJtZXJnZSIsImZyb21FdmVudCIsInRha2VVbnRpbCIsIk5nWm9uZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJET0NVTUVOVCIsIklucHV0IiwiT3V0cHV0IiwiVmlld0NoaWxkIiwiSG9zdExpc3RlbmVyIiwiSW5qZWN0aW9uVG9rZW4iLCJzdGFydFdpdGgiLCJ0YXAiLCJkZWJvdW5jZVRpbWUiLCJmaWx0ZXIiLCJtYXAiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJBdHRyaWJ1dGUiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkhvc3RCaW5kaW5nIiwiQ29udGVudENoaWxkIiwiQ29udGVudENoaWxkcmVuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFw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QUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFB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