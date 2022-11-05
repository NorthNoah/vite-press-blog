import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"http  vs https","description":"","frontmatter":{"createTime":"2022/10/26","tag":"HTTP"},"headers":[{"level":2,"title":"1.http \u548C https \u7684\u57FA\u672C\u6982\u5FF5","slug":"_1-http-\u548C-https-\u7684\u57FA\u672C\u6982\u5FF5","link":"#_1-http-\u548C-https-\u7684\u57FA\u672C\u6982\u5FF5","children":[]},{"level":2,"title":"2.http \u548C https \u7684\u533A\u522B\u53CA\u4F18\u7F3A\u70B9\uFF1F","slug":"_2-http-\u548C-https-\u7684\u533A\u522B\u53CA\u4F18\u7F3A\u70B9\uFF1F","link":"#_2-http-\u548C-https-\u7684\u533A\u522B\u53CA\u4F18\u7F3A\u70B9\uFF1F","children":[]},{"level":2,"title":"3.https \u534F\u8BAE\u7684\u5DE5\u4F5C\u539F\u7406","slug":"_3-https-\u534F\u8BAE\u7684\u5DE5\u4F5C\u539F\u7406","link":"#_3-https-\u534F\u8BAE\u7684\u5DE5\u4F5C\u539F\u7406","children":[{"level":3,"title":"\u5BA2\u6237\u7AEF\u5728\u4F7F\u7528 HTTPS \u65B9\u5F0F\u4E0E Web \u670D\u52A1\u5668\u901A\u4FE1\u65F6\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4","slug":"\u5BA2\u6237\u7AEF\u5728\u4F7F\u7528-https-\u65B9\u5F0F\u4E0E-web-\u670D\u52A1\u5668\u901A\u4FE1\u65F6\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4","link":"#\u5BA2\u6237\u7AEF\u5728\u4F7F\u7528-https-\u65B9\u5F0F\u4E0E-web-\u670D\u52A1\u5668\u901A\u4FE1\u65F6\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4","children":[]}]},{"level":2,"title":"\u533A\u522B","slug":"\u533A\u522B","link":"#\u533A\u522B","children":[]}],"relativePath":"basic-quality/http-https/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "basic-quality/http-https/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="http-vs-https" tabindex="-1">http vs https <a class="header-anchor" href="#http-vs-https" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="_1-http-\u548C-https-\u7684\u57FA\u672C\u6982\u5FF5" tabindex="-1">1.http \u548C https \u7684\u57FA\u672C\u6982\u5FF5 <a class="header-anchor" href="#_1-http-\u548C-https-\u7684\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a></h2><ul><li>http: \u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42\u548C\u5E94\u7B54\u7684\u6807\u51C6\uFF08TCP\uFF09\uFF0C\u7528\u4E8E\u4ECE WWW \u670D\u52A1\u5668\u4F20\u8F93\u8D85\u6587\u672C\u5230\u672C\u5730\u6D4F\u89C8\u5668\u7684\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\u3002</li><li>https:\u662F\u4EE5\u5B89\u5168\u4E3A\u76EE\u6807\u7684 HTTP \u901A\u9053\uFF0C\u5373 HTTP \u4E0B \u52A0\u5165 SSL \u5C42\u8FDB\u884C\u52A0\u5BC6\u3002\u5176\u4F5C\u7528\u662F\uFF1A\u5EFA\u7ACB\u4E00\u4E2A\u4FE1\u606F\u5B89\u5168\u901A\u9053\uFF0C\u6765\u786E\u4FDD\u6570\u636E\u7684\u4F20\u8F93\uFF0C\u786E\u4FDD\u7F51\u7AD9\u7684\u771F\u5B9E\u6027\u3002</li></ul><h2 id="_2-http-\u548C-https-\u7684\u533A\u522B\u53CA\u4F18\u7F3A\u70B9\uFF1F" tabindex="-1">2.http \u548C https \u7684\u533A\u522B\u53CA\u4F18\u7F3A\u70B9\uFF1F <a class="header-anchor" href="#_2-http-\u548C-https-\u7684\u533A\u522B\u53CA\u4F18\u7F3A\u70B9\uFF1F" aria-hidden="true">#</a></h2><ul><li>http \u662F\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u4FE1\u606F\u662F\u660E\u6587\u4F20\u8F93\uFF0CHTTPS \u534F\u8BAE\u8981\u6BD4 http \u534F\u8BAE\u5B89\u5168\uFF0Chttps \u662F\u5177\u6709\u5B89\u5168\u6027\u7684 ssl \u52A0\u5BC6\u4F20\u8F93\u534F\u8BAE\uFF0C\u53EF\u9632\u6B62\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u88AB\u7A83\u53D6\u3001\u6539\u53D8\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u5B8C\u6574\u6027(\u5F53\u7136\u8FD9\u79CD\u5B89\u5168\u6027\u5E76\u975E\u7EDD\u5BF9\u7684\uFF0C\u5BF9\u4E8E\u66F4\u6DF1\u5165\u7684 Web \u5B89\u5168\u95EE\u9898\uFF0C\u6B64\u5904\u6682\u4E14\u4E0D\u8868)\u3002</li><li>http \u534F\u8BAE\u7684\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 80\uFF0Chttps \u7684\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 443\u3002</li><li>http \u7684\u8FDE\u63A5\u5F88\u7B80\u5355\uFF0C\u662F\u65E0\u72B6\u6001\u7684\u3002https \u63E1\u624B\u9636\u6BB5\u6BD4\u8F83\u8D39\u65F6\uFF0C\u4F1A\u4F7F\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\u5EF6\u957F 50%\uFF0C\u589E\u52A0 10%~20%\u7684\u8017\u7535\u3002</li><li>https \u7F13\u5B58\u4E0D\u5982 http \u9AD8\u6548\uFF0C\u4F1A\u589E\u52A0\u6570\u636E\u5F00\u9500\u3002</li><li>Https \u534F\u8BAE\u9700\u8981 ca \u8BC1\u4E66\uFF0C\u8D39\u7528\u8F83\u9AD8\uFF0C\u529F\u80FD\u8D8A\u5F3A\u5927\u7684\u8BC1\u4E66\u8D39\u7528\u8D8A\u9AD8\u3002</li><li>SSL \u8BC1\u4E66\u9700\u8981\u7ED1\u5B9A IP\uFF0C\u4E0D\u80FD\u518D\u540C\u4E00\u4E2A IP \u4E0A\u7ED1\u5B9A\u591A\u4E2A\u57DF\u540D\uFF0CIPV4 \u8D44\u6E90\u652F\u6301\u4E0D\u4E86\u8FD9\u79CD\u6D88\u8017\u3002</li></ul><h2 id="_3-https-\u534F\u8BAE\u7684\u5DE5\u4F5C\u539F\u7406" tabindex="-1">3.https \u534F\u8BAE\u7684\u5DE5\u4F5C\u539F\u7406 <a class="header-anchor" href="#_3-https-\u534F\u8BAE\u7684\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a></h2><h3 id="\u5BA2\u6237\u7AEF\u5728\u4F7F\u7528-https-\u65B9\u5F0F\u4E0E-web-\u670D\u52A1\u5668\u901A\u4FE1\u65F6\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4" tabindex="-1">\u5BA2\u6237\u7AEF\u5728\u4F7F\u7528 HTTPS \u65B9\u5F0F\u4E0E Web \u670D\u52A1\u5668\u901A\u4FE1\u65F6\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4 <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u5728\u4F7F\u7528-https-\u65B9\u5F0F\u4E0E-web-\u670D\u52A1\u5668\u901A\u4FE1\u65F6\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4" aria-hidden="true">#</a></h3><ul><li>\u5BA2\u6237\u7AEF\u4F7F\u7528 https url \u8BBF\u95EE\u670D\u52A1\u5668\uFF0C\u5219\u8981\u6C42 web \u670D\u52A1\u5668\u5EFA\u7ACB ssl \u94FE\u63A5\u3002</li><li>web \u670D\u52A1\u5668\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u4E4B\u540E\uFF0C\u4F1A\u5C06\u7F51\u7AD9\u7684\u8BC1\u4E66\uFF08\u8BC1\u4E66\u4E2D\u5305\u542B\u4E86\u516C\u94A5\uFF09\uFF0C\u4F20\u8F93\u7ED9\u5BA2\u6237\u7AEF\u3002</li><li>\u5BA2\u6237\u7AEF\u548C web \u670D\u52A1\u5668\u7AEF\u5F00\u59CB\u534F\u5546 SSL \u94FE\u63A5\u7684\u5B89\u5168\u7B49\u7EA7\uFF0C\u4E5F\u5C31\u662F\u52A0\u5BC6\u7B49\u7EA7\u3002</li><li>\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u901A\u8FC7\u53CC\u65B9\u534F\u5546\u4E00\u81F4\u7684\u5B89\u5168\u7B49\u7EA7\uFF0C\u5EFA\u7ACB\u4F1A\u8BDD\u5BC6\u94A5\uFF0C\u7136\u540E\u901A\u8FC7\u7F51\u7AD9\u7684\u516C\u94A5\u6765\u52A0\u5BC6\u4F1A\u8BDD\u5BC6\u94A5\uFF0C\u5E76\u4F20\u9001\u7ED9\u7F51\u7AD9\u3002</li><li>web \u670D\u52A1\u5668\u901A\u8FC7\u81EA\u5DF1\u7684\u79C1\u94A5\u89E3\u5BC6\u51FA\u4F1A\u8BDD\u5BC6\u94A5\u3002</li><li>web \u670D\u52A1\u5668\u901A\u8FC7\u4F1A\u8BDD\u5BC6\u94A5\u52A0\u5BC6\u4E0E\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u901A\u4FE1\u3002</li></ul><h2 id="\u533A\u522B" tabindex="-1">\u533A\u522B <a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a></h2><ul><li>https\u534F\u8BAE\u9700\u8981\u5230ca\u7533\u8BF7\u8BC1\u4E66\uFF0C\u4E00\u822C\u514D\u8D39\u8BC1\u4E66\u8F83\u5C11\uFF0C\u56E0\u800C\u9700\u8981\u4E00\u5B9A\u8D39\u7528\u3002</li><li>http\u662F\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u4FE1\u606F\u662F\u660E\u6587\u4F20\u8F93\uFF0Chttps\u5219\u662F\u5177\u6709\u5B89\u5168\u6027\u7684ssl\u52A0\u5BC6\u4F20\u8F93\u534F\u8BAE\u3002</li><li>http\u548Chttps\u4F7F\u7528\u7684\u662F\u5B8C\u5168\u4E0D\u540C\u7684\u8FDE\u63A5\u65B9\u5F0F\uFF0C\u7528\u7684\u7AEF\u53E3\u4E5F\u4E0D\u4E00\u6837\uFF0C\u524D\u8005\u662F80\uFF0C\u540E\u8005\u662F443\u3002</li><li>http\u7684\u8FDE\u63A5\u5F88\u7B80\u5355\uFF0C\u662F\u65E0\u72B6\u6001\u7684\uFF1BHTTPS\u534F\u8BAE\u662F\u7531SSL+HTTP\u534F\u8BAE\u6784\u5EFA\u7684\u53EF\u8FDB\u884C\u52A0\u5BC6\u4F20\u8F93\u3001\u8EAB\u4EFD\u8BA4\u8BC1\u7684\u7F51\u7EDC\u534F\u8BAE\uFF0C\u6BD4http\u534F\u8BAE\u5B89\u5168\u3002</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("basic-quality/http-https/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};