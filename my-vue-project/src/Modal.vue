<template>
    <div class="black-bg" v-if="modalStatus == true">
        <div class="white-bg">
            <img :src="onerooms[clicked].image" style="width:100%">
            <h4>{{ onerooms[clicked].title }}</h4>
            <p>{{ onerooms[clicked].content }}</p>
            <input v-model.number="month"> 
            <p> {{ month }} 개월 선택함 : {{ onerooms[clicked].price * month }}원</p>
            <button @click="close">닫기</button>
        </div>
    </div>
</template>

<script>

export default {
    name : 'ModalInfo',
    data () {
        return {
            month : 1,
        }
    },
    watch : {
        month(a) { 
            if (a >= 13) {
                alert('13 이상 숫자를 입력할 수 없습니다')
                this.month = 1
            }
            if (isNaN(a) == true) {
                alert('문자를 입력할 수 없습니다')
                this.month = 1
            }
        }
    },
    props : {
        onerooms : Array,
        clicked: Number,
        modalStatus: Boolean,
    },
    methods : {
        close () {
            this.$emit('closeModal')
        }
    },
    beforeUpdate(){
        if (this.month == 2) {
            alert('2개월은 너무 적음');
        }
    },
}
</script>

<style>
</style>