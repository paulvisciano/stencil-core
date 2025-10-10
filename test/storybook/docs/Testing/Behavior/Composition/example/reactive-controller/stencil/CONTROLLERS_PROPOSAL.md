# Reactive Controllers (Summary)

## Component
- Single source of truth for metadata: @Component, @Prop, @State, @Event, @Method, @Watch.

- Declares controllers via local fields decorated with `@Controller()` (e.g. `@Controller() mouse = new MouseController(this)`).

- Holds direct references to controller instances (normal property access).

- Can call controller methods directly (e.g. `this.mouse.someAction()`).

- Triggers renders; controllers only request them.

## Controller
- Encapsulates reusable logic; no component metadata declarations.

- Never mutates or defines component decorators or template.

- Receives host component in constructor (bi-directional access: controller <-> component).

- Has access to all Stencil lifecycle hooks (componentWillLoad, componentDidLoad, componentShouldUpdate, componentWillUpdate, componentDidUpdate, disconnectedCallback, etc.).

- Can trigger a re-render via a host update API (final name TBD, e.g. a `requestUpdate()`-style method) when internal state changes.