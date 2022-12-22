<template>
    <div class="login-row">
        <label
            v-if="label"
            class="login-label"
        >
            {{ label }}
        </label>
        <input
            class="login-input"
            ref="input"
            :type="type"
            :placeholder="placeholder"
            :name="name"
            @input="handleInput($event, $event.target.value, name)"

        />
    </div>
</template>

<style scoped>
.login-row {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0 20px;
    gap: 10px;
}

.login-input {
    padding: 10px 20px;
    border: 1px solid lightsalmon;
    border-radius: 30px;

}
</style>

<script>
export default {
    props: {
        value: { default: '' },
        focus: { type: Boolean, default: false },
        type: { type: String, default: 'text' },
        name: { type: String, default: 'text' },
        label: { type: String, default: '' },
        placeholder: { type: String, default: '' },
    },

    computed: {},

    watch: {},

    methods: {
        handleInput(e, value, name) {
            this.$emit('handleInput', value, name);
        }
    },

    mounted() {
        if (this.focus) {
            this.$refs.input.focus();
        }
    }
};
</script>
