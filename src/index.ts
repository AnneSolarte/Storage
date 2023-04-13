import "./components/export"
import MyCounter from "./components/counter/counter";
import Reset from "./components/reset/reset";
import styles from "./components/counter/styles.css"

class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        }

        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <my-counter></my-counter>
                <my-reset></my-reset>
                `;
            }
        }
}

customElements.define("app-container", AppContainer);
