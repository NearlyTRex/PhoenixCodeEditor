### Import :
```js
const IndexingWorker = brackets.getModule("worker/IndexingWorker")
```

<a name="module_worker/IndexingWorker"></a>

## worker/IndexingWorker
Phoenix houses a file indexing worker which caches all cacheable files of a project in memory.

**Example**  
```js

* [worker/IndexingWorker](#module_worker/IndexingWorker)
    * [.WorkerComm](#module_worker/IndexingWorker..WorkerComm)
    * ["EVENT_CRAWL_STARTED"](#event_EVENT_CRAWL_STARTED)
    * ["EVENT_CRAWL_PROGRESS"](#event_EVENT_CRAWL_PROGRESS)
    * ["EVENT_CRAWL_COMPLETE"](#event_EVENT_CRAWL_COMPLETE)

<a name="module_worker/IndexingWorker..WorkerComm"></a>

### worker/IndexingWorker.WorkerComm
To communicate between the IndexingWorker and Phoenix, the following methods are available:

**Kind**: inner property of [<code>worker/IndexingWorker</code>](#module_worker/IndexingWorker)  
<a name="event_EVENT_CRAWL_STARTED"></a>

### "EVENT_CRAWL_STARTED"
Raised when crawling started in the indexing worker.

**Kind**: event emitted by [<code>worker/IndexingWorker</code>](#module_worker/IndexingWorker)  
<a name="event_EVENT_CRAWL_PROGRESS"></a>

### "EVENT_CRAWL_PROGRESS"
Raised when crawling in progressing within the worker. The handler will receive the

**Kind**: event emitted by [<code>worker/IndexingWorker</code>](#module_worker/IndexingWorker)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| processed | <code>number</code> | The number of files cached till now. |
| total | <code>number</code> | Number of files to cache. |

<a name="event_EVENT_CRAWL_COMPLETE"></a>

### "EVENT_CRAWL_COMPLETE"
Raised when crawling is complete within the worker. The handler will receive the

**Kind**: event emitted by [<code>worker/IndexingWorker</code>](#module_worker/IndexingWorker)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| numFilesCached | <code>number</code> |  |
| cacheSizeBytes | <code>number</code> |  |
| crawlTimeMs | <code>number</code> | in milliseconds. |
