<template>
  <div class="home">
    <div class="header">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase " href="#pablo">
              <img src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/logo.png?alt=media&token=df01d8ba-3c5e-4d26-9138-abcf950e4804" alt="">
            </a>
            <button class="cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
              <i class="fas fa-bars text-2xl text-white"></i>
            </button>
          </div>
          <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <li v-for="menu in menus" :key="menu.id" class="nav-item">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
                  {{ menu }}
                </a>
              </li>
            </ul>
          </div>
          <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <a href="" class=" main-screen-button grad">Зайти в кабинет</a>
            </ul> 
          </div>
        </div>
      </nav>
      <div class="text-left container mx-auto">
        <div class="mx-0 lg:mx-32 xl:mx-32 mt-24 xl:mt-0 lg:mt-0">
          <h1 class="font-bold focus-with h1-main-screen mt-12 xl:mt-60 lg:mt-60">Первый курс <br> по компьтерной сборе</h1>
          <Countdown />
        </div>
      </div>  
    </div>
    <div class="main-screen-last-line">
      <div class="mx-auto container">
        <div class="mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0">
          <div class="grid grid-cols-9 xl:gap-14 lg:gap-0 gap-0">
            <div class="xl:col-span-2 lg:col-span-2 col-span-9 my-auto">
              <a href="#" class="main-screen__button--active grad1">Заказать курс</a>
            </div>
            <div class="xl:col-span-2 lg:col-span-2 col-span-9 my-auto mt-6 xl:mt-0 lg:mt-0">
              <li class="flex justify-between ">
                <h5 class="opacity-40">Учеников всего:</h5>
                <p>190</p>
              </li>
              <li class="flex pt-4 justify-between">
                <h5 class="opacity-40">Успешно закончил курс:</h5>
                <p>200</p>
              </li>
            </div>
            <div class="xl:col-span-5 lg:col-span-2 col-span-9 my-auto ">
              <div class="flex mt-6 xl:mt-0 lg:mt-0">
                <h5 class="opacity-40">Заработано учениками:</h5>
                <p class="ml-4 font-bold">400 000₽</p>
              </div>
              <div class="h-2 my-2 relative overflow-hidden">
                <div class="w-full h-full bg-gray-200 absolute"></div>
                <div class="h-full grad1 absolute" style="width:60%"></div>
              </div>
              <div class="flex  opacity-40 justify-between">
                <h5>0</h5>
                <p>1 000 000₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-scrollanimation class="about">
      <div class="container mx-auto">
        <div class="mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0">
          <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4 xl:mt-28 mt-12 lg:mt-28 pb-24">
            <div class="rectangle-1 mx-auto">
              <img class="mt-16" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/image.png?alt=media&token=ae37906a-15e8-44a9-b2b4-04af91edbce6" alt="">
            </div>
            <div class="text-left mt-24">
              <h2 class="about-h1">Чем мы занимаемся?</h2>
              <p class="about-p mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-scrollanimation class="start observer">
      <div class="container mx-auto">
        <div class="mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-0 xl:mt-28 lg:mt-28">
          <div class="icon-heading flex">
            <div v-if="loading" class="lds-ring mr-6 "><div></div><div></div><div></div><div></div></div>
            <h2 class="h2">Быстрый старт</h2>
          </div>
          <p class="start-p mt-8">Больше 90% учеников прошли полный курс и смогли <br> собрать свой первый компьютер</p>
          <div class="grid grid-cols-4 pb-24 start-percentage mt-12">
              <h3>100%</h3>
              <h3>75%</h3>
              <h3>50%</h3>
              <h3>Итог</h3>
            <div class="my-auto">
              <div class="xl:h-20 h-14 grad2"></div>
            </div>
            <div class="my-auto">
              <div class="h-12 grad3"></div>
            </div>
            <div class="my-auto">
              <div class="h-7 grad"></div>
            </div>
            <div class="my-auto">
              <div class="h-2.5  grad3"></div>
            </div>
            <div class="col-span-4 flex flex-col xl:flex-row lg:flex-row mt-9">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-scrollanimation class="advantages">
      <div class="container mx-auto">
        <div class="mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-0 xl:mt-28 lg:mt-28 text-center">
          <h2 class="h2">Получите профессию прямо сейчас</h2>
          <div class="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-1 gap-12 mt-24">
            <div>
              <img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/icon-1.png?alt=media&token=9e177f37-8ace-493e-b5f2-6f0c0081c2c8" alt="">
              <h5 class="h5 mt-14 mb-10">Только практические навыки в работе</h5>
              <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
            </div>
             <div>
              <img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/icon-2.png?alt=media&token=53d83444-7bef-405c-8262-86001b729b81" alt="">
              <h5 class="h5 mt-14 mb-10">Только практические навыки в работе</h5>
              <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
            </div>
             <div>
              <img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/icon-3.png?alt=media&token=65ceaef4-656b-423b-ae77-b81a1da7a588" alt="">
              <h5 class="h5 mt-14 mb-10">Только практические навыки в работе</h5>
              <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-scrollanimation class="partners">
      <div class="container mx-auto">
        <div class="mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-16 xl:mt-32 lg:mt-32">
          <div class="icon-heading flex">
            <div v-if="loading" class="lds-ring mr-6"><div></div><div></div><div></div><div></div></div>
            <h2 class="h2">Партнеры - топовые бренды</h2>
          </div>
          <div class="grid grid-cols-4 mt-20">
            <div class="border-gray-600 border-r border-b">
              <img class="mx-auto py-4 px-2 xl:px-0 lg:px-0" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0" alt="">
            </div>
            <div class="border-gray-600 border-r border-b">
              <img class="mx-auto py-4 px-2 xl:px-0 lg:px-0" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0" alt="">
            </div>
            <div class="border-gray-600 border-r border-b">
              <img class="mx-auto py-4 px-2 xl:px-0 lg:px-0" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0" alt="">
            </div>
            <div class="border-gray-600 border-b">
              <img class="mx-auto py-4 px-2 xl:px-0 lg:px-0" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0" alt="">
            </div>
            <div class="border-gray-600 border-r">
              <img class="mx-auto py-4 px-2 xl:px-0 lg:px-0" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0" alt="">
            </div>
            <div class="border-gray-600 border-r">
              <img class="mx-auto py-4 px-2 xl:px-0 lg:px-0" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0" alt="">
            </div>
            <div class="border-gray-600 border-r">
              <img class="mx-auto py-4 px-2 xl:px-0 lg:px-0" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0" alt="">
            </div>
            <div class="border-gray-600 ">
              <img class="mx-auto py-4 px-2 xl:px-0 lg:px-0" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-scrollanimation class="program">
      <div class="container mx-auto">
        <div class="mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-16 xl:mt-32 lg:mt-32">
          <div class="icon-heading text-center">
            <div v-if="loading" class="lds-ring mr-6"><div></div><div></div><div></div><div></div></div>
            <h2 class="h2">Быстрый старт</h2>
            <p class="start-p mt-8">Больше 90% учеников прошли полный курс и смогли <br> собрать свой первый компьютер</p>
          </div>
          <div class="mt-20 flex justify-center px-0 xl:px-64">
            <div class="text-right mr-20 xl:mr-32">
              <div class="mt-10">
                <p class="p opacity-40">Неделя №1</p>
                <h6 class="h6">Красивая часть курса, которая помогает в успехе</h6>
              </div>
              <div class="mt-20">
                <p class="p opacity-40">Неделя №3</p>
                <h6 class="h6">Красивая часть курса, которая помогает в успехе</h6>
              </div>
              <div class="mt-20">
                <p class="p opacity-40">Неделя №5</p>
                <h6 class="h6">Красивая часть курса, которая помогает в успехе</h6>
              </div>
              <div class="mt-20">
                <p class="p opacity-40">Неделя №7</p>
                <h6 class="h6">Красивая часть курса, которая помогает в успехе</h6>
              </div>
            </div>
            <div class="h-full w-2 grad flex flex-col">
              <div class="w-12 xl:w-24 lg:w-24 h-0.5 -ml-12 xl:-ml-24 lg:-ml-24 bg-gray-600 mt-16 xl:mt-20 lg:mt-20"></div>
              <div class="w-12 xl:w-24 lg:w-24 h-0.5 ml-2 bg-gray-600 mt-16 xl:mt-20 lg:mt-20"></div>
              <div class="w-12 xl:w-24 lg:w-24 h-0.5 -ml-12 xl:-ml-24 lg:-ml-24 bg-gray-600 mt-56 xl:mt-20 lg:mt-20"></div>
              <div class="w-12 xl:w-24 lg:w-24 h-0.5 ml-2 bg-gray-600 mt-16 xl:mt-20 lg:mt-20"></div>
              <div class="w-12 xl:w-24 lg:w-24 h-0.5 -ml-12 xl:-ml-24 lg:-ml-24 bg-gray-600 mt-52 xl:mt-20 lg:mt-20"></div>
              <div class="w-12 xl:w-24 lg:w-24 h-0.5 ml-2 bg-gray-600 mt-16 xl:mt-20 lg:mt-20"></div>
              <div class="w-12 xl:w-24 lg:w-24 h-0.5 -ml-12 xl:-ml-24 lg:-ml-24 bg-gray-600 mt-52 xl:mt-20 lg:mt-20 mb-24"></div>
            </div>
            <div class="text-left ml-20 xl:ml-32">
              <div class="mt-28">
                <p class="p opacity-40">Неделя №2</p>
                <h6 class="h6">Красивая часть курса, которая помогает в успехе</h6>
              </div>
              <div class="mt-20">
                <p class="p opacity-40">Неделя №4</p>
                <h6 class="h6">Красивая часть курса, которая помогает в успехе</h6>
              </div>
              <div class="mt-20">
                <p class="p opacity-40">Неделя №6</p>
                <h6 class="h6">Красивая часть курса, которая помогает в успехе</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-scrollanimation class="teachers">
      <div class="container mx-auto">
        <div class="mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-16 xl:mt-32 lg:mt-32 pb-24">
          <div class="icon-heading flex">
            <div v-if="loading" class="lds-ring mr-6"><div></div><div></div><div></div><div></div></div>
            <h2 class="h2">Партнеры - топовые бренды</h2>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 mt-24">
            <div class="person text-center">
              <img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/Ellipse%202.png?alt=media&token=caaff918-9e36-48eb-9e62-e8f64cd06fe0" alt="">
              <h4 class="mt-10">Дмитрий Иванов</h4>
              <p class="p mt-3 mb-7">Специалист по видеокартам</p>
              <a class="border rounded-full main-screen-button" href="#">Биография</a>
            </div>
            <div class="person text-center mt-12 xl:mt-0 lg:mt-12">
              <img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/Ellipse%201.png?alt=media&token=f357a31a-82c8-4b51-8691-640adbe24d0e" alt="">
              <h4 class="mt-10">Дмитрий Иванов</h4>
              <p class="p mt-3 mb-7">Специалист по видеокартам</p>
              <a class="border rounded-full main-screen-button" href="#">Биография</a>
            </div>
            <div class="person text-center mt-12 xl:mt-0 lg:mt-12">
              <img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/Ellipse%203.png?alt=media&token=2b0da79c-ed0d-4bc8-b547-5d0ffc2bb0a4" alt="">
              <h4 class="mt-10">Дмитрий Иванов</h4>
              <p class="p mt-3 mb-7">Специалист по видеокартам</p>
              <a class="border rounded-full main-screen-button" href="#">Биография</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-scrollanimation class="footer">
      <div class="container mx-auto">
        <div class="mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-0 xl:mt-16 lg:mt-16 pb-24 text-center">
          <h2 class="h2">Статьи каждую неделю</h2>
          <p class="p pt-6 opacity-40">Больше 90% учеников прошли полный курс и смогли <br> собрать свой первый компьютер</p>
            <div class="footer-form mt-16">
              <div class="mx-auto footer-inner flex">
                <input class="w-2/3 h-full" id="search" type="text" placeholder="Search">
                <button class="w-1/3">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Countdown from '../components/Countdown.vue'
