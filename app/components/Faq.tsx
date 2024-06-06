import Image from "next/image";
import light from "../assets/light1feature.svg";
import light2 from "../assets/llight2feature.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div id="faq" className=" bg-[#040201] relative flex flex-col justify-center items-center w-full px-4 md:px-6 gap-14 py-20  overflow-visible  ">
      <Image
        className=" z-20 absolute top-[-150.71px] pointer-events-none  w-[1180px] h-[1221px] overflow-x-hidden left-1/2  shrink-0 -translate-x-1/2 "
        alt=""
        src={light}
      />

      <Image
        src={light2}
        alt="elipse"
        className=" z-30 w-full absolute pointer-events-none  !m-[0] top-[-300.87px]  max-w-full left-1/2   -translate-x-1/2   h-[1221px] shrink-0  "
      />
      <div className="  flex flex-col justify-center gap-4 items-center ">
        <div className=" w-fit shadow-[0px_3px_4px_rgba(142,_142,_142,_0.25)_inset,_0px_0px_0px_1px_rgba(44,_64,_94,_0.06),_0px_1px_1px_rgba(44,_64,_94,_0.04),_0px_2px_4px_rgba(44,_64,_94,_0.08)] rounded-[900px] bg-black box-border  flex flex-row items-center justify-center py-1 px-2.5 gap-[6px] text-left text-[14px] text-white font-geist border-[1px] border-solid border-gray">
          <div className="w-2 relative shadow-[0px_0px_0px_4px_rgba(241,_102,_58,_0.24)] rounded-[50%] bg-[#fc4f2d] h-2" />
          <p className="relative leading-[20px] opacity-[0.8]">Deoxys state-of-the-art features blockchain</p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-[48px]  lg:text-[55.9px]  tracking-[-1.09px] leading-[58px] font-medium font-aeonik text-transparent !bg-clip-text [background:linear-gradient(177.7deg,_#fff,_rgba(255,_255,_255,_0.66))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block">
            Still have questions ?
          </h1>
          <p className=" text-[17px] leading-[24px] md:max-w-[571px] text-white text-center inline-block opacity-[0.6]">
            Lorem ipsum dolor sit amet consectetur. Laoreet magna fermentum ut mi bibendum euismod varius quis odio. Vitae vestibulum adipi
          </p>
        </div>
      </div>

      <div className=" w-full flex flex-col gap-5  lg:max-w-3xl">
        <Accordion className=" border-[1px] border-solid border-gray bg-[rgb(31,31,31)] text-white text-2xl rounded-xl p-5" type="single" collapsible>
          <AccordionItem className="" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-[18px] text-gray3 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical]">
              Lorem ipsum dolor sit amet consectetur. Dolor consequat tellus fames et viverra neque. Hac diam sed integer non arcu non justo
              scelerisque ultrices. Amet cursus massa congue nulla nullam. Quam non sit auctor ornare augue volutpat ultrices suscipit sit. Massa
              tincidunt blandit tincidunt adipiscing mattis in fermentum arcu egestas. Viverra ut ultrices lectus vitae at. Faucibus pulvinar dolor
              vitae erat nisl luctus. A eu viverra{" "}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="bg-[rgb(31,31,31)] text-white border-[1px] border-solid border-gray text-2xl rounded-xl p-5" type="single" collapsible>
          <AccordionItem className="" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-[18px] text-gray3 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical]">
              Lorem ipsum dolor sit amet consectetur. Dolor consequat tellus fames et viverra neque. Hac diam sed integer non arcu non justo
              scelerisque ultrices. Amet cursus massa congue nulla nullam. Quam non sit auctor ornare augue volutpat ultrices suscipit sit. Massa
              tincidunt blandit tincidunt adipiscing mattis in fermentum arcu egestas. Viverra ut ultrices lectus vitae at. Faucibus pulvinar dolor
              vitae erat nisl luctus. A eu viverra{" "}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="bg-[rgb(31,31,31)] text-white border-[1px] border-solid border-gray text-2xl rounded-xl p-5" type="single" collapsible>
          <AccordionItem className="" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-[18px] text-gray3 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical]">
              Lorem ipsum dolor sit amet consectetur. Dolor consequat tellus fames et viverra neque. Hac diam sed integer non arcu non justo
              scelerisque ultrices. Amet cursus massa congue nulla nullam. Quam non sit auctor ornare augue volutpat ultrices suscipit sit. Massa
              tincidunt blandit tincidunt adipiscing mattis in fermentum arcu egestas. Viverra ut ultrices lectus vitae at. Faucibus pulvinar dolor
              vitae erat nisl luctus. A eu viverra{" "}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="bg-[rgb(31,31,31)] text-white border-[1px] border-solid border-gray text-2xl rounded-xl p-5" type="single" collapsible>
          <AccordionItem className="" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-[18px] text-gray3 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical]">
              Lorem ipsum dolor sit amet consectetur. Dolor consequat tellus fames et viverra neque. Hac diam sed integer non arcu non justo
              scelerisque ultrices. Amet cursus massa congue nulla nullam. Quam non sit auctor ornare augue volutpat ultrices suscipit sit. Massa
              tincidunt blandit tincidunt adipiscing mattis in fermentum arcu egestas. Viverra ut ultrices lectus vitae at. Faucibus pulvinar dolor
              vitae erat nisl luctus. A eu viverra{" "}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="bg-[rgb(31,31,31)] text-white border-[1px] border-solid border-gray text-2xl rounded-xl p-5" type="single" collapsible>
          <AccordionItem className="" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-[18px] text-gray3 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:9] [-webkit-box-orient:vertical]">
              Lorem ipsum dolor sit amet consectetur. Dolor consequat tellus fames et viverra neque. Hac diam sed integer non arcu non justo
              scelerisque ultrices. Amet cursus massa congue nulla nullam. Quam non sit auctor ornare augue volutpat ultrices suscipit sit. Massa
              tincidunt blandit tincidunt adipiscing mattis in fermentum arcu egestas. Viverra ut ultrices lectus vitae at. Faucibus pulvinar dolor
              vitae erat nisl luctus. A eu viverra{" "}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
