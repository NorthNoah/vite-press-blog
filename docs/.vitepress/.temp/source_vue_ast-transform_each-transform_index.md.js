import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"\u904D\u5386 AST \u8282\u70B9","description":"","frontmatter":{"createTime":"2022/11/01","tag":"Vue\u6E90\u7801,AST"},"headers":[{"level":2,"title":"element \u8282\u70B9\u8F6C\u6362\u51FD\u6570","slug":"element-\u8282\u70B9\u8F6C\u6362\u51FD\u6570","link":"#element-\u8282\u70B9\u8F6C\u6362\u51FD\u6570","children":[]},{"level":2,"title":"\u8868\u8FBE\u5F0F\u8282\u70B9\u8F6C\u6362\u51FD\u6570","slug":"\u8868\u8FBE\u5F0F\u8282\u70B9\u8F6C\u6362\u51FD\u6570","link":"#\u8868\u8FBE\u5F0F\u8282\u70B9\u8F6C\u6362\u51FD\u6570","children":[]},{"level":2,"title":"Text \u8282\u70B9\u8F6C\u6362\u51FD\u6570","slug":"text-\u8282\u70B9\u8F6C\u6362\u51FD\u6570","link":"#text-\u8282\u70B9\u8F6C\u6362\u51FD\u6570","children":[]}],"relativePath":"source/vue/ast-transform/each-transform/index.md","lastUpdated":1667367865000}');
const _sfc_main = { name: "source/vue/ast-transform/each-transform/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u904D\u5386-ast-\u8282\u70B9" tabindex="-1">\u904D\u5386 AST \u8282\u70B9 <a class="header-anchor" href="#\u904D\u5386-ast-\u8282\u70B9" aria-hidden="true">#</a></h1>`);
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
  _push(`<ul><li>\u901A\u8FC7 traverseNode \u51FD\u6570\u5B8C\u6210</li><li>\u9012\u5F52\u904D\u5386 ast \u8282\u70B9 \u9488\u5BF9\u6BCF\u4E2A\u8282\u70B9\u6267\u884C\u4E00\u7CFB\u5217\u7684\u8F6C\u6362\u51FD\u6570 \u6709\u4E9B\u8FD8\u4F1A\u8BBE\u8BA1\u9000\u51FA\u51FD\u6570</li><li>\u5F53\u6267\u884C\u5B8C\u51FD\u6570\u540E \u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6216\u591A\u4E2A\u9000\u51FA\u51FD\u6570</li><li>vue \u5185\u7F6E\u4E86\u5F88\u591A\u8F6C\u6362\u51FD\u6570 \u5904\u7406\u6307\u4EE4 \u8868\u8FBE\u5F0F \u5143\u7D20\u8282\u70B9 \u6587\u672C\u8282\u70B9\u7B49\u4E0D\u540C\u7684\u7279\u6027</li></ul><h2 id="element-\u8282\u70B9\u8F6C\u6362\u51FD\u6570" tabindex="-1">element \u8282\u70B9\u8F6C\u6362\u51FD\u6570 <a class="header-anchor" href="#element-\u8282\u70B9\u8F6C\u6362\u51FD\u6570" aria-hidden="true">#</a></h2><ul><li>transformElement \u51FD\u6570 \u5B9E\u73B0</li><li>\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u9000\u51FA\u51FD\u6570 \u4F1A\u5728\u8BE5\u5143\u7D20\u8282\u70B9\u7684\u5B50\u8282\u70B9\u903B\u8F91\u5904\u7406\u5B8C\u6BD5\u4E4B\u540E \u9000\u51FA</li><li>\u5224\u65AD\u8FD9\u4E2A\u8282\u70B9\u662F\u4E0D\u662F\u4E00\u4E2A block \u8282\u70B9 <ul><li>\u4E3A\u4E86\u8FD0\u884C\u65F6\u7684\u66F4\u65B0\u4F18\u5316 vue3 \u8BBE\u8BA1\u4E86\u4E00\u4E2A block tree \u7684\u6982\u5FF5</li><li>\u5C06\u6A21\u7248\u57FA\u4E8E\u52A8\u6001\u8282\u70B9\u6307\u4EE4\u8FDB\u884C\u5207\u5272\u7684\u5D4C\u5957\u533A\u5757</li><li>\u6BCF\u4E2A\u533A\u5757\u9700\u8981\u4E00\u4E2A array \u8FFD\u8E2A\u81EA\u8EAB\u5305\u542B\u7684\u52A8\u6001\u8282\u70B9</li><li>\u501F\u52A9 block \u8282\u70B9 \u5C06 node \u7684\u66F4\u65B0\u6027\u80FD \u7531\u6A21\u7248\u6574\u4F53\u5927\u5C0F\u63D0\u5347\u4E3A\u4E86 \u52A8\u6001\u5185\u5BB9\u7684\u6570\u91CF\u76F8\u5173 \u6781\u5927\u7684\u4F18\u5316\u4E86 diff</li></ul></li><li>\u7136\u540E\u5904\u7406\u8282\u70B9\u7684 props <ul><li>\u4ECE props \u5BF9\u8C61\u8FDB\u4E00\u6B65\u89E3\u6790\u51FA\u6307\u4EE4 vnodeDirectives \u52A8\u6001\u5C5E\u6027 dynamicPropsNames \u4EE5\u53CA\u66F4\u65B0\u6807\u8BC6 patchFlag</li><li>patchFlag \u4E3B\u8981\u7528\u4E8E\u6807\u8BC6\u8282\u70B9\u66F4\u65B0\u7684\u7C7B\u578B</li></ul></li><li>\u5904\u7406\u8282\u70B9\u7684 chilren <ul><li>\u5BF9\u4E8E\u7EC4\u4EF6\u8282\u70B9\u800C\u8A00 \u5982\u679C\u6709\u5B50\u8282\u70B9 \u8BF4\u660E\u5C31\u662F\u7EC4\u4EF6\u7684\u63D2\u69FD\u4F1A\u6709\u4E00\u4E9B\u5185\u7F6E\u7EC4\u4EF6\u7684\u5904\u7406\u903B\u8F91</li><li>\u5BF9\u4E8E\u4E00\u4E2A\u666E\u901A\u5143\u7D20\u8282\u70B9\u6765\u8BF4 \u76F4\u63A5\u628A\u8282\u70B9\u7684 chilren \u5C5E\u6027 \u62FF\u7ED9 vnodeChilren \u5C31\u884C</li><li>\u5F53\u8282\u70B9\u53EA\u6709\u4E00\u4E2A\u5B50\u8282\u70B9 \u5E76\u4E14\u662F\u4E00\u4E2A\u666E\u901A\u6587\u672C\u8282\u70B9 \u63D2\u503C \u8868\u8FBE\u5F0F \u5C31\u76F4\u63A5\u628A\u503C \u8D4B\u503C\u7ED9 vnodeChildren</li></ul></li></ul><h2 id="\u8868\u8FBE\u5F0F\u8282\u70B9\u8F6C\u6362\u51FD\u6570" tabindex="-1">\u8868\u8FBE\u5F0F\u8282\u70B9\u8F6C\u6362\u51FD\u6570 <a class="header-anchor" href="#\u8868\u8FBE\u5F0F\u8282\u70B9\u8F6C\u6362\u51FD\u6570" aria-hidden="true">#</a></h2><ul><li>transformExporession \u51FD\u6570\u5B9E\u73B0</li><li>\u4E3B\u8981\u5C31\u662F\u8F6C\u6362\u63D2\u503C\u548C\u5143\u7D20\u8282\u70B9\u4E2D\u7684\u52A8\u6001\u8868\u8FBE\u5F0F</li><li>\u5185\u90E8\u4E3B\u8981\u901A\u8FC7 processExporession \u51FD\u6570\u5B8C\u6210</li><li>\u6A21\u7248 \u6267\u884C parse \u751F\u6210\u7684\u8868\u8FBE\u5F0F\u8282\u70B9 node.content \u662F\u4E00\u4E2A\u7B80\u5355\u7684\u8868\u8FBE\u5F0F <ul><li>\u901A\u8FC7 processExporession \u5904\u7406\u540E \u53D8\u6210\u4E86\u4E00\u4E2A\u590D\u5408\u8868\u8FBE\u5F0F\u7684\u5BF9\u8C61</li></ul></li><li>processExporession \u5185\u90E8\u4F9D\u8D56\u4E86 @babel/parse \u89E3\u6790\u8868\u8FBE\u5F0F\u751F\u6210 ast \u8282\u70B9 <ul><li>\u4F9D\u8D56\u4E86 estree-walker \u904D\u5386\u4E86 ast \u8282\u70B9 \u7136\u540E\u5206\u6790\u5224\u65AD\u662F\u5426\u9700\u8981\u5BF9\u8282\u70B9\u6DFB\u52A0\u524D\u7F00</li><li>\u63A5\u7740\u4FEE\u6539 ast \u8282\u70B9 \u8F6C\u6362\u751F\u6210\u65B0\u7684\u8868\u8FBE\u5F0F\u5BF9\u8C61</li></ul></li><li>\u56E0\u4E3A @babel/parse \u901A\u5E38\u662F\u5728 node js \u4F7F\u7528 \u672C\u8EAB\u4F53\u79EF\u5F88\u5927 \u6240\u4EE5\u751F\u4EA7\u73AF\u5883web\u7AEF\u4E0D\u4F1A\u5F15\u5165\u8FD9\u4E2A\u5E93 \u56E0\u4E3A\u751F\u4EA7\u73AF\u5883\u4E5F\u4E0D\u9700\u8981\u5BF9\u8868\u8FBE\u5F0F\u8FDB\u884C\u8F6C\u6362 <ul><li>web \u751F\u4EA7\u73AF\u5883 \u8FD0\u884C\u65F6\u7F16\u8BD1\u4F1A\u4F7F\u7528 with \u65B9\u5F0F</li></ul></li></ul><h2 id="text-\u8282\u70B9\u8F6C\u6362\u51FD\u6570" tabindex="-1">Text \u8282\u70B9\u8F6C\u6362\u51FD\u6570 <a class="header-anchor" href="#text-\u8282\u70B9\u8F6C\u6362\u51FD\u6570" aria-hidden="true">#</a></h2><ul><li>transformText \u51FD\u6570\u5B9E\u73B0</li><li>\u53EA\u5904\u7406 \u6839\u8282\u70B9 \u5143\u7D20\u8282\u70B9 v-for \u4EE5\u53CA v-if \u5206\u652F\u76F8\u5173\u8282\u70B9</li><li>\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u9000\u51FA\u51FD\u6570 \u56E0\u4E3A\u8981\u4FDD\u8BC1\u6240\u6709\u8868\u8FBE\u5F0F\u8282\u70B9\u90FD\u5DF2\u7ECF\u5904\u7406\u5B8C\u6BD5\u624D\u6267\u884C\u8F6C\u6362\u903B\u8F91</li><li>\u76EE\u7684\u5C31\u662F \u5408\u5E76\u4E00\u4E9B\u76F8\u90BB\u7684\u6587\u672C\u8282\u70B9 \u7136\u540E\u4E3A\u5185\u90E8\u6BCF\u4E00\u4E2A\u6587\u672C\u8282\u70B9\u521B\u5EFA\u4E00\u4E2A\u4EE3\u7801\u751F\u6210\u8282\u70B9</li><li>\u5728\u5185\u90E8 \u9759\u6001\u6587\u672C\u8282\u70B9\u548C\u52A8\u6001\u63D2\u503C\u8282\u70B9\u90FD\u88AB\u770B\u4F5C\u6210\u4E00\u4E2A\u6587\u672C\u8282\u70B9 \u6240\u4EE5\u51FD\u6570\u9996\u5148\u904D\u5386\u8282\u70B9\u7684\u5B50\u8282\u70B9 \u7136\u540E\u628A\u5B50\u8282\u70B9\u76F8\u90BB\u7684\u6587\u672C\u8282\u70B9\u5408\u5E76\u6210\u4E00\u4E2A</li><li>\u5408\u5E76\u5B8C\u5B50\u6587\u672C\u8282\u70B9\u540E \u5224\u65AD\u662F\u4E0D\u662F\u53EA\u5E26\u6709\u5355\u4E2A\u6587\u672C\u5B50\u5143\u7D20\u7684\u7EAF\u5143\u7D20\u8282\u70B9 \u4E14\u5143\u7D20\u4E0A\u4E0D\u5B58\u5728\u81EA\u5B9A\u4E49\u6307\u4EE4 \u90A3\u4E48\u4E0D\u9700\u8981\u8F6C\u6362 \u56E0\u4E3A \u8FD0\u884C\u65F6\u53EF\u7528\u901A\u8FC7\u8BBE\u7F6E\u5143\u7D20\u7684 textContent \u76F4\u63A5\u66F4\u65B0\u6587\u672C</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("source/vue/ast-transform/each-transform/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};