export default {
  name: 'Home',
  data: () => ({
    menus: ['Главная', 'Курсы', 'Расписание', 'Преподователи', 'Рассылка', 'Контакты'],
    showMenu: false,
    loading: false
  }),
  mounted() {
    console.log(vScrollanimation);
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  },
  components: {
    Countdown
  }
}
</script>

<style scoped>
  .home {
    background: url('https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/bgc.png?alt=media&token=e82f9889-25fa-41f2-bc63-97f7518c46d5');
  }
  .header {
    background: url('https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/main-screen__bgc.png?alt=media&token=e02eb041-7170-41d6-9792-fb1a3956627e') no-repeat;
    background-size: cover;
    background-position: center right;
  }
  .nav , ul, li {
    display: flex;
  }
  .h2 {
    font-weight: bold;
    font-size: 48px;
    line-height: 140%;
  }
  .p {
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
  }
  .h6 {
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
  }
  .h5 {
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
  }
  .grad {
    background: linear-gradient(94.26deg, #C89AFC 9.51%, #7C6AFA 90.23%);
  }
  .grad1 {
    background: linear-gradient(94.78deg, #DF5950 11.19%, #451046 93.72%);
  }
  .grad2 {
    background: linear-gradient(94.26deg, #C89AFC 9.51%, #7C6AFA 90.23%);
  }
  .grad3 {
    background: linear-gradient(94.26deg, #C89AFC 9.51%, #7C6AFA 90.23%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .main-screen-button {
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    border-radius: 50px;
  }
  .nav-item {
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
  }
  .h1-main-screen {
    font-size: 64px;
    line-height: 140%;
  }

  .main-screen__button--active {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    border-radius: 50px;

  }
  .main-screen-last-line {
    background: #121212;
    padding: 30px 0 30px 0;
  }
  .rectangle-1 {
    width: 526px;
    height: 499px;
    border: 25px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(94.26deg, #C89AFC 9.51%, #7C6AFA 90.23%)
  }
  .about-h1 {
    font-weight: bold;
    font-size: 48px;
    line-height: 140%;
  }
  .about-p {
    font-size: 16px;
    line-height: 160%;
  }
  
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #DF5950;
    border-image-slice: 1;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #451046 transparent transparent transparent;
    
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .start-percentage h3 {
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 36px;
    line-height: 140%;
  }
  .start-percentage p {
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    margin-right: 10px;
  }
  .footer-inner {
    width: 547px;
    height: 44px;
    border-radius: 50px;
  }
  .footer-inner input {
    background: rgba(255, 255, 255, 0.25);
    color: #ffffff;
    border-radius: 50px 0 0 50px;
    margin-left: 10px;
    padding-left: 20px;
  }
  .footer-inner input:focus {
    background: rgba(255, 255, 255, 1);
    border-radius: 50px 0 0 50px;
    color: #000;
    outline: none;
  }
  .footer-inner button {
    background: rgba(255, 255, 255, 1);
    border-radius: 50px;
    margin-left: -20px;
    background: linear-gradient(94.78deg, #DF5950 11.19%, #451046 93.72%);
    font-size: 16px;
    line-height: 150%;
    outline: none;
  }
  .before-enter {
    opacity: 0;
    transform: translateY(0px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
  .loading {
    display: none;
  }
   @media screen and (min-width: 310px) and (max-width: 640px) {
    .h1-main-screen {
      font-size: 32px;
      text-align: center;
    }
    .main-screen__button--active {
      padding: 10px 10px;
    }
    .rectangle-1 {
        width: 320px;
        height: 300px;
    }
    .start-percentage h3 {
      font-size: 24px;
    }
    .h2 {
      font-size: 32px;
    }
    .footer-inner {
      width: 100%;
      height: 44px;
      border-radius: 50px;
      margin-left: 10px;
    }
    .footer-inner input {
      margin-left: 0;
    }
   }

</style>
