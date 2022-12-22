<template>
    <aside class="sidebar">
        <div class="avatar-wrapper">
            <img
                class="avatar-image"
                src="https://www.ixbt.online/gametech/sadm_images/shan11_base.jpg"
            />

        </div>
        <div class="balance-wrapper">
            <span class="balance-title">Total balance</span>
            <span class="balance-count">{{ this.$store.state.balance }}$</span>
        </div>
        <button
            @click="handleExit"
        >Logout
        </button>
    </aside>
</template>

<style scoped>
.sidebar {
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
}

.sidebar button {
    background: lightsalmon;
    border-radius: 30px;
    font-size: 1.5rem;
    cursor: pointer;
}

.avatar-image {
    width: 100px;
    height: 100px;
    border: 3px solid lightsalmon;
    border-radius: 50%;
}

.balance-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.5rem;

}

.balance-count {
    font-size: 2rem;
}
</style>

<script>
import { mapGetters } from 'vuex';
import AuthService from '../api/auth-service';

export default {
    props: {},

    computed: {

        ...mapGetters([])
    },

    watch: {},

    methods: {
        handleButton() {
            this.$store.dispatch('refresh');
        },

        handleExit() {
            this.$store.dispatch('logout');
        }
    },

    mounted() {
    }
};
</script>
