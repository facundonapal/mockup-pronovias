!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    function e() {
        return Qe.apply(null, arguments)
    }
    function t(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function n(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function s(e) {
        return void 0 === e
    }
    function i(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function r(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function a(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n)
            s.push(t(e[n], n));
        return s
    }
    function o(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function u(e, t) {
        for (var n in t)
            o(t, n) && (e[n] = t[n]);
        return o(t, "toString") && (e.toString = t.toString),
        o(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function l(e, t, n, s) {
        return ge(e, t, n, s, !0).utc()
    }
    function d(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
        e._pf
    }
    function h(e) {
        if (null == e._isValid) {
            var t = d(e)
              , n = Xe.call(t.parsedDateParts, function(e) {
                return null != e
            })
              , s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return s;
            e._isValid = s
        }
        return e._isValid
    }
    function c(e) {
        var t = l(NaN);
        return null != e ? u(d(t), e) : d(t).userInvalidated = !0,
        t
    }
    function f(e, t) {
        var n, i, r;
        if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        s(t._i) || (e._i = t._i),
        s(t._f) || (e._f = t._f),
        s(t._l) || (e._l = t._l),
        s(t._strict) || (e._strict = t._strict),
        s(t._tzm) || (e._tzm = t._tzm),
        s(t._isUTC) || (e._isUTC = t._isUTC),
        s(t._offset) || (e._offset = t._offset),
        s(t._pf) || (e._pf = d(t)),
        s(t._locale) || (e._locale = t._locale),
        Ke.length > 0)
            for (n = 0; n < Ke.length; n++)
                s(r = t[i = Ke[n]]) || (e[i] = r);
        return e
    }
    function m(t) {
        f(this, t),
        this._d = new Date(null != t._d ? t._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === et && (et = !0,
        e.updateOffset(this),
        et = !1)
    }
    function _(e) {
        return e instanceof m || null != e && null != e._isAMomentObject
    }
    function y(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function g(e) {
        var t = +e
          , n = 0;
        return 0 !== t && isFinite(t) && (n = y(t)),
        n
    }
    function p(e, t, n) {
        var s, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0;
        for (s = 0; s < i; s++)
            (n && e[s] !== t[s] || !n && g(e[s]) !== g(t[s])) && a++;
        return a + r
    }
    function w(t) {
        !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }
    function v(t, n) {
        var s = !0;
        return u(function() {
            if (null != e.deprecationHandler && e.deprecationHandler(null, t),
            s) {
                for (var i, r = [], a = 0; a < arguments.length; a++) {
                    if (i = "",
                    "object" == typeof arguments[a]) {
                        i += "\n[" + a + "] ";
                        for (var o in arguments[0])
                            i += o + ": " + arguments[0][o] + ", ";
                        i = i.slice(0, -2)
                    } else
                        i = arguments[a];
                    r.push(i)
                }
                w(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack),
                s = !1
            }
            return n.apply(this, arguments)
        }, n)
    }
    function M(t, n) {
        null != e.deprecationHandler && e.deprecationHandler(t, n),
        tt[t] || (w(n),
        tt[t] = !0)
    }
    function S(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function D(e, t) {
        var s, i = u({}, e);
        for (s in t)
            o(t, s) && (n(e[s]) && n(t[s]) ? (i[s] = {},
            u(i[s], e[s]),
            u(i[s], t[s])) : null != t[s] ? i[s] = t[s] : delete i[s]);
        for (s in e)
            o(e, s) && !o(t, s) && n(e[s]) && (i[s] = u({}, i[s]));
        return i
    }
    function k(e) {
        null != e && this.set(e)
    }
    function Y(e, t) {
        var n = e.toLowerCase();
        st[n] = st[n + "s"] = st[t] = e
    }
    function O(e) {
        return "string" == typeof e ? st[e] || st[e.toLowerCase()] : void 0
    }
    function T(e) {
        var t, n, s = {};
        for (n in e)
            o(e, n) && (t = O(n)) && (s[t] = e[n]);
        return s
    }
    function x(e, t) {
        it[e] = t
    }
    function b(e, t, n) {
        var s = "" + Math.abs(e)
          , i = t - s.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }
    function P(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
            return this[s]()
        }
        ),
        e && (ut[e] = i),
        t && (ut[t[0]] = function() {
            return b(i.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (ut[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        }
        )
    }
    function W(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function H(e, t) {
        return e.isValid() ? (t = R(t, e.localeData()),
        ot[t] = ot[t] || function(e) {
            var t, n, s = e.match(rt);
            for (t = 0,
            n = s.length; t < n; t++)
                ut[s[t]] ? s[t] = ut[s[t]] : s[t] = W(s[t]);
            return function(t) {
                var i, r = "";
                for (i = 0; i < n; i++)
                    r += S(s[i]) ? s[i].call(t, e) : s[i];
                return r
            }
        }(t),
        ot[t](e)) : e.localeData().invalidDate()
    }
    function R(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var s = 5;
        for (at.lastIndex = 0; s >= 0 && at.test(e); )
            e = e.replace(at, n),
            at.lastIndex = 0,
            s -= 1;
        return e
    }
    function C(e, t, n) {
        Yt[e] = S(t) ? t : function(e, s) {
            return e && n ? n : t
        }
    }
    function F(e, t) {
        return o(Yt, e) ? Yt[e](t._strict, t._locale) : new RegExp(function(e) {
            return U(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
                return t || n || s || i
            }))
        }(e))
    }
    function U(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function L(e, t) {
        var n, s = t;
        for ("string" == typeof e && (e = [e]),
        i(t) && (s = function(e, n) {
            n[t] = g(e)
        }
        ),
        n = 0; n < e.length; n++)
            Ot[e[n]] = s
    }
    function N(e, t) {
        L(e, function(e, n, s, i) {
            s._w = s._w || {},
            t(e, s._w, s, i)
        })
    }
    function G(e, t, n) {
        null != t && o(Ot, e) && Ot[e](t, n._a, n, e)
    }
    function V(e) {
        return E(e) ? 366 : 365
    }
    function E(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function I(t, n) {
        return function(s) {
            return null != s ? (j(this, t, s),
            e.updateOffset(this, n),
            this) : A(this, t)
        }
    }
    function A(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function j(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && E(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Z(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }
    function Z(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n = function(e, t) {
            return (e % t + t) % t
        }(t, 12);
        return e += (t - n) / 12,
        1 === n ? E(e) ? 29 : 28 : 31 - n % 7 % 2
    }
    function z(e, t) {
        var n;
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = g(t);
            else if (t = e.localeData().monthsParse(t),
            !i(t))
                return e;
        return n = Math.min(e.date(), Z(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
    }
    function $(t) {
        return null != t ? (z(this, t),
        e.updateOffset(this, !0),
        this) : A(this, "Month")
    }
    function q() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s = [], i = [], r = [];
        for (t = 0; t < 12; t++)
            n = l([2e3, t]),
            s.push(this.monthsShort(n, "")),
            i.push(this.months(n, "")),
            r.push(this.months(n, "")),
            r.push(this.monthsShort(n, ""));
        for (s.sort(e),
        i.sort(e),
        r.sort(e),
        t = 0; t < 12; t++)
            s[t] = U(s[t]),
            i[t] = U(i[t]);
        for (t = 0; t < 24; t++)
            r[t] = U(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
    }
    function J(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
        t
    }
    function B(e, t, n) {
        var s = 7 + t - n;
        return -((7 + J(e, 0, s).getUTCDay() - t) % 7) + s - 1
    }
    function Q(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + B(e, s, i);
        return o <= 0 ? a = V(r = e - 1) + o : o > V(e) ? (r = e + 1,
        a = o - V(e)) : (r = e,
        a = o),
        {
            year: r,
            dayOfYear: a
        }
    }
    function X(e, t, n) {
        var s, i, r = B(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + K(i = e.year() - 1, t, n) : a > K(e.year(), t, n) ? (s = a - K(e.year(), t, n),
        i = e.year() + 1) : (i = e.year(),
        s = a),
        {
            week: s,
            year: i
        }
    }
    function K(e, t, n) {
        var s = B(e, t, n)
          , i = B(e + 1, t, n);
        return (V(e) - s + i) / 7
    }
    function ee() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s, i, r, a = [], o = [], u = [], d = [];
        for (t = 0; t < 7; t++)
            n = l([2e3, 1]).day(t),
            s = this.weekdaysMin(n, ""),
            i = this.weekdaysShort(n, ""),
            r = this.weekdays(n, ""),
            a.push(s),
            o.push(i),
            u.push(r),
            d.push(s),
            d.push(i),
            d.push(r);
        for (a.sort(e),
        o.sort(e),
        u.sort(e),
        d.sort(e),
        t = 0; t < 7; t++)
            o[t] = U(o[t]),
            u[t] = U(u[t]),
            d[t] = U(d[t]);
        this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")","i")
    }
    function te() {
        return this.hours() % 12 || 12
    }
    function ne(e, t) {
        P(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function se(e, t) {
        return t._meridiemParse
    }
    function ie(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function re(e) {
        var t = null;
        if (!Xt[e] && "undefined" != typeof module && module && module.exports)
            try {
                t = Jt._abbr;
                require("./locale/" + e),
                ae(t)
            } catch (e) {}
        return Xt[e]
    }
    function ae(e, t) {
        var n;
        return e && (n = s(t) ? ue(e) : oe(e, t)) && (Jt = n),
        Jt._abbr
    }
    function oe(e, t) {
        if (null !== t) {
            var n = Qt;
            if (t.abbr = e,
            null != Xt[e])
                M("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                n = Xt[e]._config;
            else if (null != t.parentLocale) {
                if (null == Xt[t.parentLocale])
                    return Kt[t.parentLocale] || (Kt[t.parentLocale] = []),
                    Kt[t.parentLocale].push({
                        name: e,
                        config: t
                    }),
                    null;
                n = Xt[t.parentLocale]._config
            }
            return Xt[e] = new k(D(n, t)),
            Kt[e] && Kt[e].forEach(function(e) {
                oe(e.name, e.config)
            }),
            ae(e),
            Xt[e]
        }
        return delete Xt[e],
        null
    }
    function ue(e) {
        var n;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return Jt;
        if (!t(e)) {
            if (n = re(e))
                return n;
            e = [e]
        }
        return function(e) {
            for (var t, n, s, i, r = 0; r < e.length; ) {
                for (t = (i = ie(e[r]).split("-")).length,
                n = (n = ie(e[r + 1])) ? n.split("-") : null; t > 0; ) {
                    if (s = re(i.slice(0, t).join("-")))
                        return s;
                    if (n && n.length >= t && p(i, n, !0) >= t - 1)
                        break;
                    t--
                }
                r++
            }
            return null
        }(e)
    }
    function le(e) {
        var t, n = e._a;
        return n && -2 === d(e).overflow && (t = n[xt] < 0 || n[xt] > 11 ? xt : n[bt] < 1 || n[bt] > Z(n[Tt], n[xt]) ? bt : n[Pt] < 0 || n[Pt] > 24 || 24 === n[Pt] && (0 !== n[Wt] || 0 !== n[Ht] || 0 !== n[Rt]) ? Pt : n[Wt] < 0 || n[Wt] > 59 ? Wt : n[Ht] < 0 || n[Ht] > 59 ? Ht : n[Rt] < 0 || n[Rt] > 999 ? Rt : -1,
        d(e)._overflowDayOfYear && (t < Tt || t > bt) && (t = bt),
        d(e)._overflowWeeks && -1 === t && (t = Ct),
        d(e)._overflowWeekday && -1 === t && (t = Ft),
        d(e).overflow = t),
        e
    }
    function de(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function he(t) {
        var n, s, i, r, a, o = [];
        if (!t._d) {
            for (i = function(t) {
                var n = new Date(e.now());
                return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
            }(t),
            t._w && null == t._a[bt] && null == t._a[xt] && function(e) {
                var t, n, s, i, r, a, o, u;
                if (null != (t = e._w).GG || null != t.W || null != t.E)
                    r = 1,
                    a = 4,
                    n = de(t.GG, e._a[Tt], X(pe(), 1, 4).year),
                    s = de(t.W, 1),
                    ((i = de(t.E, 1)) < 1 || i > 7) && (u = !0);
                else {
                    r = e._locale._week.dow,
                    a = e._locale._week.doy;
                    var l = X(pe(), r, a);
                    n = de(t.gg, e._a[Tt], l.year),
                    s = de(t.w, l.week),
                    null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + r,
                    (t.e < 0 || t.e > 6) && (u = !0)) : i = r
                }
                s < 1 || s > K(n, r, a) ? d(e)._overflowWeeks = !0 : null != u ? d(e)._overflowWeekday = !0 : (o = Q(n, s, i, r, a),
                e._a[Tt] = o.year,
                e._dayOfYear = o.dayOfYear)
            }(t),
            null != t._dayOfYear && (a = de(t._a[Tt], i[Tt]),
            (t._dayOfYear > V(a) || 0 === t._dayOfYear) && (d(t)._overflowDayOfYear = !0),
            s = J(a, 0, t._dayOfYear),
            t._a[xt] = s.getUTCMonth(),
            t._a[bt] = s.getUTCDate()),
            n = 0; n < 3 && null == t._a[n]; ++n)
                t._a[n] = o[n] = i[n];
            for (; n < 7; n++)
                t._a[n] = o[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
            24 === t._a[Pt] && 0 === t._a[Wt] && 0 === t._a[Ht] && 0 === t._a[Rt] && (t._nextDay = !0,
            t._a[Pt] = 0),
            t._d = (t._useUTC ? J : function(e, t, n, s, i, r, a) {
                var o = new Date(e,t,n,s,i,r,a);
                return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e),
                o
            }
            ).apply(null, o),
            r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(),
            null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
            t._nextDay && (t._a[Pt] = 24),
            t._w && void 0 !== t._w.d && t._w.d !== r && (d(t).weekdayMismatch = !0)
        }
    }
    function ce(e) {
        var t, n, s, i, r, a, o = e._i, u = en.exec(o) || tn.exec(o);
        if (u) {
            for (d(e).iso = !0,
            t = 0,
            n = sn.length; t < n; t++)
                if (sn[t][1].exec(u[1])) {
                    i = sn[t][0],
                    s = !1 !== sn[t][2];
                    break
                }
            if (null == i)
                return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0,
                n = rn.length; t < n; t++)
                    if (rn[t][1].exec(u[3])) {
                        r = (u[2] || " ") + rn[t][0];
                        break
                    }
                if (null == r)
                    return void (e._isValid = !1)
            }
            if (!s && null != r)
                return void (e._isValid = !1);
            if (u[4]) {
                if (!nn.exec(u[4]))
                    return void (e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""),
            _e(e)
        } else
            e._isValid = !1
    }
    function fe(e, t, n, s, i, r) {
        var a = [function(e) {
            var t = parseInt(e, 10);
            {
                if (t <= 49)
                    return 2e3 + t;
                if (t <= 999)
                    return 1900 + t
            }
            return t
        }(e), Vt.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
        return r && a.push(parseInt(r, 10)),
        a
    }
    function me(e) {
        var t = on.exec(function(e) {
            return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
        }(e._i));
        if (t) {
            var n = fe(t[4], t[3], t[2], t[5], t[6], t[7]);
            if (!function(e, t, n) {
                if (e && jt.indexOf(e) !== new Date(t[0],t[1],t[2]).getDay())
                    return d(n).weekdayMismatch = !0,
                    n._isValid = !1,
                    !1;
                return !0
            }(t[1], n, e))
                return;
            e._a = n,
            e._tzm = function(e, t, n) {
                if (e)
                    return un[e];
                if (t)
                    return 0;
                var s = parseInt(n, 10)
                  , i = s % 100;
                return (s - i) / 100 * 60 + i
            }(t[8], t[9], t[10]),
            e._d = J.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            d(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function _e(t) {
        if (t._f !== e.ISO_8601)
            if (t._f !== e.RFC_2822) {
                t._a = [],
                d(t).empty = !0;
                var n, s, i, r, a, o = "" + t._i, u = o.length, l = 0;
                for (i = R(t._f, t._locale).match(rt) || [],
                n = 0; n < i.length; n++)
                    r = i[n],
                    (s = (o.match(F(r, t)) || [])[0]) && ((a = o.substr(0, o.indexOf(s))).length > 0 && d(t).unusedInput.push(a),
                    o = o.slice(o.indexOf(s) + s.length),
                    l += s.length),
                    ut[r] ? (s ? d(t).empty = !1 : d(t).unusedTokens.push(r),
                    G(r, s, t)) : t._strict && !s && d(t).unusedTokens.push(r);
                d(t).charsLeftOver = u - l,
                o.length > 0 && d(t).unusedInput.push(o),
                t._a[Pt] <= 12 && !0 === d(t).bigHour && t._a[Pt] > 0 && (d(t).bigHour = void 0),
                d(t).parsedDateParts = t._a.slice(0),
                d(t).meridiem = t._meridiem,
                t._a[Pt] = function(e, t, n) {
                    var s;
                    if (null == n)
                        return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((s = e.isPM(n)) && t < 12 && (t += 12),
                    s || 12 !== t || (t = 0),
                    t) : t
                }(t._locale, t._a[Pt], t._meridiem),
                he(t),
                le(t)
            } else
                me(t);
        else
            ce(t)
    }
    function ye(o) {
        var l = o._i
          , y = o._f;
        return o._locale = o._locale || ue(o._l),
        null === l || void 0 === y && "" === l ? c({
            nullInput: !0
        }) : ("string" == typeof l && (o._i = l = o._locale.preparse(l)),
        _(l) ? new m(le(l)) : (r(l) ? o._d = l : t(y) ? function(e) {
            var t, n, s, i, r;
            if (0 === e._f.length)
                return d(e).invalidFormat = !0,
                void (e._d = new Date(NaN));
            for (i = 0; i < e._f.length; i++)
                r = 0,
                t = f({}, e),
                null != e._useUTC && (t._useUTC = e._useUTC),
                t._f = e._f[i],
                _e(t),
                h(t) && (r += d(t).charsLeftOver,
                r += 10 * d(t).unusedTokens.length,
                d(t).score = r,
                (null == s || r < s) && (s = r,
                n = t));
            u(e, n || t)
        }(o) : y ? _e(o) : function(o) {
            var u = o._i;
            s(u) ? o._d = new Date(e.now()) : r(u) ? o._d = new Date(u.valueOf()) : "string" == typeof u ? function(t) {
                var n = an.exec(t._i);
                null === n ? (ce(t),
                !1 === t._isValid && (delete t._isValid,
                me(t),
                !1 === t._isValid && (delete t._isValid,
                e.createFromInputFallback(t)))) : t._d = new Date(+n[1])
            }(o) : t(u) ? (o._a = a(u.slice(0), function(e) {
                return parseInt(e, 10)
            }),
            he(o)) : n(u) ? function(e) {
                if (!e._d) {
                    var t = T(e._i);
                    e._a = a([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                        return e && parseInt(e, 10)
                    }),
                    he(e)
                }
            }(o) : i(u) ? o._d = new Date(u) : e.createFromInputFallback(o)
        }(o),
        h(o) || (o._d = null),
        o))
    }
    function ge(e, s, i, r, a) {
        var o = {};
        return !0 !== i && !1 !== i || (r = i,
        i = void 0),
        (n(e) && function(e) {
            if (Object.getOwnPropertyNames)
                return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }(e) || t(e) && 0 === e.length) && (e = void 0),
        o._isAMomentObject = !0,
        o._useUTC = o._isUTC = a,
        o._l = i,
        o._i = e,
        o._f = s,
        o._strict = r,
        function(e) {
            var t = new m(le(ye(e)));
            return t._nextDay && (t.add(1, "d"),
            t._nextDay = void 0),
            t
        }(o)
    }
    function pe(e, t, n, s) {
        return ge(e, t, n, s, !1)
    }
    function we(e, n) {
        var s, i;
        if (1 === n.length && t(n[0]) && (n = n[0]),
        !n.length)
            return pe();
        for (s = n[0],
        i = 1; i < n.length; ++i)
            n[i].isValid() && !n[i][e](s) || (s = n[i]);
        return s
    }
    function ve(e) {
        var t = T(e)
          , n = t.year || 0
          , s = t.quarter || 0
          , i = t.month || 0
          , r = t.week || 0
          , a = t.day || 0
          , o = t.hour || 0
          , u = t.minute || 0
          , l = t.second || 0
          , d = t.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e)
                if (-1 === Ut.call(hn, t) || null != e[t] && isNaN(e[t]))
                    return !1;
            for (var n = !1, s = 0; s < hn.length; ++s)
                if (e[hn[s]]) {
                    if (n)
                        return !1;
                    parseFloat(e[hn[s]]) !== g(e[hn[s]]) && (n = !0)
                }
            return !0
        }(t),
        this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60,
        this._days = +a + 7 * r,
        this._months = +i + 3 * s + 12 * n,
        this._data = {},
        this._locale = ue(),
        this._bubble()
    }
    function Me(e) {
        return e instanceof ve
    }
    function Se(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function De(e, t) {
        P(e, 0, 0, function() {
            var e = this.utcOffset()
              , n = "+";
            return e < 0 && (e = -e,
            n = "-"),
            n + b(~~(e / 60), 2) + t + b(~~e % 60, 2)
        })
    }
    function ke(e, t) {
        var n = (t || "").match(e);
        if (null === n)
            return null;
        var s = ((n[n.length - 1] || []) + "").match(cn) || ["-", 0, 0]
          , i = 60 * s[1] + g(s[2]);
        return 0 === i ? 0 : "+" === s[0] ? i : -i
    }
    function Ye(t, n) {
        var s, i;
        return n._isUTC ? (s = n.clone(),
        i = (_(t) || r(t) ? t.valueOf() : pe(t).valueOf()) - s.valueOf(),
        s._d.setTime(s._d.valueOf() + i),
        e.updateOffset(s, !1),
        s) : pe(t).local()
    }
    function Oe(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function Te() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    function xe(e, t) {
        var n, s, r, a = e, u = null;
        return Me(e) ? a = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : i(e) ? (a = {},
        t ? a[t] = e : a.milliseconds = e) : (u = fn.exec(e)) ? (n = "-" === u[1] ? -1 : 1,
        a = {
            y: 0,
            d: g(u[bt]) * n,
            h: g(u[Pt]) * n,
            m: g(u[Wt]) * n,
            s: g(u[Ht]) * n,
            ms: g(Se(1e3 * u[Rt])) * n
        }) : (u = mn.exec(e)) ? (n = "-" === u[1] ? -1 : (u[1],
        1),
        a = {
            y: be(u[2], n),
            M: be(u[3], n),
            w: be(u[4], n),
            d: be(u[5], n),
            h: be(u[6], n),
            m: be(u[7], n),
            s: be(u[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from"in a || "to"in a) && (r = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
                return {
                    milliseconds: 0,
                    months: 0
                };
            t = Ye(t, e),
            e.isBefore(t) ? n = Pe(e, t) : ((n = Pe(t, e)).milliseconds = -n.milliseconds,
            n.months = -n.months);
            return n
        }(pe(a.from), pe(a.to)),
        (a = {}).ms = r.milliseconds,
        a.M = r.months),
        s = new ve(a),
        Me(e) && o(e, "_locale") && (s._locale = e._locale),
        s
    }
    function be(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function Pe(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function We(e, t) {
        return function(n, s) {
            var i, r;
            return null === s || isNaN(+s) || (M(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            r = n,
            n = s,
            s = r),
            n = "string" == typeof n ? +n : n,
            i = xe(n, s),
            He(this, i, e),
            this
        }
    }
    function He(t, n, s, i) {
        var r = n._milliseconds
          , a = Se(n._days)
          , o = Se(n._months);
        t.isValid() && (i = null == i || i,
        o && z(t, A(t, "Month") + o * s),
        a && j(t, "Date", A(t, "Date") + a * s),
        r && t._d.setTime(t._d.valueOf() + r * s),
        i && e.updateOffset(t, a || o))
    }
    function Re(e, t) {
        var n, s = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(s, "months");
        return n = t - i < 0 ? (t - i) / (i - e.clone().add(s - 1, "months")) : (t - i) / (e.clone().add(s + 1, "months") - i),
        -(s + n) || 0
    }
    function Ce(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ue(e)) && (this._locale = t),
        this)
    }
    function Fe() {
        return this._locale
    }
    function Ue(e, t) {
        P(0, [e, e.length], 0, t)
    }
    function Le(e, t, n, s, i) {
        var r;
        return null == e ? X(this, s, i).year : (r = K(e, s, i),
        t > r && (t = r),
        function(e, t, n, s, i) {
            var r = Q(e, t, n, s, i)
              , a = J(r.year, 0, r.dayOfYear);
            return this.year(a.getUTCFullYear()),
            this.month(a.getUTCMonth()),
            this.date(a.getUTCDate()),
            this
        }
        .call(this, e, t, n, s, i))
    }
    function Ne(e, t) {
        t[Rt] = g(1e3 * ("0." + e))
    }
    function Ge(e) {
        return e
    }
    function Ve(e, t, n, s) {
        var i = ue()
          , r = l().set(s, t);
        return i[n](r, e)
    }
    function Ee(e, t, n) {
        if (i(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return Ve(e, t, n, "month");
        var s, r = [];
        for (s = 0; s < 12; s++)
            r[s] = Ve(e, s, n, "month");
        return r
    }
    function Ie(e, t, n, s) {
        "boolean" == typeof e ? (i(t) && (n = t,
        t = void 0),
        t = t || "") : (n = t = e,
        e = !1,
        i(t) && (n = t,
        t = void 0),
        t = t || "");
        var r = ue()
          , a = e ? r._week.dow : 0;
        if (null != n)
            return Ve(t, (n + a) % 7, s, "day");
        var o, u = [];
        for (o = 0; o < 7; o++)
            u[o] = Ve(t, (o + a) % 7, s, "day");
        return u
    }
    function Ae(e, t, n, s) {
        var i = xe(t, n);
        return e._milliseconds += s * i._milliseconds,
        e._days += s * i._days,
        e._months += s * i._months,
        e._bubble()
    }
    function je(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function Ze(e) {
        return 4800 * e / 146097
    }
    function ze(e) {
        return 146097 * e / 4800
    }
    function $e(e) {
        return function() {
            return this.as(e)
        }
    }
    function qe(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    function Je(e) {
        return (e > 0) - (e < 0) || +e
    }
    function Be() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, t, n = An(this._milliseconds) / 1e3, s = An(this._days), i = An(this._months);
        t = y((e = y(n / 60)) / 60),
        n %= 60,
        e %= 60;
        var r = y(i / 12)
          , a = i %= 12
          , o = s
          , u = t
          , l = e
          , d = n ? n.toFixed(3).replace(/\.?0+$/, "") : ""
          , h = this.asSeconds();
        if (!h)
            return "P0D";
        var c = h < 0 ? "-" : ""
          , f = Je(this._months) !== Je(h) ? "-" : ""
          , m = Je(this._days) !== Je(h) ? "-" : ""
          , _ = Je(this._milliseconds) !== Je(h) ? "-" : "";
        return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || d ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (d ? _ + d + "S" : "")
    }
    var Qe, Xe;
    Xe = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
            if (s in t && e.call(this, t[s], s, t))
                return !0;
        return !1
    }
    ;
    var Ke = e.momentProperties = []
      , et = !1
      , tt = {};
    e.suppressDeprecationWarnings = !1,
    e.deprecationHandler = null;
    var nt;
    nt = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e)
            o(e, t) && n.push(t);
        return n
    }
    ;
    var st = {}
      , it = {}
      , rt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , at = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , ot = {}
      , ut = {}
      , lt = /\d/
      , dt = /\d\d/
      , ht = /\d{3}/
      , ct = /\d{4}/
      , ft = /[+-]?\d{6}/
      , mt = /\d\d?/
      , _t = /\d\d\d\d?/
      , yt = /\d\d\d\d\d\d?/
      , gt = /\d{1,3}/
      , pt = /\d{1,4}/
      , wt = /[+-]?\d{1,6}/
      , vt = /\d+/
      , Mt = /[+-]?\d+/
      , St = /Z|[+-]\d\d:?\d\d/gi
      , Dt = /Z|[+-]\d\d(?::?\d\d)?/gi
      , kt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
      , Yt = {}
      , Ot = {}
      , Tt = 0
      , xt = 1
      , bt = 2
      , Pt = 3
      , Wt = 4
      , Ht = 5
      , Rt = 6
      , Ct = 7
      , Ft = 8;
    P("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }),
    P(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    P(0, ["YYYY", 4], 0, "year"),
    P(0, ["YYYYY", 5], 0, "year"),
    P(0, ["YYYYYY", 6, !0], 0, "year"),
    Y("year", "y"),
    x("year", 1),
    C("Y", Mt),
    C("YY", mt, dt),
    C("YYYY", pt, ct),
    C("YYYYY", wt, ft),
    C("YYYYYY", wt, ft),
    L(["YYYYY", "YYYYYY"], Tt),
    L("YYYY", function(t, n) {
        n[Tt] = 2 === t.length ? e.parseTwoDigitYear(t) : g(t)
    }),
    L("YY", function(t, n) {
        n[Tt] = e.parseTwoDigitYear(t)
    }),
    L("Y", function(e, t) {
        t[Tt] = parseInt(e, 10)
    }),
    e.parseTwoDigitYear = function(e) {
        return g(e) + (g(e) > 68 ? 1900 : 2e3)
    }
    ;
    var Ut, Lt = I("FullYear", !0);
    Ut = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ,
    P("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    P("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    P("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }),
    Y("month", "M"),
    x("month", 8),
    C("M", mt),
    C("MM", mt, dt),
    C("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }),
    C("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }),
    L(["M", "MM"], function(e, t) {
        t[xt] = g(e) - 1
    }),
    L(["MMM", "MMMM"], function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[xt] = i : d(n).invalidMonth = e
    });
    var Nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , Gt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , Vt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , Et = kt
      , It = kt;
    P("w", ["ww", 2], "wo", "week"),
    P("W", ["WW", 2], "Wo", "isoWeek"),
    Y("week", "w"),
    Y("isoWeek", "W"),
    x("week", 5),
    x("isoWeek", 5),
    C("w", mt),
    C("ww", mt, dt),
    C("W", mt),
    C("WW", mt, dt),
    N(["w", "ww", "W", "WW"], function(e, t, n, s) {
        t[s.substr(0, 1)] = g(e)
    });
    P("d", 0, "do", "day"),
    P("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    P("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    P("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }),
    P("e", 0, 0, "weekday"),
    P("E", 0, 0, "isoWeekday"),
    Y("day", "d"),
    Y("weekday", "e"),
    Y("isoWeekday", "E"),
    x("day", 11),
    x("weekday", 11),
    x("isoWeekday", 11),
    C("d", mt),
    C("e", mt),
    C("E", mt),
    C("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }),
    C("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }),
    C("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }),
    N(["dd", "ddd", "dddd"], function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : d(n).invalidWeekday = e
    }),
    N(["d", "e", "E"], function(e, t, n, s) {
        t[s] = g(e)
    });
    var At = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , jt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , Zt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , zt = kt
      , $t = kt
      , qt = kt;
    P("H", ["HH", 2], 0, "hour"),
    P("h", ["hh", 2], 0, te),
    P("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }),
    P("hmm", 0, 0, function() {
        return "" + te.apply(this) + b(this.minutes(), 2)
    }),
    P("hmmss", 0, 0, function() {
        return "" + te.apply(this) + b(this.minutes(), 2) + b(this.seconds(), 2)
    }),
    P("Hmm", 0, 0, function() {
        return "" + this.hours() + b(this.minutes(), 2)
    }),
    P("Hmmss", 0, 0, function() {
        return "" + this.hours() + b(this.minutes(), 2) + b(this.seconds(), 2)
    }),
    ne("a", !0),
    ne("A", !1),
    Y("hour", "h"),
    x("hour", 13),
    C("a", se),
    C("A", se),
    C("H", mt),
    C("h", mt),
    C("k", mt),
    C("HH", mt, dt),
    C("hh", mt, dt),
    C("kk", mt, dt),
    C("hmm", _t),
    C("hmmss", yt),
    C("Hmm", _t),
    C("Hmmss", yt),
    L(["H", "HH"], Pt),
    L(["k", "kk"], function(e, t, n) {
        var s = g(e);
        t[Pt] = 24 === s ? 0 : s
    }),
    L(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    L(["h", "hh"], function(e, t, n) {
        t[Pt] = g(e),
        d(n).bigHour = !0
    }),
    L("hmm", function(e, t, n) {
        var s = e.length - 2;
        t[Pt] = g(e.substr(0, s)),
        t[Wt] = g(e.substr(s)),
        d(n).bigHour = !0
    }),
    L("hmmss", function(e, t, n) {
        var s = e.length - 4
          , i = e.length - 2;
        t[Pt] = g(e.substr(0, s)),
        t[Wt] = g(e.substr(s, 2)),
        t[Ht] = g(e.substr(i)),
        d(n).bigHour = !0
    }),
    L("Hmm", function(e, t, n) {
        var s = e.length - 2;
        t[Pt] = g(e.substr(0, s)),
        t[Wt] = g(e.substr(s))
    }),
    L("Hmmss", function(e, t, n) {
        var s = e.length - 4
          , i = e.length - 2;
        t[Pt] = g(e.substr(0, s)),
        t[Wt] = g(e.substr(s, 2)),
        t[Ht] = g(e.substr(i))
    });
    var Jt, Bt = I("Hours", !0), Qt = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Gt,
        monthsShort: Vt,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: At,
        weekdaysMin: Zt,
        weekdaysShort: jt,
        meridiemParse: /[ap]\.?m?\.?/i
    }, Xt = {}, Kt = {}, en = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, nn = /Z|[+-]\d\d(?::?\d\d)?/, sn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], rn = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], an = /^\/?Date\((\-?\d+)/i, on = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, un = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    e.createFromInputFallback = v("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    e.ISO_8601 = function() {}
    ,
    e.RFC_2822 = function() {}
    ;
    var ln = v("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = pe.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : c()
    })
      , dn = v("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = pe.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : c()
    })
      , hn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    De("Z", ":"),
    De("ZZ", ""),
    C("Z", Dt),
    C("ZZ", Dt),
    L(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0,
        n._tzm = ke(Dt, e)
    });
    var cn = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {}
    ;
    var fn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
      , mn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    xe.fn = ve.prototype,
    xe.invalid = function() {
        return xe(NaN)
    }
    ;
    var _n = We(1, "add")
      , yn = We(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var gn = v("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    P(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    P(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    Ue("gggg", "weekYear"),
    Ue("ggggg", "weekYear"),
    Ue("GGGG", "isoWeekYear"),
    Ue("GGGGG", "isoWeekYear"),
    Y("weekYear", "gg"),
    Y("isoWeekYear", "GG"),
    x("weekYear", 1),
    x("isoWeekYear", 1),
    C("G", Mt),
    C("g", Mt),
    C("GG", mt, dt),
    C("gg", mt, dt),
    C("GGGG", pt, ct),
    C("gggg", pt, ct),
    C("GGGGG", wt, ft),
    C("ggggg", wt, ft),
    N(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
        t[s.substr(0, 2)] = g(e)
    }),
    N(["gg", "GG"], function(t, n, s, i) {
        n[i] = e.parseTwoDigitYear(t)
    }),
    P("Q", 0, "Qo", "quarter"),
    Y("quarter", "Q"),
    x("quarter", 7),
    C("Q", lt),
    L("Q", function(e, t) {
        t[xt] = 3 * (g(e) - 1)
    }),
    P("D", ["DD", 2], "Do", "date"),
    Y("date", "D"),
    x("date", 9),
    C("D", mt),
    C("DD", mt, dt),
    C("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }),
    L(["D", "DD"], bt),
    L("Do", function(e, t) {
        t[bt] = g(e.match(mt)[0])
    });
    var pn = I("Date", !0);
    P("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    Y("dayOfYear", "DDD"),
    x("dayOfYear", 4),
    C("DDD", gt),
    C("DDDD", ht),
    L(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = g(e)
    }),
    P("m", ["mm", 2], 0, "minute"),
    Y("minute", "m"),
    x("minute", 14),
    C("m", mt),
    C("mm", mt, dt),
    L(["m", "mm"], Wt);
    var wn = I("Minutes", !1);
    P("s", ["ss", 2], 0, "second"),
    Y("second", "s"),
    x("second", 15),
    C("s", mt),
    C("ss", mt, dt),
    L(["s", "ss"], Ht);
    var vn = I("Seconds", !1);
    P("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    P(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    P(0, ["SSS", 3], 0, "millisecond"),
    P(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    P(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    P(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    P(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    P(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    P(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    Y("millisecond", "ms"),
    x("millisecond", 16),
    C("S", gt, lt),
    C("SS", gt, dt),
    C("SSS", gt, ht);
    var Mn;
    for (Mn = "SSSS"; Mn.length <= 9; Mn += "S")
        C(Mn, vt);
    for (Mn = "S"; Mn.length <= 9; Mn += "S")
        L(Mn, Ne);
    var Sn = I("Milliseconds", !1);
    P("z", 0, 0, "zoneAbbr"),
    P("zz", 0, 0, "zoneName");
    var Dn = m.prototype;
    Dn.add = _n,
    Dn.calendar = function(t, n) {
        var s = t || pe()
          , i = Ye(s, this).startOf("day")
          , r = e.calendarFormat(this, i) || "sameElse"
          , a = n && (S(n[r]) ? n[r].call(this, s) : n[r]);
        return this.format(a || this.localeData().calendar(r, this, pe(s)))
    }
    ,
    Dn.clone = function() {
        return new m(this)
    }
    ,
    Dn.diff = function(e, t, n) {
        var s, i, r;
        if (!this.isValid())
            return NaN;
        if (!(s = Ye(e, this)).isValid())
            return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()),
        t = O(t)) {
        case "year":
            r = Re(this, s) / 12;
            break;
        case "month":
            r = Re(this, s);
            break;
        case "quarter":
            r = Re(this, s) / 3;
            break;
        case "second":
            r = (this - s) / 1e3;
            break;
        case "minute":
            r = (this - s) / 6e4;
            break;
        case "hour":
            r = (this - s) / 36e5;
            break;
        case "day":
            r = (this - s - i) / 864e5;
            break;
        case "week":
            r = (this - s - i) / 6048e5;
            break;
        default:
            r = this - s
        }
        return n ? r : y(r)
    }
    ,
    Dn.endOf = function(e) {
        return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"),
        this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
    }
    ,
    Dn.format = function(t) {
        t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
        var n = H(this, t);
        return this.localeData().postformat(n)
    }
    ,
    Dn.from = function(e, t) {
        return this.isValid() && (_(e) && e.isValid() || pe(e).isValid()) ? xe({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    Dn.fromNow = function(e) {
        return this.from(pe(), e)
    }
    ,
    Dn.to = function(e, t) {
        return this.isValid() && (_(e) && e.isValid() || pe(e).isValid()) ? xe({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    Dn.toNow = function(e) {
        return this.to(pe(), e)
    }
    ,
    Dn.get = function(e) {
        return e = O(e),
        S(this[e]) ? this[e]() : this
    }
    ,
    Dn.invalidAt = function() {
        return d(this).overflow
    }
    ,
    Dn.isAfter = function(e, t) {
        var n = _(e) ? e : pe(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(s(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }
    ,
    Dn.isBefore = function(e, t) {
        var n = _(e) ? e : pe(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(s(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }
    ,
    Dn.isBetween = function(e, t, n, s) {
        return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }
    ,
    Dn.isSame = function(e, t) {
        var n, s = _(e) ? e : pe(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = O(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(),
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }
    ,
    Dn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    ,
    Dn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    ,
    Dn.isValid = function() {
        return h(this)
    }
    ,
    Dn.lang = gn,
    Dn.locale = Ce,
    Dn.localeData = Fe,
    Dn.max = dn,
    Dn.min = ln,
    Dn.parsingFlags = function() {
        return u({}, d(this))
    }
    ,
    Dn.set = function(e, t) {
        if ("object" == typeof e)
            for (var n = function(e) {
                var t = [];
                for (var n in e)
                    t.push({
                        unit: n,
                        priority: it[n]
                    });
                return t.sort(function(e, t) {
                    return e.priority - t.priority
                }),
                t
            }(e = T(e)), s = 0; s < n.length; s++)
                this[n[s].unit](e[n[s].unit]);
        else if (e = O(e),
        S(this[e]))
            return this[e](t);
        return this
    }
    ,
    Dn.startOf = function(e) {
        switch (e = O(e)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    ,
    Dn.subtract = yn,
    Dn.toArray = function() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }
    ,
    Dn.toObject = function() {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    }
    ,
    Dn.toDate = function() {
        return new Date(this.valueOf())
    }
    ,
    Dn.toISOString = function(e) {
        if (!this.isValid())
            return null;
        var t = !0 !== e
          , n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? H(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", H(n, "Z")) : H(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    ,
    Dn.inspect = function() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e = "moment"
          , t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        t = "Z");
        var n = "[" + e + '("]'
          , s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
          , i = t + '[")]';
        return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
    }
    ,
    Dn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }
    ,
    Dn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    ,
    Dn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }
    ,
    Dn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    ,
    Dn.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    ,
    Dn.year = Lt,
    Dn.isLeapYear = function() {
        return E(this.year())
    }
    ,
    Dn.weekYear = function(e) {
        return Le.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    ,
    Dn.isoWeekYear = function(e) {
        return Le.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    ,
    Dn.quarter = Dn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    ,
    Dn.month = $,
    Dn.daysInMonth = function() {
        return Z(this.year(), this.month())
    }
    ,
    Dn.week = Dn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    Dn.isoWeek = Dn.isoWeeks = function(e) {
        var t = X(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    Dn.weeksInYear = function() {
        var e = this.localeData()._week;
        return K(this.year(), e.dow, e.doy)
    }
    ,
    Dn.isoWeeksInYear = function() {
        return K(this.year(), 1, 4)
    }
    ,
    Dn.date = pn,
    Dn.day = Dn.days = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = function(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }(e, this.localeData()),
        this.add(e - t, "d")) : t
    }
    ,
    Dn.weekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    Dn.isoWeekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            var t = function(e, t) {
                return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
    }
    ,
    Dn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    Dn.hour = Dn.hours = Bt,
    Dn.minute = Dn.minutes = wn,
    Dn.second = Dn.seconds = vn,
    Dn.millisecond = Dn.milliseconds = Sn,
    Dn.utcOffset = function(t, n, s) {
        var i, r = this._offset || 0;
        if (!this.isValid())
            return null != t ? this : NaN;
        if (null != t) {
            if ("string" == typeof t) {
                if (null === (t = ke(Dt, t)))
                    return this
            } else
                Math.abs(t) < 16 && !s && (t *= 60);
            return !this._isUTC && n && (i = Oe(this)),
            this._offset = t,
            this._isUTC = !0,
            null != i && this.add(i, "m"),
            r !== t && (!n || this._changeInProgress ? He(this, xe(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            e.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? r : Oe(this)
    }
    ,
    Dn.utc = function(e) {
        return this.utcOffset(0, e)
    }
    ,
    Dn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(Oe(this), "m")),
        this
    }
    ,
    Dn.parseZone = function() {
        if (null != this._tzm)
            this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = ke(St, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    ,
    Dn.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? pe(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    ,
    Dn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    ,
    Dn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }
    ,
    Dn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }
    ,
    Dn.isUtc = Te,
    Dn.isUTC = Te,
    Dn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }
    ,
    Dn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    ,
    Dn.dates = v("dates accessor is deprecated. Use date instead.", pn),
    Dn.months = v("months accessor is deprecated. Use month instead", $),
    Dn.years = v("years accessor is deprecated. Use year instead", Lt),
    Dn.zone = v("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }),
    Dn.isDSTShifted = v("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!s(this._isDSTShifted))
            return this._isDSTShifted;
        var e = {};
        if (f(e, this),
        (e = ye(e))._a) {
            var t = e._isUTC ? l(e._a) : pe(e._a);
            this._isDSTShifted = this.isValid() && p(e._a, t.toArray()) > 0
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var kn = k.prototype;
    kn.calendar = function(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return S(s) ? s.call(t, n) : s
    }
    ,
    kn.longDateFormat = function(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }),
        this._longDateFormat[e])
    }
    ,
    kn.invalidDate = function() {
        return this._invalidDate
    }
    ,
    kn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }
    ,
    kn.preparse = Ge,
    kn.postformat = Ge,
    kn.relativeTime = function(e, t, n, s) {
        var i = this._relativeTime[n];
        return S(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    }
    ,
    kn.pastFuture = function(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return S(n) ? n(t) : n.replace(/%s/i, t)
    }
    ,
    kn.set = function(e) {
        var t, n;
        for (n in e)
            S(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    ,
    kn.months = function(e, n) {
        return e ? t(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Nt).test(n) ? "format" : "standalone"][e.month()] : t(this._months) ? this._months : this._months.standalone
    }
    ,
    kn.monthsShort = function(e, n) {
        return e ? t(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Nt.test(n) ? "format" : "standalone"][e.month()] : t(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    ,
    kn.monthsParse = function(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact)
            return function(e, t, n) {
                var s, i, r, a = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    s = 0; s < 12; ++s)
                        r = l([2e3, s]),
                        this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
                        this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (i = Ut.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ut.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ut.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ut.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ut.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ut.call(this._shortMonthsParse, a)) ? i : null
            }
            .call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        s = 0; s < 12; s++) {
            if (i = l([2e3, s]),
            n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
            n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
            this._monthsParse[s] = new RegExp(r.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[s].test(e))
                return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e))
                return s;
            if (!n && this._monthsParse[s].test(e))
                return s
        }
    }
    ,
    kn.monthsRegex = function(e) {
        return this._monthsParseExact ? (o(this, "_monthsRegex") || q.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = It),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    ,
    kn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (o(this, "_monthsRegex") || q.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = Et),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    ,
    kn.week = function(e) {
        return X(e, this._week.dow, this._week.doy).week
    }
    ,
    kn.firstDayOfYear = function() {
        return this._week.doy
    }
    ,
    kn.firstDayOfWeek = function() {
        return this._week.dow
    }
    ,
    kn.weekdays = function(e, n) {
        return e ? t(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(n) ? "format" : "standalone"][e.day()] : t(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }
    ,
    kn.weekdaysMin = function(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    ,
    kn.weekdaysShort = function(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    ,
    kn.weekdaysParse = function(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact)
            return function(e, t, n) {
                var s, i, r, a = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    s = 0; s < 7; ++s)
                        r = l([2e3, 1]).day(s),
                        this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
                        this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (i = Ut.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ut.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ut.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ut.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ut.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ut.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._shortWeekdaysParse, a)) ? i : null
            }
            .call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        s = 0; s < 7; s++) {
            if (i = l([2e3, 1]).day(s),
            n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$","i"),
            this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$","i"),
            this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$","i")),
            this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
            this._weekdaysParse[s] = new RegExp(r.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
                return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e))
                return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e))
                return s;
            if (!n && this._weekdaysParse[s].test(e))
                return s
        }
    }
    ,
    kn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = zt),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    ,
    kn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $t),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    ,
    kn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = qt),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    ,
    kn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    ,
    kn.meridiem = function(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    ,
    ae("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }),
    e.lang = v("moment.lang is deprecated. Use moment.locale instead.", ae),
    e.langData = v("moment.langData is deprecated. Use moment.localeData instead.", ue);
    var Yn = Math.abs
      , On = $e("ms")
      , Tn = $e("s")
      , xn = $e("m")
      , bn = $e("h")
      , Pn = $e("d")
      , Wn = $e("w")
      , Hn = $e("M")
      , Rn = $e("y")
      , Cn = qe("milliseconds")
      , Fn = qe("seconds")
      , Un = qe("minutes")
      , Ln = qe("hours")
      , Nn = qe("days")
      , Gn = qe("months")
      , Vn = qe("years")
      , En = Math.round
      , In = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }
      , An = Math.abs
      , jn = ve.prototype;
    return jn.isValid = function() {
        return this._isValid
    }
    ,
    jn.abs = function() {
        var e = this._data;
        return this._milliseconds = Yn(this._milliseconds),
        this._days = Yn(this._days),
        this._months = Yn(this._months),
        e.milliseconds = Yn(e.milliseconds),
        e.seconds = Yn(e.seconds),
        e.minutes = Yn(e.minutes),
        e.hours = Yn(e.hours),
        e.months = Yn(e.months),
        e.years = Yn(e.years),
        this
    }
    ,
    jn.add = function(e, t) {
        return Ae(this, e, t, 1)
    }
    ,
    jn.subtract = function(e, t) {
        return Ae(this, e, t, -1)
    }
    ,
    jn.as = function(e) {
        if (!this.isValid())
            return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = O(e)) || "year" === e)
            return t = this._days + s / 864e5,
            n = this._months + Ze(t),
            "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(ze(this._months)),
        e) {
        case "week":
            return t / 7 + s / 6048e5;
        case "day":
            return t + s / 864e5;
        case "hour":
            return 24 * t + s / 36e5;
        case "minute":
            return 1440 * t + s / 6e4;
        case "second":
            return 86400 * t + s / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + s;
        default:
            throw new Error("Unknown unit " + e)
        }
    }
    ,
    jn.asMilliseconds = On,
    jn.asSeconds = Tn,
    jn.asMinutes = xn,
    jn.asHours = bn,
    jn.asDays = Pn,
    jn.asWeeks = Wn,
    jn.asMonths = Hn,
    jn.asYears = Rn,
    jn.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN
    }
    ,
    jn._bubble = function() {
        var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data;
        return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * je(ze(o) + a),
        a = 0,
        o = 0),
        u.milliseconds = r % 1e3,
        e = y(r / 1e3),
        u.seconds = e % 60,
        t = y(e / 60),
        u.minutes = t % 60,
        n = y(t / 60),
        u.hours = n % 24,
        a += y(n / 24),
        i = y(Ze(a)),
        o += i,
        a -= je(ze(i)),
        s = y(o / 12),
        o %= 12,
        u.days = a,
        u.months = o,
        u.years = s,
        this
    }
    ,
    jn.clone = function() {
        return xe(this)
    }
    ,
    jn.get = function(e) {
        return e = O(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    ,
    jn.milliseconds = Cn,
    jn.seconds = Fn,
    jn.minutes = Un,
    jn.hours = Ln,
    jn.days = Nn,
    jn.weeks = function() {
        return y(this.days() / 7)
    }
    ,
    jn.months = Gn,
    jn.years = Vn,
    jn.humanize = function(e) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var t = this.localeData()
          , n = function(e, t, n) {
            var s = xe(e).abs()
              , i = En(s.as("s"))
              , r = En(s.as("m"))
              , a = En(s.as("h"))
              , o = En(s.as("d"))
              , u = En(s.as("M"))
              , l = En(s.as("y"))
              , d = i <= In.ss && ["s", i] || i < In.s && ["ss", i] || r <= 1 && ["m"] || r < In.m && ["mm", r] || a <= 1 && ["h"] || a < In.h && ["hh", a] || o <= 1 && ["d"] || o < In.d && ["dd", o] || u <= 1 && ["M"] || u < In.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l];
            return d[2] = t,
            d[3] = +e > 0,
            d[4] = n,
            function(e, t, n, s, i) {
                return i.relativeTime(t || 1, !!n, e, s)
            }
            .apply(null, d)
        }(this, !e, t);
        return e && (n = t.pastFuture(+this, n)),
        t.postformat(n)
    }
    ,
    jn.toISOString = Be,
    jn.toString = Be,
    jn.toJSON = Be,
    jn.locale = Ce,
    jn.localeData = Fe,
    jn.toIsoString = v("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Be),
    jn.lang = gn,
    P("X", 0, 0, "unix"),
    P("x", 0, 0, "valueOf"),
    C("x", Mt),
    C("X", /[+-]?\d+(\.\d{1,3})?/),
    L("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }),
    L("x", function(e, t, n) {
        n._d = new Date(g(e))
    }),
    e.version = "2.20.1",
    function(e) {
        Qe = e
    }(pe),
    e.fn = Dn,
    e.min = function() {
        return we("isBefore", [].slice.call(arguments, 0))
    }
    ,
    e.max = function() {
        return we("isAfter", [].slice.call(arguments, 0))
    }
    ,
    e.now = function() {
        return Date.now ? Date.now() : +new Date
    }
    ,
    e.utc = l,
    e.unix = function(e) {
        return pe(1e3 * e)
    }
    ,
    e.months = function(e, t) {
        return Ee(e, t, "months")
    }
    ,
    e.isDate = r,
    e.locale = ae,
    e.invalid = c,
    e.duration = xe,
    e.isMoment = _,
    e.weekdays = function(e, t, n) {
        return Ie(e, t, n, "weekdays")
    }
    ,
    e.parseZone = function() {
        return pe.apply(null, arguments).parseZone()
    }
    ,
    e.localeData = ue,
    e.isDuration = Me,
    e.monthsShort = function(e, t) {
        return Ee(e, t, "monthsShort")
    }
    ,
    e.weekdaysMin = function(e, t, n) {
        return Ie(e, t, n, "weekdaysMin")
    }
    ,
    e.defineLocale = oe,
    e.updateLocale = function(e, t) {
        if (null != t) {
            var n, s, i = Qt;
            null != (s = re(e)) && (i = s._config),
            (n = new k(t = D(i, t))).parentLocale = Xt[e],
            Xt[e] = n,
            ae(e)
        } else
            null != Xt[e] && (null != Xt[e].parentLocale ? Xt[e] = Xt[e].parentLocale : null != Xt[e] && delete Xt[e]);
        return Xt[e]
    }
    ,
    e.locales = function() {
        return nt(Xt)
    }
    ,
    e.weekdaysShort = function(e, t, n) {
        return Ie(e, t, n, "weekdaysShort")
    }
    ,
    e.normalizeUnits = O,
    e.relativeTimeRounding = function(e) {
        return void 0 === e ? En : "function" == typeof e && (En = e,
        !0)
    }
    ,
    e.relativeTimeThreshold = function(e, t) {
        return void 0 !== In[e] && (void 0 === t ? In[e] : (In[e] = t,
        "s" === e && (In.ss = t - 1),
        !0))
    }
    ,
    e.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    ,
    e.prototype = Dn,
    e.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
    },
    e
});
/*!
 * FullCalendar v3.8.2
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("moment"), require("jquery")) : "function" == typeof define && define.amd ? define(["moment", "jquery"], e) : "object" == typeof exports ? exports.FullCalendar = e(require("moment"), require("jquery")) : t.FullCalendar = e(t.moment, t.jQuery)
}("undefined" != typeof self ? self : this, function(t, e) {
    return function(t) {
        function e(i) {
            if (n[i])
                return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, e),
            r.l = !0,
            r.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return e.d(n, "a", n),
            n
        }
        ,
        e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        e.p = "",
        e(e.s = 236)
    }([function(e, n) {
        e.exports = t
    }
    , , function(t, e) {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        ;
        e.__extends = function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
    }
    , function(t, n) {
        t.exports = e
    }
    , function(t, e, n) {
        function i(t, e) {
            e.left && t.css({
                "border-left-width": 1,
                "margin-left": e.left - 1
            }),
            e.right && t.css({
                "border-right-width": 1,
                "margin-right": e.right - 1
            })
        }
        function r(t) {
            t.css({
                "margin-left": "",
                "margin-right": "",
                "border-left-width": "",
                "border-right-width": ""
            })
        }
        function o() {
            ht("body").addClass("fc-not-allowed")
        }
        function s() {
            ht("body").removeClass("fc-not-allowed")
        }
        function a(t, e, n) {
            var i = Math.floor(e / t.length)
              , r = Math.floor(e - i * (t.length - 1))
              , o = []
              , s = []
              , a = []
              , u = 0;
            l(t),
            t.each(function(e, n) {
                var l = e === t.length - 1 ? r : i
                  , d = ht(n).outerHeight(!0);
                d < l ? (o.push(n),
                s.push(d),
                a.push(ht(n).height())) : u += d
            }),
            n && (e -= u,
            i = Math.floor(e / o.length),
            r = Math.floor(e - i * (o.length - 1))),
            ht(o).each(function(t, e) {
                var n = t === o.length - 1 ? r : i
                  , l = s[t]
                  , u = a[t]
                  , d = n - (l - u);
                l < n && ht(e).height(d)
            })
        }
        function l(t) {
            t.height("")
        }
        function u(t) {
            var e = 0;
            return t.find("> *").each(function(t, n) {
                var i = ht(n).outerWidth();
                i > e && (e = i)
            }),
            e++,
            t.width(e),
            e
        }
        function d(t, e) {
            var n, i = t.add(e);
            return i.css({
                position: "relative",
                left: -1
            }),
            n = t.outerHeight() - e.outerHeight(),
            i.css({
                position: "",
                left: ""
            }),
            n
        }
        function c(t) {
            var e = t.css("position")
              , n = t.parents().filter(function() {
                var t = ht(this);
                return /(auto|scroll)/.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
            return "fixed" !== e && n.length ? n : ht(t[0].ownerDocument || document)
        }
        function p(t, e) {
            var n = t.offset()
              , i = n.left - (e ? e.left : 0)
              , r = n.top - (e ? e.top : 0);
            return {
                left: i,
                right: i + t.outerWidth(),
                top: r,
                bottom: r + t.outerHeight()
            }
        }
        function h(t, e) {
            var n = t.offset()
              , i = g(t)
              , r = n.left + w(t, "border-left-width") + i.left - (e ? e.left : 0)
              , o = n.top + w(t, "border-top-width") + i.top - (e ? e.top : 0);
            return {
                left: r,
                right: r + t[0].clientWidth,
                top: o,
                bottom: o + t[0].clientHeight
            }
        }
        function f(t, e) {
            var n = t.offset()
              , i = n.left + w(t, "border-left-width") + w(t, "padding-left") - (e ? e.left : 0)
              , r = n.top + w(t, "border-top-width") + w(t, "padding-top") - (e ? e.top : 0);
            return {
                left: i,
                right: i + t.width(),
                top: r,
                bottom: r + t.height()
            }
        }
        function g(t) {
            var e, n = t[0].offsetWidth - t[0].clientWidth, i = t[0].offsetHeight - t[0].clientHeight;
            return n = v(n),
            i = v(i),
            e = {
                left: 0,
                right: 0,
                top: 0,
                bottom: i
            },
            y() && "rtl" === t.css("direction") ? e.left = n : e.right = n,
            e
        }
        function v(t) {
            return t = Math.max(0, t),
            t = Math.round(t)
        }
        function y() {
            return null === ft && (ft = m()),
            ft
        }
        function m() {
            var t = ht("<div><div/></div>").css({
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }).appendTo("body")
              , e = t.children()
              , n = e.offset().left > t.offset().left;
            return t.remove(),
            n
        }
        function w(t, e) {
            return parseFloat(t.css(e)) || 0
        }
        function b(t) {
            return 1 === t.which && !t.ctrlKey
        }
        function D(t) {
            var e = t.originalEvent.touches;
            return e && e.length ? e[0].pageX : t.pageX
        }
        function E(t) {
            var e = t.originalEvent.touches;
            return e && e.length ? e[0].pageY : t.pageY
        }
        function S(t) {
            return /^touch/.test(t.type)
        }
        function C(t) {
            t.addClass("fc-unselectable").on("selectstart", T)
        }
        function R(t) {
            t.removeClass("fc-unselectable").off("selectstart", T)
        }
        function T(t) {
            t.preventDefault()
        }
        function M(t, e) {
            var n = {
                left: Math.max(t.left, e.left),
                right: Math.min(t.right, e.right),
                top: Math.max(t.top, e.top),
                bottom: Math.min(t.bottom, e.bottom)
            };
            return n.left < n.right && n.top < n.bottom && n
        }
        function I(t, e) {
            return {
                left: Math.min(Math.max(t.left, e.left), e.right),
                top: Math.min(Math.max(t.top, e.top), e.bottom)
            }
        }
        function H(t) {
            return {
                left: (t.left + t.right) / 2,
                top: (t.top + t.bottom) / 2
            }
        }
        function P(t, e) {
            return {
                left: t.left - e.left,
                top: t.top - e.top
            }
        }
        function _(t) {
            var e, n, i = [], r = [];
            for ("string" == typeof t ? r = t.split(/\s*,\s*/) : "function" == typeof t ? r = [t] : ht.isArray(t) && (r = t),
            e = 0; e < r.length; e++)
                n = r[e],
                "string" == typeof n ? i.push("-" === n.charAt(0) ? {
                    field: n.substring(1),
                    order: -1
                } : {
                    field: n,
                    order: 1
                }) : "function" == typeof n && i.push({
                    func: n
                });
            return i
        }
        function x(t, e, n, i, r) {
            var o, s;
            for (o = 0; o < n.length; o++)
                if (s = F(t, e, n[o], i, r))
                    return s;
            return 0
        }
        function F(t, e, n, i, r) {
            if (n.func)
                return n.func(t, e);
            var o = t[n.field]
              , s = e[n.field];
            return null == o && i && (o = i[n.field]),
            null == s && r && (s = r[n.field]),
            O(o, s) * (n.order || 1)
        }
        function O(t, e) {
            return t || e ? null == e ? -1 : null == t ? 1 : "string" === ht.type(t) || "string" === ht.type(e) ? String(t).localeCompare(String(e)) : t - e : 0
        }
        function z(t, e) {
            return pt.duration({
                days: t.clone().stripTime().diff(e.clone().stripTime(), "days"),
                ms: t.time() - e.time()
            })
        }
        function B(t, e) {
            return pt.duration({
                days: t.clone().stripTime().diff(e.clone().stripTime(), "days")
            })
        }
        function k(t, e, n) {
            return pt.duration(Math.round(t.diff(e, n, !0)), n)
        }
        function A(t, n) {
            var i, r, o;
            for (i = 0; i < e.unitsDesc.length && (r = e.unitsDesc[i],
            !((o = V(r, t, n)) >= 1 && ut(o))); i++)
                ;
            return r
        }
        function L(t, e) {
            var n = A(t);
            return "week" === n && "object" == typeof e && e.days && (n = "day"),
            n
        }
        function V(t, e, n) {
            return null != n ? n.diff(e, t, !0) : pt.isDuration(e) ? e.as(t) : e.end.diff(e.start, t, !0)
        }
        function G(t, e, n) {
            var i;
            return U(n) ? (e - t) / n : (i = n.asMonths(),
            Math.abs(i) >= 1 && ut(i) ? e.diff(t, "months", !0) / i : e.diff(t, "days", !0) / n.asDays())
        }
        function N(t, e) {
            var n, i;
            return U(t) || U(e) ? t / e : (n = t.asMonths(),
            i = e.asMonths(),
            Math.abs(n) >= 1 && ut(n) && Math.abs(i) >= 1 && ut(i) ? n / i : t.asDays() / e.asDays())
        }
        function j(t, e) {
            var n;
            return U(t) ? pt.duration(t * e) : (n = t.asMonths(),
            Math.abs(n) >= 1 && ut(n) ? pt.duration({
                months: n * e
            }) : pt.duration({
                days: t.asDays() * e
            }))
        }
        function U(t) {
            return Boolean(t.hours() || t.minutes() || t.seconds() || t.milliseconds())
        }
        function W(t) {
            return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
        }
        function q(t) {
            return "string" == typeof t && /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)
        }
        function Y() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            var n = window.console;
            if (n && n.log)
                return n.log.apply(n, t)
        }
        function Z() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            var n = window.console;
            return n && n.warn ? n.warn.apply(n, t) : Y.apply(null, t)
        }
        function Q(t, e) {
            var n, i, r, o, s, a, l = {};
            if (e)
                for (n = 0; n < e.length; n++) {
                    for (i = e[n],
                    r = [],
                    o = t.length - 1; o >= 0; o--)
                        if ("object" == typeof (s = t[o][i]))
                            r.unshift(s);
                        else if (void 0 !== s) {
                            l[i] = s;
                            break
                        }
                    r.length && (l[i] = Q(r))
                }
            for (n = t.length - 1; n >= 0; n--) {
                a = t[n];
                for (i in a)
                    i in l || (l[i] = a[i])
            }
            return l
        }
        function X(t, e) {
            for (var n in t)
                $(t, n) && (e[n] = t[n])
        }
        function $(t, e) {
            return gt.call(t, e)
        }
        function K(t, e, n) {
            if (ht.isFunction(t) && (t = [t]),
            t) {
                var i = void 0
                  , r = void 0;
                for (i = 0; i < t.length; i++)
                    r = t[i].apply(e, n) || r;
                return r
            }
        }
        function J(t, e) {
            for (var n = 0, i = 0; i < t.length; )
                e(t[i]) ? (t.splice(i, 1),
                n++) : i++;
            return n
        }
        function tt(t, e) {
            for (var n = 0, i = 0; i < t.length; )
                t[i] === e ? (t.splice(i, 1),
                n++) : i++;
            return n
        }
        function et(t, e) {
            var n, i = t.length;
            if (null == i || i !== e.length)
                return !1;
            for (n = 0; n < i; n++)
                if (t[n] !== e[n])
                    return !1;
            return !0
        }
        function nt() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            for (var n = 0; n < t.length; n++)
                if (void 0 !== t[n])
                    return t[n]
        }
        function it(t) {
            return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
        }
        function rt(t) {
            return t.replace(/&.*?;/g, "")
        }
        function ot(t) {
            var e = [];
            return ht.each(t, function(t, n) {
                null != n && e.push(t + ":" + n)
            }),
            e.join(";")
        }
        function st(t) {
            var e = [];
            return ht.each(t, function(t, n) {
                null != n && e.push(t + '="' + it(n) + '"')
            }),
            e.join(" ")
        }
        function at(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        function lt(t, e) {
            return t - e
        }
        function ut(t) {
            return t % 1 == 0
        }
        function dt(t, e) {
            var n = t[e];
            return function() {
                return n.apply(t, arguments)
            }
        }
        function ct(t, e, n) {
            void 0 === n && (n = !1);
            var i, r, o, s, a, l = function() {
                var u = +new Date - s;
                u < e ? i = setTimeout(l, e - u) : (i = null,
                n || (a = t.apply(o, r),
                o = r = null))
            };
            return function() {
                o = this,
                r = arguments,
                s = +new Date;
                var u = n && !i;
                return i || (i = setTimeout(l, e)),
                u && (a = t.apply(o, r),
                o = r = null),
                a
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var pt = n(0)
          , ht = n(3);
        e.compensateScroll = i,
        e.uncompensateScroll = r,
        e.disableCursor = o,
        e.enableCursor = s,
        e.distributeHeight = a,
        e.undistributeHeight = l,
        e.matchCellWidths = u,
        e.subtractInnerElHeight = d,
        e.getScrollParent = c,
        e.getOuterRect = p,
        e.getClientRect = h,
        e.getContentRect = f,
        e.getScrollbarWidths = g;
        var ft = null;
        e.isPrimaryMouseButton = b,
        e.getEvX = D,
        e.getEvY = E,
        e.getEvIsTouch = S,
        e.preventSelection = C,
        e.allowSelection = R,
        e.preventDefault = T,
        e.intersectRects = M,
        e.constrainPoint = I,
        e.getRectCenter = H,
        e.diffPoints = P,
        e.parseFieldSpecs = _,
        e.compareByFieldSpecs = x,
        e.compareByFieldSpec = F,
        e.flexibleCompare = O,
        e.dayIDs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        e.unitsDesc = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"],
        e.diffDayTime = z,
        e.diffDay = B,
        e.diffByUnit = k,
        e.computeGreatestUnit = A,
        e.computeDurationGreatestUnit = L,
        e.divideRangeByDuration = G,
        e.divideDurationByDuration = N,
        e.multiplyDuration = j,
        e.durationHasTime = U,
        e.isNativeDate = W,
        e.isTimeString = q,
        e.log = Y,
        e.warn = Z;
        var gt = {}.hasOwnProperty;
        e.mergeProps = Q,
        e.copyOwnProps = X,
        e.hasOwnProp = $,
        e.applyAll = K,
        e.removeMatching = J,
        e.removeExact = tt,
        e.isArraysEqual = et,
        e.firstDefined = nt,
        e.htmlEscape = it,
        e.stripHtmlEntities = rt,
        e.cssToStr = ot,
        e.attrsToStr = st,
        e.capitaliseFirstLetter = at,
        e.compareNumbers = lt,
        e.isInt = ut,
        e.proxy = dt,
        e.debounce = ct
    }
    , function(t, e, n) {
        function i(t, e) {
            return t.startMs - e.startMs
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(10)
          , s = function() {
            function t(t, e) {
                this.isStart = !0,
                this.isEnd = !0,
                r.isMoment(t) && (t = t.clone().stripZone()),
                r.isMoment(e) && (e = e.clone().stripZone()),
                t && (this.startMs = t.valueOf()),
                e && (this.endMs = e.valueOf())
            }
            return t.invertRanges = function(e, n) {
                var r, o, s = [], a = n.startMs;
                for (e.sort(i),
                r = 0; r < e.length; r++)
                    o = e[r],
                    o.startMs > a && s.push(new t(a,o.startMs)),
                    o.endMs > a && (a = o.endMs);
                return a < n.endMs && s.push(new t(a,n.endMs)),
                s
            }
            ,
            t.prototype.intersect = function(e) {
                var n = this.startMs
                  , i = this.endMs
                  , r = null;
                return null != e.startMs && (n = null == n ? e.startMs : Math.max(n, e.startMs)),
                null != e.endMs && (i = null == i ? e.endMs : Math.min(i, e.endMs)),
                (null == n || null == i || n < i) && (r = new t(n,i),
                r.isStart = this.isStart && n === this.startMs,
                r.isEnd = this.isEnd && i === this.endMs),
                r
            }
            ,
            t.prototype.intersectsWith = function(t) {
                return (null == this.endMs || null == t.startMs || this.endMs > t.startMs) && (null == this.startMs || null == t.endMs || this.startMs < t.endMs)
            }
            ,
            t.prototype.containsRange = function(t) {
                return (null == this.startMs || null != t.startMs && t.startMs >= this.startMs) && (null == this.endMs || null != t.endMs && t.endMs <= this.endMs)
            }
            ,
            t.prototype.containsDate = function(t) {
                var e = t.valueOf();
                return (null == this.startMs || e >= this.startMs) && (null == this.endMs || e < this.endMs)
            }
            ,
            t.prototype.constrainDate = function(t) {
                var e = t.valueOf();
                return null != this.startMs && e < this.startMs && (e = this.startMs),
                null != this.endMs && e >= this.endMs && (e = this.endMs - 1),
                e
            }
            ,
            t.prototype.equals = function(t) {
                return this.startMs === t.startMs && this.endMs === t.endMs
            }
            ,
            t.prototype.clone = function() {
                var e = new t(this.startMs,this.endMs);
                return e.isStart = this.isStart,
                e.isEnd = this.isEnd,
                e
            }
            ,
            t.prototype.getStart = function() {
                return null != this.startMs ? o.default.utc(this.startMs).stripZone() : null
            }
            ,
            t.prototype.getEnd = function() {
                return null != this.endMs ? o.default.utc(this.endMs).stripZone() : null
            }
            ,
            t.prototype.as = function(t) {
                return r.utc(this.endMs).diff(r.utc(this.startMs), t, !0)
            }
            ,
            t
        }();
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(208)
          , s = n(32)
          , a = n(49)
          , l = function(t) {
            function e(n) {
                var i = t.call(this) || this;
                return i.calendar = n,
                i.className = [],
                i.uid = String(e.uuid++),
                i
            }
            return i.__extends(e, t),
            e.parse = function(t, e) {
                var n = new this(e);
                return !("object" != typeof t || !n.applyProps(t)) && n
            }
            ,
            e.normalizeId = function(t) {
                return t ? String(t) : null
            }
            ,
            e.prototype.fetch = function(t, e, n) {}
            ,
            e.prototype.removeEventDefsById = function(t) {}
            ,
            e.prototype.removeAllEventDefs = function() {}
            ,
            e.prototype.getPrimitive = function(t) {}
            ,
            e.prototype.parseEventDefs = function(t) {
                var e, n, i = [];
                for (e = 0; e < t.length; e++)
                    (n = this.parseEventDef(t[e])) && i.push(n);
                return i
            }
            ,
            e.prototype.parseEventDef = function(t) {
                var e = this.calendar.opt("eventDataTransform")
                  , n = this.eventDataTransform;
                return e && (t = e(t, this.calendar)),
                n && (t = n(t, this.calendar)),
                a.default.parse(t, this)
            }
            ,
            e.prototype.applyManualStandardProps = function(t) {
                return null != t.id && (this.id = e.normalizeId(t.id)),
                r.isArray(t.className) ? this.className = t.className : "string" == typeof t.className && (this.className = t.className.split(/\s+/)),
                !0
            }
            ,
            e.uuid = 0,
            e.defineStandardProps = o.default.defineStandardProps,
            e.copyVerbatimStandardProps = o.default.copyVerbatimStandardProps,
            e
        }(s.default);
        e.default = l,
        o.default.mixInto(l),
        l.defineStandardProps({
            id: !1,
            className: !1,
            color: !0,
            backgroundColor: !0,
            borderColor: !0,
            textColor: !0,
            editable: !0,
            startEditable: !0,
            durationEditable: !0,
            rendering: !0,
            overlap: !0,
            constraint: !0,
            allDayDefault: !0,
            eventDataTransform: !0
        })
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(14)
          , s = 0
          , a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.listenTo = function(t, e, n) {
                if ("object" == typeof e)
                    for (var i in e)
                        e.hasOwnProperty(i) && this.listenTo(t, i, e[i]);
                else
                    "string" == typeof e && t.on(e + "." + this.getListenerNamespace(), r.proxy(n, this))
            }
            ,
            e.prototype.stopListeningTo = function(t, e) {
                t.off((e || "") + "." + this.getListenerNamespace())
            }
            ,
            e.prototype.getListenerNamespace = function() {
                return null == this.listenerId && (this.listenerId = s++),
                "_listener" + this.listenerId
            }
            ,
            e
        }(o.default);
        e.default = a
    }
    , , , function(t, e, n) {
        function i(t, e) {
            return c.format.call(t, e)
        }
        function r(t, e, n) {
            void 0 === e && (e = !1),
            void 0 === n && (n = !1);
            var i, r, d, c, p = t[0], h = 1 === t.length && "string" == typeof p;
            return o.isMoment(p) || a.isNativeDate(p) || void 0 === p ? c = o.apply(null, t) : (i = !1,
            r = !1,
            h ? l.test(p) ? (p += "-01",
            t = [p],
            i = !0,
            r = !0) : (d = u.exec(p)) && (i = !d[5],
            r = !0) : s.isArray(p) && (r = !0),
            c = e || i ? o.utc.apply(o, t) : o.apply(null, t),
            i ? (c._ambigTime = !0,
            c._ambigZone = !0) : n && (r ? c._ambigZone = !0 : h && c.utcOffset(p))),
            c._fullCalendar = !0,
            c
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0)
          , s = n(3)
          , a = n(4)
          , l = /^\s*\d{4}-\d\d$/
          , u = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/
          , d = o.fn;
        e.newMomentProto = d;
        var c = s.extend({}, d);
        e.oldMomentProto = c;
        var p = o.momentProperties;
        p.push("_fullCalendar"),
        p.push("_ambigTime"),
        p.push("_ambigZone"),
        e.oldMomentFormat = i;
        var h = function() {
            return r(arguments)
        };
        e.default = h,
        h.utc = function() {
            var t = r(arguments, !0);
            return t.hasTime() && t.utc(),
            t
        }
        ,
        h.parseZone = function() {
            return r(arguments, !0, !0)
        }
        ,
        d.week = d.weeks = function(t) {
            var e = this._locale._fullCalendar_weekCalc;
            return null == t && "function" == typeof e ? e(this) : "ISO" === e ? c.isoWeek.apply(this, arguments) : c.week.apply(this, arguments)
        }
        ,
        d.time = function(t) {
            if (!this._fullCalendar)
                return c.time.apply(this, arguments);
            if (null == t)
                return o.duration({
                    hours: this.hours(),
                    minutes: this.minutes(),
                    seconds: this.seconds(),
                    milliseconds: this.milliseconds()
                });
            this._ambigTime = !1,
            o.isDuration(t) || o.isMoment(t) || (t = o.duration(t));
            var e = 0;
            return o.isDuration(t) && (e = 24 * Math.floor(t.asDays())),
            this.hours(e + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
        }
        ,
        d.stripTime = function() {
            return this._ambigTime || (this.utc(!0),
            this.set({
                hours: 0,
                minutes: 0,
                seconds: 0,
                ms: 0
            }),
            this._ambigTime = !0,
            this._ambigZone = !0),
            this
        }
        ,
        d.hasTime = function() {
            return !this._ambigTime
        }
        ,
        d.stripZone = function() {
            var t;
            return this._ambigZone || (t = this._ambigTime,
            this.utc(!0),
            this._ambigTime = t || !1,
            this._ambigZone = !0),
            this
        }
        ,
        d.hasZone = function() {
            return !this._ambigZone
        }
        ,
        d.local = function(t) {
            return c.local.call(this, this._ambigZone || t),
            this._ambigTime = !1,
            this._ambigZone = !1,
            this
        }
        ,
        d.utc = function(t) {
            return c.utc.call(this, t),
            this._ambigTime = !1,
            this._ambigZone = !1,
            this
        }
        ,
        d.utcOffset = function(t) {
            return null != t && (this._ambigTime = !1,
            this._ambigZone = !1),
            c.utcOffset.apply(this, arguments)
        }
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(14)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.on = function(t, e) {
                return r(this).on(t, this._prepareIntercept(e)),
                this
            }
            ,
            e.prototype.one = function(t, e) {
                return r(this).one(t, this._prepareIntercept(e)),
                this
            }
            ,
            e.prototype._prepareIntercept = function(t) {
                var e = function(e, n) {
                    return t.apply(n.context || this, n.args || [])
                };
                return t.guid || (t.guid = r.guid++),
                e.guid = t.guid,
                e
            }
            ,
            e.prototype.off = function(t, e) {
                return r(this).off(t, e),
                this
            }
            ,
            e.prototype.trigger = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                return r(this).triggerHandler(t, {
                    args: e
                }),
                this
            }
            ,
            e.prototype.triggerWith = function(t, e, n) {
                return r(this).triggerHandler(t, {
                    context: e,
                    args: n
                }),
                this
            }
            ,
            e.prototype.hasHandlers = function(t) {
                var e = r._data(this, "events");
                return e && e[t] && e[t].length > 0
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.isAllDay = !1,
                this.unzonedRange = t,
                this.isAllDay = e
            }
            return t.prototype.toLegacy = function(t) {
                return {
                    start: t.msToMoment(this.unzonedRange.startMs, this.isAllDay),
                    end: t.msToMoment(this.unzonedRange.endMs, this.isAllDay)
                }
            }
            ,
            t
        }();
        e.default = n
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(33)
          , o = n(209)
          , s = n(17)
          , a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.buildInstances = function() {
                return [this.buildInstance()]
            }
            ,
            e.prototype.buildInstance = function() {
                return new o.default(this,this.dateProfile)
            }
            ,
            e.prototype.isAllDay = function() {
                return this.dateProfile.isAllDay()
            }
            ,
            e.prototype.clone = function() {
                var e = t.prototype.clone.call(this);
                return e.dateProfile = this.dateProfile,
                e
            }
            ,
            e.prototype.rezone = function() {
                var t = this.source.calendar
                  , e = this.dateProfile;
                this.dateProfile = new s.default(t.moment(e.start),e.end ? t.moment(e.end) : null,t)
            }
            ,
            e.prototype.applyManualStandardProps = function(e) {
                var n = t.prototype.applyManualStandardProps.call(this, e)
                  , i = s.default.parse(e, this.source);
                return !!i && (this.dateProfile = i,
                null != e.date && (this.miscProps.date = e.date),
                n)
            }
            ,
            e
        }(r.default);
        e.default = a,
        a.defineStandardProps({
            start: !1,
            date: !1,
            end: !1,
            allDay: !1
        })
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.mixInto = function(t) {
                var e = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function(n) {
                    t.prototype[n] || (t.prototype[n] = e.prototype[n])
                })
            }
            ,
            t.mixOver = function(t) {
                var e = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function(n) {
                    t.prototype[n] = e.prototype[n]
                })
            }
            ,
            t
        }();
        e.default = n
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.view = t._getView(),
                this.component = t
            }
            return t.prototype.opt = function(t) {
                return this.view.opt(t)
            }
            ,
            t.prototype.end = function() {}
            ,
            t
        }();
        e.default = n
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.version = "3.8.2",
        e.internalApiVersion = 12;
        var i = n(4);
        e.applyAll = i.applyAll,
        e.debounce = i.debounce,
        e.isInt = i.isInt,
        e.htmlEscape = i.htmlEscape,
        e.cssToStr = i.cssToStr,
        e.proxy = i.proxy,
        e.capitaliseFirstLetter = i.capitaliseFirstLetter,
        e.getOuterRect = i.getOuterRect,
        e.getClientRect = i.getClientRect,
        e.getContentRect = i.getContentRect,
        e.getScrollbarWidths = i.getScrollbarWidths,
        e.preventDefault = i.preventDefault,
        e.parseFieldSpecs = i.parseFieldSpecs,
        e.compareByFieldSpecs = i.compareByFieldSpecs,
        e.compareByFieldSpec = i.compareByFieldSpec,
        e.flexibleCompare = i.flexibleCompare,
        e.computeGreatestUnit = i.computeGreatestUnit,
        e.divideRangeByDuration = i.divideRangeByDuration,
        e.divideDurationByDuration = i.divideDurationByDuration,
        e.multiplyDuration = i.multiplyDuration,
        e.durationHasTime = i.durationHasTime,
        e.log = i.log,
        e.warn = i.warn,
        e.removeExact = i.removeExact,
        e.intersectRects = i.intersectRects;
        var r = n(47);
        e.formatDate = r.formatDate,
        e.formatRange = r.formatRange,
        e.queryMostGranularFormatUnit = r.queryMostGranularFormatUnit;
        var o = n(30);
        e.datepickerLocale = o.datepickerLocale,
        e.locale = o.locale;
        var s = n(10);
        e.moment = s.default;
        var a = n(11);
        e.EmitterMixin = a.default;
        var l = n(7);
        e.ListenerMixin = l.default;
        var u = n(48);
        e.Model = u.default;
        var d = n(207);
        e.Constraints = d.default;
        var c = n(5);
        e.UnzonedRange = c.default;
        var p = n(12);
        e.ComponentFootprint = p.default;
        var h = n(212);
        e.BusinessHourGenerator = h.default;
        var f = n(33);
        e.EventDef = f.default;
        var g = n(36);
        e.EventDefMutation = g.default;
        var v = n(37);
        e.EventSourceParser = v.default;
        var y = n(6);
        e.EventSource = y.default;
        var m = n(51);
        e.defineThemeSystem = m.defineThemeSystem;
        var w = n(18);
        e.EventInstanceGroup = w.default;
        var b = n(52);
        e.ArrayEventSource = b.default;
        var D = n(215);
        e.FuncEventSource = D.default;
        var E = n(216);
        e.JsonFeedEventSource = E.default;
        var S = n(35);
        e.EventFootprint = S.default;
        var C = n(32);
        e.Class = C.default;
        var R = n(14);
        e.Mixin = R.default;
        var T = n(53);
        e.CoordCache = T.default;
        var M = n(54);
        e.DragListener = M.default;
        var I = n(19);
        e.Promise = I.default;
        var H = n(217);
        e.TaskQueue = H.default;
        var P = n(218);
        e.RenderQueue = P.default;
        var _ = n(39);
        e.Scroller = _.default;
        var x = n(38);
        e.Theme = x.default;
        var F = n(219);
        e.DateComponent = F.default;
        var O = n(40);
        e.InteractiveDateComponent = O.default;
        var z = n(220);
        e.Calendar = z.default;
        var B = n(41);
        e.View = B.default;
        var k = n(21);
        e.defineView = k.defineView,
        e.getViewConfig = k.getViewConfig;
        var A = n(55);
        e.DayTableMixin = A.default;
        var L = n(56);
        e.BusinessHourRenderer = L.default;
        var V = n(42);
        e.EventRenderer = V.default;
        var G = n(57);
        e.FillRenderer = G.default;
        var N = n(58);
        e.HelperRenderer = N.default;
        var j = n(222);
        e.ExternalDropping = j.default;
        var U = n(223);
        e.EventResizing = U.default;
        var W = n(59);
        e.EventPointing = W.default;
        var q = n(224);
        e.EventDragging = q.default;
        var Y = n(225);
        e.DateSelecting = Y.default;
        var Z = n(60);
        e.StandardInteractionsMixin = Z.default;
        var Q = n(226);
        e.AgendaView = Q.default;
        var X = n(227);
        e.TimeGrid = X.default;
        var $ = n(61);
        e.DayGrid = $.default;
        var K = n(62);
        e.BasicView = K.default;
        var J = n(229);
        e.MonthView = J.default;
        var tt = n(230);
        e.ListView = tt.default
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(5)
          , r = function() {
            function t(t, e, n) {
                this.start = t,
                this.end = e || null,
                this.unzonedRange = this.buildUnzonedRange(n)
            }
            return t.parse = function(e, n) {
                var i = e.start || e.date
                  , r = e.end;
                if (!i)
                    return !1;
                var o = n.calendar
                  , s = o.moment(i)
                  , a = r ? o.moment(r) : null
                  , l = e.allDay
                  , u = o.opt("forceEventDuration");
                return !!s.isValid() && (!a || a.isValid() && a.isAfter(s) || (a = null),
                null == l && null == (l = n.allDayDefault) && (l = o.opt("allDayDefault")),
                !0 === l ? (s.stripTime(),
                a && a.stripTime()) : !1 === l && (s.hasTime() || s.time(0),
                a && !a.hasTime() && a.time(0)),
                !a && u && (a = o.getDefaultEventEnd(!s.hasTime(), s)),
                new t(s,a,o))
            }
            ,
            t.isStandardProp = function(t) {
                return "start" === t || "date" === t || "end" === t || "allDay" === t
            }
            ,
            t.prototype.isAllDay = function() {
                return !(this.start.hasTime() || this.end && this.end.hasTime())
            }
            ,
            t.prototype.buildUnzonedRange = function(t) {
                var e = this.start.clone().stripZone().valueOf()
                  , n = this.getEnd(t).stripZone().valueOf();
                return new i.default(e,n)
            }
            ,
            t.prototype.getEnd = function(t) {
                return this.end ? this.end.clone() : t.getDefaultEventEnd(this.isAllDay(), this.start)
            }
            ,
            t
        }();
        e.default = r
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(5)
          , r = n(34)
          , o = n(211)
          , s = function() {
            function t(t) {
                this.eventInstances = t || []
            }
            return t.prototype.getAllEventRanges = function(t) {
                return t ? this.sliceNormalRenderRanges(t) : this.eventInstances.map(r.eventInstanceToEventRange)
            }
            ,
            t.prototype.sliceRenderRanges = function(t) {
                return this.isInverse() ? this.sliceInverseRenderRanges(t) : this.sliceNormalRenderRanges(t)
            }
            ,
            t.prototype.sliceNormalRenderRanges = function(t) {
                var e, n, i, r = this.eventInstances, s = [];
                for (e = 0; e < r.length; e++)
                    n = r[e],
                    (i = n.dateProfile.unzonedRange.intersect(t)) && s.push(new o.default(i,n.def,n));
                return s
            }
            ,
            t.prototype.sliceInverseRenderRanges = function(t) {
                var e = this.eventInstances.map(r.eventInstanceToUnzonedRange)
                  , n = this.getEventDef();
                return e = i.default.invertRanges(e, t),
                e.map(function(t) {
                    return new o.default(t,n)
                })
            }
            ,
            t.prototype.isInverse = function() {
                return this.getEventDef().hasInverseRendering()
            }
            ,
            t.prototype.getEventDef = function() {
                return this.explicitEventDef || this.eventInstances[0].def
            }
            ,
            t
        }();
        e.default = s
    }
    , function(t, e, n) {
        function i(t, e) {
            t.then = function(n) {
                return "function" == typeof n ? s.resolve(n(e)) : t
            }
        }
        function r(t) {
            t.then = function(e, n) {
                return "function" == typeof n && n(),
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(3)
          , s = {
            construct: function(t) {
                var e = o.Deferred()
                  , n = e.promise();
                return "function" == typeof t && t(function(t) {
                    e.resolve(t),
                    i(n, t)
                }, function() {
                    e.reject(),
                    r(n)
                }),
                n
            },
            resolve: function(t) {
                var e = o.Deferred().resolve(t)
                  , n = e.promise();
                return i(n, t),
                n
            },
            reject: function() {
                var t = o.Deferred().reject()
                  , e = t.promise();
                return r(e),
                e
            }
        };
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(16)
          , o = n(11)
          , s = n(7);
        r.touchMouseIgnoreWait = 500;
        var a = null
          , l = 0
          , u = function() {
            function t() {
                this.isTouching = !1,
                this.mouseIgnoreDepth = 0
            }
            return t.get = function() {
                return a || (a = new t,
                a.bind()),
                a
            }
            ,
            t.needed = function() {
                t.get(),
                l++
            }
            ,
            t.unneeded = function() {
                --l || (a.unbind(),
                a = null)
            }
            ,
            t.prototype.bind = function() {
                var t = this;
                this.listenTo(i(document), {
                    touchstart: this.handleTouchStart,
                    touchcancel: this.handleTouchCancel,
                    touchend: this.handleTouchEnd,
                    mousedown: this.handleMouseDown,
                    mousemove: this.handleMouseMove,
                    mouseup: this.handleMouseUp,
                    click: this.handleClick,
                    selectstart: this.handleSelectStart,
                    contextmenu: this.handleContextMenu
                }),
                window.addEventListener("touchmove", this.handleTouchMoveProxy = function(e) {
                    t.handleTouchMove(i.Event(e))
                }
                , {
                    passive: !1
                }),
                window.addEventListener("scroll", this.handleScrollProxy = function(e) {
                    t.handleScroll(i.Event(e))
                }
                , !0)
            }
            ,
            t.prototype.unbind = function() {
                this.stopListeningTo(i(document)),
                window.removeEventListener("touchmove", this.handleTouchMoveProxy),
                window.removeEventListener("scroll", this.handleScrollProxy, !0)
            }
            ,
            t.prototype.handleTouchStart = function(t) {
                this.stopTouch(t, !0),
                this.isTouching = !0,
                this.trigger("touchstart", t)
            }
            ,
            t.prototype.handleTouchMove = function(t) {
                this.isTouching && this.trigger("touchmove", t)
            }
            ,
            t.prototype.handleTouchCancel = function(t) {
                this.isTouching && (this.trigger("touchcancel", t),
                this.stopTouch(t))
            }
            ,
            t.prototype.handleTouchEnd = function(t) {
                this.stopTouch(t)
            }
            ,
            t.prototype.handleMouseDown = function(t) {
                this.shouldIgnoreMouse() || this.trigger("mousedown", t)
            }
            ,
            t.prototype.handleMouseMove = function(t) {
                this.shouldIgnoreMouse() || this.trigger("mousemove", t)
            }
            ,
            t.prototype.handleMouseUp = function(t) {
                this.shouldIgnoreMouse() || this.trigger("mouseup", t)
            }
            ,
            t.prototype.handleClick = function(t) {
                this.shouldIgnoreMouse() || this.trigger("click", t)
            }
            ,
            t.prototype.handleSelectStart = function(t) {
                this.trigger("selectstart", t)
            }
            ,
            t.prototype.handleContextMenu = function(t) {
                this.trigger("contextmenu", t)
            }
            ,
            t.prototype.handleScroll = function(t) {
                this.trigger("scroll", t)
            }
            ,
            t.prototype.stopTouch = function(t, e) {
                void 0 === e && (e = !1),
                this.isTouching && (this.isTouching = !1,
                this.trigger("touchend", t),
                e || this.startTouchMouseIgnore())
            }
            ,
            t.prototype.startTouchMouseIgnore = function() {
                var t = this
                  , e = r.touchMouseIgnoreWait;
                e && (this.mouseIgnoreDepth++,
                setTimeout(function() {
                    t.mouseIgnoreDepth--
                }, e))
            }
            ,
            t.prototype.shouldIgnoreMouse = function() {
                return this.isTouching || Boolean(this.mouseIgnoreDepth)
            }
            ,
            t
        }();
        e.default = u,
        s.default.mixInto(u),
        o.default.mixInto(u)
    }
    , function(t, e, n) {
        function i(t, n) {
            e.viewHash[t] = n
        }
        function r(t) {
            return e.viewHash[t]
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(16);
        e.viewHash = {},
        o.views = e.viewHash,
        e.defineView = i,
        e.getViewConfig = r
    }
    , function(t, e, n) {
        function i(t, e) {
            return !t && !e || !(!t || !e) && (t.component === e.component && r(t, e) && r(e, t))
        }
        function r(t, e) {
            for (var n in t)
                if (!/^(component|left|right|top|bottom)$/.test(n) && t[n] !== e[n])
                    return !1;
            return !0
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(2)
          , s = n(4)
          , a = n(54)
          , l = function(t) {
            function e(e, n) {
                var i = t.call(this, n) || this;
                return i.component = e,
                i
            }
            return o.__extends(e, t),
            e.prototype.handleInteractionStart = function(e) {
                var n, i, r, o = this.subjectEl;
                this.component.hitsNeeded(),
                this.computeScrollBounds(),
                e ? (i = {
                    left: s.getEvX(e),
                    top: s.getEvY(e)
                },
                r = i,
                o && (n = s.getOuterRect(o),
                r = s.constrainPoint(r, n)),
                this.origHit = this.queryHit(r.left, r.top),
                o && this.options.subjectCenter && (this.origHit && (n = s.intersectRects(this.origHit, n) || n),
                r = s.getRectCenter(n)),
                this.coordAdjust = s.diffPoints(r, i)) : (this.origHit = null,
                this.coordAdjust = null),
                t.prototype.handleInteractionStart.call(this, e)
            }
            ,
            e.prototype.handleDragStart = function(e) {
                var n;
                t.prototype.handleDragStart.call(this, e),
                (n = this.queryHit(s.getEvX(e), s.getEvY(e))) && this.handleHitOver(n)
            }
            ,
            e.prototype.handleDrag = function(e, n, r) {
                var o;
                t.prototype.handleDrag.call(this, e, n, r),
                o = this.queryHit(s.getEvX(r), s.getEvY(r)),
                i(o, this.hit) || (this.hit && this.handleHitOut(),
                o && this.handleHitOver(o))
            }
            ,
            e.prototype.handleDragEnd = function(e) {
                this.handleHitDone(),
                t.prototype.handleDragEnd.call(this, e)
            }
            ,
            e.prototype.handleHitOver = function(t) {
                var e = i(t, this.origHit);
                this.hit = t,
                this.trigger("hitOver", this.hit, e, this.origHit)
            }
            ,
            e.prototype.handleHitOut = function() {
                this.hit && (this.trigger("hitOut", this.hit),
                this.handleHitDone(),
                this.hit = null)
            }
            ,
            e.prototype.handleHitDone = function() {
                this.hit && this.trigger("hitDone", this.hit)
            }
            ,
            e.prototype.handleInteractionEnd = function(e, n) {
                t.prototype.handleInteractionEnd.call(this, e, n),
                this.origHit = null,
                this.hit = null,
                this.component.hitsNotNeeded()
            }
            ,
            e.prototype.handleScrollEnd = function() {
                t.prototype.handleScrollEnd.call(this),
                this.isDragging && (this.component.releaseHits(),
                this.component.prepareHits())
            }
            ,
            e.prototype.queryHit = function(t, e) {
                return this.coordAdjust && (t += this.coordAdjust.left,
                e += this.coordAdjust.top),
                this.component.queryHit(t, e)
            }
            ,
            e
        }(a.default);
        e.default = l
    }
    , , , , , , , , function(t, e, n) {
        function i(t) {
            a.each(f, function(e, n) {
                null == t[e] && (t[e] = n(t))
            })
        }
        function r(t, n, i) {
            var r = e.localeOptionHash[t] || (e.localeOptionHash[t] = {});
            r.isRTL = i.isRTL,
            r.weekNumberTitle = i.weekHeader,
            a.each(p, function(t, e) {
                r[t] = e(i)
            });
            var o = a.datepicker;
            o && (o.regional[n] = o.regional[t] = i,
            o.regional.en = o.regional[""],
            o.setDefaults(i))
        }
        function o(t, n) {
            var i, r;
            i = e.localeOptionHash[t] || (e.localeOptionHash[t] = {}),
            n && (i = e.localeOptionHash[t] = d.mergeOptions([i, n])),
            r = s(t),
            a.each(h, function(t, e) {
                null == i[t] && (i[t] = e(r, i))
            }),
            d.globalDefaults.locale = t
        }
        function s(t) {
            return l.localeData(t) || l.localeData("en")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(3)
          , l = n(0)
          , u = n(16)
          , d = n(31)
          , c = n(4);
        e.localeOptionHash = {},
        u.locales = e.localeOptionHash;
        var p = {
            buttonText: function(t) {
                return {
                    prev: c.stripHtmlEntities(t.prevText),
                    next: c.stripHtmlEntities(t.nextText),
                    today: c.stripHtmlEntities(t.currentText)
                }
            },
            monthYearFormat: function(t) {
                return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]"
            }
        }
          , h = {
            dayOfMonthFormat: function(t, e) {
                var n = t.longDateFormat("l");
                return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""),
                e.isRTL ? n += " ddd" : n = "ddd " + n,
                n
            },
            mediumTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "a")
            },
            smallTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
            },
            extraSmallTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
            },
            hourFormat: function(t) {
                return t.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
            },
            noMeridiemTimeFormat: function(t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "")
            }
        }
          , f = {
            smallDayDateFormat: function(t) {
                return t.isRTL ? "D dd" : "dd D"
            },
            weekFormat: function(t) {
                return t.isRTL ? "w[ " + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + " ]w"
            },
            smallWeekFormat: function(t) {
                return t.isRTL ? "w[" + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + "]w"
            }
        };
        e.populateInstanceComputableOptions = i,
        e.datepickerLocale = r,
        e.locale = o,
        e.getMomentLocaleData = s,
        o("en", d.englishDefaults)
    }
    , function(t, e, n) {
        function i(t) {
            return r.mergeProps(t, o)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(4);
        e.globalDefaults = {
            titleRangeSeparator: " – ",
            monthYearFormat: "MMMM YYYY",
            defaultTimedEventDuration: "02:00:00",
            defaultAllDayEventDuration: {
                days: 1
            },
            forceEventDuration: !1,
            nextDayThreshold: "09:00:00",
            columnHeader: !0,
            defaultView: "month",
            aspectRatio: 1.35,
            header: {
                left: "title",
                center: "",
                right: "today prev,next"
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberTitle: "W",
            weekNumberCalculation: "local",
            scrollTime: "06:00:00",
            minTime: "00:00:00",
            maxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timezoneParam: "timezone",
            timezone: !1,
            locale: null,
            isRTL: !1,
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day"
            },
            allDayText: "all-day",
            agendaEventMinHeight: 0,
            theme: !1,
            dragOpacity: .75,
            dragRevertDuration: 500,
            dragScroll: !0,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "title",
            eventLimit: !1,
            eventLimitText: "more",
            eventLimitClick: "popover",
            dayPopoverFormat: "LL",
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3
        },
        e.englishDefaults = {
            dayPopoverFormat: "dddd, MMMM D"
        },
        e.rtlDefaults = {
            header: {
                left: "next,prev today",
                center: "",
                right: "title"
            },
            buttonIcons: {
                prev: "right-single-arrow",
                next: "left-single-arrow",
                prevYear: "right-double-arrow",
                nextYear: "left-double-arrow"
            },
            themeButtonIcons: {
                prev: "circle-triangle-e",
                next: "circle-triangle-w",
                nextYear: "seek-prev",
                prevYear: "seek-next"
            }
        };
        var o = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];
        e.mergeOptions = i
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(4)
          , o = function() {
            function t() {}
            return t.extend = function(t) {
                var e = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return i.__extends(e, t),
                    e
                }(this);
                return r.copyOwnProps(t, e.prototype),
                e
            }
            ,
            t.mixin = function(t) {
                r.copyOwnProps(t, this.prototype)
            }
            ,
            t
        }();
        e.default = o
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(208)
          , o = function() {
            function t(t) {
                this.source = t,
                this.className = [],
                this.miscProps = {}
            }
            return t.parse = function(t, e) {
                var n = new this(e);
                return !!n.applyProps(t) && n
            }
            ,
            t.normalizeId = function(t) {
                return String(t)
            }
            ,
            t.generateId = function() {
                return "_fc" + t.uuid++
            }
            ,
            t.prototype.clone = function() {
                var e = new this.constructor(this.source);
                return e.id = this.id,
                e.rawId = this.rawId,
                e.uid = this.uid,
                t.copyVerbatimStandardProps(this, e),
                e.className = this.className.slice(),
                e.miscProps = i.extend({}, this.miscProps),
                e
            }
            ,
            t.prototype.hasInverseRendering = function() {
                return "inverse-background" === this.getRendering()
            }
            ,
            t.prototype.hasBgRendering = function() {
                var t = this.getRendering();
                return "inverse-background" === t || "background" === t
            }
            ,
            t.prototype.getRendering = function() {
                return null != this.rendering ? this.rendering : this.source.rendering
            }
            ,
            t.prototype.getConstraint = function() {
                return null != this.constraint ? this.constraint : null != this.source.constraint ? this.source.constraint : this.source.calendar.opt("eventConstraint")
            }
            ,
            t.prototype.getOverlap = function() {
                return null != this.overlap ? this.overlap : null != this.source.overlap ? this.source.overlap : this.source.calendar.opt("eventOverlap")
            }
            ,
            t.prototype.isStartExplicitlyEditable = function() {
                return null != this.startEditable ? this.startEditable : this.source.startEditable
            }
            ,
            t.prototype.isDurationExplicitlyEditable = function() {
                return null != this.durationEditable ? this.durationEditable : this.source.durationEditable
            }
            ,
            t.prototype.isExplicitlyEditable = function() {
                return null != this.editable ? this.editable : this.source.editable
            }
            ,
            t.prototype.toLegacy = function() {
                var e = i.extend({}, this.miscProps);
                return e._id = this.uid,
                e.source = this.source,
                e.className = this.className.slice(),
                e.allDay = this.isAllDay(),
                null != this.rawId && (e.id = this.rawId),
                t.copyVerbatimStandardProps(this, e),
                e
            }
            ,
            t.prototype.applyManualStandardProps = function(e) {
                return null != e.id ? this.id = t.normalizeId(this.rawId = e.id) : this.id = t.generateId(),
                null != e._id ? this.uid = String(e._id) : this.uid = t.generateId(),
                i.isArray(e.className) && (this.className = e.className),
                "string" == typeof e.className && (this.className = e.className.split(/\s+/)),
                !0
            }
            ,
            t.prototype.applyMiscProps = function(t) {
                i.extend(this.miscProps, t)
            }
            ,
            t.uuid = 0,
            t.defineStandardProps = r.default.defineStandardProps,
            t.copyVerbatimStandardProps = r.default.copyVerbatimStandardProps,
            t
        }();
        e.default = o,
        r.default.mixInto(o),
        o.defineStandardProps({
            _id: !1,
            id: !1,
            className: !1,
            source: !1,
            title: !0,
            url: !0,
            rendering: !0,
            constraint: !0,
            overlap: !0,
            editable: !0,
            startEditable: !0,
            durationEditable: !0,
            color: !0,
            backgroundColor: !0,
            borderColor: !0,
            textColor: !0
        })
    }
    , function(t, e, n) {
        function i(t, e) {
            var n, i = [];
            for (n = 0; n < t.length; n++)
                i.push.apply(i, t[n].buildInstances(e));
            return i
        }
        function r(t) {
            return new l.default(t.dateProfile.unzonedRange,t.def,t)
        }
        function o(t) {
            return new u.default(new d.default(t.unzonedRange,t.eventDef.isAllDay()),t.eventDef,t.eventInstance)
        }
        function s(t) {
            return t.dateProfile.unzonedRange
        }
        function a(t) {
            return t.componentFootprint
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = n(211)
          , u = n(35)
          , d = n(12);
        e.eventDefsToEventInstances = i,
        e.eventInstanceToEventRange = r,
        e.eventRangeToEventFootprint = o,
        e.eventInstanceToUnzonedRange = s,
        e.eventFootprintToComponentFootprint = a
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e, n) {
                this.componentFootprint = t,
                this.eventDef = e,
                n && (this.eventInstance = n)
            }
            return t.prototype.getEventLegacy = function() {
                return (this.eventInstance || this.eventDef).toLegacy()
            }
            ,
            t
        }();
        e.default = n
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(4)
          , r = n(17)
          , o = n(33)
          , s = n(50)
          , a = n(13)
          , l = function() {
            function t() {}
            return t.createFromRawProps = function(e, n, a) {
                var l, u, d, c, p = e.def, h = {}, f = {}, g = {}, v = {}, y = null, m = null;
                for (l in n)
                    r.default.isStandardProp(l) ? h[l] = n[l] : p.isStandardProp(l) ? f[l] = n[l] : p.miscProps[l] !== n[l] && (g[l] = n[l]);
                return u = r.default.parse(h, p.source),
                u && (d = s.default.createFromDiff(e.dateProfile, u, a)),
                f.id !== p.id && (y = f.id),
                i.isArraysEqual(f.className, p.className) || (m = f.className),
                o.default.copyVerbatimStandardProps(f, v),
                c = new t,
                c.eventDefId = y,
                c.className = m,
                c.verbatimStandardProps = v,
                c.miscProps = g,
                d && (c.dateMutation = d),
                c
            }
            ,
            t.prototype.mutateSingle = function(t) {
                var e;
                return this.dateMutation && (e = t.dateProfile,
                t.dateProfile = this.dateMutation.buildNewDateProfile(e, t.source.calendar)),
                null != this.eventDefId && (t.id = o.default.normalizeId(t.rawId = this.eventDefId)),
                this.className && (t.className = this.className),
                this.verbatimStandardProps && a.default.copyVerbatimStandardProps(this.verbatimStandardProps, t),
                this.miscProps && t.applyMiscProps(this.miscProps),
                e ? function() {
                    t.dateProfile = e
                }
                : function() {}
            }
            ,
            t.prototype.setDateMutation = function(t) {
                t && !t.isEmpty() ? this.dateMutation = t : this.dateMutation = null
            }
            ,
            t.prototype.isEmpty = function() {
                return !this.dateMutation
            }
            ,
            t
        }();
        e.default = l
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = {
            sourceClasses: [],
            registerClass: function(t) {
                this.sourceClasses.unshift(t)
            },
            parse: function(t, e) {
                var n, i, r = this.sourceClasses;
                for (n = 0; n < r.length; n++)
                    if (i = r[n].parse(t, e))
                        return i
            }
        }
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = function() {
            function t(t) {
                this.optionsManager = t,
                this.processIconOverride()
            }
            return t.prototype.processIconOverride = function() {
                this.iconOverrideOption && this.setIconOverride(this.optionsManager.get(this.iconOverrideOption))
            }
            ,
            t.prototype.setIconOverride = function(t) {
                var e, n;
                if (i.isPlainObject(t)) {
                    e = i.extend({}, this.iconClasses);
                    for (n in t)
                        e[n] = this.applyIconOverridePrefix(t[n]);
                    this.iconClasses = e
                } else
                    !1 === t && (this.iconClasses = {})
            }
            ,
            t.prototype.applyIconOverridePrefix = function(t) {
                var e = this.iconOverridePrefix;
                return e && 0 !== t.indexOf(e) && (t = e + t),
                t
            }
            ,
            t.prototype.getClass = function(t) {
                return this.classes[t] || ""
            }
            ,
            t.prototype.getIconClass = function(t) {
                var e = this.iconClasses[t];
                return e ? this.baseIconClass + " " + e : ""
            }
            ,
            t.prototype.getCustomButtonIconClass = function(t) {
                var e;
                return this.iconOverrideCustomButtonOption && (e = t[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(e) : ""
            }
            ,
            t
        }();
        e.default = r,
        r.prototype.classes = {},
        r.prototype.iconClasses = {},
        r.prototype.baseIconClass = "",
        r.prototype.iconOverridePrefix = ""
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(4)
          , s = n(32)
          , a = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return e = e || {},
                n.overflowX = e.overflowX || e.overflow || "auto",
                n.overflowY = e.overflowY || e.overflow || "auto",
                n
            }
            return i.__extends(e, t),
            e.prototype.render = function() {
                this.el = this.renderEl(),
                this.applyOverflow()
            }
            ,
            e.prototype.renderEl = function() {
                return this.scrollEl = r('<div class="fc-scroller"></div>')
            }
            ,
            e.prototype.clear = function() {
                this.setHeight("auto"),
                this.applyOverflow()
            }
            ,
            e.prototype.destroy = function() {
                this.el.remove()
            }
            ,
            e.prototype.applyOverflow = function() {
                this.scrollEl.css({
                    "overflow-x": this.overflowX,
                    "overflow-y": this.overflowY
                })
            }
            ,
            e.prototype.lockOverflow = function(t) {
                var e = this.overflowX
                  , n = this.overflowY;
                t = t || this.getScrollbarWidths(),
                "auto" === e && (e = t.top || t.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"),
                "auto" === n && (n = t.left || t.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"),
                this.scrollEl.css({
                    "overflow-x": e,
                    "overflow-y": n
                })
            }
            ,
            e.prototype.setHeight = function(t) {
                this.scrollEl.height(t)
            }
            ,
            e.prototype.getScrollTop = function() {
                return this.scrollEl.scrollTop()
            }
            ,
            e.prototype.setScrollTop = function(t) {
                this.scrollEl.scrollTop(t)
            }
            ,
            e.prototype.getClientWidth = function() {
                return this.scrollEl[0].clientWidth
            }
            ,
            e.prototype.getClientHeight = function() {
                return this.scrollEl[0].clientHeight
            }
            ,
            e.prototype.getScrollbarWidths = function() {
                return o.getScrollbarWidths(this.scrollEl)
            }
            ,
            e
        }(s.default);
        e.default = a
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(4)
          , s = n(219)
          , a = n(20)
          , l = function(t) {
            function e(e, n) {
                var i = t.call(this, e, n) || this;
                return i.segSelector = ".fc-event-container > *",
                i.dateSelectingClass && (i.dateClicking = new i.dateClickingClass(i)),
                i.dateSelectingClass && (i.dateSelecting = new i.dateSelectingClass(i)),
                i.eventPointingClass && (i.eventPointing = new i.eventPointingClass(i)),
                i.eventDraggingClass && i.eventPointing && (i.eventDragging = new i.eventDraggingClass(i,i.eventPointing)),
                i.eventResizingClass && i.eventPointing && (i.eventResizing = new i.eventResizingClass(i,i.eventPointing)),
                i.externalDroppingClass && (i.externalDropping = new i.externalDroppingClass(i)),
                i
            }
            return i.__extends(e, t),
            e.prototype.setElement = function(e) {
                t.prototype.setElement.call(this, e),
                this.dateClicking && this.dateClicking.bindToEl(e),
                this.dateSelecting && this.dateSelecting.bindToEl(e),
                this.bindAllSegHandlersToEl(e)
            }
            ,
            e.prototype.removeElement = function() {
                this.endInteractions(),
                t.prototype.removeElement.call(this)
            }
            ,
            e.prototype.executeEventUnrender = function() {
                this.endInteractions(),
                t.prototype.executeEventUnrender.call(this)
            }
            ,
            e.prototype.bindGlobalHandlers = function() {
                t.prototype.bindGlobalHandlers.call(this),
                this.externalDropping && this.externalDropping.bindToDocument()
            }
            ,
            e.prototype.unbindGlobalHandlers = function() {
                t.prototype.unbindGlobalHandlers.call(this),
                this.externalDropping && this.externalDropping.unbindFromDocument()
            }
            ,
            e.prototype.bindDateHandlerToEl = function(t, e, n) {
                var i = this;
                this.el.on(e, function(t) {
                    if (!r(t.target).is(i.segSelector + ":not(.fc-helper)," + i.segSelector + ":not(.fc-helper) *,.fc-more,a[data-goto]"))
                        return n.call(i, t)
                })
            }
            ,
            e.prototype.bindAllSegHandlersToEl = function(t) {
                [this.eventPointing, this.eventDragging, this.eventResizing].forEach(function(e) {
                    e && e.bindToEl(t)
                })
            }
            ,
            e.prototype.bindSegHandlerToEl = function(t, e, n) {
                var i = this;
                t.on(e, this.segSelector, function(t) {
                    var e = r(t.currentTarget);
                    if (!e.is(".fc-helper")) {
                        var o = e.data("fc-seg");
                        if (o && !i.shouldIgnoreEventPointing())
                            return n.call(i, o, t)
                    }
                })
            }
            ,
            e.prototype.shouldIgnoreMouse = function() {
                return a.default.get().shouldIgnoreMouse()
            }
            ,
            e.prototype.shouldIgnoreTouch = function() {
                var t = this._getView();
                return t.isSelected || t.selectedEvent
            }
            ,
            e.prototype.shouldIgnoreEventPointing = function() {
                return this.eventDragging && this.eventDragging.isDragging || this.eventResizing && this.eventResizing.isResizing
            }
            ,
            e.prototype.canStartSelection = function(t, e) {
                return o.getEvIsTouch(e) && !this.canStartResize(t, e) && (this.isEventDefDraggable(t.footprint.eventDef) || this.isEventDefResizable(t.footprint.eventDef))
            }
            ,
            e.prototype.canStartDrag = function(t, e) {
                return !this.canStartResize(t, e) && this.isEventDefDraggable(t.footprint.eventDef)
            }
            ,
            e.prototype.canStartResize = function(t, e) {
                var n = this._getView()
                  , i = t.footprint.eventDef;
                return (!o.getEvIsTouch(e) || n.isEventDefSelected(i)) && this.isEventDefResizable(i) && r(e.target).is(".fc-resizer")
            }
            ,
            e.prototype.endInteractions = function() {
                [this.dateClicking, this.dateSelecting, this.eventPointing, this.eventDragging, this.eventResizing].forEach(function(t) {
                    t && t.end()
                })
            }
            ,
            e.prototype.isEventDefDraggable = function(t) {
                return this.isEventDefStartEditable(t)
            }
            ,
            e.prototype.isEventDefStartEditable = function(t) {
                var e = t.isStartExplicitlyEditable();
                return null == e && null == (e = this.opt("eventStartEditable")) && (e = this.isEventDefGenerallyEditable(t)),
                e
            }
            ,
            e.prototype.isEventDefGenerallyEditable = function(t) {
                var e = t.isExplicitlyEditable();
                return null == e && (e = this.opt("editable")),
                e
            }
            ,
            e.prototype.isEventDefResizableFromStart = function(t) {
                return this.opt("eventResizableFromStart") && this.isEventDefResizable(t)
            }
            ,
            e.prototype.isEventDefResizableFromEnd = function(t) {
                return this.isEventDefResizable(t)
            }
            ,
            e.prototype.isEventDefResizable = function(t) {
                var e = t.isDurationExplicitlyEditable();
                return null == e && null == (e = this.opt("eventDurationEditable")) && (e = this.isEventDefGenerallyEditable(t)),
                e
            }
            ,
            e.prototype.diffDates = function(t, e) {
                return this.largeUnit ? o.diffByUnit(t, e, this.largeUnit) : o.diffDayTime(t, e)
            }
            ,
            e.prototype.isEventInstanceGroupAllowed = function(t) {
                var e, n = this._getView(), i = this.dateProfile, r = this.eventRangesToEventFootprints(t.getAllEventRanges());
                for (e = 0; e < r.length; e++)
                    if (!i.validUnzonedRange.containsRange(r[e].componentFootprint.unzonedRange))
                        return !1;
                return n.calendar.constraints.isEventInstanceGroupAllowed(t)
            }
            ,
            e.prototype.isExternalInstanceGroupAllowed = function(t) {
                var e, n = this._getView(), i = this.dateProfile, r = this.eventRangesToEventFootprints(t.getAllEventRanges());
                for (e = 0; e < r.length; e++)
                    if (!i.validUnzonedRange.containsRange(r[e].componentFootprint.unzonedRange))
                        return !1;
                for (e = 0; e < r.length; e++)
                    if (!n.calendar.constraints.isSelectionFootprintAllowed(r[e].componentFootprint))
                        return !1;
                return !0
            }
            ,
            e
        }(s.default);
        e.default = l
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(0)
          , s = n(4)
          , a = n(218)
          , l = n(221)
          , u = n(40)
          , d = n(20)
          , c = n(5)
          , p = function(t) {
            function e(e, n) {
                var i = t.call(this, null, n.options) || this;
                return i.batchRenderDepth = 0,
                i.isSelected = !1,
                i.calendar = e,
                i.viewSpec = n,
                i.type = n.type,
                i.name = i.type,
                i.initRenderQueue(),
                i.initHiddenDays(),
                i.dateProfileGenerator = new i.dateProfileGeneratorClass(i),
                i.bindBaseRenderHandlers(),
                i.eventOrderSpecs = s.parseFieldSpecs(i.opt("eventOrder")),
                i.initialize && i.initialize(),
                i
            }
            return i.__extends(e, t),
            e.prototype._getView = function() {
                return this
            }
            ,
            e.prototype.opt = function(t) {
                return this.options[t]
            }
            ,
            e.prototype.initRenderQueue = function() {
                this.renderQueue = new a.default({
                    event: this.opt("eventRenderWait")
                }),
                this.renderQueue.on("start", this.onRenderQueueStart.bind(this)),
                this.renderQueue.on("stop", this.onRenderQueueStop.bind(this)),
                this.on("before:change", this.startBatchRender),
                this.on("change", this.stopBatchRender)
            }
            ,
            e.prototype.onRenderQueueStart = function() {
                this.calendar.freezeContentHeight(),
                this.addScroll(this.queryScroll())
            }
            ,
            e.prototype.onRenderQueueStop = function() {
                this.calendar.updateViewSize() && this.popScroll(),
                this.calendar.thawContentHeight()
            }
            ,
            e.prototype.startBatchRender = function() {
                this.batchRenderDepth++ || this.renderQueue.pause()
            }
            ,
            e.prototype.stopBatchRender = function() {
                --this.batchRenderDepth || this.renderQueue.resume()
            }
            ,
            e.prototype.requestRender = function(t, e, n) {
                this.renderQueue.queue(t, e, n)
            }
            ,
            e.prototype.whenSizeUpdated = function(t) {
                this.renderQueue.isRunning ? this.renderQueue.one("stop", t.bind(this)) : t.call(this)
            }
            ,
            e.prototype.computeTitle = function(t) {
                var e;
                return e = /^(year|month)$/.test(t.currentRangeUnit) ? t.currentUnzonedRange : t.activeUnzonedRange,
                this.formatRange({
                    start: this.calendar.msToMoment(e.startMs, t.isRangeAllDay),
                    end: this.calendar.msToMoment(e.endMs, t.isRangeAllDay)
                }, t.isRangeAllDay, this.opt("titleFormat") || this.computeTitleFormat(t), this.opt("titleRangeSeparator"))
            }
            ,
            e.prototype.computeTitleFormat = function(t) {
                var e = t.currentRangeUnit;
                return "year" === e ? "YYYY" : "month" === e ? this.opt("monthYearFormat") : t.currentUnzonedRange.as("days") > 1 ? "ll" : "LL"
            }
            ,
            e.prototype.setDate = function(t) {
                var e = this.get("dateProfile")
                  , n = this.dateProfileGenerator.build(t, void 0, !0);
                e && e.activeUnzonedRange.equals(n.activeUnzonedRange) || this.set("dateProfile", n)
            }
            ,
            e.prototype.unsetDate = function() {
                this.unset("dateProfile")
            }
            ,
            e.prototype.fetchInitialEvents = function(t) {
                var e = this.calendar
                  , n = t.isRangeAllDay && !this.usesMinMaxTime;
                return e.requestEvents(e.msToMoment(t.activeUnzonedRange.startMs, n), e.msToMoment(t.activeUnzonedRange.endMs, n))
            }
            ,
            e.prototype.bindEventChanges = function() {
                this.listenTo(this.calendar, "eventsReset", this.resetEvents)
            }
            ,
            e.prototype.unbindEventChanges = function() {
                this.stopListeningTo(this.calendar, "eventsReset")
            }
            ,
            e.prototype.setEvents = function(t) {
                this.set("currentEvents", t),
                this.set("hasEvents", !0)
            }
            ,
            e.prototype.unsetEvents = function() {
                this.unset("currentEvents"),
                this.unset("hasEvents")
            }
            ,
            e.prototype.resetEvents = function(t) {
                this.startBatchRender(),
                this.unsetEvents(),
                this.setEvents(t),
                this.stopBatchRender()
            }
            ,
            e.prototype.requestDateRender = function(t) {
                var e = this;
                this.requestRender(function() {
                    e.executeDateRender(t)
                }, "date", "init")
            }
            ,
            e.prototype.requestDateUnrender = function() {
                var t = this;
                this.requestRender(function() {
                    t.executeDateUnrender()
                }, "date", "destroy")
            }
            ,
            e.prototype.executeDateRender = function(e) {
                t.prototype.executeDateRender.call(this, e),
                this.render && this.render(),
                this.trigger("datesRendered"),
                this.addScroll({
                    isDateInit: !0
                }),
                this.startNowIndicator()
            }
            ,
            e.prototype.executeDateUnrender = function() {
                this.unselect(),
                this.stopNowIndicator(),
                this.trigger("before:datesUnrendered"),
                this.destroy && this.destroy(),
                t.prototype.executeDateUnrender.call(this)
            }
            ,
            e.prototype.bindBaseRenderHandlers = function() {
                var t = this;
                this.on("datesRendered", function() {
                    t.whenSizeUpdated(t.triggerViewRender)
                }),
                this.on("before:datesUnrendered", function() {
                    t.triggerViewDestroy()
                })
            }
            ,
            e.prototype.triggerViewRender = function() {
                this.publiclyTrigger("viewRender", {
                    context: this,
                    args: [this, this.el]
                })
            }
            ,
            e.prototype.triggerViewDestroy = function() {
                this.publiclyTrigger("viewDestroy", {
                    context: this,
                    args: [this, this.el]
                })
            }
            ,
            e.prototype.requestEventsRender = function(t) {
                var e = this;
                this.requestRender(function() {
                    e.executeEventRender(t),
                    e.whenSizeUpdated(e.triggerAfterEventsRendered)
                }, "event", "init")
            }
            ,
            e.prototype.requestEventsUnrender = function() {
                var t = this;
                this.requestRender(function() {
                    t.triggerBeforeEventsDestroyed(),
                    t.executeEventUnrender()
                }, "event", "destroy")
            }
            ,
            e.prototype.requestBusinessHoursRender = function(t) {
                var e = this;
                this.requestRender(function() {
                    e.renderBusinessHours(t)
                }, "businessHours", "init")
            }
            ,
            e.prototype.requestBusinessHoursUnrender = function() {
                var t = this;
                this.requestRender(function() {
                    t.unrenderBusinessHours()
                }, "businessHours", "destroy")
            }
            ,
            e.prototype.bindGlobalHandlers = function() {
                t.prototype.bindGlobalHandlers.call(this),
                this.listenTo(d.default.get(), {
                    touchstart: this.processUnselect,
                    mousedown: this.handleDocumentMousedown
                })
            }
            ,
            e.prototype.unbindGlobalHandlers = function() {
                t.prototype.unbindGlobalHandlers.call(this),
                this.stopListeningTo(d.default.get())
            }
            ,
            e.prototype.startNowIndicator = function() {
                var t, e, n, i = this;
                this.opt("nowIndicator") && (t = this.getNowIndicatorUnit()) && (e = s.proxy(this, "updateNowIndicator"),
                this.initialNowDate = this.calendar.getNow(),
                this.initialNowQueriedMs = (new Date).valueOf(),
                n = this.initialNowDate.clone().startOf(t).add(1, t).valueOf() - this.initialNowDate.valueOf(),
                this.nowIndicatorTimeoutID = setTimeout(function() {
                    i.nowIndicatorTimeoutID = null,
                    e(),
                    n = +o.duration(1, t),
                    n = Math.max(100, n),
                    i.nowIndicatorIntervalID = setInterval(e, n)
                }, n))
            }
            ,
            e.prototype.updateNowIndicator = function() {
                this.isDatesRendered && this.initialNowDate && (this.unrenderNowIndicator(),
                this.renderNowIndicator(this.initialNowDate.clone().add((new Date).valueOf() - this.initialNowQueriedMs)),
                this.isNowIndicatorRendered = !0)
            }
            ,
            e.prototype.stopNowIndicator = function() {
                this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID),
                this.nowIndicatorTimeoutID = null),
                this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID),
                this.nowIndicatorIntervalID = null),
                this.unrenderNowIndicator(),
                this.isNowIndicatorRendered = !1)
            }
            ,
            e.prototype.updateSize = function(e, n, i) {
                this.setHeight ? this.setHeight(e, n) : t.prototype.updateSize.call(this, e, n, i),
                this.updateNowIndicator()
            }
            ,
            e.prototype.addScroll = function(t) {
                var e = this.queuedScroll || (this.queuedScroll = {});
                r.extend(e, t)
            }
            ,
            e.prototype.popScroll = function() {
                this.applyQueuedScroll(),
                this.queuedScroll = null
            }
            ,
            e.prototype.applyQueuedScroll = function() {
                this.queuedScroll && this.applyScroll(this.queuedScroll)
            }
            ,
            e.prototype.queryScroll = function() {
                var t = {};
                return this.isDatesRendered && r.extend(t, this.queryDateScroll()),
                t
            }
            ,
            e.prototype.applyScroll = function(t) {
                t.isDateInit && this.isDatesRendered && r.extend(t, this.computeInitialDateScroll()),
                this.isDatesRendered && this.applyDateScroll(t)
            }
            ,
            e.prototype.computeInitialDateScroll = function() {
                return {}
            }
            ,
            e.prototype.queryDateScroll = function() {
                return {}
            }
            ,
            e.prototype.applyDateScroll = function(t) {}
            ,
            e.prototype.reportEventDrop = function(t, e, n, i) {
                var r = this.calendar.eventManager
                  , s = r.mutateEventsWithId(t.def.id, e)
                  , a = e.dateMutation;
                a && (t.dateProfile = a.buildNewDateProfile(t.dateProfile, this.calendar)),
                this.triggerEventDrop(t, a && a.dateDelta || o.duration(), s, n, i)
            }
            ,
            e.prototype.triggerEventDrop = function(t, e, n, i, r) {
                this.publiclyTrigger("eventDrop", {
                    context: i[0],
                    args: [t.toLegacy(), e, n, r, {}, this]
                })
            }
            ,
            e.prototype.reportExternalDrop = function(t, e, n, i, r, o) {
                e && this.calendar.eventManager.addEventDef(t, n),
                this.triggerExternalDrop(t, e, i, r, o)
            }
            ,
            e.prototype.triggerExternalDrop = function(t, e, n, i, r) {
                this.publiclyTrigger("drop", {
                    context: n[0],
                    args: [t.dateProfile.start.clone(), i, r, this]
                }),
                e && this.publiclyTrigger("eventReceive", {
                    context: this,
                    args: [t.buildInstance().toLegacy(), this]
                })
            }
            ,
            e.prototype.reportEventResize = function(t, e, n, i) {
                var r = this.calendar.eventManager
                  , o = r.mutateEventsWithId(t.def.id, e);
                t.dateProfile = e.dateMutation.buildNewDateProfile(t.dateProfile, this.calendar),
                this.triggerEventResize(t, e.dateMutation.endDelta, o, n, i)
            }
            ,
            e.prototype.triggerEventResize = function(t, e, n, i, r) {
                this.publiclyTrigger("eventResize", {
                    context: i[0],
                    args: [t.toLegacy(), e, n, r, {}, this]
                })
            }
            ,
            e.prototype.select = function(t, e) {
                this.unselect(e),
                this.renderSelectionFootprint(t),
                this.reportSelection(t, e)
            }
            ,
            e.prototype.renderSelectionFootprint = function(e) {
                this.renderSelection ? this.renderSelection(e.toLegacy(this.calendar)) : t.prototype.renderSelectionFootprint.call(this, e)
            }
            ,
            e.prototype.reportSelection = function(t, e) {
                this.isSelected = !0,
                this.triggerSelect(t, e)
            }
            ,
            e.prototype.triggerSelect = function(t, e) {
                var n = this.calendar.footprintToDateProfile(t);
                this.publiclyTrigger("select", {
                    context: this,
                    args: [n.start, n.end, e, this]
                })
            }
            ,
            e.prototype.unselect = function(t) {
                this.isSelected && (this.isSelected = !1,
                this.destroySelection && this.destroySelection(),
                this.unrenderSelection(),
                this.publiclyTrigger("unselect", {
                    context: this,
                    args: [t, this]
                }))
            }
            ,
            e.prototype.selectEventInstance = function(t) {
                this.selectedEventInstance && this.selectedEventInstance === t || (this.unselectEventInstance(),
                this.getEventSegs().forEach(function(e) {
                    e.footprint.eventInstance === t && e.el && e.el.addClass("fc-selected")
                }),
                this.selectedEventInstance = t)
            }
            ,
            e.prototype.unselectEventInstance = function() {
                this.selectedEventInstance && (this.getEventSegs().forEach(function(t) {
                    t.el && t.el.removeClass("fc-selected")
                }),
                this.selectedEventInstance = null)
            }
            ,
            e.prototype.isEventDefSelected = function(t) {
                return this.selectedEventInstance && this.selectedEventInstance.def.id === t.id
            }
            ,
            e.prototype.handleDocumentMousedown = function(t) {
                s.isPrimaryMouseButton(t) && this.processUnselect(t)
            }
            ,
            e.prototype.processUnselect = function(t) {
                this.processRangeUnselect(t),
                this.processEventUnselect(t)
            }
            ,
            e.prototype.processRangeUnselect = function(t) {
                var e;
                this.isSelected && this.opt("unselectAuto") && ((e = this.opt("unselectCancel")) && r(t.target).closest(e).length || this.unselect(t))
            }
            ,
            e.prototype.processEventUnselect = function(t) {
                this.selectedEventInstance && (r(t.target).closest(".fc-selected").length || this.unselectEventInstance())
            }
            ,
            e.prototype.triggerBaseRendered = function() {
                this.publiclyTrigger("viewRender", {
                    context: this,
                    args: [this, this.el]
                })
            }
            ,
            e.prototype.triggerBaseUnrendered = function() {
                this.publiclyTrigger("viewDestroy", {
                    context: this,
                    args: [this, this.el]
                })
            }
            ,
            e.prototype.triggerDayClick = function(t, e, n) {
                var i = this.calendar.footprintToDateProfile(t);
                this.publiclyTrigger("dayClick", {
                    context: e,
                    args: [i.start, n, this]
                })
            }
            ,
            e.prototype.isDateInOtherMonth = function(t, e) {
                return !1
            }
            ,
            e.prototype.getUnzonedRangeOption = function(t) {
                var e = this.opt(t);
                if ("function" == typeof e && (e = e.apply(null, Array.prototype.slice.call(arguments, 1))),
                e)
                    return this.calendar.parseUnzonedRange(e)
            }
            ,
            e.prototype.initHiddenDays = function() {
                var t, e = this.opt("hiddenDays") || [], n = [], i = 0;
                for (!1 === this.opt("weekends") && e.push(0, 6),
                t = 0; t < 7; t++)
                    (n[t] = -1 !== r.inArray(t, e)) || i++;
                if (!i)
                    throw new Error("invalid hiddenDays");
                this.isHiddenDayHash = n
            }
            ,
            e.prototype.trimHiddenDays = function(t) {
                var e = t.getStart()
                  , n = t.getEnd();
                return e && (e = this.skipHiddenDays(e)),
                n && (n = this.skipHiddenDays(n, -1, !0)),
                null === e || null === n || e < n ? new c.default(e,n) : null
            }
            ,
            e.prototype.isHiddenDay = function(t) {
                return o.isMoment(t) && (t = t.day()),
                this.isHiddenDayHash[t]
            }
            ,
            e.prototype.skipHiddenDays = function(t, e, n) {
                void 0 === e && (e = 1),
                void 0 === n && (n = !1);
                for (var i = t.clone(); this.isHiddenDayHash[(i.day() + (n ? e : 0) + 7) % 7]; )
                    i.add(e, "days");
                return i
            }
            ,
            e
        }(u.default);
        e.default = p,
        p.prototype.usesMinMaxTime = !1,
        p.prototype.dateProfileGeneratorClass = l.default,
        p.watch("displayingDates", ["isInDom", "dateProfile"], function(t) {
            this.requestDateRender(t.dateProfile)
        }, function() {
            this.requestDateUnrender()
        }),
        p.watch("displayingBusinessHours", ["displayingDates", "businessHourGenerator"], function(t) {
            this.requestBusinessHoursRender(t.businessHourGenerator)
        }, function() {
            this.requestBusinessHoursUnrender()
        }),
        p.watch("initialEvents", ["dateProfile"], function(t) {
            return this.fetchInitialEvents(t.dateProfile)
        }),
        p.watch("bindingEvents", ["initialEvents"], function(t) {
            this.setEvents(t.initialEvents),
            this.bindEventChanges()
        }, function() {
            this.unbindEventChanges(),
            this.unsetEvents()
        }),
        p.watch("displayingEvents", ["displayingDates", "hasEvents"], function() {
            this.requestEventsRender(this.get("currentEvents"))
        }, function() {
            this.requestEventsUnrender()
        }),
        p.watch("title", ["dateProfile"], function(t) {
            return this.title = this.computeTitle(t.dateProfile)
        }),
        p.watch("legacyDateProps", ["dateProfile"], function(t) {
            var e = this.calendar
              , n = t.dateProfile;
            this.start = e.msToMoment(n.activeUnzonedRange.startMs, n.isRangeAllDay),
            this.end = e.msToMoment(n.activeUnzonedRange.endMs, n.isRangeAllDay),
            this.intervalStart = e.msToMoment(n.currentUnzonedRange.startMs, n.isRangeAllDay),
            this.intervalEnd = e.msToMoment(n.currentUnzonedRange.endMs, n.isRangeAllDay)
        })
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(4)
          , o = function() {
            function t(t, e) {
                this.view = t._getView(),
                this.component = t,
                this.fillRenderer = e
            }
            return t.prototype.opt = function(t) {
                return this.view.opt(t)
            }
            ,
            t.prototype.rangeUpdated = function() {
                var t, e;
                this.eventTimeFormat = this.opt("eventTimeFormat") || this.opt("timeFormat") || this.computeEventTimeFormat(),
                t = this.opt("displayEventTime"),
                null == t && (t = this.computeDisplayEventTime()),
                e = this.opt("displayEventEnd"),
                null == e && (e = this.computeDisplayEventEnd()),
                this.displayEventTime = t,
                this.displayEventEnd = e
            }
            ,
            t.prototype.render = function(t) {
                var e, n, i, r = this.component._getDateProfile(), o = [], s = [];
                for (e in t)
                    n = t[e],
                    i = n.sliceRenderRanges(r.activeUnzonedRange),
                    n.getEventDef().hasBgRendering() ? o.push.apply(o, i) : s.push.apply(s, i);
                this.renderBgRanges(o),
                this.renderFgRanges(s)
            }
            ,
            t.prototype.unrender = function() {
                this.unrenderBgRanges(),
                this.unrenderFgRanges()
            }
            ,
            t.prototype.renderFgRanges = function(t) {
                var e = this.component.eventRangesToEventFootprints(t)
                  , n = this.component.eventFootprintsToSegs(e);
                n = this.renderFgSegEls(n),
                !1 !== this.renderFgSegs(n) && (this.fgSegs = n)
            }
            ,
            t.prototype.unrenderFgRanges = function() {
                this.unrenderFgSegs(this.fgSegs || []),
                this.fgSegs = null
            }
            ,
            t.prototype.renderBgRanges = function(t) {
                var e = this.component.eventRangesToEventFootprints(t)
                  , n = this.component.eventFootprintsToSegs(e);
                !1 !== this.renderBgSegs(n) && (this.bgSegs = n)
            }
            ,
            t.prototype.unrenderBgRanges = function() {
                this.unrenderBgSegs(),
                this.bgSegs = null
            }
            ,
            t.prototype.getSegs = function() {
                return (this.bgSegs || []).concat(this.fgSegs || [])
            }
            ,
            t.prototype.renderFgSegs = function(t) {
                return !1
            }
            ,
            t.prototype.unrenderFgSegs = function(t) {}
            ,
            t.prototype.renderBgSegs = function(t) {
                var e = this;
                if (!this.fillRenderer)
                    return !1;
                this.fillRenderer.renderSegs("bgEvent", t, {
                    getClasses: function(t) {
                        return e.getBgClasses(t.footprint.eventDef)
                    },
                    getCss: function(t) {
                        return {
                            "background-color": e.getBgColor(t.footprint.eventDef)
                        }
                    },
                    filterEl: function(t, n) {
                        return e.filterEventRenderEl(t.footprint, n)
                    }
                })
            }
            ,
            t.prototype.unrenderBgSegs = function() {
                this.fillRenderer && this.fillRenderer.unrender("bgEvent")
            }
            ,
            t.prototype.renderFgSegEls = function(t, e) {
                var n = this;
                void 0 === e && (e = !1);
                var r, o = this.view.hasPublicHandlers("eventRender"), s = "", a = [];
                if (t.length) {
                    for (r = 0; r < t.length; r++)
                        this.beforeFgSegHtml(t[r]),
                        s += this.fgSegHtml(t[r], e);
                    i(s).each(function(e, r) {
                        var s = t[e]
                          , l = i(r);
                        o && (l = n.filterEventRenderEl(s.footprint, l)),
                        l && (l.data("fc-seg", s),
                        s.el = l,
                        a.push(s))
                    })
                }
                return a
            }
            ,
            t.prototype.beforeFgSegHtml = function(t) {}
            ,
            t.prototype.fgSegHtml = function(t, e) {}
            ,
            t.prototype.getSegClasses = function(t, e, n) {
                var i = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(this.getClasses(t.footprint.eventDef));
                return e && i.push("fc-draggable"),
                n && i.push("fc-resizable"),
                this.view.isEventDefSelected(t.footprint.eventDef) && i.push("fc-selected"),
                i
            }
            ,
            t.prototype.filterEventRenderEl = function(t, e) {
                var n = t.getEventLegacy()
                  , r = this.view.publiclyTrigger("eventRender", {
                    context: n,
                    args: [n, e, this.view]
                });
                return !1 === r ? e = null : r && !0 !== r && (e = i(r)),
                e
            }
            ,
            t.prototype.getTimeText = function(t, e, n) {
                return this._getTimeText(t.eventInstance.dateProfile.start, t.eventInstance.dateProfile.end, t.componentFootprint.isAllDay, e, n)
            }
            ,
            t.prototype._getTimeText = function(t, e, n, i, r) {
                return null == i && (i = this.eventTimeFormat),
                null == r && (r = this.displayEventEnd),
                this.displayEventTime && !n ? r && e ? this.view.formatRange({
                    start: t,
                    end: e
                }, !1, i) : t.format(i) : ""
            }
            ,
            t.prototype.computeEventTimeFormat = function() {
                return this.opt("smallTimeFormat")
            }
            ,
            t.prototype.computeDisplayEventTime = function() {
                return !0
            }
            ,
            t.prototype.computeDisplayEventEnd = function() {
                return !0
            }
            ,
            t.prototype.getBgClasses = function(t) {
                var e = this.getClasses(t);
                return e.push("fc-bgevent"),
                e
            }
            ,
            t.prototype.getClasses = function(t) {
                var e, n = this.getStylingObjs(t), i = [];
                for (e = 0; e < n.length; e++)
                    i.push.apply(i, n[e].eventClassName || n[e].className || []);
                return i
            }
            ,
            t.prototype.getSkinCss = function(t) {
                return {
                    "background-color": this.getBgColor(t),
                    "border-color": this.getBorderColor(t),
                    color: this.getTextColor(t)
                }
            }
            ,
            t.prototype.getBgColor = function(t) {
                var e, n, i = this.getStylingObjs(t);
                for (e = 0; e < i.length && !n; e++)
                    n = i[e].eventBackgroundColor || i[e].eventColor || i[e].backgroundColor || i[e].color;
                return n || (n = this.opt("eventBackgroundColor") || this.opt("eventColor")),
                n
            }
            ,
            t.prototype.getBorderColor = function(t) {
                var e, n, i = this.getStylingObjs(t);
                for (e = 0; e < i.length && !n; e++)
                    n = i[e].eventBorderColor || i[e].eventColor || i[e].borderColor || i[e].color;
                return n || (n = this.opt("eventBorderColor") || this.opt("eventColor")),
                n
            }
            ,
            t.prototype.getTextColor = function(t) {
                var e, n, i = this.getStylingObjs(t);
                for (e = 0; e < i.length && !n; e++)
                    n = i[e].eventTextColor || i[e].textColor;
                return n || (n = this.opt("eventTextColor")),
                n
            }
            ,
            t.prototype.getStylingObjs = function(t) {
                var e = this.getFallbackStylingObjs(t);
                return e.unshift(t),
                e
            }
            ,
            t.prototype.getFallbackStylingObjs = function(t) {
                return [t.source]
            }
            ,
            t.prototype.sortEventSegs = function(t) {
                t.sort(r.proxy(this, "compareEventSegs"))
            }
            ,
            t.prototype.compareEventSegs = function(t, e) {
                var n = t.footprint
                  , i = e.footprint
                  , o = n.componentFootprint
                  , s = i.componentFootprint
                  , a = o.unzonedRange
                  , l = s.unzonedRange;
                return a.startMs - l.startMs || l.endMs - l.startMs - (a.endMs - a.startMs) || s.isAllDay - o.isAllDay || r.compareByFieldSpecs(n.eventDef, i.eventDef, this.view.eventOrderSpecs, n.eventDef.miscProps, i.eventDef.miscProps)
            }
            ,
            t
        }();
        e.default = o
    }
    , , , , , function(t, e, n) {
        function i(t) {
            return "en" !== t.locale() ? t.clone().locale("en") : t
        }
        function r(t, e) {
            return h(a(e).fakeFormatString, t)
        }
        function o(t, e, n, i, r) {
            var o;
            return t = y.default.parseZone(t),
            e = y.default.parseZone(e),
            o = t.localeData(),
            n = o.longDateFormat(n) || n,
            s(a(n), t, e, i || " - ", r)
        }
        function s(t, e, n, i, r) {
            var o, s, a, l = t.sameUnits, u = e.clone().stripZone(), d = n.clone().stripZone(), c = f(t.fakeFormatString, e), p = f(t.fakeFormatString, n), h = "", v = "", y = "", m = "", w = "";
            for (o = 0; o < l.length && (!l[o] || u.isSame(d, l[o])); o++)
                h += c[o];
            for (s = l.length - 1; s > o && (!l[s] || u.isSame(d, l[s])) && (s - 1 !== o || "." !== c[s]); s--)
                v = c[s] + v;
            for (a = o; a <= s; a++)
                y += c[a],
                m += p[a];
            return (y || m) && (w = r ? m + i + y : y + i + m),
            g(h + w + v)
        }
        function a(t) {
            return C[t] || (C[t] = l(t))
        }
        function l(t) {
            var e = u(t);
            return {
                fakeFormatString: c(e),
                sameUnits: p(e)
            }
        }
        function u(t) {
            for (var e, n = [], i = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = i.exec(t); )
                e[1] ? n.push.apply(n, d(e[1])) : e[2] ? n.push({
                    maybe: u(e[2])
                }) : e[3] ? n.push({
                    token: e[3]
                }) : e[5] && n.push.apply(n, d(e[5]));
            return n
        }
        function d(t) {
            return ". " === t ? [".", " "] : [t]
        }
        function c(t) {
            var e, n, i = [];
            for (e = 0; e < t.length; e++)
                n = t[e],
                "string" == typeof n ? i.push("[" + n + "]") : n.token ? n.token in E ? i.push(w + "[" + n.token + "]") : i.push(n.token) : n.maybe && i.push(b + c(n.maybe) + b);
            return i.join(m)
        }
        function p(t) {
            var e, n, i, r = [];
            for (e = 0; e < t.length; e++)
                n = t[e],
                n.token ? (i = S[n.token.charAt(0)],
                r.push(i ? i.unit : "second")) : n.maybe ? r.push.apply(r, p(n.maybe)) : r.push(null);
            return r
        }
        function h(t, e) {
            return g(f(t, e).join(""))
        }
        function f(t, e) {
            var n, i, r = [], o = y.oldMomentFormat(e, t), s = o.split(m);
            for (n = 0; n < s.length; n++)
                i = s[n],
                i.charAt(0) === w ? r.push(E[i.substring(1)](e)) : r.push(i);
            return r
        }
        function g(t) {
            return t.replace(D, function(t, e) {
                return e.match(/[1-9]/) ? e : ""
            })
        }
        function v(t) {
            var e, n, i, r, o = u(t);
            for (e = 0; e < o.length; e++)
                n = o[e],
                n.token && (i = S[n.token.charAt(0)]) && (!r || i.value > r.value) && (r = i);
            return r ? r.unit : null
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var y = n(10);
        y.newMomentProto.format = function() {
            return this._fullCalendar && arguments[0] ? r(this, arguments[0]) : this._ambigTime ? y.oldMomentFormat(i(this), "YYYY-MM-DD") : this._ambigZone ? y.oldMomentFormat(i(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? y.oldMomentFormat(i(this)) : y.oldMomentProto.format.apply(this, arguments)
        }
        ,
        y.newMomentProto.toISOString = function() {
            return this._ambigTime ? y.oldMomentFormat(i(this), "YYYY-MM-DD") : this._ambigZone ? y.oldMomentFormat(i(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? y.oldMomentProto.toISOString.apply(i(this), arguments) : y.oldMomentProto.toISOString.apply(this, arguments)
        }
        ;
        var m = "\v"
          , w = ""
          , b = ""
          , D = new RegExp(b + "([^" + b + "]*)" + b,"g")
          , E = {
            t: function(t) {
                return y.oldMomentFormat(t, "a").charAt(0)
            },
            T: function(t) {
                return y.oldMomentFormat(t, "A").charAt(0)
            }
        }
          , S = {
            Y: {
                value: 1,
                unit: "year"
            },
            M: {
                value: 2,
                unit: "month"
            },
            W: {
                value: 3,
                unit: "week"
            },
            w: {
                value: 3,
                unit: "week"
            },
            D: {
                value: 4,
                unit: "day"
            },
            d: {
                value: 4,
                unit: "day"
            }
        };
        e.formatDate = r,
        e.formatRange = o;
        var C = {};
        e.queryMostGranularFormatUnit = v
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(32)
          , o = n(11)
          , s = n(7)
          , a = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._watchers = {},
                e._props = {},
                e.applyGlobalWatchers(),
                e.constructed(),
                e
            }
            return i.__extends(e, t),
            e.watch = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                this.prototype.hasOwnProperty("_globalWatchArgs") || (this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs)),
                this.prototype._globalWatchArgs[t] = e
            }
            ,
            e.prototype.constructed = function() {}
            ,
            e.prototype.applyGlobalWatchers = function() {
                var t, e = this._globalWatchArgs;
                for (t in e)
                    this.watch.apply(this, [t].concat(e[t]))
            }
            ,
            e.prototype.has = function(t) {
                return t in this._props
            }
            ,
            e.prototype.get = function(t) {
                return void 0 === t ? this._props : this._props[t]
            }
            ,
            e.prototype.set = function(t, e) {
                var n;
                "string" == typeof t ? (n = {},
                n[t] = void 0 === e ? null : e) : n = t,
                this.setProps(n)
            }
            ,
            e.prototype.reset = function(t) {
                var e, n = this._props, i = {};
                for (e in n)
                    i[e] = void 0;
                for (e in t)
                    i[e] = t[e];
                this.setProps(i)
            }
            ,
            e.prototype.unset = function(t) {
                var e, n, i = {};
                for (e = "string" == typeof t ? [t] : t,
                n = 0; n < e.length; n++)
                    i[e[n]] = void 0;
                this.setProps(i)
            }
            ,
            e.prototype.setProps = function(t) {
                var e, n, i = {}, r = 0;
                for (e in t)
                    "object" != typeof (n = t[e]) && n === this._props[e] || (i[e] = n,
                    r++);
                if (r) {
                    this.trigger("before:batchChange", i);
                    for (e in i)
                        n = i[e],
                        this.trigger("before:change", e, n),
                        this.trigger("before:change:" + e, n);
                    for (e in i)
                        n = i[e],
                        void 0 === n ? delete this._props[e] : this._props[e] = n,
                        this.trigger("change:" + e, n),
                        this.trigger("change", e, n);
                    this.trigger("batchChange", i)
                }
            }
            ,
            e.prototype.watch = function(t, e, n, i) {
                var r = this;
                this.unwatch(t),
                this._watchers[t] = this._watchDeps(e, function(e) {
                    var i = n.call(r, e);
                    i && i.then ? (r.unset(t),
                    i.then(function(e) {
                        r.set(t, e)
                    })) : r.set(t, i)
                }, function(e) {
                    r.unset(t),
                    i && i.call(r, e)
                })
            }
            ,
            e.prototype.unwatch = function(t) {
                var e = this._watchers[t];
                e && (delete this._watchers[t],
                e.teardown())
            }
            ,
            e.prototype._watchDeps = function(t, e, n) {
                var i = this
                  , r = 0
                  , o = t.length
                  , s = 0
                  , a = {}
                  , l = []
                  , u = !1
                  , d = function(t, e, i) {
                    1 === ++r && s === o && (u = !0,
                    n(a),
                    u = !1)
                }
                  , c = function(t, n, i) {
                    void 0 === n ? (i || void 0 === a[t] || s--,
                    delete a[t]) : (i || void 0 !== a[t] || s++,
                    a[t] = n),
                    --r || s === o && (u || e(a))
                }
                  , p = function(t, e) {
                    i.on(t, e),
                    l.push([t, e])
                };
                return t.forEach(function(t) {
                    var e = !1;
                    "?" === t.charAt(0) && (t = t.substring(1),
                    e = !0),
                    p("before:change:" + t, function(t) {
                        d()
                    }),
                    p("change:" + t, function(n) {
                        c(t, n, e)
                    })
                }),
                t.forEach(function(t) {
                    var e = !1;
                    "?" === t.charAt(0) && (t = t.substring(1),
                    e = !0),
                    i.has(t) ? (a[t] = i.get(t),
                    s++) : e && s++
                }),
                s === o && e(a),
                {
                    teardown: function() {
                        for (var t = 0; t < l.length; t++)
                            i.off(l[t][0], l[t][1]);
                        l = null,
                        s === o && n()
                    },
                    flash: function() {
                        s === o && (n(),
                        e(a))
                    }
                }
            }
            ,
            e.prototype.flash = function(t) {
                var e = this._watchers[t];
                e && e.flash()
            }
            ,
            e
        }(r.default);
        e.default = a,
        a.prototype._globalWatchArgs = {},
        o.default.mixInto(a),
        s.default.mixInto(a)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0)
          , r = n(4)
          , o = n(13)
          , s = n(210);
        e.default = {
            parse: function(t, e) {
                return r.isTimeString(t.start) || i.isDuration(t.start) || r.isTimeString(t.end) || i.isDuration(t.end) ? s.default.parse(t, e) : o.default.parse(t, e)
            }
        }
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(4)
          , r = n(17)
          , o = function() {
            function t() {
                this.clearEnd = !1,
                this.forceTimed = !1,
                this.forceAllDay = !1
            }
            return t.createFromDiff = function(e, n, r) {
                function o(t, e) {
                    return r ? i.diffByUnit(t, e, r) : n.isAllDay() ? i.diffDay(t, e) : i.diffDayTime(t, e)
                }
                var s, a, l, u, d = e.end && !n.end, c = e.isAllDay() && !n.isAllDay(), p = !e.isAllDay() && n.isAllDay();
                return s = o(n.start, e.start),
                n.end && (a = o(n.unzonedRange.getEnd(), e.unzonedRange.getEnd()),
                l = a.subtract(s)),
                u = new t,
                u.clearEnd = d,
                u.forceTimed = c,
                u.forceAllDay = p,
                u.setDateDelta(s),
                u.setEndDelta(l),
                u
            }
            ,
            t.prototype.buildNewDateProfile = function(t, e) {
                var n = t.start.clone()
                  , i = null
                  , o = !1;
                return t.end && !this.clearEnd ? i = t.end.clone() : this.endDelta && !i && (i = e.getDefaultEventEnd(t.isAllDay(), n)),
                this.forceTimed ? (o = !0,
                n.hasTime() || n.time(0),
                i && !i.hasTime() && i.time(0)) : this.forceAllDay && (n.hasTime() && n.stripTime(),
                i && i.hasTime() && i.stripTime()),
                this.dateDelta && (o = !0,
                n.add(this.dateDelta),
                i && i.add(this.dateDelta)),
                this.endDelta && (o = !0,
                i.add(this.endDelta)),
                this.startDelta && (o = !0,
                n.add(this.startDelta)),
                o && (n = e.applyTimezone(n),
                i && (i = e.applyTimezone(i))),
                !i && e.opt("forceEventDuration") && (i = e.getDefaultEventEnd(t.isAllDay(), n)),
                new r.default(n,i,e)
            }
            ,
            t.prototype.setDateDelta = function(t) {
                t && t.valueOf() ? this.dateDelta = t : this.dateDelta = null
            }
            ,
            t.prototype.setStartDelta = function(t) {
                t && t.valueOf() ? this.startDelta = t : this.startDelta = null
            }
            ,
            t.prototype.setEndDelta = function(t) {
                t && t.valueOf() ? this.endDelta = t : this.endDelta = null
            }
            ,
            t.prototype.isEmpty = function() {
                return !(this.clearEnd || this.forceTimed || this.forceAllDay || this.dateDelta || this.startDelta || this.endDelta)
            }
            ,
            t
        }();
        e.default = o
    }
    , function(t, e, n) {
        function i(t, e) {
            a[t] = e
        }
        function r(t) {
            return t ? !0 === t ? s.default : a[t] : o.default
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(213)
          , s = n(214)
          , a = {};
        e.defineThemeSystem = i,
        e.getThemeSystemClass = r
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(4)
          , s = n(19)
          , a = n(6)
          , l = n(13)
          , u = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.eventDefs = [],
                n
            }
            return i.__extends(e, t),
            e.parse = function(t, e) {
                var n;
                return r.isArray(t.events) ? n = t : r.isArray(t) && (n = {
                    events: t
                }),
                !!n && a.default.parse.call(this, n, e)
            }
            ,
            e.prototype.setRawEventDefs = function(t) {
                this.rawEventDefs = t,
                this.eventDefs = this.parseEventDefs(t)
            }
            ,
            e.prototype.fetch = function(t, e, n) {
                var i, r = this.eventDefs;
                if (null != this.currentTimezone && this.currentTimezone !== n)
                    for (i = 0; i < r.length; i++)
                        r[i]instanceof l.default && r[i].rezone();
                return this.currentTimezone = n,
                s.default.resolve(r)
            }
            ,
            e.prototype.addEventDef = function(t) {
                this.eventDefs.push(t)
            }
            ,
            e.prototype.removeEventDefsById = function(t) {
                return o.removeMatching(this.eventDefs, function(e) {
                    return e.id === t
                })
            }
            ,
            e.prototype.removeAllEventDefs = function() {
                this.eventDefs = []
            }
            ,
            e.prototype.getPrimitive = function() {
                return this.rawEventDefs
            }
            ,
            e.prototype.applyManualStandardProps = function(e) {
                var n = t.prototype.applyManualStandardProps.call(this, e);
                return this.setRawEventDefs(e.events),
                n
            }
            ,
            e
        }(a.default);
        e.default = u,
        u.defineStandardProps({
            events: !1
        })
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(4)
          , o = function() {
            function t(t) {
                this.isHorizontal = !1,
                this.isVertical = !1,
                this.els = i(t.els),
                this.isHorizontal = t.isHorizontal,
                this.isVertical = t.isVertical,
                this.forcedOffsetParentEl = t.offsetParent ? i(t.offsetParent) : null
            }
            return t.prototype.build = function() {
                var t = this.forcedOffsetParentEl;
                !t && this.els.length > 0 && (t = this.els.eq(0).offsetParent()),
                this.origin = t ? t.offset() : null,
                this.boundingRect = this.queryBoundingRect(),
                this.isHorizontal && this.buildElHorizontals(),
                this.isVertical && this.buildElVerticals()
            }
            ,
            t.prototype.clear = function() {
                this.origin = null,
                this.boundingRect = null,
                this.lefts = null,
                this.rights = null,
                this.tops = null,
                this.bottoms = null
            }
            ,
            t.prototype.ensureBuilt = function() {
                this.origin || this.build()
            }
            ,
            t.prototype.buildElHorizontals = function() {
                var t = []
                  , e = [];
                this.els.each(function(n, r) {
                    var o = i(r)
                      , s = o.offset().left
                      , a = o.outerWidth();
                    t.push(s),
                    e.push(s + a)
                }),
                this.lefts = t,
                this.rights = e
            }
            ,
            t.prototype.buildElVerticals = function() {
                var t = []
                  , e = [];
                this.els.each(function(n, r) {
                    var o = i(r)
                      , s = o.offset().top
                      , a = o.outerHeight();
                    t.push(s),
                    e.push(s + a)
                }),
                this.tops = t,
                this.bottoms = e
            }
            ,
            t.prototype.getHorizontalIndex = function(t) {
                this.ensureBuilt();
                var e, n = this.lefts, i = this.rights, r = n.length;
                for (e = 0; e < r; e++)
                    if (t >= n[e] && t < i[e])
                        return e
            }
            ,
            t.prototype.getVerticalIndex = function(t) {
                this.ensureBuilt();
                var e, n = this.tops, i = this.bottoms, r = n.length;
                for (e = 0; e < r; e++)
                    if (t >= n[e] && t < i[e])
                        return e
            }
            ,
            t.prototype.getLeftOffset = function(t) {
                return this.ensureBuilt(),
                this.lefts[t]
            }
            ,
            t.prototype.getLeftPosition = function(t) {
                return this.ensureBuilt(),
                this.lefts[t] - this.origin.left
            }
            ,
            t.prototype.getRightOffset = function(t) {
                return this.ensureBuilt(),
                this.rights[t]
            }
            ,
            t.prototype.getRightPosition = function(t) {
                return this.ensureBuilt(),
                this.rights[t] - this.origin.left
            }
            ,
            t.prototype.getWidth = function(t) {
                return this.ensureBuilt(),
                this.rights[t] - this.lefts[t]
            }
            ,
            t.prototype.getTopOffset = function(t) {
                return this.ensureBuilt(),
                this.tops[t]
            }
            ,
            t.prototype.getTopPosition = function(t) {
                return this.ensureBuilt(),
                this.tops[t] - this.origin.top
            }
            ,
            t.prototype.getBottomOffset = function(t) {
                return this.ensureBuilt(),
                this.bottoms[t]
            }
            ,
            t.prototype.getBottomPosition = function(t) {
                return this.ensureBuilt(),
                this.bottoms[t] - this.origin.top
            }
            ,
            t.prototype.getHeight = function(t) {
                return this.ensureBuilt(),
                this.bottoms[t] - this.tops[t]
            }
            ,
            t.prototype.queryBoundingRect = function() {
                var t;
                return this.els.length > 0 && (t = r.getScrollParent(this.els.eq(0)),
                !t.is(document)) ? r.getClientRect(t) : null
            }
            ,
            t.prototype.isPointInBounds = function(t, e) {
                return this.isLeftInBounds(t) && this.isTopInBounds(e)
            }
            ,
            t.prototype.isLeftInBounds = function(t) {
                return !this.boundingRect || t >= this.boundingRect.left && t < this.boundingRect.right
            }
            ,
            t.prototype.isTopInBounds = function(t) {
                return !this.boundingRect || t >= this.boundingRect.top && t < this.boundingRect.bottom
            }
            ,
            t
        }();
        e.default = o
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(4)
          , o = n(7)
          , s = n(20)
          , a = function() {
            function t(t) {
                this.isInteracting = !1,
                this.isDistanceSurpassed = !1,
                this.isDelayEnded = !1,
                this.isDragging = !1,
                this.isTouch = !1,
                this.isGeneric = !1,
                this.shouldCancelTouchScroll = !0,
                this.scrollAlwaysKills = !1,
                this.isAutoScroll = !1,
                this.scrollSensitivity = 30,
                this.scrollSpeed = 200,
                this.scrollIntervalMs = 50,
                this.options = t || {}
            }
            return t.prototype.startInteraction = function(t, e) {
                if (void 0 === e && (e = {}),
                "mousedown" === t.type) {
                    if (s.default.get().shouldIgnoreMouse())
                        return;
                    if (!r.isPrimaryMouseButton(t))
                        return;
                    t.preventDefault()
                }
                this.isInteracting || (this.delay = r.firstDefined(e.delay, this.options.delay, 0),
                this.minDistance = r.firstDefined(e.distance, this.options.distance, 0),
                this.subjectEl = this.options.subjectEl,
                r.preventSelection(i("body")),
                this.isInteracting = !0,
                this.isTouch = r.getEvIsTouch(t),
                this.isGeneric = "dragstart" === t.type,
                this.isDelayEnded = !1,
                this.isDistanceSurpassed = !1,
                this.originX = r.getEvX(t),
                this.originY = r.getEvY(t),
                this.scrollEl = r.getScrollParent(i(t.target)),
                this.bindHandlers(),
                this.initAutoScroll(),
                this.handleInteractionStart(t),
                this.startDelay(t),
                this.minDistance || this.handleDistanceSurpassed(t))
            }
            ,
            t.prototype.handleInteractionStart = function(t) {
                this.trigger("interactionStart", t)
            }
            ,
            t.prototype.endInteraction = function(t, e) {
                this.isInteracting && (this.endDrag(t),
                this.delayTimeoutId && (clearTimeout(this.delayTimeoutId),
                this.delayTimeoutId = null),
                this.destroyAutoScroll(),
                this.unbindHandlers(),
                this.isInteracting = !1,
                this.handleInteractionEnd(t, e),
                r.allowSelection(i("body")))
            }
            ,
            t.prototype.handleInteractionEnd = function(t, e) {
                this.trigger("interactionEnd", t, e || !1)
            }
            ,
            t.prototype.bindHandlers = function() {
                var t = s.default.get();
                this.isGeneric ? this.listenTo(i(document), {
                    drag: this.handleMove,
                    dragstop: this.endInteraction
                }) : this.isTouch ? this.listenTo(t, {
                    touchmove: this.handleTouchMove,
                    touchend: this.endInteraction,
                    scroll: this.handleTouchScroll
                }) : this.listenTo(t, {
                    mousemove: this.handleMouseMove,
                    mouseup: this.endInteraction
                }),
                this.listenTo(t, {
                    selectstart: r.preventDefault,
                    contextmenu: r.preventDefault
                })
            }
            ,
            t.prototype.unbindHandlers = function() {
                this.stopListeningTo(s.default.get()),
                this.stopListeningTo(i(document))
            }
            ,
            t.prototype.startDrag = function(t, e) {
                this.startInteraction(t, e),
                this.isDragging || (this.isDragging = !0,
                this.handleDragStart(t))
            }
            ,
            t.prototype.handleDragStart = function(t) {
                this.trigger("dragStart", t)
            }
            ,
            t.prototype.handleMove = function(t) {
                var e = r.getEvX(t) - this.originX
                  , n = r.getEvY(t) - this.originY
                  , i = this.minDistance;
                this.isDistanceSurpassed || e * e + n * n >= i * i && this.handleDistanceSurpassed(t),
                this.isDragging && this.handleDrag(e, n, t)
            }
            ,
            t.prototype.handleDrag = function(t, e, n) {
                this.trigger("drag", t, e, n),
                this.updateAutoScroll(n)
            }
            ,
            t.prototype.endDrag = function(t) {
                this.isDragging && (this.isDragging = !1,
                this.handleDragEnd(t))
            }
            ,
            t.prototype.handleDragEnd = function(t) {
                this.trigger("dragEnd", t)
            }
            ,
            t.prototype.startDelay = function(t) {
                var e = this;
                this.delay ? this.delayTimeoutId = setTimeout(function() {
                    e.handleDelayEnd(t)
                }, this.delay) : this.handleDelayEnd(t)
            }
            ,
            t.prototype.handleDelayEnd = function(t) {
                this.isDelayEnded = !0,
                this.isDistanceSurpassed && this.startDrag(t)
            }
            ,
            t.prototype.handleDistanceSurpassed = function(t) {
                this.isDistanceSurpassed = !0,
                this.isDelayEnded && this.startDrag(t)
            }
            ,
            t.prototype.handleTouchMove = function(t) {
                this.isDragging && this.shouldCancelTouchScroll && t.preventDefault(),
                this.handleMove(t)
            }
            ,
            t.prototype.handleMouseMove = function(t) {
                this.handleMove(t)
            }
            ,
            t.prototype.handleTouchScroll = function(t) {
                this.isDragging && !this.scrollAlwaysKills || this.endInteraction(t, !0)
            }
            ,
            t.prototype.trigger = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                this.options[t] && this.options[t].apply(this, e),
                this["_" + t] && this["_" + t].apply(this, e)
            }
            ,
            t.prototype.initAutoScroll = function() {
                var t = this.scrollEl;
                this.isAutoScroll = this.options.scroll && t && !t.is(window) && !t.is(document),
                this.isAutoScroll && this.listenTo(t, "scroll", r.debounce(this.handleDebouncedScroll, 100))
            }
            ,
            t.prototype.destroyAutoScroll = function() {
                this.endAutoScroll(),
                this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
            }
            ,
            t.prototype.computeScrollBounds = function() {
                this.isAutoScroll && (this.scrollBounds = r.getOuterRect(this.scrollEl))
            }
            ,
            t.prototype.updateAutoScroll = function(t) {
                var e, n, i, o, s = this.scrollSensitivity, a = this.scrollBounds, l = 0, u = 0;
                a && (e = (s - (r.getEvY(t) - a.top)) / s,
                n = (s - (a.bottom - r.getEvY(t))) / s,
                i = (s - (r.getEvX(t) - a.left)) / s,
                o = (s - (a.right - r.getEvX(t))) / s,
                e >= 0 && e <= 1 ? l = e * this.scrollSpeed * -1 : n >= 0 && n <= 1 && (l = n * this.scrollSpeed),
                i >= 0 && i <= 1 ? u = i * this.scrollSpeed * -1 : o >= 0 && o <= 1 && (u = o * this.scrollSpeed)),
                this.setScrollVel(l, u)
            }
            ,
            t.prototype.setScrollVel = function(t, e) {
                this.scrollTopVel = t,
                this.scrollLeftVel = e,
                this.constrainScrollVel(),
                !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(r.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs))
            }
            ,
            t.prototype.constrainScrollVel = function() {
                var t = this.scrollEl;
                this.scrollTopVel < 0 ? t.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0),
                this.scrollLeftVel < 0 ? t.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
            }
            ,
            t.prototype.scrollIntervalFunc = function() {
                var t = this.scrollEl
                  , e = this.scrollIntervalMs / 1e3;
                this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e),
                this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e),
                this.constrainScrollVel(),
                this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
            }
            ,
            t.prototype.endAutoScroll = function() {
                this.scrollIntervalId && (clearInterval(this.scrollIntervalId),
                this.scrollIntervalId = null,
                this.handleScrollEnd())
            }
            ,
            t.prototype.handleDebouncedScroll = function() {
                this.scrollIntervalId || this.handleScrollEnd()
            }
            ,
            t.prototype.handleScrollEnd = function() {}
            ,
            t
        }();
        e.default = a,
        o.default.mixInto(a)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(4)
          , o = n(14)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.updateDayTable = function() {
                for (var t, e, n, i = this, r = i.view, o = r.calendar, s = o.msToUtcMoment(i.dateProfile.renderUnzonedRange.startMs, !0), a = o.msToUtcMoment(i.dateProfile.renderUnzonedRange.endMs, !0), l = -1, u = [], d = []; s.isBefore(a); )
                    r.isHiddenDay(s) ? u.push(l + .5) : (l++,
                    u.push(l),
                    d.push(s.clone())),
                    s.add(1, "days");
                if (this.breakOnWeeks) {
                    for (e = d[0].day(),
                    t = 1; t < d.length && d[t].day() !== e; t++)
                        ;
                    n = Math.ceil(d.length / t)
                } else
                    n = 1,
                    t = d.length;
                this.dayDates = d,
                this.dayIndices = u,
                this.daysPerRow = t,
                this.rowCnt = n,
                this.updateDayTableCols()
            }
            ,
            e.prototype.updateDayTableCols = function() {
                this.colCnt = this.computeColCnt(),
                this.colHeadFormat = this.opt("columnHeaderFormat") || this.opt("columnFormat") || this.computeColHeadFormat()
            }
            ,
            e.prototype.computeColCnt = function() {
                return this.daysPerRow
            }
            ,
            e.prototype.getCellDate = function(t, e) {
                return this.dayDates[this.getCellDayIndex(t, e)].clone()
            }
            ,
            e.prototype.getCellRange = function(t, e) {
                var n = this.getCellDate(t, e);
                return {
                    start: n,
                    end: n.clone().add(1, "days")
                }
            }
            ,
            e.prototype.getCellDayIndex = function(t, e) {
                return t * this.daysPerRow + this.getColDayIndex(e)
            }
            ,
            e.prototype.getColDayIndex = function(t) {
                return this.isRTL ? this.colCnt - 1 - t : t
            }
            ,
            e.prototype.getDateDayIndex = function(t) {
                var e = this.dayIndices
                  , n = t.diff(this.dayDates[0], "days");
                return n < 0 ? e[0] - 1 : n >= e.length ? e[e.length - 1] + 1 : e[n]
            }
            ,
            e.prototype.computeColHeadFormat = function() {
                return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.opt("dayOfMonthFormat") : "dddd"
            }
            ,
            e.prototype.sliceRangeByRow = function(t) {
                var e, n, i, r, o, s = this.daysPerRow, a = this.view.computeDayRange(t), l = this.getDateDayIndex(a.start), u = this.getDateDayIndex(a.end.clone().subtract(1, "days")), d = [];
                for (e = 0; e < this.rowCnt; e++)
                    n = e * s,
                    i = n + s - 1,
                    r = Math.max(l, n),
                    o = Math.min(u, i),
                    r = Math.ceil(r),
                    o = Math.floor(o),
                    r <= o && d.push({
                        row: e,
                        firstRowDayIndex: r - n,
                        lastRowDayIndex: o - n,
                        isStart: r === l,
                        isEnd: o === u
                    });
                return d
            }
            ,
            e.prototype.sliceRangeByDay = function(t) {
                var e, n, i, r, o, s, a = this.daysPerRow, l = this.view.computeDayRange(t), u = this.getDateDayIndex(l.start), d = this.getDateDayIndex(l.end.clone().subtract(1, "days")), c = [];
                for (e = 0; e < this.rowCnt; e++)
                    for (n = e * a,
                    i = n + a - 1,
                    r = n; r <= i; r++)
                        o = Math.max(u, r),
                        s = Math.min(d, r),
                        o = Math.ceil(o),
                        s = Math.floor(s),
                        o <= s && c.push({
                            row: e,
                            firstRowDayIndex: o - n,
                            lastRowDayIndex: s - n,
                            isStart: o === u,
                            isEnd: s === d
                        });
                return c
            }
            ,
            e.prototype.renderHeadHtml = function() {
                var t = this.view.calendar.theme;
                return '<div class="fc-row ' + t.getClass("headerRow") + '"><table class="' + t.getClass("tableGrid") + '"><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
            }
            ,
            e.prototype.renderHeadIntroHtml = function() {
                return this.renderIntroHtml()
            }
            ,
            e.prototype.renderHeadTrHtml = function() {
                return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
            }
            ,
            e.prototype.renderHeadDateCellsHtml = function() {
                var t, e, n = [];
                for (t = 0; t < this.colCnt; t++)
                    e = this.getCellDate(0, t),
                    n.push(this.renderHeadDateCellHtml(e));
                return n.join("")
            }
            ,
            e.prototype.renderHeadDateCellHtml = function(t, e, n) {
                var i, o = this, s = o.view, a = o.dateProfile.activeUnzonedRange.containsDate(t), l = ["fc-day-header", s.calendar.theme.getClass("widgetHeader")];
                return i = "function" == typeof o.opt("columnHeaderHtml") ? o.opt("columnHeaderHtml")(t) : "function" == typeof o.opt("columnHeaderText") ? r.htmlEscape(o.opt("columnHeaderText")(t)) : r.htmlEscape(t.format(o.colHeadFormat)),
                1 === o.rowCnt ? l = l.concat(o.getDayClasses(t, !0)) : l.push("fc-" + r.dayIDs[t.day()]),
                '<th class="' + l.join(" ") + '"' + (1 === (a && o.rowCnt) ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e > 1 ? ' colspan="' + e + '"' : "") + (n ? " " + n : "") + ">" + (a ? s.buildGotoAnchorHtml({
                    date: t,
                    forceOff: o.rowCnt > 1 || 1 === o.colCnt
                }, i) : i) + "</th>"
            }
            ,
            e.prototype.renderBgTrHtml = function(t) {
                return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(t)) + this.renderBgCellsHtml(t) + (this.isRTL ? this.renderBgIntroHtml(t) : "") + "</tr>"
            }
            ,
            e.prototype.renderBgIntroHtml = function(t) {
                return this.renderIntroHtml()
            }
            ,
            e.prototype.renderBgCellsHtml = function(t) {
                var e, n, i = [];
                for (e = 0; e < this.colCnt; e++)
                    n = this.getCellDate(t, e),
                    i.push(this.renderBgCellHtml(n));
                return i.join("")
            }
            ,
            e.prototype.renderBgCellHtml = function(t, e) {
                var n = this
                  , i = n.view
                  , r = n.dateProfile.activeUnzonedRange.containsDate(t)
                  , o = n.getDayClasses(t);
                return o.unshift("fc-day", i.calendar.theme.getClass("widgetContent")),
                '<td class="' + o.join(" ") + '"' + (r ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e ? " " + e : "") + "></td>"
            }
            ,
            e.prototype.renderIntroHtml = function() {}
            ,
            e.prototype.bookendCells = function(t) {
                var e = this.renderIntroHtml();
                e && (this.isRTL ? t.append(e) : t.prepend(e))
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.component = t,
                this.fillRenderer = e
            }
            return t.prototype.render = function(t) {
                var e = this.component
                  , n = e._getDateProfile().activeUnzonedRange
                  , i = t.buildEventInstanceGroup(e.hasAllDayBusinessHours, n)
                  , r = i ? e.eventRangesToEventFootprints(i.sliceRenderRanges(n)) : [];
                this.renderEventFootprints(r)
            }
            ,
            t.prototype.renderEventFootprints = function(t) {
                var e = this.component.eventFootprintsToSegs(t);
                this.renderSegs(e),
                this.segs = e
            }
            ,
            t.prototype.renderSegs = function(t) {
                this.fillRenderer && this.fillRenderer.renderSegs("businessHours", t, {
                    getClasses: function(t) {
                        return ["fc-nonbusiness", "fc-bgevent"]
                    }
                })
            }
            ,
            t.prototype.unrender = function() {
                this.fillRenderer && this.fillRenderer.unrender("businessHours"),
                this.segs = null
            }
            ,
            t.prototype.getSegs = function() {
                return this.segs || []
            }
            ,
            t
        }();
        e.default = n
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(4)
          , o = function() {
            function t(t) {
                this.fillSegTag = "div",
                this.component = t,
                this.elsByFill = {}
            }
            return t.prototype.renderFootprint = function(t, e, n) {
                this.renderSegs(t, this.component.componentFootprintToSegs(e), n)
            }
            ,
            t.prototype.renderSegs = function(t, e, n) {
                var i;
                return e = this.buildSegEls(t, e, n),
                i = this.attachSegEls(t, e),
                i && this.reportEls(t, i),
                e
            }
            ,
            t.prototype.unrender = function(t) {
                var e = this.elsByFill[t];
                e && (e.remove(),
                delete this.elsByFill[t])
            }
            ,
            t.prototype.buildSegEls = function(t, e, n) {
                var r, o = this, s = "", a = [];
                if (e.length) {
                    for (r = 0; r < e.length; r++)
                        s += this.buildSegHtml(t, e[r], n);
                    i(s).each(function(t, r) {
                        var s = e[t]
                          , l = i(r);
                        n.filterEl && (l = n.filterEl(s, l)),
                        l && (l = i(l),
                        l.is(o.fillSegTag) && (s.el = l,
                        a.push(s)))
                    })
                }
                return a
            }
            ,
            t.prototype.buildSegHtml = function(t, e, n) {
                var i = n.getClasses ? n.getClasses(e) : []
                  , o = r.cssToStr(n.getCss ? n.getCss(e) : {});
                return "<" + this.fillSegTag + (i.length ? ' class="' + i.join(" ") + '"' : "") + (o ? ' style="' + o + '"' : "") + " />"
            }
            ,
            t.prototype.attachSegEls = function(t, e) {}
            ,
            t.prototype.reportEls = function(t, e) {
                this.elsByFill[t] ? this.elsByFill[t] = this.elsByFill[t].add(e) : this.elsByFill[t] = i(e)
            }
            ,
            t
        }();
        e.default = o
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(13)
          , r = n(35)
          , o = n(6)
          , s = function() {
            function t(t, e) {
                this.view = t._getView(),
                this.component = t,
                this.eventRenderer = e
            }
            return t.prototype.renderComponentFootprint = function(t) {
                this.renderEventFootprints([this.fabricateEventFootprint(t)])
            }
            ,
            t.prototype.renderEventDraggingFootprints = function(t, e, n) {
                this.renderEventFootprints(t, e, "fc-dragging", n ? null : this.view.opt("dragOpacity"))
            }
            ,
            t.prototype.renderEventResizingFootprints = function(t, e, n) {
                this.renderEventFootprints(t, e, "fc-resizing")
            }
            ,
            t.prototype.renderEventFootprints = function(t, e, n, i) {
                var r, o = this.component.eventFootprintsToSegs(t), s = "fc-helper " + (n || "");
                for (o = this.eventRenderer.renderFgSegEls(o),
                r = 0; r < o.length; r++)
                    o[r].el.addClass(s);
                if (null != i)
                    for (r = 0; r < o.length; r++)
                        o[r].el.css("opacity", i);
                this.helperEls = this.renderSegs(o, e)
            }
            ,
            t.prototype.renderSegs = function(t, e) {}
            ,
            t.prototype.unrender = function() {
                this.helperEls && (this.helperEls.remove(),
                this.helperEls = null)
            }
            ,
            t.prototype.fabricateEventFootprint = function(t) {
                var e, n = this.view.calendar, s = n.footprintToDateProfile(t), a = new i.default(new o.default(n));
                return a.dateProfile = s,
                e = a.buildInstance(),
                new r.default(t,a,e)
            }
            ,
            t
        }();
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(20)
          , o = n(15)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.bindToEl = function(t) {
                var e = this.component;
                e.bindSegHandlerToEl(t, "click", this.handleClick.bind(this)),
                e.bindSegHandlerToEl(t, "mouseenter", this.handleMouseover.bind(this)),
                e.bindSegHandlerToEl(t, "mouseleave", this.handleMouseout.bind(this))
            }
            ,
            e.prototype.handleClick = function(t, e) {
                !1 === this.component.publiclyTrigger("eventClick", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, this.view]
                }) && e.preventDefault()
            }
            ,
            e.prototype.handleMouseover = function(t, e) {
                r.default.get().shouldIgnoreMouse() || this.mousedOverSeg || (this.mousedOverSeg = t,
                this.view.isEventDefResizable(t.footprint.eventDef) && t.el.addClass("fc-allow-mouse-resize"),
                this.component.publiclyTrigger("eventMouseover", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, this.view]
                }))
            }
            ,
            e.prototype.handleMouseout = function(t, e) {
                this.mousedOverSeg && (this.mousedOverSeg = null,
                this.view.isEventDefResizable(t.footprint.eventDef) && t.el.removeClass("fc-allow-mouse-resize"),
                this.component.publiclyTrigger("eventMouseout", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e || {}, this.view]
                }))
            }
            ,
            e.prototype.end = function() {
                this.mousedOverSeg && this.handleMouseout(this.mousedOverSeg)
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(14)
          , o = n(245)
          , s = n(225)
          , a = n(59)
          , l = n(224)
          , u = n(223)
          , d = n(222)
          , c = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e
        }(r.default);
        e.default = c,
        c.prototype.dateClickingClass = o.default,
        c.prototype.dateSelectingClass = s.default,
        c.prototype.eventPointingClass = a.default,
        c.prototype.eventDraggingClass = l.default,
        c.prototype.eventResizingClass = u.default,
        c.prototype.externalDroppingClass = d.default
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(4)
          , s = n(53)
          , a = n(249)
          , l = n(5)
          , u = n(12)
          , d = n(35)
          , c = n(56)
          , p = n(60)
          , h = n(40)
          , f = n(55)
          , g = n(250)
          , v = n(251)
          , y = n(252)
          , m = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.cellWeekNumbersVisible = !1,
                n.bottomCoordPadding = 0,
                n.isRigid = !1,
                n.hasAllDayBusinessHours = !0,
                n
            }
            return i.__extends(e, t),
            e.prototype.componentFootprintToSegs = function(t) {
                var e, n, i = this.sliceRangeByRow(t.unzonedRange);
                for (e = 0; e < i.length; e++)
                    n = i[e],
                    this.isRTL ? (n.leftCol = this.daysPerRow - 1 - n.lastRowDayIndex,
                    n.rightCol = this.daysPerRow - 1 - n.firstRowDayIndex) : (n.leftCol = n.firstRowDayIndex,
                    n.rightCol = n.lastRowDayIndex);
                return i
            }
            ,
            e.prototype.renderDates = function(t) {
                this.dateProfile = t,
                this.updateDayTable(),
                this.renderGrid()
            }
            ,
            e.prototype.unrenderDates = function() {
                this.removeSegPopover()
            }
            ,
            e.prototype.renderGrid = function() {
                var t, e, n = this.view, i = this.rowCnt, r = this.colCnt, o = "";
                for (this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()),
                t = 0; t < i; t++)
                    o += this.renderDayRowHtml(t, this.isRigid);
                for (this.el.html(o),
                this.rowEls = this.el.find(".fc-row"),
                this.cellEls = this.el.find(".fc-day, .fc-disabled-day"),
                this.rowCoordCache = new s.default({
                    els: this.rowEls,
                    isVertical: !0
                }),
                this.colCoordCache = new s.default({
                    els: this.cellEls.slice(0, this.colCnt),
                    isHorizontal: !0
                }),
                t = 0; t < i; t++)
                    for (e = 0; e < r; e++)
                        this.publiclyTrigger("dayRender", {
                            context: n,
                            args: [this.getCellDate(t, e), this.getCellEl(t, e), n]
                        })
            }
            ,
            e.prototype.renderDayRowHtml = function(t, e) {
                var n = this.view.calendar.theme
                  , i = ["fc-row", "fc-week", n.getClass("dayRow")];
                return e && i.push("fc-rigid"),
                '<div class="' + i.join(" ") + '"><div class="fc-bg"><table class="' + n.getClass("tableGrid") + '">' + this.renderBgTrHtml(t) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>" : "") + "</table></div></div>"
            }
            ,
            e.prototype.getIsNumbersVisible = function() {
                return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible
            }
            ,
            e.prototype.getIsDayNumbersVisible = function() {
                return this.rowCnt > 1
            }
            ,
            e.prototype.renderNumberTrHtml = function(t) {
                return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(t)) + this.renderNumberCellsHtml(t) + (this.isRTL ? this.renderNumberIntroHtml(t) : "") + "</tr>"
            }
            ,
            e.prototype.renderNumberIntroHtml = function(t) {
                return this.renderIntroHtml()
            }
            ,
            e.prototype.renderNumberCellsHtml = function(t) {
                var e, n, i = [];
                for (e = 0; e < this.colCnt; e++)
                    n = this.getCellDate(t, e),
                    i.push(this.renderNumberCellHtml(n));
                return i.join("")
            }
            ,
            e.prototype.renderNumberCellHtml = function(t) {
                var e, n, i = this.view, r = "", o = this.dateProfile.activeUnzonedRange.containsDate(t), s = this.getIsDayNumbersVisible() && o;
                return s || this.cellWeekNumbersVisible ? (e = this.getDayClasses(t),
                e.unshift("fc-day-top"),
                this.cellWeekNumbersVisible && (n = "ISO" === t._locale._fullCalendar_weekCalc ? 1 : t._locale.firstDayOfWeek()),
                r += '<td class="' + e.join(" ") + '"' + (o ? ' data-date="' + t.format() + '"' : "") + ">",
                this.cellWeekNumbersVisible && t.day() === n && (r += i.buildGotoAnchorHtml({
                    date: t,
                    type: "week"
                }, {
                    class: "fc-week-number"
                }, t.format("w"))),
                s && (r += i.buildGotoAnchorHtml(t, {
                    class: "fc-day-number"
                }, t.format("D"))),
                r += "</td>") : "<td/>"
            }
            ,
            e.prototype.prepareHits = function() {
                this.colCoordCache.build(),
                this.rowCoordCache.build(),
                this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
            }
            ,
            e.prototype.releaseHits = function() {
                this.colCoordCache.clear(),
                this.rowCoordCache.clear()
            }
            ,
            e.prototype.queryHit = function(t, e) {
                if (this.colCoordCache.isLeftInBounds(t) && this.rowCoordCache.isTopInBounds(e)) {
                    var n = this.colCoordCache.getHorizontalIndex(t)
                      , i = this.rowCoordCache.getVerticalIndex(e);
                    if (null != i && null != n)
                        return this.getCellHit(i, n)
                }
            }
            ,
            e.prototype.getHitFootprint = function(t) {
                var e = this.getCellRange(t.row, t.col);
                return new u.default(new l.default(e.start,e.end),!0)
            }
            ,
            e.prototype.getHitEl = function(t) {
                return this.getCellEl(t.row, t.col)
            }
            ,
            e.prototype.getCellHit = function(t, e) {
                return {
                    row: t,
                    col: e,
                    component: this,
                    left: this.colCoordCache.getLeftOffset(e),
                    right: this.colCoordCache.getRightOffset(e),
                    top: this.rowCoordCache.getTopOffset(t),
                    bottom: this.rowCoordCache.getBottomOffset(t)
                }
            }
            ,
            e.prototype.getCellEl = function(t, e) {
                return this.cellEls.eq(t * this.colCnt + e)
            }
            ,
            e.prototype.executeEventUnrender = function() {
                this.removeSegPopover(),
                t.prototype.executeEventUnrender.call(this)
            }
            ,
            e.prototype.getOwnEventSegs = function() {
                return t.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || [])
            }
            ,
            e.prototype.renderDrag = function(t, e, n) {
                var i;
                for (i = 0; i < t.length; i++)
                    this.renderHighlight(t[i].componentFootprint);
                if (t.length && e && e.component !== this)
                    return this.helperRenderer.renderEventDraggingFootprints(t, e, n),
                    !0
            }
            ,
            e.prototype.unrenderDrag = function() {
                this.unrenderHighlight(),
                this.helperRenderer.unrender()
            }
            ,
            e.prototype.renderEventResize = function(t, e, n) {
                var i;
                for (i = 0; i < t.length; i++)
                    this.renderHighlight(t[i].componentFootprint);
                this.helperRenderer.renderEventResizingFootprints(t, e, n)
            }
            ,
            e.prototype.unrenderEventResize = function() {
                this.unrenderHighlight(),
                this.helperRenderer.unrender()
            }
            ,
            e.prototype.removeSegPopover = function() {
                this.segPopover && this.segPopover.hide()
            }
            ,
            e.prototype.limitRows = function(t) {
                var e, n, i = this.eventRenderer.rowStructs || [];
                for (e = 0; e < i.length; e++)
                    this.unlimitRow(e),
                    !1 !== (n = !!t && ("number" == typeof t ? t : this.computeRowLevelLimit(e))) && this.limitRow(e, n)
            }
            ,
            e.prototype.computeRowLevelLimit = function(t) {
                function e(t, e) {
                    o = Math.max(o, r(e).outerHeight())
                }
                var n, i, o, s = this.rowEls.eq(t), a = s.height(), l = this.eventRenderer.rowStructs[t].tbodyEl.children();
                for (n = 0; n < l.length; n++)
                    if (i = l.eq(n).removeClass("fc-limited"),
                    o = 0,
                    i.find("> td > :first-child").each(e),
                    i.position().top + o > a)
                        return n;
                return !1
            }
            ,
            e.prototype.limitRow = function(t, e) {
                var n, i, o, s, a, l, u, d, c, p, h, f, g, v, y, m = this, w = this.eventRenderer.rowStructs[t], b = [], D = 0, E = function(n) {
                    for (; D < n; )
                        l = m.getCellSegs(t, D, e),
                        l.length && (c = i[e - 1][D],
                        y = m.renderMoreLink(t, D, l),
                        v = r("<div/>").append(y),
                        c.append(v),
                        b.push(v[0])),
                        D++
                };
                if (e && e < w.segLevels.length) {
                    for (n = w.segLevels[e - 1],
                    i = w.cellMatrix,
                    o = w.tbodyEl.children().slice(e).addClass("fc-limited").get(),
                    s = 0; s < n.length; s++) {
                        for (a = n[s],
                        E(a.leftCol),
                        d = [],
                        u = 0; D <= a.rightCol; )
                            l = this.getCellSegs(t, D, e),
                            d.push(l),
                            u += l.length,
                            D++;
                        if (u) {
                            for (c = i[e - 1][a.leftCol],
                            p = c.attr("rowspan") || 1,
                            h = [],
                            f = 0; f < d.length; f++)
                                g = r('<td class="fc-more-cell"/>').attr("rowspan", p),
                                l = d[f],
                                y = this.renderMoreLink(t, a.leftCol + f, [a].concat(l)),
                                v = r("<div/>").append(y),
                                g.append(v),
                                h.push(g[0]),
                                b.push(g[0]);
                            c.addClass("fc-limited").after(r(h)),
                            o.push(c[0])
                        }
                    }
                    E(this.colCnt),
                    w.moreEls = r(b),
                    w.limitedEls = r(o)
                }
            }
            ,
            e.prototype.unlimitRow = function(t) {
                var e = this.eventRenderer.rowStructs[t];
                e.moreEls && (e.moreEls.remove(),
                e.moreEls = null),
                e.limitedEls && (e.limitedEls.removeClass("fc-limited"),
                e.limitedEls = null)
            }
            ,
            e.prototype.renderMoreLink = function(t, e, n) {
                var i = this
                  , o = this.view;
                return r('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click", function(s) {
                    var a = i.opt("eventLimitClick")
                      , l = i.getCellDate(t, e)
                      , u = r(s.currentTarget)
                      , d = i.getCellEl(t, e)
                      , c = i.getCellSegs(t, e)
                      , p = i.resliceDaySegs(c, l)
                      , h = i.resliceDaySegs(n, l);
                    "function" == typeof a && (a = i.publiclyTrigger("eventLimitClick", {
                        context: o,
                        args: [{
                            date: l.clone(),
                            dayEl: d,
                            moreEl: u,
                            segs: p,
                            hiddenSegs: h
                        }, s, o]
                    })),
                    "popover" === a ? i.showSegPopover(t, e, u, p) : "string" == typeof a && o.calendar.zoomTo(l, a)
                })
            }
            ,
            e.prototype.showSegPopover = function(t, e, n, i) {
                var r, o, s = this, l = this.view, u = n.parent();
                r = 1 === this.rowCnt ? l.el : this.rowEls.eq(t),
                o = {
                    className: "fc-more-popover " + l.calendar.theme.getClass("popover"),
                    content: this.renderSegPopoverContent(t, e, i),
                    parentEl: l.el,
                    top: r.offset().top,
                    autoHide: !0,
                    viewportConstrain: this.opt("popoverViewportConstrain"),
                    hide: function() {
                        s.popoverSegs && s.triggerBeforeEventSegsDestroyed(s.popoverSegs),
                        s.segPopover.removeElement(),
                        s.segPopover = null,
                        s.popoverSegs = null
                    }
                },
                this.isRTL ? o.right = u.offset().left + u.outerWidth() + 1 : o.left = u.offset().left - 1,
                this.segPopover = new a.default(o),
                this.segPopover.show(),
                this.bindAllSegHandlersToEl(this.segPopover.el),
                this.triggerAfterEventSegsRendered(i)
            }
            ,
            e.prototype.renderSegPopoverContent = function(t, e, n) {
                var i, s = this.view, a = s.calendar.theme, l = this.getCellDate(t, e).format(this.opt("dayPopoverFormat")), u = r('<div class="fc-header ' + a.getClass("popoverHeader") + '"><span class="fc-close ' + a.getIconClass("close") + '"></span><span class="fc-title">' + o.htmlEscape(l) + '</span><div class="fc-clear"/></div><div class="fc-body ' + a.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>'), d = u.find(".fc-event-container");
                for (n = this.eventRenderer.renderFgSegEls(n, !0),
                this.popoverSegs = n,
                i = 0; i < n.length; i++)
                    this.hitsNeeded(),
                    n[i].hit = this.getCellHit(t, e),
                    this.hitsNotNeeded(),
                    d.append(n[i].el);
                return u
            }
            ,
            e.prototype.resliceDaySegs = function(t, e) {
                var n, i, o, s = e.clone(), a = s.clone().add(1, "days"), c = new l.default(s,a), p = [];
                for (n = 0; n < t.length; n++)
                    i = t[n],
                    (o = i.footprint.componentFootprint.unzonedRange.intersect(c)) && p.push(r.extend({}, i, {
                        footprint: new d.default(new u.default(o,i.footprint.componentFootprint.isAllDay),i.footprint.eventDef,i.footprint.eventInstance),
                        isStart: i.isStart && o.isStart,
                        isEnd: i.isEnd && o.isEnd
                    }));
                return this.eventRenderer.sortEventSegs(p),
                p
            }
            ,
            e.prototype.getMoreLinkText = function(t) {
                var e = this.opt("eventLimitText");
                return "function" == typeof e ? e(t) : "+" + t + " " + e
            }
            ,
            e.prototype.getCellSegs = function(t, e, n) {
                for (var i, r = this.eventRenderer.rowStructs[t].segMatrix, o = n || 0, s = []; o < r.length; )
                    i = r[o][e],
                    i && s.push(i),
                    o++;
                return s
            }
            ,
            e
        }(h.default);
        e.default = m,
        m.prototype.eventRendererClass = g.default,
        m.prototype.businessHourRendererClass = c.default,
        m.prototype.helperRendererClass = v.default,
        m.prototype.fillRendererClass = y.default,
        p.default.mixInto(m),
        f.default.mixInto(m)
    }
    , function(t, e, n) {
        function i(t) {
            return function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.colWeekNumbersVisible = !1,
                    e
                }
                return r.__extends(e, t),
                e.prototype.renderHeadIntroHtml = function() {
                    var t = this.view;
                    return this.colWeekNumbersVisible ? '<th class="fc-week-number ' + t.calendar.theme.getClass("widgetHeader") + '" ' + t.weekNumberStyleAttr() + "><span>" + s.htmlEscape(this.opt("weekNumberTitle")) + "</span></th>" : ""
                }
                ,
                e.prototype.renderNumberIntroHtml = function(t) {
                    var e = this.view
                      , n = this.getCellDate(t, 0);
                    return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + e.weekNumberStyleAttr() + ">" + e.buildGotoAnchorHtml({
                        date: n,
                        type: "week",
                        forceOff: 1 === this.colCnt
                    }, n.format("w")) + "</td>" : ""
                }
                ,
                e.prototype.renderBgIntroHtml = function() {
                    var t = this.view;
                    return this.colWeekNumbersVisible ? '<td class="fc-week-number ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.weekNumberStyleAttr() + "></td>" : ""
                }
                ,
                e.prototype.renderIntroHtml = function() {
                    var t = this.view;
                    return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "></td>" : ""
                }
                ,
                e.prototype.getIsNumbersVisible = function() {
                    return d.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible
                }
                ,
                e
            }(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2)
          , o = n(3)
          , s = n(4)
          , a = n(39)
          , l = n(41)
          , u = n(228)
          , d = n(61)
          , c = function(t) {
            function e(e, n) {
                var i = t.call(this, e, n) || this;
                return i.dayGrid = i.instantiateDayGrid(),
                i.dayGrid.isRigid = i.hasRigidRows(),
                i.opt("weekNumbers") && (i.opt("weekNumbersWithinDays") ? (i.dayGrid.cellWeekNumbersVisible = !0,
                i.dayGrid.colWeekNumbersVisible = !1) : (i.dayGrid.cellWeekNumbersVisible = !1,
                i.dayGrid.colWeekNumbersVisible = !0)),
                i.addChild(i.dayGrid),
                i.scroller = new a.default({
                    overflowX: "hidden",
                    overflowY: "auto"
                }),
                i
            }
            return r.__extends(e, t),
            e.prototype.instantiateDayGrid = function() {
                return new (i(this.dayGridClass))(this)
            }
            ,
            e.prototype.executeDateRender = function(e) {
                this.dayGrid.breakOnWeeks = /year|month|week/.test(e.currentRangeUnit),
                t.prototype.executeDateRender.call(this, e)
            }
            ,
            e.prototype.renderSkeleton = function() {
                var t, e;
                this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()),
                this.scroller.render(),
                t = this.scroller.el.addClass("fc-day-grid-container"),
                e = o('<div class="fc-day-grid" />').appendTo(t),
                this.el.find(".fc-body > tr > td").append(t),
                this.dayGrid.headContainerEl = this.el.find(".fc-head-container"),
                this.dayGrid.setElement(e)
            }
            ,
            e.prototype.unrenderSkeleton = function() {
                this.dayGrid.removeElement(),
                this.scroller.destroy()
            }
            ,
            e.prototype.renderSkeletonHtml = function() {
                var t = this.calendar.theme;
                return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '"></td></tr></tbody></table>'
            }
            ,
            e.prototype.weekNumberStyleAttr = function() {
                return null != this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
            }
            ,
            e.prototype.hasRigidRows = function() {
                var t = this.opt("eventLimit");
                return t && "number" != typeof t
            }
            ,
            e.prototype.updateSize = function(e, n, i) {
                var r, o, a = this.opt("eventLimit"), l = this.dayGrid.headContainerEl.find(".fc-row");
                if (!this.dayGrid.rowEls)
                    return void (n || (r = this.computeScrollerHeight(e),
                    this.scroller.setHeight(r)));
                t.prototype.updateSize.call(this, e, n, i),
                this.dayGrid.colWeekNumbersVisible && (this.weekNumberWidth = s.matchCellWidths(this.el.find(".fc-week-number"))),
                this.scroller.clear(),
                s.uncompensateScroll(l),
                this.dayGrid.removeSegPopover(),
                a && "number" == typeof a && this.dayGrid.limitRows(a),
                r = this.computeScrollerHeight(e),
                this.setGridHeight(r, n),
                a && "number" != typeof a && this.dayGrid.limitRows(a),
                n || (this.scroller.setHeight(r),
                o = this.scroller.getScrollbarWidths(),
                (o.left || o.right) && (s.compensateScroll(l, o),
                r = this.computeScrollerHeight(e),
                this.scroller.setHeight(r)),
                this.scroller.lockOverflow(o))
            }
            ,
            e.prototype.computeScrollerHeight = function(t) {
                return t - s.subtractInnerElHeight(this.el, this.scroller.el)
            }
            ,
            e.prototype.setGridHeight = function(t, e) {
                e ? s.undistributeHeight(this.dayGrid.rowEls) : s.distributeHeight(this.dayGrid.rowEls, t, !0)
            }
            ,
            e.prototype.computeInitialDateScroll = function() {
                return {
                    top: 0
                }
            }
            ,
            e.prototype.queryDateScroll = function() {
                return {
                    top: this.scroller.getScrollTop()
                }
            }
            ,
            e.prototype.applyDateScroll = function(t) {
                void 0 !== t.top && this.scroller.setScrollTop(t.top)
            }
            ,
            e
        }(l.default);
        e.default = c,
        c.prototype.dateProfileGeneratorClass = u.default,
        c.prototype.dayGridClass = d.default
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        function i(t, e, n) {
            var i;
            for (i = 0; i < t.length; i++)
                if (!e(t[i].eventInstance.toLegacy(), n ? n.toLegacy() : null))
                    return !1;
            return !0
        }
        function r(t, e) {
            var n, i, r, o, s = e.toLegacy();
            for (n = 0; n < t.length; n++) {
                if (i = t[n].eventInstance,
                r = i.def,
                !1 === (o = r.getOverlap()))
                    return !1;
                if ("function" == typeof o && !o(i.toLegacy(), s))
                    return !1
            }
            return !0
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(5)
          , s = n(12)
          , a = n(49)
          , l = n(6)
          , u = n(34)
          , d = function() {
            function t(t, e) {
                this.eventManager = t,
                this._calendar = e
            }
            return t.prototype.opt = function(t) {
                return this._calendar.opt(t)
            }
            ,
            t.prototype.isEventInstanceGroupAllowed = function(t) {
                var e, n = t.getEventDef(), i = this.eventRangesToEventFootprints(t.getAllEventRanges()), r = this.getPeerEventInstances(n), o = r.map(u.eventInstanceToEventRange), s = this.eventRangesToEventFootprints(o), a = n.getConstraint(), l = n.getOverlap(), d = this.opt("eventAllow");
                for (e = 0; e < i.length; e++)
                    if (!this.isFootprintAllowed(i[e].componentFootprint, s, a, l, i[e].eventInstance))
                        return !1;
                if (d)
                    for (e = 0; e < i.length; e++)
                        if (!1 === d(i[e].componentFootprint.toLegacy(this._calendar), i[e].getEventLegacy()))
                            return !1;
                return !0
            }
            ,
            t.prototype.getPeerEventInstances = function(t) {
                return this.eventManager.getEventInstancesWithoutId(t.id)
            }
            ,
            t.prototype.isSelectionFootprintAllowed = function(t) {
                var e, n = this.eventManager.getEventInstances(), i = n.map(u.eventInstanceToEventRange), r = this.eventRangesToEventFootprints(i);
                return !!this.isFootprintAllowed(t, r, this.opt("selectConstraint"), this.opt("selectOverlap")) && (!(e = this.opt("selectAllow")) || !1 !== e(t.toLegacy(this._calendar)))
            }
            ,
            t.prototype.isFootprintAllowed = function(t, e, n, o, s) {
                var a, l;
                if (null != n && (a = this.constraintValToFootprints(n, t.isAllDay),
                !this.isFootprintWithinConstraints(t, a)))
                    return !1;
                if (l = this.collectOverlapEventFootprints(e, t),
                !1 === o) {
                    if (l.length)
                        return !1
                } else if ("function" == typeof o && !i(l, o, s))
                    return !1;
                return !(s && !r(l, s))
            }
            ,
            t.prototype.isFootprintWithinConstraints = function(t, e) {
                var n;
                for (n = 0; n < e.length; n++)
                    if (this.footprintContainsFootprint(e[n], t))
                        return !0;
                return !1
            }
            ,
            t.prototype.constraintValToFootprints = function(t, e) {
                var n;
                return "businessHours" === t ? this.buildCurrentBusinessFootprints(e) : "object" == typeof t ? (n = this.parseEventDefToInstances(t),
                n ? this.eventInstancesToFootprints(n) : this.parseFootprints(t)) : null != t ? (n = this.eventManager.getEventInstancesWithId(t),
                this.eventInstancesToFootprints(n)) : void 0
            }
            ,
            t.prototype.buildCurrentBusinessFootprints = function(t) {
                var e = this._calendar.view
                  , n = e.get("businessHourGenerator")
                  , i = e.dateProfile.activeUnzonedRange
                  , r = n.buildEventInstanceGroup(t, i);
                return r ? this.eventInstancesToFootprints(r.eventInstances) : []
            }
            ,
            t.prototype.eventInstancesToFootprints = function(t) {
                var e = t.map(u.eventInstanceToEventRange);
                return this.eventRangesToEventFootprints(e).map(u.eventFootprintToComponentFootprint)
            }
            ,
            t.prototype.collectOverlapEventFootprints = function(t, e) {
                var n, i = [];
                for (n = 0; n < t.length; n++)
                    this.footprintsIntersect(e, t[n].componentFootprint) && i.push(t[n]);
                return i
            }
            ,
            t.prototype.parseEventDefToInstances = function(t) {
                var e = this.eventManager
                  , n = a.default.parse(t, new l.default(this._calendar));
                return !!n && n.buildInstances(e.currentPeriod.unzonedRange)
            }
            ,
            t.prototype.eventRangesToEventFootprints = function(t) {
                var e, n = [];
                for (e = 0; e < t.length; e++)
                    n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
                return n
            }
            ,
            t.prototype.eventRangeToEventFootprints = function(t) {
                return [u.eventRangeToEventFootprint(t)]
            }
            ,
            t.prototype.parseFootprints = function(t) {
                var e, n;
                return t.start && (e = this._calendar.moment(t.start),
                e.isValid() || (e = null)),
                t.end && (n = this._calendar.moment(t.end),
                n.isValid() || (n = null)),
                [new s.default(new o.default(e,n),e && !e.hasTime() || n && !n.hasTime())]
            }
            ,
            t.prototype.footprintContainsFootprint = function(t, e) {
                return t.unzonedRange.containsRange(e.unzonedRange)
            }
            ,
            t.prototype.footprintsIntersect = function(t, e) {
                return t.unzonedRange.intersectsWith(e.unzonedRange)
            }
            ,
            t
        }();
        e.default = d
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(4)
          , o = n(14)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.defineStandardProps = function(t) {
                var e = this.prototype;
                e.hasOwnProperty("standardPropMap") || (e.standardPropMap = Object.create(e.standardPropMap)),
                r.copyOwnProps(t, e.standardPropMap)
            }
            ,
            e.copyVerbatimStandardProps = function(t, e) {
                var n, i = this.prototype.standardPropMap;
                for (n in i)
                    null != t[n] && !0 === i[n] && (e[n] = t[n])
            }
            ,
            e.prototype.applyProps = function(t) {
                var e, n = this.standardPropMap, i = {}, r = {};
                for (e in t)
                    !0 === n[e] ? this[e] = t[e] : !1 === n[e] ? i[e] = t[e] : r[e] = t[e];
                return this.applyMiscProps(r),
                this.applyManualStandardProps(i)
            }
            ,
            e.prototype.applyManualStandardProps = function(t) {
                return !0
            }
            ,
            e.prototype.applyMiscProps = function(t) {}
            ,
            e.prototype.isStandardProp = function(t) {
                return t in this.standardPropMap
            }
            ,
            e
        }(o.default);
        e.default = s,
        s.prototype.standardPropMap = {}
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.def = t,
                this.dateProfile = e
            }
            return t.prototype.toLegacy = function() {
                var t = this.dateProfile
                  , e = this.def.toLegacy();
                return e.start = t.start.clone(),
                e.end = t.end ? t.end.clone() : null,
                e
            }
            ,
            t
        }();
        e.default = n
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(0)
          , s = n(33)
          , a = n(209)
          , l = n(17)
          , u = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.isAllDay = function() {
                return !this.startTime && !this.endTime
            }
            ,
            e.prototype.buildInstances = function(t) {
                for (var e, n, i, r = this.source.calendar, o = t.getStart(), s = t.getEnd(), u = []; o.isBefore(s); )
                    this.dowHash && !this.dowHash[o.day()] || (e = r.applyTimezone(o),
                    n = e.clone(),
                    i = null,
                    this.startTime ? n.time(this.startTime) : n.stripTime(),
                    this.endTime && (i = e.clone().time(this.endTime)),
                    u.push(new a.default(this,new l.default(n,i,r)))),
                    o.add(1, "days");
                return u
            }
            ,
            e.prototype.setDow = function(t) {
                this.dowHash || (this.dowHash = {});
                for (var e = 0; e < t.length; e++)
                    this.dowHash[t[e]] = !0
            }
            ,
            e.prototype.clone = function() {
                var e = t.prototype.clone.call(this);
                return e.startTime && (e.startTime = o.duration(this.startTime)),
                e.endTime && (e.endTime = o.duration(this.endTime)),
                this.dowHash && (e.dowHash = r.extend({}, this.dowHash)),
                e
            }
            ,
            e
        }(s.default);
        e.default = u,
        u.prototype.applyProps = function(t) {
            var e = s.default.prototype.applyProps.call(this, t);
            return t.start && (this.startTime = o.duration(t.start)),
            t.end && (this.endTime = o.duration(t.end)),
            t.dow && this.setDow(t.dow),
            e
        }
        ,
        u.defineStandardProps({
            start: !1,
            end: !1,
            dow: !1
        })
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e, n) {
                this.unzonedRange = t,
                this.eventDef = e,
                n && (this.eventInstance = n)
            }
            return t
        }();
        e.default = n
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(34)
          , o = n(18)
          , s = n(210)
          , a = n(6)
          , l = {
            start: "09:00",
            end: "17:00",
            dow: [1, 2, 3, 4, 5],
            rendering: "inverse-background"
        }
          , u = function() {
            function t(t, e) {
                this.rawComplexDef = t,
                this.calendar = e
            }
            return t.prototype.buildEventInstanceGroup = function(t, e) {
                var n, i = this.buildEventDefs(t);
                if (i.length)
                    return n = new o.default(r.eventDefsToEventInstances(i, e)),
                    n.explicitEventDef = i[0],
                    n
            }
            ,
            t.prototype.buildEventDefs = function(t) {
                var e, n = this.rawComplexDef, r = [], o = !1, s = [];
                for (!0 === n ? r = [{}] : i.isPlainObject(n) ? r = [n] : i.isArray(n) && (r = n,
                o = !0),
                e = 0; e < r.length; e++)
                    o && !r[e].dow || s.push(this.buildEventDef(t, r[e]));
                return s
            }
            ,
            t.prototype.buildEventDef = function(t, e) {
                var n = i.extend({}, l, e);
                return t && (n.start = null,
                n.end = null),
                s.default.parse(n, new a.default(this.calendar))
            }
            ,
            t
        }();
        e.default = u
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(38)
          , o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e
        }(r.default);
        e.default = o,
        o.prototype.classes = {
            widget: "fc-unthemed",
            widgetHeader: "fc-widget-header",
            widgetContent: "fc-widget-content",
            buttonGroup: "fc-button-group",
            button: "fc-button",
            cornerLeft: "fc-corner-left",
            cornerRight: "fc-corner-right",
            stateDefault: "fc-state-default",
            stateActive: "fc-state-active",
            stateDisabled: "fc-state-disabled",
            stateHover: "fc-state-hover",
            stateDown: "fc-state-down",
            popoverHeader: "fc-widget-header",
            popoverContent: "fc-widget-content",
            headerRow: "fc-widget-header",
            dayRow: "fc-widget-content",
            listView: "fc-widget-content"
        },
        o.prototype.baseIconClass = "fc-icon",
        o.prototype.iconClasses = {
            close: "fc-icon-x",
            prev: "fc-icon-left-single-arrow",
            next: "fc-icon-right-single-arrow",
            prevYear: "fc-icon-left-double-arrow",
            nextYear: "fc-icon-right-double-arrow"
        },
        o.prototype.iconOverrideOption = "buttonIcons",
        o.prototype.iconOverrideCustomButtonOption = "icon",
        o.prototype.iconOverridePrefix = "fc-icon-"
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(38)
          , o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e
        }(r.default);
        e.default = o,
        o.prototype.classes = {
            widget: "ui-widget",
            widgetHeader: "ui-widget-header",
            widgetContent: "ui-widget-content",
            buttonGroup: "fc-button-group",
            button: "ui-button",
            cornerLeft: "ui-corner-left",
            cornerRight: "ui-corner-right",
            stateDefault: "ui-state-default",
            stateActive: "ui-state-active",
            stateDisabled: "ui-state-disabled",
            stateHover: "ui-state-hover",
            stateDown: "ui-state-down",
            today: "ui-state-highlight",
            popoverHeader: "ui-widget-header",
            popoverContent: "ui-widget-content",
            headerRow: "ui-widget-header",
            dayRow: "ui-widget-content",
            listView: "ui-widget-content"
        },
        o.prototype.baseIconClass = "ui-icon",
        o.prototype.iconClasses = {
            close: "ui-icon-closethick",
            prev: "ui-icon-circle-triangle-w",
            next: "ui-icon-circle-triangle-e",
            prevYear: "ui-icon-seek-prev",
            nextYear: "ui-icon-seek-next"
        },
        o.prototype.iconOverrideOption = "themeButtonIcons",
        o.prototype.iconOverrideCustomButtonOption = "themeIcon",
        o.prototype.iconOverridePrefix = "ui-icon-"
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(19)
          , s = n(6)
          , a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.parse = function(t, e) {
                var n;
                return r.isFunction(t.events) ? n = t : r.isFunction(t) && (n = {
                    events: t
                }),
                !!n && s.default.parse.call(this, n, e)
            }
            ,
            e.prototype.fetch = function(t, e, n) {
                var i = this;
                return this.calendar.pushLoading(),
                o.default.construct(function(r) {
                    i.func.call(i.calendar, t.clone(), e.clone(), n, function(t) {
                        i.calendar.popLoading(),
                        r(i.parseEventDefs(t))
                    })
                })
            }
            ,
            e.prototype.getPrimitive = function() {
                return this.func
            }
            ,
            e.prototype.applyManualStandardProps = function(e) {
                var n = t.prototype.applyManualStandardProps.call(this, e);
                return this.func = e.events,
                n
            }
            ,
            e
        }(s.default);
        e.default = a,
        a.defineStandardProps({
            events: !1
        })
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(4)
          , s = n(19)
          , a = n(6)
          , l = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.parse = function(t, e) {
                var n;
                return "string" == typeof t.url ? n = t : "string" == typeof t && (n = {
                    url: t
                }),
                !!n && a.default.parse.call(this, n, e)
            }
            ,
            e.prototype.fetch = function(t, n, i) {
                var a = this
                  , l = this.ajaxSettings
                  , u = l.success
                  , d = l.error
                  , c = this.buildRequestParams(t, n, i);
                return this.calendar.pushLoading(),
                s.default.construct(function(t, n) {
                    r.ajax(r.extend({}, e.AJAX_DEFAULTS, l, {
                        url: a.url,
                        data: c,
                        success: function(e, i, s) {
                            var l;
                            a.calendar.popLoading(),
                            e ? (l = o.applyAll(u, a, [e, i, s]),
                            r.isArray(l) && (e = l),
                            t(a.parseEventDefs(e))) : n()
                        },
                        error: function(t, e, i) {
                            a.calendar.popLoading(),
                            o.applyAll(d, a, [t, e, i]),
                            n()
                        }
                    }))
                })
            }
            ,
            e.prototype.buildRequestParams = function(t, e, n) {
                var i, o, s, a, l = this.calendar, u = this.ajaxSettings, d = {};
                return i = this.startParam,
                null == i && (i = l.opt("startParam")),
                o = this.endParam,
                null == o && (o = l.opt("endParam")),
                s = this.timezoneParam,
                null == s && (s = l.opt("timezoneParam")),
                a = r.isFunction(u.data) ? u.data() : u.data || {},
                r.extend(d, a),
                d[i] = t.format(),
                d[o] = e.format(),
                n && "local" !== n && (d[s] = n),
                d
            }
            ,
            e.prototype.getPrimitive = function() {
                return this.url
            }
            ,
            e.prototype.applyMiscProps = function(t) {
                this.ajaxSettings = t
            }
            ,
            e.AJAX_DEFAULTS = {
                dataType: "json",
                cache: !1
            },
            e
        }(a.default);
        e.default = l,
        l.defineStandardProps({
            url: !0,
            startParam: !0,
            endParam: !0,
            timezoneParam: !0
        })
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(11)
          , r = function() {
            function t() {
                this.q = [],
                this.isPaused = !1,
                this.isRunning = !1
            }
            return t.prototype.queue = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                this.q.push.apply(this.q, t),
                this.tryStart()
            }
            ,
            t.prototype.pause = function() {
                this.isPaused = !0
            }
            ,
            t.prototype.resume = function() {
                this.isPaused = !1,
                this.tryStart()
            }
            ,
            t.prototype.getIsIdle = function() {
                return !this.isRunning && !this.isPaused
            }
            ,
            t.prototype.tryStart = function() {
                !this.isRunning && this.canRunNext() && (this.isRunning = !0,
                this.trigger("start"),
                this.runRemaining())
            }
            ,
            t.prototype.canRunNext = function() {
                return !this.isPaused && this.q.length
            }
            ,
            t.prototype.runRemaining = function() {
                var t, e, n = this;
                do {
                    if (t = this.q.shift(),
                    (e = this.runTask(t)) && e.then)
                        return void e.then(function() {
                            n.canRunNext() && n.runRemaining()
                        })
                } while (this.canRunNext());this.trigger("stop"),
                this.isRunning = !1,
                this.tryStart()
            }
            ,
            t.prototype.runTask = function(t) {
                return t()
            }
            ,
            t
        }();
        e.default = r,
        i.default.mixInto(r)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(217)
          , o = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.waitsByNamespace = e || {},
                n
            }
            return i.__extends(e, t),
            e.prototype.queue = function(t, e, n) {
                var i, r = {
                    func: t,
                    namespace: e,
                    type: n
                };
                e && (i = this.waitsByNamespace[e]),
                this.waitNamespace && (e === this.waitNamespace && null != i ? this.delayWait(i) : (this.clearWait(),
                this.tryStart())),
                this.compoundTask(r) && (this.waitNamespace || null == i ? this.tryStart() : this.startWait(e, i))
            }
            ,
            e.prototype.startWait = function(t, e) {
                this.waitNamespace = t,
                this.spawnWait(e)
            }
            ,
            e.prototype.delayWait = function(t) {
                clearTimeout(this.waitId),
                this.spawnWait(t)
            }
            ,
            e.prototype.spawnWait = function(t) {
                var e = this;
                this.waitId = setTimeout(function() {
                    e.waitNamespace = null,
                    e.tryStart()
                }, t)
            }
            ,
            e.prototype.clearWait = function() {
                this.waitNamespace && (clearTimeout(this.waitId),
                this.waitId = null,
                this.waitNamespace = null)
            }
            ,
            e.prototype.canRunNext = function() {
                if (!t.prototype.canRunNext.call(this))
                    return !1;
                if (this.waitNamespace) {
                    for (var e = this.q, n = 0; n < e.length; n++)
                        if (e[n].namespace !== this.waitNamespace)
                            return !0;
                    return !1
                }
                return !0
            }
            ,
            e.prototype.runTask = function(t) {
                t.func()
            }
            ,
            e.prototype.compoundTask = function(t) {
                var e, n, i = this.q, r = !0;
                if (t.namespace && "destroy" === t.type)
                    for (e = i.length - 1; e >= 0; e--)
                        switch (n = i[e],
                        n.type) {
                        case "init":
                            r = !1;
                        case "add":
                        case "remove":
                            i.splice(e, 1)
                        }
                return r && i.push(t),
                r
            }
            ,
            e
        }(r.default);
        e.default = o
    }
    , function(t, e, n) {
        function i(t) {
            var e, n, i, r = [];
            for (e in t)
                for (n = t[e].eventInstances,
                i = 0; i < n.length; i++)
                    r.push(n[i].toLegacy());
            return r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2)
          , o = n(3)
          , s = n(0)
          , a = n(4)
          , l = n(10)
          , u = n(47)
          , d = n(237)
          , c = n(34)
          , p = function(t) {
            function e(n, i) {
                var r = t.call(this) || this;
                return r.isRTL = !1,
                r.hitsNeededDepth = 0,
                r.hasAllDayBusinessHours = !1,
                r.isDatesRendered = !1,
                n && (r.view = n),
                i && (r.options = i),
                r.uid = String(e.guid++),
                r.childrenByUid = {},
                r.nextDayThreshold = s.duration(r.opt("nextDayThreshold")),
                r.isRTL = r.opt("isRTL"),
                r.fillRendererClass && (r.fillRenderer = new r.fillRendererClass(r)),
                r.eventRendererClass && (r.eventRenderer = new r.eventRendererClass(r,r.fillRenderer)),
                r.helperRendererClass && r.eventRenderer && (r.helperRenderer = new r.helperRendererClass(r,r.eventRenderer)),
                r.businessHourRendererClass && r.fillRenderer && (r.businessHourRenderer = new r.businessHourRendererClass(r,r.fillRenderer)),
                r
            }
            return r.__extends(e, t),
            e.prototype.addChild = function(t) {
                return !this.childrenByUid[t.uid] && (this.childrenByUid[t.uid] = t,
                !0)
            }
            ,
            e.prototype.removeChild = function(t) {
                return !!this.childrenByUid[t.uid] && (delete this.childrenByUid[t.uid],
                !0)
            }
            ,
            e.prototype.updateSize = function(t, e, n) {
                this.callChildren("updateSize", arguments)
            }
            ,
            e.prototype.opt = function(t) {
                return this._getView().opt(t)
            }
            ,
            e.prototype.publiclyTrigger = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = this._getCalendar();
                return n.publiclyTrigger.apply(n, t)
            }
            ,
            e.prototype.hasPublicHandlers = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = this._getCalendar();
                return n.hasPublicHandlers.apply(n, t)
            }
            ,
            e.prototype.executeDateRender = function(t) {
                this.dateProfile = t,
                this.renderDates(t),
                this.isDatesRendered = !0,
                this.callChildren("executeDateRender", arguments)
            }
            ,
            e.prototype.executeDateUnrender = function() {
                this.callChildren("executeDateUnrender", arguments),
                this.dateProfile = null,
                this.unrenderDates(),
                this.isDatesRendered = !1
            }
            ,
            e.prototype.renderDates = function(t) {}
            ,
            e.prototype.unrenderDates = function() {}
            ,
            e.prototype.getNowIndicatorUnit = function() {}
            ,
            e.prototype.renderNowIndicator = function(t) {
                this.callChildren("renderNowIndicator", arguments)
            }
            ,
            e.prototype.unrenderNowIndicator = function() {
                this.callChildren("unrenderNowIndicator", arguments)
            }
            ,
            e.prototype.renderBusinessHours = function(t) {
                this.businessHourRenderer && this.businessHourRenderer.render(t),
                this.callChildren("renderBusinessHours", arguments)
            }
            ,
            e.prototype.unrenderBusinessHours = function() {
                this.callChildren("unrenderBusinessHours", arguments),
                this.businessHourRenderer && this.businessHourRenderer.unrender()
            }
            ,
            e.prototype.executeEventRender = function(t) {
                this.eventRenderer ? (this.eventRenderer.rangeUpdated(),
                this.eventRenderer.render(t)) : this.renderEvents && this.renderEvents(i(t)),
                this.callChildren("executeEventRender", arguments)
            }
            ,
            e.prototype.executeEventUnrender = function() {
                this.callChildren("executeEventUnrender", arguments),
                this.eventRenderer ? this.eventRenderer.unrender() : this.destroyEvents && this.destroyEvents()
            }
            ,
            e.prototype.getBusinessHourSegs = function() {
                var t = this.getOwnBusinessHourSegs();
                return this.iterChildren(function(e) {
                    t.push.apply(t, e.getBusinessHourSegs())
                }),
                t
            }
            ,
            e.prototype.getOwnBusinessHourSegs = function() {
                return this.businessHourRenderer ? this.businessHourRenderer.getSegs() : []
            }
            ,
            e.prototype.getEventSegs = function() {
                var t = this.getOwnEventSegs();
                return this.iterChildren(function(e) {
                    t.push.apply(t, e.getEventSegs())
                }),
                t
            }
            ,
            e.prototype.getOwnEventSegs = function() {
                return this.eventRenderer ? this.eventRenderer.getSegs() : []
            }
            ,
            e.prototype.triggerAfterEventsRendered = function() {
                this.triggerAfterEventSegsRendered(this.getEventSegs()),
                this.publiclyTrigger("eventAfterAllRender", {
                    context: this,
                    args: [this]
                })
            }
            ,
            e.prototype.triggerAfterEventSegsRendered = function(t) {
                var e = this;
                this.hasPublicHandlers("eventAfterRender") && t.forEach(function(t) {
                    var n;
                    t.el && (n = t.footprint.getEventLegacy(),
                    e.publiclyTrigger("eventAfterRender", {
                        context: n,
                        args: [n, t.el, e]
                    }))
                })
            }
            ,
            e.prototype.triggerBeforeEventsDestroyed = function() {
                this.triggerBeforeEventSegsDestroyed(this.getEventSegs())
            }
            ,
            e.prototype.triggerBeforeEventSegsDestroyed = function(t) {
                var e = this;
                this.hasPublicHandlers("eventDestroy") && t.forEach(function(t) {
                    var n;
                    t.el && (n = t.footprint.getEventLegacy(),
                    e.publiclyTrigger("eventDestroy", {
                        context: n,
                        args: [n, t.el, e]
                    }))
                })
            }
            ,
            e.prototype.showEventsWithId = function(t) {
                this.getEventSegs().forEach(function(e) {
                    e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "")
                }),
                this.callChildren("showEventsWithId", arguments)
            }
            ,
            e.prototype.hideEventsWithId = function(t) {
                this.getEventSegs().forEach(function(e) {
                    e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "hidden")
                }),
                this.callChildren("hideEventsWithId", arguments)
            }
            ,
            e.prototype.renderDrag = function(t, e, n) {
                var i = !1;
                return this.iterChildren(function(r) {
                    r.renderDrag(t, e, n) && (i = !0)
                }),
                i
            }
            ,
            e.prototype.unrenderDrag = function() {
                this.callChildren("unrenderDrag", arguments)
            }
            ,
            e.prototype.renderEventResize = function(t, e, n) {
                this.callChildren("renderEventResize", arguments)
            }
            ,
            e.prototype.unrenderEventResize = function() {
                this.callChildren("unrenderEventResize", arguments)
            }
            ,
            e.prototype.renderSelectionFootprint = function(t) {
                this.renderHighlight(t),
                this.callChildren("renderSelectionFootprint", arguments)
            }
            ,
            e.prototype.unrenderSelection = function() {
                this.unrenderHighlight(),
                this.callChildren("unrenderSelection", arguments)
            }
            ,
            e.prototype.renderHighlight = function(t) {
                this.fillRenderer && this.fillRenderer.renderFootprint("highlight", t, {
                    getClasses: function() {
                        return ["fc-highlight"]
                    }
                }),
                this.callChildren("renderHighlight", arguments)
            }
            ,
            e.prototype.unrenderHighlight = function() {
                this.fillRenderer && this.fillRenderer.unrender("highlight"),
                this.callChildren("unrenderHighlight", arguments)
            }
            ,
            e.prototype.hitsNeeded = function() {
                this.hitsNeededDepth++ || this.prepareHits(),
                this.callChildren("hitsNeeded", arguments)
            }
            ,
            e.prototype.hitsNotNeeded = function() {
                this.hitsNeededDepth && !--this.hitsNeededDepth && this.releaseHits(),
                this.callChildren("hitsNotNeeded", arguments)
            }
            ,
            e.prototype.prepareHits = function() {}
            ,
            e.prototype.releaseHits = function() {}
            ,
            e.prototype.queryHit = function(t, e) {
                var n, i, r = this.childrenByUid;
                for (n in r)
                    if (i = r[n].queryHit(t, e))
                        break;
                return i
            }
            ,
            e.prototype.getSafeHitFootprint = function(t) {
                var e = this.getHitFootprint(t);
                return this.dateProfile.activeUnzonedRange.containsRange(e.unzonedRange) ? e : null
            }
            ,
            e.prototype.getHitFootprint = function(t) {}
            ,
            e.prototype.getHitEl = function(t) {}
            ,
            e.prototype.eventRangesToEventFootprints = function(t) {
                var e, n = [];
                for (e = 0; e < t.length; e++)
                    n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
                return n
            }
            ,
            e.prototype.eventRangeToEventFootprints = function(t) {
                return [c.eventRangeToEventFootprint(t)]
            }
            ,
            e.prototype.eventFootprintsToSegs = function(t) {
                var e, n = [];
                for (e = 0; e < t.length; e++)
                    n.push.apply(n, this.eventFootprintToSegs(t[e]));
                return n
            }
            ,
            e.prototype.eventFootprintToSegs = function(t) {
                var e, n, i, r = t.componentFootprint.unzonedRange;
                for (e = this.componentFootprintToSegs(t.componentFootprint),
                n = 0; n < e.length; n++)
                    i = e[n],
                    r.isStart || (i.isStart = !1),
                    r.isEnd || (i.isEnd = !1),
                    i.footprint = t;
                return e
            }
            ,
            e.prototype.componentFootprintToSegs = function(t) {
                return []
            }
            ,
            e.prototype.callChildren = function(t, e) {
                this.iterChildren(function(n) {
                    n[t].apply(n, e)
                })
            }
            ,
            e.prototype.iterChildren = function(t) {
                var e, n = this.childrenByUid;
                for (e in n)
                    t(n[e])
            }
            ,
            e.prototype._getCalendar = function() {
                var t = this;
                return t.calendar || t.view.calendar
            }
            ,
            e.prototype._getView = function() {
                return this.view
            }
            ,
            e.prototype._getDateProfile = function() {
                return this._getView().get("dateProfile")
            }
            ,
            e.prototype.buildGotoAnchorHtml = function(t, e, n) {
                var i, r, s, u;
                return o.isPlainObject(t) ? (i = t.date,
                r = t.type,
                s = t.forceOff) : i = t,
                i = l.default(i),
                u = {
                    date: i.format("YYYY-MM-DD"),
                    type: r || "day"
                },
                "string" == typeof e && (n = e,
                e = null),
                e = e ? " " + a.attrsToStr(e) : "",
                n = n || "",
                !s && this.opt("navLinks") ? "<a" + e + ' data-goto="' + a.htmlEscape(JSON.stringify(u)) + '">' + n + "</a>" : "<span" + e + ">" + n + "</span>"
            }
            ,
            e.prototype.getAllDayHtml = function() {
                return this.opt("allDayHtml") || a.htmlEscape(this.opt("allDayText"))
            }
            ,
            e.prototype.getDayClasses = function(t, e) {
                var n, i = this._getView(), r = [];
                return this.dateProfile.activeUnzonedRange.containsDate(t) ? (r.push("fc-" + a.dayIDs[t.day()]),
                i.isDateInOtherMonth(t, this.dateProfile) && r.push("fc-other-month"),
                n = i.calendar.getNow(),
                t.isSame(n, "day") ? (r.push("fc-today"),
                !0 !== e && r.push(i.calendar.theme.getClass("today"))) : t < n ? r.push("fc-past") : r.push("fc-future")) : r.push("fc-disabled-day"),
                r
            }
            ,
            e.prototype.formatRange = function(t, e, n, i) {
                var r = t.end;
                return e && (r = r.clone().subtract(1)),
                u.formatRange(t.start, r, n, i, this.isRTL)
            }
            ,
            e.prototype.currentRangeAs = function(t) {
                return this._getDateProfile().currentUnzonedRange.as(t)
            }
            ,
            e.prototype.computeDayRange = function(t) {
                var e = this._getCalendar()
                  , n = e.msToUtcMoment(t.startMs, !0)
                  , i = e.msToUtcMoment(t.endMs)
                  , r = +i.time()
                  , o = i.clone().stripTime();
                return r && r >= this.nextDayThreshold && o.add(1, "days"),
                o <= n && (o = n.clone().add(1, "days")),
                {
                    start: n,
                    end: o
                }
            }
            ,
            e.prototype.isMultiDayRange = function(t) {
                var e = this.computeDayRange(t);
                return e.end.diff(e.start, "days") > 1
            }
            ,
            e.guid = 0,
            e
        }(d.default);
        e.default = p
    }
    , function(t, e, n) {
        function i(t, e) {
            return null == e ? t : r.isFunction(e) ? t.filter(e) : (e += "",
            t.filter(function(t) {
                return t.id == e || t._id === e
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(3)
          , o = n(0)
          , s = n(4)
          , a = n(31)
          , l = n(238)
          , u = n(20)
          , d = n(11)
          , c = n(7)
          , p = n(239)
          , h = n(240)
          , f = n(241)
          , g = n(207)
          , v = n(30)
          , y = n(10)
          , m = n(5)
          , w = n(12)
          , b = n(17)
          , D = n(242)
          , E = n(212)
          , S = n(37)
          , C = n(49)
          , R = n(13)
          , T = n(36)
          , M = n(6)
          , I = n(51)
          , H = function() {
            function t(t, e) {
                this.loadingLevel = 0,
                this.ignoreUpdateViewSize = 0,
                this.freezeContentHeightDepth = 0,
                u.default.needed(),
                this.el = t,
                this.viewsByType = {},
                this.optionsManager = new h.default(this,e),
                this.viewSpecManager = new f.default(this.optionsManager,this),
                this.initMomentInternals(),
                this.initCurrentDate(),
                this.initEventManager(),
                this.constraints = new g.default(this.eventManager,this),
                this.constructed()
            }
            return t.prototype.constructed = function() {}
            ,
            t.prototype.getView = function() {
                return this.view
            }
            ,
            t.prototype.publiclyTrigger = function(t, e) {
                var n, i, o = this.opt(t);
                if (r.isPlainObject(e) ? (n = e.context,
                i = e.args) : r.isArray(e) && (i = e),
                null == n && (n = this.el[0]),
                i || (i = []),
                this.triggerWith(t, n, i),
                o)
                    return o.apply(n, i)
            }
            ,
            t.prototype.hasPublicHandlers = function(t) {
                return this.hasHandlers(t) || this.opt(t)
            }
            ,
            t.prototype.option = function(t, e) {
                var n;
                if ("string" == typeof t) {
                    if (void 0 === e)
                        return this.optionsManager.get(t);
                    n = {},
                    n[t] = e,
                    this.optionsManager.add(n)
                } else
                    "object" == typeof t && this.optionsManager.add(t)
            }
            ,
            t.prototype.opt = function(t) {
                return this.optionsManager.get(t)
            }
            ,
            t.prototype.instantiateView = function(t) {
                var e = this.viewSpecManager.getViewSpec(t);
                if (!e)
                    throw new Error('View type "' + t + '" is not valid');
                return new e.class(this,e)
            }
            ,
            t.prototype.isValidViewType = function(t) {
                return Boolean(this.viewSpecManager.getViewSpec(t))
            }
            ,
            t.prototype.changeView = function(t, e) {
                e && (e.start && e.end ? this.optionsManager.recordOverrides({
                    visibleRange: e
                }) : this.currentDate = this.moment(e).stripZone()),
                this.renderView(t)
            }
            ,
            t.prototype.zoomTo = function(t, e) {
                var n;
                e = e || "day",
                n = this.viewSpecManager.getViewSpec(e) || this.viewSpecManager.getUnitViewSpec(e),
                this.currentDate = t.clone(),
                this.renderView(n ? n.type : null)
            }
            ,
            t.prototype.initCurrentDate = function() {
                var t = this.opt("defaultDate");
                this.currentDate = null != t ? this.moment(t).stripZone() : this.getNow()
            }
            ,
            t.prototype.prev = function() {
                var t = this.view
                  , e = t.dateProfileGenerator.buildPrev(t.get("dateProfile"));
                e.isValid && (this.currentDate = e.date,
                this.renderView())
            }
            ,
            t.prototype.next = function() {
                var t = this.view
                  , e = t.dateProfileGenerator.buildNext(t.get("dateProfile"));
                e.isValid && (this.currentDate = e.date,
                this.renderView())
            }
            ,
            t.prototype.prevYear = function() {
                this.currentDate.add(-1, "years"),
                this.renderView()
            }
            ,
            t.prototype.nextYear = function() {
                this.currentDate.add(1, "years"),
                this.renderView()
            }
            ,
            t.prototype.today = function() {
                this.currentDate = this.getNow(),
                this.renderView()
            }
            ,
            t.prototype.gotoDate = function(t) {
                this.currentDate = this.moment(t).stripZone(),
                this.renderView()
            }
            ,
            t.prototype.incrementDate = function(t) {
                this.currentDate.add(o.duration(t)),
                this.renderView()
            }
            ,
            t.prototype.getDate = function() {
                return this.applyTimezone(this.currentDate)
            }
            ,
            t.prototype.pushLoading = function() {
                this.loadingLevel++ || this.publiclyTrigger("loading", [!0, this.view])
            }
            ,
            t.prototype.popLoading = function() {
                --this.loadingLevel || this.publiclyTrigger("loading", [!1, this.view])
            }
            ,
            t.prototype.render = function() {
                this.contentEl ? this.elementVisible() && (this.calcSize(),
                this.updateViewSize()) : this.initialRender()
            }
            ,
            t.prototype.initialRender = function() {
                var t = this
                  , e = this.el;
                e.addClass("fc"),
                e.on("click.fc", "a[data-goto]", function(e) {
                    var n = r(e.currentTarget)
                      , i = n.data("goto")
                      , o = t.moment(i.date)
                      , a = i.type
                      , l = t.view.opt("navLink" + s.capitaliseFirstLetter(a) + "Click");
                    "function" == typeof l ? l(o, e) : ("string" == typeof l && (a = l),
                    t.zoomTo(o, a))
                }),
                this.optionsManager.watch("settingTheme", ["?theme", "?themeSystem"], function(n) {
                    var i = I.getThemeSystemClass(n.themeSystem || n.theme)
                      , r = new i(t.optionsManager)
                      , o = r.getClass("widget");
                    t.theme = r,
                    o && e.addClass(o)
                }, function() {
                    var n = t.theme.getClass("widget");
                    t.theme = null,
                    n && e.removeClass(n)
                }),
                this.optionsManager.watch("settingBusinessHourGenerator", ["?businessHours"], function(e) {
                    t.businessHourGenerator = new E.default(e.businessHours,t),
                    t.view && t.view.set("businessHourGenerator", t.businessHourGenerator)
                }, function() {
                    t.businessHourGenerator = null
                }),
                this.optionsManager.watch("applyingDirClasses", ["?isRTL", "?locale"], function(t) {
                    e.toggleClass("fc-ltr", !t.isRTL),
                    e.toggleClass("fc-rtl", t.isRTL)
                }),
                this.contentEl = r("<div class='fc-view-container'/>").prependTo(e),
                this.initToolbars(),
                this.renderHeader(),
                this.renderFooter(),
                this.renderView(this.opt("defaultView")),
                this.opt("handleWindowResize") && r(window).resize(this.windowResizeProxy = s.debounce(this.windowResize.bind(this), this.opt("windowResizeDelay")))
            }
            ,
            t.prototype.destroy = function() {
                this.view && this.clearView(),
                this.toolbarsManager.proxyCall("removeElement"),
                this.contentEl.remove(),
                this.el.removeClass("fc fc-ltr fc-rtl"),
                this.optionsManager.unwatch("settingTheme"),
                this.optionsManager.unwatch("settingBusinessHourGenerator"),
                this.el.off(".fc"),
                this.windowResizeProxy && (r(window).unbind("resize", this.windowResizeProxy),
                this.windowResizeProxy = null),
                u.default.unneeded()
            }
            ,
            t.prototype.elementVisible = function() {
                return this.el.is(":visible")
            }
            ,
            t.prototype.bindViewHandlers = function(t) {
                var e = this;
                t.watch("titleForCalendar", ["title"], function(n) {
                    t === e.view && e.setToolbarsTitle(n.title)
                }),
                t.watch("dateProfileForCalendar", ["dateProfile"], function(n) {
                    t === e.view && (e.currentDate = n.dateProfile.date,
                    e.updateToolbarButtons(n.dateProfile))
                })
            }
            ,
            t.prototype.unbindViewHandlers = function(t) {
                t.unwatch("titleForCalendar"),
                t.unwatch("dateProfileForCalendar")
            }
            ,
            t.prototype.renderView = function(t) {
                var e, n = this.view;
                this.freezeContentHeight(),
                n && t && n.type !== t && this.clearView(),
                !this.view && t && (e = this.view = this.viewsByType[t] || (this.viewsByType[t] = this.instantiateView(t)),
                this.bindViewHandlers(e),
                e.startBatchRender(),
                e.setElement(r("<div class='fc-view fc-" + t + "-view' />").appendTo(this.contentEl)),
                this.toolbarsManager.proxyCall("activateButton", t)),
                this.view && (this.view.get("businessHourGenerator") !== this.businessHourGenerator && this.view.set("businessHourGenerator", this.businessHourGenerator),
                this.view.setDate(this.currentDate),
                e && e.stopBatchRender()),
                this.thawContentHeight()
            }
            ,
            t.prototype.clearView = function() {
                var t = this.view;
                this.toolbarsManager.proxyCall("deactivateButton", t.type),
                this.unbindViewHandlers(t),
                t.removeElement(),
                t.unsetDate(),
                this.view = null
            }
            ,
            t.prototype.reinitView = function() {
                var t = this.view
                  , e = t.queryScroll();
                this.freezeContentHeight(),
                this.clearView(),
                this.calcSize(),
                this.renderView(t.type),
                this.view.applyScroll(e),
                this.thawContentHeight()
            }
            ,
            t.prototype.getSuggestedViewHeight = function() {
                return null == this.suggestedViewHeight && this.calcSize(),
                this.suggestedViewHeight
            }
            ,
            t.prototype.isHeightAuto = function() {
                return "auto" === this.opt("contentHeight") || "auto" === this.opt("height")
            }
            ,
            t.prototype.updateViewSize = function(t) {
                void 0 === t && (t = !1);
                var e, n = this.view;
                if (!this.ignoreUpdateViewSize && n)
                    return t && (this.calcSize(),
                    e = n.queryScroll()),
                    this.ignoreUpdateViewSize++,
                    n.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), t),
                    this.ignoreUpdateViewSize--,
                    t && n.applyScroll(e),
                    !0
            }
            ,
            t.prototype.calcSize = function() {
                this.elementVisible() && this._calcSize()
            }
            ,
            t.prototype._calcSize = function() {
                var t = this.opt("contentHeight")
                  , e = this.opt("height");
                this.suggestedViewHeight = "number" == typeof t ? t : "function" == typeof t ? t() : "number" == typeof e ? e - this.queryToolbarsHeight() : "function" == typeof e ? e() - this.queryToolbarsHeight() : "parent" === e ? this.el.parent().height() - this.queryToolbarsHeight() : Math.round(this.contentEl.width() / Math.max(this.opt("aspectRatio"), .5))
            }
            ,
            t.prototype.windowResize = function(t) {
                t.target === window && this.view && this.view.isDatesRendered && this.updateViewSize(!0) && this.publiclyTrigger("windowResize", [this.view])
            }
            ,
            t.prototype.freezeContentHeight = function() {
                this.freezeContentHeightDepth++ || this.forceFreezeContentHeight()
            }
            ,
            t.prototype.forceFreezeContentHeight = function() {
                this.contentEl.css({
                    width: "100%",
                    height: this.contentEl.height(),
                    overflow: "hidden"
                })
            }
            ,
            t.prototype.thawContentHeight = function() {
                this.freezeContentHeightDepth--,
                this.contentEl.css({
                    width: "",
                    height: "",
                    overflow: ""
                }),
                this.freezeContentHeightDepth && this.forceFreezeContentHeight()
            }
            ,
            t.prototype.initToolbars = function() {
                this.header = new p.default(this,this.computeHeaderOptions()),
                this.footer = new p.default(this,this.computeFooterOptions()),
                this.toolbarsManager = new l.default([this.header, this.footer])
            }
            ,
            t.prototype.computeHeaderOptions = function() {
                return {
                    extraClasses: "fc-header-toolbar",
                    layout: this.opt("header")
                }
            }
            ,
            t.prototype.computeFooterOptions = function() {
                return {
                    extraClasses: "fc-footer-toolbar",
                    layout: this.opt("footer")
                }
            }
            ,
            t.prototype.renderHeader = function() {
                var t = this.header;
                t.setToolbarOptions(this.computeHeaderOptions()),
                t.render(),
                t.el && this.el.prepend(t.el)
            }
            ,
            t.prototype.renderFooter = function() {
                var t = this.footer;
                t.setToolbarOptions(this.computeFooterOptions()),
                t.render(),
                t.el && this.el.append(t.el)
            }
            ,
            t.prototype.setToolbarsTitle = function(t) {
                this.toolbarsManager.proxyCall("updateTitle", t)
            }
            ,
            t.prototype.updateToolbarButtons = function(t) {
                var e = this.getNow()
                  , n = this.view
                  , i = n.dateProfileGenerator.build(e)
                  , r = n.dateProfileGenerator.buildPrev(n.get("dateProfile"))
                  , o = n.dateProfileGenerator.buildNext(n.get("dateProfile"));
                this.toolbarsManager.proxyCall(i.isValid && !t.currentUnzonedRange.containsDate(e) ? "enableButton" : "disableButton", "today"),
                this.toolbarsManager.proxyCall(r.isValid ? "enableButton" : "disableButton", "prev"),
                this.toolbarsManager.proxyCall(o.isValid ? "enableButton" : "disableButton", "next")
            }
            ,
            t.prototype.queryToolbarsHeight = function() {
                return this.toolbarsManager.items.reduce(function(t, e) {
                    return t + (e.el ? e.el.outerHeight(!0) : 0)
                }, 0)
            }
            ,
            t.prototype.select = function(t, e) {
                this.view.select(this.buildSelectFootprint.apply(this, arguments))
            }
            ,
            t.prototype.unselect = function() {
                this.view && this.view.unselect()
            }
            ,
            t.prototype.buildSelectFootprint = function(t, e) {
                var n, i = this.moment(t).stripZone();
                return n = e ? this.moment(e).stripZone() : i.hasTime() ? i.clone().add(this.defaultTimedEventDuration) : i.clone().add(this.defaultAllDayEventDuration),
                new w.default(new m.default(i,n),!i.hasTime())
            }
            ,
            t.prototype.initMomentInternals = function() {
                var t = this;
                this.defaultAllDayEventDuration = o.duration(this.opt("defaultAllDayEventDuration")),
                this.defaultTimedEventDuration = o.duration(this.opt("defaultTimedEventDuration")),
                this.optionsManager.watch("buildingMomentLocale", ["?locale", "?monthNames", "?monthNamesShort", "?dayNames", "?dayNamesShort", "?firstDay", "?weekNumberCalculation"], function(e) {
                    var n, i = e.weekNumberCalculation, r = e.firstDay;
                    "iso" === i && (i = "ISO");
                    var o = Object.create(v.getMomentLocaleData(e.locale));
                    e.monthNames && (o._months = e.monthNames),
                    e.monthNamesShort && (o._monthsShort = e.monthNamesShort),
                    e.dayNames && (o._weekdays = e.dayNames),
                    e.dayNamesShort && (o._weekdaysShort = e.dayNamesShort),
                    null == r && "ISO" === i && (r = 1),
                    null != r && (n = Object.create(o._week),
                    n.dow = r,
                    o._week = n),
                    "ISO" !== i && "local" !== i && "function" != typeof i || (o._fullCalendar_weekCalc = i),
                    t.localeData = o,
                    t.currentDate && t.localizeMoment(t.currentDate)
                })
            }
            ,
            t.prototype.moment = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n;
                return "local" === this.opt("timezone") ? (n = y.default.apply(null, t),
                n.hasTime() && n.local()) : n = "UTC" === this.opt("timezone") ? y.default.utc.apply(null, t) : y.default.parseZone.apply(null, t),
                this.localizeMoment(n),
                n
            }
            ,
            t.prototype.msToMoment = function(t, e) {
                var n = y.default.utc(t);
                return e ? n.stripTime() : n = this.applyTimezone(n),
                this.localizeMoment(n),
                n
            }
            ,
            t.prototype.msToUtcMoment = function(t, e) {
                var n = y.default.utc(t);
                return e && n.stripTime(),
                this.localizeMoment(n),
                n
            }
            ,
            t.prototype.localizeMoment = function(t) {
                t._locale = this.localeData
            }
            ,
            t.prototype.getIsAmbigTimezone = function() {
                return "local" !== this.opt("timezone") && "UTC" !== this.opt("timezone")
            }
            ,
            t.prototype.applyTimezone = function(t) {
                if (!t.hasTime())
                    return t.clone();
                var e, n = this.moment(t.toArray()), i = t.time().asMilliseconds() - n.time().asMilliseconds();
                return i && (e = n.clone().add(i),
                t.time().asMilliseconds() - e.time().asMilliseconds() == 0 && (n = e)),
                n
            }
            ,
            t.prototype.footprintToDateProfile = function(t, e) {
                void 0 === e && (e = !1);
                var n, i = y.default.utc(t.unzonedRange.startMs);
                return e || (n = y.default.utc(t.unzonedRange.endMs)),
                t.isAllDay ? (i.stripTime(),
                n && n.stripTime()) : (i = this.applyTimezone(i),
                n && (n = this.applyTimezone(n))),
                new b.default(i,n,this)
            }
            ,
            t.prototype.getNow = function() {
                var t = this.opt("now");
                return "function" == typeof t && (t = t()),
                this.moment(t).stripZone()
            }
            ,
            t.prototype.humanizeDuration = function(t) {
                return t.locale(this.opt("locale")).humanize()
            }
            ,
            t.prototype.parseUnzonedRange = function(t) {
                var e = null
                  , n = null;
                return t.start && (e = this.moment(t.start).stripZone()),
                t.end && (n = this.moment(t.end).stripZone()),
                e || n ? e && n && n.isBefore(e) ? null : new m.default(e,n) : null
            }
            ,
            t.prototype.initEventManager = function() {
                var t = this
                  , e = new D.default(this)
                  , n = this.opt("eventSources") || []
                  , i = this.opt("events");
                this.eventManager = e,
                i && n.unshift(i),
                e.on("release", function(e) {
                    t.trigger("eventsReset", e)
                }),
                e.freeze(),
                n.forEach(function(n) {
                    var i = S.default.parse(n, t);
                    i && e.addSource(i)
                }),
                e.thaw()
            }
            ,
            t.prototype.requestEvents = function(t, e) {
                return this.eventManager.requestEvents(t, e, this.opt("timezone"), !this.opt("lazyFetching"))
            }
            ,
            t.prototype.getEventEnd = function(t) {
                return t.end ? t.end.clone() : this.getDefaultEventEnd(t.allDay, t.start)
            }
            ,
            t.prototype.getDefaultEventEnd = function(t, e) {
                var n = e.clone();
                return t ? n.stripTime().add(this.defaultAllDayEventDuration) : n.add(this.defaultTimedEventDuration),
                this.getIsAmbigTimezone() && n.stripZone(),
                n
            }
            ,
            t.prototype.rerenderEvents = function() {
                this.view.flash("displayingEvents")
            }
            ,
            t.prototype.refetchEvents = function() {
                this.eventManager.refetchAllSources()
            }
            ,
            t.prototype.renderEvents = function(t, e) {
                this.eventManager.freeze();
                for (var n = 0; n < t.length; n++)
                    this.renderEvent(t[n], e);
                this.eventManager.thaw()
            }
            ,
            t.prototype.renderEvent = function(t, e) {
                void 0 === e && (e = !1);
                var n = this.eventManager
                  , i = C.default.parse(t, t.source || n.stickySource);
                i && n.addEventDef(i, e)
            }
            ,
            t.prototype.removeEvents = function(t) {
                var e, n, r = this.eventManager, o = [], s = {};
                if (null == t)
                    r.removeAllEventDefs();
                else {
                    for (r.getEventInstances().forEach(function(t) {
                        o.push(t.toLegacy())
                    }),
                    o = i(o, t),
                    n = 0; n < o.length; n++)
                        e = this.eventManager.getEventDefByUid(o[n]._id),
                        s[e.id] = !0;
                    r.freeze();
                    for (n in s)
                        r.removeEventDefsById(n);
                    r.thaw()
                }
            }
            ,
            t.prototype.clientEvents = function(t) {
                var e = [];
                return this.eventManager.getEventInstances().forEach(function(t) {
                    e.push(t.toLegacy())
                }),
                i(e, t)
            }
            ,
            t.prototype.updateEvents = function(t) {
                this.eventManager.freeze();
                for (var e = 0; e < t.length; e++)
                    this.updateEvent(t[e]);
                this.eventManager.thaw()
            }
            ,
            t.prototype.updateEvent = function(t) {
                var e, n, i = this.eventManager.getEventDefByUid(t._id);
                i instanceof R.default && (e = i.buildInstance(),
                n = T.default.createFromRawProps(e, t, null),
                this.eventManager.mutateEventsWithId(i.id, n))
            }
            ,
            t.prototype.getEventSources = function() {
                return this.eventManager.otherSources.slice()
            }
            ,
            t.prototype.getEventSourceById = function(t) {
                return this.eventManager.getSourceById(M.default.normalizeId(t))
            }
            ,
            t.prototype.addEventSource = function(t) {
                var e = S.default.parse(t, this);
                e && this.eventManager.addSource(e)
            }
            ,
            t.prototype.removeEventSources = function(t) {
                var e, n, i = this.eventManager;
                if (null == t)
                    this.eventManager.removeAllSources();
                else {
                    for (e = i.multiQuerySources(t),
                    i.freeze(),
                    n = 0; n < e.length; n++)
                        i.removeSource(e[n]);
                    i.thaw()
                }
            }
            ,
            t.prototype.removeEventSource = function(t) {
                var e, n = this.eventManager, i = n.querySources(t);
                for (n.freeze(),
                e = 0; e < i.length; e++)
                    n.removeSource(i[e]);
                n.thaw()
            }
            ,
            t.prototype.refetchEventSources = function(t) {
                var e, n = this.eventManager, i = n.multiQuerySources(t);
                for (n.freeze(),
                e = 0; e < i.length; e++)
                    n.refetchSource(i[e]);
                n.thaw()
            }
            ,
            t.defaults = a.globalDefaults,
            t.englishDefaults = a.englishDefaults,
            t.rtlDefaults = a.rtlDefaults,
            t
        }();
        e.default = H,
        d.default.mixInto(H),
        c.default.mixInto(H)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0)
          , r = n(4)
          , o = n(5)
          , s = function() {
            function t(t) {
                this._view = t
            }
            return t.prototype.opt = function(t) {
                return this._view.opt(t)
            }
            ,
            t.prototype.trimHiddenDays = function(t) {
                return this._view.trimHiddenDays(t)
            }
            ,
            t.prototype.msToUtcMoment = function(t, e) {
                return this._view.calendar.msToUtcMoment(t, e)
            }
            ,
            t.prototype.buildPrev = function(t) {
                var e = t.date.clone().startOf(t.currentRangeUnit).subtract(t.dateIncrement);
                return this.build(e, -1)
            }
            ,
            t.prototype.buildNext = function(t) {
                var e = t.date.clone().startOf(t.currentRangeUnit).add(t.dateIncrement);
                return this.build(e, 1)
            }
            ,
            t.prototype.build = function(t, e, n) {
                void 0 === n && (n = !1);
                var r, o, s, a, l, u, d = !t.hasTime(), c = null, p = null;
                return r = this.buildValidRange(),
                r = this.trimHiddenDays(r),
                n && (t = this.msToUtcMoment(r.constrainDate(t), d)),
                o = this.buildCurrentRangeInfo(t, e),
                s = /^(year|month|week|day)$/.test(o.unit),
                a = this.buildRenderRange(this.trimHiddenDays(o.unzonedRange), o.unit, s),
                a = this.trimHiddenDays(a),
                l = a.clone(),
                this.opt("showNonCurrentDates") || (l = l.intersect(o.unzonedRange)),
                c = i.duration(this.opt("minTime")),
                p = i.duration(this.opt("maxTime")),
                l = this.adjustActiveRange(l, c, p),
                l = l.intersect(r),
                l && (t = this.msToUtcMoment(l.constrainDate(t), d)),
                u = o.unzonedRange.intersectsWith(r),
                {
                    validUnzonedRange: r,
                    currentUnzonedRange: o.unzonedRange,
                    currentRangeUnit: o.unit,
                    isRangeAllDay: s,
                    activeUnzonedRange: l,
                    renderUnzonedRange: a,
                    minTime: c,
                    maxTime: p,
                    isValid: u,
                    date: t,
                    dateIncrement: this.buildDateIncrement(o.duration)
                }
            }
            ,
            t.prototype.buildValidRange = function() {
                return this._view.getUnzonedRangeOption("validRange", this._view.calendar.getNow()) || new o.default
            }
            ,
            t.prototype.buildCurrentRangeInfo = function(t, e) {
                var n, i = this._view.viewSpec, o = null, s = null, a = null;
                return i.duration ? (o = i.duration,
                s = i.durationUnit,
                a = this.buildRangeFromDuration(t, e, o, s)) : (n = this.opt("dayCount")) ? (s = "day",
                a = this.buildRangeFromDayCount(t, e, n)) : (a = this.buildCustomVisibleRange(t)) ? s = r.computeGreatestUnit(a.getStart(), a.getEnd()) : (o = this.getFallbackDuration(),
                s = r.computeGreatestUnit(o),
                a = this.buildRangeFromDuration(t, e, o, s)),
                {
                    duration: o,
                    unit: s,
                    unzonedRange: a
                }
            }
            ,
            t.prototype.getFallbackDuration = function() {
                return i.duration({
                    days: 1
                })
            }
            ,
            t.prototype.adjustActiveRange = function(t, e, n) {
                var i = t.getStart()
                  , r = t.getEnd();
                return this._view.usesMinMaxTime && (e < 0 && i.time(0).add(e),
                n > 864e5 && r.time(n - 864e5)),
                new o.default(i,r)
            }
            ,
            t.prototype.buildRangeFromDuration = function(t, e, n, s) {
                function a() {
                    d = t.clone().startOf(h),
                    c = d.clone().add(n),
                    p = new o.default(d,c)
                }
                var l, u, d, c, p, h = this.opt("dateAlignment");
                return h || (l = this.opt("dateIncrement"),
                l ? (u = i.duration(l),
                h = u < n ? r.computeDurationGreatestUnit(u, l) : s) : h = s),
                n.as("days") <= 1 && this._view.isHiddenDay(d) && (d = this._view.skipHiddenDays(d, e),
                d.startOf("day")),
                a(),
                this.trimHiddenDays(p) || (t = this._view.skipHiddenDays(t, e),
                a()),
                p
            }
            ,
            t.prototype.buildRangeFromDayCount = function(t, e, n) {
                var i, r = this.opt("dateAlignment"), s = 0, a = t.clone();
                r && a.startOf(r),
                a.startOf("day"),
                a = this._view.skipHiddenDays(a, e),
                i = a.clone();
                do {
                    i.add(1, "day"),
                    this._view.isHiddenDay(i) || s++
                } while (s < n);return new o.default(a,i)
            }
            ,
            t.prototype.buildCustomVisibleRange = function(t) {
                var e = this._view.getUnzonedRangeOption("visibleRange", this._view.calendar.applyTimezone(t));
                return !e || null != e.startMs && null != e.endMs ? e : null
            }
            ,
            t.prototype.buildRenderRange = function(t, e, n) {
                return t.clone()
            }
            ,
            t.prototype.buildDateIncrement = function(t) {
                var e, n = this.opt("dateIncrement");
                return n ? i.duration(n) : (e = this.opt("dateAlignment")) ? i.duration(1, e) : t || i.duration({
                    days: 1
                })
            }
            ,
            t
        }();
        e.default = s
    }
    , function(t, e, n) {
        function i(t) {
            var e, n, i, r, l = a.dataAttrPrefix;
            return l && (l += "-"),
            e = t.data(l + "event") || null,
            e && (e = "object" == typeof e ? o.extend({}, e) : {},
            n = e.start,
            null == n && (n = e.time),
            i = e.duration,
            r = e.stick,
            delete e.start,
            delete e.time,
            delete e.duration,
            delete e.stick),
            null == n && (n = t.data(l + "start")),
            null == n && (n = t.data(l + "time")),
            null == i && (i = t.data(l + "duration")),
            null == r && (r = t.data(l + "stick")),
            n = null != n ? s.duration(n) : null,
            i = null != i ? s.duration(i) : null,
            r = Boolean(r),
            {
                eventProps: e,
                startTime: n,
                duration: i,
                stick: r
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2)
          , o = n(3)
          , s = n(0)
          , a = n(16)
          , l = n(4)
          , u = n(10)
          , d = n(7)
          , c = n(22)
          , p = n(13)
          , h = n(18)
          , f = n(6)
          , g = n(15)
          , v = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isDragging = !1,
                e
            }
            return r.__extends(e, t),
            e.prototype.end = function() {
                this.dragListener && this.dragListener.endInteraction()
            }
            ,
            e.prototype.bindToDocument = function() {
                this.listenTo(o(document), {
                    dragstart: this.handleDragStart,
                    sortstart: this.handleDragStart
                })
            }
            ,
            e.prototype.unbindFromDocument = function() {
                this.stopListeningTo(o(document))
            }
            ,
            e.prototype.handleDragStart = function(t, e) {
                var n, i;
                this.opt("droppable") && (n = o((e ? e.item : null) || t.target),
                i = this.opt("dropAccept"),
                (o.isFunction(i) ? i.call(n[0], n) : n.is(i)) && (this.isDragging || this.listenToExternalDrag(n, t, e)))
            }
            ,
            e.prototype.listenToExternalDrag = function(t, e, n) {
                var r, o = this, s = this.component, a = this.view, u = i(t);
                (this.dragListener = new c.default(s,{
                    interactionStart: function() {
                        o.isDragging = !0
                    },
                    hitOver: function(t) {
                        var e, n = !0, i = t.component.getSafeHitFootprint(t);
                        i ? (r = o.computeExternalDrop(i, u),
                        r ? (e = new h.default(r.buildInstances()),
                        n = u.eventProps ? s.isEventInstanceGroupAllowed(e) : s.isExternalInstanceGroupAllowed(e)) : n = !1) : n = !1,
                        n || (r = null,
                        l.disableCursor()),
                        r && s.renderDrag(s.eventRangesToEventFootprints(e.sliceRenderRanges(s.dateProfile.renderUnzonedRange, a.calendar)))
                    },
                    hitOut: function() {
                        r = null
                    },
                    hitDone: function() {
                        l.enableCursor(),
                        s.unrenderDrag()
                    },
                    interactionEnd: function(e) {
                        r && a.reportExternalDrop(r, Boolean(u.eventProps), Boolean(u.stick), t, e, n),
                        o.isDragging = !1,
                        o.dragListener = null
                    }
                })).startDrag(e)
            }
            ,
            e.prototype.computeExternalDrop = function(t, e) {
                var n, i = this.view.calendar, r = u.default.utc(t.unzonedRange.startMs).stripZone();
                return t.isAllDay && (e.startTime ? r.time(e.startTime) : r.stripTime()),
                e.duration && (n = r.clone().add(e.duration)),
                r = i.applyTimezone(r),
                n && (n = i.applyTimezone(n)),
                p.default.parse(o.extend({}, e.eventProps, {
                    start: r,
                    end: n
                }), new f.default(i))
            }
            ,
            e
        }(g.default);
        e.default = v,
        d.default.mixInto(v),
        a.dataAttrPrefix = ""
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(4)
          , s = n(36)
          , a = n(50)
          , l = n(22)
          , u = n(15)
          , d = function(t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.isResizing = !1,
                i.eventPointing = n,
                i
            }
            return i.__extends(e, t),
            e.prototype.end = function() {
                this.dragListener && this.dragListener.endInteraction()
            }
            ,
            e.prototype.bindToEl = function(t) {
                var e = this.component;
                e.bindSegHandlerToEl(t, "mousedown", this.handleMouseDown.bind(this)),
                e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this))
            }
            ,
            e.prototype.handleMouseDown = function(t, e) {
                this.component.canStartResize(t, e) && this.buildDragListener(t, r(e.target).is(".fc-start-resizer")).startInteraction(e, {
                    distance: 5
                })
            }
            ,
            e.prototype.handleTouchStart = function(t, e) {
                this.component.canStartResize(t, e) && this.buildDragListener(t, r(e.target).is(".fc-start-resizer")).startInteraction(e)
            }
            ,
            e.prototype.buildDragListener = function(t, e) {
                var n, i, r = this, s = this.component, a = this.view, u = a.calendar, d = u.eventManager, c = t.el, p = t.footprint.eventDef, h = t.footprint.eventInstance;
                return this.dragListener = new l.default(s,{
                    scroll: this.opt("dragScroll"),
                    subjectEl: c,
                    interactionStart: function() {
                        n = !1
                    },
                    dragStart: function(e) {
                        n = !0,
                        r.eventPointing.handleMouseout(t, e),
                        r.segResizeStart(t, e)
                    },
                    hitOver: function(n, l, c) {
                        var h, f = !0, g = s.getSafeHitFootprint(c), v = s.getSafeHitFootprint(n);
                        g && v ? (i = e ? r.computeEventStartResizeMutation(g, v, t.footprint) : r.computeEventEndResizeMutation(g, v, t.footprint),
                        i ? (h = d.buildMutatedEventInstanceGroup(p.id, i),
                        f = s.isEventInstanceGroupAllowed(h)) : f = !1) : f = !1,
                        f ? i.isEmpty() && (i = null) : (i = null,
                        o.disableCursor()),
                        i && (a.hideEventsWithId(t.footprint.eventDef.id),
                        a.renderEventResize(s.eventRangesToEventFootprints(h.sliceRenderRanges(s.dateProfile.renderUnzonedRange, u)), t))
                    },
                    hitOut: function() {
                        i = null
                    },
                    hitDone: function() {
                        a.unrenderEventResize(t),
                        a.showEventsWithId(t.footprint.eventDef.id),
                        o.enableCursor()
                    },
                    interactionEnd: function(e) {
                        n && r.segResizeStop(t, e),
                        i && a.reportEventResize(h, i, c, e),
                        r.dragListener = null
                    }
                })
            }
            ,
            e.prototype.segResizeStart = function(t, e) {
                this.isResizing = !0,
                this.component.publiclyTrigger("eventResizeStart", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, {}, this.view]
                })
            }
            ,
            e.prototype.segResizeStop = function(t, e) {
                this.isResizing = !1,
                this.component.publiclyTrigger("eventResizeStop", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, {}, this.view]
                })
            }
            ,
            e.prototype.computeEventStartResizeMutation = function(t, e, n) {
                var i, r, o = n.componentFootprint.unzonedRange, l = this.component.diffDates(e.unzonedRange.getStart(), t.unzonedRange.getStart());
                return o.getStart().add(l) < o.getEnd() && (i = new a.default,
                i.setStartDelta(l),
                r = new s.default,
                r.setDateMutation(i),
                r)
            }
            ,
            e.prototype.computeEventEndResizeMutation = function(t, e, n) {
                var i, r, o = n.componentFootprint.unzonedRange, l = this.component.diffDates(e.unzonedRange.getEnd(), t.unzonedRange.getEnd());
                return o.getEnd().add(l) > o.getStart() && (i = new a.default,
                i.setEndDelta(l),
                r = new s.default,
                r.setDateMutation(i),
                r)
            }
            ,
            e
        }(u.default);
        e.default = d
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(4)
          , o = n(36)
          , s = n(50)
          , a = n(54)
          , l = n(22)
          , u = n(244)
          , d = n(15)
          , c = function(t) {
            function e(e, n) {
                var i = t.call(this, e) || this;
                return i.isDragging = !1,
                i.eventPointing = n,
                i
            }
            return i.__extends(e, t),
            e.prototype.end = function() {
                this.dragListener && this.dragListener.endInteraction()
            }
            ,
            e.prototype.getSelectionDelay = function() {
                var t = this.opt("eventLongPressDelay");
                return null == t && (t = this.opt("longPressDelay")),
                t
            }
            ,
            e.prototype.bindToEl = function(t) {
                var e = this.component;
                e.bindSegHandlerToEl(t, "mousedown", this.handleMousedown.bind(this)),
                e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this))
            }
            ,
            e.prototype.handleMousedown = function(t, e) {
                !this.component.shouldIgnoreMouse() && this.component.canStartDrag(t, e) && this.buildDragListener(t).startInteraction(e, {
                    distance: 5
                })
            }
            ,
            e.prototype.handleTouchStart = function(t, e) {
                var n = this.component
                  , i = {
                    delay: this.view.isEventDefSelected(t.footprint.eventDef) ? 0 : this.getSelectionDelay()
                };
                n.canStartDrag(t, e) ? this.buildDragListener(t).startInteraction(e, i) : n.canStartSelection(t, e) && this.buildSelectListener(t).startInteraction(e, i)
            }
            ,
            e.prototype.buildSelectListener = function(t) {
                var e = this
                  , n = this.view
                  , i = t.footprint.eventDef
                  , r = t.footprint.eventInstance;
                if (this.dragListener)
                    return this.dragListener;
                var o = this.dragListener = new a.default({
                    dragStart: function(t) {
                        o.isTouch && !n.isEventDefSelected(i) && r && n.selectEventInstance(r)
                    },
                    interactionEnd: function(t) {
                        e.dragListener = null
                    }
                });
                return o
            }
            ,
            e.prototype.buildDragListener = function(t) {
                var e, n, i, o = this, s = this.component, a = this.view, d = a.calendar, c = d.eventManager, p = t.el, h = t.footprint.eventDef, f = t.footprint.eventInstance;
                if (this.dragListener)
                    return this.dragListener;
                var g = this.dragListener = new l.default(a,{
                    scroll: this.opt("dragScroll"),
                    subjectEl: p,
                    subjectCenter: !0,
                    interactionStart: function(i) {
                        t.component = s,
                        e = !1,
                        n = new u.default(t.el,{
                            additionalClass: "fc-dragging",
                            parentEl: a.el,
                            opacity: g.isTouch ? null : o.opt("dragOpacity"),
                            revertDuration: o.opt("dragRevertDuration"),
                            zIndex: 2
                        }),
                        n.hide(),
                        n.start(i)
                    },
                    dragStart: function(n) {
                        g.isTouch && !a.isEventDefSelected(h) && f && a.selectEventInstance(f),
                        e = !0,
                        o.eventPointing.handleMouseout(t, n),
                        o.segDragStart(t, n),
                        a.hideEventsWithId(t.footprint.eventDef.id)
                    },
                    hitOver: function(e, l, u) {
                        var p, f, v, y = !0;
                        t.hit && (u = t.hit),
                        p = u.component.getSafeHitFootprint(u),
                        f = e.component.getSafeHitFootprint(e),
                        p && f ? (i = o.computeEventDropMutation(p, f, h),
                        i ? (v = c.buildMutatedEventInstanceGroup(h.id, i),
                        y = s.isEventInstanceGroupAllowed(v)) : y = !1) : y = !1,
                        y || (i = null,
                        r.disableCursor()),
                        i && a.renderDrag(s.eventRangesToEventFootprints(v.sliceRenderRanges(s.dateProfile.renderUnzonedRange, d)), t, g.isTouch) ? n.hide() : n.show(),
                        l && (i = null)
                    },
                    hitOut: function() {
                        a.unrenderDrag(t),
                        n.show(),
                        i = null
                    },
                    hitDone: function() {
                        r.enableCursor()
                    },
                    interactionEnd: function(r) {
                        delete t.component,
                        n.stop(!i, function() {
                            e && (a.unrenderDrag(t),
                            o.segDragStop(t, r)),
                            a.showEventsWithId(t.footprint.eventDef.id),
                            i && a.reportEventDrop(f, i, p, r)
                        }),
                        o.dragListener = null
                    }
                });
                return g
            }
            ,
            e.prototype.segDragStart = function(t, e) {
                this.isDragging = !0,
                this.component.publiclyTrigger("eventDragStart", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, {}, this.view]
                })
            }
            ,
            e.prototype.segDragStop = function(t, e) {
                this.isDragging = !1,
                this.component.publiclyTrigger("eventDragStop", {
                    context: t.el[0],
                    args: [t.footprint.getEventLegacy(), e, {}, this.view]
                })
            }
            ,
            e.prototype.computeEventDropMutation = function(t, e, n) {
                var i = new o.default;
                return i.setDateMutation(this.computeEventDateMutation(t, e)),
                i
            }
            ,
            e.prototype.computeEventDateMutation = function(t, e) {
                var n, i, r = t.unzonedRange.getStart(), o = e.unzonedRange.getStart(), a = !1, l = !1, u = !1;
                return t.isAllDay !== e.isAllDay && (a = !0,
                e.isAllDay ? (u = !0,
                r.stripTime()) : l = !0),
                n = this.component.diffDates(o, r),
                i = new s.default,
                i.clearEnd = a,
                i.forceTimed = l,
                i.forceAllDay = u,
                i.setDateDelta(n),
                i
            }
            ,
            e
        }(d.default);
        e.default = c
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(4)
          , o = n(22)
          , s = n(12)
          , a = n(5)
          , l = n(15)
          , u = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.dragListener = n.buildDragListener(),
                n
            }
            return i.__extends(e, t),
            e.prototype.end = function() {
                this.dragListener.endInteraction()
            }
            ,
            e.prototype.getDelay = function() {
                var t = this.opt("selectLongPressDelay");
                return null == t && (t = this.opt("longPressDelay")),
                t
            }
            ,
            e.prototype.bindToEl = function(t) {
                var e = this
                  , n = this.component
                  , i = this.dragListener;
                n.bindDateHandlerToEl(t, "mousedown", function(t) {
                    e.opt("selectable") && !n.shouldIgnoreMouse() && i.startInteraction(t, {
                        distance: e.opt("selectMinDistance")
                    })
                }),
                n.bindDateHandlerToEl(t, "touchstart", function(t) {
                    e.opt("selectable") && !n.shouldIgnoreTouch() && i.startInteraction(t, {
                        delay: e.getDelay()
                    })
                }),
                r.preventSelection(t)
            }
            ,
            e.prototype.buildDragListener = function() {
                var t, e = this, n = this.component;
                return new o.default(n,{
                    scroll: this.opt("dragScroll"),
                    interactionStart: function() {
                        t = null
                    },
                    dragStart: function(t) {
                        e.view.unselect(t)
                    },
                    hitOver: function(i, o, s) {
                        var a, l;
                        s && (a = n.getSafeHitFootprint(s),
                        l = n.getSafeHitFootprint(i),
                        t = a && l ? e.computeSelection(a, l) : null,
                        t ? n.renderSelectionFootprint(t) : !1 === t && r.disableCursor())
                    },
                    hitOut: function() {
                        t = null,
                        n.unrenderSelection()
                    },
                    hitDone: function() {
                        r.enableCursor()
                    },
                    interactionEnd: function(n, i) {
                        !i && t && e.view.reportSelection(t, n)
                    }
                })
            }
            ,
            e.prototype.computeSelection = function(t, e) {
                var n = this.computeSelectionFootprint(t, e);
                return !(n && !this.isSelectionFootprintAllowed(n)) && n
            }
            ,
            e.prototype.computeSelectionFootprint = function(t, e) {
                var n = [t.unzonedRange.startMs, t.unzonedRange.endMs, e.unzonedRange.startMs, e.unzonedRange.endMs];
                return n.sort(r.compareNumbers),
                new s.default(new a.default(n[0],n[3]),t.isAllDay)
            }
            ,
            e.prototype.isSelectionFootprintAllowed = function(t) {
                return this.component.dateProfile.validUnzonedRange.containsRange(t.unzonedRange) && this.view.calendar.constraints.isSelectionFootprintAllowed(t)
            }
            ,
            e
        }(l.default);
        e.default = u
    }
    , function(t, e, n) {
        function i(t) {
            var e, n = [], i = [];
            for (e = 0; e < t.length; e++)
                t[e].componentFootprint.isAllDay ? n.push(t[e]) : i.push(t[e]);
            return {
                allDay: n,
                timed: i
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o, s = n(2), a = n(0), l = n(3), u = n(4), d = n(39), c = n(41), p = n(227), h = n(61), f = function(t) {
            function e(e, n) {
                var i = t.call(this, e, n) || this;
                return i.usesMinMaxTime = !0,
                i.timeGrid = i.instantiateTimeGrid(),
                i.addChild(i.timeGrid),
                i.opt("allDaySlot") && (i.dayGrid = i.instantiateDayGrid(),
                i.addChild(i.dayGrid)),
                i.scroller = new d.default({
                    overflowX: "hidden",
                    overflowY: "auto"
                }),
                i
            }
            return s.__extends(e, t),
            e.prototype.instantiateTimeGrid = function() {
                var t = new this.timeGridClass(this);
                return u.copyOwnProps(r, t),
                t
            }
            ,
            e.prototype.instantiateDayGrid = function() {
                var t = new this.dayGridClass(this);
                return u.copyOwnProps(o, t),
                t
            }
            ,
            e.prototype.renderSkeleton = function() {
                var t, e;
                this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()),
                this.scroller.render(),
                t = this.scroller.el.addClass("fc-time-grid-container"),
                e = l('<div class="fc-time-grid" />').appendTo(t),
                this.el.find(".fc-body > tr > td").append(t),
                this.timeGrid.headContainerEl = this.el.find(".fc-head-container"),
                this.timeGrid.setElement(e),
                this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")),
                this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight())
            }
            ,
            e.prototype.unrenderSkeleton = function() {
                this.timeGrid.removeElement(),
                this.dayGrid && this.dayGrid.removeElement(),
                this.scroller.destroy()
            }
            ,
            e.prototype.renderSkeletonHtml = function() {
                var t = this.calendar.theme;
                return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + t.getClass("widgetHeader") + '"/>' : "") + "</td></tr></tbody></table>"
            }
            ,
            e.prototype.axisStyleAttr = function() {
                return null != this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
            }
            ,
            e.prototype.getNowIndicatorUnit = function() {
                return this.timeGrid.getNowIndicatorUnit()
            }
            ,
            e.prototype.updateSize = function(e, n, i) {
                var r, o, s;
                if (t.prototype.updateSize.call(this, e, n, i),
                this.axisWidth = u.matchCellWidths(this.el.find(".fc-axis")),
                !this.timeGrid.colEls)
                    return void (n || (o = this.computeScrollerHeight(e),
                    this.scroller.setHeight(o)));
                var a = this.el.find(".fc-row:not(.fc-scroller *)");
                this.timeGrid.bottomRuleEl.hide(),
                this.scroller.clear(),
                u.uncompensateScroll(a),
                this.dayGrid && (this.dayGrid.removeSegPopover(),
                r = this.opt("eventLimit"),
                r && "number" != typeof r && (r = 5),
                r && this.dayGrid.limitRows(r)),
                n || (o = this.computeScrollerHeight(e),
                this.scroller.setHeight(o),
                s = this.scroller.getScrollbarWidths(),
                (s.left || s.right) && (u.compensateScroll(a, s),
                o = this.computeScrollerHeight(e),
                this.scroller.setHeight(o)),
                this.scroller.lockOverflow(s),
                this.timeGrid.getTotalSlatHeight() < o && this.timeGrid.bottomRuleEl.show())
            }
            ,
            e.prototype.computeScrollerHeight = function(t) {
                return t - u.subtractInnerElHeight(this.el, this.scroller.el)
            }
            ,
            e.prototype.computeInitialDateScroll = function() {
                var t = a.duration(this.opt("scrollTime"))
                  , e = this.timeGrid.computeTimeTop(t);
                return e = Math.ceil(e),
                e && e++,
                {
                    top: e
                }
            }
            ,
            e.prototype.queryDateScroll = function() {
                return {
                    top: this.scroller.getScrollTop()
                }
            }
            ,
            e.prototype.applyDateScroll = function(t) {
                void 0 !== t.top && this.scroller.setScrollTop(t.top)
            }
            ,
            e.prototype.getHitFootprint = function(t) {
                return t.component.getHitFootprint(t)
            }
            ,
            e.prototype.getHitEl = function(t) {
                return t.component.getHitEl(t)
            }
            ,
            e.prototype.executeEventRender = function(t) {
                var e, n, i = {}, r = {};
                for (e in t)
                    n = t[e],
                    n.getEventDef().isAllDay() ? i[e] = n : r[e] = n;
                this.timeGrid.executeEventRender(r),
                this.dayGrid && this.dayGrid.executeEventRender(i)
            }
            ,
            e.prototype.renderDrag = function(t, e, n) {
                var r = i(t)
                  , o = !1;
                return o = this.timeGrid.renderDrag(r.timed, e, n),
                this.dayGrid && (o = this.dayGrid.renderDrag(r.allDay, e, n) || o),
                o
            }
            ,
            e.prototype.renderEventResize = function(t, e, n) {
                var r = i(t);
                this.timeGrid.renderEventResize(r.timed, e, n),
                this.dayGrid && this.dayGrid.renderEventResize(r.allDay, e, n)
            }
            ,
            e.prototype.renderSelectionFootprint = function(t) {
                t.isAllDay ? this.dayGrid && this.dayGrid.renderSelectionFootprint(t) : this.timeGrid.renderSelectionFootprint(t)
            }
            ,
            e
        }(c.default);
        e.default = f,
        f.prototype.timeGridClass = p.default,
        f.prototype.dayGridClass = h.default,
        r = {
            renderHeadIntroHtml: function() {
                var t, e = this.view, n = e.calendar, i = n.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, !0);
                return this.opt("weekNumbers") ? (t = i.format(this.opt("smallWeekFormat")),
                '<th class="fc-axis fc-week-number ' + n.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + ">" + e.buildGotoAnchorHtml({
                    date: i,
                    type: "week",
                    forceOff: this.colCnt > 1
                }, u.htmlEscape(t)) + "</th>") : '<th class="fc-axis ' + n.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + "></th>"
            },
            renderBgIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "></td>"
            },
            renderIntroHtml: function() {
                return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
            }
        },
        o = {
            renderBgIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "><span>" + t.getAllDayHtml() + "</span></td>"
            },
            renderIntroHtml: function() {
                return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
            }
        }
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(0)
          , s = n(4)
          , a = n(40)
          , l = n(56)
          , u = n(60)
          , d = n(55)
          , c = n(53)
          , p = n(5)
          , h = n(12)
          , f = n(246)
          , g = n(247)
          , v = n(248)
          , y = [{
            hours: 1
        }, {
            minutes: 30
        }, {
            minutes: 15
        }, {
            seconds: 30
        }, {
            seconds: 15
        }]
          , m = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.processOptions(),
                n
            }
            return i.__extends(e, t),
            e.prototype.componentFootprintToSegs = function(t) {
                var e, n = this.sliceRangeByTimes(t.unzonedRange);
                for (e = 0; e < n.length; e++)
                    this.isRTL ? n[e].col = this.daysPerRow - 1 - n[e].dayIndex : n[e].col = n[e].dayIndex;
                return n
            }
            ,
            e.prototype.sliceRangeByTimes = function(t) {
                var e, n, i = [];
                for (n = 0; n < this.daysPerRow; n++)
                    (e = t.intersect(this.dayRanges[n])) && i.push({
                        startMs: e.startMs,
                        endMs: e.endMs,
                        isStart: e.isStart,
                        isEnd: e.isEnd,
                        dayIndex: n
                    });
                return i
            }
            ,
            e.prototype.processOptions = function() {
                var t, e = this.opt("slotDuration"), n = this.opt("snapDuration");
                e = o.duration(e),
                n = n ? o.duration(n) : e,
                this.slotDuration = e,
                this.snapDuration = n,
                this.snapsPerSlot = e / n,
                t = this.opt("slotLabelFormat"),
                r.isArray(t) && (t = t[t.length - 1]),
                this.labelFormat = t || this.opt("smallTimeFormat"),
                t = this.opt("slotLabelInterval"),
                this.labelInterval = t ? o.duration(t) : this.computeLabelInterval(e)
            }
            ,
            e.prototype.computeLabelInterval = function(t) {
                var e, n, i;
                for (e = y.length - 1; e >= 0; e--)
                    if (n = o.duration(y[e]),
                    i = s.divideDurationByDuration(n, t),
                    s.isInt(i) && i > 1)
                        return n;
                return o.duration(t)
            }
            ,
            e.prototype.renderDates = function(t) {
                this.dateProfile = t,
                this.updateDayTable(),
                this.renderSlats(),
                this.renderColumns()
            }
            ,
            e.prototype.unrenderDates = function() {
                this.unrenderColumns()
            }
            ,
            e.prototype.renderSkeleton = function() {
                var t = this.view.calendar.theme;
                this.el.html('<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' + t.getClass("widgetHeader") + '" style="display:none" />'),
                this.bottomRuleEl = this.el.find("hr")
            }
            ,
            e.prototype.renderSlats = function() {
                var t = this.view.calendar.theme;
                this.slatContainerEl = this.el.find("> .fc-slats").html('<table class="' + t.getClass("tableGrid") + '">' + this.renderSlatRowHtml() + "</table>"),
                this.slatEls = this.slatContainerEl.find("tr"),
                this.slatCoordCache = new c.default({
                    els: this.slatEls,
                    isVertical: !0
                })
            }
            ,
            e.prototype.renderSlatRowHtml = function() {
                for (var t, e, n, i = this.view, r = i.calendar, a = r.theme, l = this.isRTL, u = this.dateProfile, d = "", c = o.duration(+u.minTime), p = o.duration(0); c < u.maxTime; )
                    t = r.msToUtcMoment(u.renderUnzonedRange.startMs).time(c),
                    e = s.isInt(s.divideDurationByDuration(p, this.labelInterval)),
                    n = '<td class="fc-axis fc-time ' + a.getClass("widgetContent") + '" ' + i.axisStyleAttr() + ">" + (e ? "<span>" + s.htmlEscape(t.format(this.labelFormat)) + "</span>" : "") + "</td>",
                    d += '<tr data-time="' + t.format("HH:mm:ss") + '"' + (e ? "" : ' class="fc-minor"') + ">" + (l ? "" : n) + '<td class="' + a.getClass("widgetContent") + '"/>' + (l ? n : "") + "</tr>",
                    c.add(this.slotDuration),
                    p.add(this.slotDuration);
                return d
            }
            ,
            e.prototype.renderColumns = function() {
                var t = this.dateProfile
                  , e = this.view.calendar.theme;
                this.dayRanges = this.dayDates.map(function(e) {
                    return new p.default(e.clone().add(t.minTime),e.clone().add(t.maxTime))
                }),
                this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()),
                this.el.find("> .fc-bg").html('<table class="' + e.getClass("tableGrid") + '">' + this.renderBgTrHtml(0) + "</table>"),
                this.colEls = this.el.find(".fc-day, .fc-disabled-day"),
                this.colCoordCache = new c.default({
                    els: this.colEls,
                    isHorizontal: !0
                }),
                this.renderContentSkeleton()
            }
            ,
            e.prototype.unrenderColumns = function() {
                this.unrenderContentSkeleton()
            }
            ,
            e.prototype.renderContentSkeleton = function() {
                var t, e, n = "";
                for (t = 0; t < this.colCnt; t++)
                    n += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
                e = this.contentSkeletonEl = r('<div class="fc-content-skeleton"><table><tr>' + n + "</tr></table></div>"),
                this.colContainerEls = e.find(".fc-content-col"),
                this.helperContainerEls = e.find(".fc-helper-container"),
                this.fgContainerEls = e.find(".fc-event-container:not(.fc-helper-container)"),
                this.bgContainerEls = e.find(".fc-bgevent-container"),
                this.highlightContainerEls = e.find(".fc-highlight-container"),
                this.businessContainerEls = e.find(".fc-business-container"),
                this.bookendCells(e.find("tr")),
                this.el.append(e)
            }
            ,
            e.prototype.unrenderContentSkeleton = function() {
                this.contentSkeletonEl && (this.contentSkeletonEl.remove(),
                this.contentSkeletonEl = null,
                this.colContainerEls = null,
                this.helperContainerEls = null,
                this.fgContainerEls = null,
                this.bgContainerEls = null,
                this.highlightContainerEls = null,
                this.businessContainerEls = null)
            }
            ,
            e.prototype.groupSegsByCol = function(t) {
                var e, n = [];
                for (e = 0; e < this.colCnt; e++)
                    n.push([]);
                for (e = 0; e < t.length; e++)
                    n[t[e].col].push(t[e]);
                return n
            }
            ,
            e.prototype.attachSegsByCol = function(t, e) {
                var n, i, r;
                for (n = 0; n < this.colCnt; n++)
                    for (i = t[n],
                    r = 0; r < i.length; r++)
                        e.eq(n).append(i[r].el)
            }
            ,
            e.prototype.getNowIndicatorUnit = function() {
                return "minute"
            }
            ,
            e.prototype.renderNowIndicator = function(t) {
                if (this.colContainerEls) {
                    var e, n = this.componentFootprintToSegs(new h.default(new p.default(t,t.valueOf() + 1),!1)), i = this.computeDateTop(t, t), o = [];
                    for (e = 0; e < n.length; e++)
                        o.push(r('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", i).appendTo(this.colContainerEls.eq(n[e].col))[0]);
                    n.length > 0 && o.push(r('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", i).appendTo(this.el.find(".fc-content-skeleton"))[0]),
                    this.nowIndicatorEls = r(o)
                }
            }
            ,
            e.prototype.unrenderNowIndicator = function() {
                this.nowIndicatorEls && (this.nowIndicatorEls.remove(),
                this.nowIndicatorEls = null)
            }
            ,
            e.prototype.updateSize = function(e, n, i) {
                t.prototype.updateSize.call(this, e, n, i),
                this.slatCoordCache.build(),
                i && this.updateSegVerticals([].concat(this.eventRenderer.getSegs(), this.businessSegs || []))
            }
            ,
            e.prototype.getTotalSlatHeight = function() {
                return this.slatContainerEl.outerHeight()
            }
            ,
            e.prototype.computeDateTop = function(t, e) {
                return this.computeTimeTop(o.duration(t - e.clone().stripTime()))
            }
            ,
            e.prototype.computeTimeTop = function(t) {
                var e, n, i = this.slatEls.length, r = this.dateProfile, o = (t - r.minTime) / this.slotDuration;
                return o = Math.max(0, o),
                o = Math.min(i, o),
                e = Math.floor(o),
                e = Math.min(e, i - 1),
                n = o - e,
                this.slatCoordCache.getTopPosition(e) + this.slatCoordCache.getHeight(e) * n
            }
            ,
            e.prototype.updateSegVerticals = function(t) {
                this.computeSegVerticals(t),
                this.assignSegVerticals(t)
            }
            ,
            e.prototype.computeSegVerticals = function(t) {
                var e, n, i, r = this.opt("agendaEventMinHeight");
                for (e = 0; e < t.length; e++)
                    n = t[e],
                    i = this.dayDates[n.dayIndex],
                    n.top = this.computeDateTop(n.startMs, i),
                    n.bottom = Math.max(n.top + r, this.computeDateTop(n.endMs, i))
            }
            ,
            e.prototype.assignSegVerticals = function(t) {
                var e, n;
                for (e = 0; e < t.length; e++)
                    n = t[e],
                    n.el.css(this.generateSegVerticalCss(n))
            }
            ,
            e.prototype.generateSegVerticalCss = function(t) {
                return {
                    top: t.top,
                    bottom: -t.bottom
                }
            }
            ,
            e.prototype.prepareHits = function() {
                this.colCoordCache.build(),
                this.slatCoordCache.build()
            }
            ,
            e.prototype.releaseHits = function() {
                this.colCoordCache.clear()
            }
            ,
            e.prototype.queryHit = function(t, e) {
                var n = this.snapsPerSlot
                  , i = this.colCoordCache
                  , r = this.slatCoordCache;
                if (i.isLeftInBounds(t) && r.isTopInBounds(e)) {
                    var o = i.getHorizontalIndex(t)
                      , s = r.getVerticalIndex(e);
                    if (null != o && null != s) {
                        var a = r.getTopOffset(s)
                          , l = r.getHeight(s)
                          , u = (e - a) / l
                          , d = Math.floor(u * n)
                          , c = s * n + d
                          , p = a + d / n * l
                          , h = a + (d + 1) / n * l;
                        return {
                            col: o,
                            snap: c,
                            component: this,
                            left: i.getLeftOffset(o),
                            right: i.getRightOffset(o),
                            top: p,
                            bottom: h
                        }
                    }
                }
            }
            ,
            e.prototype.getHitFootprint = function(t) {
                var e, n = this.getCellDate(0, t.col), i = this.computeSnapTime(t.snap);
                return n.time(i),
                e = n.clone().add(this.snapDuration),
                new h.default(new p.default(n,e),!1)
            }
            ,
            e.prototype.computeSnapTime = function(t) {
                return o.duration(this.dateProfile.minTime + this.snapDuration * t)
            }
            ,
            e.prototype.getHitEl = function(t) {
                return this.colEls.eq(t.col)
            }
            ,
            e.prototype.renderDrag = function(t, e, n) {
                var i;
                if (e) {
                    if (t.length)
                        return this.helperRenderer.renderEventDraggingFootprints(t, e, n),
                        !0
                } else
                    for (i = 0; i < t.length; i++)
                        this.renderHighlight(t[i].componentFootprint)
            }
            ,
            e.prototype.unrenderDrag = function() {
                this.unrenderHighlight(),
                this.helperRenderer.unrender()
            }
            ,
            e.prototype.renderEventResize = function(t, e, n) {
                this.helperRenderer.renderEventResizingFootprints(t, e, n)
            }
            ,
            e.prototype.unrenderEventResize = function() {
                this.helperRenderer.unrender()
            }
            ,
            e.prototype.renderSelectionFootprint = function(t) {
                this.opt("selectHelper") ? this.helperRenderer.renderComponentFootprint(t) : this.renderHighlight(t)
            }
            ,
            e.prototype.unrenderSelection = function() {
                this.helperRenderer.unrender(),
                this.unrenderHighlight()
            }
            ,
            e
        }(a.default);
        e.default = m,
        m.prototype.eventRendererClass = f.default,
        m.prototype.businessHourRendererClass = l.default,
        m.prototype.helperRendererClass = g.default,
        m.prototype.fillRendererClass = v.default,
        u.default.mixInto(m),
        d.default.mixInto(m)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(5)
          , o = n(221)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.buildRenderRange = function(e, n, i) {
                var o = t.prototype.buildRenderRange.call(this, e, n, i)
                  , s = this.msToUtcMoment(o.startMs, i)
                  , a = this.msToUtcMoment(o.endMs, i);
                return /^(year|month)$/.test(n) && (s.startOf("week"),
                a.weekday() && a.add(1, "week").startOf("week")),
                new r.default(s,a)
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(0)
          , o = n(4)
          , s = n(62)
          , a = n(253)
          , l = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.setGridHeight = function(t, e) {
                e && (t *= this.dayGrid.rowCnt / 6),
                o.distributeHeight(this.dayGrid.rowEls, t, !e)
            }
            ,
            e.prototype.isDateInOtherMonth = function(t, e) {
                return t.month() !== r.utc(e.currentUnzonedRange.startMs).month()
            }
            ,
            e
        }(s.default);
        e.default = l,
        l.prototype.dateProfileGeneratorClass = a.default
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(4)
          , s = n(5)
          , a = n(41)
          , l = n(39)
          , u = n(254)
          , d = n(255)
          , c = function(t) {
            function e(e, n) {
                var i = t.call(this, e, n) || this;
                return i.segSelector = ".fc-list-item",
                i.scroller = new l.default({
                    overflowX: "hidden",
                    overflowY: "auto"
                }),
                i
            }
            return i.__extends(e, t),
            e.prototype.renderSkeleton = function() {
                this.el.addClass("fc-list-view " + this.calendar.theme.getClass("listView")),
                this.scroller.render(),
                this.scroller.el.appendTo(this.el),
                this.contentEl = this.scroller.scrollEl
            }
            ,
            e.prototype.unrenderSkeleton = function() {
                this.scroller.destroy()
            }
            ,
            e.prototype.updateSize = function(t, e, n) {
                this.scroller.setHeight(this.computeScrollerHeight(t))
            }
            ,
            e.prototype.computeScrollerHeight = function(t) {
                return t - o.subtractInnerElHeight(this.el, this.scroller.el)
            }
            ,
            e.prototype.renderDates = function(t) {
                for (var e = this.calendar, n = e.msToUtcMoment(t.renderUnzonedRange.startMs, !0), i = e.msToUtcMoment(t.renderUnzonedRange.endMs, !0), r = [], o = []; n < i; )
                    r.push(n.clone()),
                    o.push(new s.default(n,n.clone().add(1, "day"))),
                    n.add(1, "day");
                this.dayDates = r,
                this.dayRanges = o
            }
            ,
            e.prototype.componentFootprintToSegs = function(t) {
                var e, n, i, r = this.dayRanges, o = [];
                for (e = 0; e < r.length; e++)
                    if ((n = t.unzonedRange.intersect(r[e])) && (i = {
                        startMs: n.startMs,
                        endMs: n.endMs,
                        isStart: n.isStart,
                        isEnd: n.isEnd,
                        dayIndex: e
                    },
                    o.push(i),
                    !i.isEnd && !t.isAllDay && e + 1 < r.length && t.unzonedRange.endMs < r[e + 1].startMs + this.nextDayThreshold)) {
                        i.endMs = t.unzonedRange.endMs,
                        i.isEnd = !0;
                        break
                    }
                return o
            }
            ,
            e.prototype.renderEmptyMessage = function() {
                this.contentEl.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + o.htmlEscape(this.opt("noEventsMessage")) + "</div></div></div>")
            }
            ,
            e.prototype.renderSegList = function(t) {
                var e, n, i, o = this.groupSegsByDay(t), s = r('<table class="fc-list-table ' + this.calendar.theme.getClass("tableList") + '"><tbody/></table>'), a = s.find("tbody");
                for (e = 0; e < o.length; e++)
                    if (n = o[e])
                        for (a.append(this.dayHeaderHtml(this.dayDates[e])),
                        this.eventRenderer.sortEventSegs(n),
                        i = 0; i < n.length; i++)
                            a.append(n[i].el);
                this.contentEl.empty().append(s)
            }
            ,
            e.prototype.groupSegsByDay = function(t) {
                var e, n, i = [];
                for (e = 0; e < t.length; e++)
                    n = t[e],
                    (i[n.dayIndex] || (i[n.dayIndex] = [])).push(n);
                return i
            }
            ,
            e.prototype.dayHeaderHtml = function(t) {
                var e = this.opt("listDayFormat")
                  , n = this.opt("listDayAltFormat");
                return '<tr class="fc-list-heading" data-date="' + t.format("YYYY-MM-DD") + '"><td class="' + this.calendar.theme.getClass("widgetHeader") + '" colspan="3">' + (e ? this.buildGotoAnchorHtml(t, {
                    class: "fc-list-heading-main"
                }, o.htmlEscape(t.format(e))) : "") + (n ? this.buildGotoAnchorHtml(t, {
                    class: "fc-list-heading-alt"
                }, o.htmlEscape(t.format(n))) : "") + "</td></tr>"
            }
            ,
            e
        }(a.default);
        e.default = c,
        c.prototype.eventRendererClass = u.default,
        c.prototype.eventPointingClass = d.default
    }
    , , , , , , function(t, e, n) {
        var i = n(3)
          , r = n(16)
          , o = n(4)
          , s = n(220);
        n(10),
        n(47),
        n(256),
        n(257),
        n(259),
        n(260),
        n(261),
        n(262),
        i.fullCalendar = r,
        i.fn.fullCalendar = function(t) {
            var e = Array.prototype.slice.call(arguments, 1)
              , n = this;
            return this.each(function(r, a) {
                var l, u = i(a), d = u.data("fullCalendar");
                "string" == typeof t ? "getCalendar" === t ? r || (n = d) : "destroy" === t ? d && (d.destroy(),
                u.removeData("fullCalendar")) : d ? i.isFunction(d[t]) ? (l = d[t].apply(d, e),
                r || (n = l),
                "destroy" === t && u.removeData("fullCalendar")) : o.warn("'" + t + "' is an unknown FullCalendar method.") : o.warn("Attempting to call a FullCalendar method on an element with no calendar.") : d || (d = new s.default(u,t),
                u.data("fullCalendar", d),
                d.render())
            }),
            n
        }
        ,
        t.exports = r
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(48)
          , o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.setElement = function(t) {
                this.el = t,
                this.bindGlobalHandlers(),
                this.renderSkeleton(),
                this.set("isInDom", !0)
            }
            ,
            e.prototype.removeElement = function() {
                this.unset("isInDom"),
                this.unrenderSkeleton(),
                this.unbindGlobalHandlers(),
                this.el.remove()
            }
            ,
            e.prototype.bindGlobalHandlers = function() {}
            ,
            e.prototype.unbindGlobalHandlers = function() {}
            ,
            e.prototype.renderSkeleton = function() {}
            ,
            e.prototype.unrenderSkeleton = function() {}
            ,
            e
        }(r.default);
        e.default = o
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.items = t || []
            }
            return t.prototype.proxyCall = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                var i = [];
                return this.items.forEach(function(n) {
                    i.push(n[t].apply(n, e))
                }),
                i
            }
            ,
            t
        }();
        e.default = n
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(4)
          , o = function() {
            function t(t, e) {
                this.el = null,
                this.viewsWithButtons = [],
                this.calendar = t,
                this.toolbarOptions = e
            }
            return t.prototype.setToolbarOptions = function(t) {
                this.toolbarOptions = t
            }
            ,
            t.prototype.render = function() {
                var t = this.toolbarOptions.layout
                  , e = this.el;
                t ? (e ? e.empty() : e = this.el = i("<div class='fc-toolbar " + this.toolbarOptions.extraClasses + "'/>"),
                e.append(this.renderSection("left")).append(this.renderSection("right")).append(this.renderSection("center")).append('<div class="fc-clear"/>')) : this.removeElement()
            }
            ,
            t.prototype.removeElement = function() {
                this.el && (this.el.remove(),
                this.el = null)
            }
            ,
            t.prototype.renderSection = function(t) {
                var e = this
                  , n = this.calendar
                  , o = n.theme
                  , s = n.optionsManager
                  , a = n.viewSpecManager
                  , l = i('<div class="fc-' + t + '"/>')
                  , u = this.toolbarOptions.layout[t]
                  , d = s.get("customButtons") || {}
                  , c = s.overrides.buttonText || {}
                  , p = s.get("buttonText") || {};
                return u && i.each(u.split(" "), function(t, s) {
                    var u, h = i(), f = !0;
                    i.each(s.split(","), function(t, s) {
                        var l, u, g, v, y, m, w, b, D;
                        "title" === s ? (h = h.add(i("<h2>&nbsp;</h2>")),
                        f = !1) : ((l = d[s]) ? (g = function(t) {
                            l.click && l.click.call(b[0], t)
                        }
                        ,
                        (v = o.getCustomButtonIconClass(l)) || (v = o.getIconClass(s)) || (y = l.text)) : (u = a.getViewSpec(s)) ? (e.viewsWithButtons.push(s),
                        g = function() {
                            n.changeView(s)
                        }
                        ,
                        (y = u.buttonTextOverride) || (v = o.getIconClass(s)) || (y = u.buttonTextDefault)) : n[s] && (g = function() {
                            n[s]()
                        }
                        ,
                        (y = c[s]) || (v = o.getIconClass(s)) || (y = p[s])),
                        g && (w = ["fc-" + s + "-button", o.getClass("button"), o.getClass("stateDefault")],
                        y ? (m = r.htmlEscape(y),
                        D = "") : v && (m = "<span class='" + v + "'></span>",
                        D = ' aria-label="' + s + '"'),
                        b = i('<button type="button" class="' + w.join(" ") + '"' + D + ">" + m + "</button>").click(function(t) {
                            b.hasClass(o.getClass("stateDisabled")) || (g(t),
                            (b.hasClass(o.getClass("stateActive")) || b.hasClass(o.getClass("stateDisabled"))) && b.removeClass(o.getClass("stateHover")))
                        }).mousedown(function() {
                            b.not("." + o.getClass("stateActive")).not("." + o.getClass("stateDisabled")).addClass(o.getClass("stateDown"))
                        }).mouseup(function() {
                            b.removeClass(o.getClass("stateDown"))
                        }).hover(function() {
                            b.not("." + o.getClass("stateActive")).not("." + o.getClass("stateDisabled")).addClass(o.getClass("stateHover"))
                        }, function() {
                            b.removeClass(o.getClass("stateHover")).removeClass(o.getClass("stateDown"))
                        }),
                        h = h.add(b)))
                    }),
                    f && h.first().addClass(o.getClass("cornerLeft")).end().last().addClass(o.getClass("cornerRight")).end(),
                    h.length > 1 ? (u = i("<div/>"),
                    f && u.addClass(o.getClass("buttonGroup")),
                    u.append(h),
                    l.append(u)) : l.append(h)
                }),
                l
            }
            ,
            t.prototype.updateTitle = function(t) {
                this.el && this.el.find("h2").text(t)
            }
            ,
            t.prototype.activateButton = function(t) {
                this.el && this.el.find(".fc-" + t + "-button").addClass(this.calendar.theme.getClass("stateActive"))
            }
            ,
            t.prototype.deactivateButton = function(t) {
                this.el && this.el.find(".fc-" + t + "-button").removeClass(this.calendar.theme.getClass("stateActive"))
            }
            ,
            t.prototype.disableButton = function(t) {
                this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !0).addClass(this.calendar.theme.getClass("stateDisabled"))
            }
            ,
            t.prototype.enableButton = function(t) {
                this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !1).removeClass(this.calendar.theme.getClass("stateDisabled"))
            }
            ,
            t.prototype.getViewsWithButtons = function() {
                return this.viewsWithButtons
            }
            ,
            t
        }();
        e.default = o
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(4)
          , s = n(31)
          , a = n(30)
          , l = n(48)
          , u = function(t) {
            function e(e, n) {
                var i = t.call(this) || this;
                return i._calendar = e,
                i.overrides = r.extend({}, n),
                i.dynamicOverrides = {},
                i.compute(),
                i
            }
            return i.__extends(e, t),
            e.prototype.add = function(t) {
                var e, n = 0;
                this.recordOverrides(t);
                for (e in t)
                    n++;
                if (1 === n) {
                    if ("height" === e || "contentHeight" === e || "aspectRatio" === e)
                        return void this._calendar.updateViewSize(!0);
                    if ("defaultDate" === e)
                        return;
                    if ("businessHours" === e)
                        return;
                    if (/^(event|select)(Overlap|Constraint|Allow)$/.test(e))
                        return;
                    if ("timezone" === e)
                        return void this._calendar.view.flash("initialEvents")
                }
                this._calendar.renderHeader(),
                this._calendar.renderFooter(),
                this._calendar.viewsByType = {},
                this._calendar.reinitView()
            }
            ,
            e.prototype.compute = function() {
                var t, e, n, i, r;
                t = o.firstDefined(this.dynamicOverrides.locale, this.overrides.locale),
                e = a.localeOptionHash[t],
                e || (t = s.globalDefaults.locale,
                e = a.localeOptionHash[t] || {}),
                n = o.firstDefined(this.dynamicOverrides.isRTL, this.overrides.isRTL, e.isRTL, s.globalDefaults.isRTL),
                i = n ? s.rtlDefaults : {},
                this.dirDefaults = i,
                this.localeDefaults = e,
                r = s.mergeOptions([s.globalDefaults, i, e, this.overrides, this.dynamicOverrides]),
                a.populateInstanceComputableOptions(r),
                this.reset(r)
            }
            ,
            e.prototype.recordOverrides = function(t) {
                var e;
                for (e in t)
                    this.dynamicOverrides[e] = t[e];
                this._calendar.viewSpecManager.clearCache(),
                this.compute()
            }
            ,
            e
        }(l.default);
        e.default = u
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0)
          , r = n(3)
          , o = n(21)
          , s = n(4)
          , a = n(31)
          , l = n(30)
          , u = function() {
            function t(t, e) {
                this.optionsManager = t,
                this._calendar = e,
                this.clearCache()
            }
            return t.prototype.clearCache = function() {
                this.viewSpecCache = {}
            }
            ,
            t.prototype.getViewSpec = function(t) {
                var e = this.viewSpecCache;
                return e[t] || (e[t] = this.buildViewSpec(t))
            }
            ,
            t.prototype.getUnitViewSpec = function(t) {
                var e, n, i;
                if (-1 !== r.inArray(t, s.unitsDesc))
                    for (e = this._calendar.header.getViewsWithButtons(),
                    r.each(o.viewHash, function(t) {
                        e.push(t)
                    }),
                    n = 0; n < e.length; n++)
                        if ((i = this.getViewSpec(e[n])) && i.singleUnit === t)
                            return i
            }
            ,
            t.prototype.buildViewSpec = function(t) {
                for (var e, n, r, l, u, d = this.optionsManager.overrides.views || {}, c = [], p = [], h = [], f = t; f; )
                    e = o.viewHash[f],
                    n = d[f],
                    f = null,
                    "function" == typeof e && (e = {
                        class: e
                    }),
                    e && (c.unshift(e),
                    p.unshift(e.defaults || {}),
                    r = r || e.duration,
                    f = f || e.type),
                    n && (h.unshift(n),
                    r = r || n.duration,
                    f = f || n.type);
                return e = s.mergeProps(c),
                e.type = t,
                !!e.class && (r = r || this.optionsManager.dynamicOverrides.duration || this.optionsManager.overrides.duration,
                r && (l = i.duration(r),
                l.valueOf() && (u = s.computeDurationGreatestUnit(l, r),
                e.duration = l,
                e.durationUnit = u,
                1 === l.as(u) && (e.singleUnit = u,
                h.unshift(d[u] || {})))),
                e.defaults = a.mergeOptions(p),
                e.overrides = a.mergeOptions(h),
                this.buildViewSpecOptions(e),
                this.buildViewSpecButtonText(e, t),
                e)
            }
            ,
            t.prototype.buildViewSpecOptions = function(t) {
                var e = this.optionsManager;
                t.options = a.mergeOptions([a.globalDefaults, t.defaults, e.dirDefaults, e.localeDefaults, e.overrides, t.overrides, e.dynamicOverrides]),
                l.populateInstanceComputableOptions(t.options)
            }
            ,
            t.prototype.buildViewSpecButtonText = function(t, e) {
                function n(n) {
                    var i = n.buttonText || {};
                    return i[e] || (t.buttonTextKey ? i[t.buttonTextKey] : null) || (t.singleUnit ? i[t.singleUnit] : null)
                }
                var i = this.optionsManager;
                t.buttonTextOverride = n(i.dynamicOverrides) || n(i.overrides) || t.overrides.buttonText,
                t.buttonTextDefault = n(i.localeDefaults) || n(i.dirDefaults) || t.defaults.buttonText || n(a.globalDefaults) || (t.duration ? this._calendar.humanizeDuration(t.duration) : null) || e
            }
            ,
            t
        }();
        e.default = u
    }
    , function(t, e, n) {
        function i(t, e) {
            return t.getPrimitive() === e.getPrimitive()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(3)
          , o = n(4)
          , s = n(243)
          , a = n(52)
          , l = n(6)
          , u = n(37)
          , d = n(13)
          , c = n(18)
          , p = n(11)
          , h = n(7)
          , f = function() {
            function t(t) {
                this.calendar = t,
                this.stickySource = new a.default(t),
                this.otherSources = []
            }
            return t.prototype.requestEvents = function(t, e, n, i) {
                return !i && this.currentPeriod && this.currentPeriod.isWithinRange(t, e) && n === this.currentPeriod.timezone || this.setPeriod(new s.default(t,e,n)),
                this.currentPeriod.whenReleased()
            }
            ,
            t.prototype.addSource = function(t) {
                this.otherSources.push(t),
                this.currentPeriod && this.currentPeriod.requestSource(t)
            }
            ,
            t.prototype.removeSource = function(t) {
                o.removeExact(this.otherSources, t),
                this.currentPeriod && this.currentPeriod.purgeSource(t)
            }
            ,
            t.prototype.removeAllSources = function() {
                this.otherSources = [],
                this.currentPeriod && this.currentPeriod.purgeAllSources()
            }
            ,
            t.prototype.refetchSource = function(t) {
                var e = this.currentPeriod;
                e && (e.freeze(),
                e.purgeSource(t),
                e.requestSource(t),
                e.thaw())
            }
            ,
            t.prototype.refetchAllSources = function() {
                var t = this.currentPeriod;
                t && (t.freeze(),
                t.purgeAllSources(),
                t.requestSources(this.getSources()),
                t.thaw())
            }
            ,
            t.prototype.getSources = function() {
                return [this.stickySource].concat(this.otherSources)
            }
            ,
            t.prototype.multiQuerySources = function(t) {
                t ? r.isArray(t) || (t = [t]) : t = [];
                var e, n = [];
                for (e = 0; e < t.length; e++)
                    n.push.apply(n, this.querySources(t[e]));
                return n
            }
            ,
            t.prototype.querySources = function(t) {
                var e, n, o = this.otherSources;
                for (e = 0; e < o.length; e++)
                    if ((n = o[e]) === t)
                        return [n];
                return (n = this.getSourceById(l.default.normalizeId(t))) ? [n] : (t = u.default.parse(t, this.calendar),
                t ? r.grep(o, function(e) {
                    return i(t, e)
                }) : void 0)
            }
            ,
            t.prototype.getSourceById = function(t) {
                return r.grep(this.otherSources, function(e) {
                    return e.id && e.id === t
                })[0]
            }
            ,
            t.prototype.setPeriod = function(t) {
                this.currentPeriod && (this.unbindPeriod(this.currentPeriod),
                this.currentPeriod = null),
                this.currentPeriod = t,
                this.bindPeriod(t),
                t.requestSources(this.getSources())
            }
            ,
            t.prototype.bindPeriod = function(t) {
                this.listenTo(t, "release", function(t) {
                    this.trigger("release", t)
                })
            }
            ,
            t.prototype.unbindPeriod = function(t) {
                this.stopListeningTo(t)
            }
            ,
            t.prototype.getEventDefByUid = function(t) {
                if (this.currentPeriod)
                    return this.currentPeriod.getEventDefByUid(t)
            }
            ,
            t.prototype.addEventDef = function(t, e) {
                e && this.stickySource.addEventDef(t),
                this.currentPeriod && this.currentPeriod.addEventDef(t)
            }
            ,
            t.prototype.removeEventDefsById = function(t) {
                this.getSources().forEach(function(e) {
                    e.removeEventDefsById(t)
                }),
                this.currentPeriod && this.currentPeriod.removeEventDefsById(t)
            }
            ,
            t.prototype.removeAllEventDefs = function() {
                this.getSources().forEach(function(t) {
                    t.removeAllEventDefs()
                }),
                this.currentPeriod && this.currentPeriod.removeAllEventDefs()
            }
            ,
            t.prototype.mutateEventsWithId = function(t, e) {
                var n, i = this.currentPeriod, r = [];
                return i ? (i.freeze(),
                n = i.getEventDefsById(t),
                n.forEach(function(t) {
                    i.removeEventDef(t),
                    r.push(e.mutateSingle(t)),
                    i.addEventDef(t)
                }),
                i.thaw(),
                function() {
                    i.freeze();
                    for (var t = 0; t < n.length; t++)
                        i.removeEventDef(n[t]),
                        r[t](),
                        i.addEventDef(n[t]);
                    i.thaw()
                }
                ) : function() {}
            }
            ,
            t.prototype.buildMutatedEventInstanceGroup = function(t, e) {
                var n, i, r = this.getEventDefsById(t), o = [];
                for (n = 0; n < r.length; n++)
                    (i = r[n].clone())instanceof d.default && (e.mutateSingle(i),
                    o.push.apply(o, i.buildInstances()));
                return new c.default(o)
            }
            ,
            t.prototype.freeze = function() {
                this.currentPeriod && this.currentPeriod.freeze()
            }
            ,
            t.prototype.thaw = function() {
                this.currentPeriod && this.currentPeriod.thaw()
            }
            ,
            t.prototype.getEventDefsById = function(t) {
                return this.currentPeriod.getEventDefsById(t)
            }
            ,
            t.prototype.getEventInstances = function() {
                return this.currentPeriod.getEventInstances()
            }
            ,
            t.prototype.getEventInstancesWithId = function(t) {
                return this.currentPeriod.getEventInstancesWithId(t)
            }
            ,
            t.prototype.getEventInstancesWithoutId = function(t) {
                return this.currentPeriod.getEventInstancesWithoutId(t)
            }
            ,
            t
        }();
        e.default = f,
        p.default.mixInto(f),
        h.default.mixInto(f)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(4)
          , o = n(19)
          , s = n(11)
          , a = n(5)
          , l = n(18)
          , u = function() {
            function t(t, e, n) {
                this.pendingCnt = 0,
                this.freezeDepth = 0,
                this.stuntedReleaseCnt = 0,
                this.releaseCnt = 0,
                this.start = t,
                this.end = e,
                this.timezone = n,
                this.unzonedRange = new a.default(t.clone().stripZone(),e.clone().stripZone()),
                this.requestsByUid = {},
                this.eventDefsByUid = {},
                this.eventDefsById = {},
                this.eventInstanceGroupsById = {}
            }
            return t.prototype.isWithinRange = function(t, e) {
                return !t.isBefore(this.start) && !e.isAfter(this.end)
            }
            ,
            t.prototype.requestSources = function(t) {
                this.freeze();
                for (var e = 0; e < t.length; e++)
                    this.requestSource(t[e]);
                this.thaw()
            }
            ,
            t.prototype.requestSource = function(t) {
                var e = this
                  , n = {
                    source: t,
                    status: "pending",
                    eventDefs: null
                };
                this.requestsByUid[t.uid] = n,
                this.pendingCnt += 1,
                t.fetch(this.start, this.end, this.timezone).then(function(t) {
                    "cancelled" !== n.status && (n.status = "completed",
                    n.eventDefs = t,
                    e.addEventDefs(t),
                    e.pendingCnt--,
                    e.tryRelease())
                }, function() {
                    "cancelled" !== n.status && (n.status = "failed",
                    e.pendingCnt--,
                    e.tryRelease())
                })
            }
            ,
            t.prototype.purgeSource = function(t) {
                var e = this.requestsByUid[t.uid];
                e && (delete this.requestsByUid[t.uid],
                "pending" === e.status ? (e.status = "cancelled",
                this.pendingCnt--,
                this.tryRelease()) : "completed" === e.status && e.eventDefs.forEach(this.removeEventDef.bind(this)))
            }
            ,
            t.prototype.purgeAllSources = function() {
                var t, e, n = this.requestsByUid, i = 0;
                for (t in n)
                    e = n[t],
                    "pending" === e.status ? e.status = "cancelled" : "completed" === e.status && i++;
                this.requestsByUid = {},
                this.pendingCnt = 0,
                i && this.removeAllEventDefs()
            }
            ,
            t.prototype.getEventDefByUid = function(t) {
                return this.eventDefsByUid[t]
            }
            ,
            t.prototype.getEventDefsById = function(t) {
                var e = this.eventDefsById[t];
                return e ? e.slice() : []
            }
            ,
            t.prototype.addEventDefs = function(t) {
                for (var e = 0; e < t.length; e++)
                    this.addEventDef(t[e])
            }
            ,
            t.prototype.addEventDef = function(t) {
                var e, n = this.eventDefsById, i = t.id, r = n[i] || (n[i] = []), o = t.buildInstances(this.unzonedRange);
                for (r.push(t),
                this.eventDefsByUid[t.uid] = t,
                e = 0; e < o.length; e++)
                    this.addEventInstance(o[e], i)
            }
            ,
            t.prototype.removeEventDefsById = function(t) {
                var e = this;
                this.getEventDefsById(t).forEach(function(t) {
                    e.removeEventDef(t)
                })
            }
            ,
            t.prototype.removeAllEventDefs = function() {
                var t = i.isEmptyObject(this.eventDefsByUid);
                this.eventDefsByUid = {},
                this.eventDefsById = {},
                this.eventInstanceGroupsById = {},
                t || this.tryRelease()
            }
            ,
            t.prototype.removeEventDef = function(t) {
                var e = this.eventDefsById
                  , n = e[t.id];
                delete this.eventDefsByUid[t.uid],
                n && (r.removeExact(n, t),
                n.length || delete e[t.id],
                this.removeEventInstancesForDef(t))
            }
            ,
            t.prototype.getEventInstances = function() {
                var t, e = this.eventInstanceGroupsById, n = [];
                for (t in e)
                    n.push.apply(n, e[t].eventInstances);
                return n
            }
            ,
            t.prototype.getEventInstancesWithId = function(t) {
                var e = this.eventInstanceGroupsById[t];
                return e ? e.eventInstances.slice() : []
            }
            ,
            t.prototype.getEventInstancesWithoutId = function(t) {
                var e, n = this.eventInstanceGroupsById, i = [];
                for (e in n)
                    e !== t && i.push.apply(i, n[e].eventInstances);
                return i
            }
            ,
            t.prototype.addEventInstance = function(t, e) {
                var n = this.eventInstanceGroupsById;
                (n[e] || (n[e] = new l.default)).eventInstances.push(t),
                this.tryRelease()
            }
            ,
            t.prototype.removeEventInstancesForDef = function(t) {
                var e, n = this.eventInstanceGroupsById, i = n[t.id];
                i && (e = r.removeMatching(i.eventInstances, function(e) {
                    return e.def === t
                }),
                i.eventInstances.length || delete n[t.id],
                e && this.tryRelease())
            }
            ,
            t.prototype.tryRelease = function() {
                this.pendingCnt || (this.freezeDepth ? this.stuntedReleaseCnt++ : this.release())
            }
            ,
            t.prototype.release = function() {
                this.releaseCnt++,
                this.trigger("release", this.eventInstanceGroupsById)
            }
            ,
            t.prototype.whenReleased = function() {
                var t = this;
                return this.releaseCnt ? o.default.resolve(this.eventInstanceGroupsById) : o.default.construct(function(e) {
                    t.one("release", e)
                })
            }
            ,
            t.prototype.freeze = function() {
                this.freezeDepth++ || (this.stuntedReleaseCnt = 0)
            }
            ,
            t.prototype.thaw = function() {
                --this.freezeDepth || !this.stuntedReleaseCnt || this.pendingCnt || this.release()
            }
            ,
            t
        }();
        e.default = u,
        s.default.mixInto(u)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(4)
          , o = n(7)
          , s = function() {
            function t(t, e) {
                this.isFollowing = !1,
                this.isHidden = !1,
                this.isAnimating = !1,
                this.options = e = e || {},
                this.sourceEl = t,
                this.parentEl = e.parentEl ? i(e.parentEl) : t.parent()
            }
            return t.prototype.start = function(t) {
                this.isFollowing || (this.isFollowing = !0,
                this.y0 = r.getEvY(t),
                this.x0 = r.getEvX(t),
                this.topDelta = 0,
                this.leftDelta = 0,
                this.isHidden || this.updatePosition(),
                r.getEvIsTouch(t) ? this.listenTo(i(document), "touchmove", this.handleMove) : this.listenTo(i(document), "mousemove", this.handleMove))
            }
            ,
            t.prototype.stop = function(t, e) {
                var n = this
                  , r = this.options.revertDuration
                  , o = function() {
                    n.isAnimating = !1,
                    n.removeElement(),
                    n.top0 = n.left0 = null,
                    e && e()
                };
                this.isFollowing && !this.isAnimating && (this.isFollowing = !1,
                this.stopListeningTo(i(document)),
                t && r && !this.isHidden ? (this.isAnimating = !0,
                this.el.animate({
                    top: this.top0,
                    left: this.left0
                }, {
                    duration: r,
                    complete: o
                })) : o())
            }
            ,
            t.prototype.getEl = function() {
                var t = this.el;
                return t || (t = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
                    position: "absolute",
                    visibility: "",
                    display: this.isHidden ? "none" : "",
                    margin: 0,
                    right: "auto",
                    bottom: "auto",
                    width: this.sourceEl.width(),
                    height: this.sourceEl.height(),
                    opacity: this.options.opacity || "",
                    zIndex: this.options.zIndex
                }),
                t.addClass("fc-unselectable"),
                t.appendTo(this.parentEl)),
                t
            }
            ,
            t.prototype.removeElement = function() {
                this.el && (this.el.remove(),
                this.el = null)
            }
            ,
            t.prototype.updatePosition = function() {
                var t, e;
                this.getEl(),
                null == this.top0 && (t = this.sourceEl.offset(),
                e = this.el.offsetParent().offset(),
                this.top0 = t.top - e.top,
                this.left0 = t.left - e.left),
                this.el.css({
                    top: this.top0 + this.topDelta,
                    left: this.left0 + this.leftDelta
                })
            }
            ,
            t.prototype.handleMove = function(t) {
                this.topDelta = r.getEvY(t) - this.y0,
                this.leftDelta = r.getEvX(t) - this.x0,
                this.isHidden || this.updatePosition()
            }
            ,
            t.prototype.hide = function() {
                this.isHidden || (this.isHidden = !0,
                this.el && this.el.hide())
            }
            ,
            t.prototype.show = function() {
                this.isHidden && (this.isHidden = !1,
                this.updatePosition(),
                this.getEl().show())
            }
            ,
            t
        }();
        e.default = s,
        o.default.mixInto(s)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(22)
          , o = n(15)
          , s = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.dragListener = n.buildDragListener(),
                n
            }
            return i.__extends(e, t),
            e.prototype.end = function() {
                this.dragListener.endInteraction()
            }
            ,
            e.prototype.bindToEl = function(t) {
                var e = this.component
                  , n = this.dragListener;
                e.bindDateHandlerToEl(t, "mousedown", function(t) {
                    e.shouldIgnoreMouse() || n.startInteraction(t)
                }),
                e.bindDateHandlerToEl(t, "touchstart", function(t) {
                    e.shouldIgnoreTouch() || n.startInteraction(t)
                })
            }
            ,
            e.prototype.buildDragListener = function() {
                var t, e = this, n = this.component, i = new r.default(n,{
                    scroll: this.opt("dragScroll"),
                    interactionStart: function() {
                        t = i.origHit
                    },
                    hitOver: function(e, n, i) {
                        n || (t = null)
                    },
                    hitOut: function() {
                        t = null
                    },
                    interactionEnd: function(i, r) {
                        var o;
                        !r && t && (o = n.getSafeHitFootprint(t)) && e.view.triggerDayClick(o, n.getHitEl(t), i)
                    }
                });
                return i.shouldCancelTouchScroll = !1,
                i.scrollAlwaysKills = !0,
                i
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e, n) {
        function i(t) {
            var e, n, i, r = [];
            for (e = 0; e < t.length; e++) {
                for (n = t[e],
                i = 0; i < r.length && s(n, r[i]).length; i++)
                    ;
                n.level = i,
                (r[i] || (r[i] = [])).push(n)
            }
            return r
        }
        function r(t) {
            var e, n, i, r, o;
            for (e = 0; e < t.length; e++)
                for (n = t[e],
                i = 0; i < n.length; i++)
                    for (r = n[i],
                    r.forwardSegs = [],
                    o = e + 1; o < t.length; o++)
                        s(r, t[o], r.forwardSegs)
        }
        function o(t) {
            var e, n, i = t.forwardSegs, r = 0;
            if (void 0 === t.forwardPressure) {
                for (e = 0; e < i.length; e++)
                    n = i[e],
                    o(n),
                    r = Math.max(r, 1 + n.forwardPressure);
                t.forwardPressure = r
            }
        }
        function s(t, e, n) {
            void 0 === n && (n = []);
            for (var i = 0; i < e.length; i++)
                a(t, e[i]) && n.push(e[i]);
            return n
        }
        function a(t, e) {
            return t.bottom > e.top && t.top < e.bottom
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = n(2)
          , u = n(4)
          , d = n(42)
          , c = function(t) {
            function e(e, n) {
                var i = t.call(this, e, n) || this;
                return i.timeGrid = e,
                i
            }
            return l.__extends(e, t),
            e.prototype.renderFgSegs = function(t) {
                this.renderFgSegsIntoContainers(t, this.timeGrid.fgContainerEls)
            }
            ,
            e.prototype.renderFgSegsIntoContainers = function(t, e) {
                var n, i;
                for (n = this.timeGrid.groupSegsByCol(t),
                i = 0; i < this.timeGrid.colCnt; i++)
                    this.updateFgSegCoords(n[i]);
                this.timeGrid.attachSegsByCol(n, e)
            }
            ,
            e.prototype.unrenderFgSegs = function() {
                this.fgSegs && this.fgSegs.forEach(function(t) {
                    t.el.remove()
                })
            }
            ,
            e.prototype.computeEventTimeFormat = function() {
                return this.opt("noMeridiemTimeFormat")
            }
            ,
            e.prototype.computeDisplayEventEnd = function() {
                return !0
            }
            ,
            e.prototype.fgSegHtml = function(t, e) {
                var n, i, r, o = this.view, s = o.calendar, a = t.footprint.componentFootprint, l = a.isAllDay, d = t.footprint.eventDef, c = o.isEventDefDraggable(d), p = !e && t.isStart && o.isEventDefResizableFromStart(d), h = !e && t.isEnd && o.isEventDefResizableFromEnd(d), f = this.getSegClasses(t, c, p || h), g = u.cssToStr(this.getSkinCss(d));
                if (f.unshift("fc-time-grid-event", "fc-v-event"),
                o.isMultiDayRange(a.unzonedRange)) {
                    if (t.isStart || t.isEnd) {
                        var v = s.msToMoment(t.startMs)
                          , y = s.msToMoment(t.endMs);
                        n = this._getTimeText(v, y, l),
                        i = this._getTimeText(v, y, l, "LT"),
                        r = this._getTimeText(v, y, l, null, !1)
                    }
                } else
                    n = this.getTimeText(t.footprint),
                    i = this.getTimeText(t.footprint, "LT"),
                    r = this.getTimeText(t.footprint, null, !1);
                return '<a class="' + f.join(" ") + '"' + (d.url ? ' href="' + u.htmlEscape(d.url) + '"' : "") + (g ? ' style="' + g + '"' : "") + '><div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + u.htmlEscape(r) + '" data-full="' + u.htmlEscape(i) + '"><span>' + u.htmlEscape(n) + "</span></div>" : "") + (d.title ? '<div class="fc-title">' + u.htmlEscape(d.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (h ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
            }
            ,
            e.prototype.updateFgSegCoords = function(t) {
                this.timeGrid.computeSegVerticals(t),
                this.computeFgSegHorizontals(t),
                this.timeGrid.assignSegVerticals(t),
                this.assignFgSegHorizontals(t)
            }
            ,
            e.prototype.computeFgSegHorizontals = function(t) {
                var e, n, s;
                if (this.sortEventSegs(t),
                e = i(t),
                r(e),
                n = e[0]) {
                    for (s = 0; s < n.length; s++)
                        o(n[s]);
                    for (s = 0; s < n.length; s++)
                        this.computeFgSegForwardBack(n[s], 0, 0)
                }
            }
            ,
            e.prototype.computeFgSegForwardBack = function(t, e, n) {
                var i, r = t.forwardSegs;
                if (void 0 === t.forwardCoord)
                    for (r.length ? (this.sortForwardSegs(r),
                    this.computeFgSegForwardBack(r[0], e + 1, n),
                    t.forwardCoord = r[0].backwardCoord) : t.forwardCoord = 1,
                    t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1),
                    i = 0; i < r.length; i++)
                        this.computeFgSegForwardBack(r[i], 0, t.forwardCoord)
            }
            ,
            e.prototype.sortForwardSegs = function(t) {
                t.sort(u.proxy(this, "compareForwardSegs"))
            }
            ,
            e.prototype.compareForwardSegs = function(t, e) {
                return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || this.compareEventSegs(t, e)
            }
            ,
            e.prototype.assignFgSegHorizontals = function(t) {
                var e, n;
                for (e = 0; e < t.length; e++)
                    n = t[e],
                    n.el.css(this.generateFgSegHorizontalCss(n)),
                    n.bottom - n.top < 30 && n.el.addClass("fc-short")
            }
            ,
            e.prototype.generateFgSegHorizontalCss = function(t) {
                var e, n, i = this.opt("slotEventOverlap"), r = t.backwardCoord, o = t.forwardCoord, s = this.timeGrid.generateSegVerticalCss(t), a = this.timeGrid.isRTL;
                return i && (o = Math.min(1, r + 2 * (o - r))),
                a ? (e = 1 - o,
                n = r) : (e = r,
                n = 1 - o),
                s.zIndex = t.level + 1,
                s.left = 100 * e + "%",
                s.right = 100 * n + "%",
                i && t.forwardPressure && (s[a ? "marginLeft" : "marginRight"] = 20),
                s
            }
            ,
            e
        }(d.default);
        e.default = c
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(58)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.renderSegs = function(t, e) {
                var n, i, o, s = [];
                for (this.eventRenderer.renderFgSegsIntoContainers(t, this.component.helperContainerEls),
                n = 0; n < t.length; n++)
                    i = t[n],
                    e && e.col === i.col && (o = e.el,
                    i.el.css({
                        left: o.css("left"),
                        right: o.css("right"),
                        "margin-left": o.css("margin-left"),
                        "margin-right": o.css("margin-right")
                    })),
                    s.push(i.el[0]);
                return r(s)
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(57)
          , o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.attachSegEls = function(t, e) {
                var n, i = this.component;
                return "bgEvent" === t ? n = i.bgContainerEls : "businessHours" === t ? n = i.businessContainerEls : "highlight" === t && (n = i.highlightContainerEls),
                i.updateSegVerticals(e),
                i.attachSegsByCol(i.groupSegsByCol(e), n),
                e.map(function(t) {
                    return t.el[0]
                })
            }
            ,
            e
        }(r.default);
        e.default = o
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , r = n(4)
          , o = n(7)
          , s = function() {
            function t(t) {
                this.isHidden = !0,
                this.margin = 10,
                this.options = t || {}
            }
            return t.prototype.show = function() {
                this.isHidden && (this.el || this.render(),
                this.el.show(),
                this.position(),
                this.isHidden = !1,
                this.trigger("show"))
            }
            ,
            t.prototype.hide = function() {
                this.isHidden || (this.el.hide(),
                this.isHidden = !0,
                this.trigger("hide"))
            }
            ,
            t.prototype.render = function() {
                var t = this
                  , e = this.options;
                this.el = i('<div class="fc-popover"/>').addClass(e.className || "").css({
                    top: 0,
                    left: 0
                }).append(e.content).appendTo(e.parentEl),
                this.el.on("click", ".fc-close", function() {
                    t.hide()
                }),
                e.autoHide && this.listenTo(i(document), "mousedown", this.documentMousedown)
            }
            ,
            t.prototype.documentMousedown = function(t) {
                this.el && !i(t.target).closest(this.el).length && this.hide()
            }
            ,
            t.prototype.removeElement = function() {
                this.hide(),
                this.el && (this.el.remove(),
                this.el = null),
                this.stopListeningTo(i(document), "mousedown")
            }
            ,
            t.prototype.position = function() {
                var t, e, n, o, s, a = this.options, l = this.el.offsetParent().offset(), u = this.el.outerWidth(), d = this.el.outerHeight(), c = i(window), p = r.getScrollParent(this.el);
                o = a.top || 0,
                s = void 0 !== a.left ? a.left : void 0 !== a.right ? a.right - u : 0,
                p.is(window) || p.is(document) ? (p = c,
                t = 0,
                e = 0) : (n = p.offset(),
                t = n.top,
                e = n.left),
                t += c.scrollTop(),
                e += c.scrollLeft(),
                !1 !== a.viewportConstrain && (o = Math.min(o, t + p.outerHeight() - d - this.margin),
                o = Math.max(o, t + this.margin),
                s = Math.min(s, e + p.outerWidth() - u - this.margin),
                s = Math.max(s, e + this.margin)),
                this.el.css({
                    top: o - l.top,
                    left: s - l.left
                })
            }
            ,
            t.prototype.trigger = function(t) {
                this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
            ,
            t
        }();
        e.default = s,
        o.default.mixInto(s)
    }
    , function(t, e, n) {
        function i(t, e) {
            var n, i;
            for (n = 0; n < e.length; n++)
                if (i = e[n],
                i.leftCol <= t.rightCol && i.rightCol >= t.leftCol)
                    return !0;
            return !1
        }
        function r(t, e) {
            return t.leftCol - e.leftCol
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(2)
          , s = n(3)
          , a = n(4)
          , l = n(42)
          , u = function(t) {
            function e(e, n) {
                var i = t.call(this, e, n) || this;
                return i.dayGrid = e,
                i
            }
            return o.__extends(e, t),
            e.prototype.renderBgRanges = function(e) {
                e = s.grep(e, function(t) {
                    return t.eventDef.isAllDay()
                }),
                t.prototype.renderBgRanges.call(this, e)
            }
            ,
            e.prototype.renderFgSegs = function(t) {
                var e = this.rowStructs = this.renderSegRows(t);
                this.dayGrid.rowEls.each(function(t, n) {
                    s(n).find(".fc-content-skeleton > table").append(e[t].tbodyEl)
                })
            }
            ,
            e.prototype.unrenderFgSegs = function() {
                for (var t, e = this.rowStructs || []; t = e.pop(); )
                    t.tbodyEl.remove();
                this.rowStructs = null
            }
            ,
            e.prototype.renderSegRows = function(t) {
                var e, n, i = [];
                for (e = this.groupSegRows(t),
                n = 0; n < e.length; n++)
                    i.push(this.renderSegRow(n, e[n]));
                return i
            }
            ,
            e.prototype.renderSegRow = function(t, e) {
                function n(t) {
                    for (; o < t; )
                        d = (y[i - 1] || [])[o],
                        d ? d.attr("rowspan", parseInt(d.attr("rowspan") || 1, 10) + 1) : (d = s("<td/>"),
                        a.append(d)),
                        v[i][o] = d,
                        y[i][o] = d,
                        o++
                }
                var i, r, o, a, l, u, d, c = this.dayGrid.colCnt, p = this.buildSegLevels(e), h = Math.max(1, p.length), f = s("<tbody/>"), g = [], v = [], y = [];
                for (i = 0; i < h; i++) {
                    if (r = p[i],
                    o = 0,
                    a = s("<tr/>"),
                    g.push([]),
                    v.push([]),
                    y.push([]),
                    r)
                        for (l = 0; l < r.length; l++) {
                            for (u = r[l],
                            n(u.leftCol),
                            d = s('<td class="fc-event-container"/>').append(u.el),
                            u.leftCol !== u.rightCol ? d.attr("colspan", u.rightCol - u.leftCol + 1) : y[i][o] = d; o <= u.rightCol; )
                                v[i][o] = d,
                                g[i][o] = u,
                                o++;
                            a.append(d)
                        }
                    n(c),
                    this.dayGrid.bookendCells(a),
                    f.append(a)
                }
                return {
                    row: t,
                    tbodyEl: f,
                    cellMatrix: v,
                    segMatrix: g,
                    segLevels: p,
                    segs: e
                }
            }
            ,
            e.prototype.buildSegLevels = function(t) {
                var e, n, o, s = [];
                for (this.sortEventSegs(t),
                e = 0; e < t.length; e++) {
                    for (n = t[e],
                    o = 0; o < s.length && i(n, s[o]); o++)
                        ;
                    n.level = o,
                    (s[o] || (s[o] = [])).push(n)
                }
                for (o = 0; o < s.length; o++)
                    s[o].sort(r);
                return s
            }
            ,
            e.prototype.groupSegRows = function(t) {
                var e, n = [];
                for (e = 0; e < this.dayGrid.rowCnt; e++)
                    n.push([]);
                for (e = 0; e < t.length; e++)
                    n[t[e].row].push(t[e]);
                return n
            }
            ,
            e.prototype.computeEventTimeFormat = function() {
                return this.opt("extraSmallTimeFormat")
            }
            ,
            e.prototype.computeDisplayEventEnd = function() {
                return 1 === this.dayGrid.colCnt
            }
            ,
            e.prototype.fgSegHtml = function(t, e) {
                var n, i, r = this.view, o = t.footprint.eventDef, s = t.footprint.componentFootprint.isAllDay, l = r.isEventDefDraggable(o), u = !e && s && t.isStart && r.isEventDefResizableFromStart(o), d = !e && s && t.isEnd && r.isEventDefResizableFromEnd(o), c = this.getSegClasses(t, l, u || d), p = a.cssToStr(this.getSkinCss(o)), h = "";
                return c.unshift("fc-day-grid-event", "fc-h-event"),
                t.isStart && (n = this.getTimeText(t.footprint)) && (h = '<span class="fc-time">' + a.htmlEscape(n) + "</span>"),
                i = '<span class="fc-title">' + (a.htmlEscape(o.title || "") || "&nbsp;") + "</span>",
                '<a class="' + c.join(" ") + '"' + (o.url ? ' href="' + a.htmlEscape(o.url) + '"' : "") + (p ? ' style="' + p + '"' : "") + '><div class="fc-content">' + (this.dayGrid.isRTL ? i + " " + h : h + " " + i) + "</div>" + (u ? '<div class="fc-resizer fc-start-resizer" />' : "") + (d ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
            }
            ,
            e
        }(l.default);
        e.default = u
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(58)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.renderSegs = function(t, e) {
                var n, i = [];
                return n = this.eventRenderer.renderSegRows(t),
                this.component.rowEls.each(function(t, o) {
                    var s, a, l = r(o), u = r('<div class="fc-helper-skeleton"><table/></div>');
                    e && e.row === t ? a = e.el.position().top : (s = l.find(".fc-content-skeleton tbody"),
                    s.length || (s = l.find(".fc-content-skeleton table")),
                    a = s.position().top),
                    u.css("top", a).find("table").append(n[t].tbodyEl),
                    l.append(u),
                    i.push(u[0])
                }),
                r(i)
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(57)
          , s = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.fillSegTag = "td",
                e
            }
            return i.__extends(e, t),
            e.prototype.attachSegEls = function(t, e) {
                var n, i, r, o = [];
                for (n = 0; n < e.length; n++)
                    i = e[n],
                    r = this.renderFillRow(t, i),
                    this.component.rowEls.eq(i.row).append(r),
                    o.push(r[0]);
                return o
            }
            ,
            e.prototype.renderFillRow = function(t, e) {
                var n, i, o, s = this.component.colCnt, a = e.leftCol, l = e.rightCol + 1;
                return n = "businessHours" === t ? "bgevent" : t.toLowerCase(),
                i = r('<div class="fc-' + n + '-skeleton"><table><tr/></table></div>'),
                o = i.find("tr"),
                a > 0 && o.append('<td colspan="' + a + '"/>'),
                o.append(e.el.attr("colspan", l - a)),
                l < s && o.append('<td colspan="' + (s - l) + '"/>'),
                this.component.bookendCells(o),
                i
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(228)
          , o = n(5)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.buildRenderRange = function(e, n, i) {
                var r, s = t.prototype.buildRenderRange.call(this, e, n, i), a = this.msToUtcMoment(s.startMs, i), l = this.msToUtcMoment(s.endMs, i);
                return this.opt("fixedWeekCount") && (r = Math.ceil(l.diff(a, "weeks", !0)),
                l.add(6 - r, "weeks")),
                new o.default(a,l)
            }
            ,
            e
        }(r.default);
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(4)
          , o = n(42)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.renderFgSegs = function(t) {
                t.length ? this.component.renderSegList(t) : this.component.renderEmptyMessage()
            }
            ,
            e.prototype.fgSegHtml = function(t) {
                var e, n = this.view, i = n.calendar, o = i.theme, s = t.footprint, a = s.eventDef, l = s.componentFootprint, u = a.url, d = ["fc-list-item"].concat(this.getClasses(a)), c = this.getBgColor(a);
                return e = l.isAllDay ? n.getAllDayHtml() : n.isMultiDayRange(l.unzonedRange) ? t.isStart || t.isEnd ? r.htmlEscape(this._getTimeText(i.msToMoment(t.startMs), i.msToMoment(t.endMs), l.isAllDay)) : n.getAllDayHtml() : r.htmlEscape(this.getTimeText(s)),
                u && d.push("fc-has-url"),
                '<tr class="' + d.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + o.getClass("widgetContent") + '">' + (e || "") + "</td>" : "") + '<td class="fc-list-item-marker ' + o.getClass("widgetContent") + '"><span class="fc-event-dot"' + (c ? ' style="background-color:' + c + '"' : "") + '></span></td><td class="fc-list-item-title ' + o.getClass("widgetContent") + '"><a' + (u ? ' href="' + r.htmlEscape(u) + '"' : "") + ">" + r.htmlEscape(a.title || "") + "</a></td></tr>"
            }
            ,
            e.prototype.computeEventTimeFormat = function() {
                return this.opt("mediumTimeFormat")
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(3)
          , o = n(59)
          , s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e.prototype.handleClick = function(e, n) {
                var i;
                t.prototype.handleClick.call(this, e, n),
                r(n.target).closest("a[href]").length || (i = e.footprint.eventDef.url) && !n.isDefaultPrevented() && (window.location.href = i)
            }
            ,
            e
        }(o.default);
        e.default = s
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(37)
          , r = n(52)
          , o = n(215)
          , s = n(216);
        i.default.registerClass(r.default),
        i.default.registerClass(o.default),
        i.default.registerClass(s.default)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(51)
          , r = n(213)
          , o = n(214)
          , s = n(258);
        i.defineThemeSystem("standard", r.default),
        i.defineThemeSystem("jquery-ui", o.default),
        i.defineThemeSystem("bootstrap3", s.default)
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2)
          , r = n(38)
          , o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
            e
        }(r.default);
        e.default = o,
        o.prototype.classes = {
            widget: "fc-bootstrap3",
            tableGrid: "table-bordered",
            tableList: "table table-striped",
            buttonGroup: "btn-group",
            button: "btn btn-default",
            stateActive: "active",
            stateDisabled: "disabled",
            today: "alert alert-info",
            popover: "panel panel-default",
            popoverHeader: "panel-heading",
            popoverContent: "panel-body",
            headerRow: "panel-default",
            dayRow: "panel-default",
            listView: "panel panel-default"
        },
        o.prototype.baseIconClass = "glyphicon",
        o.prototype.iconClasses = {
            close: "glyphicon-remove",
            prev: "glyphicon-chevron-left",
            next: "glyphicon-chevron-right",
            prevYear: "glyphicon-backward",
            nextYear: "glyphicon-forward"
        },
        o.prototype.iconOverrideOption = "bootstrapGlyphicons",
        o.prototype.iconOverrideCustomButtonOption = "bootstrapGlyphicon",
        o.prototype.iconOverridePrefix = "glyphicon-"
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(21)
          , r = n(62)
          , o = n(229);
        i.defineView("basic", {
            class: r.default
        }),
        i.defineView("basicDay", {
            type: "basic",
            duration: {
                days: 1
            }
        }),
        i.defineView("basicWeek", {
            type: "basic",
            duration: {
                weeks: 1
            }
        }),
        i.defineView("month", {
            class: o.default,
            duration: {
                months: 1
            },
            defaults: {
                fixedWeekCount: !0
            }
        })
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(21)
          , r = n(226);
        i.defineView("agenda", {
            class: r.default,
            defaults: {
                allDaySlot: !0,
                slotDuration: "00:30:00",
                slotEventOverlap: !0
            }
        }),
        i.defineView("agendaDay", {
            type: "agenda",
            duration: {
                days: 1
            }
        }),
        i.defineView("agendaWeek", {
            type: "agenda",
            duration: {
                weeks: 1
            }
        })
    }
    , function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(21)
          , r = n(230);
        i.defineView("list", {
            class: r.default,
            buttonTextKey: "list",
            defaults: {
                buttonText: "list",
                listDayFormat: "LL",
                noEventsMessage: "No events to display"
            }
        }),
        i.defineView("listDay", {
            type: "list",
            duration: {
                days: 1
            },
            defaults: {
                listDayFormat: "dddd"
            }
        }),
        i.defineView("listWeek", {
            type: "list",
            duration: {
                weeks: 1
            },
            defaults: {
                listDayFormat: "dddd",
                listDayAltFormat: "LL"
            }
        }),
        i.defineView("listMonth", {
            type: "list",
            duration: {
                month: 1
            },
            defaults: {
                listDayAltFormat: "dddd"
            }
        }),
        i.defineView("listYear", {
            type: "list",
            duration: {
                year: 1
            },
            defaults: {
                listDayAltFormat: "dddd"
            }
        })
    }
    , function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ])
});
!function(e, a) {
    "object" == typeof exports && "object" == typeof module ? module.exports = a(require("moment"), require("fullcalendar")) : "function" == typeof define && define.amd ? define(["moment", "fullcalendar"], a) : "object" == typeof exports ? a(require("moment"), require("fullcalendar")) : a(e.moment, e.FullCalendar)
}("undefined" != typeof self ? self : this, function(e, a) {
    return function(e) {
        function a(n) {
            if (t[n])
                return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, a),
            r.l = !0,
            r.exports
        }
        var t = {};
        return a.m = e,
        a.c = t,
        a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        a.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return a.d(t, "a", t),
            t
        }
        ,
        a.o = function(e, a) {
            return Object.prototype.hasOwnProperty.call(e, a)
        }
        ,
        a.p = "",
        a(a.s = 432)
    }([function(a, t) {
        a.exports = e
    }
    , function(e, t) {
        e.exports = a
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(66);
        var n = t(1);
        n.datepickerLocale("af", "af", {
            closeText: "Selekteer",
            prevText: "Vorige",
            nextText: "Volgende",
            currentText: "Vandag",
            monthNames: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            dayNames: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
            dayNamesShort: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"],
            dayNamesMin: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("af", {
            buttonText: {
                year: "Jaar",
                month: "Maand",
                week: "Week",
                day: "Dag",
                list: "Agenda"
            },
            allDayHtml: "Heeldag",
            eventLimitText: "Addisionele",
            noEventsMessage: "Daar is geen gebeurtenisse nie"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    ss: "%d sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(68);
        var n = t(1);
        n.datepickerLocale("ar-dz", "ar-DZ", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 6,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ar-dz", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى",
            noEventsMessage: "أي أحداث لعرض"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ar-dz", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(70);
        var n = t(1);
        n.datepickerLocale("ar-kw", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ar-kw", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى",
            noEventsMessage: "أي أحداث لعرض"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(72);
        var n = t(1);
        n.datepickerLocale("ar-ly", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ar-ly", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى",
            noEventsMessage: "أي أحداث لعرض"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            }
              , t = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
              , n = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
              , r = function(e) {
                return function(a, r, s, d) {
                    var i = t(a)
                      , o = n[e][t(a)];
                    return 2 === i && (o = o[r ? 0 : 1]),
                    o.replace(/%d/i, a)
                }
            }
              , s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            return e.defineLocale("ar-ly", {
                months: s,
                monthsShort: s,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: r("s"),
                    ss: r("s"),
                    m: r("m"),
                    mm: r("m"),
                    h: r("h"),
                    hh: r("h"),
                    d: r("d"),
                    dd: r("d"),
                    M: r("M"),
                    MM: r("M"),
                    y: r("y"),
                    yy: r("y")
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return a[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(74);
        var n = t(1);
        n.datepickerLocale("ar-ma", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ar-ma", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى",
            noEventsMessage: "أي أحداث لعرض"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(76);
        var n = t(1);
        n.datepickerLocale("ar-sa", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ar-sa", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى",
            noEventsMessage: "أي أحداث لعرض"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
              , t = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
            return e.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return t[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return a[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(78);
        var n = t(1);
        n.datepickerLocale("ar-tn", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ar-tn", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى",
            noEventsMessage: "أي أحداث لعرض"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(80);
        var n = t(1);
        n.datepickerLocale("ar", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ar", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى",
            noEventsMessage: "أي أحداث لعرض"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
              , t = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }
              , n = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
              , r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
              , s = function(e) {
                return function(a, t, s, d) {
                    var i = n(a)
                      , o = r[e][n(a)];
                    return 2 === i && (o = o[t ? 0 : 1]),
                    o.replace(/%d/i, a)
                }
            }
              , d = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            return e.defineLocale("ar", {
                months: d,
                monthsShort: d,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: s("s"),
                    ss: s("s"),
                    m: s("m"),
                    mm: s("m"),
                    h: s("h"),
                    hh: s("h"),
                    d: s("d"),
                    dd: s("d"),
                    M: s("M"),
                    MM: s("M"),
                    y: s("y"),
                    yy: s("y")
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return t[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return a[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(82);
        var n = t(1);
        n.datepickerLocale("bg", "bg", {
            closeText: "затвори",
            prevText: "&#x3C;назад",
            nextText: "напред&#x3E;",
            nextBigText: "&#x3E;&#x3E;",
            currentText: "днес",
            monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
            dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            weekHeader: "Wk",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("bg", {
            buttonText: {
                month: "Месец",
                week: "Седмица",
                day: "Ден",
                list: "График"
            },
            allDayText: "Цял ден",
            eventLimitText: function(e) {
                return "+още " + e
            },
            noEventsMessage: "Няма събития за показване"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    ss: "%d секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дни",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var a = e % 10
                      , t = e % 100;
                    return 0 === e ? e + "-ев" : 0 === t ? e + "-ен" : t > 10 && t < 20 ? e + "-ти" : 1 === a ? e + "-ви" : 2 === a ? e + "-ри" : 7 === a || 8 === a ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(84);
        var n = t(1);
        n.datepickerLocale("bs", "bs", {
            closeText: "Zatvori",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Danas",
            monthNames: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novmbar", "Decembar"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            weekHeader: "Sed",
            dateFormat: "dd.mm.yy.",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("bs", {
            buttonText: {
                prev: "Prošli",
                next: "Sljedeći",
                month: "Mjesec",
                week: "Sedmica",
                day: "Dan",
                list: "Raspored"
            },
            allDayText: "Cijeli dan",
            eventLimitText: function(e) {
                return "+ još " + e
            },
            noEventsMessage: "Nema događaja za prikazivanje"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t) {
                var n = e + " ";
                switch (t) {
                case "ss":
                    return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return a ? "jedna minuta" : "jedne minute";
                case "mm":
                    return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return a ? "jedan sat" : "jednog sata";
                case "hh":
                    return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return n += 1 === e ? "dan" : "dana";
                case "MM":
                    return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            return e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: "dan",
                    dd: a,
                    M: "mjesec",
                    MM: a,
                    y: "godinu",
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(86);
        var n = t(1);
        n.datepickerLocale("ca", "ca", {
            closeText: "Tanca",
            prevText: "Anterior",
            nextText: "Següent",
            currentText: "Avui",
            monthNames: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
            monthNamesShort: ["gen", "feb", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
            dayNames: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
            dayNamesShort: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            dayNamesMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            weekHeader: "Set",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ca", {
            buttonText: {
                month: "Mes",
                week: "Setmana",
                day: "Dia",
                list: "Agenda"
            },
            allDayText: "Tot el dia",
            eventLimitText: "més",
            noEventsMessage: "No hi ha esdeveniments per mostrar"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "uns segons",
                    ss: "%d segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, a) {
                    var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== a && "W" !== a || (t = "a"),
                    e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(88);
        var n = t(1);
        n.datepickerLocale("cs", "cs", {
            closeText: "Zavřít",
            prevText: "&#x3C;Dříve",
            nextText: "Později&#x3E;",
            currentText: "Nyní",
            monthNames: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            monthNamesShort: ["led", "úno", "bře", "dub", "kvě", "čer", "čvc", "srp", "zář", "říj", "lis", "pro"],
            dayNames: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
            dayNamesShort: ["ne", "po", "út", "st", "čt", "pá", "so"],
            dayNamesMin: ["ne", "po", "út", "st", "čt", "pá", "so"],
            weekHeader: "Týd",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("cs", {
            buttonText: {
                month: "Měsíc",
                week: "Týden",
                day: "Den",
                list: "Agenda"
            },
            allDayText: "Celý den",
            eventLimitText: function(e) {
                return "+další: " + e
            },
            noEventsMessage: "Žádné akce k zobrazení"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e) {
                return e > 1 && e < 5 && 1 != ~~(e / 10)
            }
            function t(e, t, n, r) {
                var s = e + " ";
                switch (n) {
                case "s":
                    return t || r ? "pár sekund" : "pár sekundami";
                case "ss":
                    return t || r ? s + (a(e) ? "sekundy" : "sekund") : s + "sekundami";
                case "m":
                    return t ? "minuta" : r ? "minutu" : "minutou";
                case "mm":
                    return t || r ? s + (a(e) ? "minuty" : "minut") : s + "minutami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? s + (a(e) ? "hodiny" : "hodin") : s + "hodinami";
                case "d":
                    return t || r ? "den" : "dnem";
                case "dd":
                    return t || r ? s + (a(e) ? "dny" : "dní") : s + "dny";
                case "M":
                    return t || r ? "měsíc" : "měsícem";
                case "MM":
                    return t || r ? s + (a(e) ? "měsíce" : "měsíců") : s + "měsíci";
                case "y":
                    return t || r ? "rok" : "rokem";
                case "yy":
                    return t || r ? s + (a(e) ? "roky" : "let") : s + "lety"
                }
            }
            var n = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")
              , r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
            return e.defineLocale("cs", {
                months: n,
                monthsShort: r,
                monthsParse: function(e, a) {
                    var t, n = [];
                    for (t = 0; t < 12; t++)
                        n[t] = new RegExp("^" + e[t] + "$|^" + a[t] + "$","i");
                    return n
                }(n, r),
                shortMonthsParse: function(e) {
                    var a, t = [];
                    for (a = 0; a < 12; a++)
                        t[a] = new RegExp("^" + e[a] + "$","i");
                    return t
                }(r),
                longMonthsParse: function(e) {
                    var a, t = [];
                    for (a = 0; a < 12; a++)
                        t[a] = new RegExp("^" + e[a] + "$","i");
                    return t
                }(n),
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(90);
        var n = t(1);
        n.datepickerLocale("da", "da", {
            closeText: "Luk",
            prevText: "&#x3C;Forrige",
            nextText: "Næste&#x3E;",
            currentText: "Idag",
            monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            weekHeader: "Uge",
            dateFormat: "dd-mm-yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("da", {
            buttonText: {
                month: "Måned",
                week: "Uge",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dagen",
            eventLimitText: "flere",
            noEventsMessage: "Ingen arrangementer at vise"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "på dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    ss: "%d sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(92);
        var n = t(1);
        n.datepickerLocale("de-at", "de", {
            closeText: "Schließen",
            prevText: "&#x3C;Zurück",
            nextText: "Vor&#x3E;",
            currentText: "Heute",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader: "KW",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("de-at", {
            buttonText: {
                month: "Monat",
                week: "Woche",
                day: "Tag",
                list: "Terminübersicht"
            },
            allDayText: "Ganztägig",
            eventLimitText: function(e) {
                return "+ weitere " + e
            },
            noEventsMessage: "Keine Ereignisse anzuzeigen"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t, n) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return a ? r[t][0] : r[t][1]
            }
            return e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: a,
                    mm: "%d Minuten",
                    h: a,
                    hh: "%d Stunden",
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(94);
        var n = t(1);
        n.datepickerLocale("de-ch", "de", {
            closeText: "Schließen",
            prevText: "&#x3C;Zurück",
            nextText: "Vor&#x3E;",
            currentText: "Heute",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader: "KW",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("de-ch", {
            buttonText: {
                month: "Monat",
                week: "Woche",
                day: "Tag",
                list: "Terminübersicht"
            },
            allDayText: "Ganztägig",
            eventLimitText: function(e) {
                return "+ weitere " + e
            },
            noEventsMessage: "Keine Ereignisse anzuzeigen"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t, n) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return a ? r[t][0] : r[t][1]
            }
            return e.defineLocale("de-ch", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: a,
                    mm: "%d Minuten",
                    h: a,
                    hh: "%d Stunden",
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(96);
        var n = t(1);
        n.datepickerLocale("de", "de", {
            closeText: "Schließen",
            prevText: "&#x3C;Zurück",
            nextText: "Vor&#x3E;",
            currentText: "Heute",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader: "KW",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("de", {
            buttonText: {
                month: "Monat",
                week: "Woche",
                day: "Tag",
                list: "Terminübersicht"
            },
            allDayText: "Ganztägig",
            eventLimitText: function(e) {
                return "+ weitere " + e
            },
            noEventsMessage: "Keine Ereignisse anzuzeigen"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t, n) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return a ? r[t][0] : r[t][1]
            }
            return e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: a,
                    mm: "%d Minuten",
                    h: a,
                    hh: "%d Stunden",
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(98);
        var n = t(1);
        n.datepickerLocale("el", "el", {
            closeText: "Κλείσιμο",
            prevText: "Προηγούμενος",
            nextText: "Επόμενος",
            currentText: "Σήμερα",
            monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            weekHeader: "Εβδ",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("el", {
            buttonText: {
                month: "Μήνας",
                week: "Εβδομάδα",
                day: "Ημέρα",
                list: "Ατζέντα"
            },
            allDayText: "Ολοήμερο",
            eventLimitText: "περισσότερα",
            noEventsMessage: "Δεν υπάρχουν γεγονότα για να εμφανιστεί"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            return e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, a) {
                    return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, a, t) {
                    return e > 11 ? t ? "μμ" : "ΜΜ" : t ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function(e, t) {
                    var n = this._calendarEl[e]
                      , r = t && t.hours();
                    return a(n) && (n = n.apply(t)),
                    n.replace("{}", r % 12 == 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    ss: "%d δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(100);
        var n = t(1);
        n.datepickerLocale("en-au", "en-AU", {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("en-au")
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var a = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(102),
        t(1).locale("en-ca")
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var a = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(104);
        var n = t(1);
        n.datepickerLocale("en-gb", "en-GB", {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("en-gb")
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var a = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(106),
        t(1).locale("en-ie")
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var a = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(108);
        var n = t(1);
        n.datepickerLocale("en-nz", "en-NZ", {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("en-nz")
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var a = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(110);
        var n = t(1);
        n.datepickerLocale("es-do", "es", {
            closeText: "Cerrar",
            prevText: "&#x3C;Ant",
            nextText: "Sig&#x3E;",
            currentText: "Hoy",
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("es-do", {
            buttonText: {
                month: "Mes",
                week: "Semana",
                day: "Día",
                list: "Agenda"
            },
            allDayHtml: "Todo<br/>el día",
            eventLimitText: "más",
            noEventsMessage: "No hay eventos para mostrar"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            return e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(112);
        var n = t(1);
        n.datepickerLocale("es-us", "es", {
            closeText: "Cerrar",
            prevText: "&#x3C;Ant",
            nextText: "Sig&#x3E;",
            currentText: "Hoy",
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("es-us", {
            buttonText: {
                month: "Mes",
                week: "Semana",
                day: "Día",
                list: "Agenda"
            },
            allDayHtml: "Todo<br/>el día",
            eventLimitText: "más",
            noEventsMessage: "No hay eventos para mostrar"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es-us", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
                },
                monthsParseExact: !0,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM [de] D [de] YYYY",
                    LLL: "MMMM [de] D [de] YYYY h:mm A",
                    LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(114);
        var n = t(1);
        n.datepickerLocale("es", "es", {
            closeText: "Cerrar",
            prevText: "&#x3C;Ant",
            nextText: "Sig&#x3E;",
            currentText: "Hoy",
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("es", {
            buttonText: {
                month: "Mes",
                week: "Semana",
                day: "Día",
                list: "Agenda"
            },
            allDayHtml: "Todo<br/>el día",
            eventLimitText: "más",
            noEventsMessage: "No hay eventos para mostrar"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            return e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(116);
        var n = t(1);
        n.datepickerLocale("et", "et", {
            closeText: "Sulge",
            prevText: "Eelnev",
            nextText: "Järgnev",
            currentText: "Täna",
            monthNames: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
            monthNamesShort: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
            dayNames: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
            dayNamesShort: ["Pühap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
            dayNamesMin: ["P", "E", "T", "K", "N", "R", "L"],
            weekHeader: "näd",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("et", {
            buttonText: {
                month: "Kuu",
                week: "Nädal",
                day: "Päev",
                list: "Päevakord"
            },
            allDayText: "Kogu päev",
            eventLimitText: function(e) {
                return "+ veel " + e
            },
            noEventsMessage: "Kuvamiseks puuduvad sündmused"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t, n) {
                var r = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    ss: [e + "sekundi", e + "sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return a ? r[t][2] ? r[t][2] : r[t][1] : n ? r[t][0] : r[t][1]
            }
            return e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: a,
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: "%d päeva",
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(118);
        var n = t(1);
        n.datepickerLocale("eu", "eu", {
            closeText: "Egina",
            prevText: "&#x3C;Aur",
            nextText: "Hur&#x3E;",
            currentText: "Gaur",
            monthNames: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"],
            monthNamesShort: ["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."],
            dayNames: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
            dayNamesShort: ["ig.", "al.", "ar.", "az.", "og.", "ol.", "lr."],
            dayNamesMin: ["ig", "al", "ar", "az", "og", "ol", "lr"],
            weekHeader: "As",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("eu", {
            buttonText: {
                month: "Hilabetea",
                week: "Astea",
                day: "Eguna",
                list: "Agenda"
            },
            allDayHtml: "Egun<br/>osoa",
            eventLimitText: "gehiago",
            noEventsMessage: "Ez dago ekitaldirik erakusteko"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    ss: "%d segundo",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(120);
        var n = t(1);
        n.datepickerLocale("fa", "fa", {
            closeText: "بستن",
            prevText: "&#x3C;قبلی",
            nextText: "بعدی&#x3E;",
            currentText: "امروز",
            monthNames: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
            dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            weekHeader: "هف",
            dateFormat: "yy/mm/dd",
            firstDay: 6,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("fa", {
            buttonText: {
                month: "ماه",
                week: "هفته",
                day: "روز",
                list: "برنامه"
            },
            allDayText: "تمام روز",
            eventLimitText: function(e) {
                return "بیش از " + e
            },
            noEventsMessage: "هیچ رویدادی به نمایش"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            }
              , t = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
            return e.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(e) {
                    return /بعد از ظهر/.test(e)
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    ss: "ثانیه d%",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/[۰-۹]/g, function(e) {
                        return t[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return a[e]
                    }).replace(/,/g, "،")
                },
                dayOfMonthOrdinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(122);
        var n = t(1);
        n.datepickerLocale("fi", "fi", {
            closeText: "Sulje",
            prevText: "&#xAB;Edellinen",
            nextText: "Seuraava&#xBB;",
            currentText: "Tänään",
            monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesMin: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            weekHeader: "Vk",
            dateFormat: "d.m.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("fi", {
            buttonText: {
                month: "Kuukausi",
                week: "Viikko",
                day: "Päivä",
                list: "Tapahtumat"
            },
            allDayText: "Koko päivä",
            eventLimitText: "lisää",
            noEventsMessage: "Ei näytettäviä tapahtumia"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, n, r) {
                var s = "";
                switch (n) {
                case "s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return r ? "sekunnin" : "sekuntia";
                case "m":
                    return r ? "minuutin" : "minuutti";
                case "mm":
                    s = r ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return r ? "tunnin" : "tunti";
                case "hh":
                    s = r ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return r ? "päivän" : "päivä";
                case "dd":
                    s = r ? "päivän" : "päivää";
                    break;
                case "M":
                    return r ? "kuukauden" : "kuukausi";
                case "MM":
                    s = r ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return r ? "vuoden" : "vuosi";
                case "yy":
                    s = r ? "vuoden" : "vuotta"
                }
                return s = t(e, r) + " " + s
            }
            function t(e, a) {
                return e < 10 ? a ? r[e] : n[e] : e
            }
            var n = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
              , r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]];
            return e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: a,
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(124);
        var n = t(1);
        n.datepickerLocale("fr-ca", "fr-CA", {
            closeText: "Fermer",
            prevText: "Précédent",
            nextText: "Suivant",
            currentText: "Aujourd'hui",
            monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthNamesShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader: "Sem.",
            dateFormat: "yy-mm-dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("fr-ca", {
            buttonText: {
                year: "Année",
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                list: "Mon planning"
            },
            allDayHtml: "Toute la<br/>journée",
            eventLimitText: "en plus",
            noEventsMessage: "Aucun événement à afficher"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, a) {
                    switch (a) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                    }
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(126);
        var n = t(1);
        n.datepickerLocale("fr-ch", "fr-CH", {
            closeText: "Fermer",
            prevText: "&#x3C;Préc",
            nextText: "Suiv&#x3E;",
            currentText: "Courant",
            monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthNamesShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader: "Sm",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("fr-ch", {
            buttonText: {
                year: "Année",
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                list: "Mon planning"
            },
            allDayHtml: "Toute la<br/>journée",
            eventLimitText: "en plus",
            noEventsMessage: "Aucun événement à afficher"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, a) {
                    switch (a) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(128);
        var n = t(1);
        n.datepickerLocale("fr", "fr", {
            closeText: "Fermer",
            prevText: "Précédent",
            nextText: "Suivant",
            currentText: "Aujourd'hui",
            monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthNamesShort: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader: "Sem.",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("fr", {
            buttonText: {
                year: "Année",
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                list: "Mon planning"
            },
            allDayHtml: "Toute la<br/>journée",
            eventLimitText: "en plus",
            noEventsMessage: "Aucun événement à afficher"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function(e, a) {
                    switch (a) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(130);
        var n = t(1);
        n.datepickerLocale("gl", "gl", {
            closeText: "Pechar",
            prevText: "&#x3C;Ant",
            nextText: "Seg&#x3E;",
            currentText: "Hoxe",
            monthNames: ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"],
            monthNamesShort: ["Xan", "Feb", "Mar", "Abr", "Mai", "Xuñ", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
            dayNames: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"],
            dayNamesMin: ["Do", "Lu", "Ma", "Mé", "Xo", "Ve", "Sá"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("gl", {
            buttonText: {
                month: "Mes",
                week: "Semana",
                day: "Día",
                list: "Axenda"
            },
            allDayHtml: "Todo<br/>o día",
            eventLimitText: "máis",
            noEventsMessage: "Non hai eventos para amosar"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return 0 === e.indexOf("un") ? "n" + e : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(132);
        var n = t(1);
        n.datepickerLocale("he", "he", {
            closeText: "סגור",
            prevText: "&#x3C;הקודם",
            nextText: "הבא&#x3E;",
            currentText: "היום",
            monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יוני", "יולי", "אוג", "ספט", "אוק", "נוב", "דצמ"],
            dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
            dayNamesMin: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("he", {
            buttonText: {
                month: "חודש",
                week: "שבוע",
                day: "יום",
                list: "סדר יום"
            },
            allDayText: "כל היום",
            eventLimitText: "אחר",
            noEventsMessage: "אין אירועים להצגה",
            weekNumberTitle: "שבוע"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    ss: "%d שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function(e) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                },
                meridiem: function(e, a, t) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? t ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? t ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(134);
        var n = t(1);
        n.datepickerLocale("hi", "hi", {
            closeText: "बंद",
            prevText: "पिछला",
            nextText: "अगला",
            currentText: "आज",
            monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
            dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
            dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            weekHeader: "हफ्ता",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("hi", {
            buttonText: {
                month: "महीना",
                week: "सप्ताह",
                day: "दिन",
                list: "कार्यसूची"
            },
            allDayText: "सभी दिन",
            eventLimitText: function(e) {
                return "+अधिक " + e
            },
            noEventsMessage: "कोई घटनाओं को प्रदर्शित करने के लिए"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
              , t = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
            return e.defineLocale("hi", {
                months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    ss: "%d सेकंड",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return t[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return a[e]
                    })
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(e, a) {
                    return 12 === e && (e = 0),
                    "रात" === a ? e < 4 ? e : e + 12 : "सुबह" === a ? e : "दोपहर" === a ? e >= 10 ? e : e + 12 : "शाम" === a ? e + 12 : void 0
                },
                meridiem: function(e, a, t) {
                    return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(136);
        var n = t(1);
        n.datepickerLocale("hr", "hr", {
            closeText: "Zatvori",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Danas",
            monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            weekHeader: "Tje",
            dateFormat: "dd.mm.yy.",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("hr", {
            buttonText: {
                prev: "Prijašnji",
                next: "Sljedeći",
                month: "Mjesec",
                week: "Tjedan",
                day: "Dan",
                list: "Raspored"
            },
            allDayText: "Cijeli dan",
            eventLimitText: function(e) {
                return "+ još " + e
            },
            noEventsMessage: "Nema događaja za prikaz"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t) {
                var n = e + " ";
                switch (t) {
                case "ss":
                    return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return a ? "jedna minuta" : "jedne minute";
                case "mm":
                    return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return a ? "jedan sat" : "jednog sata";
                case "hh":
                    return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return n += 1 === e ? "dan" : "dana";
                case "MM":
                    return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            return e.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: "dan",
                    dd: a,
                    M: "mjesec",
                    MM: a,
                    y: "godinu",
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(138);
        var n = t(1);
        n.datepickerLocale("hu", "hu", {
            closeText: "bezár",
            prevText: "vissza",
            nextText: "előre",
            currentText: "ma",
            monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort: ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
            weekHeader: "Hét",
            dateFormat: "yy.mm.dd.",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: ""
        }),
        n.locale("hu", {
            buttonText: {
                month: "Hónap",
                week: "Hét",
                day: "Nap",
                list: "Napló"
            },
            allDayText: "Egész nap",
            eventLimitText: "további",
            noEventsMessage: "Nincs megjeleníthető események"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t, n) {
                var r = e;
                switch (t) {
                case "s":
                    return n || a ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return r + (n || a) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (n || a ? " perc" : " perce");
                case "mm":
                    return r + (n || a ? " perc" : " perce");
                case "h":
                    return "egy" + (n || a ? " óra" : " órája");
                case "hh":
                    return r + (n || a ? " óra" : " órája");
                case "d":
                    return "egy" + (n || a ? " nap" : " napja");
                case "dd":
                    return r + (n || a ? " nap" : " napja");
                case "M":
                    return "egy" + (n || a ? " hónap" : " hónapja");
                case "MM":
                    return r + (n || a ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (n || a ? " év" : " éve");
                case "yy":
                    return r + (n || a ? " év" : " éve")
                }
                return ""
            }
            function t(e) {
                return (e ? "" : "[múlt] ") + "[" + n[this.day()] + "] LT[-kor]"
            }
            var n = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            return e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(e) {
                    return "u" === e.charAt(1).toLowerCase()
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return t.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return t.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: a,
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(140);
        var n = t(1);
        n.datepickerLocale("id", "id", {
            closeText: "Tutup",
            prevText: "&#x3C;mundur",
            nextText: "maju&#x3E;",
            currentText: "hari ini",
            monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agus", "Sep", "Okt", "Nop", "Des"],
            dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
            dayNamesShort: ["Min", "Sen", "Sel", "Rab", "kam", "Jum", "Sab"],
            dayNamesMin: ["Mg", "Sn", "Sl", "Rb", "Km", "jm", "Sb"],
            weekHeader: "Mg",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("id", {
            buttonText: {
                month: "Bulan",
                week: "Minggu",
                day: "Hari",
                list: "Agenda"
            },
            allDayHtml: "Sehari<br/>penuh",
            eventLimitText: "lebih",
            noEventsMessage: "Tidak ada acara untuk ditampilkan"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, a) {
                    return 12 === e && (e = 0),
                    "pagi" === a ? e : "siang" === a ? e >= 11 ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0
                },
                meridiem: function(e, a, t) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    ss: "%d detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(142);
        var n = t(1);
        n.datepickerLocale("is", "is", {
            closeText: "Loka",
            prevText: "&#x3C; Fyrri",
            nextText: "Næsti &#x3E;",
            currentText: "Í dag",
            monthNames: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
            dayNames: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"],
            dayNamesShort: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"],
            dayNamesMin: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
            weekHeader: "Vika",
            dateFormat: "dd.mm.yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("is", {
            buttonText: {
                month: "Mánuður",
                week: "Vika",
                day: "Dagur",
                list: "Dagskrá"
            },
            allDayHtml: "Allan<br/>daginn",
            eventLimitText: "meira",
            noEventsMessage: "Engir viðburðir til að sýna"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e) {
                return e % 100 == 11 || e % 10 != 1
            }
            function t(e, t, n, r) {
                var s = e + " ";
                switch (n) {
                case "s":
                    return t || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return a(e) ? s + (t || r ? "sekúndur" : "sekúndum") : s + "sekúnda";
                case "m":
                    return t ? "mínúta" : "mínútu";
                case "mm":
                    return a(e) ? s + (t || r ? "mínútur" : "mínútum") : t ? s + "mínúta" : s + "mínútu";
                case "hh":
                    return a(e) ? s + (t || r ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case "d":
                    return t ? "dagur" : r ? "dag" : "degi";
                case "dd":
                    return a(e) ? t ? s + "dagar" : s + (r ? "daga" : "dögum") : t ? s + "dagur" : s + (r ? "dag" : "degi");
                case "M":
                    return t ? "mánuður" : r ? "mánuð" : "mánuði";
                case "MM":
                    return a(e) ? t ? s + "mánuðir" : s + (r ? "mánuði" : "mánuðum") : t ? s + "mánuður" : s + (r ? "mánuð" : "mánuði");
                case "y":
                    return t || r ? "ár" : "ári";
                case "yy":
                    return a(e) ? s + (t || r ? "ár" : "árum") : s + (t || r ? "ár" : "ári")
                }
            }
            return e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: "klukkustund",
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(144);
        var n = t(1);
        n.datepickerLocale("it", "it", {
            closeText: "Chiudi",
            prevText: "&#x3C;Prec",
            nextText: "Succ&#x3E;",
            currentText: "Oggi",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("it", {
            buttonText: {
                month: "Mese",
                week: "Settimana",
                day: "Giorno",
                list: "Agenda"
            },
            allDayHtml: "Tutto il<br/>giorno",
            eventLimitText: function(e) {
                return "+altri " + e
            },
            noEventsMessage: "Non ci sono eventi da visualizzare"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(146);
        var n = t(1);
        n.datepickerLocale("ja", "ja", {
            closeText: "閉じる",
            prevText: "&#x3C;前",
            nextText: "次&#x3E;",
            currentText: "今日",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            weekHeader: "週",
            dateFormat: "yy/mm/dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "年"
        }),
        n.locale("ja", {
            buttonText: {
                month: "月",
                week: "週",
                day: "日",
                list: "予定リスト"
            },
            allDayText: "終日",
            eventLimitText: function(e) {
                return "他 " + e + " 件"
            },
            noEventsMessage: "イベントが表示されないように"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ja", {
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 HH:mm dddd",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日 HH:mm dddd"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay: "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function(e, a) {
                    switch (a) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    ss: "%d秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(148);
        var n = t(1);
        n.datepickerLocale("ka", "ka", {
            closeText: "დახურვა",
            prevText: "წინა",
            nextText: "შემდეგი",
            currentText: "დღეს",
            monthNames: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
            monthNamesShort: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"],
            dayNames: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
            dayNamesShort: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
            dayNamesMin: ["კვ", "ორ", "სა", "ოთ", "ხუ", "პა", "შა"],
            weekHeader: "კვ",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ka", {
            buttonText: {
                month: "თვე",
                week: "კვირა",
                day: "დღე",
                list: "დღის წესრიგი"
            },
            allDayText: "მთელი დღე",
            eventLimitText: function(e) {
                return "+ კიდევ " + e
            },
            noEventsMessage: "ღონისძიებები არ არის"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ka", {
                months: {
                    standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                },
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
                    },
                    s: "რამდენიმე წამი",
                    ss: "%d წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(150);
        var n = t(1);
        n.datepickerLocale("kk", "kk", {
            closeText: "Жабу",
            prevText: "&#x3C;Алдыңғы",
            nextText: "Келесі&#x3E;",
            currentText: "Бүгін",
            monthNames: ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"],
            monthNamesShort: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шіл", "Там", "Қыр", "Қаз", "Қар", "Жел"],
            dayNames: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
            dayNamesShort: ["жкс", "дсн", "ссн", "срс", "бсн", "жма", "снб"],
            dayNamesMin: ["Жк", "Дс", "Сс", "Ср", "Бс", "Жм", "Сн"],
            weekHeader: "Не",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("kk", {
            buttonText: {
                month: "Ай",
                week: "Апта",
                day: "Күн",
                list: "Күн тәртібі"
            },
            allDayText: "Күні бойы",
            eventLimitText: function(e) {
                return "+ тағы " + e
            },
            noEventsMessage: "Көрсету үшін оқиғалар жоқ"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            };
            return e.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    ss: "%d секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function(e) {
                    var t = e % 10
                      , n = e >= 100 ? 100 : null;
                    return e + (a[e] || a[t] || a[n])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(152);
        var n = t(1);
        n.datepickerLocale("ko", "ko", {
            closeText: "닫기",
            prevText: "이전달",
            nextText: "다음달",
            currentText: "오늘",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            weekHeader: "주",
            dateFormat: "yy. m. d.",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "년"
        }),
        n.locale("ko", {
            buttonText: {
                month: "월",
                week: "주",
                day: "일",
                list: "일정목록"
            },
            allDayText: "종일",
            eventLimitText: "개",
            noEventsMessage: "일정이 없습니다"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                ordinal: function(e, a) {
                    switch (a) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e
                    }
                },
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? "오전" : "오후"
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(154);
        var n = t(1);
        n.datepickerLocale("lb", "lb", {
            closeText: "Fäerdeg",
            prevText: "Zréck",
            nextText: "Weider",
            currentText: "Haut",
            monthNames: ["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mäe", "Abr", "Mee", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg"],
            dayNamesShort: ["Son", "Méi", "Dën", "Mët", "Don", "Fre", "Sam"],
            dayNamesMin: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa"],
            weekHeader: "W",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("lb", {
            buttonText: {
                month: "Mount",
                week: "Woch",
                day: "Dag",
                list: "Terminiwwersiicht"
            },
            allDayText: "Ganzen Dag",
            eventLimitText: "méi",
            noEventsMessage: "Nee Evenementer ze affichéieren"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t, n) {
                var r = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return a ? r[t][0] : r[t][1]
            }
            function t(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            }
            function n(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            }
            function r(e) {
                if (e = parseInt(e, 10),
                isNaN(e))
                    return !1;
                if (e < 0)
                    return !0;
                if (e < 10)
                    return 4 <= e && e <= 7;
                if (e < 100) {
                    var a = e % 10
                      , t = e / 10;
                    return r(0 === a ? t : a)
                }
                if (e < 1e4) {
                    for (; e >= 10; )
                        e /= 10;
                    return r(e)
                }
                return e /= 1e3,
                r(e)
            }
            return e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: t,
                    past: n,
                    s: "e puer Sekonnen",
                    ss: "%d Sekonnen",
                    m: a,
                    mm: "%d Minutten",
                    h: a,
                    hh: "%d Stonnen",
                    d: a,
                    dd: "%d Deeg",
                    M: a,
                    MM: "%d Méint",
                    y: a,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(156);
        var n = t(1);
        n.datepickerLocale("lt", "lt", {
            closeText: "Uždaryti",
            prevText: "&#x3C;Atgal",
            nextText: "Pirmyn&#x3E;",
            currentText: "Šiandien",
            monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
            dayNames: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
            dayNamesShort: ["sek", "pir", "ant", "tre", "ket", "pen", "šeš"],
            dayNamesMin: ["Se", "Pr", "An", "Tr", "Ke", "Pe", "Še"],
            weekHeader: "SAV",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: ""
        }),
        n.locale("lt", {
            buttonText: {
                month: "Mėnuo",
                week: "Savaitė",
                day: "Diena",
                list: "Darbotvarkė"
            },
            allDayText: "Visą dieną",
            eventLimitText: "daugiau",
            noEventsMessage: "Nėra įvykių rodyti"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t, n) {
                return a ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
            }
            function t(e, a, t, n) {
                return a ? r(t)[0] : n ? r(t)[1] : r(t)[2]
            }
            function n(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }
            function r(e) {
                return d[e].split("_")
            }
            function s(e, a, s, d) {
                var i = e + " ";
                return 1 === e ? i + t(e, a, s[0], d) : a ? i + (n(e) ? r(s)[1] : r(s)[0]) : d ? i + r(s)[1] : i + (n(e) ? r(s)[1] : r(s)[2])
            }
            var d = {
                ss: "sekundė_sekundžių_sekundes",
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            };
            return e.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: a,
                    ss: s,
                    m: t,
                    mm: s,
                    h: t,
                    hh: s,
                    d: t,
                    dd: s,
                    M: t,
                    MM: s,
                    y: t,
                    yy: s
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function(e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(158);
        var n = t(1);
        n.datepickerLocale("lv", "lv", {
            closeText: "Aizvērt",
            prevText: "Iepr.",
            nextText: "Nāk.",
            currentText: "Šodien",
            monthNames: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"],
            dayNamesShort: ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
            dayNamesMin: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "Ss"],
            weekHeader: "Ned.",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("lv", {
            buttonText: {
                month: "Mēnesis",
                week: "Nedēļa",
                day: "Diena",
                list: "Dienas kārtība"
            },
            allDayText: "Visu dienu",
            eventLimitText: function(e) {
                return "+vēl " + e
            },
            noEventsMessage: "Nav notikumu"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t) {
                return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1]
            }
            function t(e, t, n) {
                return e + " " + a(s[n], e, t)
            }
            function n(e, t, n) {
                return a(s[n], e, t)
            }
            function r(e, a) {
                return a ? "dažas sekundes" : "dažām sekundēm"
            }
            var s = {
                ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            };
            return e.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: r,
                    ss: t,
                    m: n,
                    mm: t,
                    h: n,
                    hh: t,
                    d: n,
                    dd: t,
                    M: n,
                    MM: t,
                    y: n,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(160);
        var n = t(1);
        n.datepickerLocale("mk", "mk", {
            closeText: "Затвори",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Денес",
            monthNames: ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort: ["Јан", "Фев", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Ное", "Дек"],
            dayNames: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сре", "Чет", "Пет", "Саб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Са"],
            weekHeader: "Сед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("mk", {
            buttonText: {
                month: "Месец",
                week: "Недела",
                day: "Ден",
                list: "График"
            },
            allDayText: "Цел ден",
            eventLimitText: function(e) {
                return "+повеќе " + e
            },
            noEventsMessage: "Нема настани за прикажување"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "после %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    ss: "%d секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    M: "месец",
                    MM: "%d месеци",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var a = e % 10
                      , t = e % 100;
                    return 0 === e ? e + "-ев" : 0 === t ? e + "-ен" : t > 10 && t < 20 ? e + "-ти" : 1 === a ? e + "-ви" : 2 === a ? e + "-ри" : 7 === a || 8 === a ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(162);
        var n = t(1);
        n.datepickerLocale("ms-my", "ms", {
            closeText: "Tutup",
            prevText: "&#x3C;Sebelum",
            nextText: "Selepas&#x3E;",
            currentText: "hari ini",
            monthNames: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
            monthNamesShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
            dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
            dayNamesShort: ["Aha", "Isn", "Sel", "Rab", "kha", "Jum", "Sab"],
            dayNamesMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"],
            weekHeader: "Mg",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ms-my", {
            buttonText: {
                month: "Bulan",
                week: "Minggu",
                day: "Hari",
                list: "Agenda"
            },
            allDayText: "Sepanjang hari",
            eventLimitText: function(e) {
                return "masih ada " + e + " acara"
            },
            noEventsMessage: "Tiada peristiwa untuk dipaparkan"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, a) {
                    return 12 === e && (e = 0),
                    "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
                },
                meridiem: function(e, a, t) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(164);
        var n = t(1);
        n.datepickerLocale("ms", "ms", {
            closeText: "Tutup",
            prevText: "&#x3C;Sebelum",
            nextText: "Selepas&#x3E;",
            currentText: "hari ini",
            monthNames: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
            monthNamesShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
            dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
            dayNamesShort: ["Aha", "Isn", "Sel", "Rab", "kha", "Jum", "Sab"],
            dayNamesMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"],
            weekHeader: "Mg",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ms", {
            buttonText: {
                month: "Bulan",
                week: "Minggu",
                day: "Hari",
                list: "Agenda"
            },
            allDayText: "Sepanjang hari",
            eventLimitText: function(e) {
                return "masih ada " + e + " acara"
            },
            noEventsMessage: "Tiada peristiwa untuk dipaparkan"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, a) {
                    return 12 === e && (e = 0),
                    "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
                },
                meridiem: function(e, a, t) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(166);
        var n = t(1);
        n.datepickerLocale("nb", "nb", {
            closeText: "Lukk",
            prevText: "&#xAB;Forrige",
            nextText: "Neste&#xBB;",
            currentText: "I dag",
            monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            dayNamesShort: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
            dayNames: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
            dayNamesMin: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
            weekHeader: "Uke",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("nb", {
            buttonText: {
                month: "Måned",
                week: "Uke",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dagen",
            eventLimitText: "til",
            noEventsMessage: "Ingen hendelser å vise"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    ss: "%d sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(168);
        var n = t(1);
        n.datepickerLocale("nl-be", "nl-BE", {
            closeText: "Sluiten",
            prevText: "←",
            nextText: "→",
            currentText: "Vandaag",
            monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
            dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("nl-be", {
            buttonText: {
                month: "Maand",
                week: "Week",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dag",
            eventLimitText: "extra",
            noEventsMessage: "Geen evenementen om te laten zien"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
              , t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
              , n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
              , r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(170);
        var n = t(1);
        n.datepickerLocale("nl", "nl", {
            closeText: "Sluiten",
            prevText: "←",
            nextText: "→",
            currentText: "Vandaag",
            monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
            dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            weekHeader: "Wk",
            dateFormat: "dd-mm-yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("nl", {
            buttonText: {
                month: "Maand",
                week: "Week",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dag",
            eventLimitText: "extra",
            noEventsMessage: "Geen evenementen om te laten zien"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
              , t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
              , n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
              , r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, n) {
                    return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(172);
        var n = t(1);
        n.datepickerLocale("nn", "nn", {
            closeText: "Lukk",
            prevText: "&#xAB;Førre",
            nextText: "Neste&#xBB;",
            currentText: "I dag",
            monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            dayNamesShort: ["sun", "mån", "tys", "ons", "tor", "fre", "lau"],
            dayNames: ["sundag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"],
            dayNamesMin: ["su", "må", "ty", "on", "to", "fr", "la"],
            weekHeader: "Veke",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("nn", {
            buttonText: {
                month: "Månad",
                week: "Veke",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Heile dagen",
            eventLimitText: "til",
            noEventsMessage: "Ingen hendelser å vise"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    ss: "%d sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(174);
        var n = t(1);
        n.datepickerLocale("pl", "pl", {
            closeText: "Zamknij",
            prevText: "&#x3C;Poprzedni",
            nextText: "Następny&#x3E;",
            currentText: "Dziś",
            monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort: ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
            dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort: ["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
            dayNamesMin: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
            weekHeader: "Tydz",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("pl", {
            buttonText: {
                month: "Miesiąc",
                week: "Tydzień",
                day: "Dzień",
                list: "Plan dnia"
            },
            allDayText: "Cały dzień",
            eventLimitText: "więcej",
            noEventsMessage: "Brak wydarzeń do wyświetlenia"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
            }
            function t(e, t, n) {
                var r = e + " ";
                switch (n) {
                case "ss":
                    return r + (a(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return r + (a(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return r + (a(e) ? "godziny" : "godzin");
                case "MM":
                    return r + (a(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return r + (a(e) ? "lata" : "lat")
                }
            }
            var n = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
              , r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
            return e.defineLocale("pl", {
                months: function(e, a) {
                    return e ? "" === a ? "(" + r[e.month()] + "|" + n[e.month()] + ")" : /D MMMM/.test(a) ? r[e.month()] : n[e.month()] : n
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                        }
                    },
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: t,
                    y: "rok",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(176);
        var n = t(1);
        n.datepickerLocale("pt-br", "pt-BR", {
            closeText: "Fechar",
            prevText: "&#x3C;Anterior",
            nextText: "Próximo&#x3E;",
            currentText: "Hoje",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("pt-br", {
            buttonText: {
                month: "Mês",
                week: "Semana",
                day: "Dia",
                list: "Compromissos"
            },
            allDayText: "dia inteiro",
            eventLimitText: function(e) {
                return "mais +" + e
            },
            noEventsMessage: "Não há eventos para mostrar"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("pt-br", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrás",
                    s: "poucos segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(178);
        var n = t(1);
        n.datepickerLocale("pt", "pt", {
            closeText: "Fechar",
            prevText: "Anterior",
            nextText: "Seguinte",
            currentText: "Hoje",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            weekHeader: "Sem",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("pt", {
            buttonText: {
                month: "Mês",
                week: "Semana",
                day: "Dia",
                list: "Agenda"
            },
            allDayText: "Todo o dia",
            eventLimitText: "mais",
            noEventsMessage: "Não há eventos para mostrar"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("pt", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(180);
        var n = t(1);
        n.datepickerLocale("ro", "ro", {
            closeText: "Închide",
            prevText: "&#xAB; Luna precedentă",
            nextText: "Luna următoare &#xBB;",
            currentText: "Azi",
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
            dayNamesMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            weekHeader: "Săpt",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ro", {
            buttonText: {
                prev: "precedentă",
                next: "următoare",
                month: "Lună",
                week: "Săptămână",
                day: "Zi",
                list: "Agendă"
            },
            allDayText: "Toată ziua",
            eventLimitText: function(e) {
                return "+alte " + e
            },
            noEventsMessage: "Nu există evenimente de afișat"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t) {
                var n = {
                    ss: "secunde",
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    MM: "luni",
                    yy: "ani"
                }
                  , r = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "),
                e + r + n[t]
            }
            return e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    ss: a,
                    m: "un minut",
                    mm: a,
                    h: "o oră",
                    hh: a,
                    d: "o zi",
                    dd: a,
                    M: "o lună",
                    MM: a,
                    y: "un an",
                    yy: a
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(182);
        var n = t(1);
        n.datepickerLocale("ru", "ru", {
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("ru", {
            buttonText: {
                month: "Месяц",
                week: "Неделя",
                day: "День",
                list: "Повестка дня"
            },
            allDayText: "Весь день",
            eventLimitText: function(e) {
                return "+ ещё " + e
            },
            noEventsMessage: "Нет событий для отображения"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a) {
                var t = e.split("_");
                return a % 10 == 1 && a % 100 != 11 ? t[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? t[1] : t[2]
            }
            function t(e, t, n) {
                var r = {
                    ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === n ? t ? "минута" : "минуту" : e + " " + a(r[n], +e)
            }
            var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            return e.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., H:mm",
                    LLLL: "dddd, D MMMM YYYY г., H:mm"
                },
                calendar: {
                    sameDay: "[Сегодня в] LT",
                    nextDay: "[Завтра в] LT",
                    lastDay: "[Вчера в] LT",
                    nextWeek: function(e) {
                        if (e.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd [в] LT"
                        }
                    },
                    lastWeek: function(e) {
                        if (e.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    ss: t,
                    m: t,
                    mm: t,
                    h: "час",
                    hh: t,
                    d: "день",
                    dd: t,
                    M: "месяц",
                    MM: t,
                    y: "год",
                    yy: t
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function(e, a, t) {
                    return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(e, a) {
                    switch (a) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(184);
        var n = t(1);
        n.datepickerLocale("sk", "sk", {
            closeText: "Zavrieť",
            prevText: "&#x3C;Predchádzajúci",
            nextText: "Nasledujúci&#x3E;",
            currentText: "Dnes",
            monthNames: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Str", "Štv", "Pia", "Sob"],
            dayNamesMin: ["Ne", "Po", "Ut", "St", "Št", "Pia", "So"],
            weekHeader: "Ty",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("sk", {
            buttonText: {
                month: "Mesiac",
                week: "Týždeň",
                day: "Deň",
                list: "Rozvrh"
            },
            allDayText: "Celý deň",
            eventLimitText: function(e) {
                return "+ďalšie: " + e
            },
            noEventsMessage: "Žiadne akcie na zobrazenie"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e) {
                return e > 1 && e < 5
            }
            function t(e, t, n, r) {
                var s = e + " ";
                switch (n) {
                case "s":
                    return t || r ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return t || r ? s + (a(e) ? "sekundy" : "sekúnd") : s + "sekundami";
                case "m":
                    return t ? "minúta" : r ? "minútu" : "minútou";
                case "mm":
                    return t || r ? s + (a(e) ? "minúty" : "minút") : s + "minútami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? s + (a(e) ? "hodiny" : "hodín") : s + "hodinami";
                case "d":
                    return t || r ? "deň" : "dňom";
                case "dd":
                    return t || r ? s + (a(e) ? "dni" : "dní") : s + "dňami";
                case "M":
                    return t || r ? "mesiac" : "mesiacom";
                case "MM":
                    return t || r ? s + (a(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                case "y":
                    return t || r ? "rok" : "rokom";
                case "yy":
                    return t || r ? s + (a(e) ? "roky" : "rokov") : s + "rokmi"
                }
            }
            var n = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
              , r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("sk", {
                months: n,
                monthsShort: r,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(186);
        var n = t(1);
        n.datepickerLocale("sl", "sl", {
            closeText: "Zapri",
            prevText: "&#x3C;Prejšnji",
            nextText: "Naslednji&#x3E;",
            currentText: "Trenutni",
            monthNames: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
            dayNamesShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
            dayNamesMin: ["Ne", "Po", "To", "Sr", "Če", "Pe", "So"],
            weekHeader: "Teden",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("sl", {
            buttonText: {
                month: "Mesec",
                week: "Teden",
                day: "Dan",
                list: "Dnevni red"
            },
            allDayText: "Ves dan",
            eventLimitText: "več",
            noEventsMessage: "Ni dogodkov za prikaz"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a, t, n) {
                var r = e + " ";
                switch (t) {
                case "s":
                    return a || n ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return r += 1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || n ? "sekundi" : "sekundah" : e < 5 ? a || n ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return a ? "ena minuta" : "eno minuto";
                case "mm":
                    return r += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || n ? "minuti" : "minutama" : e < 5 ? a || n ? "minute" : "minutami" : a || n ? "minut" : "minutami";
                case "h":
                    return a ? "ena ura" : "eno uro";
                case "hh":
                    return r += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || n ? "uri" : "urama" : e < 5 ? a || n ? "ure" : "urami" : a || n ? "ur" : "urami";
                case "d":
                    return a || n ? "en dan" : "enim dnem";
                case "dd":
                    return r += 1 === e ? a || n ? "dan" : "dnem" : 2 === e ? a || n ? "dni" : "dnevoma" : a || n ? "dni" : "dnevi";
                case "M":
                    return a || n ? "en mesec" : "enim mesecem";
                case "MM":
                    return r += 1 === e ? a || n ? "mesec" : "mesecem" : 2 === e ? a || n ? "meseca" : "mesecema" : e < 5 ? a || n ? "mesece" : "meseci" : a || n ? "mesecev" : "meseci";
                case "y":
                    return a || n ? "eno leto" : "enim letom";
                case "yy":
                    return r += 1 === e ? a || n ? "leto" : "letom" : 2 === e ? a || n ? "leti" : "letoma" : e < 5 ? a || n ? "leta" : "leti" : a || n ? "let" : "leti"
                }
            }
            return e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: a,
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(188);
        var n = t(1);
        n.datepickerLocale("sq", "sq", {
            closeText: "mbylle",
            prevText: "&#x3C;mbrapa",
            nextText: "Përpara&#x3E;",
            currentText: "sot",
            monthNames: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
            monthNamesShort: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"],
            dayNames: ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtune"],
            dayNamesShort: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
            dayNamesMin: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
            weekHeader: "Ja",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("sq", {
            buttonText: {
                month: "Muaj",
                week: "Javë",
                day: "Ditë",
                list: "Listë"
            },
            allDayHtml: "Gjithë<br/>ditën",
            eventLimitText: function(e) {
                return "+më tepër " + e
            },
            noEventsMessage: "Nuk ka evente për të shfaqur"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    ss: "%d sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(190);
        var n = t(1);
        n.datepickerLocale("sr-cyrl", "sr", {
            closeText: "Затвори",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Данас",
            monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            weekHeader: "Сед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("sr-cyrl", {
            buttonText: {
                prev: "Претходна",
                next: "следећи",
                month: "Месец",
                week: "Недеља",
                day: "Дан",
                list: "Планер"
            },
            allDayText: "Цео дан",
            eventLimitText: function(e) {
                return "+ још " + e
            },
            noEventsMessage: "Нема догађаја за приказ"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                words: {
                    ss: ["секунда", "секунде", "секунди"],
                    m: ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                },
                correctGrammaticalCase: function(e, a) {
                    return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
                },
                translate: function(e, t, n) {
                    var r = a.words[n];
                    return 1 === n.length ? t ? r[0] : r[1] : e + " " + a.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    ss: a.translate,
                    m: a.translate,
                    mm: a.translate,
                    h: a.translate,
                    hh: a.translate,
                    d: "дан",
                    dd: a.translate,
                    M: "месец",
                    MM: a.translate,
                    y: "годину",
                    yy: a.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(192);
        var n = t(1);
        n.datepickerLocale("sr", "sr-SR", {
            closeText: "Zatvori",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Danas",
            monthNames: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            weekHeader: "Sed",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("sr", {
            buttonText: {
                prev: "Prethodna",
                next: "Sledeći",
                month: "Mеsеc",
                week: "Nеdеlja",
                day: "Dan",
                list: "Planеr"
            },
            allDayText: "Cеo dan",
            eventLimitText: function(e) {
                return "+ još " + e
            },
            noEventsMessage: "Nеma događaja za prikaz"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                words: {
                    ss: ["sekunda", "sekunde", "sekundi"],
                    m: ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, a) {
                    return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
                },
                translate: function(e, t, n) {
                    var r = a.words[n];
                    return 1 === n.length ? t ? r[0] : r[1] : e + " " + a.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    ss: a.translate,
                    m: a.translate,
                    mm: a.translate,
                    h: a.translate,
                    hh: a.translate,
                    d: "dan",
                    dd: a.translate,
                    M: "mesec",
                    MM: a.translate,
                    y: "godinu",
                    yy: a.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(194);
        var n = t(1);
        n.datepickerLocale("sv", "sv", {
            closeText: "Stäng",
            prevText: "&#xAB;Förra",
            nextText: "Nästa&#xBB;",
            currentText: "Idag",
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNamesShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
            dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesMin: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            weekHeader: "Ve",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("sv", {
            buttonText: {
                month: "Månad",
                week: "Vecka",
                day: "Dag",
                list: "Program"
            },
            allDayText: "Heldag",
            eventLimitText: "till",
            noEventsMessage: "Inga händelser att visa"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    ss: "%d sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
                ordinal: function(e) {
                    var a = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === a ? "a" : 2 === a ? "a" : "e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(196);
        var n = t(1);
        n.datepickerLocale("th", "th", {
            closeText: "ปิด",
            prevText: "&#xAB;&#xA0;ย้อน",
            nextText: "ถัดไป&#xA0;&#xBB;",
            currentText: "วันนี้",
            monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("th", {
            buttonText: {
                month: "เดือน",
                week: "สัปดาห์",
                day: "วัน",
                list: "แผนงาน"
            },
            allDayText: "ตลอดวัน",
            eventLimitText: "เพิ่มเติม",
            noEventsMessage: "ไม่มีกิจกรรมที่จะแสดง"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    ss: "%d วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(198);
        var n = t(1);
        n.datepickerLocale("tr", "tr", {
            closeText: "kapat",
            prevText: "&#x3C;geri",
            nextText: "ileri&#x3e",
            currentText: "bugün",
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            dayNamesMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            weekHeader: "Hf",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("tr", {
            buttonText: {
                next: "ileri",
                month: "Ay",
                week: "Hafta",
                day: "Gün",
                list: "Ajanda"
            },
            allDayText: "Tüm gün",
            eventLimitText: "daha fazla",
            noEventsMessage: "Herhangi bir etkinlik görüntülemek için"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            var a = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            return e.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[gelecek] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    ss: "%d saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal: function(e) {
                    if (0 === e)
                        return e + "'ıncı";
                    var t = e % 10
                      , n = e % 100 - t
                      , r = e >= 100 ? 100 : null;
                    return e + (a[t] || a[n] || a[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(200);
        var n = t(1);
        n.datepickerLocale("uk", "uk", {
            closeText: "Закрити",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Сьогодні",
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
            dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Тиж",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("uk", {
            buttonText: {
                month: "Місяць",
                week: "Тиждень",
                day: "День",
                list: "Порядок денний"
            },
            allDayText: "Увесь день",
            eventLimitText: function(e) {
                return "+ще " + e + "..."
            },
            noEventsMessage: "Немає подій для відображення"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            function a(e, a) {
                var t = e.split("_");
                return a % 10 == 1 && a % 100 != 11 ? t[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? t[1] : t[2]
            }
            function t(e, t, n) {
                var r = {
                    ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                    mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: t ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + a(r[n], +e)
            }
            function n(e, a) {
                var t = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return e ? t[/(\[[ВвУу]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative
            }
            function r(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            return e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: n,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: r("[Сьогодні "),
                    nextDay: r("[Завтра "),
                    lastDay: r("[Вчора "),
                    nextWeek: r("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return r("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return r("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    ss: t,
                    m: t,
                    mm: t,
                    h: "годину",
                    hh: t,
                    d: "день",
                    dd: t,
                    M: "місяць",
                    MM: t,
                    y: "рік",
                    yy: t
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e, a, t) {
                    return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(e, a) {
                    switch (a) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(202);
        var n = t(1);
        n.datepickerLocale("vi", "vi", {
            closeText: "Đóng",
            prevText: "&#x3C;Trước",
            nextText: "Tiếp&#x3E;",
            currentText: "Hôm nay",
            monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekHeader: "Tu",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }),
        n.locale("vi", {
            buttonText: {
                month: "Tháng",
                week: "Tuần",
                day: "Ngày",
                list: "Lịch biểu"
            },
            allDayText: "Cả ngày",
            eventLimitText: function(e) {
                return "+ thêm " + e
            },
            noEventsMessage: "Không có sự kiện để hiển thị"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function(e, a, t) {
                    return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    ss: "%d giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(204);
        var n = t(1);
        n.datepickerLocale("zh-cn", "zh-CN", {
            closeText: "关闭",
            prevText: "&#x3C;上月",
            nextText: "下月&#x3E;",
            currentText: "今天",
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            weekHeader: "周",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "年"
        }),
        n.locale("zh-cn", {
            buttonText: {
                month: "月",
                week: "周",
                day: "日",
                list: "日程"
            },
            allDayText: "全天",
            eventLimitText: function(e) {
                return "另外 " + e + " 个"
            },
            noEventsMessage: "没有事件显示"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah点mm分",
                    LLLL: "YYYY年M月D日ddddAh点mm分",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, a) {
                    return 12 === e && (e = 0),
                    "凌晨" === a || "早上" === a || "上午" === a ? e : "下午" === a || "晚上" === a ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, a, t) {
                    var n = 100 * e + a;
                    return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, a) {
                    switch (a) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    ss: "%d 秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(206);
        var n = t(1);
        n.datepickerLocale("zh-tw", "zh-TW", {
            closeText: "關閉",
            prevText: "&#x3C;上月",
            nextText: "下月&#x3E;",
            currentText: "今天",
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            weekHeader: "周",
            dateFormat: "yy/mm/dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "年"
        }),
        n.locale("zh-tw", {
            buttonText: {
                month: "月",
                week: "週",
                day: "天",
                list: "活動列表"
            },
            allDayText: "整天",
            eventLimitText: "顯示更多",
            noEventsMessage: "没有任何活動"
        })
    }
    , function(e, a, t) {
        !function(e, a) {
            a(t(0))
        }(0, function(e) {
            return e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, a) {
                    return 12 === e && (e = 0),
                    "凌晨" === a || "早上" === a || "上午" === a ? e : "中午" === a ? e >= 11 ? e : e + 12 : "下午" === a || "晚上" === a ? e + 12 : void 0
                },
                meridiem: function(e, a, t) {
                    var n = 100 * e + a;
                    return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, a) {
                    switch (a) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        })
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, a, t) {
        t(65),
        t(67),
        t(69),
        t(71),
        t(73),
        t(75),
        t(77),
        t(79),
        t(81),
        t(83),
        t(85),
        t(87),
        t(89),
        t(91),
        t(93),
        t(95),
        t(97),
        t(99),
        t(101),
        t(103),
        t(105),
        t(107),
        t(109),
        t(111),
        t(113),
        t(115),
        t(117),
        t(119),
        t(121),
        t(123),
        t(125),
        t(127),
        t(129),
        t(131),
        t(133),
        t(135),
        t(137),
        t(139),
        t(141),
        t(143),
        t(145),
        t(147),
        t(149),
        t(151),
        t(153),
        t(155),
        t(157),
        t(159),
        t(161),
        t(163),
        t(165),
        t(167),
        t(169),
        t(171),
        t(173),
        t(175),
        t(177),
        t(179),
        t(181),
        t(183),
        t(185),
        t(187),
        t(189),
        t(191),
        t(193),
        t(195),
        t(197),
        t(199),
        t(201),
        t(203),
        t(205),
        e.exports = t(433)
    }
    , function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = t(0)
          , r = t(1);
        n.locale("en"),
        r.locale("en"),
        window.jQuery.datepicker && window.jQuery.datepicker.setDefaults(window.jQuery.datepicker.regional[""])
    }
    ])
});
if (typeof PNVS !== 'object') {
    var PNVS = {}
}

PNVS.appointment = {
    yesterday: '',
    maxDateInFuture: '',
    pickerAppointment: null,
    pickerWedding: null,
    createAppointmentButtonContainer: jQuery('.create_appointment_button'),
    createAppointmentFormContainer: jQuery('#create_appointment_form'),
    desiredDateRootContainer: jQuery('#desired_date_root'),
    storesThatCloseOnSunday: ['118', //Castellon
    '197', //Marseille
    '1288', //London flagship
    '2115', //Milano flagship
    '1749'//New York flagship
    ],
    initDatepicker: function() {
        let yesterday = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24);
        let maxDateInFuture = new Date((new Date()).setYear((new Date()).getFullYear() + 2));
        this.yesterday = yesterday;
        this.maxDateInFuture = maxDateInFuture;
    },
    disableSundaysDependingOnStore: function() {
        let selectedStore = this.createAppointmentFormContainer.find('.store-container.radio_seleccionado');
        if (selectedStore.length) {
            let storeID = selectedStore.data('target');
            if (storeID && storeID.length > 5) {
                //min length => 'store' equals to 5
                storeID = storeID.replace('store', '');
                let root = jQuery('#desired_date_root');
                if (this.storesThatCloseOnSunday.indexOf(storeID) !== -1) {
                    let sun = jQuery.fn.pickadate.defaults.firstDay === 1 ? 7 : 1;
                    let seventhDay = root.find('td:nth-child(' + sun + ') > div');
                    seventhDay.addClass('picker__day--disabled');
                    seventhDay.addClass('sunday');
                } else {
                    let sunday = root.find('.sunday');
                    if (!sunday.hasClass('picker__day--infocus')) {
                        sunday.removeClass('picker__day--disabled');
                    }
                    sunday.removeClass('sunday');
                }
            }
        }
    },
    unsetAppointmentDateIfWeddingIsBefore: function(weddingDate) {
        if (weddingDate === 'Invalid Date') {
            return;
        }

        let appointmentPicker = this.pickerAppointment.pickadate('picker');
        let appointment = appointmentPicker.get('value');
        let parts = appointment.split('/');
        let appointmentDate = new Date(parts[2],parts[1] - 1,parts[0]);
        let previousDisabled = this.desiredDateRootContainer.find('.tmpDisabled');

        if (appointmentDate >= weddingDate) {
            appointmentPicker.clear();
        }

        previousDisabled.removeClass('picker__day--disabled');
        previousDisabled.removeClass('tmpDisabled');
    },
    disableAppointmentsBeforeWedding: function() {
        if (!this.pickerWedding) {
            return;
        }

        let picker = this.pickerWedding.pickadate('picker');
        let wedding = picker.get('value');

        if (!wedding) {
            return;
        }

        let parts = wedding.split('/');
        let weddingDate = new Date(parts[2],parts[1] - 1,parts[0]);

        for (let d = weddingDate; d <= this.maxDateInFuture; d.setDate(d.getDate() + 1)) {
            let dateToDisable = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear();
            let selectorDisable = this.desiredDateRootContainer.find('div[aria-label="' + dateToDisable + '"]');
            selectorDisable.addClass('picker__day--disabled');
            selectorDisable.addClass('tmpDisabled');
        }
    },
    initHandlers: function() {
        let that = this;
        let create_appointment = this.createAppointmentButtonContainer;

        jQuery(document).on('click', 'input[name="store"]', function() {
            jQuery('input[name="store"]').parent().removeClass("radio_seleccionado");
            jQuery(this).parent().addClass("radio_seleccionado");
            var store = jQuery(this).parent().find('.store-title').text().trim();
            if (store !== 'undefined' && store !== '') {
                dataLayer.push({
                    'event': 'Pide_Cita',
                    'eAction': 'pide_cita_tienda',
                    'eLabel': store

                });
            }

            let shop = jQuery(this).parent().data('target').replace('store', '');
            that.showShopMessages(shop);
            that.disableEnableSubmit();
        });

        let delay = (function() {
            let timer = 0;
            return function(callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            }
            ;
        }
        )();

        create_appointment.on('click', function(e) {
            e.preventDefault();
            that.subscribe();
        });
    },
    disableEnableSubmit: function() {
        this.createAppointmentButtonContainer.prop('disabled', (jQuery('input[name=store]:checked', this.createAppointmentFormContainer).val() === undefined));
    },
    subscribe: function() {
        if (appointmentForm.validator.validate() && jQuery.trim(jQuery('#block_stores'))) {
            let container = this.createAppointmentFormContainer;
            let createAppointmentButton = this.createAppointmentButtonContainer;
            createAppointmentButton.attr('disabled', 'disabled');
            jQuery.ajax({
                url: container.attr('action'),
                dataType: 'json',
                type: 'post',
                data: container.serialize() + '&isAjax=1',
                success: function(data) {
                    window.scrollTo(0, 0);
                    createAppointmentButton.removeAttr('disabled');
                    if (data.status) {
                        jQuery(".storelocator").html(data.message);
                    } else {
                        jQuery('#storelocator-error-modal').modal();
                        jQuery("#storelocator-error-msg").html(data.message);
                        jQuery('.appointment #appointment_summary #desired_date_info').html('');
                        jQuery('.i4storelocator-appointment-index #city').trigger('change');
                    }
                }
            });
        }
    },
    showShopMessages: function(shop) {
        let messages = jQuery('.shop-message.shop' + shop);
        if (messages.length < 1)
            return;
        this.showMessageRecursive(messages, 0);
    },
    showMessageRecursive: function(messages, index) {
        let that = this;
        let message = jQuery(messages[index]);
        let closeMsg = message.find('.close-msg');
        jQuery('#shop-messages').show();
        message.slideDown();
        closeMsg.click(function() {
            closeMsg.unbind('click');
            message.slideUp(200, function() {
                let newIndex = index + 1;
                if (newIndex < messages.length) {
                    that.showMessageRecursive(messages, newIndex);
                } else if (newIndex === messages.length) {
                    jQuery('#shop-messages').hide();
                }
            });
        });
    },
    init: function() {
        this.initHandlers();
        this.initDatepicker();
    }
};

PNVS.appointment.init();
// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    var slice = Array.prototype.slice;
    // save ref to original slice()
    var splice = Array.prototype.splice;
    // save ref to original slice()

    var defaults = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: 'is-sticky',
        wrapperClassName: 'sticky-wrapper',
        center: false,
        getWidthFrom: '',
        widthFromWrapper: true,
        // works only when .getWidthFrom is empty
        responsiveWidth: false,
        zIndex: 'inherit'
    }
      , $window = $(window)
      , $document = $(document)
      , sticked = []
      , windowHeight = $window.height()
      , scroller = function() {
        var scrollTop = $window.scrollTop()
          , documentHeight = $document.height()
          , dwh = documentHeight - windowHeight
          , extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

        for (var i = 0, l = sticked.length; i < l; i++) {
            var s = sticked[i]
              , elementTop = s.stickyWrapper.offset().top
              , etse = elementTop - s.topSpacing - extra;

            //update height in case of dynamic content
            s.stickyWrapper.css('height', s.stickyElement.outerHeight());

            if (scrollTop <= etse) {
                if (s.currentTop !== null) {
                    s.stickyElement.css({
                        'width': '',
                        'position': '',
                        'top': '',
                        'z-index': ''
                    });
                    s.stickyElement.parent().removeClass(s.className);
                    s.stickyElement.trigger('sticky-end', [s]);
                    s.currentTop = null;
                }
            } else {
                var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                if (newTop < 0) {
                    newTop = newTop + s.topSpacing;
                } else {
                    newTop = s.topSpacing;
                }
                if (s.currentTop !== newTop) {
                    var newWidth;
                    if (s.getWidthFrom) {
                        padding = s.stickyElement.innerWidth() - s.stickyElement.width();
                        newWidth = $(s.getWidthFrom).width() - padding || null;
                    } else if (s.widthFromWrapper) {
                        newWidth = s.stickyWrapper.width();
                    }
                    if (newWidth == null) {
                        newWidth = s.stickyElement.width();
                    }
                    s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop).css('z-index', s.zIndex);

                    s.stickyElement.parent().addClass(s.className);

                    if (s.currentTop === null) {
                        s.stickyElement.trigger('sticky-start', [s]);
                    } else {
                        // sticky is started but it have to be repositioned
                        s.stickyElement.trigger('sticky-update', [s]);
                    }

                    if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
                        // just reached bottom || just started to stick but bottom is already reached
                        s.stickyElement.trigger('sticky-bottom-reached', [s]);
                    } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
                        // sticky is started && sticked at topSpacing && overflowing from top just finished
                        s.stickyElement.trigger('sticky-bottom-unreached', [s]);
                    }

                    s.currentTop = newTop;
                }

                // Check if sticky has reached end of container and stop sticking
                var stickyWrapperContainer = s.stickyWrapper.parent();
                var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

                if (unstick) {
                    s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0).css('z-index', '');
                } else {
                    s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '').css('z-index', s.zIndex);
                }
            }
        }
    }
      , resizer = function() {
        windowHeight = $window.height();

        for (var i = 0, l = sticked.length; i < l; i++) {
            var s = sticked[i];
            var newWidth = null;
            if (s.getWidthFrom) {
                if (s.responsiveWidth) {
                    newWidth = $(s.getWidthFrom).width();
                }
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth != null) {
                s.stickyElement.css('width', newWidth);
            }
        }
    }
      , methods = {
        init: function(options) {
            return this.each(function() {
                var o = $.extend({}, defaults, options);
                var stickyElement = $(this);

                var stickyId = stickyElement.attr('id');
                var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
                var wrapper = $('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);

                stickyElement.wrapAll(function() {
                    if ($(this).parent("#" + wrapperId).length == 0) {
                        return wrapper;
                    }
                });

                var stickyWrapper = stickyElement.parent();

                if (o.center) {
                    stickyWrapper.css({
                        width: stickyElement.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    });
                }

                if (stickyElement.css("float") === "right") {
                    stickyElement.css({
                        "float": "none"
                    }).parent().css({
                        "float": "right"
                    });
                }

                o.stickyElement = stickyElement;
                o.stickyWrapper = stickyWrapper;
                o.currentTop = null;

                sticked.push(o);

                methods.setWrapperHeight(this);
                methods.setupChangeListeners(this);
            });
        },

        setWrapperHeight: function(stickyElement) {
            var element = $(stickyElement);
            var stickyWrapper = element.parent();
            if (stickyWrapper) {
                stickyWrapper.css('height', element.outerHeight());
            }
        },

        setupChangeListeners: function(stickyElement) {
            if (window.MutationObserver) {
                var mutationObserver = new window.MutationObserver(function(mutations) {
                    if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
                        methods.setWrapperHeight(stickyElement);
                    }
                }
                );
                mutationObserver.observe(stickyElement, {
                    subtree: true,
                    childList: true
                });
            } else {
                if (window.addEventListener) {
                    stickyElement.addEventListener('DOMNodeInserted', function() {
                        methods.setWrapperHeight(stickyElement);
                    }, false);
                    stickyElement.addEventListener('DOMNodeRemoved', function() {
                        methods.setWrapperHeight(stickyElement);
                    }, false);
                } else if (window.attachEvent) {
                    stickyElement.attachEvent('onDOMNodeInserted', function() {
                        methods.setWrapperHeight(stickyElement);
                    });
                    stickyElement.attachEvent('onDOMNodeRemoved', function() {
                        methods.setWrapperHeight(stickyElement);
                    });
                }
            }
        },
        update: scroller,
        unstick: function(options) {
            return this.each(function() {
                var that = this;
                var unstickyElement = $(that);

                var removeIdx = -1;
                var i = sticked.length;
                while (i-- > 0) {
                    if (sticked[i].stickyElement.get(0) === that) {
                        splice.call(sticked, i, 1);
                        removeIdx = i;
                    }
                }
                if (removeIdx !== -1) {
                    unstickyElement.unwrap();
                    unstickyElement.css({
                        'width': '',
                        'position': '',
                        'top': '',
                        'float': '',
                        'z-index': ''
                    });
                }
            });
        }
    };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.sticky = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    }
    ;

    $.fn.unstick = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.unstick.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    }
    ;
    $(function() {
        setTimeout(scroller, 0);
    });
}));

if (typeof PNVS !== 'object') {
    var PNVS = {}
}

PNVS.appointments = {
    headerHeight: jQuery('.header-box').height(),
    summary: jQuery('.summary-container'),
    scrolling: false,
    contentSections: jQuery('.c-section'),
    verticalNavigation: jQuery('.cd-vertical-nav'),
    navigationItems: jQuery('.cd-vertical-nav').find('a'),
    verticalEdition: jQuery('.edit'),
    editionItems: jQuery('.edit').find('a'),
    navTrigger: jQuery('.cd-nav-trigger'),
    toAppointmentForm: jQuery('.storelocator'),
    toAppointmentFormOnView: jQuery('.to-appointment-form'),
    scrollArrow: jQuery('.cd-scroll-down'),
    language: jQuery('#language'),
    filterStores: jQuery('#filterStore'),
    weddingCalendar: jQuery('#wedding-calendar'),
    appointmentCalendar: jQuery('#appointment-calendar'),
    storesThatCloseOnSunday: ['ES0111', //Castellon
    'FR0001', //Marseille
    'GB0500', //London flagship
    'IT0987', //Milano flagship
    'US2600', //New York flagship
    ],

    init: function() {
        this.initEvents();
    },
    initEvents: function() {

        var that = this;
        //smooth scroll to the selected section
        this.verticalNavigation.on('click', 'a', function(event) {
            event.preventDefault();
            if (!jQuery(jQuery(this.hash).selector).is(':visible')) {
                jQuery(jQuery(this.hash).selector).fadeIn(500);
            }
            that.smoothScroll(jQuery(this.hash));
            that.verticalNavigation.removeClass('open');
        });

        this.verticalEdition.on('click', 'a', function(event) {
            event.preventDefault();
            if (!jQuery(jQuery(this.hash).selector).is(':visible')) {
                jQuery(jQuery(this.hash).selector).fadeIn(500);
            }
            that.smoothScroll(jQuery(this.hash));
            that.verticalEdition.removeClass('open');
        });

        //smooth scroll to appointment section
        this.toAppointmentForm.on('click', '.to-appointment', function(event) {
            event.preventDefault();
            var city = jQuery(this).parent().parent().find('.store-information-address span:first').html() + " " + jQuery(this).parent().parent().find('span.city').html();
            dataLayer.push({
                'event': 'Localiza_tienda',
                'eAction': 'pide cita',
                'eLabel': jQuery(this).parent().parent().find('.store-information-name').html() + " " + city
            });
            var appointmentSection = jQuery('#appointment-section');
            appointmentSection.fadeIn(500);
            that.smoothScrollTo(appointmentSection);
            that.verticalNavigation.removeClass('open');
            that.createInputs(jQuery(this).attr('data-store-id'));
            that.calendars(jQuery(this).attr('data-store-id'));

            let data = that.getStoreData(jQuery(this).attr('data-store-id'));
            let url = jQuery('#appointment-form-filter').data('url');
            jQuery.ajax({
                url: url,
                method: 'POST',
                data: data,
                dataType: 'html',
                success: function(storeList) {
                    jQuery(".storelocator-messages").html(storeList);
                    let shop = data.idmovex_dec;
                    that.showShopMessages(shop);
                }
            });

        });

        //Go to any section from any div that has the class "edit" in "Your summary"
        this.summary.on('click', '.edit', function(event) {
            event.preventDefault();
            var dataAttr = jQuery(this).attr('data-go-to');
            if (typeof dataAttr !== typeof undefined && dataAttr !== false) {
                // Element has this attribute
                var sectionTo = jQuery(dataAttr);
                that.smoothScrollTo(sectionTo);
            }
        });

        this.toAppointmentFormOnView.on('click', function(event) {
            event.preventDefault();
            dataLayer.push({
                'event': 'Ficha tienda',
                'eAction': 'pide cita',
                'eLabel': jQuery('.store .store-name').html() + " " + jQuery('.store .store-information-address span:first').html() + " " + jQuery('.store .store-information-address span.city').html()
            });
            var appointmentSection = jQuery('#appointment-section');
            appointmentSection.fadeIn(500);
            that.smoothScrollTo(appointmentSection);
            that.verticalNavigation.removeClass('open');
            that.calendars(jQuery('input[name="store"]').val());

            let data = that.getStoreData(jQuery('input[name="store"]').val());
            let url = jQuery('#appointment-form-filter').data('url');
            jQuery.ajax({
                url: url,
                method: 'POST',
                data: data,
                dataType: 'html',
                success: function(storeList) {
                    jQuery(".storelocator-messages").html(storeList);
                    let shop = data.idmovex_dec;
                    that.showShopMessages(shop);
                }
            });

        });

        this.filterStores.on('change', function() {
            var storename = jQuery('.summary-container').find('.store-name');
            var storeaddress = jQuery('.summary-container').find('.store-address');

            if (jQuery(this).val() != '') {
                storename.empty().append('<label>' + jQuery(this).find('option:selected').data('nombre') + '</label>').hide().fadeIn(500);
                storeaddress.empty().text(jQuery(this).find('option:selected').data('direccion')).hide().fadeIn(500);
            } else {
                storename.find('label').empty();
                storeaddress.empty();
            }
            that.createInputsOnWidget(jQuery(this).find('option:selected'));

        });

        jQuery(".first-name-input").on('keydown keyup', function() {
            that.summary.find('.first-name-value').empty().append(jQuery(this).val())
        });
        jQuery(".last-name-input").on('keydown keyup', function() {
            that.summary.find('.last-name-value').empty().append(jQuery(this).val())
        });
        jQuery(".phone-input").on('keydown keyup', function() {
            that.summary.find('.phone-value').empty().append(jQuery(this).val())
        });
        jQuery(".email-input").on('keydown keyup', function() {
            that.summary.find('.email-value').empty().append(jQuery(this).val())
        });
    },
    createInputs: function(storeId) {
        var jsonData = jQuery('.store' + storeId).html().replace(/href="(.*?)"/, "href='$1'");
        var jsonParseData = JSON.parse(jsonData);

        jQuery('.store-data').empty();
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][idmovex]" value="' + jsonParseData.idmovex + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][city]" value="' + jsonParseData.ciudad + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][city_des]" value="' + jsonParseData.ciudad_des + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][type]" value="' + jsonParseData.tipo + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][address]" value="' + jsonParseData.direccion + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][telephone]" value="' + jsonParseData.telefonotienda + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][name]" value="' + jsonParseData.nombretienda + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][name_des]" value="' + jsonParseData.nombre + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][country]" value="' + jsonParseData.idpais + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][id_tpv]" value="' + jsonParseData.idtpv + '">');
        jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][email]" value="' + jsonParseData.email + '">');
        jQuery('.store-data').append('<input type="hidden" name="store" value="' + jsonParseData.id + '">');

        this.summary.find('.store-name').empty().append('<label>' + jsonParseData.nombre + '</label>');
        this.summary.find('.store-address').empty().text(jsonParseData.dire);

    },
    createInputsOnWidget: function(storeData) {
        var that = this;
        var storeId = storeData.attr('data-store-id');
        jQuery('.store-data').empty();
        if (storeData.attr('value') != '') {
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][idmovex]" value="' + storeData.attr('value') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][city]" value="' + storeData.attr('data-city') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][city_des]" value="' + storeData.attr('data-city') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][type]" value="' + storeData.attr('data-type') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][address]" value="' + storeData.attr('data-address') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][telephone]" value="' + storeData.attr('data-telephone') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][name]" value="' + storeData.attr('data-name') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][name_des]" value="' + storeData.attr('data-name') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][country]" value="' + storeData.attr('data-country') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][id_tpv]" value="' + storeData.attr('data-idtpv') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store_data[' + storeId + '][email]" value="' + storeData.attr('data-email') + '">');
            jQuery('.store-data').append('<input type="hidden" name="store" value="' + storeId + '">');

            let data = {
                'country': storeData.attr('data-country'),
                'language': storeData.attr('data-language'),
                'idmovex': storeData.attr('value'),
                'idmovex_dec': storeData.attr('data-idmovex')
            };
            let url = jQuery('#filterStore').data('url');
            jQuery.ajax({
                url: url,
                method: 'POST',
                data: data,
                dataType: 'html',
                success: function(storeList) {
                    jQuery(".storelocator-messages").html(storeList);
                    let shop = data.idmovex_dec;
                    that.showShopMessages(shop);
                }
            });
        }

    },
    calendars: function(storeId) {

        var that = this;
        var initialLocaleCode = this.language.val();
        var desiredDateInput = jQuery('#desired_date');
        var ceremonyDateInput = jQuery('#ceremony_date');
        var containerAppointmentDate = this.summary.find('.appointment-date');
        var containerWeddingDate = this.summary.find('.wedding-date');
        var dateSelectedFormated;

        if (storeId) {
            var jsonData = jQuery('.store' + storeId).html().replace(/href="(.*?)"/, "href='$1'");
            var jsonParseData = JSON.parse(jsonData);

            var sun = (this.storesThatCloseOnSunday.indexOf(jsonParseData.idmovex_dec) !== -1) ? 0 : '';

            that.appointmentCalendar.fullCalendar('destroy');
            that.weddingCalendar.fullCalendar('destroy');
            jQuery('.nav-pills').find('[href="#1a"]').tab('show');
            containerAppointmentDate.empty().append('--/--/--');
            containerWeddingDate.empty().append('--/--/--');
        }

        that.appointmentCalendar.fullCalendar({
            header: {
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            hiddenDays: [sun],
            dayRender: function(date, cell) {
                jQuery('.fc-day-top.fc-past').css('opacity', '0.3');
            },
            locale: initialLocaleCode,
            dayClick: function(date, jsEvent, view) {

                if (jQuery(this).hasClass('fc-past')) {
                    return;
                }

                var dateSelected = date.format('DD/MM/YYYY');

                if (ceremonyDateInput.val() && ceremonyDateInput.val() <= dateSelected) {
                    ceremonyDateInput.val('');
                    containerWeddingDate.empty().append('--/--/--');
                }

                dateSelectedFormated = date.format('YYYY-MM-DD');

                jQuery('.summary-container').find('.appointment-date').empty().append(dateSelected);
                desiredDateInput.val(dateSelected);

                that.lockWeddingDays(dateSelectedFormated);

                jQuery('.col-xs-6.datelabel.leftBorder').removeClass('active');
                jQuery('.col-xs-6.datelabel.rightBorder').addClass('active');
                jQuery('li.active.nsldate.hidden-xs.leftDesktop').toggleClass('active');
                jQuery('li.nsldate.hidden-xs.rightDesktop').toggleClass('active');
                jQuery('#wedding-tab').tab('show');
                that.appointmentCalendar.find('.fc-day').each(function() {
                    jQuery(this).css('background-color', 'transparent');
                });
                that.appointmentCalendar.find('.fc-day-number.fc-state-highlight').each(function() {
                    jQuery(this).removeClass('fc-state-highlight');
                });

                if (that.appointmentCalendar.find('.fc-state-highlight2').length !== 0) {
                    that.appointmentCalendar.find('.fc-state-highlight2').removeClass('fc-state-highlight2');
                }
                jQuery(this).removeClass('fc-state-highlight2');
                jQuery(jsEvent.target).addClass("fc-state-highlight2");

                that.weddingCalendar.fullCalendar({
                    header: {
                        left: 'prev',
                        center: 'title',
                        right: 'next'
                    },
                    hiddenDays: [sun],
                    dayRender: function(date, cell) {
                        jQuery('.fc-day-top.fc-past').css('opacity', '0.3');
                        that.lockWeddingDays(dateSelectedFormated);
                    },
                    locale: initialLocaleCode,
                    dayClick: function(ceremonydate, jsEvent, view) {

                        if (jQuery(this).hasClass('fc-past')) {
                            return;
                        }

                        if (desiredDateInput.val() && (new Date('"' + ceremonydate.format('YYYY-MM-DD') + '"') <= new Date('"' + dateSelectedFormated + '"'))) {
                            return;
                        }

                        var dateSelected = ceremonydate.format('DD/MM/YYYY');
                        containerWeddingDate.empty().append(dateSelected);
                        ceremonyDateInput.val(dateSelected);

                        jQuery('#wedding-calendar').find('.fc-day').each(function() {
                            jQuery(this).css('background-color', 'transparent');
                        });

                        if (that.weddingCalendar.find('.fc-state-highlight2').length !== 0) {
                            that.weddingCalendar.find('.fc-state-highlight2').removeClass('fc-state-highlight2');
                        }

                        jQuery(this).removeClass('fc-state-highlight2');
                        jQuery(jsEvent.target).addClass("fc-state-highlight2");

                        jQuery('.col-xs-6.datelabel.rightBorder').removeClass('active');
                        jQuery('.col-xs-6.datelabel.leftBorder,.col-xs-6.datelabel.rightBorder').addClass('selected');

                        jQuery('li.active.nsldate.hidden-xs.rightDesktop').removeClass('active');

                        var $highlight = jQuery("<span class='fc-state-highlight'></span>");
                        jQuery(this).append($highlight);

                    }
                });

            }

        });
    },
    smoothScroll: function(target) {
        jQuery('body,html').animate({
            'scrollTop': (target.offset().top - this.getHeaderHeight())
        }, 600);
    },
    getHeaderHeight: function() {
        return (!jQuery('header').hasClass('navbar-fixed-top')) ? jQuery('.header-box').height() : jQuery('.header-nav_mobile').height();
    },
    smoothScrollTo: function(element) {
        jQuery('body,html').animate({
            'scrollTop': (element.offset().top - this.getHeaderHeight())
        }, 600);
    },
    lockWeddingDays: function(selectedDate) {
        this.weddingCalendar.find(".fc-day-top.fc-future").each(function() {
            if (jQuery(this).attr('data-date') <= selectedDate) {
                jQuery(this).css('opacity', '0.3');
            } else {
                jQuery(this).css('opacity', '1');
            }
        });
    },
    showShopMessages: function(shop) {
        //console.log('.shop-message.shop' + shop);
        let messages = jQuery('.shop-message.shop' + shop);
        if (messages.length < 1)
            return;
        this.showMessageRecursive(messages, 0);
    },
    showMessageRecursive: function(messages, index) {
        let that = this;
        let message = jQuery(messages[index]);
        let closeMsg = message.find('.close-msg');
        jQuery('#shop-messages').show();
        message.slideDown();
        closeMsg.click(function() {
            closeMsg.unbind('click');
            message.slideUp(200, function() {
                let newIndex = index + 1;
                if (newIndex < messages.length) {
                    that.showMessageRecursive(messages, newIndex);
                } else if (newIndex === messages.length) {
                    jQuery('#shop-messages').hide();
                }
            });
        });
    },
    getStoreData: function(storeId) {

        if (storeId) {
            let jsonData = jQuery('.store' + storeId).html().replace(/href="(.*?)"/, "href='$1'");
            let jsonParseData = JSON.parse(jsonData);
            let data = {
                'country': jsonParseData.idpais,
                'language': this.language.val(),
                'idmovex': jsonParseData.idmovex,
                'idmovex_dec': jsonParseData.idmovex_dec
            };
            return data;

        }
    }
};

PNVS.appointments.init();
