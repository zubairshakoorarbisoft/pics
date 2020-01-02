import React from "react";
import ImageCard from "./ImageCard";

const ImagesList = props => {
  return props.images.map(image => (
    <ImageCard
      key={image.id}
      description={image.description}
      url={image.urls.regular}
    />
  ));
};

export default ImagesList;
