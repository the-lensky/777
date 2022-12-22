<template>
    <div class="layout">
        <PulseLoader
            v-if="this.$store.state.isLoading"
            color="lightsalmon"
        />
        <template v-else>
            <sidebar/>
            <games/>
        </template>
    </div>
</template>

<style scoped>
.layout {
    display: grid;
    grid-template-columns: 250px 4fr;
    padding-top: 2rem;
}
</style>

<script>
import { mapGetters } from 'vuex';
import Sidebar from '../components/Sidebar.vue';
import Games from '../components/Games.vue';

export default {
    components: { Games, Sidebar },

    data() {
        return {
            loading: false,
            fetchIntervalBalance: null,
            fetchIntervalToken: null
        };
    },

    computed: {
        ...mapGetters([])
    },

    watch: {
        '$store.state.isAuth': {
            handler(val) {
                if (!val) {
                    this.$router.push('/login');
                }
            }
        }
    },

    methods: {
        init() {
            const refreshToken = localStorage.getItem('refresh-token');
            if (refreshToken && !this.$store.state.isComeFromLogin) {
                this.$store.dispatch('refresh', refreshToken);
            }

            this.$store.dispatch('intiData', true);
        },

        pollingBalance() {
            this.fetchIntervalBalance = setInterval(() => {
                this.$store.dispatch('getBalance');


            }, 30000);
        },

        pollingRefreshToken() {
            this.fetchIntervalToken = setInterval(() => {
                this.$store.dispatch('refresh');
            }, 800000);
        }
    },

    mounted() {
        if (!localStorage.getItem('token')) {
            console.log('tut');
            this.$router.push('/login');
        } else {
            this.init();
            this.pollingBalance();
            this.pollingRefreshToken();
        }
    },

    beforeUnmount() {
        clearInterval(this.pollingBalance);
        clearInterval(this.pollingRefreshToken);
    }
};

</script>
