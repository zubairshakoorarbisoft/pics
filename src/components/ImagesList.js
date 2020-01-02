import React from "react";
import ImageCard from "./ImageCard";

const ImagesList = props => {
  if (props.images.length < 1) {
    return (
      <div>
        <strong>{`No results found for the term "${props.term}"`}</strong>
      </div>
    );
  }
  return props.images.map(image => (
    <ImageCard
      key={image.id}
      description={image.description}
      url={image.urls.regular}
    />
  ));
};

export default ImagesList;
