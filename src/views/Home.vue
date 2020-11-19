<template>
  <div>
   <h1 class="display-1">Lista de Projetos</h1>

   <v-card flat v-for="projeto in projetos" :key="projeto.titulo">
     <v-layout row wrap :class="`pa-3 projeto ${projeto.status}`">
       <v-flex xs12 md6>
         <div class="caption grey--text">Projeto</div>
         <div>{{projeto.titulo}}</div>
       </v-flex>
       <v-flex xs6 sm4 md2>
         <div class="caption grey--text">Responsável</div>
         <div>{{projeto.pessoa}}</div>
       </v-flex>
       <v-flex xs6 sm4 md2>
         <div class="caption grey--text">Prazo</div>
         <div>{{projeto.prazo}}</div>
       </v-flex>
       <v-flex xs6 sm4 md2>
         <div class="caption grey--text">Status</div>
         <div>{{projeto.status}}</div>
       </v-flex>
     </v-layout>
     <v-divider></v-divider>
   </v-card>
   
  </div>
</template>

<script>

export default {
  name: 'Home', 
  data() {
    return {
      projetos: [
        { titulo: 'Desenho de web site', pessoa: 'Dirceu Dev', prazo: '01/10/2021', status: 'andando' },
        { titulo: 'Desenvolvimento de sistema', pessoa: 'Angelo Prates', prazo: '15/12/2021', status: 'futuro' },
        { titulo: 'Site CNB teste', pessoa: 'Dirceu Dev', prazo: '30/12/2020', status: 'andando' },
        { titulo: 'Site Eccomotor', pessoa: 'Dirceu Dev', prazo: '01/03/2021', status: 'futuro' },
        { titulo: 'Implantação site investnorte', pessoa: 'Silvio Pires', prazo: '01/10/2020', status: 'feito' },
      ]
    }
  }
}
</script>

<style>
  .projeto.feito {
    border-left: 4px solid #3cd1c2
  }

  .projeto.andando {
    border-left: 4px solid orange
  }

  .projeto.futuro {
    border-left: 4px solid tomato
  }

</style>
