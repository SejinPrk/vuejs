<template>
    <div class="black-bg" v-if="modalStatus == true">
        <div class="white-bg">
            <img :src="onerooms[clicked].image" style="width:100%">
            <h4>{{ onerooms[clicked].title }}</h4>
            <p>{{ onerooms[clicked].content }}</p>
            <p>{{ onerooms[clicked].price }}원</p>
            <button @click="modalStatus = false">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ModalInfo',
}
</script>

<style>
</style>