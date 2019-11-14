import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
export const Time = styled.Text`
  color: #999;
  font-size: 12px;
  margin-top: 4px;
  max-width: 120px;
`;
