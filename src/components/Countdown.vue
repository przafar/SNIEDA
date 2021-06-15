<template>
  <div>
    <div class="number-main pb-24">
      <li class="mr-2 xl:mr-12 lg:mr-12 mx-auto xl:mx-0 lg:mx-0 ">
        <h5>{{ days }}</h5>
        <p>Дней</p>
      </li>
      <li class="mr-2 xl:mr-12 lg:mr-12 mx-auto xl:mx-0 lg:mx-0">
        <h5>{{ hours }}</h5>
        <p>Часов</p>
      </li>
      <li class="mr-2 xl:mr-12 lg:mr-12 mx-auto xl:mx-0 lg:mx-0">
        <h5>{{ minutes }}</h5>
        <p>Минут</p>
      </li>
      <li class="mr-2 xl:mr-12 lg:mr-12 mx-auto xl:mx-0 lg:mx-0">
        <h5>{{ seconds }}</h5>
        <p>Секунд</p>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  data: () =>({
    time: 1621098, //in seconds
    timer: null,
  }),
  mounted () {
   
  },
  methods: {
    decrementOrAlert () {
    	if (this.time > 0) {
      	this.time--
        return
      }
    }
  },
  computed: {
    days() {
      return String(Math.floor(this.time / 24 / 60 / 60)).padStart(2, '0')
    },
    hoursLeft() {
      return String(Math.floor((this.time) - (this.days * 86400))).padStart(2, '0')
    },
    hours() {
      return String(Math.floor(this.hoursLeft / 3600)).padStart(2, '0').padStart(2, '0')
    },
    minutesLeft() {
      return String(Math.floor((this.hoursLeft) - (this.hours * 3600))).padStart(2, '0')
    },
    minutes () {
    	return String(Math.floor(this.minutesLeft / 60)).padStart(2, '0')
    },
    seconds () {
    	return String(this.time % 60).padStart(2, '0')
    }
  },
  created() {
    this.timer = setInterval(this.decrementOrAlert, 1000)
  },

}
</script>
<style scoped>
  .number-main {
    display: flex;
    margin-top: 70px;
  }
  .h5 {
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
  }
  .number-main li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    background: #121212;
  }
  .number-main li h5 {
    font-weight: bold;
    font-size: 36px;
    line-height: 140%;
    color: #fff;
  }
  @media screen and (min-width: 310px) and (max-width: 640px) {
    .number-main li {
      padding: 10px 20px;
      font-size: 12px;
    }
  }
</style>