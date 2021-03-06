import React from "react";

import { Icon } from "../icons";

const ReportPath = () => [
  <path
    d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"
    key="path0"
  />
];

const ReportIcon = Icon.extend.attrs({
  children: ReportPath
})``;

export default ReportPath;
export { ReportIcon };
