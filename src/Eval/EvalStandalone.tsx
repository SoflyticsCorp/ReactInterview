import React from 'react';
import eventBus from "../EventBus/EventBus";


const evalStandalone = () => {
    /* Test Case 1: Readme Example 1 */
    // const deregister1 = eventBus.register('some-event', () => {
    //     console.log('Hello 1');
    // });
    // eventBus.register('some-event', () => {
    //     console.log('Hello 2');
    // });
    // eventBus.register('some-other-event', () => {
    //     console.log('Hello 3');
    // });
    
    // eventBus.emit('some-event');
    
    /* Test Case 2: Readme Example 2 */
    // deregister1();
    // eventBus.emit('some-event');

    /* Test Case 3 */
    // const deregister4 = eventBus.register('some-other-event', () => {
    //     console.log('Hello 4');
    // });
    // deregister4();
    // eventBus.emit('some-other-event');

    /* Test Case 4 */
    // Make your own
};

const EvalStandalone = () => {
    React.useEffect(evalStandalone, []);

    return null;
}

export default EvalStandalone;