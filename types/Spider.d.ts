declare namespace Spider {
    interface Component {
        init: (div: HTMLDivElement, setting: ComponentSetting) => Promise<Component>;
        destroy: (option?: any) => Promise<void>;
    }
    interface ComponentSetting {
        name: string;
        type: string;
        config: any;
    }
}