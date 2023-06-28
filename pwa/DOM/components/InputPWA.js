export class InputPWA extends HTMLElement
{
    constructor()
    {
        super();
        this.classList.add('input');
    }
    
    static get observedAttributes()
    {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        switch(name)
        {
            case '':
            break;
        }
    }
}

customElements.define("input-pwa", InputPWA);