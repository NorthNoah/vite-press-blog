import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const _imports_0 = "/vite-press/assets/rpx.386475c7.webp";
const _imports_1 = "/vite-press/assets/setCssToHead.011cb8c3.png";
const __pageData = JSON.parse('{"title":"\u5C0F\u7A0B\u5E8F\u9762\u8BD5\u9898","description":"","frontmatter":{"createTime":"2022/10/09","tag":"westore"},"headers":[{"level":2,"title":"\u5C0F\u7A0B\u5E8F\u662F\u53CC\u7EBF\u7A0B\u67B6\u6784\u8FD8\u662F\u5355\u7EBF\u7A0B\u67B6\u6784\uFF1F","slug":"\u5C0F\u7A0B\u5E8F\u662F\u53CC\u7EBF\u7A0B\u67B6\u6784\u8FD8\u662F\u5355\u7EBF\u7A0B\u67B6\u6784\uFF1F","link":"#\u5C0F\u7A0B\u5E8F\u662F\u53CC\u7EBF\u7A0B\u67B6\u6784\u8FD8\u662F\u5355\u7EBF\u7A0B\u67B6\u6784\uFF1F","children":[]},{"level":2,"title":"\u5C0F\u7A0B\u5E8F\u4E2D \u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728 onLaunch \u91CC\u9762\u963B\u6B62\u9875\u9762\u663E\u793A \u8FBE\u5230\u6709\u5FC5\u987B\u8981\u6700\u5148\u8BF7\u6C42\u7684 \u63A5\u53E3\u54CD\u5E94 \u5728\u5C55\u793A \u5C0F\u7A0B\u5E8F\u9875\u9762","slug":"\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728-onlaunch-\u91CC\u9762\u963B\u6B62\u9875\u9762\u663E\u793A-\u8FBE\u5230\u6709\u5FC5\u987B\u8981\u6700\u5148\u8BF7\u6C42\u7684-\u63A5\u53E3\u54CD\u5E94-\u5728\u5C55\u793A-\u5C0F\u7A0B\u5E8F\u9875\u9762","link":"#\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728-onlaunch-\u91CC\u9762\u963B\u6B62\u9875\u9762\u663E\u793A-\u8FBE\u5230\u6709\u5FC5\u987B\u8981\u6700\u5148\u8BF7\u6C42\u7684-\u63A5\u53E3\u54CD\u5E94-\u5728\u5C55\u793A-\u5C0F\u7A0B\u5E8F\u9875\u9762","children":[{"level":3,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]}]},{"level":2,"title":"\u5C0F\u7A0B\u5E8F view text \u5230\u5E95\u662F\u4EC0\u4E48 \uFF1F \u53C8\u662F\u5982\u4F55\u5B9E\u73B0\u7684 \uFF1F","slug":"\u5C0F\u7A0B\u5E8F-view-text-\u5230\u5E95\u662F\u4EC0\u4E48-\uFF1F-\u53C8\u662F\u5982\u4F55\u5B9E\u73B0\u7684-\uFF1F","link":"#\u5C0F\u7A0B\u5E8F-view-text-\u5230\u5E95\u662F\u4EC0\u4E48-\uFF1F-\u53C8\u662F\u5982\u4F55\u5B9E\u73B0\u7684-\uFF1F","children":[]},{"level":2,"title":"\u5C0F\u7A0B\u5E8F\u4E2D \u4E3A\u4EC0\u4E48\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C dom \u8282\u70B9\uFF1F","slug":"\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C-dom-\u8282\u70B9\uFF1F","link":"#\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C-dom-\u8282\u70B9\uFF1F","children":[]},{"level":2,"title":"\u5C0F\u7A0B\u5E8F \u662F\u5355\u9875\u9762\u5E94\u7528\u8FD8\u662F\u591A\u9875\u9762\u5E94\u7528 \uFF1F  \u4E3A\u4EC0\u4E48 \uFF1F","slug":"\u5C0F\u7A0B\u5E8F-\u662F\u5355\u9875\u9762\u5E94\u7528\u8FD8\u662F\u591A\u9875\u9762\u5E94\u7528-\uFF1F-\u4E3A\u4EC0\u4E48-\uFF1F","link":"#\u5C0F\u7A0B\u5E8F-\u662F\u5355\u9875\u9762\u5E94\u7528\u8FD8\u662F\u591A\u9875\u9762\u5E94\u7528-\uFF1F-\u4E3A\u4EC0\u4E48-\uFF1F","children":[]},{"level":2,"title":"\u5C0F\u7A0B\u5E8F\u4E2D \u4E3A\u4EC0\u4E48\u9650\u5236\u4E86 \u9875\u9762\u6808 \u6700\u591A\u6570\u91CF\uFF1F","slug":"\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u9650\u5236\u4E86-\u9875\u9762\u6808-\u6700\u591A\u6570\u91CF\uFF1F","link":"#\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u9650\u5236\u4E86-\u9875\u9762\u6808-\u6700\u591A\u6570\u91CF\uFF1F","children":[]},{"level":2,"title":"\u5C0F\u7A0B\u5E8F\u4E2D \u662F\u600E\u4E48\u5B9E\u73B0 \u81EA\u9002\u5E94 rpx  \uFF1F","slug":"\u5C0F\u7A0B\u5E8F\u4E2D-\u662F\u600E\u4E48\u5B9E\u73B0-\u81EA\u9002\u5E94-rpx-\uFF1F","link":"#\u5C0F\u7A0B\u5E8F\u4E2D-\u662F\u600E\u4E48\u5B9E\u73B0-\u81EA\u9002\u5E94-rpx-\uFF1F","children":[{"level":3,"title":"\u7F16\u8BD1","slug":"\u7F16\u8BD1","link":"#\u7F16\u8BD1","children":[]},{"level":3,"title":"WCSC","slug":"wcsc","link":"#wcsc","children":[]},{"level":3,"title":"\u4E09\u90E8\u5206","slug":"\u4E09\u90E8\u5206","link":"#\u4E09\u90E8\u5206","children":[]},{"level":3,"title":"\u7B2C\u4E09\u90E8\u5206\uFF1AsetCssToHead","slug":"\u7B2C\u4E09\u90E8\u5206\uFF1Asetcsstohead","link":"#\u7B2C\u4E09\u90E8\u5206\uFF1Asetcsstohead","children":[]}]},{"level":2,"title":"\u5C0F\u7A0B\u5E8F \u5206\u522B\u6709 \u54EA\u4E09\u79CD \u6846\u67B6 \uFF1F","slug":"\u5C0F\u7A0B\u5E8F-\u5206\u522B\u6709-\u54EA\u4E09\u79CD-\u6846\u67B6-\uFF1F","link":"#\u5C0F\u7A0B\u5E8F-\u5206\u522B\u6709-\u54EA\u4E09\u79CD-\u6846\u67B6-\uFF1F","children":[{"level":3,"title":"\u9884\u7F16\u8BD1","slug":"\u9884\u7F16\u8BD1","link":"#\u9884\u7F16\u8BD1","children":[]},{"level":3,"title":"\u534A\u7F16\u8BD1 \u534A\u8FD0\u884C","slug":"\u534A\u7F16\u8BD1-\u534A\u8FD0\u884C","link":"#\u534A\u7F16\u8BD1-\u534A\u8FD0\u884C","children":[]},{"level":3,"title":"\u8FD0\u884C\u65F6\u6846\u67B6","slug":"\u8FD0\u884C\u65F6\u6846\u67B6","link":"#\u8FD0\u884C\u65F6\u6846\u67B6","children":[]}]}],"relativePath":"interview-questions/westore/principle/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "interview-questions/westore/principle/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u5C0F\u7A0B\u5E8F\u9762\u8BD5\u9898" tabindex="-1">\u5C0F\u7A0B\u5E8F\u9762\u8BD5\u9898 <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u9762\u8BD5\u9898" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="\u5C0F\u7A0B\u5E8F\u662F\u53CC\u7EBF\u7A0B\u67B6\u6784\u8FD8\u662F\u5355\u7EBF\u7A0B\u67B6\u6784\uFF1F" tabindex="-1">\u5C0F\u7A0B\u5E8F\u662F\u53CC\u7EBF\u7A0B\u67B6\u6784\u8FD8\u662F\u5355\u7EBF\u7A0B\u67B6\u6784\uFF1F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u662F\u53CC\u7EBF\u7A0B\u67B6\u6784\u8FD8\u662F\u5355\u7EBF\u7A0B\u67B6\u6784\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u5C0F\u7A0B\u5E8F\u7684\u67B6\u6784\u6A21\u578B\u6709\u522B\u4E0E\u4F20\u7EDFweb\u5355\u7EBF\u7A0B\u67B6\u6784\uFF0C\u5C0F\u7A0B\u5E8F\u4E3A\u53CC\u7EBF\u7A0B\u67B6\u6784\u3002</li><li>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u6E32\u67D3\u5C42\u4E0E\u903B\u8F91\u5C42\u5206\u522B\u7531\u4E24\u4E2A\u7EBF\u7A0B\u7BA1\u7406\uFF0C\u6E32\u67D3\u5C42\u7684\u754C\u9762\u4F7F\u7528 webview \u8FDB\u884C\u6E32\u67D3\uFF1B\u903B\u8F91\u5C42\u91C7\u7528 JSCore\u8FD0\u884CJavaScript\u4EE3\u7801 <ol><li>\u7531\u4E8E\u6E32\u67D3\u5C42\u4E0E\u903B\u8F91\u5C42\u5206\u5F00\uFF0C\u4E00\u4E2A\u5C0F\u7A0B\u5E8F\u6709\u591A\u4E2A\u754C\u9762\uFF0C\u6240\u4EE5\u6E32\u67D3\u5C42\u5BF9\u5E94\u5B58\u5728\u591A\u4E2Awebview\u3002</li><li>\u8FD9\u4E24\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u7531Native\u5C42\u8FDB\u884C\u7EDF\u4E00\u5904\u7406\u3002\u65E0\u8BBA\u662F\u7EBF\u7A0B\u4E4B\u95F4\u7684\u901A\u8BAF\u3001\u6570\u636E\u7684\u4F20\u9012\u3001\u7F51\u7EDC\u8BF7\u6C42\u90FD\u7531Native\u5C42\u505A\u8F6C\u53D1\u3002</li></ol></li><li>\u8FD9\u91CC\u7684webview\u662F\u4EC0\u4E48\u5462 <ol><li>\u53EF\u4EE5\u60F3\u8C61webview\u662F\u4E00\u4E2A\u5D4C\u5165\u5F0F\u7684\u6D4F\u89C8\u5668\uFF0C\u662F\u5D4C\u5165\u5728\u539F\u751F\u5E94\u7528\u4E2D\u7684</li><li>webview \u7528\u6765\u5C55\u793A\u7F51\u9875\u7684 view \u7EC4\u4EF6\uFF0C\u4F7F\u7528 webkit \u6E32\u67D3\u5F15\u64CE\u6765\u5C55\u793A\uFF0C\u5E76\u4E14\u652F\u6301\u524D\u8FDB\u540E\u9000\u3001\u6D4F\u89C8\u5386\u53F2\u3001\u653E\u5927\u7F29\u5C0F\u3001\u7B49\u66F4\u591A\u529F\u80FD\u3002</li></ol></li><li>\u5E76\u4E14\u5C0F\u7A0B\u5E8F \u4F1A\u6709 \u591A\u4E2A webview <ol><li>\u4E3A\u4E86\u66F4\u52A0\u63A5\u8FD1\u539F\u751F\u5E94\u7528APP\u7684\u7528\u6237\u4F53\u9A8C\u3002\u591A\u4E2Awebview\u53EF\u4EE5\u7406\u89E3\u4E3A\u591A\u9875\u9762\u5E94\u7528\uFF0C\u6709\u522B\u4E8E\u5355\u9875\u9762\u5E94\u7528SPA\uFF0CSPA\u6E32\u67D3\u9875\u9762\u662F\u901A\u8FC7\u8DEF\u7531\u8BC6\u522B\u968F\u540E\u52A8\u6001\u5C06\u9875\u9762\u6302\u8F7D\u5230root\u8282\u70B9\u4E2D\u53BB</li><li>\u5982\u679C\u5355\u9875\u9762\u5E94\u7528\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u9875\u9762\uFF0C\u9700\u8981\u5148\u5378\u8F7D\u6389\u5F53\u524D\u9875\u9762\u7ED3\u6784\uFF0C\u5E76\u4E14\u91CD\u65B0\u6E32\u67D3\u3002\u5F88\u663E\u7136\u539F\u751FAPP\u5E76\u4E0D\u662F\u8FD9\u4E2A\u6837\u5B50\uFF0C\u6BD4\u8F83\u660E\u663E\u7684\u7279\u5F81\u4E3A\u4ECE\u9875\u9762\u53F3\u4FA7\u5411\u5DE6\u5212\u5165\u4E00\u4E2A\u65B0\u7684\u9875\u9762\uFF0C\u5E76\u4E14\u6211\u4EEC\u53EF\u4EE5\u540C\u65F6\u770B\u5230\u4E24\u4E2A\u9875\u9762\u3002</li></ol></li><li>Native \u4E3B\u8981\u505A\u4E86\u4EC0\u4E48 <ol><li>Native\u5C42\u9664\u4E86\u505A\u4E00\u4E9B\u8D44\u6E90\u7684\u52A8\u6001\u6CE8\u5165\uFF0C\u8FD8\u8D1F\u8D23\u7740\u5F88\u591A\u7684\u4E8B\u60C5\uFF0C\u8BF7\u6C42\u7684\u8F6C\u53D1\uFF0C\u79BB\u7EBF\u5B58\u50A8\uFF0C\u7EC4\u4EF6\u6E32\u67D3\u7B49\u7B49\u3002</li><li>\u754C\u9762\u4E3B\u8981\u7531\u6210\u719F\u7684 Web \u6280\u672F\u6E32\u67D3\uFF0C\u8F85\u4E4B\u4EE5\u5927\u91CF\u7684\u63A5\u53E3\u63D0\u4F9B\u4E30\u5BCC\u7684\u5BA2\u6237\u7AEF\u539F\u751F\u80FD\u529B\u3002</li></ol></li></ol><h2 id="\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728-onlaunch-\u91CC\u9762\u963B\u6B62\u9875\u9762\u663E\u793A-\u8FBE\u5230\u6709\u5FC5\u987B\u8981\u6700\u5148\u8BF7\u6C42\u7684-\u63A5\u53E3\u54CD\u5E94-\u5728\u5C55\u793A-\u5C0F\u7A0B\u5E8F\u9875\u9762" tabindex="-1">\u5C0F\u7A0B\u5E8F\u4E2D \u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728 onLaunch \u91CC\u9762\u963B\u6B62\u9875\u9762\u663E\u793A \u8FBE\u5230\u6709\u5FC5\u987B\u8981\u6700\u5148\u8BF7\u6C42\u7684 \u63A5\u53E3\u54CD\u5E94 \u5728\u5C55\u793A \u5C0F\u7A0B\u5E8F\u9875\u9762 <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u5728-onlaunch-\u91CC\u9762\u963B\u6B62\u9875\u9762\u663E\u793A-\u8FBE\u5230\u6709\u5FC5\u987B\u8981\u6700\u5148\u8BF7\u6C42\u7684-\u63A5\u53E3\u54CD\u5E94-\u5728\u5C55\u793A-\u5C0F\u7A0B\u5E8F\u9875\u9762" aria-hidden="true">#</a></h2><ol><li>\u56E0\u4E3A\u5C0F\u7A0B\u5E8F\u662F\u53CC\u7EBF\u7A0B\u67B6\u6784</li><li>\u4E00\u4E2A\u7EBF\u7A0B\u89E3\u6790 \u8FD0\u884C js</li><li>\u4E00\u4E2A\u7EBF\u7A0B\u7528\u6765\u6E32\u67D3 webview</li><li>\u6240\u4EE5\u4E0D\u50CF web \u7AEF\u7B49 \u5355\u7EBF\u7A0B \u67B6\u6784 js\u4EE3\u7801\u65E0\u6CD5\u963B\u585E webview \u7684\u5C55\u793A</li></ol><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h3><ol><li>\u901A\u8FC7\u81EA\u5B9A\u4E49 tab-bar nav-bar \u8FD8\u6709\u4E00\u4E2A\u6BCF\u4E2A\u9875\u9762\u90FD\u5728\u4F7F\u7528\u7684 \u516C\u5171\u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0</li><li>\u7EDF\u4E00\u901A\u8FC7 \u53D8\u91CF\u6240\u6709\u7EC4\u4EF6\u9ED8\u8BA4\u9690\u85CF</li><li>\u7B49\u5230\u63A5\u53E3\u56DE\u6765\u518D\u53BB\u4FEE\u6539\u8FD9\u4E2A\u7EDF\u4E00\u53D8\u91CF</li><li>\u6CE8\u610F\u8FB9\u754C \u548C\u5BB9\u9519\u5904\u7406 \u4E0D\u8981\u56E0\u4E3A\u63A5\u53E3\u62A5\u9519\u5BFC\u81F4\u9875\u9762\u4E00\u76F4\u7A7A\u767D</li></ol><h2 id="\u5C0F\u7A0B\u5E8F-view-text-\u5230\u5E95\u662F\u4EC0\u4E48-\uFF1F-\u53C8\u662F\u5982\u4F55\u5B9E\u73B0\u7684-\uFF1F" tabindex="-1">\u5C0F\u7A0B\u5E8F view text \u5230\u5E95\u662F\u4EC0\u4E48 \uFF1F \u53C8\u662F\u5982\u4F55\u5B9E\u73B0\u7684 \uFF1F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F-view-text-\u5230\u5E95\u662F\u4EC0\u4E48-\uFF1F-\u53C8\u662F\u5982\u4F55\u5B9E\u73B0\u7684-\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u5C0F\u7A0B\u5E8F \u7684 view text \u6807\u7B7E\u662F\u901A\u8FC7 \u6E32\u67D3\u5C42\u4E2D\u7F16\u8BD1\u540E\u7684 Exparser \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6807\u8BB0</li><li>\u4F1A\u901A\u8FC7 $gwx() \u51FD\u6570 \u7ED3\u5408\u4E00\u4E9B\u6587\u4EF6\u8DEF\u5F84 \u52A8\u6001\u6570\u636E\u751F\u6210 virtualDOM \u865A\u62DFdom</li><li>text \u751F\u6210 virtualDOM \u7684 tag \u5C31\u662F wx-text</li><li>view \u751F\u6210 virtualDOM \u7684 tag \u5C31\u662F wx-view</li></ol><h2 id="\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C-dom-\u8282\u70B9\uFF1F" tabindex="-1">\u5C0F\u7A0B\u5E8F\u4E2D \u4E3A\u4EC0\u4E48\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C dom \u8282\u70B9\uFF1F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C-dom-\u8282\u70B9\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u4E3A\u4E86\u89E3\u51B3\u5B89\u5168\u7BA1\u63A7\u95EE\u9898\uFF0C\u5C0F\u7A0B\u5E8F\u963B\u6B62\u5F00\u53D1\u8005\u4F7F\u7528\u4E00\u4E9B\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u6BD4\u5982\u8DF3\u8F6C\u9875\u9762\u3001\u64CD\u4F5CDOM\u3001\u52A8\u6001\u6267\u884C\u811A\u672C\u7684\u5F00\u653E\u6027\u63A5\u53E3\u3002</li><li>\u5982\u679C\u8FD9\u4E9B\u4E1C\u897F\u4E00\u4E2A\u4E00\u4E2A\u5730\u53BB\u7981\u7528\uFF0C\u90A3\u4E48\u52BF\u5FC5\u4F1A\u8FDB\u5165\u4E00\u4E2A\u7CDF\u7CD5\u7684\u5FAA\u73AF\uFF0C\u56E0\u4E3Ajavascript\u5B9E\u5728\u662F\u592A\u7075\u6D3B\u4E86\uFF0C\u6D4F\u89C8\u5668\u7684\u63A5\u53E3\u4E5F\u592A\u4E30\u5BCC\u4E86\uFF0C\u5F88\u5BB9\u6613\u5C31\u9057\u6F0F\u4E00\u4E9B\u5371\u9669\u7684\u63A5\u53E3\uFF0C\u800C\u4E14\u5C31\u7B97\u662F\u7981\u7528\u6389\u4E86\u6240\u6709\u611F\u89C9\u5230\u5371\u9669\u7684\u63A5\u53E3\uFF0C\u4E5F\u52BF\u5FC5\u9632\u4E0D\u4F4F\u6D4F\u89C8\u5668\u5185\u6838\u7684\u4E0B\u6B21\u66F4\u65B0\u3002\u6307\u4E0D\u5B9A\u53C8\u4F1A\u51FA\u73B0\u4E00\u4E9B\u6F0F\u6D1E\u3002</li><li>\u8981\u5F7B\u5E95\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5FC5\u987B\u63D0\u4F9B\u4E00\u4E2A\u6C99\u7BB1\u73AF\u5883\u6765\u8FD0\u884C\u5F00\u53D1\u8005\u7684JavaScript \u4EE3\u7801\u3002\u8FD9\u4E2A\u6C99\u7BB1\u73AF\u5883\u4E0D\u80FD\u6709\u4EFB\u4F55\u6D4F\u89C8\u5668\u76F8\u5173\u63A5\u53E3\uFF0C\u53EA\u63D0\u4F9B\u7EAFJavaScript \u7684\u89E3\u91CA\u6267\u884C\u73AF\u5883</li><li>\u90A3\u4E48\u50CFHTML5\u4E2D\u7684ServiceWorker\u3001WebWorker\u7279\u6027\u5C31\u7B26\u5408\u8FD9\u6837\u7684\u6761\u4EF6\uFF0C\u8FD9\u4E24\u8005\u90FD\u662F\u542F\u7528\u53E6\u4E00\u7EBF\u7A0B\u6765\u6267\u884C javaScript\u3002</li><li>\u8003\u8651\u5230\u5C0F\u7A0B\u5E8F\u662F\u4E00\u4E2A\u591A webView \u7684\u67B6\u6784\uFF0C\u6BCF\u4E00\u4E2A\u5C0F\u7A0B\u5E8F\u9875\u9762\u90FD\u662F\u4E0D\u540C\u7684webView \u6E32\u67D3\u540E\u663E\u793A\u7684\uFF0C\u5728\u8FD9\u4E2A\u67B6\u6784\u4E0B\u4E0D\u597D\u53BB\u7528\u67D0\u4E2AwebView\u4E2D\u7684ServiceWorker\u53BB\u7BA1\u7406\u6240\u6709\u7684\u5C0F\u7A0B\u5E8F\u9875\u9762\u3002</li><li>\u5F97\u76CA\u4E8E\u5BA2\u6237\u7AEF\u7CFB\u7EDF\u6709javaScript \u7684\u89E3\u91CA\u5F15\u64CE\uFF08\u5728iOS\u4E0B\u4F7F\u7528\u5185\u7F6E\u7684 javaScriptCore\u6846\u67B6\uFF0C\u5728\u5B89\u5353\u5219\u662F\u7528\u817E\u8BAFx5\u5185\u6838\u63D0\u4F9B\u7684JsCore\u73AF\u5883\uFF09\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5355\u72EC\u7684\u7EBF\u7A0B\u53BB\u6267\u884C javaScript\uFF0C\u5728\u8FD9\u4E2A\u73AF\u5883\u4E0B\u6267\u884C\u7684\u90FD\u662F\u6709\u5173\u5C0F\u7A0B\u5E8F\u4E1A\u52A1\u903B\u8F91\u7684\u4EE3\u7801</li></ol><h2 id="\u5C0F\u7A0B\u5E8F-\u662F\u5355\u9875\u9762\u5E94\u7528\u8FD8\u662F\u591A\u9875\u9762\u5E94\u7528-\uFF1F-\u4E3A\u4EC0\u4E48-\uFF1F" tabindex="-1">\u5C0F\u7A0B\u5E8F \u662F\u5355\u9875\u9762\u5E94\u7528\u8FD8\u662F\u591A\u9875\u9762\u5E94\u7528 \uFF1F \u4E3A\u4EC0\u4E48 \uFF1F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F-\u662F\u5355\u9875\u9762\u5E94\u7528\u8FD8\u662F\u591A\u9875\u9762\u5E94\u7528-\uFF1F-\u4E3A\u4EC0\u4E48-\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u591A\u9875\u9762\u5E94\u7528 \u4E3A\u4E86\u66F4\u597D\u7684\u8BA9\u4EA4\u4E92\u548C\u539F\u751F app \u4E00\u6837</li><li>\u5DE6\u53F3\u6ED1\u52A8\u7684\u540C\u65F6 \u7528\u6237\u53EF\u4EE5\u540C\u65F6\u770B\u5230 \u4E24\u4E2A\u9875\u9762</li></ol><h2 id="\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u9650\u5236\u4E86-\u9875\u9762\u6808-\u6700\u591A\u6570\u91CF\uFF1F" tabindex="-1">\u5C0F\u7A0B\u5E8F\u4E2D \u4E3A\u4EC0\u4E48\u9650\u5236\u4E86 \u9875\u9762\u6808 \u6700\u591A\u6570\u91CF\uFF1F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u4E2D-\u4E3A\u4EC0\u4E48\u9650\u5236\u4E86-\u9875\u9762\u6808-\u6700\u591A\u6570\u91CF\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u56E0\u4E3A\u5C0F\u7A0B\u5E8F\u662F\u591A\u9875\u9762\u67B6\u6784\u8BBE\u8BA1 \u4E3A\u4E86\u66F4\u597D\u7684\u8BA9\u4EA4\u4E92\u548C\u539F\u751F app \u4E00\u6837</li><li>\u5982\u679C\u4E0D\u9650\u5236 \u9875\u9762\u6808 \u6570\u91CF \u5C31\u4F1A\u5BFC\u81F4\u6027\u80FD\u95EE\u9898 \u6240\u4EE5\u9650\u5236\u4E86 \u6700\u5927\u9875\u9762\u6808\u6570\u91CF \u9632\u6B62\u4EA7\u751F\u8FC7\u591A\u7684 webview</li></ol><h2 id="\u5C0F\u7A0B\u5E8F\u4E2D-\u662F\u600E\u4E48\u5B9E\u73B0-\u81EA\u9002\u5E94-rpx-\uFF1F" tabindex="-1">\u5C0F\u7A0B\u5E8F\u4E2D \u662F\u600E\u4E48\u5B9E\u73B0 \u81EA\u9002\u5E94 rpx \uFF1F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u4E2D-\u662F\u600E\u4E48\u5B9E\u73B0-\u81EA\u9002\u5E94-rpx-\uFF1F" aria-hidden="true">#</a></h2><p>rpx \uFF08responsive pixel\uFF09\u76F4\u8BD1\u4E3A\uFF1A\u54CD\u5E94\u50CF\u7D20\u3002\u5199\u8FC7\u5C0F\u7A0B\u5E8F\u7684\u90FD\u77E5\u9053\u8FD9\u4E2A\u5355\u4F4D\uFF0C\u53EF\u4EE5\u81EA\u52A8\u9002\u914D\u6240\u6709\u5927\u5C0F\u7684\u5C4F\u5E55\uFF0C\u800C\u4E0D\u5FC5\u4F7F\u7528\u4E00\u4E9B\u7B2C\u4E09\u65B9\u63D2\u4EF6\u8FDB\u884C\u54CD\u5E94\u5F0F\u5E03\u5C40\u3002</p><h3 id="\u7F16\u8BD1" tabindex="-1">\u7F16\u8BD1 <a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a></h3><p>WXSS\u5E76\u4E0D\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\u5728webview\u5C42\u8FDB\u884C\u6E32\u67D3\uFF0C\u800C\u662F\u901A\u8FC7\u4E86\u4E00\u5C42\u7F16\u8BD1\u3002\u6211\u4EEC\u63A5\u4E0B\u6765\u5C31\u5E26\u5927\u5BB6\u7F16\u8BD1\u4E00\u4E2AWXSS\u770B\u4E00\u4E0B\u3002 <img${ssrRenderAttr("src", _imports_0)} alt="\u56FE\u7247"></p><h3 id="wcsc" tabindex="-1">WCSC <a class="header-anchor" href="#wcsc" aria-hidden="true">#</a></h3><p>\u7F16\u8BD1\u7684\u5DE5\u5177\u540D\u5B57\u53EBWCSC\uFF0C\u8FD9\u4E2A\u7F16\u8BD1\u7684\u8FC7\u7A0B\u662F\u5728\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u7AEF\u6267\u884C\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7F16\u8BD1\u5DE5\u5177\u5728\u54EA\u5462\uFF0C\u6211\u4EEC\u6765\u627E\u4E00\u4E0B\u3002\u5728\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u7684\u63A7\u5236\u53F0\u754C\u9762\uFF0C\u8F93\u5165help()\u547D\u4EE4\u53EF\u89C1\u5982\u6240\u793A\u754C\u9762\u3002 index.wxss\u6587\u4EF6\u4F1A\u5148\u901A\u8FC7WCSC\u53EF\u6267\u884C\u7A0B\u5E8F\u6587\u4EF6\u7F16\u8BD1\u6210js\u6587\u4EF6\u3002\u5E76\u4E0D\u662F\u76F4\u63A5\u7F16\u8BD1\u6210css\u6587\u4EF6\u3002</p><h3 id="\u4E09\u90E8\u5206" tabindex="-1">\u4E09\u90E8\u5206 <a class="header-anchor" href="#\u4E09\u90E8\u5206" aria-hidden="true">#</a></h3><p>\u4E09\u90E8\u5206\u52A0\u4E00\u8D77\u5C31\u662F\u5B8C\u6574\u7684\u4EE3\u7801\u3002 \u7B2C\u4E00\u90E8\u5206\uFF1A\u8BBE\u5907\u4FE1\u606F\u3002 \u8FD9\u4E2A\u90E8\u5206\u7528\u4E8E\u83B7\u53D6\u4E00\u5957\u57FA\u672C\u8BBE\u5907\u4FE1\u606F\uFF0C\u5305\u542B\u8BBE\u5907\u9AD8\u5EA6\u3001\u8BBE\u5907\u5BBD\u5EA6\u3001\u7269\u7406\u50CF\u7D20\u4E0ECSS\u50CF\u7D20\u6BD4\u4F8B\u3001\u8BBE\u5907\u65B9\u5411\u3002 \u7B2C\u4E8C\u90E8\u5206\uFF1A \u8F6C\u6362rpx px = rpx / \u57FA\u7840\u8BBE\u5907\u5BBD\u5EA6 750 * \u8BBE\u5907\u5B9E\u9645\u5BBD\u5EA6</p><h3 id="\u7B2C\u4E09\u90E8\u5206\uFF1Asetcsstohead" tabindex="-1">\u7B2C\u4E09\u90E8\u5206\uFF1AsetCssToHead <a class="header-anchor" href="#\u7B2C\u4E09\u90E8\u5206\uFF1Asetcsstohead" aria-hidden="true">#</a></h3><p><img${ssrRenderAttr("src", _imports_1)} alt="\u56FE\u7247"></p><p>\u53EF\u4EE5\u770B\u5230\u5176\u4E2D\u5728index.wxss\u4E2D\u5199rpx\u5355\u4F4D\u7684\u5C5E\u6027\u90FD\u53D8\u6210\u4E86\u533A\u95F4\u7684\u6837\u5B50[0, 128]\u3001[0, 20]\u3002\u5176\u4ED6\u5355\u4F4D\u5E76\u6CA1\u6709\u8F6C\u6362\u3002\u8FD9\u6837\u7684\u8BDD\u5C31\u53EF\u4EE5\u65B9\u4FBF\u7684\u8BC6\u522B\u54EA\u91CC\u5199\u4E86rpx\u5355\u4F4D\uFF0C\u7136\u540E\u6267\u884C\u7B2C\u4E8C\u90E8\u5206\u7684transformRPX\u65B9\u6CD5\u5373\u53EF\u3002 makeup\u7EC4\u88C5\u4E4B\u540E\uFF0C\u521B\u5EFA style \u6807\u8BB0\uFF0C\u63D2\u5165\u5230 head \u4E2D\u3002 \u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u662F\u901A\u8FC7eval\u65B9\u6CD5\u6CE8\u5165\u6267\u884C\u7684\u3002\u8FD9\u6837\u7684\u8BDD\u5B8C\u6210\u4E86WXSS\u7684\u4E00\u6574\u5957\u6D41\u7A0B\u3002</p><h2 id="\u5C0F\u7A0B\u5E8F-\u5206\u522B\u6709-\u54EA\u4E09\u79CD-\u6846\u67B6-\uFF1F" tabindex="-1">\u5C0F\u7A0B\u5E8F \u5206\u522B\u6709 \u54EA\u4E09\u79CD \u6846\u67B6 \uFF1F <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F-\u5206\u522B\u6709-\u54EA\u4E09\u79CD-\u6846\u67B6-\uFF1F" aria-hidden="true">#</a></h2><h3 id="\u9884\u7F16\u8BD1" tabindex="-1">\u9884\u7F16\u8BD1 <a class="header-anchor" href="#\u9884\u7F16\u8BD1" aria-hidden="true">#</a></h3><p>\u4EC0\u4E48\u662F\u9884\u7F16\u8BD1\u7684\u6846\u67B6\u5462\uFF1F\u8FD8\u8BB0\u5F97\u6211\u4EEC\u8BB2\u89E3WXSS\u7684\u65F6\u5019\uFF0CWXSS\u7684\u6587\u4EF6\u4F1A\u7F16\u8BD1\u6210js\u518D\u6267\u884C\u3002\u50CF\u8FD9\u79CD\u6267\u884C\u524D\u5C31\u8FDB\u884C\u7F16\u8BD1\u7684\u624B\u6BB5\u5C31\u53EB\u505A\u9884\u7F16\u8BD1\u3002\u8FD9\u79CD\u6846\u67B6\u5C31\u662F\u9884\u7F16\u8BD1\u6846\u67B6\u3002wepy\u3001taro\u5C31\u662F\u8FD9\u6837\u7684\u6846\u67B6\u3002 \u9884\u7F16\u8BD1\u6846\u67B6\u7684\u6838\u5FC3\u601D\u60F3\u5C31\u662FDSL+ \u8BED\u6CD5\u89E3\u6790\u3002\u521A\u770B\u4E86\u4E00\u4E0Btaro\u6700\u65B0\u7684\u6587\u6863\uFF0C\u5DF2\u7ECF\u652F\u6301react hooks\u8FD9\u6837\u7684\u5199\u6CD5\u4E86\u3002 \u5C0F\u7A0B\u5E8F\u9884\u7F16\u8BD1\u6846\u67B6\u7684\u539F\u7406\u5C31\u5982\u4E0A\u8FF0\u8BB2\u89E3\uFF0C\u6211\u4EEC\u53EF\u4EE5\u60F3\u8C61\u4E00\u4E0B\u9884\u7F16\u8BD1\u6846\u67B6\u7684\u574F\u5904\u6709\u4EC0\u4E48\u5462\uFF1F</p><ul><li>react\u6216\u8005vue\u540E\u671F\u518D\u51FA\u4E00\u4E9B\u65B0\u7279\u6027\u7684\u8BDD\uFF0C\u9884\u7F16\u8BD1\u6846\u67B6\u90FD\u9700\u8981\u5728\u8FDB\u884C\u8BED\u6CD5\u89E3\u6790\u6269\u5C55\u7F16\u5199\u3002</li><li>\u517C\u5BB9\u95EE\u9898\uFF0C\u6BD4\u5982\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u5982\u679C\u4E0D\u652F\u6301\uFF0C\u9884\u7F16\u8BD1\u6846\u67B6\u8981\u8FDB\u884C\u517C\u5BB9\u3002</li></ul><h3 id="\u534A\u7F16\u8BD1-\u534A\u8FD0\u884C" tabindex="-1">\u534A\u7F16\u8BD1 \u534A\u8FD0\u884C <a class="header-anchor" href="#\u534A\u7F16\u8BD1-\u534A\u8FD0\u884C" aria-hidden="true">#</a></h3><p>\u534A\u7F16\u8BD1\u534A\u8FD0\u884C\u6846\u67B6\u6709\u4EC0\u4E48\u5462\uFF0C\u7F8E\u56E2\u5F00\u53D1\u7684mpvue\u3002 \u90A3\u4E48\u5C31\u53EF\u4EE5\u4FEE\u6539patch\u6D41\u7A0B\u4E0D\u76F4\u63A5\u751F\u6210\u771F\u5B9Enode\uFF0C\u800C\u662F\u89E6\u53D1setData\u6765\u66F4\u65B0\u89C6\u56FE\u5C42\u3002 \u53EF\u4EE5\u60F3\u8C61\u4E00\u4E0B\uFF0C\u5982\u679C\u628Avue\u7684template\u7F16\u8BD1\u6210WXML\u5C31\u53D8\u4E3A\u4E86\u5C0F\u7A0B\u5E8F\u7684\u89C6\u56FE\u5C42\u3002vue\u672C\u8EAB\u9884\u7F16\u8BD1\u7684\u4EE3\u7801\u4E3Ajs\uFF0C\u8FD9\u4E2Ajs\u662F\u53EF\u4EE5\u5728\u903B\u8F91\u5C42\u4E2D\u8FD0\u884C\u7531\u4E8Ejs-core\uFF0C\u7136\u540E\u5F53\u6570\u636E\u53D8\u52A8\u7684\u65F6\u5019\u8D70vue\u7684\u6E32\u67D3\u6D41\u7A0B\uFF0Cpatch\u6D41\u7A0B\u6539\u4E3AsetData\u6765\u89E6\u53D1\u89C6\u56FE\u5C42\u66F4\u65B0\u3002\u8FD9\u6837\u7684\u8BDD\u662F\u5B8C\u5168\u6CA1\u95EE\u9898\u7684\u3002 \u6240\u4EE5\u4E3A\u4EC0\u4E48\u8FD9\u4E2A\u6846\u67B6\u7684\u540D\u79F0\u53EB\u534A\u7F16\u8BD1\u534A\u8FD0\u884C\u6846\u67B6\uFF0C\u534A\u7F16\u8BD1\u8BB2\u7684\u662Fvue\u7684template\u9700\u8981\u5355\u72EC\u7F16\u8BD1\u4E3Awxml\uFF0C\u534A\u8FD0\u884C\u8BB2\u7684\u662Fvue\u6574\u4F53\u7684\u7279\u6027\u90FD\u4F1A\u5728\u903B\u8F91\u5C42\u4E2D\u8FD0\u884C\u3002\u4E3A\u4E86\u7B26\u5408\u5C0F\u7A0B\u5E8F\u7684\u6E32\u67D3\u6846\u67B6\uFF0C\u4FEE\u6539\u4E86vue\u7684\u6846\u67B6\uFF0C\u6700\u7EC8\u8FBE\u5230\u4E86\u8FD9\u4E2A\u76EE\u7684\u3002</p><h3 id="\u8FD0\u884C\u65F6\u6846\u67B6" tabindex="-1">\u8FD0\u884C\u65F6\u6846\u67B6 <a class="header-anchor" href="#\u8FD0\u884C\u65F6\u6846\u67B6" aria-hidden="true">#</a></h3><p>\u5728\u5C0F\u7A0B\u5E8F\u53CC\u7EBF\u7A0B\u67B6\u6784\u4E2D\uFF0C\u6E32\u67D3\u5C42\u662F\u6CA1\u6709\u5F00\u653E\u4EFB\u4F55\u64CD\u4F5CDOM\u7684api\u7ED9\u903B\u8F91\u5C42\u7684\u3002\u903B\u8F91\u5C42\u662F\u6CA1\u6709\u529E\u6CD5\u901A\u8FC7\u64CD\u4F5CDOM\u6765\u6539\u53D8\u89C6\u56FE\u7684\u3002\u6240\u4EE5\u6211\u4EEC\u770B\u5230\u4E86\u534A\u7F16\u8BD1\u534A\u8FD0\u884C\u65F6\u6846\u67B6\u901A\u8FC7\u534A\u7F16\u8BD1\uFF0C\u628Avue\u7684template\u6A21\u7248\u63D0\u524D\u7F16\u8BD1\u4E3Awxml\uFF0C\u7136\u540E\u901A\u8FC7setData\u628Adata\u6570\u636E\u4F20\u8F93\u8FC7\u53BB\u3002 \u7136\u800C\u7EAF\u8FD0\u884C\u65F6\u6846\u67B6\u5C31\u662F\u8981\u89E3\u51B3\u8FD9\u4E2A\u534A\u7F16\u8BD1\u7684\u95EE\u9898\u3002 \u5C4A\u65F6\u6709\u51E0\u4E2A\u95EE\u9898\u9700\u8981\u89E3\u51B3\uFF1A</p><ul><li>\u901A\u8BAF\u65B9\u5F0F\u53EA\u80FD\u901A\u8FC7setData\u5230\u6E32\u67D3\u5C42</li><li>vue\u3001react\u6700\u7EC8\u9700\u8981\u64CD\u4F5CDOM</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview-questions/westore/principle/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};