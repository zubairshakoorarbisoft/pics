import React from "react";

class ImageCard extends React.Component {
    constructor(){
        super();
        this.imgRefs = React.createRef();
    }
    state = {spans: 0}
    componentDidMount(){
        this.imgRefs.current.addEventListener('load', this.setImageSpans);
    }

    setImageSpans = () => {
        const height = this.imgRefs.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans})

    };
  render() {
    const { url, description } = this.props;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imgRefs} src={url} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
