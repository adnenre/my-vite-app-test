import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "react-novice-button";

function App() {
  return (
    <>
      <div>
        <a
          href="https://www.npmjs.com/package/react-novice-button"
          target="_blank"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <h3> Button shape</h3>
        <Button $variant="primary" $shape="flat">
          pill
        </Button>
        <Button $variant="primary" $shape="round-sm">
          round-sm
        </Button>
        <Button $variant="primary" $shape="round">
          round
        </Button>
        <Button $variant="primary" $shape="pill">
          pill
        </Button>
      </div>

      <div className="card">
        <h3> Button variant</h3>
        <Button $variant="primary">primary</Button>
        <Button $variant="secondary">secondary</Button>
        <Button $variant="success">success</Button>
        <Button $variant="warning">warning</Button>
        <Button $variant="danger">danger</Button>
        <Button $variant="black">black</Button>
        <Button $variant="info">info</Button>
      </div>

      <div className="card">
        <h3>Button size</h3>
        <Button $variant="primary" $size="xs">
          primary
        </Button>
        <Button $variant="secondary" $size="sm">
          secondary
        </Button>

        <Button $variant="danger" $size="md">
          danger
        </Button>
        <Button $variant="warning" $size="lg">
          warning
        </Button>
        <Button $variant="black" $size="xl">
          black
        </Button>
        <Button $variant="info" $size="xxl">
          info
        </Button>
      </div>
      <div className="card">
        <h3>Button all variant</h3>
        <Button $variant="primary" $size="md">
          primary
        </Button>
        <Button $variant="secondary" $size="md">
          secondary
        </Button>
        <Button $variant="danger" $size="md">
          danger
        </Button>
        <Button $variant="warning" $size="md">
          warning
        </Button>
        <Button $variant="black" $size="md">
          black
        </Button>
        <Button $variant="info" $size="md">
          info
        </Button>
      </div>
      <div className="card">
        <p>p1 as primary1</p>
        <Button style={{ color: "#000000" }} $variant="primary1" $size="md">
          p1
        </Button>
        <Button style={{ color: "#000000" }} $variant="primary2" $size="md">
          p2
        </Button>
        <Button style={{ color: "#000000" }} $variant="primary3" $size="md">
          p3
        </Button>
        <Button $variant="primary4" $size="md">
          p4
        </Button>
        <Button $variant="primary5" $size="md">
          p5
        </Button>
        <Button $variant="primary6" $size="md">
          p6
        </Button>
        <Button $variant="primary7" $size="md">
          p7
        </Button>
        <Button $variant="primary8" $size="md">
          p8
        </Button>
        <Button $variant="primary9" $size="md">
          p9
        </Button>
        <Button $variant="primary10" $size="md">
          p5
        </Button>
      </div>
      <div className="card">
        <p>s1 as success1</p>
        <Button style={{ color: "#000000" }} $variant="success1" $size="md">
          s1
        </Button>
        <Button style={{ color: "#000000" }} $variant="success2" $size="md">
          s2
        </Button>
        <Button style={{ color: "#000000" }} $variant="success3" $size="md">
          s3
        </Button>
        <Button $variant="success4" $size="md">
          s4
        </Button>
        <Button $variant="success5" $size="md">
          s5
        </Button>
        <Button $variant="success6" $size="md">
          s6
        </Button>
        <Button $variant="success7" $size="md">
          s7
        </Button>
        <Button $variant="success8" $size="md">
          s8
        </Button>
        <Button $variant="success9" $size="md">
          s9
        </Button>
        <Button $variant="success10" $size="md">
          s5
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the React logos to find the package on npmjs and learn more
      </p>
    </>
  );
}

export default App;
