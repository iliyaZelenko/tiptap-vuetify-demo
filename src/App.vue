<template>
  <div id="app">
    <v-app>
      <v-app-bar
        color="#fcb69f"
        src="https://i.picsum.photos/id/282/1920/200.jpg"
        absolute
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-toolbar-title class="white--text">Tiptap Vuetify</v-toolbar-title>

        <v-spacer />

        <div>
          <v-btn
            href="https://github.com/iliyaZelenko/tiptap-vuetify"
            color="orange"
          >
            <v-icon left>mdi-github-circle</v-icon>
            Github
          </v-btn>
          <v-btn
            class="mx-2"
            href="https://github.com/iliyaZelenko/tiptap-vuetify-demo"
            color="purple"
            dark
          >
            <v-icon left>mdi-github-circle</v-icon>
            Demo Source Code
          </v-btn>
          <v-btn
            href="https://www.patreon.com/zelen"
            color="black"
            dark
          >
            <v-icon left>mdi-currency-usd</v-icon>
            Donate
          </v-btn>
        </div>

        <template v-slot:extension>
          <v-tabs
            align-with-title
            dark
          >
            <v-tab
              v-for="route of routes"
              :key="route.name"
              :to="route.path"
              color="primary"
              text
              exact
            >
              {{ route.textInfo }}
            </v-tab>

            <v-spacer />

            <div class="mr-4">
              <v-btn
                class="mx-2"
                href="https://github.com/iliyaZelenko/tiptap-vuetify/issues"
                color="green"
              >
                <v-icon left>mdi-lifebuoy</v-icon>
                Get free help
              </v-btn>
              <v-btn
                href="https://github.com/iliyaZelenko/tiptap-vuetify/issues/133"
                color="red"
                dark
              >
                <v-icon left>mdi-handshake</v-icon>
                Get paid help
              </v-btn>
            </div>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-content style="margin-top: 150px;">
        <v-container>
          <!--
          <h2 class="text-center my-3">Examples navigation</h2>

          <div class="text-center mb-4">
            <v-btn
              v-for="route of routes"
              :key="route.name"
              :to="route.path"
              color="primary"
              text
              exact
            >
              {{ route.textInfo }}
            </v-btn>
          </div>
          -->

          <switch-icons-group />
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

        <div class="text-center mb-4">
          To support the project, put a star
          <v-icon color="black">mdi-star</v-icon>
          on the
          <a href="https://github.com/iliyaZelenko/tiptap-vuetify">
            github
          </a>
          🙏 (this is easy), thanks!
          <a href="https://share.getcloudapp.com/8LuwOKdR">
            Where to click?
          </a>
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
