<template>
    <div>
        <img :src="room.image" class="room-img">
        <h4>{{ room.title }}</h4>
        <p>{{ room.price }}원</p>
    </div>
</template>

<script>

export default {
    name : 'CardInfo',
    props : {
        room : Object,
        clicked: Number,
        ModalStatus: Boolean,
    }
}
</script>

<style>
</style>