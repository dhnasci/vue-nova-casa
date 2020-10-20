<template>
  <v-app>
       <v-container fill-height >
        <v-layout>  
            <v-flex>
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark>
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field prepend-icon="mdi-email"
                                name="email"
                                label="Email"
                                type="email"> 
                            </v-text-field>
                            <v-text-field prepend-icon="mdi-account-lock"
                                name="password"
                                label="Senha"
                                type="password"> 
                            </v-text-field>
                            
                        </v-form>
                        <v-btn block depressed> Criar conta</v-btn>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" large> Login </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex> 
        </v-layout>
    </v-container>
   
  </v-app>
</template>

<script>

export default {
  name: 'App'
};
</script>

