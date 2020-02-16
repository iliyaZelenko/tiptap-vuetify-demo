<template>
  <div>
    <h2 class="icons-group-title">Select icon font</h2>
    <div class="icons-group-wrapp">
      <template v-for="(theme, i) of themes">
        <div :key="theme.name" class="icons-group" @click="changeIconsGroup(theme.name)">
          <img :src="theme.img">
          <img
            v-if="theme.name == currentIconsGroup"
            src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-128.png"
            style="width: 20px; position: absolute;  transform: translateX(-5px) translateY(-5px)"
          >
          <br>
          <span class="gray--text">{{ theme.text }}</span>
        </div>

        <span v-if="i !== themes.length - 1" :key="i">or</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    themes: [
      {
        name: 'md',
        text: 'Material Design Official',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Material_Design_Logo.svg'
      },
      {
        name: 'fa',
        text: 'Font Awesome',
        img: 'https://i.imgur.com/xzQvgE2.png'
      },
      {
        name: 'mdi',
        text: 'Material Design Icons',
        img: 'https://i.imgur.com/nMibrUl.png'
      },
      {
        name: 'mdiSvg',
        text: 'MDI SVG',
        img: 'https://i.imgur.com/nMibrUl.png'
      }
    ]
  }),
  computed: {
    currentIconsGroup: () => localStorage.getItem('current_icons_group') || 'md'
  },
  methods: {
    changeIconsGroup (iconsGroup) {
      this.$gtag.event('changeIconsGroup', {
        newGroup: iconsGroup,
        oldGroup: this.currentIconsGroup
      })
      localStorage.setItem('current_icons_group', iconsGroup)
      window.location.reload()
    }
  }
}
</script>

<style>
.icons-group-title {
  text-align: center;
}

.icons-group-wrapp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  margin-bottom: 20px;
}

.icons-group {
  text-align: center;
  width: 120px;
}

.icons-group img {
  width: 50%;
  padding-top: 20px;
}

.icons-group:hover {
  font-weight: bold;
  cursor: pointer;
}

.icons-group:hover img {
  width: 55%;
}
</style>
