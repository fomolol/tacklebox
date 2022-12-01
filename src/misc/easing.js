/**
 * @file easing.js
 * @see https://easings.net/
 * @see https://www.npmjs.com/package/posed-easing-cubic-bezier?activeTab=readme
 */
const easeInSine = [0.47, 0, 0.745, 0.715]
const easeOutSine = [0.39, 0.575, 0.565, 1]
const easeInOutSine = [0.445, 0.05, 0.55, 0.95]

const easeInQuad = [0.55, 0.085, 0.68, 0.53]
const easeOutQuad = [0.25, 0.46, 0.45, 0.94]
const easeInOutQuad = [0.455, 0.03, 0.515, 0.955]

const easeInCubic = [0.55, 0.055, 0.675, 0.19]
const easeOutCubic = [0.215, 0.61, 0.355, 1]
const easeInOutCubic = [0.645, 0.045, 0.355, 1]

const easeInQuart = [0.895, 0.03, 0.685, 0.22]
const easeOutQuart = [0.165, 0.84, 0.44, 1]
const easeInOutQuart = [0.77, 0, 0.175, 1]

const easeInQuint = [0.755, 0.05, 0.855, 0.06]
const easeOutQuint = [0.23, 1, 0.32, 1]
const easeInOutQuint = [0.86, 0, 0.07, 1]

const easeInExpo = [0.95, 0.05, 0.795, 0.035]
const easeOutExpo = [0.19, 1, 0.22, 1]
const easeInOutExpo = [1, 0, 0, 1]

const easeInCirc = [0.6, 0.04, 0.98, 0.335]
const easeOutCirc = [0.075, 0.82, 0.165, 1]
const easeInOutCirc = [0.785, 0.135, 0.15, 0.86]

const easeInBack = [0.6, -0.28, 0.735, 0.045]
const easeOutBack = [0.175, 0.885, 0.32, 1.275]
const easeInOutBack = [0.68, -0.55, 0.265, 1.55]

const easeCustom = [0, 0.55, 0.45, 1]

export {
  // Sine
  easeInSine,
  easeOutSine,
  easeInOutSine,

  // Quad
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,

  // Cubic
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,

  // Quart
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,

  // Quint
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,

  // Expo
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,

  // Circ
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,

  // Back
  easeInBack,
  easeOutBack,
  easeInOutBack,

  // Custom
  easeCustom,
}
