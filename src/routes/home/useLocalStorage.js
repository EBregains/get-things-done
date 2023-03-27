import React from "react";


function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))

  const {
    error,
    loading,
    item,
  } = state;

  // Creamos el estado inicial para nuestros errores y carga
  const OnError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const OnSucces = (item) => dispatch({ type: actionTypes.succes, payload: item });
  const OnSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const OnFinish = () => dispatch({ type: actionTypes.finish, });


  React.useEffect(() => {
    // Simulamos un segundo de delay de carga
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          OnSucces(parsedItem);
      } catch(error) {
      // En caso de un error lo guardamos en el estado
        OnError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        OnFinish();
      }
    }, 1000);
  }, []);
  
  const saveItemLocal = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      OnSave(newItem);
    } catch(error) {
      // En caso de algún error lo guardamos en el estado
      OnError(error);
    }
  };

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItemLocal,
    loading,
    error,
  };
}

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  succes: 'SUCCES',
  save: 'SAVE',
  finish: 'FINISH',
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.succes]: {
    ...state,
    error: false,
    item: payload, 
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.finish]: {
    ...state,
    loading: false,
  },
});
const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };