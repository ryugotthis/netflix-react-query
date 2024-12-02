import React from 'react';

const ResearchResult = ({ searchData, keyword }) => {
  console.log('heyy', searchData);
  return (
    <div
      style={{
        color: 'white',
        marginTop: '10vw',
        padding: '5vw',
        fontSize: '1.5rem',
      }}
      className="sub-title"
    >
      <p className="search-result">
        {keyword
          ? searchData?.results.length === 0
            ? `Sorry, there is no result about "${keyword}"`
            : `Search result of "${keyword}"`
          : ''}
      </p>
    </div>
  );
};

export default ResearchResult;
