<script setup lang="ts">
const props = defineProps<{
  name: string
}>();
</script>

<template>
  <header
    itemscope itemtype="http://schema.org/WPHeader" class="max-w-1112px left-[calc((100%_-_1112px)_*_.5)]"
    transition="opacity ease" fixed z="1000" duration="4000" max-w="1112px" rounded="b-8"
  >
    <!-- <div class="container">
      <div id="wrapper">
        <div class="nav-sub">
          <p class="title" />
          <ul id="pjax-header-nav-list" class="switcher nav-list-h m-phone">
            <li>
              <a
                id="s-comment" class="fa-solid fa-comments fa-fw" target="_self" href="/" onclick="return false;"
                title="comment"
              />
            </li>
            <% if (page.sidebar==undefined || page.sidebar !=false) { %>
            <li>
              <a
                id="s-toc" class="s-toc fa-solid fa-list fa-fw" target="_self" href="/" onclick="return false;"
                title="toc"
              />
            </li>
            <% } %>
          </ul>
        </div>
        <div class="nav-main">
          <% if (theme.navbar.logo) { %>
          <% let logo=theme.navbar.logo %>
          <a class="title flat-box" target="_self" href="<%- url_for(&quot;/&quot;) %>">
            <% if (logo.img) { %>
            <img no-lazy class="logo" src="<%- logo.img %>">
            <% } %>
            <% if (logo.icon) { %>
            <i class="<%- logo.icon %>" />
            <% } %>
            <% if (logo.title) { %>
            <%- logo.title %>
            <% } %>
          </a>
          <% } %>

          <div class="menu navigation">
            <ul class="nav-list-h m-pc">
              <% let menu_list=theme.navbar.menu; %>
              <% function menu(value, type) { %>
              <% if (value.name=='hr' ) { %>
              <hr>
              <% } else if (value.toggle=='darkmode' ) { %>
              <li>
                <a class="menuitem flat-box header toggle-mode-btn">
                  <i class="<%= value.icon %> fa-fw" />
                  <%- value.name %>
                </a>
              </li>
              <li>
                <% } else if (value.icon && value.icon.indexOf('fa-compact-disc')> -1 && value.url ==
                undefined && value.rows == undefined) { %>
                <% if (type=='pc' ) { %>
              </li>
              <li>
                <a class="menuitem flat-box">
                  <i class="<%= value.icon %> fa-fw music" />
                  <%- value.name %>
                </a>
                <ul class="list-v">
                  <li>
                    <div class="aplayer-container">
                      <%- partial('../_plugins/aplayer/layout', {post: null, where: 'footer' }) %>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <% } %>
                <% } else if (value.name !=undefined && value.url==undefined && value.rows==undefined) {
                %>
              </li>
              <li class="header">
                <% if (value.icon) { %><i class="<%= value.icon %> fa-fw" />
                <% } %>
                <%- value.name %>
              </li>
              <% } else { %>
              <li>
                <a
                  class="menuitem flat-box faa-parent animated-hover" <%- value.url ?
                  `href="` + url_for(value.url) + `" title="` + (value.description || value.name) + `" `
                  : ` href="/" onclick="return false;" title="` + (value.description || value.name) + `"
                  ` %
                >
                  <% if (value.rel) { %>
                  rel="<%- value.rel %>"
                  <% } %>
                  <% if (value.target) { %>
                  target="<%- value.target %>"
                  <% } %>
                  <% if (value.url) { %>
                  active-action="action-<%= url_for(value.url).replace(/\/|%|\./g, ""
                  )?url_for(value.url).replace(/\/|%|\./g, "" ):"home" %>"
                  <% } %>>
                  <% if (value.icon) { %><i class="<%= value.icon %> fa-fw" />
                  <% } %>
                  <%- value.name %>
                </a>
                <% if (value.rows) { %>
                <ul class="list-v">
                  <% value.rows.forEach(function(value){ %>
                  <% menu(value, type) %>
                  <%})%>
                </ul>
                <% } %>
              </li>
              <% } %>
              <% } %>
              <% menu_list.forEach(function(value){ %>
              <% menu(value, 'pc' ) %>
              <% }) %>
            </ul>
          </div>
          <% if (theme.search.enable) { %>
          <div class="m_search">
            <form name="searchform" class="form u-search-form">
              <i class="icon fa-solid fa-search fa-fw" />
              <input
                type="text" class="input u-search-input"
                placeholder="<%- theme.navbar && theme.navbar.search %>"
              >
            </form>
          </div>
          <% } %>

          <ul class="switcher nav-list-h m-phone">
            <% if (theme.search.enable===true) { %>
            <li>
              <a
                class="s-search fa-solid fa-search fa-fw" target="_self" href="/" onclick="return false;"
                title="search"
              />
            </li>
            <% } %>
            <li>
              <a
                class="s-menu fa-solid fa-bars fa-fw" target="_self" href="/" onclick="return false;"
                title="menu"
              />
              <ul class="menu-phone list-v navigation white-box">
                <% menu_list.forEach(function(value){ %>
                <% menu(value, 'mobile' ) %>
                <% }) %>
              </ul>
            </li>
          </ul>

      <%- volantis_inject('header') %>
    Custom Files header end -->
    <!--  </div>
      </div>
      </div> -->
    123
  </header>
</template>
