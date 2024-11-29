This document outlines how to add support for various local languages in Phoenix Code.

Phoenix Code currently supports over 35 languages, primarily through automatic translations using AWS/Google Translate.

## Quick start

### How to Add Support for a New Language.
1. Please raise a ticket here at https://github.com/phcode-dev/phoenix/issues/new/choose 
    or 
2. Follow the below section on [Adding a new locale translation](Adding a new locale translation)

### Update translations for a language
To update translations for your language, let's say French.
Follow the below steps:
1. Find out the language code for your language
from [ISO-Language code](https://www.w3schools.com/tags/ref_language_codes.asp). For French, this is `fr`.
2. Open file: `src/nls/<locale>/strings.js`. For `French` the file would be `src/nls/fr/strings.js`.
3. Update the translations as you wish. Commit and raise a pull request.

## The `src/nls` folder
This folder contains all the localised strings. Each sub folder corresponds to an [ISO-Language code](https://www.w3schools.com/tags/ref_language_codes.asp).

### The `src/nls/root` folder
A special folder called the `root` folder houses the reference English translations from which all other locale translations are derived. The `root` folder has three main files:
1. `strings.js` - The full list of translated text.
2. `strings-app.js` - The list of language code to localized language name mapping. This will be used in the switch language dialogue in debug menu.
3. `urls.js` - local specific URLs.

### The `src/nls/<locale>` folder
Each `src/nls/<locale>` folder contains similar files, plus a few additional ones:
1. `expertTranslations.json` where you can provide expert translations for specific English strings to locale strings. This expert translation will be used instead of machine translations if present for a string.
2. `strings.js` - The full list of translated text for the locale.
3. Apart from the above two there are 2 autogenerated files that should not be edited: `lastTranslated.json` and `lastTranslatedLocale.json`.

## Autogenerated and Manual translations
When any string changes are made to `src/nls/root/strings.js` or any `src/nls/<locale>/strings.js`, it will automatically be scanned by GitHub Actions and the corresponding translations will be generated. A pull request will be raised with the new translations.

You can also run the translation command locally if you have the AWS/GCP keys with the command. This is mostly FYI for phoenix internal devs.
```bash
npm run _translateStrings
```

### Skipping auto translate
For some strings we may not want to translate them. For Example, for the keyboard shortcut string key `"KEYBOARD_CTRL": "Ctrl"`
we don't want it translated to any language. Just add another key appending `_DO_NOT_TRANSLATE` to the key to disable automatic translations Eg. `"KEYBOARD_CTRL_DO_NOT_TRANSLATE": "true"` just below the original key. 

### Adding expert/manual translation overrides
We may want to add locale specific expert translation if the autogenerated translation is not good.
For Eg. consider the key `"LIVE_DEV_LOADING_ERROR_MESSAGE": "Unable to load Live Preview page."`, and specify a manual translation in ro (Romanian). We can add a mapping in the file `nls/ro/expertTranslations.json` with
the following string `"Unable to load Live Preview page.": "Imposibil de a încărca pagina Live Development"` .

When the translation jobs run the next time, the expert translation override the auto generated translation.

## Adding a new locale translation
Say we want to add a new language translation `ko`. We have to do the following
1. In file `nls/strings.js` add the line `"ko": true,`
2. In file `nls/root/strings-app.js` add the line `"LOCALE_KO": "한국어",` where `한국어` is `Korean` in Korean language.
3. Create a new folder `nls/ko`.
4. Create a new file `nls/ko/strings.js` with the content `define({});`
5. Create three new files `nls/ko/lastTranslated.json`, `nls/ko/lastTranslatedLocale.json` and
`nls/ko/expertTranslations.json` with the content `{}`

Once the code is checked in, the translation will be auto generated.

> NB: For internal developers, You may manually generate the translation with `npm run _translateStrings` if you have the necessary keys for translation.