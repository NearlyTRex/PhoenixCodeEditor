### Import :
```js
const StringMatch = brackets.getModule("utils/StringMatch")
```

<a name="SearchResult"></a>

## SearchResult()
Object representing a search result with associated metadata (added as extra ad hoc fields)

**Kind**: global function  
<a name="stringMatch"></a>

## stringMatch(str, query, options, special) ⇒ <code>Object</code>
Match str against the query using the QuickOpen algorithm provided by
the functions above. The general idea is to prefer matches of "special" characters and,
optionally, matches that occur in the "last segment" (generally, the filename). stringMatch
will try to provide the best match and produces a "matchGoodness" score
to allow for relative ranking.

The result object returned includes "stringRanges" which can be used to highlight
the matched portions of the string, in addition to the "matchGoodness"
mentioned above. If DEBUG_SCORES is true, scoreDebug is set on the result
to provide insight into the score.

The matching is done in a case-insensitive manner.

**Kind**: global function  
**Returns**: <code>Object</code> - matched ranges and score  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to search |
| query | <code>string</code> | The query string to find in string |
| options | <code>Object</code> | to control search behavior.                  preferPrefixMatches puts an exact case-insensitive prefix match ahead of all other matches,                  even short-circuiting the match logic. This option implies segmentedSearch=false.                  When segmentedSearch is true, the string is broken into segments by "/" characters                  and the last segment is searched first and matches there are scored higher. |
| special | <code>Object</code> | (optional) the specials data from findSpecialCharacters, if already known                  This is generally just used by StringMatcher for optimization. |

<a name="multiFieldSort"></a>

## multiFieldSort(searchResults, fieldSpec)
Sorts an array of SearchResult objects on a primary field, followed by secondary fields
in case of ties. 'fieldSpec' provides the priority order for fields, where the first entry is the primary field, for example:
     multiFieldSort(bugList, [ "milestone", "severity" ]);
Would sort a bug list by milestone, and within each milestone sort bugs by severity.

fieldSpec can also include comparator functions of the form normally used by the sort()
function.

Any fields that have a string value are compared case-insensitively. Fields used should be
present on all SearchResult objects (no optional/undefined fields).

**Kind**: global function  

| Param | Type |
| --- | --- |
| searchResults | [<code>Array.&lt;SearchResult&gt;</code>](#SearchResult) | 
| fieldSpec | <code>Array.&lt;string, function()&gt;</code> | 

<a name="basicMatchSort"></a>

## basicMatchSort()
Sorts search results generated by stringMatch(): results are sorted into several
tiers based on how well they matched the search query, then sorted alphabetically
within each tier.

**Kind**: global function  
<a name="codeHintsSort"></a>

## codeHintsSort(query, choices, [options]) ⇒ <code>Array.&lt;string&gt;</code>
Retrieves the matching code hints based on the given query and choices array.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - - An array of matching code hints.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query to match against choices. |
| choices | <code>Array.&lt;string&gt;</code> | The list of possible code hints. |
| [options] | <code>object</code> | An optional object to specify additional search options. |
| options.limit | <code>number</code> | Maximum number of results to return |
| options.boostPrefixList | <code>Array.&lt;string&gt;</code> | Optional, Will rank matching items in the choices to top          if query starts with the array. EG: on typing b, we have to show background-color          to top. So we pass in ["background-color"] as boost prefix option along with other          css properties that we want to boost. |
| options.onlyContiguous | <code>boolean</code> | is set, will only include contiguous results. |

<a name="StringMatcher"></a>

## StringMatcher(options)
A StringMatcher provides an interface to the stringMatch function with built-in
caching. You should use a StringMatcher for the lifetime of queries over a
single data set.

You are free to store other data on this object to assist in higher-level caching.
(This object's caches are all stored in "_" prefixed properties.)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | to control search behavior.                  preferPrefixMatches puts an exact case-insensitive prefix match ahead of all other matches,                  even short-circuiting the match logic. This option implies segmentedSearch=false.                  segmentedSearch treats segments of the string specially. |


* [StringMatcher(options)](#StringMatcher)
    * [.reset()](#StringMatcher+reset)
    * [.match(str, query)](#StringMatcher+match) ⇒ <code>Object</code>

<a name="StringMatcher+reset"></a>

### stringMatcher.reset()
Clears the caches. Use this in the event that the caches may be invalid.

**Kind**: instance method of [<code>StringMatcher</code>](#StringMatcher)  
<a name="StringMatcher+match"></a>

### stringMatcher.match(str, query) ⇒ <code>Object</code>
Performs a single match using the stringMatch function. See stringMatch for full documentation.

**Kind**: instance method of [<code>StringMatcher</code>](#StringMatcher)  
**Returns**: <code>Object</code> - matched ranges and score  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to search |
| query | <code>string</code> | The query string to find in string |
