import React from 'react';

const DispList = ({ resolvedData }) => {
  return (
    <div>
      <div className="row">
        {resolvedData.items.map((item, i) => (
          <div key={i}>
            <div className="col s4">
              <div className="card medium">
                <div className="card-image">
                  <img src={item.snippet.thumbnails.high.url} alt="" />
                </div>
                <div className="card-content">
                  <p>{item.snippet.title}</p>
                </div>
                <div className="card-action">
                  <a
                    href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                  >
                    Assista o vídeo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DispList;
