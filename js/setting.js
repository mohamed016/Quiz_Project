console.log("Allah")
import { quiz } from "./quiz.js"
export class setting {
    constructor() {
        this.settingDom = document.querySelector(".setting")
        this.quiz = document.querySelector(".quiz")
        this.category = document.querySelector("#Category")
        this.nquestion = document.querySelector("#nquestion")
        this.btn = document.querySelector("#btn")
        this.difficulty = [
            document.querySelector("#difficult"),
            document.querySelector("#Medium"),
            document.querySelector("#Easy"),
        ]
        this.Quiz = {}
    }
    getAmount() {
        if (this.nquestion.value == "") {
            window.alert("please enter number ")
        }
        else {
            return this.nquestion.value
        }
    }
    getCategory() {
        return this.category.value
    }
    getDifficulty() {
        let difficulty = this.difficulty.filter((el) => el.checked)
        if (difficulty.length == 0) {
            window.alert("please enter level that you want")
        }
        else {
            return difficulty[0].value
        }
    }
    appear() {
        this.quiz.style.display = "block"
        this.settingDom.style.display = "none"
    }
    async getApi() {
        let amount = this.getAmount();
        let category = this.getCategory();
        let difficulty = this.getDifficulty();
        console.log(amount, category, difficulty)
        let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
        let request = await fetch(url)
        let result = await request.json();
        let { results } = result
        console.log(results)
        this.Quiz = new quiz(this.quiz, amount, results)
        this.appear()
    }


    test() {
        this.btn.addEventListener("click", () => {
            this.getApi()
        })
    }
}

