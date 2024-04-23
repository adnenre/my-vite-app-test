import "./App.css";
import ButtonCard, { ButtonShape } from "./category/ButtonCard";
import { data } from "./data";
import DocLinks from "./category/DocLinks";

function App() {
  return (
    <>
      <DocLinks />

      <ButtonShape title="Button Shape" contentItem={data.shape.flat} />
      <ButtonCard title="Button icon" contentItem={data.buttonIcon} />
      <ButtonCard title="Button Variant" contentItem={data.variant} />
      <ButtonCard title="Button Size xs" contentItem={data.sizeXS} />
      <ButtonCard title="Button size sm" contentItem={data.sizeSM} />
      <ButtonCard title="Button size md" contentItem={data.sizeMD} />
      <ButtonCard title="Button Size lg" contentItem={data.sizeLG} />
      <ButtonCard
        title="variant primary1 => primary10"
        contentItem={data.variantPrimary}
      />
      <ButtonCard
        title="variant success1 => success10"
        contentItem={data.variantSuccess}
      />
      <ButtonCard
        title="variant lime1 => lime10"
        contentItem={data.variantLime}
      />
      <ButtonCard
        title="variant info1 => info10"
        contentItem={data.variantInfo}
      />
      <ButtonCard
        title="variant warning1 => warning10"
        contentItem={data.variantWarning}
      />
      <ButtonCard
        title="variant danger1 => danger10"
        contentItem={data.variantDanger}
      />
      <ButtonCard
        title="variant dark1 => dark10"
        contentItem={data.variantDark}
      />

      <DocLinks />
    </>
  );
}

export default App;
