import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AngularWeblineindiaDropdownComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci13ZWJsaW5laW5kaWEtZHJvcGRvd24vc3JjL2xpYi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1kcm9wZG93bi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXdlYmxpbmVpbmRpYS1kcm9wZG93bi9zcmMvbGliL2FuZ3VsYXItd2VibGluZWluZGlhLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVl2RSxNQUFNLE9BQU8sb0NBQW9DO0lBTGpEO1FBU1csYUFBUSxHQUFZLEtBQUssQ0FBQztRQUluQyxtQkFBYyxHQUEwQixJQUFJLENBQUM7UUFDN0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVOLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0RCxVQUFLLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDckQsU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0tBa0IvRDtJQWhCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNwRSxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7K0dBOUJVLG9DQUFvQzttR0FBcEMsb0NBQW9DLDRTQ1pqRCxvaUJBZ0JBOzs0RkRKYSxvQ0FBb0M7a0JBTGhELFNBQVM7K0JBQ0UsK0JBQStCOzhCQUtoQyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFLSSxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmludGVyZmFjZSBEcm9wZG93bk9wdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFuZ3VsYXItd2VibGluZWluZGlhLWRyb3Bkb3duXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1kcm9wZG93bi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hbmd1bGFyLXdlYmxpbmVpbmRpYS1kcm9wZG93bi5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcldlYmxpbmVpbmRpYURyb3Bkb3duQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciE6IHN0cmluZztcclxuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzITogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgZHJvcGRvd25MaXN0Q2xhc3MhOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnMhOiBEcm9wZG93bk9wdGlvbltdO1xyXG4gIEBJbnB1dCgpIHZhbHVlITogc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuICBzZWxlY3RlZE9wdGlvbjogRHJvcGRvd25PcHRpb24gfCBudWxsID0gbnVsbDtcclxuICB0b3VjaGVkID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgXHJcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID1cclxuICAgICAgdGhpcy5vcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLmlkID09PSB0aGlzLnZhbHVlKSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25PcHRpb25TZWxlY3QoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY3VzdG9tLWRyb3Bkb3duXCIgW25nQ2xhc3NdPVwieyBkaXNhYmxlZDogZGlzYWJsZWQgfVwiPlxyXG4gIDxzZWxlY3RcclxuICAgIChjaGFuZ2UpPVwib25PcHRpb25TZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcclxuICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgIFtuZ0NsYXNzXT1cImRyb3Bkb3duTGlzdENsYXNzXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgPlxyXG4gICAgPG9wdGlvbiAqbmdJZj1cInBsYWNlSG9sZGVyXCIgdmFsdWU9XCJcIiBkaXNhYmxlZCBbc2VsZWN0ZWRdPVwiIXNlbGVjdGVkT3B0aW9uXCI+XHJcbiAgICAgIHt7IHBsYWNlSG9sZGVyIH19XHJcbiAgICA8L29wdGlvbj5cclxuICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi5pZFwiPlxyXG4gICAgICB7eyBvcHRpb24ubmFtZSB9fVxyXG4gICAgPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbjwvZGl2PlxyXG4iXX0=