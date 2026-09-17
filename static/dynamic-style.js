// firefox doesn't support dividing two values with units in calc, so we add
// a shim to set the width of a pre element in ch units and update on resize
//
// we use the absence of ::webkit-scrollbar selector as a way to detect
// firefox, which is kind of an ugly hack but there doesn't seem to be a way
// to detect support for those calc queries without this
if (!CSS.supports('selector(::-webkit-scrollbar)')) {
  // cache the width of a single character in a <pre>
  let chPx;

  // updates the --width-in-chars property of an element to be the width of
  // the element in chars
  const updateWidthShimElem = (el) => {
    const chars = Math.round(el.getBoundingClientRect().width / chPx);
    el.style.setProperty('--width-in-chars', chars);
  };

  // initializes the width shim for all <pre> elements on the page, sets
  // the --width-in-chars property for the initial window size, and saves
  // the width of a single character in a <pre> element to chPx
  //
  // does nothing if there is no <pre> element on the page
  const initializeWidthShim = () => {
    // adds an element to el to measure the width of a single char
    const measureCh = (el) => {
      const ruler = document.createElement('span');
      ruler.style.cssText = 'position:absolute;visibility:hidden;font:inherit';
      ruler.textContent = 'x';
      el.appendChild(ruler);
      const w = ruler.getBoundingClientRect().width;
      el.removeChild(ruler);
      return w;
    };

    let first_pre = document.querySelector('pre');

    if (first_pre) {
      chPx = measureCh(first_pre);
    }

    document.querySelectorAll('pre').forEach(pre => {
      pre.classList.add('js-width-shim');
      updateWidthShimElem(pre);
    });
  };

  window.addEventListener('DOMContentLoaded', initializeWidthShim);

  // Adds padding to line numbers and footnote numbers to match the
  // format of css's decimal-leading-zero line number format
  // e.g. 01, 02, 03, ..., 10, 11, ..., 99, 100, 101, ...
  const addPadding = () => {
    const selectors = ['.giallo-ln', 'sup.footnote-definition-label', 'sup.footnote-reference a'];

    document.querySelectorAll(selectors.join(',')).forEach(el => {
      // group spaces and the digits of the number
      el.textContent = el.textContent.replace(/^(\s*)(\d+)$/, (_, spaces, num) => {
        const n = parseInt(num, 10);
        if (n < 10) {
          const padded = String(n).padStart(2, '0');
          // if there are leading spaces, we trim one space to
          // preserve length, else, the length will expand.
          const trimmed = spaces.length > 0 ? spaces.slice(1) : spaces;
          return trimmed + padded;
        }
        return spaces + num;
      });
    });
  };

  window.addEventListener('DOMContentLoaded', addPadding);

  // updates the --width-in-chars property of all <pre> elements on the page
  const updateWidthShim = () => {
    document.querySelectorAll('pre').forEach(updateWidthShimElem);
  };

  const debounce = (fn, ms) => { let t; return () => { clearTimeout(t); t = setTimeout(fn, ms); }; };
  window.addEventListener('resize', debounce(updateWidthShim, 10));
}
