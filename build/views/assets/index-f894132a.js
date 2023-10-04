"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function W0(e, t) { for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r)
            if (i !== "default" && !(i in e)) {
                const s = Object.getOwnPropertyDescriptor(r, i);
                s && Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => r[i] });
            }
    }
} return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })); }
(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i); new MutationObserver(i => { for (const s of i)
    if (s.type === "childList")
        for (const o of s.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && r(o); }).observe(document, { childList: !0, subtree: !0 }); function n(i) { const s = {}; return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s; } function r(i) { if (i.ep)
    return; i.ep = !0; const s = n(i); fetch(i.href, s); } })();
function G0(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Nf = { exports: {} }, lo = {}, Tf = { exports: {} }, F = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni = Symbol.for("react.element"), q0 = Symbol.for("react.portal"), K0 = Symbol.for("react.fragment"), Y0 = Symbol.for("react.strict_mode"), X0 = Symbol.for("react.profiler"), Q0 = Symbol.for("react.provider"), J0 = Symbol.for("react.context"), Z0 = Symbol.for("react.forward_ref"), eg = Symbol.for("react.suspense"), tg = Symbol.for("react.memo"), ng = Symbol.for("react.lazy"), gc = Symbol.iterator;
function rg(e) { return e === null || typeof e != "object" ? null : (e = gc && e[gc] || e["@@iterator"], typeof e == "function" ? e : null); }
var If = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Of = Object.assign, Pf = {};
function Nr(e, t, n) { this.props = e, this.context = t, this.refs = Pf, this.updater = n || If; }
Nr.prototype.isReactComponent = {};
Nr.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
Nr.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function Rf() { }
Rf.prototype = Nr.prototype;
function Ha(e, t, n) { this.props = e, this.context = t, this.refs = Pf, this.updater = n || If; }
var Wa = Ha.prototype = new Rf;
Wa.constructor = Ha;
Of(Wa, Nr.prototype);
Wa.isPureReactComponent = !0;
var vc = Array.isArray, Lf = Object.prototype.hasOwnProperty, Ga = { current: null }, Af = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mf(e, t, n) { var r, i = {}, s = null, o = null; if (t != null)
    for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t)
        Lf.call(t, r) && !Af.hasOwnProperty(r) && (i[r] = t[r]); var a = arguments.length - 2; if (a === 1)
    i.children = n;
else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++)
        l[u] = arguments[u + 2];
    i.children = l;
} if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
        i[r] === void 0 && (i[r] = a[r]); return { $$typeof: Ni, type: e, key: s, ref: o, props: i, _owner: Ga.current }; }
function ig(e, t) { return { $$typeof: Ni, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function qa(e) { return typeof e == "object" && e !== null && e.$$typeof === Ni; }
function sg(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var yc = /\/+/g;
function zo(e, t) { return typeof e == "object" && e !== null && e.key != null ? sg("" + e.key) : t.toString(36); }
function us(e, t, n, r, i) { var s = typeof e; (s === "undefined" || s === "boolean") && (e = null); var o = !1; if (e === null)
    o = !0;
else
    switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object": switch (e.$$typeof) {
            case Ni:
            case q0: o = !0;
        }
    } if (o)
    return o = e, i = i(o), e = r === "" ? "." + zo(o, 0) : r, vc(i) ? (n = "", e != null && (n = e.replace(yc, "$&/") + "/"), us(i, t, n, "", function (u) { return u; })) : i != null && (qa(i) && (i = ig(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(yc, "$&/") + "/") + e)), t.push(i)), 1; if (o = 0, r = r === "" ? "." : r + ":", vc(e))
    for (var a = 0; a < e.length; a++) {
        s = e[a];
        var l = r + zo(s, a);
        o += us(s, t, n, l, i);
    }
else if (l = rg(e), typeof l == "function")
    for (e = l.call(e), a = 0; !(s = e.next()).done;)
        s = s.value, l = r + zo(s, a++), o += us(s, t, n, l, i);
else if (s === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return o; }
function Fi(e, t, n) { if (e == null)
    return e; var r = [], i = 0; return us(e, r, "", "", function (s) { return t.call(n, s, i++); }), r; }
function og(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var Oe = { current: null }, cs = { transition: null }, lg = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: cs, ReactCurrentOwner: Ga };
F.Children = { map: Fi, forEach: function (e, t, n) { Fi(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return Fi(e, function () { t++; }), t; }, toArray: function (e) { return Fi(e, function (t) { return t; }) || []; }, only: function (e) { if (!qa(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
F.Component = Nr;
F.Fragment = K0;
F.Profiler = X0;
F.PureComponent = Ha;
F.StrictMode = Y0;
F.Suspense = eg;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg;
F.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = Of({}, e.props), i = e.key, s = e.ref, o = e._owner; if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = Ga.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
    for (l in t)
        Lf.call(t, l) && !Af.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
} var l = arguments.length - 2; if (l === 1)
    r.children = n;
else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++)
        a[u] = arguments[u + 2];
    r.children = a;
} return { $$typeof: Ni, type: e.type, key: i, ref: s, props: r, _owner: o }; };
F.createContext = function (e) { return e = { $$typeof: J0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Q0, _context: e }, e.Consumer = e; };
F.createElement = Mf;
F.createFactory = function (e) { var t = Mf.bind(null, e); return t.type = e, t; };
F.createRef = function () { return { current: null }; };
F.forwardRef = function (e) { return { $$typeof: Z0, render: e }; };
F.isValidElement = qa;
F.lazy = function (e) { return { $$typeof: ng, _payload: { _status: -1, _result: e }, _init: og }; };
F.memo = function (e, t) { return { $$typeof: tg, type: e, compare: t === void 0 ? null : t }; };
F.startTransition = function (e) { var t = cs.transition; cs.transition = {}; try {
    e();
}
finally {
    cs.transition = t;
} };
F.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); };
F.useCallback = function (e, t) { return Oe.current.useCallback(e, t); };
F.useContext = function (e) { return Oe.current.useContext(e); };
F.useDebugValue = function () { };
F.useDeferredValue = function (e) { return Oe.current.useDeferredValue(e); };
F.useEffect = function (e, t) { return Oe.current.useEffect(e, t); };
F.useId = function () { return Oe.current.useId(); };
F.useImperativeHandle = function (e, t, n) { return Oe.current.useImperativeHandle(e, t, n); };
F.useInsertionEffect = function (e, t) { return Oe.current.useInsertionEffect(e, t); };
F.useLayoutEffect = function (e, t) { return Oe.current.useLayoutEffect(e, t); };
F.useMemo = function (e, t) { return Oe.current.useMemo(e, t); };
F.useReducer = function (e, t, n) { return Oe.current.useReducer(e, t, n); };
F.useRef = function (e) { return Oe.current.useRef(e); };
F.useState = function (e) { return Oe.current.useState(e); };
F.useSyncExternalStore = function (e, t, n) { return Oe.current.useSyncExternalStore(e, t, n); };
F.useTransition = function () { return Oe.current.useTransition(); };
F.version = "18.2.0";
Tf.exports = F;
var E = Tf.exports;
const V = G0(E), ag = W0({ __proto__: null, default: V }, [E]); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ug = E, cg = Symbol.for("react.element"), dg = Symbol.for("react.fragment"), fg = Object.prototype.hasOwnProperty, pg = ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, hg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Df(e, t, n) { var r, i = {}, s = null, o = null; n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref); for (r in t)
    fg.call(t, r) && !hg.hasOwnProperty(r) && (i[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]); return { $$typeof: cg, type: e, key: s, ref: o, props: i, _owner: pg.current }; }
lo.Fragment = dg;
lo.jsx = Df;
lo.jsxs = Df;
Nf.exports = lo;
var Ka = Nf.exports;
const vr = Ka.Fragment, c = Ka.jsx, b = Ka.jsxs;
var Pl = {}, zf = { exports: {} }, Ke = {}, $f = { exports: {} }, Bf = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(P, A) { var z = P.length; P.push(A); e: for (; 0 < z;) {
    var J = z - 1 >>> 1, oe = P[J];
    if (0 < i(oe, A))
        P[J] = A, P[z] = oe, z = J;
    else
        break e;
} } function n(P) { return P.length === 0 ? null : P[0]; } function r(P) { if (P.length === 0)
    return null; var A = P[0], z = P.pop(); if (z !== A) {
    P[0] = z;
    e: for (var J = 0, oe = P.length, $i = oe >>> 1; J < $i;) {
        var En = 2 * (J + 1) - 1, Do = P[En], Cn = En + 1, Bi = P[Cn];
        if (0 > i(Do, z))
            Cn < oe && 0 > i(Bi, Do) ? (P[J] = Bi, P[Cn] = z, J = Cn) : (P[J] = Do, P[En] = z, J = En);
        else if (Cn < oe && 0 > i(Bi, z))
            P[J] = Bi, P[Cn] = z, J = Cn;
        else
            break e;
    }
} return A; } function i(P, A) { var z = P.sortIndex - A.sortIndex; return z !== 0 ? z : P.id - A.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () { return s.now(); };
}
else {
    var o = Date, a = o.now();
    e.unstable_now = function () { return o.now() - a; };
} var l = [], u = [], d = 1, f = null, h = 3, w = !1, m = !1, g = !1, x = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function y(P) { for (var A = n(u); A !== null;) {
    if (A.callback === null)
        r(u);
    else if (A.startTime <= P)
        r(u), A.sortIndex = A.expirationTime, t(l, A);
    else
        break;
    A = n(u);
} } function S(P) { if (g = !1, y(P), !m)
    if (n(l) !== null)
        m = !0, Sn(C);
    else {
        var A = n(u);
        A !== null && bn(S, A.startTime - P);
    } } function C(P, A) { m = !1, g && (g = !1, p(T), T = -1), w = !0; var z = h; try {
    for (y(A), f = n(l); f !== null && (!(f.expirationTime > A) || P && !D());) {
        var J = f.callback;
        if (typeof J == "function") {
            f.callback = null, h = f.priorityLevel;
            var oe = J(f.expirationTime <= A);
            A = e.unstable_now(), typeof oe == "function" ? f.callback = oe : f === n(l) && r(l), y(A);
        }
        else
            r(l);
        f = n(l);
    }
    if (f !== null)
        var $i = !0;
    else {
        var En = n(u);
        En !== null && bn(S, En.startTime - A), $i = !1;
    }
    return $i;
}
finally {
    f = null, h = z, w = !1;
} } var k = !1, O = null, T = -1, G = 5, I = -1; function D() { return !(e.unstable_now() - I < G); } function $() { if (O !== null) {
    var P = e.unstable_now();
    I = P;
    var A = !0;
    try {
        A = O(!0, P);
    }
    finally {
        A ? pe() : (k = !1, O = null);
    }
}
else
    k = !1; } var pe; if (typeof v == "function")
    pe = function () { v($); };
else if (typeof MessageChannel < "u") {
    var Ct = new MessageChannel, xn = Ct.port2;
    Ct.port1.onmessage = $, pe = function () { xn.postMessage(null); };
}
else
    pe = function () { x($, 0); }; function Sn(P) { O = P, k || (k = !0, pe()); } function bn(P, A) { T = x(function () { P(e.unstable_now()); }, A); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (P) { P.callback = null; }, e.unstable_continueExecution = function () { m || w || (m = !0, Sn(C)); }, e.unstable_forceFrameRate = function (P) { 0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < P ? Math.floor(1e3 / P) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return h; }, e.unstable_getFirstCallbackNode = function () { return n(l); }, e.unstable_next = function (P) { switch (h) {
    case 1:
    case 2:
    case 3:
        var A = 3;
        break;
    default: A = h;
} var z = h; h = A; try {
    return P();
}
finally {
    h = z;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (P, A) { switch (P) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: P = 3;
} var z = h; h = P; try {
    return A();
}
finally {
    h = z;
} }, e.unstable_scheduleCallback = function (P, A, z) { var J = e.unstable_now(); switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? J + z : J) : z = J, P) {
    case 1:
        var oe = -1;
        break;
    case 2:
        oe = 250;
        break;
    case 5:
        oe = 1073741823;
        break;
    case 4:
        oe = 1e4;
        break;
    default: oe = 5e3;
} return oe = z + oe, P = { id: d++, callback: A, priorityLevel: P, startTime: z, expirationTime: oe, sortIndex: -1 }, z > J ? (P.sortIndex = z, t(u, P), n(l) === null && P === n(u) && (g ? (p(T), T = -1) : g = !0, bn(S, z - J))) : (P.sortIndex = oe, t(l, P), m || w || (m = !0, Sn(C))), P; }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function (P) { var A = h; return function () { var z = h; h = A; try {
    return P.apply(this, arguments);
}
finally {
    h = z;
} }; }; })(Bf);
$f.exports = Bf;
var mg = $f.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ff = E, qe = mg;
function N(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var jf = new Set, oi = {};
function qn(e, t) { yr(e, t), yr(e + "Capture", t); }
function yr(e, t) { for (oi[e] = t, e = 0; e < t.length; e++)
    jf.add(t[e]); }
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rl = Object.prototype.hasOwnProperty, gg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wc = {}, xc = {};
function vg(e) { return Rl.call(xc, e) ? !0 : Rl.call(wc, e) ? !1 : gg.test(e) ? xc[e] = !0 : (wc[e] = !0, !1); }
function yg(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function wg(e, t, n, r) { if (t === null || typeof t > "u" || yg(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function Pe(e, t, n, r, i, s, o) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o; }
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { xe[e] = new Pe(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; xe[t] = new Pe(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { xe[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { xe[e] = new Pe(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { xe[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { xe[e] = new Pe(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { xe[e] = new Pe(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { xe[e] = new Pe(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { xe[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var Ya = /[\-:]([a-z])/g;
function Xa(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(Ya, Xa); xe[t] = new Pe(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(Ya, Xa); xe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(Ya, Xa); xe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { xe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1); });
xe.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { xe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function Qa(e, t, n, r) { var i = xe.hasOwnProperty(t) ? xe[t] : null; (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wg(t, n, i, r) && (n = null), r || i === null ? vg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var zt = Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ji = Symbol.for("react.element"), Jn = Symbol.for("react.portal"), Zn = Symbol.for("react.fragment"), Ja = Symbol.for("react.strict_mode"), Ll = Symbol.for("react.profiler"), Uf = Symbol.for("react.provider"), Vf = Symbol.for("react.context"), Za = Symbol.for("react.forward_ref"), Al = Symbol.for("react.suspense"), Ml = Symbol.for("react.suspense_list"), eu = Symbol.for("react.memo"), jt = Symbol.for("react.lazy"), Hf = Symbol.for("react.offscreen"), Sc = Symbol.iterator;
function Lr(e) { return e === null || typeof e != "object" ? null : (e = Sc && e[Sc] || e["@@iterator"], typeof e == "function" ? e : null); }
var te = Object.assign, $o;
function Vr(e) {
    if ($o === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            $o = t && t[1] || "";
        }
    return `
` + $o + e;
}
var Bo = !1;
function Fo(e, t) {
    if (!e || Bo)
        return "";
    Bo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (u) {
                r = u;
            }
            e();
        }
    }
    catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a];)
                a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                            }
                        while (1 <= o && 0 <= a);
                    break;
                }
        }
    }
    finally {
        Bo = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function xg(e) { switch (e.tag) {
    case 5: return Vr(e.type);
    case 16: return Vr("Lazy");
    case 13: return Vr("Suspense");
    case 19: return Vr("SuspenseList");
    case 0:
    case 2:
    case 15: return e = Fo(e.type, !1), e;
    case 11: return e = Fo(e.type.render, !1), e;
    case 1: return e = Fo(e.type, !0), e;
    default: return "";
} }
function Dl(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case Zn: return "Fragment";
    case Jn: return "Portal";
    case Ll: return "Profiler";
    case Ja: return "StrictMode";
    case Al: return "Suspense";
    case Ml: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case Vf: return (e.displayName || "Context") + ".Consumer";
        case Uf: return (e._context.displayName || "Context") + ".Provider";
        case Za:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case eu: return t = e.displayName || null, t !== null ? t : Dl(e.type) || "Memo";
        case jt:
            t = e._payload, e = e._init;
            try {
                return Dl(e(t));
            }
            catch (_j) { }
    } return null; }
function Sg(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return Dl(t);
    case 8: return t === Ja ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function fn(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function Wf(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function bg(e) { var t = Wf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return i.call(this); }, set: function (o) { r = "" + o, s.call(this, o); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (o) { r = "" + o; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function Ui(e) { e._valueTracker || (e._valueTracker = bg(e)); }
function Gf(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = Wf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function ks(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch (_j) {
    return e.body;
} }
function zl(e, t) { var n = t.checked; return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n !== null && n !== void 0 ? n : e._wrapperState.initialChecked }); }
function bc(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = fn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function qf(e, t) { t = t.checked, t != null && Qa(e, "checked", t, !1); }
function $l(e, t) { qf(e, t); var n = fn(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? Bl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bl(e, t.type, fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function Ec(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function Bl(e, t, n) { (t !== "number" || ks(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var Hr = Array.isArray;
function cr(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + fn(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
            e[i].selected = !0, r && (e[i].defaultSelected = !0);
            return;
        }
        t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
} }
function Fl(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(N(91)); return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function Cc(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(N(92));
        if (Hr(n)) {
            if (1 < n.length)
                throw Error(N(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: fn(n) }; }
function Kf(e, t) { var n = fn(t.value), r = fn(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function _c(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function Yf(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function jl(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Yf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var Vi, Xf = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, i); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (Vi = Vi || document.createElement("div"), Vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vi.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function li(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var qr = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Eg = ["Webkit", "ms", "Moz", "O"];
Object.keys(qr).forEach(function (e) { Eg.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), qr[t] = qr[e]; }); });
function Qf(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qr.hasOwnProperty(e) && qr[e] ? ("" + t).trim() : t + "px"; }
function Jf(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Qf(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    } }
var Cg = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ul(e, t) { if (t) {
    if (Cg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(N(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(N(62));
} }
function Vl(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var Hl = null;
function tu(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var Wl = null, dr = null, fr = null;
function kc(e) { if (e = Oi(e)) {
    if (typeof Wl != "function")
        throw Error(N(280));
    var t = e.stateNode;
    t && (t = po(t), Wl(e.stateNode, e.type, t));
} }
function Zf(e) { dr ? fr ? fr.push(e) : fr = [e] : dr = e; }
function ep() { if (dr) {
    var e = dr, t = fr;
    if (fr = dr = null, kc(e), t)
        for (e = 0; e < t.length; e++)
            kc(t[e]);
} }
function tp(e, t) { return e(t); }
function np() { }
var jo = !1;
function rp(e, t, n) { if (jo)
    return e(t, n); jo = !0; try {
    return tp(e, t, n);
}
finally {
    jo = !1, (dr !== null || fr !== null) && (np(), ep());
} }
function ai(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = po(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(N(231, t, typeof n)); return n; }
var Gl = !1;
if (Rt)
    try {
        var Ar = {};
        Object.defineProperty(Ar, "passive", { get: function () { Gl = !0; } }), window.addEventListener("test", Ar, Ar), window.removeEventListener("test", Ar, Ar);
    }
    catch (_j) {
        Gl = !1;
    }
function _g(e, t, n, r, i, s, o, a, l) { var u = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, u);
}
catch (d) {
    this.onError(d);
} }
var Kr = !1, Ns = null, Ts = !1, ql = null, kg = { onError: function (e) { Kr = !0, Ns = e; } };
function Ng(e, t, n, r, i, s, o, a, l) { Kr = !1, Ns = null, _g.apply(kg, arguments); }
function Tg(e, t, n, r, i, s, o, a, l) { if (Ng.apply(this, arguments), Kr) {
    if (Kr) {
        var u = Ns;
        Kr = !1, Ns = null;
    }
    else
        throw Error(N(198));
    Ts || (Ts = !0, ql = u);
} }
function Kn(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function ip(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function Nc(e) { if (Kn(e) !== e)
    throw Error(N(188)); }
function Ig(e) { var t = e.alternate; if (!t) {
    if (t = Kn(e), t === null)
        throw Error(N(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var i = n.return;
    if (i === null)
        break;
    var s = i.alternate;
    if (s === null) {
        if (r = i.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (i.child === s.child) {
        for (s = i.child; s;) {
            if (s === n)
                return Nc(i), e;
            if (s === r)
                return Nc(i), t;
            s = s.sibling;
        }
        throw Error(N(188));
    }
    if (n.return !== r.return)
        n = i, r = s;
    else {
        for (var o = !1, a = i.child; a;) {
            if (a === n) {
                o = !0, n = i, r = s;
                break;
            }
            if (a === r) {
                o = !0, r = i, n = s;
                break;
            }
            a = a.sibling;
        }
        if (!o) {
            for (a = s.child; a;) {
                if (a === n) {
                    o = !0, n = s, r = i;
                    break;
                }
                if (a === r) {
                    o = !0, r = s, n = i;
                    break;
                }
                a = a.sibling;
            }
            if (!o)
                throw Error(N(189));
        }
    }
    if (n.alternate !== r)
        throw Error(N(190));
} if (n.tag !== 3)
    throw Error(N(188)); return n.stateNode.current === n ? e : t; }
function sp(e) { return e = Ig(e), e !== null ? op(e) : null; }
function op(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = op(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var lp = qe.unstable_scheduleCallback, Tc = qe.unstable_cancelCallback, Og = qe.unstable_shouldYield, Pg = qe.unstable_requestPaint, se = qe.unstable_now, Rg = qe.unstable_getCurrentPriorityLevel, nu = qe.unstable_ImmediatePriority, ap = qe.unstable_UserBlockingPriority, Is = qe.unstable_NormalPriority, Lg = qe.unstable_LowPriority, up = qe.unstable_IdlePriority, ao = null, xt = null;
function Ag(e) { if (xt && typeof xt.onCommitFiberRoot == "function")
    try {
        xt.onCommitFiberRoot(ao, e, void 0, (e.current.flags & 128) === 128);
    }
    catch (_j) { } }
var dt = Math.clz32 ? Math.clz32 : zg, Mg = Math.log, Dg = Math.LN2;
function zg(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Mg(e) / Dg | 0) | 0; }
var Hi = 64, Wi = 4194304;
function Wr(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function Os(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455; if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? r = Wr(a) : (s &= o, s !== 0 && (r = Wr(s)));
}
else
    o = n & ~i, o !== 0 ? r = Wr(o) : s !== 0 && (r = Wr(s)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - dt(t), i = 1 << n, r |= e[n], t &= ~i; return r; }
function $g(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function Bg(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
    var o = 31 - dt(s), a = 1 << o, l = i[o];
    l === -1 ? (!(a & n) || a & r) && (i[o] = $g(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
} }
function Kl(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function cp() { var e = Hi; return Hi <<= 1, !(Hi & 4194240) && (Hi = 64), e; }
function Uo(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function Ti(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n; }
function Fg(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - dt(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
} }
function ru(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - dt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
} }
var W = 0;
function dp(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var fp, iu, pp, hp, mp, Yl = !1, Gi = [], Jt = null, Zt = null, en = null, ui = new Map, ci = new Map, Vt = [], jg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ic(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        Jt = null;
        break;
    case "dragenter":
    case "dragleave":
        Zt = null;
        break;
    case "mouseover":
    case "mouseout":
        en = null;
        break;
    case "pointerover":
    case "pointerout":
        ui.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": ci.delete(t.pointerId);
} }
function Mr(e, t, n, r, i, s) { return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = Oi(t), t !== null && iu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e); }
function Ug(e, t, n, r, i) { switch (t) {
    case "focusin": return Jt = Mr(Jt, e, t, n, r, i), !0;
    case "dragenter": return Zt = Mr(Zt, e, t, n, r, i), !0;
    case "mouseover": return en = Mr(en, e, t, n, r, i), !0;
    case "pointerover":
        var s = i.pointerId;
        return ui.set(s, Mr(ui.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture": return s = i.pointerId, ci.set(s, Mr(ci.get(s) || null, e, t, n, r, i)), !0;
} return !1; }
function gp(e) { var t = Tn(e.target); if (t !== null) {
    var n = Kn(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = ip(n), t !== null) {
                e.blockedOn = t, mp(e.priority, function () { pp(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function ds(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Hl = r, n.target.dispatchEvent(r), Hl = null;
    }
    else
        return t = Oi(n), t !== null && iu(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function Oc(e, t, n) { ds(e) && n.delete(t); }
function Vg() { Yl = !1, Jt !== null && ds(Jt) && (Jt = null), Zt !== null && ds(Zt) && (Zt = null), en !== null && ds(en) && (en = null), ui.forEach(Oc), ci.forEach(Oc); }
function Dr(e, t) { e.blockedOn === t && (e.blockedOn = null, Yl || (Yl = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Vg))); }
function di(e) { function t(i) { return Dr(i, e); } if (0 < Gi.length) {
    Dr(Gi[0], e);
    for (var n = 1; n < Gi.length; n++) {
        var r = Gi[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (Jt !== null && Dr(Jt, e), Zt !== null && Dr(Zt, e), en !== null && Dr(en, e), ui.forEach(t), ci.forEach(t), n = 0; n < Vt.length; n++)
    r = Vt[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < Vt.length && (n = Vt[0], n.blockedOn === null);)
    gp(n), n.blockedOn === null && Vt.shift(); }
var pr = zt.ReactCurrentBatchConfig, Ps = !0;
function Hg(e, t, n, r) { var i = W, s = pr.transition; pr.transition = null; try {
    W = 1, su(e, t, n, r);
}
finally {
    W = i, pr.transition = s;
} }
function Wg(e, t, n, r) { var i = W, s = pr.transition; pr.transition = null; try {
    W = 4, su(e, t, n, r);
}
finally {
    W = i, pr.transition = s;
} }
function su(e, t, n, r) { if (Ps) {
    var i = Xl(e, t, n, r);
    if (i === null)
        Jo(e, t, r, Rs, n), Ic(e, r);
    else if (Ug(i, e, t, n, r))
        r.stopPropagation();
    else if (Ic(e, r), t & 4 && -1 < jg.indexOf(e)) {
        for (; i !== null;) {
            var s = Oi(i);
            if (s !== null && fp(s), s = Xl(e, t, n, r), s === null && Jo(e, t, r, Rs, n), s === i)
                break;
            i = s;
        }
        i !== null && r.stopPropagation();
    }
    else
        Jo(e, t, r, null, n);
} }
var Rs = null;
function Xl(e, t, n, r) { if (Rs = null, e = tu(r), e = Tn(e), e !== null)
    if (t = Kn(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = ip(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return Rs = e, null; }
function vp(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (Rg()) {
        case nu: return 1;
        case ap: return 4;
        case Is:
        case Lg: return 16;
        case up: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var Gt = null, ou = null, fs = null;
function yp() { if (fs)
    return fs; var e, t = ou, n = t.length, r, i = "value" in Gt ? Gt.value : Gt.textContent, s = i.length; for (e = 0; e < n && t[e] === i[e]; e++)
    ; var o = n - e; for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
    ; return fs = i.slice(e, 1 < r ? 1 - r : void 0); }
function ps(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function qi() { return !0; }
function Pc() { return !1; }
function Ye(e) { function t(n, r, i, s, o) { this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null; for (var a in e)
    e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]); return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? qi : Pc, this.isPropagationStopped = Pc, this; } return te(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qi); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qi); }, persist: function () { }, isPersistent: qi }), t; }
var Tr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, lu = Ye(Tr), Ii = te({}, Tr, { view: 0, detail: 0 }), Gg = Ye(Ii), Vo, Ho, zr, uo = te({}, Ii, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: au, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (Vo = e.screenX - zr.screenX, Ho = e.screenY - zr.screenY) : Ho = Vo = 0, zr = e), Vo); }, movementY: function (e) { return "movementY" in e ? e.movementY : Ho; } }), Rc = Ye(uo), qg = te({}, uo, { dataTransfer: 0 }), Kg = Ye(qg), Yg = te({}, Ii, { relatedTarget: 0 }), Wo = Ye(Yg), Xg = te({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Qg = Ye(Xg), Jg = te({}, Tr, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), Zg = Ye(Jg), e1 = te({}, Tr, { data: 0 }), Lc = Ye(e1), t1 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, n1 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, r1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function i1(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = r1[e]) ? !!t[e] : !1; }
function au() { return i1; }
var s1 = te({}, Ii, { key: function (e) { if (e.key) {
        var t = t1[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = ps(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? n1[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: au, charCode: function (e) { return e.type === "keypress" ? ps(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? ps(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), o1 = Ye(s1), l1 = te({}, uo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ac = Ye(l1), a1 = te({}, Ii, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: au }), u1 = Ye(a1), c1 = te({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), d1 = Ye(c1), f1 = te({}, uo, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), p1 = Ye(f1), h1 = [9, 13, 27, 32], uu = Rt && "CompositionEvent" in window, Yr = null;
Rt && "documentMode" in document && (Yr = document.documentMode);
var m1 = Rt && "TextEvent" in window && !Yr, wp = Rt && (!uu || Yr && 8 < Yr && 11 >= Yr), Mc = String.fromCharCode(32), Dc = !1;
function xp(e, t) { switch (e) {
    case "keyup": return h1.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Sp(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var er = !1;
function g1(e, t) { switch (e) {
    case "compositionend": return Sp(t);
    case "keypress": return t.which !== 32 ? null : (Dc = !0, Mc);
    case "textInput": return e = t.data, e === Mc && Dc ? null : e;
    default: return null;
} }
function v1(e, t) { if (er)
    return e === "compositionend" || !uu && xp(e, t) ? (e = yp(), fs = ou = Gt = null, er = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return wp && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var y1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function zc(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!y1[e.type] : t === "textarea"; }
function bp(e, t, n, r) { Zf(r), t = Ls(t, "onChange"), 0 < t.length && (n = new lu("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var Xr = null, fi = null;
function w1(e) { Lp(e, 0); }
function co(e) { var t = rr(e); if (Gf(t))
    return e; }
function x1(e, t) { if (e === "change")
    return t; }
var Ep = !1;
if (Rt) {
    var Go;
    if (Rt) {
        var qo = "oninput" in document;
        if (!qo) {
            var $c = document.createElement("div");
            $c.setAttribute("oninput", "return;"), qo = typeof $c.oninput == "function";
        }
        Go = qo;
    }
    else
        Go = !1;
    Ep = Go && (!document.documentMode || 9 < document.documentMode);
}
function Bc() { Xr && (Xr.detachEvent("onpropertychange", Cp), fi = Xr = null); }
function Cp(e) { if (e.propertyName === "value" && co(fi)) {
    var t = [];
    bp(t, fi, e, tu(e)), rp(w1, t);
} }
function S1(e, t, n) { e === "focusin" ? (Bc(), Xr = t, fi = n, Xr.attachEvent("onpropertychange", Cp)) : e === "focusout" && Bc(); }
function b1(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return co(fi); }
function E1(e, t) { if (e === "click")
    return co(t); }
function C1(e, t) { if (e === "input" || e === "change")
    return co(t); }
function _1(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var pt = typeof Object.is == "function" ? Object.is : _1;
function pi(e, t) { if (pt(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Rl.call(t, i) || !pt(e[i], t[i]))
        return !1;
} return !0; }
function Fc(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function jc(e, t) { var n = Fc(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = Fc(n);
} }
function _p(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _p(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function kp() { for (var e = window, t = ks(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch (_j) {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = ks(e.document);
} return t; }
function cu(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function k1(e) { var t = kp(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && _p(n.ownerDocument.documentElement, n)) {
    if (r !== null && cu(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var i = n.textContent.length, s = Math.min(r.start, i);
            r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = jc(n, s);
            var o = jc(n, r);
            i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var N1 = Rt && "documentMode" in document && 11 >= document.documentMode, tr = null, Ql = null, Qr = null, Jl = !1;
function Uc(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Jl || tr == null || tr !== ks(r) || (r = tr, "selectionStart" in r && cu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Qr && pi(Qr, r) || (Qr = r, r = Ls(Ql, "onSelect"), 0 < r.length && (t = new lu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = tr))); }
function Ki(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var nr = { animationend: Ki("Animation", "AnimationEnd"), animationiteration: Ki("Animation", "AnimationIteration"), animationstart: Ki("Animation", "AnimationStart"), transitionend: Ki("Transition", "TransitionEnd") }, Ko = {}, Np = {};
Rt && (Np = document.createElement("div").style, "AnimationEvent" in window || (delete nr.animationend.animation, delete nr.animationiteration.animation, delete nr.animationstart.animation), "TransitionEvent" in window || delete nr.transitionend.transition);
function fo(e) { if (Ko[e])
    return Ko[e]; if (!nr[e])
    return e; var t = nr[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in Np)
        return Ko[e] = t[n]; return e; }
var Tp = fo("animationend"), Ip = fo("animationiteration"), Op = fo("animationstart"), Pp = fo("transitionend"), Rp = new Map, Vc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mn(e, t) { Rp.set(e, t), qn(t, [e]); }
for (var Yo = 0; Yo < Vc.length; Yo++) {
    var Xo = Vc[Yo], T1 = Xo.toLowerCase(), I1 = Xo[0].toUpperCase() + Xo.slice(1);
    mn(T1, "on" + I1);
}
mn(Tp, "onAnimationEnd");
mn(Ip, "onAnimationIteration");
mn(Op, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Pp, "onTransitionEnd");
yr("onMouseEnter", ["mouseout", "mouseover"]);
yr("onMouseLeave", ["mouseout", "mouseover"]);
yr("onPointerEnter", ["pointerout", "pointerover"]);
yr("onPointerLeave", ["pointerout", "pointerover"]);
qn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Gr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), O1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));
function Hc(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, Tg(r, t, void 0, e), e.currentTarget = null; }
function Lp(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
        var s = void 0;
        if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
                var a = r[o], l = a.instance, u = a.currentTarget;
                if (a = a.listener, l !== s && i.isPropagationStopped())
                    break e;
                Hc(i, a, u), s = l;
            }
        else
            for (o = 0; o < r.length; o++) {
                if (a = r[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped())
                    break e;
                Hc(i, a, u), s = l;
            }
    }
} if (Ts)
    throw e = ql, Ts = !1, ql = null, e; }
function K(e, t) { var n = t[ra]; n === void 0 && (n = t[ra] = new Set); var r = e + "__bubble"; n.has(r) || (Ap(t, e, 2, !1), n.add(r)); }
function Qo(e, t, n) { var r = 0; t && (r |= 4), Ap(n, e, r, t); }
var Yi = "_reactListening" + Math.random().toString(36).slice(2);
function hi(e) { if (!e[Yi]) {
    e[Yi] = !0, jf.forEach(function (n) { n !== "selectionchange" && (O1.has(n) || Qo(n, !1, e), Qo(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yi] || (t[Yi] = !0, Qo("selectionchange", !1, t));
} }
function Ap(e, t, n, r) { switch (vp(t)) {
    case 1:
        var i = Hg;
        break;
    case 4:
        i = Wg;
        break;
    default: i = su;
} n = i.bind(null, t, n, e), i = void 0, !Gl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1); }
function Jo(e, t, n, r, i) { var s = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i)
                break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var l = o.tag;
                    if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i))
                        return;
                    o = o.return;
                }
            for (; a !== null;) {
                if (o = Tn(a), o === null)
                    return;
                if (l = o.tag, l === 5 || l === 6) {
                    r = s = o;
                    continue e;
                }
                a = a.parentNode;
            }
        }
        r = r.return;
    } rp(function () { var u = s, d = tu(n), f = []; e: {
    var h = Rp.get(e);
    if (h !== void 0) {
        var w = lu, m = e;
        switch (e) {
            case "keypress": if (ps(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                w = o1;
                break;
            case "focusin":
                m = "focus", w = Wo;
                break;
            case "focusout":
                m = "blur", w = Wo;
                break;
            case "beforeblur":
            case "afterblur":
                w = Wo;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                w = Rc;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                w = Kg;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                w = u1;
                break;
            case Tp:
            case Ip:
            case Op:
                w = Qg;
                break;
            case Pp:
                w = d1;
                break;
            case "scroll":
                w = Gg;
                break;
            case "wheel":
                w = p1;
                break;
            case "copy":
            case "cut":
            case "paste":
                w = Zg;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": w = Ac;
        }
        var g = (t & 4) !== 0, x = !g && e === "scroll", p = g ? h !== null ? h + "Capture" : null : h;
        g = [];
        for (var v = u, y; v !== null;) {
            y = v;
            var S = y.stateNode;
            if (y.tag === 5 && S !== null && (y = S, p !== null && (S = ai(v, p), S != null && g.push(mi(v, S, y)))), x)
                break;
            v = v.return;
        }
        0 < g.length && (h = new w(h, m, null, n, d), f.push({ event: h, listeners: g }));
    }
} if (!(t & 7)) {
    e: {
        if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== Hl && (m = n.relatedTarget || n.fromElement) && (Tn(m) || m[Lt]))
            break e;
        if ((w || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (m = n.relatedTarget || n.toElement, w = u, m = m ? Tn(m) : null, m !== null && (x = Kn(m), m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (w = null, m = u), w !== m)) {
            if (g = Rc, S = "onMouseLeave", p = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (g = Ac, S = "onPointerLeave", p = "onPointerEnter", v = "pointer"), x = w == null ? h : rr(w), y = m == null ? h : rr(m), h = new g(S, v + "leave", w, n, d), h.target = x, h.relatedTarget = y, S = null, Tn(d) === u && (g = new g(p, v + "enter", m, n, d), g.target = y, g.relatedTarget = x, S = g), x = S, w && m)
                t: {
                    for (g = w, p = m, v = 0, y = g; y; y = Qn(y))
                        v++;
                    for (y = 0, S = p; S; S = Qn(S))
                        y++;
                    for (; 0 < v - y;)
                        g = Qn(g), v--;
                    for (; 0 < y - v;)
                        p = Qn(p), y--;
                    for (; v--;) {
                        if (g === p || p !== null && g === p.alternate)
                            break t;
                        g = Qn(g), p = Qn(p);
                    }
                    g = null;
                }
            else
                g = null;
            w !== null && Wc(f, h, w, g, !1), m !== null && x !== null && Wc(f, x, m, g, !0);
        }
    }
    e: {
        if (h = u ? rr(u) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file")
            var C = x1;
        else if (zc(h))
            if (Ep)
                C = C1;
            else {
                C = b1;
                var k = S1;
            }
        else
            (w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = E1);
        if (C && (C = C(e, u))) {
            bp(f, C, n, d);
            break e;
        }
        k && k(e, h, u), e === "focusout" && (k = h._wrapperState) && k.controlled && h.type === "number" && Bl(h, "number", h.value);
    }
    switch (k = u ? rr(u) : window, e) {
        case "focusin":
            (zc(k) || k.contentEditable === "true") && (tr = k, Ql = u, Qr = null);
            break;
        case "focusout":
            Qr = Ql = tr = null;
            break;
        case "mousedown":
            Jl = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            Jl = !1, Uc(f, n, d);
            break;
        case "selectionchange": if (N1)
            break;
        case "keydown":
        case "keyup": Uc(f, n, d);
    }
    var O;
    if (uu)
        e: {
            switch (e) {
                case "compositionstart":
                    var T = "onCompositionStart";
                    break e;
                case "compositionend":
                    T = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    T = "onCompositionUpdate";
                    break e;
            }
            T = void 0;
        }
    else
        er ? xp(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
    T && (wp && n.locale !== "ko" && (er || T !== "onCompositionStart" ? T === "onCompositionEnd" && er && (O = yp()) : (Gt = d, ou = "value" in Gt ? Gt.value : Gt.textContent, er = !0)), k = Ls(u, T), 0 < k.length && (T = new Lc(T, e, null, n, d), f.push({ event: T, listeners: k }), O ? T.data = O : (O = Sp(n), O !== null && (T.data = O)))), (O = m1 ? g1(e, n) : v1(e, n)) && (u = Ls(u, "onBeforeInput"), 0 < u.length && (d = new Lc("onBeforeInput", "beforeinput", null, n, d), f.push({ event: d, listeners: u }), d.data = O));
} Lp(f, t); }); }
function mi(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function Ls(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = ai(e, n), s != null && r.unshift(mi(e, s, i)), s = ai(e, t), s != null && r.push(mi(e, s, i))), e = e.return;
} return r; }
function Qn(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function Wc(e, t, n, r, i) { for (var s = t._reactName, o = []; n !== null && n !== r;) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r)
        break;
    a.tag === 5 && u !== null && (a = u, i ? (l = ai(n, s), l != null && o.unshift(mi(n, l, a))) : i || (l = ai(n, s), l != null && o.push(mi(n, l, a)))), n = n.return;
} o.length !== 0 && e.push({ event: t, listeners: o }); }
var P1 = /\r\n?/g, R1 = /\u0000|\uFFFD/g;
function Gc(e) {
    return (typeof e == "string" ? e : "" + e).replace(P1, `
`).replace(R1, "");
}
function Xi(e, t, n) { if (t = Gc(t), Gc(e) !== t && n)
    throw Error(N(425)); }
function As() { }
var Zl = null, ea = null;
function ta(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var na = typeof setTimeout == "function" ? setTimeout : void 0, L1 = typeof clearTimeout == "function" ? clearTimeout : void 0, qc = typeof Promise == "function" ? Promise : void 0, A1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof qc < "u" ? function (e) { return qc.resolve(null).then(e).catch(M1); } : na;
function M1(e) { setTimeout(function () { throw e; }); }
function Zo(e, t) { var n = t, r = 0; do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), di(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
} while (n); di(t); }
function tn(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function Kc(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var Ir = Math.random().toString(36).slice(2), vt = "__reactFiber$" + Ir, gi = "__reactProps$" + Ir, Lt = "__reactContainer$" + Ir, ra = "__reactEvents$" + Ir, D1 = "__reactListeners$" + Ir, z1 = "__reactHandles$" + Ir;
function Tn(e) { var t = e[vt]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[Lt] || n[vt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = Kc(e); e !== null;) {
                if (n = e[vt])
                    return n;
                e = Kc(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function Oi(e) { return e = e[vt] || e[Lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function rr(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(N(33)); }
function po(e) { return e[gi] || null; }
var ia = [], ir = -1;
function gn(e) { return { current: e }; }
function X(e) { 0 > ir || (e.current = ia[ir], ia[ir] = null, ir--); }
function q(e, t) { ir++, ia[ir] = e.current, e.current = t; }
var pn = {}, _e = gn(pn), Me = gn(!1), Mn = pn;
function wr(e, t) { var n = e.type.contextTypes; if (!n)
    return pn; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var i = {}, s; for (s in n)
    i[s] = t[s]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i; }
function De(e) { return e = e.childContextTypes, e != null; }
function Ms() { X(Me), X(_e); }
function Yc(e, t, n) { if (_e.current !== pn)
    throw Error(N(168)); q(_e, t), q(Me, n); }
function Mp(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var i in r)
    if (!(i in t))
        throw Error(N(108, Sg(e) || "Unknown", i)); return te({}, n, r); }
function Ds(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, Mn = _e.current, q(_e, e), q(Me, Me.current), !0; }
function Xc(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(N(169)); n ? (e = Mp(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, X(Me), X(_e), q(_e, e)) : X(Me), q(Me, n); }
var Nt = null, ho = !1, el = !1;
function Dp(e) { Nt === null ? Nt = [e] : Nt.push(e); }
function $1(e) { ho = !0, Dp(e); }
function vn() { if (!el && Nt !== null) {
    el = !0;
    var e = 0, t = W;
    try {
        var n = Nt;
        for (W = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        Nt = null, ho = !1;
    }
    catch (i) {
        throw Nt !== null && (Nt = Nt.slice(e + 1)), lp(nu, vn), i;
    }
    finally {
        W = t, el = !1;
    }
} return null; }
var sr = [], or = 0, zs = null, $s = 0, Xe = [], Qe = 0, Dn = null, Tt = 1, It = "";
function _n(e, t) { sr[or++] = $s, sr[or++] = zs, zs = e, $s = t; }
function zp(e, t, n) { Xe[Qe++] = Tt, Xe[Qe++] = It, Xe[Qe++] = Dn, Dn = e; var r = Tt; e = It; var i = 32 - dt(r) - 1; r &= ~(1 << i), n += 1; var s = 32 - dt(t) + i; if (30 < s) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Tt = 1 << 32 - dt(t) + i | n << i | r, It = s + e;
}
else
    Tt = 1 << s | n << i | r, It = e; }
function du(e) { e.return !== null && (_n(e, 1), zp(e, 1, 0)); }
function fu(e) { for (; e === zs;)
    zs = sr[--or], sr[or] = null, $s = sr[--or], sr[or] = null; for (; e === Dn;)
    Dn = Xe[--Qe], Xe[Qe] = null, It = Xe[--Qe], Xe[Qe] = null, Tt = Xe[--Qe], Xe[Qe] = null; }
var Ve = null, je = null, Q = !1, ct = null;
function $p(e, t) { var n = Je(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function Qc(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, je = tn(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, je = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dn !== null ? { id: Tt, overflow: It } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, je = null, !0) : !1;
    default: return !1;
} }
function sa(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function oa(e) { if (Q) {
    var t = je;
    if (t) {
        var n = t;
        if (!Qc(e, t)) {
            if (sa(e))
                throw Error(N(418));
            t = tn(n.nextSibling);
            var r = Ve;
            t && Qc(e, t) ? $p(r, n) : (e.flags = e.flags & -4097 | 2, Q = !1, Ve = e);
        }
    }
    else {
        if (sa(e))
            throw Error(N(418));
        e.flags = e.flags & -4097 | 2, Q = !1, Ve = e;
    }
} }
function Jc(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Ve = e; }
function Qi(e) { if (e !== Ve)
    return !1; if (!Q)
    return Jc(e), Q = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ta(e.type, e.memoizedProps)), t && (t = je)) {
    if (sa(e))
        throw Bp(), Error(N(418));
    for (; t;)
        $p(e, t), t = tn(t.nextSibling);
} if (Jc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(N(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        je = tn(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        je = null;
    }
}
else
    je = Ve ? tn(e.stateNode.nextSibling) : null; return !0; }
function Bp() { for (var e = je; e;)
    e = tn(e.nextSibling); }
function xr() { je = Ve = null, Q = !1; }
function pu(e) { ct === null ? ct = [e] : ct.push(e); }
var B1 = zt.ReactCurrentBatchConfig;
function at(e, t) { if (e && e.defaultProps) {
    t = te({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
var Bs = gn(null), Fs = null, lr = null, hu = null;
function mu() { hu = lr = Fs = null; }
function gu(e) { var t = Bs.current; X(Bs), e._currentValue = t; }
function la(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function hr(e, t) { Fs = e, hu = lr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0), e.firstContext = null); }
function st(e) { var t = e._currentValue; if (hu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, lr === null) {
        if (Fs === null)
            throw Error(N(308));
        lr = e, Fs.dependencies = { lanes: 0, firstContext: e };
    }
    else
        lr = lr.next = e; return t; }
var In = null;
function vu(e) { In === null ? In = [e] : In.push(e); }
function Fp(e, t, n, r) { var i = t.interleaved; return i === null ? (n.next = n, vu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, At(e, r); }
function At(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var Ut = !1;
function yu(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function jp(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function Ot(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function nn(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, U & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, At(e, n);
} return i = r.interleaved, i === null ? (t.next = t, vu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, At(e, n); }
function hs(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ru(e, n);
} }
function Zc(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            s === null ? i = s = o : s = s.next = o, n = n.next;
        } while (n !== null);
        s === null ? i = s = t : s = s.next = t;
    }
    else
        i = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function js(e, t, n, r) { var i = e.updateQueue; Ut = !1; var s = i.firstBaseUpdate, o = i.lastBaseUpdate, a = i.shared.pending; if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, o === null ? s = u : o.next = u, o = l;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== o && (a === null ? d.firstBaseUpdate = u : a.next = u, d.lastBaseUpdate = l));
} if (s !== null) {
    var f = i.baseState;
    o = 0, d = u = l = null, a = s;
    do {
        var h = a.lane, w = a.eventTime;
        if ((r & h) === h) {
            d !== null && (d = d.next = { eventTime: w, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
            e: {
                var m = e, g = a;
                switch (h = t, w = n, g.tag) {
                    case 1:
                        if (m = g.payload, typeof m == "function") {
                            f = m.call(w, f, h);
                            break e;
                        }
                        f = m;
                        break e;
                    case 3: m.flags = m.flags & -65537 | 128;
                    case 0:
                        if (m = g.payload, h = typeof m == "function" ? m.call(w, f, h) : m, h == null)
                            break e;
                        f = te({}, f, h);
                        break e;
                    case 2: Ut = !0;
                }
            }
            a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a));
        }
        else
            w = { eventTime: w, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, d === null ? (u = d = w, l = f) : d = d.next = w, o |= h;
        if (a = a.next, a === null) {
            if (a = i.shared.pending, a === null)
                break;
            h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null;
        }
    } while (1);
    if (d === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
        i = t;
        do
            o |= i.lane, i = i.next;
        while (i !== t);
    }
    else
        s === null && (i.shared.lanes = 0);
    $n |= o, e.lanes = o, e.memoizedState = f;
} }
function ed(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function")
                throw Error(N(191, i));
            i.call(r);
        }
    } }
var Up = new Ff.Component().refs;
function aa(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var mo = { isMounted: function (e) { return (e = e._reactInternals) ? Kn(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Ie(), i = sn(e), s = Ot(r, i); s.payload = t, n != null && (s.callback = n), t = nn(e, s, i), t !== null && (ft(t, e, i, r), hs(t, e, i)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Ie(), i = sn(e), s = Ot(r, i); s.tag = 1, s.payload = t, n != null && (s.callback = n), t = nn(e, s, i), t !== null && (ft(t, e, i, r), hs(t, e, i)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Ie(), r = sn(e), i = Ot(n, r); i.tag = 2, t != null && (i.callback = t), t = nn(e, i, r), t !== null && (ft(t, e, r, n), hs(t, e, r)); } };
function td(e, t, n, r, i, s, o) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !pi(n, r) || !pi(i, s) : !0; }
function Vp(e, t, n) { var r = !1, i = pn, s = t.contextType; return typeof s == "object" && s !== null ? s = st(s) : (i = De(t) ? Mn : _e.current, r = t.contextTypes, s = (r = r != null) ? wr(e, i) : pn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = mo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t; }
function nd(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mo.enqueueReplaceState(t, t.state, null); }
function ua(e, t, n, r) { var i = e.stateNode; i.props = n, i.state = e.memoizedState, i.refs = Up, yu(e); var s = t.contextType; typeof s == "object" && s !== null ? i.context = st(s) : (s = De(t) ? Mn : _e.current, i.context = wr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (aa(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && mo.enqueueReplaceState(i, i.state, null), js(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308); }
function $r(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(N(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(N(147, e));
        var i = r, s = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function (o) { var a = i.refs; a === Up && (a = i.refs = {}), o === null ? delete a[s] : a[s] = o; }, t._stringRef = s, t);
    }
    if (typeof e != "string")
        throw Error(N(284));
    if (!n._owner)
        throw Error(N(290, e));
} return e; }
function Ji(e, t) { throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function rd(e) { var t = e._init; return t(e._payload); }
function Hp(e) { function t(p, v) { if (e) {
    var y = p.deletions;
    y === null ? (p.deletions = [v], p.flags |= 16) : y.push(v);
} } function n(p, v) { if (!e)
    return null; for (; v !== null;)
    t(p, v), v = v.sibling; return null; } function r(p, v) { for (p = new Map; v !== null;)
    v.key !== null ? p.set(v.key, v) : p.set(v.index, v), v = v.sibling; return p; } function i(p, v) { return p = on(p, v), p.index = 0, p.sibling = null, p; } function s(p, v, y) { return p.index = y, e ? (y = p.alternate, y !== null ? (y = y.index, y < v ? (p.flags |= 2, v) : y) : (p.flags |= 2, v)) : (p.flags |= 1048576, v); } function o(p) { return e && p.alternate === null && (p.flags |= 2), p; } function a(p, v, y, S) { return v === null || v.tag !== 6 ? (v = ll(y, p.mode, S), v.return = p, v) : (v = i(v, y), v.return = p, v); } function l(p, v, y, S) { var C = y.type; return C === Zn ? d(p, v, y.props.children, S, y.key) : v !== null && (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === jt && rd(C) === v.type) ? (S = i(v, y.props), S.ref = $r(p, v, y), S.return = p, S) : (S = xs(y.type, y.key, y.props, null, p.mode, S), S.ref = $r(p, v, y), S.return = p, S); } function u(p, v, y, S) { return v === null || v.tag !== 4 || v.stateNode.containerInfo !== y.containerInfo || v.stateNode.implementation !== y.implementation ? (v = al(y, p.mode, S), v.return = p, v) : (v = i(v, y.children || []), v.return = p, v); } function d(p, v, y, S, C) { return v === null || v.tag !== 7 ? (v = Ln(y, p.mode, S, C), v.return = p, v) : (v = i(v, y), v.return = p, v); } function f(p, v, y) { if (typeof v == "string" && v !== "" || typeof v == "number")
    return v = ll("" + v, p.mode, y), v.return = p, v; if (typeof v == "object" && v !== null) {
    switch (v.$$typeof) {
        case ji: return y = xs(v.type, v.key, v.props, null, p.mode, y), y.ref = $r(p, null, v), y.return = p, y;
        case Jn: return v = al(v, p.mode, y), v.return = p, v;
        case jt:
            var S = v._init;
            return f(p, S(v._payload), y);
    }
    if (Hr(v) || Lr(v))
        return v = Ln(v, p.mode, y, null), v.return = p, v;
    Ji(p, v);
} return null; } function h(p, v, y, S) { var C = v !== null ? v.key : null; if (typeof y == "string" && y !== "" || typeof y == "number")
    return C !== null ? null : a(p, v, "" + y, S); if (typeof y == "object" && y !== null) {
    switch (y.$$typeof) {
        case ji: return y.key === C ? l(p, v, y, S) : null;
        case Jn: return y.key === C ? u(p, v, y, S) : null;
        case jt: return C = y._init, h(p, v, C(y._payload), S);
    }
    if (Hr(y) || Lr(y))
        return C !== null ? null : d(p, v, y, S, null);
    Ji(p, y);
} return null; } function w(p, v, y, S, C) { if (typeof S == "string" && S !== "" || typeof S == "number")
    return p = p.get(y) || null, a(v, p, "" + S, C); if (typeof S == "object" && S !== null) {
    switch (S.$$typeof) {
        case ji: return p = p.get(S.key === null ? y : S.key) || null, l(v, p, S, C);
        case Jn: return p = p.get(S.key === null ? y : S.key) || null, u(v, p, S, C);
        case jt:
            var k = S._init;
            return w(p, v, y, k(S._payload), C);
    }
    if (Hr(S) || Lr(S))
        return p = p.get(y) || null, d(v, p, S, C, null);
    Ji(v, S);
} return null; } function m(p, v, y, S) { for (var C = null, k = null, O = v, T = v = 0, G = null; O !== null && T < y.length; T++) {
    O.index > T ? (G = O, O = null) : G = O.sibling;
    var I = h(p, O, y[T], S);
    if (I === null) {
        O === null && (O = G);
        break;
    }
    e && O && I.alternate === null && t(p, O), v = s(I, v, T), k === null ? C = I : k.sibling = I, k = I, O = G;
} if (T === y.length)
    return n(p, O), Q && _n(p, T), C; if (O === null) {
    for (; T < y.length; T++)
        O = f(p, y[T], S), O !== null && (v = s(O, v, T), k === null ? C = O : k.sibling = O, k = O);
    return Q && _n(p, T), C;
} for (O = r(p, O); T < y.length; T++)
    G = w(O, p, T, y[T], S), G !== null && (e && G.alternate !== null && O.delete(G.key === null ? T : G.key), v = s(G, v, T), k === null ? C = G : k.sibling = G, k = G); return e && O.forEach(function (D) { return t(p, D); }), Q && _n(p, T), C; } function g(p, v, y, S) { var C = Lr(y); if (typeof C != "function")
    throw Error(N(150)); if (y = C.call(y), y == null)
    throw Error(N(151)); for (var k = C = null, O = v, T = v = 0, G = null, I = y.next(); O !== null && !I.done; T++, I = y.next()) {
    O.index > T ? (G = O, O = null) : G = O.sibling;
    var D = h(p, O, I.value, S);
    if (D === null) {
        O === null && (O = G);
        break;
    }
    e && O && D.alternate === null && t(p, O), v = s(D, v, T), k === null ? C = D : k.sibling = D, k = D, O = G;
} if (I.done)
    return n(p, O), Q && _n(p, T), C; if (O === null) {
    for (; !I.done; T++, I = y.next())
        I = f(p, I.value, S), I !== null && (v = s(I, v, T), k === null ? C = I : k.sibling = I, k = I);
    return Q && _n(p, T), C;
} for (O = r(p, O); !I.done; T++, I = y.next())
    I = w(O, p, T, I.value, S), I !== null && (e && I.alternate !== null && O.delete(I.key === null ? T : I.key), v = s(I, v, T), k === null ? C = I : k.sibling = I, k = I); return e && O.forEach(function ($) { return t(p, $); }), Q && _n(p, T), C; } function x(p, v, y, S) { if (typeof y == "object" && y !== null && y.type === Zn && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
    switch (y.$$typeof) {
        case ji:
            e: {
                for (var C = y.key, k = v; k !== null;) {
                    if (k.key === C) {
                        if (C = y.type, C === Zn) {
                            if (k.tag === 7) {
                                n(p, k.sibling), v = i(k, y.props.children), v.return = p, p = v;
                                break e;
                            }
                        }
                        else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === jt && rd(C) === k.type) {
                            n(p, k.sibling), v = i(k, y.props), v.ref = $r(p, k, y), v.return = p, p = v;
                            break e;
                        }
                        n(p, k);
                        break;
                    }
                    else
                        t(p, k);
                    k = k.sibling;
                }
                y.type === Zn ? (v = Ln(y.props.children, p.mode, S, y.key), v.return = p, p = v) : (S = xs(y.type, y.key, y.props, null, p.mode, S), S.ref = $r(p, v, y), S.return = p, p = S);
            }
            return o(p);
        case Jn:
            e: {
                for (k = y.key; v !== null;) {
                    if (v.key === k)
                        if (v.tag === 4 && v.stateNode.containerInfo === y.containerInfo && v.stateNode.implementation === y.implementation) {
                            n(p, v.sibling), v = i(v, y.children || []), v.return = p, p = v;
                            break e;
                        }
                        else {
                            n(p, v);
                            break;
                        }
                    else
                        t(p, v);
                    v = v.sibling;
                }
                v = al(y, p.mode, S), v.return = p, p = v;
            }
            return o(p);
        case jt: return k = y._init, x(p, v, k(y._payload), S);
    }
    if (Hr(y))
        return m(p, v, y, S);
    if (Lr(y))
        return g(p, v, y, S);
    Ji(p, y);
} return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, v !== null && v.tag === 6 ? (n(p, v.sibling), v = i(v, y), v.return = p, p = v) : (n(p, v), v = ll(y, p.mode, S), v.return = p, p = v), o(p)) : n(p, v); } return x; }
var Sr = Hp(!0), Wp = Hp(!1), Pi = {}, St = gn(Pi), vi = gn(Pi), yi = gn(Pi);
function On(e) { if (e === Pi)
    throw Error(N(174)); return e; }
function wu(e, t) { switch (q(yi, t), q(vi, e), q(St, Pi), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : jl(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jl(t, e);
} X(St), q(St, t); }
function br() { X(St), X(vi), X(yi); }
function Gp(e) { On(yi.current); var t = On(St.current), n = jl(t, e.type); t !== n && (q(vi, e), q(St, n)); }
function xu(e) { vi.current === e && (X(St), X(vi)); }
var Z = gn(0);
function Us(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var tl = [];
function Su() { for (var e = 0; e < tl.length; e++)
    tl[e]._workInProgressVersionPrimary = null; tl.length = 0; }
var ms = zt.ReactCurrentDispatcher, nl = zt.ReactCurrentBatchConfig, zn = 0, ee = null, ce = null, he = null, Vs = !1, Jr = !1, wi = 0, F1 = 0;
function Se() { throw Error(N(321)); }
function bu(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n]))
        return !1; return !0; }
function Eu(e, t, n, r, i, s) { if (zn = s, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ms.current = e === null || e.memoizedState === null ? H1 : W1, e = n(r, i), Jr) {
    s = 0;
    do {
        if (Jr = !1, wi = 0, 25 <= s)
            throw Error(N(301));
        s += 1, he = ce = null, t.updateQueue = null, ms.current = G1, e = n(r, i);
    } while (Jr);
} if (ms.current = Hs, t = ce !== null && ce.next !== null, zn = 0, he = ce = ee = null, Vs = !1, t)
    throw Error(N(300)); return e; }
function Cu() { var e = wi !== 0; return wi = 0, e; }
function gt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return he === null ? ee.memoizedState = he = e : he = he.next = e, he; }
function ot() { if (ce === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = ce.next; var t = he === null ? ee.memoizedState : he.next; if (t !== null)
    he = t, ce = e;
else {
    if (e === null)
        throw Error(N(310));
    ce = e, e = { memoizedState: ce.memoizedState, baseState: ce.baseState, baseQueue: ce.baseQueue, queue: ce.queue, next: null }, he === null ? ee.memoizedState = he = e : he = he.next = e;
} return he; }
function xi(e, t) { return typeof t == "function" ? t(e) : t; }
function rl(e) { var t = ot(), n = t.queue; if (n === null)
    throw Error(N(311)); n.lastRenderedReducer = e; var r = ce, i = r.baseQueue, s = n.pending; if (s !== null) {
    if (i !== null) {
        var o = i.next;
        i.next = s.next, s.next = o;
    }
    r.baseQueue = i = s, n.pending = null;
} if (i !== null) {
    s = i.next, r = r.baseState;
    var a = o = null, l = null, u = s;
    do {
        var d = u.lane;
        if ((zn & d) === d)
            l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
            var f = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
            l === null ? (a = l = f, o = r) : l = l.next = f, ee.lanes |= d, $n |= d;
        }
        u = u.next;
    } while (u !== null && u !== s);
    l === null ? o = r : l.next = a, pt(r, t.memoizedState) || (Ae = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    i = e;
    do
        s = i.lane, ee.lanes |= s, $n |= s, i = i.next;
    while (i !== e);
}
else
    i === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function il(e) { var t = ot(), n = t.queue; if (n === null)
    throw Error(N(311)); n.lastRenderedReducer = e; var r = n.dispatch, i = n.pending, s = t.memoizedState; if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
        s = e(s, o.action), o = o.next;
    while (o !== i);
    pt(s, t.memoizedState) || (Ae = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
} return [s, r]; }
function qp() { }
function Kp(e, t) { var n = ee, r = ot(), i = t(), s = !pt(r.memoizedState, i); if (s && (r.memoizedState = i, Ae = !0), r = r.queue, _u(Qp.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || he !== null && he.memoizedState.tag & 1) {
    if (n.flags |= 2048, Si(9, Xp.bind(null, n, r, i, t), void 0, null), me === null)
        throw Error(N(349));
    zn & 30 || Yp(n, t, i);
} return i; }
function Yp(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function Xp(e, t, n, r) { t.value = n, t.getSnapshot = r, Jp(t) && Zp(e); }
function Qp(e, t, n) { return n(function () { Jp(t) && Zp(e); }); }
function Jp(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !pt(e, n);
}
catch (_j) {
    return !0;
} }
function Zp(e) { var t = At(e, 1); t !== null && ft(t, e, 1, -1); }
function id(e) { var t = gt(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xi, lastRenderedState: e }, t.queue = e, e = e.dispatch = V1.bind(null, ee, e), [t.memoizedState, e]; }
function Si(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function eh() { return ot().memoizedState; }
function gs(e, t, n, r) { var i = gt(); ee.flags |= e, i.memoizedState = Si(1 | t, n, void 0, r === void 0 ? null : r); }
function go(e, t, n, r) { var i = ot(); r = r === void 0 ? null : r; var s = void 0; if (ce !== null) {
    var o = ce.memoizedState;
    if (s = o.destroy, r !== null && bu(r, o.deps)) {
        i.memoizedState = Si(t, n, s, r);
        return;
    }
} ee.flags |= e, i.memoizedState = Si(1 | t, n, s, r); }
function sd(e, t) { return gs(8390656, 8, e, t); }
function _u(e, t) { return go(2048, 8, e, t); }
function th(e, t) { return go(4, 2, e, t); }
function nh(e, t) { return go(4, 4, e, t); }
function rh(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function ih(e, t, n) { return n = n != null ? n.concat([e]) : null, go(4, 4, rh.bind(null, t, e), n); }
function ku() { }
function sh(e, t) { var n = ot(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && bu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function oh(e, t) { var n = ot(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && bu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function lh(e, t, n) { return zn & 21 ? (pt(n, t) || (n = cp(), ee.lanes |= n, $n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ae = !0), e.memoizedState = n); }
function j1(e, t) { var n = W; W = n !== 0 && 4 > n ? n : 4, e(!0); var r = nl.transition; nl.transition = {}; try {
    e(!1), t();
}
finally {
    W = n, nl.transition = r;
} }
function ah() { return ot().memoizedState; }
function U1(e, t, n) { var r = sn(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, uh(e))
    ch(t, n);
else if (n = Fp(e, t, n, r), n !== null) {
    var i = Ie();
    ft(n, e, r, i), dh(n, t, r);
} }
function V1(e, t, n) { var r = sn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (uh(e))
    ch(t, i);
else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
            var o = t.lastRenderedState, a = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = a, pt(a, o)) {
                var l = t.interleaved;
                l === null ? (i.next = i, vu(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return;
            }
        }
        catch (_j) { }
        finally { }
    n = Fp(e, t, i, r), n !== null && (i = Ie(), ft(n, e, r, i), dh(n, t, r));
} }
function uh(e) { var t = e.alternate; return e === ee || t !== null && t === ee; }
function ch(e, t) { Jr = Vs = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function dh(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ru(e, n);
} }
var Hs = { readContext: st, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, H1 = { readContext: st, useCallback: function (e, t) { return gt().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: st, useEffect: sd, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, gs(4194308, 4, rh.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return gs(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return gs(4, 2, e, t); }, useMemo: function (e, t) { var n = gt(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = gt(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = U1.bind(null, ee, e), [r.memoizedState, e]; }, useRef: function (e) { var t = gt(); return e = { current: e }, t.memoizedState = e; }, useState: id, useDebugValue: ku, useDeferredValue: function (e) { return gt().memoizedState = e; }, useTransition: function () { var e = id(!1), t = e[0]; return e = j1.bind(null, e[1]), gt().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = ee, i = gt(); if (Q) {
        if (n === void 0)
            throw Error(N(407));
        n = n();
    }
    else {
        if (n = t(), me === null)
            throw Error(N(349));
        zn & 30 || Yp(r, t, n);
    } i.memoizedState = n; var s = { value: n, getSnapshot: t }; return i.queue = s, sd(Qp.bind(null, r, s, e), [e]), r.flags |= 2048, Si(9, Xp.bind(null, r, s, n, t), void 0, null), n; }, useId: function () { var e = gt(), t = me.identifierPrefix; if (Q) {
        var n = It, r = Tt;
        n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = F1++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, W1 = { readContext: st, useCallback: sh, useContext: st, useEffect: _u, useImperativeHandle: ih, useInsertionEffect: th, useLayoutEffect: nh, useMemo: oh, useReducer: rl, useRef: eh, useState: function () { return rl(xi); }, useDebugValue: ku, useDeferredValue: function (e) { var t = ot(); return lh(t, ce.memoizedState, e); }, useTransition: function () { var e = rl(xi)[0], t = ot().memoizedState; return [e, t]; }, useMutableSource: qp, useSyncExternalStore: Kp, useId: ah, unstable_isNewReconciler: !1 }, G1 = { readContext: st, useCallback: sh, useContext: st, useEffect: _u, useImperativeHandle: ih, useInsertionEffect: th, useLayoutEffect: nh, useMemo: oh, useReducer: il, useRef: eh, useState: function () { return il(xi); }, useDebugValue: ku, useDeferredValue: function (e) { var t = ot(); return ce === null ? t.memoizedState = e : lh(t, ce.memoizedState, e); }, useTransition: function () { var e = il(xi)[0], t = ot().memoizedState; return [e, t]; }, useMutableSource: qp, useSyncExternalStore: Kp, useId: ah, unstable_isNewReconciler: !1 };
function Er(e, t) {
    try {
        var n = "", r = t;
        do
            n += xg(r), r = r.return;
        while (r);
        var i = n;
    }
    catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function sl(e, t, n) { return { value: e, source: null, stack: n !== null && n !== void 0 ? n : null, digest: t !== null && t !== void 0 ? t : null }; }
function ca(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var q1 = typeof WeakMap == "function" ? WeakMap : Map;
function fh(e, t, n) { n = Ot(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Gs || (Gs = !0, xa = r), ca(e, t); }, n; }
function ph(e, t, n) { n = Ot(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var i = t.value;
    n.payload = function () { return r(i); }, n.callback = function () { ca(e, t); };
} var s = e.stateNode; return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () { ca(e, t), typeof r != "function" && (rn === null ? rn = new Set([this]) : rn.add(this)); var o = t.stack; this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" }); }), n; }
function od(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new q1;
    var i = new Set;
    r.set(t, i);
}
else
    i = r.get(t), i === void 0 && (i = new Set, r.set(t, i)); i.has(n) || (i.add(n), e = lv.bind(null, e, t, n), t.then(e, e)); }
function ld(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function ad(e, t, n, r, i) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e); }
var K1 = zt.ReactCurrentOwner, Ae = !1;
function Te(e, t, n, r) { t.child = e === null ? Wp(t, null, n, r) : Sr(t, e.child, n, r); }
function ud(e, t, n, r, i) { n = n.render; var s = t.ref; return hr(t, i), r = Eu(e, t, n, r, s, i), n = Cu(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mt(e, t, i)) : (Q && n && du(t), t.flags |= 1, Te(e, t, r, i), t.child); }
function cd(e, t, n, r, i) { if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Au(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, hh(e, t, s, r, i)) : (e = xs(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
} if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : pi, n(o, r) && e.ref === t.ref)
        return Mt(e, t, i);
} return t.flags |= 1, e = on(s, r), e.ref = t.ref, e.return = t, t.child = e; }
function hh(e, t, n, r, i) { if (e !== null) {
    var s = e.memoizedProps;
    if (pi(s, r) && e.ref === t.ref)
        if (Ae = !1, t.pendingProps = r = s, (e.lanes & i) !== 0)
            e.flags & 131072 && (Ae = !0);
        else
            return t.lanes = e.lanes, Mt(e, t, i);
} return da(e, t, n, r, i); }
function mh(e, t, n) { var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, q(ur, Be), Be |= n;
    else {
        if (!(n & 1073741824))
            return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, q(ur, Be), Be |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, q(ur, Be), Be |= r;
    }
else
    s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, q(ur, Be), Be |= r; return Te(e, t, i, n), t.child; }
function gh(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function da(e, t, n, r, i) { var s = De(n) ? Mn : _e.current; return s = wr(t, s), hr(t, i), n = Eu(e, t, n, r, s, i), r = Cu(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mt(e, t, i)) : (Q && r && du(t), t.flags |= 1, Te(e, t, n, i), t.child); }
function dd(e, t, n, r, i) { if (De(n)) {
    var s = !0;
    Ds(t);
}
else
    s = !1; if (hr(t, i), t.stateNode === null)
    vs(e, t), Vp(t, n, r), ua(t, n, r, i), r = !0;
else if (e === null) {
    var o = t.stateNode, a = t.memoizedProps;
    o.props = a;
    var l = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = st(u) : (u = De(n) ? Mn : _e.current, u = wr(t, u));
    var d = n.getDerivedStateFromProps, f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && nd(t, o, r, u), Ut = !1;
    var h = t.memoizedState;
    o.state = h, js(t, r, o, i), l = t.memoizedState, a !== r || h !== l || Me.current || Ut ? (typeof d == "function" && (aa(t, n, d, r), l = t.memoizedState), (a = Ut || td(t, n, a, r, h, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    o = t.stateNode, jp(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : at(t.type, a), o.props = u, f = t.pendingProps, h = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = st(l) : (l = De(n) ? Mn : _e.current, l = wr(t, l));
    var w = n.getDerivedStateFromProps;
    (d = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || h !== l) && nd(t, o, r, l), Ut = !1, h = t.memoizedState, o.state = h, js(t, r, o, i);
    var m = t.memoizedState;
    a !== f || h !== m || Me.current || Ut ? (typeof w == "function" && (aa(t, n, w, r), m = t.memoizedState), (u = Ut || td(t, n, u, r, h, m, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
} return fa(e, t, n, r, s, i); }
function fa(e, t, n, r, i, s) { gh(e, t); var o = (t.flags & 128) !== 0; if (!r && !o)
    return i && Xc(t, n, !1), Mt(e, t, s); r = t.stateNode, K1.current = t; var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && o ? (t.child = Sr(t, e.child, null, s), t.child = Sr(t, null, a, s)) : Te(e, t, a, s), t.memoizedState = r.state, i && Xc(t, n, !0), t.child; }
function vh(e) { var t = e.stateNode; t.pendingContext ? Yc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yc(e, t.context, !1), wu(e, t.containerInfo); }
function fd(e, t, n, r, i) { return xr(), pu(i), t.flags |= 256, Te(e, t, n, r), t.child; }
var pa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ha(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function yh(e, t, n) { var r = t.pendingProps, i = Z.current, s = !1, o = (t.flags & 128) !== 0, a; if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), q(Z, i & 1), e === null)
    return oa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = wo(o, r, 0, null), e = Ln(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ha(n), t.memoizedState = pa, e) : Nu(t, o)); if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
    return Y1(e, t, o, r, a, i, n); if (s) {
    s = r.fallback, o = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = on(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = on(a, s) : (s = Ln(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? ha(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = pa, r;
} return s = e.child, e = s.sibling, r = on(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function Nu(e, t) { return t = wo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function Zi(e, t, n, r) { return r !== null && pu(r), Sr(t, e.child, null, n), e = Nu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function Y1(e, t, n, r, i, s, o) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = sl(Error(N(422))), Zi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = wo({ mode: "visible", children: r.children }, i, 0, null), s = Ln(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Sr(t, e.child, null, o), t.child.memoizedState = ha(o), t.memoizedState = pa, s); if (!(t.mode & 1))
    return Zi(e, t, o, null); if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
    return r = a, s = Error(N(419)), r = sl(s, r, void 0), Zi(e, t, o, r);
} if (a = (o & e.childLanes) !== 0, Ae || a) {
    if (r = me, r !== null) {
        switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default: i = 0;
        }
        i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, At(e, i), ft(r, e, i, -1));
    }
    return Lu(), r = sl(Error(N(421))), Zi(e, t, o, r);
} return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = av.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, je = tn(i.nextSibling), Ve = t, Q = !0, ct = null, e !== null && (Xe[Qe++] = Tt, Xe[Qe++] = It, Xe[Qe++] = Dn, Tt = e.id, It = e.overflow, Dn = t), t = Nu(t, r.children), t.flags |= 4096, t); }
function pd(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), la(e.return, t, n); }
function ol(e, t, n, r, i) { var s = e.memoizedState; s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i); }
function wh(e, t, n) { var r = t.pendingProps, i = r.revealOrder, s = r.tail; if (Te(e, t, r.children, n), r = Z.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && pd(e, n, t);
            else if (e.tag === 19)
                pd(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (q(Z, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;)
                e = n.alternate, e !== null && Us(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ol(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Us(e) === null) {
                    t.child = i;
                    break;
                }
                e = i.sibling, i.sibling = n, n = i, i = e;
            }
            ol(t, !0, n, null, s);
            break;
        case "together":
            ol(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function vs(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function Mt(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), $n |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(N(153)); if (t.child !== null) {
    for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function X1(e, t, n) { switch (t.tag) {
    case 3:
        vh(t), xr();
        break;
    case 5:
        Gp(t);
        break;
    case 1:
        De(t.type) && Ds(t);
        break;
    case 4:
        wu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        q(Bs, r._currentValue), r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (q(Z, Z.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? yh(e, t, n) : (q(Z, Z.current & 1), e = Mt(e, t, n), e !== null ? e.sibling : null);
        q(Z, Z.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return wh(e, t, n);
            t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), q(Z, Z.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, mh(e, t, n);
} return Mt(e, t, n); }
var xh, ma, Sh, bh;
xh = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
ma = function () { };
Sh = function (e, t, n, r) { var i = e.memoizedProps; if (i !== r) {
    e = t.stateNode, On(St.current);
    var s = null;
    switch (n) {
        case "input":
            i = zl(e, i), r = zl(e, r), s = [];
            break;
        case "select":
            i = te({}, i, { value: void 0 }), r = te({}, r, { value: void 0 }), s = [];
            break;
        case "textarea":
            i = Fl(e, i), r = Fl(e, r), s = [];
            break;
        default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = As);
    }
    Ul(n, r);
    var o;
    n = null;
    for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
            if (u === "style") {
                var a = i[u];
                for (o in a)
                    a.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
            }
            else
                u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (oi.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
        var l = r[u];
        if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
            if (u === "style")
                if (a) {
                    for (o in a)
                        !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                    for (o in l)
                        l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o]);
                }
                else
                    n || (s || (s = []), s.push(u, n)), n = l;
            else
                u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (oi.hasOwnProperty(u) ? (l != null && u === "onScroll" && K("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
} };
bh = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function Br(e, t) { if (!Q)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function be(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
else
    for (i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function Q1(e, t, n) { var r = t.pendingProps; switch (fu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return be(t), null;
    case 1: return De(t.type) && Ms(), be(t), null;
    case 3: return r = t.stateNode, br(), X(Me), X(_e), Su(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Qi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ct !== null && (Ea(ct), ct = null))), ma(e, t), be(t), null;
    case 5:
        xu(t);
        var i = On(yi.current);
        if (n = t.type, e !== null && t.stateNode != null)
            Sh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return be(t), null;
            }
            if (e = On(St.current), Qi(t)) {
                r = t.stateNode, n = t.type;
                var s = t.memoizedProps;
                switch (r[vt] = t, r[gi] = s, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        K("cancel", r), K("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        K("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Gr.length; i++)
                            K(Gr[i], r);
                        break;
                    case "source":
                        K("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        K("error", r), K("load", r);
                        break;
                    case "details":
                        K("toggle", r);
                        break;
                    case "input":
                        bc(r, s), K("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!s.multiple }, K("invalid", r);
                        break;
                    case "textarea": Cc(r, s), K("invalid", r);
                }
                Ul(n, s), i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Xi(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Xi(r.textContent, a, e), i = ["children", "" + a]) : oi.hasOwnProperty(o) && a != null && o === "onScroll" && K("scroll", r);
                    }
                switch (n) {
                    case "input":
                        Ui(r), Ec(r, s, !0);
                        break;
                    case "textarea":
                        Ui(r), _c(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof s.onClick == "function" && (r.onclick = As);
                }
                r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Yf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[vt] = t, e[gi] = r, xh(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (o = Vl(n, r), n) {
                        case "dialog":
                            K("cancel", e), K("close", e), i = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            K("load", e), i = r;
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Gr.length; i++)
                                K(Gr[i], e);
                            i = r;
                            break;
                        case "source":
                            K("error", e), i = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            K("error", e), K("load", e), i = r;
                            break;
                        case "details":
                            K("toggle", e), i = r;
                            break;
                        case "input":
                            bc(e, r), i = zl(e, r), K("invalid", e);
                            break;
                        case "option":
                            i = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, i = te({}, r, { value: void 0 }), K("invalid", e);
                            break;
                        case "textarea":
                            Cc(e, r), i = Fl(e, r), K("invalid", e);
                            break;
                        default: i = r;
                    }
                    Ul(n, i), a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? Jf(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Xf(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && li(e, l) : typeof l == "number" && li(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (oi.hasOwnProperty(s) ? l != null && s === "onScroll" && K("scroll", e) : l != null && Qa(e, s, l, o));
                        }
                    switch (n) {
                        case "input":
                            Ui(e), Ec(e, r, !1);
                            break;
                        case "textarea":
                            Ui(e), _c(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + fn(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, s = r.value, s != null ? cr(e, !!r.multiple, s, !1) : r.defaultValue != null && cr(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof i.onClick == "function" && (e.onclick = As);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return be(t), null;
    case 6:
        if (e && t.stateNode != null)
            bh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = On(yi.current), On(St.current), Qi(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (s = r.nodeValue !== n) && (e = Ve, e !== null))
                    switch (e.tag) {
                        case 3:
                            Xi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && Xi(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                s && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
        }
        return be(t), null;
    case 13:
        if (X(Z), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Q && je !== null && t.mode & 1 && !(t.flags & 128))
                Bp(), xr(), t.flags |= 98560, s = !1;
            else if (s = Qi(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(N(318));
                    if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s)
                        throw Error(N(317));
                    s[vt] = t;
                }
                else
                    xr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                be(t), s = !1;
            }
            else
                ct !== null && (Ea(ct), ct = null), s = !0;
            if (!s)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Z.current & 1 ? de === 0 && (de = 3) : Lu())), t.updateQueue !== null && (t.flags |= 4), be(t), null);
    case 4: return br(), ma(e, t), e === null && hi(t.stateNode.containerInfo), be(t), null;
    case 10: return gu(t.type._context), be(t), null;
    case 17: return De(t.type) && Ms(), be(t), null;
    case 19:
        if (X(Z), s = t.memoizedState, s === null)
            return be(t), null;
        if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
            if (r)
                Br(s, !1);
            else {
                if (de !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (o = Us(e), o !== null) {
                            for (t.flags |= 128, Br(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return q(Z, Z.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                s.tail !== null && se() > Cr && (t.flags |= 128, r = !0, Br(s, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = Us(o), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Br(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !Q)
                        return be(t), null;
                }
                else
                    2 * se() - s.renderingStartTime > Cr && n !== 1073741824 && (t.flags |= 128, r = !0, Br(s, !1), t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = se(), t.sibling = null, n = Z.current, q(Z, r ? n & 1 | 2 : n & 1), t) : (be(t), null);
    case 22:
    case 23: return Ru(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Be & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : be(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(N(156, t.tag)); }
function J1(e, t) { switch (fu(t), t.tag) {
    case 1: return De(t.type) && Ms(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return br(), X(Me), X(_e), Su(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return xu(t), null;
    case 13:
        if (X(Z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            xr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return X(Z), null;
    case 4: return br(), null;
    case 10: return gu(t.type._context), null;
    case 22:
    case 23: return Ru(), null;
    case 24: return null;
    default: return null;
} }
var es = !1, Ee = !1, Z1 = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function ar(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            ne(e, t, r);
        }
    else
        n.current = null; }
function ga(e, t, n) { try {
    n();
}
catch (r) {
    ne(e, t, r);
} }
var hd = !1;
function ev(e, t) { if (Zl = Ps, e = kp(), cu(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType;
                }
                catch (_j) {
                    n = null;
                    break e;
                }
                var o = 0, a = -1, l = -1, u = 0, d = 0, f = e, h = null;
                t: for (;;) {
                    for (var w; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (w = f.firstChild) !== null;)
                        h = f, f = w;
                    for (;;) {
                        if (f === e)
                            break t;
                        if (h === n && ++u === i && (a = o), h === s && ++d === r && (l = o), (w = f.nextSibling) !== null)
                            break;
                        f = h, h = f.parentNode;
                    }
                    f = w;
                }
                n = a === -1 || l === -1 ? null : { start: a, end: l };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (ea = { focusedElem: e, selectionRange: n }, Ps = !1, R = t; R !== null;)
    if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, R = e;
    else
        for (; R !== null;) {
            t = R;
            try {
                var m = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (m !== null) {
                                var g = m.memoizedProps, x = m.memoizedState, p = t.stateNode, v = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : at(t.type, g), x);
                                p.__reactInternalSnapshotBeforeUpdate = v;
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(N(163));
                    }
            }
            catch (S) {
                ne(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, R = e;
                break;
            }
            R = t.return;
        } return m = hd, hd = !1, m; }
function Zr(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
        if ((i.tag & e) === e) {
            var s = i.destroy;
            i.destroy = void 0, s !== void 0 && ga(t, n, s);
        }
        i = i.next;
    } while (i !== r);
} }
function vo(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function va(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function Eh(e) { var t = e.alternate; t !== null && (e.alternate = null, Eh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[gi], delete t[ra], delete t[D1], delete t[z1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function Ch(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function md(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || Ch(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function ya(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = As));
else if (r !== 4 && (e = e.child, e !== null))
    for (ya(e, t, n), e = e.sibling; e !== null;)
        ya(e, t, n), e = e.sibling; }
function wa(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (wa(e, t, n), e = e.sibling; e !== null;)
        wa(e, t, n), e = e.sibling; }
var ye = null, ut = !1;
function $t(e, t, n) { for (n = n.child; n !== null;)
    _h(e, t, n), n = n.sibling; }
function _h(e, t, n) { if (xt && typeof xt.onCommitFiberUnmount == "function")
    try {
        xt.onCommitFiberUnmount(ao, n);
    }
    catch (_j) { } switch (n.tag) {
    case 5: Ee || ar(n, t);
    case 6:
        var r = ye, i = ut;
        ye = null, $t(e, t, n), ye = r, ut = i, ye !== null && (ut ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
        break;
    case 18:
        ye !== null && (ut ? (e = ye, n = n.stateNode, e.nodeType === 8 ? Zo(e.parentNode, n) : e.nodeType === 1 && Zo(e, n), di(e)) : Zo(ye, n.stateNode));
        break;
    case 4:
        r = ye, i = ut, ye = n.stateNode.containerInfo, ut = !0, $t(e, t, n), ye = r, ut = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            i = r = r.next;
            do {
                var s = i, o = s.destroy;
                s = s.tag, o !== void 0 && (s & 2 || s & 4) && ga(n, t, o), i = i.next;
            } while (i !== r);
        }
        $t(e, t, n);
        break;
    case 1:
        if (!Ee && (ar(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (a) {
                ne(n, t, a);
            }
        $t(e, t, n);
        break;
    case 21:
        $t(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, $t(e, t, n), Ee = r) : $t(e, t, n);
        break;
    default: $t(e, t, n);
} }
function gd(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Z1), t.forEach(function (r) { var i = uv.bind(null, e, r); n.has(r) || (n.add(r), r.then(i, i)); });
} }
function lt(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var s = e, o = t, a = o;
            e: for (; a !== null;) {
                switch (a.tag) {
                    case 5:
                        ye = a.stateNode, ut = !1;
                        break e;
                    case 3:
                        ye = a.stateNode.containerInfo, ut = !0;
                        break e;
                    case 4:
                        ye = a.stateNode.containerInfo, ut = !0;
                        break e;
                }
                a = a.return;
            }
            if (ye === null)
                throw Error(N(160));
            _h(s, o, i), ye = null, ut = !1;
            var l = i.alternate;
            l !== null && (l.return = null), i.return = null;
        }
        catch (u) {
            ne(i, t, u);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        kh(t, e), t = t.sibling; }
function kh(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (lt(t, e), mt(e), r & 4) {
            try {
                Zr(3, e, e.return), vo(3, e);
            }
            catch (g) {
                ne(e, e.return, g);
            }
            try {
                Zr(5, e, e.return);
            }
            catch (g) {
                ne(e, e.return, g);
            }
        }
        break;
    case 1:
        lt(t, e), mt(e), r & 512 && n !== null && ar(n, n.return);
        break;
    case 5:
        if (lt(t, e), mt(e), r & 512 && n !== null && ar(n, n.return), e.flags & 32) {
            var i = e.stateNode;
            try {
                li(i, "");
            }
            catch (g) {
                ne(e, e.return, g);
            }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
            var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
            if (e.updateQueue = null, l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && qf(i, s), Vl(a, o);
                    var u = Vl(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o], f = l[o + 1];
                        d === "style" ? Jf(i, f) : d === "dangerouslySetInnerHTML" ? Xf(i, f) : d === "children" ? li(i, f) : Qa(i, d, f, u);
                    }
                    switch (a) {
                        case "input":
                            $l(i, s);
                            break;
                        case "textarea":
                            Kf(i, s);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var w = s.value;
                            w != null ? cr(i, !!s.multiple, w, !1) : h !== !!s.multiple && (s.defaultValue != null ? cr(i, !!s.multiple, s.defaultValue, !0) : cr(i, !!s.multiple, s.multiple ? [] : "", !1));
                    }
                    i[gi] = s;
                }
                catch (g) {
                    ne(e, e.return, g);
                }
        }
        break;
    case 6:
        if (lt(t, e), mt(e), r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            i = e.stateNode, s = e.memoizedProps;
            try {
                i.nodeValue = s;
            }
            catch (g) {
                ne(e, e.return, g);
            }
        }
        break;
    case 3:
        if (lt(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                di(t.containerInfo);
            }
            catch (g) {
                ne(e, e.return, g);
            }
        break;
    case 4:
        lt(t, e), mt(e);
        break;
    case 13:
        lt(t, e), mt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Ou = se())), r & 4 && gd(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (u = Ee) || d, lt(t, e), Ee = u) : lt(t, e), mt(e), r & 8192) {
            if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (R = e, d = e.child; d !== null;) {
                    for (f = R = d; R !== null;) {
                        switch (h = R, w = h.child, h.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Zr(4, h, h.return);
                                break;
                            case 1:
                                ar(h, h.return);
                                var m = h.stateNode;
                                if (typeof m.componentWillUnmount == "function") {
                                    r = h, n = h.return;
                                    try {
                                        t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                    }
                                    catch (g) {
                                        ne(r, n, g);
                                    }
                                }
                                break;
                            case 5:
                                ar(h, h.return);
                                break;
                            case 22: if (h.memoizedState !== null) {
                                yd(f);
                                continue;
                            }
                        }
                        w !== null ? (w.return = h, R = w) : yd(f);
                    }
                    d = d.sibling;
                }
            e: for (d = null, f = e;;) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Qf("display", o));
                        }
                        catch (g) {
                            ne(e, e.return, g);
                        }
                    }
                }
                else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                        }
                        catch (g) {
                            ne(e, e.return, g);
                        }
                }
                else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f, f = f.child;
                    continue;
                }
                if (f === e)
                    break e;
                for (; f.sibling === null;) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null), f = f.return;
                }
                d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
            }
        }
        break;
    case 19:
        lt(t, e), mt(e), r & 4 && gd(e);
        break;
    case 21: break;
    default: lt(t, e), mt(e);
} }
function mt(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (Ch(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(N(160));
        }
        switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (li(i, ""), r.flags &= -33);
                var s = md(e);
                wa(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo, a = md(e);
                ya(e, a, o);
                break;
            default: throw Error(N(161));
        }
    }
    catch (l) {
        ne(e, e.return, l);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function tv(e, t, n) { R = e, Nh(e); }
function Nh(e, t, n) { for (var r = (e.mode & 1) !== 0; R !== null;) {
    var i = R, s = i.child;
    if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || es;
        if (!o) {
            var a = i.alternate, l = a !== null && a.memoizedState !== null || Ee;
            a = es;
            var u = Ee;
            if (es = o, (Ee = l) && !u)
                for (R = i; R !== null;)
                    o = R, l = o.child, o.tag === 22 && o.memoizedState !== null ? wd(i) : l !== null ? (l.return = o, R = l) : wd(i);
            for (; s !== null;)
                R = s, Nh(s), s = s.sibling;
            R = i, es = a, Ee = u;
        }
        vd(e);
    }
    else
        i.subtreeFlags & 8772 && s !== null ? (s.return = i, R = s) : vd(e);
} }
function vd(e) { for (; R !== null;) {
    var t = R;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ee || vo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ee)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var s = t.updateQueue;
                        s !== null && ed(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            ed(t, o, n);
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img": l.src && (n.src = l.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && di(f);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(N(163));
                }
            Ee || t.flags & 512 && va(t);
        }
        catch (h) {
            ne(t, t.return, h);
        }
    }
    if (t === e) {
        R = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, R = n;
        break;
    }
    R = t.return;
} }
function yd(e) { for (; R !== null;) {
    var t = R;
    if (t === e) {
        R = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, R = n;
        break;
    }
    R = t.return;
} }
function wd(e) { for (; R !== null;) {
    var t = R;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    vo(4, t);
                }
                catch (l) {
                    ne(t, n, l);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (l) {
                        ne(t, i, l);
                    }
                }
                var s = t.return;
                try {
                    va(t);
                }
                catch (l) {
                    ne(t, s, l);
                }
                break;
            case 5:
                var o = t.return;
                try {
                    va(t);
                }
                catch (l) {
                    ne(t, o, l);
                }
        }
    }
    catch (l) {
        ne(t, t.return, l);
    }
    if (t === e) {
        R = null;
        break;
    }
    var a = t.sibling;
    if (a !== null) {
        a.return = t.return, R = a;
        break;
    }
    R = t.return;
} }
var nv = Math.ceil, Ws = zt.ReactCurrentDispatcher, Tu = zt.ReactCurrentOwner, Ze = zt.ReactCurrentBatchConfig, U = 0, me = null, le = null, we = 0, Be = 0, ur = gn(0), de = 0, bi = null, $n = 0, yo = 0, Iu = 0, ei = null, Le = null, Ou = 0, Cr = 1 / 0, kt = null, Gs = !1, xa = null, rn = null, ts = !1, qt = null, qs = 0, ti = 0, Sa = null, ys = -1, ws = 0;
function Ie() { return U & 6 ? se() : ys !== -1 ? ys : ys = se(); }
function sn(e) { return e.mode & 1 ? U & 2 && we !== 0 ? we & -we : B1.transition !== null ? (ws === 0 && (ws = cp()), ws) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vp(e.type)), e) : 1; }
function ft(e, t, n, r) { if (50 < ti)
    throw ti = 0, Sa = null, Error(N(185)); Ti(e, n, r), (!(U & 2) || e !== me) && (e === me && (!(U & 2) && (yo |= n), de === 4 && Ht(e, we)), ze(e, r), n === 1 && U === 0 && !(t.mode & 1) && (Cr = se() + 500, ho && vn())); }
function ze(e, t) { var n = e.callbackNode; Bg(e, t); var r = Os(e, e === me ? we : 0); if (r === 0)
    n !== null && Tc(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Tc(n), t === 1)
        e.tag === 0 ? $1(xd.bind(null, e)) : Dp(xd.bind(null, e)), A1(function () { !(U & 6) && vn(); }), n = null;
    else {
        switch (dp(r)) {
            case 1:
                n = nu;
                break;
            case 4:
                n = ap;
                break;
            case 16:
                n = Is;
                break;
            case 536870912:
                n = up;
                break;
            default: n = Is;
        }
        n = Mh(n, Th.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function Th(e, t) { if (ys = -1, ws = 0, U & 6)
    throw Error(N(327)); var n = e.callbackNode; if (mr() && e.callbackNode !== n)
    return null; var r = Os(e, e === me ? we : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = Ks(e, r);
else {
    t = r;
    var i = U;
    U |= 2;
    var s = Oh();
    (me !== e || we !== t) && (kt = null, Cr = se() + 500, Rn(e, t));
    do
        try {
            sv();
            break;
        }
        catch (a) {
            Ih(e, a);
        }
    while (1);
    mu(), Ws.current = s, U = i, le !== null ? t = 0 : (me = null, we = 0, t = de);
} if (t !== 0) {
    if (t === 2 && (i = Kl(e), i !== 0 && (r = i, t = ba(e, i))), t === 1)
        throw n = bi, Rn(e, 0), Ht(e, r), ze(e, se()), n;
    if (t === 6)
        Ht(e, r);
    else {
        if (i = e.current.alternate, !(r & 30) && !rv(i) && (t = Ks(e, r), t === 2 && (s = Kl(e), s !== 0 && (r = s, t = ba(e, s))), t === 1))
            throw n = bi, Rn(e, 0), Ht(e, r), ze(e, se()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(N(345));
            case 2:
                kn(e, Le, kt);
                break;
            case 3:
                if (Ht(e, r), (r & 130023424) === r && (t = Ou + 500 - se(), 10 < t)) {
                    if (Os(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes, (i & r) !== r) {
                        Ie(), e.pingedLanes |= e.suspendedLanes & i;
                        break;
                    }
                    e.timeoutHandle = na(kn.bind(null, e, Le, kt), t);
                    break;
                }
                kn(e, Le, kt);
                break;
            case 4:
                if (Ht(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, i = -1; 0 < r;) {
                    var o = 31 - dt(r);
                    s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
                }
                if (r = i, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * nv(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = na(kn.bind(null, e, Le, kt), r);
                    break;
                }
                kn(e, Le, kt);
                break;
            case 5:
                kn(e, Le, kt);
                break;
            default: throw Error(N(329));
        }
    }
} return ze(e, se()), e.callbackNode === n ? Th.bind(null, e) : null; }
function ba(e, t) { var n = ei; return e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256), e = Ks(e, t), e !== 2 && (t = Le, Le = n, t !== null && Ea(t)), e; }
function Ea(e) { Le === null ? Le = e : Le.push.apply(Le, e); }
function rv(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var i = n[r], s = i.getSnapshot;
                i = i.value;
                try {
                    if (!pt(s(), i))
                        return !1;
                }
                catch (_j) {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function Ht(e, t) { for (t &= ~Iu, t &= ~yo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function xd(e) { if (U & 6)
    throw Error(N(327)); mr(); var t = Os(e, 0); if (!(t & 1))
    return ze(e, se()), null; var n = Ks(e, t); if (e.tag !== 0 && n === 2) {
    var r = Kl(e);
    r !== 0 && (t = r, n = ba(e, r));
} if (n === 1)
    throw n = bi, Rn(e, 0), Ht(e, t), ze(e, se()), n; if (n === 6)
    throw Error(N(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, Le, kt), ze(e, se()), null; }
function Pu(e, t) { var n = U; U |= 1; try {
    return e(t);
}
finally {
    U = n, U === 0 && (Cr = se() + 500, ho && vn());
} }
function Bn(e) { qt !== null && qt.tag === 0 && !(U & 6) && mr(); var t = U; U |= 1; var n = Ze.transition, r = W; try {
    if (Ze.transition = null, W = 1, e)
        return e();
}
finally {
    W = r, Ze.transition = n, U = t, !(U & 6) && vn();
} }
function Ru() { Be = ur.current, X(ur); }
function Rn(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, L1(n)), le !== null)
    for (n = le.return; n !== null;) {
        var r = n;
        switch (fu(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Ms();
                break;
            case 3:
                br(), X(Me), X(_e), Su();
                break;
            case 5:
                xu(r);
                break;
            case 4:
                br();
                break;
            case 13:
                X(Z);
                break;
            case 19:
                X(Z);
                break;
            case 10:
                gu(r.type._context);
                break;
            case 22:
            case 23: Ru();
        }
        n = n.return;
    } if (me = e, le = e = on(e.current, null), we = Be = t, de = 0, bi = null, Iu = yo = $n = 0, Le = ei = null, In !== null) {
    for (t = 0; t < In.length; t++)
        if (n = In[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, s = n.pending;
            if (s !== null) {
                var o = s.next;
                s.next = i, r.next = o;
            }
            n.pending = r;
        }
    In = null;
} return e; }
function Ih(e, t) { do {
    var n = le;
    try {
        if (mu(), ms.current = Hs, Vs) {
            for (var r = ee.memoizedState; r !== null;) {
                var i = r.queue;
                i !== null && (i.pending = null), r = r.next;
            }
            Vs = !1;
        }
        if (zn = 0, he = ce = ee = null, Jr = !1, wi = 0, Tu.current = null, n === null || n.return === null) {
            de = 1, bi = t, le = null;
            break;
        }
        e: {
            var s = e, o = n.return, a = n, l = t;
            if (t = we, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                var u = l, d = a, f = d.tag;
                if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                    var h = d.alternate;
                    h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null);
                }
                var w = ld(o);
                if (w !== null) {
                    w.flags &= -257, ad(w, o, a, s, t), w.mode & 1 && od(s, u, t), t = w, l = u;
                    var m = t.updateQueue;
                    if (m === null) {
                        var g = new Set;
                        g.add(l), t.updateQueue = g;
                    }
                    else
                        m.add(l);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        od(s, u, t), Lu();
                        break e;
                    }
                    l = Error(N(426));
                }
            }
            else if (Q && a.mode & 1) {
                var x = ld(o);
                if (x !== null) {
                    !(x.flags & 65536) && (x.flags |= 256), ad(x, o, a, s, t), pu(Er(l, a));
                    break e;
                }
            }
            s = l = Er(l, a), de !== 4 && (de = 2), ei === null ? ei = [s] : ei.push(s), s = o;
            do {
                switch (s.tag) {
                    case 3:
                        s.flags |= 65536, t &= -t, s.lanes |= t;
                        var p = fh(s, l, t);
                        Zc(s, p);
                        break e;
                    case 1:
                        a = l;
                        var v = s.type, y = s.stateNode;
                        if (!(s.flags & 128) && (typeof v.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (rn === null || !rn.has(y)))) {
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var S = ph(s, a, t);
                            Zc(s, S);
                            break e;
                        }
                }
                s = s.return;
            } while (s !== null);
        }
        Rh(n);
    }
    catch (C) {
        t = C, le === n && n !== null && (le = n = n.return);
        continue;
    }
    break;
} while (1); }
function Oh() { var e = Ws.current; return Ws.current = Hs, e === null ? Hs : e; }
function Lu() { (de === 0 || de === 3 || de === 2) && (de = 4), me === null || !($n & 268435455) && !(yo & 268435455) || Ht(me, we); }
function Ks(e, t) { var n = U; U |= 2; var r = Oh(); (me !== e || we !== t) && (kt = null, Rn(e, t)); do
    try {
        iv();
        break;
    }
    catch (i) {
        Ih(e, i);
    }
while (1); if (mu(), U = n, Ws.current = r, le !== null)
    throw Error(N(261)); return me = null, we = 0, de; }
function iv() { for (; le !== null;)
    Ph(le); }
function sv() { for (; le !== null && !Og();)
    Ph(le); }
function Ph(e) { var t = Ah(e.alternate, e, Be); e.memoizedProps = e.pendingProps, t === null ? Rh(e) : le = t, Tu.current = null; }
function Rh(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = J1(n, t), n !== null) {
            n.flags &= 32767, le = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            de = 6, le = null;
            return;
        }
    }
    else if (n = Q1(n, t, Be), n !== null) {
        le = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        le = t;
        return;
    }
    le = t = e;
} while (t !== null); de === 0 && (de = 5); }
function kn(e, t, n) { var r = W, i = Ze.transition; try {
    Ze.transition = null, W = 1, ov(e, t, n, r);
}
finally {
    Ze.transition = i, W = r;
} return null; }
function ov(e, t, n, r) { do
    mr();
while (qt !== null); if (U & 6)
    throw Error(N(327)); n = e.finishedWork; var i = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(N(177)); e.callbackNode = null, e.callbackPriority = 0; var s = n.lanes | n.childLanes; if (Fg(e, s), e === me && (le = me = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ts || (ts = !0, Mh(Is, function () { return mr(), null; })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Ze.transition, Ze.transition = null;
    var o = W;
    W = 1;
    var a = U;
    U |= 4, Tu.current = null, ev(e, n), kh(n, e), k1(ea), Ps = !!Zl, ea = Zl = null, e.current = n, tv(n), Pg(), U = a, W = o, Ze.transition = s;
}
else
    e.current = n; if (ts && (ts = !1, qt = e, qs = i), s = e.pendingLanes, s === 0 && (rn = null), Ag(n.stateNode), ze(e, se()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest }); if (Gs)
    throw Gs = !1, e = xa, xa = null, e; return qs & 1 && e.tag !== 0 && mr(), s = e.pendingLanes, s & 1 ? e === Sa ? ti++ : (ti = 0, Sa = e) : ti = 0, vn(), null; }
function mr() { if (qt !== null) {
    var e = dp(qs), t = Ze.transition, n = W;
    try {
        if (Ze.transition = null, W = 16 > e ? 16 : e, qt === null)
            var r = !1;
        else {
            if (e = qt, qt = null, qs = 0, U & 6)
                throw Error(N(331));
            var i = U;
            for (U |= 4, R = e.current; R !== null;) {
                var s = R, o = s.child;
                if (R.flags & 16) {
                    var a = s.deletions;
                    if (a !== null) {
                        for (var l = 0; l < a.length; l++) {
                            var u = a[l];
                            for (R = u; R !== null;) {
                                var d = R;
                                switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15: Zr(8, d, s);
                                }
                                var f = d.child;
                                if (f !== null)
                                    f.return = d, R = f;
                                else
                                    for (; R !== null;) {
                                        d = R;
                                        var h = d.sibling, w = d.return;
                                        if (Eh(d), d === u) {
                                            R = null;
                                            break;
                                        }
                                        if (h !== null) {
                                            h.return = w, R = h;
                                            break;
                                        }
                                        R = w;
                                    }
                            }
                        }
                        var m = s.alternate;
                        if (m !== null) {
                            var g = m.child;
                            if (g !== null) {
                                m.child = null;
                                do {
                                    var x = g.sibling;
                                    g.sibling = null, g = x;
                                } while (g !== null);
                            }
                        }
                        R = s;
                    }
                }
                if (s.subtreeFlags & 2064 && o !== null)
                    o.return = s, R = o;
                else
                    e: for (; R !== null;) {
                        if (s = R, s.flags & 2048)
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15: Zr(9, s, s.return);
                            }
                        var p = s.sibling;
                        if (p !== null) {
                            p.return = s.return, R = p;
                            break e;
                        }
                        R = s.return;
                    }
            }
            var v = e.current;
            for (R = v; R !== null;) {
                o = R;
                var y = o.child;
                if (o.subtreeFlags & 2064 && y !== null)
                    y.return = o, R = y;
                else
                    e: for (o = v; R !== null;) {
                        if (a = R, a.flags & 2048)
                            try {
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15: vo(9, a);
                                }
                            }
                            catch (C) {
                                ne(a, a.return, C);
                            }
                        if (a === o) {
                            R = null;
                            break e;
                        }
                        var S = a.sibling;
                        if (S !== null) {
                            S.return = a.return, R = S;
                            break e;
                        }
                        R = a.return;
                    }
            }
            if (U = i, vn(), xt && typeof xt.onPostCommitFiberRoot == "function")
                try {
                    xt.onPostCommitFiberRoot(ao, e);
                }
                catch (_j) { }
            r = !0;
        }
        return r;
    }
    finally {
        W = n, Ze.transition = t;
    }
} return !1; }
function Sd(e, t, n) { t = Er(n, t), t = fh(e, t, 1), e = nn(e, t, 1), t = Ie(), e !== null && (Ti(e, 1, t), ze(e, t)); }
function ne(e, t, n) { if (e.tag === 3)
    Sd(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            Sd(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
                e = Er(n, e), e = ph(t, e, 1), t = nn(t, e, 1), e = Ie(), t !== null && (Ti(t, 1, e), ze(t, e));
                break;
            }
        }
        t = t.return;
    } }
function lv(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = Ie(), e.pingedLanes |= e.suspendedLanes & n, me === e && (we & n) === n && (de === 4 || de === 3 && (we & 130023424) === we && 500 > se() - Ou ? Rn(e, 0) : Iu |= n), ze(e, t); }
function Lh(e, t) { t === 0 && (e.mode & 1 ? (t = Wi, Wi <<= 1, !(Wi & 130023424) && (Wi = 4194304)) : t = 1); var n = Ie(); e = At(e, t), e !== null && (Ti(e, t, n), ze(e, n)); }
function av(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), Lh(e, n); }
function uv(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(N(314));
} r !== null && r.delete(t), Lh(e, n); }
var Ah;
Ah = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current)
        Ae = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return Ae = !1, X1(e, t, n);
        Ae = !!(e.flags & 131072);
    }
else
    Ae = !1, Q && t.flags & 1048576 && zp(t, $s, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        vs(e, t), e = t.pendingProps;
        var i = wr(t, _e.current);
        hr(t, n), i = Eu(null, t, r, e, i, n);
        var s = Cu();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (s = !0, Ds(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, yu(t), i.updater = mo, t.stateNode = i, i._reactInternals = t, ua(t, r, e, n), t = fa(null, t, r, !0, s, n)) : (t.tag = 0, Q && s && du(t), Te(null, t, i, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (vs(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = dv(r), e = at(r, e), i) {
                case 0:
                    t = da(null, t, r, e, n);
                    break e;
                case 1:
                    t = dd(null, t, r, e, n);
                    break e;
                case 11:
                    t = ud(null, t, r, e, n);
                    break e;
                case 14:
                    t = cd(null, t, r, at(r.type, e), n);
                    break e;
            }
            throw Error(N(306, r, ""));
        }
        return t;
    case 0: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : at(r, i), da(e, t, r, i, n);
    case 1: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : at(r, i), dd(e, t, r, i, n);
    case 3:
        e: {
            if (vh(t), e === null)
                throw Error(N(387));
            r = t.pendingProps, s = t.memoizedState, i = s.element, jp(e, t), js(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element, s.isDehydrated)
                if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                    i = Er(Error(N(423)), t), t = fd(e, t, r, n, i);
                    break e;
                }
                else if (r !== i) {
                    i = Er(Error(N(424)), t), t = fd(e, t, r, n, i);
                    break e;
                }
                else
                    for (je = tn(t.stateNode.containerInfo.firstChild), Ve = t, Q = !0, ct = null, n = Wp(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (xr(), r === i) {
                    t = Mt(e, t, n);
                    break e;
                }
                Te(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return Gp(t), e === null && oa(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, ta(r, i) ? o = null : s !== null && ta(r, s) && (t.flags |= 32), gh(e, t), Te(e, t, o, n), t.child;
    case 6: return e === null && oa(t), null;
    case 13: return yh(e, t, n);
    case 4: return wu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Sr(t, null, r, n) : Te(e, t, r, n), t.child;
    case 11: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : at(r, i), ud(e, t, r, i, n);
    case 7: return Te(e, t, t.pendingProps, n), t.child;
    case 8: return Te(e, t, t.pendingProps.children, n), t.child;
    case 12: return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, q(Bs, r._currentValue), r._currentValue = o, s !== null)
                if (pt(s.value, o)) {
                    if (s.children === i.children && !Me.current) {
                        t = Mt(e, t, n);
                        break e;
                    }
                }
                else
                    for (s = t.child, s !== null && (s.return = t); s !== null;) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null;) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = Ot(-1, n & -n), l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
                                        }
                                    }
                                    s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), la(s.return, n, t), a.lanes |= n;
                                    break;
                                }
                                l = l.next;
                            }
                        }
                        else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return, o === null)
                                throw Error(N(341));
                            o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), la(o, n, t), o = s.sibling;
                        }
                        else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null;) {
                                if (o === t) {
                                    o = null;
                                    break;
                                }
                                if (s = o.sibling, s !== null) {
                                    s.return = o.return, o = s;
                                    break;
                                }
                                o = o.return;
                            }
                        s = o;
                    }
            Te(e, t, i.children, n), t = t.child;
        }
        return t;
    case 9: return i = t.type, r = t.pendingProps.children, hr(t, n), i = st(i), r = r(i), t.flags |= 1, Te(e, t, r, n), t.child;
    case 14: return r = t.type, i = at(r, t.pendingProps), i = at(r.type, i), cd(e, t, r, i, n);
    case 15: return hh(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : at(r, i), vs(e, t), t.tag = 1, De(r) ? (e = !0, Ds(t)) : e = !1, hr(t, n), Vp(t, r, i), ua(t, r, i, n), fa(null, t, r, !0, e, n);
    case 19: return wh(e, t, n);
    case 22: return mh(e, t, n);
} throw Error(N(156, t.tag)); };
function Mh(e, t) { return lp(e, t); }
function cv(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function Je(e, t, n, r) { return new cv(e, t, n, r); }
function Au(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function dv(e) { if (typeof e == "function")
    return Au(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === Za)
        return 11;
    if (e === eu)
        return 14;
} return 2; }
function on(e, t) { var n = e.alternate; return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function xs(e, t, n, r, i, s) { var o = 2; if (r = e, typeof e == "function")
    Au(e) && (o = 1);
else if (typeof e == "string")
    o = 5;
else
    e: switch (e) {
        case Zn: return Ln(n.children, i, s, t);
        case Ja:
            o = 8, i |= 8;
            break;
        case Ll: return e = Je(12, n, t, i | 2), e.elementType = Ll, e.lanes = s, e;
        case Al: return e = Je(13, n, t, i), e.elementType = Al, e.lanes = s, e;
        case Ml: return e = Je(19, n, t, i), e.elementType = Ml, e.lanes = s, e;
        case Hf: return wo(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case Uf:
                        o = 10;
                        break e;
                    case Vf:
                        o = 9;
                        break e;
                    case Za:
                        o = 11;
                        break e;
                    case eu:
                        o = 14;
                        break e;
                    case jt:
                        o = 16, r = null;
                        break e;
                }
            throw Error(N(130, e == null ? e : typeof e, ""));
    } return t = Je(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t; }
function Ln(e, t, n, r) { return e = Je(7, e, r, t), e.lanes = n, e; }
function wo(e, t, n, r) { return e = Je(22, e, r, t), e.elementType = Hf, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function ll(e, t, n) { return e = Je(6, e, null, t), e.lanes = n, e; }
function al(e, t, n) { return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function fv(e, t, n, r, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Uo(0), this.expirationTimes = Uo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null; }
function Mu(e, t, n, r, i, s, o, a, l) { return e = new fv(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Je(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yu(s), e; }
function pv(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Jn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function Dh(e) { if (!e)
    return pn; e = e._reactInternals; e: {
    if (Kn(e) !== e || e.tag !== 1)
        throw Error(N(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (De(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(N(171));
} if (e.tag === 1) {
    var n = e.type;
    if (De(n))
        return Mp(e, n, t);
} return t; }
function zh(e, t, n, r, i, s, o, a, l) { return e = Mu(n, r, !0, e, i, s, o, a, l), e.context = Dh(null), n = e.current, r = Ie(), i = sn(n), s = Ot(r, i), s.callback = t !== null && t !== void 0 ? t : null, nn(n, s, i), e.current.lanes = i, Ti(e, i, r), ze(e, r), e; }
function xo(e, t, n, r) { var i = t.current, s = Ie(), o = sn(i); return n = Dh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ot(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(i, t, o), e !== null && (ft(e, i, o, s), hs(e, i, o)), o; }
function Ys(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function bd(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function Du(e, t) { bd(e, t), (e = e.alternate) && bd(e, t); }
function hv() { return null; }
var $h = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function zu(e) { this._internalRoot = e; }
So.prototype.render = zu.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(N(409)); xo(e, t, null, null); };
So.prototype.unmount = zu.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function () { xo(null, e, null, null); }), t[Lt] = null;
} };
function So(e) { this._internalRoot = e; }
So.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = hp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++)
        ;
    Vt.splice(n, 0, e), n === 0 && gp(e);
} };
function $u(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function bo(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function Ed() { }
function mv(e, t, n, r, i) { if (i) {
    if (typeof r == "function") {
        var s = r;
        r = function () { var u = Ys(o); s.call(u); };
    }
    var o = zh(t, r, e, 0, null, !1, !1, "", Ed);
    return e._reactRootContainer = o, e[Lt] = o.current, hi(e.nodeType === 8 ? e.parentNode : e), Bn(), o;
} for (; i = e.lastChild;)
    e.removeChild(i); if (typeof r == "function") {
    var a = r;
    r = function () { var u = Ys(l); a.call(u); };
} var l = Mu(e, 0, !1, null, null, !1, !1, "", Ed); return e._reactRootContainer = l, e[Lt] = l.current, hi(e.nodeType === 8 ? e.parentNode : e), Bn(function () { xo(t, l, n, r); }), l; }
function Eo(e, t, n, r, i) { var s = n._reactRootContainer; if (s) {
    var o = s;
    if (typeof i == "function") {
        var a = i;
        i = function () { var l = Ys(o); a.call(l); };
    }
    xo(t, o, e, i);
}
else
    o = mv(n, t, e, i, r); return Ys(o); }
fp = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Wr(t.pendingLanes);
            n !== 0 && (ru(t, n | 1), ze(t, se()), !(U & 6) && (Cr = se() + 500, vn()));
        }
        break;
    case 13: Bn(function () { var r = At(e, 1); if (r !== null) {
        var i = Ie();
        ft(r, e, 1, i);
    } }), Du(e, 1);
} };
iu = function (e) { if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
        var n = Ie();
        ft(t, e, 134217728, n);
    }
    Du(e, 134217728);
} };
pp = function (e) { if (e.tag === 13) {
    var t = sn(e), n = At(e, t);
    if (n !== null) {
        var r = Ie();
        ft(n, e, t, r);
    }
    Du(e, t);
} };
hp = function () { return W; };
mp = function (e, t) { var n = W; try {
    return W = e, t();
}
finally {
    W = n;
} };
Wl = function (e, t, n) { switch (t) {
    case "input":
        if ($l(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = po(r);
                    if (!i)
                        throw Error(N(90));
                    Gf(r), $l(r, i);
                }
            }
        }
        break;
    case "textarea":
        Kf(e, n);
        break;
    case "select": t = n.value, t != null && cr(e, !!n.multiple, t, !1);
} };
tp = Pu;
np = Bn;
var gv = { usingClientEntryPoint: !1, Events: [Oi, rr, po, Zf, ep, Pu] }, Fr = { findFiberByHostInstance: Tn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, vv = { bundleType: Fr.bundleType, version: Fr.version, rendererPackageName: Fr.rendererPackageName, rendererConfig: Fr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: zt.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = sp(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Fr.findFiberByHostInstance || hv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ns.isDisabled && ns.supportsFiber)
        try {
            ao = ns.inject(vv), xt = ns;
        }
        catch (_k) { }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gv;
Ke.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!$u(t))
    throw Error(N(200)); return pv(e, t, null, n); };
Ke.createRoot = function (e, t) { if (!$u(e))
    throw Error(N(299)); var n = !1, r = "", i = $h; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Mu(e, 1, !1, null, null, n, !1, r, i), e[Lt] = t.current, hi(e.nodeType === 8 ? e.parentNode : e), new zu(t); };
Ke.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e))); return e = sp(t), e = e === null ? null : e.stateNode, e; };
Ke.flushSync = function (e) { return Bn(e); };
Ke.hydrate = function (e, t, n) { if (!bo(t))
    throw Error(N(200)); return Eo(null, e, t, !0, n); };
Ke.hydrateRoot = function (e, t, n) { if (!$u(e))
    throw Error(N(405)); var r = n != null && n.hydratedSources || null, i = !1, s = "", o = $h; if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = zh(t, null, e, 1, n !== null && n !== void 0 ? n : null, i, !1, s, o), e[Lt] = t.current, hi(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i); return new So(t); };
Ke.render = function (e, t, n) { if (!bo(t))
    throw Error(N(200)); return Eo(null, e, t, !1, n); };
Ke.unmountComponentAtNode = function (e) { if (!bo(e))
    throw Error(N(40)); return e._reactRootContainer ? (Bn(function () { Eo(null, null, e, !1, function () { e._reactRootContainer = null, e[Lt] = null; }); }), !0) : !1; };
Ke.unstable_batchedUpdates = Pu;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!bo(n))
    throw Error(N(200)); if (e == null || e._reactInternals === void 0)
    throw Error(N(38)); return Eo(e, t, n, !1, r); };
Ke.version = "18.2.0-next-9e3b772b8-20220608";
function Bh() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh);
    }
    catch (e) {
        console.error(e);
    } }
Bh(), zf.exports = Ke;
var yv = zf.exports, Cd = yv;
Pl.createRoot = Cd.createRoot, Pl.hydrateRoot = Cd.hydrateRoot; /**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ei() { return Ei = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Ei.apply(this, arguments); }
var Kt;
(function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; })(Kt || (Kt = {}));
const _d = "popstate";
function wv(e) { e === void 0 && (e = {}); function t(r, i) { let { pathname: s, search: o, hash: a } = r.location; return Ca("", { pathname: s, search: o, hash: a }, i.state && i.state.usr || null, i.state && i.state.key || "default"); } function n(r, i) { return typeof i == "string" ? i : Xs(i); } return Sv(t, n, null, e); }
function ae(e, t) { if (e === !1 || e === null || typeof e > "u")
    throw new Error(t); }
function Bu(e, t) { if (!e) {
    typeof console < "u" && console.warn(t);
    try {
        throw new Error(t);
    }
    catch (_j) { }
} }
function xv() { return Math.random().toString(36).substr(2, 8); }
function kd(e, t) { return { usr: e.state, key: e.key, idx: t }; }
function Ca(e, t, n, r) { return n === void 0 && (n = null), Ei({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Or(t) : t, { state: n, key: t && t.key || r || xv() }); }
function Xs(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t; }
function Or(e) { let t = {}; if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
} return t; }
function Sv(e, t, n, r) { r === void 0 && (r = {}); let { window: i = document.defaultView, v5Compat: s = !1 } = r, o = i.history, a = Kt.Pop, l = null, u = d(); u == null && (u = 0, o.replaceState(Ei({}, o.state, { idx: u }), "")); function d() { return (o.state || { idx: null }).idx; } function f() { a = Kt.Pop; let x = d(), p = x == null ? null : x - u; u = x, l && l({ action: a, location: g.location, delta: p }); } function h(x, p) { a = Kt.Push; let v = Ca(g.location, x, p); n && n(v, x), u = d() + 1; let y = kd(v, u), S = g.createHref(v); try {
    o.pushState(y, "", S);
}
catch (C) {
    if (C instanceof DOMException && C.name === "DataCloneError")
        throw C;
    i.location.assign(S);
} s && l && l({ action: a, location: g.location, delta: 1 }); } function w(x, p) { a = Kt.Replace; let v = Ca(g.location, x, p); n && n(v, x), u = d(); let y = kd(v, u), S = g.createHref(v); o.replaceState(y, "", S), s && l && l({ action: a, location: g.location, delta: 0 }); } function m(x) { let p = i.location.origin !== "null" ? i.location.origin : i.location.href, v = typeof x == "string" ? x : Xs(x); return ae(p, "No window.location.(origin|href) available to create URL for href: " + v), new URL(v, p); } let g = { get action() { return a; }, get location() { return e(i, o); }, listen(x) { if (l)
        throw new Error("A history only accepts one active listener"); return i.addEventListener(_d, f), l = x, () => { i.removeEventListener(_d, f), l = null; }; }, createHref(x) { return t(i, x); }, createURL: m, encodeLocation(x) { let p = m(x); return { pathname: p.pathname, search: p.search, hash: p.hash }; }, push: h, replace: w, go(x) { return o.go(x); } }; return g; }
var Nd;
(function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; })(Nd || (Nd = {}));
function bv(e, t, n) { n === void 0 && (n = "/"); let r = typeof t == "string" ? Or(t) : t, i = Fu(r.pathname || "/", n); if (i == null)
    return null; let s = Fh(e); Ev(s); let o = null; for (let a = 0; o == null && a < s.length; ++a)
    o = Rv(s[a], Mv(i)); return o; }
function Fh(e, t, n, r) { t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""); let i = (s, o, a) => { let l = { relativePath: a === void 0 ? s.path || "" : a, caseSensitive: s.caseSensitive === !0, childrenIndex: o, route: s }; l.relativePath.startsWith("/") && (ae(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length)); let u = ln([r, l.relativePath]), d = n.concat(l); s.children && s.children.length > 0 && (ae(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Fh(s.children, t, d, u)), !(s.path == null && !s.index) && t.push({ path: u, score: Ov(u, s.index), routesMeta: d }); }; return e.forEach((s, o) => { var a; if (s.path === "" || !((a = s.path) != null && a.includes("?")))
    i(s, o);
else
    for (let l of jh(s.path))
        i(s, o, l); }), t; }
function jh(e) { let t = e.split("/"); if (t.length === 0)
    return []; let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, ""); if (r.length === 0)
    return i ? [s, ""] : [s]; let o = jh(r.join("/")), a = []; return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))), i && a.push(...o), a.map(l => e.startsWith("/") && l === "" ? "/" : l); }
function Ev(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : Pv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))); }
const Cv = /^:\w+$/, _v = 3, kv = 2, Nv = 1, Tv = 10, Iv = -2, Td = e => e === "*";
function Ov(e, t) { let n = e.split("/"), r = n.length; return n.some(Td) && (r += Iv), t && (r += kv), n.filter(i => !Td(i)).reduce((i, s) => i + (Cv.test(s) ? _v : s === "" ? Nv : Tv), r); }
function Pv(e, t) { return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0; }
function Rv(e, t) { let { routesMeta: n } = e, r = {}, i = "/", s = []; for (let o = 0; o < n.length; ++o) {
    let a = n[o], l = o === n.length - 1, u = i === "/" ? t : t.slice(i.length) || "/", d = Lv({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
    if (!d)
        return null;
    Object.assign(r, d.params);
    let f = a.route;
    s.push({ params: r, pathname: ln([i, d.pathname]), pathnameBase: Bv(ln([i, d.pathnameBase])), route: f }), d.pathnameBase !== "/" && (i = ln([i, d.pathnameBase]));
} return s; }
function Lv(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = Av(e.path, e.caseSensitive, e.end), i = t.match(n); if (!i)
    return null; let s = i[0], o = s.replace(/(.)\/+$/, "$1"), a = i.slice(1); return { params: r.reduce((u, d, f) => { if (d === "*") {
        let h = a[f] || "";
        o = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
    } return u[d] = Dv(a[f] || "", d), u; }, {}), pathname: s, pathnameBase: o, pattern: e }; }
function Av(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !0), Bu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)")); return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]; }
function Mv(e) { try {
    return decodeURI(e);
}
catch (t) {
    return Bu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
} }
function Dv(e, t) { try {
    return decodeURIComponent(e);
}
catch (n) {
    return Bu(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
} }
function Fu(e, t) { if (t === "/")
    return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null; let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/"; }
function zv(e, t) { t === void 0 && (t = "/"); let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Or(e) : e; return { pathname: n ? n.startsWith("/") ? n : $v(n, t) : t, search: Fv(r), hash: jv(i) }; }
function $v(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(i => { i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i); }), n.length > 1 ? n.join("/") : "/"; }
function ul(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'; }
function Uh(e) { return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0); }
function Vh(e, t, n, r) { r === void 0 && (r = !1); let i; typeof e == "string" ? i = Or(e) : (i = Ei({}, e), ae(!i.pathname || !i.pathname.includes("?"), ul("?", "pathname", "search", i)), ae(!i.pathname || !i.pathname.includes("#"), ul("#", "pathname", "hash", i)), ae(!i.search || !i.search.includes("#"), ul("#", "search", "hash", i))); let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, a; if (r || o == null)
    a = n;
else {
    let f = t.length - 1;
    if (o.startsWith("..")) {
        let h = o.split("/");
        for (; h[0] === "..";)
            h.shift(), f -= 1;
        i.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
} let l = zv(i, a), u = o && o !== "/" && o.endsWith("/"), d = (s || o === ".") && n.endsWith("/"); return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l; }
const ln = e => e.join("/").replace(/\/\/+/g, "/"), Bv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Fv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, jv = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Uv(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e; }
const Hh = ["post", "put", "patch", "delete"];
new Set(Hh);
const Vv = ["get", ...Hh];
new Set(Vv); /**
* React Router v6.15.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Qs() { return Qs = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Qs.apply(this, arguments); }
const ju = E.createContext(null), Wh = E.createContext(null), Yn = E.createContext(null), Co = E.createContext(null), yn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }), Gh = E.createContext(null);
function Hv(e, t) { let { relative: n } = t === void 0 ? {} : t; Ri() || ae(!1); let { basename: r, navigator: i } = E.useContext(Yn), { hash: s, pathname: o, search: a } = Uu(e, { relative: n }), l = o; return r !== "/" && (l = o === "/" ? r : ln([r, o])), i.createHref({ pathname: l, search: a, hash: s }); }
function Ri() { return E.useContext(Co) != null; }
function Li() { return Ri() || ae(!1), E.useContext(Co).location; }
function qh(e) { E.useContext(Yn).static || E.useLayoutEffect(e); }
function Re() { let { isDataRoute: e } = E.useContext(yn); return e ? ry() : Wv(); }
function Wv() { Ri() || ae(!1); let e = E.useContext(ju), { basename: t, navigator: n } = E.useContext(Yn), { matches: r } = E.useContext(yn), { pathname: i } = Li(), s = JSON.stringify(Uh(r).map(l => l.pathnameBase)), o = E.useRef(!1); return qh(() => { o.current = !0; }), E.useCallback(function (l, u) { if (u === void 0 && (u = {}), !o.current)
    return; if (typeof l == "number") {
    n.go(l);
    return;
} let d = Vh(l, JSON.parse(s), i, u.relative === "path"); e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : ln([t, d.pathname])), (u.replace ? n.replace : n.push)(d, u.state, u); }, [t, n, s, i, e]); }
function Pr() { let { matches: e } = E.useContext(yn), t = e[e.length - 1]; return t ? t.params : {}; }
function Uu(e, t) { let { relative: n } = t === void 0 ? {} : t, { matches: r } = E.useContext(yn), { pathname: i } = Li(), s = JSON.stringify(Uh(r).map(o => o.pathnameBase)); return E.useMemo(() => Vh(e, JSON.parse(s), i, n === "path"), [e, s, i, n]); }
function Gv(e, t) { return qv(e, t); }
function qv(e, t, n) { Ri() || ae(!1); let { navigator: r } = E.useContext(Yn), { matches: i } = E.useContext(yn), s = i[i.length - 1], o = s ? s.params : {}; s && s.pathname; let a = s ? s.pathnameBase : "/"; s && s.route; let l = Li(), u; if (t) {
    var d;
    let g = typeof t == "string" ? Or(t) : t;
    a === "/" || (d = g.pathname) != null && d.startsWith(a) || ae(!1), u = g;
}
else
    u = l; let f = u.pathname || "/", h = a === "/" ? f : f.slice(a.length) || "/", w = bv(e, { pathname: h }), m = Jv(w && w.map(g => Object.assign({}, g, { params: Object.assign({}, o, g.params), pathname: ln([a, r.encodeLocation ? r.encodeLocation(g.pathname).pathname : g.pathname]), pathnameBase: g.pathnameBase === "/" ? a : ln([a, r.encodeLocation ? r.encodeLocation(g.pathnameBase).pathname : g.pathnameBase]) })), i, n); return t && m ? E.createElement(Co.Provider, { value: { location: Qs({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u), navigationType: Kt.Pop } }, m) : m; }
function Kv() { let e = ny(), t = Uv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }, s = null; return E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? E.createElement("pre", { style: i }, n) : null, s); }
const Yv = E.createElement(Kv, null);
class Xv extends E.Component {
    constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error }; }
    static getDerivedStateFromError(t) { return { error: t }; }
    static getDerivedStateFromProps(t, n) { return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation }; }
    componentDidCatch(t, n) { console.error("React Router caught the following error during render", t, n); }
    render() { return this.state.error ? E.createElement(yn.Provider, { value: this.props.routeContext }, E.createElement(Gh.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
}
function Qv(e) { let { routeContext: t, match: n, children: r } = e, i = E.useContext(ju); return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), E.createElement(yn.Provider, { value: t }, r); }
function Jv(e, t, n) { var r; if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
    var i;
    if ((i = n) != null && i.errors)
        e = n.matches;
    else
        return null;
} let s = e, o = (r = n) == null ? void 0 : r.errors; if (o != null) {
    let a = s.findIndex(l => l.route.id && (o == null ? void 0 : o[l.route.id]));
    a >= 0 || ae(!1), s = s.slice(0, Math.min(s.length, a + 1));
} return s.reduceRight((a, l, u) => { let d = l.route.id ? o == null ? void 0 : o[l.route.id] : null, f = null; n && (f = l.route.errorElement || Yv); let h = t.concat(s.slice(0, u + 1)), w = () => { let m; return d ? m = f : l.route.Component ? m = E.createElement(l.route.Component, null) : l.route.element ? m = l.route.element : m = a, E.createElement(Qv, { match: l, routeContext: { outlet: a, matches: h, isDataRoute: n != null }, children: m }); }; return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0) ? E.createElement(Xv, { location: n.location, revalidation: n.revalidation, component: f, error: d, children: w(), routeContext: { outlet: null, matches: h, isDataRoute: !0 } }) : w(); }, null); }
var Kh = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(Kh || {}), Js = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Js || {});
function Zv(e) { let t = E.useContext(ju); return t || ae(!1), t; }
function ey(e) { let t = E.useContext(Wh); return t || ae(!1), t; }
function ty(e) { let t = E.useContext(yn); return t || ae(!1), t; }
function Yh(e) { let t = ty(), n = t.matches[t.matches.length - 1]; return n.route.id || ae(!1), n.route.id; }
function ny() { var e; let t = E.useContext(Gh), n = ey(Js.UseRouteError), r = Yh(Js.UseRouteError); return t || ((e = n.errors) == null ? void 0 : e[r]); }
function ry() { let { router: e } = Zv(Kh.UseNavigateStable), t = Yh(Js.UseNavigateStable), n = E.useRef(!1); return qh(() => { n.current = !0; }), E.useCallback(function (i, s) { s === void 0 && (s = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Qs({ fromRouteId: t }, s))); }, [e, t]); }
function ue(e) { ae(!1); }
function iy(e) { let { basename: t = "/", children: n = null, location: r, navigationType: i = Kt.Pop, navigator: s, static: o = !1 } = e; Ri() && ae(!1); let a = t.replace(/^\/*/, "/"), l = E.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]); typeof r == "string" && (r = Or(r)); let { pathname: u = "/", search: d = "", hash: f = "", state: h = null, key: w = "default" } = r, m = E.useMemo(() => { let g = Fu(u, a); return g == null ? null : { location: { pathname: g, search: d, hash: f, state: h, key: w }, navigationType: i }; }, [a, u, d, f, h, w, i]); return m == null ? null : E.createElement(Yn.Provider, { value: l }, E.createElement(Co.Provider, { children: n, value: m })); }
function sy(e) { let { children: t, location: n } = e; return Gv(_a(t), n); }
new Promise(() => { });
function _a(e, t) { t === void 0 && (t = []); let n = []; return E.Children.forEach(e, (r, i) => { if (!E.isValidElement(r))
    return; let s = [...t, i]; if (r.type === E.Fragment) {
    n.push.apply(n, _a(r.props.children, s));
    return;
} r.type !== ue && ae(!1), !r.props.index || !r.props.children || ae(!1); let o = { id: r.props.id || s.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy }; r.props.children && (o.children = _a(r.props.children, s)), n.push(o); }), n; } /**
* React Router DOM v6.15.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Zs() { return Zs = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Zs.apply(this, arguments); }
function Xh(e, t) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, s; for (s = 0; s < r.length; s++)
    i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function oy(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }
function ly(e, t) { return e.button === 0 && (!t || t === "_self") && !oy(e); }
const ay = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], uy = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], cy = "startTransition", Id = ag[cy];
function dy(e) { let { basename: t, children: n, future: r, window: i } = e, s = E.useRef(); s.current == null && (s.current = wv({ window: i, v5Compat: !0 })); let o = s.current, [a, l] = E.useState({ action: o.action, location: o.location }), { v7_startTransition: u } = r || {}, d = E.useCallback(f => { u && Id ? Id(() => l(f)) : l(f); }, [l, u]); return E.useLayoutEffect(() => o.listen(d), [o, d]), E.createElement(iy, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: o }); }
const fy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", py = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ke = E.forwardRef(function (t, n) { let { onClick: r, relative: i, reloadDocument: s, replace: o, state: a, target: l, to: u, preventScrollReset: d } = t, f = Xh(t, ay), { basename: h } = E.useContext(Yn), w, m = !1; if (typeof u == "string" && py.test(u) && (w = u, fy))
    try {
        let v = new URL(window.location.href), y = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u), S = Fu(y.pathname, h);
        y.origin === v.origin && S != null ? u = S + y.search + y.hash : m = !0;
    }
    catch (_j) { } let g = Hv(u, { relative: i }), x = hy(u, { replace: o, state: a, target: l, preventScrollReset: d, relative: i }); function p(v) { r && r(v), v.defaultPrevented || x(v); } return E.createElement("a", Zs({}, f, { href: w || g, onClick: m || s ? r : p, ref: n, target: l })); }), Fn = E.forwardRef(function (t, n) { let { "aria-current": r = "page", caseSensitive: i = !1, className: s = "", end: o = !1, style: a, to: l, children: u } = t, d = Xh(t, uy), f = Uu(l, { relative: d.relative }), h = Li(), w = E.useContext(Wh), { navigator: m } = E.useContext(Yn), g = m.encodeLocation ? m.encodeLocation(f).pathname : f.pathname, x = h.pathname, p = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null; i || (x = x.toLowerCase(), p = p ? p.toLowerCase() : null, g = g.toLowerCase()); let v = x === g || !o && x.startsWith(g) && x.charAt(g.length) === "/", y = p != null && (p === g || !o && p.startsWith(g) && p.charAt(g.length) === "/"), S = v ? r : void 0, C; typeof s == "function" ? C = s({ isActive: v, isPending: y }) : C = [s, v ? "active" : null, y ? "pending" : null].filter(Boolean).join(" "); let k = typeof a == "function" ? a({ isActive: v, isPending: y }) : a; return E.createElement(ke, Zs({}, d, { "aria-current": S, className: C, ref: n, style: k, to: l }), typeof u == "function" ? u({ isActive: v, isPending: y }) : u); });
var Od;
(function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"; })(Od || (Od = {}));
var Pd;
(function (e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; })(Pd || (Pd = {}));
function hy(e, t) { let { target: n, replace: r, state: i, preventScrollReset: s, relative: o } = t === void 0 ? {} : t, a = Re(), l = Li(), u = Uu(e, { relative: o }); return E.useCallback(d => { if (ly(d, n)) {
    d.preventDefault();
    let f = r !== void 0 ? r : Xs(l) === Xs(u);
    a(e, { replace: f, state: i, preventScrollReset: s, relative: o });
} }, [l, a, u, r, i, n, e, s, o]); }
var Qh = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 }, Rd = V.createContext && V.createContext(Qh), an = globalThis && globalThis.__assign || function () { return an = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) {
    t = arguments[n];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
} return e; }, an.apply(this, arguments); }, my = globalThis && globalThis.__rest || function (e, t) { var n = {}; for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]); return n; };
function Jh(e) { return e && e.map(function (t, n) { return V.createElement(t.tag, an({ key: n }, t.attr), Jh(t.child)); }); }
function B(e) { return function (t) { return V.createElement(gy, an({ attr: an({}, e.attr) }, t), Jh(e.child)); }; }
function gy(e) { var t = function (n) { var r = e.attr, i = e.size, s = e.title, o = my(e, ["attr", "size", "title"]), a = i || n.size || "1em", l; return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), V.createElement("svg", an({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, o, { className: l, style: an(an({ color: e.color || n.color }, n.style), e.style), height: a, width: a, xmlns: "http://www.w3.org/2000/svg" }), s && V.createElement("title", null, s), e.children); }; return Rd !== void 0 ? V.createElement(Rd.Consumer, null, function (n) { return t(n); }) : t(Qh); }
function vy(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 244l144-144 144 144M256 120v292" } }] })(e); }
function Zh(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z" } }] })(e); }
function em(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" } }, { tag: "path", attr: { d: "M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" } }] })(e); }
function yy(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "circle", attr: { cx: "256", cy: "192", r: "32" } }, { tag: "path", attr: { d: "M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" } }] })(e); }
function tm(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M160 256a16 16 0 0116-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h160a56.06 56.06 0 0056-56V272H176a16 16 0 01-16-16zm299.31-11.31l-80-80a16 16 0 00-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1022.62 22.62l80-80a16 16 0 000-22.62z" } }] })(e); }
function wy(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" } }] })(e); }
function Ld(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" } }] })(e); }
function nm(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z" } }] })(e); }
function Ad(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" } }] })(e); }
function xy(e) { return B({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z" } }] })(e); }
function Sy(e) { return B({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" } }, { tag: "path", attr: { d: "M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" } }, { tag: "path", attr: { d: "M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" } }] })(e); }
function ht(e) { return B({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z", clipRule: "evenodd" } }] })(e); }
function rm(e) { return B({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" } }, { tag: "path", attr: { fillRule: "evenodd", d: "M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z", clipRule: "evenodd" } }, { tag: "path", attr: { d: "M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" } }] })(e); }
function Vu(e) { return B({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z", clipRule: "evenodd" } }] })(e); }
function im(e) { return B({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z", clipRule: "evenodd" } }] })(e); }
function sm(e) { return B({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" } }] })(e); }
function by(e) { return B({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" } }] })(e); }
function Ey(e) { return B({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z", clipRule: "evenodd" } }] })(e); }
function Cy() { const [e, t] = E.useState(localStorage.theme); return E.useEffect(() => { localStorage.theme === "dark" ? t("dark") : t("light"); }, []), E.useEffect(() => { e === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"); }, [e]), [e, t]; } /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var ka = function () { return ka = Object.assign || function (t) { for (var n, r = 1, i = arguments.length; r < i; r++) {
    n = arguments[r];
    for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
} return t; }, ka.apply(this, arguments); };
function _y(e, t) { var n = {}; for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]); return n; }
var gr = "", ni = null, Ss = null, om = null;
function Hu() { gr = "", ni !== null && ni.disconnect(), Ss !== null && (window.clearTimeout(Ss), Ss = null); }
function Md(e) { var t = ["BUTTON", "INPUT", "SELECT", "TEXTAREA"], n = ["A", "AREA"]; return t.includes(e.tagName) && !e.hasAttribute("disabled") || n.includes(e.tagName) && e.hasAttribute("href"); }
function Dd() { var e = null; if (gr === "#")
    e = document.body;
else {
    var t = gr.replace("#", "");
    e = document.getElementById(t), e === null && gr === "#top" && (e = document.body);
} if (e !== null) {
    om(e);
    var n = e.getAttribute("tabindex");
    return n === null && !Md(e) && e.setAttribute("tabindex", -1), e.focus({ preventScroll: !0 }), n === null && !Md(e) && (e.blur(), e.removeAttribute("tabindex")), Hu(), !0;
} return !1; }
function ky(e) { window.setTimeout(function () { Dd() === !1 && (ni === null && (ni = new MutationObserver(Dd)), ni.observe(document, { attributes: !0, childList: !0, subtree: !0 }), Ss = window.setTimeout(function () { Hu(); }, e || 1e4)); }, 0); }
function lm(e) { return V.forwardRef(function (t, n) { var r = ""; typeof t.to == "string" && t.to.includes("#") ? r = "#" + t.to.split("#").slice(1).join("#") : typeof t.to == "object" && typeof t.to.hash == "string" && (r = t.to.hash); var i = {}; e === Fn && (i.isActive = function (a, l) { return a && a.isExact && l.hash === r; }); function s(a) { Hu(), gr = t.elementId ? "#" + t.elementId : r, t.onClick && t.onClick(a), gr !== "" && !a.defaultPrevented && a.button === 0 && (!t.target || t.target === "_self") && !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) && (om = t.scroll || function (l) { return t.smooth ? l.scrollIntoView({ behavior: "smooth" }) : l.scrollIntoView(); }, ky(t.timeout)); } var o = _y(t, ["scroll", "smooth", "timeout", "elementId"]); return V.createElement(e, ka({}, i, o, { onClick: s, ref: n }), t.children); }); }
var Yt = lm(ke);
lm(Fn);
function Ny(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" } }, { tag: "path", attr: { d: "M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" } }] })(e); }
function am(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" } }] })(e); }
function Ty(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" } }] })(e); }
function Iy(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" } }] })(e); }
function Oy(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16v9zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425zm.336.563h-.672v4.105h.672V8.418zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z" } }] })(e); }
function Py(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M9.402 10.246c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" } }, { tag: "path", attr: { d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-4.118 9.79c1.258 0 2-1.067 2-2.872 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684c.047.64.594 1.406 1.703 1.406zm-2.89-5.435h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675V7.354z" } }] })(e); }
function Ry(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" } }] })(e); }
function Ly(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" } }] })(e); }
function Bt(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M6.707 9h4.364c-.536 1.573 2.028 3.806 4.929-.5-2.9-4.306-5.465-2.073-4.929-.5H6.707L4.854 6.146a.5.5 0 1 0-.708.708L5.293 8h-.586L2.854 6.146a.5.5 0 1 0-.708.708L3.293 8h-.586L.854 6.146a.5.5 0 1 0-.708.708L1.793 8.5.146 10.146a.5.5 0 0 0 .708.708L2.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L4.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L6.707 9Z" } }] })(e); }
function Ay(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" } }] })(e); }
function um(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" } }] })(e); }
function Wu(e) { return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" } }] })(e); } /*! js-cookie v3.0.5 | MIT */
function rs(e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        e[r] = n[r];
} return e; }
var My = { read: function (e) { return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent); }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent); } };
function Na(e, t) { function n(i, s, o) { if (!(typeof document > "u")) {
    o = rs({}, t, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var a = "";
    for (var l in o)
        o[l] && (a += "; " + l, o[l] !== !0 && (a += "=" + o[l].split(";")[0]));
    return document.cookie = i + "=" + e.write(s, i) + a;
} } function r(i) { if (!(typeof document > "u" || arguments.length && !i)) {
    for (var s = document.cookie ? document.cookie.split("; ") : [], o = {}, a = 0; a < s.length; a++) {
        var l = s[a].split("="), u = l.slice(1).join("=");
        try {
            var d = decodeURIComponent(l[0]);
            if (o[d] = e.read(u, d), i === d)
                break;
        }
        catch (_j) { }
    }
    return i ? o[i] : o;
} } return Object.create({ set: n, get: r, remove: function (i, s) { n(i, "", rs({}, s, { expires: -1 })); }, withAttributes: function (i) { return Na(this.converter, rs({}, this.attributes, i)); }, withConverter: function (i) { return Na(rs({}, this.converter, i), this.attributes); } }, { attributes: { value: Object.freeze(t) }, converter: { value: Object.freeze(e) } }); }
var Gu = Na(My, { path: "/" });
const Dy = Gu.get("token"), M = { token: Dy, url: "http://localhost:8080/api" };
function zy(e) { const { isNavOpen: t, setIsNavOpen: n, handleLogout: r } = e, i = () => { n(!1), document.body.style.overflow = "unset"; }, s = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }; return c(vr, { children: b("ul", { className: `flex-col flex items-center fixed inset-0  gap-8 justify-center p-8 md:hidden duration-500 ease-in-out z-40 h-screen ${t ? "right-0 bg-black/40 backdrop-blur-lg" : "right-[-200%] bg-transparent left-[200%]"}`, children: [c(Fn, { to: "/", onClick: () => { i(), s(); }, children: b("li", { className: "headerLink", children: [c("div", { children: c(em, { className: "text-[20px]" }) }), c("span", { className: "pl-1", children: "HOME" })] }) }), c(Yt, { smooth: !0, to: "/#courses", onClick: i, children: b("li", { className: "headerLink", children: [c("div", { children: c(Vu, { className: "text-[20px]" }) }), c("span", { className: "pl-1", children: "COURSES" })] }) }), c(Yt, { smooth: !0, to: "/#stories", onClick: i, children: b("li", { className: "headerLink", children: [c("div", { children: c(sm, { className: "text-[20px]" }) }), c("span", { className: "pl-1", children: "STORIES" })] }) }), c(Yt, { smooth: !0, to: "/#instructor", onClick: i, children: b("li", { className: "headerLink", children: [c("div", { children: c(nm, { className: "text-[20px]" }) }), c("span", { className: "pl-1", children: "INSTRUCTORS" })] }) }), c(Yt, { to: "#footer", smooth: !0, onClick: i, children: b("li", { className: "headerLink", children: [c("div", { children: c(im, { className: "text-[20px]" }) }), c("span", { className: "pl-1", children: "CONTACT US" })] }) }), M.token && b(vr, { children: [c(Fn, { to: "/enroll-list", onClick: i, children: b("li", { className: "headerLink", children: [c("div", { children: c(um, { className: "text-[20px]" }) }), c("span", { className: "pl-1", children: "STUDENTS" })] }) }), b("div", { onClick: r, className: "headerLink", children: [c(tm, { size: 20 }), c("span", { className: "pl-1", children: "LOGOUT" })] })] })] }) }); }
function $y(e) { return B({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor" } }] })(e); }
function By() { const [e, t] = Cy(), [n, r] = E.useState(!1), i = () => { e === "light" ? (t("dark"), localStorage.theme = "dark") : (t("light"), localStorage.theme = "light"); }, s = () => { r(!0), document.body.style.overflow = "hidden"; }, o = () => { document.body.style.overflow = "unset", r(!1); }, a = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }, l = () => { Gu.remove("token"), window.location.reload(); }; return b("header", { id: "home", className: "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] py-1 fixed border-b rounded-b-3xl", children: [c("div", { className: "flex items-center space-x-2 md:space-x-10", children: c("img", { src: "/images/MSI.png", alt: "MSI", width: 60, height: 60 }) }), b("div", { className: "flex items-center space-x-4 text-sm font-light", children: [c("div", { className: "md:hidden flex items-center mr-2", children: e === "dark" ? c(Ld, { height: 20, width: 20, className: "text-[20px] duration-300 cursor-pointer", onClick: i }) : c(Ad, { height: 20, width: 20, className: "text-[20px] duration-300 cursor-pointer", onClick: i }) }), c("div", { className: "block md:hidden z-50 right-10 cursor-pointer", children: n ? c($y, { className: "text-3xl", onClick: o }) : c(Ey, { className: "text-3xl", onClick: s }) }), b("ul", { className: "hidden md:flex space-x-5 ", children: [c(Fn, { to: "/", onClick: a, children: b("li", { className: "headerLink", children: [c("div", { children: c(em, { className: "text-[20px]" }) }), c("span", { className: "font-thin pl-1", children: "HOME" })] }) }), c(Yt, { smooth: !0, to: "/#courses", children: b("li", { className: "headerLink", children: [c("div", { children: c(Vu, { className: "text-[20px]" }) }), c("span", { className: "font-thin pl-1", children: "COURSES" })] }) }), c(Yt, { smooth: !0, to: "/#stories", children: b("li", { className: "headerLink", children: [c("div", { children: c(sm, { className: "text-[20px]" }) }), c("span", { className: "font-thin pl-1", children: "STORIES" })] }) }), c(Yt, { smooth: !0, to: "/#instructor", children: b("li", { className: "headerLink", children: [c("div", { children: c(nm, { className: "text-[20px]" }) }), c("span", { className: "font-thin pl-1", children: "INSTRUCTORS" })] }) }), c(Yt, { smooth: !0, to: "/#footer", children: b("li", { className: "headerLink", children: [c("div", { children: c(im, { className: "text-[20px]" }) }), c("span", { className: "font-thin  pl-1", children: "CONTACT US" })] }) }), M.token && b(vr, { children: [c(Fn, { to: "/enroll-list", children: b("li", { className: "headerLink", children: [c("div", { children: c(um, { className: "text-[20px]" }) }), c("span", { className: "font-thin pl-1", children: "STUDENTS" })] }) }), c("div", { onClick: l, className: "headerLink", children: c(tm, { size: 20 }) })] }), c("div", { className: "flex items-center mt-5 md:mt-0", children: e === "dark" ? c(Ld, { height: 20, width: 20, className: "text-[20px] duration-300 cursor-pointer", onClick: i }) : c(Ad, { height: 20, width: 20, className: "text-[20px] duration-300 cursor-pointer", onClick: i }) })] })] }), c(zy, { isNavOpen: n, setIsNavOpen: r, handleLogout: l })] }); }
function Fy() { return c("div", { className: "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] w-full pt-16", children: c("div", { className: "px-6 lg:px-20 md:container md:mx-auto ", children: b("div", { className: "flex w-full flex-wrap md:justify-between", children: [b("div", { className: "w-full md:w-1/2 p-5 ", children: [c("h1", { className: "mb-6 text-5xl text-left tracking-[.05em] md:text-5xl lg:text-6xl font-bold font-heading md:max-w-xl !leading-snug ", "data-config-id": "auto-txt-12-1", children: "Jumpstart Your Developer Career Here 🚀" }), c("p", { className: "mb-11 text-left text-lg text-[#fdeed4] font-medium md:max-w-md", "data-config-id": "auto-txt-13-1", children: "We focus on industry leading platforms so that you can be prepared for your next job. Then we teach all we can about them." }), c("div", { className: "flex flex-wrap -m-2.5", children: c("div", { className: "w-full md:w-auto p-2.5", children: c("div", { className: "block", children: c(ke, { to: "/create-enroll", children: c("button", { className: "py-4 px-9 w-full font-semibold border hover:border-gray-300 border-[#fdeed4] rounded-xl focus:ring focus:ring[#fdeed4] hover:bg-transparent bg-[#fdeed4] text-[#373737] hover:text-white transition ease-in-out duration-400", type: "button", children: b("div", { className: "flex flex-wrap justify-center items-center -m-1", children: [c("div", { className: "w-auto p-1 ", children: c(by, { height: 20, width: 20 }) }), c("div", { className: "w-auto p-1", children: c("span", { "data-config-id": "auto-txt-15-1", children: "Enroll now" }) })] }) }) }) }) }) })] }), c("div", { className: "w-full md:w-1/2 py-10", children: c("img", { className: "transform hover:-translate-y-14 transition ease-in-out duration-1000 z-0", src: "/images/banner.png", alt: "", "data-config-id": "auto-img-6-1" }) })] }) }) }); }
function cm(e) { return B({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" } }] })(e); }
function _o(e) { return B({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" } }] })(e); }
function zd(e) { return B({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" } }] })(e); }
function jy(e) { return B({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z" } }] })(e); }
function _r(e) { return B({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M17 4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7V2H17V4ZM9 9V17H11V9H9ZM13 9V17H15V9H13Z" } }] })(e); }
function qu(e) { return B({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e); }
function Uy(e) { return B({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M477.5 536.3L135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0z" } }, { tag: "path", attr: { d: "M876.3 198.8l39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z" } }, { tag: "path", attr: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z" } }] })(e); }
function dm(e, t) { return function () { return e.apply(t, arguments); }; }
const { toString: Vy } = Object.prototype, { getPrototypeOf: Ku } = Object, ko = (e => t => { const n = Vy.call(t); return e[n] || (e[n] = n.slice(8, -1).toLowerCase()); })(Object.create(null)), Et = e => (e = e.toLowerCase(), t => ko(t) === e), No = e => t => typeof t === e, { isArray: Rr } = Array, Ci = No("undefined");
function Hy(e) { return e !== null && !Ci(e) && e.constructor !== null && !Ci(e.constructor) && et(e.constructor.isBuffer) && e.constructor.isBuffer(e); }
const fm = Et("ArrayBuffer");
function Wy(e) { let t; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fm(e.buffer), t; }
const Gy = No("string"), et = No("function"), pm = No("number"), To = e => e !== null && typeof e == "object", qy = e => e === !0 || e === !1, bs = e => { if (ko(e) !== "object")
    return !1; const t = Ku(e); return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e); }, Ky = Et("Date"), Yy = Et("File"), Xy = Et("Blob"), Qy = Et("FileList"), Jy = e => To(e) && et(e.pipe), Zy = e => { let t; return e && (typeof FormData == "function" && e instanceof FormData || et(e.append) && ((t = ko(e)) === "formdata" || t === "object" && et(e.toString) && e.toString() === "[object FormData]")); }, e2 = Et("URLSearchParams"), t2 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ai(e, t, { allOwnKeys: n = !1 } = {}) { if (e === null || typeof e > "u")
    return; let r, i; if (typeof e != "object" && (e = [e]), Rr(e))
    for (r = 0, i = e.length; r < i; r++)
        t.call(null, e[r], r, e);
else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let a;
    for (r = 0; r < o; r++)
        a = s[r], t.call(null, e[a], a, e);
} }
function hm(e, t) { t = t.toLowerCase(); const n = Object.keys(e); let r = n.length, i; for (; r-- > 0;)
    if (i = n[r], t === i.toLowerCase())
        return i; return null; }
const mm = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), gm = e => !Ci(e) && e !== mm;
function Ta() { const { caseless: e } = gm(this) && this || {}, t = {}, n = (r, i) => { const s = e && hm(t, i) || i; bs(t[s]) && bs(r) ? t[s] = Ta(t[s], r) : bs(r) ? t[s] = Ta({}, r) : Rr(r) ? t[s] = r.slice() : t[s] = r; }; for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Ai(arguments[r], n); return t; }
const n2 = (e, t, n, { allOwnKeys: r } = {}) => (Ai(t, (i, s) => { n && et(i) ? e[s] = dm(i, n) : e[s] = i; }, { allOwnKeys: r }), e), r2 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), i2 = (e, t, n, r) => { e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n); }, s2 = (e, t, n, r) => { let i, s, o; const a = {}; if (t = t || {}, e == null)
    return t; do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0;)
        o = i[s], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = n !== !1 && Ku(e);
} while (e && (!n || n(e, t)) && e !== Object.prototype); return t; }, o2 = (e, t, n) => { e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length; const r = e.indexOf(t, n); return r !== -1 && r === n; }, l2 = e => { if (!e)
    return null; if (Rr(e))
    return e; let t = e.length; if (!pm(t))
    return null; const n = new Array(t); for (; t-- > 0;)
    n[t] = e[t]; return n; }, a2 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Ku(Uint8Array)), u2 = (e, t) => { const r = (e && e[Symbol.iterator]).call(e); let i; for (; (i = r.next()) && !i.done;) {
    const s = i.value;
    t.call(e, s[0], s[1]);
} }, c2 = (e, t) => { let n; const r = []; for (; (n = e.exec(t)) !== null;)
    r.push(n); return r; }, d2 = Et("HTMLFormElement"), f2 = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) { return r.toUpperCase() + i; }), $d = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), p2 = Et("RegExp"), vm = (e, t) => { const n = Object.getOwnPropertyDescriptors(e), r = {}; Ai(n, (i, s) => { t(i, s, e) !== !1 && (r[s] = i); }), Object.defineProperties(e, r); }, h2 = e => { vm(e, (t, n) => { if (et(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
    return !1; const r = e[n]; if (et(r)) {
    if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
    }
    t.set || (t.set = () => { throw Error("Can not rewrite read-only method '" + n + "'"); });
} }); }, m2 = (e, t) => { const n = {}, r = i => { i.forEach(s => { n[s] = !0; }); }; return Rr(e) ? r(e) : r(String(e).split(t)), n; }, g2 = () => { }, v2 = (e, t) => (e = +e, Number.isFinite(e) ? e : t), cl = "abcdefghijklmnopqrstuvwxyz", Bd = "0123456789", ym = { DIGIT: Bd, ALPHA: cl, ALPHA_DIGIT: cl + cl.toUpperCase() + Bd }, y2 = (e = 16, t = ym.ALPHA_DIGIT) => { let n = ""; const { length: r } = t; for (; e--;)
    n += t[Math.random() * r | 0]; return n; };
function w2(e) { return !!(e && et(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]); }
const x2 = e => { const t = new Array(10), n = (r, i) => { if (To(r)) {
    if (t.indexOf(r) >= 0)
        return;
    if (!("toJSON" in r)) {
        t[i] = r;
        const s = Rr(r) ? [] : {};
        return Ai(r, (o, a) => { const l = n(o, i + 1); !Ci(l) && (s[a] = l); }), t[i] = void 0, s;
    }
} return r; }; return n(e, 0); }, S2 = Et("AsyncFunction"), b2 = e => e && (To(e) || et(e)) && et(e.then) && et(e.catch), _ = { isArray: Rr, isArrayBuffer: fm, isBuffer: Hy, isFormData: Zy, isArrayBufferView: Wy, isString: Gy, isNumber: pm, isBoolean: qy, isObject: To, isPlainObject: bs, isUndefined: Ci, isDate: Ky, isFile: Yy, isBlob: Xy, isRegExp: p2, isFunction: et, isStream: Jy, isURLSearchParams: e2, isTypedArray: a2, isFileList: Qy, forEach: Ai, merge: Ta, extend: n2, trim: t2, stripBOM: r2, inherits: i2, toFlatObject: s2, kindOf: ko, kindOfTest: Et, endsWith: o2, toArray: l2, forEachEntry: u2, matchAll: c2, isHTMLForm: d2, hasOwnProperty: $d, hasOwnProp: $d, reduceDescriptors: vm, freezeMethods: h2, toObjectSet: m2, toCamelCase: f2, noop: g2, toFiniteNumber: v2, findKey: hm, global: mm, isContextDefined: gm, ALPHABET: ym, generateString: y2, isSpecCompliantForm: w2, toJSONObject: x2, isAsyncFn: S2, isThenable: b2 };
function j(e, t, n, r, i) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i); }
_.inherits(j, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: _.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null }; } });
const wm = j.prototype, xm = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => { xm[e] = { value: e }; });
Object.defineProperties(j, xm);
Object.defineProperty(wm, "isAxiosError", { value: !0 });
j.from = (e, t, n, r, i, s) => { const o = Object.create(wm); return _.toFlatObject(e, o, function (l) { return l !== Error.prototype; }, a => a !== "isAxiosError"), j.call(o, e.message, t, n, r, i), o.cause = e, o.name = e.name, s && Object.assign(o, s), o; };
const E2 = null;
function Ia(e) { return _.isPlainObject(e) || _.isArray(e); }
function Sm(e) { return _.endsWith(e, "[]") ? e.slice(0, -2) : e; }
function Fd(e, t, n) { return e ? e.concat(t).map(function (i, s) { return i = Sm(i), !n && s ? "[" + i + "]" : i; }).join(n ? "." : "") : t; }
function C2(e) { return _.isArray(e) && !e.some(Ia); }
const _2 = _.toFlatObject(_, {}, null, function (t) { return /^is[A-Z]/.test(t); });
function Io(e, t, n) { if (!_.isObject(e))
    throw new TypeError("target must be an object"); t = t || new FormData, n = _.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (g, x) { return !_.isUndefined(x[g]); }); const r = n.metaTokens, i = n.visitor || d, s = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t); if (!_.isFunction(i))
    throw new TypeError("visitor must be a function"); function u(m) { if (m === null)
    return ""; if (_.isDate(m))
    return m.toISOString(); if (!l && _.isBlob(m))
    throw new j("Blob is not supported. Use a Buffer instead."); return _.isArrayBuffer(m) || _.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m; } function d(m, g, x) { let p = m; if (m && !x && typeof m == "object") {
    if (_.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
    else if (_.isArray(m) && C2(m) || (_.isFileList(m) || _.endsWith(g, "[]")) && (p = _.toArray(m)))
        return g = Sm(g), p.forEach(function (y, S) { !(_.isUndefined(y) || y === null) && t.append(o === !0 ? Fd([g], S, s) : o === null ? g : g + "[]", u(y)); }), !1;
} return Ia(m) ? !0 : (t.append(Fd(x, g, s), u(m)), !1); } const f = [], h = Object.assign(_2, { defaultVisitor: d, convertValue: u, isVisitable: Ia }); function w(m, g) { if (!_.isUndefined(m)) {
    if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
    f.push(m), _.forEach(m, function (p, v) { (!(_.isUndefined(p) || p === null) && i.call(t, p, _.isString(v) ? v.trim() : v, g, h)) === !0 && w(p, g ? g.concat(v) : [v]); }), f.pop();
} } if (!_.isObject(e))
    throw new TypeError("data must be an object"); return w(e), t; }
function jd(e) { const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) { return t[r]; }); }
function Yu(e, t) { this._pairs = [], e && Io(e, this, t); }
const bm = Yu.prototype;
bm.append = function (t, n) { this._pairs.push([t, n]); };
bm.toString = function (t) { const n = t ? function (r) { return t.call(this, r, jd); } : jd; return this._pairs.map(function (i) { return n(i[0]) + "=" + n(i[1]); }, "").join("&"); };
function k2(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]"); }
function Em(e, t, n) { if (!t)
    return e; const r = n && n.encode || k2, i = n && n.serialize; let s; if (i ? s = i(t, n) : s = _.isURLSearchParams(t) ? t.toString() : new Yu(t, n).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
} return e; }
class N2 {
    constructor() { this.handlers = []; }
    use(t, n, r) { return this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1; }
    eject(t) { this.handlers[t] && (this.handlers[t] = null); }
    clear() { this.handlers && (this.handlers = []); }
    forEach(t) { _.forEach(this.handlers, function (r) { r !== null && t(r); }); }
}
const Ud = N2, Cm = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, T2 = typeof URLSearchParams < "u" ? URLSearchParams : Yu, I2 = typeof FormData < "u" ? FormData : null, O2 = typeof Blob < "u" ? Blob : null, P2 = (() => { let e; return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"; })(), R2 = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), yt = { isBrowser: !0, classes: { URLSearchParams: T2, FormData: I2, Blob: O2 }, isStandardBrowserEnv: P2, isStandardBrowserWebWorkerEnv: R2, protocols: ["http", "https", "file", "blob", "url", "data"] };
function L2(e, t) { return Io(e, new yt.classes.URLSearchParams, Object.assign({ visitor: function (n, r, i, s) { return yt.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments); } }, t)); }
function A2(e) { return _.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0]); }
function M2(e) { const t = {}, n = Object.keys(e); let r; const i = n.length; let s; for (r = 0; r < i; r++)
    s = n[r], t[s] = e[s]; return t; }
function _m(e) { function t(n, r, i, s) { let o = n[s++]; const a = Number.isFinite(+o), l = s >= n.length; return o = !o && _.isArray(i) ? i.length : o, l ? (_.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !a) : ((!i[o] || !_.isObject(i[o])) && (i[o] = []), t(n, r, i[o], s) && _.isArray(i[o]) && (i[o] = M2(i[o])), !a); } if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return _.forEachEntry(e, (r, i) => { t(A2(r), i, n, 0); }), n;
} return null; }
const D2 = { "Content-Type": void 0 };
function z2(e, t, n) { if (_.isString(e))
    try {
        return (t || JSON.parse)(e), _.trim(e);
    }
    catch (r) {
        if (r.name !== "SyntaxError")
            throw r;
    } return (n || JSON.stringify)(e); }
const Oo = { transitional: Cm, adapter: ["xhr", "http"], transformRequest: [function (t, n) { const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = _.isObject(t); if (s && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
            return i && i ? JSON.stringify(_m(t)) : t; if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t))
            return t; if (_.isArrayBufferView(t))
            return t.buffer; if (_.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString(); let a; if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return L2(t, this.formSerializer).toString();
            if ((a = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return Io(a ? { "files[]": t } : t, l && new l, this.formSerializer);
            }
        } return s || i ? (n.setContentType("application/json", !1), z2(t)) : t; }], transformResponse: [function (t) { const n = this.transitional || Oo.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json"; if (t && _.isString(t) && (r && !this.responseType || i)) {
            const o = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t);
            }
            catch (a) {
                if (o)
                    throw a.name === "SyntaxError" ? j.from(a, j.ERR_BAD_RESPONSE, this, null, this.response) : a;
            }
        } return t; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: yt.classes.FormData, Blob: yt.classes.Blob }, validateStatus: function (t) { return t >= 200 && t < 300; }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
_.forEach(["delete", "get", "head"], function (t) { Oo.headers[t] = {}; });
_.forEach(["post", "put", "patch"], function (t) { Oo.headers[t] = _.merge(D2); });
const Xu = Oo, $2 = _.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), B2 = e => {
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function (o) { i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || t[n] && $2[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r); }), t;
}, Vd = Symbol("internals");
function jr(e) { return e && String(e).trim().toLowerCase(); }
function Es(e) { return e === !1 || e == null ? e : _.isArray(e) ? e.map(Es) : String(e); }
function F2(e) { const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let r; for (; r = n.exec(e);)
    t[r[1]] = r[2]; return t; }
const j2 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dl(e, t, n, r, i) { if (_.isFunction(r))
    return r.call(this, t, n); if (i && (t = n), !!_.isString(t)) {
    if (_.isString(r))
        return t.indexOf(r) !== -1;
    if (_.isRegExp(r))
        return r.test(t);
} }
function U2(e) { return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r); }
function V2(e, t) { const n = _.toCamelCase(" " + t); ["get", "set", "has"].forEach(r => { Object.defineProperty(e, r + n, { value: function (i, s, o) { return this[r].call(this, t, i, s, o); }, configurable: !0 }); }); }
class Po {
    constructor(t) { t && this.set(t); }
    set(t, n, r) { const i = this; function s(a, l, u) { const d = jr(l); if (!d)
        throw new Error("header name must be a non-empty string"); const f = _.findKey(i, d); (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || l] = Es(a)); } const o = (a, l) => _.forEach(a, (u, d) => s(u, d, l)); return _.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : _.isString(t) && (t = t.trim()) && !j2(t) ? o(B2(t), n) : t != null && s(n, t, r), this; }
    get(t, n) { if (t = jr(t), t) {
        const r = _.findKey(this, t);
        if (r) {
            const i = this[r];
            if (!n)
                return i;
            if (n === !0)
                return F2(i);
            if (_.isFunction(n))
                return n.call(this, i, r);
            if (_.isRegExp(n))
                return n.exec(i);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    } }
    has(t, n) { if (t = jr(t), t) {
        const r = _.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || dl(this, this[r], r, n)));
    } return !1; }
    delete(t, n) { const r = this; let i = !1; function s(o) { if (o = jr(o), o) {
        const a = _.findKey(r, o);
        a && (!n || dl(r, r[a], a, n)) && (delete r[a], i = !0);
    } } return _.isArray(t) ? t.forEach(s) : s(t), i; }
    clear(t) { const n = Object.keys(this); let r = n.length, i = !1; for (; r--;) {
        const s = n[r];
        (!t || dl(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    } return i; }
    normalize(t) { const n = this, r = {}; return _.forEach(this, (i, s) => { const o = _.findKey(r, s); if (o) {
        n[o] = Es(i), delete n[s];
        return;
    } const a = t ? U2(s) : String(s).trim(); a !== s && delete n[s], n[a] = Es(i), r[a] = !0; }), this; }
    concat(...t) { return this.constructor.concat(this, ...t); }
    toJSON(t) { const n = Object.create(null); return _.forEach(this, (r, i) => { r != null && r !== !1 && (n[i] = t && _.isArray(r) ? r.join(", ") : r); }), n; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() { return "AxiosHeaders"; }
    static from(t) { return t instanceof this ? t : new this(t); }
    static concat(t, ...n) { const r = new this(t); return n.forEach(i => r.set(i)), r; }
    static accessor(t) { const r = (this[Vd] = this[Vd] = { accessors: {} }).accessors, i = this.prototype; function s(o) { const a = jr(o); r[a] || (V2(i, o), r[a] = !0); } return _.isArray(t) ? t.forEach(s) : s(t), this; }
}
Po.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.freezeMethods(Po.prototype);
_.freezeMethods(Po);
const Pt = Po;
function fl(e, t) { const n = this || Xu, r = t || n, i = Pt.from(r.headers); let s = r.data; return _.forEach(e, function (a) { s = a.call(n, s, i.normalize(), t ? t.status : void 0); }), i.normalize(), s; }
function km(e) { return !!(e && e.__CANCEL__); }
function Mi(e, t, n) { j.call(this, e !== null && e !== void 0 ? e : "canceled", j.ERR_CANCELED, t, n), this.name = "CanceledError"; }
_.inherits(Mi, j, { __CANCEL__: !0 });
function H2(e, t, n) { const r = n.config.validateStatus; !n.status || !r || r(n.status) ? e(n) : t(new j("Request failed with status code " + n.status, [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)); }
const W2 = yt.isStandardBrowserEnv ? function () { return { write: function (n, r, i, s, o, a) { const l = []; l.push(n + "=" + encodeURIComponent(r)), _.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()), _.isString(s) && l.push("path=" + s), _.isString(o) && l.push("domain=" + o), a === !0 && l.push("secure"), document.cookie = l.join("; "); }, read: function (n) { const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")); return r ? decodeURIComponent(r[3]) : null; }, remove: function (n) { this.write(n, "", Date.now() - 864e5); } }; }() : function () { return { write: function () { }, read: function () { return null; }, remove: function () { } }; }();
function G2(e) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e); }
function q2(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e; }
function Nm(e, t) { return e && !G2(t) ? q2(e, t) : t; }
const K2 = yt.isStandardBrowserEnv ? function () { const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"); let r; function i(s) { let o = s; return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname }; } return r = i(window.location.href), function (o) { const a = _.isString(o) ? i(o) : o; return a.protocol === r.protocol && a.host === r.host; }; }() : function () { return function () { return !0; }; }();
function Y2(e) { const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e); return t && t[1] || ""; }
function X2(e, t) { e = e || 10; const n = new Array(e), r = new Array(e); let i = 0, s = 0, o; return t = t !== void 0 ? t : 1e3, function (l) { const u = Date.now(), d = r[s]; o || (o = u), n[i] = l, r[i] = u; let f = s, h = 0; for (; f !== i;)
    h += n[f++], f = f % e; if (i = (i + 1) % e, i === s && (s = (s + 1) % e), u - o < t)
    return; const w = d && u - d; return w ? Math.round(h * 1e3 / w) : void 0; }; }
function Hd(e, t) { let n = 0; const r = X2(50, 250); return i => { const s = i.loaded, o = i.lengthComputable ? i.total : void 0, a = s - n, l = r(a), u = s <= o; n = s; const d = { loaded: s, total: o, progress: o ? s / o : void 0, bytes: a, rate: l || void 0, estimated: l && o && u ? (o - s) / l : void 0, event: i }; d[t ? "download" : "upload"] = !0, e(d); }; }
const Q2 = typeof XMLHttpRequest < "u", J2 = Q2 && function (e) { return new Promise(function (n, r) { let i = e.data; const s = Pt.from(e.headers).normalize(), o = e.responseType; let a; function l() { e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a); } _.isFormData(i) && (yt.isStandardBrowserEnv || yt.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1)); let u = new XMLHttpRequest; if (e.auth) {
    const w = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
    s.set("Authorization", "Basic " + btoa(w + ":" + m));
} const d = Nm(e.baseURL, e.url); u.open(e.method.toUpperCase(), Em(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout; function f() { if (!u)
    return; const w = Pt.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()), g = { data: !o || o === "text" || o === "json" ? u.responseText : u.response, status: u.status, statusText: u.statusText, headers: w, config: e, request: u }; H2(function (p) { n(p), l(); }, function (p) { r(p), l(); }, g), u = null; } if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function () { !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f); }, u.onabort = function () { u && (r(new j("Request aborted", j.ECONNABORTED, e, u)), u = null); }, u.onerror = function () { r(new j("Network Error", j.ERR_NETWORK, e, u)), u = null; }, u.ontimeout = function () { let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"; const g = e.transitional || Cm; e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new j(m, g.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED, e, u)), u = null; }, yt.isStandardBrowserEnv) {
    const w = (e.withCredentials || K2(d)) && e.xsrfCookieName && W2.read(e.xsrfCookieName);
    w && s.set(e.xsrfHeaderName, w);
} i === void 0 && s.setContentType(null), "setRequestHeader" in u && _.forEach(s.toJSON(), function (m, g) { u.setRequestHeader(g, m); }), _.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Hd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Hd(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = w => { u && (r(!w || w.type ? new Mi(null, e, u) : w), u.abort(), u = null); }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a))); const h = Y2(d); if (h && yt.protocols.indexOf(h) === -1) {
    r(new j("Unsupported protocol " + h + ":", j.ERR_BAD_REQUEST, e));
    return;
} u.send(i || null); }); }, Cs = { http: E2, xhr: J2 };
_.forEach(Cs, (e, t) => { if (e) {
    try {
        Object.defineProperty(e, "name", { value: t });
    }
    catch (_j) { }
    Object.defineProperty(e, "adapterName", { value: t });
} });
const Z2 = { getAdapter: e => { e = _.isArray(e) ? e : [e]; const { length: t } = e; let n, r; for (let i = 0; i < t && (n = e[i], !(r = _.isString(n) ? Cs[n.toLowerCase()] : n)); i++)
        ; if (!r)
        throw r === !1 ? new j(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(_.hasOwnProp(Cs, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`); if (!_.isFunction(r))
        throw new TypeError("adapter is not a function"); return r; }, adapters: Cs };
function pl(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Mi(null, e); }
function Wd(e) { return pl(e), e.headers = Pt.from(e.headers), e.data = fl.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Z2.getAdapter(e.adapter || Xu.adapter)(e).then(function (r) { return pl(e), r.data = fl.call(e, e.transformResponse, r), r.headers = Pt.from(r.headers), r; }, function (r) { return km(r) || (pl(e), r && r.response && (r.response.data = fl.call(e, e.transformResponse, r.response), r.response.headers = Pt.from(r.response.headers))), Promise.reject(r); }); }
const Gd = e => e instanceof Pt ? e.toJSON() : e;
function kr(e, t) { t = t || {}; const n = {}; function r(u, d, f) { return _.isPlainObject(u) && _.isPlainObject(d) ? _.merge.call({ caseless: f }, u, d) : _.isPlainObject(d) ? _.merge({}, d) : _.isArray(d) ? d.slice() : d; } function i(u, d, f) { if (_.isUndefined(d)) {
    if (!_.isUndefined(u))
        return r(void 0, u, f);
}
else
    return r(u, d, f); } function s(u, d) { if (!_.isUndefined(d))
    return r(void 0, d); } function o(u, d) { if (_.isUndefined(d)) {
    if (!_.isUndefined(u))
        return r(void 0, u);
}
else
    return r(void 0, d); } function a(u, d, f) { if (f in t)
    return r(u, d); if (f in e)
    return r(void 0, u); } const l = { url: s, method: s, data: s, baseURL: o, transformRequest: o, transformResponse: o, paramsSerializer: o, timeout: o, timeoutMessage: o, withCredentials: o, adapter: o, responseType: o, xsrfCookieName: o, xsrfHeaderName: o, onUploadProgress: o, onDownloadProgress: o, decompress: o, maxContentLength: o, maxBodyLength: o, beforeRedirect: o, transport: o, httpAgent: o, httpsAgent: o, cancelToken: o, socketPath: o, responseEncoding: o, validateStatus: a, headers: (u, d) => i(Gd(u), Gd(d), !0) }; return _.forEach(Object.keys(Object.assign({}, e, t)), function (d) { const f = l[d] || i, h = f(e[d], t[d], d); _.isUndefined(h) && f !== a || (n[d] = h); }), n; }
const Tm = "1.4.0", Qu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => { Qu[e] = function (r) { return typeof r === e || "a" + (t < 1 ? "n " : " ") + e; }; });
const qd = {};
Qu.transitional = function (t, n, r) { function i(s, o) { return "[Axios v" + Tm + "] Transitional option '" + s + "'" + o + (r ? ". " + r : ""); } return (s, o, a) => { if (t === !1)
    throw new j(i(o, " has been removed" + (n ? " in " + n : "")), j.ERR_DEPRECATED); return n && !qd[o] && (qd[o] = !0, console.warn(i(o, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(s, o, a) : !0; }; };
function ew(e, t, n) { if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE); const r = Object.keys(e); let i = r.length; for (; i-- > 0;) {
    const s = r[i], o = t[s];
    if (o) {
        const a = e[s], l = a === void 0 || o(a, s, e);
        if (l !== !0)
            throw new j("option " + s + " must be " + l, j.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (n !== !0)
        throw new j("Unknown option " + s, j.ERR_BAD_OPTION);
} }
const Oa = { assertOptions: ew, validators: Qu }, Ft = Oa.validators;
class eo {
    constructor(t) { this.defaults = t, this.interceptors = { request: new Ud, response: new Ud }; }
    request(t, n) { typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = kr(this.defaults, n); const { transitional: r, paramsSerializer: i, headers: s } = n; r !== void 0 && Oa.assertOptions(r, { silentJSONParsing: Ft.transitional(Ft.boolean), forcedJSONParsing: Ft.transitional(Ft.boolean), clarifyTimeoutError: Ft.transitional(Ft.boolean) }, !1), i != null && (_.isFunction(i) ? n.paramsSerializer = { serialize: i } : Oa.assertOptions(i, { encode: Ft.function, serialize: Ft.function }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase(); let o; o = s && _.merge(s.common, s[n.method]), o && _.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => { delete s[m]; }), n.headers = Pt.concat(o, s); const a = []; let l = !0; this.interceptors.request.forEach(function (g) { typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected)); }); const u = []; this.interceptors.response.forEach(function (g) { u.push(g.fulfilled, g.rejected); }); let d, f = 0, h; if (!l) {
        const m = [Wd.bind(this), void 0];
        for (m.unshift.apply(m, a), m.push.apply(m, u), h = m.length, d = Promise.resolve(n); f < h;)
            d = d.then(m[f++], m[f++]);
        return d;
    } h = a.length; let w = n; for (f = 0; f < h;) {
        const m = a[f++], g = a[f++];
        try {
            w = m(w);
        }
        catch (x) {
            g.call(this, x);
            break;
        }
    } try {
        d = Wd.call(this, w);
    }
    catch (m) {
        return Promise.reject(m);
    } for (f = 0, h = u.length; f < h;)
        d = d.then(u[f++], u[f++]); return d; }
    getUri(t) { t = kr(this.defaults, t); const n = Nm(t.baseURL, t.url); return Em(n, t.params, t.paramsSerializer); }
}
_.forEach(["delete", "get", "head", "options"], function (t) { eo.prototype[t] = function (n, r) { return this.request(kr(r || {}, { method: t, url: n, data: (r || {}).data })); }; });
_.forEach(["post", "put", "patch"], function (t) { function n(r) { return function (s, o, a) { return this.request(kr(a || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: s, data: o })); }; } eo.prototype[t] = n(), eo.prototype[t + "Form"] = n(!0); });
const _s = eo;
class Ju {
    constructor(t) { if (typeof t != "function")
        throw new TypeError("executor must be a function."); let n; this.promise = new Promise(function (s) { n = s; }); const r = this; this.promise.then(i => { if (!r._listeners)
        return; let s = r._listeners.length; for (; s-- > 0;)
        r._listeners[s](i); r._listeners = null; }), this.promise.then = i => { let s; const o = new Promise(a => { r.subscribe(a), s = a; }).then(i); return o.cancel = function () { r.unsubscribe(s); }, o; }, t(function (s, o, a) { r.reason || (r.reason = new Mi(s, o, a), n(r.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(t) { if (this.reason) {
        t(this.reason);
        return;
    } this._listeners ? this._listeners.push(t) : this._listeners = [t]; }
    unsubscribe(t) { if (!this._listeners)
        return; const n = this._listeners.indexOf(t); n !== -1 && this._listeners.splice(n, 1); }
    static source() { let t; return { token: new Ju(function (i) { t = i; }), cancel: t }; }
}
const tw = Ju;
function nw(e) { return function (n) { return e.apply(null, n); }; }
function rw(e) { return _.isObject(e) && e.isAxiosError === !0; }
const Pa = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(Pa).forEach(([e, t]) => { Pa[t] = e; });
const iw = Pa;
function Im(e) { const t = new _s(e), n = dm(_s.prototype.request, t); return _.extend(n, _s.prototype, t, { allOwnKeys: !0 }), _.extend(n, t, null, { allOwnKeys: !0 }), n.create = function (i) { return Im(kr(e, i)); }, n; }
const fe = Im(Xu);
fe.Axios = _s;
fe.CanceledError = Mi;
fe.CancelToken = tw;
fe.isCancel = km;
fe.VERSION = Tm;
fe.toFormData = Io;
fe.AxiosError = j;
fe.Cancel = fe.CanceledError;
fe.all = function (t) { return Promise.all(t); };
fe.spread = nw;
fe.isAxiosError = rw;
fe.mergeConfig = kr;
fe.AxiosHeaders = Pt;
fe.formToJSON = e => _m(_.isHTMLForm(e) ? new FormData(e) : e);
fe.HttpStatusCode = iw;
fe.default = fe;
const H = fe, Om = () => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/times/getall`)).data; }), sw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.post(`${M.url}/times/create`, e, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), ow = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.delete(`${M.url}/times/delete/${e}`, { headers: { Authorization: `Bearer ${M.token}` } })).data; }), Zu = () => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/sections/getall`)).data; }), lw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.post(`${M.url}/sections/create`, e, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), aw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.delete(`${M.url}/sections/delete/${e}`, { headers: { Authorization: `Bearer ${M.token}` } })).data; }), uw = () => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/courses/getall`)).data; }), cw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/courses/getone/${e}`)).data; }), dw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.post(`${M.url}/courses/create`, e, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), fw = (e, t) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.put(`${M.url}/courses/update/${e}`, t, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), pw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.delete(`${M.url}/courses/delete/${e}`, { headers: { Authorization: `Bearer ${M.token}` } })).data; }), hw = () => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/stories/getall`)).data; }), mw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/stories/getone/${e}`)).data; }), gw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.post(`${M.url}/stories/create`, e, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), vw = (e, t) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.put(`${M.url}/stories/update/${e}`, t, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), yw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.delete(`${M.url}/stories/delete/${e}`, { headers: { Authorization: `Bearer ${M.token}` } })).data; }), ww = () => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/instructors/getall`)).data; }), xw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/instructors/getone/${e}`)).data; }), Sw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.post(`${M.url}/instructors/create`, e, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), bw = (e, t) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.put(`${M.url}/instructors/update/${e}`, t, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), Ew = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.delete(`${M.url}/instructors/delete/${e}`, { headers: { Authorization: `Bearer ${M.token}` } })).data; }), Cw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.post(`${M.url}/enrolls/create`, e, { headers: { "Content-Type": "application/json" } })).data; }), _w = () => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/enrolls/getall`, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), kw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/enrolls/getone/${e}`, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), Nw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.delete(`${M.url}/enrolls/delete/${e}`, { headers: { Authorization: `Bearer ${M.token}` } })).data; }), Tw = () => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/contacts/getall`)).data; }), Iw = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.get(`${M.url}/contacts/getone/${e}`)).data; }), Ow = (e) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.post(`${M.url}/contacts/create`, e, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }), Pw = (e, t) => __awaiter(void 0, void 0, void 0, function* () { return (yield H.put(`${M.url}/contacts/update/${e}`, t, { headers: { Authorization: `Bearer ${M.token}`, "Content-Type": "application/json" } })).data; }); /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Pm = function (e) { const t = []; let n = 0; for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128);
} return t; }, Rw = function (e) { const t = []; let n = 0, r = 0; for (; n < e.length;) {
    const i = e[n++];
    if (i < 128)
        t[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode((i & 31) << 6 | s & 63);
    }
    else if (i > 239 && i < 365) {
        const s = e[n++], o = e[n++], a = e[n++], l = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
        t[r++] = String.fromCharCode(55296 + (l >> 10)), t[r++] = String.fromCharCode(56320 + (l & 1023));
    }
    else {
        const s = e[n++], o = e[n++];
        t[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63);
    }
} return t.join(""); }, Rm = { byteToCharMap_: null, charToByteMap_: null, byteToCharMapWebSafe_: null, charToByteMapWebSafe_: null, ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", get ENCODED_VALS() { return this.ENCODED_VALS_BASE + "+/="; }, get ENCODED_VALS_WEBSAFE() { return this.ENCODED_VALS_BASE + "-_."; }, HAS_NATIVE_SUPPORT: typeof atob == "function", encodeByteArray(e, t) { if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter"); this.init_(); const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = []; for (let i = 0; i < e.length; i += 3) {
        const s = e[i], o = i + 1 < e.length, a = o ? e[i + 1] : 0, l = i + 2 < e.length, u = l ? e[i + 2] : 0, d = s >> 2, f = (s & 3) << 4 | a >> 4;
        let h = (a & 15) << 2 | u >> 6, w = u & 63;
        l || (w = 64, o || (h = 64)), r.push(n[d], n[f], n[h], n[w]);
    } return r.join(""); }, encodeString(e, t) { return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(Pm(e), t); }, decodeString(e, t) { return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : Rw(this.decodeStringToByteArray(e, t)); }, decodeStringToByteArray(e, t) { this.init_(); const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = []; for (let i = 0; i < e.length;) {
        const s = n[e.charAt(i++)], a = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const f = i < e.length ? n[e.charAt(i)] : 64;
        if (++i, s == null || a == null || u == null || f == null)
            throw new Lw;
        const h = s << 2 | a >> 4;
        if (r.push(h), u !== 64) {
            const w = a << 4 & 240 | u >> 2;
            if (r.push(w), f !== 64) {
                const m = u << 6 & 192 | f;
                r.push(m);
            }
        }
    } return r; }, init_() { if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
            this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e);
    } } };
class Lw extends Error {
    constructor() { super(...arguments), this.name = "DecodeBase64StringError"; }
}
const Aw = function (e) { const t = Pm(e); return Rm.encodeByteArray(t, !0); }, to = function (e) { return Aw(e).replace(/\./g, ""); }, Mw = function (e) { try {
    return Rm.decodeString(e, !0);
}
catch (t) {
    console.error("base64Decode failed: ", t);
} return null; }; /**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Dw() { if (typeof self < "u")
    return self; if (typeof window < "u")
    return window; if (typeof global < "u")
    return global; throw new Error("Unable to locate global object."); } /**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const zw = () => Dw().__FIREBASE_DEFAULTS__, $w = () => { if (typeof process > "u" || typeof process.env > "u")
    return; const e = {}.__FIREBASE_DEFAULTS__; if (e)
    return JSON.parse(e); }, Bw = () => { if (typeof document > "u")
    return; let e; try {
    e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
}
catch (_j) {
    return;
} const t = e && Mw(e[1]); return t && JSON.parse(t); }, ec = () => { try {
    return zw() || $w() || Bw();
}
catch (e) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
    return;
} }, Fw = e => { var t, n; return (n = (t = ec()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || n === void 0 ? void 0 : n[e]; }, jw = e => { const t = Fw(e); if (!t)
    return; const n = t.lastIndexOf(":"); if (n <= 0 || n + 1 === t.length)
    throw new Error(`Invalid host ${t} with no separate hostname and port!`); const r = parseInt(t.substring(n + 1), 10); return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]; }, Lm = () => { var e; return (e = ec()) === null || e === void 0 ? void 0 : e.config; }; /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Uw {
    constructor() { this.reject = () => { }, this.resolve = () => { }, this.promise = new Promise((t, n) => { this.resolve = t, this.reject = n; }); }
    wrapCallback(t) { return (n, r) => { n ? this.reject(n) : this.resolve(r), typeof t == "function" && (this.promise.catch(() => { }), t.length === 1 ? t(n) : t(n, r)); }; }
} /**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Vw(e, t) { if (e.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'); const n = { alg: "none", type: "JWT" }, r = t || "demo-project", i = e.iat || 0, s = e.sub || e.user_id; if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!"); const o = Object.assign({ iss: `https://securetoken.google.com/${r}`, aud: r, iat: i, exp: i + 3600, auth_time: i, sub: s, user_id: s, firebase: { sign_in_provider: "custom", identities: {} } }, e), a = ""; return [to(JSON.stringify(n)), to(JSON.stringify(o)), a].join("."); }
function Hw() { var e; const t = (e = ec()) === null || e === void 0 ? void 0 : e.forceEnvironment; if (t === "node")
    return !0; if (t === "browser")
    return !1; try {
    return Object.prototype.toString.call(global.process) === "[object process]";
}
catch (_j) {
    return !1;
} }
function Ww() { const e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0; return typeof e == "object" && e.id !== void 0; }
function Am() { try {
    return typeof indexedDB == "object";
}
catch (_j) {
    return !1;
} }
function Mm() { return new Promise((e, t) => { try {
    let n = !0;
    const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
    i.onsuccess = () => { i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0); }, i.onupgradeneeded = () => { n = !1; }, i.onerror = () => { var s; t(((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""); };
}
catch (n) {
    t(n);
} }); }
function Gw() { return !(typeof navigator > "u" || !navigator.cookieEnabled); } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const qw = "FirebaseError";
class wn extends Error {
    constructor(t, n, r) { super(n), this.code = t, this.customData = r, this.name = qw, Object.setPrototypeOf(this, wn.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Ro.prototype.create); }
}
class Ro {
    constructor(t, n, r) { this.service = t, this.serviceName = n, this.errors = r; }
    create(t, ...n) { const r = n[0] || {}, i = `${this.service}/${t}`, s = this.errors[t], o = s ? Kw(s, r) : "Error", a = `${this.serviceName}: ${o} (${i}).`; return new wn(i, a, r); }
}
function Kw(e, t) { return e.replace(Yw, (n, r) => { const i = t[r]; return i != null ? String(i) : `<${r}?>`; }); }
const Yw = /\{\$([^}]+)}/g;
function no(e, t) { if (e === t)
    return !0; const n = Object.keys(e), r = Object.keys(t); for (const i of n) {
    if (!r.includes(i))
        return !1;
    const s = e[i], o = t[i];
    if (Kd(s) && Kd(o)) {
        if (!no(s, o))
            return !1;
    }
    else if (s !== o)
        return !1;
} for (const i of r)
    if (!n.includes(i))
        return !1; return !0; }
function Kd(e) { return e !== null && typeof e == "object"; } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Xw = 1e3, Qw = 2, Jw = 4 * 60 * 60 * 1e3, Zw = .5;
function Yd(e, t = Xw, n = Qw) { const r = t * Math.pow(n, e), i = Math.round(Zw * r * (Math.random() - .5) * 2); return Math.min(Jw, r + i); } /**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Xn(e) { return e && e._delegate ? e._delegate : e; }
class Dt {
    constructor(t, n, r) { this.name = t, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null; }
    setInstantiationMode(t) { return this.instantiationMode = t, this; }
    setMultipleInstances(t) { return this.multipleInstances = t, this; }
    setServiceProps(t) { return this.serviceProps = t, this; }
    setInstanceCreatedCallback(t) { return this.onInstanceCreated = t, this; }
} /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Nn = "[DEFAULT]"; /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ex {
    constructor(t, n) { this.name = t, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map; }
    get(t) { const n = this.normalizeInstanceIdentifier(t); if (!this.instancesDeferred.has(n)) {
        const r = new Uw;
        if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize())
            try {
                const i = this.getOrInitializeService({ instanceIdentifier: n });
                i && r.resolve(i);
            }
            catch (_j) { }
    } return this.instancesDeferred.get(n).promise; }
    getImmediate(t) { var n; const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier), i = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1; if (this.isInitialized(r) || this.shouldAutoInitialize())
        try {
            return this.getOrInitializeService({ instanceIdentifier: r });
        }
        catch (s) {
            if (i)
                return null;
            throw s;
        }
    else {
        if (i)
            return null;
        throw Error(`Service ${this.name} is not available`);
    } }
    getComponent() { return this.component; }
    setComponent(t) { if (t.name !== this.name)
        throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`); if (this.component)
        throw Error(`Component for ${this.name} has already been provided`); if (this.component = t, !!this.shouldAutoInitialize()) {
        if (nx(t))
            try {
                this.getOrInitializeService({ instanceIdentifier: Nn });
            }
            catch (_j) { }
        for (const [n, r] of this.instancesDeferred.entries()) {
            const i = this.normalizeInstanceIdentifier(n);
            try {
                const s = this.getOrInitializeService({ instanceIdentifier: i });
                r.resolve(s);
            }
            catch (_k) { }
        }
    } }
    clearInstance(t = Nn) { this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t); }
    delete() {
        return __awaiter(this, void 0, void 0, function* () { const t = Array.from(this.instances.values()); yield Promise.all([...t.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...t.filter(n => "_delete" in n).map(n => n._delete())]); });
    }
    isComponentSet() { return this.component != null; }
    isInitialized(t = Nn) { return this.instances.has(t); }
    getOptions(t = Nn) { return this.instancesOptions.get(t) || {}; }
    initialize(t = {}) { const { options: n = {} } = t, r = this.normalizeInstanceIdentifier(t.instanceIdentifier); if (this.isInitialized(r))
        throw Error(`${this.name}(${r}) has already been initialized`); if (!this.isComponentSet())
        throw Error(`Component ${this.name} has not been registered yet`); const i = this.getOrInitializeService({ instanceIdentifier: r, options: n }); for (const [s, o] of this.instancesDeferred.entries()) {
        const a = this.normalizeInstanceIdentifier(s);
        r === a && o.resolve(i);
    } return i; }
    onInit(t, n) { var r; const i = this.normalizeInstanceIdentifier(n), s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set; s.add(t), this.onInitCallbacks.set(i, s); const o = this.instances.get(i); return o && t(o, i), () => { s.delete(t); }; }
    invokeOnInitCallbacks(t, n) { const r = this.onInitCallbacks.get(n); if (r)
        for (const i of r)
            try {
                i(t, n);
            }
            catch (_j) { } }
    getOrInitializeService({ instanceIdentifier: t, options: n = {} }) { let r = this.instances.get(t); if (!r && this.component && (r = this.component.instanceFactory(this.container, { instanceIdentifier: tx(t), options: n }), this.instances.set(t, r), this.instancesOptions.set(t, n), this.invokeOnInitCallbacks(r, t), this.component.onInstanceCreated))
        try {
            this.component.onInstanceCreated(this.container, t, r);
        }
        catch (_j) { } return r || null; }
    normalizeInstanceIdentifier(t = Nn) { return this.component ? this.component.multipleInstances ? t : Nn : t; }
    shouldAutoInitialize() { return !!this.component && this.component.instantiationMode !== "EXPLICIT"; }
}
function tx(e) { return e === Nn ? void 0 : e; }
function nx(e) { return e.instantiationMode === "EAGER"; } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class rx {
    constructor(t) { this.name = t, this.providers = new Map; }
    addComponent(t) { const n = this.getProvider(t.name); if (n.isComponentSet())
        throw new Error(`Component ${t.name} has already been registered with ${this.name}`); n.setComponent(t); }
    addOrOverwriteComponent(t) { this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t); }
    getProvider(t) { if (this.providers.has(t))
        return this.providers.get(t); const n = new ex(t, this); return this.providers.set(t, n), n; }
    getProviders() { return Array.from(this.providers.values()); }
} /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Y;
(function (e) { e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"; })(Y || (Y = {}));
const ix = { debug: Y.DEBUG, verbose: Y.VERBOSE, info: Y.INFO, warn: Y.WARN, error: Y.ERROR, silent: Y.SILENT }, sx = Y.INFO, ox = { [Y.DEBUG]: "log", [Y.VERBOSE]: "log", [Y.INFO]: "info", [Y.WARN]: "warn", [Y.ERROR]: "error" }, lx = (e, t, ...n) => { if (t < e.logLevel)
    return; const r = new Date().toISOString(), i = ox[t]; if (i)
    console[i](`[${r}]  ${e.name}:`, ...n);
else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`); };
class Dm {
    constructor(t) { this.name = t, this._logLevel = sx, this._logHandler = lx, this._userLogHandler = null; }
    get logLevel() { return this._logLevel; }
    set logLevel(t) { if (!(t in Y))
        throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``); this._logLevel = t; }
    setLogLevel(t) { this._logLevel = typeof t == "string" ? ix[t] : t; }
    get logHandler() { return this._logHandler; }
    set logHandler(t) { if (typeof t != "function")
        throw new TypeError("Value assigned to `logHandler` must be a function"); this._logHandler = t; }
    get userLogHandler() { return this._userLogHandler; }
    set userLogHandler(t) { this._userLogHandler = t; }
    debug(...t) { this._userLogHandler && this._userLogHandler(this, Y.DEBUG, ...t), this._logHandler(this, Y.DEBUG, ...t); }
    log(...t) { this._userLogHandler && this._userLogHandler(this, Y.VERBOSE, ...t), this._logHandler(this, Y.VERBOSE, ...t); }
    info(...t) { this._userLogHandler && this._userLogHandler(this, Y.INFO, ...t), this._logHandler(this, Y.INFO, ...t); }
    warn(...t) { this._userLogHandler && this._userLogHandler(this, Y.WARN, ...t), this._logHandler(this, Y.WARN, ...t); }
    error(...t) { this._userLogHandler && this._userLogHandler(this, Y.ERROR, ...t), this._logHandler(this, Y.ERROR, ...t); }
}
const ax = (e, t) => t.some(n => e instanceof n);
let Xd, Qd;
function ux() { return Xd || (Xd = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]); }
function cx() { return Qd || (Qd = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]); }
const zm = new WeakMap, Ra = new WeakMap, $m = new WeakMap, hl = new WeakMap, tc = new WeakMap;
function dx(e) { const t = new Promise((n, r) => { const i = () => { e.removeEventListener("success", s), e.removeEventListener("error", o); }, s = () => { n(un(e.result)), i(); }, o = () => { r(e.error), i(); }; e.addEventListener("success", s), e.addEventListener("error", o); }); return t.then(n => { n instanceof IDBCursor && zm.set(n, e); }).catch(() => { }), tc.set(t, e), t; }
function fx(e) { if (Ra.has(e))
    return; const t = new Promise((n, r) => { const i = () => { e.removeEventListener("complete", s), e.removeEventListener("error", o), e.removeEventListener("abort", o); }, s = () => { n(), i(); }, o = () => { r(e.error || new DOMException("AbortError", "AbortError")), i(); }; e.addEventListener("complete", s), e.addEventListener("error", o), e.addEventListener("abort", o); }); Ra.set(e, t); }
let La = { get(e, t, n) { if (e instanceof IDBTransaction) {
        if (t === "done")
            return Ra.get(e);
        if (t === "objectStoreNames")
            return e.objectStoreNames || $m.get(e);
        if (t === "store")
            return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    } return un(e[t]); }, set(e, t, n) { return e[t] = n, !0; }, has(e, t) { return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e; } };
function px(e) { La = e(La); }
function hx(e) { return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function (t, ...n) { const r = e.call(ml(this), t, ...n); return $m.set(r, t.sort ? t.sort() : [t]), un(r); } : cx().includes(e) ? function (...t) { return e.apply(ml(this), t), un(zm.get(this)); } : function (...t) { return un(e.apply(ml(this), t)); }; }
function mx(e) { return typeof e == "function" ? hx(e) : (e instanceof IDBTransaction && fx(e), ax(e, ux()) ? new Proxy(e, La) : e); }
function un(e) { if (e instanceof IDBRequest)
    return dx(e); if (hl.has(e))
    return hl.get(e); const t = mx(e); return t !== e && (hl.set(e, t), tc.set(t, e)), t; }
const ml = e => tc.get(e);
function gx(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) { const o = indexedDB.open(e, t), a = un(o); return r && o.addEventListener("upgradeneeded", l => { r(un(o.result), l.oldVersion, l.newVersion, un(o.transaction), l); }), n && o.addEventListener("blocked", l => n(l.oldVersion, l.newVersion, l)), a.then(l => { s && l.addEventListener("close", () => s()), i && l.addEventListener("versionchange", u => i(u.oldVersion, u.newVersion, u)); }).catch(() => { }), a; }
const vx = ["get", "getKey", "getAll", "getAllKeys", "count"], yx = ["put", "add", "delete", "clear"], gl = new Map;
function Jd(e, t) { if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
    return; if (gl.get(t))
    return gl.get(t); const n = t.replace(/FromIndex$/, ""), r = t !== n, i = yx.includes(n); if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || vx.includes(n)))
    return; const s = function (o, ...a) {
    return __awaiter(this, void 0, void 0, function* () { const l = this.transaction(o, i ? "readwrite" : "readonly"); let u = l.store; return r && (u = u.index(a.shift())), (yield Promise.all([u[n](...a), i && l.done]))[0]; });
}; return gl.set(t, s), s; }
px(e => (Object.assign(Object.assign({}, e), { get: (t, n, r) => Jd(t, n) || e.get(t, n, r), has: (t, n) => !!Jd(t, n) || e.has(t, n) }))); /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class wx {
    constructor(t) { this.container = t; }
    getPlatformInfoString() { return this.container.getProviders().map(n => { if (xx(n)) {
        const r = n.getImmediate();
        return `${r.library}/${r.version}`;
    }
    else
        return null; }).filter(n => n).join(" "); }
}
function xx(e) { const t = e.getComponent(); return (t == null ? void 0 : t.type) === "VERSION"; }
const Aa = "@firebase/app", Zd = "0.9.19"; /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const jn = new Dm("@firebase/app"), Sx = "@firebase/app-compat", bx = "@firebase/analytics-compat", Ex = "@firebase/analytics", Cx = "@firebase/app-check-compat", _x = "@firebase/app-check", kx = "@firebase/auth", Nx = "@firebase/auth-compat", Tx = "@firebase/database", Ix = "@firebase/database-compat", Ox = "@firebase/functions", Px = "@firebase/functions-compat", Rx = "@firebase/installations", Lx = "@firebase/installations-compat", Ax = "@firebase/messaging", Mx = "@firebase/messaging-compat", Dx = "@firebase/performance", zx = "@firebase/performance-compat", $x = "@firebase/remote-config", Bx = "@firebase/remote-config-compat", Fx = "@firebase/storage", jx = "@firebase/storage-compat", Ux = "@firebase/firestore", Vx = "@firebase/firestore-compat", Hx = "firebase", Wx = "10.4.0"; /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Ma = "[DEFAULT]", Gx = { [Aa]: "fire-core", [Sx]: "fire-core-compat", [Ex]: "fire-analytics", [bx]: "fire-analytics-compat", [_x]: "fire-app-check", [Cx]: "fire-app-check-compat", [kx]: "fire-auth", [Nx]: "fire-auth-compat", [Tx]: "fire-rtdb", [Ix]: "fire-rtdb-compat", [Ox]: "fire-fn", [Px]: "fire-fn-compat", [Rx]: "fire-iid", [Lx]: "fire-iid-compat", [Ax]: "fire-fcm", [Mx]: "fire-fcm-compat", [Dx]: "fire-perf", [zx]: "fire-perf-compat", [$x]: "fire-rc", [Bx]: "fire-rc-compat", [Fx]: "fire-gcs", [jx]: "fire-gcs-compat", [Ux]: "fire-fst", [Vx]: "fire-fst-compat", "fire-js": "fire-js", [Hx]: "fire-js-all" }; /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const ro = new Map, Da = new Map;
function qx(e, t) { try {
    e.container.addComponent(t);
}
catch (n) {
    jn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
} }
function hn(e) { const t = e.name; if (Da.has(t))
    return jn.debug(`There were multiple attempts to register component ${t}.`), !1; Da.set(t, e); for (const n of ro.values())
    qx(n, e); return !0; }
function Di(e, t) { const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 }); return n && n.triggerHeartbeat(), e.container.getProvider(t); } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Kx = { "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first", "bad-app-name": "Illegal App name: '{$appName}", "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config", "app-deleted": "Firebase App named '{$appName}' already deleted", "no-options": "Need to provide options, when not being deployed to hosting via source.", "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.", "invalid-log-argument": "First argument to `onLog` must be null or a function.", "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.", "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.", "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.", "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}." }, cn = new Ro("app", "Firebase", Kx); /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Yx {
    constructor(t, n, r) { this._isDeleted = !1, this._options = Object.assign({}, t), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new Dt("app", () => this, "PUBLIC")); }
    get automaticDataCollectionEnabled() { return this.checkDestroyed(), this._automaticDataCollectionEnabled; }
    set automaticDataCollectionEnabled(t) { this.checkDestroyed(), this._automaticDataCollectionEnabled = t; }
    get name() { return this.checkDestroyed(), this._name; }
    get options() { return this.checkDestroyed(), this._options; }
    get config() { return this.checkDestroyed(), this._config; }
    get container() { return this._container; }
    get isDeleted() { return this._isDeleted; }
    set isDeleted(t) { this._isDeleted = t; }
    checkDestroyed() { if (this.isDeleted)
        throw cn.create("app-deleted", { appName: this._name }); }
} /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Xx = Wx;
function Bm(e, t = {}) { let n = e; typeof t != "object" && (t = { name: t }); const r = Object.assign({ name: Ma, automaticDataCollectionEnabled: !1 }, t), i = r.name; if (typeof i != "string" || !i)
    throw cn.create("bad-app-name", { appName: String(i) }); if (n || (n = Lm()), !n)
    throw cn.create("no-options"); const s = ro.get(i); if (s) {
    if (no(n, s.options) && no(r, s.config))
        return s;
    throw cn.create("duplicate-app", { appName: i });
} const o = new rx(i); for (const l of Da.values())
    o.addComponent(l); const a = new Yx(n, r, o); return ro.set(i, a), a; }
function Fm(e = Ma) { const t = ro.get(e); if (!t && e === Ma && Lm())
    return Bm(); if (!t)
    throw cn.create("no-app", { appName: e }); return t; }
function bt(e, t, n) { var r; let i = (r = Gx[e]) !== null && r !== void 0 ? r : e; n && (i += `-${n}`); const s = i.match(/\s|\//), o = t.match(/\s|\//); if (s || o) {
    const a = [`Unable to register library "${i}" with version "${t}":`];
    s && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && a.push("and"), o && a.push(`version name "${t}" contains illegal characters (whitespace or "/")`), jn.warn(a.join(" "));
    return;
} hn(new Dt(`${i}-version`, () => ({ library: i, version: t }), "VERSION")); } /**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Qx = "firebase-heartbeat-database", Jx = 1, _i = "firebase-heartbeat-store";
let vl = null;
function jm() { return vl || (vl = gx(Qx, Jx, { upgrade: (e, t) => { switch (t) {
        case 0: e.createObjectStore(_i);
    } } }).catch(e => { throw cn.create("idb-open", { originalErrorMessage: e.message }); })), vl; }
function Zx(e) {
    return __awaiter(this, void 0, void 0, function* () { try {
        return yield (yield jm()).transaction(_i).objectStore(_i).get(Um(e));
    }
    catch (t) {
        if (t instanceof wn)
            jn.warn(t.message);
        else {
            const n = cn.create("idb-get", { originalErrorMessage: t == null ? void 0 : t.message });
            jn.warn(n.message);
        }
    } });
}
function ef(e, t) {
    return __awaiter(this, void 0, void 0, function* () { try {
        const r = (yield jm()).transaction(_i, "readwrite");
        yield r.objectStore(_i).put(t, Um(e)), yield r.done;
    }
    catch (n) {
        if (n instanceof wn)
            jn.warn(n.message);
        else {
            const r = cn.create("idb-set", { originalErrorMessage: n == null ? void 0 : n.message });
            jn.warn(r.message);
        }
    } });
}
function Um(e) { return `${e.name}!${e.options.appId}`; } /**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const eS = 1024, tS = 30 * 24 * 60 * 60 * 1e3;
class nS {
    constructor(t) { this.container = t, this._heartbeatsCache = null; const n = this.container.getProvider("app").getImmediate(); this._storage = new iS(n), this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r, r)); }
    triggerHeartbeat() {
        return __awaiter(this, void 0, void 0, function* () { const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), r = tf(); if (this._heartbeatsCache === null && (this._heartbeatsCache = yield this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some(i => i.date === r)))
            return this._heartbeatsCache.heartbeats.push({ date: r, agent: n }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(i => { const s = new Date(i.date).valueOf(); return Date.now() - s <= tS; }), this._storage.overwrite(this._heartbeatsCache); });
    }
    getHeartbeatsHeader() {
        return __awaiter(this, void 0, void 0, function* () { if (this._heartbeatsCache === null && (yield this._heartbeatsCachePromise), this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
            return ""; const t = tf(), { heartbeatsToSend: n, unsentEntries: r } = rS(this._heartbeatsCache.heartbeats), i = to(JSON.stringify({ version: 2, heartbeats: n })); return this._heartbeatsCache.lastSentHeartbeatDate = t, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, yield this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i; });
    }
}
function tf() { return new Date().toISOString().substring(0, 10); }
function rS(e, t = eS) { const n = []; let r = e.slice(); for (const i of e) {
    const s = n.find(o => o.agent === i.agent);
    if (s) {
        if (s.dates.push(i.date), nf(n) > t) {
            s.dates.pop();
            break;
        }
    }
    else if (n.push({ agent: i.agent, dates: [i.date] }), nf(n) > t) {
        n.pop();
        break;
    }
    r = r.slice(1);
} return { heartbeatsToSend: n, unsentEntries: r }; }
class iS {
    constructor(t) { this.app = t, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck(); }
    runIndexedDBEnvironmentCheck() {
        return __awaiter(this, void 0, void 0, function* () { return Am() ? Mm().then(() => !0).catch(() => !1) : !1; });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () { return (yield this._canUseIndexedDBPromise) ? (yield Zx(this.app)) || { heartbeats: [] } : { heartbeats: [] }; });
    }
    overwrite(t) {
        return __awaiter(this, void 0, void 0, function* () { var n; if (yield this._canUseIndexedDBPromise) {
            const i = yield this.read();
            return ef(this.app, { lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate, heartbeats: t.heartbeats });
        }
        else
            return; });
    }
    add(t) {
        return __awaiter(this, void 0, void 0, function* () { var n; if (yield this._canUseIndexedDBPromise) {
            const i = yield this.read();
            return ef(this.app, { lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate, heartbeats: [...i.heartbeats, ...t.heartbeats] });
        }
        else
            return; });
    }
}
function nf(e) { return to(JSON.stringify({ version: 2, heartbeats: e })).length; } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function sS(e) { hn(new Dt("platform-logger", t => new wx(t), "PRIVATE")), hn(new Dt("heartbeat", t => new nS(t), "PRIVATE")), bt(Aa, Zd, e), bt(Aa, Zd, "esm2017"), bt("fire-js", ""); }
sS("");
var oS = "firebase", lS = "10.4.0"; /**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
bt(oS, lS, "app");
const aS = (e, t) => t.some(n => e instanceof n);
let rf, sf;
function uS() { return rf || (rf = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]); }
function cS() { return sf || (sf = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]); }
const Vm = new WeakMap, za = new WeakMap, Hm = new WeakMap, yl = new WeakMap, nc = new WeakMap;
function dS(e) { const t = new Promise((n, r) => { const i = () => { e.removeEventListener("success", s), e.removeEventListener("error", o); }, s = () => { n(dn(e.result)), i(); }, o = () => { r(e.error), i(); }; e.addEventListener("success", s), e.addEventListener("error", o); }); return t.then(n => { n instanceof IDBCursor && Vm.set(n, e); }).catch(() => { }), nc.set(t, e), t; }
function fS(e) { if (za.has(e))
    return; const t = new Promise((n, r) => { const i = () => { e.removeEventListener("complete", s), e.removeEventListener("error", o), e.removeEventListener("abort", o); }, s = () => { n(), i(); }, o = () => { r(e.error || new DOMException("AbortError", "AbortError")), i(); }; e.addEventListener("complete", s), e.addEventListener("error", o), e.addEventListener("abort", o); }); za.set(e, t); }
let $a = { get(e, t, n) { if (e instanceof IDBTransaction) {
        if (t === "done")
            return za.get(e);
        if (t === "objectStoreNames")
            return e.objectStoreNames || Hm.get(e);
        if (t === "store")
            return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    } return dn(e[t]); }, set(e, t, n) { return e[t] = n, !0; }, has(e, t) { return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e; } };
function pS(e) { $a = e($a); }
function hS(e) { return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function (t, ...n) { const r = e.call(wl(this), t, ...n); return Hm.set(r, t.sort ? t.sort() : [t]), dn(r); } : cS().includes(e) ? function (...t) { return e.apply(wl(this), t), dn(Vm.get(this)); } : function (...t) { return dn(e.apply(wl(this), t)); }; }
function mS(e) { return typeof e == "function" ? hS(e) : (e instanceof IDBTransaction && fS(e), aS(e, uS()) ? new Proxy(e, $a) : e); }
function dn(e) { if (e instanceof IDBRequest)
    return dS(e); if (yl.has(e))
    return yl.get(e); const t = mS(e); return t !== e && (yl.set(e, t), nc.set(t, e)), t; }
const wl = e => nc.get(e);
function gS(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) { const o = indexedDB.open(e, t), a = dn(o); return r && o.addEventListener("upgradeneeded", l => { r(dn(o.result), l.oldVersion, l.newVersion, dn(o.transaction)); }), n && o.addEventListener("blocked", () => n()), a.then(l => { s && l.addEventListener("close", () => s()), i && l.addEventListener("versionchange", () => i()); }).catch(() => { }), a; }
const vS = ["get", "getKey", "getAll", "getAllKeys", "count"], yS = ["put", "add", "delete", "clear"], xl = new Map;
function of(e, t) { if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
    return; if (xl.get(t))
    return xl.get(t); const n = t.replace(/FromIndex$/, ""), r = t !== n, i = yS.includes(n); if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || vS.includes(n)))
    return; const s = function (o, ...a) {
    return __awaiter(this, void 0, void 0, function* () { const l = this.transaction(o, i ? "readwrite" : "readonly"); let u = l.store; return r && (u = u.index(a.shift())), (yield Promise.all([u[n](...a), i && l.done]))[0]; });
}; return xl.set(t, s), s; }
pS(e => (Object.assign(Object.assign({}, e), { get: (t, n, r) => of(t, n) || e.get(t, n, r), has: (t, n) => !!of(t, n) || e.has(t, n) })));
const Wm = "@firebase/installations", rc = "0.6.4"; /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Gm = 1e4, qm = `w:${rc}`, Km = "FIS_v2", wS = "https://firebaseinstallations.googleapis.com/v1", xS = 60 * 60 * 1e3, SS = "installations", bS = "Installations"; /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const ES = { "missing-app-config-values": 'Missing App configuration value: "{$valueName}"', "not-registered": "Firebase Installation is not registered.", "installation-not-found": "Firebase Installation not found.", "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', "app-offline": "Could not process request. Application offline.", "delete-pending-registration": "Can't delete installation while there is a pending registration request." }, Un = new Ro(SS, bS, ES);
function Ym(e) { return e instanceof wn && e.code.includes("request-failed"); } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Xm({ projectId: e }) { return `${wS}/projects/${e}/installations`; }
function Qm(e) { return { token: e.token, requestStatus: 2, expiresIn: _S(e.expiresIn), creationTime: Date.now() }; }
function Jm(e, t) {
    return __awaiter(this, void 0, void 0, function* () { const r = (yield t.json()).error; return Un.create("request-failed", { requestName: e, serverCode: r.code, serverMessage: r.message, serverStatus: r.status }); });
}
function Zm({ apiKey: e }) { return new Headers({ "Content-Type": "application/json", Accept: "application/json", "x-goog-api-key": e }); }
function CS(e, { refreshToken: t }) { const n = Zm(e); return n.append("Authorization", kS(t)), n; }
function e0(e) {
    return __awaiter(this, void 0, void 0, function* () { const t = yield e(); return t.status >= 500 && t.status < 600 ? e() : t; });
}
function _S(e) { return Number(e.replace("s", "000")); }
function kS(e) { return `${Km} ${e}`; } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function NS({ appConfig: e, heartbeatServiceProvider: t }, { fid: n }) {
    return __awaiter(this, void 0, void 0, function* () { const r = Xm(e), i = Zm(e), s = t.getImmediate({ optional: !0 }); if (s) {
        const u = yield s.getHeartbeatsHeader();
        u && i.append("x-firebase-client", u);
    } const o = { fid: n, authVersion: Km, appId: e.appId, sdkVersion: qm }, a = { method: "POST", headers: i, body: JSON.stringify(o) }, l = yield e0(() => fetch(r, a)); if (l.ok) {
        const u = yield l.json();
        return { fid: u.fid || n, registrationStatus: 2, refreshToken: u.refreshToken, authToken: Qm(u.authToken) };
    }
    else
        throw yield Jm("Create Installation", l); });
} /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function t0(e) { return new Promise(t => { setTimeout(t, e); }); } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function TS(e) { return btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_"); } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const IS = /^[cdef][\w-]{21}$/, Ba = "";
function OS() { try {
    const e = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
    const n = PS(e);
    return IS.test(n) ? n : Ba;
}
catch (_j) {
    return Ba;
} }
function PS(e) { return TS(e).substr(0, 22); } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Lo(e) { return `${e.appName}!${e.appId}`; } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const n0 = new Map;
function r0(e, t) { const n = Lo(e); i0(n, t), RS(n, t); }
function i0(e, t) { const n = n0.get(e); if (n)
    for (const r of n)
        r(t); }
function RS(e, t) { const n = LS(); n && n.postMessage({ key: e, fid: t }), AS(); }
let Pn = null;
function LS() { return !Pn && "BroadcastChannel" in self && (Pn = new BroadcastChannel("[Firebase] FID Change"), Pn.onmessage = e => { i0(e.data.key, e.data.fid); }), Pn; }
function AS() { n0.size === 0 && Pn && (Pn.close(), Pn = null); } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const MS = "firebase-installations-database", DS = 1, Vn = "firebase-installations-store";
let Sl = null;
function ic() { return Sl || (Sl = gS(MS, DS, { upgrade: (e, t) => { switch (t) {
        case 0: e.createObjectStore(Vn);
    } } })), Sl; }
function io(e, t) {
    return __awaiter(this, void 0, void 0, function* () { const n = Lo(e), i = (yield ic()).transaction(Vn, "readwrite"), s = i.objectStore(Vn), o = yield s.get(n); return yield s.put(t, n), yield i.done, (!o || o.fid !== t.fid) && r0(e, t.fid), t; });
}
function s0(e) {
    return __awaiter(this, void 0, void 0, function* () { const t = Lo(e), r = (yield ic()).transaction(Vn, "readwrite"); yield r.objectStore(Vn).delete(t), yield r.done; });
}
function Ao(e, t) {
    return __awaiter(this, void 0, void 0, function* () { const n = Lo(e), i = (yield ic()).transaction(Vn, "readwrite"), s = i.objectStore(Vn), o = yield s.get(n), a = t(o); return a === void 0 ? yield s.delete(n) : yield s.put(a, n), yield i.done, a && (!o || o.fid !== a.fid) && r0(e, a.fid), a; });
} /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function sc(e) {
    return __awaiter(this, void 0, void 0, function* () { let t; const n = yield Ao(e.appConfig, r => { const i = zS(r), s = $S(e, i); return t = s.registrationPromise, s.installationEntry; }); return n.fid === Ba ? { installationEntry: yield t } : { installationEntry: n, registrationPromise: t }; });
}
function zS(e) { const t = e || { fid: OS(), registrationStatus: 0 }; return o0(t); }
function $S(e, t) { if (t.registrationStatus === 0) {
    if (!navigator.onLine) {
        const i = Promise.reject(Un.create("app-offline"));
        return { installationEntry: t, registrationPromise: i };
    }
    const n = { fid: t.fid, registrationStatus: 1, registrationTime: Date.now() }, r = BS(e, n);
    return { installationEntry: n, registrationPromise: r };
}
else
    return t.registrationStatus === 1 ? { installationEntry: t, registrationPromise: FS(e) } : { installationEntry: t }; }
function BS(e, t) {
    return __awaiter(this, void 0, void 0, function* () { try {
        const n = yield NS(e, t);
        return io(e.appConfig, n);
    }
    catch (n) {
        throw Ym(n) && n.customData.serverCode === 409 ? yield s0(e.appConfig) : yield io(e.appConfig, { fid: t.fid, registrationStatus: 0 }), n;
    } });
}
function FS(e) {
    return __awaiter(this, void 0, void 0, function* () { let t = yield lf(e.appConfig); for (; t.registrationStatus === 1;)
        yield t0(100), t = yield lf(e.appConfig); if (t.registrationStatus === 0) {
        const { installationEntry: n, registrationPromise: r } = yield sc(e);
        return r || n;
    } return t; });
}
function lf(e) { return Ao(e, t => { if (!t)
    throw Un.create("installation-not-found"); return o0(t); }); }
function o0(e) { return jS(e) ? { fid: e.fid, registrationStatus: 0 } : e; }
function jS(e) { return e.registrationStatus === 1 && e.registrationTime + Gm < Date.now(); } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function US({ appConfig: e, heartbeatServiceProvider: t }, n) {
    return __awaiter(this, void 0, void 0, function* () { const r = VS(e, n), i = CS(e, n), s = t.getImmediate({ optional: !0 }); if (s) {
        const u = yield s.getHeartbeatsHeader();
        u && i.append("x-firebase-client", u);
    } const o = { installation: { sdkVersion: qm, appId: e.appId } }, a = { method: "POST", headers: i, body: JSON.stringify(o) }, l = yield e0(() => fetch(r, a)); if (l.ok) {
        const u = yield l.json();
        return Qm(u);
    }
    else
        throw yield Jm("Generate Auth Token", l); });
}
function VS(e, { fid: t }) { return `${Xm(e)}/${t}/authTokens:generate`; } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function oc(e, t = !1) {
    return __awaiter(this, void 0, void 0, function* () { let n; const r = yield Ao(e.appConfig, s => { if (!l0(s))
        throw Un.create("not-registered"); const o = s.authToken; if (!t && GS(o))
        return s; if (o.requestStatus === 1)
        return n = HS(e, t), s; {
        if (!navigator.onLine)
            throw Un.create("app-offline");
        const a = KS(s);
        return n = WS(e, a), a;
    } }); return n ? yield n : r.authToken; });
}
function HS(e, t) {
    return __awaiter(this, void 0, void 0, function* () { let n = yield af(e.appConfig); for (; n.authToken.requestStatus === 1;)
        yield t0(100), n = yield af(e.appConfig); const r = n.authToken; return r.requestStatus === 0 ? oc(e, t) : r; });
}
function af(e) { return Ao(e, t => { if (!l0(t))
    throw Un.create("not-registered"); const n = t.authToken; return YS(n) ? Object.assign(Object.assign({}, t), { authToken: { requestStatus: 0 } }) : t; }); }
function WS(e, t) {
    return __awaiter(this, void 0, void 0, function* () { try {
        const n = yield US(e, t), r = Object.assign(Object.assign({}, t), { authToken: n });
        return yield io(e.appConfig, r), n;
    }
    catch (n) {
        if (Ym(n) && (n.customData.serverCode === 401 || n.customData.serverCode === 404))
            yield s0(e.appConfig);
        else {
            const r = Object.assign(Object.assign({}, t), { authToken: { requestStatus: 0 } });
            yield io(e.appConfig, r);
        }
        throw n;
    } });
}
function l0(e) { return e !== void 0 && e.registrationStatus === 2; }
function GS(e) { return e.requestStatus === 2 && !qS(e); }
function qS(e) { const t = Date.now(); return t < e.creationTime || e.creationTime + e.expiresIn < t + xS; }
function KS(e) { const t = { requestStatus: 1, requestTime: Date.now() }; return Object.assign(Object.assign({}, e), { authToken: t }); }
function YS(e) { return e.requestStatus === 1 && e.requestTime + Gm < Date.now(); } /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function XS(e) {
    return __awaiter(this, void 0, void 0, function* () { const t = e, { installationEntry: n, registrationPromise: r } = yield sc(t); return r ? r.catch(console.error) : oc(t).catch(console.error), n.fid; });
} /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function QS(e, t = !1) {
    return __awaiter(this, void 0, void 0, function* () { const n = e; return yield JS(n), (yield oc(n, t)).token; });
}
function JS(e) {
    return __awaiter(this, void 0, void 0, function* () { const { registrationPromise: t } = yield sc(e); t && (yield t); });
} /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ZS(e) { if (!e || !e.options)
    throw bl("App Configuration"); if (!e.name)
    throw bl("App Name"); const t = ["projectId", "apiKey", "appId"]; for (const n of t)
    if (!e.options[n])
        throw bl(n); return { appName: e.name, projectId: e.options.projectId, apiKey: e.options.apiKey, appId: e.options.appId }; }
function bl(e) { return Un.create("missing-app-config-values", { valueName: e }); } /**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const a0 = "installations", e4 = "installations-internal", t4 = e => { const t = e.getProvider("app").getImmediate(), n = ZS(t), r = Di(t, "heartbeat"); return { app: t, appConfig: n, heartbeatServiceProvider: r, _delete: () => Promise.resolve() }; }, n4 = e => { const t = e.getProvider("app").getImmediate(), n = Di(t, a0).getImmediate(); return { getId: () => XS(n), getToken: i => QS(n, i) }; };
function r4() { hn(new Dt(a0, t4, "PUBLIC")), hn(new Dt(e4, n4, "PRIVATE")); }
r4();
bt(Wm, rc);
bt(Wm, rc, "esm2017"); /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const so = "analytics", i4 = "firebase_id", s4 = "origin", o4 = 60 * 1e3, l4 = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig", lc = "https://www.googletagmanager.com/gtag/js"; /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const $e = new Dm("@firebase/analytics"); /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const a4 = { "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.", "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.", "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.", "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}", "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.", "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}", "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.', "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.', "no-client-id": 'The "client_id" field is empty.', "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}." }, He = new Ro("analytics", "Analytics", a4); /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function u4(e) { if (!e.startsWith(lc)) {
    const t = He.create("invalid-gtag-resource", { gtagURL: e });
    return $e.warn(t.message), "";
} return e; }
function u0(e) { return Promise.all(e.map(t => t.catch(n => n))); }
function c4(e, t) { let n; return window.trustedTypes && (n = window.trustedTypes.createPolicy(e, t)), n; }
function d4(e, t) { const n = c4("firebase-js-sdk-policy", { createScriptURL: u4 }), r = document.createElement("script"), i = `${lc}?l=${e}&id=${t}`; r.src = n ? n == null ? void 0 : n.createScriptURL(i) : i, r.async = !0, document.head.appendChild(r); }
function f4(e) { let t = []; return Array.isArray(window[e]) ? t = window[e] : window[e] = t, t; }
function p4(e, t, n, r, i, s) {
    return __awaiter(this, void 0, void 0, function* () { const o = r[i]; try {
        if (o)
            yield t[o];
        else {
            const l = (yield u0(n)).find(u => u.measurementId === i);
            l && (yield t[l.appId]);
        }
    }
    catch (a) {
        $e.error(a);
    } e("config", i, s); });
}
function h4(e, t, n, r, i) {
    return __awaiter(this, void 0, void 0, function* () { try {
        let s = [];
        if (i && i.send_to) {
            let o = i.send_to;
            Array.isArray(o) || (o = [o]);
            const a = yield u0(n);
            for (const l of o) {
                const u = a.find(f => f.measurementId === l), d = u && t[u.appId];
                if (d)
                    s.push(d);
                else {
                    s = [];
                    break;
                }
            }
        }
        s.length === 0 && (s = Object.values(t)), yield Promise.all(s), e("event", r, i || {});
    }
    catch (s) {
        $e.error(s);
    } });
}
function m4(e, t, n, r) { function i(s, ...o) {
    return __awaiter(this, void 0, void 0, function* () { try {
        if (s === "event") {
            const [a, l] = o;
            yield h4(e, t, n, a, l);
        }
        else if (s === "config") {
            const [a, l] = o;
            yield p4(e, t, n, r, a, l);
        }
        else if (s === "consent") {
            const [a] = o;
            e("consent", "update", a);
        }
        else if (s === "get") {
            const [a, l, u] = o;
            e("get", a, l, u);
        }
        else if (s === "set") {
            const [a] = o;
            e("set", a);
        }
        else
            e(s, ...o);
    }
    catch (a) {
        $e.error(a);
    } });
} return i; }
function g4(e, t, n, r, i) { let s = function (...o) { window[r].push(arguments); }; return window[i] && typeof window[i] == "function" && (s = window[i]), window[i] = m4(s, e, t, n), { gtagCore: s, wrappedGtag: window[i] }; }
function v4(e) { const t = window.document.getElementsByTagName("script"); for (const n of Object.values(t))
    if (n.src && n.src.includes(lc) && n.src.includes(e))
        return n; return null; } /**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const y4 = 30, w4 = 1e3;
class x4 {
    constructor(t = {}, n = w4) { this.throttleMetadata = t, this.intervalMillis = n; }
    getThrottleMetadata(t) { return this.throttleMetadata[t]; }
    setThrottleMetadata(t, n) { this.throttleMetadata[t] = n; }
    deleteThrottleMetadata(t) { delete this.throttleMetadata[t]; }
}
const c0 = new x4;
function S4(e) { return new Headers({ Accept: "application/json", "x-goog-api-key": e }); }
function b4(e) {
    return __awaiter(this, void 0, void 0, function* () { var t; const { appId: n, apiKey: r } = e, i = { method: "GET", headers: S4(r) }, s = l4.replace("{app-id}", n), o = yield fetch(s, i); if (o.status !== 200 && o.status !== 304) {
        let a = "";
        try {
            const l = yield o.json();
            !((t = l.error) === null || t === void 0) && t.message && (a = l.error.message);
        }
        catch (_j) { }
        throw He.create("config-fetch-failed", { httpStatus: o.status, responseMessage: a });
    } return o.json(); });
}
function E4(e, t = c0, n) {
    return __awaiter(this, void 0, void 0, function* () { const { appId: r, apiKey: i, measurementId: s } = e.options; if (!r)
        throw He.create("no-app-id"); if (!i) {
        if (s)
            return { measurementId: s, appId: r };
        throw He.create("no-api-key");
    } const o = t.getThrottleMetadata(r) || { backoffCount: 0, throttleEndTimeMillis: Date.now() }, a = new k4; return setTimeout(() => __awaiter(this, void 0, void 0, function* () { a.abort(); }), n !== void 0 ? n : o4), d0({ appId: r, apiKey: i, measurementId: s }, o, a, t); });
}
function d0(e, { throttleEndTimeMillis: t, backoffCount: n }, r, i = c0) {
    return __awaiter(this, void 0, void 0, function* () { var s; const { appId: o, measurementId: a } = e; try {
        yield C4(r, t);
    }
    catch (l) {
        if (a)
            return $e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l == null ? void 0 : l.message}]`), { appId: o, measurementId: a };
        throw l;
    } try {
        const l = yield b4(e);
        return i.deleteThrottleMetadata(o), l;
    }
    catch (l) {
        const u = l;
        if (!_4(u)) {
            if (i.deleteThrottleMetadata(o), a)
                return $e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u == null ? void 0 : u.message}]`), { appId: o, measurementId: a };
            throw l;
        }
        const d = Number((s = u == null ? void 0 : u.customData) === null || s === void 0 ? void 0 : s.httpStatus) === 503 ? Yd(n, i.intervalMillis, y4) : Yd(n, i.intervalMillis), f = { throttleEndTimeMillis: Date.now() + d, backoffCount: n + 1 };
        return i.setThrottleMetadata(o, f), $e.debug(`Calling attemptFetch again in ${d} millis`), d0(e, f, r, i);
    } });
}
function C4(e, t) { return new Promise((n, r) => { const i = Math.max(t - Date.now(), 0), s = setTimeout(n, i); e.addEventListener(() => { clearTimeout(s), r(He.create("fetch-throttle", { throttleEndTimeMillis: t })); }); }); }
function _4(e) { if (!(e instanceof wn) || !e.customData)
    return !1; const t = Number(e.customData.httpStatus); return t === 429 || t === 500 || t === 503 || t === 504; }
class k4 {
    constructor() { this.listeners = []; }
    addEventListener(t) { this.listeners.push(t); }
    abort() { this.listeners.forEach(t => t()); }
}
function N4(e, t, n, r, i) {
    return __awaiter(this, void 0, void 0, function* () { if (i && i.global) {
        e("event", n, r);
        return;
    }
    else {
        const s = yield t, o = Object.assign(Object.assign({}, r), { send_to: s });
        e("event", n, o);
    } });
} /**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function T4() {
    return __awaiter(this, void 0, void 0, function* () { if (Am())
        try {
            yield Mm();
        }
        catch (e) {
            return $e.warn(He.create("indexeddb-unavailable", { errorInfo: e == null ? void 0 : e.toString() }).message), !1;
        }
    else
        return $e.warn(He.create("indexeddb-unavailable", { errorInfo: "IndexedDB is not available in this environment." }).message), !1; return !0; });
}
function I4(e, t, n, r, i, s, o) {
    return __awaiter(this, void 0, void 0, function* () { var a; const l = E4(e); l.then(w => { n[w.measurementId] = w.appId, e.options.measurementId && w.measurementId !== e.options.measurementId && $e.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`); }).catch(w => $e.error(w)), t.push(l); const u = T4().then(w => { if (w)
        return r.getId(); }), [d, f] = yield Promise.all([l, u]); v4(s) || d4(s, d.measurementId), i("js", new Date); const h = (a = o == null ? void 0 : o.config) !== null && a !== void 0 ? a : {}; return h[s4] = "firebase", h.update = !0, f != null && (h[i4] = f), i("config", d.measurementId, h), d.measurementId; });
} /**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class O4 {
    constructor(t) { this.app = t; }
    _delete() { return delete ri[this.app.options.appId], Promise.resolve(); }
}
let ri = {}, uf = [];
const cf = {};
let El = "dataLayer", P4 = "gtag", df, f0, ff = !1;
function R4() { const e = []; if (Ww() && e.push("This is a browser extension environment."), Gw() || e.push("Cookies are not available."), e.length > 0) {
    const t = e.map((r, i) => `(${i + 1}) ${r}`).join(" "), n = He.create("invalid-analytics-context", { errorInfo: t });
    $e.warn(n.message);
} }
function L4(e, t, n) { R4(); const r = e.options.appId; if (!r)
    throw He.create("no-app-id"); if (!e.options.apiKey)
    if (e.options.measurementId)
        $e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    else
        throw He.create("no-api-key"); if (ri[r] != null)
    throw He.create("already-exists", { id: r }); if (!ff) {
    f4(El);
    const { wrappedGtag: s, gtagCore: o } = g4(ri, uf, cf, El, P4);
    f0 = s, df = o, ff = !0;
} return ri[r] = I4(e, uf, cf, t, df, El, n), new O4(e); }
function A4(e = Fm()) { e = Xn(e); const t = Di(e, so); return t.isInitialized() ? t.getImmediate() : M4(e); }
function M4(e, t = {}) { const n = Di(e, so); if (n.isInitialized()) {
    const i = n.getImmediate();
    if (no(t, n.getOptions()))
        return i;
    throw He.create("already-initialized");
} return n.initialize({ options: t }); }
function D4(e, t, n, r) { e = Xn(e), N4(f0, ri[e.app.options.appId], t, n, r).catch(i => $e.error(i)); }
const pf = "@firebase/analytics", hf = "0.10.0";
function z4() { hn(new Dt(so, (t, { options: n }) => { const r = t.getProvider("app").getImmediate(), i = t.getProvider("installations-internal").getImmediate(); return L4(r, i, n); }, "PUBLIC")), hn(new Dt("analytics-internal", e, "PRIVATE")), bt(pf, hf), bt(pf, hf, "esm2017"); function e(t) { try {
    const n = t.getProvider(so).getImmediate();
    return { logEvent: (r, i, s) => D4(n, r, i, s) };
}
catch (n) {
    throw He.create("interop-component-reg-failed", { reason: n });
} } }
z4(); /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const p0 = "firebasestorage.googleapis.com", h0 = "storageBucket", $4 = 2 * 60 * 1e3, B4 = 10 * 60 * 1e3; /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ie extends wn {
    constructor(t, n, r = 0) { super(Cl(t), `Firebase Storage: ${n} (${Cl(t)})`), this.status_ = r, this.customData = { serverResponse: null }, this._baseMessage = this.message, Object.setPrototypeOf(this, ie.prototype); }
    get status() { return this.status_; }
    set status(t) { this.status_ = t; }
    _codeEquals(t) { return Cl(t) === this.code; }
    get serverResponse() { return this.customData.serverResponse; }
    set serverResponse(t) {
        this.customData.serverResponse = t, this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage;
    }
}
var re;
(function (e) { e.UNKNOWN = "unknown", e.OBJECT_NOT_FOUND = "object-not-found", e.BUCKET_NOT_FOUND = "bucket-not-found", e.PROJECT_NOT_FOUND = "project-not-found", e.QUOTA_EXCEEDED = "quota-exceeded", e.UNAUTHENTICATED = "unauthenticated", e.UNAUTHORIZED = "unauthorized", e.UNAUTHORIZED_APP = "unauthorized-app", e.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded", e.INVALID_CHECKSUM = "invalid-checksum", e.CANCELED = "canceled", e.INVALID_EVENT_NAME = "invalid-event-name", e.INVALID_URL = "invalid-url", e.INVALID_DEFAULT_BUCKET = "invalid-default-bucket", e.NO_DEFAULT_BUCKET = "no-default-bucket", e.CANNOT_SLICE_BLOB = "cannot-slice-blob", e.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size", e.NO_DOWNLOAD_URL = "no-download-url", e.INVALID_ARGUMENT = "invalid-argument", e.INVALID_ARGUMENT_COUNT = "invalid-argument-count", e.APP_DELETED = "app-deleted", e.INVALID_ROOT_OPERATION = "invalid-root-operation", e.INVALID_FORMAT = "invalid-format", e.INTERNAL_ERROR = "internal-error", e.UNSUPPORTED_ENVIRONMENT = "unsupported-environment"; })(re || (re = {}));
function Cl(e) { return "storage/" + e; }
function ac() { const e = "An unknown error occurred, please check the error payload for server response."; return new ie(re.UNKNOWN, e); }
function F4(e) { return new ie(re.OBJECT_NOT_FOUND, "Object '" + e + "' does not exist."); }
function j4(e) { return new ie(re.QUOTA_EXCEEDED, "Quota for bucket '" + e + "' exceeded, please view quota on https://firebase.google.com/pricing/."); }
function U4() { const e = "User is not authenticated, please authenticate using Firebase Authentication and try again."; return new ie(re.UNAUTHENTICATED, e); }
function V4() { return new ie(re.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project."); }
function H4(e) { return new ie(re.UNAUTHORIZED, "User does not have permission to access '" + e + "'."); }
function W4() { return new ie(re.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again."); }
function G4() { return new ie(re.CANCELED, "User canceled the upload/download."); }
function q4(e) { return new ie(re.INVALID_URL, "Invalid URL '" + e + "'."); }
function K4(e) { return new ie(re.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + e + "'."); }
function Y4() { return new ie(re.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + h0 + "' property when initializing the app?"); }
function X4() { return new ie(re.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload."); }
function Q4() { return new ie(re.NO_DOWNLOAD_URL, "The given file does not have any download URLs."); }
function J4(e) { return new ie(re.UNSUPPORTED_ENVIRONMENT, `${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`); }
function Fa(e) { return new ie(re.INVALID_ARGUMENT, e); }
function m0() { return new ie(re.APP_DELETED, "The Firebase app was deleted."); }
function Z4(e) { return new ie(re.INVALID_ROOT_OPERATION, "The operation '" + e + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."); }
function ii(e, t) { return new ie(re.INVALID_FORMAT, "String does not match format '" + e + "': " + t); }
function Ur(e) { throw new ie(re.INTERNAL_ERROR, "Internal error: " + e); } /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue {
    constructor(t, n) { this.bucket = t, this.path_ = n; }
    get path() { return this.path_; }
    get isRoot() { return this.path.length === 0; }
    fullServerUrl() { const t = encodeURIComponent; return "/b/" + t(this.bucket) + "/o/" + t(this.path); }
    bucketOnlyServerUrl() { return "/b/" + encodeURIComponent(this.bucket) + "/o"; }
    static makeFromBucketSpec(t, n) { let r; try {
        r = Ue.makeFromUrl(t, n);
    }
    catch (_j) {
        return new Ue(t, "");
    } if (r.path === "")
        return r; throw K4(t); }
    static makeFromUrl(t, n) { let r = null; const i = "([A-Za-z0-9.\\-_]+)"; function s(S) { S.path.charAt(S.path.length - 1) === "/" && (S.path_ = S.path_.slice(0, -1)); } const o = "(/(.*))?$", a = new RegExp("^gs://" + i + o, "i"), l = { bucket: 1, path: 3 }; function u(S) { S.path_ = decodeURIComponent(S.path); } const d = "v[A-Za-z0-9_]+", f = n.replace(/[.]/g, "\\."), h = "(/([^?#]*).*)?$", w = new RegExp(`^https?://${f}/${d}/b/${i}/o${h}`, "i"), m = { bucket: 1, path: 3 }, g = n === p0 ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n, x = "([^?#]*)", p = new RegExp(`^https?://${g}/${i}/${x}`, "i"), y = [{ regex: a, indices: l, postModify: s }, { regex: w, indices: m, postModify: u }, { regex: p, indices: { bucket: 1, path: 2 }, postModify: u }]; for (let S = 0; S < y.length; S++) {
        const C = y[S], k = C.regex.exec(t);
        if (k) {
            const O = k[C.indices.bucket];
            let T = k[C.indices.path];
            T || (T = ""), r = new Ue(O, T), C.postModify(r);
            break;
        }
    } if (r == null)
        throw q4(t); return r; }
}
class eb {
    constructor(t) { this.promise_ = Promise.reject(t); }
    getPromise() { return this.promise_; }
    cancel(t = !1) { }
} /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function tb(e, t, n) { let r = 1, i = null, s = null, o = !1, a = 0; function l() { return a === 2; } let u = !1; function d(...x) { u || (u = !0, t.apply(null, x)); } function f(x) { i = setTimeout(() => { i = null, e(w, l()); }, x); } function h() { s && clearTimeout(s); } function w(x, ...p) { if (u) {
    h();
    return;
} if (x) {
    h(), d.call(null, x, ...p);
    return;
} if (l() || o) {
    h(), d.call(null, x, ...p);
    return;
} r < 64 && (r *= 2); let y; a === 1 ? (a = 2, y = 0) : y = (r + Math.random()) * 1e3, f(y); } let m = !1; function g(x) { m || (m = !0, h(), !u && (i !== null ? (x || (a = 2), clearTimeout(i), f(0)) : x || (a = 1))); } return f(0), s = setTimeout(() => { o = !0, g(!0); }, n), g; }
function nb(e) { e(!1); } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function rb(e) { return e !== void 0; }
function ib(e) { return typeof e == "object" && !Array.isArray(e); }
function uc(e) { return typeof e == "string" || e instanceof String; }
function mf(e) { return cc() && e instanceof Blob; }
function cc() { return typeof Blob < "u" && !Hw(); }
function gf(e, t, n, r) { if (r < t)
    throw Fa(`Invalid value for '${e}'. Expected ${t} or greater.`); if (r > n)
    throw Fa(`Invalid value for '${e}'. Expected ${n} or less.`); } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Mo(e, t, n) { let r = t; return n == null && (r = `https://${t}`), `${n}://${r}/v0${e}`; }
function g0(e) { const t = encodeURIComponent; let n = "?"; for (const r in e)
    if (e.hasOwnProperty(r)) {
        const i = t(r) + "=" + t(e[r]);
        n = n + i + "&";
    } return n = n.slice(0, -1), n; } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var An;
(function (e) { e[e.NO_ERROR = 0] = "NO_ERROR", e[e.NETWORK_ERROR = 1] = "NETWORK_ERROR", e[e.ABORT = 2] = "ABORT"; })(An || (An = {})); /**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function sb(e, t) { const n = e >= 500 && e < 600, i = [408, 429].indexOf(e) !== -1, s = t.indexOf(e) !== -1; return n || i || s; } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class ob {
    constructor(t, n, r, i, s, o, a, l, u, d, f, h = !0) { this.url_ = t, this.method_ = n, this.headers_ = r, this.body_ = i, this.successCodes_ = s, this.additionalRetryCodes_ = o, this.callback_ = a, this.errorCallback_ = l, this.timeout_ = u, this.progressCallback_ = d, this.connectionFactory_ = f, this.retry = h, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((w, m) => { this.resolve_ = w, this.reject_ = m, this.start_(); }); }
    start_() { const t = (r, i) => { if (i) {
        r(!1, new is(!1, null, !0));
        return;
    } const s = this.connectionFactory_(); this.pendingConnection_ = s; const o = a => { const l = a.loaded, u = a.lengthComputable ? a.total : -1; this.progressCallback_ !== null && this.progressCallback_(l, u); }; this.progressCallback_ !== null && s.addUploadProgressListener(o), s.send(this.url_, this.method_, this.body_, this.headers_).then(() => { this.progressCallback_ !== null && s.removeUploadProgressListener(o), this.pendingConnection_ = null; const a = s.getErrorCode() === An.NO_ERROR, l = s.getStatus(); if (!a || sb(l, this.additionalRetryCodes_) && this.retry) {
        const d = s.getErrorCode() === An.ABORT;
        r(!1, new is(!1, null, d));
        return;
    } const u = this.successCodes_.indexOf(l) !== -1; r(!0, new is(u, s)); }); }, n = (r, i) => { const s = this.resolve_, o = this.reject_, a = i.connection; if (i.wasSuccessCode)
        try {
            const l = this.callback_(a, a.getResponse());
            rb(l) ? s(l) : s();
        }
        catch (l) {
            o(l);
        }
    else if (a !== null) {
        const l = ac();
        l.serverResponse = a.getErrorText(), this.errorCallback_ ? o(this.errorCallback_(a, l)) : o(l);
    }
    else if (i.canceled) {
        const l = this.appDelete_ ? m0() : G4();
        o(l);
    }
    else {
        const l = W4();
        o(l);
    } }; this.canceled_ ? n(!1, new is(!1, null, !0)) : this.backoffId_ = tb(t, n, this.timeout_); }
    getPromise() { return this.promise_; }
    cancel(t) { this.canceled_ = !0, this.appDelete_ = t || !1, this.backoffId_ !== null && nb(this.backoffId_), this.pendingConnection_ !== null && this.pendingConnection_.abort(); }
}
class is {
    constructor(t, n, r) { this.wasSuccessCode = t, this.connection = n, this.canceled = !!r; }
}
function lb(e, t) { t !== null && t.length > 0 && (e.Authorization = "Firebase " + t); }
function ab(e, t) { e["X-Firebase-Storage-Version"] = "webjs/" + (t !== null && t !== void 0 ? t : "AppManager"); }
function ub(e, t) { t && (e["X-Firebase-GMPID"] = t); }
function cb(e, t) { t !== null && (e["X-Firebase-AppCheck"] = t); }
function db(e, t, n, r, i, s, o = !0) { const a = g0(e.urlParams), l = e.url + a, u = Object.assign({}, e.headers); return ub(u, t), lb(u, n), ab(u, s), cb(u, r), new ob(l, e.method, u, e.body, e.successCodes, e.additionalRetryCodes, e.handler, e.errorHandler, e.timeout, e.progressCallback, i, o); } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function fb() { return typeof BlobBuilder < "u" ? BlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : void 0; }
function pb(...e) { const t = fb(); if (t !== void 0) {
    const n = new t;
    for (let r = 0; r < e.length; r++)
        n.append(e[r]);
    return n.getBlob();
}
else {
    if (cc())
        return new Blob(e);
    throw new ie(re.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
} }
function hb(e, t, n) { return e.webkitSlice ? e.webkitSlice(t, n) : e.mozSlice ? e.mozSlice(t, n) : e.slice ? e.slice(t, n) : null; } /**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function mb(e) { if (typeof atob > "u")
    throw J4("base-64"); return atob(e); } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const wt = { RAW: "raw", BASE64: "base64", BASE64URL: "base64url", DATA_URL: "data_url" };
class _l {
    constructor(t, n) { this.data = t, this.contentType = n || null; }
}
function gb(e, t) { switch (e) {
    case wt.RAW: return new _l(v0(t));
    case wt.BASE64:
    case wt.BASE64URL: return new _l(y0(e, t));
    case wt.DATA_URL: return new _l(yb(t), wb(t));
} throw ac(); }
function v0(e) { const t = []; for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r <= 127)
        t.push(r);
    else if (r <= 2047)
        t.push(192 | r >> 6, 128 | r & 63);
    else if ((r & 64512) === 55296)
        if (!(n < e.length - 1 && (e.charCodeAt(n + 1) & 64512) === 56320))
            t.push(239, 191, 189);
        else {
            const s = r, o = e.charCodeAt(++n);
            r = 65536 | (s & 1023) << 10 | o & 1023, t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63);
        }
    else
        (r & 64512) === 56320 ? t.push(239, 191, 189) : t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63);
} return new Uint8Array(t); }
function vb(e) { let t; try {
    t = decodeURIComponent(e);
}
catch (_j) {
    throw ii(wt.DATA_URL, "Malformed data URL.");
} return v0(t); }
function y0(e, t) { switch (e) {
    case wt.BASE64: {
        const i = t.indexOf("-") !== -1, s = t.indexOf("_") !== -1;
        if (i || s)
            throw ii(e, "Invalid character '" + (i ? "-" : "_") + "' found: is it base64url encoded?");
        break;
    }
    case wt.BASE64URL: {
        const i = t.indexOf("+") !== -1, s = t.indexOf("/") !== -1;
        if (i || s)
            throw ii(e, "Invalid character '" + (i ? "+" : "/") + "' found: is it base64 encoded?");
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        break;
    }
} let n; try {
    n = mb(t);
}
catch (i) {
    throw i.message.includes("polyfill") ? i : ii(e, "Invalid character found");
} const r = new Uint8Array(n.length); for (let i = 0; i < n.length; i++)
    r[i] = n.charCodeAt(i); return r; }
class w0 {
    constructor(t) { this.base64 = !1, this.contentType = null; const n = t.match(/^data:([^,]+)?,/); if (n === null)
        throw ii(wt.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>"); const r = n[1] || null; r != null && (this.base64 = xb(r, ";base64"), this.contentType = this.base64 ? r.substring(0, r.length - 7) : r), this.rest = t.substring(t.indexOf(",") + 1); }
}
function yb(e) { const t = new w0(e); return t.base64 ? y0(wt.BASE64, t.rest) : vb(t.rest); }
function wb(e) { return new w0(e).contentType; }
function xb(e, t) { return e.length >= t.length ? e.substring(e.length - t.length) === t : !1; } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Wt {
    constructor(t, n) { let r = 0, i = ""; mf(t) ? (this.data_ = t, r = t.size, i = t.type) : t instanceof ArrayBuffer ? (n ? this.data_ = new Uint8Array(t) : (this.data_ = new Uint8Array(t.byteLength), this.data_.set(new Uint8Array(t))), r = this.data_.length) : t instanceof Uint8Array && (n ? this.data_ = t : (this.data_ = new Uint8Array(t.length), this.data_.set(t)), r = t.length), this.size_ = r, this.type_ = i; }
    size() { return this.size_; }
    type() { return this.type_; }
    slice(t, n) { if (mf(this.data_)) {
        const r = this.data_, i = hb(r, t, n);
        return i === null ? null : new Wt(i);
    }
    else {
        const r = new Uint8Array(this.data_.buffer, t, n - t);
        return new Wt(r, !0);
    } }
    static getBlob(...t) { if (cc()) {
        const n = t.map(r => r instanceof Wt ? r.data_ : r);
        return new Wt(pb.apply(null, n));
    }
    else {
        const n = t.map(o => uc(o) ? gb(wt.RAW, o).data : o.data_);
        let r = 0;
        n.forEach(o => { r += o.byteLength; });
        const i = new Uint8Array(r);
        let s = 0;
        return n.forEach(o => { for (let a = 0; a < o.length; a++)
            i[s++] = o[a]; }), new Wt(i, !0);
    } }
    uploadData() { return this.data_; }
} /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function x0(e) { let t; try {
    t = JSON.parse(e);
}
catch (_j) {
    return null;
} return ib(t) ? t : null; } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Sb(e) { if (e.length === 0)
    return null; const t = e.lastIndexOf("/"); return t === -1 ? "" : e.slice(0, t); }
function bb(e, t) { const n = t.split("/").filter(r => r.length > 0).join("/"); return e.length === 0 ? n : e + "/" + n; }
function S0(e) { const t = e.lastIndexOf("/", e.length - 2); return t === -1 ? e : e.slice(t + 1); } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Eb(e, t) { return t; }
class Ne {
    constructor(t, n, r, i) { this.server = t, this.local = n || t, this.writable = !!r, this.xform = i || Eb; }
}
let ss = null;
function Cb(e) { return !uc(e) || e.length < 2 ? e : S0(e); }
function b0() { if (ss)
    return ss; const e = []; e.push(new Ne("bucket")), e.push(new Ne("generation")), e.push(new Ne("metageneration")), e.push(new Ne("name", "fullPath", !0)); function t(s, o) { return Cb(o); } const n = new Ne("name"); n.xform = t, e.push(n); function r(s, o) { return o !== void 0 ? Number(o) : o; } const i = new Ne("size"); return i.xform = r, e.push(i), e.push(new Ne("timeCreated")), e.push(new Ne("updated")), e.push(new Ne("md5Hash", null, !0)), e.push(new Ne("cacheControl", null, !0)), e.push(new Ne("contentDisposition", null, !0)), e.push(new Ne("contentEncoding", null, !0)), e.push(new Ne("contentLanguage", null, !0)), e.push(new Ne("contentType", null, !0)), e.push(new Ne("metadata", "customMetadata", !0)), ss = e, ss; }
function _b(e, t) { function n() { const r = e.bucket, i = e.fullPath, s = new Ue(r, i); return t._makeStorageReference(s); } Object.defineProperty(e, "ref", { get: n }); }
function kb(e, t, n) { const r = {}; r.type = "file"; const i = n.length; for (let s = 0; s < i; s++) {
    const o = n[s];
    r[o.local] = o.xform(r, t[o.server]);
} return _b(r, e), r; }
function E0(e, t, n) { const r = x0(t); return r === null ? null : kb(e, r, n); }
function Nb(e, t, n, r) { const i = x0(t); if (i === null || !uc(i.downloadTokens))
    return null; const s = i.downloadTokens; if (s.length === 0)
    return null; const o = encodeURIComponent; return s.split(",").map(u => { const d = e.bucket, f = e.fullPath, h = "/b/" + o(d) + "/o/" + o(f), w = Mo(h, n, r), m = g0({ alt: "media", token: u }); return w + m; })[0]; }
function Tb(e, t) { const n = {}, r = t.length; for (let i = 0; i < r; i++) {
    const s = t[i];
    s.writable && (n[s.server] = e[s.local]);
} return JSON.stringify(n); }
class dc {
    constructor(t, n, r, i) { this.url = t, this.method = n, this.handler = r, this.timeout = i, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = []; }
} /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function C0(e) { if (!e)
    throw ac(); }
function Ib(e, t) { function n(r, i) { const s = E0(e, i, t); return C0(s !== null), s; } return n; }
function Ob(e, t) { function n(r, i) { const s = E0(e, i, t); return C0(s !== null), Nb(s, i, e.host, e._protocol); } return n; }
function _0(e) { function t(n, r) { let i; return n.getStatus() === 401 ? n.getErrorText().includes("Firebase App Check token is invalid") ? i = V4() : i = U4() : n.getStatus() === 402 ? i = j4(e.bucket) : n.getStatus() === 403 ? i = H4(e.path) : i = r, i.status = n.getStatus(), i.serverResponse = r.serverResponse, i; } return t; }
function k0(e) { const t = _0(e); function n(r, i) { let s = t(r, i); return r.getStatus() === 404 && (s = F4(e.path)), s.serverResponse = i.serverResponse, s; } return n; }
function Pb(e, t, n) { const r = t.fullServerUrl(), i = Mo(r, e.host, e._protocol), s = "GET", o = e.maxOperationRetryTime, a = new dc(i, s, Ob(e, n), o); return a.errorHandler = k0(t), a; }
function Rb(e, t) { const n = t.fullServerUrl(), r = Mo(n, e.host, e._protocol), i = "DELETE", s = e.maxOperationRetryTime; function o(l, u) { } const a = new dc(r, i, o, s); return a.successCodes = [200, 204], a.errorHandler = k0(t), a; }
function Lb(e, t) { return e && e.contentType || t && t.type() || "application/octet-stream"; }
function Ab(e, t, n) { const r = Object.assign({}, n); return r.fullPath = e.path, r.size = t.size(), r.contentType || (r.contentType = Lb(null, t)), r; }
function Mb(e, t, n, r, i) {
    const s = t.bucketOnlyServerUrl(), o = { "X-Goog-Upload-Protocol": "multipart" };
    function a() { let y = ""; for (let S = 0; S < 2; S++)
        y = y + Math.random().toString().slice(2); return y; }
    const l = a();
    o["Content-Type"] = "multipart/related; boundary=" + l;
    const u = Ab(t, r, i), d = Tb(u, n), f = "--" + l + `\r
Content-Type: application/json; charset=utf-8\r
\r
` + d + `\r
--` + l + `\r
Content-Type: ` + u.contentType + `\r
\r
`, h = `\r
--` + l + "--", w = Wt.getBlob(f, r, h);
    if (w === null)
        throw X4();
    const m = { name: u.fullPath }, g = Mo(s, e.host, e._protocol), x = "POST", p = e.maxUploadRetryTime, v = new dc(g, x, Ib(e, n), p);
    return v.urlParams = m, v.headers = o, v.body = w.uploadData(), v.errorHandler = _0(t), v;
}
class Db {
    constructor() { this.sent_ = !1, this.xhr_ = new XMLHttpRequest, this.initXhr(), this.errorCode_ = An.NO_ERROR, this.sendPromise_ = new Promise(t => { this.xhr_.addEventListener("abort", () => { this.errorCode_ = An.ABORT, t(); }), this.xhr_.addEventListener("error", () => { this.errorCode_ = An.NETWORK_ERROR, t(); }), this.xhr_.addEventListener("load", () => { t(); }); }); }
    send(t, n, r, i) { if (this.sent_)
        throw Ur("cannot .send() more than once"); if (this.sent_ = !0, this.xhr_.open(n, t, !0), i !== void 0)
        for (const s in i)
            i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString()); return r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_; }
    getErrorCode() { if (!this.sent_)
        throw Ur("cannot .getErrorCode() before sending"); return this.errorCode_; }
    getStatus() { if (!this.sent_)
        throw Ur("cannot .getStatus() before sending"); try {
        return this.xhr_.status;
    }
    catch (_j) {
        return -1;
    } }
    getResponse() { if (!this.sent_)
        throw Ur("cannot .getResponse() before sending"); return this.xhr_.response; }
    getErrorText() { if (!this.sent_)
        throw Ur("cannot .getErrorText() before sending"); return this.xhr_.statusText; }
    abort() { this.xhr_.abort(); }
    getResponseHeader(t) { return this.xhr_.getResponseHeader(t); }
    addUploadProgressListener(t) { this.xhr_.upload != null && this.xhr_.upload.addEventListener("progress", t); }
    removeUploadProgressListener(t) { this.xhr_.upload != null && this.xhr_.upload.removeEventListener("progress", t); }
}
class zb extends Db {
    initXhr() { this.xhr_.responseType = "text"; }
}
function fc() { return new zb; } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn {
    constructor(t, n) { this._service = t, n instanceof Ue ? this._location = n : this._location = Ue.makeFromUrl(n, t.host); }
    toString() { return "gs://" + this._location.bucket + "/" + this._location.path; }
    _newRef(t, n) { return new Hn(t, n); }
    get root() { const t = new Ue(this._location.bucket, ""); return this._newRef(this._service, t); }
    get bucket() { return this._location.bucket; }
    get fullPath() { return this._location.path; }
    get name() { return S0(this._location.path); }
    get storage() { return this._service; }
    get parent() { const t = Sb(this._location.path); if (t === null)
        return null; const n = new Ue(this._location.bucket, t); return new Hn(this._service, n); }
    _throwIfRoot(t) { if (this._location.path === "")
        throw Z4(t); }
}
function $b(e, t, n) { e._throwIfRoot("uploadBytes"); const r = Mb(e.storage, e._location, b0(), new Wt(t, !0), n); return e.storage.makeRequestWithTokens(r, fc).then(i => ({ metadata: i, ref: e })); }
function Bb(e) { e._throwIfRoot("getDownloadURL"); const t = Pb(e.storage, e._location, b0()); return e.storage.makeRequestWithTokens(t, fc).then(n => { if (n === null)
    throw Q4(); return n; }); }
function Fb(e) { e._throwIfRoot("deleteObject"); const t = Rb(e.storage, e._location); return e.storage.makeRequestWithTokens(t, fc); }
function jb(e, t) { const n = bb(e._location.path, t), r = new Ue(e._location.bucket, n); return new Hn(e.storage, r); } /**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ub(e) { return /^[A-Za-z]+:\/\//.test(e); }
function Vb(e, t) { return new Hn(e, t); }
function N0(e, t) { if (e instanceof pc) {
    const n = e;
    if (n._bucket == null)
        throw Y4();
    const r = new Hn(n, n._bucket);
    return t != null ? N0(r, t) : r;
}
else
    return t !== void 0 ? jb(e, t) : e; }
function Hb(e, t) { if (t && Ub(t)) {
    if (e instanceof pc)
        return Vb(e, t);
    throw Fa("To use ref(service, url), the first argument must be a Storage instance.");
}
else
    return N0(e, t); }
function vf(e, t) { const n = t == null ? void 0 : t[h0]; return n == null ? null : Ue.makeFromBucketSpec(n, e); }
function Wb(e, t, n, r = {}) { e.host = `${t}:${n}`, e._protocol = "http"; const { mockUserToken: i } = r; i && (e._overrideAuthToken = typeof i == "string" ? i : Vw(i, e.app.options.projectId)); }
class pc {
    constructor(t, n, r, i, s) { this.app = t, this._authProvider = n, this._appCheckProvider = r, this._url = i, this._firebaseVersion = s, this._bucket = null, this._host = p0, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = $4, this._maxUploadRetryTime = B4, this._requests = new Set, i != null ? this._bucket = Ue.makeFromBucketSpec(i, this._host) : this._bucket = vf(this._host, this.app.options); }
    get host() { return this._host; }
    set host(t) { this._host = t, this._url != null ? this._bucket = Ue.makeFromBucketSpec(this._url, t) : this._bucket = vf(t, this.app.options); }
    get maxUploadRetryTime() { return this._maxUploadRetryTime; }
    set maxUploadRetryTime(t) { gf("time", 0, Number.POSITIVE_INFINITY, t), this._maxUploadRetryTime = t; }
    get maxOperationRetryTime() { return this._maxOperationRetryTime; }
    set maxOperationRetryTime(t) { gf("time", 0, Number.POSITIVE_INFINITY, t), this._maxOperationRetryTime = t; }
    _getAuthToken() {
        return __awaiter(this, void 0, void 0, function* () { if (this._overrideAuthToken)
            return this._overrideAuthToken; const t = this._authProvider.getImmediate({ optional: !0 }); if (t) {
            const n = yield t.getToken();
            if (n !== null)
                return n.accessToken;
        } return null; });
    }
    _getAppCheckToken() {
        return __awaiter(this, void 0, void 0, function* () { const t = this._appCheckProvider.getImmediate({ optional: !0 }); return t ? (yield t.getToken()).token : null; });
    }
    _delete() { return this._deleted || (this._deleted = !0, this._requests.forEach(t => t.cancel()), this._requests.clear()), Promise.resolve(); }
    _makeStorageReference(t) { return new Hn(this, t); }
    _makeRequest(t, n, r, i, s = !0) { if (this._deleted)
        return new eb(m0()); {
        const o = db(t, this._appId, r, i, n, this._firebaseVersion, s);
        return this._requests.add(o), o.getPromise().then(() => this._requests.delete(o), () => this._requests.delete(o)), o;
    } }
    makeRequestWithTokens(t, n) {
        return __awaiter(this, void 0, void 0, function* () { const [r, i] = yield Promise.all([this._getAuthToken(), this._getAppCheckToken()]); return this._makeRequest(t, n, r, i).getPromise(); });
    }
}
const yf = "@firebase/storage", wf = "0.11.2"; /**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const T0 = "storage";
function tt(e, t, n) { return e = Xn(e), $b(e, t, n); }
function nt(e) { return e = Xn(e), Bb(e); }
function Gb(e) { return e = Xn(e), Fb(e); }
function We(e, t) { return e = Xn(e), Hb(e, t); }
function qb(e = Fm(), t) { e = Xn(e); const r = Di(e, T0).getImmediate({ identifier: t }), i = jw("storage"); return i && Kb(r, ...i), r; }
function Kb(e, t, n, r = {}) { Wb(e, t, n, r); }
function Yb(e, { instanceIdentifier: t }) { const n = e.getProvider("app").getImmediate(), r = e.getProvider("auth-internal"), i = e.getProvider("app-check-internal"); return new pc(n, r, i, t, Xx); }
function Xb() { hn(new Dt(T0, Yb, "PUBLIC").setMultipleInstances(!0)), bt(yf, wf, ""), bt(yf, wf, "esm2017"); }
Xb();
const Qb = { apiKey: "AIzaSyAFZ2T9ZoXyabl76VZ1iFT-O-z9xeUjd94", authDomain: "msi-images.firebaseapp.com", projectId: "msi-images", storageBucket: "msi-images.appspot.com", messagingSenderId: "789043950370", appId: "1:789043950370:web:77d41d86f0ef5d9030eb7b", measurementId: "G-7X8CB265RV" }, I0 = Bm(Qb);
A4(I0);
const Ge = qb(I0), rt = (e) => __awaiter(void 0, void 0, void 0, function* () { const t = We(Ge, e); Gb(t).then(() => { console.log("image deleted"); }).catch(n => { console.log("error deleting image"); }); });
function Jb({ course: e }) { const [t, n] = E.useState(!1), [r, i] = E.useState(!1), [s, o] = E.useState(!1), a = (d) => __awaiter(this, void 0, void 0, function* () { n(!1), o(!0); }), l = () => __awaiter(this, void 0, void 0, function* () { o(!1), i(!0); try {
    e.course_fb_url && (yield rt(e.course_fb_url)), yield pw(e.course_id), i(!1), window.location.reload();
}
catch (d) {
    i(!1), alert("An error occurred while deleting the course: " + d.message);
} }), u = () => { o(!1); }; return b("div", { className: "dark:border dark:border-gray-600 overflow-hidden rounded-lg dark:bg-slate-900 shadow-xl ring-1 ring-slate-900/5 dark:shadow-none relative max-w-[350px] max-h-[350px] hover:scale-105 transition ease-in-out duration-500", children: [r && c("div", { className: "w-full h-full bg-slate-800 flex items-center justify-center", children: c("h1", { className: "text-xl font-bold tracking-widest", children: "Deleting..." }) }), b(Fn, { to: `/courses/${e.course_id}`, className: "", children: [c("div", { className: "relative", children: c("div", { className: "relative w-full inline-block", children: c("img", { src: e.image_url, alt: e.image_url, className: "object-cover w-full h-[196px] " }) }) }), c("div", { className: "m-6 h-12", children: b("h1", { className: " text-lg text-start flex gap-2", children: [c(cm, { className: "mt-1 text-xl" }), " ", e.course_name] }) }), b("footer", { className: "m-6 flex items-center justify-between xl:flex leading-none", children: [b("div", { className: "flex justify-center items-center py-1", children: [c(Zh, { height: 25, width: 25 }), c("p", { className: "ml-2 text-sm", children: e.duration })] }), b("div", { className: "flex justify-center items-center py-1 ", children: [c(rm, { height: 25, width: 25 }), c("p", { className: "ml-2 text-sm", children: e.fees })] })] })] }), M.token && b("div", { className: "absolute top-2 right-2", children: [c("button", { onClick: () => n(!t), className: "text-2xl text-black focus:outline-none p-1 rounded-lg hover:bg-slate-600 hover:text-white transition duration-300", children: t ? c(qu, {}) : c(Wu, {}) }), t && b("div", { className: "absolute top-9 right-2 bg-slate-800 border border-gray-300 rounded-lg shadow-lg py-2", children: [b(ke, { to: `/update-course/${e.course_id}`, className: " py-2 px-4 hover:bg-slate-600 duration-300 flex items-center gap-3 rounded-xl", children: [c(_o, { size: 15 }), " ", c("span", { children: "Edit" })] }), b("button", { onClick: () => a(e.course_id), className: " py-2 px-4 hover:bg-slate-600 duration-300 flex items-center gap-3 rounded-xl", children: [c(_r, { size: 15 }), " ", c("span", { children: "Delete" })] })] }), s && c("div", { className: "fixed inset-0 flex items-center justify-center z-50 m-2", children: b("div", { className: "bg-gray-800 p-4 rounded-lg shadow-lg text-white", children: [c("p", { className: "text-lg mb-4", children: "Are you sure you want to delete this course?" }), b("div", { className: "flex justify-between", children: [c("button", { onClick: u, className: "bg-gray-500 hover:bg-red-500 rounded px-2 py-1 mr-2", children: "Cancel" }), c("button", { onClick: l, className: "bg-red-500 hover:bg-red-700 rounded px-2 py-1", children: "Confirm" })] })] }) })] })] }); }
const Zb = V.memo(Jb), e5 = ({ coursesData: e }) => { const [t, n] = E.useState(""), r = e.filter(s => s.course_name && s.course_name.toLowerCase().includes(t.toLowerCase())); return b("div", { className: "my-8 mx-auto md:px-24", children: [b("div", { className: "mb-5  flex flex-col md:flex-row gap-4 mx-6 md:mx-0", children: [b("div", { className: "flex gap-2", children: [c("input", { type: "text", placeholder: "Search Courses", className: "w-full md:w-[350px] bg-inherit border placeholder:text-white dark:border-gray-600 border-white rounded-lg py-2 px-4  text-white focus:outline-none focus:border-blue-500", value: t, onChange: s => { n(s.target.value); } }), c("button", { type: "submit", className: "bg-[#e93b8c] hover:bg-[#f14b99] text-white font-bold py-2 px-4 rounded md:hidden", children: "Search" })] }), M.token && c("div", { className: "flex gap-8", children: c(ke, { to: "/create-course", className: " bg-[#e93b8c] hover:bg-[#f14b99] text-white font-bold py-2 px-4 rounded", children: "Add +" }) })] }), c("div", { className: "grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-3", children: r.map(s => c(Zb, { course: s }, s.course_id)) })] }); };
function t5() { var r, i, s, o, a; const e = new Date().getFullYear(), [t, n] = E.useState([]); return E.useEffect(() => { Tw().then(l => { n(l); }); }, []), c("footer", { className: "w-full bg-[#fff] h-auto bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]", id: "footer", children: b("div", { className: "grid grid-cols-1 md:grid-cols-3 py-10 place-items-center md:gap-0 gap-10 border-t rounded-tl-[40px] shadow", children: [b("article", { className: "flex flex-col gap-3 items-center md:items-start", children: [b("div", { className: "flex flex-col items-center md:items-start", children: [c("img", { src: "/images/MSI.png", alt: "msi", className: "w-12 h-auto" }), c("h4", { className: "text-white", children: "Mandalay Software Inistitute" })] }), b("a", { href: "https://www.facebook.com/mdysoftwareinstitute", target: "_blank", rel: "noopener noreferrer", children: ["©", e, " msi"] })] }), b("article", { className: "flex flex-col gap-4 ", children: [b("div", { className: "flex gap-2", children: [c("h3", { className: "text-xl font-semibold text-center w-full md:text-start", children: "Contact" }), M.token && b("div", { className: "flex gap-2", children: [!((r = t[0]) != null && r.contact_id) && c(ke, { to: "/create-contact", className: "bg-[#e93b8c] hover:bg-[#f14b99] text-white p-2 rounded flex items-center gap-2", children: "Add" }), b(ke, { to: `/update-contact/${(i = t[0]) == null ? void 0 : i.contact_id}`, className: "bg-[#e93b8c] hover:bg-[#f14b99] text-white p-2 rounded flex items-center gap-2", children: [c(_o, {}), " Edit"] })] })] }), b("div", { className: "flex items-center gap-4", children: [c(yy, { className: "text-xl" }), c("span", { children: (s = t[0]) == null ? void 0 : s.location })] }), b("div", { className: "flex items-center gap-4", children: [c(Iy, { className: "text-xl" }), (o = t[0]) == null ? void 0 : o.phone] }), b("div", { className: "flex items-center gap-4", children: [c(wy, { className: "text-xl" }), c("span", { children: (a = t[0]) == null ? void 0 : a.email })] })] }), b("article", { children: [c("h4", { className: "text-xl font-semibold text-center w-full md:text-start", children: "Navigations" }), b("ul", { className: "flex gap-2 mt-3", children: [c("li", { children: c("a", { href: "#home", children: "Home" }) }), "|", c("li", { children: c("a", { href: "#courses", children: "Courses" }) }), "|", c("li", { children: c("a", { href: "#instructor", children: "Instructors" }) }), "|", c("li", { children: c("a", { href: "#stories", children: "Stories" }) })] })] })] }) }); }
function n5() { return b("div", { className: "absolute left-0 bottom-0 -z-10 min-h-[400px] w-full", children: [c("img", { src: "/images/svg-8.png", alt: "", className: "h-[460vh] md:h-[450vh] lg:h-[145vh] xl:h-[140vh] -z-10 object-fill w-full" }), c("img", { src: "/images/svg-9.png", alt: "", className: "h-[20vh] -mt-28 md:-mt-24 lg:-mt-12 xl:-mt-12 lg:h-[10vh] xl:h-[10vh]  object-fill w-full dark:hidden" }), c("img", { src: "/images/svg-10.png", alt: "", className: "hidden h-[20vh] -mt-28 md:-mt-24 lg:-mt-12 xl:-mt-12 lg:h-[10vh] xl:h-[10vh]  object-fill w-full dark:block" })] }); }
let os;
const r5 = new Uint8Array(16);
function i5() { if (!os && (os = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !os))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return os(r5); }
const ve = [];
for (let e = 0; e < 256; ++e)
    ve.push((e + 256).toString(16).slice(1));
function s5(e, t = 0) { return ve[e[t + 0]] + ve[e[t + 1]] + ve[e[t + 2]] + ve[e[t + 3]] + "-" + ve[e[t + 4]] + ve[e[t + 5]] + "-" + ve[e[t + 6]] + ve[e[t + 7]] + "-" + ve[e[t + 8]] + ve[e[t + 9]] + "-" + ve[e[t + 10]] + ve[e[t + 11]] + ve[e[t + 12]] + ve[e[t + 13]] + ve[e[t + 14]] + ve[e[t + 15]]; }
const o5 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xf = { randomUUID: o5 };
function it(e, t, n) { if (xf.randomUUID && !t && !e)
    return xf.randomUUID(); e = e || {}; const r = e.random || (e.rng || i5)(); if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
        t[n + i] = r[i];
    return t;
} return s5(r); }
const l5 = () => { const [e, t] = E.useState(!1), n = ["", "", "", "", ""], [r, i] = E.useState({ course_name: "", description: "", course_fb_url: "", image_url: "", duration: "", fees: "", outlines: n }), [s, o] = E.useState(""), a = () => m => { const g = m.target.files && m.target.files[0]; g && l(g); }, l = m => { const g = We(Ge, `courses/${m.name + it()}`); o(g._location.path), tt(g, m).then(x => { nt(x.ref).then(p => { i(Object.assign(Object.assign({}, r), { image_url: p })); }); }); }, u = m => { const { name: g, value: x } = m.target; i(Object.assign(Object.assign({}, r), { [g]: x })); }, d = Re(), f = (m) => __awaiter(void 0, void 0, void 0, function* () { m.preventDefault(), t(!0); const g = { course_name: r.course_name, description: r.description, course_fb_url: s, image_url: r.image_url, duration: r.duration, fees: r.fees, outlines: r.outlines }; try {
    yield dw(g), t(!1), d("/"), window.location.reload();
}
catch (x) {
    t(!1), alert("An error occurred while creating the course: " + x.message);
} }), h = () => { if (r.outlines.length < 20) {
    const m = [...r.outlines, ""];
    i(Object.assign(Object.assign({}, r), { outlines: m }));
} }, w = m => { const g = [...r.outlines]; g.splice(m, 1), i(Object.assign(Object.assign({}, r), { outlines: g })); }; return c("div", { className: "min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: e ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Creating..." }) : b("form", { onSubmit: f, className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[70%] relative", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Create a New Course" }), b("div", { className: "flex flex-col md:flex-row justify-between gap-4", children: [b("div", { className: " md:w-1/2 flex flex-col gap-2 justify-between ", children: [c("div", { className: "flex flex-col gap-1", children: b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "image_url", onChange: a() }), r.image_url && c("img", { className: "w-20 h-auto mt-2", src: r.image_url })] }) }), c("input", { type: "text", placeholder: "Enter Course Name", className: "input", name: "course_name", value: r.course_name, onChange: u }), c("textarea", { rows: 3, placeholder: "Enter Description", className: "input", name: "description", value: r.description, onChange: u }), c("input", { type: "text", placeholder: "Enter Duration", className: "input", name: "duration", value: r.duration, onChange: u }), c("input", { type: "text", placeholder: "Enter Fee", className: "input", name: "fees", value: r.fees, onChange: u })] }), b("div", { className: " md:w-1/2 flex flex-col gap-1", children: [c("label", { className: "font-medium", children: "Course Outlines" }), r.outlines.map((m, g) => b("div", { className: "flex gap-2", children: [c("input", { type: "text", placeholder: `Outline ${g + 1}`, className: "input mb-1", value: m, onChange: x => { const p = [...r.outlines]; p[g] = x.target.value, i(Object.assign(Object.assign({}, r), { outlines: p })); } }), c("button", { type: "button", className: "p-2 m-2 bg-slate-900 text-white rounded-lg", onClick: () => w(g), children: "Remove" })] }, g)), r.outlines.length < 20 && c("button", { type: "button", className: "p-2 m-2 bg-slate-900 text-white rounded-lg", onClick: h, children: "Add Outline" })] })] }), c("button", { type: "submit", className: "w-[49%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => d(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); }, a5 = () => { const { id: e } = Pr(), t = Re(), [n, r] = E.useState(!1), [i, s] = E.useState({ course_name: "", description: "", course_fb_url: "", image_url: "", duration: "", fees: "", outlines: [] }), [o, a] = E.useState(""); E.useEffect(() => { e && cw(e).then(m => { s(m); }); }, [e]); const l = () => (m) => __awaiter(void 0, void 0, void 0, function* () { i.course_fb_url && (yield rt(i.course_fb_url)); const g = m.target.files && m.target.files[0]; g && u(g); }), u = m => { const g = We(Ge, `courses/${m.name + it()}`); a(g._location.path), tt(g, m).then(x => { nt(x.ref).then(p => { s(Object.assign(Object.assign({}, i), { image_url: p })); }); }); }, d = m => { const { name: g, value: x } = m.target; s(Object.assign(Object.assign({}, i), { [g]: x })); }, f = (m) => __awaiter(void 0, void 0, void 0, function* () { m.preventDefault(), r(!0); const g = { course_name: i.course_name, description: i.description, course_fb_url: o, image_url: i.image_url, duration: i.duration, fees: i.fees, outlines: i.outlines }; try {
    yield fw(e, g), r(!1), t("/"), window.location.reload();
}
catch (_j) {
    r(!1), t("/"), window.location.reload();
} }), h = () => { if (i.outlines.length < 20) {
    const m = [...i.outlines, ""];
    s(g => (Object.assign(Object.assign({}, g), { outlines: m })));
} }, w = m => { const g = [...i.outlines]; g.splice(m, 1), s(x => (Object.assign(Object.assign({}, x), { outlines: g }))); }; return c("div", { className: "min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: n ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Updating..." }) : b("form", { onSubmit: f, className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[70%] relative", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Update Course" }), b("div", { className: "flex flex-col md:flex-row justify-between gap-4", children: [b("div", { className: "md:w-1/2 flex flex-col gap-2 justify-between", children: [c("div", { className: "flex flex-col gap-1", children: b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "image_url", onChange: l() }), i.image_url && c("img", { className: "w-20 h-auto mt-2", src: i.image_url, alt: "Course" })] }) }), c("input", { type: "text", placeholder: "Enter Course Name", className: "input", name: "course_name", value: i.course_name, onChange: d }), c("textarea", { rows: 3, placeholder: "Enter Description", className: "input", name: "description", value: i.description, onChange: d }), c("input", { type: "text", placeholder: "Enter Duration", className: "input", name: "duration", value: i.duration, onChange: d }), c("input", { type: "text", placeholder: "Enter Fee", className: "input", name: "fees", value: i.fees, onChange: d })] }), b("div", { className: "md:w-1/2 flex flex-col gap-1", children: [c("label", { className: "font-medium", children: "Course Outlines" }), i.outlines.map((m, g) => b("div", { className: "flex gap-2", children: [c("input", { type: "text", placeholder: `Outline ${g + 1}`, className: "input mb-1", value: m.content, onChange: x => { const p = [...i.outlines]; p[g] = x.target.value, s(Object.assign(Object.assign({}, i), { outlines: p })); } }), c("button", { type: "button", className: "p-2 m-2 bg-slate-900 text-white rounded-lg", onClick: () => w(g), children: "Remove" })] }, g)), i.outlines.length < 20 && c("button", { type: "button", className: "p-2 m-2 bg-slate-900 text-white rounded-lg", onClick: h, children: "Add Outline" })] })] }), c("button", { type: "submit", className: "w-[48%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99]", children: "Submit" }), c("button", { type: "button", onClick: () => t(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); };
function hc() { return c("div", { className: "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] h-[calc(100vh-140px)] flex items-center justify-center", children: c("h3", { className: "text-3xl font-bold", children: "404 | Not Found" }) }); }
function u5({ coursesData: e }) { var i; const { id: t } = Pr(), [n, r] = E.useState(); return Re(), E.useEffect(() => { if (!t)
    return; const s = e.filter(o => o.course_id === t)[0]; r(s), window.scrollTo(0, 0); }, [t]), c(vr, { children: n ? c("div", { className: "relative pt-24 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] px-2 min-h-screen pb-4", children: b("div", { className: "container mx-auto flex flex-col md:flex-row gap-4 justify-center md:justify-around md:px-12", children: [b("div", { className: "md:w-[600px] h-fit flex gap-4 text-white flex-col shadow-xl ring-1 ring-slate-900/5 dark:shadow-none dark:border dark:border-gray-600 dark:hover:border-gray-500 rounded-lg relative dark:bg-[#11162C] dark:bg-opacity-70", children: [c("img", { src: n.image_url, alt: n == null ? void 0 : n.course_name, className: "md:h-[260px] w-full rounded-t-lg" }), b("div", { className: "px-6", children: [b("h3", { className: "text-2xl font-semibold flex gap-2 items-center", children: [c(cm, { className: " text-xl" }), " ", n == null ? void 0 : n.course_name] }), c("div", { className: "mt-4", children: c("p", { children: n == null ? void 0 : n.description }) }), b("div", { className: "flex justify-between mt-4", children: [b("div", { className: "flex justify-center items-center py-1", children: [c(Zh, { height: 25, width: 25 }), c("p", { className: "ml-2 text-base", children: n.duration })] }), b("div", { className: "flex justify-center items-center py-1 ", children: [c(rm, { height: 25, width: 25 }), c("p", { className: "ml-2 text-base", children: n.fees })] })] }), c(ke, { to: "/create-enroll", children: c("button", { className: "py-2 px-9 w-full mt-6 font-semibold border hover:border-gray-300 border-[#fdeed4] rounded-xl focus:ring focus:ring[#fdeed4] hover:bg-transparent bg-[#fdeed4] text-[#373737] hover:text-white transition ease-in-out duration-500", type: "button", children: b("div", { className: "flex flex-wrap justify-center items-center -m-1", children: [c("div", { className: "w-auto p-1 ", children: c(Sy, { height: 20, width: 20 }) }), c("div", { className: "w-auto p-1", children: c("span", { "data-config-id": "auto-txt-15-1", children: "Enroll now" }) })] }) }) })] }), c("div", { className: "flex justify-center translate-y-[2px]", children: c("div", { className: "w-3/4", children: b("div", { className: "flex flex-row", children: [c("div", { className: "h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full" }), c("div", { className: "h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full" })] }) }) })] }), b("div", { className: " w-full md:w-[400px] shadow-xl ring-1 ring-slate-900/5 dark:shadow-none dark:border dark:border-gray-600 dark:hover:border-gray-500 rounded-lg relative dark:bg-[#11162C] dark:bg-opacity-70", children: [c("div", { className: "flex justify-center -translate-y-[1px]", children: c("div", { className: "w-3/4", children: b("div", { className: "flex flex-row", children: [c("div", { className: "h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full" }), c("div", { className: "h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full" })] }) }) }), b("div", { className: "p-6", children: [c("h3", { className: "text-2xl text-center mb-5 font-semibold", children: "Outlines" }), c("ul", { className: "flex flex-col list-[square] ", children: n != null && n.outlines ? (i = n == null ? void 0 : n.outlines) == null ? void 0 : i.map((s, o) => c("li", { className: " md:text-lg  leading-relaxed mx-5", children: s.content }, o)) : c("li", { className: "text-sm md:text-lg leading-relaxed mx-5", children: "Course outline not available." }) })] })] })] }) }) : c(hc, {}) }); }
const c5 = () => { const [e, t] = E.useState(!1), [n, r] = E.useState({ name: "", profile_img_url: "", profile_fb_url: "", type: "", facebook: "", gmail: "", twitter: "", linkedin: "", skills: [{ name: "", skill_fb_url: "", skill_img_url: "", content: "" }] }), i = Re(), s = (m) => __awaiter(void 0, void 0, void 0, function* () { m.preventDefault(), t(!0); try {
    yield Sw(n), t(!1), i("/"), window.location.reload();
}
catch (g) {
    t(!1), alert("An error occurred while creating the instructor: " + g.message);
} }), o = m => { const { name: g, value: x } = m.target; r(Object.assign(Object.assign({}, n), { [g]: x })); }, a = (m, g) => x => { const { value: p } = x.target, v = [...n.skills]; v[m] = Object.assign(Object.assign({}, v[m]), { [g]: p }), r(Object.assign(Object.assign({}, n), { skills: v })); }, l = () => m => { const g = m.target.files && m.target.files[0]; g && u(g); }, u = m => { const g = We(Ge, `instructors/${m.name + it()}`); tt(g, m).then(x => { nt(x.ref).then(p => { r(Object.assign(Object.assign({}, n), { profile_img_url: p, profile_fb_url: g._location.path })); }); }); }, d = m => g => { const x = g.target.files && g.target.files[0]; x && f(x, m); }, f = (m, g) => { const x = We(Ge, `instructors/skills/${m.name + it()}`); tt(x, m).then(p => { nt(p.ref).then(v => { const y = [...n.skills]; y[g] = Object.assign(Object.assign({}, y[g]), { skill_img_url: v, skill_fb_url: x._location.path }), r(Object.assign(Object.assign({}, n), { skills: y })); }); }).catch(p => { console.error("Error uploading skill image:", p); }); }, h = () => { const m = [...n.skills]; m.push({ name: "", content: "", skill_fb_url: "", skill_img_url: "" }), r(Object.assign(Object.assign({}, n), { skills: m })); }, w = m => { const g = [...n.skills]; g.splice(m, 1), r(Object.assign(Object.assign({}, n), { skills: g })); }; return c("div", { className: "min-h-screen pt-20 pb-4 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: e ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Creating..." }) : b("form", { onSubmit: s, className: "relative bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[70%]", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Add Instructor" }), b("div", { className: "flex flex-col md:flex-row justify-between gap-8", children: [b("div", { className: "md:w-1/2 flex flex-col justify-between gap-2", children: [c("div", { className: "flex flex-col gap-2", children: b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "profile_img_url", onChange: l() }), n.profile_img_url && c("img", { className: "w-16 h-auto", src: n.profile_img_url })] }) }), c("div", { className: "flex flex-col gap-2", children: c("input", { type: "text", placeholder: "Enter Name", className: "input", name: "name", value: n.name, onChange: o }) }), c("div", { className: "flex flex-col gap-2", children: c("input", { type: "text", placeholder: "Enter Position", className: "input", name: "type", value: n.type, onChange: o }) }), b("div", { className: "flex flex-col gap-2", children: [c("label", { className: "text-lg font-medium", children: "Social Accounts" }), c("input", { type: "text", placeholder: "Enter Twitter Username", className: "input", name: "twitter", value: n.twitter, onChange: o }), c("input", { type: "text", placeholder: "Enter Facebook Username", className: "input", name: "facebook", value: n.facebook, onChange: o }), c("input", { type: "email", placeholder: "Enter Mail", className: "input", name: "gmail", value: n.gmail, onChange: o }), c("input", { type: "text", placeholder: "Enter LinkedIn Username", className: "input", name: "linkedin", value: n.linkedin, onChange: o })] })] }), b("div", { className: "md:w-1/2 flex flex-col gap-2", children: [c("label", { className: "text-lg font-medium", children: "Instructor Skills" }), n.skills.map((m, g) => b("div", { className: "flex flex-col gap-2", children: [b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: `skills[${g}].skill_img_url`, onChange: d(g) }), m.skill_img_url && c("img", { className: "w-12 h-auto mt-2", src: m.skill_img_url })] }), c("input", { type: "text", placeholder: "skill name", className: "input", name: `skills[${g}].name`, value: m.name, onChange: a(g, "name") }), c("input", { type: "text", placeholder: "skill content", className: "input", name: `skills[${g}].content`, value: m.content, onChange: a(g, "content") }), c("button", { className: "baseButton mx-auto", type: "button", onClick: () => w(g), children: "Remove" })] }, g)), c("button", { className: "baseButton mx-auto", type: "button", onClick: h, children: "Add Skill" })] })] }), c("button", { type: "submit", className: "w-[48%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => i(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); }, d5 = () => { const { id: e } = Pr(), t = Re(), [n, r] = E.useState(!1), [i, s] = E.useState({ name: "", profile_img_url: "", profile_fb_url: "", type: "", facebook: "", gmail: "", twitter: "", linkedin: "", skills: [{ name: "", skill_fb_url: "", skill_img_url: "", content: "" }] }); E.useEffect(() => { e && xw(e).then(g => { s(g); }); }, [e]); const o = (g) => __awaiter(void 0, void 0, void 0, function* () { g.preventDefault(), r(!0); try {
    yield bw(e, i), r(!1), t("/"), window.location.reload();
}
catch (_j) {
    r(!1), t("/");
} }), a = g => { const { name: x, value: p } = g.target; s(Object.assign(Object.assign({}, i), { [x]: p })); }, l = (g, x) => p => { const { value: v } = p.target, y = [...i.skills]; y[g] = Object.assign(Object.assign({}, y[g]), { [x]: v }), s(Object.assign(Object.assign({}, i), { skills: y })); }, u = () => (g) => __awaiter(void 0, void 0, void 0, function* () { i.profile_fb_url && (yield rt(i.profile_fb_url)); const x = g.target.files && g.target.files[0]; x && d(x); }), d = g => { const x = We(Ge, `instructors/${g.name + it()}`); tt(x, g).then(p => { nt(p.ref).then(v => { s(Object.assign(Object.assign({}, i), { profile_img_url: v, profile_fb_url: x._location.path })); }); }); }, f = g => (x) => __awaiter(void 0, void 0, void 0, function* () { i.skills[g].skill_fb_url && (yield rt(i.skills[g].skill_fb_url)); const p = x.target.files && x.target.files[0]; p && h(p, g); }), h = (g, x) => { const p = We(Ge, `instructors/skills/${g.name + it()}`); tt(p, g).then(v => { nt(v.ref).then(y => { const S = [...i.skills]; S[x] = Object.assign(Object.assign({}, S[x]), { skill_img_url: y, skill_fb_url: p._location.path }), s(Object.assign(Object.assign({}, i), { skills: S })); }); }).catch(v => { console.error("Error uploading skill image:", v); }); }, w = () => { const g = [...i.skills]; g.push({ name: "", content: "", skill_fb_url: "", skill_img_url: "" }), s(Object.assign(Object.assign({}, i), { skills: g })); }, m = g => { const x = [...i.skills]; x.splice(g, 1), s(Object.assign(Object.assign({}, i), { skills: x })); }; return c("div", { className: "min-h-screen pt-20 pb-4 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: n ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Updating..." }) : b("form", { onSubmit: o, className: "relative bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[70%]", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Update Instructor" }), b("div", { className: "flex flex-col md:flex-row justify-between gap-8", children: [b("div", { className: "md:w-1/2 flex flex-col gap-2 justify-between", children: [c("div", { className: "flex flex-col gap-2", children: b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "profile_img_url", onChange: u() }), i.profile_img_url && c("img", { className: "w-16 h-auto", src: i.profile_img_url, alt: "Profile" })] }) }), c("div", { className: "flex flex-col gap-2", children: c("input", { type: "text", placeholder: "Enter Name", className: "input", name: "name", value: i.name, onChange: a }) }), c("div", { className: "flex flex-col gap-2", children: c("input", { type: "text", placeholder: "Enter Position", className: "input", name: "type", value: i.type, onChange: a }) }), b("div", { className: "flex flex-col gap-2", children: [c("label", { className: "text-lg font-medium", children: "Social Accounts" }), c("input", { type: "text", placeholder: "Enter Twitter Username", className: "input", name: "twitter", value: i.twitter, onChange: a }), c("input", { type: "text", placeholder: "Enter Facebook Username", className: "input", name: "facebook", value: i.facebook, onChange: a }), c("input", { type: "email", placeholder: "Enter Mail", className: "input", name: "gmail", value: i.gmail, onChange: a }), c("input", { type: "text", placeholder: "Enter LinkedIn Username", className: "input", name: "linkedin", value: i.linkedin, onChange: a })] })] }), b("div", { className: "md:w-1/2 flex flex-col gap-2", children: [c("label", { className: "text-lg font-medium", children: "Instructor Skills" }), i.skills.map((g, x) => b("div", { className: "flex flex-col gap-2", children: [b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: `skills[${x}].skill_img_url`, onChange: f(x) }), g.skill_img_url && c("img", { className: "w-12 h-auto mt-2", src: g.skill_img_url, alt: "Skill" })] }), c("input", { type: "text", placeholder: "Skill name", className: "input", name: `skills[${x}].name`, value: g.name, onChange: l(x, "name") }), c("input", { type: "text", placeholder: "Skill content", className: "input", name: `skills[${x}].content`, value: g.content, onChange: l(x, "content") }), c("button", { className: "baseButton mx-auto", type: "button", onClick: () => m(x), children: "Remove" })] }, x)), c("button", { className: "baseButton mx-auto", type: "button", onClick: w, children: "Add Skill" })] })] }), c("button", { type: "submit", className: "w-[48%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99]", children: "Submit" }), c("button", { type: "button", onClick: () => t(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); };
function f5(e) { return B({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4 4h8c0.143 0 0.281 0.031 0.409 0.088l-4.409 5.143-4.409-5.143c0.127-0.058 0.266-0.088 0.409-0.088zM3 11v-6c0-0.021 0.001-0.042 0.002-0.063l2.932 3.421-2.9 2.9c-0.023-0.083-0.034-0.17-0.034-0.258zM12 12h-8c-0.088 0-0.175-0.012-0.258-0.034l2.846-2.846 1.413 1.648 1.413-1.648 2.846 2.846c-0.083 0.023-0.17 0.034-0.258 0.034zM13 11c0 0.088-0.012 0.175-0.034 0.258l-2.9-2.9 2.932-3.421c0.001 0.021 0.002 0.042 0.002 0.063v6z" } }] })(e); }
function p5(e) { const { id: t, name: n, profile: r, profileFbUrl: i, type: s, facebook: o, gmail: a, twitter: l, linkedin: u, skills: d } = e, [f, h] = E.useState(!1), [w, m] = E.useState(!1), [g, x] = E.useState(!1), p = (S) => __awaiter(this, void 0, void 0, function* () { h(!1), x(!0); }), v = () => __awaiter(this, void 0, void 0, function* () { x(!1), m(!0); try {
    i && rt(i);
    for (let S = 0; S < d.length; S++)
        rt(d[S].skill_fb_url);
    yield Ew(t), m(!1), window.location.reload();
}
catch (S) {
    m(!1), alert("An error occurred while deleting the instructor: " + S.message);
} }), y = () => { x(!1); }; return b("div", { className: "shadow-lg backdrop-blur-xl text-white font-bold text-center p-4 rounded-[20px] border-[0.1px] min-h-[315px] max-h-[615px] lg:max-h-[315px] ", children: [w && c("div", { className: "w-full h-full bg-slate-800 flex items-center justify-center", children: c("h1", { className: "text-xl font-bold tracking-widest", children: "Deleting..." }) }), b("div", { className: "md:grid md:grid-rows- grid-flow-col gap-1 w-full bg-white bg-opacity-20 rounded-[15px] h-full instructorCard", children: [c("div", { className: "md:w-fit flex items-center justify-center", children: b("div", { className: "w-full flex flex-col justify-center  md:shadow-md  rounded-t-lg md:rounded-lg bg-transparent bg-gradient-to-bl from-[#d9354f] to-[#dd4264] text-gray-100 dark:text-gray-100 h-full pt-4 pb-2", children: [c("img", { src: r, alt: n, className: "w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" }), b("div", { className: "space-y-4 text-center divide-y divide-white divide-opacity-20", children: [b("div", { className: "my-2 space-y-1", children: [c("h2", { className: "text-xl font-semibold sm:text-2xl", children: n }), c("p", { className: "px-5 text-sm sm:text-base dark:text-gray-200", children: s })] }), b("div", { className: "flex justify-center items-center pt-2 space-x-0 px-3 align-center ", children: [c("a", { href: l, target: "_blank", rel: "noopener noreferrer", className: "group py-[0.4rem] px-[0.5rem] rounded-md dark:text-gray-100 hover:dark:text-violet-400 hover:cursor-pointer", children: c(Ly, {}) }), c("a", { href: o, target: "_blank", rel: "noopener noreferrer", className: "group py-[0.4rem] px-[0.5rem] rounded-md dark:text-gray-100 hover:dark:text-violet-400 hover:cursor-pointer", children: c(Ry, {}) }), c("a", { href: `mailto:${a}`, className: "group py-[0.4rem] px-[0.5rem] rounded-md dark:text-gray-100 hover:dark:text-violet-400 hover:cursor-pointer", children: c(f5, {}) }), c("a", { href: u, target: "_blank", rel: "noopener noreferrer", className: "group py-[0.4rem] px-[0.5rem] rounded-md dark:text-gray-100 hover:dark:text-violet-400 hover:cursor-pointer", children: c(Ay, {}) })] })] })] }) }), c("div", { className: "lstInst overflow-auto h-[300px] lg:h-full p-2", children: d ? d == null ? void 0 : d.map(S => c("a", { href: "", className: "w-full decoration-0", children: b("div", { className: "listcard", children: [c("div", { className: "listcircle", children: c("img", { src: S.skill_img_url, alt: S.name, className: "!w-[32px] !h-[32px] mx-auto rounded-fullaspect-square" }) }), b("div", { className: "listbody", children: [c("p", { className: "bodytitle", children: S.name }), c("p", { className: "bodyfooter", children: S.content })] })] }) }, S.skill_id)) : c("li", { className: "text-sm md:text-lg leading-relaxed mx-5", children: "Features are not available." }) }), M.token && b("div", { className: "absolute top-1 right-2", children: [c("button", { onClick: () => h(!f), className: "text-2xl text-black focus:outline-none p-1 rounded-lg hover:bg-slate-600 hover:text-white transition duration-300", children: f ? c(qu, {}) : c(Wu, {}) }), f && b("div", { className: "absolute top-9 right-2 bg-slate-800 border border-gray-300 rounded-lg shadow-lg py-2", children: [b(ke, { to: `/update-instructor/${t}`, className: " py-2 px-4 hover:bg-slate-600 duration-300 flex items-center gap-3 rounded-xl", children: [c(_o, { size: 15 }), " ", c("span", { children: "Edit" })] }), b("button", { onClick: () => p(), className: " py-2 px-4 hover:bg-slate-600 duration-300 flex items-center gap-3 rounded-xl", children: [c(_r, { size: 15 }), " ", c("span", { children: "Delete" })] })] })] }), g && c("div", { className: "fixed inset-0 flex items-center justify-center z-50 m-2", children: b("div", { className: "bg-gray-800 p-4 rounded-lg shadow-lg text-white", children: [c("p", { className: "text-lg mb-4", children: "Are you sure you want to delete this course?" }), b("div", { className: "flex justify-between", children: [c("button", { onClick: y, className: "bg-gray-500 hover:bg-red-500 rounded px-2 py-1 mr-2", children: "Cancel" }), c("button", { onClick: v, className: "bg-red-500 hover:bg-red-700 rounded px-2 py-1", children: "Confirm" })] })] }) })] })] }); }
const h5 = V.memo(p5);
function m5() { const [e, t] = E.useState([]); return E.useEffect(() => { ww().then(n => { t(n); }); }, []), c("div", { className: "grid grid-cols lg:grid-cols-2 gap-4 px-5 container mx-auto md:px-16", children: e == null ? void 0 : e.map(n => c(h5, { id: n.instructor_id, name: n.name, profile: n.profile_img_url, profileFbUrl: n.profile_fb_url, type: n.type, facebook: n.facebook, gmail: n.gmail, twitter: n.twitter, linkedin: n.linkedin, skills: n.skills }, n.instructor_id)) }); }
const g5 = () => { const [e, t] = E.useState(!1), [n, r] = E.useState({ name: "", position: "", profile_img_url: "", type: "", content: "", story_img_url1: "", story_img_url2: "", profile_fb_url: "", story_fb_url1: "", story_fb_url2: "" }), [i, s] = E.useState(""), [o, a] = E.useState(""), [l, u] = E.useState(""), d = () => y => { const S = y.target.files && y.target.files[0]; S && f(S); }, f = y => { const S = We(Ge, `stories/profiles/${y.name + it()}`); s(S._location.path), tt(S, y).then(C => { nt(C.ref).then(k => { r(Object.assign(Object.assign({}, n), { profile_img_url: k })); }); }); }, h = () => y => { const S = y.target.files && y.target.files[0]; S && w(S); }, w = y => { const S = We(Ge, `stories/project_img/${y.name + it()}`); a(S._location.path), tt(S, y).then(C => { nt(C.ref).then(k => { r(Object.assign(Object.assign({}, n), { story_img_url1: k })); }); }); }, m = () => y => { const S = y.target.files && y.target.files[0]; S && g(S); }, g = y => { const S = We(Ge, `stories/project_img/${y.name + it()}`); u(S._location.path), tt(S, y).then(C => { nt(C.ref).then(k => { r(Object.assign(Object.assign({}, n), { story_img_url2: k })); }); }); }, x = y => { const { name: S, value: C } = y.target; r(Object.assign(Object.assign({}, n), { [S]: C })); }, p = Re(); return c("div", { className: "min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: e ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Creating..." }) : b("form", { onSubmit: (y) => __awaiter(void 0, void 0, void 0, function* () { y.preventDefault(), t(!0); const S = { name: n.name, position: n.position, type: n.type, content: n.content, profile_img_url: n.profile_img_url, story_img_url1: n.story_img_url1, story_img_url2: n.story_img_url2, profile_fb_url: i, story_fb_url1: o, story_fb_url2: l }; try {
            yield gw(S), t(!1), p("/"), window.location.reload();
        }
        catch (C) {
            t(!1), alert("An error occurred while creating the story: " + C.message);
        } }), className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[50%] relative", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Create a New Story" }), b("div", { className: "flex flex-col justify-between gap-4", children: [c("input", { type: "text", placeholder: "Enter Username", className: "input", name: "name", value: n.name, onChange: x }), c("input", { type: "text", placeholder: "Enter Position", className: "input", name: "position", value: n.position, onChange: x }), b("div", { className: "flex flex-col gap-2", children: [c("label", { className: "font-semibold", children: "Choose Story Image Type" }), b("div", { className: "flex gap-2", children: [c("input", { type: "radio", name: "type", value: "mobile", id: "ratio1", checked: n.type === "mobile", onChange: x }), c("label", { htmlFor: "ratio1", children: "Mobile" })] }), b("div", { className: "flex gap-2", children: [c("input", { type: "radio", name: "type", value: "web", id: "ratio2", checked: n.type === "web", onChange: x }), c("label", { htmlFor: "ratio2", children: "Web" })] })] }), c("textarea", { rows: 5, placeholder: "Enter Content", className: "input", name: "content", value: n.content, onChange: x }), b("div", { className: "flex flex-col gap-2", children: [c("label", { htmlFor: "profile_img_url", children: "Add Profile" }), b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "profile_img_url", onChange: d() }), n.profile_img_url && c("img", { className: "w-20 h-auto mt-2", src: n.profile_img_url })] })] }), b("div", { className: "flex flex-col gap-2", children: [c("label", { htmlFor: "story_img_url1", children: "Add Story Image1" }), b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "story_img_url1", onChange: h() }), n.story_img_url1 && c("img", { className: "w-20 h-auto mt-2", src: n.story_img_url1 })] })] }), b("div", { className: "flex flex-col gap-2", children: [c("label", { htmlFor: "story_img_url2", children: "Add Story Image2" }), b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "story_img_url2", onChange: m() }), n.story_img_url2 && c("img", { className: "w-20 h-auto mt-2", src: n.story_img_url2 })] })] })] }), c("button", { type: "submit", className: "w-[49%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => p(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); }, v5 = () => { const { id: e } = Pr(), t = Re(), [n, r] = E.useState(!1), [i, s] = E.useState({ name: "", position: "", type: "", profile_img_url: "", content: "", story_img_url1: "", story_img_url2: "", profile_fb_url: "", story_fb_url1: "", story_fb_url2: "" }), [o, a] = E.useState(""), [l, u] = E.useState(""), [d, f] = E.useState(""); E.useEffect(() => { e && mw(e).then(S => { s(S); }); }, [e]); const h = () => (S) => __awaiter(void 0, void 0, void 0, function* () { i.profile_fb_url && (yield rt(i.profile_fb_url)); const C = S.target.files && S.target.files[0]; C && w(C); }), w = S => { const C = We(Ge, `stories/profiles/${S.name + it()}`); a(C._location.path), tt(C, S).then(k => { nt(k.ref).then(O => { s(Object.assign(Object.assign({}, i), { profile_img_url: O })); }); }); }, m = () => (S) => __awaiter(void 0, void 0, void 0, function* () { i.story_fb_url1 && (yield rt(i.story_fb_url1)); const C = S.target.files && S.target.files[0]; C && g(C); }), g = S => { const C = We(Ge, `stories/project_img/${S.name + it()}`); u(C._location.path), tt(C, S).then(k => { nt(k.ref).then(O => { s(Object.assign(Object.assign({}, i), { story_img_url1: O })); }); }); }, x = () => (S) => __awaiter(void 0, void 0, void 0, function* () { i.story_fb_url2 && (yield rt(i.story_fb_url2)); const C = S.target.files && S.target.files[0]; C && p(C); }), p = S => { const C = We(Ge, `stories/project_img/${S.name + it()}`); f(C._location.path), tt(C, S).then(k => { nt(k.ref).then(O => { s(Object.assign(Object.assign({}, i), { story_img_url2: O })); }); }); }, v = S => { const { name: C, value: k } = S.target; s(Object.assign(Object.assign({}, i), { [C]: k })); }; return c("div", { className: "min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: n ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Updating..." }) : b("form", { onSubmit: (S) => __awaiter(void 0, void 0, void 0, function* () { S.preventDefault(), r(!0); const C = { name: i.name, position: i.position, type: i.type, content: i.content, profile_img_url: i.profile_img_url, story_img_url1: i.story_img_url1, story_img_url2: i.story_img_url2, profile_fb_url: o, story_fb_url1: l, story_fb_url2: d }; try {
            yield vw(e, C), r(!1), t("/"), window.location.reload();
        }
        catch (_j) {
            r(!1), t("/");
        } }), className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[50%] relative", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Update Story" }), b("div", { className: "flex flex-col justify-between gap-4", children: [c("input", { type: "text", placeholder: "Enter Username", className: "input", name: "name", value: i.name, onChange: v }), c("input", { type: "text", placeholder: "Enter Position", className: "input", name: "position", value: i.position, onChange: v }), b("div", { className: "flex flex-col gap-2", children: [c("label", { className: "font-semibold", children: "Choose Story Image Type" }), b("div", { className: "flex gap-2", children: [c("input", { type: "radio", name: "type", value: "mobile", id: "ratio1", checked: i.type === "mobile", onChange: v }), c("label", { htmlFor: "ratio1", children: "Mobile" })] }), b("div", { className: "flex gap-2", children: [c("input", { type: "radio", name: "type", value: "web", id: "ratio2", checked: i.type === "web", onChange: v }), c("label", { htmlFor: "ratio2", children: "Web" })] })] }), c("textarea", { rows: 5, placeholder: "Enter Content", className: "input", name: "content", value: i.content, onChange: v }), b("div", { className: "flex flex-col gap-2", children: [c("label", { htmlFor: "profile_img_url", children: "Add Profile" }), b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "profile_img_url", onChange: h() }), i.profile_img_url && c("img", { className: "w-20 h-auto mt-2", src: i.profile_img_url })] })] }), b("div", { className: "flex flex-col gap-2", children: [c("label", { htmlFor: "story_img_url1", children: "Add Story Image1" }), b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "story_img_url1", onChange: m() }), i.story_img_url1 && c("img", { className: "w-20 h-auto mt-2", src: i.story_img_url1 })] })] }), b("div", { className: "flex flex-col gap-2", children: [c("label", { htmlFor: "story_img_url2", children: "Add Story Image2" }), b("div", { className: "flex gap-2", children: [c("input", { type: "file", className: "input", name: "story_img_url2", onChange: x() }), i.story_img_url2 && c("img", { className: "w-20 h-auto mt-2", src: i.story_img_url2 })] })] })] }), c("button", { type: "submit", className: "w-[49%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => t(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); };
function y5({ coursesData: e }) { const [t, n] = E.useState(!1), r = Re(), [i, s] = E.useState({ name: "", course: "", time: "", days: "", education: "", mobile: "", email: "" }), [o, a] = E.useState([]), [l, u] = E.useState([]); E.useEffect(() => { Om().then(w => { a(w); }), Zu().then(w => { u(w); }); }, []); const d = w => { const { name: m, value: g } = w.target; s(Object.assign(Object.assign({}, i), { [m]: g })); }, f = w => { const { name: m, value: g } = w.target; s(Object.assign(Object.assign({}, i), { [m]: g })); }; return c("div", { className: "bg-gradient-to-r min-h-screen pt-20 from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center pb-4", children: t ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Loading..." }) : b("form", { onSubmit: (w) => __awaiter(this, void 0, void 0, function* () { w.preventDefault(), n(!0); try {
            yield Cw(i), n(!1), r("/");
        }
        catch (m) {
            n(!1), alert("An error occurred while creating the enroll: " + m.message);
        } }), className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[60%] lg:w-[50%] relative ", children: [c("h2", { className: "text-lg md:text-3xl font-semibold text-center text-pink-400 tracking-widest", children: "Mandalay Software Institute" }), b("div", { className: "flex flex-col justify-between gap-4", children: [c("input", { required: !0, type: "text", placeholder: "Enter Your Name", className: "input", name: "name", value: i.name, onChange: d }), c("input", { required: !0, type: "text", placeholder: "Enter Your Educational Qualification", className: "input", name: "education", value: i.education, onChange: d }), c("input", { required: !0, type: "text", placeholder: "Enter Your Mobile", className: "input", name: "mobile", value: i.mobile, onChange: d }), c("input", { required: !0, type: "email", placeholder: "Enter Your Email", className: "input", name: "email", value: i.email, onChange: d }), b("select", { required: !0, name: "course", className: "input", value: i.course, onChange: f, children: [c("option", { value: "#", children: "Choose Course" }), e == null ? void 0 : e.map(w => c("option", { value: w.course_name, children: w.course_name }, w.course_name))] }), b("select", { required: !0, name: "time", className: "input", value: i.time, onChange: f, children: [c("option", { value: "#", children: "Choose Time" }), o == null ? void 0 : o.map(w => c("option", { value: w.name, children: w.name }, w.time_id))] }), b("select", { required: !0, name: "days", className: "input", value: i.days, onChange: f, children: [c("option", { value: "#", children: "Choose Section" }), l == null ? void 0 : l.map(w => c("option", { value: w.name, children: w.name }, w.section_id))] })] }), c("button", { type: "submit", className: " w-full md:w-[50%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => r(-1), className: "text-white absolute top-0 left-1 md:left-6", children: c(ht, { size: 30 }) })] }) }); }
const w5 = () => { const [e, t] = E.useState(!1), [n, r] = E.useState({ name: "" }), i = a => { const { name: l, value: u } = a.target; r(Object.assign(Object.assign({}, n), { [l]: u })); }, s = Re(); return c("div", { className: "min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: e ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Creating..." }) : b("form", { onSubmit: (a) => __awaiter(void 0, void 0, void 0, function* () { a.preventDefault(), t(!0); try {
            yield sw(n), t(!1), s("/time-section");
        }
        catch (l) {
            t(!1), alert("An error occurred while creating the time: " + l.message);
        } }), className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[50%] relative", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Create a New Time" }), c("div", { className: "flex flex-col justify-between gap-4", children: c("input", { type: "text", placeholder: "Enter Time", className: "input", name: "name", value: n.name, onChange: i }) }), c("button", { type: "submit", className: "w-[49%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => s(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); }, x5 = () => { const [e, t] = E.useState(!1), [n, r] = E.useState({ name: "" }), i = a => { const { name: l, value: u } = a.target; r(Object.assign(Object.assign({}, n), { [l]: u })); }, s = Re(); return c("div", { className: "min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: e ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Creating..." }) : b("form", { onSubmit: (a) => __awaiter(void 0, void 0, void 0, function* () { a.preventDefault(), t(!0); try {
            yield lw(n), t(!1), s("/time-section");
        }
        catch (l) {
            t(!1), alert("An error occurred while creating the section: " + l.message);
        } }), className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[50%] relative", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Create a New Section" }), c("div", { className: "flex flex-col justify-between gap-4", children: c("input", { type: "text", placeholder: "Enter Section", className: "input", name: "name", value: n.name, onChange: i }) }), c("button", { type: "submit", className: "w-[49%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => s(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); };
function S5({ coursesData: e }) { const t = Re(), [n, r] = E.useState([]), [i, s] = E.useState(""), [o, a] = E.useState(""), [l, u] = E.useState(""), [d, f] = E.useState([]); E.useEffect(() => { Zu().then(m => { f(m); }), _w().then(m => { r(m); }); }, []); const h = (m, g) => __awaiter(this, void 0, void 0, function* () { m.stopPropagation(); try {
    yield Nw(g), window.location.reload();
}
catch (x) {
    alert("An error occurred while deleting the enroll: " + x.message);
} }), w = n.filter(m => { const g = m.name.toLowerCase().includes(i.toLowerCase()), x = o === "" || m.course === o, p = l === "" || m.days == l; return console.log("en.days:", m.days), console.log("sectionFilter:", l), g && x && p; }); return b("div", { className: "bg-gradient-to-r pt-12 from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] px-2 min-h-screen", children: [b("div", { className: "md:w-[70%] mx-auto my-4 flex items-center justify-between space-x-4", children: [c("input", { type: "text", placeholder: "Search by name...", className: "px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none", value: i, onChange: m => s(m.target.value) }), b("select", { className: "w-48 px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none", value: o, onChange: m => a(m.target.value), children: [c("option", { value: "", children: "All Courses" }), e == null ? void 0 : e.map(m => c("option", { value: m.course_name, children: m.course_name }, m.course_name))] }), b("select", { className: "w-48 px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none", value: l, onChange: m => u(m.target.value), children: [c("option", { value: "", children: "All Sections" }), d == null ? void 0 : d.map(m => c("option", { value: m.name, children: m.name }, m.section_id))] }), c(ke, { to: "/time-section", className: "bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-sm", children: "Time & Section" }), c(ke, { to: "/create-enroll", className: "bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-sm", children: "Enroll" })] }), b("table", { className: "md:w-[70%] w-full mx-auto shadow-xl  text-left text-gray-200", children: [c("thead", { className: " uppercase bg-gray-700 text-gray-300", children: b("tr", { children: [c("th", { scope: "col", className: "px-6 py-3", children: "No" }), c("th", { scope: "col", className: "px-6 py-3", children: "Name" }), c("th", { scope: "col", className: "px-6 py-3", children: "Mobile" }), c("th", { scope: "col", className: "px-6 py-3", children: "Course" }), c("th", { scope: "col", className: "px-6 py-3", children: "Section" }), c("th", { scope: "col", className: "px-6 py-3", children: "Action" })] }) }), c("tbody", { children: w && w.map((m, g) => b("tr", { className: " border-b cursor-pointer bg-gray-900 border-gray-700 hover:bg-gray-800", onClick: () => t(`/enroll-list/${m.enroll_id}`), children: [c("th", { className: "px-6 py-4", children: g + 1 }), c("th", { scope: "row", className: "px-6 py-4 font-medium whitespace-nowrap text-white", children: m.name }), c("td", { className: "px-6 py-4", children: m.mobile }), c("td", { className: "px-6 py-4", children: m.course }), c("td", { className: "px-6 py-4", children: m.days }), b("td", { className: "px-6 py-4 flex gap-4 items-center", children: [c(am, { className: "hover:text-blue-500", size: 20 }), "|", c(_r, { className: "hover:text-red-600", onClick: x => h(x, m.enroll_id), size: 20 })] })] }, m.enroll_id)) })] })] }); }
function b5() { const { id: e } = Pr(), [t, n] = E.useState(); E.useEffect(() => { kw(e).then(i => { n(i); }); }, []); function r(i) { const s = new Date(i), o = s.getFullYear(), a = String(s.getMonth() + 1).padStart(2, "0"), l = String(s.getDate()).padStart(2, "0"); return `${o}-${a}-${l}`; } return c(vr, { children: t ? c("div", { className: "bg-gradient-to-r relative pt-20 from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] flex justify-center min-h-screen", children: b("div", { className: "w-[70%]", children: [b("h3", { className: "text-xl p-3 rounded-t-lg bg-gray-700 mb-0 font-semibold flex items-center justify-center gap-2", children: [c(am, {}), " Information  "] }), c("div", { className: "w-full mx-auto mt-0 rounded-b-lg relative h-fit bg-gray-900 dark:border border-slate-500", children: b("div", { className: "px-10 py-4 flex flex-col", children: [b("div", { className: "studentDetailItem", children: [b("label", { className: "studentDetail", children: [c(Ny, {}), " Name "] }), b("p", { className: "studentDetail", children: [c(Bt, { size: 25 }), " ", t.name] })] }), b("div", { className: "studentDetailItem", children: [b("label", { className: "studentDetail", children: [c(jy, {}), " Educational Qualification "] }), b("p", { className: "studentDetail", children: [c(Bt, { size: 25 }), " ", t.education] })] }), b("div", { className: "studentDetailItem", children: [b("label", { className: "studentDetail", children: [c(Ty, {}), " Mobile "] }), b("p", { className: "studentDetail", children: [" ", c(Bt, { size: 25 }), t.mobile] })] }), b("div", { className: "studentDetailItem", children: [b("label", { className: "studentDetail", children: [c(Uy, {}), " Email "] }), b("p", { className: "studentDetail", children: [" ", c(Bt, { size: 25 }), t.email] })] }), b("div", { className: "studentDetailItem", children: [b("label", { className: "studentDetail", children: [" ", c(Vu, {}), " Course"] }), b("p", { className: "studentDetail", children: [c(Bt, { size: 25 }), " ", t.course] })] }), b("div", { className: "studentDetailItem", children: [b("label", { className: "studentDetail", children: [" ", c(Py, {}), " Date of Entry"] }), b("p", { className: "studentDetail", children: [c(Bt, { size: 25 }), r(t.createdAt)] })] }), b("div", { className: "studentDetailItem", children: [b("label", { className: "studentDetail", children: [" ", c(xy, {}), " Time"] }), b("p", { className: "studentDetail", children: [c(Bt, { size: 25 }), " ", t.time] })] }), b("div", { className: "studentDetailItem", children: [b("label", { className: "studentDetail", children: [c(Oy, {}), " Section"] }), b("p", { className: "studentDetail", children: [c(Bt, { size: 25 }), " ", t.days] })] })] }) })] }) }) : c(hc, {}) }); }
const E5 = () => { const [e, t] = E.useState(!1), [n, r] = E.useState({ location: "", email: "", phone: "" }), i = a => { const { name: l, value: u } = a.target; r(Object.assign(Object.assign({}, n), { [l]: u })); }, s = Re(); return c("div", { className: "min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: e ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Creating..." }) : b("form", { onSubmit: (a) => __awaiter(void 0, void 0, void 0, function* () { a.preventDefault(), t(!0); try {
            yield Ow(n), t(!1), s(-1);
        }
        catch (l) {
            t(!1), alert("An error occurred while creating the contact: " + l.message);
        } }), className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[50%] relative", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Create a New Contact" }), b("div", { className: "flex flex-col justify-between gap-4", children: [c("input", { type: "text", placeholder: "Enter Location", className: "input", name: "location", value: n.location, onChange: i }), c("input", { type: "email", placeholder: "Enter Email", className: "input", name: "email", value: n.email, onChange: i }), c("input", { type: "text", placeholder: "Enter Phone Numbers", className: "input", name: "phone", value: n.phone, onChange: i })] }), c("button", { type: "submit", className: "w-[49%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => s(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); }, C5 = () => { const { id: e } = Pr(), t = Re(), [n, r] = E.useState(!1), [i, s] = E.useState({ location: "", email: "", phone: "" }); E.useEffect(() => { e && Iw(e).then(l => { s(l); }); }, [e]); const o = l => { const { name: u, value: d } = l.target; s(Object.assign(Object.assign({}, i), { [u]: d })); }; return c("div", { className: "min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d]  flex items-center justify-center", children: n ? c("div", { className: "text-2xl tracking-widest font-bold", children: "Updating..." }) : b("form", { onSubmit: (l) => __awaiter(void 0, void 0, void 0, function* () { l.preventDefault(), r(!0); const u = { location: i.location, email: i.email, phone: i.phone }; try {
            yield Pw(e, u), r(!1), t(-1);
        }
        catch (d) {
            r(!1), alert(d), t(-1);
        } }), className: " bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[50%] relative", children: [c("h2", { className: "text-3xl font-semibold text-center text-pink-400", children: "Update Contact" }), b("div", { className: "flex flex-col justify-between gap-4", children: [c("input", { type: "text", placeholder: "Enter Location", className: "input", name: "location", value: i.location, onChange: o }), c("input", { type: "text", placeholder: "Enter Phone Numbers", className: "input", name: "phone", value: i.phone, onChange: o }), c("input", { type: "email", placeholder: "Enter Email", className: "input", name: "email", value: i.email, onChange: o })] }), c("button", { type: "submit", className: "w-[49%] float-right px-6 py-2 text-white rounded bg-[#e93b8c] hover:bg-[#f14b99] ", children: "Submit" }), c("button", { type: "button", onClick: () => t(-1), className: "text-white absolute top-0 left-6", children: c(ht, { size: 30 }) })] }) }); }, _5 = () => { const [e, t] = E.useState({ username: "", password: "" }), n = Re(), [r, i] = E.useState(""), [s, o] = E.useState(!1), a = u => { t(d => (Object.assign(Object.assign({}, d), { [u.target.name]: u.target.value }))); }; return c("div", { className: "h-screen bg-slate-900 flex items-center justify-center", children: s ? c("div", { className: "text-2xl font-bold text-white", children: "Loading..." }) : c("div", { className: "w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8", children: b("form", { className: "space-y-6", action: "#", onSubmit: u => { u.preventDefault(), o(!0), e.username === "nano14" && e.password === "nano071111" ? H.post(`${M.url}/courses/login`, e).then(d => { const f = d.data.token; o(!1), Gu.set("token", f), n("/"), window.location.reload(); }).catch(d => { o(!1), console.log(d); }) : (o(!1), i("Wrong Username or Password!")); }, children: [c("h5", { className: "text-xl font-bold text-center text-pink-600", children: "Sign in to Admin" }), b("div", { children: [c("label", { htmlFor: "username", className: "block mb-2 text-sm font-medium text-gray-900", children: "Your Username" }), c("input", { type: "username", name: "username", id: "username", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", placeholder: "username", required: !0, onChange: a, value: e.username })] }), b("div", { children: [c("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 ", children: "Your Password" }), c("input", { type: "password", name: "password", id: "password", placeholder: "••••••••", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ", required: !0, onChange: a, value: e.password })] }), c("button", { type: "submit", className: "w-full mt-2 text-white hover:bg-[#f14b99] bg-[#e93b8c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center", children: "Login to your account" }), r && c("p", { className: "font-bold text-black", children: r })] }) }) }); };
function Sf(e) { return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object; }
function mc(e = {}, t = {}) { Object.keys(t).forEach(n => { typeof e[n] > "u" ? e[n] = t[n] : Sf(t[n]) && Sf(e[n]) && Object.keys(t[n]).length > 0 && mc(e[n], t[n]); }); }
const O0 = { body: {}, addEventListener() { }, removeEventListener() { }, activeElement: { blur() { }, nodeName: "" }, querySelector() { return null; }, querySelectorAll() { return []; }, getElementById() { return null; }, createEvent() { return { initEvent() { } }; }, createElement() { return { children: [], childNodes: [], style: {}, setAttribute() { }, getElementsByTagName() { return []; } }; }, createElementNS() { return {}; }, importNode() { return null; }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
function Ce() { const e = typeof document < "u" ? document : {}; return mc(e, O0), e; }
const k5 = { document: O0, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() { }, pushState() { }, go() { }, back() { } }, CustomEvent: function () { return this; }, addEventListener() { }, removeEventListener() { }, getComputedStyle() { return { getPropertyValue() { return ""; } }; }, Image() { }, Date() { }, screen: {}, setTimeout() { }, clearTimeout() { }, matchMedia() { return {}; }, requestAnimationFrame(e) { return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0); }, cancelAnimationFrame(e) { typeof setTimeout > "u" || clearTimeout(e); } };
function ge() { const e = typeof window < "u" ? window : {}; return mc(e, k5), e; }
function N5(e) { const t = e.__proto__; Object.defineProperty(e, "__proto__", { get() { return t; }, set(n) { t.__proto__ = n; } }); }
class Xt extends Array {
    constructor(t) { typeof t == "number" ? super(t) : (super(...t || []), N5(this)); }
}
function zi(e = []) { const t = []; return e.forEach(n => { Array.isArray(n) ? t.push(...zi(n)) : t.push(n); }), t; }
function P0(e, t) { return Array.prototype.filter.call(e, t); }
function T5(e) { const t = []; for (let n = 0; n < e.length; n += 1)
    t.indexOf(e[n]) === -1 && t.push(e[n]); return t; }
function I5(e, t) { if (typeof e != "string")
    return [e]; const n = [], r = t.querySelectorAll(e); for (let i = 0; i < r.length; i += 1)
    n.push(r[i]); return n; }
function L(e, t) { const n = ge(), r = Ce(); let i = []; if (!t && e instanceof Xt)
    return e; if (!e)
    return new Xt(i); if (typeof e == "string") {
    const s = e.trim();
    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let o = "div";
        s.indexOf("<li") === 0 && (o = "ul"), s.indexOf("<tr") === 0 && (o = "tbody"), (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (o = "tr"), s.indexOf("<tbody") === 0 && (o = "table"), s.indexOf("<option") === 0 && (o = "select");
        const a = r.createElement(o);
        a.innerHTML = s;
        for (let l = 0; l < a.childNodes.length; l += 1)
            i.push(a.childNodes[l]);
    }
    else
        i = I5(e.trim(), t || r);
}
else if (e.nodeType || e === n || e === r)
    i.push(e);
else if (Array.isArray(e)) {
    if (e instanceof Xt)
        return e;
    i = e;
} return new Xt(T5(i)); }
L.fn = Xt.prototype;
function O5(...e) { const t = zi(e.map(n => n.split(" "))); return this.forEach(n => { n.classList.add(...t); }), this; }
function P5(...e) { const t = zi(e.map(n => n.split(" "))); return this.forEach(n => { n.classList.remove(...t); }), this; }
function R5(...e) { const t = zi(e.map(n => n.split(" "))); this.forEach(n => { t.forEach(r => { n.classList.toggle(r); }); }); }
function L5(...e) { const t = zi(e.map(n => n.split(" "))); return P0(this, n => t.filter(r => n.classList.contains(r)).length > 0).length > 0; }
function A5(e, t) { if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0; for (let n = 0; n < this.length; n += 1)
    if (arguments.length === 2)
        this[n].setAttribute(e, t);
    else
        for (const r in e)
            this[n][r] = e[r], this[n].setAttribute(r, e[r]); return this; }
function M5(e) { for (let t = 0; t < this.length; t += 1)
    this[t].removeAttribute(e); return this; }
function D5(e) { for (let t = 0; t < this.length; t += 1)
    this[t].style.transform = e; return this; }
function z5(e) { for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e; return this; }
function $5(...e) { let [t, n, r, i] = e; typeof e[1] == "function" && ([t, r, i] = e, n = void 0), i || (i = !1); function s(u) { const d = u.target; if (!d)
    return; const f = u.target.dom7EventData || []; if (f.indexOf(u) < 0 && f.unshift(u), L(d).is(n))
    r.apply(d, f);
else {
    const h = L(d).parents();
    for (let w = 0; w < h.length; w += 1)
        L(h[w]).is(n) && r.apply(h[w], f);
} } function o(u) { const d = u && u.target ? u.target.dom7EventData || [] : []; d.indexOf(u) < 0 && d.unshift(u), r.apply(this, d); } const a = t.split(" "); let l; for (let u = 0; u < this.length; u += 1) {
    const d = this[u];
    if (n)
        for (l = 0; l < a.length; l += 1) {
            const f = a[l];
            d.dom7LiveListeners || (d.dom7LiveListeners = {}), d.dom7LiveListeners[f] || (d.dom7LiveListeners[f] = []), d.dom7LiveListeners[f].push({ listener: r, proxyListener: s }), d.addEventListener(f, s, i);
        }
    else
        for (l = 0; l < a.length; l += 1) {
            const f = a[l];
            d.dom7Listeners || (d.dom7Listeners = {}), d.dom7Listeners[f] || (d.dom7Listeners[f] = []), d.dom7Listeners[f].push({ listener: r, proxyListener: o }), d.addEventListener(f, o, i);
        }
} return this; }
function B5(...e) { let [t, n, r, i] = e; typeof e[1] == "function" && ([t, r, i] = e, n = void 0), i || (i = !1); const s = t.split(" "); for (let o = 0; o < s.length; o += 1) {
    const a = s[o];
    for (let l = 0; l < this.length; l += 1) {
        const u = this[l];
        let d;
        if (!n && u.dom7Listeners ? d = u.dom7Listeners[a] : n && u.dom7LiveListeners && (d = u.dom7LiveListeners[a]), d && d.length)
            for (let f = d.length - 1; f >= 0; f -= 1) {
                const h = d[f];
                r && h.listener === r || r && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === r ? (u.removeEventListener(a, h.proxyListener, i), d.splice(f, 1)) : r || (u.removeEventListener(a, h.proxyListener, i), d.splice(f, 1));
            }
    }
} return this; }
function F5(...e) { const t = ge(), n = e[0].split(" "), r = e[1]; for (let i = 0; i < n.length; i += 1) {
    const s = n[i];
    for (let o = 0; o < this.length; o += 1) {
        const a = this[o];
        if (t.CustomEvent) {
            const l = new t.CustomEvent(s, { detail: r, bubbles: !0, cancelable: !0 });
            a.dom7EventData = e.filter((u, d) => d > 0), a.dispatchEvent(l), a.dom7EventData = [], delete a.dom7EventData;
        }
    }
} return this; }
function j5(e) { const t = this; function n(r) { r.target === this && (e.call(this, r), t.off("transitionend", n)); } return e && t.on("transitionend", n), this; }
function U5(e) { if (this.length > 0) {
    if (e) {
        const t = this.styles();
        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
} return null; }
function V5(e) { if (this.length > 0) {
    if (e) {
        const t = this.styles();
        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
} return null; }
function H5() { if (this.length > 0) {
    const e = ge(), t = Ce(), n = this[0], r = n.getBoundingClientRect(), i = t.body, s = n.clientTop || i.clientTop || 0, o = n.clientLeft || i.clientLeft || 0, a = n === e ? e.scrollY : n.scrollTop, l = n === e ? e.scrollX : n.scrollLeft;
    return { top: r.top + a - s, left: r.left + l - o };
} return null; }
function W5() { const e = ge(); return this[0] ? e.getComputedStyle(this[0], null) : {}; }
function G5(e, t) { const n = ge(); let r; if (arguments.length === 1)
    if (typeof e == "string") {
        if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
    }
    else {
        for (r = 0; r < this.length; r += 1)
            for (const i in e)
                this[r].style[i] = e[i];
        return this;
    } if (arguments.length === 2 && typeof e == "string") {
    for (r = 0; r < this.length; r += 1)
        this[r].style[e] = t;
    return this;
} return this; }
function q5(e) { return e ? (this.forEach((t, n) => { e.apply(t, [t, n]); }), this) : this; }
function K5(e) { const t = P0(this, e); return L(t); }
function Y5(e) { if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null; for (let t = 0; t < this.length; t += 1)
    this[t].innerHTML = e; return this; }
function X5(e) { if (typeof e > "u")
    return this[0] ? this[0].textContent.trim() : null; for (let t = 0; t < this.length; t += 1)
    this[t].textContent = e; return this; }
function Q5(e) { const t = ge(), n = Ce(), r = this[0]; let i, s; if (!r || typeof e > "u")
    return !1; if (typeof e == "string") {
    if (r.matches)
        return r.matches(e);
    if (r.webkitMatchesSelector)
        return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector)
        return r.msMatchesSelector(e);
    for (i = L(e), s = 0; s < i.length; s += 1)
        if (i[s] === r)
            return !0;
    return !1;
} if (e === n)
    return r === n; if (e === t)
    return r === t; if (e.nodeType || e instanceof Xt) {
    for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
        if (i[s] === r)
            return !0;
    return !1;
} return !1; }
function J5() { let e = this[0], t; if (e) {
    for (t = 0; (e = e.previousSibling) !== null;)
        e.nodeType === 1 && (t += 1);
    return t;
} }
function Z5(e) { if (typeof e > "u")
    return this; const t = this.length; if (e > t - 1)
    return L([]); if (e < 0) {
    const n = t + e;
    return n < 0 ? L([]) : L([this[n]]);
} return L([this[e]]); }
function eE(...e) { let t; const n = Ce(); for (let r = 0; r < e.length; r += 1) {
    t = e[r];
    for (let i = 0; i < this.length; i += 1)
        if (typeof t == "string") {
            const s = n.createElement("div");
            for (s.innerHTML = t; s.firstChild;)
                this[i].appendChild(s.firstChild);
        }
        else if (t instanceof Xt)
            for (let s = 0; s < t.length; s += 1)
                this[i].appendChild(t[s]);
        else
            this[i].appendChild(t);
} return this; }
function tE(e) { const t = Ce(); let n, r; for (n = 0; n < this.length; n += 1)
    if (typeof e == "string") {
        const i = t.createElement("div");
        for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
            this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
    }
    else if (e instanceof Xt)
        for (r = 0; r < e.length; r += 1)
            this[n].insertBefore(e[r], this[n].childNodes[0]);
    else
        this[n].insertBefore(e, this[n].childNodes[0]); return this; }
function nE(e) { return this.length > 0 ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? L([this[0].nextElementSibling]) : L([]) : this[0].nextElementSibling ? L([this[0].nextElementSibling]) : L([]) : L([]); }
function rE(e) { const t = []; let n = this[0]; if (!n)
    return L([]); for (; n.nextElementSibling;) {
    const r = n.nextElementSibling;
    e ? L(r).is(e) && t.push(r) : t.push(r), n = r;
} return L(t); }
function iE(e) { if (this.length > 0) {
    const t = this[0];
    return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? L([t.previousElementSibling]) : L([]) : t.previousElementSibling ? L([t.previousElementSibling]) : L([]);
} return L([]); }
function sE(e) { const t = []; let n = this[0]; if (!n)
    return L([]); for (; n.previousElementSibling;) {
    const r = n.previousElementSibling;
    e ? L(r).is(e) && t.push(r) : t.push(r), n = r;
} return L(t); }
function oE(e) { const t = []; for (let n = 0; n < this.length; n += 1)
    this[n].parentNode !== null && (e ? L(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode)); return L(t); }
function lE(e) { const t = []; for (let n = 0; n < this.length; n += 1) {
    let r = this[n].parentNode;
    for (; r;)
        e ? L(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
} return L(t); }
function aE(e) { let t = this; return typeof e > "u" ? L([]) : (t.is(e) || (t = t.parents(e).eq(0)), t); }
function uE(e) { const t = []; for (let n = 0; n < this.length; n += 1) {
    const r = this[n].querySelectorAll(e);
    for (let i = 0; i < r.length; i += 1)
        t.push(r[i]);
} return L(t); }
function cE(e) { const t = []; for (let n = 0; n < this.length; n += 1) {
    const r = this[n].children;
    for (let i = 0; i < r.length; i += 1)
        (!e || L(r[i]).is(e)) && t.push(r[i]);
} return L(t); }
function dE() { for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this; }
const bf = { addClass: O5, removeClass: P5, hasClass: L5, toggleClass: R5, attr: A5, removeAttr: M5, transform: D5, transition: z5, on: $5, off: B5, trigger: F5, transitionEnd: j5, outerWidth: U5, outerHeight: V5, styles: W5, offset: H5, css: G5, each: q5, html: Y5, text: X5, is: Q5, index: J5, eq: Z5, append: eE, prepend: tE, next: nE, nextAll: rE, prev: iE, prevAll: sE, parent: oE, parents: lE, closest: aE, find: uE, children: cE, filter: K5, remove: dE };
Object.keys(bf).forEach(e => { Object.defineProperty(L.fn, e, { value: bf[e], writable: !0 }); });
function fE(e) { const t = e; Object.keys(t).forEach(n => { try {
    t[n] = null;
}
catch (_j) { } try {
    delete t[n];
}
catch (_k) { } }); }
function oo(e, t = 0) { return setTimeout(e, t); }
function ki() { return Date.now(); }
function pE(e) { const t = ge(); let n; return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n; }
function hE(e, t = "x") { const n = ge(); let r, i, s; const o = pE(e); return n.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(a => a.replace(",", ".")).join(", ")), s = new n.WebKitCSSMatrix(i === "none" ? "" : i)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = s.toString().split(",")), t === "x" && (n.WebKitCSSMatrix ? i = s.m41 : r.length === 16 ? i = parseFloat(r[12]) : i = parseFloat(r[4])), t === "y" && (n.WebKitCSSMatrix ? i = s.m42 : r.length === 16 ? i = parseFloat(r[13]) : i = parseFloat(r[5])), i || 0; }
function ls(e) { return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"; }
function mE(e) { return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11); }
function Fe(...e) { const t = Object(e[0]), n = ["__proto__", "constructor", "prototype"]; for (let r = 1; r < e.length; r += 1) {
    const i = e[r];
    if (i != null && !mE(i)) {
        const s = Object.keys(Object(i)).filter(o => n.indexOf(o) < 0);
        for (let o = 0, a = s.length; o < a; o += 1) {
            const l = s[o], u = Object.getOwnPropertyDescriptor(i, l);
            u !== void 0 && u.enumerable && (ls(t[l]) && ls(i[l]) ? i[l].__swiper__ ? t[l] = i[l] : Fe(t[l], i[l]) : !ls(t[l]) && ls(i[l]) ? (t[l] = {}, i[l].__swiper__ ? t[l] = i[l] : Fe(t[l], i[l])) : t[l] = i[l]);
        }
    }
} return t; }
function as(e, t, n) { e.style.setProperty(t, n); }
function R0({ swiper: e, targetPosition: t, side: n }) { const r = ge(), i = -e.translate; let s = null, o; const a = e.params.speed; e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID); const l = t > i ? "next" : "prev", u = (f, h) => l === "next" && f >= h || l === "prev" && f <= h, d = () => { o = new Date().getTime(), s === null && (s = o); const f = Math.max(Math.min((o - s) / a, 1), 0), h = .5 - Math.cos(f * Math.PI) / 2; let w = i + h * (t - i); if (u(w, t) && (w = t), e.wrapperEl.scrollTo({ [n]: w }), u(w, t)) {
    e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => { e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({ [n]: w }); }), r.cancelAnimationFrame(e.cssModeFrameID);
    return;
} e.cssModeFrameID = r.requestAnimationFrame(d); }; d(); }
let kl;
function gE() { const e = ge(), t = Ce(); return { smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch), passiveListener: function () { let r = !1; try {
        const i = Object.defineProperty({}, "passive", { get() { r = !0; } });
        e.addEventListener("testPassiveListener", null, i);
    }
    catch (_j) { } return r; }(), gestures: function () { return "ongesturestart" in e; }() }; }
function L0() { return kl || (kl = gE()), kl; }
let Nl;
function vE({ userAgent: e } = {}) { const t = L0(), n = ge(), r = n.navigator.platform, i = e || n.navigator.userAgent, s = { ios: !1, android: !1 }, o = n.screen.width, a = n.screen.height, l = i.match(/(Android);?[\s\/]+([\d.]+)?/); let u = i.match(/(iPad).*OS\s([\d_]+)/); const d = i.match(/(iPod)(.*OS\s([\d_]+))?/), f = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = r === "Win32"; let w = r === "MacIntel"; const m = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"]; return !u && w && t.touch && m.indexOf(`${o}x${a}`) >= 0 && (u = i.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), w = !1), l && !h && (s.os = "android", s.android = !0), (u || f || d) && (s.os = "ios", s.ios = !0), s; }
function yE(e = {}) { return Nl || (Nl = vE(e)), Nl; }
let Tl;
function wE() { const e = ge(); function t() { const n = e.navigator.userAgent.toLowerCase(); return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0; } return { isSafari: t(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) }; }
function xE() { return Tl || (Tl = wE()), Tl; }
function SE({ swiper: e, on: t, emit: n }) { const r = ge(); let i = null, s = null; const o = () => { !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize")); }, a = () => { !e || e.destroyed || !e.initialized || (i = new ResizeObserver(d => { s = r.requestAnimationFrame(() => { const { width: f, height: h } = e; let w = f, m = h; d.forEach(({ contentBoxSize: g, contentRect: x, target: p }) => { p && p !== e.el || (w = x ? x.width : (g[0] || g).inlineSize, m = x ? x.height : (g[0] || g).blockSize); }), (w !== f || m !== h) && o(); }); }), i.observe(e.el)); }, l = () => { s && r.cancelAnimationFrame(s), i && i.unobserve && e.el && (i.unobserve(e.el), i = null); }, u = () => { !e || e.destroyed || !e.initialized || n("orientationchange"); }; t("init", () => { if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
    a();
    return;
} r.addEventListener("resize", o), r.addEventListener("orientationchange", u); }), t("destroy", () => { l(), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", u); }); }
function bE({ swiper: e, extendParams: t, on: n, emit: r }) { const i = [], s = ge(), o = (u, d = {}) => { const f = s.MutationObserver || s.WebkitMutationObserver, h = new f(w => { if (w.length === 1) {
    r("observerUpdate", w[0]);
    return;
} const m = function () { r("observerUpdate", w[0]); }; s.requestAnimationFrame ? s.requestAnimationFrame(m) : s.setTimeout(m, 0); }); h.observe(u, { attributes: typeof d.attributes > "u" ? !0 : d.attributes, childList: typeof d.childList > "u" ? !0 : d.childList, characterData: typeof d.characterData > "u" ? !0 : d.characterData }), i.push(h); }, a = () => { if (e.params.observer) {
    if (e.params.observeParents) {
        const u = e.$el.parents();
        for (let d = 0; d < u.length; d += 1)
            o(u[d]);
    }
    o(e.$el[0], { childList: e.params.observeSlideChildren }), o(e.$wrapperEl[0], { attributes: !1 });
} }, l = () => { i.forEach(u => { u.disconnect(); }), i.splice(0, i.length); }; t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), n("init", a), n("destroy", l); }
const EE = { on(e, t, n) { const r = this; if (!r.eventsListeners || r.destroyed || typeof t != "function")
        return r; const i = n ? "unshift" : "push"; return e.split(" ").forEach(s => { r.eventsListeners[s] || (r.eventsListeners[s] = []), r.eventsListeners[s][i](t); }), r; }, once(e, t, n) { const r = this; if (!r.eventsListeners || r.destroyed || typeof t != "function")
        return r; function i(...s) { r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, s); } return i.__emitterProxy = t, r.on(e, i, n); }, onAny(e, t) { const n = this; if (!n.eventsListeners || n.destroyed || typeof e != "function")
        return n; const r = t ? "unshift" : "push"; return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n; }, offAny(e) { const t = this; if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
        return t; const n = t.eventsAnyListeners.indexOf(e); return n >= 0 && t.eventsAnyListeners.splice(n, 1), t; }, off(e, t) { const n = this; return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach(r => { typeof t > "u" ? n.eventsListeners[r] = [] : n.eventsListeners[r] && n.eventsListeners[r].forEach((i, s) => { (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[r].splice(s, 1); }); }), n; }, emit(...e) { const t = this; if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
        return t; let n, r, i; return typeof e[0] == "string" || Array.isArray(e[0]) ? (n = e[0], r = e.slice(1, e.length), i = t) : (n = e[0].events, r = e[0].data, i = e[0].context || t), r.unshift(i), (Array.isArray(n) ? n : n.split(" ")).forEach(o => { t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(a => { a.apply(i, [o, ...r]); }), t.eventsListeners && t.eventsListeners[o] && t.eventsListeners[o].forEach(a => { a.apply(i, r); }); }), t; } };
function CE() { const e = this; let t, n; const r = e.$el; typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = r[0].clientWidth, typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = r[0].clientHeight, !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n })); }
function _E() { const e = this; function t(I) { return e.isHorizontal() ? I : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[I]; } function n(I, D) { return parseFloat(I.getPropertyValue(t(D)) || 0); } const r = e.params, { $wrapperEl: i, size: s, rtlTranslate: o, wrongRTL: a } = e, l = e.virtual && r.virtual.enabled, u = l ? e.virtual.slides.length : e.slides.length, d = i.children(`.${e.params.slideClass}`), f = l ? e.virtual.slides.length : d.length; let h = []; const w = [], m = []; let g = r.slidesOffsetBefore; typeof g == "function" && (g = r.slidesOffsetBefore.call(e)); let x = r.slidesOffsetAfter; typeof x == "function" && (x = r.slidesOffsetAfter.call(e)); const p = e.snapGrid.length, v = e.slidesGrid.length; let y = r.spaceBetween, S = -g, C = 0, k = 0; if (typeof s > "u")
    return; typeof y == "string" && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), e.virtualSize = -y, o ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : d.css({ marginRight: "", marginBottom: "", marginTop: "" }), r.centeredSlides && r.cssMode && (as(e.wrapperEl, "--swiper-centered-offset-before", ""), as(e.wrapperEl, "--swiper-centered-offset-after", "")); const O = r.grid && r.grid.rows > 1 && e.grid; O && e.grid.initSlides(f); let T; const G = r.slidesPerView === "auto" && r.breakpoints && Object.keys(r.breakpoints).filter(I => typeof r.breakpoints[I].slidesPerView < "u").length > 0; for (let I = 0; I < f; I += 1) {
    T = 0;
    const D = d.eq(I);
    if (O && e.grid.updateSlide(I, D, f, t), D.css("display") !== "none") {
        if (r.slidesPerView === "auto") {
            G && (d[I].style[t("width")] = "");
            const $ = getComputedStyle(D[0]), pe = D[0].style.transform, Ct = D[0].style.webkitTransform;
            if (pe && (D[0].style.transform = "none"), Ct && (D[0].style.webkitTransform = "none"), r.roundLengths)
                T = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
            else {
                const xn = n($, "width"), Sn = n($, "padding-left"), bn = n($, "padding-right"), P = n($, "margin-left"), A = n($, "margin-right"), z = $.getPropertyValue("box-sizing");
                if (z && z === "border-box")
                    T = xn + P + A;
                else {
                    const { clientWidth: J, offsetWidth: oe } = D[0];
                    T = xn + Sn + bn + P + A + (oe - J);
                }
            }
            pe && (D[0].style.transform = pe), Ct && (D[0].style.webkitTransform = Ct), r.roundLengths && (T = Math.floor(T));
        }
        else
            T = (s - (r.slidesPerView - 1) * y) / r.slidesPerView, r.roundLengths && (T = Math.floor(T)), d[I] && (d[I].style[t("width")] = `${T}px`);
        d[I] && (d[I].swiperSlideSize = T), m.push(T), r.centeredSlides ? (S = S + T / 2 + C / 2 + y, C === 0 && I !== 0 && (S = S - s / 2 - y), I === 0 && (S = S - s / 2 - y), Math.abs(S) < 1 / 1e3 && (S = 0), r.roundLengths && (S = Math.floor(S)), k % r.slidesPerGroup === 0 && h.push(S), w.push(S)) : (r.roundLengths && (S = Math.floor(S)), (k - Math.min(e.params.slidesPerGroupSkip, k)) % e.params.slidesPerGroup === 0 && h.push(S), w.push(S), S = S + T + y), e.virtualSize += T + y, C = T, k += 1;
    }
} if (e.virtualSize = Math.max(e.virtualSize, s) + x, o && a && (r.effect === "slide" || r.effect === "coverflow") && i.css({ width: `${e.virtualSize + r.spaceBetween}px` }), r.setWrapperSize && i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }), O && e.grid.updateWrapperSize(T, h, t), !r.centeredSlides) {
    const I = [];
    for (let D = 0; D < h.length; D += 1) {
        let $ = h[D];
        r.roundLengths && ($ = Math.floor($)), h[D] <= e.virtualSize - s && I.push($);
    }
    h = I, Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - s);
} if (h.length === 0 && (h = [0]), r.spaceBetween !== 0) {
    const I = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
    d.filter((D, $) => r.cssMode ? $ !== d.length - 1 : !0).css({ [I]: `${y}px` });
} if (r.centeredSlides && r.centeredSlidesBounds) {
    let I = 0;
    m.forEach($ => { I += $ + (r.spaceBetween ? r.spaceBetween : 0); }), I -= r.spaceBetween;
    const D = I - s;
    h = h.map($ => $ < 0 ? -g : $ > D ? D + x : $);
} if (r.centerInsufficientSlides) {
    let I = 0;
    if (m.forEach(D => { I += D + (r.spaceBetween ? r.spaceBetween : 0); }), I -= r.spaceBetween, I < s) {
        const D = (s - I) / 2;
        h.forEach(($, pe) => { h[pe] = $ - D; }), w.forEach(($, pe) => { w[pe] = $ + D; });
    }
} if (Object.assign(e, { slides: d, snapGrid: h, slidesGrid: w, slidesSizesGrid: m }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
    as(e.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`), as(e.wrapperEl, "--swiper-centered-offset-after", `${e.size / 2 - m[m.length - 1] / 2}px`);
    const I = -e.snapGrid[0], D = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map($ => $ + I), e.slidesGrid = e.slidesGrid.map($ => $ + D);
} if (f !== u && e.emit("slidesLengthChange"), h.length !== p && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), w.length !== v && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), !l && !r.cssMode && (r.effect === "slide" || r.effect === "fade")) {
    const I = `${r.containerModifierClass}backface-hidden`, D = e.$el.hasClass(I);
    f <= r.maxBackfaceHiddenSlides ? D || e.$el.addClass(I) : D && e.$el.removeClass(I);
} }
function kE(e) { const t = this, n = [], r = t.virtual && t.params.virtual.enabled; let i = 0, s; typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed); const o = a => r ? t.slides.filter(l => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === a)[0] : t.slides.eq(a)[0]; if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
        (t.visibleSlides || L([])).each(a => { n.push(a); });
    else
        for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
            const a = t.activeIndex + s;
            if (a > t.slides.length && !r)
                break;
            n.push(o(a));
        }
else
    n.push(o(t.activeIndex)); for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
        const a = n[s].offsetHeight;
        i = a > i ? a : i;
    } (i || i === 0) && t.$wrapperEl.css("height", `${i}px`); }
function NE() { const e = this, t = e.slides; for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop; }
function TE(e = this && this.translate || 0) { const t = this, n = t.params, { slides: r, rtlTranslate: i, snapGrid: s } = t; if (r.length === 0)
    return; typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset(); let o = -e; i && (o = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = []; for (let a = 0; a < r.length; a += 1) {
    const l = r[a];
    let u = l.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
    const d = (o + (n.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + n.spaceBetween), f = (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + n.spaceBetween), h = -(o - u), w = h + t.slidesSizesGrid[a];
    (h >= 0 && h < t.size - 1 || w > 1 && w <= t.size || h <= 0 && w >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(a), r.eq(a).addClass(n.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -f : f;
} t.visibleSlides = L(t.visibleSlides); }
function IE(e) { const t = this; if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * u || 0;
} const n = t.params, r = t.maxTranslate() - t.minTranslate(); let { progress: i, isBeginning: s, isEnd: o } = t; const a = s, l = o; r === 0 ? (i = 0, s = !0, o = !0) : (i = (e - t.minTranslate()) / r, s = i <= 0, o = i >= 1), Object.assign(t, { progress: i, isBeginning: s, isEnd: o }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !s || l && !o) && t.emit("fromEdge"), t.emit("progress", i); }
function OE() { const e = this, { slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: s } = e, o = e.virtual && n.virtual.enabled; t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`); let a; o ? a = e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : a = t.eq(i), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass)); let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass); n.loop && l.length === 0 && (l = t.eq(0), l.addClass(n.slideNextClass)); let u = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass); n.loop && u.length === 0 && (u = t.eq(-1), u.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), u.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses(); }
function PE(e) { const t = this, n = t.rtlTranslate ? t.translate : -t.translate, { slidesGrid: r, snapGrid: i, params: s, activeIndex: o, realIndex: a, snapIndex: l } = t; let u = e, d; if (typeof u > "u") {
    for (let h = 0; h < r.length; h += 1)
        typeof r[h + 1] < "u" ? n >= r[h] && n < r[h + 1] - (r[h + 1] - r[h]) / 2 ? u = h : n >= r[h] && n < r[h + 1] && (u = h + 1) : n >= r[h] && (u = h);
    s.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
} if (i.indexOf(n) >= 0)
    d = i.indexOf(n);
else {
    const h = Math.min(s.slidesPerGroupSkip, u);
    d = h + Math.floor((u - h) / s.slidesPerGroup);
} if (d >= i.length && (d = i.length - 1), u === o) {
    d !== l && (t.snapIndex = d, t.emit("snapIndexChange"));
    return;
} const f = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10); Object.assign(t, { snapIndex: d, realIndex: f, previousIndex: o, activeIndex: u }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== f && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange"); }
function RE(e) { const t = this, n = t.params, r = L(e).closest(`.${n.slideClass}`)[0]; let i = !1, s; if (r) {
    for (let o = 0; o < t.slides.length; o += 1)
        if (t.slides[o] === r) {
            i = !0, s = o;
            break;
        }
} if (r && i)
    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s;
else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
} n.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide(); }
const LE = { updateSize: CE, updateSlides: _E, updateAutoHeight: kE, updateSlidesOffset: NE, updateSlidesProgress: TE, updateProgress: IE, updateSlidesClasses: OE, updateActiveIndex: PE, updateClickedSlide: RE };
function AE(e = this.isHorizontal() ? "x" : "y") { const t = this, { params: n, rtlTranslate: r, translate: i, $wrapperEl: s } = t; if (n.virtualTranslate)
    return r ? -i : i; if (n.cssMode)
    return i; let o = hE(s[0], e); return r && (o = -o), o || 0; }
function ME(e, t) { const n = this, { rtlTranslate: r, params: i, $wrapperEl: s, wrapperEl: o, progress: a } = n; let l = 0, u = 0; const d = 0; n.isHorizontal() ? l = r ? -e : e : u = e, i.roundLengths && (l = Math.floor(l), u = Math.floor(u)), i.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -u : i.virtualTranslate || s.transform(`translate3d(${l}px, ${u}px, ${d}px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : u; let f; const h = n.maxTranslate() - n.minTranslate(); h === 0 ? f = 0 : f = (e - n.minTranslate()) / h, f !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t); }
function DE() { return -this.snapGrid[0]; }
function zE() { return -this.snapGrid[this.snapGrid.length - 1]; }
function $E(e = 0, t = this.params.speed, n = !0, r = !0, i) { const s = this, { params: o, wrapperEl: a } = s; if (s.animating && o.preventInteractionOnTransition)
    return !1; const l = s.minTranslate(), u = s.maxTranslate(); let d; if (r && e > l ? d = l : r && e < u ? d = u : d = e, s.updateProgress(d), o.cssMode) {
    const f = s.isHorizontal();
    if (t === 0)
        a[f ? "scrollLeft" : "scrollTop"] = -d;
    else {
        if (!s.support.smoothScroll)
            return R0({ swiper: s, targetPosition: -d, side: f ? "left" : "top" }), !0;
        a.scrollTo({ [f ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
} return t === 0 ? (s.setTransition(0), s.setTranslate(d), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(d), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (h) { !s || s.destroyed || h.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, n && s.emit("transitionEnd")); }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0; }
const BE = { getTranslate: AE, setTranslate: ME, minTranslate: DE, maxTranslate: zE, translateTo: $E };
function FE(e, t) { const n = this; n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t); }
function A0({ swiper: e, runCallbacks: t, direction: n, step: r }) { const { activeIndex: i, previousIndex: s } = e; let o = n; if (o || (i > s ? o = "next" : i < s ? o = "prev" : o = "reset"), e.emit(`transition${r}`), t && i !== s) {
    if (o === "reset") {
        e.emit(`slideResetTransition${r}`);
        return;
    }
    e.emit(`slideChangeTransition${r}`), o === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`);
} }
function jE(e = !0, t) { const n = this, { params: r } = n; r.cssMode || (r.autoHeight && n.updateAutoHeight(), A0({ swiper: n, runCallbacks: e, direction: t, step: "Start" })); }
function UE(e = !0, t) { const n = this, { params: r } = n; n.animating = !1, !r.cssMode && (n.setTransition(0), A0({ swiper: n, runCallbacks: e, direction: t, step: "End" })); }
const VE = { setTransition: FE, transitionStart: jE, transitionEnd: UE };
function HE(e = 0, t = this.params.speed, n = !0, r, i) { if (typeof e != "number" && typeof e != "string")
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`); if (typeof e == "string") {
    const y = parseInt(e, 10);
    if (!isFinite(y))
        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
    e = y;
} const s = this; let o = e; o < 0 && (o = 0); const { params: a, snapGrid: l, slidesGrid: u, previousIndex: d, activeIndex: f, rtlTranslate: h, wrapperEl: w, enabled: m } = s; if (s.animating && a.preventInteractionOnTransition || !m && !r && !i)
    return !1; const g = Math.min(s.params.slidesPerGroupSkip, o); let x = g + Math.floor((o - g) / s.params.slidesPerGroup); x >= l.length && (x = l.length - 1); const p = -l[x]; if (a.normalizeSlideIndex)
    for (let y = 0; y < u.length; y += 1) {
        const S = -Math.floor(p * 100), C = Math.floor(u[y] * 100), k = Math.floor(u[y + 1] * 100);
        typeof u[y + 1] < "u" ? S >= C && S < k - (k - C) / 2 ? o = y : S >= C && S < k && (o = y + 1) : S >= C && (o = y);
    } if (s.initialized && o !== f && (!s.allowSlideNext && p < s.translate && p < s.minTranslate() || !s.allowSlidePrev && p > s.translate && p > s.maxTranslate() && (f || 0) !== o))
    return !1; o !== (d || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(p); let v; if (o > f ? v = "next" : o < f ? v = "prev" : v = "reset", h && -p === s.translate || !h && p === s.translate)
    return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), a.effect !== "slide" && s.setTranslate(p), v !== "reset" && (s.transitionStart(n, v), s.transitionEnd(n, v)), !1; if (a.cssMode) {
    const y = s.isHorizontal(), S = h ? p : -p;
    if (t === 0) {
        const C = s.virtual && s.params.virtual.enabled;
        C && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), w[y ? "scrollLeft" : "scrollTop"] = S, C && requestAnimationFrame(() => { s.wrapperEl.style.scrollSnapType = "", s._swiperImmediateVirtual = !1; });
    }
    else {
        if (!s.support.smoothScroll)
            return R0({ swiper: s, targetPosition: S, side: y ? "left" : "top" }), !0;
        w.scrollTo({ [y ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
} return s.setTransition(t), s.setTranslate(p), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, r), s.transitionStart(n, v), t === 0 ? s.transitionEnd(n, v) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (S) { !s || s.destroyed || S.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, v)); }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)), !0; }
function WE(e = 0, t = this.params.speed, n = !0, r) { if (typeof e == "string") {
    const o = parseInt(e, 10);
    if (!isFinite(o))
        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
    e = o;
} const i = this; let s = e; return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r); }
function GE(e = this.params.speed, t = !0, n) { const r = this, { animating: i, enabled: s, params: o } = r; if (!s)
    return r; let a = o.slidesPerGroup; o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1)); const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a; if (o.loop) {
    if (i && o.loopPreventsSlide)
        return !1;
    r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft;
} return o.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n); }
function qE(e = this.params.speed, t = !0, n) { const r = this, { params: i, animating: s, snapGrid: o, slidesGrid: a, rtlTranslate: l, enabled: u } = r; if (!u)
    return r; if (i.loop) {
    if (s && i.loopPreventsSlide)
        return !1;
    r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft;
} const d = l ? r.translate : -r.translate; function f(x) { return x < 0 ? -Math.floor(Math.abs(x)) : Math.floor(x); } const h = f(d), w = o.map(x => f(x)); let m = o[w.indexOf(h) - 1]; if (typeof m > "u" && i.cssMode) {
    let x;
    o.forEach((p, v) => { h >= p && (x = v); }), typeof x < "u" && (m = o[x > 0 ? x - 1 : x]);
} let g = 0; if (typeof m < "u" && (g = a.indexOf(m), g < 0 && (g = r.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (g = g - r.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), i.rewind && r.isBeginning) {
    const x = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
    return r.slideTo(x, e, t, n);
} return r.slideTo(g, e, t, n); }
function KE(e = this.params.speed, t = !0, n) { const r = this; return r.slideTo(r.activeIndex, e, t, n); }
function YE(e = this.params.speed, t = !0, n, r = .5) { const i = this; let s = i.activeIndex; const o = Math.min(i.params.slidesPerGroupSkip, s), a = o + Math.floor((s - o) / i.params.slidesPerGroup), l = i.rtlTranslate ? i.translate : -i.translate; if (l >= i.snapGrid[a]) {
    const u = i.snapGrid[a], d = i.snapGrid[a + 1];
    l - u > (d - u) * r && (s += i.params.slidesPerGroup);
}
else {
    const u = i.snapGrid[a - 1], d = i.snapGrid[a];
    l - u <= (d - u) * r && (s -= i.params.slidesPerGroup);
} return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, n); }
function XE() { const e = this, { params: t, $wrapperEl: n } = e, r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView; let i = e.clickedIndex, s; if (t.loop) {
    if (e.animating)
        return;
    s = parseInt(L(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), i = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), oo(() => { e.slideTo(i); })) : e.slideTo(i) : i > e.slides.length - r ? (e.loopFix(), i = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), oo(() => { e.slideTo(i); })) : e.slideTo(i);
}
else
    e.slideTo(i); }
const QE = { slideTo: HE, slideToLoop: WE, slideNext: GE, slidePrev: qE, slideReset: KE, slideToClosest: YE, slideToClickedSlide: XE };
function JE() { const e = this, t = Ce(), { params: n, $wrapperEl: r } = e, i = r.children().length > 0 ? L(r.children()[0].parentNode) : r; i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove(); let s = i.children(`.${n.slideClass}`); if (n.loopFillGroupWithBlank) {
    const l = n.slidesPerGroup - s.length % n.slidesPerGroup;
    if (l !== n.slidesPerGroup) {
        for (let u = 0; u < l; u += 1) {
            const d = L(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
            i.append(d);
        }
        s = i.children(`.${n.slideClass}`);
    }
} n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > s.length && e.params.loopedSlidesLimit && (e.loopedSlides = s.length); const o = [], a = []; s.each((l, u) => { L(l).attr("data-swiper-slide-index", u); }); for (let l = 0; l < e.loopedSlides; l += 1) {
    const u = l - Math.floor(l / s.length) * s.length;
    a.push(s.eq(u)[0]), o.unshift(s.eq(s.length - u - 1)[0]);
} for (let l = 0; l < a.length; l += 1)
    i.append(L(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass)); for (let l = o.length - 1; l >= 0; l -= 1)
    i.prepend(L(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass)); }
function ZE() { const e = this; e.emit("beforeLoopFix"); const { activeIndex: t, slides: n, loopedSlides: r, allowSlidePrev: i, allowSlideNext: s, snapGrid: o, rtlTranslate: a } = e; let l; e.allowSlidePrev = !0, e.allowSlideNext = !0; const d = -o[t] - e.getTranslate(); t < r ? (l = n.length - r * 3 + t, l += r, e.slideTo(l, 0, !1, !0) && d !== 0 && e.setTranslate((a ? -e.translate : e.translate) - d)) : t >= n.length - r && (l = -n.length + t + r, l += r, e.slideTo(l, 0, !1, !0) && d !== 0 && e.setTranslate((a ? -e.translate : e.translate) - d)), e.allowSlidePrev = i, e.allowSlideNext = s, e.emit("loopFix"); }
function e3() { const e = this, { $wrapperEl: t, params: n, slides: r } = e; t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(), r.removeAttr("data-swiper-slide-index"); }
const t3 = { loopCreate: JE, loopFix: ZE, loopDestroy: e3 };
function n3(e) { const t = this; if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
    return; const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl; n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab"; }
function r3() { const e = this; e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = ""); }
const i3 = { setGrabCursor: n3, unsetGrabCursor: r3 };
function s3(e, t = this) { function n(r) { if (!r || r === Ce() || r === ge())
    return null; r.assignedSlot && (r = r.assignedSlot); const i = r.closest(e); return !i && !r.getRootNode ? null : i || n(r.getRootNode().host); } return n(t); }
function o3(e) { const t = this, n = Ce(), r = ge(), i = t.touchEventsData, { params: s, touches: o, enabled: a } = t; if (!a || t.animating && s.preventInteractionOnTransition)
    return; !t.animating && s.cssMode && s.loop && t.loopFix(); let l = e; l.originalEvent && (l = l.originalEvent); let u = L(l.target); if (s.touchEventsTarget === "wrapper" && !u.closest(t.wrapperEl).length || (i.isTouchEvent = l.type === "touchstart", !i.isTouchEvent && "which" in l && l.which === 3) || !i.isTouchEvent && "button" in l && l.button > 0 || i.isTouched && i.isMoved)
    return; const d = !!s.noSwipingClass && s.noSwipingClass !== "", f = e.composedPath ? e.composedPath() : e.path; d && l.target && l.target.shadowRoot && f && (u = L(f[0])); const h = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, w = !!(l.target && l.target.shadowRoot); if (s.noSwiping && (w ? s3(h, u[0]) : u.closest(h)[0])) {
    t.allowClick = !0;
    return;
} if (s.swipeHandler && !u.closest(s.swipeHandler)[0])
    return; o.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX, o.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY; const m = o.currentX, g = o.currentY, x = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection, p = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold; if (x && (m <= p || m >= r.innerWidth - p))
    if (x === "prevent")
        e.preventDefault();
    else
        return; if (Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), o.startX = m, o.startY = g, i.touchStartTime = ki(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), l.type !== "touchstart") {
    let v = !0;
    u.is(i.focusableElements) && (v = !1, u[0].nodeName === "SELECT" && (i.isTouched = !1)), n.activeElement && L(n.activeElement).is(i.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
    const y = v && t.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || y) && !u[0].isContentEditable && l.preventDefault();
} t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l); }
function l3(e) { const t = Ce(), n = this, r = n.touchEventsData, { params: i, touches: s, rtlTranslate: o, enabled: a } = n; if (!a)
    return; let l = e; if (l.originalEvent && (l = l.originalEvent), !r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
    return;
} if (r.isTouchEvent && l.type !== "touchmove")
    return; const u = l.type === "touchmove" && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]), d = l.type === "touchmove" ? u.pageX : l.pageX, f = l.type === "touchmove" ? u.pageY : l.pageY; if (l.preventedByNestedSwiper) {
    s.startX = d, s.startY = f;
    return;
} if (!n.allowTouchMove) {
    L(l.target).is(r.focusableElements) || (n.allowClick = !1), r.isTouched && (Object.assign(s, { startX: d, startY: f, currentX: d, currentY: f }), r.touchStartTime = ki());
    return;
} if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
        if (f < s.startY && n.translate <= n.maxTranslate() || f > s.startY && n.translate >= n.minTranslate()) {
            r.isTouched = !1, r.isMoved = !1;
            return;
        }
    }
    else if (d < s.startX && n.translate <= n.maxTranslate() || d > s.startX && n.translate >= n.minTranslate())
        return;
} if (r.isTouchEvent && t.activeElement && l.target === t.activeElement && L(l.target).is(r.focusableElements)) {
    r.isMoved = !0, n.allowClick = !1;
    return;
} if (r.allowTouchCallbacks && n.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1)
    return; s.currentX = d, s.currentY = f; const h = s.currentX - s.startX, w = s.currentY - s.startY; if (n.params.threshold && Math.sqrt(h ** 2 + w ** 2) < n.params.threshold)
    return; if (typeof r.isScrolling > "u") {
    let p;
    n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : h * h + w * w >= 25 && (p = Math.atan2(Math.abs(w), Math.abs(h)) * 180 / Math.PI, r.isScrolling = n.isHorizontal() ? p > i.touchAngle : 90 - p > i.touchAngle);
} if (r.isScrolling && n.emit("touchMoveOpposite", l), typeof r.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (r.startMoving = !0), r.isScrolling) {
    r.isTouched = !1;
    return;
} if (!r.startMoving)
    return; n.allowClick = !1, !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation(), r.isMoved || (i.loop && !i.cssMode && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), r.isMoved = !0; let m = n.isHorizontal() ? h : w; s.diff = m, m *= i.touchRatio, o && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", r.currentTranslate = m + r.startTranslate; let g = !0, x = i.resistanceRatio; if (i.touchReleaseOnEdges && (x = 0), m > 0 && r.currentTranslate > n.minTranslate() ? (g = !1, i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + m) ** x)) : m < 0 && r.currentTranslate < n.maxTranslate() && (g = !1, i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - m) ** x)), g && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && n.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && n.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate), i.threshold > 0)
    if (Math.abs(m) > i.threshold || r.allowThresholdMove) {
        if (!r.allowThresholdMove) {
            r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
            return;
        }
    }
    else {
        r.currentTranslate = r.startTranslate;
        return;
    } !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate)); }
function a3(e) { const t = this, n = t.touchEventsData, { params: r, touches: i, rtlTranslate: s, slidesGrid: o, enabled: a } = t; if (!a)
    return; let l = e; if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) {
    n.isMoved && r.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, n.startMoving = !1;
    return;
} r.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1); const u = ki(), d = u - n.touchStartTime; if (t.allowClick) {
    const v = l.path || l.composedPath && l.composedPath();
    t.updateClickedSlide(v && v[0] || l.target), t.emit("tap click", l), d < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l);
} if (n.lastClickTime = ki(), oo(() => { t.destroyed || (t.allowClick = !0); }), !n.isTouched || !n.isMoved || !t.swipeDirection || i.diff === 0 || n.currentTranslate === n.startTranslate) {
    n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
    return;
} n.isTouched = !1, n.isMoved = !1, n.startMoving = !1; let f; if (r.followFinger ? f = s ? t.translate : -t.translate : f = -n.currentTranslate, r.cssMode)
    return; if (t.params.freeMode && r.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: f });
    return;
} let h = 0, w = t.slidesSizesGrid[0]; for (let v = 0; v < o.length; v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
    const y = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof o[v + y] < "u" ? f >= o[v] && f < o[v + y] && (h = v, w = o[v + y] - o[v]) : f >= o[v] && (h = v, w = o[o.length - 1] - o[o.length - 2]);
} let m = null, g = null; r.rewind && (t.isBeginning ? g = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0)); const x = (f - o[h]) / w, p = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup; if (d > r.longSwipesMs) {
    if (!r.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
    }
    t.swipeDirection === "next" && (x >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? m : h + p) : t.slideTo(h)), t.swipeDirection === "prev" && (x > 1 - r.longSwipesRatio ? t.slideTo(h + p) : g !== null && x < 0 && Math.abs(x) > r.longSwipesRatio ? t.slideTo(g) : t.slideTo(h));
}
else {
    if (!r.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
    }
    t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(h + p) : t.slideTo(h) : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : h + p), t.swipeDirection === "prev" && t.slideTo(g !== null ? g : h));
} }
function Ef() { const e = this, { params: t, el: n } = e; if (n && n.offsetWidth === 0)
    return; t.breakpoints && e.setBreakpoint(); const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e; e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow(); }
function u3(e) { const t = this; t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))); }
function c3() { const e = this, { wrapperEl: t, rtlTranslate: n, enabled: r } = e; if (!r)
    return; e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(); let i; const s = e.maxTranslate() - e.minTranslate(); s === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1); }
let Cf = !1;
function d3() { }
const M0 = (e, t) => { const n = Ce(), { params: r, touchEvents: i, el: s, wrapperEl: o, device: a, support: l } = e, u = !!r.nested, d = t === "on" ? "addEventListener" : "removeEventListener", f = t; if (!l.touch)
    s[d](i.start, e.onTouchStart, !1), n[d](i.move, e.onTouchMove, u), n[d](i.end, e.onTouchEnd, !1);
else {
    const h = i.start === "touchstart" && l.passiveListener && r.passiveListeners ? { passive: !0, capture: !1 } : !1;
    s[d](i.start, e.onTouchStart, h), s[d](i.move, e.onTouchMove, l.passiveListener ? { passive: !1, capture: u } : u), s[d](i.end, e.onTouchEnd, h), i.cancel && s[d](i.cancel, e.onTouchEnd, h);
} (r.preventClicks || r.preventClicksPropagation) && s[d]("click", e.onClick, !0), r.cssMode && o[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[f](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ef, !0) : e[f]("observerUpdate", Ef, !0); };
function f3() { const e = this, t = Ce(), { params: n, support: r } = e; e.onTouchStart = o3.bind(e), e.onTouchMove = l3.bind(e), e.onTouchEnd = a3.bind(e), n.cssMode && (e.onScroll = c3.bind(e)), e.onClick = u3.bind(e), r.touch && !Cf && (t.addEventListener("touchstart", d3), Cf = !0), M0(e, "on"); }
function p3() { M0(this, "off"); }
const h3 = { attachEvents: f3, detachEvents: p3 }, _f = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function m3() { const e = this, { activeIndex: t, initialized: n, loopedSlides: r = 0, params: i, $el: s } = e, o = i.breakpoints; if (!o || o && Object.keys(o).length === 0)
    return; const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el); if (!a || e.currentBreakpoint === a)
    return; const u = (a in o ? o[a] : void 0) || e.originalParams, d = _f(e, i), f = _f(e, u), h = i.enabled; d && !f ? (s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && f && (s.addClass(`${i.containerModifierClass}grid`), (u.grid.fill && u.grid.fill === "column" || !u.grid.fill && i.grid.fill === "column") && s.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(x => { const p = i[x] && i[x].enabled, v = u[x] && u[x].enabled; p && !v && e[x].disable(), !p && v && e[x].enable(); }); const w = u.direction && u.direction !== i.direction, m = i.loop && (u.slidesPerView !== i.slidesPerView || w); w && n && e.changeDirection(), Fe(e.params, u); const g = e.params.enabled; Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), h && !g ? e.disable() : !h && g && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", u), m && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", u); }
function g3(e, t = "window", n) { if (!e || t === "container" && !n)
    return; let r = !1; const i = ge(), s = t === "window" ? i.innerHeight : n.clientHeight, o = Object.keys(e).map(a => { if (typeof a == "string" && a.indexOf("@") === 0) {
    const l = parseFloat(a.substr(1));
    return { value: s * l, point: a };
} return { value: a, point: a }; }); o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10)); for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: u } = o[a];
    t === "window" ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = l) : u <= n.clientWidth && (r = l);
} return r || "max"; }
const v3 = { setBreakpoint: m3, getBreakpoint: g3 };
function y3(e, t) { const n = []; return e.forEach(r => { typeof r == "object" ? Object.keys(r).forEach(i => { r[i] && n.push(t + i); }) : typeof r == "string" && n.push(t + r); }), n; }
function w3() { const e = this, { classNames: t, params: n, rtl: r, $el: i, device: s, support: o } = e, a = y3(["initialized", n.direction, { "pointer-events": !o.touch }, { "free-mode": e.params.freeMode && n.freeMode.enabled }, { autoheight: n.autoHeight }, { rtl: r }, { grid: n.grid && n.grid.rows > 1 }, { "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column" }, { android: s.android }, { ios: s.ios }, { "css-mode": n.cssMode }, { centered: n.cssMode && n.centeredSlides }, { "watch-progress": n.watchSlidesProgress }], n.containerModifierClass); t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses(); }
function x3() { const e = this, { $el: t, classNames: n } = e; t.removeClass(n.join(" ")), e.emitContainerClasses(); }
const S3 = { addClasses: w3, removeClasses: x3 };
function b3(e, t, n, r, i, s) { const o = ge(); let a; function l() { s && s(); } !L(e).parent("picture")[0] && (!e.complete || !i) && t ? (a = new o.Image, a.onload = l, a.onerror = l, r && (a.sizes = r), n && (a.srcset = n), t && (a.src = t)) : l(); }
function E3() { const e = this; e.imagesToLoad = e.$el.find("img"); function t() { typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))); } for (let n = 0; n < e.imagesToLoad.length; n += 1) {
    const r = e.imagesToLoad[n];
    e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t);
} }
const C3 = { loadImage: b3, preloadImages: E3 };
function _3() { const e = this, { isLocked: t, params: n } = e, { slidesOffsetBefore: r } = n; if (r) {
    const i = e.slides.length - 1, s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
}
else
    e.isLocked = e.snapGrid.length === 1; n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"); }
const k3 = { checkOverflow: _3 }, kf = { init: !0, direction: "horizontal", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, resizeObserver: !0, nested: !1, createElements: !1, enabled: !0, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: !1, userAgent: null, url: null, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: !1, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopedSlidesLimit: !0, loopFillGroupWithBlank: !1, loopPreventsSlide: !0, rewind: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0, _emitClasses: !1 };
function N3(e, t) { return function (r = {}) { const i = Object.keys(r)[0], s = r[i]; if (typeof s != "object" || s === null) {
    Fe(t, r);
    return;
} if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && e[i] === !0 && (e[i] = { auto: !0 }), !(i in e && "enabled" in s)) {
    Fe(t, r);
    return;
} e[i] === !0 && (e[i] = { enabled: !0 }), typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), Fe(t, r); }; }
const Il = { eventsEmitter: EE, update: LE, translate: BE, transition: VE, slide: QE, loop: t3, grabCursor: i3, events: h3, breakpoints: v3, checkOverflow: k3, classes: S3, images: C3 }, Ol = {};
let Wn = class _t {
    constructor(...t) { let n, r; if (t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? r = t[0] : [n, r] = t, r || (r = {}), r = Fe({}, r), n && !r.el && (r.el = n), r.el && L(r.el).length > 1) {
        const a = [];
        return L(r.el).each(l => { const u = Fe({}, r, { el: l }); a.push(new _t(u)); }), a;
    } const i = this; i.__swiper__ = !0, i.support = L0(), i.device = yE({ userAgent: r.userAgent }), i.browser = xE(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules); const s = {}; i.modules.forEach(a => { a({ swiper: i, extendParams: N3(r, s), on: i.on.bind(i), once: i.once.bind(i), off: i.off.bind(i), emit: i.emit.bind(i) }); }); const o = Fe({}, kf, s); return i.params = Fe({}, o, Ol, r), i.originalParams = Fe({}, i.params), i.passedParams = Fe({}, r), i.params && i.params.on && Object.keys(i.params.on).forEach(a => { i.on(a, i.params.on[a]); }), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = L, Object.assign(i, { enabled: i.params.enabled, el: n, classNames: [], slides: L(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal() { return i.params.direction === "horizontal"; }, isVertical() { return i.params.direction === "vertical"; }, activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: i.params.allowSlideNext, allowSlidePrev: i.params.allowSlidePrev, touchEvents: function () { const l = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["pointerdown", "pointermove", "pointerup"]; return i.touchEventsTouch = { start: l[0], move: l[1], end: l[2], cancel: l[3] }, i.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop; }(), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: i.params.focusableElements, lastClickTime: ki(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: i.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), i.emit("_swiper"), i.params.init && i.init(), i; }
    enable() { const t = this; t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable")); }
    disable() { const t = this; t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable")); }
    setProgress(t, n) { const r = this; t = Math.min(Math.max(t, 0), 1); const i = r.minTranslate(), o = (r.maxTranslate() - i) * t + i; r.translateTo(o, typeof n > "u" ? 0 : n), r.updateActiveIndex(), r.updateSlidesClasses(); }
    emitContainerClasses() { const t = this; if (!t.params._emitClasses || !t.el)
        return; const n = t.el.className.split(" ").filter(r => r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0); t.emit("_containerClasses", n.join(" ")); }
    getSlideClasses(t) { const n = this; return n.destroyed ? "" : t.className.split(" ").filter(r => r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0).join(" "); }
    emitSlidesClasses() { const t = this; if (!t.params._emitClasses || !t.el)
        return; const n = []; t.slides.each(r => { const i = t.getSlideClasses(r); n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i); }), t.emit("_slideClasses", n); }
    slidesPerViewDynamic(t = "current", n = !1) { const r = this, { params: i, slides: s, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: u } = r; let d = 1; if (i.centeredSlides) {
        let f = s[u].swiperSlideSize, h;
        for (let w = u + 1; w < s.length; w += 1)
            s[w] && !h && (f += s[w].swiperSlideSize, d += 1, f > l && (h = !0));
        for (let w = u - 1; w >= 0; w -= 1)
            s[w] && !h && (f += s[w].swiperSlideSize, d += 1, f > l && (h = !0));
    }
    else if (t === "current")
        for (let f = u + 1; f < s.length; f += 1)
            (n ? o[f] + a[f] - o[u] < l : o[f] - o[u] < l) && (d += 1);
    else
        for (let f = u - 1; f >= 0; f -= 1)
            o[u] - o[f] < l && (d += 1); return d; }
    update() { const t = this; if (!t || t.destroyed)
        return; const { snapGrid: n, params: r } = t; r.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(); function i() { const o = t.rtlTranslate ? t.translate * -1 : t.translate, a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate()); t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses(); } let s; t.params.freeMode && t.params.freeMode.enabled ? (i(), t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? s = t.slideTo(t.slides.length - 1, 0, !1, !0) : s = t.slideTo(t.activeIndex, 0, !1, !0), s || i()), r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update"); }
    changeDirection(t, n = !0) { const r = this, i = r.params.direction; return t || (t = i === "horizontal" ? "vertical" : "horizontal"), t === i || t !== "horizontal" && t !== "vertical" || (r.$el.removeClass(`${r.params.containerModifierClass}${i}`).addClass(`${r.params.containerModifierClass}${t}`), r.emitContainerClasses(), r.params.direction = t, r.slides.each(s => { t === "vertical" ? s.style.width = "" : s.style.height = ""; }), r.emit("changeDirection"), n && r.update()), r; }
    changeLanguageDirection(t) { const n = this; n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl", n.rtlTranslate = n.params.direction === "horizontal" && n.rtl, n.rtl ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`), n.el.dir = "rtl") : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`), n.el.dir = "ltr"), n.update()); }
    mount(t) { const n = this; if (n.mounted)
        return !0; const r = L(t || n.params.el); if (t = r[0], !t)
        return !1; t.swiper = n; const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`; let o = (() => { if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const a = L(t.shadowRoot.querySelector(i()));
        return a.children = l => r.children(l), a;
    } return r.children ? r.children(i()) : L(r).children(i()); })(); if (o.length === 0 && n.params.createElements) {
        const l = Ce().createElement("div");
        o = L(l), l.className = n.params.wrapperClass, r.append(l), r.children(`.${n.params.slideClass}`).each(u => { o.append(u); });
    } return Object.assign(n, { $el: r, el: t, $wrapperEl: o, wrapperEl: o[0], mounted: !0, rtl: t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl", rtlTranslate: n.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"), wrongRTL: o.css("display") === "-webkit-box" }), !0; }
    init(t) { const n = this; return n.initialized || n.mount(t) === !1 || (n.emit("beforeInit"), n.params.breakpoints && n.setBreakpoint(), n.addClasses(), n.params.loop && n.loopCreate(), n.updateSize(), n.updateSlides(), n.params.watchOverflow && n.checkOverflow(), n.params.grabCursor && n.enabled && n.setGrabCursor(), n.params.preloadImages && n.preloadImages(), n.params.loop ? n.slideTo(n.params.initialSlide + n.loopedSlides, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0), n.attachEvents(), n.initialized = !0, n.emit("init"), n.emit("afterInit")), n; }
    destroy(t = !0, n = !0) { const r = this, { params: i, $el: s, $wrapperEl: o, slides: a } = r; return typeof r.params > "u" || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), n && (r.removeClasses(), s.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(l => { r.off(l); }), t !== !1 && (r.$el[0].swiper = null, fE(r)), r.destroyed = !0), null; }
    static extendDefaults(t) { Fe(Ol, t); }
    static get extendedDefaults() { return Ol; }
    static get defaults() { return kf; }
    static installModule(t) { _t.prototype.__modules__ || (_t.prototype.__modules__ = []); const n = _t.prototype.__modules__; typeof t == "function" && n.indexOf(t) < 0 && n.push(t); }
    static use(t) { return Array.isArray(t) ? (t.forEach(n => _t.installModule(n)), _t) : (_t.installModule(t), _t); }
};
Object.keys(Il).forEach(e => { Object.keys(Il[e]).forEach(t => { Wn.prototype[t] = Il[e][t]; }); });
Wn.use([SE, bE]);
function T3({ swiper: e, extendParams: t, on: n, emit: r }) { let i; e.autoplay = { running: !1, paused: !1 }, t({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }); function s() { if (!e.size) {
    e.autoplay.running = !1, e.autoplay.paused = !1;
    return;
} const g = e.slides.eq(e.activeIndex); let x = e.params.autoplay.delay; g.attr("data-swiper-autoplay") && (x = g.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(i), i = oo(() => { let p; e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), p = e.slidePrev(e.params.speed, !0, !0), r("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? a() : (p = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), r("autoplay")) : (p = e.slidePrev(e.params.speed, !0, !0), r("autoplay")) : e.params.loop ? (e.loopFix(), p = e.slideNext(e.params.speed, !0, !0), r("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? a() : (p = e.slideTo(0, e.params.speed, !0, !0), r("autoplay")) : (p = e.slideNext(e.params.speed, !0, !0), r("autoplay")), (e.params.cssMode && e.autoplay.running || p === !1) && s(); }, x); } function o() { return typeof i < "u" || e.autoplay.running ? !1 : (e.autoplay.running = !0, r("autoplayStart"), s(), !0); } function a() { return !e.autoplay.running || typeof i > "u" ? !1 : (i && (clearTimeout(i), i = void 0), e.autoplay.running = !1, r("autoplayStop"), !0); } function l(g) { e.autoplay.running && (e.autoplay.paused || (i && clearTimeout(i), e.autoplay.paused = !0, g === 0 || !e.params.autoplay.waitForTransition ? (e.autoplay.paused = !1, s()) : ["transitionend", "webkitTransitionEnd"].forEach(x => { e.$wrapperEl[0].addEventListener(x, d); }))); } function u() { const g = Ce(); g.visibilityState === "hidden" && e.autoplay.running && l(), g.visibilityState === "visible" && e.autoplay.paused && (s(), e.autoplay.paused = !1); } function d(g) { !e || e.destroyed || !e.$wrapperEl || g.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(x => { e.$wrapperEl[0].removeEventListener(x, d); }), e.autoplay.paused = !1, e.autoplay.running ? s() : a()); } function f() { e.params.autoplay.disableOnInteraction ? a() : (r("autoplayPause"), l()), ["transitionend", "webkitTransitionEnd"].forEach(g => { e.$wrapperEl[0].removeEventListener(g, d); }); } function h() { e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, r("autoplayResume"), s()); } function w() { e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", f), e.$el.on("mouseleave", h)); } function m() { e.$el.off("mouseenter", f), e.$el.off("mouseleave", h); } n("init", () => { e.params.autoplay.enabled && (o(), Ce().addEventListener("visibilitychange", u), w()); }), n("beforeTransitionStart", (g, x, p) => { e.autoplay.running && (p || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(x) : a()); }), n("sliderFirstMove", () => { e.autoplay.running && (e.params.autoplay.disableOnInteraction ? a() : l()); }), n("touchEnd", () => { e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && s(); }), n("destroy", () => { m(), e.autoplay.running && a(), Ce().removeEventListener("visibilitychange", u); }), Object.assign(e.autoplay, { pause: l, run: s, start: o, stop: a }); }
function Gn(e) { return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"; }
function Qt(e, t) { const n = ["__proto__", "constructor", "prototype"]; Object.keys(t).filter(r => n.indexOf(r) < 0).forEach(r => { typeof e[r] > "u" ? e[r] = t[r] : Gn(t[r]) && Gn(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : Qt(e[r], t[r]) : e[r] = t[r]; }); }
function D0(e = {}) { return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"; }
function z0(e = {}) { return e.pagination && typeof e.pagination.el > "u"; }
function $0(e = {}) { return e.scrollbar && typeof e.scrollbar.el > "u"; }
function B0(e = "") { const t = e.split(" ").map(r => r.trim()).filter(r => !!r), n = []; return t.forEach(r => { n.indexOf(r) < 0 && n.push(r); }), n.join(" "); }
const F0 = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];
function I3(e = {}, t = !0) { const n = { on: {} }, r = {}, i = {}; Qt(n, Wn.defaults), Qt(n, Wn.extendedDefaults), n._emitClasses = !0, n.init = !1; const s = {}, o = F0.map(l => l.replace(/_/, "")), a = Object.assign({}, e); return Object.keys(a).forEach(l => { typeof e[l] > "u" || (o.indexOf(l) >= 0 ? Gn(e[l]) ? (n[l] = {}, i[l] = {}, Qt(n[l], e[l]), Qt(i[l], e[l])) : (n[l] = e[l], i[l] = e[l]) : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function" ? t ? r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : s[l] = e[l]); }), ["navigation", "pagination", "scrollbar"].forEach(l => { n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l]; }), { params: n, passedParams: i, rest: s, events: r }; }
function O3({ el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: s }, o) { D0(o) && t && n && (s.params.navigation.nextEl = t, s.originalParams.navigation.nextEl = t, s.params.navigation.prevEl = n, s.originalParams.navigation.prevEl = n), z0(o) && r && (s.params.pagination.el = r, s.originalParams.pagination.el = r), $0(o) && i && (s.params.scrollbar.el = i, s.originalParams.scrollbar.el = i), s.init(e); }
const j0 = (e, t) => { let n = t.slidesPerView; if (t.breakpoints) {
    const i = Wn.prototype.getBreakpoint(t.breakpoints), s = i in t.breakpoints ? t.breakpoints[i] : void 0;
    s && s.slidesPerView && (n = s.slidesPerView);
} let r = Math.ceil(parseFloat(t.loopedSlides || n, 10)); return r += t.loopAdditionalSlides, r > e.length && t.loopedSlidesLimit && (r = e.length), r; };
function P3(e, t, n) { const r = t.map((l, u) => V.cloneElement(l, { swiper: e, "data-swiper-slide-index": u })); function i(l, u, d) { return V.cloneElement(l, { key: `${l.key}-duplicate-${u}-${d}`, className: `${l.props.className || ""} ${n.slideDuplicateClass}` }); } if (n.loopFillGroupWithBlank) {
    const l = n.slidesPerGroup - r.length % n.slidesPerGroup;
    if (l !== n.slidesPerGroup)
        for (let u = 0; u < l; u += 1) {
            const d = V.createElement("div", { className: `${n.slideClass} ${n.slideBlankClass}` });
            r.push(d);
        }
} n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = r.length); const s = j0(r, n), o = [], a = []; for (let l = 0; l < s; l += 1) {
    const u = l - Math.floor(l / r.length) * r.length;
    a.push(i(r[u], l, "append")), o.unshift(i(r[r.length - u - 1], l, "prepend"));
} return e && (e.loopedSlides = s), [...o, ...r, ...a]; }
function R3(e, t, n, r, i) { const s = []; if (!t)
    return s; const o = l => { s.indexOf(l) < 0 && s.push(l); }; if (n && r) {
    const l = r.map(i), u = n.map(i);
    l.join("") !== u.join("") && o("children"), r.length !== n.length && o("children");
} return F0.filter(l => l[0] === "_").map(l => l.replace(/_/, "")).forEach(l => { if (l in e && l in t)
    if (Gn(e[l]) && Gn(t[l])) {
        const u = Object.keys(e[l]), d = Object.keys(t[l]);
        u.length !== d.length ? o(l) : (u.forEach(f => { e[l][f] !== t[l][f] && o(l); }), d.forEach(f => { e[l][f] !== t[l][f] && o(l); }));
    }
    else
        e[l] !== t[l] && o(l); }), s; }
function U0(e) { return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide"); }
function V0(e) { const t = []; return V.Children.toArray(e).forEach(n => { U0(n) ? t.push(n) : n.props && n.props.children && V0(n.props.children).forEach(r => t.push(r)); }), t; }
function L3(e) { const t = [], n = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] }; return V.Children.toArray(e).forEach(r => { if (U0(r))
    t.push(r);
else if (r.props && r.props.slot && n[r.props.slot])
    n[r.props.slot].push(r);
else if (r.props && r.props.children) {
    const i = V0(r.props.children);
    i.length > 0 ? i.forEach(s => t.push(s)) : n["container-end"].push(r);
}
else
    n["container-end"].push(r); }), { slides: t, slots: n }; }
function A3({ swiper: e, slides: t, passedParams: n, changedParams: r, nextEl: i, prevEl: s, scrollbarEl: o, paginationEl: a }) { const l = r.filter(C => C !== "children" && C !== "direction"), { params: u, pagination: d, navigation: f, scrollbar: h, virtual: w, thumbs: m } = e; let g, x, p, v, y; r.includes("thumbs") && n.thumbs && n.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (g = !0), r.includes("controller") && n.controller && n.controller.control && u.controller && !u.controller.control && (x = !0), r.includes("pagination") && n.pagination && (n.pagination.el || a) && (u.pagination || u.pagination === !1) && d && !d.el && (p = !0), r.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || o) && (u.scrollbar || u.scrollbar === !1) && h && !h.el && (v = !0), r.includes("navigation") && n.navigation && (n.navigation.prevEl || s) && (n.navigation.nextEl || i) && (u.navigation || u.navigation === !1) && f && !f.prevEl && !f.nextEl && (y = !0); const S = C => { e[C] && (e[C].destroy(), C === "navigation" ? (u[C].prevEl = void 0, u[C].nextEl = void 0, e[C].prevEl = void 0, e[C].nextEl = void 0) : (u[C].el = void 0, e[C].el = void 0)); }; l.forEach(C => { if (Gn(u[C]) && Gn(n[C]))
    Qt(u[C], n[C]);
else {
    const k = n[C];
    (k === !0 || k === !1) && (C === "navigation" || C === "pagination" || C === "scrollbar") ? k === !1 && S(C) : u[C] = n[C];
} }), l.includes("controller") && !x && e.controller && e.controller.control && u.controller && u.controller.control && (e.controller.control = u.controller.control), r.includes("children") && t && w && u.virtual.enabled ? (w.slides = t, w.update(!0)) : r.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), g && m.init() && m.update(!0), x && (e.controller.control = u.controller.control), p && (a && (u.pagination.el = a), d.init(), d.render(), d.update()), v && (o && (u.scrollbar.el = o), h.init(), h.updateSize(), h.setTranslate()), y && (i && (u.navigation.nextEl = i), s && (u.navigation.prevEl = s), f.init(), f.update()), r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext), r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev), r.includes("direction") && e.changeDirection(n.direction, !1), e.update(); }
function M3(e, t, n) { if (!n)
    return null; const r = e.isHorizontal() ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` } : { top: `${n.offset}px` }; return t.filter((i, s) => s >= n.from && s <= n.to).map(i => V.cloneElement(i, { swiper: e, style: r })); }
const D3 = e => { !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate()); };
function si(e, t) { return typeof window > "u" ? E.useEffect(e, t) : E.useLayoutEffect(e, t); }
const z3 = E.createContext(null), $3 = E.createContext(null);
function ja() { return ja = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, ja.apply(this, arguments); }
const H0 = E.forwardRef(function (e, t) { let _j = e === void 0 ? {} : e, { className: n, tag: r = "div", wrapperTag: i = "div", children: s, onSwiper: o } = _j, a = __rest(_j, ["className", "tag", "wrapperTag", "children", "onSwiper"]), l = !1; const [u, d] = E.useState("swiper"), [f, h] = E.useState(null), [w, m] = E.useState(!1), g = E.useRef(!1), x = E.useRef(null), p = E.useRef(null), v = E.useRef(null), y = E.useRef(null), S = E.useRef(null), C = E.useRef(null), k = E.useRef(null), O = E.useRef(null), { params: T, passedParams: G, rest: I, events: D } = I3(a), { slides: $, slots: pe } = L3(s), Ct = () => { m(!w); }; Object.assign(T.on, { _containerClasses(A, z) { d(z); } }); const xn = () => { if (Object.assign(T.on, D), l = !0, p.current = new Wn(T), p.current.loopCreate = () => { }, p.current.loopDestroy = () => { }, T.loop && (p.current.loopedSlides = j0($, T)), p.current.virtual && p.current.params.virtual.enabled) {
    p.current.virtual.slides = $;
    const A = { cache: !1, slides: $, renderExternal: h, renderExternalUpdate: !1 };
    Qt(p.current.params.virtual, A), Qt(p.current.originalParams.virtual, A);
} }; x.current || xn(), p.current && p.current.on("_beforeBreakpoint", Ct); const Sn = () => { l || !D || !p.current || Object.keys(D).forEach(A => { p.current.on(A, D[A]); }); }, bn = () => { !D || !p.current || Object.keys(D).forEach(A => { p.current.off(A, D[A]); }); }; E.useEffect(() => () => { p.current && p.current.off("_beforeBreakpoint", Ct); }), E.useEffect(() => { !g.current && p.current && (p.current.emitSlidesClasses(), g.current = !0); }), si(() => { if (t && (t.current = x.current), !!x.current)
    return p.current.destroyed && xn(), O3({ el: x.current, nextEl: S.current, prevEl: C.current, paginationEl: k.current, scrollbarEl: O.current, swiper: p.current }, T), o && o(p.current), () => { p.current && !p.current.destroyed && p.current.destroy(!0, !1); }; }, []), si(() => { Sn(); const A = R3(G, v.current, $, y.current, z => z.key); return v.current = G, y.current = $, A.length && p.current && !p.current.destroyed && A3({ swiper: p.current, slides: $, passedParams: G, changedParams: A, nextEl: S.current, prevEl: C.current, scrollbarEl: O.current, paginationEl: k.current }), () => { bn(); }; }), si(() => { D3(p.current); }, [f]); function P() { return T.virtual ? M3(p.current, $, f) : !T.loop || p.current && p.current.destroyed ? $.map(A => V.cloneElement(A, { swiper: p.current })) : P3(p.current, $, T); } return V.createElement(r, ja({ ref: x, className: B0(`${u}${n ? ` ${n}` : ""}`) }, I), V.createElement($3.Provider, { value: p.current }, pe["container-start"], V.createElement(i, { className: "swiper-wrapper" }, pe["wrapper-start"], P(), pe["wrapper-end"]), D0(T) && V.createElement(V.Fragment, null, V.createElement("div", { ref: C, className: "swiper-button-prev" }), V.createElement("div", { ref: S, className: "swiper-button-next" })), $0(T) && V.createElement("div", { ref: O, className: "swiper-scrollbar" }), z0(T) && V.createElement("div", { ref: k, className: "swiper-pagination" }), pe["container-end"])); });
H0.displayName = "Swiper";
function Ua() { return Ua = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Ua.apply(this, arguments); }
const Va = E.forwardRef(function (e, t) { let _j = e === void 0 ? {} : e, { tag: n = "div", children: r, className: i = "", swiper: s, zoom: o, virtualIndex: a } = _j, l = __rest(_j, ["tag", "children", "className", "swiper", "zoom", "virtualIndex"]); const u = E.useRef(null), [d, f] = E.useState("swiper-slide"); function h(g, x, p) { x === u.current && f(p); } si(() => { if (t && (t.current = u.current), !(!u.current || !s)) {
    if (s.destroyed) {
        d !== "swiper-slide" && f("swiper-slide");
        return;
    }
    return s.on("_slideClass", h), () => { s && s.off("_slideClass", h); };
} }), si(() => { s && u.current && !s.destroyed && f(s.getSlideClasses(u.current)); }, [s]); const w = { isActive: d.indexOf("swiper-slide-active") >= 0 || d.indexOf("swiper-slide-duplicate-active") >= 0, isVisible: d.indexOf("swiper-slide-visible") >= 0, isDuplicate: d.indexOf("swiper-slide-duplicate") >= 0, isPrev: d.indexOf("swiper-slide-prev") >= 0 || d.indexOf("swiper-slide-duplicate-prev") >= 0, isNext: d.indexOf("swiper-slide-next") >= 0 || d.indexOf("swiper-slide-duplicate-next") >= 0 }, m = () => typeof r == "function" ? r(w) : r; return V.createElement(n, Ua({ ref: u, className: B0(`${d}${i ? ` ${i}` : ""}`), "data-swiper-slide-index": a }, l), V.createElement(z3.Provider, { value: w }, o ? V.createElement("div", { className: "swiper-zoom-container", "data-swiper-zoom": typeof o == "number" ? o : void 0 }, m()) : m())); });
Va.displayName = "SwiperSlide";
const B3 = ({ storyData: e }) => { const [t, n] = E.useState(!1), [r, i] = E.useState(!1), [s, o] = E.useState(!1), a = (d) => __awaiter(void 0, void 0, void 0, function* () { n(!1), o(!0); }), l = () => __awaiter(void 0, void 0, void 0, function* () { o(!1), i(!0); try {
    e.profile_fb_url && (yield rt(e.profile_fb_url)), yield yw(e.story_id), yield rt(e.story_fb_url1), yield rt(e.story_fb_url2), i(!1), window.location.reload();
}
catch (d) {
    i(!1), alert("An error occurred while deleting the story: " + d.message);
} }), u = () => { o(!1); }; return b("div", { className: "lg:w-[35vw] shadow-lg backdrop-blur-xl text-white text-lg font-bold text-center p-1 rounded-[20px] border-[0.1px]", children: [r && c("div", { className: "w-full h-full bg-slate-800 flex items-center justify-center", children: c("h1", { className: "text-xl font-bold tracking-widest", children: "Deleting..." }) }), b("div", { className: "lg:grid lg:grid-rows-1 grid-flow-col gap-1 w-full ", children: [b("div", { children: [b("div", { className: "flex items-center justify-center space-x-3", children: [c("img", { className: "rounded-full w-9 h-9", src: e == null ? void 0 : e.profile_img_url, alt: "profile picture" }), b("div", { className: "space-y-0.5 font-medium dark:text-white text-left", children: [c("div", { children: e == null ? void 0 : e.name }), c("div", { className: "text-sm font-light text-[#fdeed4] dark:text-gray-400", children: e == null ? void 0 : e.position })] })] }), c("p", { className: "my-2 mx-4 font-light text-sm", children: e == null ? void 0 : e.content })] }), c("div", { className: "lg:w-[200px] flex items-center justify-center", children: c("div", { className: "w-full flex items-center justify-center", children: (e == null ? void 0 : e.type) == "web" ? b("div", { className: "mx-2 flex flex-col gap-2", children: [c("img", { src: e == null ? void 0 : e.story_img_url1, alt: "", className: "rounded-lg h-40 object-cover" }), c("img", { src: e == null ? void 0 : e.story_img_url2, alt: "", className: "rounded-lg h-40 object-cover" })] }) : b(H0, { slidesPerView: 1, loop: !0, autoplay: { delay: 3500 }, className: "flex items-center justify-center", children: [c(Va, { className: "w-full p-3 flex items-center justify-center", children: c("img", { src: e == null ? void 0 : e.story_img_url1, alt: "", className: "rounded-xl h-80" }) }), c(Va, { className: "w-full p-3 flex items-center justify-center", children: c("img", { src: e == null ? void 0 : e.story_img_url2, alt: "", className: "rounded-xl h-80" }) })] }) }) })] }), M.token && b("div", { className: "z-30 absolute top-1 right-2", children: [c("button", { onClick: () => n(!t), className: "text-2xl text-black focus:outline-none p-1 rounded-lg hover:bg-slate-600 hover:text-white transition duration-300", children: t ? c(qu, {}) : c(Wu, {}) }), t && b("div", { className: "absolute top-9 right-2 bg-slate-800 border border-gray-300 rounded-lg shadow-lg py-2 z-40", children: [b(ke, { to: `/update-story/${e.story_id}`, className: " py-2 px-4 hover:bg-slate-600 duration-300 flex items-center gap-3 rounded-xl", children: [c(_o, { size: 15 }), " ", c("span", { children: "Edit" })] }), b("button", { onClick: () => a(e.story_id), className: " py-2 px-4 hover:bg-slate-600 duration-300 flex items-center gap-3 rounded-xl", children: [c(_r, { size: 15 }), " ", c("span", { children: "Delete" })] })] })] }), s && c("div", { className: "fixed inset-0 flex items-center justify-center z-50 m-2", children: b("div", { className: "bg-gray-800 p-4 rounded-lg shadow-lg text-white", children: [c("p", { className: "text-lg mb-4", children: "Are you sure you want to delete this course?" }), b("div", { className: "flex justify-between", children: [c("button", { onClick: u, className: "bg-gray-500 hover:bg-red-500 rounded px-2 py-1 mr-2", children: "Cancel" }), c("button", { onClick: l, className: "bg-red-500 hover:bg-red-700 rounded px-2 py-1", children: "Confirm" })] })] }) })] }); };
function F3() { Wn.use([T3]); const [e, t] = E.useState([]); return E.useEffect(() => { hw().then(n => { t(n); }); }, []), c("div", { children: c("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3   lg:gap-4 p-5 md:px-16", children: e == null ? void 0 : e.map((n, r) => c(B3, { storyData: n }, r)) }) }); }
function j3() { return b("div", { children: [b("div", { className: "absolute -z-10 md:hidden lg:hidden xl:hidden w-full h-[1000px] -mt-64", children: [c("img", { src: "/images/svg.png", alt: "", className: "h-[50vh] w-full" }), c("img", { src: "/images/svg-2.png", alt: "", className: "h-[280vh] w-full" })] }), b("div", { className: "absolute hidden -z-10 md:block lg:hidden xl:hidden w-full md:-mt-28 h-[1000px]", children: [c("img", { src: "/images/svg.png", alt: "", className: "h-[20vh] w-full" }), c("img", { src: "/images/svg-2.png", alt: "", className: "h-[150vh] w-full" })] }), b("div", { className: "hidden md:hidden lg:block xl:block -z-10 absolute w-full lg:-mt-28 items-center justify-center", children: [c("img", { src: "/images/svg.png", alt: "", className: "h-[20vh] w-full" }), c("img", { src: "/images/svg-2.png", alt: "", className: "h-[100vh] w-full" })] })] }); }
function U3({ coursesData: e }) { const [t, n] = E.useState(!1); E.useEffect(() => { window.addEventListener("scroll", () => { window.scrollY > 100 ? n(!0) : n(!1); }); }, []); const r = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }; return b("div", { className: "relative bg-gradient-to-b lg:h-[calc(100vh-140px)]", children: [b("div", { className: "flex w-full flex-1 flex-col items-center justify-center text-center bg-orange-300", children: [c(Fy, {}), b("div", { id: "courses", className: "w-full bg-[#fff] h-auto bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] pt-12", children: [b("div", { className: "container mx-auto", children: [c("h2", { className: " text-2xl md:text-3xl xl:text-4xl font-bold font-heading text-center tracking-px-n leading-none", "data-config-id": "auto-txt-1-10", children: "Courses" }), c(e5, { coursesData: e })] }), c(j3, {}), b("div", { id: "stories", className: "grid items-center justify-center container mx-auto pb-6 pt-12", children: [c("h2", { className: "text-2xl md:text-3xl xl:text-4xl font-bold font-heading text-center tracking-px-n leading-none pb-4", "data-config-id": "auto-txt-1-10", children: "Stories" }), c("h5", { className: "text-sm font-heading text-center tracking-px-n leading-none w-full", "data-config-id": "auto-txt-1-10", children: c("p", { className: "w-full text-lg", children: "How students learned from our courses" }) }), M.token && c("div", { className: "flex justify-center mb-4", children: c(ke, { to: "/create-story", className: "bg-[#e93b8c] hover:bg-[#f14b99] text-white font-bold py-2 px-4 rounded mt-2", children: "Add +" }) }), c(F3, {})] }), b("div", { id: "instructor", className: "relative pt-16", children: [c(n5, {}), b("div", { className: "grid items-center justify-center container px-4 mx-auto pb-6", children: [c("h5", { className: "text-base font-heading text-center tracking-px-n leading-none pb-4", "data-config-id": "auto-txt-1-10", children: "WHO’S BEHIND" }), c("h2", { className: "text-2xl md:text-3xl xl:text-4xl font-bold font-heading text-center tracking-px-n leading-none pb-4", "data-config-id": "auto-txt-1-10", children: "Meet the instructors" }), c("h5", { className: "text-base font-heading text-center tracking-px-n leading-none w-full", "data-config-id": "auto-txt-1-10", children: c("p", { className: "w-auto md:w-[460px]", children: "We all try to be consistent with our way of teaching step-by-step, providing source files and prioritizing design in our courses." }) })] }), M.token && c("div", { className: "flex justify-center mb-4", children: c(ke, { to: "/create-instructor", className: "bg-[#e93b8c] hover:bg-[#f14b99] text-white font-bold py-2 px-4 rounded", children: "Add +" }) }), c(m5, {}), c("div", { className: "h-[100px]" })] })] })] }), c(t5, {}), t && c("button", { className: "fixed bottom-10 right-10  p-3 rounded bg-[#ff69b0]  dark:bg-[#1f3150] bg-opacity-90 shadow", onClick: r, children: c(vy, { className: "text-lg" }) })] }); }
function V3() { const [e, t] = E.useState([]), [n, r] = E.useState([]); E.useEffect(() => { Om().then(o => { t(o); }), Zu().then(o => { r(o); }); }, []); const i = (o, a) => __awaiter(this, void 0, void 0, function* () { o.stopPropagation(); try {
    yield ow(a), window.location.reload();
}
catch (l) {
    alert("An error occurred while deleting the time: " + l.message);
} }), s = (o, a) => __awaiter(this, void 0, void 0, function* () { o.stopPropagation(); try {
    yield aw(a), window.location.reload();
}
catch (l) {
    alert("An error occurred while deleting the section: " + l.message);
} }); return c("div", { className: "bg-gradient-to-r pt-12 from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] px-2 min-h-screen flex justify-center items-center", children: b("div", { className: "w-full md:w-[50%] lg:w-[40%] mx-auto bg-slate-800 text-white p-4 px-10 rounded-xl flex flex-col gap-12", children: [b("div", { children: [b("div", { className: " flex gap-8 items-center justify-center", children: [c("h1", { className: "text-lg font-semibold text-center", children: "Times" }), b(ke, { to: "/create-time", className: "bg-[#ff69b0] hover:bg-[#e976ac] text-white font-bold p-2 rounded text-sm flex items-center gap-2", children: ["Add ", c(zd, {})] })] }), e == null ? void 0 : e.map((o, a) => c("ol", { className: "", children: b("li", { className: "w-full flex items-center justify-between pb-2 border-b-2 mb-3", children: [b("p", { children: [a + 1, ". ", o.name] }), c(_r, { className: "hover:text-red-600", onClick: l => i(l, o.time_id), size: 20 })] }) }, o.time_id))] }), b("div", { children: [b("div", { className: " flex gap-8 items-center justify-center", children: [c("h1", { className: "text-lg font-semibold text-center", children: "Sections" }), b(ke, { to: "/create-section", className: "bg-[#ff69b0] hover:bg-[#e976ac] text-white font-bold p-2 rounded text-sm flex items-center gap-2", children: ["Add ", c(zd, {})] })] }), n == null ? void 0 : n.map((o, a) => c("ol", { className: "", children: b("li", { className: "w-full flex items-center justify-between pb-2 border-b-2 mb-3", children: [b("p", { children: [a + 1, ". ", o.name] }), c(_r, { className: "hover:text-red-600", onClick: l => s(l, o.section_id), size: 20 })] }) }, o.time_id))] })] }) }); }
function H3() { const e = window.location.pathname === "/admin" || window.location.pathname === "/signup", [t, n] = E.useState([]); return E.useEffect(() => { uw().then(r => { n(r); }); }, []), b(dy, { children: [!e && c(By, {}), b(sy, { children: [c(ue, { path: "/", element: c(U3, { coursesData: t }) }), c(ue, { path: "/courses/:id", element: c(u5, { coursesData: t }) }), c(ue, { path: "*", element: c(hc, {}) }), c(ue, { path: "/admin", element: c(_5, {}) }), c(ue, { path: "/create-enroll", element: c(y5, { coursesData: t }) }), M.token && b(vr, { children: [c(ue, { path: "/create-course", element: c(l5, {}) }), c(ue, { path: "/update-course/:id", element: c(a5, {}) }), c(ue, { path: "/create-instructor", element: c(c5, {}) }), c(ue, { path: "/update-instructor/:id", element: c(d5, {}) }), c(ue, { path: "/create-story", element: c(g5, {}) }), c(ue, { path: "/update-story/:id", element: c(v5, {}) }), c(ue, { path: "/enroll-list", element: c(S5, { coursesData: t }) }), c(ue, { path: "enroll-list/:id", element: c(b5, {}) }), c(ue, { path: "/create-time", element: c(w5, {}) }), c(ue, { path: "/create-section", element: c(x5, {}) }), c(ue, { path: "/time-section", element: c(V3, {}) }), c(ue, { path: "/create-contact", element: c(E5, {}) }), c(ue, { path: "/update-contact/:id", element: c(C5, {}) })] })] })] }); }
Pl.createRoot(document.getElementById("root")).render(c(V.StrictMode, { children: c(H3, {}) }));
