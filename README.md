# vue3-animate-onscroll
A simple Vue3 directive that animates elements as they scroll into view.

## Installation

```sh
npm install vue3-animate-onscroll
# or
yarn add vue3-animate-onscroll
```

## Setup
Import to your `Vue` application
```javascript
import { createApp } from 'vue';
import VueAnimateOnScroll from 'vue3-animate-onscroll';

const app = createApp(App);
app.use(VueAnimateOnScroll);
app.mount('#app');
```

## Usage
For demo purposes, let's use [animate.css](https://daneden.github.io/animate.css/),
a css animation library but using your own custom CSS animations would work the same way as well.

Import `animate.css` anyway you like. For demo purposes, in your `index.html`
```html
<head>
  <!-- some other stuff -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
</head>
```

Pass the desired class as a string literal (in single quotes) in your `Vue` template:
```html
<div v-animate-onscroll="'animated flip'">Animate me once upon scroll</div>
```

### Repeat Modifier
Note that by default the animation will only trigger once: the first time the element scrolled into view. If you want to repeat the animation everytime it was scrolled into view, use the `repeat` modifier:
```html
<div v-animate-onscroll.repeat="'animated flip'">Animate me upon scroll forever</div>
```

### Scroll Direction
It's also possible to animate only on a specific scroll direction by passing in an object as the value. In the following example, the animation will only trigger the first time you scroll down on the element.

```html
<div v-animate-onscroll="{down: 'animated flip'}">Animate me once upon scroll down</div>
```
On upward scroll:
```html
<div v-animate-onscroll="{up: 'animated rotateOut'}">Animate me once upon scroll up</div>
```

If you want to repeat the animation *everytime you scroll down* to the element add the `repeat` modifier:

```html
<div v-animate-onscroll.repeat="{down: 'animated flip'}">Animate me everytime you scroll down on me</div>
```

### Multiple animations
Or use two different animations for each scroll direction:
```html
<div v-animate-onscroll="{down: 'animated flip', up: 'animated rotateOut' }">Animate me upon scroll forever</div>
```
Note that by providing both `up` and `down` directions, the `repeat` modifier is implicitly in effect.

## Demo
Live demo [here](https://vue-animate-onscroll.netlify.com/).

## Source
 [vue-animate-onscroll](https://github.com/vycoder/vue-animate-onscroll) project changed to vue3
