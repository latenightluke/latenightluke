export default function Render({ if: show, children }) {
  return show === true ? children : null;
}
