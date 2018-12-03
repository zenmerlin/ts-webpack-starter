// Custom types must be defined for any non-code assets being imported 
// See https://webpack.js.org/guides/typescript/#importing-other-assets for
// more information.

declare module "*.png" {
  const content: any;
  export default content;
}
