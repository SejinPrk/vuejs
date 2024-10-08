<template>
    <div class="black-bg" v-if="modalStatus == true">
        <div class="white-bg">
            <img :src="onerooms[clicked].image" style="width:100%">
            <h4>{{ onerooms[clicked].title }}</h4>
            <p>{{ onerooms[clicked].content }}</p>
            <p>{{ onerooms[clicked].price }}원</p>
            <button @click="close">닫기</button>
        </div>
    </div>
</template>

<script>

export default {
    name : 'ModalInfo',
    props : {
        onerooms : Array,
        clicked: Number,
        modalStatus: Boolean,
    },
    methods : {
        close () {
            this.$emit('closeModal')
        }
    }
}
</script>

<style>
</style>