<template>
  <div class="navbar flexBox" :style="{'padding-left':(menuPosition === 'top' && !sidebarLogo?'0':'')}">
    <hamburger
      v-if="menuPosition!='top'"
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container flexContent"
      @toggleClick="toggleSideBar"
    />
    <div class="flex1">
      <div class="flexBox height100">
        <div class="flex1 flexLeftContent">
          <el-tabs
            v-if="menuPosition === 'topApplication'"
            :value="activeRoute.toString()"
            class="headerTabs"
            @tab-click="clickTab"
          >
            <el-tab-pane
              :name="index.toString()"
              class="colorFFF"
              v-for="(route,index) in menuModule"
              :key="index"
            >
              <span slot="label">
                <i v-if="route.meta && route.meta.icon" :class="route.meta.icon"></i>
                {{route.meta.title}}
              </span>
            </el-tab-pane>
          </el-tabs>

          <el-scrollbar wrap-class="scrollbar-wrapper" class="headerMenu">
            <Menu
              v-if="menuPosition=='top'"
              :mode="'horizontal'"
              :backgroundColor="variables.headBg"
              :textColor="variables.headerMenuText"
            ></Menu>
          </el-scrollbar>
        </div>
        <div class="right-menu">
          <el-dropdown
            size="medium"
            class="avatar-container right-menu-item hover-effect"
            @command="handleCommand"
            trigger="click"
          >
            <div class="avatar-wrapper">
              <div class="flexBox height100">
                <div class="flexContent">
                  <img src="~public/images/img.jpg" class="user-avatar" />
                  {{name}}
                  <i class="el-icon-caret-bottom el-icon--right" />
                </div>
              </div>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-circle-check" class="right-menu-text" command="0">返回首页</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check" class="right-menu-text" command="1">退出用户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Menu from './Sidebar/Menu'
import variables from '@/styles/variables.scss'
import { checkArray, checkArrayString, sonsTree } from '@/utils'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    Menu,
  },
  computed: {
    variables() {
      return variables
    },
    ...mapGetters([
      'sidebar',
      'name',
      'menuPosition',
      'menuModule',
      'activeRoute',
      'dynamicRoutes',
      'sidebarLogo',
    ]),
  },
  created() {},
  methods: {
    handleCommand(value) {
      switch (value) {
        case '0':
          this.$router.replace({ path: '/' })
          break

        case '1':
          this.closeAllTags()
          this.logout()
          break

        default:
          break
      }
    },
    closeAllTags(view) {
      this.$store.dispatch('tagsView/delAllViews')
    },

    clickTab(evnet) {
      this.$store.dispatch('menu/setActiveRouteMenu', evnet.name)
      const currentMenu = this.menuModule[this.activeRoute]
      if (currentMenu.path.includes('http')) {
        window.open(currentMenu.path)
        return false
      }
      const routeChildren = currentMenu.children
      let path = checkArray(currentMenu.children)
        ? sonsTree(routeChildren)[0].path
        : currentMenu.path

      //判断顶部菜单是否有缓存路由界面
      const index = checkArrayString(this.dynamicRoutes, 'label', evnet.label)
      //判断有缓存记录
      if (
        routeChildren &&
        this.dynamicRoutes[index] &&
        this.dynamicRoutes[index].value
      ) {
        path =
          index == -1
            ? sonsTree(routeChildren)[0].path
            : this.dynamicRoutes[index].value
      }
      this.$router.push({ path: path })
    },

    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      // this.$router.replace(`/login?redirect=${this.$route.fullPath}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.navbar {
  height: $headHeight;
  background: $headBg;
  overflow: hidden;
  position: relative;

  .hamburger-container {
    height: 100%;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    height: 100%;

    &:focus {
      outline: none;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        height: 100%;
        position: relative;
        color: white;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          display: block;
          height: 40px;
          border-radius: 10px;
          margin-right: 8px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
