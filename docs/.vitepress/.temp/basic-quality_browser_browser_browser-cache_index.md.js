import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const _imports_0 = "/vite-press/assets/Memory.765474fb.webp";
const _imports_1 = "/vite-press/assets/Cache-control.2f8871a9.webp";
const _imports_2 = "/vite-press/assets/Cache-control2.0b5c508a.webp";
const _imports_3 = "/vite-press/assets/Cache-control3.805c02d0.webp";
const __pageData = JSON.parse('{"title":"\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u7B56\u7565","description":"","frontmatter":{"createTime":"2022/10/25","tag":"\u6D4F\u89C8\u5668"},"headers":[{"level":2,"title":"\u7F13\u5B58\u4F4D\u7F6E","slug":"\u7F13\u5B58\u4F4D\u7F6E","link":"#\u7F13\u5B58\u4F4D\u7F6E","children":[{"level":3,"title":"Service Worker","slug":"service-worker","link":"#service-worker","children":[]},{"level":3,"title":"Memory Cache","slug":"memory-cache","link":"#memory-cache","children":[]},{"level":3,"title":"Disk Cache","slug":"disk-cache","link":"#disk-cache","children":[]},{"level":3,"title":"Push Cache","slug":"push-cache","link":"#push-cache","children":[]},{"level":3,"title":"\u7F51\u7EDC\u8BF7\u6C42 fetch","slug":"\u7F51\u7EDC\u8BF7\u6C42-fetch","link":"#\u7F51\u7EDC\u8BF7\u6C42-fetch","children":[]}]},{"level":2,"title":"\u7F13\u5B58\u7B56\u7565","slug":"\u7F13\u5B58\u7B56\u7565","link":"#\u7F13\u5B58\u7B56\u7565","children":[{"level":3,"title":"\u5F3A\u7F13\u5B58","slug":"\u5F3A\u7F13\u5B58","link":"#\u5F3A\u7F13\u5B58","children":[]},{"level":3,"title":"\u534F\u5546\u7F13\u5B58","slug":"\u534F\u5546\u7F13\u5B58","link":"#\u534F\u5546\u7F13\u5B58","children":[]},{"level":3,"title":"last-modified \u548C etag \u6709\u4EC0\u4E48\u533A\u522B","slug":"last-modified-\u548C-etag-\u6709\u4EC0\u4E48\u533A\u522B","link":"#last-modified-\u548C-etag-\u6709\u4EC0\u4E48\u533A\u522B","children":[]}]},{"level":2,"title":"\u5B9E\u9645\u573A\u666F\u5E94\u7528\u7F13\u5B58\u7B56\u7565","slug":"\u5B9E\u9645\u573A\u666F\u5E94\u7528\u7F13\u5B58\u7B56\u7565","link":"#\u5B9E\u9645\u573A\u666F\u5E94\u7528\u7F13\u5B58\u7B56\u7565","children":[{"level":3,"title":"\u9891\u7E41\u53D8\u52A8\u7684\u8D44\u6E90","slug":"\u9891\u7E41\u53D8\u52A8\u7684\u8D44\u6E90","link":"#\u9891\u7E41\u53D8\u52A8\u7684\u8D44\u6E90","children":[]},{"level":3,"title":"\u4EE3\u7801\u6587\u4EF6","slug":"\u4EE3\u7801\u6587\u4EF6","link":"#\u4EE3\u7801\u6587\u4EF6","children":[]}]},{"level":2,"title":"\u793A\u4F8B nginx","slug":"\u793A\u4F8B-nginx","link":"#\u793A\u4F8B-nginx","children":[]}],"relativePath":"basic-quality/browser/browser/browser-cache/index.md","lastUpdated":1667371206000}');
const _sfc_main = { name: "basic-quality/browser/browser/browser-cache/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u7B56\u7565" tabindex="-1">\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u7B56\u7565 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u7B56\u7565" aria-hidden="true">#</a></h1>`);
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
  _push(`<p>\u7F13\u5B58\u53EF\u4EE5\u8BF4\u662F\u6027\u80FD\u4F18\u5316\u4E2D\u7B80\u5355\u9AD8\u6548\u7684\u4E00\u79CD\u4F18\u5316\u65B9\u5F0F\u4E86\uFF0C\u5B83\u53EF\u4EE5\u663E\u8457\u51CF\u5C11\u7F51\u7EDC\u4F20\u8F93\u6240\u5E26\u6765\u7684\u635F\u8017\u3002 \u5BF9\u4E8E\u4E00\u4E2A\u6570\u636E\u8BF7\u6C42\u6765\u8BF4\uFF0C\u53EF\u4EE5\u5206\u4E3A\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\u3001\u540E\u7AEF\u5904\u7406\u3001\u6D4F\u89C8\u5668\u54CD\u5E94\u4E09\u4E2A\u6B65\u9AA4\u3002\u6D4F\u89C8\u5668\u7F13\u5B58\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u7B2C\u4E00\u548C\u7B2C\u4E09\u6B65\u9AA4\u4E2D\u4F18\u5316\u6027\u80FD\u3002\u6BD4\u5982\u8BF4\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u800C\u4E0D\u53D1\u8D77\u8BF7\u6C42\uFF0C\u6216\u8005\u53D1\u8D77\u4E86\u8BF7\u6C42\u4F46\u540E\u7AEF\u5B58\u50A8\u7684\u6570\u636E\u548C\u524D\u7AEF\u4E00\u81F4\uFF0C\u90A3\u4E48\u5C31\u6CA1\u6709\u5FC5\u8981\u518D\u5C06\u6570\u636E\u56DE\u4F20\u56DE\u6765\uFF0C\u8FD9\u6837\u5C31\u51CF\u5C11\u4E86\u54CD\u5E94\u6570\u636E\u3002 \u63A5\u4E0B\u6765\u7684\u5185\u5BB9\u4E2D\u6211\u4EEC\u5C06\u901A\u8FC7\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\u6765\u63A2\u8BA8\u6D4F\u89C8\u5668\u7F13\u5B58\u673A\u5236\uFF1A</p><ul><li>\u7F13\u5B58\u4F4D\u7F6E</li><li>\u7F13\u5B58\u7B56\u7565</li><li>\u5B9E\u9645\u573A\u666F\u5E94\u7528\u7F13\u5B58\u7B56\u7565</li></ul><h2 id="\u7F13\u5B58\u4F4D\u7F6E" tabindex="-1">\u7F13\u5B58\u4F4D\u7F6E <a class="header-anchor" href="#\u7F13\u5B58\u4F4D\u7F6E" aria-hidden="true">#</a></h2><p>\u4ECE\u7F13\u5B58\u4F4D\u7F6E\u4E0A\u6765\u8BF4\u5206\u4E3A\u56DB\u79CD\uFF0C\u5E76\u4E14\u5404\u81EA\u6709\u4F18\u5148\u7EA7\uFF0C\u5F53\u4F9D\u6B21\u67E5\u627E\u7F13\u5B58\u4E14\u90FD\u6CA1\u6709\u547D\u4E2D\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u53BB\u8BF7\u6C42\u7F51\u7EDC</p><ul><li>Service Worker <ul><li>\u81EA\u7531\u63A7\u5236\u54EA\u4E9B\u6587\u4EF6\u7F13\u5B58 \u7F13\u5B58\u65F6\u6548\u662F\u6301\u7EED\u6027\u7684</li></ul></li><li>Memory Cache <ul><li>\u5185\u5B58\u7F13\u5B58 \u901F\u5EA6\u5FEB \u4F46\u662F \u5B58\u50A8\u7A7A\u95F4\u9650\u5236\u5927 \u65F6\u6548\u6027 \u77ED \u4F1A\u968F\u7740\u8FDB\u7A0B\u800C\u91CA\u653E \u4E00\u822C\u5927\u6587\u4EF6\u4E0D\u4F1A\u5B58\u653E\u8FD9\u91CC</li></ul></li><li>Disk Cache <ul><li>\u78C1\u76D8\u7F13\u5B58 \u901F\u5EA6\u6CA1\u6709 \u5185\u5B58\u7F13\u5B58\u5FEB \u4F46\u662F\u5B58\u50A8\u7A7A\u95F4\u5927 \u65F6\u6548\u6027\u957F \u5927\u90E8\u5206\u7F13\u5B58\u90FD\u4F1A\u8D70\u8FD9\u91CC</li></ul></li><li>Push Cache <ul><li>http2 \u624D\u6709\u7684\u7F13\u5B58\u7B56\u7565</li></ul></li><li>\u7F51\u7EDC\u8BF7\u6C42 fetch <ul><li>\u6B63\u5E38\u8BF7\u6C42</li></ul></li></ul><h3 id="service-worker" tabindex="-1">Service Worker <a class="header-anchor" href="#service-worker" aria-hidden="true">#</a></h3><p>Service Worker \u7684\u7F13\u5B58\u4E0E\u6D4F\u89C8\u5668\u5176\u4ED6\u5185\u5EFA\u7684\u7F13\u5B58\u673A\u5236\u4E0D\u540C\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u6211\u4EEC\u81EA\u7531\u63A7\u5236\u7F13\u5B58\u54EA\u4E9B\u6587\u4EF6\u3001\u5982\u4F55\u5339\u914D\u7F13\u5B58\u3001\u5982\u4F55\u8BFB\u53D6\u7F13\u5B58\uFF0C\u5E76\u4E14\u7F13\u5B58\u662F\u6301\u7EED\u6027\u7684\u3002 \u5F53 Service Worker \u6CA1\u6709\u547D\u4E2D\u7F13\u5B58\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u53BB\u8C03\u7528 fetch \u51FD\u6570\u83B7\u53D6\u6570\u636E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u6211\u4EEC\u6CA1\u6709\u5728 Service Worker \u547D\u4E2D\u7F13\u5B58\u7684\u8BDD\uFF0C\u4F1A\u6839\u636E\u7F13\u5B58\u67E5\u627E\u4F18\u5148\u7EA7\u53BB\u67E5\u627E\u6570\u636E\u3002\u4F46\u662F\u4E0D\u7BA1\u6211\u4EEC\u662F\u4ECE Memory Cache \u4E2D\u8FD8\u662F\u4ECE\u7F51\u7EDC\u8BF7\u6C42\u4E2D\u83B7\u53D6\u7684\u6570\u636E\uFF0C\u6D4F\u89C8\u5668\u90FD\u4F1A\u663E\u793A\u6211\u4EEC\u662F\u4ECE Service Worker \u4E2D\u83B7\u53D6\u7684\u5185\u5BB9\u3002</p><h3 id="memory-cache" tabindex="-1">Memory Cache <a class="header-anchor" href="#memory-cache" aria-hidden="true">#</a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt="\u56FE\u7247"> Memory Cache \u4E5F\u5C31\u662F\u5185\u5B58\u4E2D\u7684\u7F13\u5B58\uFF0C\u8BFB\u53D6\u5185\u5B58\u4E2D\u7684\u6570\u636E\u80AF\u5B9A\u6BD4\u78C1\u76D8\u5FEB\u3002\u4F46\u662F\u5185\u5B58\u7F13\u5B58\u867D\u7136\u8BFB\u53D6\u9AD8\u6548\uFF0C\u53EF\u662F\u7F13\u5B58\u6301\u7EED\u6027\u5F88\u77ED\uFF0C\u4F1A\u968F\u7740\u8FDB\u7A0B\u7684\u91CA\u653E\u800C\u91CA\u653E\u3002 \u4E00\u65E6\u6211\u4EEC\u5173\u95ED Tab \u9875\u9762\uFF0C\u5185\u5B58\u4E2D\u7684\u7F13\u5B58\u4E5F\u5C31\u88AB\u91CA\u653E\u4E86\u3002 \u5F53\u6211\u4EEC\u8BBF\u95EE\u8FC7\u9875\u9762\u4EE5\u540E\uFF0C\u518D\u6B21\u5237\u65B0\u9875\u9762\uFF0C\u53EF\u4EE5\u53D1\u73B0\u5F88\u591A\u6570\u636E\u90FD\u6765\u81EA\u4E8E\u5185\u5B58\u7F13\u5B58</p><p>\u90A3\u4E48\u65E2\u7136\u5185\u5B58\u7F13\u5B58\u8FD9\u4E48\u9AD8\u6548\uFF0C\u6211\u4EEC\u662F\u4E0D\u662F\u80FD\u8BA9\u6570\u636E\u90FD\u5B58\u653E\u5728\u5185\u5B58\u4E2D\u5462\uFF1F \u5148\u8BF4\u7ED3\u8BBA\uFF0C\u8FD9\u662F\u4E0D\u53EF\u80FD\u7684\u3002\u9996\u5148\u8BA1\u7B97\u673A\u4E2D\u7684\u5185\u5B58\u4E00\u5B9A\u6BD4\u786C\u76D8\u5BB9\u91CF\u5C0F\u5F97\u591A\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u9700\u8981\u7CBE\u6253\u7EC6\u7B97\u5185\u5B58\u7684\u4F7F\u7528\uFF0C\u6240\u4EE5\u80FD\u8BA9\u6211\u4EEC\u4F7F\u7528\u7684\u5185\u5B58\u5FC5\u7136\u4E0D\u591A\u3002\u5185\u5B58\u4E2D\u5176\u5B9E\u53EF\u4EE5\u5B58\u50A8\u5927\u90E8\u5206\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982\u8BF4 JSS\u3001HTML\u3001CSS\u3001\u56FE\u7247\u7B49\u7B49\u3002\u4F46\u662F\u6D4F\u89C8\u5668\u4F1A\u628A\u54EA\u4E9B\u6587\u4EF6\u4E22\u8FDB\u5185\u5B58\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u5F88\u7384\u5B66\u4E86\uFF0C\u6211\u67E5\u9605\u4E86\u5F88\u591A\u8D44\u6599\u90FD\u6CA1\u6709\u4E00\u4E2A\u5B9A\u8BBA\u3002 \u5F53\u7136\uFF0C\u6211\u901A\u8FC7\u4E00\u4E9B\u5B9E\u8DF5\u548C\u731C\u6D4B\u4E5F\u5F97\u51FA\u4E86\u4E00\u4E9B\u7ED3\u8BBA\uFF1A</p><ul><li>\u5BF9\u4E8E\u5927\u6587\u4EF6\u6765\u8BF4\uFF0C\u5927\u6982\u7387\u662F\u4E0D\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u7684\uFF0C\u53CD\u4E4B\u4F18\u5148</li><li>\u5F53\u524D\u7CFB\u7EDF\u5185\u5B58\u4F7F\u7528\u7387\u9AD8\u7684\u8BDD\uFF0C\u6587\u4EF6\u4F18\u5148\u5B58\u50A8\u8FDB\u786C\u76D8</li></ul><h3 id="disk-cache" tabindex="-1">Disk Cache <a class="header-anchor" href="#disk-cache" aria-hidden="true">#</a></h3><p>Disk Cache \u4E5F\u5C31\u662F\u5B58\u50A8\u5728\u786C\u76D8\u4E2D\u7684\u7F13\u5B58\uFF0C\u8BFB\u53D6\u901F\u5EA6\u6162\u70B9\uFF0C\u4F46\u662F\u4EC0\u4E48\u90FD\u80FD\u5B58\u50A8\u5230\u78C1\u76D8\u4E2D\uFF0C\u6BD4\u4E4B Memory Cache \u80DC\u5728\u5BB9\u91CF\u548C\u5B58\u50A8\u65F6\u6548\u6027\u4E0A\u3002 \u5728\u6240\u6709\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D\uFF0CDisk Cache \u8986\u76D6\u9762\u57FA\u672C\u662F\u6700\u5927\u7684\u3002\u5B83\u4F1A\u6839\u636E HTTP Herder \u4E2D\u7684\u5B57\u6BB5\u5224\u65AD\u54EA\u4E9B\u8D44\u6E90\u9700\u8981\u7F13\u5B58\uFF0C\u54EA\u4E9B\u8D44\u6E90\u53EF\u4EE5\u4E0D\u8BF7\u6C42\u76F4\u63A5\u4F7F\u7528\uFF0C\u54EA\u4E9B\u8D44\u6E90\u5DF2\u7ECF\u8FC7\u671F\u9700\u8981\u91CD\u65B0\u8BF7\u6C42\u3002\u5E76\u4E14\u5373\u4F7F\u5728\u8DE8\u7AD9\u70B9\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F8\u540C\u5730\u5740\u7684\u8D44\u6E90\u4E00\u65E6\u88AB\u786C\u76D8\u7F13\u5B58\u4E0B\u6765\uFF0C\u5C31\u4E0D\u4F1A\u518D\u6B21\u53BB\u8BF7\u6C42\u6570\u636E\u3002</p><h3 id="push-cache" tabindex="-1">Push Cache <a class="header-anchor" href="#push-cache" aria-hidden="true">#</a></h3><p>Push Cache \u662F HTTP/2 \u4E2D\u7684\u5185\u5BB9\uFF0C\u5F53\u4EE5\u4E0A\u4E09\u79CD\u7F13\u5B58\u90FD\u6CA1\u6709\u547D\u4E2D\u65F6\uFF0C\u5B83\u624D\u4F1A\u88AB\u4F7F\u7528\u3002\u5E76\u4E14\u7F13\u5B58\u65F6\u95F4\u4E5F\u5F88\u77ED\u6682\uFF0C\u53EA\u5728\u4F1A\u8BDD\uFF08Session\uFF09\u4E2D\u5B58\u5728\uFF0C\u4E00\u65E6\u4F1A\u8BDD\u7ED3\u675F\u5C31\u88AB\u91CA\u653E\u3002 Push Cache \u5728\u56FD\u5185\u80FD\u591F\u67E5\u5230\u7684\u8D44\u6599\u5F88\u5C11\uFF0C\u4E5F\u662F\u56E0\u4E3A HTTP/2 \u5728\u56FD\u5185\u4E0D\u591F\u666E\u53CA\uFF0C\u4F46\u662F HTTP/2 \u5C06\u4F1A\u662F\u65E5\u540E\u7684\u4E00\u4E2A\u8D8B\u52BF\u3002\u8FD9\u91CC\u63A8\u8350\u9605\u8BFB HTTP/2 push is tougher than I thought \u8FD9\u7BC7\u6587\u7AE0\uFF0C\u4F46\u662F\u5185\u5BB9\u662F\u82F1\u6587\u7684\uFF0C\u6211\u7FFB\u8BD1\u4E00\u4E0B\u6587\u7AE0\u4E2D\u7684\u51E0\u4E2A\u7ED3\u8BBA\uFF0C\u6709\u80FD\u529B\u7684\u540C\u5B66\u8FD8\u662F\u63A8\u8350\u81EA\u5DF1\u9605\u8BFB</p><ul><li>\u6240\u6709\u7684\u8D44\u6E90\u90FD\u80FD\u88AB\u63A8\u9001\uFF0C\u4F46\u662F Edge \u548C Safari \u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u4E0D\u600E\u4E48\u597D</li><li>\u53EF\u4EE5\u63A8\u9001 no-cache \u548C no-store \u7684\u8D44\u6E90</li><li>\u4E00\u65E6\u8FDE\u63A5\u88AB\u5173\u95ED\uFF0CPush Cache \u5C31\u88AB\u91CA\u653E</li><li>\u591A\u4E2A\u9875\u9762\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684 HTTP/2 \u8FDE\u63A5\uFF0C\u4E5F\u5C31\u662F\u8BF4\u80FD\u4F7F\u7528\u540C\u6837\u7684\u7F13\u5B58</li><li>Push Cache \u4E2D\u7684\u7F13\u5B58\u53EA\u80FD\u88AB\u4F7F\u7528\u4E00\u6B21</li><li>\u6D4F\u89C8\u5668\u53EF\u4EE5\u62D2\u7EDD\u63A5\u53D7\u5DF2\u7ECF\u5B58\u5728\u7684\u8D44\u6E90\u63A8\u9001</li><li>\u4F60\u53EF\u4EE5\u7ED9\u5176\u4ED6\u57DF\u540D\u63A8\u9001\u8D44\u6E90</li></ul><h3 id="\u7F51\u7EDC\u8BF7\u6C42-fetch" tabindex="-1">\u7F51\u7EDC\u8BF7\u6C42 fetch <a class="header-anchor" href="#\u7F51\u7EDC\u8BF7\u6C42-fetch" aria-hidden="true">#</a></h3><p>\u5982\u679C\u6240\u6709\u7F13\u5B58\u90FD\u6CA1\u6709\u547D\u4E2D\u7684\u8BDD\uFF0C\u90A3\u4E48\u53EA\u80FD\u53D1\u8D77\u8BF7\u6C42\u6765\u83B7\u53D6\u8D44\u6E90\u4E86\u3002</p><h2 id="\u7F13\u5B58\u7B56\u7565" tabindex="-1">\u7F13\u5B58\u7B56\u7565 <a class="header-anchor" href="#\u7F13\u5B58\u7B56\u7565" aria-hidden="true">#</a></h2><p>\u901A\u5E38\u6D4F\u89C8\u5668\u7F13\u5B58\u7B56\u7565\u5206\u4E3A\u4E24\u79CD\uFF1A\u5F3A\u7F13\u5B58\u548C\u534F\u5546\u7F13\u5B58\uFF0C\u5E76\u4E14\u7F13\u5B58\u7B56\u7565\u90FD\u662F\u901A\u8FC7\u8BBE\u7F6E HTTP Header \u6765\u5B9E\u73B0\u7684\u3002</p><h3 id="\u5F3A\u7F13\u5B58" tabindex="-1">\u5F3A\u7F13\u5B58 <a class="header-anchor" href="#\u5F3A\u7F13\u5B58" aria-hidden="true">#</a></h3><p>\u5F3A\u7F13\u5B58\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u4E24\u79CD HTTP Header \u5B9E\u73B0\uFF1AExpires \u548C Cache-Control \u3002\u5F3A\u7F13\u5B58\u8868\u793A\u5728\u7F13\u5B58\u671F\u95F4\u4E0D\u9700\u8981\u8BF7\u6C42\uFF0Cstate code \u4E3A 200\u3002</p><h4 id="expires" tabindex="-1">Expires <a class="header-anchor" href="#expires" aria-hidden="true">#</a></h4><p>Expires: Wed, 22 Oct 2018 08:41:00 GMT Expires \u662F HTTP/1 \u7684\u4EA7\u7269\uFF0C\u8868\u793A\u8D44\u6E90\u4F1A\u5728 Wed, 22 Oct 2018 08:41:00 GMT \u540E\u8FC7\u671F\uFF0C\u9700\u8981\u518D\u6B21\u8BF7\u6C42\u3002\u5E76\u4E14 Expires \u53D7\u9650\u4E8E\u672C\u5730\u65F6\u95F4\uFF0C\u5982\u679C\u4FEE\u6539\u4E86\u672C\u5730\u65F6\u95F4\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u7F13\u5B58\u5931\u6548\u3002</p><h4 id="cache-control" tabindex="-1">Cache-control <a class="header-anchor" href="#cache-control" aria-hidden="true">#</a></h4><p><img${ssrRenderAttr("src", _imports_1)} alt="\u56FE\u7247"></p><p>Cache-control: max-age=30 Cache-Control \u51FA\u73B0\u4E8E HTTP/1.1\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E Expires \u3002\u8BE5\u5C5E\u6027\u503C\u8868\u793A\u8D44\u6E90\u4F1A\u5728 30 \u79D2\u540E\u8FC7\u671F\uFF0C\u9700\u8981\u518D\u6B21\u8BF7\u6C42\u3002 Cache-Control \u53EF\u4EE5\u5728\u8BF7\u6C42\u5934\u6216\u8005\u54CD\u5E94\u5934\u4E2D\u8BBE\u7F6E\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7EC4\u5408\u4F7F\u7528\u591A\u79CD\u6307\u4EE4</p><p>\u4ECE\u56FE\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u591A\u4E2A\u6307\u4EE4\u914D\u5408\u8D77\u6765\u4E00\u8D77\u4F7F\u7528\uFF0C\u8FBE\u5230\u591A\u4E2A\u76EE\u7684\u3002\u6BD4\u5982\u8BF4\u6211\u4EEC\u5E0C\u671B\u8D44\u6E90\u80FD\u88AB\u7F13\u5B58\u4E0B\u6765\uFF0C\u5E76\u4E14\u662F\u5BA2\u6237\u7AEF\u548C\u4EE3\u7406\u670D\u52A1\u5668\u90FD\u80FD\u7F13\u5B58\uFF0C\u8FD8\u80FD\u8BBE\u7F6E\u7F13\u5B58\u5931\u6548\u65F6\u95F4\u7B49\u7B49\u3002 \u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u5B66\u4E60\u4E00\u4E9B\u5E38\u89C1\u6307\u4EE4\u7684\u4F5C\u7528 <img${ssrRenderAttr("src", _imports_2)} alt="\u56FE\u7247"></p><h3 id="\u534F\u5546\u7F13\u5B58" tabindex="-1">\u534F\u5546\u7F13\u5B58 <a class="header-anchor" href="#\u534F\u5546\u7F13\u5B58" aria-hidden="true">#</a></h3><p><img${ssrRenderAttr("src", _imports_3)} alt="\u56FE\u7247"></p><p>\u5982\u679C\u7F13\u5B58\u8FC7\u671F\u4E86\uFF0C\u5C31\u9700\u8981\u53D1\u8D77\u8BF7\u6C42\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u6709\u66F4\u65B0\u3002\u534F\u5546\u7F13\u5B58\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u4E24\u79CD HTTP Header \u5B9E\u73B0\uFF1ALast-Modified \u548C ETag \u3002 \u5F53\u6D4F\u89C8\u5668\u53D1\u8D77\u8BF7\u6C42\u9A8C\u8BC1\u8D44\u6E90\u65F6\uFF0C\u5982\u679C\u8D44\u6E90\u6CA1\u6709\u505A\u6539\u53D8\uFF0C\u90A3\u4E48\u670D\u52A1\u7AEF\u5C31\u4F1A\u8FD4\u56DE 304 \u72B6\u6001\u7801\uFF0C\u5E76\u4E14\u66F4\u65B0\u6D4F\u89C8\u5668\u7F13\u5B58\u6709\u6548\u671F\u3002</p><h4 id="last-modified-\u548C-if-modified-since" tabindex="-1">Last-Modified \u548C If-Modified-Since <a class="header-anchor" href="#last-modified-\u548C-if-modified-since" aria-hidden="true">#</a></h4><p>Last-Modified \u8868\u793A\u672C\u5730\u6587\u4EF6\u6700\u540E\u4FEE\u6539\u65E5\u671F\uFF0CIf-Modified-Since \u4F1A\u5C06 Last-Modified \u7684\u503C\u53D1\u9001\u7ED9\u670D\u52A1\u5668\uFF0C\u8BE2\u95EE\u670D\u52A1\u5668\u5728\u8BE5\u65E5\u671F\u540E\u8D44\u6E90\u662F\u5426\u6709\u66F4\u65B0\uFF0C\u6709\u66F4\u65B0\u7684\u8BDD\u5C31\u4F1A\u5C06\u65B0\u7684\u8D44\u6E90\u53D1\u9001\u56DE\u6765\uFF0C\u5426\u5219\u8FD4\u56DE 304 \u72B6\u6001\u7801\u3002 \u4F46\u662F Last-Modified \u5B58\u5728\u4E00\u4E9B\u5F0A\u7AEF\uFF1A</p><ul><li>\u5982\u679C\u672C\u5730\u6253\u5F00\u7F13\u5B58\u6587\u4EF6\uFF0C\u5373\u4F7F\u6CA1\u6709\u5BF9\u6587\u4EF6\u8FDB\u884C\u4FEE\u6539\uFF0C\u4F46\u8FD8\u662F\u4F1A\u9020\u6210 Last-Modified \u88AB\u4FEE\u6539\uFF0C\u670D\u52A1\u7AEF\u4E0D\u80FD\u547D\u4E2D\u7F13\u5B58\u5BFC\u81F4\u53D1\u9001\u76F8\u540C\u7684\u8D44\u6E90</li><li>\u56E0\u4E3A Last-Modified \u53EA\u80FD\u4EE5\u79D2\u8BA1\u65F6\uFF0C\u5982\u679C\u5728\u4E0D\u53EF\u611F\u77E5\u7684\u65F6\u95F4\u5185\u4FEE\u6539\u5B8C\u6210\u6587\u4EF6\uFF0C\u90A3\u4E48\u670D\u52A1\u7AEF\u4F1A\u8BA4\u4E3A\u8D44\u6E90\u8FD8\u662F\u547D\u4E2D\u4E86\uFF0C\u4E0D\u4F1A\u8FD4\u56DE\u6B63\u786E\u7684\u8D44\u6E90 \u56E0\u4E3A\u4EE5\u4E0A\u8FD9\u4E9B\u5F0A\u7AEF\uFF0C\u6240\u4EE5\u5728 HTTP / 1.1 \u51FA\u73B0\u4E86 ETag \u3002</li></ul><h4 id="etag-\u548C-if-none-match" tabindex="-1">ETag \u548C If-None-Match <a class="header-anchor" href="#etag-\u548C-if-none-match" aria-hidden="true">#</a></h4><p>ETag \u7C7B\u4F3C\u4E8E\u6587\u4EF6\u6307\u7EB9\uFF0CIf-None-Match \u4F1A\u5C06\u5F53\u524D ETag \u53D1\u9001\u7ED9\u670D\u52A1\u5668\uFF0C\u8BE2\u95EE\u8BE5\u8D44\u6E90 ETag \u662F\u5426\u53D8\u52A8\uFF0C\u6709\u53D8\u52A8\u7684\u8BDD\u5C31\u5C06\u65B0\u7684\u8D44\u6E90\u53D1\u9001\u56DE\u6765\u3002\u5E76\u4E14 ETag \u4F18\u5148\u7EA7\u6BD4 Last-Modified \u9AD8\u3002 \u4EE5\u4E0A\u5C31\u662F\u7F13\u5B58\u7B56\u7565\u7684\u6240\u6709\u5185\u5BB9\u4E86\uFF0C\u770B\u5230\u8FD9\u91CC\uFF0C\u4E0D\u77E5\u9053\u4F60\u662F\u5426\u5B58\u5728\u8FD9\u6837\u4E00\u4E2A\u7591\u95EE\u3002\u5982\u679C\u4EC0\u4E48\u7F13\u5B58\u7B56\u7565\u90FD\u6CA1\u8BBE\u7F6E\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u4F1A\u600E\u4E48\u5904\u7406\uFF1F \u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6D4F\u89C8\u5668\u4F1A\u91C7\u7528\u4E00\u4E2A\u542F\u53D1\u5F0F\u7684\u7B97\u6CD5\uFF0C\u901A\u5E38\u4F1A\u53D6\u54CD\u5E94\u5934\u4E2D\u7684 Date \u51CF\u53BB Last-Modified \u503C\u7684 10% \u4F5C\u4E3A\u7F13\u5B58\u65F6\u95F4\u3002</p><h3 id="last-modified-\u548C-etag-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1">last-modified \u548C etag \u6709\u4EC0\u4E48\u533A\u522B <a class="header-anchor" href="#last-modified-\u548C-etag-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a></h3><h4 id="last-modified" tabindex="-1">last-modified <a class="header-anchor" href="#last-modified" aria-hidden="true">#</a></h4><ul><li>\u9759\u6001\u6587\u4EF6\u7684 last-modified \u4E00\u822C\u4F1A\u6839\u636E\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u751F\u6210</li></ul><h4 id="etag" tabindex="-1">etag <a class="header-anchor" href="#etag" aria-hidden="true">#</a></h4><ul><li>\u662F\u6839\u636E\u6587\u4EF6\u7684\u5185\u5BB9\u6709\u6CA1\u6709\u53D8\u5316\u8FDB\u884C\u66F4\u65B0</li><li>\u5982\u679C\u4EC5\u4EC5\u662F\u4FEE\u6539\u65F6\u95F4\u53D8\u4E86 \u4F46\u662F\u5185\u5BB9\u6CA1\u53D8 \u4E0D\u4F1A\u66F4\u65B0</li><li>\u5F53\u6587\u4EF6\u66F4\u6539\u65F6\uFF0Cetag \u503C\u5FC5\u987B\u6539\u53D8\u3002</li><li>\u5C3D\u91CF\u4FBF\u4E8E\u8BA1\u7B97\uFF0C\u4E0D\u4F1A\u7279\u522B\u8017 CPU\u3002\u8FD9\u6837\u5B50\u5229\u7528\u6458\u8981\u7B97\u6CD5\u751F\u6210 (MD5, SHA128, SHA256) \u9700\u8981\u614E\u91CD\u8003\u8651\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u662F CPU \u5BC6\u96C6\u578B\u8FD0\u7B97</li><li>\u5FC5\u987B\u6A2A\u5411\u6269\u5C55\uFF0C\u5206\u5E03\u5F0F\u90E8\u7F72\u65F6\u591A\u4E2A\u670D\u52A1\u5668\u8282\u70B9\u4E0A\u751F\u6210\u7684 etag \u503C\u4FDD\u6301\u4E00\u81F4\u3002\u8FD9\u6837\u5B50 inode \u5C31\u6392\u9664\u4E86</li></ul><h4 id="etag\u4E3B\u8981\u4E3A\u4E86\u89E3\u51B3last-modified\u65E0\u6CD5\u89E3\u51B3\u7684\u4E00\u4E9B\u95EE\u9898" tabindex="-1">Etag\u4E3B\u8981\u4E3A\u4E86\u89E3\u51B3Last-Modified\u65E0\u6CD5\u89E3\u51B3\u7684\u4E00\u4E9B\u95EE\u9898 <a class="header-anchor" href="#etag\u4E3B\u8981\u4E3A\u4E86\u89E3\u51B3last-modified\u65E0\u6CD5\u89E3\u51B3\u7684\u4E00\u4E9B\u95EE\u9898" aria-hidden="true">#</a></h4><ul><li>\u4E00\u4E9B\u6587\u4EF6\u4E5F\u8BB8\u5468\u671F\u6027\u7684\u66F4\u6539,\u4F46\u662F\u5B83\u7684\u5185\u5BB9\u5E76\u4E0D\u6539\u53D8(\u4EC5\u4EC5\u6539\u53D8\u7684\u662F\u4FEE\u6539\u65F6\u95F4),\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u4E0D\u5E0C\u671B\u5BA2\u6237\u7AEF\u8BA4\u4E3A\u8FD9\u4E2A\u6587\u4EF6\u88AB\u4FEE\u6539\u4E86,\u800C\u91CD\u65B0\u83B7\u53D6\u8D44\u6E90.</li><li>\u67D0\u4E9B\u6587\u4EF6\u4FEE\u6539\u975E\u5E38\u9891\u7E41,\u6BD4\u5982\u5728\u4E0B\u4E00\u79D2\u7684\u65F6\u95F4\u5185\u8FDB\u884C\u4FEE\u6539(\u6BD4\u59821s\u5185\u4FEE\u6539\u4E86N\u6B21),If-Modified-Since\u80FD\u68C0\u67E5\u5230\u7684\u7C92\u5EA6\u662F\u79D2\u7EA7\u7684,\u8FD9\u79CD\u4FEE\u6539\u662F\u65E0\u6CD5\u5224\u65AD\u7684(\u6216\u8005\u8BF4UNIX\u8BB0\u5F55MTIME\u53EA\u80FD\u7CBE\u786E\u5230\u79D2);</li><li>\u67D0\u4E9B\u670D\u52A1\u5668\u4E0D\u80FD\u7CBE\u786E\u7684\u5F97\u5230\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4;</li><li>nginx\u914D\u7F6E\u91CCETag\u9009\u9879\u9ED8\u8BA4\u5F00\u542F\u7684,\u6240\u4EE5\u8BF7\u6C42\u7684\u8D44\u6E90\u6587\u4EF6\u82E5\u53D1\u751F\u6539\u52A8,\u4F1A\u5728\u54CD\u5E94\u5934\u91CC\u751F\u6210\u65B0\u7684ETag\u503C.\u8FD9\u6837\u5BA2\u6237\u7AEF\u5C31\u80FD\u591F\u53D1\u73B0If-None-Match\u7684\u503C\u548CEtag\u5B57\u6BB5\u7684\u503C\u4E0D\u5339\u914D,\u4ECE\u800C\u53BB\u8BF7\u6C42\u6700\u65B0\u7684\u8D44\u6E90\u6587\u4EF6.</li></ul><h4 id="\u5982\u679C-http-\u54CD\u5E94\u5934\u4E2D-etag-\u503C\u6539\u53D8\u4E86\uFF0C\u662F\u5426\u610F\u5473\u7740\u6587\u4EF6\u5185\u5BB9\u4E00\u5B9A\u5DF2\u7ECF\u66F4\u6539-\uFF1F" tabindex="-1">\u5982\u679C http \u54CD\u5E94\u5934\u4E2D ETag \u503C\u6539\u53D8\u4E86\uFF0C\u662F\u5426\u610F\u5473\u7740\u6587\u4EF6\u5185\u5BB9\u4E00\u5B9A\u5DF2\u7ECF\u66F4\u6539 \uFF1F <a class="header-anchor" href="#\u5982\u679C-http-\u54CD\u5E94\u5934\u4E2D-etag-\u503C\u6539\u53D8\u4E86\uFF0C\u662F\u5426\u610F\u5473\u7740\u6587\u4EF6\u5185\u5BB9\u4E00\u5B9A\u5DF2\u7ECF\u66F4\u6539-\uFF1F" aria-hidden="true">#</a></h4><p>\u4E0D\u4E00\u5B9A\uFF0C\u7531\u670D\u52A1\u5668\u4E2D ETag \u7684\u751F\u6210\u7B97\u6CD5\u51B3\u5B9A\u3002 \u6BD4\u5982 nginx \u4E2D\u7684 etag \u7531 last_modified \u4E0E content_length \u7EC4\u6210\uFF0C\u800C last_modified \u53C8\u7531 mtime \u7EC4\u6210 \u5F53\u7F16\u8F91\u6587\u4EF6\u5374\u672A\u66F4\u6539\u6587\u4EF6\u5185\u5BB9\u65F6\uFF0C\u6216\u8005 touch file\uFF0Cmtime \u4E5F\u4F1A\u6539\u53D8\uFF0C\u6B64\u65F6 etag \u6539\u53D8\uFF0C\u4F46\u662F\u6587\u4EF6\u5185\u5BB9\u6CA1\u6709\u66F4\u6539\u3002</p><h2 id="\u5B9E\u9645\u573A\u666F\u5E94\u7528\u7F13\u5B58\u7B56\u7565" tabindex="-1">\u5B9E\u9645\u573A\u666F\u5E94\u7528\u7F13\u5B58\u7B56\u7565 <a class="header-anchor" href="#\u5B9E\u9645\u573A\u666F\u5E94\u7528\u7F13\u5B58\u7B56\u7565" aria-hidden="true">#</a></h2><p>\u5355\u7EAF\u4E86\u89E3\u7406\u8BBA\u800C\u4E0D\u4ED8\u8BF8\u4E8E\u5B9E\u8DF5\u662F\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u901A\u8FC7\u51E0\u4E2A\u573A\u666F\u5B66\u4E60\u4E0B\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u7406\u8BBA\u3002</p><h3 id="\u9891\u7E41\u53D8\u52A8\u7684\u8D44\u6E90" tabindex="-1">\u9891\u7E41\u53D8\u52A8\u7684\u8D44\u6E90 <a class="header-anchor" href="#\u9891\u7E41\u53D8\u52A8\u7684\u8D44\u6E90" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u9891\u7E41\u53D8\u52A8\u7684\u8D44\u6E90\uFF0C\u9996\u5148\u9700\u8981\u4F7F\u7528 Cache-Control: no-cache \u4F7F\u6D4F\u89C8\u5668\u6BCF\u6B21\u90FD\u8BF7\u6C42\u670D\u52A1\u5668\uFF0C\u7136\u540E\u914D\u5408 ETag \u6216\u8005 Last-Modified \u6765\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u6709\u6548\u3002\u8FD9\u6837\u7684\u505A\u6CD5\u867D\u7136\u4E0D\u80FD\u8282\u7701\u8BF7\u6C42\u6570\u91CF\uFF0C\u4F46\u662F\u80FD\u663E\u8457\u51CF\u5C11\u54CD\u5E94\u6570\u636E\u5927\u5C0F\u3002</p><h3 id="\u4EE3\u7801\u6587\u4EF6" tabindex="-1">\u4EE3\u7801\u6587\u4EF6 <a class="header-anchor" href="#\u4EE3\u7801\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u8FD9\u91CC\u7279\u6307\u9664\u4E86 HTML \u5916\u7684\u4EE3\u7801\u6587\u4EF6\uFF0C\u56E0\u4E3A HTML \u6587\u4EF6\u4E00\u822C\u4E0D\u7F13\u5B58\u6216\u8005\u7F13\u5B58\u65F6\u95F4\u5F88\u77ED\u3002 \u4E00\u822C\u6765\u8BF4\uFF0C\u73B0\u5728\u90FD\u4F1A\u4F7F\u7528\u5DE5\u5177\u6765\u6253\u5305\u4EE3\u7801\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u5BF9\u6587\u4EF6\u540D\u8FDB\u884C\u54C8\u5E0C\u5904\u7406\uFF0C\u53EA\u6709\u5F53\u4EE3\u7801\u4FEE\u6539\u540E\u624D\u4F1A\u751F\u6210\u65B0\u7684\u6587\u4EF6\u540D\u3002\u57FA\u4E8E\u6B64\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u7ED9\u4EE3\u7801\u6587\u4EF6\u8BBE\u7F6E\u7F13\u5B58\u6709\u6548\u671F\u4E00\u5E74 Cache-Control: max-age=31536000\uFF0C\u8FD9\u6837\u53EA\u6709\u5F53 HTML \u6587\u4EF6\u4E2D\u5F15\u5165\u7684\u6587\u4EF6\u540D\u53D1\u751F\u4E86\u6539\u53D8\u624D\u4F1A\u53BB\u4E0B\u8F7D\u6700\u65B0\u7684\u4EE3\u7801\u6587\u4EF6\uFF0C\u5426\u5219\u5C31\u4E00\u76F4\u4F7F\u7528\u7F13\u5B58\u3002</p><h2 id="\u793A\u4F8B-nginx" tabindex="-1">\u793A\u4F8B nginx <a class="header-anchor" href="#\u793A\u4F8B-nginx" aria-hidden="true">#</a></h2><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E" })}"># \u5F3A\u7F13\u5B58\u65F6\u6548\u4E3A30s\uFF0C30s\u540E\u9ED8\u8BA4\u4F7F\u7528\u534F\u5546\u7F13\u5B58\uFF0C\u6B64\u65F6\u7F13\u5B58\u65F6\u6548\u4F18\u5148\u7EA7 &gt; max-age</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">location</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> add_header </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">Cache-Control max-age=60;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> root </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> index </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> expires </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">30s;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E" })}"># \u53EA\u4F7F\u7528\u534F\u5546\u7F13\u5B58</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">location</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#7F848E" })}"># no-cache \u7981\u7528\u5F3A\u7F13\u5B58</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> add_header </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">Cache-Control no-cache;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> root </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> index </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E" })}"># \u5F3A\u7F13\u5B58 \u7F13\u5B58\u65F6\u6548 1\u5C0F\u65F6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">location</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> / {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> root </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  html;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> index </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> index.html index.htm;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}"> expires </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">1h;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95" })}"># \u5F3A\u7F13\u5B58\u65F6\u6548\u4E3A30s\uFF0C30s\u540E\u9ED8\u8BA4\u4F7F\u7528\u534F\u5546\u7F13\u5B58\uFF0C\u6B64\u65F6\u7F13\u5B58\u65F6\u6548\u4F18\u5148\u7EA7 &gt; max-age</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">location</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">/ </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> add_header </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">Cache-Control max-age=60</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> root </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  html</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> index </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> index.html index.htm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> expires </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">30s</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#676E95" })}"># \u53EA\u4F7F\u7528\u534F\u5546\u7F13\u5B58</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">location</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">/ </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"># no-cache \u7981\u7528\u5F3A\u7F13\u5B58</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> add_header </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">Cache-Control no-cache</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> root </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  html</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> index </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> index.html index.htm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#676E95" })}"># \u5F3A\u7F13\u5B58 \u7F13\u5B58\u65F6\u6548 1\u5C0F\u65F6</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">location</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">/ </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> root </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  html</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> index </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> index.html index.htm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">   </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> expires </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">1h</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("basic-quality/browser/browser/browser-cache/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};