import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"\u7ED9 npm script \u4F20\u9012\u53C2\u6570\u548C\u6DFB\u52A0\u6CE8\u91CA","description":"","frontmatter":{"createTime":"2022/11/02","tag":"\u5DE5\u7A0B\u5316,npm"},"headers":[{"level":2,"title":"\u7ED9 npm script \u4F20\u9012\u53C2\u6570 --","slug":"\u7ED9-npm-script-\u4F20\u9012\u53C2\u6570","link":"#\u7ED9-npm-script-\u4F20\u9012\u53C2\u6570","children":[]},{"level":2,"title":"\u7ED9 npm script \u6DFB\u52A0\u6CE8\u91CA","slug":"\u7ED9-npm-script-\u6DFB\u52A0\u6CE8\u91CA","link":"#\u7ED9-npm-script-\u6DFB\u52A0\u6CE8\u91CA","children":[{"level":3,"title":"\u7B2C\u4E00\u79CD","slug":"\u7B2C\u4E00\u79CD","link":"#\u7B2C\u4E00\u79CD","children":[]},{"level":3,"title":"\u7B2C\u4E8C\u79CD","slug":"\u7B2C\u4E8C\u79CD","link":"#\u7B2C\u4E8C\u79CD","children":[]}]},{"level":2,"title":"\u8C03\u6574 npm script \u8FD0\u884C\u65F6\u65E5\u5FD7\u8F93\u51FA","slug":"\u8C03\u6574-npm-script-\u8FD0\u884C\u65F6\u65E5\u5FD7\u8F93\u51FA","link":"#\u8C03\u6574-npm-script-\u8FD0\u884C\u65F6\u65E5\u5FD7\u8F93\u51FA","children":[{"level":3,"title":"\u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B","slug":"\u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B","link":"#\u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B","children":[]},{"level":3,"title":"\u663E\u793A\u5C3D\u53EF\u80FD\u5C11\u7684\u6709\u7528\u4FE1\u606F","slug":"\u663E\u793A\u5C3D\u53EF\u80FD\u5C11\u7684\u6709\u7528\u4FE1\u606F","link":"#\u663E\u793A\u5C3D\u53EF\u80FD\u5C11\u7684\u6709\u7528\u4FE1\u606F","children":[]},{"level":3,"title":"\u663E\u793A\u5C3D\u53EF\u80FD\u591A\u7684\u8FD0\u884C\u65F6\u72B6\u6001","slug":"\u663E\u793A\u5C3D\u53EF\u80FD\u591A\u7684\u8FD0\u884C\u65F6\u72B6\u6001","link":"#\u663E\u793A\u5C3D\u53EF\u80FD\u591A\u7684\u8FD0\u884C\u65F6\u72B6\u6001","children":[]}]}],"relativePath":"engineering/npm/parameter-script/index.md","lastUpdated":1667401036000}');
const _sfc_main = { name: "engineering/npm/parameter-script/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u7ED9-npm-script-\u4F20\u9012\u53C2\u6570\u548C\u6DFB\u52A0\u6CE8\u91CA" tabindex="-1">\u7ED9 npm script \u4F20\u9012\u53C2\u6570\u548C\u6DFB\u52A0\u6CE8\u91CA <a class="header-anchor" href="#\u7ED9-npm-script-\u4F20\u9012\u53C2\u6570\u548C\u6DFB\u52A0\u6CE8\u91CA" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="\u7ED9-npm-script-\u4F20\u9012\u53C2\u6570" tabindex="-1">\u7ED9 npm script \u4F20\u9012\u53C2\u6570 -- <a class="header-anchor" href="#\u7ED9-npm-script-\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a></h2><p>eslint \u5185\u7F6E\u4E86\u4EE3\u7801\u98CE\u683C\u81EA\u52A8\u4FEE\u590D\u6A21\u5F0F\uFF0C\u53EA\u9700\u7ED9\u5B83\u4F20\u5165 --fix \u53C2\u6570\u5373\u53EF\uFF0C\u5728 scripts \u4E2D\u58F0\u660E\u68C0\u67E5\u4EE3\u7801\u547D\u4EE4\u7684\u540C\u65F6\u4F60\u53EF\u80FD\u4E5F\u9700\u8981\u58F0\u660E\u4FEE\u590D\u4EE3\u7801\u7684\u547D\u4EE4\uFF0C\u9762\u5BF9\u8FD9\u79CD\u9700\u6C42\uFF0C\u5927\u591A\u6570\u540C\u5B66\u53EF\u80FD\u4F1A\u5FCD\u4E0D\u4F4F\u590D\u5236\u7C98\u8D34\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;lint:js:fix&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;eslint *.js --fix&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">lint:js:fix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">eslint *.js --fix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728 lint:js \u547D\u4EE4\u6BD4\u8F83\u77ED\u7684\u65F6\u5019\u590D\u5236\u7C98\u8D34\u7684\u65B9\u6CD5\u7B80\u5355\u7C97\u66B4\u6709\u6548\uFF0C\u4F46\u662F\u5F53 lint:js \u547D\u4EE4\u53D8\u7684\u5F88\u957F\u4E4B\u540E\uFF0C\u96BE\u514D\u540E\u7EED\u4F1A\u6709\u4EBA\u6539\u4E86 lint:js \u800C\u5FD8\u8BB0\u4FEE\u6539 lint:js:fix\uFF08\u522B\u95EE\u6211\u4E3A\u5565\uFF0C\u6211\u5C31\u662F\u8E29\u7740\u5751\u8FC7\u6765\u7684\uFF09\uFF0C\u66F4\u5065\u58EE\u7684\u505A\u6CD5\u662F\uFF0C\u5728\u8FD0\u884C npm script \u65F6\u7ED9\u5B9A\u989D\u5916\u7684\u53C2\u6570\uFF0C\u4EE3\u7801\u4FEE\u6539\u5982\u4E0B</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;lint:js:fix&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;npm run lint:js -- --fix&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">lint:js:fix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">npm run lint:js -- --fix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8981\u683C\u5916\u6CE8\u610F --fix \u53C2\u6570\u524D\u9762\u7684 -- \u5206\u9694\u7B26\uFF0C\u610F\u6307\u8981\u7ED9 npm run lint:js \u5B9E\u9645\u6307\u5411\u7684\u547D\u4EE4\u4F20\u9012\u989D\u5916\u7684\u53C2\u6570\u3002</p><h2 id="\u7ED9-npm-script-\u6DFB\u52A0\u6CE8\u91CA" tabindex="-1">\u7ED9 npm script \u6DFB\u52A0\u6CE8\u91CA <a class="header-anchor" href="#\u7ED9-npm-script-\u6DFB\u52A0\u6CE8\u91CA" aria-hidden="true">#</a></h2><h3 id="\u7B2C\u4E00\u79CD" tabindex="-1">\u7B2C\u4E00\u79CD <a class="header-anchor" href="#\u7B2C\u4E00\u79CD" aria-hidden="true">#</a></h3><p>package.json \u4E2D\u53EF\u4EE5\u589E\u52A0 // \u4E3A\u952E\u7684\u503C\uFF0C\u6CE8\u91CA\u5C31\u53EF\u4EE5\u5199\u5728\u5BF9\u5E94\u7684\u503C\u91CC\u9762\uFF0Cnpm \u4F1A\u5FFD\u7565\u8FD9\u79CD\u952E\uFF0C\u6BD4\u5982\uFF0C\u6211\u4EEC\u60F3\u8981\u7ED9 test \u547D\u4EE4\u6DFB\u52A0\u6CE8\u91CA\uFF0C\u6309\u5982\u4E0B\u65B9\u5F0F\u6DFB\u52A0</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">+</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;//&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;\u8FD0\u884C\u6240\u6709\u4EE3\u7801\u68C0\u67E5\u548C\u5355\u5143\u6D4B\u8BD5&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">     </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;test&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;npm-run-all --parallel lint:* mocha&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">//</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">\u8FD0\u884C\u6240\u6709\u4EE3\u7801\u68C0\u67E5\u548C\u5355\u5143\u6D4B\u8BD5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">     </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">test</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">npm-run-all --parallel lint:* mocha</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u7684\u660E\u663E\u4E0D\u8DB3\u662F\uFF0Cnpm run \u5217\u51FA\u6765\u7684\u547D\u4EE4\u5217\u8868\u4E0D\u80FD\u628A\u6CE8\u91CA\u548C\u5B9E\u9645\u547D\u4EE4\u5BF9\u5E94\u4E0A\uFF0C\u5982\u679C\u4F60\u58F0\u660E\u4E86\u591A\u4E2A\uFF0Cnpm run \u53EA\u4F1A\u5217\u51FA\u6700\u540E\u90A3\u4E2A\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><h3 id="\u7B2C\u4E8C\u79CD" tabindex="-1">\u7B2C\u4E8C\u79CD <a class="header-anchor" href="#\u7B2C\u4E8C\u79CD" aria-hidden="true">#</a></h3><p>\u76F4\u63A5\u5728 script \u58F0\u660E\u4E2D\u505A\u624B\u811A\uFF0C\u56E0\u4E3A\u547D\u4EE4\u7684\u672C\u8D28\u662F shell \u547D\u4EE4\uFF08\u9002\u7528\u4E8E linux \u5E73\u53F0\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u547D\u4EE4\u524D\u9762\u52A0\u4E0A\u6CE8\u91CA\uFF0C\u5177\u4F53\u505A\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;test&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;# \u8FD0\u884C\u6240\u6709\u4EE3\u7801\u68C0\u67E5\u548C\u5355\u5143\u6D4B\u8BD5 </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">\\n</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">    npm-run-all --parallel lint:* mocha&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">test</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"># \u8FD0\u884C\u6240\u6709\u4EE3\u7801\u68C0\u67E5\u548C\u5355\u5143\u6D4B\u8BD5 </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">\\n</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">    npm-run-all --parallel lint:* mocha</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\u6CE8\u91CA\u540E\u9762\u7684\u6362\u884C\u7B26 \\n \u548C\u591A\u4F59\u7684\u7A7A\u683C\uFF0C\u6362\u884C\u7B26\u662F\u7528\u4E8E\u5C06\u6CE8\u91CA\u548C\u547D\u4EE4\u5206\u9694\u5F00\uFF0C\u8FD9\u6837\u547D\u4EE4\u5C31\u76F8\u5F53\u4E8E\u5FAE\u578B\u7684 shell \u811A\u672C\uFF0C\u591A\u4F59\u7684\u7A7A\u683C\u662F\u4E3A\u4E86\u63A7\u5236\u7F29\u8FDB\uFF0C\u4E5F\u53EF\u4EE5\u7528\u5236\u8868\u7B26 \\t \u66FF\u4EE3\u3002\u8FD9\u79CD\u505A\u6CD5\u80FD\u8BA9 npm run \u5217\u51FA\u6765\u7684\u547D\u4EE4\u66F4\u7F8E\u89C2\uFF0C\u4F46\u662F scripts \u58F0\u660E\u9605\u8BFB\u8D77\u6765\u4E0D\u90A3\u4E48\u6574\u9F50\u7F8E\u89C2\u3002 <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/27/15ffa72c247900f5~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp" alt="\u56FE\u7247"></p><h2 id="\u8C03\u6574-npm-script-\u8FD0\u884C\u65F6\u65E5\u5FD7\u8F93\u51FA" tabindex="-1">\u8C03\u6574 npm script \u8FD0\u884C\u65F6\u65E5\u5FD7\u8F93\u51FA <a class="header-anchor" href="#\u8C03\u6574-npm-script-\u8FD0\u884C\u65F6\u65E5\u5FD7\u8F93\u51FA" aria-hidden="true">#</a></h2><p>\u5728\u8FD0\u884C npm script \u51FA\u73B0\u95EE\u9898\u65F6\u4F60\u9700\u8981\u6709\u80FD\u529B\u53BB\u8C03\u8BD5\u5B83\uFF0C\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4F60\u9700\u8981\u8BA9 npm script \u4EE5\u9759\u9ED8\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u8FD9\u7C7B\u9700\u6C42\u53EF\u901A\u8FC7\u63A7\u5236\u8FD0\u884C\u65F6\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B\u6765\u5B9E\u73B0\u3002</p><p>\u65E5\u5FD7\u7EA7\u522B\u63A7\u5236\u53C2\u6570\u6709\u597D\u51E0\u4E2A\uFF0C\u7B80\u5355\u4E3E\u4F8B\u5982\u4E0B\uFF1A</p><h3 id="\u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B" tabindex="-1">\u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B <a class="header-anchor" href="#\u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B" aria-hidden="true">#</a></h3><p>\u5373\u4E0D\u52A0\u4EFB\u4F55\u65E5\u5FD7\u63A7\u5236\u53C2\u6570\u5F97\u5230\u7684\u8F93\u51FA\uFF0C\u53EF\u80FD\u662F\u4F60\u6700\u5E38\u7528\u7684\uFF0C\u80FD\u770B\u5230\u6267\u884C\u7684\u547D\u4EE4\u3001\u547D\u4EE4\u6267\u884C\u7684\u7ED3\u679C\u3002</p><h3 id="\u663E\u793A\u5C3D\u53EF\u80FD\u5C11\u7684\u6709\u7528\u4FE1\u606F" tabindex="-1">\u663E\u793A\u5C3D\u53EF\u80FD\u5C11\u7684\u6709\u7528\u4FE1\u606F <a class="header-anchor" href="#\u663E\u793A\u5C3D\u53EF\u80FD\u5C11\u7684\u6709\u7528\u4FE1\u606F" aria-hidden="true">#</a></h3><p>\u7ED3\u5408\u5176\u4ED6\u5DE5\u5177\u8C03\u7528 npm script \u7684\u65F6\u5019\u6BD4\u8F83\u6709\u7528\uFF0C\u9700\u8981\u4F7F\u7528 --loglevel silent\uFF0C\u6216\u8005 --silent\uFF0C\u6216\u8005\u66F4\u7B80\u5355\u7684 -s \u6765\u63A7\u5236\uFF0C\u8FD9\u4E2A\u65E5\u5FD7\u7EA7\u522B\u7684\u8F93\u51FA\u5B9E\u4F8B\u5982\u4E0B\uFF08\u53EA\u6709\u547D\u4EE4\u672C\u8EAB\u7684\u8F93\u51FA\uFF0C\u8BFB\u8D77\u6765\u975E\u5E38\u7684\u7B80\u6D01\uFF09\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/27/15ffa73279c8a9e8~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp" alt="\u56FE\u7247"> \u5982\u679C\u6267\u884C\u5404\u79CD lint script \u7684\u65F6\u5019\u542F\u7528\u4E86 -s \u914D\u7F6E\uFF0C\u4EE3\u7801\u90FD\u7B26\u5408\u89C4\u8303\u7684\u8BDD\uFF0C\u4F60\u4E0D\u4F1A\u770B\u5230\u4EFB\u4F55\u8F93\u51FA\uFF0C\u8FD9\u5C31\u662F\u6CA1\u6709\u6D88\u606F\u662F\u6700\u597D\u7684\u6D88\u606F\u7684\u7531\u6765\uFF0C\u54C8\u54C8\uFF01</p><h3 id="\u663E\u793A\u5C3D\u53EF\u80FD\u591A\u7684\u8FD0\u884C\u65F6\u72B6\u6001" tabindex="-1">\u663E\u793A\u5C3D\u53EF\u80FD\u591A\u7684\u8FD0\u884C\u65F6\u72B6\u6001 <a class="header-anchor" href="#\u663E\u793A\u5C3D\u53EF\u80FD\u591A\u7684\u8FD0\u884C\u65F6\u72B6\u6001" aria-hidden="true">#</a></h3><p>\u6392\u67E5\u811A\u672C\u95EE\u9898\u7684\u65F6\u5019\u6BD4\u8F83\u6709\u7528\uFF0C\u9700\u8981\u4F7F\u7528 --loglevel verbose\uFF0C\u6216\u8005 --verbose\uFF0C\u6216\u8005\u66F4\u7B80\u5355\u7684 -d \u6765\u63A7\u5236\uFF0C\u8FD9\u4E2A\u65E5\u5FD7\u7EA7\u522B\u7684\u8F93\u51FA\u5B9E\u4F8B\u5982\u4E0B\uFF08\u8BE6\u7EC6\u6253\u5370\u51FA\u4E86\u6BCF\u4E2A\u6B65\u9AA4\u7684\u53C2\u6570\u3001\u8FD4\u56DE\u503C\uFF0C\u4E0B\u9762\u7684\u622A\u56FE\u53EA\u662F\u90E8\u5206\uFF09\uFF1A</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/npm/parameter-script/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};