import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import axios from 'axios';
import DispList from './DispList';

const FetchPlaylist = () => {
  const [pageToken, setPageToken] = useState();
  const KEY = process.env.REACT_APP_HOST_API_KEY;
  const fetchPlaylist = async (key, pageToken) => {
    const { data } = await axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems',
      {
        params: {
          part: 'snippet',
          playlistId: 'PLZ4xIRSKcCtEvcgAgyqNUaeoeB1GNWyot',
          key: KEY,
          maxResults: 6,
          pageToken: pageToken,
        },
      }
    );
    return data;
  };
  const { resolvedData, isLoading, error } = usePaginatedQuery(
    ['playlist', pageToken],
    fetchPlaylist
  );
  return (
    <div className="container">
      <h3>JavaScript Total</h3>
      {error && <div>Algo saiu errado...</div>}

      {isLoading ? (
        <div>Aguardando Playlist...</div>
      ) : (
        <>
          <button
            className="btn"
            onClick={() => setPageToken(resolvedData.prevPageToken)}
            disabled={!resolvedData.prevPageToken}
          >
            Página Anterior
          </button>
          <button
            className="btn"
            onClick={() => setPageToken(resolvedData.nextPageToken)}
            disabled={!resolvedData.nextPageToken}
          >
            Próxima Página
          </button>
          <DispList resolvedData={resolvedData} />
        </>
      )}
    </div>
  );
};

export default FetchPlaylist;
