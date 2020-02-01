<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <h1 style="overflow: auto;">Tiptap Vuetify
            <v-btn href="https://github.com/iliyaZelenko/tiptap-vuetify" style="float: right;" icon>
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>
          </h1>
          <v-divider/>

          <h2 class="text-center my-3">Examples navigation</h2>

          <div class="text-center mb-4">
            <v-btn
              v-for="route of routes"
              :key="route.name"
              :to="route.path"
              color="primary"
              text
              exact
            >{{ route.textInfo }}</v-btn>
          </div>

          <switch-icons-group/>
        </v-container>

        <div>
          <v-card flat>
            <v-card-text class="pt-4">
              <v-container>
                <router-view/>
              </v-container>
            </v-card-text>
          </v-card>
        </div>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import SwitchIconsGroup from './SwitchIconsGroup'
import { routes } from './router'

export default {
  name: 'App',
  components: {
    SwitchIconsGroup
  },
  data: () => ({
    routes
  })
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
