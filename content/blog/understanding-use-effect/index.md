---
title: 'Understanding the useEffect Hook in React'
date: '2020-10-27T12:00:00.00Z'
description: 'useEffect is a React hook that lets you perform side effects'
---

Since their release in React 16.8, hooks have quickly become a powerful tool in any React developers toolbox. One of the default hooks I find myself using all the time is `useEffect`, which allows you to perform side effects in your functional components.

Although `useEffect` is useful for managing side effects in React apps (data fetching, manual DOM manipulation, and so on), it can often be a source of confusion for those who haven't run into it before, and more importantly, it can negatively impact performance of your app if used incorrectly.

The most important thing to understand with the `useEffect` hook is that it _attempts_ to runs after every single render of the component (including initial render) it is defined in. With that said, you can customize how often the `useEffect` logic runs in your component fairly easily. It's also worth noting that `useEffect` only gets run after the browser has painted, meaning it doesn't block the browser from updating.

In the next couple sections, I'll discuss the various possibilities for running `useEffect` as well as provide some examples and compare it to the class lifecycle methods were appropriate.

## Run Every Render

By default, `useEffect` will run on initial render as well as every future render (update) of your component. This basic usage looks like this:

```jsx
useEffect(() => {
  console.log('I run on every render');
});
```

To further clarify this, let's take an example from the [React docs](https://reactjs.org/docs/hooks-effect.html):

```jsx
const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

This is a basic counter component that increments the counter (using state) and changes the page title (side effect) every time the button is clicked.

So how does this work? When the button is clicked, the `count` state variable is updated. As a result of state being updated, the component re-renders and then the `useEffect` is triggered, which in turn updates the document (page) title.

Although not fully the same, this usage would be similar to using a combination of `componentDidMount` (to cover the initial render) and `componentDidUpdate` (to cover future updates) in class components.

## Run Once

Now that we've seen the default case, how can we customize the `useEffect` hook to run only once (i.e. on initial render)? There is a second and optional argument of `useEffect`, which is a dependency array. If we want to run it only once, we can define it as follows:

```jsx
useEffect(() => {
  console.log('I run once, on initial render');
}, []);
```

When your component re-renders, `useEffect` will first check the dependency array provided to it and only run if one of the dependencies have changed. In this case, we provide an empty dependency array, so nothing will ever change, hence only being run once on initial render.

Common use cases for only running on initial render may be to fetch data or to change the page title. Once again, this can be compared to `componentDidMount`.

## Run on Dependency Change

Now that we know `useEffect` has an optional second argument, we can use that to customize it to run only on dependency change (such as state or props, for example). This would look something like this:

```jsx
useEffect(() => {
  console.log('I run every time myVar changes');
}, [myVar]);
```

In the above example, the `useEffect` logic would be run on the initial render, and then every subsequent render where `myVar` has changed in value. If `myVar` hasn't changed between renders, it won't run.

To clarify further, let's take the original counter example and convert it to use the dependency array:

```jsx
const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

Now every time the count is incremented and the component is re-rendered, it will change the document title, similar to above.

You may be thinking, why bother providing the dependency array if the first example worked just fine? In this case, there isn't much difference and either option works. However, as soon as you add an additional piece of code to the original example (without the dependency array) that causes re-renders as well (such as additional state), you run the risk of the `useEffect` block running more than it needs to, since it runs on every render. With that in mind, it's typically good practice to provide the dependency array unless you have a specific reason not to.

## Run on Clean Up

The final case I'll be covering is the clean up case. This version is typically used when subscribing to something, such as sockets, as you'll also want to unsubscribe when the component is no longer mounted. This pattern would look something like:

```jsx
useEffect(() => {
  console.log('I run on every render');

  return () => {
    console.log('I run on clean up');
  };
});
```

In the above snippet, we return a function from the `useEffect` which tells it what to run on clean up. When clean up is triggered (i.e. component unmounts), the code inside would get triggered. For example, we may want our component to subscribe to sockets on render and then unsubscribe to the sockets when that component unmounts as they are no longer needed.

Another point worth making here is that you can still use the dependency array discussed above in the same way as this will not impact how that works.

## Using More Than Once

Similar to other hooks such as `useState`, you can also use `useEffect` multiple times in one component.

For example, let's take the following:

```jsx
const Example = ({ myProp }) => {
  useEffect(() => {
    // Do something on initial render only, like changing document title
  }, []);

  useEffect(() => {
    // Do something every time a prop changes, like fetch some additional data
  }, [myProp]);

  // ... Rest of the component
};
```

In the above component, it would run the first `useEffect` only on initial render, which may be responsible for setting the page title, for example. The second `useEffect` may be used to fetch data based on a prop and would also be run on initial render, but it will also get run every time the component re-renders and `myProp` has changed.

This pattern is helpful if you have side effects that happen at different times and in different ways within your component.

## Conclusion

I hope you found this high-level overview of the `useEffect` hook helpful! If you have any questions or feedback, feel free to [reach out on Twitter](https://twitter.com/rfitzio). If you'd like to go a little deeper on the `useEffect` hook and how it works under the hood, the [Official React docs page](https://reactjs.org/docs/hooks-effect.htm) is an excellent resource.
