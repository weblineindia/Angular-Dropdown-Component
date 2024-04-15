import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
interface DropdownOption {
    id: string;
    name: string;
}
export declare class AngularWeblineindiaDropdownComponent {
    placeHolder: string;
    dropdownClass: string | string[];
    dropdownListClass: string | string[];
    disabled: boolean;
    options: DropdownOption[];
    value: string | number;
    selectedOption: DropdownOption | null;
    touched: boolean;
    change: EventEmitter<void>;
    focus: EventEmitter<void>;
    blur: EventEmitter<void>;
    ngOnInit(): void;
    onOptionSelect(event: any): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularWeblineindiaDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AngularWeblineindiaDropdownComponent, "angular-weblineindia-dropdown", never, { "placeHolder": { "alias": "placeHolder"; "required": false; }; "dropdownClass": { "alias": "dropdownClass"; "required": false; }; "dropdownListClass": { "alias": "dropdownListClass"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "options": { "alias": "options"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "change": "change"; "focus": "focus"; "blur": "blur"; }, never, never, false, never>;
}
export {};
