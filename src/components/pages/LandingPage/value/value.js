import React from 'react';
import './value.css';
import valueimg from '../../../../static/design/valueimg.jpg';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import { MdAnalytics, MdOutlineArrowDropDown } from 'react-icons/md';
import { HiShieldCheck } from 'react-icons/hi';
import { MdCancel } from 'react-icons/md';

const data = [
  {
    icon: <HiShieldCheck />,
    heading: "abc",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: <MdCancel />,
    heading: "def",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: <MdAnalytics />,
    heading: "ghi",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
];

const Value = () => {
  const [className, setClassName] = React.useState(null);

  return (
    <section className="value-wrapper">
      <div className="paddings innerWidth value-container">
        {/* Left side */}
        <div className="value-left">
        <div className="value-image-container">
            <img src={valueimg} alt="value" style={{ width: '610px', alignContent:'center'}} />
        </div>

        </div>
        {/* Right side */}
        <div className="flexColStart value-right">
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">Explore this website</span>

          <Accordion
            className="value-accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`value-accordionItem ${className}`}
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter value-accordionButton">
                    <AccordionItemState>
                      {({ expanded }) => {
                        if (expanded) {
                          setClassName("expanded");
                        } else {
                          setClassName("collapsed");
                        }
                      }}
                    </AccordionItemState>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
