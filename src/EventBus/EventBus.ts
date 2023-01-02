// Type Aliases for readability
type ListenerT<ArgT> = (args: ArgT) => void;
type DeregisterT<DeregisterRetT> = () => DeregisterRetT

// ArgT is the type of the arguments for the listener and emit functions.
// DeregisterRetT is the return value of the deregister function.
// EmitRetT is the return value of the emit function.
// You can set these whatever types you see fit
interface EventBusI<DeregisterRetT, EmitRetT, ArgT> {
    register: (eventName: string, listener: ListenerT<ArgT>) => DeregisterT<DeregisterRetT>;
    emit: (eventName: string, args: ArgT) => EmitRetT;
}


// MODIFY THIS LINE TO INITIALIZE EVENT BUS
const eventBus = null

export default eventBus;