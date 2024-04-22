import { ContentItem } from "../category/Card";
import { Button } from "react-novice-button";
import { uniqueId } from "../utils";
const flat: ContentItem[] = [
  {
    component: Button,
    props: {
      $variant: "primary",
      $shape: "flat",
    },
    label: "Button",
    type: "",
    key: uniqueId(),
  },
];

const roundSM: ContentItem[] = [
  {
    component: Button,
    props: { $variant: "primary", $shape: "round-sm" },
    label: "round-sm",
    type: "",
    key: uniqueId(),
  },
];
const round: ContentItem[] = [
  {
    component: Button,
    props: { $variant: "primary", $shape: "round" },
    label: "round",
    type: "",
    key: uniqueId(), // Unique identifier for this item
  },
];
const pill: ContentItem[] = [
  {
    component: Button,
    props: { $variant: "primary", $shape: "pill" },
    label: "pill",
    type: "",
    key: uniqueId(),
  },
];
const variant: ContentItem[] = [
  {
    component: Button,
    props: { $variant: "primary" },
    label: "primary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "secondary" },
    label: "secondary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "success" },
    label: "success",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "warning" },
    label: "warning",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "danger" },
    label: "danger",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "black" },
    label: "black",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "info" },
    label: "info",
    type: "",
    key: uniqueId(),
  },
];

const sizeXS: ContentItem[] = [
  {
    component: Button,
    props: { $size: "xs", $variant: "primary" },
    label: "primary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "xs", $variant: "secondary" },
    label: "secondary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "xs", $variant: "success" },
    label: "success",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "xs", $variant: "warning" },
    label: "warning",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "xs", $variant: "danger" },
    label: "danger",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "xs", $variant: "black" },
    label: "black",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "xs", $variant: "info" },
    label: "info",
    type: "",
    key: uniqueId(),
  },
];
const sizeSM: ContentItem[] = [
  {
    component: Button,
    props: { $size: "sm", $variant: "primary" },
    label: "primary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "sm", $variant: "secondary" },
    label: "secondary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "sm", $variant: "success" },
    label: "success",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "sm", $variant: "warning" },
    label: "warning",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "sm", $variant: "danger" },
    label: "danger",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "sm", $variant: "black" },
    label: "black",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "sm", $variant: "info" },
    label: "info",
    type: "",
    key: uniqueId(),
  },
];
const sizeMD: ContentItem[] = [
  {
    component: Button,
    props: { $size: "md", $variant: "primary" },
    label: "primary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "md", $variant: "secondary" },
    label: "secondary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "md", $variant: "success" },
    label: "success",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "md", $variant: "warning" },
    label: "warning",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "sm", $variant: "danger" },
    label: "danger",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "md", $variant: "black" },
    label: "black",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "md", $variant: "info" },
    label: "info",
    type: "",
    key: uniqueId(),
  },
];
const sizeLG: ContentItem[] = [
  {
    component: Button,
    props: { $size: "lg", $variant: "primary" },
    label: "primary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "lg", $variant: "secondary" },
    label: "secondary",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "lg", $variant: "success" },
    label: "success",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "lg", $variant: "warning" },
    label: "warning",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "lg", $variant: "danger" },
    label: "danger",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "lg", $variant: "black" },
    label: "black",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $size: "lg", $variant: "info" },
    label: "info",
    type: "",
    key: uniqueId(),
  },
];
const variantPrimary: ContentItem[] = [
  {
    component: Button,
    style: { color: "#000" },
    props: { $variant: "primary1", title: '$variant="primary1' },
    label: "p1",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    style: { color: "#000" },
    props: { $variant: "primary2", title: '$variant="primary2' },
    label: "p2",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    style: { color: "#000" },
    props: { $variant: "primary3", title: '$variant="primary3' },
    label: "p3",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "primary4" },
    label: "p4",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "primary5" },
    label: "p5",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "primary6" },
    label: "p6",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "primary7" },
    label: "p7",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "primary8" },
    label: "p8",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "primary9" },
    label: "p9",
    type: "",
    key: uniqueId(),
  },
  {
    component: Button,
    props: { $variant: "primary10" },
    label: "p10",
    type: "",
    key: uniqueId(),
  },
];

