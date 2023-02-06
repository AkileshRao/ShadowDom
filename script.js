class VotingComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "closed" })

        this.votes = 0;

        const wrapper = document.createElement("div")
        wrapper.setAttribute("class", "wrapper")

        const voteBtn = document.createElement("button")
        voteBtn.setAttribute("id", "vote_btn")
        voteBtn.addEventListener("click", this.vote)

        const voteImg = document.createElement("img")
        voteImg.src = "./vote.png"
        voteBtn.appendChild(voteImg)

        const voteCount = document.createElement("span")
        voteCount.setAttribute("id", "vote_count")
        voteCount.innerText = this.votes;

        const styleSheet = document.createElement("link")
        styleSheet.setAttribute("rel", "stylesheet")
        styleSheet.setAttribute("href", "styles.css")

        shadowRoot.appendChild(styleSheet)
        shadowRoot.appendChild(wrapper)
        wrapper.appendChild(voteBtn)
        wrapper.appendChild(voteCount)
    }

    vote() {
        this.shadowRoot.getElementById("vote_count").innerText = ++this.votes
    }
}

customElements.define("voting-component", VotingComponent)
