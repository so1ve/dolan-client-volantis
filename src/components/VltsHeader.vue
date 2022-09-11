<script setup lang="ts">
const props = defineProps<{
  name: string
}>();
</script>

<template>
  <header id="l_header" itemtype="http://schema.org/WPHeader" class="l_header auto shadow floatable blur" style="height: 64px;opacity: 0;">
    <!-- <div class="container">
      <div id="wrapper">
        <div class="nav-sub">
          <p class="title" /><ul id="pjax-header-nav-list" class="switcher nav-list-h m-phone">
            <li><a id="s-comment" class="fa-solid fa-comments fa-fw" target="_self" title="comment" /></li><li><a id="s-toc" class="s-toc fa-solid fa-list fa-fw" target="_self" title="toc" /></li>
          </ul>
        </div><div class="nav-main">
          <a class="title flat-box" target="_self" href="/" data-pjax-state="">Volantis 6 <sup style="color:#ff9800">alpha</sup></a><div class="menu navigation">
            <ul class="nav-list-h m-pc">
              <li><a class="menuitem flat-box faa-parent animated-hover" href="/v6/getting-started/" title="文档" target="_self" active-action="action-v6getting-started" data-pjax-state=""><i class="fa-duotone fa-book faa-tada fa-fw" /> 文档</a></li><li><a class="menuitem flat-box faa-parent animated-hover" href="/examples/" title="示例" active-action="action-examples" data-pjax-state=""><i class="fa-duotone fa-play-circle faa-tada fa-fw" /> 示例</a></li><li><a class="menuitem flat-box faa-parent animated-hover" href="/faqs/" title="帮助" active-action="action-faqs" data-pjax-state=""><i class="fa-duotone fa-question-circle faa-tada fa-fw" /> 帮助</a></li><li><a class="menuitem flat-box faa-parent animated-hover" href="/contributors/" title="鸣谢" active-action="action-contributors" data-pjax-state=""><i class="fa-duotone fa-heart fa-fw" /> 鸣谢</a></li><li>
                <a class="menuitem flat-box faa-parent animated-hover" title="更多"><i class="fa-duotone fa-ellipsis-v fa-fw" /> 更多</a><ul class="list-v">
                  <li><a class="menuitem flat-box header toggle-mode-btn"><i class="fa-solid fa-moon fa-fw" /> 暗黑模式</a></li><li><hr></li><li> <a class="menuitem flat-box faa-parent animated-hover" target="_blank" rel="external nofollow noopener noreferrer" href="https://github.com/volantis-x/volantis-docs/" title="本站源码" active-action="action-https:githubcomvolantis-xvolantis-docs">本站源码</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" target="_blank" rel="external nofollow noopener noreferrer" href="https://github.com/volantis-x/hexo-theme-volantis/" title="主题源码" active-action="action-https:githubcomvolantis-xhexo-theme-volantis">主题源码</a></li><hr><li> <a class="menuitem flat-box faa-parent animated-hover" target="_blank" rel="external nofollow noopener noreferrer" href="https://github.com/volantis-x/hexo-theme-volantis/releases/" title="更新日志" active-action="action-https:githubcomvolantis-xhexo-theme-volantisreleases">更新日志</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" href="/archives/" title="博客文章" active-action="action-archives" data-pjax-state="">博客文章</a></li><hr><li> <a class="menuitem flat-box faa-parent animated-hover" href="/v5/getting-started/" title="文档 v5" active-action="action-v5getting-started" data-pjax-state="">文档 v5</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" href="/v4/getting-started/" title="旧版文档 v4" active-action="action-v4getting-started" data-pjax-state="">旧版文档 v4</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" href="/v3/getting-started/" title="旧版文档 v3" active-action="action-v3getting-started" data-pjax-state="">旧版文档 v3</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" href="/v2/getting-started/" title="旧版文档 v2" active-action="action-v2getting-started" data-pjax-state="">旧版文档 v2</a></li>
                </ul>
              </li>
            </ul>
          </div><div class="m_search">
            <form name="searchform" class="form u-search-form">
              <i class="icon fa-solid fa-search fa-fw" /> <input type="text" class="input u-search-input" placeholder="Search...">
            </form>
          </div><ul class="switcher nav-list-h m-phone">
            <li><a class="s-search fa-solid fa-search fa-fw" target="_self" title="search" /></li><li>
              <a class="s-menu fa-solid fa-bars fa-fw" target="_self" title="menu" /><ul class="menu-phone list-v navigation white-box" style="display: none;">
                <li><a class="menuitem flat-box faa-parent animated-hover" href="/v6/getting-started/" title="文档" target="_self" active-action="action-v6getting-started" data-pjax-state=""><i class="fa-duotone fa-book faa-tada fa-fw" /> 文档</a></li><li><a class="menuitem flat-box faa-parent animated-hover" href="/examples/" title="示例" active-action="action-examples" data-pjax-state=""><i class="fa-duotone fa-play-circle faa-tada fa-fw" /> 示例</a></li><li><a class="menuitem flat-box faa-parent animated-hover" href="/faqs/" title="帮助" active-action="action-faqs" data-pjax-state=""><i class="fa-duotone fa-question-circle faa-tada fa-fw" /> 帮助</a></li><li><a class="menuitem flat-box faa-parent animated-hover" href="/contributors/" title="鸣谢" active-action="action-contributors" data-pjax-state=""><i class="fa-duotone fa-heart fa-fw" /> 鸣谢</a></li><li>
                  <a class="menuitem flat-box faa-parent animated-hover" title="更多"><i class="fa-duotone fa-ellipsis-v fa-fw" /> 更多</a><ul class="list-v" style="display: none;">
                    <li><a class="menuitem flat-box header toggle-mode-btn"><i class="fa-solid fa-moon fa-fw" /> 暗黑模式</a></li><li><hr></li><li> <a class="menuitem flat-box faa-parent animated-hover" target="_blank" rel="external nofollow noopener noreferrer" href="https://github.com/volantis-x/volantis-docs/" title="本站源码" active-action="action-https:githubcomvolantis-xvolantis-docs">本站源码</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" target="_blank" rel="external nofollow noopener noreferrer" href="https://github.com/volantis-x/hexo-theme-volantis/" title="主题源码" active-action="action-https:githubcomvolantis-xhexo-theme-volantis">主题源码</a></li><hr><li> <a class="menuitem flat-box faa-parent animated-hover" target="_blank" rel="external nofollow noopener noreferrer" href="https://github.com/volantis-x/hexo-theme-volantis/releases/" title="更新日志" active-action="action-https:githubcomvolantis-xhexo-theme-volantisreleases">更新日志</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" href="/archives/" title="博客文章" active-action="action-archives" data-pjax-state="">博客文章</a></li><hr><li> <a class="menuitem flat-box faa-parent animated-hover" href="/v5/getting-started/" title="文档 v5" active-action="action-v5getting-started" data-pjax-state="">文档 v5</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" href="/v4/getting-started/" title="旧版文档 v4" active-action="action-v4getting-started" data-pjax-state="">旧版文档 v4</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" href="/v3/getting-started/" title="旧版文档 v3" active-action="action-v3getting-started" data-pjax-state="">旧版文档 v3</a></li><li> <a class="menuitem flat-box faa-parent animated-hover" href="/v2/getting-started/" title="旧版文档 v2" active-action="action-v2getting-started" data-pjax-state="">旧版文档 v2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  </header>
</template>
