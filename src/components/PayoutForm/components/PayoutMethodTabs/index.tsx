import { PayoutMethodTab } from "./PayoutMethodTab";
import { useState } from "react";
import { PayoutMethodTabsContainer } from "./PayoutMethodTabs.styled";

const TABS = ["Банки", "Наличные", "Курьер"];

export const PayoutMethodTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PayoutMethodTabsContainer>
        {TABS.map((label, index) => (
          <PayoutMethodTab
            key={label}
            label={label}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </PayoutMethodTabsContainer>
    </>
  );
};
