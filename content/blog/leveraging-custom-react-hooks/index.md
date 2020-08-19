---
title: Leveraging Custom React Hooks
date: "2020-08-16T12:00:00.00Z"
description: "Hooks are a powerful feature in React that let you do more with less"
---

Hooks were first introduced in React 16.8 and have since taken the React world by storm. Prior to hooks, you were restricted to classes if you wanted to use certain features of React, however now you are able to do a lot more with less. React comes with it's own set of default hooks, like `useEffect`, however, you can also construct your very own custom hooks. Some of the great benefits of custom hooks include: the ability to consolidate duplicate code, the ability to extend or leverage the default hooks, and in some cases, even the ability to avoid usage of third-party NPM modules entirely.

The following includes some custom hooks I've included in a number of my own projects that you can use for your own inspiration.

## Page Titles

One common thing most React apps will require is the ability to change the page title as the user routes to different pages. There are some great modules out there that allow you to do this really easily, like `react-helmet`, however if you're just looking for the ability to change page titles (and not manipulate more HEAD elements), you can actually handle this in your own custom hook.

The custom hook for this could be as simple as:

```js
import { useEffect } from "react";

export const usePageTitle = (title = false) => {
  useEffect(() => {
    // Change the page title if provided
    if (title) {
      document.title = title;
    }
  }, [title]);
};
```

The custom hook takes in a `title` parameter which is used within the `useEffect` default hook which then calls `document.title` in order to manipulate the page title. It also passes `title` to the dependency array in order to ensure that `useEffect` only runs when the title changes.

This custom hook would be used like:

```jsx
import React from "react";
import { usePageTitle } from "./use-page-title";

const MyPage = () => {
  usePageTitle("My Page");

  return <div>My page!</div>;
};

export default MyPage;
```

## Query Parameters

Another common custom hook I'll use in projects relates to query parameter retrieval, specifically when using `react-router`. Sometimes you want to grab the query paramters from the URL in order to be used in a component. React Router ships with `useLocation` which returns the `location` object for a given page, however you still need to find the query string from that. The custom hook would look something like:

```js
import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};
```

What this hook does is create and return a new [URL Search Params object](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) from the search string returned by `useLocation` from React Router. Once we have this, we can use the resulting object to find query parameters by their key.

For example, let's say we have a URL that looks like `mywebsite.com/?search=test` and we want to pull the value of `search`. This can be done easily with this new custom hook:

```jsx
import React from "react";
import { useQueryParams } from "./use-query-params";

const MyPage = () => {
  const query = useQueryParams();
  // This attempts to find the query parameter from the URL Search Params object
  const searchQuery = query.get("search");
  const result = searchQuery
    ? `You searched for: ${searchQuery}`
    : "You have not searched anything";

  return <div>{result}</div>;
};

export default MyPage;
```

## Click Outside

React apps will typically have some sort of menu that can be toggled, typically by a button. Although you can easily close the menu by clicking the same button, sometimes you want to be able to also close it if the user clicks anywhere outside of the active menu. In the past I've handled this scenario via a reusable higher order component, but have since moved to implementing it via a custom hook and absolutely love how simplified it is. The custom hook looks something like:

```js
import { useEffect } from "react";

export const useClickOutside = (elemRef, onClick) => {
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  });

  const onClickOutside = e => {
    if (elemRef && !elemRef.current.contains(e.target)) {
      onClick();
    }
  };
};
```

This custom hook is a little bit more involved than the previous two, but the logic is pretty straightforward. You'll notice there are two parameters: `elemRef` and `onClick`. The first one, `elemRef`, is used to take in a reference to an element on the page (i.e. a menu) and the second, `onClick` is used to handle what action we want to be done once the first element is clicked outside of.

Here is an example of how it could be used:

```jsx
import React, { useRef, useState } from "react";
import { useClickOutside } from "./use-click-outside";

const MyPage = () => {
  const menuWrapperRef = useRef();
  const [isOpen, setOpen] = useState(false);
  useClickOutside(menuWrapperRef, () => setOpen(false));

  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>Toggle Menu</button>
      <div ref={menuWrapperRef}>
        {isOpen && (
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
          </ul>
        )}
      </div>
    </div>
  );
};
```

In the above example, you can see that there's a ref around the wrapping `div` for the menu. The menu can be opened and closed by clicking the button, but it can also be closed when you click outside of the wrapper `div` element. We use the hook by passing reference to the wrapper `ref` as well as the function to execute when clicked outside, which in this case, is to call `setOpen` with `false` to close the menu.

## Compare Previous Values

Another hook I have found some useful uses for is a `usePrev` hook. This hook was one I found some time ago on [useHooks](https://usehooks.com/usePrevious/) and is one I always reach for in new projects now. This hook allows you to save some previous value (from state, props, etc.) to be compared and referenced in subsequent renders. The hook makes creative use of `useEffect` and `useRef` and looks like:

```js
import { useEffect, useRef } from "react";

export const usePrev = val => {
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
};
```

This hook works by storing the current value inside the ref and returning the previous value below (which will return before the `useEffect` fires off). One use case for this hook would be using it to compare the current route with the previous route to see if the page has changed (or if a regular re-render has occured). If you're using React Router, you could use it similar to the following:

```jsx
import { useLocation } from "react-router-dom";
import React from "react";
import { usePrev } from "./use-prev";

const MyPage = () => {
  const location = useLocation();
  const previousRoute = usePrev(location.pathname);

  // If previousRoute !== location.pathname, the route has changed!

  return <div>My page!</div>;
};

export default MyPage;
```

## Next Steps

Hopefully this helped provide some insight into the power of leveraging custom React hooks in your codebase or some inspiration on what may be a good candidate for a custom hook. Not only are they a lot of fun to build and work with, they can also create much cleaner and more reusable code. If you're not entirely sure where to start, I highly recommend reading through the Hooks section of the [React Docs](https://reactjs.org/docs/hooks-intro.html) as it breaks down everything relating to hooks in a very readable and example-driven way.
