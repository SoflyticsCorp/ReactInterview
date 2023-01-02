# Soflytics Interview: Coding Exercise

## Objective: Implement an Event Bus for use inside of React App

The goal of this event bus is for React components to register listeners which will fire upon an event being triggered. 

You will modify the files inside of the `src/EventBus` directory. 
The first file is `EventBus.ts`. This is the EventBus itself where listeners will be registered and events will be fired.

Example usage of `EventBus.ts` API:

```
const deregister1 = eventBus.register('some-event', () => {
    console.log('Hello 1');
});
eventBus.register('some-event', () => {
    console.log('Hello 2');
});
eventBus.register('some-other-event', () => {
    console.log('Hello 3');
});

eventBus.emit('some-event');
// Hello 1
// Hello 2

deregister1();
eventBus.emit('some-event');
// Hello 2
```

The second file is `useEventBusListener.ts`

This file will handle registering/deregistering a listener while a component is mounted.

Example usage of `useEventBusListener.ts` API:

```
const SomeComponent = () => {
    const [count, setCount] = useState(0);
    useEventBusListener('increment', () => {
        setCount(pv => pv+1);
    });
    useEventBusListener('done', () => {
        console.log('All done!');
    })

    console.log(count);
    if(count < 5) {
        eventBus.emit('increment');
    } else {
        eventBus.emit('done');
    }

    return null;
}
// Console log output below

// Render 1: 0
// Render 2: 1
// Render 3: 2
// Render 4: 3
// Render 5: 4
// Render 6: 5 All done!
```

