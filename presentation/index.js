// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  markdown: require("../assets/markdown.png"),
  chartec: require("../assets/CharTecLogo_Red_200.png"),
  relyenz: require("../assets/RelyenzLogo.png"),
  toohard: require("../assets/toohard.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#990505",
  tertiary: "black",
  quartenary: "#595959"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} fit caps lineHeight={1}>
              Holy Script!
            </Heading>
            <Heading size={1} fit caps textColor="secondary">
              Scripting for the MSP
            </Heading>
            <Layout>
              <Fill><Image src={images.chartec}/></Fill>
              <Fill><Image src={images.relyenz}/></Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading caps>Overview</Heading>
            <List>
              <Appear><ListItem>How can MSPs benefit from scripting knowledge?</ListItem></Appear>
              <Appear><ListItem>Creating</ListItem></Appear>
              <Appear><ListItem>Managing</ListItem></Appear>
              <Appear><ListItem>Documenting</ListItem></Appear>
              <Appear><ListItem>Resources</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps>Why Scripts?</Heading>
            <List>
              <Appear><ListItem>Quick Fixes</ListItem></Appear>
              <Appear><ListItem>Monitoring</ListItem></Appear>
              <Appear><ListItem>Macros</ListItem></Appear>
              <Appear><ListItem>Data Gathering/Merging/Transformations</ListItem></Appear>
              <Appear><ListItem>Computer Science</ListItem></Appear>
              <Appear><ListItem>Do More with Less</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="black">
            <Image src={images.toohard}/>
            <Appear><Heading fit textColor="secondary">It doesn't have to be.</Heading></Appear>
          </Slide>
          <Slide>
            <Heading fit caps>Simple, but Powerful</Heading>
            <CodePane
              lang="powershell"
              source={"Search-ADAccount -AccountInactive | Export-CSV C:\\inactive-accounts.csv"}
              margin="20px auto"
            />
            <CodePane
              lang="powershell"
              source={"Search-ADAccount -PasswordNeverExpires | Export-CSV C:\\unsecured-accounts.csv"}
              margin="20px auto"
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
