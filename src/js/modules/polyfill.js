// import '@babel/polyfill'
// import 'core-js/features/array/from'
// import 'core-js/features/array/flat'
// import 'core-js/features/set'
// import 'core-js/features/promise'
// import objectFitImages from 'object-fit-images'

/* ========================== NODELIST IE11 ========================== */
// if (window.NodeList && !NodeList.prototype.forEach) {
//   NodeList.prototype.forEach = Array.prototype.forEach
// }

/* ========================== CLOSEST IE11 ========================== */
// (function (ELEMENT) {
//   ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector
//   ELEMENT.closest = ELEMENT.closest || function closest (selector) {
//     if (!this) return null
//     if (this.matches(selector)) return this
//     if (!this.parentElement) {
//       return null
//     } else return this.parentElement.closest(selector)
//   }
// }(Element.prototype))

/* ========================== OBJECTFIT IE11 ========================== */
// objectFitImages()
// .your-favorite-image {
//   object-fit: cover;
//   object-position: bottom;
//   font-family: 'object-fit: cover; object-position: bottom;';
// }
