import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const _imports_0 = "/vite-press/assets/tcp-udp1.7807ab72.webp";
const _imports_1 = "/vite-press/assets/tcp-udp2.71a1be3c.webp";
const _imports_2 = "/vite-press/assets/tcp-udp3.fc6ba39b.webp";
const _imports_3 = "/vite-press/assets/tcp-udp4.277517e3.webp";
const _imports_4 = "/vite-press/assets/tcp-udp5.eebaafcf.webp";
const _imports_5 = "/vite-press/assets/tcp-udp6.dca67c9f.webp";
const __pageData = JSON.parse('{"title":"TCP\u548CUDP\u7684\u533A\u522B","description":"","frontmatter":{"createTime":"2022/10/26","tag":"\u8BA1\u7B97\u673A"},"headers":[{"level":2,"title":"\u4E00\u3001TCP/IP\u7F51\u7EDC\u6A21\u578B","slug":"\u4E00\u3001tcp-ip\u7F51\u7EDC\u6A21\u578B","link":"#\u4E00\u3001tcp-ip\u7F51\u7EDC\u6A21\u578B","children":[]},{"level":2,"title":"\u4E8C\u3001UDP","slug":"\u4E8C\u3001udp","link":"#\u4E8C\u3001udp","children":[{"level":3,"title":"\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9","slug":"\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9","link":"#\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9","children":[]},{"level":3,"title":"\u4E09\u3001TCP","slug":"\u4E09\u3001tcp","link":"#\u4E09\u3001tcp","children":[]},{"level":3,"title":"2. TCP\u65AD\u5F00\u94FE\u63A5","slug":"_2-tcp\u65AD\u5F00\u94FE\u63A5","link":"#_2-tcp\u65AD\u5F00\u94FE\u63A5","children":[]},{"level":3,"title":"3. TCP\u534F\u8BAE\u7684\u7279\u70B9","slug":"_3-tcp\u534F\u8BAE\u7684\u7279\u70B9","link":"#_3-tcp\u534F\u8BAE\u7684\u7279\u70B9","children":[]},{"level":3,"title":"\u56DB\u3001TCP\u548CUDP\u7684\u6BD4\u8F83","slug":"\u56DB\u3001tcp\u548Cudp\u7684\u6BD4\u8F83","link":"#\u56DB\u3001tcp\u548Cudp\u7684\u6BD4\u8F83","children":[]},{"level":3,"title":"\u4E94\u3001TCP \u548C UDP \u5E94\u7528\u573A\u666F","slug":"\u4E94\u3001tcp-\u548C-udp-\u5E94\u7528\u573A\u666F","link":"#\u4E94\u3001tcp-\u548C-udp-\u5E94\u7528\u573A\u666F","children":[]},{"level":3,"title":"\u516D\u3001\u8FD0\u884C\u5728TCP \u6216UDP\u7684\u5E94\u7528\u5C42\u534F\u8BAE\u5206\u6790","slug":"\u516D\u3001\u8FD0\u884C\u5728tcp-\u6216udp\u7684\u5E94\u7528\u5C42\u534F\u8BAE\u5206\u6790","link":"#\u516D\u3001\u8FD0\u884C\u5728tcp-\u6216udp\u7684\u5E94\u7528\u5C42\u534F\u8BAE\u5206\u6790","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"basic-quality/tcp-udp/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "basic-quality/tcp-udp/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tcp\u548Cudp\u7684\u533A\u522B" tabindex="-1">TCP\u548CUDP\u7684\u533A\u522B <a class="header-anchor" href="#tcp\u548Cudp\u7684\u533A\u522B" aria-hidden="true">#</a></h1>`);
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
  _push(`<ul><li>TCP\u662F\u9762\u5411\u94FE\u63A5\u7684\uFF0C\u800CUDP\u662F\u9762\u5411\u65E0\u8FDE\u63A5\u7684\u3002</li><li>TCP\u4EC5\u652F\u6301\u5355\u64AD\u4F20\u8F93\uFF0CUDP \u63D0\u4F9B\u4E86\u5355\u64AD\uFF0C\u591A\u64AD\uFF0C\u5E7F\u64AD\u7684\u529F\u80FD\u3002</li><li>TCP\u7684\u4E09\u6B21\u63E1\u624B\u4FDD\u8BC1\u4E86\u8FDE\u63A5\u7684\u53EF\u9760\u6027; UDP\u662F\u65E0\u8FDE\u63A5\u7684\u3001\u4E0D\u53EF\u9760\u7684\u4E00\u79CD\u6570\u636E\u4F20\u8F93\u534F\u8BAE\uFF0C\u9996\u5148\u4E0D\u53EF\u9760\u6027\u4F53\u73B0\u5728\u65E0\u8FDE\u63A5\u4E0A\uFF0C\u901A\u4FE1\u90FD\u4E0D\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u5BF9\u63A5\u6536\u5230\u7684\u6570\u636E\u4E5F\u4E0D\u53D1\u9001\u786E\u8BA4\u4FE1\u53F7\uFF0C\u53D1\u9001\u7AEF\u4E0D\u77E5\u9053\u6570\u636E\u662F\u5426\u4F1A\u6B63\u786E\u63A5\u6536\u3002</li><li>UDP\u7684\u5934\u90E8\u5F00\u9500\u6BD4TCP\u7684\u66F4\u5C0F\uFF0C\u6570\u636E\u4F20\u8F93\u901F\u7387\u66F4\u9AD8\uFF0C\u5B9E\u65F6\u6027\u66F4\u597D\u3002</li></ul><h2 id="\u4E00\u3001tcp-ip\u7F51\u7EDC\u6A21\u578B" tabindex="-1">\u4E00\u3001TCP/IP\u7F51\u7EDC\u6A21\u578B <a class="header-anchor" href="#\u4E00\u3001tcp-ip\u7F51\u7EDC\u6A21\u578B" aria-hidden="true">#</a></h2><p>\u8BA1\u7B97\u673A\u4E0E\u7F51\u7EDC\u8BBE\u5907\u8981\u76F8\u4E92\u901A\u4FE1\uFF0C\u53CC\u65B9\u5C31\u5FC5\u987B\u57FA\u4E8E\u76F8\u540C\u7684\u65B9\u6CD5\u3002\u6BD4\u5982\uFF0C\u5982\u4F55\u63A2\u6D4B\u5230\u901A\u4FE1\u76EE\u6807\u3001\u7531\u54EA\u4E00\u8FB9\u5148\u53D1\u8D77\u901A\u4FE1\u3001\u4F7F\u7528\u54EA\u79CD\u8BED\u8A00\u8FDB\u884C\u901A\u4FE1\u3001\u600E\u6837\u7ED3\u675F\u901A\u4FE1\u7B49\u89C4\u5219\u90FD\u9700\u8981\u4E8B\u5148\u786E\u5B9A\u3002\u4E0D\u540C\u7684\u786C\u4EF6\u3001\u64CD\u4F5C\u7CFB\u7EDF\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C\u6240\u6709\u7684\u8FD9\u4E00\u5207\u90FD\u9700\u8981\u4E00\u79CD\u89C4\u5219\u3002\u800C\u6211\u4EEC\u5C31\u628A\u8FD9\u79CD\u89C4\u5219\u79F0\u4E3A\u534F\u8BAE\uFF08protocol\uFF09\u3002</p><p>TCP/IP \u662F\u4E92\u8054\u7F51\u76F8\u5173\u7684\u5404\u7C7B\u534F\u8BAE\u65CF\u7684\u603B\u79F0\uFF0C\u6BD4\u5982\uFF1ATCP\uFF0CUDP\uFF0CIP\uFF0CFTP\uFF0CHTTP\uFF0CICMP\uFF0CSMTP \u7B49\u90FD\u5C5E\u4E8E TCP/IP \u65CF\u5185\u7684\u534F\u8BAE\u3002</p><p>TCP/IP\u6A21\u578B\u662F\u4E92\u8054\u7F51\u7684\u57FA\u7840\uFF0C\u5B83\u662F\u4E00\u7CFB\u5217\u7F51\u7EDC\u534F\u8BAE\u7684\u603B\u79F0\u3002\u8FD9\u4E9B\u534F\u8BAE\u53EF\u4EE5\u5212\u5206\u4E3A\u56DB\u5C42\uFF0C\u5206\u522B\u4E3A\u94FE\u8DEF\u5C42\u3001\u7F51\u7EDC\u5C42\u3001\u4F20\u8F93\u5C42\u548C\u5E94\u7528\u5C42\u3002</p><ul><li>\u94FE\u8DEF\u5C42\uFF1A\u8D1F\u8D23\u5C01\u88C5\u548C\u89E3\u5C01\u88C5IP\u62A5\u6587\uFF0C\u53D1\u9001\u548C\u63A5\u53D7ARP/RARP\u62A5\u6587\u7B49\u3002</li><li>\u7F51\u7EDC\u5C42\uFF1A\u8D1F\u8D23\u8DEF\u7531\u4EE5\u53CA\u628A\u5206\u7EC4\u62A5\u6587\u53D1\u9001\u7ED9\u76EE\u6807\u7F51\u7EDC\u6216\u4E3B\u673A\u3002</li><li>\u4F20\u8F93\u5C42\uFF1A\u8D1F\u8D23\u5BF9\u62A5\u6587\u8FDB\u884C\u5206\u7EC4\u548C\u91CD\u7EC4\uFF0C\u5E76\u4EE5TCP\u6216UDP\u534F\u8BAE\u683C\u5F0F\u5C01\u88C5\u62A5\u6587\u3002</li><li>\u5E94\u7528\u5C42\uFF1A\u8D1F\u8D23\u5411\u7528\u6237\u63D0\u4F9B\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6BD4\u5982HTTP\u3001FTP\u3001Telnet\u3001DNS\u3001SMTP\u7B49\u3002 <img${ssrRenderAttr("src", _imports_0)} alt="\u56FE\u7247"></li></ul><p>\u5728\u7F51\u7EDC\u4F53\u7CFB\u7ED3\u6784\u4E2D\u7F51\u7EDC\u901A\u4FE1\u7684\u5EFA\u7ACB\u5FC5\u987B\u662F\u5728\u901A\u4FE1\u53CC\u65B9\u7684\u5BF9\u7B49\u5C42\u8FDB\u884C\uFF0C\u4E0D\u80FD\u4EA4\u9519\u3002 \u5728\u6574\u4E2A\u6570\u636E\u4F20\u8F93\u8FC7\u7A0B\u4E2D\uFF0C\u6570\u636E\u5728\u53D1\u9001\u7AEF\u65F6\u7ECF\u8FC7\u5404\u5C42\u65F6\u90FD\u8981\u9644\u52A0\u4E0A\u76F8\u5E94\u5C42\u7684\u534F\u8BAE\u5934\u548C\u534F\u8BAE\u5C3E\uFF08\u4EC5\u6570\u636E\u94FE\u8DEF\u5C42\u9700\u8981\u5C01\u88C5\u534F\u8BAE\u5C3E\uFF09\u90E8\u5206\uFF0C\u4E5F\u5C31\u662F\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u534F\u8BAE\u5C01\u88C5\uFF0C\u4EE5\u6807\u8BC6\u5BF9\u5E94\u5C42\u6240\u7528\u7684\u901A\u4FE1\u534F\u8BAE\u3002\u63A5\u4E0B\u53BB\u4ECB\u7ECDTCP/IP \u4E2D\u6709\u4E24\u4E2A\u5177\u6709\u4EE3\u8868\u6027\u7684\u4F20\u8F93\u5C42\u534F\u8BAE----TCP \u548C UDP\u3002</p><h2 id="\u4E8C\u3001udp" tabindex="-1">\u4E8C\u3001UDP <a class="header-anchor" href="#\u4E8C\u3001udp" aria-hidden="true">#</a></h2><p>UDP\u534F\u8BAE\u5168\u79F0\u662F\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE\uFF0C\u5728\u7F51\u7EDC\u4E2D\u5B83\u4E0ETCP\u534F\u8BAE\u4E00\u6837\u7528\u4E8E\u5904\u7406\u6570\u636E\u5305\uFF0C\u662F\u4E00\u79CD\u65E0\u8FDE\u63A5\u7684\u534F\u8BAE\u3002\u5728OSI\u6A21\u578B\u4E2D\uFF0C\u5728\u7B2C\u56DB\u5C42\u2014\u2014\u4F20\u8F93\u5C42\uFF0C\u5904\u4E8EIP\u534F\u8BAE\u7684\u4E0A\u4E00\u5C42\u3002UDP\u6709\u4E0D\u63D0\u4F9B\u6570\u636E\u5305\u5206\u7EC4\u3001\u7EC4\u88C5\u548C\u4E0D\u80FD\u5BF9\u6570\u636E\u5305\u8FDB\u884C\u6392\u5E8F\u7684\u7F3A\u70B9\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u62A5\u6587\u53D1\u9001\u4E4B\u540E\uFF0C\u662F\u65E0\u6CD5\u5F97\u77E5\u5176\u662F\u5426\u5B89\u5168\u5B8C\u6574\u5230\u8FBE\u7684\u3002</p><h3 id="\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9" tabindex="-1">\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9 <a class="header-anchor" href="#\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9" aria-hidden="true">#</a></h3><h4 id="_1-\u9762\u5411\u65E0\u8FDE\u63A5" tabindex="-1">1. \u9762\u5411\u65E0\u8FDE\u63A5 <a class="header-anchor" href="#_1-\u9762\u5411\u65E0\u8FDE\u63A5" aria-hidden="true">#</a></h4><p>\u9996\u5148 UDP \u662F\u4E0D\u9700\u8981\u548C TCP\u4E00\u6837\u5728\u53D1\u9001\u6570\u636E\u524D\u8FDB\u884C\u4E09\u6B21\u63E1\u624B\u5EFA\u7ACB\u8FDE\u63A5\u7684\uFF0C\u60F3\u53D1\u6570\u636E\u5C31\u53EF\u4EE5\u5F00\u59CB\u53D1\u9001\u4E86\u3002\u5E76\u4E14\u4E5F\u53EA\u662F\u6570\u636E\u62A5\u6587\u7684\u642C\u8FD0\u5DE5\uFF0C\u4E0D\u4F1A\u5BF9\u6570\u636E\u62A5\u6587\u8FDB\u884C\u4EFB\u4F55\u62C6\u5206\u548C\u62FC\u63A5\u64CD\u4F5C\u3002</p><p>\u5177\u4F53\u6765\u8BF4\u5C31\u662F\uFF1A</p><ul><li>\u5728\u53D1\u9001\u7AEF\uFF0C\u5E94\u7528\u5C42\u5C06\u6570\u636E\u4F20\u9012\u7ED9\u4F20\u8F93\u5C42\u7684 UDP \u534F\u8BAE\uFF0CUDP \u53EA\u4F1A\u7ED9\u6570\u636E\u589E\u52A0\u4E00\u4E2A UDP \u5934\u6807\u8BC6\u4E0B\u662F UDP \u534F\u8BAE\uFF0C\u7136\u540E\u5C31\u4F20\u9012\u7ED9\u7F51\u7EDC\u5C42\u4E86</li><li>\u5728\u63A5\u6536\u7AEF\uFF0C\u7F51\u7EDC\u5C42\u5C06\u6570\u636E\u4F20\u9012\u7ED9\u4F20\u8F93\u5C42\uFF0CUDP \u53EA\u53BB\u9664 IP \u62A5\u6587\u5934\u5C31\u4F20\u9012\u7ED9\u5E94\u7528\u5C42\uFF0C\u4E0D\u4F1A\u4EFB\u4F55\u62FC\u63A5\u64CD\u4F5C</li></ul><h4 id="_2-\u6709\u5355\u64AD\uFF0C\u591A\u64AD\uFF0C\u5E7F\u64AD\u7684\u529F\u80FD" tabindex="-1">2. \u6709\u5355\u64AD\uFF0C\u591A\u64AD\uFF0C\u5E7F\u64AD\u7684\u529F\u80FD <a class="header-anchor" href="#_2-\u6709\u5355\u64AD\uFF0C\u591A\u64AD\uFF0C\u5E7F\u64AD\u7684\u529F\u80FD" aria-hidden="true">#</a></h4><p>UDP \u4E0D\u6B62\u652F\u6301\u4E00\u5BF9\u4E00\u7684\u4F20\u8F93\u65B9\u5F0F\uFF0C\u540C\u6837\u652F\u6301\u4E00\u5BF9\u591A\uFF0C\u591A\u5BF9\u591A\uFF0C\u591A\u5BF9\u4E00\u7684\u65B9\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8BF4 UDP \u63D0\u4F9B\u4E86\u5355\u64AD\uFF0C\u591A\u64AD\uFF0C\u5E7F\u64AD\u7684\u529F\u80FD\u3002</p><h4 id="_3-udp\u662F\u9762\u5411\u62A5\u6587\u7684" tabindex="-1">3. UDP\u662F\u9762\u5411\u62A5\u6587\u7684 <a class="header-anchor" href="#_3-udp\u662F\u9762\u5411\u62A5\u6587\u7684" aria-hidden="true">#</a></h4><p>\u53D1\u9001\u65B9\u7684UDP\u5BF9\u5E94\u7528\u7A0B\u5E8F\u4EA4\u4E0B\u6765\u7684\u62A5\u6587\uFF0C\u5728\u6DFB\u52A0\u9996\u90E8\u540E\u5C31\u5411\u4E0B\u4EA4\u4ED8IP\u5C42\u3002UDP\u5BF9\u5E94\u7528\u5C42\u4EA4\u4E0B\u6765\u7684\u62A5\u6587\uFF0C\u65E2\u4E0D\u5408\u5E76\uFF0C\u4E5F\u4E0D\u62C6\u5206\uFF0C\u800C\u662F\u4FDD\u7559\u8FD9\u4E9B\u62A5\u6587\u7684\u8FB9\u754C\u3002\u56E0\u6B64\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5FC5\u987B\u9009\u62E9\u5408\u9002\u5927\u5C0F\u7684\u62A5\u6587</p><h4 id="_4-\u4E0D\u53EF\u9760\u6027" tabindex="-1">4. \u4E0D\u53EF\u9760\u6027 <a class="header-anchor" href="#_4-\u4E0D\u53EF\u9760\u6027" aria-hidden="true">#</a></h4><p>\u9996\u5148\u4E0D\u53EF\u9760\u6027\u4F53\u73B0\u5728\u65E0\u8FDE\u63A5\u4E0A\uFF0C\u901A\u4FE1\u90FD\u4E0D\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u60F3\u53D1\u5C31\u53D1\uFF0C\u8FD9\u6837\u7684\u60C5\u51B5\u80AF\u5B9A\u4E0D\u53EF\u9760\u3002</p><p>\u5E76\u4E14\u6536\u5230\u4EC0\u4E48\u6570\u636E\u5C31\u4F20\u9012\u4EC0\u4E48\u6570\u636E\uFF0C\u5E76\u4E14\u4E5F\u4E0D\u4F1A\u5907\u4EFD\u6570\u636E\uFF0C\u53D1\u9001\u6570\u636E\u4E5F\u4E0D\u4F1A\u5173\u5FC3\u5BF9\u65B9\u662F\u5426\u5DF2\u7ECF\u6B63\u786E\u63A5\u6536\u5230\u6570\u636E\u4E86\u3002</p><p>\u518D\u8005\u7F51\u7EDC\u73AF\u5883\u65F6\u597D\u65F6\u574F\uFF0C\u4F46\u662F UDP \u56E0\u4E3A\u6CA1\u6709\u62E5\u585E\u63A7\u5236\uFF0C\u4E00\u76F4\u4F1A\u4EE5\u6052\u5B9A\u7684\u901F\u5EA6\u53D1\u9001\u6570\u636E\u3002\u5373\u4F7F\u7F51\u7EDC\u6761\u4EF6\u4E0D\u597D\uFF0C\u4E5F\u4E0D\u4F1A\u5BF9\u53D1\u9001\u901F\u7387\u8FDB\u884C\u8C03\u6574\u3002\u8FD9\u6837\u5B9E\u73B0\u7684\u5F0A\u7AEF\u5C31\u662F\u5728\u7F51\u7EDC\u6761\u4EF6\u4E0D\u597D\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E22\u5305\uFF0C\u4F46\u662F\u4F18\u70B9\u4E5F\u5F88\u660E\u663E\uFF0C\u5728\u67D0\u4E9B\u5B9E\u65F6\u6027\u8981\u6C42\u9AD8\u7684\u573A\u666F\uFF08\u6BD4\u5982\u7535\u8BDD\u4F1A\u8BAE\uFF09\u5C31\u9700\u8981\u4F7F\u7528 UDP \u800C\u4E0D\u662F TCP\u3002 <img${ssrRenderAttr("src", _imports_1)} alt="\u56FE\u7247"></p><p>\u4ECE\u4E0A\u9762\u7684\u52A8\u6001\u56FE\u53EF\u4EE5\u5F97\u77E5\uFF0CUDP\u53EA\u4F1A\u628A\u60F3\u53D1\u7684\u6570\u636E\u62A5\u6587\u4E00\u80A1\u8111\u7684\u4E22\u7ED9\u5BF9\u65B9\uFF0C\u5E76\u4E0D\u5728\u610F\u6570\u636E\u6709\u65E0\u5B89\u5168\u5B8C\u6574\u5230\u8FBE\u3002</p><h4 id="_5-\u5934\u90E8\u5F00\u9500\u5C0F\uFF0C\u4F20\u8F93\u6570\u636E\u62A5\u6587\u65F6\u662F\u5F88\u9AD8\u6548\u7684" tabindex="-1">5. \u5934\u90E8\u5F00\u9500\u5C0F\uFF0C\u4F20\u8F93\u6570\u636E\u62A5\u6587\u65F6\u662F\u5F88\u9AD8\u6548\u7684 <a class="header-anchor" href="#_5-\u5934\u90E8\u5F00\u9500\u5C0F\uFF0C\u4F20\u8F93\u6570\u636E\u62A5\u6587\u65F6\u662F\u5F88\u9AD8\u6548\u7684" aria-hidden="true">#</a></h4><p><img${ssrRenderAttr("src", _imports_2)} alt="\u56FE\u7247"></p><p>UDP \u5934\u90E8\u5305\u542B\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u6570\u636E\uFF1A</p><ul><li>\u4E24\u4E2A\u5341\u516D\u4F4D\u7684\u7AEF\u53E3\u53F7\uFF0C\u5206\u522B\u4E3A\u6E90\u7AEF\u53E3\uFF08\u53EF\u9009\u5B57\u6BB5\uFF09\u548C\u76EE\u6807\u7AEF\u53E3</li><li>\u6574\u4E2A\u6570\u636E\u62A5\u6587\u7684\u957F\u5EA6</li><li>\u6574\u4E2A\u6570\u636E\u62A5\u6587\u7684\u68C0\u9A8C\u548C\uFF08IPv4 \u53EF\u9009 \u5B57\u6BB5\uFF09\uFF0C\u8BE5\u5B57\u6BB5\u7528\u4E8E\u53D1\u73B0\u5934\u90E8\u4FE1\u606F\u548C\u6570\u636E\u4E2D\u7684\u9519\u8BEF</li><li>\u56E0\u6B64 UDP \u7684\u5934\u90E8\u5F00\u9500\u5C0F\uFF0C\u53EA\u6709\u516B\u5B57\u8282\uFF0C\u76F8\u6BD4 TCP \u7684\u81F3\u5C11\u4E8C\u5341\u5B57\u8282\u8981\u5C11\u5F97\u591A\uFF0C\u5728\u4F20\u8F93\u6570\u636E\u62A5\u6587\u65F6\u662F\u5F88\u9AD8\u6548\u7684</li></ul><h3 id="\u4E09\u3001tcp" tabindex="-1">\u4E09\u3001TCP <a class="header-anchor" href="#\u4E09\u3001tcp" aria-hidden="true">#</a></h3><p>\u5F53\u4E00\u53F0\u8BA1\u7B97\u673A\u60F3\u8981\u4E0E\u53E6\u4E00\u53F0\u8BA1\u7B97\u673A\u901A\u8BAF\u65F6\uFF0C\u4E24\u53F0\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u901A\u4FE1\u9700\u8981\u7545\u901A\u4E14\u53EF\u9760\uFF0C\u8FD9\u6837\u624D\u80FD\u4FDD\u8BC1\u6B63\u786E\u6536\u53D1\u6570\u636E\u3002\u4F8B\u5982\uFF0C\u5F53\u4F60\u60F3\u67E5\u770B\u7F51\u9875\u6216\u67E5\u770B\u7535\u5B50\u90AE\u4EF6\u65F6\uFF0C\u5E0C\u671B\u5B8C\u6574\u4E14\u6309\u987A\u5E8F\u67E5\u770B\u7F51\u9875\uFF0C\u800C\u4E0D\u4E22\u5931\u4EFB\u4F55\u5185\u5BB9\u3002\u5F53\u4F60\u4E0B\u8F7D\u6587\u4EF6\u65F6\uFF0C\u5E0C\u671B\u83B7\u5F97\u7684\u662F\u5B8C\u6574\u7684\u6587\u4EF6\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u6587\u4EF6\u7684\u4E00\u90E8\u5206\uFF0C\u56E0\u4E3A\u5982\u679C\u6570\u636E\u4E22\u5931\u6216\u4E71\u5E8F\uFF0C\u90FD\u4E0D\u662F\u4F60\u5E0C\u671B\u5F97\u5230\u7684\u7ED3\u679C\uFF0C\u4E8E\u662F\u5C31\u7528\u5230\u4E86TCP\u3002</p><p>TCP\u534F\u8BAE\u5168\u79F0\u662F\u4F20\u8F93\u63A7\u5236\u534F\u8BAE\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\u7684\u3001\u53EF\u9760\u7684\u3001\u57FA\u4E8E\u5B57\u8282\u6D41\u7684\u4F20\u8F93\u5C42\u901A\u4FE1\u534F\u8BAE\uFF0C\u7531 IETF \u7684RFC 793\u5B9A\u4E49\u3002TCP \u662F\u9762\u5411\u8FDE\u63A5\u7684\u3001\u53EF\u9760\u7684\u6D41\u534F\u8BAE\u3002\u6D41\u5C31\u662F\u6307\u4E0D\u95F4\u65AD\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u4F60\u53EF\u4EE5\u628A\u5B83\u60F3\u8C61\u6210\u6392\u6C34\u7BA1\u4E2D\u7684\u6C34\u6D41\u3002</p><h4 id="_1-tcp\u8FDE\u63A5\u8FC7\u7A0B" tabindex="-1">1. TCP\u8FDE\u63A5\u8FC7\u7A0B <a class="header-anchor" href="#_1-tcp\u8FDE\u63A5\u8FC7\u7A0B" aria-hidden="true">#</a></h4><p><img${ssrRenderAttr("src", _imports_3)} alt="\u56FE\u7247"></p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u53EF\u4EE5\u770B\u5230\u5EFA\u7ACB\u4E00\u4E2ATCP\u8FDE\u63A5\u7684\u8FC7\u7A0B\u4E3A\uFF08\u4E09\u6B21\u63E1\u624B\u7684\u8FC7\u7A0B\uFF09:</p><h4 id="\u7B2C\u4E00\u6B21\u63E1\u624B" tabindex="-1">\u7B2C\u4E00\u6B21\u63E1\u624B <a class="header-anchor" href="#\u7B2C\u4E00\u6B21\u63E1\u624B" aria-hidden="true">#</a></h4><p>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u3002\u8BE5\u62A5\u6587\u6BB5\u4E2D\u5305\u542B\u81EA\u8EAB\u7684\u6570\u636E\u901A\u8BAF\u521D\u59CB\u5E8F\u53F7\u3002\u8BF7\u6C42\u53D1\u9001\u540E\uFF0C\u5BA2\u6237\u7AEF\u4FBF\u8FDB\u5165 SYN-SENT \u72B6\u6001\u3002</p><h4 id="\u7B2C\u4E8C\u6B21\u63E1\u624B" tabindex="-1">\u7B2C\u4E8C\u6B21\u63E1\u624B <a class="header-anchor" href="#\u7B2C\u4E8C\u6B21\u63E1\u624B" aria-hidden="true">#</a></h4><p>\u670D\u52A1\u7AEF\u6536\u5230\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u540E\uFF0C\u5982\u679C\u540C\u610F\u8FDE\u63A5\uFF0C\u5219\u4F1A\u53D1\u9001\u4E00\u4E2A\u5E94\u7B54\uFF0C\u8BE5\u5E94\u7B54\u4E2D\u4E5F\u4F1A\u5305\u542B\u81EA\u8EAB\u7684\u6570\u636E\u901A\u8BAF\u521D\u59CB\u5E8F\u53F7\uFF0C\u53D1\u9001\u5B8C\u6210\u540E\u4FBF\u8FDB\u5165 SYN-RECEIVED \u72B6\u6001\u3002</p><h4 id="\u7B2C\u4E09\u6B21\u63E1\u624B" tabindex="-1">\u7B2C\u4E09\u6B21\u63E1\u624B <a class="header-anchor" href="#\u7B2C\u4E09\u6B21\u63E1\u624B" aria-hidden="true">#</a></h4><p><img${ssrRenderAttr("src", _imports_4)} alt="\u56FE\u7247"></p><p>\u5F53\u5BA2\u6237\u7AEF\u6536\u5230\u8FDE\u63A5\u540C\u610F\u7684\u5E94\u7B54\u540E\uFF0C\u8FD8\u8981\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u4E00\u4E2A\u786E\u8BA4\u62A5\u6587\u3002\u5BA2\u6237\u7AEF\u53D1\u5B8C\u8FD9\u4E2A\u62A5\u6587\u6BB5\u540E\u4FBF\u8FDB\u5165 ESTABLISHED \u72B6\u6001\uFF0C\u670D\u52A1\u7AEF\u6536\u5230\u8FD9\u4E2A\u5E94\u7B54\u540E\u4E5F\u8FDB\u5165 ESTABLISHED \u72B6\u6001\uFF0C\u6B64\u65F6\u8FDE\u63A5\u5EFA\u7ACB\u6210\u529F\u3002</p><p>\u8FD9\u91CC\u53EF\u80FD\u5927\u5BB6\u4F1A\u6709\u4E2A\u7591\u60D1\uFF1A\u4E3A\u4EC0\u4E48 TCP \u5EFA\u7ACB\u8FDE\u63A5\u9700\u8981\u4E09\u6B21\u63E1\u624B\uFF0C\u800C\u4E0D\u662F\u4E24\u6B21\uFF1F\u8FD9\u662F\u56E0\u4E3A\u8FD9\u662F\u4E3A\u4E86\u9632\u6B62\u51FA\u73B0\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u88AB\u670D\u52A1\u7AEF\u63A5\u6536\u7684\u60C5\u51B5\uFF0C\u4ECE\u800C\u4EA7\u751F\u9519\u8BEF\u3002</p><h3 id="_2-tcp\u65AD\u5F00\u94FE\u63A5" tabindex="-1">2. TCP\u65AD\u5F00\u94FE\u63A5 <a class="header-anchor" href="#_2-tcp\u65AD\u5F00\u94FE\u63A5" aria-hidden="true">#</a></h3><p><img${ssrRenderAttr("src", _imports_5)} alt="\u56FE\u7247"></p><p>TCP \u662F\u5168\u53CC\u5DE5\u7684\uFF0C\u5728\u65AD\u5F00\u8FDE\u63A5\u65F6\u4E24\u7AEF\u90FD\u9700\u8981\u53D1\u9001 FIN \u548C ACK\u3002</p><h4 id="\u7B2C\u4E00\u6B21\u63E1\u624B-1" tabindex="-1">\u7B2C\u4E00\u6B21\u63E1\u624B <a class="header-anchor" href="#\u7B2C\u4E00\u6B21\u63E1\u624B-1" aria-hidden="true">#</a></h4><p>\u82E5\u5BA2\u6237\u7AEF A \u8BA4\u4E3A\u6570\u636E\u53D1\u9001\u5B8C\u6210\uFF0C\u5219\u5B83\u9700\u8981\u5411\u670D\u52A1\u7AEF B \u53D1\u9001\u8FDE\u63A5\u91CA\u653E\u8BF7\u6C42\u3002</p><h4 id="\u7B2C\u4E8C\u6B21\u63E1\u624B-1" tabindex="-1">\u7B2C\u4E8C\u6B21\u63E1\u624B <a class="header-anchor" href="#\u7B2C\u4E8C\u6B21\u63E1\u624B-1" aria-hidden="true">#</a></h4><p>B \u6536\u5230\u8FDE\u63A5\u91CA\u653E\u8BF7\u6C42\u540E\uFF0C\u4F1A\u544A\u8BC9\u5E94\u7528\u5C42\u8981\u91CA\u653E TCP \u94FE\u63A5\u3002\u7136\u540E\u4F1A\u53D1\u9001 ACK \u5305\uFF0C\u5E76\u8FDB\u5165 CLOSE_WAIT \u72B6\u6001\uFF0C\u6B64\u65F6\u8868\u660E A \u5230 B \u7684\u8FDE\u63A5\u5DF2\u7ECF\u91CA\u653E\uFF0C\u4E0D\u518D\u63A5\u6536 A \u53D1\u7684\u6570\u636E\u4E86\u3002\u4F46\u662F\u56E0\u4E3A TCP \u8FDE\u63A5\u662F\u53CC\u5411\u7684\uFF0C\u6240\u4EE5 B \u4ECD\u65E7\u53EF\u4EE5\u53D1\u9001\u6570\u636E\u7ED9 A\u3002</p><h4 id="\u7B2C\u4E09\u6B21\u63E1\u624B-1" tabindex="-1">\u7B2C\u4E09\u6B21\u63E1\u624B <a class="header-anchor" href="#\u7B2C\u4E09\u6B21\u63E1\u624B-1" aria-hidden="true">#</a></h4><p>B \u5982\u679C\u6B64\u65F6\u8FD8\u6709\u6CA1\u53D1\u5B8C\u7684\u6570\u636E\u4F1A\u7EE7\u7EED\u53D1\u9001\uFF0C\u5B8C\u6BD5\u540E\u4F1A\u5411 A \u53D1\u9001\u8FDE\u63A5\u91CA\u653E\u8BF7\u6C42\uFF0C\u7136\u540E B \u4FBF\u8FDB\u5165 LAST-ACK \u72B6\u6001\u3002</p><h4 id="\u7B2C\u56DB\u6B21\u63E1\u624B" tabindex="-1">\u7B2C\u56DB\u6B21\u63E1\u624B <a class="header-anchor" href="#\u7B2C\u56DB\u6B21\u63E1\u624B" aria-hidden="true">#</a></h4><ul><li><p>A \u6536\u5230\u91CA\u653E\u8BF7\u6C42\u540E\uFF0C\u5411 B \u53D1\u9001\u786E\u8BA4\u5E94\u7B54\uFF0C\u6B64\u65F6 A \u8FDB\u5165 TIME-WAIT \u72B6\u6001\u3002</p></li><li><p>\u8BE5\u72B6\u6001\u4F1A\u6301\u7EED 2MSL\uFF08\u6700\u5927\u6BB5\u751F\u5B58\u671F\uFF0C\u6307\u62A5\u6587\u6BB5\u5728\u7F51\u7EDC\u4E2D\u751F\u5B58\u7684\u65F6\u95F4\uFF0C\u8D85\u65F6\u4F1A\u88AB\u629B\u5F03\uFF09 \u65F6\u95F4\uFF0C\u82E5\u8BE5\u65F6\u95F4\u6BB5\u5185\u6CA1\u6709 B \u7684\u91CD\u53D1\u8BF7\u6C42\u7684\u8BDD\uFF0C\u5C31\u8FDB\u5165 CLOSED \u72B6\u6001\u3002\u5F53 B \u6536\u5230\u786E\u8BA4\u5E94\u7B54\u540E\uFF0C\u4E5F\u4FBF\u8FDB\u5165 CLOSED \u72B6\u6001\u3002</p></li></ul><h3 id="_3-tcp\u534F\u8BAE\u7684\u7279\u70B9" tabindex="-1">3. TCP\u534F\u8BAE\u7684\u7279\u70B9 <a class="header-anchor" href="#_3-tcp\u534F\u8BAE\u7684\u7279\u70B9" aria-hidden="true">#</a></h3><h4 id="\u9762\u5411\u8FDE\u63A5" tabindex="-1">\u9762\u5411\u8FDE\u63A5 <a class="header-anchor" href="#\u9762\u5411\u8FDE\u63A5" aria-hidden="true">#</a></h4><p>\u9762\u5411\u8FDE\u63A5\uFF0C\u662F\u6307\u53D1\u9001\u6570\u636E\u4E4B\u524D\u5FC5\u987B\u5728\u4E24\u7AEF\u5EFA\u7ACB\u8FDE\u63A5\u3002\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65B9\u6CD5\u662F\u201C\u4E09\u6B21\u63E1\u624B\u201D\uFF0C\u8FD9\u6837\u80FD\u5EFA\u7ACB\u53EF\u9760\u7684\u8FDE\u63A5\u3002\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u662F\u4E3A\u6570\u636E\u7684\u53EF\u9760\u4F20\u8F93\u6253\u4E0B\u4E86\u57FA\u7840\u3002</p><h4 id="\u4EC5\u652F\u6301\u5355\u64AD\u4F20\u8F93" tabindex="-1">\u4EC5\u652F\u6301\u5355\u64AD\u4F20\u8F93 <a class="header-anchor" href="#\u4EC5\u652F\u6301\u5355\u64AD\u4F20\u8F93" aria-hidden="true">#</a></h4><p>\u6BCF\u6761TCP\u4F20\u8F93\u8FDE\u63A5\u53EA\u80FD\u6709\u4E24\u4E2A\u7AEF\u70B9\uFF0C\u53EA\u80FD\u8FDB\u884C\u70B9\u5BF9\u70B9\u7684\u6570\u636E\u4F20\u8F93\uFF0C\u4E0D\u652F\u6301\u591A\u64AD\u548C\u5E7F\u64AD\u4F20\u8F93\u65B9\u5F0F\u3002</p><h4 id="\u9762\u5411\u5B57\u8282\u6D41" tabindex="-1">\u9762\u5411\u5B57\u8282\u6D41 <a class="header-anchor" href="#\u9762\u5411\u5B57\u8282\u6D41" aria-hidden="true">#</a></h4><p>TCP\u4E0D\u50CFUDP\u4E00\u6837\u90A3\u6837\u4E00\u4E2A\u4E2A\u62A5\u6587\u72EC\u7ACB\u5730\u4F20\u8F93\uFF0C\u800C\u662F\u5728\u4E0D\u4FDD\u7559\u62A5\u6587\u8FB9\u754C\u7684\u60C5\u51B5\u4E0B\u4EE5\u5B57\u8282\u6D41\u65B9\u5F0F\u8FDB\u884C\u4F20\u8F93\u3002</p><h4 id="\u53EF\u9760\u4F20\u8F93" tabindex="-1">\u53EF\u9760\u4F20\u8F93 <a class="header-anchor" href="#\u53EF\u9760\u4F20\u8F93" aria-hidden="true">#</a></h4><p>\u5BF9\u4E8E\u53EF\u9760\u4F20\u8F93\uFF0C\u5224\u65AD\u4E22\u5305\uFF0C\u8BEF\u7801\u9760\u7684\u662FTCP\u7684\u6BB5\u7F16\u53F7\u4EE5\u53CA\u786E\u8BA4\u53F7\u3002TCP\u4E3A\u4E86\u4FDD\u8BC1\u62A5\u6587\u4F20\u8F93\u7684\u53EF\u9760\uFF0C\u5C31\u7ED9\u6BCF\u4E2A\u5305\u4E00\u4E2A\u5E8F\u53F7\uFF0C\u540C\u65F6\u5E8F\u53F7\u4E5F\u4FDD\u8BC1\u4E86\u4F20\u9001\u5230\u63A5\u6536\u7AEF\u5B9E\u4F53\u7684\u5305\u7684\u6309\u5E8F\u63A5\u6536\u3002\u7136\u540E\u63A5\u6536\u7AEF\u5B9E\u4F53\u5BF9\u5DF2\u6210\u529F\u6536\u5230\u7684\u5B57\u8282\u53D1\u56DE\u4E00\u4E2A\u76F8\u5E94\u7684\u786E\u8BA4(ACK)\uFF1B\u5982\u679C\u53D1\u9001\u7AEF\u5B9E\u4F53\u5728\u5408\u7406\u7684\u5F80\u8FD4\u65F6\u5EF6(RTT)\u5185\u672A\u6536\u5230\u786E\u8BA4\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684\u6570\u636E\uFF08\u5047\u8BBE\u4E22\u5931\u4E86\uFF09\u5C06\u4F1A\u88AB\u91CD\u4F20\u3002</p><h4 id="\u63D0\u4F9B\u62E5\u585E\u63A7\u5236" tabindex="-1">\u63D0\u4F9B\u62E5\u585E\u63A7\u5236 <a class="header-anchor" href="#\u63D0\u4F9B\u62E5\u585E\u63A7\u5236" aria-hidden="true">#</a></h4><p>\u5F53\u7F51\u7EDC\u51FA\u73B0\u62E5\u585E\u7684\u65F6\u5019\uFF0CTCP\u80FD\u591F\u51CF\u5C0F\u5411\u7F51\u7EDC\u6CE8\u5165\u6570\u636E\u7684\u901F\u7387\u548C\u6570\u91CF\uFF0C\u7F13\u89E3\u62E5\u585E</p><h4 id="tcp\u63D0\u4F9B\u5168\u53CC\u5DE5\u901A\u4FE1" tabindex="-1">TCP\u63D0\u4F9B\u5168\u53CC\u5DE5\u901A\u4FE1 <a class="header-anchor" href="#tcp\u63D0\u4F9B\u5168\u53CC\u5DE5\u901A\u4FE1" aria-hidden="true">#</a></h4><p>TCP\u5141\u8BB8\u901A\u4FE1\u53CC\u65B9\u7684\u5E94\u7528\u7A0B\u5E8F\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u80FD\u53D1\u9001\u6570\u636E\uFF0C\u56E0\u4E3ATCP\u8FDE\u63A5\u7684\u4E24\u7AEF\u90FD\u8BBE\u6709\u7F13\u5B58\uFF0C\u7528\u6765\u4E34\u65F6\u5B58\u653E\u53CC\u5411\u901A\u4FE1\u7684\u6570\u636E\u3002\u5F53\u7136\uFF0CTCP\u53EF\u4EE5\u7ACB\u5373\u53D1\u9001\u4E00\u4E2A\u6570\u636E\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u7F13\u5B58\u4E00\u6BB5\u65F6\u95F4\u4EE5\u4FBF\u4E00\u6B21\u53D1\u9001\u66F4\u591A\u7684\u6570\u636E\u6BB5\uFF08\u6700\u5927\u7684\u6570\u636E\u6BB5\u5927\u5C0F\u53D6\u51B3\u4E8EMSS\uFF09</p><h3 id="\u56DB\u3001tcp\u548Cudp\u7684\u6BD4\u8F83" tabindex="-1">\u56DB\u3001TCP\u548CUDP\u7684\u6BD4\u8F83 <a class="header-anchor" href="#\u56DB\u3001tcp\u548Cudp\u7684\u6BD4\u8F83" aria-hidden="true">#</a></h3><h4 id="_1-\u5BF9\u6BD4" tabindex="-1">1. \u5BF9\u6BD4 <a class="header-anchor" href="#_1-\u5BF9\u6BD4" aria-hidden="true">#</a></h4><h4 id="udp-tcp" tabindex="-1">UDP TCP <a class="header-anchor" href="#udp-tcp" aria-hidden="true">#</a></h4><ul><li>\u662F\u5426\u8FDE\u63A5 \u65E0\u8FDE\u63A5 \u9762\u5411\u8FDE\u63A5</li><li>\u662F\u5426\u53EF\u9760 \u4E0D\u53EF\u9760\u4F20\u8F93\uFF0C\u4E0D\u4F7F\u7528\u6D41\u91CF\u63A7\u5236\u548C\u62E5\u585E\u63A7\u5236 \u53EF\u9760\u4F20\u8F93\uFF0C\u4F7F\u7528\u6D41\u91CF\u63A7\u5236\u548C\u62E5\u585E\u63A7\u5236</li><li>\u8FDE\u63A5\u5BF9\u8C61\u4E2A\u6570 \u652F\u6301\u4E00\u5BF9\u4E00\uFF0C\u4E00\u5BF9\u591A\uFF0C\u591A\u5BF9\u4E00\u548C\u591A\u5BF9\u591A\u4EA4\u4E92\u901A\u4FE1 \u53EA\u80FD\u662F\u4E00\u5BF9\u4E00\u901A\u4FE1</li><li>\u4F20\u8F93\u65B9\u5F0F \u9762\u5411\u62A5\u6587 \u9762\u5411\u5B57\u8282\u6D41</li><li>\u9996\u90E8\u5F00\u9500 \u9996\u90E8\u5F00\u9500\u5C0F\uFF0C\u4EC58\u5B57\u8282 \u9996\u90E8\u6700\u5C0F20\u5B57\u8282\uFF0C\u6700\u592760\u5B57\u8282</li><li>\u9002\u7528\u573A\u666F \u9002\u7528\u4E8E\u5B9E\u65F6\u5E94\u7528\uFF08IP\u7535\u8BDD\u3001\u89C6\u9891\u4F1A\u8BAE\u3001\u76F4\u64AD\u7B49\uFF09 \u9002\u7528\u4E8E\u8981\u6C42\u53EF\u9760\u4F20\u8F93\u7684\u5E94\u7528\uFF0C\u4F8B\u5982\u6587\u4EF6\u4F20\u8F93</li></ul><h3 id="\u4E94\u3001tcp-\u548C-udp-\u5E94\u7528\u573A\u666F" tabindex="-1">\u4E94\u3001TCP \u548C UDP \u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u4E94\u3001tcp-\u548C-udp-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h3><ul><li><p>UDP\u7684\u5E94\u7528\u573A\u666F\uFF1A\u5373\u65F6\u901A\u4FE1\u3002\u9762\u5411\u6570\u636E\u62A5\u65B9\u5F0F\uFF1B\u7F51\u7EDC\u6570\u636E\u5927\u591A\u4E3A\u77ED\u6D88\u606F\uFF1B\u62E5\u6709\u5927\u91CF\u5BA2\u6237\u7AEF\uFF1B\u5BF9\u6570\u636E\u5B89\u5168\u6027\u65E0\u7279\u6B8A\u8981\u6C42\uFF1B\u7F51\u7EDC\u8D1F\u62C5\u91CD\u4F46\u5BF9\u54CD\u5E94\u901F\u5EA6\u8981\u6C42\u9AD8\u7684\u573A\u666F\u3002eg: IP\u7535\u8BDD\u3001\u5B9E\u65F6\u89C6\u9891\u4F1A\u8BAE\u7B49\u3002</p></li><li><p>TCP\u7684\u5E94\u7528\u573A\u666F\uFF1A\u5BF9\u6570\u636E\u51C6\u786E\u6027\u8981\u6C42\u9AD8\uFF0C\u901F\u5EA6\u53EF\u4EE5\u76F8\u5BF9\u8F83\u6162\u7684\u3002eg: \u6587\u4EF6\u4F20\u8F93\u3001\u90AE\u4EF6\u7684\u53D1\u9001\u4E0E\u63A5\u6536\u7B49\u3002</p></li></ul><h3 id="\u516D\u3001\u8FD0\u884C\u5728tcp-\u6216udp\u7684\u5E94\u7528\u5C42\u534F\u8BAE\u5206\u6790" tabindex="-1">\u516D\u3001\u8FD0\u884C\u5728TCP \u6216UDP\u7684\u5E94\u7528\u5C42\u534F\u8BAE\u5206\u6790 <a class="header-anchor" href="#\u516D\u3001\u8FD0\u884C\u5728tcp-\u6216udp\u7684\u5E94\u7528\u5C42\u534F\u8BAE\u5206\u6790" aria-hidden="true">#</a></h3><h4 id="\u8FD0\u884C\u5728tcp\u534F\u8BAE\u4E0A\u7684\u534F\u8BAE" tabindex="-1">\u8FD0\u884C\u5728TCP\u534F\u8BAE\u4E0A\u7684\u534F\u8BAE <a class="header-anchor" href="#\u8FD0\u884C\u5728tcp\u534F\u8BAE\u4E0A\u7684\u534F\u8BAE" aria-hidden="true">#</a></h4><ul><li>HTTP\uFF08Hypertext Transfer Protocol\uFF0C\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF09\uFF0C\u4E3B\u8981\u7528\u4E8E\u666E\u901A\u6D4F\u89C8\u3002</li><li>HTTPS\uFF08HTTP over SSL\uFF0C\u5B89\u5168\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF09,HTTP\u534F\u8BAE\u7684\u5B89\u5168\u7248\u672C\u3002</li><li>FTP\uFF08File Transfer Protocol\uFF0C\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09\uFF0C\u7528\u4E8E\u6587\u4EF6\u4F20\u8F93\u3002</li><li>POP3\uFF08Post Office Protocol, version 3\uFF0C\u90AE\u5C40\u534F\u8BAE\uFF09\uFF0C\u6536\u90AE\u4EF6\u7528\u3002</li><li>SMTP\uFF08Simple Mail Transfer Protocol\uFF0C\u7B80\u5355\u90AE\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09\uFF0C\u7528\u6765\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\u3002</li><li>TELNET\uFF08Teletype over the Network\uFF0C\u7F51\u7EDC\u7535\u4F20\uFF09\uFF0C\u901A\u8FC7\u4E00\u4E2A\u7EC8\u7AEF\uFF08terminal\uFF09\u767B\u9646\u5230\u7F51\u7EDC\u3002</li><li>SSH\uFF08Secure Shell\uFF0C\u7528\u4E8E\u66FF\u4EE3\u5B89\u5168\u6027\u5DEE\u7684TELNET\uFF09\uFF0C\u7528\u4E8E\u52A0\u5BC6\u5B89\u5168\u767B\u9646\u7528\u3002</li></ul><h4 id="\u8FD0\u884C\u5728udp\u534F\u8BAE\u4E0A\u7684\u534F\u8BAE" tabindex="-1">\u8FD0\u884C\u5728UDP\u534F\u8BAE\u4E0A\u7684\u534F\u8BAE <a class="header-anchor" href="#\u8FD0\u884C\u5728udp\u534F\u8BAE\u4E0A\u7684\u534F\u8BAE" aria-hidden="true">#</a></h4><ul><li>BOOTP\uFF08Boot Protocol\uFF0C\u542F\u52A8\u534F\u8BAE\uFF09\uFF0C\u5E94\u7528\u4E8E\u65E0\u76D8\u8BBE\u5907\u3002</li><li>NTP\uFF08Network Time Protocol\uFF0C\u7F51\u7EDC\u65F6\u95F4\u534F\u8BAE\uFF09\uFF0C\u7528\u4E8E\u7F51\u7EDC\u540C\u6B65\u3002</li><li>DHCP\uFF08Dynamic Host Configuration Protocol\uFF0C\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE\uFF09\uFF0C\u52A8\u6001\u914D\u7F6EIP\u5730\u5740\u3002</li></ul><h4 id="\u8FD0\u884C\u5728tcp\u548Cudp\u534F\u8BAE\u4E0A" tabindex="-1">\u8FD0\u884C\u5728TCP\u548CUDP\u534F\u8BAE\u4E0A <a class="header-anchor" href="#\u8FD0\u884C\u5728tcp\u548Cudp\u534F\u8BAE\u4E0A" aria-hidden="true">#</a></h4><ul><li>DNS\uFF08Domain Name Service\uFF0C\u57DF\u540D\u670D\u52A1\uFF09\uFF0C\u7528\u4E8E\u5B8C\u6210\u5730\u5740\u67E5\u627E\uFF0C\u90AE\u4EF6\u8F6C\u53D1\u7B49\u5DE5\u4F5C\u3002</li><li>ECHO\uFF08Echo Protocol\uFF0C\u56DE\u7ED5\u534F\u8BAE\uFF09\uFF0C\u7528\u4E8E\u67E5\u9519\u53CA\u6D4B\u91CF\u5E94\u7B54\u65F6\u95F4\uFF08\u8FD0\u884C\u5728TCP\u548CUDP\u534F\u8BAE\u4E0A\uFF09\u3002</li><li>SNMP\uFF08Simple Network Management Protocol\uFF0C\u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE\uFF09\uFF0C\u7528\u4E8E\u7F51\u7EDC\u4FE1\u606F\u7684\u6536\u96C6\u548C\u7F51\u7EDC\u7BA1\u7406\u3002</li><li>DHCP\uFF08Dynamic Host Configuration Protocol\uFF0C\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE\uFF09\uFF0C\u52A8\u6001\u914D\u7F6EIP\u5730\u5740\u3002</li><li>ARP\uFF08Address Resolution Protocol\uFF0C\u5730\u5740\u89E3\u6790\u534F\u8BAE\uFF09\uFF0C\u7528\u4E8E\u52A8\u6001\u89E3\u6790\u4EE5\u592A\u7F51\u786C\u4EF6\u7684\u5730\u5740\u3002</li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>TCP\u5411\u4E0A\u5C42\u63D0\u4F9B\u9762\u5411\u8FDE\u63A5\u7684\u53EF\u9760\u670D\u52A1 \uFF0CUDP\u5411\u4E0A\u5C42\u63D0\u4F9B\u65E0\u8FDE\u63A5\u4E0D\u53EF\u9760\u670D\u52A1\u3002</li><li>\u867D\u7136 UDP \u5E76\u6CA1\u6709 TCP \u4F20\u8F93\u6765\u7684\u51C6\u786E\uFF0C\u4F46\u662F\u4E5F\u80FD\u5728\u5F88\u591A\u5B9E\u65F6\u6027\u8981\u6C42\u9AD8\u7684\u5730\u65B9\u6709\u6240\u4F5C\u4E3A</li><li>\u5BF9\u6570\u636E\u51C6\u786E\u6027\u8981\u6C42\u9AD8\uFF0C\u901F\u5EA6\u53EF\u4EE5\u76F8\u5BF9\u8F83\u6162\u7684\uFF0C\u53EF\u4EE5\u9009\u7528TCP</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("basic-quality/tcp-udp/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
