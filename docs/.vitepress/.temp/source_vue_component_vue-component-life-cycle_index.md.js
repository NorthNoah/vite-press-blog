import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const _imports_0 = "/vite-press/assets/life-cycle.c73822ac.png";
const __pageData = JSON.parse('{"title":"\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F","description":"","frontmatter":{"createTime":"2022/10/24","tag":"Vue\u6E90\u7801"},"headers":[{"level":2,"title":"vue3 \u94A9\u5B50\u51FD\u6570 vs vue2 \u94A9\u5B50\u51FD\u6570","slug":"vue3-\u94A9\u5B50\u51FD\u6570-vs-vue2-\u94A9\u5B50\u51FD\u6570","link":"#vue3-\u94A9\u5B50\u51FD\u6570-vs-vue2-\u94A9\u5B50\u51FD\u6570","children":[]},{"level":2,"title":"\u6CE8\u518C\u94A9\u5B50\u51FD\u6570","slug":"\u6CE8\u518C\u94A9\u5B50\u51FD\u6570","link":"#\u6CE8\u518C\u94A9\u5B50\u51FD\u6570","children":[]},{"level":2,"title":"injectHook","slug":"injecthook","link":"#injecthook","children":[]},{"level":2,"title":"onBeforeMount \u548C onMounted","slug":"onbeforemount-\u548C-onmounted","link":"#onbeforemount-\u548C-onmounted","children":[]},{"level":2,"title":"onBeforeUpdate \u548C onUpdated","slug":"onbeforeupdate-\u548C-onupdated","link":"#onbeforeupdate-\u548C-onupdated","children":[]},{"level":2,"title":"onBeforeUnmount \u548C onUnmounted","slug":"onbeforeunmount-\u548C-onunmounted","link":"#onbeforeunmount-\u548C-onunmounted","children":[]},{"level":2,"title":"onErrorCaptured","slug":"onerrorcaptured","link":"#onerrorcaptured","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"source/vue/component/vue-component-life-cycle/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "source/vue/component/vue-component-life-cycle/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F" tabindex="-1">\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h1>`);
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
  _push(`<ul><li>setup \u51FD\u6570\u66FF\u4EE3\u4E86 vue2 \u4E2D\u7684 beforeCreate created \u94A9\u5B50\u51FD\u6570</li></ul><h2 id="vue3-\u94A9\u5B50\u51FD\u6570-vs-vue2-\u94A9\u5B50\u51FD\u6570" tabindex="-1">vue3 \u94A9\u5B50\u51FD\u6570 vs vue2 \u94A9\u5B50\u51FD\u6570 <a class="header-anchor" href="#vue3-\u94A9\u5B50\u51FD\u6570-vs-vue2-\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a></h2><ul><li>setup =&gt; beforeCreate</li><li>setup =&gt; created</li><li>onBeforeMount =&gt; beforeMount</li><li>onMounted =&gt; mounted</li><li>onBeforeUpdate =&gt; beforeUpdate</li><li>onUpdated =&gt; updated</li><li>onBeforeUnmount =&gt; beforeDestroy</li><li>onUnmounted =&gt; destroyed</li><li>onActivated =&gt; activated</li><li>onDeactivated =&gt; deactivated</li><li>onErrorCaptured =&gt; errorCaptured</li><li>onRenderTracked =&gt; renderTracked</li><li>onRenderTriggered =&gt; renderTtiggered</li></ul><h2 id="\u6CE8\u518C\u94A9\u5B50\u51FD\u6570" tabindex="-1">\u6CE8\u518C\u94A9\u5B50\u51FD\u6570 <a class="header-anchor" href="#\u6CE8\u518C\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a></h2><ul><li>\u90FD\u662F\u901A\u8FC7 createHook \u6CE8\u518C</li><li>\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570 \u5185\u90E8\u901A\u8FC7 injectHook \u6CE8\u518C\u94A9\u5B50\u51FD\u6570</li></ul><h2 id="injecthook" tabindex="-1">injectHook <a class="header-anchor" href="#injecthook" aria-hidden="true">#</a></h2><ul><li>\u5BF9\u7528\u6237\u6CE8\u518C\u7684\u94A9\u5B50\u51FD\u6570 hook \u505A\u4E86\u4E00\u5C42\u5C01\u88C5</li><li>\u7136\u540E\u6DFB\u52A0\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D \u5E76\u628A\u6570\u7EC4\u4FDD\u5B58\u5230\u5F53\u524D\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u7684 target \u4E0A</li><li>\u4E0D\u540C\u7C7B\u578B\u7684\u94A9\u5B50\u51FD\u6570\u4F1A\u88AB\u4FDD\u5B58\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u4E0D\u540C\u5C5E\u6027\u4E0A</li></ul><h2 id="onbeforemount-\u548C-onmounted" tabindex="-1">onBeforeMount \u548C onMounted <a class="header-anchor" href="#onbeforemount-\u548C-onmounted" aria-hidden="true">#</a></h2><ul><li>onBeforeMount \u6CE8\u518C\u7684 beforeMount \u94A9\u5B50\u51FD\u6570 \u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u4E4B\u524D\u6267\u884C</li><li>onMounted \u6CE8\u518C\u7684 mounted \u94A9\u5B50\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u4E4B\u540E\u6267\u884C</li><li>\u5728\u6267\u884C patch \u6302\u8F7D\u7EC4\u4EF6\u4E4B\u524D \u4F1A\u68C0\u6D4B\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u6709\u5DF2\u6CE8\u518C\u7684beforeMount \u94A9\u5B50\u51FD\u6570 bm <ul><li>\u5982\u679C\u6709 \u5219\u901A\u8FC7 invokeArrayFns \u6267\u884C \u8FD9\u91CC\u662F\u4E00\u4E2A\u6570\u7EC4 \u4F1A\u904D\u5386\u6267\u884C \u56E0\u4E3A\u7528\u6237\u53EF\u4EE5\u6CE8\u518C\u591A\u4E2A beforemount \u51FD\u6570</li></ul></li><li>\u5728\u6267\u884C patch \u6302\u8F7D\u7EC4\u4EF6\u4E4B\u540E \u4F1A\u68C0\u6D4B\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u6709\u5DF2\u6CE8\u518C\u7684 mounted \u94A9\u5B50\u51FD\u6570 m <ul><li>\u5982\u679C\u6709 \u5219\u901A\u8FC7 quenePostRenderEffect \u6267\u884C</li></ul></li></ul><h2 id="onbeforeupdate-\u548C-onupdated" tabindex="-1">onBeforeUpdate \u548C onUpdated <a class="header-anchor" href="#onbeforeupdate-\u548C-onupdated" aria-hidden="true">#</a></h2><ul><li>onBeforeUpdate \u6CE8\u518C\u7684 beforeUpdate \u94A9\u5B50\u51FD\u6570 \u4F1A\u5728\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u524D\u6267\u884C</li><li>onUpdated \u6CE8\u518C\u7684 updated \u94A9\u5B50\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u540E\u6267\u884C</li><li>\u5728\u6267\u884C patch \u66F4\u65B0\u7EC4\u4EF6\u4E4B\u524D \u4F1A\u68C0\u6D4B\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u6709\u5DF2\u6CE8\u518C\u7684 beforeUpdate \u94A9\u5B50\u51FD\u6570 bu <ul><li>\u5982\u679C\u6709 \u5219\u901A\u8FC7 invokeArrayFns \u6267\u884C</li></ul></li><li>\u5728\u6267\u884C patch \u66F4\u65B0\u7EC4\u4EF6\u4E4B\u540E \u4F1A\u68C0\u6D4B\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u6709\u5DF2\u6CE8\u518C\u7684 updated \u94A9\u5B50\u51FD\u6570 u <ul><li>\u5982\u679C\u6709 \u5219\u901A\u8FC7 quenePostRenderEffect \u6267\u884C</li></ul></li><li>\u7236\u7EC4\u4EF6\u7684\u66F4\u65B0\u4E0D\u4E00\u5B9A\u4F1A\u5BFC\u81F4\u5B50\u7EC4\u4EF6\u7684\u66F4\u65B0 \u56E0\u4E3A vue js \u66F4\u65B0\u7684\u9897\u7C92\u5EA6\u662F \u7EC4\u4EF6\u7EA7\u522B\u7684</li></ul><h2 id="onbeforeunmount-\u548C-onunmounted" tabindex="-1">onBeforeUnmount \u548C onUnmounted <a class="header-anchor" href="#onbeforeunmount-\u548C-onunmounted" aria-hidden="true">#</a></h2><ul><li>onBeforeUnmount \u6CE8\u518C\u7684 beforeUnMount \u94A9\u5B50\u51FD\u6570 \u4F1A\u5728\u7EC4\u4EF6\u9500\u6BC1\u4E4B\u524D\u6267\u884C</li><li>onUnmounted \u6CE8\u518C\u7684 unmounted \u94A9\u5B50\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u9500\u6BC1\u4E4B\u540E\u6267\u884C</li><li>\u7EC4\u4EF6\u7684\u9500\u6BC1\u6574\u4F53\u903B\u8F91 \u5176\u5B9E\u5C31\u662F \u6E05\u7406\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u7ED1\u5B9A\u7684 effects \u526F\u4F5C\u7528\u51FD\u6570 \u548C\u6CE8\u518C\u7684\u526F\u4F5C\u7528\u6E32\u67D3\u51FD\u6570 update \u5E76\u4E14\u8C03\u7528 unmount \u9500\u6BC1\u5B50\u6811</li><li>unmount \u4F1A\u904D\u5386\u5B50\u6811 \u901A\u8FC7\u9012\u5F52\u7684\u65B9\u5F0F \u9500\u6BC1\u5B50\u8282\u70B9 <ul><li>\u9047\u5230\u7EC4\u4EF6\u8282\u70B9\u6267\u884C unmountComponent</li><li>\u9047\u5230\u666E\u901A\u5143\u7D20 \u5220\u9664 DOM\u5143\u7D20</li><li>\u7EC4\u4EF6\u7684\u9500\u6BC1\u8FC7\u7A0B\u548C\u6E32\u67D3\u8FC7\u7A0B\u7C7B\u4F3C \u90FD\u662F\u9012\u5F52</li></ul></li><li>\u5728\u7EC4\u4EF6\u9500\u6BC1\u4E4B\u524D \u4F1A\u68C0\u6D4B\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u6709\u5DF2\u6CE8\u518C\u7684 beforeUnMount \u94A9\u5B50\u51FD\u6570 bum <ul><li>\u5982\u679C\u6709 \u5219\u901A\u8FC7 invokeArrayFns \u6267\u884C</li></ul></li><li>\u5728\u7EC4\u4EF6\u9500\u6BC1\u4E4B\u540E \u4F1A\u68C0\u6D4B\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u6709\u5DF2\u6CE8\u518C\u7684 unmounted \u94A9\u5B50\u51FD\u6570 um <ul><li>\u5982\u679C\u6709 \u5219\u901A\u8FC7 quenePostRenderEffect \u628A\u5B83 \u63A8\u5165\u6570\u7EC4</li><li>\u7EC4\u4EF6\u7684\u9500\u6BC1\u662F\u7EC4\u4EF6\u66F4\u65B0\u7684\u4E00\u4E2A\u5206\u652F\u903B\u8F91 \u4E5F\u662F\u5728 nextTick \u4E4B\u540E\u6267\u884C\u7684</li><li>\u4F1A\u7B49\u5F85\u5F53\u524D\u4EFB\u52A1\u6267\u884C\u4E4B\u540E \u5728\u540C\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u5185\u6267\u884C\u6240\u6709\u7684 umounted \u94A9\u5B50\u51FD\u6570</li></ul></li></ul><h2 id="onerrorcaptured" tabindex="-1">onErrorCaptured <a class="header-anchor" href="#onerrorcaptured" aria-hidden="true">#</a></h2><ul><li>\u662F\u5728 \u8C03\u7528 handleError \u51FD\u6570 \u4E2D\u6267\u884C\u7684 \u94A9\u5B50\u51FD\u6570</li><li>handleError \u4F1A\u4ECE\u5F53\u524D\u62A5\u9519\u7684\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\u5B9E\u4F8B\u5F00\u59CB \u5C1D\u8BD5\u67E5\u627E \u5DF2\u6CE8\u518C\u7684 errorCaptured \u94A9\u5B50\u51FD\u6570</li><li>\u5982\u679C\u627E\u5230\u4E86 \u904D\u5386\u6267\u884C\u5224\u65AD errorCaptured \u94A9\u5B50\u51FD\u6570\u662F\u5426\u8FD4\u56DE\u503C\u662F true \u82E5\u662F \u5219\u8BF4\u660E\u8FD9\u4E2A\u9519\u8BEF\u5DF2\u7ECF\u5F97\u5230\u6B63\u786E\u7684\u5904\u7406 \u7ED3\u675F\u904D\u5386</li><li>\u5982\u679C\u627E\u4E0D\u5230 \u4F1A\u7EE7\u7EED\u904D\u5386 \u5728\u904D\u5386\u5B8C\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\u7684 errorCaptured \u94A9\u5B50\u51FD\u6570 \u5982\u679C\u8FD8\u6CA1\u6709\u627E\u5230 \u5C31\u4F1A\u627E\u5B83\u7684\u7236\u7EC4\u4EF6\u5B9E\u4F8B \u76F4\u5230\u67E5\u627E\u5B8C\u6BD5</li><li>\u5982\u679C\u6574\u6761\u94FE\u8DEF\u90FD\u6CA1\u5904\u7406 errorCaptured \u94A9\u5B50\u51FD\u6570 \u901A\u8FC7 logError \u5411\u901A\u77E5\u53F0\u8F93\u51FA \u672A\u5904\u7406\u7684\u9519\u8BEF <ul><li>\u5F00\u53D1\u73AF\u5883 \u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u5D29\u6E83 \u4E3A\u4E86\u7ED9\u5F00\u53D1\u8005\u8DB3\u591F\u5F3A\u7684\u63D0\u9192</li><li>errorCaptured \u672C\u8D28\u662F\u6355\u83B7\u6765\u81EA \u5B50\u5B59\u7EC4\u4EF6\u7684\u9519\u8BEF \u8FD4\u56DE true \u5C31\u662F \u963B\u6B62\u9519\u8BEF\u5411\u4E0A\u4F20\u64AD</li></ul></li><li>\u53EF\u4EE5\u5728\u6839\u7EC4\u4EF6 \u6CE8\u518C\u4E00\u4E2A errorCaptured \u94A9\u5B50\u51FD\u6570 \u7528\u4E8E\u6355\u83B7\u6240\u6709\u5B50\u5B59\u7EC4\u4EF6\u7684\u9519\u8BEF \u6839\u636E\u9519\u8BEF\u7C7B\u578B \u4E0A\u62A5\u9519\u8BEF\u4FE1\u606F \u7EDF\u8BA1</li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>vue js \u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u5305\u62EC \u521B\u5EFA \u66F4\u65B0 \u9500\u6BC1\u7B49\u9636\u6BB5 \u5728\u6B64\u6211\u4EEC\u53EF\u4EE5\u6CE8\u5165\u4E00\u4E9B\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u6267\u884C\u81EA\u5DF1\u7684\u4EE3\u7801\u903B\u8F91 <img${ssrRenderAttr("src", _imports_0)} alt="\u56FE\u7247"></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("source/vue/component/vue-component-life-cycle/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
