<template>
    <div>
        <img :src="room.image" class="room-img">
        <h4 @click="$emit('openModal', room.id)">{{ room.title }}</h4>
        <p>{{ room.price }}원</p>
    </div>
</template>

<script>

export default {
    name : 'CardInfo',
    props : {
        room : Object,
        clicked: Number,
        modalStatus: Boolean  // modalStatus를 props로 받음
    }
}
</script>

<style>
</style>