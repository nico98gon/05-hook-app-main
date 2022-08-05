import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from '../src/01-useState/CustomWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHook';
// import { HooksApp } from './HooksApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    <FormWithCustomHooks />
  </React.StrictMode>
)
