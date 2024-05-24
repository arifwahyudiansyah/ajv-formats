!(function (e) {
  "function" == typeof define && define.amd ? define(e) : e()
})(function () {
  "use strict"
  Object.defineProperty(exports, "__esModule", {value: !0})
  const e = require("./formats"),
    r = require("./limit"),
    t = require("ajv/dist/compile/codegen"),
    o = new t.Name("fullFormats"),
    s = new t.Name("fastFormats"),
    a = (t, a = {keywords: !0}) => {
      if (Array.isArray(a)) return f(t, a, e.fullFormats, o), t
      const [n, u] = "fast" === a.mode ? [e.fastFormats, s] : [e.fullFormats, o]
      return f(t, a.formats || e.formatNames, n, u), a.keywords && (0, r.default)(t), t
    }
  function f(e, r, o, s) {
    var a, f
    ;(null !== (a = (f = e.opts.code).formats) && void 0 !== a) ||
      (f.formats = t._`require("ajv-formats/dist/formats").${s}`)
    for (const t of r) e.addFormat(t, o[t])
  }
  ;(a.get = (r, t = "full") => {
    const o = ("fast" === t ? e.fastFormats : e.fullFormats)[r]
    if (!o) throw new Error(`Unknown format "${r}"`)
    return o
  }),
    (module.exports = exports = a),
    Object.defineProperty(exports, "__esModule", {value: !0}),
    (exports.default = a),
    (module.exports = a)
})
