import Style from './selectKeywordsLayout.style';

const SelectKeywordsLayout = ({ children }: { children: React.ReactNode }) => {
  return <Style.Layout>{children}</Style.Layout>;
};

export default SelectKeywordsLayout;
