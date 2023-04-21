import { Section, NewBeatCardGrid } from "@/components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setBeatsDisplayMode } from "@/redux/slices/beats";

export default function BeatsRelatedSection(props) {
  const { activeItems } = useSelector((state) => state?.beats) || [];
  console.log("activeItems xx", activeItems);

  //Limit the number of items to 10

  const limit = 10;
  const limitedItems = activeItems.slice(0, limit);

  useEffect(() => {
    // dispatch(setBeatsDisplayMode("shop"));
  }, []);
  return (
    <Section subClassName="padding-x-estilo2 padding-y-estilo2 gap-8 flex flex-col">
      <h1 className="text-titulo2-regular">
        {props.title}
        {props.children}{" "}
      </h1>
      <NewBeatCardGrid beats={limitedItems} />
    </Section>
  );
}