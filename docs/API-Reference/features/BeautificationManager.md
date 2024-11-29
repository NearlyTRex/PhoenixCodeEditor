### Import :
```js
const BeautificationManager = brackets.getModule("features/BeautificationManager")
```

<a name="module_features/BeautificationManager"></a>

## features/BeautificationManager
Beautification manager interacts with beautify extensions to determine what to do when user issues `beautify code`

**Example**  
```js
**Example**  
```js
**Example**  
```js
**Example**  
```js
**Example**  
```js

* [features/BeautificationManager](#module_features/BeautificationManager)
    * [.beautifyEditor(editor)](#module_features/BeautificationManager..beautifyEditor) ⇒ <code>Promise</code>
    * [.beautifyText(textToBeautify, filePathOrFileName)](#module_features/BeautificationManager..beautifyText) ⇒ <code>Promise</code>

<a name="module_features/BeautificationManager..beautifyEditor"></a>

### features/BeautificationManager.beautifyEditor(editor) ⇒ <code>Promise</code>
Beautifies text in the given editor with available providers.

**Kind**: inner method of [<code>features/BeautificationManager</code>](#module_features/BeautificationManager)  
**Returns**: <code>Promise</code> - - A promise that will be resolved to null if the selected text is beautified or rejects

| Param |
| --- |
| editor | 

<a name="module_features/BeautificationManager..beautifyText"></a>

### features/BeautificationManager.beautifyText(textToBeautify, filePathOrFileName) ⇒ <code>Promise</code>
Beautifies text with available providers.

**Kind**: inner method of [<code>features/BeautificationManager</code>](#module_features/BeautificationManager)  
**Returns**: <code>Promise</code> - - A promise that will be resolved to null if the selected text is beautified or rejects

| Param | Type | Description |
| --- | --- | --- |
| textToBeautify | <code>string</code> |  |
| filePathOrFileName | <code>string</code> | Note that the file path may not actually exist on disk. It is just used to infer what language beautifier is to be applied. |
