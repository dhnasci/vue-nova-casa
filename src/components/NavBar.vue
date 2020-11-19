<template>
  <nav>
      <v-app-bar app flat color="purple lighten-4">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Sistema Casa Gene</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon >
                  <v-icon>mdi-magnify</v-icon>
            </v-btn>   

            <v-btn icon>
                  <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>   
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app class="indigo darken-3">
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to= "link.route">
            <v-list-item-action>
              <v-icon class="white--text">{{ link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
  </nav>
     
      
      
</template>

<script>
export default {
      data() {
            return {
                  drawer: false,
                  links: [
                    { icon: 'mdi-view-dashboard', text: 'About', route: '/about' },
                    { icon: 'mdi-account-group', text: 'Contato', route: '/lista' },
                    { icon: 'mdi-home', text: 'Home', route: '/' },
                    
                  ]
            }
      }
}
</script>

<style>

</style>