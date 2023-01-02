import eventBus from "./EventBus";

// Uses whatever type you chose for ArgT
type ArgT = Parameters<typeof eventBus.emit>[1]
const useEventBusListener = (eventName: string, args: ArgT) => {
    // TODO
}

export default useEventBusListener;