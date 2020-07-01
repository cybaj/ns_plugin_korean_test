import { Korean } from 'nativescript-korean';
console.log(new Korean().message);
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

import { fromObject } from "tns-core-modules/data/observable";


export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const korean = new Korean();
    const normalized = korean.normalize();

    // page.bindingContext = new HomeViewModel();
    page.bindingContext = fromObject(korean);
}
