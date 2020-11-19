<template>
    
    <v-main>
      <v-row justify="center">
        <v-btn
            color="primary"
            class="mr-4"
            @click="incluirContrato"
            >
            Incluir
            </v-btn>
      </v-row>
      <v-row align="start">
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Nome
                  </th>
                 
                  <th class="text-left">
                    Telefone
                  </th>
                  
                  <th>
                    &nbsp;
                  </th>
                  <th>
                    &nbsp;
                  </th>
                  <th>
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="contato in contatos"
                  :key="contato.id"
                >
                  <td>{{ contato.nome }}</td>
                 
                  <td>{{ contato.telefone }}</td>
                 
                  <td><v-icon 
                    color="green darken-2" 
                    @click="selecionar(contato)" 
                    >mdi-check-bold</v-icon> </td>
                  <td><v-icon 
                    color="blue darken-2" 
                    @click = "editarContato(contato)"
                    >mdi-account-edit</v-icon> 
                  </td>
                  <td><v-icon 
                    color="red darken-2" 
                    @click="apagar(contato)"
                    >mdi-delete</v-icon> </td>
                  
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        
        <v-col> 
         
            <ListaContatosInfo :contatoSelecionado="contatoSelecionado"
              v-if="!editar"
            ></ListaContatosInfo>
          
            <ListaContatosEditar :contatoEditar="contatoSelecionado"
              v-else
            ></ListaContatosEditar>
          
        </v-col>
      </v-row>
    </v-main>
  
</template>

<script>
  import axios from './../axios'

  import config from './../config/config'
  import ListaContatosEditar from "./ListaContatosEditar.vue"
  import ListaContatosInfo from "./ListaContatosInfo.vue"

  import cookie from 'js-cookie'
  
export default {
    components: {
     
      ListaContatosEditar,
      ListaContatosInfo,
    },
    data() {
      return {
        drawer: null,
     
        contatos:[],
        contatoSelecionado: {
           id: 0,
                nome: '',
                email: '',
                telefone: '',
                sexo: ''
        },
        editar: false
      
      }
    },       
    methods:{
      incluirContrato(){
        console.log('Incluir Contrato')
        this.editar = true

      },
      selecionar(contato){
        console.log('selecionado... ' + contato.nome)
        this.contatoSelecionado = contato;
        this.editar = false;
        
      },
      editarContato(contato){
        console.log('editar selecionado ...' + contato.nome)
        this.editar = true
        this.contatoSelecionado = contato
      },
      apagar(contato){
        console.log('apagar...' + contato);
        this.contatos.pop(contato);
      },
      
    },
    created() {
        console.log('iniciado...' + config.apiURL)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookie.get('token')
        console.log('token > '+ cookie.get('token'))

        axios.get(`${config.apiURL}/contatos`)
          .then( (response) => {
            console.log(response)

            var dados = response.data
            
            this.contatos = dados

          })
      }
  }
</script>