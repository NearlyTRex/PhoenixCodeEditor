### Import :
```js
const QuickViewManager = brackets.getModule("features/QuickViewManager")
```

<a name="module_features/QuickViewManager"></a>

## features/QuickViewManager
QuickViewManager provides support to add interactive preview popups on hover over the main editors.

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
**Example**  
```js

* [features/QuickViewManager](#module_features/QuickViewManager)
    * [.isQuickViewShown()](#module_features/QuickViewManager..isQuickViewShown) ⇒ <code>boolean</code>
    * [.lockQuickView()](#module_features/QuickViewManager..lockQuickView) : <code>function</code>
    * [.unlockQuickView()](#module_features/QuickViewManager..unlockQuickView) : <code>function</code>

<a name="module_features/QuickViewManager..isQuickViewShown"></a>

### features/QuickViewManager.isQuickViewShown() ⇒ <code>boolean</code>
If quickview is displayed and visible on screen

**Kind**: inner method of [<code>features/QuickViewManager</code>](#module_features/QuickViewManager)  
<a name="module_features/QuickViewManager..lockQuickView"></a>

### features/QuickViewManager.lockQuickView() : <code>function</code>
locks the current QuickView if shown to be permanently displayed on screen till the `unlockQuickView` function

**Kind**: inner method of [<code>features/QuickViewManager</code>](#module_features/QuickViewManager)  
<a name="module_features/QuickViewManager..unlockQuickView"></a>

### features/QuickViewManager.unlockQuickView() : <code>function</code>
unlocks the current QuickView locked by `lockQuickView` fucntion.

**Kind**: inner method of [<code>features/QuickViewManager</code>](#module_features/QuickViewManager)  