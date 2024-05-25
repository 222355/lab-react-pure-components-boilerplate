Question: Which out of the two components (which are performing the same functionality) is performing better and how?

PureCounterComponent is generally more performant than SimpleCounterComponent because of the shallow comparison implemented by PureComponent.
This avoids unnecessary re-renders, which can be especially beneficial in larger applications or more complex components.

PureComponent
Its automatically implements shouldComponentUpdate with a shallow prop and state comparison.
Its will only re-render if it detects changes in the props or state that involve a shallow comparison.
This can lead to performance improvements, especially in scenarios where the component is re-rendered frequently with the same data.

Component
Its does not implement this optimization by default, meaning it will re-render on any state or prop change, regardless of whether the new values are the same as the old values.
It does not have the shallow comparison optimization and will re-render on any state change, even if the state value hasn't actually changed.
