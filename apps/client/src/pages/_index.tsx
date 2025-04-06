import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "carrot-cms" }];
};

export default function Page() {
  return <h1>carrot-cms</h1>;
}
