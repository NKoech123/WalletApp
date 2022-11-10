declare module "*.png" {
    const value: any
}

declare module "*.jpg" {
    const value: any;
    export = value;
}