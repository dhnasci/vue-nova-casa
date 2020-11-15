<template>
       <v-container fill-height >
        <v-layout justify-center align-center>  
            <v-flex xs12 sm6 md4 lg3>
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark>
                        <v-toolbar-title>{{textos.toolbar}}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form> 
                            <v-text-field v-if="!isLogin"
                             prepend-icon="mdi-login"
                                name="name"
                                label="Nome"
                                type="text"> 
                            </v-text-field>
                            <v-text-field prepend-icon="mdi-email"
                                name="email"
                                label="Email"
                                type="email"
                                @change="validaEmail($event)"
                               > 
                            </v-text-field>
                            <v-text-field prepend-icon="mdi-account-lock"
                                name="password"
                                label="Senha"
                                type="password"
                                @change="validaSenha($event)"> 
                            </v-text-field>
                            
                        </v-form>
                        <v-btn block depressed
                          @click="isLogin = !isLogin"> {{textos.button}}</v-btn>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="primary" 
                          large
                          @click.prevent="submit"
                          > {{textos.toolbar}} </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex> 
        </v-layout>
    </v-container>
</template>

<script>

    import axiosmeu from './../axios'
    import cookie from 'js-cookie'
    import config from './../config/config'

export default {
  data() { 
      return {
        isLogin: true,
        user: {
            name: '',
            email: '',
            password: ''
        }
      }
  },
  computed:{
      textos: function() {
          return this.isLogin ? {toolbar: 'Login', button: 'Criar Conta'} 
          : { toolbar: 'Criar Conta', button: 'Já tenho uma conta' }
      }
  },
  methods: {
    validaEmail: function(field){
      console.log(field)
      this.user.email = field
    },
    validaSenha: function(field) {
      console.log(field)
      this.user.password = field
        },
    submit() {
        var userDto = {
            email: this.user.email,
            password: this.user.password
        }
        console.log('Usuário: ', this.user)
        console.log('baseUrl: ' + config.apiURL)
         
        //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        axiosmeu.post(`${config.apiURL}/login`, userDto)
            .then( response => {
                console.log(response)
                
                const token = cookie.get('token')
                console.log('token > ' + token)

                
            }, error => { 
                if(error.status == 401) {
                    console.log('Email ou senha inválidos!')
                }
                
            })
            .catch( error => { 
                console.log('Erro 2: ' +  error)
                
            })
      }
  }
}
</script>

