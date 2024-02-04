// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import MyWidget from './MyWidget';

// Assuming the global variable is named `MyWidgetSettings`
let settings = window.MyWidgetSettings;
if (!settings?.containerId) {
  settings={
    containerId: '#root',
    name: 'My Widget'
  }
}



if (settings?.containerId) {
  const widgetHostElement = document.querySelector(settings.containerId);
  if (widgetHostElement) {
    const root = ReactDOM.createRoot(widgetHostElement);
    root.render(<MyWidget {...settings}/>);
  }
}