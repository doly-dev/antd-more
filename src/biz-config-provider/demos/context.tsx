import * as React from 'react';

const Context = React.createContext<{
  str?: string;
  num?: number;
  obj?: object;
  arr?: any[];
}>({});

function Child() {
  const context = React.useContext(Context);
  // output:
  // Child context: {"str":"b"}
  return <div>Child context: {JSON.stringify(context)}</div>;
}

function Parent() {
  const context = React.useContext(Context);

  // output:
  // Parent context: {"str":"a","num":1,"obj":{"foo":1,"bar":"baz"},"arr":["foo","bar"]}
  return (
    <div>
      Parent context: {JSON.stringify(context)}
      <Context.Provider value={{ str: 'b' }}>
        <Child />
      </Context.Provider>
    </div>
  );
}

function App() {
  return (
    <Context.Provider
      value={{ str: 'a', num: 1, obj: { foo: 1, bar: 'baz' }, arr: ['foo', 'bar'] }}
    >
      <Parent />
    </Context.Provider>
  );
}

export default App;
