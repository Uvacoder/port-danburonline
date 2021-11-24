import { Document, Html, DocumentHead, Main, BlitzScript } from "blitz"

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <title>Daniel Burger — Neurotech Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Full-stack software engineer with several years of interdisciplinary work experience in a technologically diverse background dedicated to clean code and lean architectures. Currently, I'm developing brain-machine interface software at IDUN Technologies and studying web development with a focus on spatial computing at Middlesex University."
        />
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
