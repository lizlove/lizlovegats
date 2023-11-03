export const useGhostMode = () => {
  {
    const css =
      "html {-webkit-filter: invert(100%);" +
      "-moz-filter: invert(100%);" +
      "-o-filter: invert(100%);" +
      "-ms-filter: invert(100%); }";

    const head = document.head;
    const inversion = document.getElementById("invert");
    if (inversion) {
      head.removeChild(inversion);
    } else {
      const style = document.createElement("style");
      style.id = "invert";
      if ((style as any).styleSheet) {
        (style as any).styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      head.appendChild(style);
    }
  }
};
