import React from 'react';

function MovieComponent(props) {
    const {title, open, poster} = props;
    
    return (
        <div>
            <h1>제목: {title}</h1>
            <h1>개봉: {open}</h1>
            <img src={poster}/>
            <hr/>
        </div>
    );
};

export default MovieComponent;