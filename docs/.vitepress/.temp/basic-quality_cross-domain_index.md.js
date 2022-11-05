import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"HTTP \u8BF7\u6C42\u8DE8\u57DF\u95EE\u9898","description":"","frontmatter":{"createTime":"2022/10/26","tag":"HTTP"},"headers":[{"level":2,"title":"\u8DE8\u57DF\u7684\u539F\u7406\u8DE8\u57DF","slug":"\u8DE8\u57DF\u7684\u539F\u7406\u8DE8\u57DF","link":"#\u8DE8\u57DF\u7684\u539F\u7406\u8DE8\u57DF","children":[]},{"level":2,"title":"\u8DE8\u57DF\u539F\u7406","slug":"\u8DE8\u57DF\u539F\u7406","link":"#\u8DE8\u57DF\u539F\u7406","children":[{"level":3,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]},{"level":3,"title":"JSONP","slug":"jsonp","link":"#jsonp","children":[]},{"level":3,"title":"\u6B65\u9AA4","slug":"\u6B65\u9AA4","link":"#\u6B65\u9AA4","children":[]}]},{"level":2,"title":"\u8DE8\u57DF\u95EE\u9898\u5B9E\u9645\u4E0A\u6539\u7684\u662F http \u91CC\u9762\u54EA\u4E2A\u53C2\u6570","slug":"\u8DE8\u57DF\u95EE\u9898\u5B9E\u9645\u4E0A\u6539\u7684\u662F-http-\u91CC\u9762\u54EA\u4E2A\u53C2\u6570","link":"#\u8DE8\u57DF\u95EE\u9898\u5B9E\u9645\u4E0A\u6539\u7684\u662F-http-\u91CC\u9762\u54EA\u4E2A\u53C2\u6570","children":[]}],"relativePath":"basic-quality/cross-domain/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "basic-quality/cross-domain/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="http-\u8BF7\u6C42\u8DE8\u57DF\u95EE\u9898" tabindex="-1">HTTP \u8BF7\u6C42\u8DE8\u57DF\u95EE\u9898 <a class="header-anchor" href="#http-\u8BF7\u6C42\u8DE8\u57DF\u95EE\u9898" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="\u8DE8\u57DF\u7684\u539F\u7406\u8DE8\u57DF" tabindex="-1">\u8DE8\u57DF\u7684\u539F\u7406\u8DE8\u57DF <a class="header-anchor" href="#\u8DE8\u57DF\u7684\u539F\u7406\u8DE8\u57DF" aria-hidden="true">#</a></h2><p>\u662F\u6307\u6D4F\u89C8\u5668\u4E0D\u80FD\u6267\u884C\u5176\u4ED6\u7F51\u7AD9\u7684\u811A\u672C\u3002\u5B83\u662F\u7531\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u9020\u6210\u7684\u3002 \u540C\u6E90\u7B56\u7565,\u662F\u6D4F\u89C8\u5668\u5BF9 JavaScript \u5B9E\u65BD\u7684\u5B89\u5168\u9650\u5236\uFF0C\u53EA\u8981\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u6709\u4EFB\u4F55\u4E00\u4E2A\u4E0D\u540C\uFF0C\u90FD\u88AB\u5F53\u4F5C\u662F\u4E0D\u540C\u7684\u57DF\u3002</p><h2 id="\u8DE8\u57DF\u539F\u7406" tabindex="-1">\u8DE8\u57DF\u539F\u7406 <a class="header-anchor" href="#\u8DE8\u57DF\u539F\u7406" aria-hidden="true">#</a></h2><p>\u5373\u662F\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\uFF0C\u907F\u5F00\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u9650\u5236\u3002</p><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h3><p>\u6700\u521D\u505A\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u7684\u662Fjsonp\uFF0C\u4F46\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F7F\u7528get\u8BF7\u6C42\u4E0D\u5B89\u5168\uFF0C\u643A\u5E26\u6570\u636E\u8F83\u5C0F\uFF0C\u540E\u6765\u4E5F\u7528\u8FC7iframe\uFF0C\u4F46\u53EA\u6709\u4E3B\u57DF\u76F8\u540C\u624D\u884C\uFF0C\u4E5F\u662F\u5B58\u5728\u4E9B\u95EE\u9898\uFF0C\u540E\u6765\u901A\u8FC7\u4E86\u89E3\u548C\u5B66\u4E60\u53D1\u73B0\u4F7F\u7528\u4EE3\u7406\u548Cproxy\u4EE3\u7406\u914D\u5408\u8D77\u6765\u4F7F\u7528\u6BD4\u8F83\u65B9\u4FBF\uFF0C\u5C31\u5F15\u5BFC\u540E\u53F0\u6309\u8FD9\u79CD\u65B9\u5F0F\u505A\u4E0B\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u5728\u5F00\u53D1\u4E2D\u4F7F\u7528proxy\uFF0C\u5728\u670D\u52A1\u5668\u4E0A\u4F7F\u7528nginx\u4EE3\u7406\uFF0C\u8FD9\u6837\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5F7C\u6B64\u90FD\u65B9\u4FBF\uFF0C\u6548\u7387\u4E5F\u9AD8\uFF1B\u73B0\u5728h5\u65B0\u7279\u6027\u8FD8\u6709 windows.postMessage()</p><h3 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-hidden="true">#</a></h3><p>ajax \u8BF7\u6C42\u53D7\u540C\u6E90\u7B56\u7565\u5F71\u54CD\uFF0C\u4E0D\u5141\u8BB8\u8FDB\u884C\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u800C script \u6807\u7B7E src \u5C5E\u6027\u4E2D\u7684\u94FE \u63A5\u5374\u53EF\u4EE5\u8BBF\u95EE\u8DE8\u57DF\u7684 js \u811A\u672C\uFF0C\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u670D\u52A1\u7AEF\u4E0D\u518D\u8FD4\u56DE JSON \u683C\u5F0F\u7684\u6570\u636E\uFF0C\u800C\u662F \u8FD4\u56DE\u4E00\u6BB5\u8C03\u7528\u67D0\u4E2A\u51FD\u6570\u7684 js \u4EE3\u7801\uFF0C\u5728 src \u4E2D\u8FDB\u884C\u4E86\u8C03\u7528\uFF0C\u8FD9\u6837\u5B9E\u73B0\u4E86\u8DE8\u57DF\u3002</p><h3 id="\u6B65\u9AA4" tabindex="-1">\u6B65\u9AA4 <a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a></h3><ul><li>\u53BB\u521B\u5EFA\u4E00\u4E2Ascript\u6807\u7B7E</li><li>script\u7684src\u5C5E\u6027\u8BBE\u7F6E\u63A5\u53E3\u5730\u5740</li><li>\u63A5\u53E3\u53C2\u6570\uFF0C\u5FC5\u987B\u8981\u5E26\u4E00\u4E2A\u81EA\u5B9A\u4E49\u51FD\u6570\u540D\uFF0C\u8981\u4E0D\u7136\u540E\u53F0\u65E0\u6CD5\u8FD4\u56DE\u6570\u636E</li><li>\u901A\u8FC7\u5B9A\u4E49\u51FD\u6570\u540D\u53BB\u63A5\u53D7\u8FD4\u56DE\u7684\u6570\u636E</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E" })}">//\u52A8\u6001\u521B\u5EFA script</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">var</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">document</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">createElement</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;script&#39;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">);</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E" })}">// \u8BBE\u7F6E\u56DE\u8C03\u51FD\u6570</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">function</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">getData</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">data</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">console</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">log</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">data</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E" })}">//\u8BBE\u7F6E script \u7684 src \u5C5E\u6027\uFF0C\u5E76\u8BBE\u7F6E\u8BF7\u6C42\u5730\u5740</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">src</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;http://localhost:3000/?callback=getData&#39;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E" })}">// \u8BA9 script \u751F\u6548</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">document</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">body</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">appendChild</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95" })}">//\u52A8\u6001\u521B\u5EFA script</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">var</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> script </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> document</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">createElement</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#676E95" })}">// \u8BBE\u7F6E\u56DE\u8C03\u51FD\u6570</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">getData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">data</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">console</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">log</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">data</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#676E95" })}">//\u8BBE\u7F6E script \u7684 src \u5C5E\u6027\uFF0C\u5E76\u8BBE\u7F6E\u8BF7\u6C42\u5730\u5740</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">src </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">http://localhost:3000/?callback=getData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#676E95" })}">// \u8BA9 script \u751F\u6548</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">document</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">body</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">appendChild</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(script)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>JSONP \u7684\u7F3A\u70B9: JSON \u53EA\u652F\u6301 get\uFF0C\u56E0\u4E3A script \u6807\u7B7E\u53EA\u80FD\u4F7F\u7528 get \u8BF7\u6C42\uFF1B JSONP \u9700\u8981\u540E\u7AEF\u914D\u5408\u8FD4\u56DE\u6307\u5B9A\u683C\u5F0F\u7684\u6570\u636E\u3002</li><li>document.domain \u57FA\u7840\u57DF\u540D\u76F8\u540C \u5B50\u57DF\u540D\u4E0D\u540C</li><li><a href="http://window.name" target="_blank" rel="noreferrer">window.name</a> \u5229\u7528\u5728\u4E00\u4E2A\u6D4F\u89C8\u5668\u7A97\u53E3\u5185\uFF0C<a href="http://xn--window-9m7igl23bo8p1d816aimn1m9awlmujd5y9gz67ew7f.name" target="_blank" rel="noreferrer">\u8F7D\u5165\u6240\u6709\u7684\u57DF\u540D\u90FD\u662F\u5171\u4EAB\u4E00\u4E2Awindow.name</a></li><li>CORS CORS(Cross-origin resource sharing)\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB \u670D\u52A1\u5668\u8BBE\u7F6E\u5BF9CORS\u7684\u652F\u6301\u539F\u7406\uFF1A\u670D\u52A1\u5668\u8BBE\u7F6EAccess-Control-Allow-Origin HTTP\u54CD\u5E94\u5934\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u5C06\u4F1A\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42</li><li>proxy\u4EE3\u7406 \u76EE\u524D\u5E38\u7528\u65B9\u5F0F,\u901A\u8FC7\u670D\u52A1\u5668\u8BBE\u7F6E\u4EE3\u7406</li><li>window.postMessage() \u5229\u7528h5\u65B0\u7279\u6027window.postMessage()</li></ul><h2 id="\u8DE8\u57DF\u95EE\u9898\u5B9E\u9645\u4E0A\u6539\u7684\u662F-http-\u91CC\u9762\u54EA\u4E2A\u53C2\u6570" tabindex="-1">\u8DE8\u57DF\u95EE\u9898\u5B9E\u9645\u4E0A\u6539\u7684\u662F http \u91CC\u9762\u54EA\u4E2A\u53C2\u6570 <a class="header-anchor" href="#\u8DE8\u57DF\u95EE\u9898\u5B9E\u9645\u4E0A\u6539\u7684\u662F-http-\u91CC\u9762\u54EA\u4E2A\u53C2\u6570" aria-hidden="true">#</a></h2><p>\u7B54\uFF1AAccess-Control-Allow-Origin</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("basic-quality/cross-domain/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
