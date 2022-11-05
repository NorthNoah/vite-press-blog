import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"unknown \u548C  any \u7684\u533A\u522B","description":"","frontmatter":{"createTime":"2022/10/18","tag":"ts"},"headers":[],"relativePath":"interview-questions/ts/unknown-any/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "interview-questions/ts/unknown-any/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="unknown-\u548C-any-\u7684\u533A\u522B" tabindex="-1">unknown \u548C any \u7684\u533A\u522B <a class="header-anchor" href="#unknown-\u548C-any-\u7684\u533A\u522B" aria-hidden="true">#</a></h1>`);
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
  _push(`<ul><li>any \u7C7B\u578B \u662F\u4EFB\u4F55\u7C7B\u578B\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 \u4F46\u662F\u8981\u5C3D\u91CF\u4E0D\u4F7F\u7528 \u56E0\u4E3A\u4F7F\u7528any\u8FC7\u591A \u4F1A\u5BFC\u81F4 \u5931\u53BB ts \u7684\u7C7B\u578B\u68C0\u67E5\u610F\u4E49</li><li>unknown \u7C7B\u578B \u4EE3\u8868\u6211\u4EEC\u4E0D\u77E5\u9053\u4ED6\u662F\u4EC0\u4E48\u7C7B\u578B \u4F46\u662F\u4ED6\u6709\u7C7B\u578B \u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528 <ul><li>\u8981\u4F7F\u7528 unknown \u7C7B\u578B \u7684\u8BDD \u9700\u8981\u914D\u5408 \u7C7B\u578B\u65AD\u8A00\u7684\u65B9\u5F0F\u6765\u4F7F\u7528 as</li></ul></li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">let</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">a</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">any</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">a</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;1&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">a</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">a</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> {}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">a</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> () </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> { }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">a</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">class</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> { }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">let</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">b</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">unknown</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">333</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">let</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">c</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">number</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">b</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">as</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">number</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">any</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">a </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">a </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">a </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">a</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">a </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">class</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">unknown</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">333</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> c</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">number</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> b </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">as</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">number</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview-questions/ts/unknown-any/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
