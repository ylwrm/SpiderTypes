/// <reference path="../types/Spider.d.ts" />
class MyComponent implements Spider.Component {
    public init = (div: HTMLDivElement) => {
        console.log(div);
        const button =  document.createElement('button');
        button.innerText = 'Button';
        div.appendChild(button);
        return this;
    };
}
