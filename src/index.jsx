// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import MyWidget from './MyWidget';

// Assuming the global variable is named `MyWidgetSettings`
const settings = window.MyWidgetSettings;

if (settings && settings.containerId) {
  const widgetHostElement = document.querySelector(settings.containerId);
  if (widgetHostElement) {
    const root = ReactDOM.createRoot(widgetHostElement);
    root.render(<MyWidget {...settings}/>);
  }
}