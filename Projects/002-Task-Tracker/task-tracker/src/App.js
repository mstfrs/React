// import Inline from "./components/inline/inline";
// import Sassy from "./components/sassy/sassy";

import ModuleBtn from "./components/moduleCss/moduleBtn";

// import StyleSheet from "./components/regular-style/StyleSheet";
function App() {
  return (
    <div>
      {/* <h1>Clarusway</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet btnClass="primary" btnName="module" />
      <StyleSheet btnClass={false} btnName="module" /> */}
      {/* <Sassy /> */}
      <ModuleBtn btnClass="secondary" btnName="module" />
    </div>
  );
}

export default App;
