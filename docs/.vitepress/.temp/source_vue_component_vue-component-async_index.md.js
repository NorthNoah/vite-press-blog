import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"\u5F02\u6B65\u7EC4\u4EF6","description":"","frontmatter":{"createTime":"2022/10/24","tag":"Vue\u6E90\u7801"},"headers":[{"level":2,"title":"\u6E32\u67D3\u5360\u4F4D\u8282\u70B9","slug":"\u6E32\u67D3\u5360\u4F4D\u8282\u70B9","link":"#\u6E32\u67D3\u5360\u4F4D\u8282\u70B9","children":[]},{"level":2,"title":"\u52A0\u8F7D\u5F02\u6B65 javascript \u6A21\u5757","slug":"\u52A0\u8F7D\u5F02\u6B65-javascript-\u6A21\u5757","link":"#\u52A0\u8F7D\u5F02\u6B65-javascript-\u6A21\u5757","children":[]},{"level":2,"title":"\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6","slug":"\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6","link":"#\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u9AD8\u7EA7\u7528\u6CD5","slug":"\u9AD8\u7EA7\u7528\u6CD5","link":"#\u9AD8\u7EA7\u7528\u6CD5","children":[]},{"level":2,"title":"loading\u7EC4\u4EF6","slug":"loading\u7EC4\u4EF6","link":"#loading\u7EC4\u4EF6","children":[]},{"level":2,"title":"error\u7EC4\u4EF6","slug":"error\u7EC4\u4EF6","link":"#error\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u53EA\u52A0\u8F7D\u4E00\u6B21","slug":"\u53EA\u52A0\u8F7D\u4E00\u6B21","link":"#\u53EA\u52A0\u8F7D\u4E00\u6B21","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"source/vue/component/vue-component-async/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "source/vue/component/vue-component-async/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u5F02\u6B65\u7EC4\u4EF6" tabindex="-1">\u5F02\u6B65\u7EC4\u4EF6 <a class="header-anchor" href="#\u5F02\u6B65\u7EC4\u4EF6" aria-hidden="true">#</a></h1>`);
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
  _push(`<div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">defineAsyncComponent</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">function</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">defineAsyncComponent</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">source</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">AsyncComponentLoader</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> | </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">AsyncComponentOptions</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">): </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">Component</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">type</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">AsyncComponentLoader</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> () </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">Promise</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">Component</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">interface</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">AsyncComponentOptions</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">loader</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">AsyncComponentLoader</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">loadingComponent</span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">?</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">Component</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">errorComponent</span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">?</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">Component</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">delay</span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">?</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">number</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">timeout</span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">?</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">number</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">suspensible</span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">?</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">boolean</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  </span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">onError</span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">?</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: (</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">error</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">Error</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">retry</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: () </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">void</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">fail</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: () </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">void</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">attempts</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">number</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  ) </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">defineAsyncComponent</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">defineAsyncComponent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">source</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">AsyncComponentLoader</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">|</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">AsyncComponentOptions</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">):</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Component</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">type</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">AsyncComponentLoader</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Promise</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Component</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">interface</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">AsyncComponentOptions</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">loader</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">AsyncComponentLoader</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">loadingComponent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Component</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">errorComponent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Component</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">delay</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">number</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">timeout</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">number</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">suspensible</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">boolean</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">onError</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> (</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">error</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">Error</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">retry</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">void</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">fail</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">void</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">attempts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">number</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  ) </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">any</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>\u7528\u6765\u5B9A\u4E49 \u5F02\u6B65\u7EC4\u4EF6 \u5141\u8BB8\u4F20\u5165\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570</li><li>\u63A5\u53D7\u8FD4\u56DE\u7684 promise \u5DE5\u5382\u51FD\u6570 \u4ECE\u670D\u52A1\u7AEF\u6210\u529F\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6\u4E4B\u540E \u5E94\u6267\u884C resolove \u56DE\u8C03\u51FD\u6570 <ul><li>\u5982\u679C\u52A0\u8F7D\u5931\u8D25 \u6267\u884C reject \u56DE\u8C03\u51FD\u6570</li></ul></li><li>defineAsyncComponent \u51FD\u6570\u53EA\u6709\u5355\u4E2A\u53C2\u6570 source \u53EF\u4EE5\u662F\u5DE5\u5382\u51FD\u6570 \u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61</li><li>defineAsyncComponent \u4F1A\u5C06\u53C2\u6570\u6807\u51C6\u5316\u6210\u4E00\u4E2A\u5BF9\u8C61 \u5E76\u4E14\u628A loader \u5C5E\u6027\u6307\u5411\u8FD9\u4E2A\u51FD\u6570</li><li>defineAsyncComponent \u4E3B\u8981\u505A\u4E86\u4E09\u4EF6\u4E8B \u6E32\u67D3\u5360\u4F4D\u8282\u70B9 \u52A0\u8F7D\u5F02\u6B65 javascript \u6A21\u5757 \u4EE5\u53CA \u83B7\u53D6\u7EC4\u4EF6\u5BF9\u8C61 \u4EE5\u53CA\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6</li></ul><h2 id="\u6E32\u67D3\u5360\u4F4D\u8282\u70B9" tabindex="-1">\u6E32\u67D3\u5360\u4F4D\u8282\u70B9 <a class="header-anchor" href="#\u6E32\u67D3\u5360\u4F4D\u8282\u70B9" aria-hidden="true">#</a></h2><ul><li>defineAsyncComponent \u8FD4\u56DE\u7684\u662F defineComponent \u51FD\u6570\u6267\u884C\u7684\u7ED3\u679C</li><li>defineComponent \u51FD\u6570\u505A\u7684\u4E5F\u662F\u6807\u51C6\u5316 \u5982\u679C\u4F20\u9012\u7684 options \u662F\u4E00\u4E2A\u51FD\u6570 \u90A3\u4E48\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61 \u8BA9 options \u51FD\u6570\u6307\u5411\u5176 setup \u5C5E\u6027</li><li>\u56E0\u6B64 defineAsyncComponent \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5C31\u662F\u4E00\u4E2A\u5E26 setup \u5C5E\u6027\u7684\u5BF9\u8C61 \u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u7EC4\u4EF6\u5BF9\u8C61</li><li>\u7531\u4E8E setup\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u51FD\u6570 \u8FD9\u4E2A\u51FD\u6570\u5C31\u662F\u8BE5\u7EC4\u4EF6\u7684\u6E32\u67D3\u51FD\u6570</li><li>\u666E\u901A\u7684\u5F02\u6B65\u7EC4\u4EF6\u521D\u6B21\u4F1A\u88AB\u6E32\u67D3\u6210\u4E00\u4E2A\u6CE8\u91CA\u8282\u70B9</li></ul><h2 id="\u52A0\u8F7D\u5F02\u6B65-javascript-\u6A21\u5757" tabindex="-1">\u52A0\u8F7D\u5F02\u6B65 javascript \u6A21\u5757 <a class="header-anchor" href="#\u52A0\u8F7D\u5F02\u6B65-javascript-\u6A21\u5757" aria-hidden="true">#</a></h2><ul><li>\u9664\u4E86\u628A\u5F02\u6B65\u7EC4\u4EF6\u6E32\u67D3\u6210\u6CE8\u91CA\u8282\u70B9 setup\u51FD\u6570\u5185\u90E8\u8FD8\u8C03\u7528\u4E86 load \u51FD\u6570\u6765\u52A0\u8F7D\u5F02\u6B65 js\u6A21\u5757</li><li>load \u51FD\u6570\u5185\u90E8\u4E3B\u8981\u662F\u901A\u8FC7\u6267\u884C\u7528\u6237\u5B9A\u4E49\u7684 \u5DE5\u5382\u51FD\u6570 loader \u6765\u53D1\u9001\u8BF7\u6C42 <ul><li>\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise \u5BF9\u8C61</li><li>\u52A0\u8F7D\u6210\u529F \u4F1A\u5728 then \u51FD\u6570 \u4E2D\u83B7\u5F97\u7EC4\u4EF6\u7684\u6A21\u5757 comp \u5982\u679C\u7EC4\u4EF6\u662F\u901A\u8FC7 export defalut \u5BFC\u51FA\u7684 \u53EF\u4EE5\u901A\u8FC7 comp.default \u83B7\u53D6\u5B83\u7684\u771F\u5B9E\u7EC4\u4EF6\u5BF9\u8C61 \u8D4B\u503C\u7ED9 resolveComp</li><li>\u5982\u679C\u7EC4\u4EF6\u5BF9\u8C61 comp \u4E0D\u662F\u51FD\u6570\u7C7B\u578B \u4E5F\u4E0D\u662F\u5BF9\u8C61\u7C7B\u578B \u629B\u51FA\u9519\u8BEF</li></ul></li></ul><h2 id="\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6" tabindex="-1">\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6 <a class="header-anchor" href="#\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u5728\u8C03\u7528 load \u4F1A\u4FEE\u6539\u54CD\u5E94\u5F0F\u5BF9\u8C61 loaded \u6765\u89E6\u53D1\u5F02\u6B65\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3</li><li>\u5F53\u5F02\u6B65\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u540E \u4F1A\u518D\u6B21\u6267\u884C\u7EC4\u4EF6\u7684 render \u51FD\u6570</li><li>\u6700\u7EC8\u662F\u8C03\u7528\u4E86 createInnerComp \u51FD\u6570\u521B\u5EFA\u4E00\u4E2A vnode \u5BF9\u8C61 \u5C31\u53EF\u4EE5\u6E32\u67D3\u4E86</li></ul><h2 id="\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1">\u9AD8\u7EA7\u7528\u6CD5 <a class="header-anchor" href="#\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a></h2><ul><li>defineAsyncComponent \u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u5BF9\u8C61 <ul><li>loader \u5DE5\u5382\u51FD\u6570</li><li>loadingComponent : \u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6\u65F6\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6</li><li>errorComponent : \u52A0\u8F7D\u5931\u8D25\u7684\u65F6\u5019\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6</li><li>delay: \u5728\u663E\u793A loadingComponent \u4E4B\u524D\u7684\u5EF6\u8FDF \u5355\u4F4D ms</li><li>timeout\uFF1A \u8D85\u51FA\u65F6\u95F4 \u663E\u793A error \u7EC4\u4EF6</li><li>onError \uFF1A \u51FD\u6570 \u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F</li></ul></li></ul><h2 id="loading\u7EC4\u4EF6" tabindex="-1">loading\u7EC4\u4EF6 <a class="header-anchor" href="#loading\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li>defineAsyncComponent <ul><li>loadingComponent : \u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6\u65F6\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6</li></ul></li></ul><h2 id="error\u7EC4\u4EF6" tabindex="-1">error\u7EC4\u4EF6 <a class="header-anchor" href="#error\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li>defineAsyncComponent \u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u5BF9\u8C61 <ul><li>errorComponent : \u52A0\u8F7D\u5931\u8D25\u7684\u65F6\u5019\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6</li></ul></li></ul><h2 id="\u53EA\u52A0\u8F7D\u4E00\u6B21" tabindex="-1">\u53EA\u52A0\u8F7D\u4E00\u6B21 <a class="header-anchor" href="#\u53EA\u52A0\u8F7D\u4E00\u6B21" aria-hidden="true">#</a></h2><ul><li>defineAsyncComponent \u5185\u90E8\u4F1A\u901A\u8FC7 \u4E00\u4E2A\u53D8\u91CF pendingRequest</li><li>\u5373\u4F7F\u521D\u59CB\u5316\u591A\u6B21 \u53D8\u91CF\u8FD8\u662F\u5171\u4EAB\u7684</li><li>\u7B2C\u4E00\u6B21\u6267\u884C load \u51FD\u6570 pendingRequest \u8FD8\u662F null \u4F1A\u6267\u884C loader \u51FD\u6570\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6 \u5E76\u628A\u8FD4\u56DE\u503C\u8D4B\u7ED9 pendingRequest</li><li>\u7B2C\u4E8C\u6B21\u6267\u884C\u7684\u65F6\u5019 \u53D1\u73B0 pendingRequest \u6709\u503C \u76F4\u63A5\u8FD4\u56DE \u4E0A\u4E00\u6B21\u7684\u7ED3\u679C \u4E0D\u4F1A\u518D\u6B21\u8C03\u7528 loader \u51FD\u6570</li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>\u5F02\u6B65\u7EC4\u4EF6\u672C\u8D28\u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684\u7EC4\u4EF6</li><li>\u5728\u5185\u90E8\u901A\u8FC7\u5B9A\u4E49\u7684 loader \u52A0\u8F7D\u5668\u5728\u9996\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u53D1\u8D77\u4E00\u4E2A\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6\u7684\u6A21\u5757\u8BF7\u6C42 \u540C\u65F6\u88AB\u5BA3\u4F20\u6210\u6CE8\u91CA\u8282\u70B9\u6216\u8005 loading \u7EC4\u4EF6 <ul><li>\u5F53\u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D\u6210\u529F\u4E4B\u540E \u4F1A\u901A\u8FC7\u4FEE\u6539\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u503C\u6765\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3 \u6E32\u67D3\u771F\u6B63\u7684\u7EC4\u4EF6</li><li>\u5F53\u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25\u4E4B\u540E \u53EF\u4EE5\u6267\u884C\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u5931\u8D25\u5904\u7406\u51FD\u6570\u6765\u51B3\u5B9A\u662F\u91CD\u8BD5\u8FD8\u662F\u76F4\u63A5\u5931\u8D25</li></ul></li><li>\u5982\u679C\u591A\u6B21\u91CD\u8BD5\u5931\u8D25\u6216\u8005\u76F4\u63A5\u5931\u8D25 \u5219\u4F1A\u5728\u7528\u6237\u914D\u7F6E\u7684 errorComponent \u6761\u4EF6\u4E0B\u6E32\u67D3 error\u7EC4\u4EF6</li><li>\u5F02\u6B65\u7EC4\u4EF6\u901A\u8FC7\u95ED\u5305\u7684\u6280\u5DE7\u786E\u4FDD\u4E86 \u591A\u4E2A\u5F02\u6B65\u7EC4\u4EF6\u540C\u65F6\u52A0\u8F7D \u53EA\u53D1\u9001\u4E00\u6B21\u8BF7\u6C42 <ul><li>\u5982\u679C\u5DF2\u7ECF\u88AB\u52A0\u8F7D\u7684\u5F02\u6B65\u7EC4\u4EF6\u88AB\u518D\u6B21\u521D\u59CB\u5316 \u76F4\u63A5\u83B7\u53D6\u5BF9\u5E94\u7684\u7EC4\u4EF6\u8FD4\u56DE\u5E76\u6E32\u67D3</li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("source/vue/component/vue-component-async/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
