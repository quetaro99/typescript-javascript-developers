import React from 'react';
import Counter from './Counter';


interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = () => {
    return ( 
    <div>
      <Counter />
    </div>);
};

// App.defaultProps ={
//   message: 'Hello DefaultProps'
//   // description: 'this is app components!',
// };

export default App;
