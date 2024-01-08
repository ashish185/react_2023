## what we use polyfill ResizeObserver?
- Because when it was launched it does not support Safari, Edge some other browser. By importing it,
  it start running.
import ResizeObserver from "resize-observer-polyfill";