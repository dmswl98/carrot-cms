import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "carrot-cms" }];
};

export default function Page() {
  return <h1 className="text-2xl text-blue-600">carrot-cms</h1>;
}
