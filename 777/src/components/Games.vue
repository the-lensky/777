<template>
    <main class="main">
        <div class="games-wrapper">
            <game
                v-for="game in this.$store.state.games"
                :key="game.id"
                :game="game"
            />
        </div>
    </main>
</template>

<style scoped>
.games-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
}
</style>

<script>
import { mapGetters } from 'vuex';
import Game from './Game.vue';

export default {
    components: { Game },

    props: {},

    computed: {

    ...mapGetters([])
    },

    watch: {},

    methods: {
        // async init() {
        //     await this.$store.dispatch('getBalance');
        //     console.log('sames');
        // }
    },

    mounted() {
        // if (this.$store.state.isAuth) {
        //     this.init();
        // }
    }
};
</script>
