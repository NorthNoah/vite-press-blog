import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"npm \u5B89\u88C5\u6D41\u7A0B","description":"","frontmatter":{"createTime":"2022/11/02","tag":"\u5DE5\u7A0B\u5316,npm"},"headers":[{"level":2,"title":"\u7B2C\u4E00\u6B65","slug":"\u7B2C\u4E00\u6B65","link":"#\u7B2C\u4E00\u6B65","children":[]},{"level":2,"title":"\u7B2C\u4E8C\u6B65","slug":"\u7B2C\u4E8C\u6B65","link":"#\u7B2C\u4E8C\u6B65","children":[]},{"level":2,"title":"\u7B2C\u4E09\u6B65","slug":"\u7B2C\u4E09\u6B65","link":"#\u7B2C\u4E09\u6B65","children":[]},{"level":2,"title":"\u7B2C\u56DB\u6B65","slug":"\u7B2C\u56DB\u6B65","link":"#\u7B2C\u56DB\u6B65","children":[]}],"relativePath":"engineering/npm/npm-install/index.md","lastUpdated":1667570087000}');
const _sfc_main = { name: "engineering/npm/npm-install/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="npm-\u5B89\u88C5\u6D41\u7A0B" tabindex="-1">npm \u5B89\u88C5\u6D41\u7A0B <a class="header-anchor" href="#npm-\u5B89\u88C5\u6D41\u7A0B" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ArticleMetadata, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ArticleMetadata)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c87b3d0879fc411fbbde141261c0720d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="\u56FE\u7247"></p><h2 id="\u7B2C\u4E00\u6B65" tabindex="-1">\u7B2C\u4E00\u6B65 <a class="header-anchor" href="#\u7B2C\u4E00\u6B65" aria-hidden="true">#</a></h2><p>\u6267\u884C\u5B89\u88C5\u547D\u4EE4\u4E4B\u540E\uFF0Cnpm \u9996\u5148\u4F1A\u53BB\u67E5\u627E npm \u7684\u914D\u7F6E\u4FE1\u606F\u3002 \u5176\u4E2D\uFF0C\u6211\u4EEC\u6700\u719F\u6089\u7684\u5C31\u662F\u5B89\u88C5\u65F6\u5019\u7684\u6E90\u4FE1\u606F\u3002npm \u4F1A\u5728\u9879\u76EE\u4E2D\u67E5\u627E\u662F\u5426\u6709 .npmrc \u6587\u4EF6\uFF0C\u6CA1\u6709\u7684\u8BDD\u4F1A\u518D\u68C0\u67E5\u5168\u5C40\u914D\u7F6E\u7684 .npmrc \uFF0C\u8FD8\u6CA1\u6709\u7684\u8BDD\u5C31\u4F1A\u4F7F\u7528 npm \u5185\u7F6E\u7684 .npmrc \u6587\u4EF6\u3002</p><h2 id="\u7B2C\u4E8C\u6B65" tabindex="-1">\u7B2C\u4E8C\u6B65 <a class="header-anchor" href="#\u7B2C\u4E8C\u6B65" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u5B8C\u914D\u7F6E\u6587\u4EF6\u4E4B\u540E\uFF0C\u5C31\u4F1A\u6784\u5EFA\u4F9D\u8D56\u6811\u3002 \u9996\u5148\u4F1A\u68C0\u67E5\u4E0B\u9879\u76EE\u4E2D\u662F\u5426\u6709 package-lock.json \u{1F510}\u6587\u4EF6\uFF1A\u5B58\u5728 lock \u6587\u4EF6\u7684\u8BDD\uFF0C\u4F1A\u5224\u65AD lock \u6587\u4EF6\u548C package.json \u4E2D\u4F7F\u7528\u7684\u4F9D\u8D56\u7248\u672C\u662F\u5426\u4E00\u81F4\uFF0C\u5982\u679C\u4E00\u81F4\u7684\u8BDD\u5C31\u4F7F\u7528 lock \u4E2D\u7684\u4FE1\u606F\uFF0C\u53CD\u4E4B\u5C31\u4F1A\u4F7F\u7528 npm \u4E2D\u7684\u4FE1\u606F\uFF1B\u90A3\u5982\u679C\u6CA1\u6709 lock \u6587\u4EF6\u7684\u8BDD\uFF0C\u5C31\u4F1A\u76F4\u63A5\u4F7F\u7528 package.json \u4E2D\u7684\u4FE1\u606F\u751F\u6210\u4F9D\u8D56\u6811\u3002\uFF08\u5177\u4F53\u662F\u600E\u4E48\u751F\u6210\u4F9D\u8D56\u6811\u7684\u5462\uFF1F\u4E0B\u9762\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD\u3002\uFF09</p><h2 id="\u7B2C\u4E09\u6B65" tabindex="-1">\u7B2C\u4E09\u6B65 <a class="header-anchor" href="#\u7B2C\u4E09\u6B65" aria-hidden="true">#</a></h2><p>\u5728\u6709\u4E86\u4F9D\u8D56\u6811\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u6839\u636E\u4F9D\u8D56\u6811\u4E0B\u8F7D\u5B8C\u6574\u7684\u4F9D\u8D56\u8D44\u6E90\u3002 \u5728\u4E0B\u8F7D\u4E4B\u524D\uFF0C\u4F1A\u5148\u68C0\u67E5\u4E0B\u662F\u5426\u6709\u7F13\u5B58\u8D44\u6E90\uFF0C\u5982\u679C\u5B58\u5728\u7F13\u5B58\u8D44\u6E90\u7684\u8BDD\uFF0C\u90A3\u4E48\u76F4\u63A5\u5C06\u7F13\u5B58\u8D44\u6E90\u89E3\u538B\u5230 node_modules \u4E2D\u3002\u5982\u679C\u6CA1\u6709\u7F13\u5B58\u8D44\u6E90\uFF0C\u90A3\u4E48\u4F1A\u5148\u5C06 npm \u8FDC\u7A0B\u4ED3\u5E93\u4E2D\u7684\u5305\u4E0B\u8F7D\u81F3\u672C\u5730\uFF0C\u7136\u540E\u4F1A\u8FDB\u884C\u5305\u7684\u5B8C\u6574\u6027\u6821\u9A8C\uFF0C\u6821\u9A8C\u901A\u8FC7\u540E\u5C06\u5176\u6DFB\u52A0\u7684\u7F13\u5B58\u4E2D\u5E76\u89E3\u538B\u5230 node_modules \u4E2D\u3002</p><p>npm \u9ED8\u8BA4\u4E0D\u4F1A\u5C06\u4F9D\u8D56\u5B89\u88C5\u5230\u5168\u5C40\uFF0C\u53EA\u4F1A\u5B89\u88C5\u5230\u5F53\u524D\u7684\u8DEF\u5F84\u4E0B\uFF0C\u8FD9\u6837\u8BBE\u8BA1\u662F\u4E3A\u4E86\u4E0D\u540C\u7684\u9879\u76EE\u4E4B\u95F4\u8FDB\u884C\u4F9D\u8D56\u9694\u79BB\uFF0C\u4E92\u4E0D\u5F71\u54CD\u3002\u5F53\u7136\uFF0C\u7528\u6237\u4E5F\u53EF\u4EE5\u9009\u62E9\u5B89\u88C5\u5230\u5168\u5C40\uFF0C\u53EA\u9700\u8981\u5728\u5B89\u88C5\u547D\u4EE4\u540E\u5E26\u4E0A -g \u53C2\u6570\u5373\u53EF\u3002</p><h2 id="\u7B2C\u56DB\u6B65" tabindex="-1">\u7B2C\u56DB\u6B65 <a class="header-anchor" href="#\u7B2C\u56DB\u6B65" aria-hidden="true">#</a></h2><p>\u4F1A\u751F\u6210 package-lock.json \u6587\u4EF6\u3002 \u90A3\u4E48\u8FD9\u4E2A\u6587\u4EF6\u662F\u5E72\u4EC0\u4E48\u7684\u5462\uFF1F\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C\u5728 package.json \u6587\u4EF6\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u4F9D\u8D56\u7684\u7248\u672C\u53F7\u524D\u589E\u52A0 ^ \u6807\u5FD7\u7684\u8BDD\uFF0C\u6BD4\u5982 ^3.1.6 \u610F\u5473\u7740\u5B89\u88C5\u7684\u65F6\u5019\u4F1A\u5B89\u88C5 3.x.x \u7684\u5927\u7248\u672C\u4E2D\u6700\u65B0\u7684\u5C0F\u7248\u672C\u3002\u8FD9\u6837\uFF0C\u4E0D\u540C\u7684\u65F6\u95F4\u6267\u884C\u5B89\u88C5\u64CD\u4F5C\u5C31\u4F1A\u6709\u4E0D\u540C\u7684\u7ED3\u679C\u3002\u6240\u4EE5 lock \u8FD9\u4E2A\u6587\u4EF6\u4F1A\u5C06\u672C\u6B21\u5B89\u88C5\u7684\u4F9D\u8D56\u7684\u7248\u672C\u4FE1\u606F\u8BB0\u5F55\u4E0B\u6765\uFF0C\u5728\u4E0B\u6B21\u518D\u5B89\u88C5\u7684\u65F6\u5019\uFF0C\u6216\u8005\u5176\u4ED6\u4F19\u4F34\u4F7F\u7528\u8BE5\u5305\uFF0C\u6216\u8005\u901A\u8FC7 CI \u5DE5\u5177\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u5B89\u88C5\u76F8\u540C\u7248\u672C\u7684\u4F9D\u8D56\u3002\u8FD9\u6837\u5C31\u4F1A\u907F\u514D package.json \u4E2D\u7684\u5185\u5BB9\u4E00\u81F4\u4F46\u662F\u5B9E\u9645\u4E0A\u5B89\u88C5\u4F9D\u8D56\u7684\u7248\u672C\u4E0D\u4E00\u81F4\u800C\u9020\u6210 Bug \u51FA\u73B0\u7684\u60C5\u51B5</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/npm/npm-install/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
