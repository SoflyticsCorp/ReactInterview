import React, { useEffect, useState } from 'react';
import eventBus from '../EventBus/EventBus';
import useEventBusListener from '../EventBus/useEventBusListener';
import EvalChild, {WorkerState} from './EvalChild';

const EvalParent = () => {
    const [lines, setLines] = React.useState<string[]>([]);
    const appendLine = React.useCallback((line: string) => {
        setLines(pv => ([...pv, line]));
    }, []);

    /* Test Case 1: Readme Example */
    // const [count, setCount] = useState(0);
    // useEventBusListener('increment', () => {
    //     setCount(pv => pv+1);
    // });
    // useEventBusListener('done', () => {
    //     appendLine('All done!');
    // });

    // useEffect(() => {
    //     appendLine(count.toString());
    //     if(count < 5) {
    //         eventBus.emit('increment');
    //     } else {
    //         eventBus.emit('done');
    //     }

    // }, [count, appendLine]);

    /* Test Case 2 */
    // // Want child component to render first, then we can send the event to start
    // // This state works in conjunction with an effect to emit event on second render
    // const [startWorker, setStartWorker] = React.useState<boolean>(false);
    // const [workerState, setWorkerState] = React.useState<WorkerState>(WorkerState.IDLE);
    // useEventBusListener('worker-state-update', (state: WorkerState) => {
    //     setWorkerState(state);
    // });

    // useEventBusListener('worker-tick', (progress: number) => {
    //     appendLine(`Worker progress: ${progress*100}%`);
    // })

    // useEffect(() => {
    //     appendLine('Worker State: ' + workerState);
    // }, [workerState, appendLine]);

    // useEffect(() => {
    //     if(!startWorker) {
    //         // Flag worker to start next render
    //         setStartWorker(true);
    //     } else {
    //         // Start the worker
    //         eventBus.emit('worker-start');
    //     }
    // }, [startWorker])

    return <div>
        {/* Test Case 2 */}
        {/* <EvalChild/> */}
        {lines.map(l => <>
            {l}
            <br/>
        </>)}
        {/* Test Case 3: Make your own */}
    </div>
};

export default EvalParent;