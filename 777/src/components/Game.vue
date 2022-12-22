<template>
    <div
        class="game-wrapper"
        @click="handleGame"
    >
        <div class="game-image-wrapper">
            <img
                class="game-image"
                :src="game.attributes.image"
            />
        </div>
        <button class="game-btn">PLAY DEMO</button>
        <span class="game-title">{{ game.attributes.title }}</span>
    </div>
</template>

<style scoped>
.game-wrapper {
    flex-direction: column;
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
}

.game-image-wrapper {
    border: 5px solid lightsalmon;;
}

.game-image {
    width: 100%;
    height: 200px;
}

.game-btn {
    background: lightsalmon;
    border-radius: 30px;
    font-size: 1.5rem;
    cursor: pointer;
}

.game-title {
    text-align: center;
    font-size: 1.5rem;
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        game: { type: Object, required: true }
    },

    computed: {

        ...mapGetters([])
    },

    watch: {},

    methods: {
        async handleGame() {
            try {
                await this.$store.dispatch('getGame', this.game.id);
                const gameLink = document.createElement('a');
                gameLink.href = `${this.$store.state.gameUrl}`;
                gameLink.click()

            } catch (err) {
                console.error(err);
                this.busy = false;
            }
        }

    },

    mounted() {
    }
};
</script>
