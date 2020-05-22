/// <reference path="../types/Spider.d.ts" />

class MyComponent implements Spider.Component {
    private bigString :any[]|undefined= new Array(5000000);
    private handler = () => {
        this.destroy();
    };
    private button: HTMLButtonElement | undefined;
    public init = (div: HTMLDivElement, setting: MyComponentSetting) => {
        this.button = document.createElement('button');
        this.button.innerText = 'Button';
        div.appendChild(this.button);
        this.button.addEventListener('click', this.handler);
        return this;
    };
    public destroy = () => {
        // for GC
        if (this.button) {
            this.button.removeEventListener('click', this.handler)
            this.button.innerText = 'destroy';
        }
    }
}
interface MyComponentSetting extends Spider.ComponentSetting {
    name: string;
    type: string;
    config: {
        
    };
}