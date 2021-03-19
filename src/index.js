import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
/*

{
  name: 'RecoilRoot',
  sibling: null,
  children: [
    {
      name: 'Context.Provider',
      sibling: null,
      children: [
        {
          name: 'Context.Provider',
          sibling: null,
          children: [
            { 
              name: Batcher
              sibling: true,
              children: []
            },
            { 
              name: RecoilizeDebugger,
              sibling: true,
              children: []
            },
            {
              name: PlaygroundRender,
              sibling: null,
              children: [
                {
                  name: PlaygroundStart,
                  sibling: null,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

*/
