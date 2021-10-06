import axios from "axios";
import {
  GET_VIDEOGAMES,
  ORDENAR_VIDEOGAMES_ALFA,
  ORDENAR_VIDEOGAMES_RATING,
  RESET,
  FILTRAR_GENEROS,
  FILTRAR_ORIGEN,
  BUSCAR_GAME,
} from "../constantes/actions";
import { VIDEOGAMES_URL } from "../constantesUrl";

export function getVideogames() {
  return function (dispatch) {
    return axios.get(VIDEOGAMES_URL).then((videogames) => {
      dispatch({
        type: GET_VIDEOGAMES,
        payload: videogames.data,
      });
    });
  };
}

export function ordenarVideogamesAlfa(payload) {
  return {
    type: ORDENAR_VIDEOGAMES_ALFA,
    payload,
  };
}

export function ordenarVideogamesRating(payload) {
  return {
    type: ORDENAR_VIDEOGAMES_RATING,
    payload,
  };
}

export function resetear() {
  return {
    type: RESET,
  };
}

export function filtrarGenero(payload) {
  return {
    type: FILTRAR_GENEROS,
    payload,
  };
}

export function filtrarOrigen(payload) {
  return {
    type: FILTRAR_ORIGEN,
    payload,
  };
}

export function buscarGame(name) {
  return function (dispatch) {
    return axios.get(`${VIDEOGAMES_URL}?name=${name}`).then((videogames) => {
      dispatch({
        type: BUSCAR_GAME,
        payload: videogames.data,
      });
    });
  };
}
