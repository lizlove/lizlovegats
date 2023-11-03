export const useGhostMode = () => {
  {
    const css: string =
      "html {-webkit-filter: invert(100%);" +
      "-moz-filter: invert(100%);" +
      "-o-filter: invert(100%);" +
      "-ms-filter: invert(100%); }";

    const head: HTMLHeadElement = document.head;
    const inversion: HTMLElement | null = document.getElementById("invert");
    if (inversion) {
      head.removeChild(inversion);
    } else {
      const style: HTMLStyleElement = document.createElement("style");
      style.id = "invert";
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }
  }
};
