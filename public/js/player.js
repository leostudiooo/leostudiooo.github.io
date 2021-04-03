(() => {
    var e = {
            157: e => {
                "use strict";
                e.exports = function(e) {
                    var n = [];
                    return n.toString = function() { return this.map((function(n) { var t = e(n); return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t })).join("") }, n.i = function(e, t, r) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var i = {};
                        if (r)
                            for (var a = 0; a < this.length; a++) {
                                var l = this[a][0];
                                null != l && (i[l] = !0)
                            }
                        for (var o = 0; o < e.length; o++) {
                            var p = [].concat(e[o]);
                            r && i[p[0]] || (t && (p[2] ? p[2] = "".concat(t, " and ").concat(p[2]) : p[2] = t), n.push(p))
                        }
                    }, n
                }
            },
            901: function(e) {
                e.exports = function() {
                    "use strict";

                    function e() { return (e = Object.assign || function(e) { for (var n = 1; n < arguments.length; n++) { var t = arguments[n]; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]) } return e }).apply(this, arguments) }
                    var n = "undefined" != typeof window,
                        t = n && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
                        r = n && "IntersectionObserver" in window,
                        i = n && "classList" in document.createElement("p"),
                        a = n && window.devicePixelRatio > 1,
                        l = { elements_selector: ".lazy", container: t || n ? document : null, threshold: 300, thresholds: null, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", data_bg_hidpi: "bg-hidpi", data_bg_multi: "bg-multi", data_bg_multi_hidpi: "bg-multi-hidpi", data_poster: "poster", class_applied: "applied", class_loading: "loading", class_loaded: "loaded", class_error: "error", class_entered: "entered", class_exited: "exited", unobserve_completed: !0, unobserve_entered: !1, cancel_on_exit: !0, callback_enter: null, callback_exit: null, callback_applied: null, callback_loading: null, callback_loaded: null, callback_error: null, callback_finish: null, callback_cancel: null, use_native: !1 },
                        o = function(n) { return e({}, l, n) },
                        p = function(e, n) {
                            var t, r = "LazyLoad::Initialized",
                                i = new e(n);
                            try { t = new CustomEvent(r, { detail: { instance: i } }) } catch (e) {
                                (t = document.createEvent("CustomEvent")).initCustomEvent(r, !1, !1, { instance: i })
                            }
                            window.dispatchEvent(t)
                        },
                        s = "loading",
                        u = "loaded",
                        c = "applied",
                        y = "error",
                        g = "native",
                        d = "data-",
                        _ = "ll-status",
                        h = function(e, n) { return e.getAttribute(d + n) },
                        f = function(e) { return h(e, _) },
                        v = function(e, n) {
                            return function(e, n, t) {
                                var r = "data-ll-status";
                                null !== t ? e.setAttribute(r, t) : e.removeAttribute(r)
                            }(e, 0, n)
                        },
                        m = function(e) { return v(e, null) },
                        b = function(e) { return null === f(e) },
                        x = function(e) { return f(e) === g },
                        w = [s, u, c, y],
                        E = function(e, n, t, r) { e && (void 0 === r ? void 0 === t ? e(n) : e(n, t) : e(n, t, r)) },
                        S = function(e, n) { i ? e.classList.add(n) : e.className += (e.className ? " " : "") + n },
                        M = function(e, n) { i ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(^|\\s+)" + n + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "") },
                        k = function(e) { return e.llTempImage },
                        L = function(e, n) {
                            if (n) {
                                var t = n._observer;
                                t && t.unobserve(e)
                            }
                        },
                        T = function(e, n) { e && (e.loadingCount += n) },
                        A = function(e, n) { e && (e.toLoadCount = n) },
                        z = function(e) { for (var n, t = [], r = 0; n = e.children[r]; r += 1) "SOURCE" === n.tagName && t.push(n); return t },
                        H = function(e, n, t) { t && e.setAttribute(n, t) },
                        O = function(e, n) { e.removeAttribute(n) },
                        C = function(e) { return !!e.llOriginalAttrs },
                        q = function(e) {
                            if (!C(e)) {
                                var n = {};
                                n.src = e.getAttribute("src"), n.srcset = e.getAttribute("srcset"), n.sizes = e.getAttribute("sizes"), e.llOriginalAttrs = n
                            }
                        },
                        P = function(e) {
                            if (C(e)) {
                                var n = e.llOriginalAttrs;
                                H(e, "src", n.src), H(e, "srcset", n.srcset), H(e, "sizes", n.sizes)
                            }
                        },
                        I = function(e, n) { H(e, "sizes", h(e, n.data_sizes)), H(e, "srcset", h(e, n.data_srcset)), H(e, "src", h(e, n.data_src)) },
                        D = function(e) { O(e, "src"), O(e, "srcset"), O(e, "sizes") },
                        j = function(e, n) {
                            var t = e.parentNode;
                            t && "PICTURE" === t.tagName && z(t).forEach(n)
                        },
                        N = { IMG: function(e, n) { j(e, (function(e) { q(e), I(e, n) })), q(e), I(e, n) }, IFRAME: function(e, n) { H(e, "src", h(e, n.data_src)) }, VIDEO: function(e, n) {! function(e, t) { z(e).forEach((function(e) { H(e, "src", h(e, n.data_src)) })) }(e), H(e, "poster", h(e, n.data_poster)), H(e, "src", h(e, n.data_src)), e.load() } },
                        V = function(e, n) {
                            var t = N[e.tagName];
                            t && t(e, n)
                        },
                        B = function(e, n, t) { T(t, 1), S(e, n.class_loading), v(e, s), E(n.callback_loading, e, t) },
                        R = ["IMG", "IFRAME", "VIDEO"],
                        Y = function(e, n) {!n || function(e) { return e.loadingCount > 0 }(n) || function(e) { return e.toLoadCount > 0 }(n) || E(e.callback_finish, n) },
                        F = function(e, n, t) { e.addEventListener(n, t), e.llEvLisnrs[n] = t },
                        X = function(e, n, t) { e.removeEventListener(n, t) },
                        $ = function(e) { return !!e.llEvLisnrs },
                        U = function(e) {
                            if ($(e)) {
                                var n = e.llEvLisnrs;
                                for (var t in n) {
                                    var r = n[t];
                                    X(e, t, r)
                                }
                                delete e.llEvLisnrs
                            }
                        },
                        W = function(e, n, t) {
                            ! function(e) { delete e.llTempImage }(e), T(t, -1),
                                function(e) { e && (e.toLoadCount -= 1) }(t), M(e, n.class_loading), n.unobserve_completed && L(e, t)
                        },
                        G = function(e, n, t) {
                            var r = k(e) || e;
                            $(r) || function(e, n, t) {
                                $(e) || (e.llEvLisnrs = {});
                                var r = "VIDEO" === e.tagName ? "loadeddata" : "load";
                                F(e, r, n), F(e, "error", t)
                            }(r, (function(i) {
                                ! function(e, n, t, r) {
                                    var i = x(n);
                                    W(n, t, r), S(n, t.class_loaded), v(n, u), E(t.callback_loaded, n, r), i || Y(t, r)
                                }(0, e, n, t), U(r)
                            }), (function(i) {
                                ! function(e, n, t, r) {
                                    var i = x(n);
                                    W(n, t, r), S(n, t.class_error), v(n, y), E(t.callback_error, n, r), i || Y(t, r)
                                }(0, e, n, t), U(r)
                            }))
                        },
                        Z = function(e, n, t) {
                            ! function(e) { e.llTempImage = document.createElement("IMG") }(e), G(e, n, t),
                                function(e, n, t) {
                                    var r = h(e, n.data_bg),
                                        i = h(e, n.data_bg_hidpi),
                                        l = a && i ? i : r;
                                    l && (e.style.backgroundImage = 'url("'.concat(l, '")'), k(e).setAttribute("src", l), B(e, n, t))
                                }(e, n, t),
                                function(e, n, t) {
                                    var r = h(e, n.data_bg_multi),
                                        i = h(e, n.data_bg_multi_hidpi),
                                        l = a && i ? i : r;
                                    l && (e.style.backgroundImage = l, function(e, n, t) { S(e, n.class_applied), v(e, c), n.unobserve_completed && L(e, n), E(n.callback_applied, e, t) }(e, n, t))
                                }(e, n, t)
                        },
                        J = function(e, n, t) {! function(e) { return R.indexOf(e.tagName) > -1 }(e) ? Z(e, n, t): function(e, n, t) { G(e, n, t), V(e, n), B(e, n, t) }(e, n, t) },
                        K = ["IMG", "IFRAME"],
                        Q = function(e) { return e.use_native && "loading" in HTMLImageElement.prototype },
                        ee = function(e, n, t) {
                            e.forEach((function(e) {
                                return function(e) { return e.isIntersecting || e.intersectionRatio > 0 }(e) ? function(e, n, t, r) {
                                    v(e, "entered"), S(e, t.class_entered), M(e, t.class_exited),
                                        function(e, n, t) { n.unobserve_entered && L(e, t) }(e, t, r), E(t.callback_enter, e, n, r),
                                        function(e) { return w.indexOf(f(e)) >= 0 }(e) || J(e, t, r)
                                }(e.target, e, n, t) : function(e, n, t, r) { b(e) || (S(e, t.class_exited), function(e, n, t, r) { t.cancel_on_exit && function(e) { return f(e) === s }(e) && "IMG" === e.tagName && (U(e), function(e) { j(e, (function(e) { D(e) })), D(e) }(e), function(e) { j(e, (function(e) { P(e) })), P(e) }(e), M(e, t.class_loading), T(r, -1), m(e), E(t.callback_cancel, e, n, r)) }(e, n, t, r), E(t.callback_exit, e, n, r)) }(e.target, e, n, t)
                            }))
                        },
                        ne = function(e) { return Array.prototype.slice.call(e) },
                        te = function(e) { return e.container.querySelectorAll(e.elements_selector) },
                        re = function(e) { return function(e) { return f(e) === y }(e) },
                        ie = function(e, n) { return function(e) { return ne(e).filter(b) }(e || te(n)) },
                        ae = function(e, t) {
                            var i = o(e);
                            this._settings = i, this.loadingCount = 0,
                                function(e, n) { r && !Q(e) && (n._observer = new IntersectionObserver((function(t) { ee(t, e, n) }), function(e) { return { root: e.container === document ? null : e.container, rootMargin: e.thresholds || e.threshold + "px" } }(e))) }(i, this),
                                function(e, t) {
                                    n && window.addEventListener("online", (function() {
                                        ! function(e, n) {
                                            var t;
                                            (t = te(e), ne(t).filter(re)).forEach((function(n) { M(n, e.class_error), m(n) })), n.update()
                                        }(e, t)
                                    }))
                                }(i, this), this.update(t)
                        };
                    return ae.prototype = {
                        update: function(e) {
                            var n, i, a = this._settings,
                                l = ie(e, a);
                            A(this, l.length), !t && r ? Q(a) ? function(e, n, t) { e.forEach((function(e) {-1 !== K.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), function(e, n, t) { G(e, n, t), V(e, n), v(e, g) }(e, n, t)) })), A(t, 0) }(l, a, this) : (i = l, function(e) { e.disconnect() }(n = this._observer), function(e, n) { n.forEach((function(n) { e.observe(n) })) }(n, i)) : this.loadAll(l)
                        },
                        destroy: function() { this._observer && this._observer.disconnect(), te(this._settings).forEach((function(e) { delete e.llOriginalAttrs })), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount },
                        loadAll: function(e) {
                            var n = this,
                                t = this._settings;
                            ie(e, t).forEach((function(e) { L(e, n), J(e, t, n) }))
                        }
                    }, ae.load = function(e, n) {
                        var t = o(n);
                        J(e, t)
                    }, ae.resetStatus = function(e) { m(e) }, n && function(e, n) {
                        if (n)
                            if (n.length)
                                for (var t, r = 0; t = n[r]; r += 1) p(e, t);
                            else p(e, n)
                    }(ae, window.lazyLoadOptions), ae
                }()
            },
            125: (e, n, t) => {
                "use strict";
                t.d(n, { Z: () => a });
                var r = t(157),
                    i = t.n(r)()((function(e) { return e[1] }));
                i.push([e.id, '@-webkit-keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.penguin-player{font-family:"Microsoft YaHei UI","Microsoft YaHei","黑体"}.penguin-player .penguin-player__player{padding:4px 0;width:56px;height:56px;position:fixed;z-index:2;border-radius:36px;box-sizing:border-box;box-shadow:-1px 1px 4px #000;left:10px;bottom:10px;transition:min-width .2s ease-in-out,width .2s ease-in-out,height .2s ease-in-out,border-radius .2s ease-in-out;overflow:hidden;background-color:#fff;color:#000;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);max-width:750px;min-width:56px}.penguin-player .penguin-player__player .penguin-player__player--mini{padding-left:56px;height:48px}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail{position:absolute;top:4px;left:4px;width:48px;height:48px;border-radius:24px;overflow:hidden;cursor:pointer}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-img{-webkit-animation:rotate 30s linear 0s infinite;animation:rotate 30s linear 0s infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-img.rotate{-webkit-animation-play-state:running;animation-play-state:running}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-play-pause{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;z-index:2;background-color:rgba(0,0,0,.3);transition:opacity .1s linear}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-play-pause .penguin-player__player--thumbnail-play,.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-play-pause .penguin-player__player--thumbnail-pause{pointer-events:none;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-play-pause .penguin-player__player--thumbnail-play svg,.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-play-pause .penguin-player__player--thumbnail-pause svg{width:38px;height:38px;fill:#d7d7d7}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-play-pause .penguin-player__player--thumbnail-pause{display:none}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail:hover .penguin-player__player--thumbnail-play-pause{opacity:1}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-progress{pointer-events:none;position:absolute;top:0;left:0;right:0;bottom:0;z-index:3;clip:rect(0px, 48px, 48px, 24px)}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-progress .penguin-player__player--thumbnail-progress-left,.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--thumbnail .penguin-player__player--thumbnail-progress .penguin-player__player--thumbnail-progress-right{width:42px;height:42px;border:3px solid #fff;border-radius:24px;position:absolute;clip:rect(0px, 24px, 48px, 0px)}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content{padding-right:48px;position:relative}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--title,.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--artists{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:24px}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--title{font-size:24px}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--title .penguin-player__player--trial-icon{display:none}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--title .penguin-player__player--trial-icon svg{vertical-align:middle}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--artists{font-size:12px}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--full-toggle{position:absolute;right:0;top:-4px;width:48px;height:56px;background:none;border:none;outline:none;cursor:pointer;border-top-right-radius:24px;border-bottom-right-radius:24px;transition:border-bottom-right-radius .2s ease-in-out}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--full-toggle:hover{background-color:rgba(255,255,255,.3)}.penguin-player .penguin-player__player .penguin-player__player--mini .penguin-player__player--expanded-content .penguin-player__player--full-toggle .penguin-player__player--full-toggle-close{display:none}.penguin-player .penguin-player__player .penguin-player__player--full-content{margin-top:4px;background-color:#fff;padding:10px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress{width:100%}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-bar{position:relative;background-color:rgba(0,0,0,.3);border-radius:1.5px;height:3px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-bar .penguin-player__player--progress-buffered,.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-bar .penguin-player__player--progress-inner{border-radius:1.5px;width:0;height:3px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-bar .penguin-player__player--progress-buffered{position:absolute;background-color:rgba(0,0,0,.3)}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-bar .penguin-player__player--progress-inner{position:relative;background-color:#d7d7d7}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-bar .penguin-player__player--progress-inner .penguin-player__player--progress-dot{width:10px;height:10px;border-radius:5px;position:absolute;top:50%;left:100%;transform:translate(-50%, -50%);cursor:pointer;display:none}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-bar.penguin-player--slider-dragging .penguin-player__player--progress-dot{display:block}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-time{margin-top:5px;font-size:12px;height:16px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress .penguin-player__player--progress-time .penguin-player__player--progress-duration{float:right}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress:hover .penguin-player__player--progress-bar{border-radius:2px;height:4px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress:hover .penguin-player__player--progress-bar .penguin-player__player--progress-inner{border-radius:2px;height:4px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress:hover .penguin-player__player--progress-bar .penguin-player__player--progress-inner .penguin-player__player--progress-dot{display:block}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--progress:hover .penguin-player__player--progress-time{margin-top:4px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls{positoin:relative}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls>*{border-radius:5px;display:inline-block;padding:5px;margin:5px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls>*:not(.penguin-player__player--controls-volume){width:24px;height:24px;cursor:pointer}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls>*:not(.penguin-player__player--controls-volume):hover{background-color:rgba(0,0,0,.1)}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-playmode{position:relative}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-playmode::after{content:attr(data-mode);text-align:center;font-size:12px;position:absolute;top:100%;left:50%;transform:translate(-50%);opacity:0;pointer-events:none;transition:opacity .1s linear;white-space:nowrap}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-playmode:hover::after{opacity:1}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-volume{width:30%}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-volume .penguin-player__player--controls-volume-bar{width:calc(100% - 30px);display:inline-block;background-color:rgba(0,0,0,.3);border-radius:1.5px;height:3px;margin-top:10px;margin-left:6px;vertical-align:top}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-volume .penguin-player__player--controls-volume-bar .penguin-player__player--controls-volume-inner{position:relative;background-color:#d7d7d7;border-radius:1.5px;height:3px;width:0}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-volume .penguin-player__player--controls-volume-bar .penguin-player__player--controls-volume-inner .penguin-player__player--controls-volume-dot{width:10px;height:10px;border-radius:5px;position:absolute;top:50%;left:100%;transform:translate(-50%, -50%);cursor:pointer;display:none}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-volume .penguin-player__player--controls-volume-bar.penguin-player--slider-dragging .penguin-player__player--controls-volume-dot{display:block}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-volume:hover .penguin-player__player--controls-volume-bar{height:4px;border-radius:2px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-volume:hover .penguin-player__player--controls-volume-bar .penguin-player__player--controls-volume-inner{height:4px;border-radius:2px}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-volume:hover .penguin-player__player--controls-volume-bar .penguin-player__player--controls-volume-inner .penguin-player__player--controls-volume-dot{display:block}.penguin-player .penguin-player__player .penguin-player__player--full-content .penguin-player__player--controls .penguin-player__player--controls-playlist{position:absolute;right:0}.penguin-player .penguin-player__player .penguin-player__player--playlist{position:relative;overflow:auto;height:0;transition:min-height .2s ease-in-out,height .2s ease-in-out;min-height:0;background-color:#fff}.penguin-player .penguin-player__player .penguin-player__player--playlist .penguin-player__player--playlist-song{position:relative;height:36px;padding:5px;padding-left:45px;cursor:pointer;background-color:#fff;transition:padding-left .1s ease-in-out,background-color .1s ease-in-out}.penguin-player .penguin-player__player .penguin-player__player--playlist .penguin-player__player--playlist-song .penguin-player__player--playlist-thumbnail{position:absolute;left:5px;border-radius:50%}.penguin-player .penguin-player__player .penguin-player__player--playlist .penguin-player__player--playlist-song .penguin-player__player--playlist-title,.penguin-player .penguin-player__player .penguin-player__player--playlist .penguin-player__player--playlist-song .penguin-player__player--playlist-artists{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;line-height:19px}.penguin-player .penguin-player__player .penguin-player__player--playlist .penguin-player__player--playlist-song .penguin-player__player--playlist-title{font-size:16px}.penguin-player .penguin-player__player .penguin-player__player--playlist .penguin-player__player--playlist-song .penguin-player__player--playlist-artists{font-size:12px}.penguin-player .penguin-player__player .penguin-player__player--playlist .penguin-player__player--playlist-song:hover{padding-left:50px;background-color:rgba(0,0,0,.2)}.penguin-player .penguin-player__player.penguin-player__player-full,.penguin-player .penguin-player__player:hover{min-width:300px;width:25vw}.penguin-player .penguin-player__player.penguin-player__player-full+.penguin-player__lyric,.penguin-player .penguin-player__player:hover+.penguin-player__lyric{padding-left:calc(20px + min(calc(100vw - 20px), max(25vw, 300px)))}.penguin-player .penguin-player__player.penguin-player__player-full{border-radius:24px;height:148px}.penguin-player .penguin-player__player.penguin-player__player-full .penguin-player__player--mini .penguin-player__player--full-toggle{border-bottom-right-radius:0;border-top-right-radius:24px}.penguin-player .penguin-player__player.penguin-player__player-full .penguin-player__player--mini .penguin-player__player--full-toggle .penguin-player__player--full-toggle-menu{display:none}.penguin-player .penguin-player__player.penguin-player__player-full .penguin-player__player--mini .penguin-player__player--full-toggle .penguin-player__player--full-toggle-close{display:block}.penguin-player .penguin-player__player.penguin-player__player-playlist{height:calc(148px + 35vh)}.penguin-player .penguin-player__player.penguin-player__player-playlist .penguin-player__player--playlist{min-height:250px;height:35vh}.penguin-player .penguin-player__lyric{position:fixed;left:0;right:0;bottom:0;padding:10px;pointer-events:none;opacity:0;transition:opacity .1s linear,padding-left .2s ease-in-out,bottom .2s ease-in-out;margin-left:0}.penguin-player .penguin-player__lyric .penguin-player__lyric--line{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-shadow:1px 1px #fff;margin:0;text-align:center;transition:opacity .1s linear}.penguin-player .penguin-player__lyric .penguin-player__lyric--line[line-name=main]{font-size:22px}.penguin-player .penguin-player__lyric .penguin-player__lyric--line[line-name=sub]{font-size:16px}.penguin-player .penguin-player__lyric .penguin-player__lyric--background{position:fixed;left:0;right:0;bottom:-10px;height:60px;transition:bottom .2s ease-in-out;background:linear-gradient(to top, black, transparent);z-index:-1}.penguin-player .penguin-player__lyric .penguin-player__lyric--expand-button{position:absolute;right:0;bottom:0;width:48px;height:48px;fill:#fff;opacity:0;transition:opacity .2s ease-in-out,fill .1s linear;padding:10px;box-sizing:border-box;cursor:pointer}.penguin-player .penguin-player__lyric .penguin-player__lyric--expand-button svg{width:100%;height:100%}.penguin-player .penguin-player__lyric .penguin-player__lyric--expand-button:hover{fill:#d7d7d7}.penguin-player .penguin-player__lyric.penguin-player__lyric-hover .penguin-player__lyric--background{bottom:0}.penguin-player .penguin-player__lyric.penguin-player__lyric-hover .penguin-player__lyric--expand-button{pointer-events:all;opacity:1}.penguin-player .penguin-player__lyric-settings{color:#333;position:fixed;z-index:6;bottom:60px;display:none;transform:translate(10px);opacity:0;transition:transform .2s ease-in-out,opacity .2s ease-in-out;background-color:#fff;right:10px;bottom:60px;padding:10px;border-radius:5px;box-shadow:2px 2px 3px #333;min-width:35vw;min-height:200px}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--title{margin:0;font-size:22px}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--status{margin:0;font-size:12px}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--status .penguin-player__lyric-settings--status-lrc-icon,.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--status .penguin-player__lyric-settings--status-tlrc-icon{vertical-align:middle;fill:#333;margin-right:2px}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--status .penguin-player__lyric-settings--status-lrc-icon svg,.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--status .penguin-player__lyric-settings--status-tlrc-icon svg{width:14px;height:14px}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--lyric-offset{position:absolute;left:10px;bottom:10px}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--lyric-offset>span{display:inline-block;width:24px;height:24px;cursor:pointer;border-radius:5px}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--lyric-offset>span:hover{background-color:rgba(0,0,0,.1)}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--lyric-offset>span svg{vertical-align:middle}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--lyric-offset .penguin-player__lyric-settings--lyric-offset-value{outline:none;border:none;width:40px;text-align:center;-moz-appearance:textfield}.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--lyric-offset .penguin-player__lyric-settings--lyric-offset-value::-webkit-outer-spin-button,.penguin-player .penguin-player__lyric-settings .penguin-player__lyric-settings--lyric-offset .penguin-player__lyric-settings--lyric-offset-value::-webkit-inner-spin-button{-webkit-appearance:none}.penguin-player .penguin-player__lyric-settings--overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:5;background-color:rgba(0,0,0,.5);display:none}@media only screen and (max-width: 700px){.penguin-player__player.penguin-player__player-full,.penguin-player__player.penguin-player__player-playlist,.penguin-player__player:hover{width:calc(100vw - 20px) !important}.penguin-player__player.penguin-player__player-full+.penguin-player__lyric,.penguin-player__player.penguin-player__player-playlist+.penguin-player__lyric,.penguin-player__player:hover+.penguin-player__lyric{padding-left:0 !important}.penguin-player__player.penguin-player__player-full+.penguin-player__lyric .penguin-player__lyric--background,.penguin-player__player.penguin-player__player-playlist+.penguin-player__lyric .penguin-player__lyric--background,.penguin-player__player:hover+.penguin-player__lyric .penguin-player__lyric--background{bottom:-60px !important}.penguin-player__player:hover+.penguin-player__lyric{bottom:76px}.penguin-player__player.penguin-player__player-full+.penguin-player__lyric{bottom:168px}.penguin-player__player.penguin-player__player-playlist+.penguin-player__lyric{bottom:calc(168px + 35vh)}.penguin-player__player .penguin-player__player--controls-playmode::after{opacity:1}.penguin-player__lyric>*:not(.penguin-player__lyric--expand-button){text-align:right !important}.penguin-player__lyric .penguin-player__lyric--expand-button{display:none}.penguin-player__lyric-settings{left:10px;bottom:10px !important;min-height:30vh !important}.penguin-player__lyric-settings.penguin-player__lyric-settings-shown+.penguin-player__lyric-settings--overlay{display:block}}', ""]);
                const a = i
            },
            379: (e, n, t) => {
                "use strict";
                var r, i = function() { return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r },
                    a = function() {
                        var e = {};
                        return function(n) {
                            if (void 0 === e[n]) {
                                var t = document.querySelector(n);
                                if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try { t = t.contentDocument.head } catch (e) { t = null }
                                e[n] = t
                            }
                            return e[n]
                        }
                    }(),
                    l = [];

                function o(e) {
                    for (var n = -1, t = 0; t < l.length; t++)
                        if (l[t].identifier === e) { n = t; break }
                    return n
                }

                function p(e, n) {
                    for (var t = {}, r = [], i = 0; i < e.length; i++) {
                        var a = e[i],
                            p = n.base ? a[0] + n.base : a[0],
                            s = t[p] || 0,
                            u = "".concat(p, " ").concat(s);
                        t[p] = s + 1;
                        var c = o(u),
                            y = { css: a[1], media: a[2], sourceMap: a[3] }; - 1 !== c ? (l[c].references++, l[c].updater(y)) : l.push({ identifier: u, updater: h(y, n), references: 1 }), r.push(u)
                    }
                    return r
                }

                function s(e) {
                    var n = document.createElement("style"),
                        r = e.attributes || {};
                    if (void 0 === r.nonce) {
                        var i = t.nc;
                        i && (r.nonce = i)
                    }
                    if (Object.keys(r).forEach((function(e) { n.setAttribute(e, r[e]) })), "function" == typeof e.insert) e.insert(n);
                    else {
                        var l = a(e.insert || "head");
                        if (!l) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        l.appendChild(n)
                    }
                    return n
                }
                var u, c = (u = [], function(e, n) { return u[e] = n, u.filter(Boolean).join("\n") });

                function y(e, n, t, r) {
                    var i = t ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = c(n, i);
                    else {
                        var a = document.createTextNode(i),
                            l = e.childNodes;
                        l[n] && e.removeChild(l[n]), l.length ? e.insertBefore(a, l[n]) : e.appendChild(a)
                    }
                }

                function g(e, n, t) {
                    var r = t.css,
                        i = t.media,
                        a = t.sourceMap;
                    if (i ? e.setAttribute("media", i) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(r))
                    }
                }
                var d = null,
                    _ = 0;

                function h(e, n) {
                    var t, r, i;
                    if (n.singleton) {
                        var a = _++;
                        t = d || (d = s(n)), r = y.bind(null, t, a, !1), i = y.bind(null, t, a, !0)
                    } else t = s(n), r = g.bind(null, t, n), i = function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    };
                    return r(e),
                        function(n) {
                            if (n) {
                                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                                r(e = n)
                            } else i()
                        }
                }
                e.exports = function(e, n) {
                    (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = i());
                    var t = p(e = e || [], n);
                    return function(e) {
                        if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                            for (var r = 0; r < t.length; r++) {
                                var i = o(t[r]);
                                l[i].references--
                            }
                            for (var a = p(e, n), s = 0; s < t.length; s++) {
                                var u = o(t[s]);
                                0 === l[u].references && (l[u].updater(), l.splice(u, 1))
                            }
                            t = a
                        }
                    }
                }
            }
        },
        n = {};

    function t(r) { if (n[r]) return n[r].exports; var i = n[r] = { id: r, exports: {} }; return e[r].call(i.exports, i, i.exports, t), i.exports }
    t.n = e => { var n = e && e.__esModule ? () => e.default : () => e; return t.d(n, { a: n }), n }, t.d = (e, n) => { for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }) }, t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), t.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) };
    var r = {};
    (() => {
        "use strict";
        t.d(r, { p0: () => $n, nC: () => Xn, Pu: () => Un });
        var e = {};
        if (t.r(e), t.d(e, { keyboardHandler: () => $e, mouseHandler: () => Ue, resizeHandler: () => We, selectHandler: () => Ge, touchHandler: () => Ze, wheelHandler: () => Je }), !n) var n = { map: function(e, n) { var t = {}; return n ? e.map((function(e, r) { return t.index = r, n.call(t, e) })) : e.slice() }, naturalOrder: function(e, n) { return e < n ? -1 : e > n ? 1 : 0 }, sum: function(e, n) { var t = {}; return e.reduce(n ? function(e, r, i) { return t.index = i, e + n.call(t, r) } : function(e, n) { return e + n }, 0) }, max: function(e, t) { return Math.max.apply(null, t ? n.map(e, t) : e) } };
        var a = function() {
                function e(e, n, t) { return (e << 10) + (n << 5) + t }

                function t(e) {
                    var n = [],
                        t = !1;

                    function r() { n.sort(e), t = !0 }
                    return { push: function(e) { n.push(e), t = !1 }, peek: function(e) { return t || r(), void 0 === e && (e = n.length - 1), n[e] }, pop: function() { return t || r(), n.pop() }, size: function() { return n.length }, map: function(e) { return n.map(e) }, debug: function() { return t || r(), n } }
                }

                function r(e, n, t, r, i, a, l) { this.r1 = e, this.r2 = n, this.g1 = t, this.g2 = r, this.b1 = i, this.b2 = a, this.histo = l }

                function i() { this.vboxes = new t((function(e, t) { return n.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume()) })) }

                function a(t, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            a = r.g2 - r.g1 + 1,
                            l = n.max([i, a, r.b2 - r.b1 + 1]);
                        if (1 == r.count()) return [r.copy()];
                        var o, p, s, u, c = 0,
                            y = [],
                            g = [];
                        if (l == i)
                            for (o = r.r1; o <= r.r2; o++) {
                                for (u = 0, p = r.g1; p <= r.g2; p++)
                                    for (s = r.b1; s <= r.b2; s++) u += t[e(o, p, s)] || 0;
                                y[o] = c += u
                            } else if (l == a)
                                for (o = r.g1; o <= r.g2; o++) {
                                    for (u = 0, p = r.r1; p <= r.r2; p++)
                                        for (s = r.b1; s <= r.b2; s++) u += t[e(p, o, s)] || 0;
                                    y[o] = c += u
                                } else
                                    for (o = r.b1; o <= r.b2; o++) {
                                        for (u = 0, p = r.r1; p <= r.r2; p++)
                                            for (s = r.g1; s <= r.g2; s++) u += t[e(p, s, o)] || 0;
                                        y[o] = c += u
                                    }
                        return y.forEach((function(e, n) { g[n] = c - e })),
                            function(e) {
                                var n, t, i, a, l, p = e + "1",
                                    s = e + "2",
                                    u = 0;
                                for (o = r[p]; o <= r[s]; o++)
                                    if (y[o] > c / 2) { for (i = r.copy(), a = r.copy(), l = (n = o - r[p]) <= (t = r[s] - o) ? Math.min(r[s] - 1, ~~(o + t / 2)) : Math.max(r[p], ~~(o - 1 - n / 2)); !y[l];) l++; for (u = g[l]; !u && y[l - 1];) u = g[--l]; return i[s] = l, a[p] = i[s] + 1, [i, a] }
                            }(l == i ? "r" : l == a ? "g" : "b")
                    }
                }
                return r.prototype = {
                    volume: function(e) { return this._volume && !e || (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume },
                    count: function(n) {
                        var t = this.histo;
                        if (!this._count_set || n) {
                            var r, i, a, l = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (a = this.b1; a <= this.b2; a++) l += t[e(r, i, a)] || 0;
                            this._count = l, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() { return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo) },
                    avg: function(n) {
                        var t = this.histo;
                        if (!this._avg || n) {
                            var r, i, a, l, o = 0,
                                p = 0,
                                s = 0,
                                u = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (a = this.g1; a <= this.g2; a++)
                                    for (l = this.b1; l <= this.b2; l++) o += r = t[e(i, a, l)] || 0, p += r * (i + .5) * 8, s += r * (a + .5) * 8, u += r * (l + .5) * 8;
                            this._avg = o ? [~~(p / o), ~~(s / o), ~~(u / o)] : [~~(8 * (this.r1 + this.r2 + 1) / 2), ~~(8 * (this.g1 + this.g2 + 1) / 2), ~~(8 * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) { var n = e[0] >> 3; return gval = e[1] >> 3, bval = e[2] >> 3, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2 }
                }, i.prototype = {
                    push: function(e) { this.vboxes.push({ vbox: e, color: e.avg() }) },
                    palette: function() { return this.vboxes.map((function(e) { return e.color })) },
                    size: function() { return this.vboxes.size() },
                    map: function(e) {
                        for (var n = this.vboxes, t = 0; t < n.size(); t++)
                            if (n.peek(t).vbox.contains(e)) return n.peek(t).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) { for (var n, t, r, i = this.vboxes, a = 0; a < i.size(); a++)((t = Math.sqrt(Math.pow(e[0] - i.peek(a).color[0], 2) + Math.pow(e[1] - i.peek(a).color[1], 2) + Math.pow(e[2] - i.peek(a).color[2], 2))) < n || void 0 === n) && (n = t, r = i.peek(a).color); return r },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort((function(e, t) { return n.naturalOrder(n.sum(e.color), n.sum(t.color)) }));
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var r = e.length - 1,
                            i = e[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(l, o) {
                        if (!l.length || o < 2 || o > 256) return !1;
                        var p = function(n) { var t, r = new Array(32768); return n.forEach((function(n) { t = e(n[0] >> 3, n[1] >> 3, n[2] >> 3), r[t] = (r[t] || 0) + 1 })), r }(l);
                        p.forEach((function() {}));
                        var s = function(e, n) {
                                var t, i, a, l = 1e6,
                                    o = 0,
                                    p = 1e6,
                                    s = 0,
                                    u = 1e6,
                                    c = 0;
                                return e.forEach((function(e) {
                                    (t = e[0] >> 3) < l ? l = t : t > o && (o = t), (i = e[1] >> 3) < p ? p = i : i > s && (s = i), (a = e[2] >> 3) < u ? u = a : a > c && (c = a)
                                })), new r(l, o, p, s, u, c, n)
                            }(l, p),
                            u = new t((function(e, t) { return n.naturalOrder(e.count(), t.count()) }));

                        function c(e, n) {
                            for (var t, r = e.size(), i = 0; i < 1e3;) {
                                if (r >= n) return;
                                if (i++ > 1e3) return;
                                if ((t = e.pop()).count()) {
                                    var l = a(p, t),
                                        o = l[0],
                                        s = l[1];
                                    if (!o) return;
                                    e.push(o), s && (e.push(s), r++)
                                } else e.push(t), i++
                            }
                        }
                        u.push(s), c(u, .75 * o);
                        for (var y = new t((function(e, t) { return n.naturalOrder(e.count() * e.volume(), t.count() * t.volume()) })); u.size();) y.push(u.pop());
                        c(y, o);
                        for (var g = new i; y.size();) g.push(y.pop());
                        return g
                    }
                }
            }().quantize,
            l = function(e) { this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.width = this.canvas.width = e.naturalWidth, this.height = this.canvas.height = e.naturalHeight, this.context.drawImage(e, 0, 0, this.width, this.height) };
        l.prototype.getImageData = function() { return this.context.getImageData(0, 0, this.width, this.height) };
        var o = function() {};
        o.prototype.getColor = function(e, n) { return void 0 === n && (n = 10), this.getPalette(e, 5, n)[0] }, o.prototype.getPalette = function(e, n, t) {
            var r = function(e) {
                    var n = e.colorCount,
                        t = e.quality;
                    if (void 0 !== n && Number.isInteger(n)) {
                        if (1 === n) throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
                        n = Math.max(n, 2), n = Math.min(n, 20)
                    } else n = 10;
                    return (void 0 === t || !Number.isInteger(t) || t < 1) && (t = 10), { colorCount: n, quality: t }
                }({ colorCount: n, quality: t }),
                i = new l(e),
                o = function(e, n, t) { for (var r = e, i = [], a = 0, l = void 0, o = void 0, p = void 0, s = void 0, u = void 0; a < n; a += t) o = r[0 + (l = 4 * a)], p = r[l + 1], s = r[l + 2], (void 0 === (u = r[l + 3]) || u >= 125) && (o > 250 && p > 250 && s > 250 || i.push([o, p, s])); return i }(i.getImageData().data, i.width * i.height, r.quality),
                p = a(o, r.colorCount);
            return p ? p.palette() : null
        }, o.prototype.getColorFromUrl = function(e, n, t) {
            var r = this,
                i = document.createElement("img");
            i.addEventListener("load", (function() {
                var a = r.getPalette(i, 5, t);
                n(a[0], e)
            })), i.src = e
        }, o.prototype.getImageData = function(e, n) {
            var t = new XMLHttpRequest;
            t.open("GET", e, !0), t.responseType = "arraybuffer", t.onload = function() {
                if (200 == this.status) {
                    var e = new Uint8Array(this.response);
                    i = e.length;
                    for (var t = new Array(i), r = 0; r < e.length; r++) t[r] = String.fromCharCode(e[r]);
                    var a = t.join(""),
                        l = window.btoa(a);
                    n("data:image/png;base64," + l)
                }
            }, t.send()
        }, o.prototype.getColorAsync = function(e, n, t) {
            var r = this;
            this.getImageData(e, (function(e) {
                var i = document.createElement("img");
                i.addEventListener("load", (function() {
                    var e = r.getPalette(i, 5, t);
                    n(e[0], this)
                })), i.src = e
            }))
        };
        const p = o;

        function s(e) {
            let n = Math.floor(e / 60),
                t = Math.floor(e - 60 * n);
            return `${n<10?"0":""}${n}:${t<10?"0":""}${t}`
        }

        function u(e) { console.log("%cPPlayer%c" + e, "border-top-left-radius:5px;border-bottom-left-radius:5px;padding:0 5px;font-size:24px;font-family:'Microsoft YaHei Light','Microsoft YaHei';background-color:darkred;color:white;", "border-top-right-radius:5px;border-bottom-right-radius:5px;padding:5px;padding-top:10px;padding-bottom:2px;font-size:14px;font-family:'Microsoft YaHei Light','Microsoft YaHei';background-color:pink;color:darkred;margin:5px;margin-left:0;") }

        function c(e, ...n) { e.addEventListener.apply(e, n), [].forEach.call(e.childNodes, (e => { c(e, ...n) })) }

        function y(e) {
            let n, t, r = new Promise((function(e, r) { n = e, t = r }));
            return r._resolve = n, r._reject = t, r._url = e, r._method = "GET", r._xmlHttp = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), r._then = r.then, r._catch = r.catch, r._finally = r.finally, r.then = function(...e) { return this._then.apply(this, e), this }, r.catch = function(...e) { return this._catch.apply(this, e), this }, r.finally = function(...e) { return this._finally.apply(this, e), this }, r.method = function(e) { return this._method = e, this }, r.url = function(e) { return this._url = e, this }, r.send = function() {
                return function(e) {
                    e._xmlHttp.addEventListener("load", (() => {
                        let n = e._xmlHttp.responseText || null;
                        try { n = JSON.parse(n) } catch {}
                        e._resolve({ code: e._xmlHttp.status, data: n })
                    })), e._xmlHttp.addEventListener("error", e._reject), e._xmlHttp.open(e._method, e._url), e._xmlHttp.send()
                }(this), this
            }, r.cancel = function() { try { this._xmlHttp.abort() } catch {} return this }, r
        }
        "mediaSession" in navigator && (navigator.mediaSession.setActionHandler("play", In), navigator.mediaSession.setActionHandler("pause", Dn), navigator.mediaSession.setActionHandler("seekbackward", (() => {
            let e = Xn.querySelector(".penguin-player__audio");
            e.currentTime = Math.max(0, e.currentTime - 10)
        })), navigator.mediaSession.setActionHandler("seekforward", (() => {
            let e = Xn.querySelector(".penguin-player__audio");
            e.currentTime = Math.min(e.duration, e.currentTime + 10)
        })), navigator.mediaSession.setActionHandler("previoustrack", Nn), navigator.mediaSession.setActionHandler("nexttrack", jn));
        const g = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
            d = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/></svg>';
        let _ = {};

        function h(e, n) {
            var t;
            _[e] = (null === (t = _[e]) || void 0 === t ? void 0 : t.concat([n])) || [n]
        }

        function f(e, ...n) { for (let t of _[e] || []) try { t.apply(null, n) } catch (e) { console.error(e) } }

        function v(e, n) { let t; return "function" == typeof Event ? t = null == n ? new Event(e) : new CustomEvent(e, n) : (t = document.createEvent("Event"), t.initEvent(e, !0, !0)), t }

        function m(e, n, ...t) { "dispatchEvent" in e ? e.dispatchEvent(v(n, t)) : e.fireEvent(v(n, t)) }

        function b(e, ...n) {
            let t = !1;
            for (let r of e) try { t = t || r.apply(null, n) } catch (e) { console.error(e) }
            return t
        }
        let x, w, E, S, M = 0,
            k = { main: {}, sub: {} };
        h("setup", (() => {
            x = Xn.querySelector(".penguin-player__audio"), [k.main.el, k.sub.el] = [Xn.querySelector(".penguin-player__lyric--line[line-name=main]"), Xn.querySelector(".penguin-player__lyric--line[line-name=sub]")], x.addEventListener("playing", (() => { z = H = 0, q() })), window.addEventListener("mousedown", (e => {
                Xn.querySelector(".penguin-player__lyric-settings").classList.contains("penguin-player__lyric-settings-shown") ? e.target instanceof HTMLElement && null == e.target.closest(".penguin-player__lyric-settings") && P() : e.pageY >= window.innerHeight - 60 && e.pageX >= 76 && Xn.querySelector(".penguin-player__player").clientWidth <= 56 && window.innerWidth <= 700 && (! function() {
                    let e = (new Date).getTime() - w;
                    e < 600 && e > 0 && P();
                    w = (new Date).getTime()
                }(), e.preventDefault())
            })), Xn.querySelector(".penguin-player__lyric--expand-button").addEventListener("click", (() => P())), Xn.querySelector(".penguin-player__lyric-settings--overlay").addEventListener("click", (() => P(!1)));
            let e = Xn.querySelector(".penguin-player__lyric-settings--lyric-offset-value");
            Xn.querySelector(".penguin-player__lyric-settings--lyric-offset-up").addEventListener("click", (() => { e.stepUp(), m(e, "change") })), Xn.querySelector(".penguin-player__lyric-settings--lyric-offset-down").addEventListener("click", (() => { e.stepDown(), m(e, "change") })), e.addEventListener("change", (function() {
                let e = Number(this.value);
                M = isNaN(e) ? M : e, z = H = 0
            })), h("songchange", (() => { M = e.value = 0 }))
        }));
        let L, T, A, z = 0,
            H = 0;

        function O(e, n, t = 0) {
            if (!e) return -1;
            for (let r = t; r < e.length; r++)
                if (null == e[r + 1] || e[r + 1].time > 1e3 * n) return r;
            return -1
        }

        function C(e, n = "main") {
            let t = k[n];
            e != t.last && (t.el.style.opacity = "0", clearTimeout(t.timeout), t.timeout = setTimeout((() => { e.replace(/\s/g, "").length ? t.el.textContent = e : t.el.innerHTML = "&nbsp;", t.el.style.opacity = "1" }), 100), t.last = e)
        }

        function q() {
            if (x.paused) return;
            let [e, n] = ["", ""];
            var t;
            isNaN(x.currentTime) || -1 == (z = O(L, Pn() + M, z)) || (e = L[z].value, n = -1 != (H = O(T, Pn() + M, H)) ? T[H].value : (null === (t = L[z + 1]) || void 0 === t ? void 0 : t.value) || "");
            C(e), C(n, "sub"), requestAnimationFrame(q)
        }

        function P(e) {
            let n = Xn.querySelector(".penguin-player__lyric-settings");
            (e = "boolean" == typeof e ? e : "block" != n.style.display) ? (clearTimeout(A), n.style.display = "block", setTimeout((() => [n.style.transform, n.style.opacity] = ["translate(0)", "1"])), n.classList.add("penguin-player__lyric-settings-shown")) : ([n.style.transform, n.style.opacity] = ["translate(10px)", "0"], A = setTimeout((() => n.style.display = "none"), 200), n.classList.remove("penguin-player__lyric-settings-shown"))
        }

        function I(e, n, t, r) { Xn.querySelector(".penguin-player__lyric-settings--status-lrc-icon").innerHTML = "error" == e ? d : g, Xn.querySelector(".penguin-player__lyric-settings--status-lrc-text").textContent = n, t && r ? (Xn.querySelector(".penguin-player__lyric-settings--status-tlrc-icon").innerHTML = "error" == t ? d : g, Xn.querySelector(".penguin-player__lyric-settings--status-tlrc-text").textContent = r) : [Xn.querySelector(".penguin-player__lyric-settings--status-tlrc-icon").innerHTML, Xn.querySelector(".penguin-player__lyric-settings--status-tlrc-text").textContent] = ["", ""] }

        function D(e) {
            I("error", "歌词加载中"), L = T = null, z = H = 0, clearTimeout(S), E && E.cancel(), E = y(`https://gcm.tenmahw.com/resolve/lyric?id=${e.id}`).send().then((e => {
                var n;
                let t = null === (n = e.data) || void 0 === n ? void 0 : n.lyric;
                L = null == t ? void 0 : t.lrc, T = null == t ? void 0 : t.tlrc, I.apply(null, L ? ["tick", "歌词已加载"].concat(T ? ["tick", "翻译歌词已加载"] : ["error", "无翻译歌词"]) : ["error", "无歌词"]), Xn.querySelector(".penguin-player__lyric--background").style.bottom = L ? "" : "-60px"
            })).catch((() => { u("Cannot fetch lyric"), S = setTimeout(D, 5e3, e) }))
        }
        var j = function(e, n) {
            return (j = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, n) { e.__proto__ = n } || function(e, n) { for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]) })(e, n)
        };
        var N = function() {
            return (N = Object.assign || function(e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                return e
            }).apply(this, arguments)
        };

        function V(e, n, t, r) {
            var i, a = arguments.length,
                l = a < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, t) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, n, t, r);
            else
                for (var o = e.length - 1; o >= 0; o--)(i = e[o]) && (l = (a < 3 ? i(l) : a > 3 ? i(n, t, l) : i(n, t)) || l);
            return a > 3 && l && Object.defineProperty(n, t, l), l
        }

        function B() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
            var r = Array(e),
                i = 0;
            for (n = 0; n < t; n++)
                for (var a = arguments[n], l = 0, o = a.length; l < o; l++, i++) r[i] = a[l];
            return r
        }
        const R = function(e, n, t) { return e == e && (void 0 !== t && (e = e <= t ? e : t), void 0 !== n && (e = e >= n ? e : n)), e };
        var Y = /\s/;
        const F = function(e) { for (var n = e.length; n-- && Y.test(e.charAt(n));); return n };
        var X = /^\s+/;
        const $ = function(e) { return e ? e.slice(0, F(e) + 1).replace(X, "") : e };
        const U = function(e) { var n = typeof e; return null != e && ("object" == n || "function" == n) };
        const W = "object" == typeof global && global && global.Object === Object && global;
        var G = "object" == typeof self && self && self.Object === Object && self;
        const Z = W || G || Function("return this")();
        const J = Z.Symbol;
        var K = Object.prototype,
            Q = K.hasOwnProperty,
            ee = K.toString,
            ne = J ? J.toStringTag : void 0;
        const te = function(e) {
            var n = Q.call(e, ne),
                t = e[ne];
            try { e[ne] = void 0; var r = !0 } catch (e) {}
            var i = ee.call(e);
            return r && (n ? e[ne] = t : delete e[ne]), i
        };
        var re = Object.prototype.toString;
        const ie = function(e) { return re.call(e) };
        var ae = J ? J.toStringTag : void 0;
        const le = function(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ae && ae in Object(e) ? te(e) : ie(e) };
        const oe = function(e) { return null != e && "object" == typeof e };
        const pe = function(e) { return "symbol" == typeof e || oe(e) && "[object Symbol]" == le(e) };
        var se = /^[-+]0x[0-9a-f]+$/i,
            ue = /^0b[01]+$/i,
            ce = /^0o[0-7]+$/i,
            ye = parseInt;
        const ge = function(e) {
            if ("number" == typeof e) return e;
            if (pe(e)) return NaN;
            if (U(e)) {
                var n = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = U(n) ? n + "" : n
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = $(e);
            var t = ue.test(e);
            return t || ce.test(e) ? ye(e.slice(2), t ? 2 : 8) : se.test(e) ? NaN : +e
        };
        const de = function(e, n, t) { return void 0 === t && (t = n, n = void 0), void 0 !== t && (t = (t = ge(t)) == t ? t : 0), void 0 !== n && (n = (n = ge(n)) == n ? n : 0), R(ge(e), n, t) };

        function _e(e, n) {
            return void 0 === e && (e = -1 / 0), void 0 === n && (n = 1 / 0),
                function(t, r) {
                    var i = "_" + r;
                    Object.defineProperty(t, r, { get: function() { return this[i] }, set: function(t) { Object.defineProperty(this, i, { value: de(t, e, n), enumerable: !1, writable: !0, configurable: !0 }) }, enumerable: !0, configurable: !0 })
                }
        }

        function he(e, n) {
            var t = "_" + n;
            Object.defineProperty(e, n, { get: function() { return this[t] }, set: function(e) { Object.defineProperty(this, t, { value: !!e, enumerable: !1, writable: !0, configurable: !0 }) }, enumerable: !0, configurable: !0 })
        }
        var fe, ve = function() {
                function e(e) {
                    var n = this;
                    void 0 === e && (e = {}), this.damping = .1, this.thumbMinSize = 20, this.renderByPixels = !0, this.alwaysShowTracks = !1, this.continuousScrolling = !0, this.delegateTo = null, this.plugins = {}, Object.keys(e).forEach((function(t) { n[t] = e[t] }))
                }
                return Object.defineProperty(e.prototype, "wheelEventTarget", { get: function() { return this.delegateTo }, set: function(e) { console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = e }, enumerable: !0, configurable: !0 }), V([_e(0, 1)], e.prototype, "damping", void 0), V([_e(0, 1 / 0)], e.prototype, "thumbMinSize", void 0), V([he], e.prototype, "renderByPixels", void 0), V([he], e.prototype, "alwaysShowTracks", void 0), V([he], e.prototype, "continuousScrolling", void 0), e
            }(),
            me = new WeakMap;

        function be() {
            if (void 0 !== fe) return fe;
            var e = !1;
            try {
                var n = function() {},
                    t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                window.addEventListener("testPassive", n, t), window.removeEventListener("testPassive", n, t)
            } catch (e) {}
            return fe = !!e && { passive: !1 }
        }

        function xe(e) {
            var n = me.get(e) || [];
            return me.set(e, n),
                function(e, t, r) {
                    function i(e) { e.defaultPrevented || r(e) }
                    t.split(/\s+/g).forEach((function(t) { n.push({ elem: e, eventName: t, handler: i }), e.addEventListener(t, i, be()) }))
                }
        }

        function we(e) { var n = function(e) { return e.touches ? e.touches[e.touches.length - 1] : e }(e); return { x: n.clientX, y: n.clientY } }

        function Ee(e, n) { return void 0 === n && (n = []), n.some((function(n) { return e === n })) }
        var Se = ["webkit", "moz", "ms", "o"],
            Me = new RegExp("^-(?!(?:" + Se.join("|") + ")-)");

        function ke(e, n) {
            n = function(e) {
                var n = {};
                return Object.keys(e).forEach((function(t) {
                    if (Me.test(t)) {
                        var r = e[t];
                        t = t.replace(/^-/, ""), n[t] = r, Se.forEach((function(e) { n["-" + e + "-" + t] = r }))
                    } else n[t] = e[t]
                })), n
            }(n), Object.keys(n).forEach((function(t) {
                var r = t.replace(/^-/, "").replace(/-([a-z])/g, (function(e, n) { return n.toUpperCase() }));
                e.style[r] = n[t]
            }))
        }
        var Le = function() {
                function e(e) { this.updateTime = Date.now(), this.delta = { x: 0, y: 0 }, this.velocity = { x: 0, y: 0 }, this.lastPosition = { x: 0, y: 0 }, this.lastPosition = we(e) }
                return e.prototype.update = function(e) {
                    var n = this,
                        t = n.velocity,
                        r = n.updateTime,
                        i = n.lastPosition,
                        a = Date.now(),
                        l = we(e),
                        o = { x: -(l.x - i.x), y: -(l.y - i.y) },
                        p = a - r || 16,
                        s = o.x / p * 16,
                        u = o.y / p * 16;
                    t.x = .9 * s + .1 * t.x, t.y = .9 * u + .1 * t.y, this.delta = o, this.updateTime = a, this.lastPosition = l
                }, e
            }(),
            Te = function() {
                function e() { this._touchList = {} }
                return Object.defineProperty(e.prototype, "_primitiveValue", { get: function() { return { x: 0, y: 0 } }, enumerable: !0, configurable: !0 }), e.prototype.isActive = function() { return void 0 !== this._activeTouchID }, e.prototype.getDelta = function() { var e = this._getActiveTracker(); return e ? N({}, e.delta) : this._primitiveValue }, e.prototype.getVelocity = function() { var e = this._getActiveTracker(); return e ? N({}, e.velocity) : this._primitiveValue }, e.prototype.track = function(e) {
                    var n = this,
                        t = e.targetTouches;
                    return Array.from(t).forEach((function(e) { n._add(e) })), this._touchList
                }, e.prototype.update = function(e) {
                    var n = this,
                        t = e.touches,
                        r = e.changedTouches;
                    return Array.from(t).forEach((function(e) { n._renew(e) })), this._setActiveID(r), this._touchList
                }, e.prototype.release = function(e) {
                    var n = this;
                    delete this._activeTouchID, Array.from(e.changedTouches).forEach((function(e) { n._delete(e) }))
                }, e.prototype._add = function(e) {
                    if (!this._has(e)) {
                        var n = new Le(e);
                        this._touchList[e.identifier] = n
                    }
                }, e.prototype._renew = function(e) { this._has(e) && this._touchList[e.identifier].update(e) }, e.prototype._delete = function(e) { delete this._touchList[e.identifier] }, e.prototype._has = function(e) { return this._touchList.hasOwnProperty(e.identifier) }, e.prototype._setActiveID = function(e) { this._activeTouchID = e[e.length - 1].identifier }, e.prototype._getActiveTracker = function() { return this._touchList[this._activeTouchID] }, e
            }();
        const Ae = function() { return Z.Date.now() };
        var ze = Math.max,
            He = Math.min;
        const Oe = function(e, n, t) {
            var r, i, a, l, o, p, s = 0,
                u = !1,
                c = !1,
                y = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function g(n) {
                var t = r,
                    a = i;
                return r = i = void 0, s = n, l = e.apply(a, t)
            }

            function d(e) { return s = e, o = setTimeout(h, n), u ? g(e) : l }

            function _(e) { var t = e - p; return void 0 === p || t >= n || t < 0 || c && e - s >= a }

            function h() {
                var e = Ae();
                if (_(e)) return f(e);
                o = setTimeout(h, function(e) { var t = n - (e - p); return c ? He(t, a - (e - s)) : t }(e))
            }

            function f(e) { return o = void 0, y && r ? g(e) : (r = i = void 0, l) }

            function v() {
                var e = Ae(),
                    t = _(e);
                if (r = arguments, i = this, p = e, t) { if (void 0 === o) return d(p); if (c) return clearTimeout(o), o = setTimeout(h, n), g(p) }
                return void 0 === o && (o = setTimeout(h, n)), l
            }
            return n = ge(n) || 0, U(t) && (u = !!t.leading, a = (c = "maxWait" in t) ? ze(ge(t.maxWait) || 0, n) : a, y = "trailing" in t ? !!t.trailing : y), v.cancel = function() { void 0 !== o && clearTimeout(o), s = 0, r = p = i = o = void 0 }, v.flush = function() { return void 0 === o ? l : f(Ae()) }, v
        };

        function Ce() { for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]; return function(n, t, r) { var i = r.value; return { get: function() { return this.hasOwnProperty(t) || Object.defineProperty(this, t, { value: Oe.apply(void 0, B([i], e)) }), this[t] } } } }
        var qe;
        ! function(e) { e.X = "x", e.Y = "y" }(qe || (qe = {}));
        var Pe = function() {
                function e(e, n) { void 0 === n && (n = 0), this._direction = e, this._minSize = n, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + e }
                return e.prototype.attachTo = function(e) { e.appendChild(this.element) }, e.prototype.update = function(e, n, t) { this.realSize = Math.min(n / t, 1) * n, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = e / t * (n + (this.realSize - this.displaySize)), ke(this.element, this._getStyle()) }, e.prototype._getStyle = function() {
                    switch (this._direction) {
                        case qe.X:
                            return { width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)" };
                        case qe.Y:
                            return { height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)" };
                        default:
                            return null
                    }
                }, e
            }(),
            Ie = function() {
                function e(e, n) { void 0 === n && (n = 0), this.element = document.createElement("div"), this._isShown = !1, this.element.className = "scrollbar-track scrollbar-track-" + e, this.thumb = new Pe(e, n), this.thumb.attachTo(this.element) }
                return e.prototype.attachTo = function(e) { e.appendChild(this.element) }, e.prototype.show = function() { this._isShown || (this._isShown = !0, this.element.classList.add("show")) }, e.prototype.hide = function() { this._isShown && (this._isShown = !1, this.element.classList.remove("show")) }, e.prototype.update = function(e, n, t) { ke(this.element, { display: t <= n ? "none" : "block" }), this.thumb.update(e, n, t) }, e
            }(),
            De = function() {
                function e(e) {
                    this._scrollbar = e;
                    var n = e.options.thumbMinSize;
                    this.xAxis = new Ie(qe.X, n), this.yAxis = new Ie(qe.Y, n), this.xAxis.attachTo(e.containerEl), this.yAxis.attachTo(e.containerEl), e.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show())
                }
                return e.prototype.update = function() {
                    var e = this._scrollbar,
                        n = e.size,
                        t = e.offset;
                    this.xAxis.update(t.x, n.container.width, n.content.width), this.yAxis.update(t.y, n.container.height, n.content.height)
                }, e.prototype.autoHideOnIdle = function() { this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide()) }, V([Ce(300)], e.prototype, "autoHideOnIdle", null), e
            }();
        var je = new WeakMap;

        function Ne(e) { return Math.pow(e - 1, 3) + 1 }
        var Ve, Be, Re, Ye = function() {
                function e(e, n) {
                    var t = this.constructor;
                    this.scrollbar = e, this.name = t.pluginName, this.options = N(N({}, t.defaultOptions), n)
                }
                return e.prototype.onInit = function() {}, e.prototype.onDestroy = function() {}, e.prototype.onUpdate = function() {}, e.prototype.onRender = function(e) {}, e.prototype.transformDelta = function(e, n) { return N({}, e) }, e.pluginName = "", e.defaultOptions = {}, e
            }(),
            Fe = { order: new Set, constructors: {} };

        function Xe() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            e.forEach((function(e) {
                var n = e.pluginName;
                if (!n) throw new TypeError("plugin name is required");
                Fe.order.add(n), Fe.constructors[n] = e
            }))
        }

        function $e(e) {
            var n = xe(e),
                t = e.containerEl;
            n(t, "keydown", (function(n) {
                var r = document.activeElement;
                if ((r === t || t.contains(r)) && ! function(e) { if ("INPUT" === e.tagName || "SELECT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !e.disabled; return !1 }(r)) {
                    var i = function(e, n) {
                        var t = e.size,
                            r = e.limit,
                            i = e.offset;
                        switch (n) {
                            case Ve.TAB:
                                return function(e) { requestAnimationFrame((function() { e.scrollIntoView(document.activeElement, { offsetTop: e.size.container.height / 2, onlyScrollIfNeeded: !0 }) })) }(e);
                            case Ve.SPACE:
                                return [0, 200];
                            case Ve.PAGE_UP:
                                return [0, 40 - t.container.height];
                            case Ve.PAGE_DOWN:
                                return [0, t.container.height - 40];
                            case Ve.END:
                                return [0, r.y - i.y];
                            case Ve.HOME:
                                return [0, -i.y];
                            case Ve.LEFT:
                                return [-40, 0];
                            case Ve.UP:
                                return [0, -40];
                            case Ve.RIGHT:
                                return [40, 0];
                            case Ve.DOWN:
                                return [0, 40];
                            default:
                                return null
                        }
                    }(e, n.keyCode || n.which);
                    if (i) {
                        var a = i[0],
                            l = i[1];
                        e.addTransformableMomentum(a, l, n, (function(t) { t ? n.preventDefault() : (e.containerEl.blur(), e.parent && e.parent.containerEl.focus()) }))
                    }
                }
            }))
        }

        function Ue(e) {
            var n, t, r, i, a, l = xe(e),
                o = e.containerEl,
                p = e.track,
                s = p.xAxis,
                u = p.yAxis;

            function c(n, t) { var r = e.size; return n === Be.X ? t / (r.container.width + (s.thumb.realSize - s.thumb.displaySize)) * r.content.width : n === Be.Y ? t / (r.container.height + (u.thumb.realSize - u.thumb.displaySize)) * r.content.height : 0 }

            function y(e) { return Ee(e, [s.element, s.thumb.element]) ? Be.X : Ee(e, [u.element, u.thumb.element]) ? Be.Y : void 0 }
            l(o, "click", (function(n) {
                if (!t && Ee(n.target, [s.element, u.element])) {
                    var r = n.target,
                        i = y(r),
                        a = r.getBoundingClientRect(),
                        l = we(n),
                        o = e.offset,
                        p = e.limit;
                    if (i === Be.X) {
                        var g = l.x - a.left - s.thumb.displaySize / 2;
                        e.setMomentum(de(c(i, g) - o.x, -o.x, p.x - o.x), 0)
                    }
                    if (i === Be.Y) {
                        g = l.y - a.top - u.thumb.displaySize / 2;
                        e.setMomentum(0, de(c(i, g) - o.y, -o.y, p.y - o.y))
                    }
                }
            })), l(o, "mousedown", (function(t) {
                if (Ee(t.target, [s.thumb.element, u.thumb.element])) {
                    n = !0;
                    var l = t.target,
                        p = we(t),
                        c = l.getBoundingClientRect();
                    i = y(l), r = { x: p.x - c.left, y: p.y - c.top }, a = o.getBoundingClientRect(), ke(e.containerEl, { "-user-select": "none" })
                }
            })), l(window, "mousemove", (function(l) {
                if (n) {
                    t = !0;
                    var o = e.offset,
                        p = we(l);
                    if (i === Be.X) {
                        var s = p.x - r.x - a.left;
                        e.setPosition(c(i, s), o.y)
                    }
                    if (i === Be.Y) {
                        s = p.y - r.y - a.top;
                        e.setPosition(o.x, c(i, s))
                    }
                }
            })), l(window, "mouseup blur", (function() { n = t = !1, ke(e.containerEl, { "-user-select": "" }) }))
        }

        function We(e) { xe(e)(window, "resize", Oe(e.update.bind(e), 300)) }

        function Ge(e) {
            var n, t = xe(e),
                r = e.containerEl,
                i = e.contentEl,
                a = e.offset,
                l = e.limit,
                o = !1;

            function p(t) {
                var r = t.x,
                    i = t.y;
                (r || i) && (e.setMomentum(de(a.x + r, 0, l.x) - a.x, de(a.y + i, 0, l.y) - a.y), n = requestAnimationFrame((function() { p({ x: r, y: i }) })))
            }
            t(window, "mousemove", (function(t) {
                o && (cancelAnimationFrame(n), p(function(e, n) {
                    var t = e.bounding,
                        r = t.top,
                        i = t.right,
                        a = t.bottom,
                        l = t.left,
                        o = we(n),
                        p = o.x,
                        s = o.y,
                        u = { x: 0, y: 0 },
                        c = 20;
                    if (0 === p && 0 === s) return u;
                    p > i - c ? u.x = p - i + c : p < l + c && (u.x = p - l - c);
                    s > a - c ? u.y = s - a + c : s < r + c && (u.y = s - r - c);
                    return u.x *= 2, u.y *= 2, u
                }(e, t)))
            })), t(i, "selectstart", (function(e) { e.stopPropagation(), cancelAnimationFrame(n), o = !0 })), t(window, "mouseup blur", (function() { cancelAnimationFrame(n), o = !1 })), t(r, "scroll", (function(e) { e.preventDefault(), r.scrollTop = r.scrollLeft = 0 }))
        }

        function Ze(e) {
            var n, t = /Android/.test(navigator.userAgent) ? 3 : 2,
                r = e.options.delegateTo || e.containerEl,
                i = new Te,
                a = xe(e),
                l = 0;
            a(r, "touchstart", (function(t) { i.track(t), e.setMomentum(0, 0), 0 === l && (n = e.options.damping, e.options.damping = Math.max(n, .5)), l++ })), a(r, "touchmove", (function(n) {
                if (!Re || Re === e) {
                    i.update(n);
                    var t = i.getDelta(),
                        r = t.x,
                        a = t.y;
                    e.addTransformableMomentum(r, a, n, (function(t) { t && n.cancelable && (n.preventDefault(), Re = e) }))
                }
            })), a(r, "touchcancel touchend", (function(r) {
                var a = i.getVelocity(),
                    o = { x: 0, y: 0 };
                Object.keys(a).forEach((function(e) {
                    var r = a[e] / n;
                    o[e] = Math.abs(r) < 50 ? 0 : r * t
                })), e.addTransformableMomentum(o.x, o.y, r), 0 === --l && (e.options.damping = n), i.release(r), Re = null
            }))
        }

        function Je(e) {
            xe(e)(e.options.delegateTo || e.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", (function(n) {
                var t = function(e) { if ("deltaX" in e) { var n = function(e) { return en[e] || en[0] }(e.deltaMode); return { x: e.deltaX / Ke * n, y: e.deltaY / Ke * n } } if ("wheelDeltaX" in e) return { x: e.wheelDeltaX / Qe, y: e.wheelDeltaY / Qe }; return { x: 0, y: e.wheelDelta / Qe } }(n),
                    r = t.x,
                    i = t.y;
                e.addTransformableMomentum(r, i, n, (function(e) { e && n.preventDefault() }))
            }))
        }! function(e) { e[e.TAB = 9] = "TAB", e[e.SPACE = 32] = "SPACE", e[e.PAGE_UP = 33] = "PAGE_UP", e[e.PAGE_DOWN = 34] = "PAGE_DOWN", e[e.END = 35] = "END", e[e.HOME = 36] = "HOME", e[e.LEFT = 37] = "LEFT", e[e.UP = 38] = "UP", e[e.RIGHT = 39] = "RIGHT", e[e.DOWN = 40] = "DOWN" }(Ve || (Ve = {})),
        function(e) { e[e.X = 0] = "X", e[e.Y = 1] = "Y" }(Be || (Be = {}));
        var Ke = 1,
            Qe = -3,
            en = [1, 28, 500];
        var nn = new Map,
            tn = function() {
                function n(e, n) {
                    var t = this;
                    this.offset = { x: 0, y: 0 }, this.limit = { x: 1 / 0, y: 1 / 0 }, this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }, this._plugins = [], this._momentum = { x: 0, y: 0 }, this._listeners = new Set, this.containerEl = e;
                    var r = this.contentEl = document.createElement("div");
                    this.options = new ve(n), e.setAttribute("data-scrollbar", "true"), e.setAttribute("tabindex", "-1"), ke(e, { overflow: "hidden", outline: "none" }), window.navigator.msPointerEnabled && (e.style.msTouchAction = "none"), r.className = "scroll-content", Array.from(e.childNodes).forEach((function(e) { r.appendChild(e) })), e.appendChild(r), this.track = new De(this), this.size = this.getSize(), this._plugins = function(e, n) { return Array.from(Fe.order).filter((function(e) { return !1 !== n[e] })).map((function(t) { var r = new(0, Fe.constructors[t])(e, n[t]); return n[t] = r.options, r })) }(this, this.options.plugins);
                    var i = e.scrollLeft,
                        a = e.scrollTop;
                    e.scrollLeft = e.scrollTop = 0, this.setPosition(i, a, { withoutCallbacks: !0 });
                    var l = window,
                        o = l.MutationObserver || l.WebKitMutationObserver || l.MozMutationObserver;
                    "function" == typeof o && (this._observer = new o((function() { t.update() })), this._observer.observe(r, { subtree: !0, childList: !0 })), nn.set(e, this), requestAnimationFrame((function() { t._init() }))
                }
                return Object.defineProperty(n.prototype, "parent", {
                    get: function() {
                        for (var e = this.containerEl.parentElement; e;) {
                            var n = nn.get(e);
                            if (n) return n;
                            e = e.parentElement
                        }
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "scrollTop", { get: function() { return this.offset.y }, set: function(e) { this.setPosition(this.scrollLeft, e) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "scrollLeft", { get: function() { return this.offset.x }, set: function(e) { this.setPosition(e, this.scrollTop) }, enumerable: !0, configurable: !0 }), n.prototype.getSize = function() { return n = (e = this).containerEl, t = e.contentEl, { container: { width: n.clientWidth, height: n.clientHeight }, content: { width: t.offsetWidth - t.clientWidth + t.scrollWidth, height: t.offsetHeight - t.clientHeight + t.scrollHeight } }; var e, n, t }, n.prototype.update = function() {
                    var e, n, t, r, i;
                    n = (e = this).getSize(), t = { x: Math.max(n.content.width - n.container.width, 0), y: Math.max(n.content.height - n.container.height, 0) }, r = e.containerEl.getBoundingClientRect(), i = { top: Math.max(r.top, 0), right: Math.min(r.right, window.innerWidth), bottom: Math.min(r.bottom, window.innerHeight), left: Math.max(r.left, 0) }, e.size = n, e.limit = t, e.bounding = i, e.track.update(), e.setPosition(), this._plugins.forEach((function(e) { e.onUpdate() }))
                }, n.prototype.isVisible = function(e) {
                    return function(e, n) {
                        var t = e.bounding,
                            r = n.getBoundingClientRect(),
                            i = Math.max(t.top, r.top),
                            a = Math.max(t.left, r.left),
                            l = Math.min(t.right, r.right);
                        return i < Math.min(t.bottom, r.bottom) && a < l
                    }(this, e)
                }, n.prototype.setPosition = function(e, n, t) {
                    var r = this;
                    void 0 === e && (e = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === t && (t = {});
                    var i = function(e, n, t) {
                        var r = e.options,
                            i = e.offset,
                            a = e.limit,
                            l = e.track,
                            o = e.contentEl;
                        return r.renderByPixels && (n = Math.round(n), t = Math.round(t)), n = de(n, 0, a.x), t = de(t, 0, a.y), n !== i.x && l.xAxis.show(), t !== i.y && l.yAxis.show(), r.alwaysShowTracks || l.autoHideOnIdle(), n === i.x && t === i.y ? null : (i.x = n, i.y = t, ke(o, { "-transform": "translate3d(" + -n + "px, " + -t + "px, 0)" }), l.update(), { offset: N({}, i), limit: N({}, a) })
                    }(this, e, n);
                    i && !t.withoutCallbacks && this._listeners.forEach((function(e) { e.call(r, i) }))
                }, n.prototype.scrollTo = function(e, n, t, r) {
                    void 0 === e && (e = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === t && (t = 0), void 0 === r && (r = {}),
                        function(e, n, t, r, i) {
                            void 0 === r && (r = 0);
                            var a = void 0 === i ? {} : i,
                                l = a.easing,
                                o = void 0 === l ? Ne : l,
                                p = a.callback,
                                s = e.options,
                                u = e.offset,
                                c = e.limit;
                            s.renderByPixels && (n = Math.round(n), t = Math.round(t));
                            var y = u.x,
                                g = u.y,
                                d = de(n, 0, c.x) - y,
                                _ = de(t, 0, c.y) - g,
                                h = Date.now();
                            cancelAnimationFrame(je.get(e)),
                                function n() {
                                    var t = Date.now() - h,
                                        i = r ? o(Math.min(t / r, 1)) : 1;
                                    if (e.setPosition(y + d * i, g + _ * i), t >= r) "function" == typeof p && p.call(e);
                                    else {
                                        var a = requestAnimationFrame(n);
                                        je.set(e, a)
                                    }
                                }()
                        }(this, e, n, t, r)
                }, n.prototype.scrollIntoView = function(e, n) {
                    void 0 === n && (n = {}),
                        function(e, n, t) {
                            var r = void 0 === t ? {} : t,
                                i = r.alignToTop,
                                a = void 0 === i || i,
                                l = r.onlyScrollIfNeeded,
                                o = void 0 !== l && l,
                                p = r.offsetTop,
                                s = void 0 === p ? 0 : p,
                                u = r.offsetLeft,
                                c = void 0 === u ? 0 : u,
                                y = r.offsetBottom,
                                g = void 0 === y ? 0 : y,
                                d = e.containerEl,
                                _ = e.bounding,
                                h = e.offset,
                                f = e.limit;
                            if (n && d.contains(n)) {
                                var v = n.getBoundingClientRect();
                                if (!o || !e.isVisible(n)) {
                                    var m = a ? v.top - _.top - s : v.bottom - _.bottom + g;
                                    e.setMomentum(v.left - _.left - c, de(m, -h.y, f.y - h.y))
                                }
                            }
                        }(this, e, n)
                }, n.prototype.addListener = function(e) {
                    if ("function" != typeof e) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                    this._listeners.add(e)
                }, n.prototype.removeListener = function(e) { this._listeners.delete(e) }, n.prototype.addTransformableMomentum = function(e, n, t, r) {
                    this._updateDebounced();
                    var i = this._plugins.reduce((function(e, n) { return n.transformDelta(e, t) || e }), { x: e, y: n }),
                        a = !this._shouldPropagateMomentum(i.x, i.y);
                    a && this.addMomentum(i.x, i.y), r && r.call(this, a)
                }, n.prototype.addMomentum = function(e, n) { this.setMomentum(this._momentum.x + e, this._momentum.y + n) }, n.prototype.setMomentum = function(e, n) { 0 === this.limit.x && (e = 0), 0 === this.limit.y && (n = 0), this.options.renderByPixels && (e = Math.round(e), n = Math.round(n)), this._momentum.x = e, this._momentum.y = n }, n.prototype.updatePluginOptions = function(e, n) { this._plugins.forEach((function(t) { t.name === e && Object.assign(t.options, n) })) }, n.prototype.destroy = function() {
                    var e, n, t = this.containerEl,
                        r = this.contentEl;
                    e = this, (n = me.get(e)) && (n.forEach((function(e) {
                        var n = e.elem,
                            t = e.eventName,
                            r = e.handler;
                        n.removeEventListener(t, r, be())
                    })), me.delete(e)), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), nn.delete(this.containerEl);
                    for (var i = Array.from(r.childNodes); t.firstChild;) t.removeChild(t.firstChild);
                    i.forEach((function(e) { t.appendChild(e) })), ke(t, { overflow: "" }), t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, this._plugins.forEach((function(e) { e.onDestroy() })), this._plugins.length = 0
                }, n.prototype._init = function() {
                    var n = this;
                    this.update(), Object.keys(e).forEach((function(t) { e[t](n) })), this._plugins.forEach((function(e) { e.onInit() })), this._render()
                }, n.prototype._updateDebounced = function() { this.update() }, n.prototype._shouldPropagateMomentum = function(e, n) {
                    void 0 === e && (e = 0), void 0 === n && (n = 0);
                    var t = this,
                        r = t.options,
                        i = t.offset,
                        a = t.limit;
                    if (!r.continuousScrolling) return !1;
                    0 === a.x && 0 === a.y && this._updateDebounced();
                    var l = de(e + i.x, 0, a.x),
                        o = de(n + i.y, 0, a.y),
                        p = !0;
                    return p = (p = (p = p && l === i.x) && o === i.y) && (i.x === a.x || 0 === i.x || i.y === a.y || 0 === i.y)
                }, n.prototype._render = function() {
                    var e = this._momentum;
                    if (e.x || e.y) {
                        var n = this._nextTick("x"),
                            t = this._nextTick("y");
                        e.x = n.momentum, e.y = t.momentum, this.setPosition(n.position, t.position)
                    }
                    var r = N({}, this._momentum);
                    this._plugins.forEach((function(e) { e.onRender(r) })), this._renderID = requestAnimationFrame(this._render.bind(this))
                }, n.prototype._nextTick = function(e) {
                    var n = this,
                        t = n.options,
                        r = n.offset,
                        i = n._momentum,
                        a = r[e],
                        l = i[e];
                    if (Math.abs(l) <= .1) return { momentum: 0, position: a + l };
                    var o = l * (1 - t.damping);
                    return t.renderByPixels && (o |= 0), { momentum: o, position: a + l - o }
                }, V([Ce(100, { leading: !0 })], n.prototype, "_updateDebounced", null), n
            }(),
            rn = "smooth-scrollbar-style",
            an = !1;

        function ln() {
            if (!an && "undefined" != typeof window) {
                var e = document.createElement("style");
                e.id = rn, e.textContent = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n", document.head && document.head.appendChild(e), an = !0
            }
        }
        const on = function(e) {
            function n() { return null !== e && e.apply(this, arguments) || this }
            return function(e, n) {
                function t() { this.constructor = e }
                j(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }(n, e), n.init = function(e, n) { if (!e || 1 !== e.nodeType) throw new TypeError("expect element to be DOM Element, but got " + e); return ln(), nn.has(e) ? nn.get(e) : new tn(e, n) }, n.initAll = function(e) { return Array.from(document.querySelectorAll("[data-scrollbar]"), (function(t) { return n.init(t, e) })) }, n.has = function(e) { return nn.has(e) }, n.get = function(e) { return nn.get(e) }, n.getAll = function() { return Array.from(nn.values()) }, n.destroy = function(e) {
                var n = nn.get(e);
                n && n.destroy()
            }, n.destroyAll = function() { nn.forEach((function(e) { e.destroy() })) }, n.use = function() { for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]; return Xe.apply(void 0, e) }, n.attachStyle = function() { return ln() }, n.detachStyle = function() {
                return function() {
                    if (an && "undefined" != typeof window) {
                        var e = document.getElementById(rn);
                        e && e.parentNode && (e.parentNode.removeChild(e), an = !1)
                    }
                }()
            }, n.version = "8.6.0", n.ScrollbarPlugin = Ye, n
        }(tn);
        var pn = t(901),
            sn = t.n(pn);

        function un(e, n, t) { let r = [e, n, t].map((function(e) { return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4) })); return .2126 * r[0] + .7152 * r[1] + .0722 * r[2] }

        function cn(e, n) {
            let t = un(e[0], e[1], e[2]),
                r = un(n[0], n[1], n[2]);
            return (Math.max(t, r) + .05) / (Math.min(t, r) + .05)
        }

        function yn(e, n) { let t = []; for (let r of n) t.push(cn(e, r)); let r = Math.max.apply(null, t); return r < 4.5 ? (299 * (i = e)[0] + 587 * i[1] + 114 * i[2]) / 1e3 >= 125 ? [0, 0, 0] : [255, 255, 255] : n[t.indexOf(r)]; var i }

        function gn(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e }
        class dn {
            constructor(e) { gn(this, "activeEl", void 0), gn(this, "barEl", void 0), gn(this, "innerEl", void 0), gn(this, "value", void 0), gn(this, "dragging", !1), gn(this, "beginDragHandlers", []), gn(this, "endDragHandlers", []), gn(this, "valueChangeHandlers", []), gn(this, "minValue", null), gn(this, "maxValue", null), this.activeEl = Xn.querySelector(e.activeSelector), this.barEl = Xn.querySelector(e.barSelector), this.innerEl = Xn.querySelector(e.innerSelector), this.value = e.value || 1, c(this.activeEl, "mousedown", (e => { this.handleBeginDrag(e) })), c(this.activeEl, "touchstart", (e => { this.handleBeginDrag(e) })), window.addEventListener("mousemove", (e => { this.update(e) })), window.addEventListener("touchmove", (e => { this.update(e) })), window.addEventListener("mouseup", (e => { this.handleEndDrag(e) })), window.addEventListener("touchend", (e => { this.handleEndDrag(e) })) }
            handleBeginDrag(e) { e instanceof MouseEvent && e.preventDefault(), this.dragging || (this.dragging = !0, this.barEl.classList.add("penguin-player--slider-dragging"), b(this.beginDragHandlers, e), this.update(e)) }
            handleEndDrag(e) {!this.dragging || "TouchEvent" in window && e instanceof TouchEvent && e.touches.length > 0 || (this.dragging = !1, this.barEl.classList.remove("penguin-player--slider-dragging"), b(this.endDragHandlers, e)) }
            update(e) {
                if (!this.dragging) return;
                let n;
                n = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
                let t = this.barEl.clientWidth,
                    r = Math.min(Math.max(0, n - function(e, n) { let t = 0; for (; e;) t += e[n], e = e.offsetParent; return t }(this.barEl, "offsetLeft")), t) / t;
                r = Math.max(Math.min(r, this.maxValue || 1), this.minValue || 0), r != this.value && this.setValue(r)
            }
            addEventHandler(e, n) {
                switch (e) {
                    case "begindrag":
                        this.beginDragHandlers.push(n);
                        break;
                    case "enddrag":
                        this.endDragHandlers.push(n);
                        break;
                    case "valuechange":
                        this.valueChangeHandlers.push(n)
                }
            }
            setValue(e) { b(this.valueChangeHandlers, e) || (this.innerEl.style.width = 100 * e + "%", this.value = e) }
        }
        let _n, hn, fn;

        function vn(e, n) {
            let t = `rgba(${e.join(", ")}, 0.5)`,
                r = `rgb(${yn(e,n).join(", ")})`,
                i = Xn.querySelector(".penguin-player__player");
            i.style.backgroundColor = t, i.style.color = i.style.fill = r, Xn.querySelector(".penguin-player__player--thumbnail-progress-left").style.borderColor = Xn.querySelector(".penguin-player__player--thumbnail-progress-right").style.borderColor = r;
            let a = Xn.querySelector(".penguin-player__player--full-content"),
                l = Xn.querySelector(".penguin-player__player--playlist");
            r = `rgb(${yn([255,255,255],n).join(", ")})`, l.style.color = l.style.fill = a.style.color = a.style.fill = r;
            let o = `rgba(${yn([255,255,255],n).join(", ")}, 0.5)`;
            Xn.querySelector(".penguin-player__player--progress-bar").style.backgroundColor = Xn.querySelector(".penguin-player__player--controls-volume-bar").style.backgroundColor = Xn.querySelector(".penguin-player__lyric").style.color = o, Xn.querySelectorAll(".penguin-player__player--progress-inner, .penguin-player__player--progress-dot, .penguin-player__player--controls-volume-inner, .penguin-player__player--controls-volume-dot").forEach((e => { e.style.backgroundColor = r })), f("themecolorchange", e, yn(e, n), yn([255, 255, 255], n), yn([0, 0, 0], n), n)
        }

        function mn(e, n) {
            let t = document.createElement("div");
            t.classList.add("penguin-player__player--playlist-song"), t.setAttribute("role", "listitem"), t.addEventListener("click", n);
            let r = document.createElement("img");
            r.classList.add("penguin-player__player--playlist-thumbnail"), r.classList.add("penguin-player--lazy"), r.crossOrigin = "anonymous", r.setAttribute("data-src", e.thumbnail + "?param=36y36"), t.appendChild(r);
            let i = document.createElement("h1");
            i.classList.add("penguin-player__player--playlist-title"), i.textContent = e.name, t.appendChild(i);
            let a = document.createElement("p");
            return a.classList.add("penguin-player__player--playlist-artists"), a.textContent = e.artists, t.appendChild(a), t
        }

        function bn(e) {
            ! function(e) {
                let n = Xn.querySelector(".penguin-player__player--thumbnail-img");
                e ? n.classList.add("rotate") : n.classList.remove("rotate")
            }(e), Xn.querySelector(".penguin-player__lyric").style.opacity = e ? "1" : "0"
        }
        h("setup", (() => {
            let e, n = Xn.querySelector(".penguin-player__audio");
            n.addEventListener("playing", (() => bn(!0))), n.addEventListener("pause", (() => bn(!1))), n.addEventListener("progress", (function() { this.buffered.length <= 0 || (Xn.querySelector(".penguin-player__player--progress-buffered").style.width = (this.buffered.end(this.buffered.length - 1) + ((null == zn ? void 0 : zn.start) || 0)) / En[wn].duration * 100 + "%") })), n.addEventListener("timeupdate", (function() {
                ! function(e) {
                    let n = Xn.querySelector(".penguin-player__player--thumbnail-progress"),
                        t = Xn.querySelector(".penguin-player__player--thumbnail-progress-left"),
                        r = Xn.querySelector(".penguin-player__player--thumbnail-progress-right");
                    e <= 50 ? (n.style.clip = "", t.style.transform = "rotate(0deg)", r.style.transform = `rotate(${e/50*180}deg)`) : (n.style.clip = "auto", t.style.transform = `rotate(${e/100*360}deg)`, r.style.transform = "rotate(180deg)")
                }(Pn() / En[wn].duration * 100), Xn.querySelector(".penguin-player__player--progress-current").textContent = s(Pn()), Xn.querySelector(".penguin-player__player--progress-inner").style.width = Pn() / En[wn].duration * 100 + "%"
            })), Xn.querySelector(".penguin-player__player--controls-previous").addEventListener("click", Nn), Xn.querySelector(".penguin-player__player--controls-next").addEventListener("click", jn), Xn.querySelector(".penguin-player__player--full-toggle").addEventListener("click", (function() {
                let e = Xn.querySelector(".penguin-player__player");
                e.classList.contains("penguin-player__player-full") ? (e.classList.remove("penguin-player__player-playlist"), e.classList.remove("penguin-player__player-full")) : e.classList.add("penguin-player__player-full")
            })), Xn.querySelector(".penguin-player__player--controls-playlist").addEventListener("click", (() => {
                let e = Xn.querySelector(".penguin-player__player");
                e.classList.contains("penguin-player__player-playlist") ? e.classList.remove("penguin-player__player-playlist") : e.classList.add("penguin-player__player-playlist")
            })), Xn.querySelector(".penguin-player__player--thumbnail-img").addEventListener("load", (function() { vn($n.getColor(this), $n.getPalette(this)) })), Xn.querySelector(".penguin-player__player--thumbnail-play-pause").addEventListener("click", (() => {
                if (56 == Xn.querySelector(".penguin-player__player").clientWidth) return;
                let e = Xn.querySelector(".penguin-player__audio");
                e.paused ? e.play().catch() : e.pause()
            })), hn = new dn({ activeSelector: ".penguin-player__player--progress", barSelector: ".penguin-player__player--progress-bar", innerSelector: ".penguin-player__player--progress-inner", value: 0 }), hn.addEventHandler("begindrag", (() => { e = n.paused, n.pause() })), hn.addEventHandler("enddrag", (() => { e || n.play().catch() })), hn.addEventHandler("valuechange", (e => {
                let t = En[wn].duration,
                    r = t * e;
                return n.currentTime = r - ((null == zn ? void 0 : zn.start) || 0), e < (null == zn ? void 0 : zn.start) / t || e > (null == zn ? void 0 : zn.end) / t
            })), _n = new dn({ activeSelector: ".penguin-player__player--controls-volume", barSelector: ".penguin-player__player--controls-volume-bar", innerSelector: ".penguin-player__player--controls-volume-inner" }), _n.addEventHandler("valuechange", (e => { n.volume = e, localStorage.setItem("penguinplayer_volume", e.toString()) })), window.addEventListener("mousemove", (e => { e.pageY >= window.innerHeight - 60 ? Xn.querySelector(".penguin-player__lyric").classList.add("penguin-player__lyric-hover") : Xn.querySelector(".penguin-player__lyric").classList.remove("penguin-player__lyric-hover") })), on.init(Xn.querySelector(".penguin-player__player--playlist"), { damping: .15 })
        })), h("playtrack", (() => { Xn.querySelector(".penguin-player__player--trial-icon").style.display = zn ? "inline-block" : "none" }));
        let xn;
        ! function(e) { e[e.List = 0] = "List", e[e.ListLoop = 1] = "ListLoop", e[e.SingleLoop = 2] = "SingleLoop", e[e.Random = 3] = "Random" }(xn || (xn = {}));
        let wn, En = [];

        function Sn(e) {
            if (void 0 === e) return kn;
            kn = e, localStorage.setItem("penguinplayer_playmode", kn.toString()), On()
        }
        let Mn, kn = xn.ListLoop,
            Ln = 0;
        const Tn = () => { Ln++, u(`Cannot play song ${En[wn].name}`), Ln >= 5 ? u(`Failed ${Ln} times, stop trying`) : jn() };
        let An, zn;

        function Hn() {
            switch (kn) {
                case xn.List:
                    wn != En.length - 1 && jn();
                    break;
                case xn.ListLoop:
                    jn();
                    break;
                case xn.SingleLoop:
                    In();
                    break;
                case xn.Random:
                    In(Math.floor(En.length * Math.random()))
            }
        }

        function On() {
            let e = Xn.querySelector(".penguin-player__player--controls-playmode");
            switch (kn) {
                case xn.List:
                    e.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 0 1 .75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>', e.setAttribute("data-mode", "列表播放");
                    break;
                case xn.ListLoop:
                    e.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 9H2v2h17V9m0-4H2v2h17V5M2 15h13v-2H2v2m15-2v6l5-3-5-3z"/></svg>', e.setAttribute("data-mode", "列表循环");
                    break;
                case xn.SingleLoop:
                    e.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 18a6 6 0 0 1-6-6c0-1 .25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12a8 8 0 0 0 8 8v3l4-4-4-4m0-11V1L8 5l4 4V6a6 6 0 0 1 6 6c0 1-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12a8 8 0 0 0-8-8z"/></svg>', e.setAttribute("data-mode", "单曲循环");
                    break;
                case xn.Random:
                    e.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="m21 9-4-4v3h-7v2h7v3M7 11l-4 4 4 4v-3h7v-2H7v-3z"/></svg>', e.setAttribute("data-mode", "随机播放")
            }
        }

        function Cn() {
            vn([255, 255, 255], [
                    [0, 0, 0]
                ]),
                function() {
                    let e = Xn.querySelector(".penguin-player__player--thumbnail-img");
                    e.style.animation = "none", setTimeout((() => { e.style.animation = "" }))
                }(), zn = null
        }

        function qn(e) { _n.setValue(e) }

        function Pn() { var e; return An.currentTime + ((null === (e = zn) || void 0 === e ? void 0 : e.start) || 0) }

        function In(e) {
            if ("number" == typeof e) {
                var n;
                if (e < 0 || e >= En.length) throw "Invalid song index";
                An.pause();
                let t = En[wn = e];
                Cn(),
                    function(e) { Xn.querySelector(".penguin-player__player--thumbnail-img").src = e.thumbnail + "?param=48y48", Xn.querySelector(".penguin-player__player--name").textContent = e.name, Xn.querySelector(".penguin-player__player--artists").textContent = e.artists, "mediaSession" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({ title: e.name, artist: e.artists, album: e.album, artwork: [{ src: e.thumbnail + "?param=96y96", sizes: "96x96" }, { src: e.thumbnail + "?param=128y128", sizes: "128x128" }, { src: e.thumbnail + "?param=192y192", sizes: "192x192" }, { src: e.thumbnail + "?param=256y256", sizes: "256x256" }, { src: e.thumbnail + "?param=384y384", sizes: "384x384" }, { src: e.thumbnail + "?param=512y512", sizes: "512x512" }] })) }(t), Xn.querySelector(".penguin-player__player--progress-duration").textContent = s(t.duration), null === (n = Mn) || void 0 === n || n.cancel(), Mn = y(`https://gcm.tenmahw.com/song/url?id=${t.id}`).send().then((e => {
                        if (200 == e.data.code) {
                            let n = e.data.data[0];
                            n.url ? function(e) { hn.maxValue = hn.minValue = null, zn = e.freeTrialInfo, An.src = e.url.replace("http:", "https:"), In(), f("playtrack", e) }(n) : (u(`${t.name} is unavailable`), jn())
                        } else Tn()
                    })).catch(Tn), D(t), f("songchange", t)
            } else An.play().catch()
        }

        function Dn() { An.pause() }

        function jn() { In(wn >= En.length - 1 ? 0 : wn + 1) }

        function Nn() { In(wn <= 0 ? En.length - 1 : wn - 1) }
        h("setup", (() => { An = Xn.querySelector(".penguin-player__audio"), An.addEventListener("playing", (() => Ln = 0)), An.addEventListener("error", Tn), An.addEventListener("ended", Hn), Xn.querySelector(".penguin-player__player--controls-playmode").addEventListener("click", (() => { Sn(Object.values(xn).includes(kn + 1) ? kn + 1 : 0) })), h("initialized", (() => { Object.values(xn).includes(Un.overridePlaymode) ? Sn(Un.overridePlaymode) : null === localStorage.getItem("penguinplayer_playmode") || isNaN(parseInt(localStorage.getItem("penguinplayer_playmode"))) || Sn(parseInt(localStorage.getItem("penguinplayer_playmode"))), On() })) }));
        var Vn = t(379),
            Bn = t.n(Vn),
            Rn = t(125),
            Yn = { insert: "head", singleton: !1 };
        Bn()(Rn.Z, Yn);
        Rn.Z.locals;
        let Fn = document.createElement("div");
        Fn.className = "penguin-player", Fn.innerHTML = '<audio class="penguin-player__audio"></audio><div class="penguin-player__player"><div class="penguin-player__player--mini"><div class="penguin-player__player--thumbnail"><img class="penguin-player__player--thumbnail-img" crossorigin="anonymous"/><div class="penguin-player__player--thumbnail-play-pause" role="button"><div class="penguin-player__player--thumbnail-play"><svg width="24" height="24" preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24"><path d="M8 5.14v14l11-7-11-7z"/></svg></div><div class="penguin-player__player--thumbnail-pause"><svg width="24" height="24" preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24"><path d="M14 19h4V5h-4M6 19h4V5H6v14z"/></svg></div></div><div class="penguin-player__player--thumbnail-progress"><div class="penguin-player__player--thumbnail-progress-left"></div><div class="penguin-player__player--thumbnail-progress-right"></div></div></div><div class="penguin-player__player--expanded-content"><h1 class="penguin-player__player--title"><span class="penguin-player__player--trial-icon"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-5 0-9 4-9 9v7a3 3 0 0 0 3 3h3v-8H5v-2a7 7 0 0 1 7-7 7 7 0 0 1 7 7v2h-4v8h3a3 3 0 0 0 3-3v-7c0-5-4.03-9-9-9z"/></svg></span><span class="penguin-player__player--name"></span></h1><p class="penguin-player__player--artists"></p><button class="penguin-player__player--full-toggle" role="button"><div class="penguin-player__player--full-toggle-menu"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/></svg></div><div class="penguin-player__player--full-toggle-close"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></div></button></div></div><div class="penguin-player__player--full-content"><div class="penguin-player__player--progress"><div class="penguin-player__player--progress-bar"><div class="penguin-player__player--progress-buffered"></div><div class="penguin-player__player--progress-inner"><div class="penguin-player__player--progress-dot"></div></div></div><div class="penguin-player__player--progress-time"><span class="penguin-player__player--progress-current"></span><span class="penguin-player__player--progress-duration"></span></div></div><div class="penguin-player__player--controls"><div class="penguin-player__player--controls-previous" role="button"><svg width="24" height="24" preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24"><path d="M6 18V6h2v12H6m3.5-6L18 6v12l-8.5-6z"/></svg></div><div class="penguin-player__player--controls-next" role="button"><svg width="24" height="24" preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24"><path d="M16 18h2V6h-2M6 18l8.5-6L6 6v12z"/></svg></div><div class="penguin-player__player--controls-playmode" role="button"></div><div class="penguin-player__player--controls-volume"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z"/></svg><div class="penguin-player__player--controls-volume-bar"><div class="penguin-player__player--controls-volume-inner"><div class="penguin-player__player--controls-volume-dot"></div></div></div></div><div class="penguin-player__player--controls-playlist" role="button"><svg width="24" height="24" preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24"><path d="M15 6H3v2h12V6m0 4H3v2h12v-2M3 16h8v-2H3v2M17 6v8.18c-.31-.11-.65-.18-1-.18a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V8h3V6h-5z"/></svg></div></div></div><div class="penguin-player__player--playlist" role="list"></div></div><div class="penguin-player__lyric"><h1 class="penguin-player__lyric--line" line-name="main"></h1><h2 class="penguin-player__lyric--line" line-name="sub"></h2><div class="penguin-player__lyric--background"></div><div class="penguin-player__lyric--expand-button" role="button"><svg preserveAspectRatio="xMinYMin meet" width="24" height="24" viewBox="0 0 24 24"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/></svg></div></div><div class="penguin-player__lyric-settings"><h1 class="penguin-player__lyric-settings--title">歌词选项</h1><p class="penguin-player__lyric-settings--status"><span class="penguin-player__lyric-settings--status-lrc-icon"></span><span class="penguin-player__lyric-settings--status-lrc-text"></span>&nbsp;&nbsp;<span class="penguin-player__lyric-settings--status-tlrc-icon"></span><span class="penguin-player__lyric-settings--status-tlrc-text"></span></p><div class="penguin-player__lyric-settings--lyric-offset"><span class="penguin-player__lyric-settings--lyric-offset-up"><svg width="24" height="24" preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24"><path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg></span><input class="penguin-player__lyric-settings--lyric-offset-value" type="number" value="0" step="0.5"/><span class="penguin-player__lyric-settings--lyric-offset-down"><svg width="24" height="24" preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24"><path d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z"/></svg></span></div></div><div class="penguin-player__lyric-settings--overlay"></div>';
        const Xn = Fn,
            $n = new p;
        let Un; {
            let e = Fn.querySelector(".penguin-player__audio");
            e.addEventListener("playing", Jn), e.addEventListener("pause", Jn), e.addEventListener("error", (() => { u("Cannot play " + En[wn].name), jn() })), h("initialized", (() => {
                if (qn(1), "number" == typeof Un.overrideVolume) qn(Un.overrideVolume);
                else try { if (null !== localStorage.getItem("penguinplayer_volume")) { qn(parseInt(localStorage.getItem("penguinplayer_volume"))) } } catch { u("Invalid volume storage") }
            })), f("setup")
        }

        function Wn(e) { Un = "string" == typeof e ? { playlist: e } : e, Zn(Un.playlist) }

        function Gn(e) {
            if (u("Initializing..."), null == document.querySelector(".penguin-player")) {
                u(`Using playlist ${e.name}`);
                for (let n of e.tracks) {
                    let e = "";
                    for (let t of n.ar) e += `, ${t.name}`;
                    En.push({ id: n.id, name: n.name, artists: e.substring(2), album: n.al.name, thumbnail: n.al.picUrl.replace("http:", "https:"), duration: n.dt / 1e3 })
                }
                u("Playlist processed"),
                    function(e) {
                        let n = Xn.querySelector(".penguin-player__player--playlist");
                        n = n.querySelector(".scroll-content") || n;
                        for (let t = 0; t < e.length; t++) n.appendChild(mn(e[t], (() => { In(t) })));
                        fn = new(sn())({ container: n, elements_selector: ".penguin-player--lazy", unobserve_entered: !0 })
                    }(En), document.body.appendChild(Fn), f("initialized"), In(Math.floor(Math.random() * En.length)), u("Player ready")
            } else u("Initialize cancelled! Already initialized")
        }

        function Zn(e) {
            u("Fetching playlist..."), y(`https://gcm.tenmahw.com/resolve/playlist?id=${e}`).send().then((e => {
                if (null == e.data || 200 != e.data.code) u("Cannot fetch playlist"), setTimeout(Zn, 3e3);
                else try { Gn(e.data.playlist) } catch (e) { console.error(e) }
            })).catch((() => { u("Cannot fetch playlist"), setTimeout(Zn, 3e3) }))
        }

        function Jn() {
            let [e, n] = [Fn.querySelector(".penguin-player__player--thumbnail-play"), Fn.querySelector(".penguin-player__player--thumbnail-pause")];
            Fn.querySelector(".penguin-player__audio").paused ? [e.style.display, n.style.display] = ["block", "none"] : [e.style.display, n.style.display] = ["none", "block"]
        }
        var Kn, Qn;
        window.PPlayer = { initialize: Wn, play: In, pause: Dn, next: jn, previous: Nn, addEventListener: h, removeEventListener: function(e, n) { _[e] && -1 != _[e].indexOf(n) && _[e].splice(_[e].indexOf(n), 1) }, get volume() { return Fn.querySelector(".penguin-player__audio").volume }, set volume(e) { qn(e) }, get currentTime() { return Fn.querySelector(".penguin-player__audio").currentTime }, set currentTime(e) { Fn.querySelector(".penguin-player__audio").currentTime = e }, get duration() { return En[wn].duration }, get paused() { return Fn.querySelector(".penguin-player__audio").paused }, get song() { return En[wn] }, get playlist() { return En } }, Kn = "penguinplayerapiready", window.dispatchEvent(v(Kn, Qn)), u("https://github.com/M4TEC/PenguinPlayer"), u("Player loaded"), "string" == typeof window.penguinplayer_id && (u("Auto initializing..."), Wn(window.penguinplayer_id))
    })()
})();