import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"\u7EC4\u4EF6\u7684 props","description":"","frontmatter":{"createTime":"2022/10/24","tag":"Vue\u6E90\u7801"},"headers":[{"level":2,"title":"props \u914D\u7F6E\u7684\u6807\u51C6\u5316","slug":"props-\u914D\u7F6E\u7684\u6807\u51C6\u5316","link":"#props-\u914D\u7F6E\u7684\u6807\u51C6\u5316","children":[]},{"level":2,"title":"props \u503C\u7684\u521D\u59CB\u5316","slug":"props-\u503C\u7684\u521D\u59CB\u5316","link":"#props-\u503C\u7684\u521D\u59CB\u5316","children":[]},{"level":2,"title":"\u8BBE\u7F6Eprops","slug":"\u8BBE\u7F6Eprops","link":"#\u8BBE\u7F6Eprops","children":[]},{"level":2,"title":"\u9A8C\u8BC1props","slug":"\u9A8C\u8BC1props","link":"#\u9A8C\u8BC1props","children":[]},{"level":2,"title":"\u54CD\u5E94\u5F0F\u5904\u7406","slug":"\u54CD\u5E94\u5F0F\u5904\u7406","link":"#\u54CD\u5E94\u5F0F\u5904\u7406","children":[]},{"level":2,"title":"props \u7684\u66F4\u65B0","slug":"props-\u7684\u66F4\u65B0","link":"#props-\u7684\u66F4\u65B0","children":[]},{"level":2,"title":"\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3","slug":"\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3","link":"#\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3","children":[]},{"level":2,"title":"\u66F4\u65B0 instance.props","slug":"\u66F4\u65B0-instance-props","link":"#\u66F4\u65B0-instance-props","children":[]},{"level":2,"title":"\u628A instance.props \u53D8\u6210\u54CD\u5E94\u5F0F\u7684","slug":"\u628A-instance-props-\u53D8\u6210\u54CD\u5E94\u5F0F\u7684","link":"#\u628A-instance-props-\u53D8\u6210\u54CD\u5E94\u5F0F\u7684","children":[]},{"level":2,"title":"\u5BF9\u8C61\u7C7B\u578B props \u6570\u636E\u7684\u66F4\u65B0","slug":"\u5BF9\u8C61\u7C7B\u578B-props-\u6570\u636E\u7684\u66F4\u65B0","link":"#\u5BF9\u8C61\u7C7B\u578B-props-\u6570\u636E\u7684\u66F4\u65B0","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"source/vue/component/vue-component-props/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "source/vue/component/vue-component-props/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u7EC4\u4EF6\u7684-props" tabindex="-1">\u7EC4\u4EF6\u7684 props <a class="header-anchor" href="#\u7EC4\u4EF6\u7684-props" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="props-\u914D\u7F6E\u7684\u6807\u51C6\u5316" tabindex="-1">props \u914D\u7F6E\u7684\u6807\u51C6\u5316 <a class="header-anchor" href="#props-\u914D\u7F6E\u7684\u6807\u51C6\u5316" aria-hidden="true">#</a></h2><ul><li>\u6807\u51C6\u5316 props \u7684\u914D\u7F6E\u662F\u901A\u8FC7 normalizePropsOptions \u51FD\u6570\u5B8C\u6210\u7684</li><li>normalizePropsOptions \u4F1A\u5148\u5904\u7406 mixin \u548C extends \u4E24\u4E2A\u7279\u6B8A\u5C5E\u6027 \u90FD\u662F\u62D3\u5C55\u7EC4\u4EF6\u7684\u5B9A\u4E49 \u9700\u8981\u5BF9\u5176\u5B9A\u4E49\u7684 props \u9012\u5F52\u6267\u884C normalizePropsOptions</li><li>\u4F1A\u5BF9\u5B9A\u4E49\u4E0D\u540C\u5F62\u5F0F\u7684 props \u8FDB\u884C\u8F6C\u6362 \u6700\u7EC8\u8FD4\u56DE\u6807\u51C6\u5316\u7ED3\u679C</li><li>\u4F1A\u7528 comp._props \u8FDB\u884C\u7F13\u5B58 \u5BF9\u4E00\u4E2A\u7EC4\u4EF6\u91CD\u590D\u6267\u884C normalizePropsOptions \u4F1A\u8FD4\u56DE \u7F13\u5B58\u7684\u7ED3\u679C</li><li>\u6700\u540E\u4F7F\u7528 instance.propsOptions \u5B58\u50A8\u6807\u51C6\u5316\u7ED3\u679C \u65B9\u4FBF\u540E\u7EED\u7EDF\u4E00\u5904\u7406</li></ul><h2 id="props-\u503C\u7684\u521D\u59CB\u5316" tabindex="-1">props \u503C\u7684\u521D\u59CB\u5316 <a class="header-anchor" href="#props-\u503C\u7684\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><ul><li>\u6709\u4E86\u6807\u51C6\u5316\u7684 props \u914D\u7F6E \u8FD8\u9700\u8981\u6839\u636E\u914D\u7F6E\u5BF9\u7236\u7EC4\u4EF6\u4F20\u9012\u7684 props \u6570\u636E\u505A\u4E00\u4E9B\u6C42\u503C\u548C\u9A8C\u8BC1 \u7136\u540E\u628A\u7ED3\u679C \u8D4B\u503C\u5230\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u4E0A \u8FC7\u7A0B\u5C31\u662F props \u7684\u521D\u59CB\u5316</li><li>\u521D\u59CB\u5316\u5C31\u662F \u901A\u8FC7 initProps \u51FD\u6570\u5B8C\u6210\u7684</li><li>initProps \u4E3B\u8981\u662F \u8BBE\u7F6E props \u7684\u503C \u9A8C\u8BC1 props \u662F\u5426\u5408\u6CD5 \u628A props \u53D8\u6210\u54CD\u5E94\u5F0F\u7684 \u7136\u540E\u6DFB\u52A0\u5230\u5B9E\u4F8B\u7684 instance.props\u4E0A</li></ul><h2 id="\u8BBE\u7F6Eprops" tabindex="-1">\u8BBE\u7F6Eprops <a class="header-anchor" href="#\u8BBE\u7F6Eprops" aria-hidden="true">#</a></h2><ul><li>\u901A\u8FC7 setFullProps \u5B9E\u73B0</li><li>setFullProps \u4E3B\u8981\u76EE\u7684\u5C31\u662F\u904D\u5386 props \u6570\u636E\u6C42\u503C \u4EE5\u53CA\u5BF9\u9700\u8981\u8F6C\u6362\u7684 props \u6C42\u503C</li><li>\u8BE5\u8FC7\u7A0B\u5C31\u662F\u904D\u5386 rawProps \u83B7\u53D6\u6BCF\u4E2A key \u5BF9\u5E94\u7684\u503C\u5E76\u8D4B\u503C\u7ED9 props \u6216\u8005 attrs</li><li>\u56E0\u4E3A\u6211\u4EEC\u5728\u6807\u51C6\u5316 props \u914D\u7F6E\u7684\u8FC7\u7A0B\u4E2D\u5DF2\u7ECF\u628A props \u5B9A\u4E49\u7684 key \u8F6C\u6362\u6210\u4E86 \u9A7C\u5CF0\u5F62\u5F0F</li><li>\u7136\u540E\u5BF9\u6BD4\u67E5\u770B\u4F20\u9012\u7684props\u6570\u636E\u662F\u5426\u5DF2\u7ECF\u5728\u914D\u7F6E\u4E2D\u5B9A\u4E49 <ul><li>\u5982\u679C\u5DF2\u7ECF\u5B9A\u4E49 \u5C31\u628A\u503C\u8D4B\u503C\u5230 props \u5BF9\u8C61\u4E2D</li><li>\u5982\u679C\u6CA1\u6709\u5B9A\u4E49 \u5224\u65AD\u8FD9\u4E2A key \u662F\u5426\u4E3A\u975E\u4E8B\u4EF6\u6D3E\u53D1\u76F8\u5173</li><li>\u82E5\u662F \u5219\u628A\u5B83\u7684\u503C\u8D4B\u5230 attrs \u5BF9\u8C61\u4E2D\u4F5C\u4E3A\u666E\u901A\u5C5E\u6027</li></ul></li></ul><h2 id="\u9A8C\u8BC1props" tabindex="-1">\u9A8C\u8BC1props <a class="header-anchor" href="#\u9A8C\u8BC1props" aria-hidden="true">#</a></h2><ul><li>validateProp \u51FD\u6570\u7528\u6765\u68C0\u6D4B props \u6C42\u7684\u7684\u503C \u662F\u5426\u5408\u6CD5 \u5982\u4E0D\u5339\u914D\u5219\u4F1A\u629B\u51FA\u8B66\u544A</li><li>validateProp \u9996\u5148\u9A8C\u8BC1 required \u60C5\u51B5 \u7136\u540E\u9A8C\u8BC1 prop \u503C\u7684\u7C7B\u578B</li></ul><h2 id="\u54CD\u5E94\u5F0F\u5904\u7406" tabindex="-1">\u54CD\u5E94\u5F0F\u5904\u7406 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u5904\u7406" aria-hidden="true">#</a></h2><ul><li>\u901A\u8FC7 shallowReactive API\u53D8\u6210\u54CD\u5E94\u5F0F</li></ul><h2 id="props-\u7684\u66F4\u65B0" tabindex="-1">props \u7684\u66F4\u65B0 <a class="header-anchor" href="#props-\u7684\u66F4\u65B0" aria-hidden="true">#</a></h2><ul><li>props \u6570\u636E\u7684\u66F4\u65B0 \u4F1A\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0</li></ul><h2 id="\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3" tabindex="-1">\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3 <a class="header-anchor" href="#\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3" aria-hidden="true">#</a></h2><ul><li>\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u4F1A\u89E6\u53D1 patch \u6D41\u7A0B \u7136\u540E\u904D\u5386\u5B50\u8282\u70B9 \u9012\u5F52 patch \u9047\u5230\u7EC4\u4EF6\u8282\u70B9 \u6267\u884C updateComponent \u51FD\u6570</li><li>\u4F1A\u6267\u884C shouldUpdateComponent \u51FD\u6570\u5224\u65AD\u662F\u5426\u9700\u8981\u66F4\u65B0 \u5185\u90E8\u4F1A\u5BF9 props \u8FDB\u884C\u5BF9\u6BD4</li><li>\u8FD9\u662F\u89E6\u53D1\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u7684\u539F\u56E0</li><li>\u7136\u540E\u4E5F\u9700\u8981\u66F4\u65B0 \u5B50\u7EC4\u4EF6\u5B9E\u4F8B\u7684 instance.props</li></ul><h2 id="\u66F4\u65B0-instance-props" tabindex="-1">\u66F4\u65B0 instance.props <a class="header-anchor" href="#\u66F4\u65B0-instance-props" aria-hidden="true">#</a></h2><ul><li>\u5176\u5B9E\u5C31\u662F\u6267\u884C componentUpdateFn \u7EC4\u4EF6\u526F\u4F5C\u7528\u51FD\u6570</li><li>\u5728\u66F4\u65B0\u7EC4\u4EF6\u7684\u65F6\u5019 \u4F1A\u5224\u65AD\u662F\u5426\u6709 instance.next \u4EE3\u8868\u65B0\u7684\u7EC4\u4EF6 vnode</li><li>\u5982\u679C\u6709 \u4F1A\u6267\u884C updateComponentPreRender \u66F4\u65B0\u7EC4\u4EF6 vnode \u8282\u70B9\u4FE1\u606F</li><li>updateComponentPreRender \u5176\u4E2D\u4F1A\u6267\u884C updateProps \u66F4\u65B0 props \u6570\u636E</li><li>updateProps \u628A\u7236\u7EC4\u4EF6\u6E32\u67D3\u65F6\u83B7\u5F97\u7684 props \u65B0\u503C \u66F4\u65B0\u5230\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\u7684 instnace.props \u4E2D <ul><li>\u53EA\u9700\u8981\u5BF9\u6BD4 \u52A8\u6001\u7684 props \u6570\u636E\u66F4\u65B0</li><li>\u9759\u6001\u7684 props \u4F1A\u8DF3\u8FC7</li></ul></li></ul><h2 id="\u628A-instance-props-\u53D8\u6210\u54CD\u5E94\u5F0F\u7684" tabindex="-1">\u628A instance.props \u53D8\u6210\u54CD\u5E94\u5F0F\u7684 <a class="header-anchor" href="#\u628A-instance-props-\u53D8\u6210\u54CD\u5E94\u5F0F\u7684" aria-hidden="true">#</a></h2><ul><li>\u4E3A\u4EC0\u4E48\u4F7F\u7528 shallowReactive \u800C\u4E0D\u662F reactive</li><li>shallowReactive \u4E0D\u4F1A\u9012\u5F52\u6267\u884C reactive \u53EA\u52AB\u6301\u6700\u5916\u4E00\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027</li><li>shallowReactive \u6027\u80FD\u66F4\u597D props \u66F4\u65B0\u8FC7\u7A0B\u53EA\u9700\u8981\u4FEE\u6539\u6700\u5916\u5C42\u5C5E\u6027</li></ul><h2 id="\u5BF9\u8C61\u7C7B\u578B-props-\u6570\u636E\u7684\u66F4\u65B0" tabindex="-1">\u5BF9\u8C61\u7C7B\u578B props \u6570\u636E\u7684\u66F4\u65B0 <a class="header-anchor" href="#\u5BF9\u8C61\u7C7B\u578B-props-\u6570\u636E\u7684\u66F4\u65B0" aria-hidden="true">#</a></h2><ul><li>\u5BF9\u8C61\u7C7B\u578B\u7684 props \u6570\u636E\u53D8\u5316 \u4E5F\u4F1A\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</li><li>\u5B50\u7EC4\u4EF6\u7684\u6E32\u67D3\u8FC7\u7A0B\u4E2D \u8BBF\u95EE \u5BF9\u8C61props \u76F8\u5F53\u4E8E \u5B50\u7EC4\u4EF6\u7684\u6E32\u67D3\u526F\u4F5C\u7528\u51FD\u6570 render effect \u8BA2\u9605\u4E86\u8FD9\u4E2A\u6570\u636E\u7684\u53D8\u5316</li><li>\u5F53\u4FEE\u6539 props \u5F97\u6570\u636E\u7684\u65F6\u5019 \u5C31\u4F1A\u89E6\u53D1 render effect \u7684\u518D\u6B21\u6267\u884C \u4ECE\u800C\u5BFC\u81F4\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>props \u5728\u7EC4\u4EF6\u8BBE\u7F6E\u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u7279\u6027 \u5141\u8BB8\u7EC4\u4EF6\u7684\u4F7F\u7528\u8005\u5728\u5916\u5C42\u4F20\u9012 props</li><li>\u7EC4\u4EF6\u5185\u90E8\u5C31\u53EF\u4EE5\u6839\u636E props \u5B9E\u73B0\u5404\u79CD\u529F\u80FD</li><li>\u7531\u4E8E\u7F16\u5199 props \u5230\u65B9\u5F0F\u975E\u5E38\u7075\u6D3B \u9700\u8981\u5BF9\u4ED6\u8FDB\u884C\u4E00\u5C42\u6807\u51C6\u5316 \u65B9\u4FBF\u540E\u7EED\u5904\u7406</li><li>props \u7684\u521D\u59CB\u5316\u6D41\u7A0B \u5305\u62ECprops \u7684\u6C42\u503C \u9A8C\u8BC1 \u5DF2\u7ECF\u54CD\u5E94\u5F0F\u5904\u7406</li><li>\u5F53\u7EC4\u4EF6\u4F20\u5165\u7684 props \u6570\u636E\u53D1\u751F\u53D8\u5316 \u4F1A\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("source/vue/component/vue-component-props/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};