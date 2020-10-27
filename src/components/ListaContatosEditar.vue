<template>
    <div class="formulario">
        <h3>Contato</h3>

        <hr>
        <v-spacer></v-spacer>
        <template>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="contato.nome"
            :counter="20"
            :rules="nameRules"
            label="Nome"
            required 
            ></v-text-field>
 
            <v-text-field
            v-model="contato.email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="contato.telefone"
            :rules="telefoneRules"
            label="Telefone"
            required
            ></v-text-field>

            <v-select
            v-model="contato.sexo"
            :items="items"
            :rules="[v => !!v || 'Sexo é obrigatório']"
            label="Sexo"
            required
            ></v-select>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="salvarContato"
            >
            Salvar
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Limpar
            </v-btn>

           
        </v-form>
        </template>

    </div>
</template>

<script>
  //import { eventBus } from './../main'
  export default {
    props: {
        contatoEditar: {
            type: Object,
            required: false
        }
    },
    data: () => ({
      valid: true,
      contato: {
        nome: '',
        email: '',
        sexo: null,
        telefone: '',
      },
      
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 20) || 'Nome deve ter menos de 20 caracteres',
      ],
      
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
      ],
      
      items: [
        'MASCULINO',
        'FEMININO',
      ],
      
      telefoneRules: [
          v => !!v || 'Telefone é obrigatório',
      ],
    }),
    methods: {
      salvarContato() {
          this.$refs.form.validate()
         
          const formularioSalvo = Object.assign( {}, this.contato)
          console.log(formularioSalvo) 
        },
      
      reset () {
        this.$refs.form.reset()
      },
    },
    created: function (){
      this.contato = this.contatoEditar
     
    },
    watch: {
      contatoEditar(){
        this.contato = this.contatoEditar
      }
    }
  }
</script>

<style scoped>
    .formulario {
        padding: 30px;
        border: 1px solid #cccc;
        border-radius: 10px;
        background-color: lightgrey;
        color: grey;
    }
</style>