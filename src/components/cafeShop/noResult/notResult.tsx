import Style from './notResult.style';

const NotResult = ({ message }: { message: string }) => {
  return (
    <Style.Layout>
      <span>{message}</span>
    </Style.Layout>
  );
};

export default NotResult;
