<template>
    <div class="login">
        <div class="login-wrapper">
            <form
                class="login-form"
                @submit.prevent="handleSubmit"
            >
                <form-input
                    label="Login"
                    placeholder="Enter your login"
                    type="text"
                    name="login"
                    focus
                    @handleInput="handleInput"
                />

                <form-input
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    type="password"
                    @handleInput="handleInput"
                />

                <div class="login-row">
                    <button
                        class="login-btn"
                        :class="{'login-btn--busy': loginBtnDisable}"
                        :disabled="loginBtnDisable"
                    >Log In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

.login {
    padding: 2rem;
}

.login-wrapper {
    display: flex;
    justify-content: center;
}

.login-form {
    padding: 20px;
    border: 1px solid lightsalmon;
    border-radius: 30px;
}

.login-row {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0 20px;
    gap: 10px;
}

.login-btn {
    background: violet;
    padding: 10px 20px;
    border: 1px solid lightsalmon;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    outline: none;
}

.login-btn--busy {
    cursor: not-allowed;
    opacity: 0.3;
}
</style>

<script>
import FormInput from '../components/Form-Input.vue';

export default {
    components: { FormInput },
    data() {
        return {
            login: '',
            password: '',
            busy: false
        };
    },

    computed: {
        loginBtnDisable() {
            return Boolean(
                this.busy
                || this.login.length < 3
                || this.password.length < 3
            );
        }
    },

    methods: {
        handleInput(val, name) {
            this[name] = val;
        },

        async handleSubmit() {
            this.busy = true;
            const userData = {
                login: this.login,
                password: this.password
            };
            await this.$store.dispatch('login', userData);
            if(this.$store.state.isAuth) {
                await this.$store.dispatch('setIsComeFromLogin', true);
                this.$router.push('/');
            }
            this.busy = false;
        }
    },

    mounted() {
    }
};
</script>
