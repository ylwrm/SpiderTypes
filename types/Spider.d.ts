declare namespace Spider {
    interface Component {
        init: (div: HTMLDivElement, option?: any) => Component;
        destroy: (option?: any) => void;
    }
}