index.js:
  combines routes.js, and index.js from slingshot-master.

imports store from 'store config'

<AppContainer>
  <Root store={store} />
</AppContainer>

Root.js
  store from props
  <Provider store={store}>
    <App />
  </Provider>

app.js

<Form />

Form.js

<Name />
and all other form-components
