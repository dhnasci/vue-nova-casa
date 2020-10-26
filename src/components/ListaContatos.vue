<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-img
        lazy-src="http://jmessias.me/wp-content/uploads/2020/10/logocontato.png"
        max-height="350"
        max-width="500"
        src="http://jmessias.me/wp-content/uploads/2020/10/logocontato.png"
      ></v-img>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Lista de Contatos</v-toolbar-title>
    </v-app-bar>

    <v-main>
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
      </v-app>
    </template>

<script>
  //import { eventBus } from './../main'

  import ListaContatosEditar from "./ListaContatosEditar.vue"
  import ListaContatosInfo from "./ListaContatosInfo.vue"
  
export default {
    components: {
     
      ListaContatosEditar,
      ListaContatosInfo,
    },
    data() {
      return {
        drawer: null,
     
        contatos:[
          { id:"1", nome:"Ronaldo Mangi", sexo:"MASCULINO", telefone: "3234-5533", email: "ronaldomangi@mail.com" },
          { id:"2", nome:"Sonia Rinaldi", sexo:"FEMININO", telefone: "3222-4425", email: "soniar@mail.com" },
          { id:"3", nome:"Sandro Santos", sexo:"MASCULINO", telefone: "93225-3377", email: "ssantos@mail.com" }
        ],
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
      selecionar: function(contato){
        console.log('selecionado... ' + contato.nome)
        this.contatoSelecionado = contato;
        this.editar = false;
        //eventBus.selecionarContato(this.contato)
      },
      editarContato: function (contato){
        console.log('editar selecionado ...' + contato.nome)
        this.editar = true
        this.contatoSelecionado = contato
      },
      apagar: function (contato){
        console.log('apagar...' + contato);
      },
      created: function(){
        console.log('iniciado...')
      }
    }
  }
</script>