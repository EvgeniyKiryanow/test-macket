<template>
    <div class="form">
        <form class="form__panel">
            <h3>
                <p>Посчитайте </p>
                <p>прибыль</p>
            </h3>
            <p class="form__panel-efficiently">Добриво еффективнее химии</p>
            <hr>
            <label>Выберите культуру</label>
            <select v-model="selected" >
                <option disabled value="Пшеница = 3100 грн/т">Пшеница = 3100 грн/т</option>
                <option :key=option.title v-for="option in options" v-bind:value="option.value">
                    {{ option.text }} грн
                </option>
            </select>
            <label for="culture">Урожайность, ц/га</label>
            <input  @change="() => { if(culture < 0) { this.culture = 0 }}" v-model="culture" max=99900 type="number" placeholder="20" name="culture" >
            <label for="cost">Стоимость хим. добрения , грн/га</label>
            <input @change="() => { if(cost < 0) { this.cost = 0 }}" max=99900  v-model="cost" type="number"  placeholder="3000" name="cost" >
            <label for="square">Посевная площадь , га</label>
            <input @change="() => { if(square < 0) { this.square = 0 }}" max=99900  v-model="square" type="number"  placeholder="10" name="square" >
            <hr>
            <p class="form__panel-profit">Прибль от добрива</p>
            <div class="form__panel-cost">
                <span>{{finalValue}}</span>
            </div>
            <span class="form__panel-currency">грн</span>
        </form>
    </div>
</template>

<script>
export default {
    name: "Form",
    data(){
        return {
        selected: 0,
        culture: 0,
        cost: 0,
        square: 0,
        options: [
            { text: 3000, value: 3000 },
            { text: 4000, value: 4000 },
            { text: 5000, value: 5000 },
            { text: 6000, value: 6000 },
            { text: 7000, value: 7000 },
            { text: 8000, value: 8000 },
            { text: 9000, value: 9000 },
        ]
        }
    },
    computed: {
        finalValue(){
          return  Math.floor(this.selected / 1000 + this.culture / 1000 + this.cost / 1000 +this.square / 1000)
        }
    },

}
</script>

<style lang="scss" scoped>
    .form {
        position: absolute;
        top: -40%;
        left: 20%;
        background: #e9e5e4;
        padding: 10px;
        &__panel {
            border-radius: 5px;
            padding: 10px 20px;
            border: 1px dashed #a7a9ac;
            background: #f3efee;
            display: flex;
            flex-direction: column;
            h3 {
                color: #25383f;
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 600;
                font-size: 36px;
                text-transform: uppercase;
                word-wrap: break-word;
                text-align: center;
                margin: 15px 0;
                p {
                    margin: 0;
                    padding: 0;
                }
            }
            &-efficiently {
                text-align: center;
                font-size: 18px;
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 100;
                margin: 0;
            }
            hr {
                background: #e9e5e4;
                width: 60%;
                margin: 15px auto;
            }
            label {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 100;
                font-size: 14px;
                padding: 5px 0;
            }
            input, select {
                border:1px solid #e9e5e4;
                padding: 6px ;
                margin-bottom: 15px;
                border-radius: 4px;
            }
            &-profit {
                text-align: center;
                color: #d26441;
                font-size: 20px;
                margin: 0;
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 400;
            }
            &-cost {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 600;
                font-size: 50px;
                text-align: center;
                color: #d26441;
            }
            &-currency {
                text-align: center;
                font-family: 'Roboto Condensed', sans-serif;
                font-size: 14px;
            }
        }
    }

</style>