import { question } from './question.js'
import { final } from './final.js'
export class quiz {
    constructor(quiz, amount, results) {
        this.quiz = quiz;
        this.final = document.querySelector(".final")
        this.current = document.querySelector(".current")
        this.total = document.querySelector(".total")
        this.next = document.querySelector("#nextBtn")
        this.totalAmount = amount
        this.answerAmount = 0
        this.question = this.setQuestion(results)
        this.renderQuestion()
        this.next.addEventListener("click", this.nextQuestion)
        console.log(this.question)
    }
    setQuestion = (results) => {
        return results.map((questions) => { return new question(questions) })
    }
    renderQuestion = () => {
        this.question[this.answerAmount].render()
        this.current.innerHTML = this.answerAmount
        this.total.innerHTML = this.totalAmount
    }
    nextQuestion = () => {
        let checkElement = this.question[this.answerAmount].answerContainer.filter((answer) => answer.firstChild.checked)
        let checkElement2 = this.question[this.answerAmount].answerContainer.filter((answer) => answer)
        console.log(checkElement2)

        if (checkElement.length == 0) {
            alert("please enter you answer")
        }
        else {
            this.question[this.answerAmount].checkAnswer(checkElement)
            this.answerAmount++;
            if (this.answerAmount < this.totalAmount) {
                this.renderQuestion()
            }
            else {
                this.endQuiz()
            }
        }
    }
    endQuiz() {
        this.quiz.style.display = "none"
        this.final.style.display = "block"
        let correctAnswer = this.countCorrect()
        new final(correctAnswer, this.totalAmount)
    }
    countCorrect() {
        let correctAnswer = 0
        this.question.forEach((el => {
            if (el.isCorrect) {
                correctAnswer++
            }
        }))
        return correctAnswer
    }
}

