import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Date: any;
  DateTime: any;
  JSON: any;
  JSONObject: any;
  Time: any;
};

export type CreateEspacioInput = {
  img?: InputMaybe<Scalars['String']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  nombre: Scalars['String'];
  ubicacion: Scalars['String'];
};

export type CreateEventoInput = {
  director: Scalars['String'];
  duracion: Scalars['String'];
  espacioId: Scalars['Int'];
  fecha: Scalars['String'];
  horarios: Scalars['String'];
  img: Scalars['String'];
  nombre: Scalars['String'];
  pases: Scalars['String'];
  precio: Scalars['Int'];
  reparto: Scalars['String'];
  sala: Scalars['String'];
  sinopsis: Scalars['String'];
  tipo_eventoId: Scalars['Int'];
  trailer: Scalars['String'];
};

export type CreateTipoEventoInput = {
  nombre: Scalars['String'];
};

export type Espacio = {
  __typename?: 'Espacio';
  Eventos: Array<Maybe<Evento>>;
  id: Scalars['Int'];
  img?: Maybe<Scalars['String']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  nombre: Scalars['String'];
  ubicacion: Scalars['String'];
};

export type Evento = {
  __typename?: 'Evento';
  Espacio: Espacio;
  Tipo_evento: TipoEvento;
  director: Scalars['String'];
  duracion: Scalars['String'];
  espacioId: Scalars['Int'];
  fecha: Scalars['String'];
  horarios: Scalars['String'];
  id: Scalars['Int'];
  img: Scalars['String'];
  nombre: Scalars['String'];
  pases: Scalars['String'];
  precio: Scalars['Int'];
  reparto: Scalars['String'];
  sala: Scalars['String'];
  sinopsis: Scalars['String'];
  tipo_eventoId: Scalars['Int'];
  trailer: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEspacio: Espacio;
  createEvento: Evento;
  createTipoEvento: TipoEvento;
  deleteEspacio: Espacio;
  deleteEvento: Evento;
  deleteTipoEvento: TipoEvento;
  updateEspacio: Espacio;
  updateEvento: Evento;
  updateTipoEvento: TipoEvento;
};


export type MutationCreateEspacioArgs = {
  input: CreateEspacioInput;
};


export type MutationCreateEventoArgs = {
  input: CreateEventoInput;
};


export type MutationCreateTipoEventoArgs = {
  input: CreateTipoEventoInput;
};


export type MutationDeleteEspacioArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteEventoArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTipoEventoArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateEspacioArgs = {
  id: Scalars['Int'];
  input: UpdateEspacioInput;
};


export type MutationUpdateEventoArgs = {
  id: Scalars['Int'];
  input: UpdateEventoInput;
};


export type MutationUpdateTipoEventoArgs = {
  id: Scalars['Int'];
  input: UpdateTipoEventoInput;
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  espacio?: Maybe<Espacio>;
  espacios: Array<Espacio>;
  evento?: Maybe<Evento>;
  eventos: Array<Evento>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  tipoEvento?: Maybe<TipoEvento>;
  tipoEventos: Array<TipoEvento>;
};


/** About the Redwood queries. */
export type QueryEspacioArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryEventoArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryTipoEventoArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type TipoEvento = {
  __typename?: 'TipoEvento';
  Espacios: Array<Maybe<Espacio>>;
  Eventos: Array<Maybe<Evento>>;
  id: Scalars['Int'];
  nombre: Scalars['String'];
};

export type UpdateEspacioInput = {
  img?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  nombre?: InputMaybe<Scalars['String']>;
  ubicacion?: InputMaybe<Scalars['String']>;
};

export type UpdateEventoInput = {
  director?: InputMaybe<Scalars['String']>;
  duracion?: InputMaybe<Scalars['String']>;
  espacioId?: InputMaybe<Scalars['Int']>;
  fecha?: InputMaybe<Scalars['String']>;
  horarios?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  pases?: InputMaybe<Scalars['String']>;
  precio?: InputMaybe<Scalars['Int']>;
  reparto?: InputMaybe<Scalars['String']>;
  sala?: InputMaybe<Scalars['String']>;
  sinopsis?: InputMaybe<Scalars['String']>;
  tipo_eventoId?: InputMaybe<Scalars['Int']>;
  trailer?: InputMaybe<Scalars['String']>;
};

export type UpdateTipoEventoInput = {
  nombre?: InputMaybe<Scalars['String']>;
};

export type EventoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EventoQuery = { __typename?: 'Query', evento?: { __typename?: 'Evento', id: number, nombre: string, horarios: string, fecha: string, pases: string, sala: string, duracion: string, director: string, sinopsis: string, trailer: string, reparto: string, precio: number, img: string, Tipo_evento: { __typename?: 'TipoEvento', id: number, nombre: string }, Espacio: { __typename?: 'Espacio', id: number, nombre: string, ubicacion: string } } | null };

export type EventosQueryVariables = Exact<{ [key: string]: never; }>;


export type EventosQuery = { __typename?: 'Query', eventos: Array<{ __typename?: 'Evento', id: number, nombre: string, horarios: string, fecha: string, img: string, Espacio: { __typename?: 'Espacio', ubicacion: string }, Tipo_evento: { __typename?: 'TipoEvento', nombre: string } }> };


export const EventoDocument = gql`
    query Evento($id: Int!) {
  evento(id: $id) {
    id
    nombre
    horarios
    Tipo_evento {
      id
      nombre
    }
    fecha
    pases
    sala
    duracion
    Espacio {
      id
      nombre
      ubicacion
    }
    director
    sinopsis
    trailer
    reparto
    precio
    img
  }
}
    `;

/**
 * __useEventoQuery__
 *
 * To run a query within a React component, call `useEventoQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventoQuery(baseOptions: Apollo.QueryHookOptions<EventoQuery, EventoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventoQuery, EventoQueryVariables>(EventoDocument, options);
      }
export function useEventoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventoQuery, EventoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventoQuery, EventoQueryVariables>(EventoDocument, options);
        }
export type EventoQueryHookResult = ReturnType<typeof useEventoQuery>;
export type EventoLazyQueryHookResult = ReturnType<typeof useEventoLazyQuery>;
export type EventoQueryResult = Apollo.QueryResult<EventoQuery, EventoQueryVariables>;
export const EventosDocument = gql`
    query Eventos {
  eventos {
    id
    nombre
    horarios
    fecha
    img
    Espacio {
      ubicacion
    }
    Tipo_evento {
      nombre
    }
  }
}
    `;

/**
 * __useEventosQuery__
 *
 * To run a query within a React component, call `useEventosQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventosQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventosQuery(baseOptions?: Apollo.QueryHookOptions<EventosQuery, EventosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventosQuery, EventosQueryVariables>(EventosDocument, options);
      }
export function useEventosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventosQuery, EventosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventosQuery, EventosQueryVariables>(EventosDocument, options);
        }
export type EventosQueryHookResult = ReturnType<typeof useEventosQuery>;
export type EventosLazyQueryHookResult = ReturnType<typeof useEventosLazyQuery>;
export type EventosQueryResult = Apollo.QueryResult<EventosQuery, EventosQueryVariables>;