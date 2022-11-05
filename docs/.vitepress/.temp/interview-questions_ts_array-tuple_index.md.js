import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"Array \u548C tuple \u7684\u533A\u522B","description":"","frontmatter":{"createTime":"2022/10/18","tag":"ts"},"headers":[{"level":2,"title":"\u6570\u7EC4\u4E00\u822C\u53EA\u9650\u5236\u96C6\u5408\u7684\u7C7B\u578B  \u4F46\u662F\u4E0D\u4F1A\u9650\u5236\u4F60\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u7684\u7C7B\u578B  \u53EA\u8981\u7B26\u5408 \u96C6\u5408\u7C7B\u578B\u9650\u5236\u5C31\u53EF\u4EE5","slug":"\u6570\u7EC4\u4E00\u822C\u53EA\u9650\u5236\u96C6\u5408\u7684\u7C7B\u578B-\u4F46\u662F\u4E0D\u4F1A\u9650\u5236\u4F60\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u7684\u7C7B\u578B-\u53EA\u8981\u7B26\u5408-\u96C6\u5408\u7C7B\u578B\u9650\u5236\u5C31\u53EF\u4EE5","link":"#\u6570\u7EC4\u4E00\u822C\u53EA\u9650\u5236\u96C6\u5408\u7684\u7C7B\u578B-\u4F46\u662F\u4E0D\u4F1A\u9650\u5236\u4F60\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u7684\u7C7B\u578B-\u53EA\u8981\u7B26\u5408-\u96C6\u5408\u7C7B\u578B\u9650\u5236\u5C31\u53EF\u4EE5","children":[]},{"level":2,"title":"\u5143\u7956 tuple \u53EF\u4EE5\u9650\u5236 \u96C6\u5408\u4E2D \u6BCF\u4E2A\u4F4D\u7F6E\u7684\u7C7B\u578B","slug":"\u5143\u7956-tuple-\u53EF\u4EE5\u9650\u5236-\u96C6\u5408\u4E2D-\u6BCF\u4E2A\u4F4D\u7F6E\u7684\u7C7B\u578B","link":"#\u5143\u7956-tuple-\u53EF\u4EE5\u9650\u5236-\u96C6\u5408\u4E2D-\u6BCF\u4E2A\u4F4D\u7F6E\u7684\u7C7B\u578B","children":[]}],"relativePath":"interview-questions/ts/array-tuple/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "interview-questions/ts/array-tuple/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="array-\u548C-tuple-\u7684\u533A\u522B" tabindex="-1">Array \u548C tuple \u7684\u533A\u522B <a class="header-anchor" href="#array-\u548C-tuple-\u7684\u533A\u522B" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="\u6570\u7EC4\u4E00\u822C\u53EA\u9650\u5236\u96C6\u5408\u7684\u7C7B\u578B-\u4F46\u662F\u4E0D\u4F1A\u9650\u5236\u4F60\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u7684\u7C7B\u578B-\u53EA\u8981\u7B26\u5408-\u96C6\u5408\u7C7B\u578B\u9650\u5236\u5C31\u53EF\u4EE5" tabindex="-1">\u6570\u7EC4\u4E00\u822C\u53EA\u9650\u5236\u96C6\u5408\u7684\u7C7B\u578B \u4F46\u662F\u4E0D\u4F1A\u9650\u5236\u4F60\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u7684\u7C7B\u578B \u53EA\u8981\u7B26\u5408 \u96C6\u5408\u7C7B\u578B\u9650\u5236\u5C31\u53EF\u4EE5 <a class="header-anchor" href="#\u6570\u7EC4\u4E00\u822C\u53EA\u9650\u5236\u96C6\u5408\u7684\u7C7B\u578B-\u4F46\u662F\u4E0D\u4F1A\u9650\u5236\u4F60\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u7684\u7C7B\u578B-\u53EA\u8981\u7B26\u5408-\u96C6\u5408\u7C7B\u578B\u9650\u5236\u5C31\u53EF\u4EE5" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">let</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">arr</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: (</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">string</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> | </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">number</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> | </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">boolean</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">)[] </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> [</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;1&#39;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">, </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">1</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">, </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">false</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">arr</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">[</span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">0</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">] </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">console</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">log</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">arr</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> arr</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> (</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">string</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">|</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">number</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">|</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">boolean</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">)[] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}">false</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">arr[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">console</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">log</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(arr)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5143\u7956-tuple-\u53EF\u4EE5\u9650\u5236-\u96C6\u5408\u4E2D-\u6BCF\u4E2A\u4F4D\u7F6E\u7684\u7C7B\u578B" tabindex="-1">\u5143\u7956 tuple \u53EF\u4EE5\u9650\u5236 \u96C6\u5408\u4E2D \u6BCF\u4E2A\u4F4D\u7F6E\u7684\u7C7B\u578B <a class="header-anchor" href="#\u5143\u7956-tuple-\u53EF\u4EE5\u9650\u5236-\u96C6\u5408\u4E2D-\u6BCF\u4E2A\u4F4D\u7F6E\u7684\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">let</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">tuple</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: [</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">string</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">, </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">number</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">, </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">boolean</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">] </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> [</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;1&#39;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">, </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">1</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">, </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">false</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">tuple</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">[</span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">0</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">] </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">1</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#7F848E" })}">// err  \u5143\u7956\u4E2D \u7B2C\u4E00\u4E2A\u5143\u7D20\u5FC5\u987B\u662F string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">tuple</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">[</span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">0</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">] </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;12313&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">console</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">log</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">arr</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> tuple</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> [</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">string</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">boolean</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}">false</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">tuple[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}">// err  \u5143\u7956\u4E2D \u7B2C\u4E00\u4E2A\u5143\u7D20\u5FC5\u987B\u662F string</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">tuple[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">12313</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">console</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">log</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(arr)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview-questions/ts/array-tuple/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
