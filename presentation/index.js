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

const ExtLink = (props) => <Link href={props.to} target="_blank">{props.children}</Link>;

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  markdown: require("../assets/markdown.png"),
  chartec: require("../assets/CharTecLogo_Red_200.png"),
  relyenz: require("../assets/RelyenzLogo.png"),
  toohard: require("../assets/toohard.gif"),
  me: require("../assets/me.jpg"),
  searching: require("../assets/searching.gif")
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
            <Text>http://bit.ly/mspscripting</Text>
          </Slide>
          <Slide>
            <Heading caps>-Me-</Heading>
            <Heading size={4} caps textColor="secondary"><ExtLink to="https://twitter.com/zbuttram">@zbuttram</ExtLink></Heading>
            <Image src={images.me.replace("/", "")}/>
            <Text>Full-Stack Web Developer</Text>
          </Slide>
          <Slide>
            <Heading caps>-Overview-</Heading>
            <Heading size={4} caps textColor="secondary">What We'll Cover</Heading>
            <List>
              <Appear><ListItem>WHY: How can MSPs benefit from scripting knowledge?</ListItem></Appear>
              <Appear><ListItem>WHAT: Understanding what options are available.</ListItem></Appear>
              <Appear><ListItem>WHERE: Managing and deploying/publishing your scripts.</ListItem></Appear>
              <Appear><ListItem>HOW: Documenting your scripts properly and efficiently.</ListItem></Appear>
              <Appear><ListItem>Resources & Continued Learning</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="black" transition={["fade"]}>
            <BlockQuote>
              <Quote textColor="secondary">an investment in automation is an investment in future naps</Quote>
              <Cite textColor="white"><ExtLink to="https://twitter.com/johnlindquist/status/781560908031983616">@jhooks</ExtLink></Cite>
            </BlockQuote>
          </Slide>
          <Slide>
            <Heading caps>-Why-</Heading>
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
          <Slide bgColor="black" transition={["fade"]}>
            <Heading fit textColor="secondary" lineHeight={1.5}>You might be thinking...</Heading>
            <Appear><Image src={images.toohard.replace("/", "")}/></Appear>
            <Appear><Heading fit textColor="primary">It doesn't have to be.</Heading></Appear>
          </Slide>
          <Slide notes="LabTech and Kaseya both have the ability to run PowerShell scripts. Kaseya was a bit more difficult to find documentation for, could just be me not having access to it.">
            <Heading fit caps lineHeight={1.5} size={8}>Simple, but Powerful</Heading>
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
              <Text>Not everyone can write complex scripts, but simple and thoughtful scripts can have great reusability.</Text>
            </Appear>
          </Slide>
          <Slide notes="There's a level above Python we won't discuss. You can download and run scripts and executables with LabTech. ">
            <Heading caps>-WHAT-</Heading>
            <Heading size={4} textColor="secondary" fit caps>Languages and Services</Heading>
            <Heading size={5} caps>In (Roughly) Order of Complexity</Heading>
            <List>
              <Appear><ListItem><ExtLink to="https://www.python.org/">Python</ExtLink></ListItem></Appear>
              <Appear><ListItem>PowerShell</ListItem></Appear>
              <Appear><ListItem><ExtLink to="http://ahkscript.org/">AutoHotKey</ExtLink> / <ExtLink to="https://www.autoitscript.com/site/autoit/">AutoIT</ExtLink></ListItem></Appear>
              <Appear><ListItem>Batch</ListItem></Appear>
              <Appear><ListItem><ExtLink to="https://ifttt.com/">IFTTT</ExtLink> / <ExtLink to="https://zapier.com/">Zapier</ExtLink></ListItem></Appear>
            </List>
          </Slide>
          <Slide notes="Third most active languange on GitHub">
            <Heading caps>-WHAT-</Heading>
            <Heading textColor="secondary" size={4} caps>Python</Heading>
            <List>
              <Appear>
                <ListItem>
                  Pros
                  <List>
                    <Appear><ListItem>Rich <ExtLink to="https://pypi.python.org/pypi">Ecosystem</ExtLink> of Modules</ListItem></Appear>
                    <Appear><ListItem>Can be <ExtLink to="http://www.pyinstaller.org/">Packaged</ExtLink> as Native Executables (.exe)</ListItem></Appear>
                    <Appear><ListItem>Cross-Platform Compatibility</ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Cons
                  <List>
                    <Appear><ListItem>Bigger Learning Curve</ListItem></Appear>
                    <Appear><ListItem>Less High-Level Abstractions</ListItem></Appear>
                    <Appear><ListItem>The 2.7 vs 3.5 <ExtLink to="http://py3readiness.org/">Problem</ExtLink></ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps>-WHAT-</Heading>
            <Heading textColor="secondary" size={4} caps>PowerShell</Heading>
            <List>
              <Appear>
                <ListItem>
                  Pros
                  <List>
                    <Appear><ListItem>Built-In to Windows</ListItem></Appear>
                    <Appear><ListItem>Microsoft is All-In</ListItem></Appear>
                    <Appear><ListItem>Can <ExtLink to="http://stackoverflow.com/questions/24940243/running-cmd-command-in-powershell">Fall Back</ExtLink> to Batch</ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Cons
                  <List>
                    <Appear><ListItem>Big-ish Learning Curve</ListItem></Appear>
                    <Appear><ListItem>No Cross-Platform</ListItem></Appear>
                    <Appear><ListItem>The <ExtLink to="http://ss64.com/ps/set-executionpolicy.html">Execution Policy</ExtLink> Problem</ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide notes="Better suited for quick shortcuts and macros">
            <Heading caps>-WHAT-</Heading>
            <Heading textColor="secondary" size={4} caps>AutoHotKey / AutoIT</Heading>
            <List>
              <Appear>
                <ListItem>
                  Pros
                  <List>
                    <Appear><ListItem>Easy to Create Userland Macros</ListItem></Appear>
                    <Appear><ListItem>Can be <ExtLink to="https://autohotkey.com/docs/Scripts.htm#ahk2exe">Packaged</ExtLink> as Native Executables (.exe)</ListItem></Appear>
                    <Appear><ListItem>Easy to Accept <ExtLink to="https://autohotkey.com/docs/commands/InputBox.htm">Input</ExtLink> from Users</ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Cons
                  <List>
                    <Appear><ListItem>Non-Traditional Programming Models</ListItem></Appear>
                    <Appear><ListItem>Less Standard Library Coverage</ListItem></Appear>
                    <Appear><ListItem><ExtLink to="https://autohotkey.com/docs/commands/_Include.htm">Naive</ExtLink> Module System</ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide notes="">
            <Heading caps>-WHAT-</Heading>
            <Heading textColor="secondary" size={4} caps>Batch</Heading>
            <List>
              <Appear>
                <ListItem>
                  Pros
                  <List>
                    <Appear><ListItem>Already Known <ExtLink to="http://ss64.com/nt/">CLI Commands</ExtLink></ListItem></Appear>
                    <Appear><ListItem>Can be <ExtLink to="http://stackoverflow.com/questions/20645326/safest-way-to-run-bat-file-from-powershell-script">Called</ExtLink> from and <ExtLink to="http://stackoverflow.com/questions/24940243/running-cmd-command-in-powershell">Used</ExtLink> in PowerShell</ListItem></Appear>
                    <Appear><ListItem>Lowest Common Denominator on Windows</ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Cons
                  <List>
                    <Appear><ListItem>Poor Standard Library Coverage</ListItem></Appear>
                    <Appear><ListItem>Poor Flow Control</ListItem></Appear>
                    <Appear><ListItem>No Module System</ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide notes="">
            <Heading caps>-WHAT-</Heading>
            <Heading textColor="secondary" size={4} caps>IFTTT / Zapier</Heading>
            <List>
              <Appear>
                <ListItem>
                  Pros
                  <List>
                    <Appear><ListItem>Codeless</ListItem></Appear>
                    <Appear><ListItem>Automate Interactions with <ExtLink to="https://zapier.com/zapbook/">Hundreds</ExtLink> of Apps and Services</ListItem></Appear>
                    <Appear><ListItem>Extremely Useful for <ExtLink to="https://zapier.com/zapbook/buffer/">Marketing</ExtLink></ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Cons
                  <List>
                    <Appear><ListItem>No System-Level Interactions</ListItem></Appear>
                    <Appear><ListItem>IFTTT: Limited to Simple A-to-B Interactions</ListItem></Appear>
                    <Appear><ListItem>Zapier: <ExtLink to="https://zapier.com/pricing/">Limited Free Plan</ExtLink></ListItem></Appear>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor="black" transition={["fade"]}>
            <Heading textColor="secondary" fit lineHeight={1.5}>So now I have all these scripts...</Heading>
            <Image src={images.searching.replace("/", "")}/>
            <Appear>
              <Heading textColor="secondary" fit lineHeight={1.5}>Where do I put them? How do they work?</Heading>
            </Appear>
          </Slide>
          <Slide>
            <Heading caps>-WHERE-</Heading>
            <Heading fit caps size={4} textColor="secondary">Git: It's Not Just for Developers</Heading>
            <List>
              <Appear><ListItem>Version control for any file type.</ListItem></Appear>
              <Appear><ListItem>Documentation can be made and viewed in the same place as your scripts.</ListItem></Appear>
              <Appear><ListItem>Free hosting available: GitHub, BitBucket, GitLab</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps>Git Resources</Heading>
            <List>
              <ListItem><ExtLink to="http://rogerdudler.github.io/git-guide/">Git - The Simple Guide</ExtLink></ListItem>
              <ListItem><ExtLink to="https://www.gitkraken.com/">Git Kraken (excellent Git client with GUI)</ExtLink></ListItem>
              <ListItem><ExtLink to="http://commonmark.org/">Markdown (handy documenation format)</ExtLink></ListItem>
              <ListItem><ExtLink to="https://raw.githack.com/">raw.githack.com (download files directly from Git)</ExtLink></ListItem>
              <ListItem><ExtLink to="https://docs.labtechsoftware.com/LabTech10/Default.htm#UsingLabTech/Scripts/CreatingScripts/Advanced/FunctionReference/FileFunctions/FileDownloadURL.htm">LabTech File Download Function</ExtLink></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
          );
  }
}
