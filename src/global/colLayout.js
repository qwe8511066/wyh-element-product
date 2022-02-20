
import lodash from "lodash";
//布局的col数
export const layoutArray = [1, 2, 3, 4, 6]
const _container = {
  controlType: "container",
  path: "@/components/customePage/publicComponent/container/",
  classes: "",
  //对应的类型：
  //container、container-lg、container-md、container-sm、container-xs
  type: "container",
  animation: {},
}
const _row = {
  controlType: "row",
  path: "@/components/customePage/publicComponent/row/",
  classes: "",
  styleClass: {
    rowWidthModel: "grid",
    rowWidth: 12,

    mobileFlexDirection: "flex-col",
    mdFlexDirection: "flex-row",
    desktopFlexDirection: "flex-row",

    mobileJustifyContent: "justify-start",
    mdJustifyContent: "justify-start",
    desktopJustifyContent: "justify-start",

    mobileItemsContent: "items-start",
    mdItemsContent: "items-start",
    desktopItemsContent: "items-start",

    mobileSpaceX: 0,
    mdSpaceX: 0,
    desktopSpaceX: -1,

    mobileSpaceY: 0,
    mdSpaceY: 0,
    desktopSpaceY: -1,
  },
  animation: {},
}
const _col = {
  classes: "",
  colList: [],
  controlType: "col",
  path: "@/components/customePage/publicComponent/col/",
  layouts: [],
  styleClass: {
    desktopWidthModel: "grid",
    desktopWidth: '',
    mdWidthModel: "grid",
    mdWidth: '',
    mobileWidthModel: "grid",
    mobileWidth: 12,
    mobileColFlex: "",
    mdColFlex: "",
    desktopColFlex: "",
  },
  animation: {},
}

export function initLayoutList() {
  let layoutList = []
  for (let index = 0; index < layoutArray.length; index++) {
    let col = [];
    const desktopType = 12 / layoutArray[index];
    for (let i = 0; i < layoutArray[index]; i++) {
      const cobyCol = lodash.cloneDeep(_col)
      cobyCol.styleClass.desktopWidth = desktopType;
      cobyCol.styleClass.mdWidth = desktopType;
      col.push(cobyCol);
    }
    layoutList.push({
      container: _container,
      row: _row,
      col: col,
    });
  }
  return layoutList;
}