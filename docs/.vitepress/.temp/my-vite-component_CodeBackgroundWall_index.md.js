import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"DigitalScroll \u6570\u5B57\u6EDA\u52A8\u7EC4\u4EF6","description":"","frontmatter":{"createTime":"2022/10/30","tag":"Vite,\u7EC4\u4EF6\u5E93"},"headers":[{"level":2,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528","link":"#\u4F55\u65F6\u4F7F\u7528","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"\u5C5E\u6027\u8BF4\u660E","slug":"\u5C5E\u6027\u8BF4\u660E","link":"#\u5C5E\u6027\u8BF4\u660E","children":[]}]}],"relativePath":"my-vite-component/CodeBackgroundWall/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "my-vite-component/CodeBackgroundWall/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  const _component_code_background_wall = resolveComponent("code-background-wall");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="digitalscroll-\u6570\u5B57\u6EDA\u52A8\u7EC4\u4EF6" tabindex="-1">DigitalScroll \u6570\u5B57\u6EDA\u52A8\u7EC4\u4EF6 <a class="header-anchor" href="#digitalscroll-\u6570\u5B57\u6EDA\u52A8\u7EC4\u4EF6" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u6309\u94AE\u7528\u4E8E\u8BA9\u6570\u5B57\u6EDA\u52A8\u7684\u573A\u666F</p><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_code_background_wall, null, null, _parent));
  _push(`<div class="language-tsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">setup</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">import </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">{</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">CodeBackgroundWall</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">}</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> from &#39;@xiaomh/vue3-alan-vite-component&#39;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">template</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> &lt;</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">code-background-wall</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">code-backgroundall</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">template</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">style</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">style</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">import </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> CodeBackgroundWall </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> from &#39;@xiaomh/vue3-alan-vite-component&#39;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">code-background-wall</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">code-backgroundall</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="\u5C5E\u6027\u8BF4\u660E" tabindex="-1">\u5C5E\u6027\u8BF4\u660E <a class="header-anchor" href="#\u5C5E\u6027\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">\u5C5E\u6027</th><th style="${ssrRenderStyle({ "text-align": "center" })}">\u8BF4\u660E</th><th style="${ssrRenderStyle({ "text-align": "center" })}">\u7C7B\u578B</th><th style="${ssrRenderStyle({ "text-align": "center" })}">\u9ED8\u8BA4\u503C</th><th style="${ssrRenderStyle({ "text-align": "center" })}">\u7248\u672C</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">width</td><td style="${ssrRenderStyle({ "text-align": "center" })}">\u5BBD\u5EA6</td><td style="${ssrRenderStyle({ "text-align": "center" })}">number</td><td style="${ssrRenderStyle({ "text-align": "center" })}">300</td><td style="${ssrRenderStyle({ "text-align": "center" })}">1.0.17</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">height</td><td style="${ssrRenderStyle({ "text-align": "center" })}">\u9AD8\u5EA6</td><td style="${ssrRenderStyle({ "text-align": "center" })}">number</td><td style="${ssrRenderStyle({ "text-align": "center" })}">300</td><td style="${ssrRenderStyle({ "text-align": "center" })}">1.0.17</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">step</td><td style="${ssrRenderStyle({ "text-align": "center" })}">\u6B65\u957F \u63A7\u5236\u901F\u5EA6</td><td style="${ssrRenderStyle({ "text-align": "center" })}">number</td><td style="${ssrRenderStyle({ "text-align": "center" })}">0.02</td><td style="${ssrRenderStyle({ "text-align": "center" })}">1.0.17</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">color</td><td style="${ssrRenderStyle({ "text-align": "center" })}">\u989C\u8272</td><td style="${ssrRenderStyle({ "text-align": "center" })}">string</td><td style="${ssrRenderStyle({ "text-align": "center" })}">green</td><td style="${ssrRenderStyle({ "text-align": "center" })}">1.0.17</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("my-vite-component/CodeBackgroundWall/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
