// utils.js

const colorMap = {
  "#00E5FF": "0,229,255",
  "#A855F7": "168,85,247",
  "#10B981": "16,185,129",
  "#F59E0B": "245,158,11",
  "#EF4444": "239,68,68",
};

export const hexToRgb = (color) => colorMap[color] || "0,229,255";
