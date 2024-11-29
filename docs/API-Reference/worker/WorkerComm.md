### Import :
```js
const WorkerComm = brackets.getModule("worker/WorkerComm")
```

<a name="module_worker/WorkerComm"></a>

## worker/WorkerComm
WorkerComm provides util methods to communicate between web workers and Phoenix.

**Example**  
```js
**Example**  
```js

* [worker/WorkerComm](#module_worker/WorkerComm)
    * [.createWorkerComm(postTarget, eventDispatcher)](#module_worker/WorkerComm..createWorkerComm) : <code>function</code>
    * ["EVENT_WORKER_COMM_INIT_COMPLETE"](#event_EVENT_WORKER_COMM_INIT_COMPLETE)

<a name="module_worker/WorkerComm..createWorkerComm"></a>

### worker/WorkerComm.createWorkerComm(postTarget, eventDispatcher) : <code>function</code>
Adds support for WorkerComm APIs to the provided web-Worker instance. Only available in the main thread.

**Kind**: inner method of [<code>worker/WorkerComm</code>](#module_worker/WorkerComm)  

| Param | Type | Description |
| --- | --- | --- |
| postTarget | <code>string</code> | The web-worker reference. |
| eventDispatcher | <code>object</code> | created with `util/EventDispatcher`. |

<a name="event_EVENT_WORKER_COMM_INIT_COMPLETE"></a>

### "EVENT_WORKER_COMM_INIT_COMPLETE"
Raised on main thread when WorkerComm is loaded in the web-worker and is ready.

**Kind**: event emitted by [<code>worker/WorkerComm</code>](#module_worker/WorkerComm)  