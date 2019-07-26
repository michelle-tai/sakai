// Import the LitElement base class and html helper function
import {SakaiElement} from "./sakai-element.js";
import {html} from "./assets/lit-element/lit-element.js";

// Extend the LitElement base class
class SakaiPrimaryBtn extends SakaiElement {

    static get properties(){
        return{
            btnName: {type: String},
        };
    }

    static get styles(){
        return  css`
      button{
        font-family: "Open Sans",sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        border-color: #326b97;
        border-style: solid;
        border-width: 1px;
        border-radius: 3px;
        background-color: #15597e;
        radius: 3px;
        padding: 7px 10px;
        margin-right: 4px;
      }
      button:hover{
        background-color: #176691;
        border-color: #124466;
        cursor: pointer;
      }
      button:active{
        box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
      }
      button:focus{
        outline: 3px solid #5b9dd9;
        outline-offset: 2px;
      }
    `;
    }

    constructor(){
        super();
        this.btnName="lmao";
    }

    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */
    render(){
        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */
        return html`
      <!-- template content -->
      <button @click="${this.clickHandler}">${this.btnName}</button>
    `;
    }
    clickHandler(e) {
        console.log("e.target");
    }
}
// Register the new element with the browser.
customElements.define('sakai-primary-btn', SakaiPrimaryBtn);
