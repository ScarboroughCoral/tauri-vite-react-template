import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Greet, GreetCallback } from 'protobuf'

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }


  async function greetProtobuf() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // 这里不能传递Uint8Array（Web can not pass Uint8Array to Rust Command（invalid type: map, expected a sequence）） https://github.com/tauri-apps/tauri/issues/3306
    const greetBinary:number[] = await invoke("greet_protobuf", { greet: Array.from(Greet.encode(Greet.create({name})).finish()), b: 1 })
   
    // FIXME quick-protobuf 会将长度序列化到二进制序列开头 https://github.com/tafia/quick-protobuf/issues/202
    setGreetMsg(GreetCallback.decode(Uint8Array.from(greetBinary.slice(1))).message);
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
          <button type="button" onClick={() => greetProtobuf()}>
            Greet Proto
          </button>
        </div>
      </div>
      <p>{greetMsg}</p>
      
    </div>
  );
}

export default App;
