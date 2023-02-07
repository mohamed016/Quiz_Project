export class question {
    constructor(question) {
        this.questionContainer = document.getElementById("question")
        this.answerContainer = [
            document.getElementById("q1"),
            document.getElementById("q2"),
            document.getElementById("q3"),
            document.getElementById("q4")
        ]
        this.type = question
        this.question = question.question
        this.correctAnswer = question.correct_answer
        this.answer = [this.correctAnswer, ...question.incorrect_answers]
        this.isCorrect = false
    }
    checkAnswer = (checkedElement) => {
        this.isCorrect = checkedElement[0].textContent == this.correctAnswer ? true : false
    }
    randomElement() {
        let answerIndex = []
        for (let i = 0; i < this.answer.length; i++) {

            for (let x = 0; ; x++) {
                let Generate = Math.floor((Math.random() * 4));
                let f = answerIndex.find((G) => G == Generate)
                if (f == undefined && Generate < this.answer.length) {
                    answerIndex[i] = Generate
                    break;
                }
            }
        }
        return answerIndex
    }
    render = () => {
        let randomElement = this.randomElement()
        this.questionContainer.innerHTML = this.question
        if (this.type.type == "boolean") {
            document.getElementById("q3").style.visibility = "hidden"
            document.getElementById("q4").style.visibility = "hidden"
        }
        else {
            document.getElementById("q3").style.visibility = "visible"
            document.getElementById("q4").style.visibility = "visible"
        }
        for (let i = 0; i < this.answer.length; i++) {
            this.answerContainer[i].innerHTML = `<input type="radio" name="radio"/>${this.answer[randomElement[i]]}`      }

    }
}