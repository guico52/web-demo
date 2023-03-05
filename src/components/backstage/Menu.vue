<template>
  <div>
    <va-accordion
        v-model="accordionValue"
        multiple
    >
      <va-collapse
          v-for="(route, idx) in items"
          :key="idx"
          :class="{ expanded: accordionValue[idx] && route.children }"
      >
        <template #header>
          <va-sidebar-item
              :active="isRouteActive(route)"
              @click="setRouteActive(route)"
          >
            <va-sidebar-item-content>
              <va-sidebar-item-title>
                {{ (route.displayName) }}
              </va-sidebar-item-title>
              <va-icon
                  v-if="route.children"
                  :name="accordionValue[idx] ? 'expand_less' : 'expand_more'"
              />
            </va-sidebar-item-content>
          </va-sidebar-item>
        </template>
        <va-sidebar-item
            v-for="(child, index) in route.children"
            :key="index"
            :active="isRouteActive(child)"
            @click="setRouteActive(child)"
        >
          <va-sidebar-item-content>
            <va-sidebar-item-title>
              {{ (child.displayName) }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </va-collapse>
    </va-accordion>
  </div>
</template>

<script lang="ts">
import {VaAccordion, VaCollapse, VaIcon, VaSidebarItem, VaSidebarItemContent, VaSidebarItemTitle} from "vuestic-ui";

declare type DemoRoute = {
  name: string;
  displayName: string;
  children?: DemoRoute[];
};

export default ({
  name: "Menu",
  components: {VaAccordion, VaCollapse, VaIcon, VaSidebarItem, VaSidebarItemTitle, VaSidebarItemContent},
  data() {
    return {
      accordionValue: [false, true],
      items: [
        {
          name: "userManage",
          displayName: "用户管理",
        },
        {
          name: "articleManage",
          displayName: "文章管理",
          children: [
            {
              name: "addArticle",
              displayName: "添加文章",
            },
            {
              name: "articleTypeManage",
              displayName: "文章类型",
            },
            {
              name: "articleList",
              displayName: "文章列表",
            }
          ],
        },
        {
          name: "accountManage",
          displayName: "账户管理",
        },
      ],
      // Change this with current route came from your router :)
      activeRouteName: "/backstage",
    };
  },
  methods: {
    isRouteActive(route: DemoRoute) {
      return this.activeRouteName === route.name;
    },
    setRouteActive(route: DemoRoute) {
      if (route.children) {
        return;
      }
      this.activeRouteName = route.name;
      this.$router.push({name: this.activeRouteName})
    },
  },
});
</script>

<style lang="scss" scoped>
.expanded {
  background-color: var(--va-background-primary);
}
</style>
