import { Tooltip, Chip } from "@mui/material";
import React from "react";
import "./card.css";
// import { Link } from "react-router-dom";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;

        return (
          <div>
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <a href={`/album/${slug}`}>
              <div className="card">
                <div className="wrapper">
                  <img
                    src={image}
                    alt="album"
                    loading="lazy"
                    className="dispImg"
                  />
                  <div className="banner">
                    <div className="">
                      <Chip
                        label={`${follows} Follows`}
                        size="small"
                        className="pill typoBelow"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="titleWrapper">
                <p className="typo">{title}</p>
              </div>
              </a>
            </Tooltip>
          </div>
        );

        //Originally Written>
        // return(
        //     <div>
        // <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        // <Link to={`/album/${slug}`}>
        //     <div className="card">
        //     {/* UP and DOWN */}
        //         <div className="wrapper">
        //             <img src={image} alt="album" loading="lazy" />
        //             <div className="banner">
        //                 <Chip label={`${follows} Follows`}
        //                     size="small"
        //                     className="chip"
        //                 />
        //             </div>
        //             <p className="dd">{title}</p>
        //         </div>
        //         {/* <div className="titleWrapper">
        //             <p>{title}</p>
        //         </div> */}
        //     </div>
        // </Link>
        // </Tooltip>
        // </div>
        //  );
      }

      case "song": {
        const { image, likes, title } = data;
        return (
          <div className="wrapper">
            <div className="card">
              <img src={image} alt="song" loading="lazy" />
              <div className="banner">
                <div className="pill">
                  <p> {likes} Likes </p>
                </div>
              </div>
            </div>
            <div className="titleWrapper">
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;
