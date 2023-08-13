import React from "react";
import "./home.css";

interface HomeScreenState {
  isVisible: boolean;
}

interface HomeScreenProps { }

export default class HomeScreen extends React.Component<
  HomeScreenProps,
  HomeScreenState
> {
  constructor(props: HomeScreenProps) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  componentWillUnmount() {
    this.setState({ isVisible: false });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="avoidNav">
          <h1 className="page-header">Max Johnson</h1>
          <p className="small-links">
            <a href="/#interests">Interests</a>{" "}
            <a href="/#health" className="alt">Health and Fitness</a>{" "}
            <a href="/#travel" className="alt">Travel</a>{" "}
            <a href="/#programming" className="alt">Programming</a>{" "}
          </p>
          <div className="homeImageGridContainer_container">
            <div className="homeImageGridContainer_top">
              <img src="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/meInSanFran.jpg" className="homeImageGridImage" alt="meInSanFran" />
              <img src="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/goldenGate.jpg" className="homeImageGridImage" alt="Golden Gate" />
            </div>
            <div className="homeImageGridContainer_bottom">
              <img src="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/muirWoods.jpeg" className="homeImageGridImage" alt="Muir Woods" />
              <img src="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/meNapa.jpeg" className="homeImageGridImage" alt="Me Napa" />
            </div>
          </div>
          {<div className="changeup">
            <div className="description-below" id="interests">
              <h3>Interests</h3>
              <ImageDescriptionWithParagraphs
                description="Health and Fitness"
                imageAlt="Me Running"
                imageUri="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/meRunning.png"
                id="health"
              >
                <p>
                  Ever since I was a mere lad, I have had the drive to keep myself active. I later found out that this "drive" was my hyperactivity.
                  When I am staying active, that is when I am most at peace.
                </p>
                <p>
                  Keeping active has slowly evolved into me maintaining a lifestyle where I am always working to be more fit, incorporating it into every area of my life.
                  And in order to stay fit, I have to eat right.
                </p>
                <p>
                  So there ya go, a bit about my Health and Fitness interests. There's ALOT more where that came from 🤪
                </p>
              </ImageDescriptionWithParagraphs>
              <ImageDescriptionWithParagraphs
                description="Traveling"
                imageAlt="Me In Laos"
                imageUri="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/meLaos.jpeg"
                flipOrientation
                id="travel"
              >
                <p>
                  ^ That's me in Laos!
                </p>
                <p>
                  One thing I started doing my freshman year of college was scheduling something that would force me to travel (outside of the U.S., ideally)
                </p>
                <p>
                  The way I carry on this trait today is scheduling races in exotic places and having a girlfriend who can't stop traveling.
                </p>
              </ImageDescriptionWithParagraphs>
              <ImageDescriptionWithParagraphs
                description="Programming"
                imageAlt="Me In Laos"
                imageUri="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/programming.jpeg"
                id="programming"
              >
                <p>
                  I program!
                </p>
                <p>
                  You can read more about this in my <a href="/about">About</a> and <a href="/projects">Projects</a> pages.
                </p>
              </ImageDescriptionWithParagraphs>
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

interface IIMageDescriptionProps {
  readonly imageUri: string;
  readonly imageAlt: string;
  readonly description: string;
  readonly id: string;
  readonly flipOrientation?: boolean
}

const ImageDescription: React.FC<IIMageDescriptionProps> = props => {
  const { imageUri, description, imageAlt, flipOrientation, id } = props

  let imageClassName = "imageDescriptionImage"

  if (flipOrientation) {
    imageClassName += " __marginRight0percent __marginLeft10percent"
  }

  return (
    <div className="imageDescriptionContainer" id={id}>
      {!flipOrientation &&
        <div className="imageDescription">
          {description}
        </div>
      }
      <img src={imageUri} className={imageClassName} alt={imageAlt} />
      {flipOrientation &&
        <div className="imageDescription">
          {description}
        </div>
      }
    </div>
  )
}

interface IIMageDescriptionWithChildrenProps extends React.PropsWithChildren<IIMageDescriptionProps> { }

const ImageDescriptionWithParagraphs: React.FC<IIMageDescriptionWithChildrenProps> = props => {
  const { children } = props;
  return (
    <>
      <ImageDescription {...props} />
      {children}
    </>
  )
}