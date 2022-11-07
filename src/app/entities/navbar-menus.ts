export class NavbarMenus {
    navbarMenus: NavbarMenu[];
    constructor() {
        this.navbarMenus = [
            { menuUrl: "/", menuIcon: "home", menuName: "Anasayfa" },
            { menuUrl: "bootstrap", menuIcon: "bookmark", menuName: "Bootstrap Kullanımı" },
            { menuUrl: "call-component", menuIcon: "bookmark", menuName: "Component Çağırma" },
            { menuUrl: "material", menuIcon: "bookmark", menuName: "Material Kullanımı" },
            { menuUrl: "route-navigation", menuIcon: "bookmark", menuName: "Material" },
            { menuUrl: "multiple-router-outlet", menuIcon: "bookmark", menuName: "Multiple Router Outlet Kullanımı" },
            { menuUrl: "router-event-tracking", menuIcon: "bookmark", menuName: "Router Event Takibi" },
            { menuUrl: "component", menuIcon: "bookmark", menuName: "Component Kullanımı" },
            { menuUrl: "service", menuIcon: "bookmark", menuName: "Service Kullanımı" },
            { menuUrl: "model-constructor", menuIcon: "bookmark", menuName: "Model Kullanımı" },
            { menuUrl: "interface", menuIcon: "bookmark", menuName: "Interface Kullanımı" },
            { menuUrl: "class-binding", menuIcon: "bookmark", menuName: "Class Binding" },
            { menuUrl: "model-oriented-setvalue-function", menuIcon: "bookmark", menuName: "SetValue Kullanımı" },
            { menuUrl: "enums", menuIcon: "bookmark", menuName: "Enum Kullanımı" },
            { menuUrl: "404-not-found", menuIcon: "bookmark", menuName: "404 Sayfaları" },
            { menuUrl: "firebase", menuIcon: "bookmark", menuName: "Firebase Kullanımı" },
            { menuUrl: "string-interpolation", menuIcon: "bookmark", menuName: "One-Way | String Interpolation" },
            { menuUrl: "property-binding", menuIcon: "bookmark", menuName: "One-Way | Property Binding" },
            { menuUrl: "event-binding", menuIcon: "bookmark", menuName: "One-Way | Event Binding" },
            { menuUrl: "two-data-binding", menuIcon: "bookmark", menuName: "Two-Way Data Binding" },
            { menuUrl: "template-reference-variable", menuIcon: "bookmark", menuName: "Template Reference Tanımlama" },
            { menuUrl: "constructor", menuIcon: "bookmark", menuName: "Constructor Kullanımı" },
            { menuUrl: "directives", menuIcon: "bookmark", menuName: "Directive Kullanımı" },
            { menuUrl: "structural-directive", menuIcon: "bookmark", menuName: "Structural Directive" },
            { menuUrl: "attribute-directive", menuIcon: "bookmark", menuName: "Attirubute Directive" },
            { menuUrl: "custom-directive", menuIcon: "bookmark", menuName: "Custom Directive" },
            { menuUrl: "ng-template", menuIcon: "bookmark", menuName: "ngTemplate Kullanımı" },
            { menuUrl: "filter", menuIcon: "bookmark", menuName: "Filter Kullanımı" },
            { menuUrl: "pipes", menuIcon: "bookmark", menuName: "Pipe Kullanımı" },
            { menuUrl: "basic-filter-pipe", menuIcon: "bookmark", menuName: "Basic Filter Pipe" },
            { menuUrl: "custom-pipe", menuIcon: "bookmark", menuName: "Custom Pipe" },
            { menuUrl: "animations", menuIcon: "bookmark", menuName: "Animasyon Kullanımı" },
            { menuUrl: "lazyload-image", menuIcon: "bookmark", menuName: "Lazyload Image Kullanımı" },
            { menuUrl: "notifications", menuIcon: "bookmark", menuName: "Notification Kullanımı" },
            { menuUrl: "reactive-forms", menuIcon: "bookmark", menuName: "ReactiveForms Kullanımı" },
            { menuUrl: "validator", menuIcon: "bookmark", menuName: "Validator Kullanımı" },
            { menuUrl: "local-storage", menuIcon: "bookmark", menuName: "Local Storage Kullanımı" },
            { menuUrl: "qr-code", menuIcon: "bookmark", menuName: "QRCode Kullanımı" },
            { menuUrl: "resolve", menuIcon: "bookmark", menuName: "Resolve Yapısı" }
        ]
    }
}

export class NavbarMenu {
    constructor(public menuUrl: string, public menuIcon: string, public menuName: string,) {
        this.menuUrl = menuUrl;
        this.menuIcon = menuIcon;
        this.menuName = menuName;
    }
}