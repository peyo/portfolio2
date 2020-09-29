import React from "react";
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "./config/LazyLoad";

// only initialize it one time for the entire application
if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
}

export class LazyImage extends React.Component {
  // update lazyLoad after first rendering of every image
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  // just render the image with data-src
  render() {
    const { alt, src, srcset, sizes } = this.props;
    return (
      <img
        alt={alt}
        className="lazy"
        data-src={src}
        data-srcset={srcset}
        data-sizes={sizes}
      />
    );
  }
}

export default LazyImage;
