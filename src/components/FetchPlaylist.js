import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import DispList from './DispList';

const FetchPlaylist = () => {
  const KEY = process.env.REACT_APP_HOST_API_KEY;
  const fetchPlaylist = async () => {
    const { data } = await axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems',
      {
        params: {
          part: 'snippet',
          playlistId: 'PLZ4xIRSKcCtEvcgAgyqNUaeoeB1GNWyot',
          key: KEY,
        },
      }
    );
    return data;
  };
  const { data, isLoading, error } = useQuery('playlist', fetchPlaylist);
  return (
    <div className="container">
      <h3>JavaScript Total</h3>
      {error && <div>Algo saiu errado...</div>}

      {isLoading ? <div>Aguardando Playlist...</div> : <DispList data={data} />}
    </div>
  );
};

export default FetchPlaylist;
