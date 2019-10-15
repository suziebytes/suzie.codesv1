import React from "react";
import {
  Grid,
  Computer,
  Video,
  CardTitle,
  Display,
  Img,
  ImageDiv,
  Line
} from "./portfoliostyles";

export default function GridSample() {
  const video = React.createRef();

  function Thumbs() {
    return (
      <Display>
        <CardTitle>RECENT WORK</CardTitle>
        <Line></Line>
        <ImageDiv>
          <Img
            onClick={e =>
              (video.current.src =
                "https://static.suzie.codes/file/suzie-portfolio/qa.mp4")
            }
            src="https://static.suzie.codes/file/suzie-portfolio/qahousescreen.png"
          />
        </ImageDiv>
        <ImageDiv>
          <Img
            onClick={e =>
              (video.current.src =
                "https://static.suzie.codes/file/suzie-portfolio/login.mp4")
            }
            src="https://static.suzie.codes/file/suzie-portfolio/loginscreen.png"
          />
        </ImageDiv>
        <ImageDiv>
          <Img
            onClick={e =>
              (video.current.src =
                "https://static.suzie.codes/file/suzie-portfolio/atomic.mp4")
            }
            src="https://static.suzie.codes/file/suzie-portfolio/atomicscreen.png"
          />
        </ImageDiv>
        <ImageDiv>
          <Img
            onClick={e =>
              (video.current.src =
                "https://static.suzie.codes/file/suzie-portfolio/candles.mp4")
            }
            src="https://static.suzie.codes/file/suzie-portfolio/candlesscreen.png"
          />
        </ImageDiv>
      </Display>
    );
  }

  return (
    <Grid>
      <Computer>
        <Video autoPlay muted loop ref={video}>
          <source
            src="https://static.suzie.codes/file/suzie-portfolio/qa.mp4"
            type="video/mp4"
          />
        </Video>
      </Computer>
      <Thumbs />
    </Grid>
  );
}
