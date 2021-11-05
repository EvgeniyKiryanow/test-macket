<template>
    <div class="benefits">
        <div class="benefits__body">
            <img class="benefits__oil-img" src="../../../src/assets/oil.png" alt="">
            <div class="benefits__items">
                <div v-for="list in benefitsLists" :key="list.index">
                    <div class="benefits__item">
                        <div class="benefits__item-img">
                            <img src="../../../src/assets/star.jpeg" alt="star">
                        </div>
                        <div class="benefits__item-body">
                            <h4 class="benefits__item-title">{{list.title}}</h4>
                            <div class="benefits__item-comprasion">{{list.comparison}}</div>
                            <div class="benefits__item-persent">{{list.persent}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="benefits__footer">
            <div class="benefits__footer-question">
                <p>Хотите</p>
                <p>ли узнать</p>
                <p>больше?</p>
            </div>
            <div class="benefits__footer-more">
                <p>Узнайте больше о нагро</p>   
                <button>Узнать больше</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Benefits",
    data() {
        return{
            benefitsLists: {
                list1 : {
                    title: 'Прирост урожая',
                    comparison: 'в сравнении с химическим удобрением',
                    persent: "30%-250%",
                },
                list2 : {
                    title: 'Экономия',
                    comparison: 'химические удобрение в хозяйстве',
                    persent: "до 70%",
                },
                list3 : {
                    title: 'Рост корневой',
                    comparison: 'системы растений при испольовании',
                    persent: "в 3-10раз",
                },
            }
        }
    },
}
</script>

<style lang='scss' scoped>
    .benefits{
        &__body {
            display: flex;
            justify-content: space-between;
            height: 350px;
        }
        &__oil-img {
            object-fit: contain;
            position: relative;
            top: -100px;
            height: 125%;
            width: 40%;
        }
        &__items {
            width: 50%;
        }
        &__item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            align-items: center;
            &-img {
                width: 20%;
                img {
                    width: 40px;
                }
            }
            &-body {
                width: 80%;
                padding: 10px;
            }
            &-title {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 600;
                text-transform: uppercase;
                font-size: 25px;
                color: #4d4545;
                margin: 0;
            }
            &-comprasion {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 100;
                text-transform: uppercase;
                font-size: 11px;
                color: #a7a9ac;
            }
            &-persent {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 600;
                text-transform: uppercase;
                font-size: 25px;
                color: #c49a6c;
            }
        }
        &__footer {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: 100px;
            padding-top: 50px;
            &-question {
                width: 40%;
                text-align: right;
                word-wrap: break-word;
                color: black;
                font-family: 'Roboto Condensed', sans-serif;
                margin: 0;
                padding: 0;
                line-height: 0;
                font-size: 14px;
            }
            &-more {
                width: 53%;
                margin-left: 5%;
                p {
                    color: #25383f;
                    font-family: 'Roboto Condensed', sans-serif;
                    font-weight: 600;
                    font-size: 50px;
                    padding: 0;
                    margin: 0;
                }
                button {
                    background: white;
                    border: 5px solid black;
                    font-family: 'Roboto Condensed', sans-serif;
                    font-weight: 600;
                    font-size: 23px;
                    padding: 15px;
                    cursor: pointer;
                }
            }
        }
    }
</style>