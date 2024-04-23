import {
  IconBrandCodesandbox,
  IconBrandGithub,
  IconBrandNpm,
} from "@tabler/icons-react";

import { Button } from "react-novice-button";
const DocLinks = () => {
  return (
    <div className="doc-container">
      <p className="read-the-docs">
        <a
          href="https://codesandbox.io/p/sandbox/sleepy-tess-42hngn?file=%2Fsrc%2FApp.tsx"
          target="_blank"
        >
          <Button $shape="pill" $variant="black" $link className="column">
            <IconBrandCodesandbox size={30} />
            <p> CodeSandbox</p>
          </Button>
        </a>
      </p>
      <p className="read-the-docs">
        <a
          href="https://www.npmjs.com/package/react-novice-button"
          target="_blank"
        >
          <Button $shape="pill" $variant="black" $link className="column">
            <IconBrandNpm size={30} />
            <p>NPM</p>
          </Button>
        </a>
      </p>
      <p className="read-the-docs">
        <a
          href="https://github.com/adnenre/react-novice-button"
          target="_blank"
        >
          <Button $shape="pill" $variant="black" $link className="column">
            <IconBrandGithub size={30} />
            <p>github</p>
          </Button>
        </a>
      </p>
    </div>
  );
};

export default DocLinks;
