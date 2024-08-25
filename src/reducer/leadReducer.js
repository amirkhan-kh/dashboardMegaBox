export  const initialState = {
    leads: [],
    loading: false,
    status: null,
    error: null,
  };

export const reducer = (state, action) => {
    switch (action.type) {
      case "LOADING_START": 
        return { ...state, loading: true }; 
      case "LOADING_END": 
        return { ...state, loading: false };
      case "SUCCESS": 
        return { ...state, leads: action.payload, status: "success" }; 
      case "ERROR":
        return { ...state, error: action.payload, status: "error", loading: false };
      default: 
        return state;
    }
};

export  const addReducer = (state, action)=>{
    switch(action.type){
        case "UPDATE_CUSTOMER": return {...state, customer: action.payload};
        case "UPDATE_EMAIL": return {...state, email: action.payload};
        case "UPDATE_PHONE": return {...state, phone: action.payload};
        default : return state;
    }
}

export const customerStates = {
    customer: "",
    email: "",
    phone: ""
}