const variantSuccess: ContentItem[] = [
  {
    component: Button,
    style: { color: "#000" },

    props: { $variant: "success1", title: '$variant="success1' },

    label: "s1",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    style: { color: "#000" },

    props: { $variant: "success2", title: '$variant="success2' },

    label: "s2",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    style: { color: "#000" },

    props: { $variant: "success3", title: '$variant="success3' },

    label: "s3",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "success4" },

    label: "s4",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "success5" },

    label: "s5",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "success6" },

    label: "s6",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "success7" },

    label: "s7",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "success8" },

    label: "s8",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "success9" },

    label: "s9",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "success10" },

    label: "s10",

    type: "",

    key: uniqueId(),
  },
];
const variantLime: ContentItem[] = [
  {
    style: { color: "#000" },
    component: Button,

    props: { $variant: "lime1", title: '$variant="lime1' },

    label: "l1",

    type: "",

    key: uniqueId(),
  },

  {
    style: { color: "#000" },
    component: Button,

    props: { $variant: "lime2", title: '$variant="lime2' },

    label: "l2",

    type: "",

    key: uniqueId(),
  },

  {
    style: { color: "#000" },
    component: Button,

    props: { $variant: "lime3", title: '$variant="lime3' },

    label: "l3",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "lime4" },

    label: "l4",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "lime5" },

    label: "l5",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "lime6" },

    label: "l6",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "lime7" },

    label: "l7",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "lime8" },

    label: "l8",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "lime9" },

    label: "l9",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "lime10" },

    label: "l10",

    type: "",

    key: uniqueId(),
  },
];

const variantInfo: ContentItem[] = [
  {
    style: { color: "#000" },
    component: Button,

    props: { $variant: "info1", title: '$variant="info1' },

    label: "i1",

    type: "",

    key: uniqueId(),
  },

  {
    style: { color: "#000" },
    component: Button,

    props: { $variant: "info2", title: '$variant="info2' },

    label: "i2",

    type: "",

    key: uniqueId(),
  },

  {
    style: { color: "#000" },
    component: Button,

    props: { $variant: "info3", title: '$variant="info3' },

    label: "i3",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "info4" },

    label: "i4",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "info5" },

    label: "i5",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "info6" },

    label: "i6",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "info7" },

    label: "i7",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "info8" },

    label: "i8",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "info9" },

    label: "i9",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "info10" },

    label: "i10",

    type: "",

    key: uniqueId(),
  },
];
const variantWarning: ContentItem[] = [
  {
    component: Button,
    style: { color: "#000" },

    props: {
      $variant: "warning1",

      title: '$variant="warning1',
    },

    label: "w1",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    style: { color: "#000" },

    props: {
      $variant: "warning2",

      title: '$variant="warning2',
    },

    label: "w2",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    style: { color: "#000" },

    props: {
      $variant: "warning3",

      title: '$variant="warning3',
    },

    label: "w3",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "warning4" },

    label: "w4",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "warning5" },

    label: "w5",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "warning6" },

    label: "w6",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "warning7" },

    label: "w7",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "warning8" },

    label: "w8",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "warning9" },

    label: "w9",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "warning10" },

    label: "w10",

    type: "",

    key: uniqueId(),
  },
];
const variantDark: ContentItem[] = [
  {
    component: Button,
    style: { color: "#000" },

    props: {
      $variant: "dark1",

      title: '$variant="dark1',
    },

    label: "b1",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    style: { color: "#000" },

    props: {
      $variant: "dark2",

      title: '$variant="dark2"',
    },

    label: "b2",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: {
      $variant: "dark3",

      title: '$variant="dark3',
    },

    label: "b3",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "dark4" },

    label: "b4",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "dark5" },

    label: "b5",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "dark6" },

    label: "b6",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "dark7" },

    label: "b7",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "dark8" },

    label: "b8",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "dark9" },

    label: "b9",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,

    props: { $variant: "dark10" },

    label: "b10",

    type: "",

    key: uniqueId(),
  },
];

const variantDanger = [
  {
    component: Button,
    style: { color: "#000" },

    props: {
      $variant: "danger1",

      title: '$variant="dark1',
    },

    label: "d1",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    style: { color: "#000" },

    props: {
      $variant: "danger2",

      title: '$variant="dark2',
    },

    label: "d2",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    style: { color: "#000" },

    props: {
      $variant: "danger3",

      title: '$variant="dark3',
    },

    label: "d3",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "danger4" },

    label: "d4",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "danger5" },

    label: "d5",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "danger6" },

    label: "d6",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "danger7" },

    label: "d7",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "danger8" },

    label: "d8",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "danger9" },

    label: "d9",

    type: "",

    key: uniqueId(),
  },

  {
    component: Button,
    props: { $variant: "danger10" },

    label: "d10",

    type: "",

    key: uniqueId(),
  },
];

export const data = {
  shape: {
    flat,
    roundSM,
    round,
    pill,
  },
  variant,
  sizeXS,
  sizeSM,
  sizeMD,
  sizeLG,
  variantPrimary,
  variantSuccess,
  variantLime,
  variantInfo,
  variantWarning,
  variantDanger,
  variantDark,
};
