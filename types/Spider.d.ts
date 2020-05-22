declare namespace Spider {
    interface Component {
        init: (div: HTMLDivElement, setting: ComponentSetting) => Component;
        destroy: (option?: any) => void;
    }
    interface ComponentSetting {
        name: string;
        type: string;
        config: any;
    }
}