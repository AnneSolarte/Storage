class Reset extends HTMLElement {
    button: HTMLButtonElement;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.button = this.ownerDocument.createElement("button");
        this.button.className = "reset"
        this.button.textContent = "Reset";
        this.button.addEventListener("click", this.handleClick);
    }

    handleClick = () => {
        localStorage.setItem("count", String(0))
        location.reload();
        this.render();
    };

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
                <p>Reset</p>
            </section>
            `;

        this.shadowRoot.appendChild(this.button);
        }
    }
}

customElements.define("my-reset", Reset);
export default Reset;