import React from 'react';
import eventBus from '../EventBus/EventBus';
import useEventBusListener from '../EventBus/useEventBusListener';

export enum WorkerState {
    IDLE = 'idle',
    WORKING = 'working',
    DONE = 'done'
}

const EvalChild = () => {
    const [progress, setProgress] = React.useState<number>(-1);

    useEventBusListener('worker-start', () => {
        setProgress(0);
        eventBus.emit('worker-state-update', WorkerState.WORKING);
    })

    React.useEffect(() => {
        if(progress < 0 || progress >= 1) {
            return;
        }

        eventBus.emit('worker-tick', progress);
        const newProgress = progress + Math.random();

        if(newProgress >= 1) {
            eventBus.emit('worker-state-update', WorkerState.DONE);
        } else {
            setProgress(newProgress);
        }
    }, [progress]);
    
    return null; 
}

export default EvalChild;