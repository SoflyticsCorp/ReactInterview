# Soflytics Interview: Coding Exercise

## Objective: Implement an Event Bus for use inside of React App

The goal of this event bus is for React components to register listeners which will fire upon an event being triggered. 

You will modify the files inside of the `src/EventBus` directory. 

### Part 1: Typescript EventBus Implementation

The first file is `EventBus.ts`. This is the EventBus itself where listeners will be registered and events will be fired. This part has nothing to do with React and should be implemented using **only** typescript. This is a general programming problem and is language agnostic, it has nothing to do with the frontend specifically. 

The EventBus consists of two functions: `register` and `emit`.

`register` takes a string (the event name) and a function (the listener) and is intended to store the listener such that when the event is fired, the listener can be called. 
`register` returns a function (the deregister function), which takes no arguments and when called removed the stored listener.

`emit` takes a string (the event name) and is in charge of executing all the listeners associated with that same event name. 

This object is inspired by the existing APIs in the frontend. `register` is akin to `addEventListener` and `emit` is akin to `dispatchEvent`. Note that you should **not** use these APIs for this implementation, what I'm asking of you is to show me you can implement the same thing on your own, or at the very least demonstrate your problem solving abilities by attempting to.

You cannot modify and must adhere to the typescript interface outlined in the file. Your control over the interface is via its generic types. What they are and how they work is described in the comments of the file.

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

### Part 2: EventBus React Integration

The second file is `useEventBusListener.ts`

This file will handle registering/deregistering a listener while a component is mounted. 
The hook simply takes the same arguments the `register` function would, except that it should do two additional things:

1. Ensure that register only gets called **once**
2. Deregister the listener when the component unmounts

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

### Bonus problems if time allows:

1. Create a new version of `emit` that is throttled.
2. Update the hook to take a new optional argument: `enabled`. The listener should only be registered when this is true, and otherwise be deregistered
3. Update the hook to return a function: `refresh`. When this function is called, the listener should be deregistered and registered again. The motivation behind this is due to the limitation of the register function only being called once. This means that if the listener function has changed, the event bus will not see it. Redoing the registration gets around this.