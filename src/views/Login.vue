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
                                v-model.trim = "$v.user.email.$model"
                                :error-messages="emailErrors"
                                :success="!$v.user.email.$invalid"> 
                            </v-text-field>
                            <v-text-field prepend-icon="mdi-account-lock"
                                name="password"
                                label="Senha"
                                type="password"> 
                            </v-text-field>
                            
                        </v-form>
                        <v-btn 
                            block 
                            depressed
                            @click="isLogin = !isLogin"> {{textos.button}}</v-btn>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            color="primary" 
                            large @click="submit()"> {{textos.toolbar}} </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex> 
        </v-layout>
    </v-container>
</template>

<script>
import { required, email} from 'vuelidate/lib/validators'

export default {
  name: 'Login', 
  data: () => ({
        isLogin: true,
        user: {
            name: '',
            email: '',
            password: ''
        }
  }),
  computed: {
      textos(){
          return this.isLogin 
          ? { toolbar: 'Login', button: 'Criar Conta'}
          : { toolbar: 'Criar Conta', button: 'Já tenho uma conta'}
      },
      emailErrors(){
            const errors = []
            const email =  this.$v.user.email
            console.log(email)
           /* if (!email.$dirty) { return errors }
            !email.required && errors.push('Email é obrigatório!')
            !email.email && errors.push('Digite um Email válido!') */
           return errors
        }
  },
  validations() {
      const validations = {
          user: {
              email: {
                  required, 
                  email
                },
          }
        }
        if (this.isLogin) {
              return {validations}
        }
        return { user:{
            ...validations.user,
        }}
      },

  methods: {
      log() {
          console.log('Vuelidate: ', this.$v)
      }, 
      submit() {
          console.log('Usuário: ', this.user)
      }

  }
};
</script>

