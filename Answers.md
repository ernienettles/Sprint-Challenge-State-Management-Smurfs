1. What problem does the context API help solve?

    Context allows you to circumvent passing props from parent to child to child, and allows you to
    pass props directly from the component handling the state to the component that needs it with 
    no intermediary component needed.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are functions we use to tell the reducer to change the state within the store. The reducers take in the actions, and depending on the action type changes the state according
    to the case. The store is where our state lives in redux, using the connect property we can access the store in any component we choose.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the global state within the application, meaning it's usually going to be used by multiple components. We use component state when it doesn't really make sense to handle the state within the store just to take it back out in the same component. Component state is generally state that is handled within the same component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk allows our action creators to return functions as well as objects. The default behaviour of an action creator is that it can only return an object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite state management system would have to be redux, because of the power it gives and how nonlinear it feels to use. It allows components to stay reusable, which I like.
