export class final {
    constructor(correctAnswer, totalAmount) {
        this.score = document.getElementById("score");
        this.againButton = document.getElementById("againButton")
        this.renderFinal(correctAnswer, totalAmount)
        this.againButton.addEventListener("click", this.reload)
    }
    reload() {
        location.reload();
    }
    renderFinal(correctAnswer, totalAmount) {
        this.score.innerHTML = `you are answer ${correctAnswer} question out of ${totalAmount} question`
    }
}