import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './components/dashboardComponents/Dashboard';


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Dashboard />
      
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);



