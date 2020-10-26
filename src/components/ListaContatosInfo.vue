<template>
    <div>
        <v-card
            elevation="4"
            outlined
            shaped
            >
            <v-card-title>Informação do Contato</v-card-title>
            <v-card-text>
                <p>
                <span> <strong>Id: </strong> {{contatoSelecionado.id}} </span> </p>
                <p>
                <span> <strong>Nome: </strong> {{contatoSelecionado.nome}} </span> </p>
                <p>
                <span> <strong>Email: </strong> {{contatoSelecionado.email}} </span> </p>
                <p>
                <span> <strong>Telefone: </strong> {{contatoSelecionado.telefone}} </span> </p>
                <p>
                <span> <strong>Sexo: </strong> {{contatoSelecionado.sexo}} </span> </p>
                <v-divider class="md-4"></v-divider>
            </v-card-text>
            <v-card-actions>
              
            </v-card-actions>
        </v-card>
        
    </div>
</template>

<script>

//import { eventBus } from './../main'

export default {
    props: {
        contatoSelecionado: {
            type: Object,
            required: false
        }
    },    
    data() {
        return {
            contato: { 
                id: 0,
                nome: 'Dirceu',
                email: 'dhnasci@mail.com',
                telefone: '3432-3434',
                sexo: 'MASCULINO'
            }
        }
    }
}
</script>