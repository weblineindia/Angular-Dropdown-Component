# Angular - Dropdown Component

An Angular-based Dropdown component for selecting options from a list.

## Table of contents

- [Browser Support](#browser-support)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Available Props](#available-props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#Keywords)

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 83.0 ✔                                                                                   | 77.0 ✔                                                                                      | 13.1.1 ✔                                                                                 | 83.0 ✔                                                                             | 11.9 ✔                                                                                                                       |

## Demo

[![](textNg.gif)](https://github.com/weblineindia/AngularJS-Text-Box/textNg.gif)

## Getting started

Install the npm package:

```bash
npm install angular-weblineindia-dropdown
#OR
yarn add angular-weblineindia-dropdown
```

## Usage

Use the `<angular-weblineindia-dropdown>` component:

Add in app.module.ts file

```typescript
import { NgModule } from "@angular/core";
import { DropdownModule } from "angular-weblineindia-dropdown";

@NgModule({
  imports: [DropdownModule],
})
export class AppModule {}
```

Add in app.component.ts file

```typescript
  selectedOption: any;

  dropdownOptions: any[] = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
  ];

  onOptionSelect(option: any) {
    console.log('Selected option:', option.target.value);
  }

  onFocusDropdown(event: any) {
    console.log('Dropdown focused', event);
  }

  onBlurDropdown(event: any) {
    console.log('Dropdown blurred', event);
  }
}

```

Add in app.component.html file

```html
<angular-weblineindia-dropdown
  [placeHolder]="'Please select'"
  [options]="dropdownOptions"
  [dropdownClass]="'custom-dropdown'"
  [dropdownListClass]="'custom-dropdown-list'"
  [disabled]="false"
  [value]="'2'"
  (change)="onOptionSelect($event)"
  (focus)="onFocusDropdown($event)"
  (blur)="onBlurDropdown($event)"
></angular-weblineindia-dropdown>
```

Add in app.component.css file

```typescript
::ng-deep .custom-dropdown {
  /* Add your custom styles for the dropdown here */
}

::ng-deep .custom-dropdown-list {
  /* Add your custom styles for the dropdown list here */
}
```

## Available Props

| Prop              | Type    | Default | Description                              |
| ----------------- | ------- | ------- | ---------------------------------------- |
| placeholder       | String  |         | The placeholder text for the input field |
| options           | Array   |         | Array of options for the dropdown        |
| dropdownClass     | String  |         | CSS class for the dropdown container     |
| dropdownListClass | String  |         | CSS class for the dropdown list          |
| disabled          | Boolean |         | Specifies if the dropdown is disabled    |
| value             | string  |         | Selected option for the dropdown         |

## Methods

| Name   | Description                                                        |
| ------ | ------------------------------------------------------------------ |
| focus  | Gets triggered when the dropdown input field receives focus.       |
| blur   | Gets triggered when the dropdown input field loses focus.          |
| change | Gets triggered when the selected option(s) in the dropdown change. |

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

---

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html)

---

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/AngularJS-Text-Box/blob/master/LICENSE

## Keywords

angular-weblineindia-dropdown, dropdown, input, angular, angular-component, dropdown-component, dropdown-box, dropdown-box-input
