"use strict";
(self.webpackChunk_am5 = self.webpackChunk_am5 || []).push([[6842], {
    6970: function (t, e, n) {
        n.r(e), n.d(e, {
            DefaultTheme: function () {
                return pe
            }, GraticuleSeries: function () {
                return rt
            }, MapChart: function () {
                return Mi
            }, MapLine: function () {
                return q
            }, MapLineSeries: function () {
                return tt
            }, MapPointSeries: function () {
                return xi
            }, MapPolygon: function () {
                return Ni
            }, MapPolygonSeries: function () {
                return Ci
            }, MapSeries: function () {
                return l
            }, ZoomControl: function () {
                return zi
            }, geoAlbersUsa: function () {
                return Zi
            }, geoEqualEarth: function () {
                return Qi
            }, geoEquirectangular: function () {
                return Ii
            }, geoMercator: function () {
                return ae
            }, geoNaturalEarth1: function () {
                return qi
            }, geoOrthographic: function () {
                return Yi
            }, getGeoCircle: function () {
                return mi
            }, getGeoRectangle: function () {
                return Pi
            }, normalizeGeoPoint: function () {
                return ji
            }
        });
        var i = n(5125), r = n(3399), o = n(5071), a = n(256), l = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "_types", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(e, "_geometries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(e, "_geoJSONparsed", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "_afterNew", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var e = this;
                    this.fields.push("geometry", "geometryType"), this._setRawDefault("geometryField", "geometry"), this._setRawDefault("geometryTypeField", "geometryType"), this._setRawDefault("idField", "id"), this.on("geoJSON", (function (t) {
                        var n = e._prevSettings.geoJSON;
                        n && n != t && e.data.clear()
                    })), t.prototype._afterNew.call(this)
                }
            }), Object.defineProperty(e.prototype, "_prepareChildren", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    if (t.prototype._prepareChildren.call(this), this._valuesDirty || this.isDirty("geoJSON") || this.isDirty("include") || this.isDirty("exclude")) {
                        var e = this.get("geoJSON"), n = this._prevSettings.geoJSON;
                        n && n != e && (this._prevSettings.geoJSON = void 0, this._geoJSONparsed = !1), this._geoJSONparsed || (this._parseGeoJSON(), this._geoJSONparsed = !0)
                    }
                }
            }), Object.defineProperty(e.prototype, "checkInclude", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e, n) {
                    if (e) {
                        if (0 == e.length) return !1;
                        if (-1 == e.indexOf(t)) return !1
                    }
                    return !(n && n.length > 0 && -1 != n.indexOf(t))
                }
            }), Object.defineProperty(e.prototype, "_parseGeoJSON", {
                enumerable: !1, configurable: !0, writable: !0, value: function () {
                    var t = this.get("geoJSON");
                    if (t) {
                        var e = void 0;
                        "FeatureCollection" == t.type ? e = t.features : "Feature" == t.type ? e = [t] : -1 != ["Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon"].indexOf(t.type) ? e = [{geometry: t}] : console.log("nothing found in geoJSON");
                        var n = this.get("geodataNames");
                        if (e) for (var i = function (t, i) {
                            var l = e[t], u = l.geometry;
                            if (u) {
                                var s = u.type, c = l.id;
                                if (n && n[c] && (l.properties.name = n[c]), -1 != r._types.indexOf(s)) {
                                    if (!r.checkInclude(c, r.get("include"), r.get("exclude"))) return "continue";
                                    var f = void 0;
                                    null != c && (f = o.find(r.dataItems, (function (t) {
                                        return t.get("id") == c
                                    })));
                                    var p = void 0;
                                    f && (p = f.dataContext), f ? p.geometry || (p.geometry = u, p.geometryType = s, f.set("geometry", u), f.set("geometryType", s), r.processDataItem(f)) : (p = {
                                        geometry: u,
                                        geometryType: s,
                                        id: c,
                                        madeFromGeoData: !0
                                    }, r.data.push(p)), a.softCopyProperties(l.properties, p)
                                }
                            }
                        }, r = this, l = 0, u = e.length; l < u; l++) i(l);
                        var s = "geodataprocessed";
                        this.events.isEnabled(s) && this.events.dispatch(s, {type: s, target: this})
                    }
                }
            }), Object.defineProperty(e.prototype, "_placeBulletsContainer", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    this.children.moveValue(this.bulletsContainer)
                }
            }), Object.defineProperty(e.prototype, "_removeBulletsContainer", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                }
            }), Object.defineProperty(e.prototype, "projection", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this.chart;
                    if (t) return t.get("projection")
                }
            }), Object.defineProperty(e.prototype, "geoPath", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this.chart;
                    if (t) return t.getPrivate("geoPath")
                }
            }), Object.defineProperty(e.prototype, "_addGeometry", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    if (t) {
                        this._geometries.push(t);
                        var e = this.chart;
                        e && e.markDirtyGeometries()
                    }
                }
            }), Object.defineProperty(e.prototype, "_removeGeometry", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    if (t) {
                        o.remove(this._geometries, t);
                        var e = this.chart;
                        e && e.markDirtyGeometries()
                    }
                }
            }), Object.defineProperty(e.prototype, "_dispose", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._dispose.call(this);
                    var e = this.chart;
                    e && e.series.removeValue(this)
                }
            }), Object.defineProperty(e.prototype, "_onDataClear", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._onDataClear.call(this), this._geoJSONparsed = !1
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "MapSeries"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r.F.classNames.concat([e.className])
            }), e
        }(r.F), u = n(1479);

        class s {
            constructor() {
                this._partials = new Float64Array(32), this._n = 0
            }

            add(t) {
                const e = this._partials;
                let n = 0;
                for (let i = 0; i < this._n && i < 32; i++) {
                    const r = e[i], o = t + r, a = Math.abs(t) < Math.abs(r) ? t - (o - r) : r - (o - t);
                    a && (e[n++] = a), t = o
                }
                return e[n] = t, this._n = n + 1, this
            }

            valueOf() {
                const t = this._partials;
                let e, n, i, r = this._n, o = 0;
                if (r > 0) {
                    for (o = t[--r]; r > 0 && (e = o, n = t[--r], o = e + n, i = n - (o - e), !i);) ;
                    r > 0 && (i < 0 && t[r - 1] < 0 || i > 0 && t[r - 1] > 0) && (n = 2 * i, e = o + n, n == e - o && (o = e))
                }
                return o
            }
        }

        var c = 1e-6, f = 1e-12, p = Math.PI, h = p / 2, g = p / 4, d = 2 * p, v = 180 / p, y = p / 180, b = Math.abs,
            m = Math.atan, _ = Math.atan2, w = Math.cos, P = Math.ceil, j = Math.exp, O = (Math.floor, Math.hypot),
            S = Math.log, M = (Math.pow, Math.sin), x = Math.sign || function (t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }, D = Math.sqrt, E = Math.tan;

        function N(t) {
            return t > 1 ? h : t < -1 ? -h : Math.asin(t)
        }

        function C(t) {
            return (t = M(t / 2)) * t
        }

        function T() {
        }

        function k(t, e) {
            t && I.hasOwnProperty(t.type) && I[t.type](t, e)
        }

        var L, z, R, Y, X = {
            Feature: function (t, e) {
                k(t.geometry, e)
            }, FeatureCollection: function (t, e) {
                for (var n = t.features, i = -1, r = n.length; ++i < r;) k(n[i].geometry, e)
            }
        }, I = {
            Sphere: function (t, e) {
                e.sphere()
            }, Point: function (t, e) {
                t = t.coordinates, e.point(t[0], t[1], t[2])
            }, MultiPoint: function (t, e) {
                for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) t = n[i], e.point(t[0], t[1], t[2])
            }, LineString: function (t, e) {
                B(t.coordinates, e, 0)
            }, MultiLineString: function (t, e) {
                for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) B(n[i], e, 0)
            }, Polygon: function (t, e) {
                G(t.coordinates, e)
            }, MultiPolygon: function (t, e) {
                for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) G(n[i], e)
            }, GeometryCollection: function (t, e) {
                for (var n = t.geometries, i = -1, r = n.length; ++i < r;) k(n[i], e)
            }
        };

        function B(t, e, n) {
            var i, r = -1, o = t.length - n;
            for (e.lineStart(); ++r < o;) i = t[r], e.point(i[0], i[1], i[2]);
            e.lineEnd()
        }

        function G(t, e) {
            var n = -1, i = t.length;
            for (e.polygonStart(); ++n < i;) B(t[n], e, 1);
            e.polygonEnd()
        }

        function Z(t, e) {
            t && X.hasOwnProperty(t.type) ? X[t.type](t, e) : k(t, e)
        }

        var A = {
            sphere: T, point: T, lineStart: function () {
                A.point = F, A.lineEnd = W
            }, lineEnd: T, polygonStart: T, polygonEnd: T
        };

        function W() {
            A.point = A.lineEnd = T
        }

        function F(t, e) {
            z = t *= y, R = M(e *= y), Y = w(e), A.point = V
        }

        function V(t, e) {
            t *= y;
            var n = M(e *= y), i = w(e), r = b(t - z), o = w(r), a = i * M(r), l = Y * n - R * i * o,
                u = R * n + Y * i * o;
            L.add(_(D(a * a + l * l), u)), z = t, R = n, Y = i
        }

        function J(t) {
            return L = new s, Z(t, A), +L
        }

        var H = [null, null], Q = {type: "LineString", coordinates: H};

        function U(t, e) {
            return H[0] = t, H[1] = e, J(Q)
        }

        var q = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "_projectionDirty", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "_beforeChanged", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var e = this;
                    if (t.prototype._beforeChanged.call(this), this._projectionDirty || this.isDirty("geometry") || this.isDirty("precision")) {
                        var n = this.get("geometry");
                        if (n) {
                            var i = this.getPrivate("series");
                            if (i) {
                                var r = i.chart;
                                if (r) {
                                    var o = r.get("projection"), a = null;
                                    o && (a = o.clipAngle(), o.precision(this.get("precision", .5)));
                                    var l = r.getPrivate("geoPath");
                                    l && (this._clear = !0, this.set("draw", (function (t) {
                                        o && !1 === i.get("clipBack") && o.clipAngle(180), l.context(e._display), l(n), l.context(null), o && o.clipAngle(a)
                                    })))
                                }
                            }
                        }
                    }
                }
            }), Object.defineProperty(e.prototype, "markDirtyProjection", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.markDirty(), this._projectionDirty = !0
                }
            }), Object.defineProperty(e.prototype, "_clearDirty", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._clearDirty.call(this), this._projectionDirty = !1
                }
            }), Object.defineProperty(e.prototype, "positionToGeoPoint", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = this.get("geometry");
                    if (e) {
                        var n = J(e), i = 0, r = 0, o = 0, a = void 0, l = void 0, u = e.coordinates;
                        if (u) {
                            var s = void 0;
                            "LineString" == e.type ? s = [u] : "MultiLineString" == e.type && (s = u);
                            for (var c = 0; c < s.length; c++) {
                                var f = s[c];
                                if (f.length > 1) {
                                    for (var p = 1; p < f.length; p++) if (r = i / n, o = (i += U(a = f[p - 1], l = f[p])) / n, r <= t && o > t) {
                                        c = s.length;
                                        break
                                    }
                                } else 1 == f.length && (a = f[0], l = f[0], r = 0, o = 1)
                            }
                            if (a && l) {
                                var h = (t - r) / (o - r), g = function (t, e) {
                                    var n = t[0] * y, i = t[1] * y, r = e[0] * y, o = e[1] * y, a = w(i), l = M(i),
                                        u = w(o), s = M(o), c = a * w(n), f = a * M(n), p = u * w(r), h = u * M(r),
                                        g = 2 * N(D(C(o - i) + a * u * C(r - n))), d = M(g), b = g ? function (t) {
                                            var e = M(t *= g) / d, n = M(g - t) / d, i = n * c + e * p, r = n * f + e * h,
                                                o = n * l + e * s;
                                            return [_(r, i) * v, _(o, D(i * i + r * r)) * v]
                                        } : function () {
                                            return [n * v, i * v]
                                        };
                                    return b.distance = g, b
                                }(a, l)(h);
                                return {longitude: g[0], latitude: g[1]}
                            }
                        }
                    }
                    return {longitude: 0, latitude: 0}
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "MapLine"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: u.T.classNames.concat([e.className])
            }), e
        }(u.T), K = n(7144), $ = n(5769), tt = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "mapLines", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new K.o($.YS.new({}), (function () {
                        return q._new(e._root, {}, [e.mapLines.template])
                    }))
                }), Object.defineProperty(e, "_types", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ["LineString", "MultiLineString"]
                }), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "makeMapLine", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = this.children.push(this.mapLines.make());
                    return e._setDataItem(t), this.mapLines.push(e), e
                }
            }), Object.defineProperty(e.prototype, "markDirtyProjection", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    o.each(this.dataItems, (function (t) {
                        var e = t.get("mapLine");
                        e && e.markDirtyProjection()
                    }))
                }
            }), Object.defineProperty(e.prototype, "_prepareChildren", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._prepareChildren.call(this), this.isDirty("stroke") && this.mapLines.template.set("stroke", this.get("stroke"))
                }
            }), Object.defineProperty(e.prototype, "processDataItem", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    var n = this;
                    t.prototype.processDataItem.call(this, e);
                    var i = e.get("mapLine");
                    i || (i = this.makeMapLine(e)), this._handlePointsToConnect(e), e.on("pointsToConnect", (function () {
                        n._handlePointsToConnect(e)
                    })), e.set("mapLine", i), i.setPrivate("series", this)
                }
            }), Object.defineProperty(e.prototype, "_handlePointsToConnect", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = this, n = t.get("pointsToConnect");
                    n && (o.each(n, (function (n) {
                        n.on("geometry", (function () {
                            e.markDirtyValues(t)
                        })), n.on("longitude", (function () {
                            e.markDirtyValues(t)
                        })), n.on("latitude", (function () {
                            e.markDirtyValues(t)
                        }))
                    })), this.markDirtyValues(t))
                }
            }), Object.defineProperty(e.prototype, "markDirtyValues", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    if (t.prototype.markDirtyValues.call(this), e) {
                        var n = e.get("mapLine");
                        if (n) {
                            var i = e.get("pointsToConnect");
                            if (i) {
                                var r = [];
                                o.each(i, (function (t) {
                                    var e = t.get("longitude"), n = t.get("latitude");
                                    if (null != e && null != n) r.push([e, n]); else {
                                        var i = t.get("geometry");
                                        if (i) {
                                            var o = i.coordinates;
                                            o && r.push([o[0], o[1]])
                                        }
                                    }
                                }));
                                var a = {type: "LineString", coordinates: r};
                                e.setRaw("geometry", a), n.set("geometry", a)
                            } else n.set("geometry", e.get("geometry"))
                        }
                    }
                }
            }), Object.defineProperty(e.prototype, "disposeDataItem", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    t.prototype.disposeDataItem.call(this, e);
                    var n = e.get("mapLine");
                    n && (this.mapLines.removeValue(n), n.dispose())
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "MapLineSeries"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l.classNames.concat([e.className])
            }), e
        }(l);

        function et(t, e, n) {
            t = +t, e = +e, n = (r = arguments.length) < 2 ? (e = t, t = 0, 1) : r < 3 ? 1 : +n;
            for (var i = -1, r = 0 | Math.max(0, Math.ceil((e - t) / n)), o = new Array(r); ++i < r;) o[i] = t + i * n;
            return o
        }

        function nt(t, e, n) {
            var i = et(t, e - c, n).concat(e);
            return function (t) {
                return i.map((function (e) {
                    return [t, e]
                }))
            }
        }

        function it(t, e, n) {
            var i = et(t, e - c, n).concat(e);
            return function (t) {
                return i.map((function (e) {
                    return [e, t]
                }))
            }
        }

        var rt = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "_dataItem", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e.makeDataItem({})
                }), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "_afterNew", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._afterNew.call(this), this.dataItems.push(this._dataItem), this._generate()
                }
            }), Object.defineProperty(e.prototype, "_updateChildren", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._updateChildren.call(this), this.isDirty("step") && this._generate()
                }
            }), Object.defineProperty(e.prototype, "_generate", {
                enumerable: !1, configurable: !0, writable: !0, value: function () {
                    var t = function () {
                        var t, e, n, i, r, o, a, l, u, s, f, p, h = 10, g = h, d = 90, v = 360, y = 2.5;

                        function m() {
                            return {type: "MultiLineString", coordinates: _()}
                        }

                        function _() {
                            return et(P(i / d) * d, n, d).map(f).concat(et(P(l / v) * v, a, v).map(p)).concat(et(P(e / h) * h, t, h).filter((function (t) {
                                return b(t % d) > c
                            })).map(u)).concat(et(P(o / g) * g, r, g).filter((function (t) {
                                return b(t % v) > c
                            })).map(s))
                        }

                        return m.lines = function () {
                            return _().map((function (t) {
                                return {type: "LineString", coordinates: t}
                            }))
                        }, m.outline = function () {
                            return {
                                type: "Polygon",
                                coordinates: [f(i).concat(p(a).slice(1), f(n).reverse().slice(1), p(l).reverse().slice(1))]
                            }
                        }, m.extent = function (t) {
                            return arguments.length ? m.extentMajor(t).extentMinor(t) : m.extentMinor()
                        }, m.extentMajor = function (t) {
                            return arguments.length ? (i = +t[0][0], n = +t[1][0], l = +t[0][1], a = +t[1][1], i > n && (t = i, i = n, n = t), l > a && (t = l, l = a, a = t), m.precision(y)) : [[i, l], [n, a]]
                        }, m.extentMinor = function (n) {
                            return arguments.length ? (e = +n[0][0], t = +n[1][0], o = +n[0][1], r = +n[1][1], e > t && (n = e, e = t, t = n), o > r && (n = o, o = r, r = n), m.precision(y)) : [[e, o], [t, r]]
                        }, m.step = function (t) {
                            return arguments.length ? m.stepMajor(t).stepMinor(t) : m.stepMinor()
                        }, m.stepMajor = function (t) {
                            return arguments.length ? (d = +t[0], v = +t[1], m) : [d, v]
                        }, m.stepMinor = function (t) {
                            return arguments.length ? (h = +t[0], g = +t[1], m) : [h, g]
                        }, m.precision = function (c) {
                            return arguments.length ? (y = +c, u = nt(o, r, 90), s = it(e, t, y), f = nt(l, a, 90), p = it(i, n, y), m) : y
                        }, m.extentMajor([[-180, -89.999999], [180, 89.999999]]).extentMinor([[-180, -80.000001], [180, 80.000001]])
                    }();
                    if (t) {
                        var e = this.get("step", 10);
                        t.stepMinor([360, 360]), t.stepMajor([e, e]), this._dataItem.set("geometry", t())
                    }
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "GraticuleSeries"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: tt.classNames.concat([e.className])
            }), e
        }(tt), ot = n(3409), at = n(6245), lt = n(3783);

        function ut(t, e) {
            function n(n, i) {
                return n = t(n, i), e(n[0], n[1])
            }

            return t.invert && e.invert && (n.invert = function (n, i) {
                return (n = e.invert(n, i)) && t.invert(n[0], n[1])
            }), n
        }

        function st(t, e) {
            return [b(t) > p ? t + Math.round(-t / d) * d : t, e]
        }

        function ct(t, e, n) {
            return (t %= d) ? e || n ? ut(pt(t), ht(e, n)) : pt(t) : e || n ? ht(e, n) : st
        }

        function ft(t) {
            return function (e, n) {
                return [(e += t) > p ? e - d : e < -p ? e + d : e, n]
            }
        }

        function pt(t) {
            var e = ft(t);
            return e.invert = ft(-t), e
        }

        function ht(t, e) {
            var n = w(t), i = M(t), r = w(e), o = M(e);

            function a(t, e) {
                var a = w(e), l = w(t) * a, u = M(t) * a, s = M(e), c = s * n + l * i;
                return [_(u * r - c * o, l * n - s * i), N(c * r + u * o)]
            }

            return a.invert = function (t, e) {
                var a = w(e), l = w(t) * a, u = M(t) * a, s = M(e), c = s * r - u * o;
                return [_(u * r + s * o, l * n + c * i), N(c * n - l * i)]
            }, a
        }

        function gt() {
            var t, e = [];
            return {
                point: function (e, n, i) {
                    t.push([e, n, i])
                }, lineStart: function () {
                    e.push(t = [])
                }, lineEnd: T, rejoin: function () {
                    e.length > 1 && e.push(e.pop().concat(e.shift()))
                }, result: function () {
                    var n = e;
                    return e = [], t = null, n
                }
            }
        }

        function dt(t, e) {
            return b(t[0] - e[0]) < c && b(t[1] - e[1]) < c
        }

        function vt(t, e, n, i) {
            this.x = t, this.z = e, this.o = n, this.e = i, this.v = !1, this.n = this.p = null
        }

        function yt(t, e, n, i, r) {
            var o, a, l = [], u = [];
            if (t.forEach((function (t) {
                if (!((e = t.length - 1) <= 0)) {
                    var e, n, i = t[0], a = t[e];
                    if (dt(i, a)) {
                        if (!i[2] && !a[2]) {
                            for (r.lineStart(), o = 0; o < e; ++o) r.point((i = t[o])[0], i[1]);
                            return void r.lineEnd()
                        }
                        a[0] += 2e-6
                    }
                    l.push(n = new vt(i, t, null, !0)), u.push(n.o = new vt(i, null, n, !1)), l.push(n = new vt(a, t, null, !1)), u.push(n.o = new vt(a, null, n, !0))
                }
            })), l.length) {
                for (u.sort(e), bt(l), bt(u), o = 0, a = u.length; o < a; ++o) u[o].e = n = !n;
                for (var s, c, f = l[0]; ;) {
                    for (var p = f, h = !0; p.v;) if ((p = p.n) === f) return;
                    s = p.z, r.lineStart();
                    do {
                        if (p.v = p.o.v = !0, p.e) {
                            if (h) for (o = 0, a = s.length; o < a; ++o) r.point((c = s[o])[0], c[1]); else i(p.x, p.n.x, 1, r);
                            p = p.n
                        } else {
                            if (h) for (s = p.p.z, o = s.length - 1; o >= 0; --o) r.point((c = s[o])[0], c[1]); else i(p.x, p.p.x, -1, r);
                            p = p.p
                        }
                        s = (p = p.o).z, h = !h
                    } while (!p.v);
                    r.lineEnd()
                }
            }
        }

        function bt(t) {
            if (e = t.length) {
                for (var e, n, i = 0, r = t[0]; ++i < e;) r.n = n = t[i], n.p = r, r = n;
                r.n = n = t[0], n.p = r
            }
        }

        function mt(t) {
            return [_(t[1], t[0]), N(t[2])]
        }

        function _t(t) {
            var e = t[0], n = t[1], i = w(n);
            return [i * w(e), i * M(e), M(n)]
        }

        function wt(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        }

        function Pt(t, e) {
            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function jt(t, e) {
            t[0] += e[0], t[1] += e[1], t[2] += e[2]
        }

        function Ot(t, e) {
            return [t[0] * e, t[1] * e, t[2] * e]
        }

        function St(t) {
            var e = D(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= e, t[1] /= e, t[2] /= e
        }

        function Mt(t) {
            return b(t[0]) <= p ? t[0] : x(t[0]) * ((b(t[0]) + p) % d - p)
        }

        function xt(t) {
            return Array.from(function* (t) {
                for (const e of t) yield* e
            }(t))
        }

        function Dt(t, e, n, i) {
            return function (r) {
                var o, a, l, u = e(r), f = gt(), v = e(f), y = !1, b = {
                    point: m, lineStart: j, lineEnd: O, polygonStart: function () {
                        b.point = S, b.lineStart = x, b.lineEnd = D, a = [], o = []
                    }, polygonEnd: function () {
                        b.point = m, b.lineStart = j, b.lineEnd = O, a = xt(a);
                        var t = function (t, e) {
                            var n = Mt(e), i = e[1], r = M(i), o = [M(n), -w(n), 0], a = 0, l = 0, u = new s;
                            1 === r ? i = h + c : -1 === r && (i = -h - c);
                            for (var f = 0, v = t.length; f < v; ++f) if (b = (y = t[f]).length) for (var y, b, m = y[b - 1], P = Mt(m), j = m[1] / 2 + g, O = M(j), S = w(j), x = 0; x < b; ++x, P = E, O = T, S = k, m = D) {
                                var D = y[x], E = Mt(D), C = D[1] / 2 + g, T = M(C), k = w(C), L = E - P,
                                    z = L >= 0 ? 1 : -1, R = z * L, Y = R > p, X = O * T;
                                if (u.add(_(X * z * M(R), S * k + X * w(R))), a += Y ? L + z * d : L, Y ^ P >= n ^ E >= n) {
                                    var I = Pt(_t(m), _t(D));
                                    St(I);
                                    var B = Pt(o, I);
                                    St(B);
                                    var G = (Y ^ L >= 0 ? -1 : 1) * N(B[2]);
                                    (i > G || i === G && (I[0] || I[1])) && (l += Y ^ L >= 0 ? 1 : -1)
                                }
                            }
                            return (a < -c || a < c && u < -1e-12) ^ 1 & l
                        }(o, i);
                        a.length ? (y || (r.polygonStart(), y = !0), yt(a, Nt, t, n, r)) : t && (y || (r.polygonStart(), y = !0), r.lineStart(), n(null, null, 1, r), r.lineEnd()), y && (r.polygonEnd(), y = !1), a = o = null
                    }, sphere: function () {
                        r.polygonStart(), r.lineStart(), n(null, null, 1, r), r.lineEnd(), r.polygonEnd()
                    }
                };

                function m(e, n) {
                    t(e, n) && r.point(e, n)
                }

                function P(t, e) {
                    u.point(t, e)
                }

                function j() {
                    b.point = P, u.lineStart()
                }

                function O() {
                    b.point = m, u.lineEnd()
                }

                function S(t, e) {
                    l.push([t, e]), v.point(t, e)
                }

                function x() {
                    v.lineStart(), l = []
                }

                function D() {
                    S(l[0][0], l[0][1]), v.lineEnd();
                    var t, e, n, i, u = v.clean(), s = f.result(), c = s.length;
                    if (l.pop(), o.push(l), l = null, c) if (1 & u) {
                        if ((e = (n = s[0]).length - 1) > 0) {
                            for (y || (r.polygonStart(), y = !0), r.lineStart(), t = 0; t < e; ++t) r.point((i = n[t])[0], i[1]);
                            r.lineEnd()
                        }
                    } else c > 1 && 2 & u && s.push(s.pop().concat(s.shift())), a.push(s.filter(Et))
                }

                return b
            }
        }

        function Et(t) {
            return t.length > 1
        }

        function Nt(t, e) {
            return ((t = t.x)[0] < 0 ? t[1] - h - c : h - t[1]) - ((e = e.x)[0] < 0 ? e[1] - h - c : h - e[1])
        }

        st.invert = st;
        var Ct = Dt((function () {
            return !0
        }), (function (t) {
            var e, n = NaN, i = NaN, r = NaN;
            return {
                lineStart: function () {
                    t.lineStart(), e = 1
                }, point: function (o, a) {
                    var l = o > 0 ? p : -p, u = b(o - n);
                    b(u - p) < c ? (t.point(n, i = (i + a) / 2 > 0 ? h : -h), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(l, i), t.point(o, i), e = 0) : r !== l && u >= p && (b(n - r) < c && (n -= r * c), b(o - l) < c && (o -= l * c), i = function (t, e, n, i) {
                        var r, o, a = M(t - n);
                        return b(a) > c ? m((M(e) * (o = w(i)) * M(n) - M(i) * (r = w(e)) * M(t)) / (r * o * a)) : (e + i) / 2
                    }(n, i, o, a), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(l, i), e = 0), t.point(n = o, i = a), r = l
                }, lineEnd: function () {
                    t.lineEnd(), n = i = NaN
                }, clean: function () {
                    return 2 - e
                }
            }
        }), (function (t, e, n, i) {
            var r;
            if (null == t) r = n * h, i.point(-p, r), i.point(0, r), i.point(p, r), i.point(p, 0), i.point(p, -r), i.point(0, -r), i.point(-p, -r), i.point(-p, 0), i.point(-p, r); else if (b(t[0] - e[0]) > c) {
                var o = t[0] < e[0] ? p : -p;
                r = n * o / 2, i.point(-o, r), i.point(0, r), i.point(o, r)
            } else i.point(e[0], e[1])
        }), [-p, -h]);

        function Tt(t) {
            return function () {
                return t
            }
        }

        function kt(t, e, n, i, r, o) {
            if (n) {
                var a = w(e), l = M(e), u = i * n;
                null == r ? (r = e + i * d, o = e - u / 2) : (r = Lt(a, r), o = Lt(a, o), (i > 0 ? r < o : r > o) && (r += i * d));
                for (var s, c = r; i > 0 ? c > o : c < o; c -= u) s = mt([a, -l * w(c), -l * M(c)]), t.point(s[0], s[1])
            }
        }

        function Lt(t, e) {
            (e = _t(e))[0] -= t, St(e);
            var n, i = (n = -e[1]) > 1 ? 0 : n < -1 ? p : Math.acos(n);
            return ((-e[2] < 0 ? -i : i) + d - c) % d
        }

        function zt(t) {
            var e = w(t), n = 6 * y, i = e > 0, r = b(e) > c;

            function o(t, n) {
                return w(t) * w(n) > e
            }

            function a(t, n, i) {
                var r = [1, 0, 0], o = Pt(_t(t), _t(n)), a = wt(o, o), l = o[0], u = a - l * l;
                if (!u) return !i && t;
                var s = e * a / u, f = -e * l / u, h = Pt(r, o), g = Ot(r, s);
                jt(g, Ot(o, f));
                var d = h, v = wt(g, d), y = wt(d, d), m = v * v - y * (wt(g, g) - 1);
                if (!(m < 0)) {
                    var _ = D(m), w = Ot(d, (-v - _) / y);
                    if (jt(w, g), w = mt(w), !i) return w;
                    var P, j = t[0], O = n[0], S = t[1], M = n[1];
                    O < j && (P = j, j = O, O = P);
                    var x = O - j, E = b(x - p) < c;
                    if (!E && M < S && (P = S, S = M, M = P), E || x < c ? E ? S + M > 0 ^ w[1] < (b(w[0] - j) < c ? S : M) : S <= w[1] && w[1] <= M : x > p ^ (j <= w[0] && w[0] <= O)) {
                        var N = Ot(d, (-v + _) / y);
                        return jt(N, g), [w, mt(N)]
                    }
                }
            }

            function l(e, n) {
                var r = i ? t : p - t, o = 0;
                return e < -r ? o |= 1 : e > r && (o |= 2), n < -r ? o |= 4 : n > r && (o |= 8), o
            }

            return Dt(o, (function (t) {
                var e, n, u, s, c;
                return {
                    lineStart: function () {
                        s = u = !1, c = 1
                    }, point: function (f, h) {
                        var g, d = [f, h], v = o(f, h), y = i ? v ? 0 : l(f, h) : v ? l(f + (f < 0 ? p : -p), h) : 0;
                        if (!e && (s = u = v) && t.lineStart(), v !== u && (!(g = a(e, d)) || dt(e, g) || dt(d, g)) && (d[2] = 1), v !== u) c = 0, v ? (t.lineStart(), g = a(d, e), t.point(g[0], g[1])) : (g = a(e, d), t.point(g[0], g[1], 2), t.lineEnd()), e = g; else if (r && e && i ^ v) {
                            var b;
                            y & n || !(b = a(d, e, !0)) || (c = 0, i ? (t.lineStart(), t.point(b[0][0], b[0][1]), t.point(b[1][0], b[1][1]), t.lineEnd()) : (t.point(b[1][0], b[1][1]), t.lineEnd(), t.lineStart(), t.point(b[0][0], b[0][1], 3)))
                        }
                        !v || e && dt(e, d) || t.point(d[0], d[1]), e = d, u = v, n = y
                    }, lineEnd: function () {
                        u && t.lineEnd(), e = null
                    }, clean: function () {
                        return c | (s && u) << 1
                    }
                }
            }), (function (e, i, r, o) {
                kt(o, t, n, r, e, i)
            }), i ? [0, -t] : [-p, t - p])
        }

        var Rt = 1e9, Yt = -Rt;

        function Xt(t, e, n, i) {
            function r(r, o) {
                return t <= r && r <= n && e <= o && o <= i
            }

            function o(r, o, l, s) {
                var c = 0, f = 0;
                if (null == r || (c = a(r, l)) !== (f = a(o, l)) || u(r, o) < 0 ^ l > 0) do {
                    s.point(0 === c || 3 === c ? t : n, c > 1 ? i : e)
                } while ((c = (c + l + 4) % 4) !== f); else s.point(o[0], o[1])
            }

            function a(i, r) {
                return b(i[0] - t) < c ? r > 0 ? 0 : 3 : b(i[0] - n) < c ? r > 0 ? 2 : 1 : b(i[1] - e) < c ? r > 0 ? 1 : 0 : r > 0 ? 3 : 2
            }

            function l(t, e) {
                return u(t.x, e.x)
            }

            function u(t, e) {
                var n = a(t, 1), i = a(e, 1);
                return n !== i ? n - i : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
            }

            return function (a) {
                var u, s, c, f, p, h, g, d, v, y, b, m = a, _ = gt(), w = {
                    point: P, lineStart: function () {
                        w.point = j, s && s.push(c = []), y = !0, v = !1, g = d = NaN
                    }, lineEnd: function () {
                        u && (j(f, p), h && v && _.rejoin(), u.push(_.result())), w.point = P, v && m.lineEnd()
                    }, polygonStart: function () {
                        m = _, u = [], s = [], b = !0
                    }, polygonEnd: function () {
                        var e = function () {
                            for (var e = 0, n = 0, r = s.length; n < r; ++n) for (var o, a, l = s[n], u = 1, c = l.length, f = l[0], p = f[0], h = f[1]; u < c; ++u) o = p, a = h, p = (f = l[u])[0], h = f[1], a <= i ? h > i && (p - o) * (i - a) > (h - a) * (t - o) && ++e : h <= i && (p - o) * (i - a) < (h - a) * (t - o) && --e;
                            return e
                        }(), n = b && e, r = (u = xt(u)).length;
                        (n || r) && (a.polygonStart(), n && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), r && yt(u, l, e, o, a), a.polygonEnd()), m = a, u = s = c = null
                    }
                };

                function P(t, e) {
                    r(t, e) && m.point(t, e)
                }

                function j(o, a) {
                    var l = r(o, a);
                    if (s && c.push([o, a]), y) f = o, p = a, h = l, y = !1, l && (m.lineStart(), m.point(o, a)); else if (l && v) m.point(o, a); else {
                        var u = [g = Math.max(Yt, Math.min(Rt, g)), d = Math.max(Yt, Math.min(Rt, d))],
                            _ = [o = Math.max(Yt, Math.min(Rt, o)), a = Math.max(Yt, Math.min(Rt, a))];
                        !function (t, e, n, i, r, o) {
                            var a, l = t[0], u = t[1], s = 0, c = 1, f = e[0] - l, p = e[1] - u;
                            if (a = n - l, f || !(a > 0)) {
                                if (a /= f, f < 0) {
                                    if (a < s) return;
                                    a < c && (c = a)
                                } else if (f > 0) {
                                    if (a > c) return;
                                    a > s && (s = a)
                                }
                                if (a = r - l, f || !(a < 0)) {
                                    if (a /= f, f < 0) {
                                        if (a > c) return;
                                        a > s && (s = a)
                                    } else if (f > 0) {
                                        if (a < s) return;
                                        a < c && (c = a)
                                    }
                                    if (a = i - u, p || !(a > 0)) {
                                        if (a /= p, p < 0) {
                                            if (a < s) return;
                                            a < c && (c = a)
                                        } else if (p > 0) {
                                            if (a > c) return;
                                            a > s && (s = a)
                                        }
                                        if (a = o - u, p || !(a < 0)) {
                                            if (a /= p, p < 0) {
                                                if (a > c) return;
                                                a > s && (s = a)
                                            } else if (p > 0) {
                                                if (a < s) return;
                                                a < c && (c = a)
                                            }
                                            return s > 0 && (t[0] = l + s * f, t[1] = u + s * p), c < 1 && (e[0] = l + c * f, e[1] = u + c * p), !0
                                        }
                                    }
                                }
                            }
                        }(u, _, t, e, n, i) ? l && (m.lineStart(), m.point(o, a), b = !1) : (v || (m.lineStart(), m.point(u[0], u[1])), m.point(_[0], _[1]), l || m.lineEnd(), b = !1)
                    }
                    g = o, d = a, v = l
                }

                return w
            }
        }

        var It = t => t;

        function Bt(t) {
            return function (e) {
                var n = new Gt;
                for (var i in t) n[i] = t[i];
                return n.stream = e, n
            }
        }

        function Gt() {
        }

        Gt.prototype = {
            constructor: Gt, point: function (t, e) {
                this.stream.point(t, e)
            }, sphere: function () {
                this.stream.sphere()
            }, lineStart: function () {
                this.stream.lineStart()
            }, lineEnd: function () {
                this.stream.lineEnd()
            }, polygonStart: function () {
                this.stream.polygonStart()
            }, polygonEnd: function () {
                this.stream.polygonEnd()
            }
        };
        var Zt = 1 / 0, At = Zt, Wt = -Zt, Ft = Wt, Vt = {
            point: function (t, e) {
                t < Zt && (Zt = t), t > Wt && (Wt = t), e < At && (At = e), e > Ft && (Ft = e)
            }, lineStart: T, lineEnd: T, polygonStart: T, polygonEnd: T, result: function () {
                var t = [[Zt, At], [Wt, Ft]];
                return Wt = Ft = -(At = Zt = 1 / 0), t
            }
        }, Jt = Vt;

        function Ht(t, e, n) {
            var i = t.clipExtent && t.clipExtent();
            return t.scale(150).translate([0, 0]), null != i && t.clipExtent(null), Z(n, t.stream(Jt)), e(Jt.result()), null != i && t.clipExtent(i), t
        }

        function Qt(t, e, n) {
            return Ht(t, (function (n) {
                var i = e[1][0] - e[0][0], r = e[1][1] - e[0][1],
                    o = Math.min(i / (n[1][0] - n[0][0]), r / (n[1][1] - n[0][1])),
                    a = +e[0][0] + (i - o * (n[1][0] + n[0][0])) / 2, l = +e[0][1] + (r - o * (n[1][1] + n[0][1])) / 2;
                t.scale(150 * o).translate([a, l])
            }), n)
        }

        function Ut(t, e, n) {
            return Qt(t, [[0, 0], e], n)
        }

        function qt(t, e, n) {
            return Ht(t, (function (n) {
                var i = +e, r = i / (n[1][0] - n[0][0]), o = (i - r * (n[1][0] + n[0][0])) / 2, a = -r * n[0][1];
                t.scale(150 * r).translate([o, a])
            }), n)
        }

        function Kt(t, e, n) {
            return Ht(t, (function (n) {
                var i = +e, r = i / (n[1][1] - n[0][1]), o = -r * n[0][0], a = (i - r * (n[1][1] + n[0][1])) / 2;
                t.scale(150 * r).translate([o, a])
            }), n)
        }

        var $t = w(30 * y);

        function te(t, e) {
            return +e ? function (t, e) {
                function n(i, r, o, a, l, u, s, f, p, h, g, d, v, y) {
                    var m = s - i, w = f - r, P = m * m + w * w;
                    if (P > 4 * e && v--) {
                        var j = a + h, O = l + g, S = u + d, M = D(j * j + O * O + S * S), x = N(S /= M),
                            E = b(b(S) - 1) < c || b(o - p) < c ? (o + p) / 2 : _(O, j), C = t(E, x), T = C[0],
                            k = C[1], L = T - i, z = k - r, R = w * L - m * z;
                        (R * R / P > e || b((m * L + w * z) / P - .5) > .3 || a * h + l * g + u * d < $t) && (n(i, r, o, a, l, u, T, k, E, j /= M, O /= M, S, v, y), y.point(T, k), n(T, k, E, j, O, S, s, f, p, h, g, d, v, y))
                    }
                }

                return function (e) {
                    var i, r, o, a, l, u, s, c, f, p, h, g, d = {
                        point: v, lineStart: y, lineEnd: m, polygonStart: function () {
                            e.polygonStart(), d.lineStart = _
                        }, polygonEnd: function () {
                            e.polygonEnd(), d.lineStart = y
                        }
                    };

                    function v(n, i) {
                        n = t(n, i), e.point(n[0], n[1])
                    }

                    function y() {
                        c = NaN, d.point = b, e.lineStart()
                    }

                    function b(i, r) {
                        var o = _t([i, r]), a = t(i, r);
                        n(c, f, s, p, h, g, c = a[0], f = a[1], s = i, p = o[0], h = o[1], g = o[2], 16, e), e.point(c, f)
                    }

                    function m() {
                        d.point = v, e.lineEnd()
                    }

                    function _() {
                        y(), d.point = w, d.lineEnd = P
                    }

                    function w(t, e) {
                        b(i = t, e), r = c, o = f, a = p, l = h, u = g, d.point = b
                    }

                    function P() {
                        n(c, f, s, p, h, g, r, o, i, a, l, u, 16, e), d.lineEnd = m, m()
                    }

                    return d
                }
            }(t, e) : function (t) {
                return Bt({
                    point: function (e, n) {
                        e = t(e, n), this.stream.point(e[0], e[1])
                    }
                })
            }(t)
        }

        var ee = Bt({
            point: function (t, e) {
                this.stream.point(t * y, e * y)
            }
        });

        function ne(t, e, n, i, r, o) {
            if (!o) return function (t, e, n, i, r) {
                function o(o, a) {
                    return [e + t * (o *= i), n - t * (a *= r)]
                }

                return o.invert = function (o, a) {
                    return [(o - e) / t * i, (n - a) / t * r]
                }, o
            }(t, e, n, i, r);
            var a = w(o), l = M(o), u = a * t, s = l * t, c = a / t, f = l / t, p = (l * n - a * e) / t,
                h = (l * e + a * n) / t;

            function g(t, o) {
                return [u * (t *= i) - s * (o *= r) + e, n - s * t - u * o]
            }

            return g.invert = function (t, e) {
                return [i * (c * t - f * e + p), r * (h - f * t - c * e)]
            }, g
        }

        function ie(t) {
            return re((function () {
                return t
            }))()
        }

        function re(t) {
            var e, n, i, r, o, a, l, u, s, c, f = 150, p = 480, h = 250, g = 0, d = 0, b = 0, m = 0, _ = 0, w = 0,
                P = 1, j = 1, O = null, S = Ct, M = null, x = It, E = .5;

            function N(t) {
                return u(t[0] * y, t[1] * y)
            }

            function C(t) {
                return (t = u.invert(t[0], t[1])) && [t[0] * v, t[1] * v]
            }

            function T() {
                var t = ne(f, 0, 0, P, j, w).apply(null, e(g, d)), i = ne(f, p - t[0], h - t[1], P, j, w);
                return n = ct(b, m, _), l = ut(e, i), u = ut(n, l), a = te(l, E), k()
            }

            function k() {
                return s = c = null, N
            }

            return N.stream = function (t) {
                return s && c === t ? s : s = ee(function (t) {
                    return Bt({
                        point: function (e, n) {
                            var i = t(e, n);
                            return this.stream.point(i[0], i[1])
                        }
                    })
                }(n)(S(a(x(c = t)))))
            }, N.preclip = function (t) {
                return arguments.length ? (S = t, O = void 0, k()) : S
            }, N.postclip = function (t) {
                return arguments.length ? (x = t, M = i = r = o = null, k()) : x
            }, N.clipAngle = function (t) {
                return arguments.length ? (S = +t ? zt(O = t * y) : (O = null, Ct), k()) : O * v
            }, N.clipExtent = function (t) {
                return arguments.length ? (x = null == t ? (M = i = r = o = null, It) : Xt(M = +t[0][0], i = +t[0][1], r = +t[1][0], o = +t[1][1]), k()) : null == M ? null : [[M, i], [r, o]]
            }, N.scale = function (t) {
                return arguments.length ? (f = +t, T()) : f
            }, N.translate = function (t) {
                return arguments.length ? (p = +t[0], h = +t[1], T()) : [p, h]
            }, N.center = function (t) {
                return arguments.length ? (g = t[0] % 360 * y, d = t[1] % 360 * y, T()) : [g * v, d * v]
            }, N.rotate = function (t) {
                return arguments.length ? (b = t[0] % 360 * y, m = t[1] % 360 * y, _ = t.length > 2 ? t[2] % 360 * y : 0, T()) : [b * v, m * v, _ * v]
            }, N.angle = function (t) {
                return arguments.length ? (w = t % 360 * y, T()) : w * v
            }, N.reflectX = function (t) {
                return arguments.length ? (P = t ? -1 : 1, T()) : P < 0
            }, N.reflectY = function (t) {
                return arguments.length ? (j = t ? -1 : 1, T()) : j < 0
            }, N.precision = function (t) {
                return arguments.length ? (a = te(l, E = t * t), k()) : D(E)
            }, N.fitExtent = function (t, e) {
                return Qt(N, t, e)
            }, N.fitSize = function (t, e) {
                return Ut(N, t, e)
            }, N.fitWidth = function (t, e) {
                return qt(N, t, e)
            }, N.fitHeight = function (t, e) {
                return Kt(N, t, e)
            }, function () {
                return e = t.apply(this, arguments), N.invert = e.invert && C, T()
            }
        }

        function oe(t, e) {
            return [t, S(E((h + e) / 2))]
        }

        function ae() {
            return function (t) {
                var e, n, i, r = ie(t), o = r.center, a = r.scale, l = r.translate, u = r.clipExtent, s = null;

                function c() {
                    var o = p * a(), l = r(function (t) {
                        function e(e) {
                            return (e = t(e[0] * y, e[1] * y))[0] *= v, e[1] *= v, e
                        }

                        return t = ct(t[0] * y, t[1] * y, t.length > 2 ? t[2] * y : 0), e.invert = function (e) {
                            return (e = t.invert(e[0] * y, e[1] * y))[0] *= v, e[1] *= v, e
                        }, e
                    }(r.rotate()).invert([0, 0]));
                    return u(null == s ? [[l[0] - o, l[1] - o], [l[0] + o, l[1] + o]] : t === oe ? [[Math.max(l[0] - o, s), e], [Math.min(l[0] + o, n), i]] : [[s, Math.max(l[1] - o, e)], [n, Math.min(l[1] + o, i)]])
                }

                return r.scale = function (t) {
                    return arguments.length ? (a(t), c()) : a()
                }, r.translate = function (t) {
                    return arguments.length ? (l(t), c()) : l()
                }, r.center = function (t) {
                    return arguments.length ? (o(t), c()) : o()
                }, r.clipExtent = function (t) {
                    return arguments.length ? (null == t ? s = e = n = i = null : (s = +t[0][0], e = +t[0][1], n = +t[1][0], i = +t[1][1]), c()) : null == s ? null : [[s, e], [n, i]]
                }, c()
            }(oe).scale(961 / d)
        }

        oe.invert = function (t, e) {
            return [t, 2 * m(j(e)) - h]
        };
        var le, ue, se, ce, fe = n(9395), pe = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "setupDefaultRules", {
                enumerable: !1, configurable: !0, writable: !0, value: function () {
                    t.prototype.setupDefaultRules.call(this);
                    var e, n = this._root.interfaceColors, i = this.rule.bind(this);
                    i("MapChart").setAll({
                        projection: ae(),
                        panX: "translateX",
                        panY: "translateY",
                        pinchZoom: !0,
                        zoomStep: 2,
                        zoomLevel: 1,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        maxZoomLevel: 32,
                        minZoomLevel: 1,
                        wheelY: "zoom",
                        wheelX: "none",
                        animationEasing: fe.out(fe.cubic),
                        wheelEasing: fe.out(fe.cubic),
                        wheelDuration: 0,
                        wheelSensitivity: 1,
                        maxPanOut: .4,
                        centerMapOnZoomOut: !0
                    }), (e = i("MapLine")).setAll({
                        precision: .5,
                        role: "figure"
                    }), (0, lt.v)(e, "stroke", n, "grid"), i("MapPointSeries").setAll({
                        clipFront: !1,
                        clipBack: !0,
                        autoScale: !1
                    }), (e = i("MapPolygon")).setAll({
                        precision: .5,
                        isMeasured: !1,
                        role: "figure",
                        fillOpacity: 1,
                        position: "absolute",
                        strokeWidth: .2,
                        strokeOpacity: 1
                    }), (0, lt.v)(e, "fill", n, "primaryButton"), (0, lt.v)(e, "stroke", n, "background"), i("Graphics", ["map", "button", "plus", "icon"]).setAll({
                        x: at.CI,
                        y: at.CI,
                        draw: function (t) {
                            t.moveTo(-4, 0), t.lineTo(4, 0), t.moveTo(0, -4), t.lineTo(0, 4)
                        }
                    }), i("Graphics", ["map", "button", "minus", "icon"]).setAll({
                        x: at.CI,
                        y: at.CI,
                        draw: function (t) {
                            t.moveTo(-4, 0), t.lineTo(4, 0)
                        }
                    }), i("GraticuleSeries").setAll({step: 10})
                }
            }), e
        }(ot.Q), he = n(5829), ge = n(7142), de = new s, ve = new s, ye = {
            point: T, lineStart: T, lineEnd: T, polygonStart: function () {
                ye.lineStart = be, ye.lineEnd = we
            }, polygonEnd: function () {
                ye.lineStart = ye.lineEnd = ye.point = T, de.add(b(ve)), ve = new s
            }, result: function () {
                var t = de / 2;
                return de = new s, t
            }
        };

        function be() {
            ye.point = me
        }

        function me(t, e) {
            ye.point = _e, le = se = t, ue = ce = e
        }

        function _e(t, e) {
            ve.add(ce * t - se * e), se = t, ce = e
        }

        function we() {
            _e(le, ue)
        }

        var Pe, je, Oe, Se, Me = ye, xe = 0, De = 0, Ee = 0, Ne = 0, Ce = 0, Te = 0, ke = 0, Le = 0, ze = 0, Re = {
            point: Ye, lineStart: Xe, lineEnd: Ge, polygonStart: function () {
                Re.lineStart = Ze, Re.lineEnd = Ae
            }, polygonEnd: function () {
                Re.point = Ye, Re.lineStart = Xe, Re.lineEnd = Ge
            }, result: function () {
                var t = ze ? [ke / ze, Le / ze] : Te ? [Ne / Te, Ce / Te] : Ee ? [xe / Ee, De / Ee] : [NaN, NaN];
                return xe = De = Ee = Ne = Ce = Te = ke = Le = ze = 0, t
            }
        };

        function Ye(t, e) {
            xe += t, De += e, ++Ee
        }

        function Xe() {
            Re.point = Ie
        }

        function Ie(t, e) {
            Re.point = Be, Ye(Oe = t, Se = e)
        }

        function Be(t, e) {
            var n = t - Oe, i = e - Se, r = D(n * n + i * i);
            Ne += r * (Oe + t) / 2, Ce += r * (Se + e) / 2, Te += r, Ye(Oe = t, Se = e)
        }

        function Ge() {
            Re.point = Ye
        }

        function Ze() {
            Re.point = We
        }

        function Ae() {
            Fe(Pe, je)
        }

        function We(t, e) {
            Re.point = Fe, Ye(Pe = Oe = t, je = Se = e)
        }

        function Fe(t, e) {
            var n = t - Oe, i = e - Se, r = D(n * n + i * i);
            Ne += r * (Oe + t) / 2, Ce += r * (Se + e) / 2, Te += r, ke += (r = Se * t - Oe * e) * (Oe + t), Le += r * (Se + e), ze += 3 * r, Ye(Oe = t, Se = e)
        }

        var Ve = Re;

        function Je(t) {
            this._context = t
        }

        Je.prototype = {
            _radius: 4.5, pointRadius: function (t) {
                return this._radius = t, this
            }, polygonStart: function () {
                this._line = 0
            }, polygonEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                0 === this._line && this._context.closePath(), this._point = NaN
            }, point: function (t, e) {
                switch (this._point) {
                    case 0:
                        this._context.moveTo(t, e), this._point = 1;
                        break;
                    case 1:
                        this._context.lineTo(t, e);
                        break;
                    default:
                        this._context.moveTo(t + this._radius, e), this._context.arc(t, e, this._radius, 0, d)
                }
            }, result: T
        };
        var He, Qe, Ue, qe, Ke, $e = new s, tn = {
            point: T, lineStart: function () {
                tn.point = en
            }, lineEnd: function () {
                He && nn(Qe, Ue), tn.point = T
            }, polygonStart: function () {
                He = !0
            }, polygonEnd: function () {
                He = null
            }, result: function () {
                var t = +$e;
                return $e = new s, t
            }
        };

        function en(t, e) {
            tn.point = nn, Qe = qe = t, Ue = Ke = e
        }

        function nn(t, e) {
            qe -= t, Ke -= e, $e.add(D(qe * qe + Ke * Ke)), qe = t, Ke = e
        }

        var rn = tn;

        function on() {
            this._string = []
        }

        function an(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }

        on.prototype = {
            _radius: 4.5, _circle: an(4.5), pointRadius: function (t) {
                return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
            }, polygonStart: function () {
                this._line = 0
            }, polygonEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                0 === this._line && this._string.push("Z"), this._point = NaN
            }, point: function (t, e) {
                switch (this._point) {
                    case 0:
                        this._string.push("M", t, ",", e), this._point = 1;
                        break;
                    case 1:
                        this._string.push("L", t, ",", e);
                        break;
                    default:
                        null == this._circle && (this._circle = an(this._radius)), this._string.push("M", t, ",", e, this._circle)
                }
            }, result: function () {
                if (this._string.length) {
                    var t = this._string.join("");
                    return this._string = [], t
                }
                return null
            }
        };
        var ln, un, sn, cn, fn, pn, hn, gn, dn, vn, yn, bn, mn, _n, wn, Pn, jn = n(1112), On = n(3145), Sn = n(751),
            Mn = n(5040), xn = {
                sphere: T, point: Dn, lineStart: Nn, lineEnd: kn, polygonStart: function () {
                    xn.lineStart = Ln, xn.lineEnd = zn
                }, polygonEnd: function () {
                    xn.lineStart = Nn, xn.lineEnd = kn
                }
            };

        function Dn(t, e) {
            t *= y;
            var n = w(e *= y);
            En(n * w(t), n * M(t), M(e))
        }

        function En(t, e, n) {
            ++ln, sn += (t - sn) / ln, cn += (e - cn) / ln, fn += (n - fn) / ln
        }

        function Nn() {
            xn.point = Cn
        }

        function Cn(t, e) {
            t *= y;
            var n = w(e *= y);
            _n = n * w(t), wn = n * M(t), Pn = M(e), xn.point = Tn, En(_n, wn, Pn)
        }

        function Tn(t, e) {
            t *= y;
            var n = w(e *= y), i = n * w(t), r = n * M(t), o = M(e),
                a = _(D((a = wn * o - Pn * r) * a + (a = Pn * i - _n * o) * a + (a = _n * r - wn * i) * a), _n * i + wn * r + Pn * o);
            un += a, pn += a * (_n + (_n = i)), hn += a * (wn + (wn = r)), gn += a * (Pn + (Pn = o)), En(_n, wn, Pn)
        }

        function kn() {
            xn.point = Dn
        }

        function Ln() {
            xn.point = Rn
        }

        function zn() {
            Yn(bn, mn), xn.point = Dn
        }

        function Rn(t, e) {
            bn = t, mn = e, t *= y, e *= y, xn.point = Yn;
            var n = w(e);
            _n = n * w(t), wn = n * M(t), Pn = M(e), En(_n, wn, Pn)
        }

        function Yn(t, e) {
            t *= y;
            var n = w(e *= y), i = n * w(t), r = n * M(t), o = M(e), a = wn * o - Pn * r, l = Pn * i - _n * o,
                u = _n * r - wn * i, s = O(a, l, u), c = N(s), f = s && -c / s;
            dn.add(f * a), vn.add(f * l), yn.add(f * u), un += c, pn += c * (_n + (_n = i)), hn += c * (wn + (wn = r)), gn += c * (Pn + (Pn = o)), En(_n, wn, Pn)
        }

        var Xn, In, Bn, Gn, Zn, An, Wn, Fn, Vn, Jn, Hn, Qn, Un, qn, Kn, $n, ti = new s, ei = new s, ni = {
            point: T, lineStart: T, lineEnd: T, polygonStart: function () {
                ti = new s, ni.lineStart = ii, ni.lineEnd = ri
            }, polygonEnd: function () {
                var t = +ti;
                ei.add(t < 0 ? d + t : t), this.lineStart = this.lineEnd = this.point = T
            }, sphere: function () {
                ei.add(d)
            }
        };

        function ii() {
            ni.point = oi
        }

        function ri() {
            ai(Xn, In)
        }

        function oi(t, e) {
            ni.point = ai, Xn = t, In = e, Bn = t *= y, Gn = w(e = (e *= y) / 2 + g), Zn = M(e)
        }

        function ai(t, e) {
            var n = (t *= y) - Bn, i = n >= 0 ? 1 : -1, r = i * n, o = w(e = (e *= y) / 2 + g), a = M(e), l = Zn * a,
                u = Gn * o + l * w(r), s = l * i * M(r);
            ti.add(_(s, u)), Bn = t, Gn = o, Zn = a
        }

        function li(t) {
            return ei = new s, Z(t, ni), 2 * ei
        }

        var ui = {
            point: si, lineStart: fi, lineEnd: pi, polygonStart: function () {
                ui.point = hi, ui.lineStart = gi, ui.lineEnd = di, qn = new s, ni.polygonStart()
            }, polygonEnd: function () {
                ni.polygonEnd(), ui.point = si, ui.lineStart = fi, ui.lineEnd = pi, ti < 0 ? (An = -(Fn = 180), Wn = -(Vn = 90)) : qn > c ? Vn = 90 : qn < -c && (Wn = -90), $n[0] = An, $n[1] = Fn
            }, sphere: function () {
                An = -(Fn = 180), Wn = -(Vn = 90)
            }
        };

        function si(t, e) {
            Kn.push($n = [An = t, Fn = t]), e < Wn && (Wn = e), e > Vn && (Vn = e)
        }

        function ci(t, e) {
            var n = _t([t * y, e * y]);
            if (Un) {
                var i = Pt(Un, n), r = Pt([i[1], -i[0], 0], i);
                St(r), r = mt(r);
                var o, a = t - Jn, l = a > 0 ? 1 : -1, u = r[0] * v * l, s = b(a) > 180;
                s ^ (l * Jn < u && u < l * t) ? (o = r[1] * v) > Vn && (Vn = o) : s ^ (l * Jn < (u = (u + 360) % 360 - 180) && u < l * t) ? (o = -r[1] * v) < Wn && (Wn = o) : (e < Wn && (Wn = e), e > Vn && (Vn = e)), s ? t < Jn ? vi(An, t) > vi(An, Fn) && (Fn = t) : vi(t, Fn) > vi(An, Fn) && (An = t) : Fn >= An ? (t < An && (An = t), t > Fn && (Fn = t)) : t > Jn ? vi(An, t) > vi(An, Fn) && (Fn = t) : vi(t, Fn) > vi(An, Fn) && (An = t)
            } else Kn.push($n = [An = t, Fn = t]);
            e < Wn && (Wn = e), e > Vn && (Vn = e), Un = n, Jn = t
        }

        function fi() {
            ui.point = ci
        }

        function pi() {
            $n[0] = An, $n[1] = Fn, ui.point = si, Un = null
        }

        function hi(t, e) {
            if (Un) {
                var n = t - Jn;
                qn.add(b(n) > 180 ? n + (n > 0 ? 360 : -360) : n)
            } else Hn = t, Qn = e;
            ni.point(t, e), ci(t, e)
        }

        function gi() {
            ni.lineStart()
        }

        function di() {
            hi(Hn, Qn), ni.lineEnd(), b(qn) > c && (An = -(Fn = 180)), $n[0] = An, $n[1] = Fn, Un = null
        }

        function vi(t, e) {
            return (e -= t) < 0 ? e + 360 : e
        }

        function yi(t, e) {
            return t[0] - e[0]
        }

        function bi(t, e) {
            return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e
        }

        function mi(t, e) {
            return function () {
                var t, e, n = Tt([0, 0]), i = Tt(90), r = Tt(6), o = {
                    point: function (n, i) {
                        t.push(n = e(n, i)), n[0] *= v, n[1] *= v
                    }
                };

                function a() {
                    var a = n.apply(this, arguments), l = i.apply(this, arguments) * y,
                        u = r.apply(this, arguments) * y;
                    return t = [], e = ct(-a[0] * y, -a[1] * y, 0).invert, kt(o, l, u, 1), a = {
                        type: "Polygon",
                        coordinates: [t]
                    }, t = e = null, a
                }

                return a.center = function (t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Tt([+t[0], +t[1]]), a) : n
                }, a.radius = function (t) {
                    return arguments.length ? (i = "function" == typeof t ? t : Tt(+t), a) : i
                }, a.precision = function (t) {
                    return arguments.length ? (r = "function" == typeof t ? t : Tt(+t), a) : r
                }, a
            }().center([t.longitude, t.latitude]).radius(e)()
        }

        function _i(t) {
            var e = function (t) {
                ln = un = sn = cn = fn = pn = hn = gn = 0, dn = new s, vn = new s, yn = new s, Z(t, xn);
                var e = +dn, n = +vn, i = +yn, r = O(e, n, i);
                return r < f && (e = pn, n = hn, i = gn, un < c && (e = sn, n = cn, i = fn), (r = O(e, n, i)) < f) ? [NaN, NaN] : [_(n, e) * v, N(i / r) * v]
            }(t);
            return {longitude: e[0], latitude: e[1]}
        }

        function wi(t) {
            var e = function (t) {
                var e, n, i, r, o, a, l;
                if (Vn = Fn = -(An = Wn = 1 / 0), Kn = [], Z(t, ui), n = Kn.length) {
                    for (Kn.sort(yi), e = 1, o = [i = Kn[0]]; e < n; ++e) bi(i, (r = Kn[e])[0]) || bi(i, r[1]) ? (vi(i[0], r[1]) > vi(i[0], i[1]) && (i[1] = r[1]), vi(r[0], i[1]) > vi(i[0], i[1]) && (i[0] = r[0])) : o.push(i = r);
                    for (a = -1 / 0, e = 0, i = o[n = o.length - 1]; e <= n; i = r, ++e) r = o[e], (l = vi(i[1], r[0])) > a && (a = l, An = r[0], Fn = i[1])
                }
                return Kn = $n = null, An === 1 / 0 || Wn === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[An, Wn], [Fn, Vn]]
            }(t);
            if (e) {
                var n = {left: e[0][0], right: e[1][0], top: e[1][1], bottom: e[0][1]};
                return n.right < n.left && (n.right = 180, n.left = -180), n
            }
            return {left: 0, right: 0, top: 0, bottom: 0}
        }

        function Pi(t, e, n, i) {
            var r = [];
            i <= -180 && (i = -179.9999), n <= -90 && (n = -89.9999), t >= 90 && (t = 89.9999), e >= 180 && (e = 179.9999);
            for (var o = Math.min(90, (e - i) / Math.ceil((e - i) / 90)), a = (t - n) / Math.ceil((t - n) / 90), l = i; l < e; l += o) {
                var u = [];
                r.push([u]), l + o > e && (o = e - l);
                for (var s = l; s <= l + o; s += 5) u.push([s, t]);
                for (var c = t; c >= n; c -= a) u.push([l + o, c]);
                for (s = l + o; s >= l; s -= 5) u.push([s, n]);
                for (c = n; c <= t; c += a) u.push([l, c])
            }
            return {type: "MultiPolygon", coordinates: r}
        }

        function ji(t) {
            var e = Oi(t.longitude), n = Math.asin(Math.sin(t.latitude * Sn.RADIANS)) * Sn.DEGREES, i = Oi(t.latitude);
            return Math.abs(i) > 90 && (e = Oi(e + 180)), t.longitude = e, t.latitude = n, t
        }

        function Oi(t) {
            return (t %= 360) > 180 && (t -= 360), t < -180 && (t += 360), t
        }

        var Si = n(7652), Mi = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "_downTranslateX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_downTranslateY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_downRotationX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_downRotationY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_downRotationZ", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_pLat", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(e, "_pLon", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(e, "_movePoints", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(e, "_downZoomLevel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 1
                }), Object.defineProperty(e, "_doubleDownDistance", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(e, "_dirtyGeometries", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(e, "_geometryColection", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {type: "GeometryCollection", geometries: []}
                }), Object.defineProperty(e, "_centerLocation", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(e, "_za", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_rxa", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_rya", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_txa", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_tya", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_mapBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: [[0, 0], [0, 0]]
                }), Object.defineProperty(e, "_geoCentroid", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {longitude: 0, latitude: 0}
                }), Object.defineProperty(e, "_geoBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {left: 0, right: 0, top: 0, bottom: 0}
                }), Object.defineProperty(e, "_prevGeoBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {left: 0, right: 0, top: 0, bottom: 0}
                }), Object.defineProperty(e, "_dispatchBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(e, "_wheelDp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_pw", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_ph", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(e, "_mapFitted", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(e, "_centerX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(e, "_centerY", {enumerable: !0, configurable: !0, writable: !0, value: 0}), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "_makeGeoPath", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this.get("projection"), e = function (t, e) {
                        var n, i, r = 4.5;

                        function o(t) {
                            return t && ("function" == typeof r && i.pointRadius(+r.apply(this, arguments)), Z(t, n(i))), i.result()
                        }

                        return o.area = function (t) {
                            return Z(t, n(Me)), Me.result()
                        }, o.measure = function (t) {
                            return Z(t, n(rn)), rn.result()
                        }, o.bounds = function (t) {
                            return Z(t, n(Jt)), Jt.result()
                        }, o.centroid = function (t) {
                            return Z(t, n(Ve)), Ve.result()
                        }, o.projection = function (e) {
                            return arguments.length ? (n = null == e ? (t = null, It) : (t = e).stream, o) : t
                        }, o.context = function (t) {
                            return arguments.length ? (i = null == t ? (e = null, new on) : new Je(e = t), "function" != typeof r && i.pointRadius(r), o) : e
                        }, o.pointRadius = function (t) {
                            return arguments.length ? (r = "function" == typeof t ? t : (i.pointRadius(+t), +t), o) : r
                        }, o.projection(t).context(e)
                    }();
                    e.projection(t), this.setPrivateRaw("geoPath", e)
                }
            }), Object.defineProperty(e.prototype, "geoPoint", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    return this.invert({x: this.width() / 2, y: this.height() / 2})
                }
            }), Object.defineProperty(e.prototype, "geoCentroid", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    return this._geoCentroid
                }
            }), Object.defineProperty(e.prototype, "geoBounds", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    return this._geoBounds
                }
            }), Object.defineProperty(e.prototype, "_handleSetWheel", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this, e = this.get("wheelX"), n = this.get("wheelY"), i = this.chartContainer;
                    "none" != e || "none" != n ? (this._wheelDp = i.events.on("wheel", (function (i) {
                        var r = t.get("wheelEasing"), o = t.get("wheelSensitivity", 1), a = t.get("wheelDuration", 0),
                            l = i.originalEvent;
                        if (Si.isLocalEvent(l, t)) {
                            l.preventDefault();
                            var u = t.chartContainer._display.toLocal(i.point);
                            "zoom" == n ? t._handleWheelZoom(l.deltaY, u) : "rotateY" == n ? t._handleWheelRotateY(l.deltaY / 5 * o, a, r) : "rotateX" == n && t._handleWheelRotateX(l.deltaY / 5 * o, a, r), "zoom" == e ? t._handleWheelZoom(l.deltaX, u) : "rotateY" == e ? t._handleWheelRotateY(l.deltaX / 5 * o, a, r) : "rotateX" == e && t._handleWheelRotateX(l.deltaX / 5 * o, a, r)
                        }
                    })), this._disposers.push(this._wheelDp)) : this._wheelDp && this._wheelDp.dispose()
                }
            }), Object.defineProperty(e.prototype, "_prepareChildren", {
                enumerable: !1, configurable: !0, writable: !0, value: function () {
                    var e = this;
                    t.prototype._prepareChildren.call(this);
                    var n = this.get("projection"), i = this.innerWidth(), r = this.innerHeight();
                    if (this.isDirty("projection")) {
                        this._makeGeoPath(), this.markDirtyProjection(), this._fitMap(), n.scale(this.getPrivate("mapScale") * this.get("zoomLevel", 1)), n.rotate && n.rotate([this.get("rotationX", 0), this.get("rotationY", 0), this.get("rotationZ", 0)]);
                        var a = this._prevSettings.projection;
                        if (a && a != n) {
                            var l = i / 2, u = r / 2;
                            if (a.invert) {
                                var s = a.invert([l, u]);
                                if (s && (g = n(s))) {
                                    var c = n.translate(), f = l - (g[0] - c[0]), p = u - (g[1] - c[1]);
                                    n.translate([f, p]), this.setRaw("translateX", f), this.setRaw("translateY", p)
                                }
                            }
                        }
                    }
                    (this.isDirty("wheelX") || this.isDirty("wheelY")) && this._handleSetWheel();
                    var h = this._geometryColection.geometries;
                    if (this._dirtyGeometries && (this._geometryColection.geometries = [], this.series.each((function (t) {
                        o.pushAll(e._geometryColection.geometries, t._geometries)
                    })), this._fitMap()), 0 != h.length && (i != this._pw || r != this._ph || this._dirtyGeometries) && i > 0 && r > 0) {
                        l = i / 2, u = r / 2, n.fitSize([i, r], this._geometryColection);
                        var g, d = n.scale();
                        this.setPrivateRaw("mapScale", d), n.scale(d * this.get("zoomLevel", 1)), this._centerLocation && (g = n(this._centerLocation)) && (c = n.translate(), f = l - (g[0] - c[0]), p = u - (g[1] - c[1]), n.translate([f, p]), this.setRaw("translateX", f), this.setRaw("translateY", p), this._centerX = c[0], this._centerY = c[1]), this.markDirtyProjection();
                        var v = this.getPrivate("geoPath");
                        this._mapBounds = v.bounds(this._geometryColection)
                    }
                    if (this._pw = i, this._ph = r, this.isDirty("zoomControl")) {
                        var y = this._prevSettings.zoomControl, b = this.get("zoomControl");
                        b !== y && (this._disposeProperty("zoomControl"), y && y.dispose(), b && (b.setPrivate("chart", this), this.children.push(b)), this.setRaw("zoomControl", b))
                    }
                    this.isDirty("zoomLevel") && (n.scale(this.getPrivate("mapScale") * this.get("zoomLevel", 1)), this.markDirtyProjection(), this.series.each((function (t) {
                        t.isType("MapPointSeries") && t.get("autoScale") && o.each(t.dataItems, (function (t) {
                            var n = t.bullets;
                            n && o.each(n, (function (t) {
                                var n = t.get("sprite");
                                n && n.set("scale", e.get("zoomLevel"))
                            }))
                        }))
                    }))), (this.isDirty("translateX") || this.isDirty("translateY")) && (n.translate([this.get("translateX", this.width() / 2), this.get("translateY", this.height() / 2)]), this.markDirtyProjection()), n.rotate && (this.isDirty("rotationX") || this.isDirty("rotationY") || this.isDirty("rotationZ")) && (n.rotate([this.get("rotationX", 0), this.get("rotationY", 0), this.get("rotationZ", 0)]), this.markDirtyProjection()), (this.isDirty("pinchZoom") || this.get("panX") || this.get("panY")) && this._setUpTouch()
                }
            }), Object.defineProperty(e.prototype, "_fitMap", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this.get("projection"), e = this.innerWidth(), n = this.innerHeight();
                    if (e > 0 && n > 0) {
                        t.fitSize([e, n], this._geometryColection), this.setPrivateRaw("mapScale", t.scale());
                        var i = t.translate();
                        this.setRaw("translateX", i[0]), this.setRaw("translateY", i[1]), this._centerX = i[0], this._centerY = i[1];
                        var r = this.getPrivate("geoPath");
                        this._mapBounds = r.bounds(this._geometryColection), this._geoCentroid = _i(this._geometryColection);
                        var o = wi(this._geometryColection);
                        if (this._geoBounds = o, this._geometryColection.geometries.length > 0) {
                            o.left = Sn.round(this._geoBounds.left, 3), o.right = Sn.round(this._geoBounds.right, 3), o.top = Sn.round(this._geoBounds.top, 3), o.bottom = Sn.round(this._geoBounds.bottom, 3);
                            var a = this._prevGeoBounds;
                            a && !Si.sameBounds(o, a) && (this._dispatchBounds = !0, this._prevGeoBounds = o)
                        }
                        this._mapFitted = !0
                    }
                }
            }), Object.defineProperty(e.prototype, "homeGeoPoint", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this.get("homeGeoPoint");
                    if (!t) {
                        var e = this.getPrivate("geoPath").bounds(this._geometryColection), n = e[0][0], i = e[0][1],
                            r = e[1][0], o = e[1][1];
                        t = this.invert({x: n + (r - n) / 2, y: i + (o - i) / 2})
                    }
                    return t
                }
            }), Object.defineProperty(e.prototype, "goHome", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    this.zoomToGeoPoint(this.homeGeoPoint(), this.get("homeZoomLevel", 1), !0, t)
                }
            }), Object.defineProperty(e.prototype, "_updateChildren", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this.get("projection");
                    if (t.invert) {
                        var e = this.innerWidth(), n = this.innerHeight();
                        e > 0 && n > 0 && (this._centerLocation = t.invert([this.innerWidth() / 2, this.innerHeight() / 2]))
                    }
                }
            }), Object.defineProperty(e.prototype, "_afterChanged", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    if (t.prototype._afterChanged.call(this), this._dispatchBounds) {
                        this._dispatchBounds = !1;
                        var e = "geoboundschanged";
                        this.events.isEnabled(e) && this.events.dispatch(e, {type: e, target: this})
                    }
                }
            }), Object.defineProperty(e.prototype, "_setUpTouch", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.chartContainer._display.cancelTouch || (this.chartContainer._display.cancelTouch = !!(this.get("pinchZoom") || this.get("panX") || this.get("panY")))
                }
            }), Object.defineProperty(e.prototype, "markDirtyGeometries", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this._dirtyGeometries = !0, this.markDirty()
                }
            }), Object.defineProperty(e.prototype, "markDirtyProjection", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.series.each((function (t) {
                        t.markDirtyProjection()
                    }))
                }
            }), Object.defineProperty(e.prototype, "_afterNew", {
                enumerable: !1, configurable: !0, writable: !0, value: function () {
                    var e = this;
                    this._defaultThemes.push(pe.new(this._root)), this._settings.themeTags = Si.mergeTags(this._settings.themeTags, ["map"]), t.prototype._afterNew.call(this), this._makeGeoPath(), this.chartContainer.children.push(this.seriesContainer), null == this.get("translateX") && this.set("translateX", this.width() / 2), null == this.get("translateY") && this.set("translateY", this.height() / 2), this.chartContainer.set("interactive", !0), this.chartContainer.set("interactiveChildren", !1), this.chartContainer.set("background", ge.A.new(this._root, {
                        themeTags: ["map", "background"],
                        fill: jn.Il.fromHex(0),
                        fillOpacity: 0
                    })), this._disposers.push(this.chartContainer.events.on("pointerdown", (function (t) {
                        e._handleChartDown(t)
                    }))), this._disposers.push(this.chartContainer.events.on("globalpointerup", (function (t) {
                        e._handleChartUp(t)
                    }))), this._disposers.push(this.chartContainer.events.on("globalpointermove", (function (t) {
                        e._handleChartMove(t)
                    })));
                    for (var n = !1, i = 0; i < On.i_.licenses.length; i++) On.i_.licenses[i].match(/^AM5M.{5,}/i) && (n = !0);
                    n || this._root._showBranding(), this._setUpTouch()
                }
            }), Object.defineProperty(e.prototype, "_handleChartDown", {
                enumerable: !1, configurable: !0, writable: !0, value: function (t) {
                    this._downZoomLevel = this.get("zoomLevel", 1);
                    var e = a.keys(this.chartContainer._downPoints).length;
                    if (e > 0) {
                        this._downTranslateX = this.get("translateX"), this._downTranslateY = this.get("translateY"), this._downRotationX = this.get("rotationX"), this._downRotationY = this.get("rotationY"), this._downRotationZ = this.get("rotationZ");
                        var n = this.chartContainer._getDownPointId();
                        if (n) {
                            var i = this._movePoints[n];
                            i && (this.chartContainer._downPoints[n] = i)
                        }
                    } else if (0 == e) {
                        var r = this.chartContainer.get("background");
                        if (r && r.events.enableType("click"), this.get("panX") || this.get("panY")) {
                            this._za && this._za.stop(), this._txa && this._txa.stop(), this._tya && this._tya.stop(), this._rxa && this._rxa.stop(), this._rya && this._rya.stop();
                            var o = this.chartContainer._display.toLocal(t.point);
                            this._downTranslateX = this.get("translateX"), this._downTranslateY = this.get("translateY"), this._downRotationX = this.get("rotationX"), this._downRotationY = this.get("rotationY"), this._downRotationZ = this.get("rotationZ");
                            var l = this.get("projection");
                            if (l.invert) {
                                var u = l.invert([o.x, o.y]), s = l.invert([o.x + 1, o.y + 1]);
                                u && s && (this._pLon = Math.abs(s[0] - u[0]), this._pLat = Math.abs(s[1] - u[1]))
                            }
                        }
                    }
                }
            }), Object.defineProperty(e.prototype, "invert", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = this.get("projection");
                    if (e.invert) {
                        var n = e.invert([t.x, t.y]);
                        if (n) return {longitude: n[0], latitude: n[1]}
                    }
                    return {longitude: 0, latitude: 0}
                }
            }), Object.defineProperty(e.prototype, "convert", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = this.get("projection")([t.longitude, t.latitude]);
                    return e ? {x: e[0], y: e[1]} : {x: 0, y: 0}
                }
            }), Object.defineProperty(e.prototype, "_handleChartUp", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    this.chartContainer._downPoints = {}
                }
            }), Object.defineProperty(e.prototype, "_handlePinch", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this, e = this.chartContainer, n = 0, i = [], r = [];
                    if (a.each(e._downPoints, (function (e, o) {
                        i[n] = o;
                        var a = t._movePoints[e];
                        a && (r[n] = a), n++
                    })), i.length > 1 && r.length > 1) {
                        var o = e._display, l = i[0], u = i[1], s = r[0], c = r[1];
                        if (l && u && s && c) {
                            l = o.toLocal(l), u = o.toLocal(u), s = o.toLocal(s), c = o.toLocal(c);
                            var f = Math.hypot(u.x - l.x, u.y - l.y),
                                p = Math.hypot(c.x - s.x, c.y - s.y) / f * this._downZoomLevel;
                            p = Sn.fitToRange(p, this.get("minZoomLevel", 1), this.get("maxZoomLevel", 32));
                            var h = {x: s.x + (c.x - s.x) / 2, y: s.y + (c.y - s.y) / 2},
                                g = {x: l.x + (u.x - l.x) / 2, y: l.y + (u.y - l.y) / 2}, d = this._downTranslateX || 0,
                                v = this._downTranslateY || 0, y = this._downZoomLevel, b = h.x - (-d + g.x) / y * p,
                                m = h.y - (-v + g.y) / y * p;
                            this.set("zoomLevel", p), this.set("translateX", b), this.set("translateY", m)
                        }
                    }
                }
            }), Object.defineProperty(e.prototype, "_handleChartMove", {
                enumerable: !1, configurable: !0, writable: !0, value: function (t) {
                    var e = this.chartContainer, n = e._getDownPoint(), i = e._getDownPointId(),
                        r = t.originalEvent.pointerId;
                    if (this.get("pinchZoom") && r && (this._movePoints[r] = t.point, a.keys(e._downPoints).length > 1)) this._handlePinch(); else if ((!i || !r || r == i) && n) {
                        var o = this.get("panX"), l = this.get("panY");
                        if ("none" != o || "none" != l) {
                            var u = e._display, s = u.toLocal(t.point);
                            n = u.toLocal(n);
                            var c = this._downTranslateX, f = this._downTranslateY;
                            if (Math.hypot(n.x - s.x, n.y - s.y) > 5) {
                                var p = e.get("background");
                                if (p && p.events.disableType("click"), Mn.isNumber(c) && Mn.isNumber(f)) {
                                    var h = this.get("projection"), g = this.get("zoomLevel", 1),
                                        d = this.get("maxPanOut", .4), v = this._mapBounds, y = this.width(),
                                        b = this.height(), m = v[1][0] - v[0][0], _ = v[1][1] - v[0][1];
                                    if ("translateX" == o) {
                                        c += s.x - n.x;
                                        var w = y / 2 - (y / 2 - this._centerX) * g;
                                        c = Math.min(c, w + m * d * g), c = Math.max(c, w - m * d * g)
                                    }
                                    if ("translateY" == l) {
                                        f += s.y - n.y;
                                        var P = b / 2 - (b / 2 - this._centerY) * g;
                                        f = Math.min(f, P + _ * d * g), f = Math.max(f, P - _ * d * g)
                                    }
                                    if (this.set("translateX", c), this.set("translateY", f), h.invert) {
                                        var j = h.invert([n.x, n.y]);
                                        location && j && ("rotateX" == o && this.set("rotationX", this._downRotationX - (n.x - s.x) * this._pLon), "rotateY" == l && this.set("rotationY", this._downRotationY + (n.y - s.y) * this._pLat))
                                    }
                                }
                            }
                        }
                    }
                }
            }), Object.defineProperty(e.prototype, "_handleWheelRotateY", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e, n) {
                    this._rya = this.animate({
                        key: "rotationY",
                        to: this.get("rotationY", 0) - t,
                        duration: e,
                        easing: n
                    })
                }
            }), Object.defineProperty(e.prototype, "_handleWheelRotateX", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e, n) {
                    this._rxa = this.animate({
                        key: "rotationX",
                        to: this.get("rotationX", 0) - t,
                        duration: e,
                        easing: n
                    })
                }
            }), Object.defineProperty(e.prototype, "_handleWheelZoom", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e) {
                    var n = this.get("zoomStep", 2), i = this.get("zoomLevel", 1), r = i;
                    t > 0 ? r = i / n : t < 0 && (r = i * n), r != i && this.zoomToPoint(e, r)
                }
            }), Object.defineProperty(e.prototype, "zoomToGeoBounds", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e) {
                    t.right < t.left && (t.right = 180, t.left = -180);
                    var n = this.getPrivate("geoPath").bounds(this._geometryColection),
                        i = this.convert({longitude: t.left, latitude: t.top}),
                        r = this.convert({longitude: t.right, latitude: t.bottom});
                    i.y < n[0][1] && (i.y = n[0][1]), r.y > n[1][1] && (r.y = n[1][1]);
                    var o = this.get("zoomLevel", 1), a = i.x, l = r.x, u = i.y, s = r.y, c = this.seriesContainer,
                        f = .9 * Math.min(c.innerWidth() / (l - a) * o, c.innerHeight() / (s - u) * o),
                        p = a + (l - a) / 2, h = u + (s - u) / 2, g = this.invert({x: p, y: h});
                    return this.zoomToGeoPoint(g, f, !0, e)
                }
            }), Object.defineProperty(e.prototype, "zoomToPoint", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e, n, i) {
                    e && (e = Sn.fitToRange(e, this.get("minZoomLevel", 1), this.get("maxZoomLevel", 32))), Mn.isNumber(i) || (i = this.get("animationDuration", 0));
                    var r = this.get("animationEasing"), o = this.get("zoomLevel", 1);
                    this.get("centerMapOnZoomOut") && e == this.get("homeZoomLevel", 1) && (t = this.convert(this.homeGeoPoint()), n = !0);
                    var a = t.x, l = t.y, u = this.get("translateX", 0), s = this.get("translateY", 0), c = a, f = l;
                    n && (c = this.width() / 2, f = this.height() / 2);
                    var p = c - (a - u) / o * e, h = f - (l - s) / o * e;
                    return this._txa = this.animate({
                        key: "translateX",
                        to: p,
                        duration: i,
                        easing: r
                    }), this._tya = this.animate({
                        key: "translateY",
                        to: h,
                        duration: i,
                        easing: r
                    }), this._za = this.animate({
                        key: "zoomLevel",
                        to: e,
                        duration: i,
                        easing: r
                    }), o != e && this._root.readerAlert(this._t("Zoom level changed to %1", this._root.locale, Mn.numberToString(e))), this._za
                }
            }), Object.defineProperty(e.prototype, "zoomToGeoPoint", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e, n, i) {
                    var r = this.convert(t);
                    if (r) return this.zoomToPoint(r, e, n, i)
                }
            }), Object.defineProperty(e.prototype, "zoomIn", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    return this.zoomToPoint({
                        x: this.width() / 2,
                        y: this.height() / 2
                    }, this.get("zoomLevel", 1) * this.get("zoomStep", 2))
                }
            }), Object.defineProperty(e.prototype, "zoomOut", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    return this.zoomToPoint({
                        x: this.width() / 2,
                        y: this.height() / 2
                    }, this.get("zoomLevel", 1) / this.get("zoomStep", 2))
                }
            }), Object.defineProperty(e.prototype, "_clearDirty", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._clearDirty.call(this), this._dirtyGeometries = !1, this._mapFitted = !1
                }
            }), Object.defineProperty(e.prototype, "getArea", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = this.getPrivate("geoPath"), n = t.get("geometry");
                    return n ? e.area(n) : 0
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "MapChart"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: he.j.classNames.concat([e.className])
            }), e
        }(he.j), xi = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "_types", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ["Point", "MultiPoint"]
                }), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "_afterNew", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.fields.push("polygonId", "lineId", "longitude", "latitude"), t.prototype._afterNew.call(this)
                }
            }), Object.defineProperty(e.prototype, "markDirtyProjection", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.markDirty()
                }
            }), Object.defineProperty(e.prototype, "markDirtyValues", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    t.prototype.markDirtyValues.call(this), e && this._positionBullets(e)
                }
            }), Object.defineProperty(e.prototype, "processDataItem", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    t.prototype.processDataItem.call(this, e);
                    var n = e.get("geometry");
                    if (n) {
                        if ("Point" == n.type) (i = n.coordinates) && (e.set("longitude", i[0]), e.set("latitude", i[1])); else if ("MultiPoint" == n.type) {
                            var i;
                            (i = n.coordinates) && i[0] && (e.set("longitude", i[0][0]), e.set("latitude", i[0][1]))
                        }
                    } else e.set("geometry", {
                        type: "Point",
                        coordinates: [e.get("longitude", 0), e.get("latitude", 0)]
                    })
                }
            }), Object.defineProperty(e.prototype, "_makeBullets", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = this;
                    t.bullets = [], this.bullets.each((function (n) {
                        var i = t.get("geometry");
                        if (i) if ("Point" == i.type) e._makeBullet(t, n); else if (i.type = "MultiPoint") {
                            var r = 0;
                            o.each(i.coordinates, (function () {
                                e._makeBullet(t, n, r), r++
                            }))
                        }
                    }))
                }
            }), Object.defineProperty(e.prototype, "_positionBullet", {
                enumerable: !1, configurable: !0, writable: !0, value: function (t) {
                    var e = t.get("sprite");
                    if (e) {
                        var n, i = e.dataItem, r = i.get("latitude"), o = i.get("longitude"), a = i.get("lineDataItem"),
                            l = this.chart;
                        if (a) n = a.get("mapLine"); else {
                            var u = i.get("lineId");
                            u && l && l.series.each((function (t) {
                                if (t.isType("MapLineSeries")) {
                                    var e = t.getDataItemById(u);
                                    e && (i.set("lineDataItem", e), n = e.get("mapLine"))
                                }
                            }))
                        }
                        var s, c = i.get("polygonDataItem");
                        if (c) s = c.get("mapPolygon"); else {
                            var f = i.get("polygonId");
                            f && l && l.series.each((function (t) {
                                if (t.isType("MapPolygonSeries")) {
                                    var e = t.getDataItemById(f);
                                    e && (i.set("polygonDataItem", e), s = e.get("mapPolygon"))
                                }
                            }))
                        }
                        var p = i.get("positionOnLine"), h = void 0, g = void 0;
                        if (s) h = [(d = s.visualCentroid()).longitude, d.latitude], i.setRaw("longitude", d.longitude), i.setRaw("latitude", d.latitude); else if (n && Mn.isNumber(p)) {
                            var d;
                            if (h = [(d = n.positionToGeoPoint(p)).longitude, d.latitude], i.get("autoRotate", t.get("autoRotate")) && l) {
                                var v = n.positionToGeoPoint(p - .002), y = n.positionToGeoPoint(p + .002),
                                    b = l.convert(v), m = l.convert(y);
                                g = Sn.getAngle(b, m)
                            }
                            i.setRaw("longitude", d.longitude), i.setRaw("latitude", d.latitude)
                        } else if (Mn.isNumber(o) && Mn.isNumber(r)) h = [o, r]; else {
                            var _ = i.get("geometry");
                            if (_) if ("Point" == _.type) this._positionBulletReal(t, _, _.coordinates, g); else if ("MultiPoint" == _.type) {
                                var w = t._index || 0;
                                h = _.coordinates[w]
                            }
                        }
                        h && this._positionBulletReal(t, {type: "Point", coordinates: h}, h, g)
                    }
                }
            }), Object.defineProperty(e.prototype, "_positionBulletReal", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e, n, i) {
                    var r = t.get("sprite"), o = this.chart;
                    if (o) {
                        var a = o.get("projection"), l = o.getPrivate("geoPath"), u = r.dataItem, s = a(n);
                        s && r.setAll({x: s[0], y: s[1]});
                        var c = !0;
                        l(e) ? this.get("clipFront") && (c = !1) : this.get("clipBack") && (c = !1), r.setPrivate("visible", c), u && null != i && u.get("autoRotate", t.get("autoRotate")) && r.set("rotation", i + u.get("autoRotateAngle", t.get("autoRotateAngle", 0)))
                    }
                }
            }), Object.defineProperty(e.prototype, "zoomToDataItem", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e) {
                    var n = this.chart;
                    if (n) return n.zoomToGeoPoint({
                        longitude: t.get("longitude", 0),
                        latitude: t.get("latitude", 0)
                    }, e, !0)
                }
            }), Object.defineProperty(e.prototype, "disposeDataItem", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    var n = this.chart;
                    n && n.series.each((function (t) {
                        t.isType("MapLineSeries") && o.each(t.dataItems, (function (n) {
                            var i = n.get("pointsToConnect");
                            i && o.each(i, (function (r) {
                                r == e && (o.remove(i, r), t.markDirtyValues(n))
                            }))
                        }))
                    })), t.prototype.disposeDataItem.call(this, e)
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "MapPointSeries"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l.classNames.concat([e.className])
            }), e
        }(l), Di = n(5417), Ei = n.n(Di), Ni = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "_projectionDirty", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(e, "series", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "_beforeChanged", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var e = this;
                    if (t.prototype._beforeChanged.call(this), this._projectionDirty || this.isDirty("geometry") || this.isDirty("precision")) {
                        var n = this.get("geometry");
                        if (n) {
                            var i = this.series;
                            if (i) {
                                var r = i.projection();
                                r && r.precision(this.get("precision", .5));
                                var o = i.geoPath();
                                o && (this._clear = !0, this.set("draw", (function (t) {
                                    o.context(e._display), o(n), o.context(null)
                                })), this.isHover() && this.showTooltip())
                            }
                        }
                    }
                }
            }), Object.defineProperty(e.prototype, "markDirtyProjection", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.markDirty(), this._projectionDirty = !0
                }
            }), Object.defineProperty(e.prototype, "_clearDirty", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._clearDirty.call(this), this._projectionDirty = !1
                }
            }), Object.defineProperty(e.prototype, "geoCentroid", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this.get("geometry");
                    return t ? _i(t) : {latitude: 0, longitude: 0}
                }
            }), Object.defineProperty(e.prototype, "visualCentroid", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = 0, e = [], n = this.get("geometry");
                    if (n) {
                        if ("Polygon" == n.type) e = n.coordinates; else if ("MultiPolygon" == n.type) for (var i = 0; i < n.coordinates.length; i++) {
                            var r = n.coordinates[i], o = li({type: "Polygon", coordinates: r});
                            o > t && (e = r, t = o)
                        }
                        var a = Ei()(e);
                        return {longitude: a[0], latitude: a[1]}
                    }
                    return {longitude: 0, latitude: 0}
                }
            }), Object.defineProperty(e.prototype, "_getTooltipPoint", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    var t = this.series;
                    if (t) {
                        var e = t.projection();
                        if (e) {
                            var n = this.visualCentroid(), i = e([n.longitude, n.latitude]);
                            if (i) return {x: i[0], y: i[1]}
                        }
                    }
                    return {x: 0, y: 0}
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "MapPolygon"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: u.T.classNames.concat([e.className])
            }), e
        }(u.T), Ci = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "mapPolygons", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new K.o($.YS.new({}), (function () {
                        return Ni._new(e._root, {}, [e.mapPolygons.template])
                    }))
                }), Object.defineProperty(e, "_types", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ["Polygon", "MultiPolygon"]
                }), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "makeMapPolygon", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = this.children.push(this.mapPolygons.make());
                    return e._setDataItem(t), this.mapPolygons.push(e), e
                }
            }), Object.defineProperty(e.prototype, "markDirtyProjection", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    o.each(this.dataItems, (function (t) {
                        var e = t.get("mapPolygon");
                        e && e.markDirtyProjection()
                    }))
                }
            }), Object.defineProperty(e.prototype, "_prepareChildren", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._prepareChildren.call(this), this.isDirty("fill") && this.mapPolygons.template.set("fill", this.get("fill")), this.isDirty("stroke") && this.mapPolygons.template.set("stroke", this.get("stroke"))
                }
            }), Object.defineProperty(e.prototype, "processDataItem", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    t.prototype.processDataItem.call(this, e);
                    var n = e.get("mapPolygon");
                    n || (n = this.makeMapPolygon(e)), e.set("mapPolygon", n);
                    var i = e.get("geometry");
                    i && n.set("geometry", i), n.series = this, this._addGeometry(e.get("geometry"))
                }
            }), Object.defineProperty(e.prototype, "disposeDataItem", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    t.prototype.disposeDataItem.call(this, e);
                    var n = e.get("mapPolygon");
                    n && (this.mapPolygons.removeValue(n), n.dispose()), this._removeGeometry(e.get("geometry"))
                }
            }), Object.defineProperty(e.prototype, "markDirtyValues", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    if (t.prototype.markDirtyValues.call(this), e) {
                        var n = e.get("mapPolygon");
                        n && n.set("geometry", e.get("geometry"))
                    }
                }
            }), Object.defineProperty(e.prototype, "zoomToDataItem", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t) {
                    var e = t.get("mapPolygon");
                    if (e) {
                        var n = e.get("geometry"), i = this.chart;
                        if (n && i) return i.zoomToGeoBounds(wi(n))
                    }
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "MapPolygonSeries"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l.classNames.concat([e.className])
            }), e
        }(l), Ti = n(8777), ki = n(8054), Li = n(7449), zi = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return Object.defineProperty(e, "plusButton", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e.children.push(ki.z.new(e._root, {width: 36, height: 36, themeTags: ["plus"]}))
                }), Object.defineProperty(e, "minusButton", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e.children.push(ki.z.new(e._root, {width: 36, height: 36, themeTags: ["minus"]}))
                }), Object.defineProperty(e, "_disposer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), e
            }

            return (0, i.ZT)(e, t), Object.defineProperty(e.prototype, "_afterNew", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    t.prototype._afterNew.call(this), this.set("position", "absolute"), this.set("layout", this._root.verticalLayout), this.set("x", at.AQ), this.set("centerX", at.AQ), this.set("y", at.AQ), this.set("centerY", at.AQ), this.set("paddingRight", 10), this.set("paddingBottom", 10), this.plusButton.setAll({
                        icon: u.T.new(this._root, {themeTags: ["icon"]}),
                        layout: void 0
                    }), this.minusButton.setAll({icon: u.T.new(this._root, {themeTags: ["icon"]}), layout: void 0})
                }
            }), Object.defineProperty(e.prototype, "_prepareChildren", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    if (t.prototype._prepareChildren.call(this), this.isPrivateDirty("chart")) {
                        var e = this.getPrivate("chart"), n = this._prevPrivateSettings.chart;
                        e && (this._disposer = new Li.FV([this.plusButton.events.on("click", (function () {
                            e.zoomIn()
                        })), this.minusButton.events.on("click", (function () {
                            e.zoomOut()
                        }))])), n && this._disposer && this._disposer.dispose()
                    }
                }
            }), Object.defineProperty(e, "className", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ZoomControl"
            }), Object.defineProperty(e, "classNames", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Ti.W.classNames.concat([e.className])
            }), e
        }(Ti.W);

        function Ri(t, e) {
            return [w(e) * M(t), M(e)]
        }

        function Yi() {
            return ie(Ri).scale(249.5).clipAngle(90.000001)
        }

        function Xi(t, e) {
            return [t, e]
        }

        function Ii() {
            return ie(Xi).scale(152.63)
        }

        function Bi(t, e) {
            var n = M(t), i = (n + M(e)) / 2;
            if (b(i) < c) return function (t) {
                var e = w(t);

                function n(t, n) {
                    return [t * e, M(n) / e]
                }

                return n.invert = function (t, n) {
                    return [t / e, N(n * e)]
                }, n
            }(t);
            var r = 1 + n * (2 * i - n), o = D(r) / i;

            function a(t, e) {
                var n = D(r - 2 * i * M(e)) / i;
                return [n * M(t *= i), o - n * w(t)]
            }

            return a.invert = function (t, e) {
                var n = o - e, a = _(t, b(n)) * x(n);
                return n * i < 0 && (a -= p * x(t) * x(n)), [a / i, N((r - (t * t + n * n) * i * i) / (2 * i))]
            }, a
        }

        function Gi() {
            return function (t) {
                var e = 0, n = p / 3, i = re(t), r = i(e, n);
                return r.parallels = function (t) {
                    return arguments.length ? i(e = t[0] * y, n = t[1] * y) : [e * v, n * v]
                }, r
            }(Bi).scale(155.424).center([0, 33.6442])
        }

        function Zi() {
            var t, e, n, i, r, o,
                a = Gi().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]),
                l = Gi().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                u = Gi().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s = {
                    point: function (t, e) {
                        o = [t, e]
                    }
                };

            function f(t) {
                var e = t[0], a = t[1];
                return o = null, n.point(e, a), o || (i.point(e, a), o) || (r.point(e, a), o)
            }

            function p() {
                return t = e = null, f
            }

            return f.invert = function (t) {
                var e = a.scale(), n = a.translate(), i = (t[0] - n[0]) / e, r = (t[1] - n[1]) / e;
                return (r >= .12 && r < .234 && i >= -.425 && i < -.214 ? l : r >= .166 && r < .234 && i >= -.214 && i < -.115 ? u : a).invert(t)
            }, f.stream = function (n) {
                return t && e === n ? t : (i = [a.stream(e = n), l.stream(n), u.stream(n)], r = i.length, t = {
                    point: function (t, e) {
                        for (var n = -1; ++n < r;) i[n].point(t, e)
                    }, sphere: function () {
                        for (var t = -1; ++t < r;) i[t].sphere()
                    }, lineStart: function () {
                        for (var t = -1; ++t < r;) i[t].lineStart()
                    }, lineEnd: function () {
                        for (var t = -1; ++t < r;) i[t].lineEnd()
                    }, polygonStart: function () {
                        for (var t = -1; ++t < r;) i[t].polygonStart()
                    }, polygonEnd: function () {
                        for (var t = -1; ++t < r;) i[t].polygonEnd()
                    }
                });
                var i, r
            }, f.precision = function (t) {
                return arguments.length ? (a.precision(t), l.precision(t), u.precision(t), p()) : a.precision()
            }, f.scale = function (t) {
                return arguments.length ? (a.scale(t), l.scale(.35 * t), u.scale(t), f.translate(a.translate())) : a.scale()
            }, f.translate = function (t) {
                if (!arguments.length) return a.translate();
                var e = a.scale(), o = +t[0], f = +t[1];
                return n = a.translate(t).clipExtent([[o - .455 * e, f - .238 * e], [o + .455 * e, f + .238 * e]]).stream(s), i = l.translate([o - .307 * e, f + .201 * e]).clipExtent([[o - .425 * e + c, f + .12 * e + c], [o - .214 * e - c, f + .234 * e - c]]).stream(s), r = u.translate([o - .205 * e, f + .212 * e]).clipExtent([[o - .214 * e + c, f + .166 * e + c], [o - .115 * e - c, f + .234 * e - c]]).stream(s), p()
            }, f.fitExtent = function (t, e) {
                return Qt(f, t, e)
            }, f.fitSize = function (t, e) {
                return Ut(f, t, e)
            }, f.fitWidth = function (t, e) {
                return qt(f, t, e)
            }, f.fitHeight = function (t, e) {
                return Kt(f, t, e)
            }, f.scale(1070)
        }

        Ri.invert = function (t) {
            return function (e, n) {
                var i = D(e * e + n * n), r = t(i), o = M(r), a = w(r);
                return [_(e * o, i * a), N(i && n * o / i)]
            }
        }(N), Xi.invert = Xi;
        var Ai = 1.340264, Wi = -.081106, Fi = 893e-6, Vi = .003796, Ji = D(3) / 2;

        function Hi(t, e) {
            var n = N(Ji * M(e)), i = n * n, r = i * i * i;
            return [t * w(n) / (Ji * (Ai + 3 * Wi * i + r * (7 * Fi + 9 * Vi * i))), n * (Ai + Wi * i + r * (Fi + Vi * i))]
        }

        function Qi() {
            return ie(Hi).scale(177.158)
        }

        function Ui(t, e) {
            var n = e * e, i = n * n;
            return [t * (.8707 - .131979 * n + i * (i * (.003971 * n - .001529 * i) - .013791)), e * (1.007226 + n * (.015085 + i * (.028874 * n - .044475 - .005916 * i)))]
        }

        function qi() {
            return ie(Ui).scale(175.295)
        }

        Hi.invert = function (t, e) {
            for (var n, i = e, r = i * i, o = r * r * r, a = 0; a < 12 && (o = (r = (i -= n = (i * (Ai + Wi * r + o * (Fi + Vi * r)) - e) / (Ai + 3 * Wi * r + o * (7 * Fi + 9 * Vi * r))) * i) * r * r, !(b(n) < f)); ++a) ;
            return [Ji * t * (Ai + 3 * Wi * r + o * (7 * Fi + 9 * Vi * r)) / w(i), N(M(i) / Ji)]
        }, Ui.invert = function (t, e) {
            var n, i = e, r = 25;
            do {
                var o = i * i, a = o * o;
                i -= n = (i * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - e) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)))
            } while (b(n) > c && --r > 0);
            return [t / (.8707 + (o = i * i) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), i]
        }
    }, 5417: function (t, e, n) {
        var i = n(2640);

        function r(t, e, n) {
            var r, l, u, s;
            e = e || 1;
            for (var c = 0; c < t[0].length; c++) {
                var f = t[0][c];
                (!c || f[0] < r) && (r = f[0]), (!c || f[1] < l) && (l = f[1]), (!c || f[0] > u) && (u = f[0]), (!c || f[1] > s) && (s = f[1])
            }
            var p = u - r, h = s - l, g = Math.min(p, h), d = g / 2;
            if (0 === g) {
                var v = [r, l];
                return v.distance = 0, v
            }
            for (var y = new i(void 0, o), b = r; b < u; b += g) for (var m = l; m < s; m += g) y.push(new a(b + d, m + d, d, t));
            var _ = function (t) {
                for (var e = 0, n = 0, i = 0, r = t[0], o = 0, l = r.length, u = l - 1; o < l; u = o++) {
                    var s = r[o], c = r[u], f = s[0] * c[1] - c[0] * s[1];
                    n += (s[0] + c[0]) * f, i += (s[1] + c[1]) * f, e += 3 * f
                }
                return 0 === e ? new a(r[0][0], r[0][1], 0, t) : new a(n / e, i / e, 0, t)
            }(t), w = new a(r + p / 2, l + h / 2, 0, t);
            w.d > _.d && (_ = w);
            for (var P = y.length; y.length;) {
                var j = y.pop();
                j.d > _.d && (_ = j, n && console.log("found best %d after %d probes", Math.round(1e4 * j.d) / 1e4, P)), j.max - _.d <= e || (d = j.h / 2, y.push(new a(j.x - d, j.y - d, d, t)), y.push(new a(j.x + d, j.y - d, d, t)), y.push(new a(j.x - d, j.y + d, d, t)), y.push(new a(j.x + d, j.y + d, d, t)), P += 4)
            }
            n && (console.log("num probes: " + P), console.log("best distance: " + _.d));
            var O = [_.x, _.y];
            return O.distance = _.d, O
        }

        function o(t, e) {
            return e.max - t.max
        }

        function a(t, e, n, i) {
            this.x = t, this.y = e, this.h = n, this.d = function (t, e, n) {
                for (var i = !1, r = 1 / 0, o = 0; o < n.length; o++) for (var a = n[o], u = 0, s = a.length, c = s - 1; u < s; c = u++) {
                    var f = a[u], p = a[c];
                    f[1] > e != p[1] > e && t < (p[0] - f[0]) * (e - f[1]) / (p[1] - f[1]) + f[0] && (i = !i), r = Math.min(r, l(t, e, f, p))
                }
                return 0 === r ? 0 : (i ? 1 : -1) * Math.sqrt(r)
            }(t, e, i), this.max = this.d + this.h * Math.SQRT2
        }

        function l(t, e, n, i) {
            var r = n[0], o = n[1], a = i[0] - r, l = i[1] - o;
            if (0 !== a || 0 !== l) {
                var u = ((t - r) * a + (e - o) * l) / (a * a + l * l);
                u > 1 ? (r = i[0], o = i[1]) : u > 0 && (r += a * u, o += l * u)
            }
            return (a = t - r) * a + (l = e - o) * l
        }

        i.default && (i = i.default), t.exports = r, t.exports.default = r
    }, 2640: function (t, e, n) {
        n.r(e), n.d(e, {
            default: function () {
                return i
            }
        });

        class i {
            constructor(t = [], e = r) {
                if (this.data = t, this.length = this.data.length, this.compare = e, this.length > 0) for (let t = (this.length >> 1) - 1; t >= 0; t--) this._down(t)
            }

            push(t) {
                this.data.push(t), this.length++, this._up(this.length - 1)
            }

            pop() {
                if (0 === this.length) return;
                const t = this.data[0], e = this.data.pop();
                return this.length--, this.length > 0 && (this.data[0] = e, this._down(0)), t
            }

            peek() {
                return this.data[0]
            }

            _up(t) {
                const {data: e, compare: n} = this, i = e[t];
                for (; t > 0;) {
                    const r = t - 1 >> 1, o = e[r];
                    if (n(i, o) >= 0) break;
                    e[t] = o, t = r
                }
                e[t] = i
            }

            _down(t) {
                const {data: e, compare: n} = this, i = this.length >> 1, r = e[t];
                for (; t < i;) {
                    let i = 1 + (t << 1), o = e[i];
                    const a = i + 1;
                    if (a < this.length && n(e[a], o) < 0 && (i = a, o = e[a]), n(o, r) >= 0) break;
                    e[t] = o, t = i
                }
                e[t] = r
            }
        }

        function r(t, e) {
            return t < e ? -1 : t > e ? 1 : 0
        }
    }, 2872: function (t, e, n) {
        n.r(e), n.d(e, {
            am5map: function () {
                return i
            }
        });
        const i = n(6970)
    }
}, function (t) {
    var e = (2872, t(t.s = 2872)), n = window;
    for (var i in e) n[i] = e[i];
    e.__esModule && Object.defineProperty(n, "__esModule", {value: !0})
}]);