class PortFolioTheme {
  constructor(theme) {
    this.background = theme.background || "#fff";
    this.titleColor = theme.titleColor || "#000";
    this.titleFont = theme.titleFont || "400 13px Inter,sans-serif";
    this.defaultColor = theme.defaultColor || "#ff7d00";
    this.pageHeadingColor = theme.pageHeadingColor || "#000";
    this.pageHeadingFont = theme.pageHeadingFont || "900 13px Inter,sans-serif";
    this.subTitleColor = theme.subTitleColor || "#ff7d00";
    this.subTitleFont = theme.subTitleFont || "400 13px Inter,sans-serif";
  }
}

export { PortFolioTheme };
