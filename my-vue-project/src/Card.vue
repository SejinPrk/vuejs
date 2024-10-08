<template>
    <div>
        <img :src="room.image" class="room-img">
        <h4 @click="send">{{ room.title }}</h4>
        <p>{{ room.price }}원</p>
    </div>
</template>

<script>

export default {
    name : 'CardInfo',
    props : {
        room : Object,
        clicked: Number,
        modalStatus: Boolean,
    },
    methods : {
        send () {
            this.$emit('openModal', this.room.id) // 함수 내에서는 무조건 this 앞에 붙이기
        }
    }
}
</script>

<style> 
</style>