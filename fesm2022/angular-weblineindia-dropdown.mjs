import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class AngularWeblineindiaDropdownService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AngularWeblineindiaDropdownComponent {
    constructor() {
        this.disabled = false;
        this.selectedOption = null;
        this.touched = false;
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
    }
    ngOnInit() {
        this.selectedOption =
            this.options.find((option) => option.id === this.value) || null;
    }
    onOptionSelect(event) {
        this.change.emit(event);
    }
    onFocus(event) {
        this.focus.emit(event);
    }
    onBlur(event) {
        this.blur.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AngularWeblineindiaDropdownComponent, selector: "angular-weblineindia-dropdown", inputs: { placeHolder: "placeHolder", dropdownClass: "dropdownClass", dropdownListClass: "dropdownListClass", disabled: "disabled", options: "options", value: "value" }, outputs: { change: "change", focus: "focus", blur: "blur" }, ngImport: i0, template: "<div class=\"custom-dropdown\" [ngClass]=\"{ disabled: disabled }\">\r\n  <select\r\n    (change)=\"onOptionSelect($event)\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n    [ngClass]=\"dropdownListClass\"\r\n    [disabled]=\"disabled\"\r\n  >\r\n    <option *ngIf=\"placeHolder\" value=\"\" disabled [selected]=\"!selectedOption\">\r\n      {{ placeHolder }}\r\n    </option>\r\n    <option *ngFor=\"let option of options\" [value]=\"option.id\">\r\n      {{ option.name }}\r\n    </option>\r\n  </select>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: "angular-weblineindia-dropdown", template: "<div class=\"custom-dropdown\" [ngClass]=\"{ disabled: disabled }\">\r\n  <select\r\n    (change)=\"onOptionSelect($event)\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n    [ngClass]=\"dropdownListClass\"\r\n    [disabled]=\"disabled\"\r\n  >\r\n    <option *ngIf=\"placeHolder\" value=\"\" disabled [selected]=\"!selectedOption\">\r\n      {{ placeHolder }}\r\n    </option>\r\n    <option *ngFor=\"let option of options\" [value]=\"option.id\">\r\n      {{ option.name }}\r\n    </option>\r\n  </select>\r\n</div>\r\n" }]
        }], propDecorators: { placeHolder: [{
                type: Input
            }], dropdownClass: [{
                type: Input
            }], dropdownListClass: [{
                type: Input
            }], disabled: [{
                type: Input
            }], options: [{
                type: Input
            }], value: [{
                type: Input
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });

class AngularWeblineindiaDropdownModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownModule, declarations: [AngularWeblineindiaDropdownComponent], imports: [CommonModule], exports: [AngularWeblineindiaDropdownComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AngularWeblineindiaDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularWeblineindiaDropdownComponent
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        AngularWeblineindiaDropdownComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of angular-weblineindia-dropdown
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularWeblineindiaDropdownComponent, AngularWeblineindiaDropdownModule, AngularWeblineindiaDropdownService };
//# sourceMappingURL=angular-weblineindia-dropdown.mjs.map
