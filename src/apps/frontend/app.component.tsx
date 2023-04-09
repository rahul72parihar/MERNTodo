import React, { useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Sidebar } from './components';
import { TaskProvider } from './contexts';
import { Home } from './pages';
import InspectLet from './vendor/inspectlet';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, DarkTheme } from 'baseui';

const engine = new Styletron();

import './app.global.scss';

export default function App(): React.ReactElement {
  useEffect(() => {
    if (window.Config.inspectletKey) {
      InspectLet();
    }
  }, []);

  return (
    <TaskProvider>
      <StyletronProvider value={engine}>
        <BaseProvider theme={DarkTheme}>
          <Header />
          <Router>
            <div className="flex-div">
              <Sidebar />
              <Home />
            </div>
          </Router>
        </BaseProvider>
      </StyletronProvider>
    </TaskProvider>
  );
}
