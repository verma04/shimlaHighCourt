
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  GET_CAFE,
  CREATE_CAFE,
  UPDATE_CAFE,
  DELETE_CAFE,
  GET_EVENTS,
  GET_CAFES,
  SIGN_IN,
  GET_DOGS,
  SIGN_OUT,
  GET_USER,
  GET_CITIES,
  CREATE_CITY,
  FILTER_CAFE,
  CREATE_EVENT 
 
 
} from '../queries/index'



export const useGetCafes = () => useQuery(GET_CAFES);
export const useGetCities = () => useQuery(GET_CITIES);
export const useGetEvents = () => useQuery(GET_EVENTS);


export const useUpdateCafe = () => useMutation(UPDATE_CAFE);



export const useCreateEvent = () => useMutation(CREATE_EVENT, {
  update(cache, {data: {createEvent}}) {
    const {events} = cache.readQuery({query:GET_EVENTS})
    cache.writeQuery({
      query: GET_EVENTS,
      data: { events: [...events, createEvent]}
    });
 
  }
});


export const useDeleteCafe = () => useMutation(DELETE_CAFE, {
  update(cache, {data: {deletePortfolio}}) {
    const {portfolios} = cache.readQuery({query: GET_CAFE})
    const newPortfolios = portfolios.filter(p => p._id !== deletePortfolio);
    cache.writeQuery({
      query: GET_CAFE,
      data: { portfolios: newPortfolios }
    });
  }
});

export const useCreateCity  = () => useMutation(CREATE_CITY, {
  update(cache, {data: {createCity}}) {
    const {cities} = cache.readQuery({query:GET_CITIES})
    cache.writeQuery({
      query: GET_CITIES,
      data: { cities: [...cities, createCity]}
    });
  }
});


export const useCreateCafe  = () => useMutation(CREATE_CAFE, {
  update(cache, {data: {createCafe}}) {
    const {cafes} = cache.readQuery({query:GET_CAFES})
    cache.writeQuery({
      query:GET_CAFES,
      data: { cafes: [...cafes, createCafe]}
    });
  }
});
// Auth actions start -----------------------

export const useSignIn = () => useMutation(SIGN_IN, {
  update(cache, { data: { signIn: signedInUser }}) {


     const { token } = signedInUser;
     localStorage.setItem("jwtToken", token);
  }
})

export const useSignOut = () => useMutation(SIGN_OUT)


export const useLazyGetUser = () => useLazyQuery(GET_USER)
export const useGetUser = () => useQuery(GET_USER)


// Auth actions end -----------------------
