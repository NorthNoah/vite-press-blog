import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"watch API \u7684\u5B9E\u73B0\u539F\u7406","description":"","frontmatter":{"createTime":"2022/10/24","tag":"Vue\u6E90\u7801"},"headers":[{"level":2,"title":"watch API \u7528\u6CD5","slug":"watch-api-\u7528\u6CD5","link":"#watch-api-\u7528\u6CD5","children":[]},{"level":2,"title":"watch API \u5B9E\u73B0\u539F\u7406","slug":"watch-api-\u5B9E\u73B0\u539F\u7406","link":"#watch-api-\u5B9E\u73B0\u539F\u7406","children":[{"level":3,"title":"\u6807\u51C6\u5316 source","slug":"\u6807\u51C6\u5316-source","link":"#\u6807\u51C6\u5316-source","children":[]},{"level":3,"title":"traverse","slug":"traverse","link":"#traverse","children":[]},{"level":3,"title":"\u521B\u5EFA job","slug":"\u521B\u5EFA-job","link":"#\u521B\u5EFA-job","children":[]},{"level":3,"title":"\u521B\u5EFA scheduler","slug":"\u521B\u5EFA-scheduler","link":"#\u521B\u5EFA-scheduler","children":[]},{"level":3,"title":"\u521B\u5EFA effect","slug":"\u521B\u5EFA-effect","link":"#\u521B\u5EFA-effect","children":[]},{"level":3,"title":"\u8FD4\u56DE\u9500\u6BC1\u51FD\u6570","slug":"\u8FD4\u56DE\u9500\u6BC1\u51FD\u6570","link":"#\u8FD4\u56DE\u9500\u6BC1\u51FD\u6570","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"source/vue/watch/realize-principle/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "source/vue/watch/realize-principle/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="watch-api-\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1">watch API \u7684\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#watch-api-\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="watch-api-\u7528\u6CD5" tabindex="-1">watch API \u7528\u6CD5 <a class="header-anchor" href="#watch-api-\u7528\u6CD5" aria-hidden="true">#</a></h2><ul><li>watch API \u53EF\u4EE5\u76D1\u542C\u4E00\u4E2A getter \u51FD\u6570 \u4F46\u662F\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61 <ul><li>\u5F53\u54CD\u5E94\u5F0F\u5BF9\u8C61\u66F4\u65B0\u540E \u4F1A\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570</li></ul></li><li>watch API \u4E5F\u53EF\u4EE5\u76F4\u63A5\u76D1\u542C\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61 <ul><li>\u5F53\u54CD\u5E94\u5F0F\u5BF9\u8C61\u66F4\u65B0\u540E \u4F1A\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570</li></ul></li><li>watch API \u53EF\u4EE5\u76F4\u63A5\u76D1\u542C\u591A\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61 \u6570\u7EC4\u7684\u5F62\u5F0F \u4EFB\u610F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u66F4\u65B0\u540E \u90FD\u4F1A\u6267\u884C\u56DE\u8C03\u51FD\u6570</li></ul><h2 id="watch-api-\u5B9E\u73B0\u539F\u7406" tabindex="-1">watch API \u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#watch-api-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h2><ul><li>\u5F53\u76D1\u542C\u5BF9\u8C61\u6216\u8005\u51FD\u6570\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019 \u76D1\u542C\u5668\u81EA\u52A8\u6267\u884C\u67D0\u4E2A\u56DE\u8C03\u51FD\u6570</li><li>watch \u51FD\u6570 \u62E5\u6709\u4E09\u4E2A\u53C2\u6570 <ul><li>source \u8868\u793A\u76D1\u542C\u7684\u6570\u636E\u6E90</li><li>cb \u8868\u793A\u6570\u636E\u53D8\u5316\u540E\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570</li><li>options \u4E00\u4E9B\u914D\u7F6E\u9879</li></ul></li><li>watch \u51FD\u6570 \u5185\u90E8\u8C03\u7528\u4E86 doWatch \u51FD\u6570 <ul><li>\u8C03\u7528\u524D\u4F1A\u5728\u975E\u751F\u4EA7\u73AF\u5883\u5224\u65AD\u7B2C\u4E8C\u4E2A\u53C2\u6570 cb \u662F\u4E0D\u662F \u51FD\u6570 \u4E0D\u662F\u53D1\u51FA\u8B66\u544A</li><li>\u544A\u8BC9\u7528\u6237 \u5E94\u8BE5\u4F7F\u7528 watchEffect API</li></ul></li></ul><h3 id="\u6807\u51C6\u5316-source" tabindex="-1">\u6807\u51C6\u5316 source <a class="header-anchor" href="#\u6807\u51C6\u5316-source" aria-hidden="true">#</a></h3><ul><li>source \u53EF\u4EE5\u662F getter \u51FD\u6570 \u4E5F\u53EF\u4EE5\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61 \u751A\u81F3\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61\u6570\u7EC4 <ul><li>\u6240\u4EE5\u9700\u8981\u6807\u51C6\u5316 source</li></ul></li><li>source \u6807\u51C6\u5316\u4E3B\u8981\u662F\u6839\u636E source \u7C7B\u578B \u751F\u6210\u6807\u51C6\u5316\u540E\u7684 getter \u51FD\u6570</li><li>\u5982\u679C source \u662F ref \u5BF9\u8C61 \u521B\u5EFA\u4E00\u4E2A\u8BBF\u95EE source.value \u7684 getter \u51FD\u6570</li><li>\u5982\u679C source\u662F reactive \u5BF9\u8C61 \u521B\u5EFA\u4E00\u4E2A\u8BBF\u95EE source \u7684 getter \u51FD\u6570 \u8BBE\u7F6E deep \u4E3A true</li><li>\u5982\u679C source \u662F\u4E00\u4E2A\u51FD\u6570 \u8FDB\u4E00\u6B65\u5224\u65AD\u7B2C\u4E8C\u4E2A\u53C2\u6570 cb \u662F\u5426\u5B58\u5728</li><li>\u5982\u679C source \u662F\u4E00\u4E2A\u6570\u7EC4 \u751F\u6210\u7684 getter \u51FD\u6570\u5185\u90E8\u901A\u8FC7 source.map \u51FD\u6570\u6620\u5C04\u51FA\u6709\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4 \u4F1A\u5224\u65AD\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u7C7B\u578B</li><li>\u5982\u679C source \u4E0D\u6EE1\u8DB3\u4E0A\u9762\u6761\u4EF6 \u5219\u5728\u975E\u751F\u4EA7\u73AF\u5883\u4E0B \u53D1\u51FA\u8B66\u544A source \u7C7B\u578B\u4E0D\u5408\u6CD5</li><li>\u5982\u679C deep \u4E3A true \u751F\u6210\u7684 getter \u51FD\u6570\u88AB traverse \u51FD\u6570\u5305\u88C5\u4E00\u4E2A</li></ul><h3 id="traverse" tabindex="-1">traverse <a class="header-anchor" href="#traverse" aria-hidden="true">#</a></h3><ul><li>\u901A\u8FC7\u9012\u5F52\u7684\u65B9\u5F0F\u8BBF\u95EE value \u7684\u6BCF\u4E00\u4E2A\u5B50\u5C5E\u6027</li><li>deep \u5C5E\u4E8E watcher \u7684\u4E00\u4E2A\u914D\u7F6E\u9009\u9879</li></ul><h3 id="\u521B\u5EFA-job" tabindex="-1">\u521B\u5EFA job <a class="header-anchor" href="#\u521B\u5EFA-job" aria-hidden="true">#</a></h3><ul><li>\u5904\u7406\u5B8C watch \u7B2C\u4E00\u4E2A \u53C2\u6570 source \u4E4B\u540E \u5F00\u59CB\u5904\u7406 cb</li><li>cb \u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570 \u6709\u4E09\u4E2A\u53C2\u6570 <ul><li>newValue : \u65B0\u503C</li><li>oldValue : \u8001\u503C</li><li>onInvalidate : \u6CE8\u518C\u7684\u65E0\u6548\u56DE\u8C03\u51FD\u6570</li></ul></li><li>\u5982\u679Ccb \u5B58\u5728 \u4F1A\u5148\u6267\u884C effect.run \u51FD\u6570\u6C42\u7684\u65B0\u503C \u5B9E\u4F8B\u5C31\u662F\u6267\u884C\u524D\u9762\u521B\u5EFA\u7684 getter \u51FD\u6570\u6C42\u65B0\u503C</li><li>\u8FDB\u884C\u5224\u65AD \u5982\u679C deep \u6DF1\u5EA6\u6216\u8005 \u662F forckTrigger \u5F3A\u5236\u66F4\u65B0 \u6216\u8005 \u65B0\u65E7\u503C\u53D1\u751F\u4E86\u53D8\u5316 <ul><li>\u6267\u884C\u56DE\u8C03\u51FD\u6570 cb \u4F20\u5165\u53C2\u6570 newValue oldValue</li><li>\u7B2C\u4E00\u6B21\u6267\u884C\u7684\u65F6\u5019\u5982\u679C\u65E7\u503C\u6CA1\u53D8\u5316 \u5C31\u662F undefined</li><li>\u6267\u884C\u5B8C\u56DE\u8C03\u51FD\u6570 cb \u540E \u518D\u628A oldValue \u66F4\u65B0\u6210 newValue \u4E3A\u4E86\u505A\u4E0B\u4E00\u6B21\u7684\u5BF9\u6BD4</li></ul></li></ul><h3 id="\u521B\u5EFA-scheduler" tabindex="-1">\u521B\u5EFA scheduler <a class="header-anchor" href="#\u521B\u5EFA-scheduler" aria-hidden="true">#</a></h3><ul><li>scheduler \u521B\u5EFA\u903B\u8F91\u6536\u5230\u4E86\u7B2C\u4E09\u4E2A\u53C2\u6570 options \u4E2D\u7684 flush \u7684\u503C\u5F71\u54CD \u6709\u4E09\u79CD\u72B6\u6001 \u51B3\u5B9A watcher \u56DE\u8C03\u51FD\u6570\u6267\u884C\u65F6\u673A <ul><li>flush \u662F sync \u8868\u793A\u662F\u4E00\u4E2A\u540C\u6B65\u7684 watcher \u6570\u636E\u53D8\u5316\u540C\u6B65\u6267\u884C \u56DE\u8C03\u51FD\u6570</li><li>flush \u662F post \u8868\u793A \u56DE\u8C03\u51FD\u6570\u901A\u8FC7 queuePostRenderEffect \u65B9\u5F0F\u5728\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u540E\u6267\u884C</li><li>flush \u662F pre \u8868\u793A \u56DE\u8C03\u51FD\u6570\u901A\u8FC7 queuePreFlushCb \u65B9\u5F0F\u5728\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u524D\u6267\u884C \u5982\u679C\u7EC4\u4EF6\u6CA1\u6302\u8F7D \u5C31\u5728\u7EC4\u4EF6\u6302\u8F7D\u4E4B\u524D\u901A\u8FC7\u4E00\u5B9A\u7684\u8C03\u5EA6\u6267\u884C</li></ul></li></ul><h3 id="\u521B\u5EFA-effect" tabindex="-1">\u521B\u5EFA effect <a class="header-anchor" href="#\u521B\u5EFA-effect" aria-hidden="true">#</a></h3><ul><li>wachter \u5185\u90E8\u90FD\u4F1A \u521B\u5EFA effect \u5BF9\u8C61</li></ul><h4 id="effect-run-\u7684\u6267\u884C" tabindex="-1">effect.run \u7684\u6267\u884C <a class="header-anchor" href="#effect-run-\u7684\u6267\u884C" aria-hidden="true">#</a></h4><ul><li>\u5F53\u56DE\u8C03\u51FD\u6570 cb \u5B58\u5728 immediate \u4E3A false \u9996\u6B21\u6267\u884C effect.run \u51FD\u6570\u6C42 \u65E7\u503C</li><li>\u51FD\u6570\u5185\u90E8\u6267\u884C getter \u51FD\u6570 \u8BBF\u95EE\u54CD\u5E94\u5F0F\u6570\u636E\u505A\u4F9D\u8D56\u6536\u96C6</li><li>\u6B64\u65F6\u7684 activeEffect \u5C31\u662F wacher \u5185\u90E8\u521B\u5EFA\u7684 effect \u5BF9\u8C61 \u540E\u7EED\u6570\u636E\u66F4\u65B0\u7684\u65F6\u5019 \u5C31\u53EF\u4EE5\u89E6\u53D1 effect \u5BF9\u8C61\u7684 scheduler \u51FD\u6570 \u6267\u884C job \u51FD\u6570</li></ul><h4 id="\u914D\u7F6E\u4E86-immediate" tabindex="-1">\u914D\u7F6E\u4E86 immediate <a class="header-anchor" href="#\u914D\u7F6E\u4E86-immediate" aria-hidden="true">#</a></h4><ul><li>\u521B\u5EFA\u5B8C wacher \u5C31\u4F1A\u7ACB\u523B\u76F4\u63A5 job \u51FD\u6570</li><li>oldValue \u8FD8\u662F\u521D\u59CB\u503C \u5728 job \u6267\u884C\u65F6\u5019\u4E5F\u4F1A\u6267\u884C effect.run</li><li>\u8FDB\u800C\u6267\u884C getter \u51FD\u6570 \u505A\u4F9D\u8D56\u6536\u96C6 \u6C42\u7684\u65B0\u503C</li></ul><h3 id="\u8FD4\u56DE\u9500\u6BC1\u51FD\u6570" tabindex="-1">\u8FD4\u56DE\u9500\u6BC1\u51FD\u6570 <a class="header-anchor" href="#\u8FD4\u56DE\u9500\u6BC1\u51FD\u6570" aria-hidden="true">#</a></h3><ul><li>\u4F1A\u8FD4\u56DE\u4E00\u4E2A \u9500\u6BC1\u51FD\u6570 \u662F watch \u6267\u884C\u540E\u8FD4\u56DE\u7684\u51FD\u6570 \u53EF\u4EE5\u901A\u8FC7\u8C03\u7528 \u6765\u505C\u6B62\u5BF9\u6570\u636E\u7684\u76D1\u542C</li><li>\u9500\u6BC1\u51FD\u6570 \u5185\u90E8\u4F1A\u6267\u884C effect.stop \u51FD\u6570 \u8BA9 effect \u5931\u6D3B \u6E05\u7406 effect \u7684\u76F8\u5173\u4F9D\u8D56 <ul><li>\u5C31\u53EF\u4EE5\u505C\u6B62\u4E86\u5BF9\u6570\u636E\u7684\u76D1\u542C</li><li>\u5982\u679C\u5728\u7EC4\u4EF6\u6CE8\u518C\u7684 watcher \u4E5F\u4F1A\u79FB\u9664\u7EC4\u4EF6 effects \u5BF9 effect \u996E\u7528</li></ul></li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>watch \u5185\u90E8\u8BBE\u8BA1\u5F88\u5DE7\u5999 \u53EF\u4EE5\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316 \u5185\u90E8\u521B\u5EFA\u4E86 effect \u5BF9\u8C61</li><li>\u9996\u6B21\u6267\u884C effect.run \u505A\u4F9D\u8D56\u6536\u96C6 \u7136\u540E\u5728\u6570\u636E\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019</li><li>\u4EE5\u67D0\u79CD\u8C03\u5EA6\u65B9\u5F0F\u6267\u884C\u56DE\u8C03\u51FD\u6570</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("source/vue/watch/realize-principle/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
