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
  S,
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
            <Heading size={4} fit caps textColor="secondary">
              Scripting for the MSP
            </Heading>
            <Layout>
              <Fill><Image src={images.chartec.replace("/", "")}/></Fill>
              <Fill><Image src={images.relyenz.replace("/", "")}/></Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading caps>Overview</Heading>
            <Heading size={4} caps textColor="secondary">(What We'll Cover)</Heading>
            <List>
              <Appear><ListItem>WHY: How can MSPs benefit from scripting knowledge?</ListItem></Appear>
              <Appear><ListItem>WHAT: Understanding what options are available.</ListItem></Appear>
              <Appear><ListItem>WHERE: Managing and deploying/publishing your scripts.</ListItem></Appear>
              <Appear><ListItem>HOW: Documenting your scripts properly and efficiently.</ListItem></Appear>
              <Appear><ListItem>Resources & Continued Learning</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps>Why Scripts?</Heading>
            <List>
              <Appear><ListItem>Implement Quick Fixes</ListItem></Appear>
              <Appear><ListItem>Customize Your Monitoring</ListItem></Appear>
              <Appear><ListItem>Create Macros for Repeated Tasks</ListItem></Appear>
              <Appear><ListItem>Make Data Gathering/Merging/Transformations Easy</ListItem></Appear>
              <Appear><ListItem>Apply Basic Computer Science to Everyday Issues</ListItem></Appear>
              <Appear><ListItem>Do More with Less</ListItem></Appear>
            </List>
            <Appear><Text>Scripts can be useful for more than just support, service, and RMM! One or more of the applications and services you use day-to-day may be scriptable.</Text></Appear>
          </Slide>
          <Slide bgColor="black">
            <Heading fit textColor="secondary" lineHeight={1.5}>You might be thinking...</Heading>
            <Appear><Image src={images.toohard.replace("/", "")}/></Appear>
            <Appear><Heading fit textColor="primary">It doesn't have to be.</Heading></Appear>
          </Slide>
          <Slide notes="LabTech and Kaseya both have the ability to run PowerShell scripts. Kaseya was a bit more difficult to find documentation for, could just be me not having access to it.">
            <Heading fit caps lineHeight={1.5}>Simple, but Powerful</Heading>
            <CodePane
              lang="powershell"
              source={"Search-ADAccount -AccountInactive | Export-CSV C:\\inactive-accounts.csv"}
              margin="20px auto"
            />
            <Appear>
              <CodePane
                lang="powershell"
                source={"Search-ADAccount -PasswordNeverExpires | Export-CSV C:\\unsecured-accounts.csv"}
                margin="20px auto"
              />
            </Appear>
            <Appear>
              <Text fit>Not everyone can write complex scripts, but everyone <S type="italic">can</S> use them!</Text>
            </Appear>
          </Slide>
          <Slide notes="There's a level above Python we won't discuss. You can download and run scripts and executables with LabTech. ">
            <Heading fit caps>Languages and Services</Heading>
            <Heading fit caps>In (Roughly) Order of Complexity</Heading>
            <List>
              <Appear><ListItem>Python (with <Link href="http://www.pyinstaller.org/" target="_blank">PyInstaller</Link>)</ListItem></Appear>
              <Appear><ListItem>PowerShell</ListItem></Appear>
              <Appear><ListItem><Link href="http://ahkscript.org/" target="_blank">AutoHotKey</Link> / <Link href="https://www.autoitscript.com/site/autoit/" target="_blank">AutoIT</Link></ListItem></Appear>
              <Appear><ListItem>Batch</ListItem></Appear>
              <Appear><ListItem><Link href="https://ifttt.com/" target="_blank">IFTTT</Link> / <Link href="https://zapier.com/" target="_blank">Zapier</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading fit caps>Git: It's Not Just for Developers</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
