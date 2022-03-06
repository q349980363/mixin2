// const nv1 = require("@/assets/images/nv.svg");
// const nv2 = require("@/assets/images/nv1.svg");
// const nv3 = require("@/assets/images/nv2.svg");

const list = {
  nv1: "",
  // nv2,
  // nv3,
};

export const SvgList = (p) => {
  const url = list[p.name];
  return <img src={url} alt="" />;
};
