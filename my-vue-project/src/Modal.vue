<template>
    <div class="black-bg" v-if="modalStatus == true">
        <div class="white-bg">
            <img :src="onerooms[clicked].image" style="width:100%">
            <h4>{{ onerooms[clicked].title }}</h4>
            <p>{{ onerooms[clicked].content }}</p>
            <input v-model.number="month"> 
            <p> {{ month }} 개월 선택함 : {{ onerooms[clicked].price + month }}원</p>
            <button @click="close">닫기</button>
        </div>
    </div>
</template>

<script>

export default {
    name : 'ModalInfo',
    data () {
        return {
            month : 1, // 기본값 1을 지정해주면 vue가 month 자리에 숫자가 들어올 것을 예상함 //숫자를 입력해도 문자로 저장하기 때문에 html에서 .number를 붙여서 숫자로 처리 
        }
    },
    watch : {
        month(a) { // month의 데이터 a가 변경될 때마다 실행; (a,b) 사용 시 b는 변경 전 데이터, a는 변경 후 데이터
            // 사용자가 month에 입력한 데이터가 문자형이거나 13보다 같거나 크면 경고 띄우기
            if (a >= 13) {
                alert('13 이상 숫자를 입력할 수 없습니다')
                this.month = 1
            }
            if (isNaN(a) == true || !/^\d+$/.test(a)) {
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
    }
}
</script>

<style>
</style>