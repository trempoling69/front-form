import axios, { AxiosResponse, AxiosError } from 'axios';
type GenericRequestResponse<T> = {
  status: string;
  data: T;
};
type GenericRequestError = {
  status: string;
  message: string;
};

const axiosIntance = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

const handleReponse = <T>(response: AxiosResponse<T>) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(`Request failled with status : ${response.status}`);
  }
};

const handleRequestError = (error: AxiosError<GenericRequestError>) => {
  console.log(error);

  if (error.response) {
    // Erreur de réponse de l'API avec un code de statut
    if (error.response.data) {
      const errorMessage = error.response.data.message || 'Erreur inconnue';
      throw new Error(`Une erreur est survenue: ${errorMessage}`);
    } else {
      const errorMessage = error.response.statusText || 'Erreur inconnue';
      throw new Error(`Une erreur est survenue: ${errorMessage}`);
    }
  } else if (error.request) {
    // La requête a été faite mais pas de réponse a été reçue
    throw new Error('Pas de réponse de la part du serveur');
  } else {
    // Une erreur s'est produite lors de la configuration de la requête
    throw new Error(`Erreur sur la configuration de la requête : ${error.message}`);
  }
};

const get = async <T>(url: string, params: any = {}): Promise<GenericRequestResponse<T>> => {
  try {
    const response = await axiosIntance.get<GenericRequestResponse<T>>(url, { params, withCredentials: true });
    return handleReponse<GenericRequestResponse<T>>(response);
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (err: any) {
    return handleRequestError(err);
  }
};

const post = async <T, D>(url: string, data: D): Promise<GenericRequestResponse<T>> => {
  try {
    const response = await axiosIntance.post<GenericRequestResponse<T>>(url, data, { withCredentials: true });
    return handleReponse<GenericRequestResponse<T>>(response);
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export { get, post };
