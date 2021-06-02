import React from "react";

interface GalleryScreenProps {}

interface GalleryScreenState {}

export default class GalleryScreen extends React.Component<
  GalleryScreenProps,
  GalleryScreenState
> {
  constructor(props: GalleryScreenProps) {
    super(props);

    this.state = {};
  }

  render() {
    return <div>GALLERY</div>;
  }
}
