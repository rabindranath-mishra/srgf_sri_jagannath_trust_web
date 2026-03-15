import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=2d536c13"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Navbar } from "/src/components/Navbar.tsx";
import { Hero } from "/src/sections/Hero.tsx";
import { About } from "/src/sections/About.tsx";
import { Events } from "/src/sections/Events.tsx";
import { Gallery } from "/src/sections/Gallery.tsx";
import { Donate } from "/src/sections/Donate.tsx";
import { Leadership } from "/src/sections/Leadership.tsx";
import { Contact } from "/src/sections/Contact.tsx";
import { Footer } from "/src/sections/Footer.tsx";
function App() {
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-off-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-maroon text-ivory py-2 px-4 text-center text-xs md:text-sm font-medium z-[60] relative", children: "Founded by the Odia community, welcoming all residents of Shriram Greenfield, Bengaluru." }, void 0, false, {
      fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { children: [
      /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
        fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(About, {}, void 0, false, {
        fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Events, {}, void 0, false, {
        fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Gallery, {}, void 0, false, {
        fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Donate, {}, void 0, false, {
        fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Leadership, {}, void 0, false, {
        fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
        fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("D:/Rabi/GitHub/srgf_sri_jagannath_trust_web/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY007QUFkTiwyQkFBdUI7QUFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVDLFNBQVNBLFlBQVk7QUFDckIsU0FBU0MsYUFBYTtBQUN0QixTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLGVBQWU7QUFDeEIsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxrQkFBa0I7QUFDM0IsU0FBU0MsZUFBZTtBQUN4QixTQUFTQyxjQUFjO0FBRXZCLFNBQVNDLE1BQU07QUFDYixTQUNFLHVCQUFDLFNBQUksV0FBVSw2QkFFYjtBQUFBLDJCQUFDLFNBQUksV0FBVSw2RkFBMkYsd0dBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxJQUVQLHVCQUFDLFVBQ0M7QUFBQSw2QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSztBQUFBLE1BQ0wsdUJBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU07QUFBQSxNQUNOLHVCQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFPO0FBQUEsTUFDUCx1QkFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUTtBQUFBLE1BQ1IsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU87QUFBQSxNQUNQLHVCQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVztBQUFBLE1BQ1gsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVE7QUFBQSxTQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FRQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQWxCVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbUJBO0FBRUo7QUFBQ0MsS0F2QlFEO0FBeUJULGVBQWVBO0FBQUksSUFBQUM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiSGVybyIsIkFib3V0IiwiRXZlbnRzIiwiR2FsbGVyeSIsIkRvbmF0ZSIsIkxlYWRlcnNoaXAiLCJDb250YWN0IiwiRm9vdGVyIiwiQXBwIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuL3NlY3Rpb25zL0hlcm9cIjtcbmltcG9ydCB7IEFib3V0IH0gZnJvbSBcIi4vc2VjdGlvbnMvQWJvdXRcIjtcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gXCIuL3NlY3Rpb25zL0V2ZW50c1wiO1xuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gXCIuL3NlY3Rpb25zL0dhbGxlcnlcIjtcbmltcG9ydCB7IERvbmF0ZSB9IGZyb20gXCIuL3NlY3Rpb25zL0RvbmF0ZVwiO1xuaW1wb3J0IHsgTGVhZGVyc2hpcCB9IGZyb20gXCIuL3NlY3Rpb25zL0xlYWRlcnNoaXBcIjtcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9zZWN0aW9ucy9Db250YWN0XCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9zZWN0aW9ucy9Gb290ZXJcIjtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLW9mZi13aGl0ZVwiPlxuICAgICAgey8qIFRvcCBBbm5vdW5jZW1lbnQgQmFyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1tYXJvb24gdGV4dC1pdm9yeSBweS0yIHB4LTQgdGV4dC1jZW50ZXIgdGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtbWVkaXVtIHotWzYwXSByZWxhdGl2ZVwiPlxuICAgICAgICBGb3VuZGVkIGJ5IHRoZSBPZGlhIGNvbW11bml0eSwgd2VsY29taW5nIGFsbCByZXNpZGVudHMgb2YgU2hyaXJhbSBHcmVlbmZpZWxkLCBCZW5nYWx1cnUuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPE5hdmJhciAvPlxuICAgICAgXG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgPEFib3V0IC8+XG4gICAgICAgIDxFdmVudHMgLz5cbiAgICAgICAgPEdhbGxlcnkgLz5cbiAgICAgICAgPERvbmF0ZSAvPlxuICAgICAgICA8TGVhZGVyc2hpcCAvPlxuICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJmaWxlIjoiRDovUmFiaS9HaXRIdWIvc3JnZl9zcmlfamFnYW5uYXRoX3RydXN0X3dlYi9zcmMvQXBwLnRzeCJ9