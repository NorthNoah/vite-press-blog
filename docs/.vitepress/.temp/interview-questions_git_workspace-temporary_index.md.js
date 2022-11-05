import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"git \u5DE5\u4F5C\u533A&\u6682\u5B58\u533A\u7684\u64CD\u4F5C\u547D\u4EE4","description":"","frontmatter":{"createTime":"2022/10/23","tag":"git"},"headers":[{"level":2,"title":"\u5DE5\u4F5C\u533A","slug":"\u5DE5\u4F5C\u533A","link":"#\u5DE5\u4F5C\u533A","children":[{"level":3,"title":"\u4ECE\u8FDC\u7A0B\u514B\u9686\u4ED3\u5E93","slug":"\u4ECE\u8FDC\u7A0B\u514B\u9686\u4ED3\u5E93","link":"#\u4ECE\u8FDC\u7A0B\u514B\u9686\u4ED3\u5E93","children":[]},{"level":3,"title":"\u63D0\u4EA4","slug":"\u63D0\u4EA4","link":"#\u63D0\u4EA4","children":[]},{"level":3,"title":"\u64A4\u9500","slug":"\u64A4\u9500","link":"#\u64A4\u9500","children":[]},{"level":3,"title":"\u66F4\u65B0\u6587\u4EF6","slug":"\u66F4\u65B0\u6587\u4EF6","link":"#\u66F4\u65B0\u6587\u4EF6","children":[]},{"level":3,"title":"\u67E5\u8BE2\u4FE1\u606F","slug":"\u67E5\u8BE2\u4FE1\u606F","link":"#\u67E5\u8BE2\u4FE1\u606F","children":[]}]},{"level":2,"title":"\u6682\u5B58\u533A","slug":"\u6682\u5B58\u533A","link":"#\u6682\u5B58\u533A","children":[{"level":3,"title":"\u63D0\u4EA4\u6587\u4EF6\u5230\u7248\u672C\u5E93","slug":"\u63D0\u4EA4\u6587\u4EF6\u5230\u7248\u672C\u5E93","link":"#\u63D0\u4EA4\u6587\u4EF6\u5230\u7248\u672C\u5E93","children":[]},{"level":3,"title":"\u67E5\u770B\u4FE1\u606F","slug":"\u67E5\u770B\u4FE1\u606F","link":"#\u67E5\u770B\u4FE1\u606F","children":[]},{"level":3,"title":"\u6253\u6807\u7B7E","slug":"\u6253\u6807\u7B7E","link":"#\u6253\u6807\u7B7E","children":[]},{"level":3,"title":"\u5206\u652F\u7BA1\u7406","slug":"\u5206\u652F\u7BA1\u7406","link":"#\u5206\u652F\u7BA1\u7406","children":[]}]}],"relativePath":"interview-questions/git/workspace-temporary/index.md","lastUpdated":1667281923000}');
const _sfc_main = { name: "interview-questions/git/workspace-temporary/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_ArticleMetadata = resolveComponent("ArticleMetadata");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="git-\u5DE5\u4F5C\u533A-\u6682\u5B58\u533A\u7684\u64CD\u4F5C\u547D\u4EE4" tabindex="-1">git \u5DE5\u4F5C\u533A&amp;\u6682\u5B58\u533A\u7684\u64CD\u4F5C\u547D\u4EE4 <a class="header-anchor" href="#git-\u5DE5\u4F5C\u533A-\u6682\u5B58\u533A\u7684\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a></h1>`);
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
  _push(`<h2 id="\u5DE5\u4F5C\u533A" tabindex="-1">\u5DE5\u4F5C\u533A <a class="header-anchor" href="#\u5DE5\u4F5C\u533A" aria-hidden="true">#</a></h2><p>git init</p><h3 id="\u4ECE\u8FDC\u7A0B\u514B\u9686\u4ED3\u5E93" tabindex="-1">\u4ECE\u8FDC\u7A0B\u514B\u9686\u4ED3\u5E93 <a class="header-anchor" href="#\u4ECE\u8FDC\u7A0B\u514B\u9686\u4ED3\u5E93" aria-hidden="true">#</a></h3><p>git clone XXX</p><h3 id="\u63D0\u4EA4" tabindex="-1">\u63D0\u4EA4 <a class="header-anchor" href="#\u63D0\u4EA4" aria-hidden="true">#</a></h3><ol><li>\u63D0\u4EA4\u5DE5\u4F5C\u533A\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A\uFF1Agit add .</li><li>\u63D0\u4EA4\u5DE5\u4F5C\u533A\u4E2D\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\uFF1Agit add file1 file2 ...;</li><li>\u63D0\u4EA4\u5DE5\u4F5C\u533A\u4E2D\u67D0\u4E2A\u6587\u4EF6\u5939\u4E2D\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A\uFF1Agit add [dir];</li></ol><h3 id="\u64A4\u9500" tabindex="-1">\u64A4\u9500 <a class="header-anchor" href="#\u64A4\u9500" aria-hidden="true">#</a></h3><ul><li>\u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u4E5F\u4ECE\u6682\u5B58\u533A\u5220\u9664\u5BF9\u5E94\u6587\u4EF6\u7684\u8BB0\u5F55\uFF1Agit rm file1 file2</li><li>\u4ECE\u6682\u5B58\u533A\u4E2D\u5220\u9664\u6587\u4EF6\uFF0C\u4F46\u662F\u5DE5\u4F5C\u533A\u4F9D\u7136\u8FD8\u6709\u8BE5\u6587\u4EF6:git rm --cached file</li><li>\u53D6\u6D88\u6682\u5B58\u533A\u5DF2\u7ECF\u6682\u5B58\u7684\u6587\u4EF6\uFF1Agit reset HEAD file...</li><li>\u64A4\u9500\u4E0A\u4E00\u6B21\u5BF9\u6587\u4EF6\u7684\u64CD\u4F5C\uFF1Agit checkout --file\u3002\u8981\u786E\u5B9A\u4E0A\u4E00\u6B21\u5BF9\u6587\u4EF6\u7684\u4FEE\u6539\u4E0D\u518D\u9700\u8981\uFF0C\u5982\u679C\u60F3\u4FDD\u7559\u4E0A\u4E00\u6B21\u7684\u4FEE\u6539\u4EE5\u5907\u4EE5\u540E\u7EE7\u7EED\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u4F7F\u7528stashing\u548C\u5206\u652F\u6765\u5904\u7406\uFF1B</li><li>\u9690\u85CF\u5F53\u524D\u53D8\u66F4\uFF0C\u4EE5\u4FBF\u80FD\u591F\u5207\u6362\u5206\u652F\uFF1Agit stash</li><li>\u67E5\u770B\u5F53\u524D\u6240\u6709\u7684\u50A8\u85CF\uFF1Agit stash list</li><li>\u5E94\u7528\u6700\u65B0\u7684\u50A8\u85CF\uFF1Agit stash apply\uFF0C\u5982\u679C\u60F3\u5E94\u7528\u66F4\u65E9\u7684\u50A8\u85CF\uFF1Agit stash apply stash@{2}\uFF1B\u91CD\u65B0\u5E94\u7528\u88AB\u6682\u5B58\u7684\u53D8\u66F4\uFF0C\u9700\u8981\u52A0\u4E0A--index\u53C2\u6570\uFF1Agit stash apply --index</li><li>\u4F7F\u7528apply\u547D\u4EE4\u53EA\u662F\u5E94\u7528\u50A8\u85CF\uFF0C\u800C\u5185\u5BB9\u4ECD\u7136\u8FD8\u5728\u6808\u4E0A\uFF0C\u9700\u8981\u79FB\u9664\u6307\u5B9A\u7684\u50A8\u85CF\uFF1Agit stash drop stash{0}\uFF1B\u5982\u679C\u4F7F\u7528pop\u547D\u4EE4\u4E0D\u4EC5\u53EF\u4EE5\u91CD\u65B0\u5E94\u7528\u50A8\u85CF\uFF0C\u8FD8\u53EF\u4EE5\u7ACB\u523B\u4ECE\u5806\u6808\u4E2D\u6E05\u9664\uFF1Agit stash pop;</li><li>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u60F3\u5E94\u7528\u50A8\u85CF\u7684\u4FEE\u6539\uFF0C\u5728\u8FDB\u884C\u4E86\u4E00\u4E9B\u5176\u4ED6\u7684\u4FEE\u6539\u540E\uFF0C\u53C8\u8981\u53D6\u6D88\u4E4B\u524D\u6240\u5E94\u7528\u50A8\u85CF\u7684\u4FEE\u6539\u3002Git\u6CA1\u6709\u63D0\u4F9B\u7C7B\u4F3C\u4E8E stash unapply \u7684\u547D\u4EE4\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u53D6\u6D88\u8BE5\u50A8\u85CF\u7684\u8865\u4E01\u8FBE\u5230\u540C\u6837\u7684\u6548\u679C\uFF1Agit stash show -p stash@{0} | git apply -R\uFF1B\u540C\u6837\u7684\uFF0C\u5982\u679C\u4F60\u6C92\u6709\u6307\u5B9A\u5177\u4F53\u7684\u67D0\u4E2A\u50A8\u85CF\uFF0CGit \u4F1A\u9009\u62E9\u6700\u8FD1\u7684\u50A8\u85CF\uFF1Agit stash show -p | git apply -R\uFF1B</li></ul><h3 id="\u66F4\u65B0\u6587\u4EF6" tabindex="-1">\u66F4\u65B0\u6587\u4EF6 <a class="header-anchor" href="#\u66F4\u65B0\u6587\u4EF6" aria-hidden="true">#</a></h3><ol><li>\u91CD\u547D\u540D\u6587\u4EF6\uFF0C\u5E76\u5C06\u5DF2\u6539\u540D\u6587\u4EF6\u63D0\u4EA4\u5230\u6682\u5B58\u533A\uFF1Agit mv [file-original] [file-renamed];</li></ol><h3 id="\u67E5\u8BE2\u4FE1\u606F" tabindex="-1">\u67E5\u8BE2\u4FE1\u606F <a class="header-anchor" href="#\u67E5\u8BE2\u4FE1\u606F" aria-hidden="true">#</a></h3><ol><li>\u67E5\u8BE2\u5F53\u524D\u5DE5\u4F5C\u533A\u6240\u6709\u6587\u4EF6\u7684\u72B6\u6001\uFF1Agit status;</li><li>\u6BD4\u8F83\u5DE5\u4F5C\u533A\u4E2D\u5F53\u524D\u6587\u4EF6\u548C\u6682\u5B58\u533A\u4E4B\u95F4\u7684\u5DEE\u5F02\uFF0C\u4E5F\u5C31\u662F\u4FEE\u6539\u4E4B\u540E\u8FD8\u6CA1\u6709\u6682\u5B58\u7684\u5185\u5BB9\uFF1Agit diff\uFF1B\u6307\u5B9A\u6587\u4EF6\u5728\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u4E0A\u5DEE\u5F02\u6BD4\u8F83\uFF1Agit diff file-name</li></ol><h2 id="\u6682\u5B58\u533A" tabindex="-1">\u6682\u5B58\u533A <a class="header-anchor" href="#\u6682\u5B58\u533A" aria-hidden="true">#</a></h2><h3 id="\u63D0\u4EA4\u6587\u4EF6\u5230\u7248\u672C\u5E93" tabindex="-1">\u63D0\u4EA4\u6587\u4EF6\u5230\u7248\u672C\u5E93 <a class="header-anchor" href="#\u63D0\u4EA4\u6587\u4EF6\u5230\u7248\u672C\u5E93" aria-hidden="true">#</a></h3><ul><li>\u5C06\u6682\u5B58\u533A\u4E2D\u7684\u6587\u4EF6\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93\u4E2D\uFF0C\u5373\u6253\u4E0A\u65B0\u7248\u672C\uFF1Agit commit -m &quot;commit_info&quot;</li><li>\u5C06\u6240\u6709\u5DF2\u7ECF\u4F7F\u7528git\u7BA1\u7406\u8FC7\u7684\u6587\u4EF6\u6682\u5B58\u540E\u4E00\u5E76\u63D0\u4EA4\uFF0C\u8DF3\u8FC7add\u5230\u6682\u5B58\u533A\u7684\u8FC7\u7A0B\uFF1Agit commit -a -m &quot;commit_info&quot;</li><li>\u63D0\u4EA4\u6587\u4EF6\u65F6\uFF0C\u53D1\u73B0\u6F0F\u6389\u51E0\u4E2A\u6587\u4EF6\uFF0C\u6216\u8005\u6CE8\u91CA\u5199\u9519\u4E86\uFF0C\u53EF\u4EE5\u64A4\u9500\u4E0A\u4E00\u6B21\u63D0\u4EA4\uFF1Agit commit --amend</li></ul><h3 id="\u67E5\u770B\u4FE1\u606F" tabindex="-1">\u67E5\u770B\u4FE1\u606F <a class="header-anchor" href="#\u67E5\u770B\u4FE1\u606F" aria-hidden="true">#</a></h3><ul><li>\u6BD4\u8F83\u6682\u5B58\u533A\u4E0E\u4E0A\u4E00\u7248\u672C\u7684\u5DEE\u5F02\uFF1Agit diff --cached</li><li>\u6307\u5B9A\u6587\u4EF6\u5728\u6682\u5B58\u533A\u548C\u672C\u5730\u4ED3\u5E93\u7684\u4E0D\u540C\uFF1Agit diff file-name --cached</li><li>\u67E5\u770B\u63D0\u4EA4\u5386\u53F2\uFF1Agit log\uFF1B\u53C2\u6570-p\u5C55\u5F00\u6BCF\u6B21\u63D0\u4EA4\u7684\u5185\u5BB9\u5DEE\u5F02\uFF0C\u7528-2\u663E\u793A\u6700\u8FD1\u7684\u4E24\u6B21\u66F4\u65B0\uFF0C\u5982git log -p -2</li></ul><h3 id="\u6253\u6807\u7B7E" tabindex="-1">\u6253\u6807\u7B7E <a class="header-anchor" href="#\u6253\u6807\u7B7E" aria-hidden="true">#</a></h3><p>Git \u4F7F\u7528\u7684\u6807\u7B7E\u6709\u4E24\u79CD\u7C7B\u578B\uFF1A<strong>\u8F7B\u91CF\u7EA7\u7684\uFF08lightweight\uFF09\u548C\u542B\u9644\u6CE8\u7684\uFF08annotated\uFF09</strong> \u3002\u8F7B\u91CF\u7EA7\u6807\u7B7E\u5C31\u50CF\u662F\u4E2A\u4E0D\u4F1A\u53D8\u5316\u7684\u5206\u652F\uFF0C\u5B9E\u9645\u4E0A\u5B83\u5C31\u662F\u4E2A\u6307\u5411\u7279\u5B9A\u63D0\u4EA4\u5BF9\u8C61\u7684\u5F15\u7528\u3002\u800C\u542B\u9644\u6CE8\u6807\u7B7E\uFF0C\u5B9E\u9645\u4E0A\u662F\u5B58\u50A8\u5728\u4ED3\u5E93\u4E2D\u7684\u4E00\u4E2A\u72EC\u7ACB\u5BF9\u8C61\uFF0C\u5B83\u6709\u81EA\u8EAB\u7684\u6821\u9A8C\u548C\u4FE1\u606F\uFF0C\u5305\u542B\u7740\u6807\u7B7E\u7684\u540D\u5B57\uFF0C\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u548C\u65E5\u671F\uFF0C\u4EE5\u53CA\u6807\u7B7E\u8BF4\u660E\uFF0C\u6807\u7B7E\u672C\u8EAB\u4E5F\u5141\u8BB8\u4F7F\u7528 GNU Privacy Guard (GPG) \u6765\u7B7E\u7F72\u6216\u9A8C\u8BC1\u3002\u4E00\u822C\u6211\u4EEC\u90FD\u5EFA\u8BAE\u4F7F\u7528\u542B\u9644\u6CE8\u578B\u7684\u6807\u7B7E\uFF0C\u4EE5\u4FBF\u4FDD\u7559\u76F8\u5173\u4FE1\u606F\uFF1B\u5F53\u7136\uFF0C\u5982\u679C\u53EA\u662F\u4E34\u65F6\u6027\u52A0\u6CE8\u6807\u7B7E\uFF0C\u6216\u8005\u4E0D\u9700\u8981\u65C1\u6CE8\u989D\u5916\u4FE1\u606F\uFF0C\u7528\u8F7B\u91CF\u7EA7\u6807\u7B7E\u4E5F\u6CA1\u95EE\u9898\u3002</p><ol><li>\u5217\u51FA\u73B0\u5728\u6240\u6709\u7684\u6807\u7B7E\uFF1Agit tag</li><li>\u4F7F\u7528\u7279\u5B9A\u7684\u641C\u7D22\u6A21\u5F0F\u5217\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u6807\u7B7E\uFF0C\u4F8B\u5982\u53EA\u5BF91.4.2\u7CFB\u5217\u7684\u7248\u672C\u611F\u5174\u8DA3\uFF1Agit tag -l &quot;v1.4.2.*&quot;</li><li>\u521B\u5EFA\u4E00\u4E2A\u542B\u9644\u6CE8\u7C7B\u578B\u7684\u6807\u7B7E\uFF0C\u9700\u8981\u52A0-a\u53C2\u6570\uFF0C\u5982 git tag -a v1.4 -m &quot;my version 1.4&quot;</li><li>\u4F7F\u7528git show\u547D\u4EE4\u67E5\u770B\u76F8\u5E94\u6807\u7B7E\u7684\u7248\u672C\u4FE1\u606F\uFF0C\u5E76\u8FDE\u540C\u663E\u793A\u6253\u6807\u7B7E\u65F6\u7684\u63D0\u4EA4\u5BF9\u8C61\uFF1Agit show v1.4</li><li>\u5982\u679C\u6709\u81EA\u5DF1\u7684\u79C1\u94A5\uFF0C\u53EF\u4EE5\u4F7F\u7528GPG\u6765\u7B7E\u7F72\u6807\u7B7E\uFF0C\u53EA\u9700\u8981\u5728\u547D\u4EE4\u4E2D\u4F7F\u7528-s\u53C2\u6570\uFF1Agit tag -s v1.5 -m &quot;my signed 1.5 tag&quot;</li><li>\u9A8C\u8BC1\u5DF2\u7B7E\u7F72\u7684\u6807\u7B7E\uFF1Agit tag -v \uFF0C\u5982 git tag -v v1.5</li><li>\u521B\u5EFA\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u6807\u7B7E\u7684\u8BDD\uFF0C\u5C31\u76F4\u63A5\u4F7F\u7528 git tag \u547D\u4EE4\u5373\u53EF\uFF0C\u8FDE-a,-s\u4EE5\u53CA-m\u9009\u9879\u90FD\u4E0D\u9700\u8981\uFF0C\u76F4\u63A5\u7ED9\u51FA\u6807\u7B7E\u540D\u5B57\u5373\u53EF\uFF0C\u5982 git tag v1.5</li><li>\u5C06\u6807\u7B7E\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\uFF1Agit push origin \uFF0C\u5982 git push origin v1.5</li><li>\u5C06\u672C\u5730\u6240\u6709\u7684\u6807\u7B7E\u5168\u90E8\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\uFF1Agit push origin --tags</li></ol><h3 id="\u5206\u652F\u7BA1\u7406" tabindex="-1">\u5206\u652F\u7BA1\u7406 <a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a></h3><ul><li>\u521B\u5EFA\u5206\u652F\uFF1Agit branch branch-name\uFF0C\u5982 git branch testing</li><li>\u4ECE\u5F53\u524D\u6240\u5904\u7684\u5206\u652F\u5207\u6362\u5230\u5176\u4ED6\u5206\u652F\uFF1Agit checkout branch-name\uFF0C\u5982 git checkout testing</li><li>\u65B0\u5EFA\u5E76\u5207\u6362\u5230\u65B0\u5EFA\u5206\u652F\u4E0A\uFF1Agit checkout -b branch-name</li><li>\u5220\u9664\u5206\u652F\uFF1Agit branch -d branch-name</li><li>\u5C06\u5F53\u524D\u5206\u652F\u4E0E\u6307\u5B9A\u5206\u652F\u8FDB\u884C\u5408\u5E76\uFF1Agit merge branch-name</li><li>\u663E\u793A\u672C\u5730\u4ED3\u5E93\u7684\u6240\u6709\u5206\u652F\uFF1Agit branch</li><li>\u67E5\u770B\u5404\u4E2A\u5206\u652F\u6700\u540E\u4E00\u4E2A\u63D0\u4EA4\u5BF9\u8C61\u7684\u4FE1\u606F\uFF1Agit branch -v</li><li>\u67E5\u770B\u54EA\u4E9B\u5206\u652F\u5DF2\u7ECF\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\uFF1Agit branch --merged</li><li>\u67E5\u770B\u5F53\u524D\u54EA\u4E9B\u5206\u652F\u8FD8\u6CA1\u6709\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\uFF1Agit branch --no-merged</li><li>\u628A\u8FDC\u7A0B\u5206\u652F\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\uFF1Agit merge remote-name/branch-name\uFF0C\u5982git merge origin/serverfix\uFF1B\u5982\u679C\u662F\u5355\u7EBF\u7684\u5386\u53F2\u5206\u652F\u4E0D\u5B58\u5728\u4EFB\u4F55\u9700\u8981\u89E3\u51B3\u7684\u5206\u6B67\uFF0C\u53EA\u662F\u7B80\u5355\u7684\u5C06HEAD\u6307\u9488\u524D\u79FB\uFF0C\u6240\u4EE5\u8FD9\u79CD\u5408\u5E76\u8FC7\u7A0B\u53EF\u4EE5\u79F0\u4E3A\u5FEB\u8FDB\uFF08Fast forward\uFF09\uFF0C\u800C\u5982\u679C\u662F\u5386\u53F2\u5206\u652F\u662F\u5206\u53C9\u7684\uFF0C\u4F1A\u4EE5\u5F53\u524D\u5206\u53C9\u7684\u4E24\u4E2A\u5206\u652F\u4F5C\u4E3A\u4E24\u4E2A\u7956\u5148\uFF0C\u521B\u5EFA\u65B0\u7684\u63D0\u4EA4\u5BF9\u8C61\uFF1B\u5982\u679C\u5728\u5408\u5E76\u5206\u652F\u65F6\uFF0C\u9047\u5230\u5408\u5E76\u51B2\u7A81\u9700\u8981\u4EBA\u5DE5\u89E3\u51B3\u540E\uFF0C\u518D\u624D\u80FD\u63D0\u4EA4\uFF1B</li><li>\u5728\u8FDC\u7A0B\u5206\u652F\u7684\u57FA\u7840\u4E0A\u521B\u5EFA\u65B0\u7684\u672C\u5730\u5206\u652F\uFF1Agit checkout -b branch-name remote-name/branch-name\uFF0C\u5982git checkout -b serverfix origin/serverfix;</li><li>\u4ECE\u8FDC\u7A0B\u5206\u652Fcheckout\u51FA\u6765\u7684\u672C\u5730\u5206\u652F\uFF0C\u79F0\u4E4B\u4E3A\u8DDF\u8E2A\u5206\u652F\u3002\u5728\u8DDF\u8E2A\u5206\u652F\u4E0A\u5411\u8FDC\u7A0B\u5206\u652F\u4E0A\u63A8\u9001\u5185\u5BB9\uFF1Agit push\u3002\u8BE5\u547D\u4EE4\u4F1A\u81EA\u52A8\u5224\u65AD\u5E94\u8BE5\u5411\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\u7684\u54EA\u4E2A\u5206\u652F\u63A8\u9001\u6570\u636E\uFF1B\u5728\u8DDF\u8E2A\u5206\u652F\u4E0A\u5408\u5E76\u8FDC\u7A0B\u5206\u652F\uFF1Agit pull\uFF1B</li><li>\u5C06\u4E00\u4E2A\u5206\u652F\u91CC\u63D0\u4EA4\u7684\u6539\u53D8\u79FB\u5230\u57FA\u5E95\u5206\u652F\u4E0A\u91CD\u653E\u4E00\u904D\uFF1Agit rebase rebase-branch branch-name\uFF0C\u5982git rebase master server\uFF0C\u5C06\u7279\u6027\u5206\u652Fserver\u63D0\u4EA4\u7684\u6539\u53D8\u5728\u57FA\u5E95\u5206\u652Fmaster\u4E0A\u91CD\u6F14\u4E00\u904D\uFF1B\u4F7F\u7528rebase\u64CD\u4F5C\u6700\u5927\u7684\u597D\u5904\u662F\u50CF\u5728\u5355\u4E2A\u5206\u652F\u4E0A\u64CD\u4F5C\u7684\uFF0C\u63D0\u4EA4\u7684\u4FEE\u6539\u5386\u53F2\u4E5F\u662F\u4E00\u6839\u7EBF\uFF1B\u5982\u679C\u60F3\u628A\u57FA\u4E8E\u4E00\u4E2A\u7279\u6027\u5206\u652F\u4E0A\u7684\u53E6\u4E00\u4E2A\u7279\u6027\u5206\u652F\u53D8\u57FA\u5230\u5176\u4ED6\u5206\u652F\u4E0A\uFF0C\u53EF\u4EE5\u4F7F\u7528--onto\u64CD\u4F5C\uFF1Agit rebase --onto rebase-branch feature branch sub-feature-branch\uFF0C\u5982git rebase --onto master server client\uFF1B\u4F7F\u7528rebase\u64CD\u4F5C\u5E94\u8BE5\u9075\u5FAA\u7684\u539F\u5219\u662F\uFF1A<strong>\u4E00\u65E6\u5206\u652F\u4E2D\u7684\u63D0\u4EA4\u5BF9\u8C61\u53D1\u5E03\u5230\u516C\u5171\u4ED3\u5E93\uFF0C\u5C31\u5343\u4E07\u4E0D\u8981\u5BF9\u8BE5\u5206\u652F\u8FDB\u884Crebase\u64CD\u4F5C</strong>\uFF1B</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview-questions/git/workspace-temporary/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};