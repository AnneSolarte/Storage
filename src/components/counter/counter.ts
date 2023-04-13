import styles from "./styles.css"

class MyCounter extends HTMLElement {
    count?: number;
    button: HTMLButtonElement;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.button = this.ownerDocument.createElement("button");
        this.button.textContent = "Counter";
        this.button.className = "counter"
        this.button.addEventListener("click", this.handleClick);
    }

    handleClick = () => {
        this.count!++;
        localStorage.setItem('count',String(this.count))
        this.render();
    };

    connectedCallback() {
        this.count = Number(localStorage.getItem('count'));
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

            this.shadowRoot.innerHTML = `
            <section>
                <p>${this.count}</p>
            </section>
            `;

        this.shadowRoot.appendChild(this.button);
        }
    }
}

customElements.define("my-counter", MyCounter);
export default MyCounter;