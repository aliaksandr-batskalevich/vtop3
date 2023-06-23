import React from 'react';
import s from './App.module.scss'
import {SideBar} from "./components/SideBar/SideBar";
import {Content} from "./components/Content/Content";

function App() {
  return (
    <div className={s.appWrapper}>
			<SideBar/>
			<Content/>
    </div>
  );
}

export default App;
